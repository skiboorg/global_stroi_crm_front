<template>
  <q-page padding>
    <PageDescription/>
    <div class="flex items-center  q-mb-lg">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">Отчет пользователя {{data.user}}</p>

    </div>
    <div class="row q-col-gutter-md q-mb-md">

      <div class="col-12 col-md-3">
        <q-input class="q-mb-xs" outlined dense v-model="filters.created_at_gte"  label="Отчет с" >
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
        <q-input outlined dense v-model="filters.created_at_lte"  label="Отчет до" >
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


    <p class=" text-h6 text-bold">Количество усилий {{data.login_mark}}</p>
    <table class="info-table full-width q-mb-lg">
      <tr>
        <td style="width: 50%" class="text-bold">Количество авторизаций в системе, штук</td>
        <td style="width: 50%">{{data.total_logins}}</td>
      </tr>
      <tr>
        <td style="width: 50%" class="text-bold">Общее время в системе, часов</td>
        <td style="width: 50%">{{data.total_logins * 2}}</td>
      </tr>
      <tr>
        <td style="width: 50%" class="text-bold">Оценка</td>
        <td style="width: 50%">{{data.login_mark}}</td>
      </tr>
    </table>

    <p class=" text-h6 text-bold">Качество усилий <span v-if="taskMiddle>0">{{taskMiddle}}</span> </p>
    <q-table
      v-if="data.tasks"
      flat
      :rows="data.tasks"
      :columns="columns"
      hide-pagination
      row-key="id"
      :pagination="initialPagination"
      table-header-class="table-header"

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
            <span v-else>{{ col.value  }}</span>
          </q-td>

        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <p class="text-bold q-mb-sm">Задача: </p>
            <p>{{props.row.task}}</p>
            <p class="text-bold q-mb-sm">Результат выполнения задачи</p>
            <p>{{props.row.result}}</p>

          </q-td>
        </q-tr>
      </template>
    </q-table>
    <table class="info-table full-width q-mb-lg">
      <tr>
        <td style="width: 50%" >Всего задач</td>
        <td style="width: 25%" class="text-bold">{{time_avg.total}}</td>
        <td style="width: 25%" class="text-bold">100%</td>
      </tr>



      <tr>
        <td style="width: 50%" >Выполнено</td>
        <td style="width: 25%" class="text-bold">{{time_avg.done}}</td>
        <td style="width: 25%" class="text-bold">{{(parseFloat(time_avg.done/ time_avg.total) * 100).toFixed(2)}}%</td>
      </tr>
      <tr>
        <td style="width: 50%" >Не выполнено</td>
        <td style="width: 25%" class="text-bold">{{time_avg.pending}}</td>
        <td style="width: 25%" class="text-bold">{{(parseFloat(time_avg.pending/ time_avg.total) * 100).toFixed(2)}}%</td>
      </tr>
      <tr>
        <td style="width: 50%" >Среднее время выполнения задач</td>
        <td style="width: 25%" class="text-bold">{{time_avg.averageTime}}</td>
        <td style="width: 25%" class="text-bold">-</td>
      </tr>

    </table>
    <div v-if="data.form_result" class="q-mb-lg">
      <p class=" text-h6 text-bold">Операционные показатели {{data.form_rate}}</p>
      <table  class="info-table full-width">
        <tr>
          <td class="text-bold">№</td>
          <td class="text-bold">Вопрос</td>
          <td class="text-bold">План</td>
          <td class="text-bold">Факт</td>
          <td class="text-bold">В процентах</td>
        </tr>
        <tr v-for="(row,index) in data.form_result" :key="index">
          <td>{{index + 1}}</td>
          <td>{{ row.label }}</td>
          <td>{{ row.plan_amount }}</td>
          <td>{{ row.fact_amount }}</td>
          <td>{{ row.percent_done }}</td>
        </tr>
      </table>
    </div>

    <p v-else >Назначеных задач не было </p>

    <p class=" text-h6 text-bold">Финансовые показатели</p>
    <table class="info-table full-width q-mb-lg">
      <tr>
        <td  style="width: 50%" class="text-bold"></td>
        <td  style="width: 10%" class="text-bold">Период</td>
        <td  style="width: 20%" class="text-bold">Сумма</td>
        <td  style="width: 20%" class="text-bold">Итого</td>
      </tr>
      <tr>
        <td style="width: 50%" >Заработная плата сотрудника на руки</td>
        <td style="width: 10%" class="text-bold">{{differenceInDays}}</td>
        <td style="width: 20%" class="text-bold">{{data.daily_payment}}</td>
        <td style="width: 20%" class="text-bold">{{data.period_income}}</td>

      </tr>

      <tr>
        <td style="width: 50%" >Расходы организации на сотрудника</td>
        <td style="width: 10%" class="text-bold">{{differenceInDays}}</td>
        <td style="width: 20%" class="text-bold">{{data.daily_rashod}}</td>
        <td style="width: 20%" class="text-bold">{{data.period_outcome}}</td>
      </tr>
    </table>

  </q-page>
</template>
<script setup>


import BackButton from "components/BackButton.vue";
import {api} from "boot/axios";
import {onBeforeMount, ref} from "vue";
import { useRoute} from "vue-router";
import {useCommonStore} from "stores/common_data"
import {useAuthStore} from "stores/auth";
import PageDescription from "components/PageDescription.vue";
const commonStore = useCommonStore()
const {user} = useAuthStore()
const filters = ref({
  user__id:null,
  created_at_gte:null,
  created_at_lte:null,
})
const route = useRoute()
const differenceInDays = ref(0)
const data = ref([])
const query_string = ref('')
const time_avg = ref({})

