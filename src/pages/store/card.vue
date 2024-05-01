<template>
  <q-page padding>
    <div class="flex items-center  q-mb-md">
      <BackButton/>

    </div>
    <div v-if="data">
      <p class="text-h6">
            Карточка передачи оборудования № {{data.id}}<br>
            Создана: {{new Date(data.created_at).toLocaleString()}}<br>
            Объект: {{data.object.name}}<br>
            Получатель: {{data.receiver.name}}<br>
            Отправитель: {{data.sender.name}}
      </p>
    </div>
    <table class="full-width">
      <tr class="text-bold table-header text-center">
        <td>№</td>
        <td>Название</td>
        <td>Количество</td>
        <td>Ед. измерения</td>
        <td>Получено</td>
      </tr>
      <tr v-for="(item,index) in data?.items" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.item.name}}</td>
        <td v-if="!item.is_supply">{{item.amount}}</td>
        <td v-else><q-input outlined :disable="loading" type="number" v-model="item.amount" min="0" :max="item.init_amount" @update:model-value="amountChanged(item.amount,item.id)"/> </td>
        <td>{{item.unit.name}}</td>
        <td v-if="item.is_supply">{{new Date(item.supply_date).toLocaleString()}}</td>
        <td v-else><q-checkbox :disable="loading" :model-value="false" @update:model-value="checked(item.id)"/></td>
      </tr>



    </table>

  </q-page>
</template>
<script setup>
import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import {useRoute} from "vue-router";
import BackButton from "components/BackButton.vue";

const data = ref(null)
const loading = ref(false)
const route = useRoute()

onBeforeMount(async ()=>{
  await getPageData()
})

const getPageData = async () => {
  const response = await api(`/api/material_store/card/${route.params.id}`)
  data.value = response.data
}

const checked = async (id) => {
  console.log(id)
  loading.value = !loading.value
  await api.patch(`/api/material_store/card_item/${id}`,{is_supply:true})
  await getPageData()
  loading.value = !loading.value
}

const amountChanged = async (amount,id) => {
  loading.value = !loading.value
  await api.patch(`/api/material_store/card_item/${id}`,{amount:amount})
  await getPageData()
  loading.value = !loading.value
}
</script>
