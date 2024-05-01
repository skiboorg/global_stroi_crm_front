<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          {{page_title}}
        </q-toolbar-title>
        <q-btn flat :label="user.fio">
          <q-menu fit>
            <q-list >
              <q-item clickable to="/user/settings">
                <q-item-section>Настройки</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable @click="logoutUser">
                <q-item-section>Выход</q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>

      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list separator>
        <q-item-label
          header
        >
          ГЛОБАЛ СТРОЙ CRM
        </q-item-label>
        <!--        <pre>-->
        <!--          {{menuStore.main_menu}}-->
        <!--        </pre>-->
        <div v-for="(main_item,main_item_index) in menuStore.main_menu" :key="main_item_index"  >
          <q-separator/>
          <q-expansion-item
            v-if="main_item.role_can_view.includes(auth.user.role?.id) && main_item.menu_items.length>0"
            group="mainmenu"
            header-class="text-blue text-bold"
            :icon="main_item.icon"
            :label="main_item.name ? main_item.name : main_item.page.name"


          >
            <q-list separator class="bg-grey-2 ">
              <q-item v-for="(sub_item,sub_item_index) in main_item.menu_items"
                      v-show="sub_item.role_can_view?.includes(auth.user.role?.id)"
                      :key="sub_item_index"

                      :clickable="!!sub_item.page"
                      :to="sub_item.page ? sub_item.page.url : ''"
              >
                <q-item-section avatar>
                  <q-icon :name="sub_item.icon"/>
                </q-item-section>
                <q-item-section>
                  {{sub_item.name ? sub_item.name : sub_item.page.name}}
                </q-item-section>
              </q-item>
            </q-list>


          </q-expansion-item>
          <div v-else>
            <q-item  v-if="main_item.role_can_view.includes(auth.user.role?.id)"
                     :clickable="!!main_item.page"
                     :to="main_item.page ? main_item.page.url : ''"
            >
              <q-item-section avatar>
                <q-icon :name="main_item.icon"/>
              </q-item-section>
              <q-item-section>
                {{main_item.name ? main_item.name : main_item.page.name}}
              </q-item-section>
            </q-item>

          </div>
        </div>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>
<script>
import { useAuthStore } from 'stores/auth'

export default {
  preFetch({store, redirect}) {
    const auth_store = useAuthStore(store)
    if (!auth_store.loggedIn) {
      redirect({path: '/login'})
    }
  },
}
</script>
<script setup>
import {ref, watch} from 'vue'
const leftDrawerOpen = ref(false)
import {useRoute} from "vue-router";

import {useMenuStore} from "stores/menu"
import {useAuthStore} from "stores/auth";
const {user,logoutUser} = useAuthStore()
const menuStore = useMenuStore()
const route = useRoute()
const page_title = ref('')



</script>
