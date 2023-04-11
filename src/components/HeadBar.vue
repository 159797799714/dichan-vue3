<template>
  <div class="header">
    <div class="icon" @click="goBack"><img src="@/assets/image/goback.png" /></div>
    <div class="navigate-title">{{ popTitle || title }}</div>
    <a class="bill" @click="goPage({ path: rightInfo.path })">{{ rightInfo.name }}</a>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

const route = useRoute()
const router = useRouter()

const title = ref('')
const rightInfo = shallowRef({})

defineProps({
  popTitle: {
    type: String,
    default: ''
  }
})

watch(
  () => route.meta,
  (val) => {
    console.log('子页面路由变化了', val)
    title.value = route.meta.title || ''
    rightInfo.value = route.meta.rightInfo || {}
  },
  {
    immediate: true
  }
)

const goBack = () => {
  console.log('history', window.history)
  if (window.history.length > 1) return router.go(-1)
  router.push({ path: '/' })
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;

  .icon {
    height: 0.8rem;
    width: 0.8rem;

    img {
      display: inline-block;
      vertical-align: middle;
      width: 0.5rem;
      height: 0.5rem;
      margin: auto;
    }
  }

  .navigate-title {
    padding-right: 0.8rem;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    text-align: center;
    font-size: 0.32rem;
  }

  .bill {
    font-size: 0.26rem;
  }
}
</style>
