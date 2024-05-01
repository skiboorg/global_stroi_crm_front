<template>
  <q-page padding>
    <div class="flex items-center  q-mb-md">
      <BackButton/>
      <p class="no-margin text-h6 text-bold">Карточка передачи оборудования</p>
    </div>
    <q-form @submit.prevent="formSubmit">
<!--      <q-checkbox v-model="needNewObject" label="Создать новый объект и получателя"/>-->
      <div v-if="!needNewObject">
        <q-select outlined option-label="name" :options="objects" v-model="newCard.object" label="Выберите объект" lazy-rules
                  :rules="[ val => val  || 'Это обязательное поле']"/>

      </div>
      <div v-else class="q-mb-md">
        <q-input outlined v-model="newObject.name" label="Название объекта" lazy-rules
                 :rules="[val => val && val.length > 0 || 'Это обязательное поле']"/>
        <q-input outlined v-model="newObject.contact.name" label="Название получателя" lazy-rules
                 :rules="[val => val && val.length > 0 || 'Это обязательное поле']"/>
        <q-input outlined v-model="newObject.contact.phone" label="Телефон получателя"/>
      </div>
<!--      <q-checkbox v-model="needNewSupplier" label="Создать нового поставщика" />-->
      <div v-if="!needNewSupplier">
        <q-select outlined option-label="name" :options="suppliers" v-model="newCard.sender" label="Выберите поставщика" lazy-rules
                  :rules="[ val => val  || 'Это обязательное поле']"/>

      </div>
      <div v-else>
        <q-input outlined v-model="newSupplier.name" label="Название поставщика" lazy-rules
                 :rules="[val => val && val.length > 0 || 'Это обязательное поле']"/>
      </div>
      <q-input outlined v-model="newCard.want_supply_date"  lazy-rules
               :rules="[val => val && val.length > 0 || 'Это обязательное поле']" label="Ожидаемая дата поставки">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="newCard.want_supply_date" mask="DD.MM.YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-btn label="Добавить товар" icon="add" color="primary" no-caps class="q-mb-md" @click="addItem"/>

      <div v-if="newItems.length>0" class="row q-col-gutter-md text-bold text-body1" >
        <div class="col-1">№</div>
        <div class="col-6">Товар</div>
        <div class="col-2">Ед. измерения</div>
        <div class="col-2">Кол-во</div>
        <div class="col-1"></div>
      </div>
      <div class="row q-col-gutter-md " v-for="(item,index) in newItems" :key="index">
        <div class="col-1">{{index+1}}</div>
        <div class="col-6"><q-select outlined :options="items" option-label="name" v-model="item.item" lazy-rules
                                     :rules="[ val => val  || 'Это обязательное поле']"/></div>
        <div class="col-2"><q-select outlined :options="units" option-label="name" v-model="item.unit" lazy-rules
                                     :rules="[ val => val  || 'Это обязательное поле']"/></div>
        <div class="col-2"><q-input outlined type="number" v-model="item.amount" lazy-rules
                                    :rules="[val => val && val.length > 0 || 'Это обязательное поле']"/></div>
        <div class="col-1"><q-btn icon="delete" color="negative" @click="deleteItem(index)"/></div>
      </div>

      <q-btn v-if="newItems.length>0" type="submit" label="Сохранить" icon="save" color="primary" no-caps class="q-mb-md" />
    </q-form>
  </q-page>
</template>
<script setup>
import BackButton from "components/BackButton.vue";
import {onBeforeMount, ref, toRaw} from "vue";
import {api} from "boot/axios";


const objects = ref([])
const suppliers = ref([])
const items = ref([])
const units = ref([])
const needNewObject = ref(false)
const needNewSupplier = ref(false)

const newItems = ref([])
const newObject = ref({
  name:null,
  contact:{
    name:null,
    phone:null
  }
})
const newSupplier = ref({
  name:null
})

const newCard = ref({
  object:null,
  sender:null,
  receiver:null,
  want_supply_date:null
})

onBeforeMount(async ()=>{
  await getPageData()
})

const getPageData = async () => {
  const response_objects = await api(`/api/material_store/object`)
  objects.value = response_objects.data
  const response_suppliers = await api(`/api/material_store/supplier?page_size=500`)
  suppliers.value = response_suppliers.data.results
  const response_items = await api(`/api/material_store/item`)
  items.value = response_items.data
  const response_units = await api(`/api/material_store/unit`)
  units.value = response_units.data
}

const addItem = () => {
  newItems.value.push({
    item:null,
    amount:null,
    unit:null,
  })
}
const deleteItem = (index) => {
  newItems.value.splice(index,1)
}
const normalizeDate = (date) => {
  let temp = date.split('.')
  return `${temp[2]}-${temp[1]}-${temp[0]}`
}
const formSubmit = async () => {
  newCard.value.want_supply_date = normalizeDate(newCard.value.want_supply_date)
  const response = await api.post(`/api/material_store/card`,{
    newObject:newObject.value,
    newSupplier:newSupplier.value,
    newItems:newItems.value,
    newCard:newCard.value,
    needNewSupplier:needNewSupplier.value,
    needNewObject:needNewObject.value,
  })
  console.log(response.data)
}
</script>
