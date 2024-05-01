import { boot } from 'quasar/wrappers'
import {Cookies} from "quasar"
import {useAuthStore} from "stores/auth"
import {useMenuStore} from "stores/menu"
import {useCommonStore} from "stores/common_data"


export default boot(async({ app, ssrContext,store }) => {
  const authStore = useAuthStore(store)
  const menuStore = useMenuStore(store)
  const commonStore = useCommonStore(store)


  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies
  await authStore.getUser()
  await authStore.getRoles()
  await authStore.getPermissions()
  await menuStore.getMenu()
  await commonStore.getDepartments()

  app.config.globalProperties.auth = authStore.$state
  app.config.globalProperties.menu = menuStore.$state
  app.config.globalProperties.common_data = commonStore.$state
  app.config.globalProperties.$filters = {
    formatPrice(amount) {
      return amount.toLocaleString('ru-RU',{minimumFractionDigits: 2,maximumFractionDigits: 2})
    },


  }

})

