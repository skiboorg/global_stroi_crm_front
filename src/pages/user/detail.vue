<template>
  <q-page padding>

    <div class="flex items-center justify-between q-mb-lg">
      <BackButton/>

      <p class="no-margin text-h6 text-bold">Информация о пользователе ID {{user.id}}</p>
      <q-space/>
      <EditButton icon="edit" color="primary" label="Редактировать пользователя" @click="$router.push(`/user/edit/${user.id}`)"/>
    </div>


      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-3">
          <q-avatar size="200px">
            <img v-if="user.avatar" :src="user.avatar">
            <img v-else src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg">
          </q-avatar>
        </div>
        <div class="col-12 col-md-9">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-3"><span class="text-bold">ФИО</span></div>
            <div class="col-12 col-md-9">{{user.fio}}</div>
            <div class="col-12 col-md-3"><span class="text-bold">Email</span></div>
            <div class="col-12 col-md-9">{{user.email}}</div>
            <div class="col-12 col-md-3"><span class="text-bold">Телефон</span></div>
            <div class="col-12 col-md-9">{{user.phone}}</div>
            <div class="col-12 col-md-3"><span class="text-bold">Дневной доход сотрудника</span></div>
            <div class="col-12 col-md-9">{{user.daily_payment}}</div>
            <div class="col-12 col-md-3"><span class="text-bold">Дневной расход на сотрудника</span></div>
            <div class="col-12 col-md-9">{{user.daily_rashod}}</div>
            <div class="col-12 col-md-3"><span class="text-bold">Всего заработная плата сотрудника на руки</span></div>
            <div class="col-12 col-md-9">{{user.total_income}}</div>
            <div class="col-12 col-md-3"><span class="text-bold">Всего расходы организации на сотрудника</span></div>
            <div class="col-12 col-md-9">{{user.total_outcome}}</div>
            <div class="col-12 col-md-3"><span class="text-bold">Телеграм</span></div>
            <div class="col-12 col-md-9">{{user.telega_username}}</div>
          </div>



        </div>
      </div>

  </q-page>
</template>
<script setup>

import AddButton from "components/AddButton.vue";
import BackButton from "components/BackButton.vue";
import {api} from "boot/axios";
import {onBeforeMount, ref} from "vue";
import { useRoute} from "vue-router";
import {useCommonStore} from "stores/common_data"
import EditButton from "components/EditButton.vue";
const commonStore = useCommonStore()

const route = useRoute()
const user = ref({})

onBeforeMount (async ()=>{
  await getUser()
})

const getUser = async () => {
  console.log(route.params.id)
  const resp = await api(`/api/user/user/${route.params.id}`)
  console.log(resp.data)
  user.value = resp.data
}
</script>
<style lang="sass">

</style>
