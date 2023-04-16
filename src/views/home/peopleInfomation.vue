<template>
  <div class="main">
    <div class="content" v-html="content"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useRouteHook } from '@/hook/routeHook'
const { route } = useRouteHook()

const content = ref()

const { id } = route.query

// 详情
const getContent = async (id) => {
  if (!id) return (content.value = '资讯不存在')
  $base.showLoadingToast()
  let data = await $Http('apiFindNewsDetails', { id })
  console.log('资讯详情', data)
  content.value = data.content || '暂无数据'
}
getContent(id)
</script>

<style lang="scss" scoped>
.main {
  padding: 0.2rem;
}

.content {
  line-height: 1.5;
}
</style>
