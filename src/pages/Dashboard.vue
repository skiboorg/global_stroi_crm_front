<template>
  <q-page padding>

    <PageDescription/>

    <div class="row " :class="{'no-tasks':tasks.length===0}">

      <div v-if="tasks.length>0" class="col-9 q-pr-md">
        <q-card>
          <q-card-section >
            Задач на сегодня {{tasks.length}}
          </q-card-section>
          <q-separator/>
          <q-card-section class="no-padding">
            <q-list >
              <q-item  v-for="task in tasks" :key="task.id">
                <q-item-section side>
                  <q-item-label overline>№ {{task.id}}</q-item-label>
                  <q-item-label caption>
                    <q-badge :color="priority.find(x=>x.id === task.priority).color">
                      {{priority.find(x=>x.id === task.priority).name }}
                    </q-badge>

                  </q-item-label>
                </q-item-section>

                <q-item-section>
                  <q-item-label overline class="ellipsis">{{task.task}}</q-item-label>
                  <q-item-label caption>до {{task.dead_line_time}}</q-item-label>
                </q-item-section>

                <q-item-section side><q-badge :color="task.is_done ? 'positive':'negative'">{{task.is_done ? 'Выполнено' : 'Не выполнено'}}</q-badge> </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-3 inner-grid">

<!--      <div v-if="user?.role.id===1" @click="$router.push('/catalog/clients')" class=" cursor-pointer">-->
<!--        <q-card>-->
<!--          <q-card-section>-->
<!--            Количество клиентов-->
<!--          </q-card-section>-->
<!--          <q-separator/>-->
<!--          <q-card-section>-->
<!--            <p class="no-margin text-h5">{{stats.all_clients_count}}</p>-->
<!--          </q-card-section>-->
<!--        </q-card>-->
<!--      </div>&lt;!&ndash;       Количество клиентов&ndash;&gt;-->
<!--      <div v-if="user?.role.id===1" @click="$router.push('/user')" class=" cursor-pointer">-->
<!--        <q-card>-->
<!--          <q-card-section>-->
<!--            Количество пользователей в системе-->
<!--          </q-card-section>-->
<!--          <q-separator/>-->
<!--          <q-card-section>-->
<!--            <p class="no-margin text-h5">{{stats.all_users_count}}</p>-->
<!--          </q-card-section>-->
<!--        </q-card>-->
<!--      </div>&lt;!&ndash;       Количество пользователей в системе&ndash;&gt;-->

      <div v-if="stats.objects_pay_ostatok?.length > 0" class="">
        <q-card>
          <q-card-section>
            Сумма к оплате
          </q-card-section>
          <q-separator/>
          <q-card-section>
            <q-list dense separator >
              <q-item v-for="item in stats.objects_pay_ostatok" clickable @click="$router.push(`/catalog/objects/${item.id}`)" :key="item.id">
                <q-item-section>{{item.name}}</q-item-section>
                <q-item-section>{{item.pay_ostatok}}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div><!--      Сумма к оплате-->
      <div v-if="stats.objects_procent_done?.length > 0">
        <q-card>
          <q-card-section>
            Процент выполнения работ
          </q-card-section>
          <q-separator/>
          <q-card-section>

            <q-list dense separator >
              <q-item v-for="item in stats.objects_procent_done" clickable @click="$router.push(`/catalog/objects/${item.id}`)" :key="item.id">
                <q-item-section>{{item.name}}</q-item-section>
                <q-item-section>{{item.procent_done}}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div><!--      Процент выполнения работ-->
      <div v-if="user?.role.id===1" class="">
        <q-card>
          <q-card-section>
            Финансовые показатели
          </q-card-section>
          <q-separator/>
          <q-card-section>
            <q-list dense separator >
              <q-item >
                Заработная плата сотрудников на руки: {{stats.total_income}}
              </q-item>
              <q-item >
                Расходы организации на сотрудников: {{stats.total_outcome}}
              </q-item>
            </q-list>



          </q-card-section>
        </q-card>
      </div><!--       Финансовые показатели-->
      <div v-else class="">
        <q-card>
          <q-card-section>
            Финансовые показатели
          </q-card-section>
          <q-separator/>
          <q-card-section>
            <q-list dense separator >
              <q-item >
                Заработная плата: {{user.total_income}}
              </q-item>
              <q-item >
                Расходы организации: {{user.total_outcome}}
              </q-item>
            </q-list>



          </q-card-section>
        </q-card>
      </div><!--       Финансовые показатели-->
      <div v-if="!user.telega_id" class="">
        <q-card>
          <q-card-section>
            Статус подключения к TG боту
          </q-card-section>
          <q-separator/>
          <q-card-section>

            <p class="no-margin">
              <span class="text-negative"> Бот не подключен</span><br><br>
              1. Создайте диалог с <span class="text-bold"><a target="_blank" href="https://t.me/globalstroy_bot">@globalstroy_bot</a></span><br><br>
              3. В созданном диалоге нажмите Start<br><br>
              4. Если вы все сделали правильно, бот сообщит об этом.<br><br>
            </p>
          </q-card-section>
        </q-card>
      </div>
      </div>
    </div>

  </q-page>
</template>
<script setup>

import {useAuthStore} from "stores/auth";
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import PageDescription from "components/PageDescription.vue";

const priority = [
  {id:1,name:'Низкий',color:'positive'},
  {id:2,name:'Средний',color:'warning'},
  {id:3,name:'Высокий',color:'negative'},
]

const {user} = useAuthStore()
const tasks = ref([])
const stats = ref({})
const dead_line_date = ref(null)
onBeforeMount(async ()=>{
  let date = new Date()
  dead_line_date.value = date.toLocaleDateString().split('.').join('-')// date.toLocaleDateString().split('.').reverse().join('-')
  await getTasks()
  await getStats()
})

const getTasks = async () => {
  let response
  let date = dead_line_date.value.split('-').reverse().join('-')
  response = await api(`/api/task/task?own=true&dead_line_date=${date}`)

  tasks.value = response.data.results
}
const getStats = async () => {
  const {data} = await api(`/api/report/stats`)
  stats.value = data
}
</script>
<style lang="sass">
.dash-grid
  display: grid
  grid-template-columns: 1fr 3fr
  grid-gap: 16px
  &.no-tasks
    grid-template-columns: 1fr
.inner-grid
  display: flex
  flex-direction: column

  height: fit-content
  grid-gap: 16px
</style>
