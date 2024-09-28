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
          Оценку задач осуществляет сотрудник организации с правами администратора системы. Оценка субъективная, администратор должен объяснить почему он оценил выполнение вашей задачи именно так.<br><br>
          После оценки у задачи появляется оценка по 5 (пяти) бальной шкале и комментарий к ней. Система автоматически отправляет пользователю через телеграмм бот сообщение об оценки его задачи и комментарий почему такая оценка.<br><br>
          Система автоматически, после выставления оценки, в разделе обратная связь выставляет комментарий пользователя – Согласен. Пользователь на конкретной задаче может изменить обратную связь на - не согласен или надо обсудить, при этом администратор в личном кабинете видит ответ пользователя.
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="flex items-center justify-between q-mb-md">

      <p class="no-margin text-h6 text-bold">Задачи на {{dead_line_date}}</p>
      <q-space/>
      <q-btn icon="add" color="primary" no-caps unelevated @click="need_add_task=true" label="Добавить" />
    </div>
    <div class="flex items-center wrap">
      <p class="q-mb-none q-mr-md">Список задач на </p>
      <q-input class="q-mb-xs" outlined dense v-model="dead_line_date"  label="Выберте дату" >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date  v-model="dead_line_date" mask="DD-MM-YYYY" @update:model-value="getTasks">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Выбрать" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-checkbox v-model="only_own" label='Показывыть только мои задачи' @update:modelValue="getTasks"/>
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
            <p class="no-margin ellipsis" style="max-width: 300px" v-else>{{ col.value }}</p>
          </q-td>
          <q-td auto-width>
            <div class="q-gutter-md">
              <DeleteButton  @confirm="deleteItem(props.row.id)"/>
            </div>

          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
           <p class="text-bold q-mb-sm">Задача: </p>
            <p>{{props.row.task}}</p>
            <p class="text-bold q-mb-sm">Результат выполнения задачи</p>
            <q-input  class="q-mb-md" v-model="props.row.result" dense type="textarea" outlined/>
            <q-file v-if="!props.row.is_done" class="q-mb-md" v-model="props.row.file" dense outlined label="Приложите файл, если требуется"/>
            <q-btn v-if="!props.row.is_done" dense color="positive" icon="save"  no-caps unelevated label="Задача выполнена" :loading="is_loading" @click="saveTask(props.row)"/>
            <div v-if="props.row.admin_comment">
              <p class="text-bold q-mb-sm">Комментарий администратора</p>
             <p>{{props.row.admin_comment}}</p>

            </div>
            <div v-if="props.row.task_value">
              <p class="text-bold q-mb-sm">Коментарий к оценке</p>
              <q-select outlined v-model="props.row.user_comment" :options="reply" label="Комментарий к оценке"/>
              <br>
              <q-btn  dense color="positive" icon="save"  no-caps unelevated label="Сохранить комментарий" :loading="is_loading" @click="saveTask(props.row)"/>

            </div>

          </q-td>
        </q-tr>
      </template>
    </q-table>
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
import DateInput from "components/DateInput.vue";
import { useAuthStore } from 'stores/auth'
const auth_store = useAuthStore()
import {useNotify} from "src/helpers/notify";
import DeleteButton from "components/DeleteButton.vue";

const is_loading = ref(false)
const need_add_task = ref(false)
const only_own = ref(true)

const reply = ['Согласен', 'Не согласен', 'Нужно обсудить']
const comment = ref('Согласен')

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

const dead_line_date = ref(null)
const tasks = ref([])
const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 50
  // rowsNumber: xx if getting data from a server
}
const columns = [
  { name: 'id', align: 'left',  label: 'ID', field: row => row.id ,  sortable: true},
  { name: 'priority', align: 'left',  label: 'Приоритет', field: row => row.priority ,  sortable: true},
  { name: 'user', align: 'left',  label: 'Пользователь', field: row => row.user.fio ,  sortable: true},
  { name: 'task', align: 'left',  label: 'Задача', field: row => row.task ,  sortable: true},
  { name: 'is_done', align: 'left',  label: 'Выполнено', field: row => row.is_done ,  sortable: true},
  { name: 'is_repeatable', align: 'left',  label: 'Ежедневная', field: row => row.is_repeatable ,  sortable: true},
  { name: 'dead_line_date', align: 'left',  label: 'Выполнить до', field: row => `${new Date(row.dead_line_date).toLocaleDateString()} ${row.dead_line_time}`,  sortable: true},
  { name: 'task_value', align: 'left',  label: 'Оценка', field: row => row.task_value ? row.task_value : 'Нет',  sortable: true},
]

onBeforeMount(async ()=>{
  let date = new Date()
  dead_line_date.value = date.toLocaleDateString().split('.').join('-')// date.toLocaleDateString().split('.').reverse().join('-')
  await getTasks()
})

const getTasks = async () => {
  let response
  let date = dead_line_date.value.split('-').reverse().join('-')
  if (only_own.value) {
    response = await api(`/api/task/task?own=true&dead_line_date=${date}`)
  }else {
    response = await api(`/api/task/task?dead_line_date=${date}`)
  }

  tasks.value = response.data.results
}
const deleteItem = async (id) => {
  is_loading.value = !is_loading.value
  const response = await api.delete(`/api/task/task/${id}`)
  await getTasks()
  is_loading.value = !is_loading.value
}
const formSubmit = async () => {
  is_loading.value = !is_loading.value
  const response = await api.post('/api/task/task',new_task.value)
  useNotify('positive','Задача добавлена')
  need_add_task.value = false
  await getTasks()
  new_task.value = {
    priority:1,
    task:null,
    dead_line_time:'20:00',
    is_repeatable:false,
  }
  is_loading.value = !is_loading.value
}

const saveTask = async (task) => {
  is_loading.value = true
  let formData = new FormData()

  let data = {...task}
  delete data.user
  for (let [k,v] of Object.entries(data)){
    if (k!=='file' )
      formData.append(k,v)
  }
  if (data.file){
    formData.append('file',data.file)
  }
  try{
    const response = await api({
      method: "patch",
      url: `/api/task/task/${data.id}`,
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
const dateSelected = (val)=>{
  new_task.value.dead_line=new Date(val).toLocaleDateString()
}
</script>
