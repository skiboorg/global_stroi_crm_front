<template>
  <q-page padding>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Пользователи <span class="text-grey-6">{{rows.length}}</span></p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="$router.push('/user/add')"/>
    </div>
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
          <q-th auto-width />
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td
            v-for="col in props.cols"
            :key="col.name"
            @click="auth.user.role.permission.can_view ? $router.push(`/user/${props.row.id}`) : null"
            :props="props">
            <p class="no-margin" v-html="col.value"></p>
          </q-td>
          <q-td auto-width>
            <EditButton @click="$router.push(`/user/edit/${props.row.id}`)"/>
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
  { name: 'username', align: 'left',  label: 'Логин', field: row => row.username ,  sortable: true},
  { name: 'role', align: 'left',  label: 'Роль', field: row => row.role?.name ,  sortable: true},
  { name: 'firstname', align: 'left',  label: 'ФИО', field: row => row.fio ,  sortable: true},
 { name: 'position', align: 'left',  label: 'Телефон', field:row=>row.phone ,  sortable: true},
  { name: 'email', align: 'left',  label: 'E-mail', field:row=>row.email ,  sortable: true},
  { name: 'telega_id', align: 'left',  label: 'TG бот', field:row=>row.telega_id ? '<span class="text-positive">Подключен</span>':'<span class="text-negative">Не подключен</span>' ,  sortable: true},

  { name: 'active', align: 'left',  label: 'Активный', field:row=>row.is_active ? '<span class="text-positive">Да</span>':'<span class="text-negative">Нет</span>' ,  sortable: true},
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

const query = ref({
  q:'',
  role__id:'',
})

onBeforeMount(async ()=>{
  await getUsers()
})

const getUsers = async () => {
  rows.value = await commonStore.getUsers(`q=${query.value.q}&role__id=${query.value.role__id}`)
}
</script>
