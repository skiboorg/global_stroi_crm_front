<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center justify-between q-mb-md">
      <p class="no-margin text-h6 text-bold">Задачи</p>
<!--      <q-space/>-->
<!--      <q-btn icon="add" color="primary" no-caps unelevated label="Добавить задачу" />-->
<!--      <AddButton icon="add" color="primary" no-caps unelevated @click="test" label="Тест" />-->
    </div>
    <div class="row q-col-gutter-md q-mb-lg">

      <div class="col-12 col-md-9">
        <q-select class="q-mb-xs" dense outlined v-model="filters.user__id"
                  :loading="is_loading"
                  :options="users"  option-label="fio" label="Выберите пользователя"
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
        <q-input outlined dense v-model="filters.dead_line_date__exact"  label="Выполнить до" clearable>
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="filters.dead_line_date__exact" mask="YYYY-MM-DD">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Выбрать" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-checkbox label="Выполнено" v-model="filters.is_done"/>
      </div>

      <div class="col-12 col-md-3">
        <q-btn class="q-mb-sm full-width "  label="Применить фильтр" color="positive" @click="filterAction('apply')" v-close-popup unelevated no-caps/>
        <q-btn class=" full-width " label="Сбросить фильтр" color="dark" @click="filterAction('clear')" v-close-popup unelevated no-caps/>
        <AddButton v-if="filters.user__id" class=" full-width q-mt-sm" label="Создать задачу" color="warning" @click="need_add_task = true" v-close-popup unelevated no-caps/>
      </div>
    </div>
    <q-table
      flat
      :rows="tasks"
      :columns="columns"
      row-key="id"
      hide-pagination
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
             <span v-if="col.name ==='is_done'">
                <q-icon v-if="col.value" name="check_circle" size="20px" color="positive"/>
                               <q-icon v-else name="close" size="20px" color="negative"/>
              </span>
            <span v-else-if="col.name ==='is_repeatable'">
                <q-icon v-if="col.value" name="check_circle" size="20px" color="positive"/>
                               <q-icon v-else name="close" size="20px" color="negative"/>
              </span>
            <span v-else-if="col.name ==='priority'">
              <q-badge color="positive" v-if="col.value===1" label="Низкий"/>
              <q-badge color="warning" v-else-if="col.value===2" label="Средний"/>
              <q-badge color="negative" v-else-if="col.value===3" label="Высокий"/>

              </span>
            <p class="no-margin " style="max-width: 300px" v-else>{{ col.value }}</p>
          </q-td>
          <q-td auto-width>
            <div class="q-gutter-md">
              <DeleteButton  @confirm="deleteItem(props.row.id)"/>
            </div>

          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
           <p class="text-bold q-mb-sm">Задача:</p>
            <p>{{props.row.task}}</p>
            <div v-if="props.row.is_done">
              <p class="text-bold q-mb-sm">Результат выполнения задачи</p>
              <q-input readonly class="q-mb-md" v-model="props.row.result" dense type="textarea" outlined/>
<!--              <div style="height: 80px; overflow-y: auto; width: 80%" >-->
<!--                <p style="white-space: break-spaces">{{props.row.result}}</p>-->
<!--                -->
<!--              </div>-->

              <p class="text-bold q-mb-sm">Оценка выполнения задачи</p>
              <q-rating
                v-model="props.row.task_value"
                size="2em"
                class="q-mb-md"
                :max="5"
                color="primary"
              >
                <template v-slot:tip-1>
                  <q-tooltip>Очень плохо</q-tooltip>
                </template>
                <template v-slot:tip-2>
                  <q-tooltip>Плохо</q-tooltip>
                </template>
                <template v-slot:tip-3>
                  <q-tooltip>Пойдет</q-tooltip>
                </template>
                <template v-slot:tip-4>
                  <q-tooltip>Хорошо</q-tooltip>
                </template>
                <template v-slot:tip-5>
                  <q-tooltip>Отлично</q-tooltip>
                </template>
              </q-rating>
              <q-input outlined dense v-model="props.row.admin_comment" type="textarea" label="Обратная связь"/>

              <div  class="q-gutter-md q-mt-md">
                <q-btn  dense color="positive" icon="save" :loading="is_loading"  no-caps unelevated label="Сохранить" @click="updateTask(props.row)"/>
                <q-btn v-if="props.row.file" :href="props.row.file" :loading="is_loading" icon="download" dense outline color="primary" target="_blank" no-caps unelevated label="Скачать файл" />

              </div>



            </div>

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
  <q-dialog v-model="need_add_task">
    <q-card style="width: 700px; max-width: 100vw;">
      <q-card-section>

        <q-form @submit.prevent="formSubmit">
          <q-select outlined map-options emit-value behavior="menu" class="q-mb-md" v-model="new_task.priority" :options="priority" label="Приоритет"/>
          <q-input v-model="new_task.task" type="textarea" label="Задача *" outlined lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>

          <!--          <DateInput v-if="!new_task.is_repeatable" class="q-mb-md" v-model="new_task.dead_line_date" label="Крайний срок выполнения" @selected="dateSelected"/>-->
          <p></p>
          <q-select outlined map-options emit-value behavior="menu" class="q-mb-md" v-model="new_task.dead_line_time" :options="times" :label="`Выполнить ${new Date().toLocaleDateString()} до`"/>
          <div class="q-mb-md">
            <q-checkbox v-model="new_task.is_repeatable" label="Ежедневная задача"/>
          </div>
          <q-btn icon="save" color="positive" no-caps unelevated type="submit" :loading="is_loading"  label="Сохранить" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import {useCommonStore} from "stores/common_data"
