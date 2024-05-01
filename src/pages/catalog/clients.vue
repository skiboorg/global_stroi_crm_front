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
          В данный раздел вносится данные всех клиенты, с которыми организация заключила договор (контракт), с обязательным добавлением электронного образа документа
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="flex items-center justify-between q-mb-md">

      <p class="no-margin text-h6 text-bold">Клиенты </p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
    </div>
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-10">
        <q-input dense v-model="query.q" label="Поиск по инн, фио, телефону" outlined />
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
            <span >{{ col.value }}</span>
          </q-td>
          <q-td auto-width>
            <div class="q-gutter-md">
              <EditButton dense @click="showModal(props.row)"/>
              <AddButton dense color="negative" icon="delete" @click="deleteItem(props.row.id)"/>
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
  <q-dialog v-model="itemModal" @hide="$router.go()">

    <q-card style="width: 700px; max-width: 100vw;">
      <q-form @submit="formSubmit">
        <q-card-section class="q-pb-none">
          <q-input outlined dense  label="Наименование" v-model="newItem.name" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
          <q-input outlined dense  label="ИНН" v-model="newItem.inn" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
          <q-input class="q-mb-md" outlined dense  label="Должность" v-model="newItem.job_title" />
          <q-input class="q-mb-md" outlined dense  label="ФИО" v-model="newItem.fio" />
          <q-input class="q-mb-md" outlined dense  label="Телефон" mask="+7 (###) ###-##-##" fill-mask v-model="newItem.phone" />
          <q-input class="q-mb-md" outlined dense  label="Почта" v-model="newItem.email" />
          <q-input class="q-mb-md" outlined dense  label="Наименование договора" v-model="newItem.dogovor_name" />
          <DateInput dense  class="q-mb-md" v-model="newItem.dogovor_date" label="Дата заключения договора" @selected="dateSelected"/>
          <DateInput dense  class="q-mb-md" v-model="newItem.dogovor_done" label="Дата выполнения работ" @selected="doneSelected"/>
          <q-input class="q-mb-md" outlined dense  label="Сумма договора" v-model="newItem.dogovor_summ" />
          <q-input class="q-mb-md" type="textarea" outlined dense  label="Примечание" v-model="newItem.comment" />
          <q-input class="q-mb-md" outlined dense  label="Ссылка" v-model="newItem.link" />
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

          <q-item><q-item-section>Наименование договора</q-item-section><q-item-section>{{selectedItem.dogovor_name}}</q-item-section></q-item>
          <q-item><q-item-section>Дата заключения</q-item-section><q-item-section>{{new Date(selectedItem.dogovor_date).toLocaleDateString() }}</q-item-section></q-item>
          <q-item><q-item-section>Дата выполнения работ</q-item-section><q-item-section>{{new Date(selectedItem.dogovor_done).toLocaleDateString() }}</q-item-section></q-item>

          <q-item><q-item-section>Сумма договора</q-item-section><q-item-section>{{selectedItem.dogovor_summ}}</q-item-section></q-item>

          <q-item><q-item-section>Примечание </q-item-section><q-item-section>{{selectedItem.comment}}</q-item-section></q-item>
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
import BackButton from "components/BackButton.vue";
const commonStore = useCommonStore()

const columns = [
  { name: 'name', align: 'left',  label: 'Название организации', field: row => row.name ,  sortable: true},
  { name: 'fio', align: 'left',  label: 'Контактное лицо', field: row => row.fio ,  sortable: true},
  { name: 'inn', align: 'left',  label: 'ИНН', field: row => row.inn ,  sortable: true},
  { name: 'dogovor_summ', align: 'left',  label: 'Сумма договора', field: row => row.inn ,  sortable: true},
  { name: 'phone', align: 'left',  label: 'Телефон', field: row => row.phone ,  sortable: true},

]

const itemModal = ref(false)
const infoModal = ref(false)
const selectedItem = ref({})
const editId = ref(null)


const newItem = ref({
  id:null,
  name:null,
  inn:null,
  job_title:null,
  fio:null,
  phone:null,
  email:null,
  dogovor_name:null,
  dogovor_date:null,
  dogovor_done:null,
  dogovor_summ:null,
  comment:null,
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
  const response = await api(`/api/catalog/client?page=${page.value}&q=${query.value.q}`)
  rows.value = response.data.results

  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}

const deleteItem = async (id) => {
  await api.delete(`/api/catalog/client/${id}`)
  await getPageData()
}

const showModal = (item) => {
  if (item){
    newItem.value = item

    newItem.value.dogovor_date = newItem.value.dogovor_date ? new Date(newItem.value.dogovor_date).toLocaleDateString() : null
    newItem.value.dogovor_done = newItem.value.dogovor_done ? new Date(newItem.value.dogovor_done).toLocaleDateString() : null
  }else {
    newItem.value = {
      id:null,
      name:null,
      inn:null,
      job_title:null,
      fio:null,
      phone:null,
      email:null,
      dogovor_name:null,
      dogovor_date:null,
      dogovor_done:null,
      dogovor_summ:null,
      comment:null,
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
      url: `/api/catalog/client/${newItem.value.id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    console.log(resp.data)
    await getPageData()
    useNotify('positive','Клиент обновлен')
  }else {
    const resp = await api({
      method: "post",
      url: "/api/catalog/client",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    useNotify('positive','Клиент создан')
    await getPageData()
  }
  itemModal.value = false






}
const dateSelected = (val)=>{
  newItem.value.dogovor_date=new Date(val).toLocaleDateString()
}
const doneSelected = (val)=>{
  newItem.value.dogovor_done=new Date(val).toLocaleDateString()
}
</script>
