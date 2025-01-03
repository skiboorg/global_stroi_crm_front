<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center justify-between q-mb-md">

      <p class="no-margin text-h6 text-bold">Приказы </p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
    </div>
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-10">
        <q-input dense v-model="query.q" label="Поиск по названию, номеру, получателю" outlined />
      </div>
      <div class="col-12 col-md-2">
        <q-btn class="full-width" label="Найти" no-caps color="primary" unelevated @click="getPageData"/>
      </div>
    </div>
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-pagination
      v-model:pagination="initialPagination"
      :loading = is_loading
      table-header-class="table-header"
      :pagination="initialPagination"
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
            <span v-html="col.value"></span>
          </q-td>
          <q-td auto-width>
            <div class="q-gutter-md">
              <EditButton dense @click="showModal(props.row)"/>
              <DeleteButton  @confirm="deleteItem(props.row.id)"/>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-pagination
      v-model="page"
      :max="maxPages"
      :max-pages="6"
      direction-links
      boundary-numbers
      @update:model-value = setPage
      icon-first="skip_previous"
      icon-last="skip_next"
      icon-prev="fast_rewind"
      icon-next="fast_forward"
    />
  </q-page>
  <q-dialog v-model="itemModal">

    <q-card style="width: 700px; max-width: 100vw;">
      <q-form @submit="formSubmit">
        <q-card-section class="q-pb-none">

          <q-input v-if="newItem.inner_id" class="q-mb-md" outlined dense  label="Внутренний номер"  v-model="newItem.inner_id" />
          <q-input outlined dense  label="Наименование документа" v-model="newItem.name" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
          <DateInput dense  class="q-mb-md" v-model="newItem.date" label="Дата издания" @selected="dateSelected"/>
          <q-input class="q-mb-md" outlined dense  label="Ответственное лицо за исполнение"  v-model="newItem.responsible_fio" />
          <DateInput dense  class="q-mb-md" v-model="newItem.sign_date" label="Дата ознакомления с приказом" @selected="singDateSelected"/>
          <p v-if="newItem.file"><a :href="newItem.file" target="_blank">Загруженный ранее файл</a></p>
          <q-file class="q-mb-md"  outlined dense  label="Файл" v-model="file" />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="Сохранить" type="submit" no-caps color="positive"/>
          <q-btn label="Отмена" no-caps color="dark" v-close-popup/>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>

</template>
<script setup>

import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";

import AddButton from "components/AddButton.vue";
import EditButton from "components/EditButton.vue";

import {useCommonStore} from "stores/common_data"
import DateInput from "components/DateInput.vue";
import {useNotify} from "src/helpers/notify";
import DeleteButton from "components/DeleteButton.vue";
import BackButton from "components/BackButton.vue";
import PageDescription from "components/PageDescription.vue";
const commonStore = useCommonStore()

const columns = [
  { name: 'inner_id', align: 'left',  label: 'Номер', field: row => row.inner_id ,  sortable: true},
  { name: 'name', align: 'left',  label: 'Наименование', field: row => row.name ,  sortable: true},
  { name: 'date', align: 'left',  label: 'Дата издания', field: row => new Date(row.date).toLocaleDateString() ,  sortable: true},
  { name: 'responsible_fio', align: 'left',  label: 'Ответственное лицо за исполнение', field: row => row.responsible_fio ,  sortable: true},
  { name: 'sign_date', align: 'left',  label: 'Дата ознакомления с приказом', field: row => new Date(row.sign_date).toLocaleDateString() ,  sortable: true},
  { name: 'file', align: 'left',  label: 'Файл', field: row => row.file ? `<a href="${row.file}" target="_blank">Открыть</a>` : 'Нет' ,  sortable: true},
]

const itemModal = ref(false)
const infoModal = ref(false)
const selectedItem = ref({})
const editId = ref(null)

const send_types = [
  'Почтой',
  'голубями',
  'Другое',
]

const newItem = ref({
  id:null,
  name:null,
  inner_id:null,
  date:null,
  sign_date:null,
  responsible_fio:null,
  file:null
})

const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 15
  // rowsNumber: xx if getting data from a server
}

const page = ref(1)
const is_loading = ref(false)


const rows = ref([])
const maxPages = ref(5)
const file = ref(null)

const query = ref({
  q:'',
})
const setPage =  async () => {
  console.log(page.value)
  await getPageData()
}
onBeforeMount(async ()=>{
  await getPageData()
})

const getPageData = async () => {
  is_loading.value = !is_loading.value
  const response = await api(`/api/catalog/order?page=${page.value}&q=${query.value.q}`)
  rows.value = response.data.results

  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}

const deleteItem = async (id) => {
  await api.delete(`/api/catalog/order/${id}`)
  await getPageData()
}

const showModal = (item) => {
  if (item){
    newItem.value = item
    newItem.value.date = newItem.value.date ? new Date(newItem.value.date).toLocaleDateString() : null
    newItem.value.sign_date = newItem.value.sign_date ? new Date(newItem.value.sign_date).toLocaleDateString() : null
  }else {
    newItem.value = {
      id:null,
      name:null,
      inner_id:null,
      date:null,
      sign_date:null,
      responsible_fio:null,
    }
  }
  itemModal.value = true
}

const convertDate = (date) => {
  const splitted_date = date.split('.')
  return `${splitted_date[2]}-${splitted_date[1]}-${splitted_date[0]}`
}
const formSubmit = async () => {
  let formData = new FormData()
  delete newItem.value.file
  for (let [k,v] of Object.entries(newItem.value)){
    formData.append(k,JSON.stringify(v))
  }
  if (file.value){
    formData.append('file',file.value)
  }
  let resp
  if (newItem.value.id){
    resp = await api({
      method: "put",
      url: `/api/catalog/order/${newItem.value.id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }else {
    resp = await api({
      method: "post",
      url: "/api/catalog/order",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }
  useNotify(resp.data.success ? 'positive' : 'negative',resp.data.message)

  await getPageData()
  itemModal.value = false
  file.value = null

}

const dateSelected = (val)=>{
  newItem.value.date=new Date(val).toLocaleDateString()
}
const singDateSelected = (val)=>{
  newItem.value.sign_date=new Date(val).toLocaleDateString()
}

</script>
