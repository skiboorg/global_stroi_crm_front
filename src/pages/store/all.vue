<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Склады </p>
      <q-space/>
      <AddButton icon="add" label="Добавить" @click="showModal(null)"/>
    </div>
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      hide-pagination
      table-header-class="table-header"
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
              <q-btn icon="visibility" flat dense @click="$router.push(`/store/detail/${props.row.id}`)"/>
              <EditButton dense @click="showModal(props.row)"/>
              <AddButton dense color="negative" icon="delete" @click="deleteItem(props.row.id)"/>
            </div>

          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
  <q-dialog v-model="itemModal">
    <q-card style="width: 700px; max-width: 100vw;">
      <q-card-section class="q-pb-none">
        <q-input outlined label="Адрес" class="q-mb-md" v-model="newItem.address"/>
        <q-input outlined label="Организация" class="q-mb-md" v-model="newItem.organization"/>
        <q-input outlined label="ФИО" class="q-mb-md" v-model="newItem.fio"/>
        <q-input outlined label="Должность" class="q-mb-md" v-model="newItem.dolgnost"/>
        <q-input outlined label="Коментарий" type="textarea" v-model="newItem.comment"/>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="Сохранить" :disable="!newItem.address" no-caps color="positive" @click="save"/>
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
import PageDescription from "components/PageDescription.vue";
const commonStore = useCommonStore()

const columns = [
  { name: 'address', align: 'left',  label: 'Адрес склада', field: row => row.address ,  sortable: true},
]

const itemModal = ref(false)
const editId = ref(null)

const newItem = ref({
  id:null,
  address:null,
  comment:null,
  organization:null,
  dolgnost:null,
  fio:null,

})



const rows = ref([])



onBeforeMount(async ()=>{
  await getPageData()
})

const getPageData = async () => {
  const response = await api('/api/material_store/store')
  rows.value = response.data
}

const deleteItem = async (id) => {
  await api.delete(`/api/material_store/store/${id}`)
  await getPageData()
}

const showModal = (item) => {
  console.log(item)
  if (item){
    newItem.value = item
  }else {
    newItem.value = {
      address:null
    }
  }
  itemModal.value = true
}
const save = async () => {
  if (newItem.value.id){
    await api.put(`/api/material_store/store/${newItem.value.id}`,newItem.value)
  }else {
    await api.post(`/api/material_store/store`,newItem.value)
  }
  itemModal.value = false
  await getPageData()
}

</script>
