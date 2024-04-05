<template>
  <q-page padding>
    <div class="flex items-center  q-mb-md">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">Профиль пользователя</p>
    </div>
    <div v-if="user.avatar" class="q-mb-md">
      <q-avatar size="100px">
        <img :src="user.avatar">
      </q-avatar>
    </div>

    <q-form @submit.prevent="formSubmit">
      <div class="row q-col-gutter-md q-mb-md">
        <div class="col-12 col-md-6">

          <q-input outlined v-model="user.username"  label="Логин*"
                   lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"
          />
          <q-input outlined v-model="user.password" class="q-mb-md" label="Новый пароль"/>
          <q-input outlined v-model="user.telega_username"   label="Telegram username ID (без символа@)*" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>

          <q-input outlined v-model="user.fio"   label="ФИО*" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>

          <q-input outlined v-model="user.phone"   label="Телефон*" lazy-rules mask="+7 (###) ###-##-##" fill-mask
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>
          <q-input outlined v-model="user.email"   label="Email*" lazy-rules
                   :rules="[ val => val !== null && val !== ''  || 'Это обязательное поле']"/>

          <q-file outlined v-model="avatar"  class="q-mb-md" label="Фото"/>
        </div>

      </div>

      <q-btn :loading="is_loading" no-caps unelevated label="Сохранить изменения" type="submit" color="positive" icon="done"/>
    </q-form>

  </q-page>
</template>
<script setup>
import BackButton from "components/BackButton.vue";
import {computed, onBeforeMount, ref} from "vue";
import AddButton from "components/AddButton.vue";
import {useNotify} from "src/helpers/notify";
import {useRouter, useRoute} from "vue-router";
import {api} from "boot/axios";
import {useCommonStore} from "stores/common_data"
import EditButton from "components/EditButton.vue";
import {useAuthStore} from "stores/auth";
const commonStore = useCommonStore()
const router = useRouter()
const route = useRoute()
const is_loading = ref(false)
const error_text = ref('')
const {user:userData,getUser} = useAuthStore()
const avatar = ref(null)
const user = ref({
  username: null,
  fio: null,
  phone: null,
  email: null,
  telega_username: null,
  password: null,
})

const departments = computed(()=>{
  return commonStore.departments
})

onBeforeMount (async ()=>{
  user.value.username = userData.username
  user.value.fio = userData.fio
  user.value.phone = userData.phone
  user.value.email = userData.email
  user.value.telega_username = userData.telega_username
})


const formSubmit = async () => {
  is_loading.value = !is_loading.value

  error_text.value = ''
  let formData = new FormData()
  for (let [k,v] of Object.entries(user.value)){
    formData.append(k,JSON.stringify(v))
  }
  if (avatar.value){
    formData.append('avatar',avatar.value)
  }
  api({
    method: "patch",
    url: `/api/user/user/${userData.id}`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((response)=>{
    useNotify('positive','Пользователь успешно изменен')


  }).catch((error)=>{
    let error_keys = Object.keys(error.response.data)
    for (let key of error_keys){
      error_text.value += error.response.data[key][0]
    }
    useNotify('negative',error_text.value)
  })
  await getUser()
  is_loading.value = !is_loading.value
  //console.log(response.data)
  //
  // const response = await api.post('/api/data/orders',toRaw(order.value))
}

</script>
<style lang="sass">

</style>
