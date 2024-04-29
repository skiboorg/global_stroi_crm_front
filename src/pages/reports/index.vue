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
          В отчете сотрудника представлена сводная информация по количеству, качеству усилий, операционным и финансовым результатам. Автоматически система формирует данные по состоянию на вчерашний день. Сотрудник может выбрать любой произвольный период времени начиная с момента первой авторизации в системе.<br><br>
          Финансовые показатели сотрудника состоят из двух:<br><br>
          1. Заработная плата сотрудника на руки (начисленная сумма за один день работы сотрудника)<br>
          2. Расходы организации на сотрудника (начисленная сумма за один день работы сотрудника плюс налоги и страховые взносы)<br><br>
          Финансовые показатели возможно посмотреть в разрезе минимум 1 (одного) рабочего дня. Для этого необходимо в фильтре изменить дату начала отчета на предыдущий день. Финансовые показатели рассчитываются путем деления заработной платы (расходов организации) в месяц на 22 (двадцать два) рабочих дня. Согласно производственного календаря среднее количество рабочих дней в году составляет 22 (двадцать два) дня.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Отчеты по пользователям</p>

    </div>
    <q-select class="q-mb-xs" dense outlined v-model="user_filter"
              :loading="is_loading"
              :options="users"  option-label="fio" label="Выберите пользователя"
              map-options
              option-value="id"
              emit-value
              use-input
              @filter="filterFn"
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
    <q-table
      flat
      :rows="rows"
      :columns="columns"
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

        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td
            v-for="col in props.cols"
            :key="col.name"
            @click="auth.user.role.permission.can_view ? $router.push(`/reports/report/${props.row.id}`) : null"
            :props="props">
            <span >{{ col.value }}</span>
          </q-td>

        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>
<script setup>

import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";

import AddButton from "components/AddButton.vue";
import EditButton from "components/EditButton.vue";

import {useCommonStore} from "stores/common_data"
const commonStore = useCommonStore()

const columns = [
  { name: 'firstname', align: 'left',  label: 'ФИО', field: row => row.fio ,  sortable: true},
  { name: 'username', align: 'left',  label: 'Логин', field: row => row.username ,  sortable: true},
  { name: 'role', align: 'left',  label: 'Роль', field: row => row.role?.name ,  sortable: true},
  { name: 'position', align: 'left',  label: 'Телефон', field:row=>row.phone ,  sortable: true},
  //{ name: 'updated_at', align: 'left',  label: 'Обновлен', field: row =>new Date(row.updated_at).toLocaleString()   ,  sortable: true},
]

const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 100
  // rowsNumber: xx if getting data from a server
}

const rows = ref([])
const users = ref([])
const is_loading = ref(false)
const user_filter = ref(null)

const query = ref({
  q:'',
  role__id:'',
})

const userSelected = async () => {
  if(user_filter.value)
  {
    rows.value = rows.value.filter(x=>x.id===user_filter.value)
  }else {
    rows.value = await commonStore.getUsers(`q=${query.value.q}&role__id=${query.value.role__id}`,true)
  }

}

onBeforeMount(async ()=>{
  await getUsers()
  users.value= await commonStore.getUsers(null,true)


})

const getUsers = async () => {
  rows.value = await commonStore.getUsers(`q=${query.value.q}&role__id=${query.value.role__id}`,true)
}

const filterFn =  (val, update) => {
  update(async () => {
    if(val){
      is_loading.value=!is_loading.value
      const response = await api(`/api/user/user?q=${val}&page_size=10000`)
      users.value = response.data
      is_loading.value=!is_loading.value
    }
  })
}
</script>
