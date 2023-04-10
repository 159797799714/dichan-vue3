<template>
  <div class="layout">
    <div class="header">
      <div class="icon" @click="goBack"><img src="@/assets/image/goback.png"></div>
      <div class="navigate-title">{{ title }}</div>
      <a class="bill" @click="goPage(rightInfo.path)">{{ rightInfo.name }}</a>
    </div>
    <div class="layout-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, nextTick, watch } from 'vue'
import { RouterView, useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';

const route = useRoute()
const router = useRouter()

const title = ref('')
const rightInfo = shallowRef({})

watch(
  () => route.meta,
  val => {
    console.log('变化了', val)
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

const goPage = path => {
  path && router.push({ path })
}

</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;

    .icon {
      height: .8rem;
      width: .8rem;

      img {
        display: inline-block;
        vertical-align: middle;
        width: .5rem;
        height: .5rem;
        margin: auto;
      }
    }

    .navigate-title {
      padding-right: .8rem;
      box-sizing: border-box;
      flex: 1;
      overflow: hidden;
      text-align: center;
      font-size: .32rem;
    }

    .bill {
      font-size: .26rem;
    }
  }

  .layout-content {
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>
