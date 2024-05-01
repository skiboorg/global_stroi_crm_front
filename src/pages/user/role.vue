<template>
  <q-page padding>
    <div class="flex items-center justify-between q-mb-md">
      <p class="text-bold text-h6 no-margin">Роли</p>
      <AddButton label="Добавить" target="_blank" :href="`${URL}/admin/user/role/add/`"/>

    </div>

    <q-table  flat
              :rows="auth.roles"
              :columns="role_columns"
              row-key="name"
              hide-pagination
              table-header-class="table-header"
              :pagination="initialPagination">
      <template v-slot:header="props">
        <q-tr :props="props" class="bg-grey-2">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            <span class="text-bold"> {{ col.label }}</span>
          </q-th>
          <q-th auto-width />
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props">



            <span>{{ col.value }}</span>
          </q-td>
          <q-td auto-width>
            <EditButton target="_blank" :href="`${URL}/admin/user/role/${props.row.id}/change/`"/>
          </q-td>

        </q-tr>


      </template>
    </q-table><div class="flex items-center justify-between q-mb-md">
    <p class="text-bold text-h6 no-margin">Доступы</p>


  </div>

    <q-table  flat
              :rows="auth.permissions"
              :columns="permission_columns"
              row-key="name"
              hide-pagination
              table-header-class="table-header"
              :pagination="initialPagination">
      <template v-slot:header="props">
        <q-tr :props="props" class="bg-grey-2">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            <span class="text-bold"> {{ col.label }}</span>

          </q-th>
          <q-th auto-width />
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props">

            <span v-if="col.name ==='can_edit_personal_data'">
                <q-icon name="check_circle" size="20px" :color="col.value ? 'positive' : 'negative'"/>

              </span>
            <span v-else-if="col.name ==='can_view'">
                <q-icon name="check_circle" size="20px" :color="col.value ? 'positive' : 'negative'"/>
              </span>
            <span v-else-if="col.name ==='can_edit'">
                <q-icon name="check_circle" size="20px" :color="col.value ? 'positive' : 'negative'"/>
              </span>
            <span v-else-if="col.name ==='can_add'">
               <q-icon name="check_circle" size="20px" :color="col.value ? 'positive' : 'negative'"/>
              </span>

            <span v-else>{{ col.value }}</span>
          </q-td>
          <q-td auto-width>
            <EditButton target="_blank" :href="`${URL}/admin/user/rolepermission/${props.row.id}/change/`"/>
          </q-td>


        </q-tr>


      </template>
    </q-table>
  </q-page>
</template>
<script setup>
import AddButton from "components/AddButton.vue";
import EditButton from "components/EditButton.vue";
const URL = process.env.API_URL
const initialPagination= {
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 50
  // rowsNumber: xx if getting data from a server
}
const role_columns = [
  { name: 'name', align: 'left',  label: 'Название роли', field: row => row.name ,  sortable: true},
  { name: 'permission', align: 'left',  label: 'Доступ', field: row => row.permission?.name ,  sortable: true},

]
const permission_columns = [
  { name: 'name', align: 'left',  label: 'Название доступа', field: row => row.name ,  sortable: true},
  { name: 'can_edit_personal_data', align: 'left',  label: 'Может редактировать персональные данные', field: row => row.can_edit_personal_data ,  sortable: true},
  { name: 'can_view', align: 'left',  label: 'Просмотр', field: row => row.can_view ,  sortable: true},
  { name: 'can_edit', align: 'left',  label: 'Редактирование', field: row => row.can_edit ,  sortable: true},
  { name: 'can_add', align: 'left',  label: 'Добавление', field: row => row.can_add ,  sortable: true},

]

</script>
<style lang="sass">

</style>
