<template>
  <div class="">
    <div class="main" v-html="content"></div>

    <div class="invest_btn">
      <a @click="goPage({ name: 'applyNow', query: { id, money } })">立即申请</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage, route } = useRouteHook()

import { useApplyItemStore } from '@/store/applyItem'
const applyItemStore = useApplyItemStore()

const content = ref()
const money = ref(0)

const { id } = route.query

// 详情
const getContent = async (id) => {
  if (!id) return (content.value = '项目不存在')
  console.log('项目详情', applyItemStore.content)
  content.value = applyItemStore.content || '暂无数据'
  money.value = applyItemStore.money || 0
}
getContent(id)
</script>

<style lang="scss" scoped>
.main {
  padding: 0.2rem;
}
</style>
