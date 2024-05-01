<template>
  <q-btn v-if="auth.user.role?.permission?.can_edit" no-caps unelevated :color="color" :label="label" :icon="icon ? icon : 'edit'"/>
</template>
<script setup>
defineProps(['label','icon','color'])
</script>
