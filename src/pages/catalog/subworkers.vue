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
          В данный раздел вносятся сведения о субподрядчиках, которые непосредственно работают на объекте Заказчика, с обязательным добавлением электронного образа договора.<br><br>
          В данном разделе предусмотрена возможность создания личного кабинета субподрядчика, для последующей работы в системе
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Подрядчики </p>
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

              <DeleteButton   @confirm="deleteItem(props.row.id)" />
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
          <q-checkbox v-if="!newItem.user" v-model="need_create_user" label="Создать пользователя?"/>
          <div v-if="need_create_user" class="row q-col-gutter-md ">
            <div class="col-12 col-md-4"><q-input outlined dense  label="Логин" v-model="userData.login" lazy-rules
                                                  :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/></div>
            <div class="col-12 col-md-4"><q-input outlined dense  label="Пароль" v-model="userData.password" lazy-rules
                                                  :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/></div>
            <div class="col-12 col-md-4"> <q-input  outlined dense  label="Telegram username" v-model="userData.telega_username" /></div>
          </div>
          <q-select outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="newItem.org_type" :options="org_types" label="Орг. форма"/>
          <q-input outlined dense  label="ФИО" v-model="newItem.fio" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
          <div class="row q-col-gutter-md ">
            <div class="col-12 col-md-4"><q-input outlined dense  label="ИНН" v-model="newItem.inn" lazy-rules
                                                  :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/></div>
            <div class="col-12 col-md-4"> <q-input  outlined dense  label="Телефон" mask="+7 (###) ###-##-##" fill-mask v-model="newItem.phone" /></div>
            <div class="col-12 col-md-4"><q-input  outlined dense  label="Почта" v-model="newItem.email" /></div>
          </div>



          <q-input class="q-mb-md" outlined dense  label="Место нахождения" v-model="newItem.place" />
          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-12 col-md-4"><q-input  outlined dense  label="Количество человек" v-model="newItem.people_num" /></div>
            <div class="col-12 col-md-4"><q-input  outlined dense  label="УД Высота" v-model="newItem.ud_h" /></div>
            <div class="col-12 col-md-4"><q-input  outlined dense  label="УД Электрика" v-model="newItem.ud_e" /></div>
          </div>

          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-12 col-md-3"><q-select outlined dense  map-options emit-value behavior="menu"  v-model="newItem.dogovor_type" :options="dogovor_types" label="Тип договора"/></div>
            <div class="col-12 col-md-3"> <q-input  outlined dense  label="Сумма договора" v-model="newItem.dogovor_summ" /></div>
            <div class="col-12 col-md-3"><DateInput dense   v-model="newItem.dogovor_date" label="Дата заключения договора" @selected="dateSelected"/></div>
            <div class="col-12 col-md-3"><DateInput dense  v-model="newItem.dogovor_done" label="Дата выполнения работ" @selected="doneSelected"/></div>
          </div>

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
  <q-dialog v-model="infoModal" >
    <q-card style="width: 700px; max-width: 100vw;">
      <q-card-section>
        <q-list separator>
          <q-item><q-item-section>ФИО</q-item-section><q-item-section>{{selectedItem.fio}}</q-item-section></q-item>
          <q-item><q-item-section>Организационная форма</q-item-section><q-item-section>{{selectedItem.org_type}}</q-item-section></q-item>
          <q-item><q-item-section>ИНН</q-item-section><q-item-section>{{selectedItem.inn}}</q-item-section></q-item>
          <q-item><q-item-section>Телефон</q-item-section><q-item-section>{{selectedItem.phone}}</q-item-section></q-item>
          <q-item><q-item-section>Почта</q-item-section><q-item-section>{{selectedItem.email}}</q-item-section></q-item>

          <q-item><q-item-section>Место нахождения</q-item-section><q-item-section>{{selectedItem.place}}</q-item-section></q-item>
          <q-item><q-item-section>Количество человек</q-item-section><q-item-section>{{selectedItem.people_num}}</q-item-section></q-item>
          <q-item><q-item-section>УД Высота</q-item-section><q-item-section>{{selectedItem.ud_h}}</q-item-section></q-item>
          <q-item><q-item-section>УД Электрика</q-item-section><q-item-section>{{selectedItem.ud_e}}</q-item-section></q-item>
          <q-item><q-item-section>Тип договора</q-item-section><q-item-section>{{selectedItem.dogovor_type}}</q-item-section></q-item>

          <q-item><q-item-section>Сумма договора</q-item-section><q-item-section>{{selectedItem.dogovor_summ}}</q-item-section></q-item>
          <q-item><q-item-section>Дата заключения</q-item-section><q-item-section>{{new Date(selectedItem.dogovor_date).toLocaleDateString() }}</q-item-section></q-item>
          <q-item><q-item-section>Дата выполнения работ</q-item-section><q-item-section>{{new Date(selectedItem.dogovor_done).toLocaleDateString() }}</q-item-section></q-item>


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
import DeleteButton from "components/DeleteButton.vue";
const commonStore = useCommonStore()

