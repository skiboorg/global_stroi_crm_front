<template>
  <q-btn v-if="auth.user.role?.permission?.can_add"
         no-caps
         unelevated
         :loading="loading"
         :color="color ? color : 'primary'"
         :label="label"
         :icon="icon ? icon : 'add'"/>
</template>
<script setup>

defineProps(['label','icon','loading','color'])
</script>
