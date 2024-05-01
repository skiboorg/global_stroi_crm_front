<template>
  <q-input outlined  v-model="input_model"  :label="label" >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="date_model" mask="YYYY-MM-DD">
            <div class="row items-center justify-end">
              <q-btn v-close-popup @click="$emit('selected',date_model)" label="Выбрать" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup>

import {ref} from "vue";
const input_model = ref(null)
const date_model = ref(null)
const props = defineProps(['label'])
const emits = defineEmits(['selected'])
</script>
