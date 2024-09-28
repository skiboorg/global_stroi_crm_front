<script setup>
import {computed, onBeforeMount, ref} from "vue";
import {api} from "boot/axios";

import {useRoute} from "vue-router";
import AddButton from "components/AddButton.vue";
import BackButton from "components/BackButton.vue";
import {useNotify} from "src/helpers/notify";
const route = useRoute()

const item = ref({})
const returnToolModal = ref(false)
const loading = ref(false)

const item_file = ref(null)
const condition = ref(null)

const conditions = [
  'Новый',
  'Б/У',
]

const columns = [

  { name: 'id', align: 'left',  label: '#', field: row => row.id ,  sortable: true},
  { name: 'created_at', align: 'left',  label: 'Дата', field: row => new Date(row.created_at).toLocaleString() ,  sortable: true},
  { name: 'who_give', align: 'left',  label: 'Передал', field: row => row.who_give.fio ,  sortable: true},
  { name: 'who_get', align: 'left',  label: 'Принял', field: row => row.who_get.fio ,  sortable: true},
  { name: 'image', align: 'left',  label: 'Фото', field: row => row.image ,  sortable: true},

  { name: 'give_serial_number', align: 'left',  label: 'Серийный номер', field: row => row.give_serial_number ,  sortable: true},


]
onBeforeMount (async ()=>{
  await getItem()

})

const getItem = async () => {

  const response = await api(`/api/material_store/store_tool/${route.params.id}?full=true`)
  item.value = response.data
}

const who_have = computed(()=>{
  if (item.value?.history){
    return item.value?.history.find(x=>!x.is_returned)
  }

})

const formSubmit = async ()=>{
  loading.value = true
  let formData = new FormData()

  formData.append('history_id',who_have.value.id)
  formData.append('image',item_file.value)
  formData.append('condition',condition.value)

  try{
    const response = await api({
      method: "post",
      url: "/api/material_store/create_return_act",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    useNotify('positive' ,'Возврат завершен')
    await getItem()
    loading.value = false
    returnToolModal.value = false
  }catch (e) {
    useNotify('negative' ,'Проверьте входные данные')
    loading.value = false
  }
  loading.value = false
}
</script>

<template>
  <q-page padding >
    <div class="flex items-center  q-mb-lg">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">{{item.name}}</p>

    </div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-img  fit="contain" :ratio="16/9" :src="item.image"/>
      </div>
      <div class="col-6">
        <p>Состояние: <span :class="item.is_avaiable ? 'text-bold text-positive' : 'text-bold text-negative'">
          {{item.is_avaiable ? 'На складе' : `Выдан ${who_have?.who_get.fio}`}}</span></p>
        <div class="" v-if="!item.is_avaiable">
          <q-btn label="Оформить возврат" @click="returnToolModal = true" no-caps unelevated color="primary"/>
        </div>

      </div>
    </div>



    <p class="text-h6">История</p>
    <q-table
      flat
      :rows="item?.history"
      :columns="columns"
      hide-pagination
      table-header-class="table-header"
      row-key="id"
      selection="multiple"
      class="q-mb-lg"
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

        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"

            :key="col.name"
            :props="props">
            <a v-if="col.name === 'image'" :href="col.value" target="_blank"><q-img  :ratio="16/9" fit="contain" :src="col.value"/></a>

            <pre v-else>{{col.value  }}</pre>
            <!--          <span v-if="col.name !== 'serial_numbers'">{{ col.value }}</span>-->
          </q-td>


        </q-tr>

      </template>
    </q-table>
    <q-dialog v-model="returnToolModal">
      <q-card style="width: 700px; max-width: 100vw;">
        <q-form @submit="formSubmit">
          <q-card-section class="q-pb-none">
            <q-select  outlined dense  map-options emit-value behavior="menu" class="q-mb-md" v-model="condition" :options="conditions" label="Состояние"/>

            <q-file class="q-mb-md"  outlined dense  label="Фото" v-model="item_file" />

          </q-card-section>
          <q-card-actions align="center">
            <q-btn label="Сохранить" :disable="!condition || !item_file" :loading="loading" no-caps color="positive" type="submit"/>
            <q-btn label="Отмена" :loading="loading" no-caps color="dark" v-close-popup/>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

