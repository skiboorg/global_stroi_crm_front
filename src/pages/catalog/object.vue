<template>
  <q-page padding>
    <div v-if="object.id" class="q-mb-md">
      <div class="flex items-center justify-between q-mb-md">
        <BackButton/>
        <p class="no-margin text-h6 text-bold">Проект ID:{{object.id}} - {{object.name}}</p>

      </div>
      <p class="text-h6 text-bold">Общие данные</p>
      <div class="object-tables-grid items-start no-wrap" style="gap:8px">
      <table class="info-table q-mb-lg">
        <tr><td><span class="text-bold ">Адрес </span></td><td>{{object.address}}</td></tr>
        <tr><td><span class="text-bold ">Подрядчик </span></td><td>{{object.subworker?.fio}}</td></tr>
        <tr><td><span class="text-bold ">Сумма договора </span></td><td>{{$filters.formatPrice(object.total)}} руб</td></tr>
        <tr><td><span class="text-bold ">Сумма аванса </span></td><td>{{$filters.formatPrice(object.avans)}} руб</td></tr>
        <tr><td><span class="text-bold ">Выполнено работ </span></td><td>{{object.procent_done}} %</td></tr>
        <tr><td><span class="text-bold ">Сумма к оплате </span></td><td>{{$filters.formatPrice(object.to_pay)}} руб</td></tr>
      </table>
      </div>
    </div>
    <div class="q-gutter-md q-mb-md">
      <q-uploader
        v-if="object.dates?.length === 0 && !can_edit"
        :factory="factoryFn"
        accept=".xls, .xlsx "
        style="max-width: 300px"
      >
        <template v-slot:header="scope">
          <div class="row no-wrap items-center q-pa-sm q-gutter-xs">

            <div class="col">
              <div class="q-uploader__title">Выберите файл для загрузки</div>
              <div class="q-uploader__subtitle">xls или xlsx</div>
            </div>
            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" @click="scope.pickFiles" round dense flat>
              <q-uploader-add-trigger />
              <q-tooltip>Выбрать</q-tooltip>
            </q-btn>
            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
              <q-tooltip>Загрузить</q-tooltip>
            </q-btn>

            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
              <q-tooltip>Abort Upload</q-tooltip>
            </q-btn>
          </div>
        </template>
      </q-uploader>
      <EditButton v-if="object.is_items_added && object.items?.length>0 && !date_added" class="q-mb-md" label="Редактировать таблицу" color="warning" @click="can_edit = true"/>
      <AddButton v-if="object.is_items_added && object.items?.length>0 && !date_added && !can_edit" class="q-mb-md" label="Добавить дату" color="positive" @click="addReport"/>
    </div>


    <p class="text-h6 text-bold">Расчет стоимости</p>
    <div class="object-tables-grid items-start no-wrap" style="gap:8px">

      <table class="table q-mb-md" >
        <tr style="height: 118px" class="table-head-row">
          <td style="width: 0px">№</td>
          <td style="width: 700px">Наименование</td>
          <td >Ед. изм</td>
          <td >Кол-во</td>
          <td >Текущий остаток</td>
          <td >Цена</td>
          <td >Общая стоимость</td>
          <td v-if="object.dates?.length === 0"></td>
        </tr>

        <tr class="table-row" v-for="(item,item_index) in items" :key="item_index">
          <td class="text-center">{{item_index+1}}</td>
          <td><q-input  :readonly="!can_edit && !item.is_new" dense
                        standout
                        :borderless="!can_edit && !item.is_new"
                        class="input-no-center"
                        v-model="item.name"/>
            <q-tooltip v-if="item.name?.length>50">
              {{item.name}}
            </q-tooltip>

          </td>
          <td><q-select :readonly="!can_edit && !item.is_new" dense
                        :borderless="!can_edit && !item.is_new"
                        class="text-center"
                        standout
                        :options="units" v-model="item.unit"/> </td>
          <td><q-input @focus="$event.target.select()" type="number" :readonly="!can_edit && !item.is_new" dense standout
                       class="text-center"
                       @change="item.total_amount ? null : item.total_amount=0"
                       :borderless="!can_edit && !item.is_new" v-model="item.total_amount"/></td>
          <td class="text-center">{{item.today_ostatok}}</td>
          <td><q-input @focus="$event.target.select()" type="number" :readonly="!can_edit && !item.is_new" dense standout
                       class="text-center"
                       @change="item.price_per_unit ? null : item.price_per_unit=0"
                       :borderless="!can_edit && !item.is_new" v-model="item.price_per_unit"/></td>
          <td>{{item.total_price}}</td>
          <td v-if="object.dates?.length === 0"><DeleteButton @confirm="deleteItem(item_index)"/></td>

        </tr>
        <tr class="table-row">
          <td colspan="5" ></td>
          <td  class="text-bold">Итого</td>
          <td class=" text-bold">{{object.total_items_price}}</td>


        </tr>

      </table>
      <div class="table-wrapper">
        <div class="object-subtables-grid items-start no-wrap " style="gap:8px">
      <table class="table"  v-for="(report,report_index) in dates">
        <tr class="table-head-row">
                    <td colspan="4" >{{report.is_new ? report.date : new Date(report.date).toLocaleDateString()}} </td>
        </tr>

        <tr class="table-subhead-row">
              <td>План</td>
              <td>Факт</td>
<!--              <td>% вып. работы</td>-->
              <td>Сумма к оплате</td>
        </tr>