const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 50
  // rowsNumber: xx if getting data from a server
}

const taskMiddle = ref(0)

const columns = [
  { name: 'id', align: 'left',  label: 'ID', field: row => row.id ,  sortable: true},
  { name: 'created_at', align: 'left',  label: 'Дата создания', field: row => new Date (row.created_at).toLocaleDateString(),  sortable: true},
  { name: 'created_at', align: 'left',  label: 'Крайний срок', field: row => new Date (row.dead_line_date).toLocaleDateString(),  sortable: true},
  { name: 'priority', align: 'left',  label: 'Приоритет', field: row => row.priority ,  sortable: true},
  { name: 'is_done', align: 'left',  label: 'Выполнено', field: row => row.is_done ,  sortable: true},

  { name: 'task_value', align: 'left',  label: 'Оценка', field: row => row.task_value ? row.task_value : 'Нет',  sortable: true},
  { name: 'task_value', align: 'left',  label: 'Обратная связь', field: row => row.user_comment ? row.user_comment : 'Нет',  sortable: true},
  {
    name: 'time_difference',
    align: 'left',
    label: 'Время выполнения',
    field: row => {
      if (!row.created || !row.done_date) return 'Нет данных';
      const createdAt = new Date(row.created);
      const doneDate = new Date(row.done_date);
      const differenceInMs = doneDate - createdAt;

      // Переводим миллисекунды в часы и минуты
      const totalMinutes = Math.floor(differenceInMs / (1000 * 60));
      const hours = Math.floor(totalMinutes / 60) ;
      const minutes = totalMinutes % 60;

      return `${hours}ч ${minutes}мин`;
    },
    sortable: true
  }
]

onBeforeMount (async ()=>{
  let date = new Date()
  date.setDate(date.getDate() - 1)
  filters.value.created_at_gte = date.toLocaleDateString().split('.').reverse().join('-')
  filters.value.created_at_lte = date.toLocaleDateString().split('.').reverse().join('-')
  await filterAction('apply')
  //await getData()

})


const getData = async () => {
  console.log('query_string',query_string.value)
  console.log('filters',filters.value)
  let user_id
  if (route.params.user_id === 'own'){
    user_id = user.id
  }else {
    user_id=route.params.user_id
  }

  const resp = await api(`/api/report/by_user?user_id=${user_id}&${query_string.value}`)
  console.log('data',resp.data.tasks)
  data.value = resp.data
  let temp = 0
  let count = 0
  for (let i of resp.data?.tasks){

    if (i.task_value){
      temp += i.task_value
      count += 1
    }
  }

  temp > 0 ? taskMiddle.value = parseFloat(temp/count).toFixed(0) : taskMiddle.value=0

  let tasks = data.value.tasks

  const totalTasks = tasks.length;
  const doneTasks = tasks.filter(task => task.is_done).length;
  const pendingTasks = totalTasks - doneTasks;

// Среднее время выполнения для задач с is_repeatable: true
  const repeatableTasks = tasks.filter(task => !task.is_repeatable && task.is_done);
  let totalTime = 0; // Общая сумма времени выполнения
  let counter = 0;     // Количество корректных задач

  for (let task of repeatableTasks) {
    const start = new Date(task.created).getTime(); // Начальное время
    const end = new Date(task.done_date).getTime(); // Конечное время

    // Проверяем корректность данных
    if (!isNaN(start) && !isNaN(end) && end > start) {
      totalTime += (end - start) / (1000 * 60); // Добавляем время в минутах
      counter += 1; // Учитываем задачу
    }
  }

// Вычисляем среднее время
  const averageTimeInMinutes = counter > 0 ? totalTime / counter : 0;

// Переводим в часы и минуты
  const averageHours = Math.floor(averageTimeInMinutes / 60); // Целые часы
  const averageMinutes = Math.round(averageTimeInMinutes % 60); // Оставшиеся минуты
  console.log(`Среднее время выполнения повторяемых задач: ${averageHours} ч ${averageMinutes} м`);

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${doneTasks}`);
  console.log(`Невыполнено: ${pendingTasks}`);
  console.log(`Среднее вяемых задач: ${parseFloat(averageTimeInMinutes).toFixed(2)}`);
  time_avg.value={
    total: totalTasks,
    done: doneTasks,
    pending: pendingTasks,
    averageTime: `${averageHours} ч ${averageMinutes} м`,
  }

}


const filterAction = async (action) => {
  query_string.value = ``
  if (action==='apply'){
    const dateGte = new Date(filters.value.created_at_gte);
    const dateLte = new Date(filters.value.created_at_lte);
    const differenceInMs = dateLte - dateGte;
    differenceInDays.value = differenceInMs / (1000 * 60 * 60 * 24);
    for (let [k,v] of Object.entries(filters.value)){
      console.log(k,v)
      v ? query_string.value += `${k}=${v}&` : null
    }
  }
  if (action==='clear'){
    query_string.value = ''//'is_done=false&'
    filters.value = {
      created_at_gte:null,
      created_at_lte:null,
    }
  }
  await getData()

}
</script>
<style lang="sass">

</style>
