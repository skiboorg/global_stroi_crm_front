<template>
  <q-btn v-if="auth.user.role?.permission?.can_add"
         no-caps
         unelevated
         dense
         :loading="loading"
         :color="color ? color : 'negative'"
         :label="label"
         @click="showPrompt = true"
         :icon="icon ? icon : 'delete'"/>
  <q-dialog v-model="showPrompt">
    <q-card style="width: 300px; max-width: 100vw;">
      <q-card-section class="text-center text-bold">
        Вы уверены?
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="negative" unelevated no-caps label="Да" v-close-popup @click="$emit('confirm')"/>
        <q-btn color="positive"  unelevated no-caps label="Нет" v-close-popup/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>

import {ref} from "vue";
const emits = defineEmits(['confirm'])
defineProps(['label','icon','loading','color'])
const showPrompt = ref(false)
</script>
