<template>
  <q-page padding>
    <div class="flex items-center justify-between  q-mb-md">
      <p class="no-margin text-h6 text-bold">Структура организации</p>

      <AddButton label="Добавить" target="_blank" :href="`${URL}/admin/user/department/add/`"/>
    </div>

    <q-tree
      :nodes="departments"
      node-key="name"
      children-key="divisions"
      label-key="name"
      selected-color="primary"
      v-model:selected="selected"
      default-expand-all

    >
      <template v-slot:default-header="prop">
        <div class="flex items-center justify-between full-width">

          <div class="text-weight-bold text-primary">{{ prop.node.name }}</div>
          <div class="flex items-center">
            <p v-if="prop.node.leader"  class="q-mb-none text-grey-9 q-mr-md">
              Ответственный: {{prop.node.leader.fio}}
            </p>

            <EditButton v-if="prop.node.divisions" icon="edit" target="_blank" :href="`${URL}/admin/user/department/${prop.node.id}/change/`" flat />
          </div>

        </div>
      </template>

      <template v-slot:default-body="prop">

        <div class="" v-if="!prop.node.divisions">

          <q-list separator bordered>
            <q-item dense v-for="user in prop.node.users" :key="user.id" clickable @click="$router.push(`/user/${user.id}`)">
              <q-item-section>
                <q-item-label v-if="user.firstname">
                  {{user.lastname}} {{user.firstname}}{{user.surname}}
                </q-item-label>
                <q-item-label v-else>
                  {{user.username}}
                </q-item-label>
              </q-item-section>
              <q-item-section v-if="user.role">
                {{user.role.name}}
              </q-item-section>
              <q-item-section v-else>
                Роль не указана
              </q-item-section>
<!--              {{user}}-->
            </q-item>
          </q-list>
        </div>

      </template>
    </q-tree>

  </q-page>
</template>
<script setup>

import BackButton from "components/BackButton.vue";
import {computed, onBeforeMount, ref} from "vue";

import {useCommonStore} from "stores/common_data"
import EditButton from "components/EditButton.vue";
import AddButton from "components/AddButton.vue";
const commonStore = useCommonStore()
const URL = process.env.API_URL
const departments = computed(()=>{
  return commonStore.departments
})

const selected = ref('пп1')


</script>
<style lang="sass">

</style>
