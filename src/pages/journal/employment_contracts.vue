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
          В данный раздел вносятся все трудовые договоры, заключаемые организацией с физическими лицами с обязательным указанием их номеров, даты заключения и срока действия договора.<br><br>
          Номер система создает автоматически, для составления трудового договора укажите номер, следующий за последним номеров, указанным в системе. <br><br>
          В течение 12 часов трудовой договор можно удалить, в этом случае создавая новый трудовой договор номер будет такой же как в удаленном. <br><br>
          При создании трудового договора, его электронный образ обязательно необходимо загрузить в систему, в противном случае, нужно будет удалить документ и создать его заново.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="flex items-center justify-between q-mb-md">

      <p class="no-margin text-h6 text-bold">Трудовые договора</p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
    </div>
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-10">
        <q-input dense v-model="query.q" label="Поиск по ФИО сотрудника, сроку действия" outlined />
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
          <DateInput dense  class="q-mb-md" v-model="newItem.date" label="Дата заключения" @selected="dateSelected"/>
          <q-input class="q-mb-md" outlined dense  label="Ф.И.О сотрудника" v-model="newItem.worker_fio" />
          <q-select  outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="newItem.period"
                     :options="period_types" label="Срок действия"/>
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
const commonStore = useCommonStore()

const columns = [
  { name: 'inner_id', align: 'left',  label: 'Номер', field: row => row.inner_id ,  sortable: true},
  { name: 'date', align: 'left',  label: 'Дата заключения', field: row => new Date(row.date).toLocaleDateString() ,  sortable: true},
  { name: 'worker_fio', align: 'left',  label: 'Ф.И.О сотрудника', field: row => row.worker_fio ,  sortable: true},
  { name: 'period', align: 'left',  label: 'Срок действия', field: row => row.period ,  sortable: true},
  { name: 'file', align: 'left',  label: 'Файл', field: row => row.file ? `<a href="${row.file}" target="_blank">Открыть</a>` : 'Нет' ,  sortable: true},
]

const itemModal = ref(false)
const infoModal = ref(false)
const selectedItem = ref({})
const editId = ref(null)

const period_types = [
  'Бессрочный',
  '1 мес',
  '6 мес',
  '1 год',
  'Другое',
]

const newItem = ref({
  id:null,
  date:null,
  worker_fio:null,
  period:null,
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
  const response = await api(`/api/catalog/employment_contract?page=${page.value}&q=${query.value.q}`)
  rows.value = response.data.results

  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}

const deleteItem = async (id) => {
  await api.delete(`/api/catalog/employment_contract/${id}`)
  await getPageData()
}

const showModal = (item) => {
  if (item){
    newItem.value = item
    newItem.value.date = newItem.value.date ? new Date(newItem.value.date).toLocaleDateString() : null
  }else {
    newItem.value = {
      id:null,
      date:null,
      worker_fio:null,
      period:null,
      file:null
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
      url: `/api/catalog/employment_contract/${newItem.value.id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }else {
    resp = await api({
      method: "post",
      url: "/api/catalog/employment_contract",
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

</script>
