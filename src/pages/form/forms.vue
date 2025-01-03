<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center justify-between q-mb-md">

      <p class="no-margin text-h6 text-bold">Формы показателей</p>
      <q-space/>

      <AddButton icon="add" color="primary" no-caps unelevated @click="$router.push('/form/stress_form')" label="Добавить" />
    </div>
    <q-table
      flat
      :rows="rows"
      :columns="columns"
      row-key="name"
      table-header-class="table-header"
      hide-pagination
      v-model:pagination="pagination"
      :loading = is_loading
      class="q-mb-md"
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

            <span>{{ col.value }}</span>

          </q-td>

          <q-td auto-width>

            <add-button flat icon="east" round dense :to="`/form/forms/${props.row.id}`"/>



          </q-td>
        </q-tr>


      </template>
    </q-table>

  </q-page>
</template>
<script setup>
import AddButton from "components/AddButton.vue";
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import { useAuthStore } from 'stores/auth'
import BackButton from "components/BackButton.vue";
import PageDescription from "components/PageDescription.vue";
const auth_store = useAuthStore()
const columns = [
  { name: 'id', align: 'left',  label: 'ID', field: row => row.id,  sortable: true},
  { name: 'name', align: 'left',  label: 'Название', field: row => row.name,  sortable: true},
  { name: 'users', align: 'left',  label: 'Кол-во пользователей', field: row => row.for_users.length,  sortable: true},

]

const page = ref(1)
const is_loading = ref(false)

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage:15
  // rowsNumber: xx if getting data from a server
})
const rows = ref([])
const maxPages = ref(5)

onBeforeMount(async ()=>{
  console.log(auth_store.user.id)
  await getForms()
})

const getForms = async () => {
  is_loading.value = !is_loading.value
  const response = await api(`/api/form/stress_form`)
  console.log(response.data)
  rows.value = response.data
  is_loading.value = !is_loading.value
}



</script>