const columns = [
  { name: 'name', align: 'left',  label: 'ФИО', field: row => row.fio ,  sortable: true},
  { name: 'inn', align: 'left',  label: 'ИНН', field: row => row.inn ,  sortable: true},
  { name: 'phone', align: 'left',  label: 'Телефон', field: row => row.phone ,  sortable: true},
  { name: 'email', align: 'left',  label: 'E-Mail', field: row => row.email ? row.email : row.user?.email   ,  sortable: true},
  { name: 'login', align: 'left',  label: 'Логин', field: row => row.user ? row.user.username : 'Нет пользователя' ,  sortable: true},
]

const itemModal = ref(false)
const infoModal = ref(false)
const selectedItem = ref({})
const need_create_user = ref(false)

const dogovor_types = [
  'Договор подряда',
  'Нет'
]
const org_types = [
  'Самозанятый',
  'ИП',
  'OOO'
]

const userData = ref({
  login:null,
  password:null,
  telega_username:null
})

const newItem = ref({
  id:null,
  fio:null,
  user:null,
  org_type:null,
  inn:null,
  phone:null,
  email:null,
  place:null,
  people_num:null,
  ud_h:null,
  ud_e:null,
  dogovor_date:null,
  dogovor_type:null,
  dogovor_summ:null,
  dogovor_done:null,
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
  const response = await api(`/api/catalog/subworker?page=${page.value}&q=${query.value.q}`)
  rows.value = response.data.results

  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}

const deleteItem = async (id) => {
  await api.delete(`/api/catalog/subworker/${id}`)
  await getPageData()
}

const clearData = async () => {
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
      fio:null,
      user:null,
      org_type:null,
      inn:null,
      phone:null,
      email:null,
      place:null,
      people_num:null,
      ud_h:null,
      ud_e:null,
      dogovor_date:null,
      dogovor_type:null,
      dogovor_summ:null,
      dogovor_done:null,
      comment:null,
      link:null,

    }
  }
  itemModal.value = true
}
const formSubmit = async () => {
  let formData = new FormData()
  //delete newItem.value.file;
  for (let [k,v] of Object.entries(newItem.value)){
    formData.append(k,JSON.stringify(v))
  }
  if (need_create_user.value){
    formData.append('login',userData.value.login)
    formData.append('password',userData.value.password)
    formData.append('telega_username',userData.value.telega_username ? userData.value.telega_username.replace('@','') : null)
  }
  if (file.value){
    formData.append('file',file.value)
  }
  let resp
  if (newItem.value.id){
     resp = await api({
      method: "put",
      url: `/api/catalog/subworker/${newItem.value.id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }else {
     resp = await api({
      method: "post",
      url: "/api/catalog/subworker",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }
  useNotify(resp.data.success ? 'positive' : 'negative',resp.data.message)
  await getPageData()
  userData.value = {
    login:null,
    password:null
  }
  need_create_user.value = false
  itemModal.value = false

}

const dateSelected = (val)=>{
  newItem.value.dogovor_date=new Date(val).toLocaleDateString()
}
const doneSelected = (val)=>{
  newItem.value.dogovor_done=new Date(val).toLocaleDateString()
}
</script>
