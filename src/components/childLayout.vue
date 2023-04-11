<template>
  <div class="layout">
    <HeadBar></HeadBar>
    <div class="layout-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import HeadBar from '@/components/HeadBar.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .layout-content {
    .header-blank {
      height: 1rem;
    }
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>
