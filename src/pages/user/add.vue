<template>
  <q-page padding>
    <div class="flex items-center  q-mb-md">
      <p class="no-margin text-h6 text-bold">Новый пользователь</p>
    </div>
    <q-form @submit.prevent="formSubmit">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-select outlined v-model="user.role"
                  :options="auth.roles"  option-label="name" label="Выберите роль*"
                  map-options
                  option-value="id"
                  emit-value
                  clearable
                  lazy-rules
                  :rules="[ val => val  || 'Это обязательное поле']"
        />
        <q-select outlined v-model="user.department"
                  :options="departments"  option-label="name" label="Выберите отдел*"

                  clearable
                  lazy-rules
                  :rules="[ val => val  || 'Это обязательное поле']"
        />
        <q-select outlined v-model="user.subdivision"
                  :options="user.department?.divisions"  option-label="name" label="Выберите подразделение*"
                  map-options
                  option-value="id"
                  emit-value
                  clearable
                  lazy-rules
                  :rules="[ val => val  || 'Это обязательное поле']"
        />
        <q-input outlined v-model="user.username"  label="Логин*"
                 lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"
        />
        <q-input outlined v-model="user.password"  label="Пароль*" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
        <q-input outlined v-model="user.daily_payment" type="number"  label="Дневной доход сотрудника*" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
        <q-input outlined v-model="user.daily_rashod" type="number"  label="Дневной расход на сотрудника*" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>



      </div>
      <div class="col-12 col-md-6">

        <q-input outlined v-model="user.timezone" type="number" class="q-mb-md" label="Часовой пояс"/>

        <q-input outlined v-model="user.telega_username"   label="Telegram username (без символа@)*" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>

        <q-input outlined v-model="user.fio"   label="ФИО*" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>

        <q-input outlined v-model="user.phone"   label="Телефон*" lazy-rules mask="+7 (###) ###-##-##" fill-mask
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
        <q-input outlined v-model="user.email"   label="Email*" lazy-rules
                 :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
        <q-input outlined v-model="user.position"  class="q-mb-md" label="Должность"/>
        <q-file outlined v-model="avatar"  class="q-mb-md" label="Фото"/>

      </div>
    </div>

    <AddButton :loading="is_loading" label="Сохранить пользователя" type="submit" color="positive" icon="done"/>
    </q-form>
  </q-page>
</template>
<script setup>
import BackButton from "components/BackButton.vue";
import {computed, ref} from "vue";
import AddButton from "components/AddButton.vue";
import {useNotify} from "src/helpers/notify";
import {useRouter} from "vue-router";
import {api} from "boot/axios";
import {useCommonStore} from "stores/common_data"
const commonStore = useCommonStore()
const router = useRouter()
const emails = ref([])
const phones = ref([])
const messengers = ref([])
const is_loading = ref(false)
const error_text = ref('')

const avatar = ref(null)
const user = ref({
  role: null,
  username: null,
  department: null,
  subdivision: null,
  fio: null,
  phone: null,
  email: null,
  telega_username: null,
  timezone: 0,
  daily_payment: 3500,
  daily_rashod: 4500,
  password: null,
})



const departments = computed(()=>{
  return commonStore.departments
})


const formSubmit = async () => {
  is_loading.value = !is_loading.value
  error_text.value = ''
  let formData = new FormData()
  user.value.department  = user.value.department.id
  for (let [k,v] of Object.entries(user.value)){
    formData.append(k,JSON.stringify(v))
  }
  if (avatar.value){
    formData.append('avatar',avatar.value)
  }
  api({
    method: "post",
    url: "/api/user/user",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((response)=>{
    useNotify('positive','Пользователь успешно создан')

    router.push('/user')
  }).catch((error)=>{
    let error_keys = Object.keys(error.response.data)
    for (let key of error_keys){
      error_text.value += error.response.data[key][0]
    }
    useNotify('negative',error_text.value)
  })
  is_loading.value = !is_loading.value
  //console.log(response.data)
  //
  // const response = await api.post('/api/data/orders',toRaw(order.value))
}

</script>
<style lang="sass">

</style>
