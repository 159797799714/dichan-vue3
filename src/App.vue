<template>
  <RouterView/>
</template>

<script setup>
import { useRoute, RouterView } from 'vue-router'
const route = useRoute()
</script>
<style scoped></style>
