<template>
  <div class="headBar">
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
.headBar {
  padding-top: calc(constant(safe-area-inset-bottom) + .3rem);
  padding-top: calc(env(safe-area-inset-bottom) + .3rem);
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  text-align: center;
  z-index: 200;
  line-height: 0.9rem;
  font-size: 0.3rem;
  color: #000;

  .icon {
    position: absolute;
    left: 0;
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
    padding-left: 1rem;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    text-align: center;
    font-size: 0.32rem;
  }

  .bill {
    width: 1rem;
    text-align: center;
    font-size: 0.26rem;
  }
}
</style>
