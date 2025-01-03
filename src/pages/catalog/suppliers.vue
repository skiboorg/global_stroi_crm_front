<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Поставщики </p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
    </div>
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-10">
        <q-input dense v-model="query.q" label="Поиск по наименованию, инн, фио, телефону" outlined />
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
            @click="selectedItem = props.row,infoModal= true"
            :props="props">
            <span v-if="col.name==='file'"><a v-if="col.value" :href="col.value" target="_blank">Открыть</a> <span v-else>Нет</span> </span>
            <span v-else>{{ col.value }}</span>
          </q-td>
          <q-td auto-width>
            <div class="q-gutter-md">
              <EditButton dense @click="showModal(props.row)"/>
              <DeleteButton @confirm="deleteItem(props.row.id)"/>
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
          <q-input outlined dense  label="Наименование" v-model="newItem.name" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
        <q-input outlined dense  label="ИНН" v-model="newItem.inn" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
        <q-input class="q-mb-md" outlined dense  label="ФИО" v-model="newItem.fio" />
        <q-input class="q-mb-md" outlined dense  label="Телефон" mask="+7 (###) ###-##-##" fill-mask v-model="newItem.phone" />
        <q-input class="q-mb-md" outlined dense  label="Почта" v-model="newItem.email" />
        <q-input class="q-mb-md" outlined dense  label="Ссылка" v-model="newItem.link" />
        <q-checkbox class="q-mb-md"  label="Есть договор" v-model="newItem.have_dogovor" />
        <DateInput dense v-if="newItem.have_dogovor" class="q-mb-md" v-model="newItem.dogovor_date" label="Дата заключения" @selected="dateSelected"/>
        <q-select v-if="newItem.have_dogovor" outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="newItem.dogovor_type" :options="dogovor_types" label="Тип договора"/>
        <q-input class="q-mb-md" type="textarea" outlined dense  label="Адрес склада для самовывоза" v-model="newItem.store_address" />
        <q-input class="q-mb-md" type="textarea" outlined dense  label="Особенности получения грузов" v-model="newItem.goods_features" />
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
  <q-dialog v-model="infoModal">
    <q-card style="width: 700px; max-width: 100vw;">
      <q-card-section>
        <q-list separator>
          <q-item><q-item-section>Наименование</q-item-section><q-item-section>{{selectedItem.name}}</q-item-section></q-item>
          <q-item><q-item-section>ИНН</q-item-section><q-item-section>{{selectedItem.inn}}</q-item-section></q-item>
          <q-item><q-item-section>ФИО</q-item-section><q-item-section>{{selectedItem.fio}}</q-item-section></q-item>
          <q-item><q-item-section>Телефон</q-item-section><q-item-section>{{selectedItem.phone}}</q-item-section></q-item>
          <q-item><q-item-section>Почта</q-item-section><q-item-section>{{selectedItem.email}}</q-item-section></q-item>
          <q-item><q-item-section>Наличие договора</q-item-section><q-item-section>{{selectedItem.have_dogovor}}</q-item-section></q-item>
          <q-item><q-item-section>Дата заключения</q-item-section><q-item-section>{{new Date(selectedItem.dogovor_date).toLocaleDateString()}}</q-item-section></q-item>
          <q-item><q-item-section>Тип договора</q-item-section><q-item-section>{{selectedItem.dogovor_type}}</q-item-section></q-item>
          <q-item><q-item-section>Адрес склада для самовывоза</q-item-section><q-item-section>{{selectedItem.store_address}}</q-item-section></q-item>
          <q-item><q-item-section>Особенности получения грузов</q-item-section><q-item-section>{{selectedItem.goods_features}}</q-item-section></q-item>
          <q-item><q-item-section>Ссылка</q-item-section><q-item-section><a v-if="selectedItem.link" :href="selectedItem.link" target="_blank">Открыть</a></q-item-section></q-item>
          <q-item><q-item-section>Файл</q-item-section><q-item-section><a v-if="selectedItem.file" :href="selectedItem.file" target="_blank">Открыть</a></q-item-section></q-item>
        </q-list>
      </q-card-section>
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
import PageDescription from "components/PageDescription.vue";
const commonStore = useCommonStore()

const columns = [
  { name: 'name', align: 'left',  label: 'Наименование поставщика', field: row => row.name ,  sortable: true},
  { name: 'inn', align: 'left',  label: 'ИНН', field: row => row.inn ,  sortable: true},
  { name: 'phone', align: 'left',  label: 'Телефон', field: row => row.phone ,  sortable: true},
  { name: 'email', align: 'left',  label: 'E-Mail', field: row => row.email ,  sortable: true},
  { name: 'file', align: 'left',  label: 'Договор', field: row => row.file ,  sortable: true},
]

const itemModal = ref(false)
const infoModal = ref(false)
const selectedItem = ref({})
const editId = ref(null)

const dogovor_types = [
  'Разовый',
  'Нет'
]

const newItem = ref({
  id:null,
  name:null,
  inn:null,
  fio:null,
  phone:null,
  email:null,
  have_dogovor:false,
  dogovor_date:null,
  dogovor_type:null,
  store_address:null,
  goods_features:null,
  link:null,
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
  const response = await api(`/api/catalog/supplier?page=${page.value}&q=${query.value.q}`)
  rows.value = response.data.results

  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}

const deleteItem = async (id) => {
  await api.delete(`/api/catalog/supplier/${id}`)
  await getPageData()
}

const showModal = (item) => {
  if (item){
    newItem.value = item
    newItem.value.dogovor_date = newItem.value.dogovor_date ? new Date(newItem.value.dogovor_date).toLocaleDateString() : null
  }else {
    newItem.value = {
      id:null,
      name:null,
      inn:null,
      fio:null,
      phone:null,
      email:null,
      have_dogovor:false,
      dogovor_date:null,
      dogovor_type:null,
      store_address:null,
      goods_features:null,
      link:null,

    }
  }
  itemModal.value = true
}
const formSubmit = async () => {
  let formData = new FormData()
  delete newItem.value.file;
  for (let [k,v] of Object.entries(newItem.value)){
    formData.append(k,JSON.stringify(v))
  }
  if (file.value){
    formData.append('file',file.value)
  }
  if (newItem.value.id){
   const resp = await api({
      method: "put",
      url: `/api/catalog/supplier/${newItem.value.id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    console.log(resp.data)
    await getPageData()
    useNotify('positive','Поставщик успешно обновлен')
  }else {
   const resp = await api({
      method: "post",
      url: "/api/catalog/supplier",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    useNotify('positive','Поставщик успешно создан')
    await getPageData()
  }
  itemModal.value = false






}
const dateSelected = (val)=>{
  newItem.value.dogovor_date=new Date(val).toLocaleDateString()
}
</script>
