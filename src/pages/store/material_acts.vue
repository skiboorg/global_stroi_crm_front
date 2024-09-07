<script setup>

import DeleteButton from "components/DeleteButton.vue";
import {useCommonStore} from "stores/common_data"
const commonStore = useCommonStore()
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
const users = ref([])
const acts = ref([])
const maxPages = ref(5)
const page = ref(1)
const is_loading = ref(false)
const query_string = ref('')//'is_done=false'
const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 25
  // rowsNumber: xx if getting data from a server
}
const filters = ref({
  who_get__id:null,
  created_at_gte:null,
  created_at_lte:null,

})
const columns = [
  { name: 'id', align: 'left',  label: '#', field: row => row.number ,  sortable: true},
  { name: 'created_at', align: 'left',  label: 'Дата', field: row => new Date(row.created_at).toLocaleDateString(),  sortable: true},
  { name: 'store', align: 'left',  label: 'Склад', field: row => row.store?.address,  sortable: true},

  { name: 'who_give', align: 'left',  label: 'Передал', field: row => row.who_give.fio,  sortable: true},
  { name: 'who_get', align: 'left',  label: 'Принял', field: row => row.who_get.fio,  sortable: true},
  { name: 'file', align: 'left',  label: 'Акт', field: row => '' ,  sortable: false},

]

onBeforeMount(async ()=>{
  await getActs()
  const resp = await commonStore.getUsers(null,true)
  users.value = resp

})

const getActs = async () => {
  is_loading.value = !is_loading.value
  const response = await api(`/api/material_store/material_acts?page=${page.value}&${query_string.value}`)
  acts.value = response.data.results
  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}
const setPage =  async () => {
  console.log(page.value)
  await getActs()
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
      who_get__id:null,
      created_at_gte:null,
      created_at_lte:null,
    }
  }
  await getActs()

}
</script>

<template>

  <q-page padding>
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-3">
        <q-select class="q-mb-xs" dense outlined v-model="filters.who_get__id"
                  :loading="is_loading"
                  :options="users"  option-label="fio" label="Выберите получателя"
                  map-options
                  option-value="id"
                  emit-value
                  use-input
                  @filter="filterFn"

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
      </div>
      <div class="col-2">
        <q-input outlined dense v-model="filters.created_at_gte"  label="Дата создания от" clearable>
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
      </div>
      <div class="col-2">
        <q-input outlined dense v-model="filters.created_at_lte"  label="Дата создания до" clearable>
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
      <div class="col-5">
        <div class="q-gutter-md">
          <q-btn class="  "  label="Применить фильтр" color="positive" @click="filterAction('apply')" v-close-popup unelevated no-caps/>
          <q-btn class="  " label="Сбросить фильтр" color="dark" @click="filterAction('clear')" v-close-popup unelevated no-caps/>
        </div>
      </div>







    </div>
    <q-table
      flat
      :rows="acts"
      :columns="columns"
      row-key="id"
      hide-pagination
      class="q-mb-lg"
      table-header-class="table-header"
      :pagination="initialPagination"
    >
      <template v-slot:header="props">
        <q-tr :props="props" class="bg-grey-2">
          <q-th auto-width />
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
          <q-td auto-width>
            <q-btn size="sm" color="primary" round unelevated dense @click="props.expand = !props.expand" :icon="props.expand ? 'visibility_off' : 'visibility'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props">
             <span v-if="col.name ==='file'">

                <a :href="props.row.file" target="_blank">Открыть</a>
              </span>
            <p class="no-margin ellipsis" style="max-width: 300px" v-else>{{ col.value }}</p>
          </q-td>
          <q-td auto-width>
            <!--          <div class="q-gutter-md">-->
            <!--            <DeleteButton  @confirm="deleteItem(props.row.id)"/>-->
            <!--          </div>-->

          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">

            <p v-for="item in props.row.act_items" :key="item.id">
              {{item.material.name}} - {{item.amount}} - {{item.material.unit}}<br>
              <span>Серийные номера:</span>
              <pre class="no-margin">{{item.give_serial_numbers}}</pre>
            </p>


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

