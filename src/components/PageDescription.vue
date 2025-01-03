<script setup>
import {useMenuStore} from "stores/menu";
import {useRoute} from "vue-router";
import {computed} from "vue";

const menuStore = useMenuStore()
const route = useRoute()
function searchByUrl(data, url) {
  for (const item of data) {
    // Проверка текущего элемента на наличие нужного URL
    if (item.page && item.page.url === url) {
      return item;  // Возвращаем объект, если URL найден
    }

    // Если есть вложенные menu_items, рекурсивно ищем и в них
    if (item.menu_items && item.menu_items.length > 0) {
      const found = searchByUrl(item.menu_items, url);
      if (found) {
        return found;  // Если найден в вложенном меню, возвращаем
      }
    }
  }
  return null;  // Если не нашли, возвращаем null
}

const pageData = computed(()=>{
  const searchPageDataResult = menuStore.main_menu.filter(x=>x.page?.url === route.path)
  const searchMenuItemsResult = searchByUrl(menuStore.main_menu,route.path)
  console.log(searchMenuItemsResult)

  if (searchPageDataResult.length>0){
    return searchPageDataResult[0].page
  }

  if (searchMenuItemsResult){
    return searchMenuItemsResult.page
  }
  return false


})
</script>

<template>

  <q-expansion-item
    v-if="pageData"
    expand-separator
    icon="help"
    :label="pageData.title"
    class="q-mb-md"
  >
    <q-card>
      <q-card-section>
        <div v-html="pageData.description"></div>
    </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped lang="sass">

</style>
