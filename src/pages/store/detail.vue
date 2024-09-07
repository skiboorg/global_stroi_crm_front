<script setup>
import {useRoute} from "vue-router";
import {computed, onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import BackButton from "components/BackButton.vue";
import AddButton from "components/AddButton.vue";
import {useCommonStore} from "stores/common_data"
const commonStore = useCommonStore()
import {useNotify} from "src/helpers/notify";

const route = useRoute()
const store = ref(null)
const loading = ref(false)
const addMaterialModal = ref(false)
const addToolModal = ref(false)
const material_file = ref(null)
const tool_file = ref(null)
const tool_doc_file = ref(null)
const users = ref([])
const selected_user = ref(null)
const tab = ref('mat')

const units = [
  'шт.',
  'м.',
]

const conditions = [
  'Новый',
  'Б/У',
]

const new_material = ref({
  store:route.params.store_id,
  name:null,
  serial_numbers:null,
  unit:null,
  init_amount:null,
})

const new_tool = ref({
  store:route.params.store_id,
  name:null,
  serial_number:null,
  price:null,
  condition:null,

})
const tool_columns = [
  { name: 'select', align: 'left',  label: '',  sortable: false},
  { name: 'id', align: 'left',  label: '#', field: row => row.id ,  sortable: true},
  { name: 'image', align: 'left',  label: 'Изображение', field: row => row.image ,  sortable: true},
  { name: 'name', align: 'left',  label: 'Наименование', field: row => row.name ,  sortable: true},
  { name: 'serial_numbers', align: 'left',  label: 'Серийный номер', field: row => row.serial_number ,  sortable: true},
  { name: 'condition', align: 'left',  label: 'Состояние', field: row => row.condition ,  sortable: true},
  { name: 'price', align: 'left',  label: 'Цена', field: row => row.price ,  sortable: true},
  { name: 'is_avaiable', align: 'left',  label: 'На складе', field: row => row.is_avaiable ? 'Да' : 'Выдан' ,  sortable: true},
]

const material_columns = [
  { name: 'select', align: 'left',  label: '',  sortable: false},
  { name: 'id', align: 'left',  label: '#', field: row => row.id ,  sortable: true},
  { name: 'image', align: 'left',  label: 'Изображение', field: row => row.image ,  sortable: true},
  { name: 'name', align: 'left',  label: 'Наименование', field: row => row.name ,  sortable: true},
  { name: 'serial_numbers', align: 'left',  label: 'Серийные номера', field: row => row.serial_numbers ,  sortable: true},
  { name: 'init_amount', align: 'left',  label: 'Поступило', field: row => row.init_amount ,  sortable: true},
  { name: 'amount', align: 'left',  label: 'Oстаток', field: row => row.amount ,  sortable: true},
  { name: 'give_amount', align: 'left',  label: 'Передать', field: row => row.amount ,  sortable: true},
]

const have_selected = computed(()=>{
  if (store.value){
    const isFirstArrayValid = store.value.materials.some(item => item.is_selected &&  item.give_amount && item.give_amount > 0);
    const isSecondArrayValid = store.value.tools.some(item => item.is_selected);
    return isFirstArrayValid || isSecondArrayValid;
  }
})

onBeforeMount (async ()=>{
  await getStore()
  users.value= await commonStore.getUsers(null,true)
})

const getStore = async () => {

  const resp = await api(`/api/material_store/store/${route.params.store_id}?full=true`)
  store.value = resp.data
}

const materialFormSubmit = async ()=>{
  loading.value = true
  let formData = new FormData()

  for (let [k,v] of Object.entries(new_material.value)){
    formData.append(k,v)
    // formData.append(k,JSON.stringify(v))
  }
  if (material_file.value){
    formData.append('file',material_file.value)
  }
  try{
    const response = await api({
      method: "post",
      url: "/api/material_store/store_material",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    useNotify('positive' ,'Материал добавлен на склад')
    await getStore()
    loading.value = false
    addMaterialModal.value = false
  }catch (e) {
    useNotify('negative' ,'Проверьте входные данные')
    loading.value = false
  }
}

const toolFormSubmit = async ()=>{
  loading.value = true
  let formData = new FormData()

  for (let [k,v] of Object.entries(new_tool.value)){
    formData.append(k,v)
    // formData.append(k,JSON.stringify(v))
  }
  if (tool_file.value){
    formData.append('file',tool_file.value)
  }
  if (tool_doc_file.value){
    formData.append('doc',tool_doc_file.value)
  }
  try{
    const response = await api({
      method: "post",
      url: "/api/material_store/store_tool",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    useNotify('positive' ,'Инструмент добавлен на склад')
    await getStore()
    loading.value = false
    addToolModal.value = false
  }catch (e) {
    useNotify('negative' ,'Проверьте входные данные')
    loading.value = false
  }
}

const deleteItem = async (item_type,id) => {
  await api.delete(`/api/material_store/${item_type}/${id}`)
  await getStore()
}

const filterFn =  (val, update) => {
  update(async () => {
    if(val){
      loading.value=true
      const response = await api(`/api/user/user?q=${val}&page_size=10000`)
      users.value = response.data
      loading.value=false
    }
  })
}

const createGiveAct = async ()=>{
  loading.value = true
  const selected_materials = store.value.materials.filter(item=>item.is_selected && item.give_amount > 0)
  const selected_tools = store.value.tools.filter(item=>item.is_selected)

  const response = await api.post(`/api/material_store/create_give_act`,{
    store:route.params.store_id,
    who_get:selected_user.value,
    selected_materials,
    selected_tools
  })
  await getStore()
  loading.value = false
}

</script>

<template>
<q-page padding>
  <div v-if="store">
    <div class="flex items-center justify-between q-mb-lg">
      <BackButton/>

      <p class="no-margin text-h6 text-bold">Информация о складе ID {{store.id}}</p>
      <q-space/>
      <AddButton label="Добавить материал" @click="addMaterialModal = true" class="q-mr-md"/>
      <AddButton label="Добавить инструмент" @click="addToolModal = true"/>
    </div>
    <div v-if="have_selected" class="row q-col-gutter-md">
      <div class="col-9">
        <q-select class="q-mb-xs" dense outlined v-model="selected_user"
                  :loading="loading"
                  :options="users"  option-label="fio" label="Выберите пользователя"
                  map-options
                  option-value="id"
                  emit-value
                  use-input
                  @filter="filterFn"

                  clearable

        >      <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section side>
              <q-item-label>{{scope.opt.role?.name}}</q-item-label>
              <q-item-label caption>Роль</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.fio }}</q-item-label>
              <q-item-label caption>ФИО</q-item-label>
            </q-item-section>
          </q-item>
        </template>
        </q-select>
      </div>
      <div class="col-3">
        <q-btn no-caps unelevated color="positive" :disable="!selected_user" :loading="loading" @click="createGiveAct" label="Передать выбранное"/>
      </div>

    </div>

    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="mat" label="Материалы" />
      <q-tab name="tool" label="Инструменты" />

    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mat">
        <q-table
          flat
          :rows="store?.materials"
          :columns="material_columns"
          hide-pagination
          table-header-class="table-header"
          row-key="id"
          selection="multiple"
          class="q-mb-lg"
        >

          <template v-slot:header="props">
            <q-tr :props="props" class="bg-grey-2">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                <span class="text-bold"> {{ col.label }}</span>
              </q-th>
              <q-th auto-width />
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                v-for="col in props.cols"

                :key="col.name"
                :props="props">

                <pre v-if="col.name === 'id'">{{ props.rowIndex + 1 }}</pre>
                <span v-else-if="col.name === 'select'"  ><q-checkbox  v-model="props.row.is_selected"/></span>
                <q-img v-else-if="col.name === 'image'" :ratio="16/9" fit="contain" :src="col.value"/>
                <p v-else-if="col.name === 'serial_numbers' ">
                  <q-input style="width: 200px" type="textarea"
                           label="Серийные номера"
                           :disable="!props.row.is_selected"
                           outlined dense v-model="props.row.serial_numbers"/>
                </p>
                <p v-else-if="col.name === 'give_amount' ">
                  <q-input style="width: 200px" type="number"  @change="props.row.give_amount > props.row.amount ? props.row.give_amount = props.row.amount : null"
                           :disable="!props.row.is_selected"
                           label="Кол-во"
                           class="q-mb-sm"
                           outlined dense v-model="props.row.give_amount"/>
                  <q-input style="width: 200px" type="textarea"
                           label="Серийные номера"
                           :disable="!props.row.is_selected"
                           outlined dense v-model="props.row.give_serial_numbers"/>
                </p>
                <pre v-else>{{col.value  }}</pre>
                <!--          <span v-if="col.name !== 'serial_numbers'">{{ col.value }}</span>-->
              </q-td>

              <q-td auto-width>
                <div class="q-gutter-md">
                  <q-btn icon="visibility" flat dense @click="$router.push(`/store/material/${props.row.id}`)"/>
                  <!--            <EditButton dense @click="showModal(props.row)"/>-->
                  <AddButton dense color="negative" icon="delete" @click="deleteItem('store_material',props.row.id)"/>
                </div>

              </q-td>
            </q-tr>

          </template>
        </q-table>
      </q-tab-panel>

      <q-tab-panel name="tool">
        <q-table
          flat
          :rows="store?.tools"
          :columns="tool_columns"
          hide-pagination
          table-header-class="table-header"
          row-key="id"
          selection="multiple"
        >

          <template v-slot:header="props">
            <q-tr :props="props" class="bg-grey-2">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                <span class="text-bold"> {{ col.label }}</span>
              </q-th>
              <q-th auto-width />
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                v-for="col in props.cols"
                :key="col.name"
                :props="props">

                <pre v-if="col.name === 'id'">{{ props.rowIndex + 1 }}</pre>
                <span v-else-if="col.name === 'select'"  ><q-checkbox :disable="!props.row.is_avaiable" v-model="props.row.is_selected"/></span>
                <q-img v-else-if="col.name === 'image'" :ratio="16/9" fit="contain" :src="col.value"/>
                <pre v-else>{{col.value  }}</pre>
                <!--          <span v-if="col.name !== 'serial_numbers'">{{ col.value }}</span>-->
              </q-td>
              <q-td auto-width>
                <div class="q-gutter-md">
                  <q-btn icon="visibility" flat dense @click="$router.push(`/store/tool/${props.row.id}`)"/>
                  <!--            <EditButton dense @click="showModal(props.row)"/>-->
                  <AddButton dense color="negative" icon="delete" @click="deleteItem('store_tool',props.row.id)"/>
                </div>

              </q-td>
            </q-tr>

          </template>
        </q-table>
      </q-tab-panel>

    </q-tab-panels>
<!-- -->




    <q-dialog v-model="addMaterialModal">
      <q-card style="width: 700px; max-width: 100vw;">
        <q-form @submit="materialFormSubmit">
          <q-card-section class="q-pb-none">
            <q-input dense outlined label="Название" class="q-mb-md" v-model="new_material.name"/>
            <div class="row">
              <div class="col-6">
                <q-input type="number" dense outlined label="Изначальное кол-во" class="q-mb-md" v-model="new_material.init_amount"/>
              </div>
              <div class="col-6">
                <q-select  outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="new_material.unit" :options="units" label="Ед. измерения"/>

              </div>
            </div>



            <q-input class="q-mb-md" dense outlined label="Серийные номера" type="textarea" v-model="new_material.serial_numbers"/>
            <q-file   outlined dense  label="Фото" v-model="material_file" />
          </q-card-section>
          <q-card-actions align="center">
            <q-btn label="Сохранить" :loading="loading" no-caps color="positive" type="submit"/>
            <q-btn label="Отмена" :loading="loading" no-caps color="dark" v-close-popup/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="addToolModal">
      <q-card style="width: 700px; max-width: 100vw;">
        <q-form @submit="toolFormSubmit">
          <q-card-section class="q-pb-none">
            <q-input dense outlined label="Название" class="q-mb-md" v-model="new_tool.name"/>
            <div class="row">
              <div class="col-6">
                <q-input type="number" dense outlined label="Стоимость" class="q-mb-md" v-model="new_tool.price"/>
              </div>
              <div class="col-6">
                <q-select  outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="new_tool.condition" :options="conditions" label="Состояние"/>

              </div>
            </div>



            <q-input class="q-mb-md" dense outlined label="Серийный номер"  v-model="new_tool.serial_number"/>
            <q-file class="q-mb-md"  outlined dense  label="Фото" v-model="tool_file" />
            <q-file   outlined dense  label="Товарный чек, счет на покупку" v-model="tool_doc_file" />
          </q-card-section>
          <q-card-actions align="center">
            <q-btn label="Сохранить" :loading="loading" no-caps color="positive" type="submit"/>
            <q-btn label="Отмена" :loading="loading" no-caps color="dark" v-close-popup/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>

</q-page>
</template>

