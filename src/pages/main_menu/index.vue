<template>
  <q-page padding>

    <draggable
      :list="main_menu"
      v-bind="dragOptions"
      class="list-group"
      ghost-class="ghost"
      group="main"
      @end="endDrag"
      item-key="name"
    >
      <template #item="{ element }">
        <div v-if="element.menu_items.length>0">
          <q-expansion-item
            group="g"
           header-class="handle"
            class="draggable-item q-mb-md"
            :icon="element.icon"
            :label="element.name ? element.name : element.page.name"
            expand-separator
          >
            <div class="text-right">
              <q-btn icon="edit" label="Редактировать меню" no-caps flat @click="openEditModal(element)"/>
            </div>
            <draggable
              :list="element.menu_items"
              v-bind="dragOptions"
              class="list-group q-pa-md"
              ghost-class="ghost"
              :group="`sub-${element.id}`"
              @end="endDrag"
              item-key="name"
            >
              <template #item="{ element }">
                <q-item class="draggable-item q-mb-md">
                  <q-item-section avatar>
                    <q-icon :name="element.icon" />
                  </q-item-section>
                  <q-item-section>
                    {{ element.name ? element.name : element.page.name }}
                  </q-item-section>
                  <q-item-section side>
                    <q-btn icon="edit" flat @click="openEditModal(element)"/>
                  </q-item-section>
                </q-item>
              </template>
            </draggable>
          </q-expansion-item>
        </div>
        <div v-else>
          <q-item class="draggable-item q-mb-md">
            <q-item-section avatar>
              <q-icon :name="element.icon" />
            </q-item-section>
            <q-item-section>
              {{ element.name }}
            </q-item-section>
            <q-item-section side>
              <q-btn icon="edit" flat @click="openEditModal(element)"/>
            </q-item-section>
          </q-item>
        </div>
      </template>
    </draggable>

  </q-page>
  <q-dialog v-model="editModal">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-form @submit="menuStore.updateMenu(menu_for_edit)">
      <q-card-section>
        <div class="text-h6">Редактирование элемента меню</div>
      </q-card-section>

      <q-card-section class="q-pt-none">


          <q-input outlined
            label="Название меню"
                   v-model="menu_for_edit.name"
                   lazy-rules
                   :rules="[val => val && val.length > 0 || 'Это обязательное поле']"
          />
        <p>Для выбора иконки перейдите на <a target="_blank" href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:settings:FILL@0;wght@400;GRAD@0;opsz@24&icon.platform=android">эту страницу</a>  </p>
        <q-input outlined
                 label="Иконка"
                 v-model="menu_for_edit.icon"
                 class="q-mb-md"
        />

          <q-select outlined label="Пункт меню виден для ролей"
                    :options="auth.roles"
                    option-label="name"
                    option-value="id"
                    v-model="menu_for_edit.role_can_view"
                    lazy-rules
                    emit-value
                    map-options
                    multiple
                    use-chips
                    :rules="[ val => val  || 'Это обязательное поле']"
          />

      </q-card-section>

      <q-card-actions align="right" class="bg-white ">
        <q-btn unelevated no-caps label="Сохранить" color="positive" type="submit" v-close-popup/>
        <q-btn unelevated no-caps label="Отмена" color="dark" v-close-popup />
      </q-card-actions>
      </q-form>
    </q-card>

  </q-dialog>
</template>
<script setup>
import { defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';
defineComponent(draggable);
import { useQuasar } from 'quasar'
const $q = useQuasar()
import {useMenuStore} from "stores/menu"

import {api} from "boot/axios";
const menuStore = useMenuStore()


const main_menu = ref([])


menuStore.main_menu.forEach((menu_item)=>{
  main_menu.value.push(menu_item)
})

const is_loading = ref(true);
const editModal = ref(false);
const menu_for_edit = ref({});



const dragOptions = {
  animation: 200,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
};

const openEditModal = (menu_obj) => {
  menu_for_edit.value = menu_obj
  editModal.value = true
}

const endDrag = async () => {
  $q.loading.show()
  let result = []
  main_menu.value.forEach((menu_item)=>{
    let temp = {
      main_menu:menu_item.id,
      menu_items:[]
    }
    if (menu_item.menu_items.length>0){
      menu_item.menu_items.forEach((sub_item)=>{
        temp.menu_items.push(sub_item.id)
      })
    }
    result.push(temp)

  })
  await api.post('api/common_data/update_main_menu_order',{data:result})
  await menuStore.getMenu()
  $q.loading.hide()
}


</script>
<style lang="sass">
.draggable-item
  border: 1px solid #d3d3d3
.ghost
  opacity: 0.7
  background-color: #dadada

</style>
