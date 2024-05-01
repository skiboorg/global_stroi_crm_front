import { defineStore } from 'pinia';
import {ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";


export const useCommonStore = defineStore('common_data', () => {
    const $q = useQuasar()
    const main_menu = ref([])
    const departments = ref([2])


    async function getUsers (query,is_active=false) {
      let response
      if (query){
         response = await api(`/api/user/user?${query}`)
      }else {
        response = await api(`/api/user/user`)
      }

      let result = response.data
      if (is_active)
        result = response.data.filter(x=>x.is_active)
      return result
    }

  async function getDepartments () {
    const response = await api(`/api/user/department`)
    departments.value =  response.data
  }

    return{
      getUsers,
      getDepartments,
      departments
    }
  }


)
