
<template>
  <q-page padding>
    <div class="flex items-center justify-between q-mb-md">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">Структура формы усилий</p>
      <q-space/>
      <DeleteButton  @confirm="delForm" label="Удалить форму" />
    </div>

    <q-input class="q-mb-md" v-model="name" outlined label="Название формы"/>

    <div v-if="name">

      <q-select  class="q-mb-md"  outlined v-model="for_users"
                 :loading="is_loading"
                 :options="users"  option-label="fio" label="Выберите пользователей"
                 map-options
                 option-value="id"
                 multiple
                 use-chips
                 emit-value
                 @filter="filterFn"
                 use-input


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
      <div v-if="formData.length>0" class="row q-col-gutter-md q-mb-md items-center" >

        <div class="col-1">ID</div>
        <div class="col-3"> Вопрос</div>
        <div class="col-1">План</div>
        <div class="col-1"></div>
      </div>
      <add-button class="q-mb-lg" label="Добавить ряд" @click="addRow" />
      <div class="row q-col-gutter-md q-mb-md items-center" v-for="(item,index) in formData" :key="index">
        <div class="col-1">{{index+1}}</div>
        <div class="col-3"> <q-input outlined dense v-model="item.label"/></div>
        <div class="col-1"><q-input outlined dense v-model="item.plan_amount"/></div>
        <div class="col-1"><DeleteButton @confirm="delRow(index)"/></div>
      </div>
      <add-button v-if="formData.length>0" :loading="is_loading" label="Сохранить форму" icon="save" :disable="can_save" @click="saveForm" color="positive"/>
    </div>
  </q-page>
</template>
<script setup>
import {computed, onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import AddButton from "components/AddButton.vue";
import {useNotify} from "src/helpers/notify";
import DeleteButton from "components/DeleteButton.vue";
import {useCommonStore} from "stores/common_data";
import BackButton from "components/BackButton.vue";
import {useRoute, useRouter} from "vue-router";
const commonStore = useCommonStore()

const route= useRoute()
const router= useRouter()
const formData = ref([])
const for_users = ref([])
const name = ref(null)
const users = ref([])

const is_loading = ref(false)
onBeforeMount( async ()=>{
  await getForm()
  users.value = await commonStore.getUsers(null,true)
})

const getForm =  async () => {
  const response = await api(`/api/form/stress_form/${route.params.id}`)
  name.value = response.data.name
  formData.value = response.data.default_data
  for_users.value = response.data.for_users
}

const addRow = () => {
  formData.value.push({
    label:null,
    plan_amount:null,
    fact_amount:0,
    percent_done:0,

  })
}

const delForm = async () => {
  await api.delete(`/api/form/stress_form/${route.params.id}`)
  router.push('/form/forms')
}
const delRow = (index) => {
  formData.value.splice(index,1)
}
const saveForm = async () => {
  is_loading.value = !is_loading.value
  const response = await api.patch(`/api/form/stress_form/${route.params.id}`,{
    default_data:formData.value,
    name:name.value,
    for_users:for_users.value

  })
  useNotify('positive','Форма обновлена')
  console.log(response.data)
  is_loading.value = !is_loading.value
}

const can_save = computed(()=>{
  let have_empty_label = false
  formData.value.forEach((el)=>{
    el.label ? null : have_empty_label = true
    el.plan_amount ? null : have_empty_label = true
  })
  return have_empty_label
})

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
</script>
