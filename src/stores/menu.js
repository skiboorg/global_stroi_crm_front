import { defineStore } from 'pinia';
import {ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";


export const useMenuStore = defineStore('menu', () => {
  const $q = useQuasar()
    let main_menu = ref([])

    async function getMenu () {
      const response = await api('/api/common_data/main_menu')
      main_menu.value = response.data
    }
  async function updateMenu (menu_obj) {
    $q.loading.show()
   if(menu_obj.menu_item){
     await api.put(`/api/common_data/sub_menu/${menu_obj.id}`,menu_obj)
   }else {
     await api.put(`/api/common_data/main_menu/${menu_obj.id}`,menu_obj)
   }
    await getMenu()
    $q.loading.hide()
  }

    return{
      getMenu,
      updateMenu,
      main_menu
    }
  }


)
