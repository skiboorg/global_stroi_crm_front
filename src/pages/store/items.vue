<template>
  <q-page padding>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Товары </p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
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
  </q-page>
  <q-dialog v-model="itemModal">
    <q-card>
      <q-card-section class="q-pb-none">
        <q-input outlined label="Введите название" v-model="newItem.name"/>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="Сохранить" :disable="!newItem.name" no-caps color="positive" @click="save"/>
        <q-btn label="Отмена" no-caps color="dark" v-close-popup/>
      </q-card-actions>
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

const columns = [
  { name: 'name', align: 'left',  label: 'Название товара', field: row => row.name ,  sortable: true},
]

const itemModal = ref(false)
const editId = ref(null)

const newItem = ref({
  id:null,
  name:null
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
  const response = await api('/api/material_store/item')
  rows.value = response.data
}

const deleteItem = async (id) => {
  await api.delete(`/api/material_store/item/${id}`)
  await getPageData()
}

const showModal = (item) => {
  if (item){
    newItem.value = item
  }else {
    newItem.value = {
      name:null
    }
  }
  itemModal.value = true
}
const save = async () => {
  if (newItem.value.id){
    await api.put(`/api/material_store/item/${newItem.value.id}`,newItem.value)
  }else {
    await api.post(`/api/material_store/item`,newItem.value)
  }
  itemModal.value = false
  await getPageData()
}

</script>
