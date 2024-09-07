<script setup>
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";

import {useRoute} from "vue-router";
import AddButton from "components/AddButton.vue";
import BackButton from "components/BackButton.vue";
const route = useRoute()

const item = ref({})

const columns = [

  { name: 'id', align: 'left',  label: '#', field: row => row.id ,  sortable: true},
  { name: 'created_at', align: 'left',  label: 'Дата', field: row => new Date(row.created_at).toLocaleString() ,  sortable: true},
  { name: 'who_give', align: 'left',  label: 'Передал', field: row => row.who_give.fio ,  sortable: true},
  { name: 'who_get', align: 'left',  label: 'Принял', field: row => row.who_get.fio ,  sortable: true},

  { name: 'give_serial_number', align: 'left',  label: 'Серийный номер', field: row => row.give_serial_number ,  sortable: true},


]
onBeforeMount (async ()=>{
  await getItem()

})

const getItem = async () => {

  const response = await api(`/api/material_store/store_tool/${route.params.id}?full=true`)
  item.value = response.data
}
</script>

<template>
  <q-page padding>
    <div class="flex items-center  q-mb-lg">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">{{item.name}}</p>

    </div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-img  fit="contain" :ratio="16/9" :src="item.image"/>
      </div>
      <div class="col-6">

      </div>
    </div>



    <p class="text-h6">История</p>
    <q-table
      flat
      :rows="item?.history"
      :columns="columns"
      hide-pagination
      table-header-class="table-header"
      row-key="id"
      selection="multiple"
      class="q-mb-lg"
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
            :props="props">

            <pre >{{col.value  }}</pre>
            <!--          <span v-if="col.name !== 'serial_numbers'">{{ col.value }}</span>-->
          </q-td>


        </q-tr>

      </template>
    </q-table>
  </q-page>
</template>

