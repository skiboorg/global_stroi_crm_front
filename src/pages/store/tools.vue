<script setup>
import {computed, onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import AddButton from "components/AddButton.vue";
import {useCommonStore} from "stores/common_data"
const commonStore = useCommonStore()
import {useNotify} from "src/helpers/notify";
import MaterialActs from "components/MaterialActs.vue";
import ToolActs from "components/ToolActs.vue";
import PageDescription from "components/PageDescription.vue";

const items = ref([])
const stores = ref([])
const tab = ref('items')
const selected_store = ref(null)
const loading = ref(false)
const addToolModal = ref(false)
const item_file = ref(null)
const doc_file = ref(null)
const users = ref([])
const selected_user = ref(null)

const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 50
}

const new_item = ref({
  store:null,
  name:null,
  serial_number:null,
  price:null,
  condition:null,
})

const conditions = [
  'Новый',
  'Б/У',
]

const item_columns = [
  { name: 'select', align: 'left',  label: '',  sortable: false},
  { name: 'id', align: 'left',  label: '#', field: row => row.id ,  sortable: true},
  { name: 'image', align: 'left',  label: 'Изображение', field: row => row.image ,  sortable: true},
  { name: 'store', align: 'left',  label: 'Склад',style: 'min-width: 100px; max-width: 200px; white-space: normal;', field: row => row.store?.address ,  sortable: true},
  { name: 'name', align: 'left', style: 'min-width: 200px; max-width: 300px; white-space: normal;', label: 'Наименование', field: row => row.name ,  sortable: true},
  { name: 'serial_numbers', align: 'left',  label: 'Серийный номер', field: row => row.serial_number ,  sortable: true},
  { name: 'condition', align: 'left',  label: 'Состояние', field: row => row.condition ,  sortable: true},
  { name: 'price', align: 'left',  label: 'Цена', field: row => row.price ,  sortable: true},
  { name: 'is_avaiable', align: 'left',  label: 'На складе', field: row => row.is_avaiable ? 'Да' : 'Выдан' ,  sortable: true},
]
onBeforeMount (async ()=>{
  await getItems()
  const resp = await api(`/api/material_store/store`)
  stores.value = resp.data
  users.value= await commonStore.getUsers(null,true)
})

const getItems = async () => {

  const resp = await api(`/api/material_store/store_tool`)
  items.value = resp.data
}

const have_selected = computed(()=>{
  if (items.value){
    return items.value.some(item => item.is_selected);
  }
})

const toolFormSubmit = async ()=>{
  loading.value = true
  let formData = new FormData()

  for (let [k,v] of Object.entries(new_item.value)){
    formData.append(k,v)
    // formData.append(k,JSON.stringify(v))
  }
  if (item_file.value){
    formData.append('file',item_file.value)
  }
  if (doc_file.value){
    formData.append('doc',doc_file.value)
  }
  try{
    const response = await api({
      method: "post",
      url: "/api/material_store/store_tool",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    useNotify('positive' ,'Инструмент добавлен на склад')
    await getItems()
    loading.value = false
    addToolModal.value = false
  }catch (e) {
    useNotify('negative' ,'Проверьте входные данные')
    loading.value = false
  }
}
const deleteItem = async (item_type,id) => {
  await api.delete(`/api/material_store/${item_type}/${id}`)
  await getItems()
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
  const selected_tools = items.value.filter(item=>item.is_selected)
  const response = await api.post(`/api/material_store/create_give_act`,{
    store:selected_store.value,
    who_get:selected_user.value,
    selected_tools,
  })
  await getItems()
  loading.value = false
}

</script>

<template>
  <PageDescription/>
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab name="items" label="Инструменты" />
    <q-tab name="docs" label="Акты" />

  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="items">

      <div class="row q-col-gutter-md q-mb-md">
        <div class="col-9">
          <q-select :options="stores" v-model="selected_store" clearable outlined dense emit-value option-label="address" option-value="id" map-options label="Выберите склад"/>
        </div>
        <div class="col-3">
          <AddButton label="Добавить" @click="addToolModal = true" class="q-mr-md"/>
        </div>
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
          <p v-if="!selected_store" class="text-negative">Выберите склад</p>
          <p v-if="!selected_user" class="text-negative">Выберите пользователя</p>
        </div>

      </div>

      <q-table
        flat
        :rows="selected_store ? items.filter(x=>x.store.id === selected_store) : items"
        :columns="item_columns"
        :pagination="initialPagination"
        table-header-class="table-header"
        row-key="id"
        selection="multiple"
        style="table-layout: fixed;"
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
              <span v-else-if="col.name === 'select'"  ><q-checkbox :disable="!props.row.is_avaiable" v-model="props.row.is_selected"/></span>
              <q-img v-else-if="col.name === 'image'" :ratio="16/9" fit="contain" :src="col.value"/>
              <p v-else>{{col.value  }}</p>
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
    <q-tab-panel name="docs">
     <ToolActs/>
    </q-tab-panel>
  </q-tab-panels>
  <q-dialog v-model="addToolModal">
    <q-card style="width: 700px; max-width: 100vw;">
      <q-form @submit="toolFormSubmit">
        <q-card-section class="q-pb-none">
          <q-select class="q-mb-md" :options="stores" v-model="new_item.store" clearable outlined dense emit-value option-label="address" option-value="id" map-options label="Выберите склад"/>

          <q-input dense outlined label="Название" class="q-mb-md" v-model="new_item.name"/>
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <q-input type="number" dense outlined label="Стоимость" class="q-mb-md" v-model="new_item.price"/>
            </div>
            <div class="col-6">
              <q-select  outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="new_item.condition" :options="conditions" label="Состояние"/>

            </div>
          </div>



          <q-input class="q-mb-md" dense outlined label="Серийный номер"  v-model="new_item.serial_number"/>
          <q-file class="q-mb-md"  outlined dense  label="Фото" v-model="item_file" />
          <q-file   outlined dense  label="Товарный чек, счет на покупку" v-model="doc_file" />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="Сохранить" :loading="loading" no-caps color="positive" type="submit"/>
          <q-btn label="Отмена" :loading="loading" no-caps color="dark" v-close-popup/>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

