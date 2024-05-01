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
          Операционные показатели – те действия, которые прямо или косвенно влияют на финансовый результат организации. <br><br>
          Программа ежедневно собирает данные с пользователей о выполнении ими конкретных показателей и в процентном отношении сравнивает их с выставленным администратором планом на день. Например, количество звонков клиенту – План 10 /Факт 5, план выполнен на 50 процентов.<br><br>
          Сбор данных позволяет руководителю контролировать количество прилагаемых сотрудником усилий по достижению результата. В случае необходимости система позволит скорректировать показатели пользователя или план по его усилиям.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Операционые показатели</p>

    </div>
    <div class="q-mb-md">

      <div class="row q-col-gutter-md q-mb-md">
        <div class="col-12 col-md-3">
          <q-select class="q-mb-xs" dense outlined v-model="filters.user__id"
                    :loading="is_loading"
                    :options="users"  option-label="fio" label="Выберите пользователя"
                    map-options
                    option-value="id"
                    emit-value
                    use-input
                    @filter="filterFn"
                    fill-input
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
          <q-input outlined dense v-model="filters.dead_line__exact"  label="Крайний срок заполнения" >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="filters.dead_line__exact" mask="YYYY-MM-DD">
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
          <q-checkbox label="Заполненые" v-model="filters.is_done"/>
<!--          <q-checkbox label="Просроченные" v-model="filters.is_time_left"/>-->
        </div>
        <div class="col-12 col-md-3">
          <q-input class="q-mb-xs" outlined dense v-model="filters.created_at_gte"  label="Дата создания от" >
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
          <q-input outlined dense v-model="filters.created_at_lte"  label="Дата создания до" >
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
          <q-btn class="q-mb-sm full-width "  label="Применить фильтр" color="positive" @click="filterAction('apply')" v-close-popup unelevated no-caps/>
          <q-btn class=" full-width " label="Сбросить фильтр" color="dark" @click="filterAction('clear')" v-close-popup unelevated no-caps/>
        </div>

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
          <q-th auto-width />
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props">
             <span v-if="col.name ==='is_done'">
                <q-icon v-if="col.value" name="check_circle" size="20px" color="positive"/>
                               <q-icon v-else name="close" size="20px" color="negative"/>
              </span>
            <span v-else-if="col.name ==='is_time_left'">
                <q-icon v-if="col.value" name="check_circle" size="20px" color="positive"/>
              <q-icon v-else name="close" size="20px" color="negative"/>
              </span>
            <span v-else-if="col.name ==='comment'">
                <q-icon v-if="col.value" name="check_circle" size="20px" color="positive"/>
              <q-icon v-else name="close" size="20px" color="negative"/>
              </span>

<!--            <span v-else-if="col.name ==='comment_user'">-->
<!--                <q-icon v-if="col.value" name="check_circle" size="20px" color="positive"/>-->
<!--              <q-icon v-else name="close" size="20px" color="negative"/>-->
<!--              </span>-->
            <span v-else>{{ col.value }}</span>

          </q-td>

          <q-td auto-width>

            <q-btn flat round dense :to="`/form/filled_stress_form/${props.row.uuid}`">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.46967 17.4702C5.17678 17.7631 5.17678 18.2379 5.46967 18.5308C5.76256 18.8237 6.23744 18.8237 6.53033 18.5308L5.46967 17.4702ZM6.53033 18.5308L18.5303 6.53082L17.4697 5.47016L5.46967 17.4702L6.53033 18.5308Z" fill="#131119"/>
                <path d="M9 6.00049H18V15.0005" stroke="#131119" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </q-btn>
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
<script setup>
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import { useAuthStore } from 'stores/auth'
const auth_store = useAuthStore()
import {useCommonStore} from "stores/common_data"
const commonStore = useCommonStore()
const users = ref([])
const query_string = ref('')//'is_done=false'
const columns = [
  { name: 'id', align: 'left',  label: 'ID', field: row => row.id,  sortable: true},
  { name: 'user', align: 'left',  label: 'Пользователь', field: row => row.user.fio,  sortable: true},
  { name: 'created_at', align: 'left',  label: 'Создана', field: row => new Date(row.created_at).toLocaleDateString(),  sortable: true},
  { name: 'dead_line', align: 'left',  label: 'Крайний срок заполнения', field: row => new Date(row.dead_line_date).toLocaleDateString(),  sortable: true},
  { name: 'is_done', align: 'left',  label: 'Заполнена', field: row => row.is_done ,  sortable: true},
  { name: 'is_time_left', align: 'left',  label: 'Просрочена', field: row => row.is_time_left ,  sortable: true},
  { name: 'mark', align: 'left',  label: 'Оценка', field: row => row.rate ? row.rate : 'Нет оценки' ,  sortable: true},
  { name: 'comment_user', align: 'left',  label: 'Обратная связь', field: row => row.rate ? row.user_comment : 'Еще нет' ,  sortable: true},

]

const filters = ref({
  user__id:null,
  is_done:false,
  is_time_left:false,
  created_at_gte:null,
  created_at_lte:null,
  dead_line__exact:null,
})

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
  let date = new Date()
  date.setDate(date.getDate() )
  filters.value.dead_line__exact = date.toLocaleDateString().split('.').reverse().join('-')
  await filterAction('apply')
  //await getForms()
  const resp = await commonStore.getUsers(null,true)
  users.value = resp

})

const getForms = async () => {
  is_loading.value = !is_loading.value
  const response = await api(`/api/form/stress_form_data?all=true&page=${page.value}&${query_string.value}`)
  console.log(response.data)
  rows.value = response.data.results
  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}
const setPage =  async () => {
  console.log(page.value)
  await getForms()
}

const filterAction = async (action) => {
  query_string.value = ``
  if (!filters.value.is_done){
    query_string.value = ''//`is_done=false&`
  }
  if (action==='apply'){
    for (let [k,v] of Object.entries(filters.value)){
      console.log(k,v)
      v ? query_string.value += `${k}=${v}&` : null
    }
  }
  if (action==='clear'){
    query_string.value = ''//'is_done=false&'
    filters.value = {
      user__id:null,
      is_done:false,
      is_time_left:false,
      created_at_gte:null,
      created_at_lte:null,
      dead_line__exact:null,
    }
  }
  await getForms()

}

const filterFn =  (val, update) => {
  update(async () => {
    if(val){
      is_loading.value=!is_loading.value

      is_loading.value=!is_loading.value
    }
  })
}
</script>
