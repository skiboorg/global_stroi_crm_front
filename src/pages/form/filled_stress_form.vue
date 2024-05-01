<template>
  <q-page padding>
    <div class="flex items-center justify-between q-mb-md">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">Форма ID {{formData.id}} от {{new Date(formData.created_at).toLocaleString()}}</p>
    </div>
    <p class=" text-h6 text-bold">Сотрудник {{formData.user?.fio}}</p>

    <table class="info-table q-mb-lg full-width">
      <tr>
        <td class="text-bold">№</td>
        <td class="text-bold">Вопрос</td>
        <td class="text-bold">План</td>
        <td class="text-bold">Факт</td>
        <td class="text-bold">В процентах</td>
      </tr>
      <tr v-for="(row,index) in tableData" :key="index">
        <td>{{index + 1}}</td>
        <td>{{ row.label }}</td>
        <td>{{ row.plan_amount }}</td>
        <td>{{ row.fact_amount }}</td>
        <td>{{ row.percent_done }}</td>
      </tr>
    </table>

    <div v-if="formData.is_done ">
      <p class="text-h6 text-bold">Оцените результат</p>
      <q-rating
        v-model="formData.rate"
        size="2em"
        :max="5"
        class="q-mb-md"
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

      <p class="text-h6 text-bold">Комментарий, почему такая оценка</p>
      <q-input v-model="formData.comment" outlined class="q-mb-md" dense/>


      <q-btn v-if="formData.rate" label="Сохранить" @click="saveForm" no-caps unelevated icon="save" color="positive"/>
    </div>

  </q-page>
</template>
<script setup>

import {useRoute,useRouter} from "vue-router";
import {api} from "boot/axios";
import {onBeforeMount, ref} from "vue";
import BackButton from "components/BackButton.vue";

const route = useRoute()
const router = useRouter()
const formData = ref({})
const tableData = ref({})
const mark = ref(0)


onBeforeMount(async ()=>{
  await getForm()
})

const getForm = async () => {
  const response = await api(`/api/form/stress_form_data/${route.params.uuid}`)
  console.log(response.data)
  formData.value = response.data
  tableData.value = formData.value.data
}

const saveForm = async () => {
  await  api.patch(`/api/form/stress_form_data/${route.params.uuid}`,{rate:formData.value.rate,comment:formData.value.comment})
  router.back()

}
</script>
