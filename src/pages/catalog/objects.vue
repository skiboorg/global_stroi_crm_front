<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center justify-between q-mb-md">

      <p class="no-margin text-h6 text-bold">Проекты </p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
    </div>
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      :loading="is_loading"
      row-key="name"
      hide-pagination
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
            class="cursor-pointer"
            @click="$router.push(`/catalog/objects/${props.row.id}`)"
            :props="props">
            <span >{{ col.value }}</span>
          </q-td>
          <q-td auto-width>
            <div class="q-gutter-md" v-if="props.row?.procent_done < 100">

              <EditButton dense @click="showModal(props.row)"/>
              <DeleteButton   @confirm="deleteItem(props.row.id)" />
            </div>

          </q-td>
        </q-tr>

      </template>
    </q-table>
  </q-page>
  <q-dialog v-model="itemModal">
    <q-card style="width: 700px; max-width: 100vw;">
      <q-form @submit.prevent="save">
      <q-card-section class="q-pb-none">
        <q-input outlined label="Название"  v-model="newItem.name" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
        <q-input outlined type="textarea"  label="Адрес" v-model="newItem.address" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>

        <q-select outlined v-model="newItem.subworker"
                  :loading="is_loading"
                  :options="subworkers"
                  option-label="fio"
                  label="Выберите субподрядчика (поиск по фио, инн, телефону)"
                  map-options
                  option-value="id"

                  emit-value

                  class="q-mb-md"
                  use-input

                  @filter="filterFn"
                  clearable
        >
          <template v-slot:selected-item="scope">
              {{ scope.opt.fio  ? scope.opt.fio : newItem.subworker_name}}
          </template>
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{scope.opt.fio}}</q-item-label>
                <q-item-label caption>ФИО</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.inn }}</q-item-label>
                <q-item-label caption>ИНН</q-item-label>
              </q-item-section> <q-item-section>
                <q-item-label>{{ scope.opt.phone }}</q-item-label>
                <q-item-label caption>Телефон</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6"><q-input outlined label="Сумма договора"  v-model="newItem.total" lazy-rules
                                                :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/></div>
          <div class="col-12 col-md-6"><q-input outlined label="Aванс"  v-model="newItem.avans"/></div>


        </div>
<!--        <div class="row q-col-gutter-md">-->
<!--          <div class="col-12 col-md-4"><q-input outlined label="Выполнено работ в %"  v-model="newItem.procent_done"/></div>-->
<!--          <div class="col-12 col-md-6"><q-input outlined label="Сумма к оплате" class="q-mb-md" v-model="newItem.to_pay"/></div>-->
<!--          <div class="col-12 col-md-6"><q-input outlined label="Остаток оплаты" class="q-mb-md" v-model="newItem.pay_ostatok"/></div>-->
<!--        </div>-->
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="Сохранить" type="submit" no-caps color="positive" />
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
const commonStore = useCommonStore()
import {useAuthStore} from "stores/auth"
import DeleteButton from "components/DeleteButton.vue";
import BackButton from "components/BackButton.vue";
import PageDescription from "components/PageDescription.vue";
const authStore = useAuthStore()

const columns = [
  { name: 'name', align: 'left',  label: 'Название', field: row => row.name ,  sortable: true},
  { name: 'address', align: 'left',  label: 'Адрес', field: row => row.address ,  sortable: true},
  { name: 'subworker_name', align: 'left',  label: 'Субподрядчик', field: row => row.subworker_name ,  sortable: true},
  { name: 'total', align: 'left',  label: 'Сумма договора', field: row => formatPrice(row.total) ,  sortable: true},
  { name: 'avans', align: 'left',  label: 'Сумма аванса', field: row => formatPrice(row.avans) ,  sortable: true},
  { name: 'procent_done', align: 'left',  label: 'Выполнено работ в %', field: row => row.procent_done ,  sortable: true},
  { name: 'to_pay', align: 'left',  label: 'Сумма к оплате', field: row => formatPrice(row.to_pay) ,  sortable: true},
  { name: 'pay_ostatok', align: 'left',  label: 'Остаток оплаты', field: row => formatPrice(row.pay_ostatok) ,  sortable: true},
  { name: 'created_at', align: 'left',  label: 'Создан', field: row => new Date(row.created_at).toLocaleDateString() ,  sortable: true},
]

const itemModal = ref(false)
const is_loading = ref(false)
const subworkers = ref([])
const editId = ref(null)
const formatPrice = (amount) =>{
  return amount.toLocaleString('ru-RU',{minimumFractionDigits: 2,maximumFractionDigits: 2})
}
const newItem = ref({
  id:null,
  name:null,
  address:null,
  subworker:null,
  total:null,
  avans:0,
  procent_done:0,
  to_pay:0,
  pay_ostatok:0,
})


const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 25
  // rowsNumber: xx if getting data from a server
}

const rows = ref([])

const query = ref({
  q:'',
  role__id:'',
})

onBeforeMount(async ()=>{
  await getPageData()
})

const getPageData = async () => {
  let response
  if (authStore.user.role.is_subworker){
     response = await api(`/api/catalog/object?subworker_id=${authStore.user.sub_worker_id}`)
  }else {
     response = await api(`/api/catalog/object`)
  }
  rows.value = response.data.results
}

const deleteItem = async (id) => {
  await api.delete(`/api/catalog/object/${id}`)
  await getPageData()
}


const showModal = (item) => {
  if (item){
    subworkers.value = []
    newItem.value = item
  }else {
    newItem.value = {
      id:null,
      name:null,
      address:null,
      subworker:null,
      total:null,
      avans:0,
      procent_done:0,
      to_pay:0,
      pay_ostatok:0,
    }
  }
  itemModal.value = true
}



const save = async () => {
  if (newItem.value.id){
    await api.put(`/api/catalog/object/${newItem.value.id}`,newItem.value)
  }else {
    await api.post(`/api/catalog/object`,newItem.value)
  }
  itemModal.value = false
  await getPageData()
}

const filterFn =  (val, update) => {
  update(async () => {
    if(val){
      is_loading.value=!is_loading.value
      const needle = val.toLowerCase()
      const response = await api(`/api/catalog/subworker?q=${val}&page_size=10000`)

      subworkers.value = response.data.results
      is_loading.value=!is_loading.value
    }
  })
}

</script>