<!--        :readonly="!report.is_new "-->



        <tr class="table-row" v-for="(report_item, report_item_index) in report.items" :key="report_item_index">

          <td class="text-center"><q-input type="number"
                       class="text-center"
                       @focus="$event.target.select()"
                       @change="report_item.plan_amount > items.find(x=>x.id===report_item.item).today_ostatok
                       ?
                       report_item.plan_amount =items.find(x=>x.id===report_item.item).today_ostatok
                       :
                       null"
                       dense :autofocus="report.is_new" standout
                       :borderless=" !report.is_new" v-model="report_item.plan_amount"/></td>
          <td v-if="authStore.user.role.is_subworker &&
           (new Date().toLocaleDateString() === new Date(report.date).toLocaleDateString()) &&
           new Date().toLocaleTimeString() >= '10:00:00'
">

            <q-input class="text-center" type="number" @focus="$event.target.select()"
                     @change="report_item.fact_amount > items.find(x=>x.id===report_item.item).today_ostatok
                       ?
                       report_item.fact_amount = items.find(x=>x.id===report_item.item).today_ostatok
                       :
                       null"
                     dense standout v-model="report_item.fact_amount"/>
          </td>
          <td v-else style="text-align: center !important;"> {{report_item.fact_amount}}</td>
<!--          <td>{{report_item.done_work_percent}}</td>-->
<!--            <q-input type="number" @focus="$event.target.select()" :readonly="!report.is_new" dense standout-->
<!--                       :borderless=" !report.is_new" v-model="report_item.done_work_percent"/>-->
          <td>{{report_item.to_pay}}</td>


        </tr>
      </table>
        </div>


    </div>
    </div>

    <AddButton v-if="object.dates?.length === 0 && !can_edit" class="q-mb-md" label="Добавить товар" color="primary" @click="addItem"/><br>
    <AddButton v-if="!can_edit && object.dates?.length === 0 && items.length>0 && item_added"
               :disable="!can_save"
               class="q-mb-md" icon="save"
               label="Сохранить таблицу" color="positive" @click="saveTable"/>
    <AddButton v-if="can_edit || date_added" class="q-mb-md" label="Обновить таблицу" :disable="!can_save" icon="save" color="positive" @click="updateTable"/>
    <q-btn v-if="authStore.user.role.is_subworker" no-caps unelevated class="q-mb-md"

           label="Сохранить таблицу" icon="save" color="positive" @click="updateTable"/>

  </q-page>
</template>
<script setup>
import {computed, onBeforeMount, reactive, ref, toRaw} from "vue";
import {api} from "boot/axios";
import {useRoute} from "vue-router";
import AddButton from "components/AddButton.vue";
import EditButton from "components/EditButton.vue";
import {useAuthStore} from "stores/auth"
import BackButton from "components/BackButton.vue";
import DeleteButton from "components/DeleteButton.vue";
import PageDescription from "components/PageDescription.vue";
const authStore = useAuthStore()

// const objects_total = ref({
//   total_
// })
const object = ref({})
const items = ref([])
const dates = ref([])
const date_added = ref(false)
const item_added = ref(false)

const new_date = ref({
  date: new Date().toLocaleDateString(),
    total_done_work_percent:0,
    total_to_pay:0,
    items:[],
  is_new:true

  }
)
const route = useRoute()
const can_edit = ref(false)
const units = [
  'м.','шт','уп.','усл.'
]
onBeforeMount(async ()=>{
  await getPageData()
})

const getPageData = async () => {
  const response = await api(`/api/catalog/object/${route.params.id}?full=true`)
  object.value = response.data
  items.value = object.value.items
  dates.value = object.value.dates
}

const can_save = computed(()=>{

  let total_amount_is_ok = true
  let price_per_unit_is_ok = true
  for (let i of items.value){

    if (i.total_amount === 0){
      total_amount_is_ok = false
    break
    }
    if (i.price_per_unit === 0 ){
      price_per_unit_is_ok = false
      break
    }

  }
  return total_amount_is_ok && price_per_unit_is_ok
})

const saveTable = async () => {
   const response = await api.post(`/api/catalog/object/save_table`,object.value)
  await getPageData()
  item_added.value = false
}
const updateTable = async () => {
   const response = await api.post(`/api/catalog/object/update_table`,object.value)
  await getPageData()
  can_edit.value = false
}
const refreshTable = async () => {
   const response = await api.post(`/api/catalog/object/calc_table`,object.value)
  await getPageData()
}
const deleteItem = async (index) => {
  if (items.value[index].is_new){
    console.log('new')
    items.value.splice(index,1)
  }else {
    console.log('old')
    await api.delete(`/api/catalog/object_item/${items.value[index].id}`)
    await getPageData()
  }

}

const factoryFn = async (files) => {
  console.log(files)
  const formData = new FormData();
  formData.append('file', files[0])
  const {data} = await api.post('/api/catalog/object/upload_xls', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Указываем тип содержимого
    },
  });
  if (data.success) {
    console.log(data)
    data.data.forEach(item => {
     items.value.push({
       is_new:true,
       name:item['Наименование'],
       unit:item['Ед. изм.'],
       total_amount:item['Кол-во'],
       today_ostatok:0,
       price_per_unit:item['Цена '],
       total_price:item['Общая стоимость'],
     })
    })
    item_added.value = true
  }

}

const addItem = () => {
  item_added.value = true
  items.value.push({
    is_new:true,
    name:null,
    unit:null,
    total_amount:0,
    today_ostatok:0,
    price_per_unit:0,
    total_price:0,
  })
}
const addReport = () => {
  for (let i of dates.value){
    if ( new Date(i.date).toLocaleDateString() === new Date().toLocaleDateString())
      return
  }
  dates.value.push(new_date.value)
  date_added.value = true
  for (let i of items.value) {
    new_date.value.items.push(
        {
          plan_amount: 0,
          fact_amount: 0,
          done_work_percent: 0,
          to_pay: 0,
          item: i.id
        }

    )
  }
}
</script>
<style lang="sass">

</style>
