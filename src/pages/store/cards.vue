<template>
  <q-page padding>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Учет передачи <span class="text-grey-6">{{rows.length}}</span></p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="$router.push('/store/cards/add')"/>
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

        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            @click="auth.user.role.permission.can_view ? $router.push(`/store/card/${props.row.id}`) : null"
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
  { name: 'created_at', align: 'left',  label: 'Дата создания', field: row => new Date(row.created_at).toLocaleString() ,  sortable: true},
  { name: 'name', align: 'left',  label: 'Объект', field: row => row.object.name ,  sortable: true},

  { name: 'sender', align: 'left',  label: 'Поставщик', field: row => row.sender.name ,  sortable: true},
  { name: 'want_supply_date', align: 'left',  label: 'Ожидаемая дата поставки', field: row => new Date(row.want_supply_date).toLocaleDateString() ,  sortable: true},


  //{ name: 'updated_at', align: 'left',  label: 'Обновлен', field: row =>new Date(row.updated_at).toLocaleString()   ,  sortable: true},
]

const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 25
  // rowsNumber: xx if getting data from a server
}

const rows = ref([])

onBeforeMount(async ()=>{
  await getPageData()
})

const getPageData = async () => {
  const response = await api('/api/material_store/card')
  rows.value = response.data
}
</script>
