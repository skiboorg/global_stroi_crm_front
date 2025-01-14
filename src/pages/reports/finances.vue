<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Финансовые показатели</p>

    </div>
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-12 col-md-9">
        <q-select class="q-mb-xs" dense outlined v-model="filters.user__id"
                  :loading="is_loading"
                  :options="users.filter(x=>x.role?.use_in_report)"  option-label="fio" label="Выберите пользователя"
                  map-options
                  option-value="id"
                  emit-value
                  use-input

                  @update:model-value="userSelected"
                  clearable

        >
          <template v-slot:option="scope">
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
        <q-input class="q-mb-xs" outlined dense v-model="filters.created_at_gte"  label="Отчет с" >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="filters.created_at_gte" mask="YYYY-MM-DD">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Выбрать" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input outlined dense v-model="filters.created_at_lte"  label="Отчет до" >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="filters.created_at_lte" mask="YYYY-MM-DD">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Выбрать" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="col-12 col-md-3">
        <q-btn class="q-mb-sm full-width "  label="Применить фильтр" color="positive" @click="filterAction" v-close-popup unelevated no-caps/>
        <q-btn class=" full-width " label="Сбросить фильтр" color="dark" @click="clearFilter" v-close-popup unelevated no-caps/>
      </div>

    </div>

    <table border="1" style="width: 100%; border-collapse: collapse;">
      <thead>
      <tr style="background-color: #f2f2f2;">
        <th>ФИО</th>
        <th>Период</th>
        <th>ЗП в день</th>
        <th>ЗП за период</th>
        <th>Расходы в день</th>
        <th>Расходы за период</th>

      </tr>
      </thead>
      <tbody>
      <!-- Данные пользователей -->
      <tr v-for="user in rows.users" :key="user.id">
        <td>{{user.user?.fio}}</td>
        <td>{{user.days_in_period}}</td>
        <td>{{user.daily_payment}}</td>
        <td>{{user.period_income}}</td>
        <td>{{user.daily_rashod}}</td>
        <td>{{user.period_outcome}}</td>



      </tr>

      <!-- Итоги -->
      <tr style="font-weight: bold; background-color: #e0f7fa;">
        <td>Итого</td>
        <td>{{rows.totals?.days_in_period}}</td>
        <td>{{rows.totals?.daily_payment}}</td>
        <td>{{rows.totals?.period_income}}</td>
        <td>{{rows.totals?.daily_rashod}}</td>
        <td>{{rows.totals?.period_outcome}}</td>

      </tr>
      </tbody>
    </table>



  </q-page>
</template>
<script setup>

import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";

import AddButton from "components/AddButton.vue";
import EditButton from "components/EditButton.vue";

import {useCommonStore} from "stores/common_data"
import PageDescription from "components/PageDescription.vue";
const commonStore = useCommonStore()

const columns = [
  { name: 'username', align: 'left',  label: 'ФИО', field: row => row.user.fio ,  sortable: true},
  { name: 'middle_logins_mark', align: 'left',  label: 'Период', field:row=>row.days_in_period ,  sortable: true},
  { name: 'middle_task_mark', align: 'left',  label: 'ЗП в день', field: row => row.daily_payment ,  sortable: true},
  { name: 'middle_forms_mark', align: 'left',  label: 'ЗП за период', field: row => row.period_income ,  sortable: true},
  { name: 'middle_forms_mark', align: 'left',  label: 'Расходы в день', field: row => row.daily_rashod ,  sortable: true},
  { name: 'middle_forms_mark', align: 'left',  label: 'Расходы за период', field: row => row.period_outcome ,  sortable: true},

]

const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 100
  // rowsNumber: xx if getting data from a server
}

const filters = ref({
  user__id:null,
  created_at_gte:'',
  created_at_lte:'',
})

const rows = ref([])
const users = ref([])
const is_loading = ref(false)
const user_filter = ref(null)

const query = ref({
  q:'',
  role__id:'',
})

const userSelected = async () => {
  if (filters.value.user__id){
    rows.value = rows.value.filter(x=>x.user.id === filters.value.user__id)
  }else{
    await clearFilter()
  }

}

onBeforeMount(async ()=>{
  let date = new Date()
  date.setDate(date.getDate() - 1)
  filters.value.created_at_gte = date.toLocaleDateString().split('.').reverse().join('-')
  filters.value.created_at_lte = date.toLocaleDateString().split('.').reverse().join('-')
  await getData()
  users.value = await commonStore.getUsers(null,true)
})

const getData = async () => {
  const resp =await api(`/api/report/finance?created_at_gte=${filters.value.created_at_gte}&created_at_lte=${filters.value.created_at_lte}`)
  rows.value =  resp.data
  if (filters.value.user__id){
    rows.value = rows.value.filter(x=>x.user.id === filters.value.user__id)
  }
}

const filterAction = async () => {
  await getData()
}
const clearFilter = async () => {
  filters.value = {
    user__id:null,
    created_at_gte:'',
    created_at_lte:'',
  }
  await getData()
}


</script>
