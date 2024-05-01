<template>
  <q-page padding>
    <div class="flex items-center justify-between q-mb-md">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">Форма ID {{formData.id}} от {{new Date(formData.created_at).toLocaleString()}}</p>
    </div>
<p class="text-h6 text-bold">{{formData.form?.name}}</p>
<q-form @submit.prevent="saveForm">
  <table class="info-table q-mb-lg full-width">
    <tr>
      <td class="text-bold">№</td>
      <td class="text-bold">Вопрос</td>
      <td class="text-bold">План</td>
      <td class="text-bold">Факт</td>

    </tr>
    <tr v-for="(row,index) in tableData" :key="index">
      <td>{{index + 1}}</td>
      <td>{{ row.label }}</td>
      <td>{{ row.plan_amount }}</td>
      <td><q-input style="width: 50%" v-model="row.fact_amount" outlined lazy-rules dense type="number"
                   :readonly="!!formData.rate"
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/></td>

    </tr>
  </table>
  <div v-if="formData.comment" class="q-mb-lg">
    <p class="text-h6 text-bold">Комментарий, почему такая оценка</p>
    <p>{{formData.comment}}</p>
  </div>
  <div v-if="formData.rate" class="q-mb-lg">
    <p class="text-h6 text-bold">Оценка выполнения: {{formData.rate}}</p>
    <q-select outlined v-model="comment" :options="reply" label="Комментарий к оценке"/>
  </div>
  <q-btn type="submit"  no-caps color="positive" label="Сохранить"/>
</q-form>
  </q-page>
</template>
<script setup>

import {useRoute} from "vue-router";
import {api} from "boot/axios";
import {onBeforeMount, ref} from "vue";
import {useNotify} from "src/helpers/notify";
import BackButton from "components/BackButton.vue";

const route = useRoute()
const formData = ref({})
const tableData = ref({})
const comment = ref('Согласен')

const reply = ['Согласен', 'Не согласен',  'Нужно обсудить']

console.log(route.params.uuid)

onBeforeMount(async ()=>{
  await getForm()
})

const getForm = async () => {
  const response = await api(`/api/form/stress_form_data/${route.params.uuid}`)
  console.log(response.data)
  formData.value = response.data
  if (formData.value.data){
    tableData.value = formData.value.data
  }else {
    tableData.value = formData.value.form?.default_data
  }
}
const saveForm = async () => {
  const response = await api.patch(`/api/form/stress_form_data/${route.params.uuid}`,{
    data: tableData.value,
    is_done:true,
    comment:comment.value
  })
  useNotify('positive','Данные обновлены')
}
</script>
