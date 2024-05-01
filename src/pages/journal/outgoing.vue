<template>
  <q-page padding>
    <q-expansion-item
      expand-separator
      icon="help"
      label="Описание раздела"
      class="q-mb-md"
    >
      <q-card>
        <q-card-section>
          В данный раздел вносятся все документы организации, направляемые контрагентам и государственным органам, с обязательным указанием исходящего номера.<br><br>
          Исходящий номер система создает автоматически, для составления документа укажите номер, следующий за последним номеров, указанным в системе (например, 02-04-24).<br><br>
          В течение 12 часов документ можно удалить, в этом случае создавая новый документ номер будет такой же как в удаленном документе. При создании исходящего документа, его электронный образ обязательно необходимо загрузить в систему, в противном случае, нужно будет удалить документ и создать его заново.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Исходящие </p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
    </div>
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-10">
        <q-input dense v-model="query.q" label="Поиск по названию, номеру, получателю, исполнителю" outlined />
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
  <q-dialog v-model="itemModal" @before-hide="clearData">

    <q-card style="width: 700px; max-width: 100vw;">
      <q-form @submit="formSubmit">
        <q-card-section class="q-pb-none">
          <q-input outlined dense  label="Наименование и содержание документа" v-model="newItem.name" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
          <q-input class="q-mb-md" outlined dense  label="Получатель" v-model="newItem.receiver" />

          <DateInput dense  class="q-mb-md" v-model="newItem.send_date" label="Дата отправки" @selected="dateSelected"/>
          <q-select  outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="newItem.send_method" :options="send_types" label="Способ отправки"/>
          <q-input class="q-mb-md" outlined dense  label="Ф.И.О исполнителя " v-model="newItem.executor_fio" />
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
const commonStore = useCommonStore()

const columns = [
  { name: 'inner_id', align: 'left',  label: 'Номер договора', field: row => row.inner_id ,  sortable: true},
  { name: 'name', align: 'left',  label: 'Наименование', field: row => row.name ,  sortable: true},
  { name: 'receiver', align: 'left',  label: 'Получатель', field: row => row.receiver ,  sortable: true},
  { name: 'send_method', align: 'left',  label: 'Способ отправки', field: row => row.send_method ,  sortable: true},
  { name: 'executor_fio', align: 'left',  label: 'Ф.И.О исполнителя ', field: row => row.executor_fio ,  sortable: true},
  { name: 'send_date', align: 'left',  label: 'Дата отправки', field: row => new Date(row.send_date).toLocaleDateString() ,  sortable: true},
  { name: 'file', align: 'left',  label: 'Файл', field: row => row.file ? `<a href="${row.file}" target="_blank">Открыть</a>` : 'Нет' ,  sortable: true},


]

const itemModal = ref(false)
const infoModal = ref(false)
const selectedItem = ref({})
const editId = ref(null)


const send_types = [
  'Почтой',
  'Другое',
]

const newItem = ref({
  id:null,
  name:null,
  receiver:null,
  send_method:null,
  executor_fio:null,
  send_date:null,
  file:null,
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
  const response = await api(`/api/catalog/outgoing?page=${page.value}&q=${query.value.q}`)
  rows.value = response.data.results

  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}

const deleteItem = async (id) => {
  await api.delete(`/api/catalog/outgoing/${id}`)
  await getPageData()
}

const showModal = (item) => {
  if (item){
    newItem.value = item
      newItem.value.send_date = newItem.value.send_date ? new Date(newItem.value.send_date).toLocaleDateString() : null
  }else {
    newItem.value = {
      id:null,
      name:null,
      receiver:null,
      send_method:null,
      executor_fio:null,
      send_date:null,
    }
  }
  itemModal.value = true
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
      url: `/api/catalog/outgoing/${newItem.value.id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }else {
    resp = await api({
      method: "post",
      url: "/api/catalog/outgoing",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }
  useNotify(resp.data.success ? 'positive' : 'negative',resp.data.message)

    //await getPageData()
  itemModal.value = false
  file.value = null

}
const dateSelected = (val)=>{
  newItem.value.send_date=new Date(val).toLocaleDateString()
}

const clearData = async () => {
  await getPageData()
}

</script>