import AddButton from "components/AddButton.vue";
import {useNotify} from "src/helpers/notify";
import DeleteButton from "components/DeleteButton.vue";
import PageDescription from "components/PageDescription.vue";
const commonStore = useCommonStore()
const task_result = ref(null)

const users = ref([])
const tasks = ref([])

const need_add_task = ref(false)

const times = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
]
const priority = [
  {label:'Низкий',value:1},
  {label:'Средний',value:2},
  {label:'Высокий',value:3},
]

const new_task = ref({
  priority:1,
  task:null,
  dead_line_time:'20:00',
  is_repeatable:false,
})
const test = async () => {
  await api(`/api/task/test`)
}
const filters = ref({
  user__id:null,
  is_done:false,
  dead_line_date__exact:null,

})
const query_string = ref('')//'is_done=false'
const maxPages = ref(5)
const page = ref(1)
const is_loading = ref(false)
const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 25
  // rowsNumber: xx if getting data from a server
}
const columns = [
  { name: 'id', align: 'left',  label: 'ID', field: row => row.id ,  sortable: true},
  { name: 'priority', align: 'left',  label: 'Приоритет', field: row => row.priority ,  sortable: true},
  { name: 'user', align: 'left', style: 'min-width: 100px; max-width: 200px; white-space: normal;',  label: 'Пользователь', field: row => row.user?.fio ,  sortable: true},
  { name: 'task', align: 'left', style: 'min-width: 100px; max-width: 200px; white-space: normal;', label: 'Задача', field: row => row.task ,  sortable: true},
  { name: 'is_done', align: 'left', style: 'min-width: 50px; max-width: 50px; white-space: normal;',  label: 'Выполнено', field: row => row.is_done ,  sortable: true},
  { name: 'is_repeatable', align: 'left',  label: 'Ежед.', field: row => row.is_repeatable ,  sortable: true},
  { name: 'dead_line', align: 'left',  label: 'Дата', field: row => new Date(row.dead_line_date).toLocaleDateString(),  sortable: true},
  { name: 'dead_line_time', align: 'left',  label: 'Время вып.',
    field: row => {
      if (row.is_repeatable ) return '-';
      if (!row.created || !row.done_date) return 'Нет данных';
      const createdAt = new Date(row.created);
      const doneDate = new Date(row.done_date);
      const differenceInMs = doneDate - createdAt;

      // Переводим миллисекунды в часы и минуты
      const totalMinutes = Math.floor(differenceInMs / (1000 * 60));
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;

      return `${hours}ч ${minutes}мин`;
    },
    sortable: true
  },
  { name: 'task_value', align: 'left',  label: 'Оценка', field: row => row.task_value ? row.task_value : 'Нет',  sortable: true},
  { name: 'user_comment', align: 'left',  label: 'Обр. связь', field: row => row.user_comment ? row.user_comment : 'Нет',  sortable: true},
]

onBeforeMount(async ()=>{
  await getTasks()
  const resp = await commonStore.getUsers(null,true)
  users.value = resp
})

const getTasks = async () => {
  is_loading.value = !is_loading.value
  const response = await api(`/api/task/task?admin=true&page=${page.value}&${query_string.value}`)
  tasks.value = response.data.results
  maxPages.value = Math.ceil(response.data.count / 15)
  is_loading.value = !is_loading.value
}

const updateTask = async (task) => {
  is_loading.value = true
  let formData = new FormData()
  formData.append('task_value',task.task_value)
  formData.append('admin_comment',task.admin_comment)
  try{
    const response = await api({
      method: "patch",
      url: `/api/task/task/${task.id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    useNotify('positive','Задача обновлена')
    await getTasks()
    is_loading.value = false
  }catch (e) {
    useNotify('negative' ,'Проверьте входные данные')
    is_loading.value = false
  }
  is_loading.value = false
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
const setPage =  async () => {
  console.log(page.value)
  await getTasks()
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
      dead_line_date__exact:null,
    }
  }
  await getTasks()

}

const formSubmit = async () => {
  is_loading.value = !is_loading.value
  new_task.value.user_id = filters.value.user__id
  const response = await api.post('/api/task/task',new_task.value)
  useNotify('positive','Задача добавлена')
  new_task.value = {
    priority:1,
    task:null,
    dead_line_time:'20:00',
    is_repeatable:false,
  }
  need_add_task.value = false
  await getTasks()
  is_loading.value = !is_loading.value
}

const deleteItem = async (id) => {
  is_loading.value = !is_loading.value
  const response = await api.delete(`/api/task/task/${id}`)
  await getTasks()
  is_loading.value = !is_loading.value
}
</script>
