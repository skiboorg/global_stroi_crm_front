<script setup>
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import {useCommonStore} from "stores/common_data"
const commonStore = useCommonStore()
const rows = ref([])
const users = ref([])
const columns = [
  { name: 'id', align: 'left',  label: 'ID', field: row => row.id,  sortable: true},
  { name: 'user', align: 'left',  label: 'Пользователь', field: row => row.user.fio,  sortable: true},
  { name: 'created_at_date', align: 'left',  label: 'Дата', field: row => new Date(row.created_at_date).toLocaleDateString(),  sortable: true},
  { name: 'created_at_time', align: 'left',  label: 'Время', field: row => row.created_at_time?.split('.')[0],  sortable: true},
  { name: 'event', align: 'left',  label: 'Заполнена', field: row => row.event ,  sortable: true},
]

const filters = ref({
  user_id:null,
  created_at_date:null

})
const page = ref(1)
const is_loading = ref(false)
const query_string = ref('')//'is_done=false'
const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage:30
  // rowsNumber: xx if getting data from a server
})
const maxPages = ref(5)
const setPage =  async () => {

  await getData()
}
onBeforeMount(async ()=>{
  // console.log(auth_store.user.id)
  // let date = new Date()
  // date.setDate(date.getDate() - 1)
  // filters.value.dead_line__exact = date.toLocaleDateString().split('.').reverse().join('-')
  // await filterAction('apply')
  // //await getForms()
  const resp = await commonStore.getUsers(null,true)
  users.value = resp
  await getData()

})
const getData = async () => {
  is_loading.value = !is_loading.value
  const response = await api(`/api/user/history?all=true&page=${page.value}&${query_string.value}`)
  rows.value = response.data.results
  maxPages.value = Math.ceil(response.data.count / 30)
  is_loading.value = !is_loading.value
}

const filterAction = async (action) => {
  query_string.value = ``

  if (action==='apply'){
    for (let [k,v] of Object.entries(filters.value)){
      console.log(k,v)
      v ? query_string.value += `${k}=${v}&` : null
    }
  }
  if (action==='clear'){
    query_string.value = ''//'is_done=false&'
    filters.value = {
      user_id:null,
      created_at_date:null
    }
  }
  await getData()

}
</script>

<template>
<q-page padding>
  <div class="flex items-center justify-between q-mb-md">
    <p class="no-margin text-h6 text-bold">Журнал событий</p>
  </div>
  <div class="row q-col-gutter-md q-mb-md">
    <div class="col-12 col-md-6">
      <q-select class="q-mb-xs" dense outlined v-model="filters.user_id"
                :loading="is_loading"
                :options="users"  option-label="fio" label="Выберите пользователя"
                map-options
                option-value="id"
                emit-value
                use-input>
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
      <q-input outlined dense v-model="filters.created_at_date"  label="Дата" >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="filters.created_at_date" mask="YYYY-MM-DD">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Выбрать" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="col-12 col-md-6">
      <q-btn class="q-mb-sm full-width "  label="Применить фильтр" color="positive" @click="filterAction('apply')" v-close-popup unelevated no-caps/>
      <q-btn class=" full-width " label="Сбросить фильтр" color="dark" @click="filterAction('clear')" v-close-popup unelevated no-caps/>
    </div>
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
</template>

<style scoped lang="sass">

</style>
