<template>
  <div class="main">
    <div v-html="popContent"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const popContent = ref('')
// 关于我们列表
const getPopContent = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetNewsList', {
    type: 3,
    page: 1,
    page_size: 1
  })
  console.log('关于我们列表', data)
  const list = data.list || []
  if (!list.length) return
  popContent.value = await getNewsDetail(list[0].id)
}
// 详情
const getNewsDetail = async (id) => {
  $base.showLoadingToast()
  let data = await $Http('apiFindNewsDetails', { id })
  console.log('关于我们详情', data)
  return data.content || ''
}

const init = async () => {
  getPopContent()
}

init()
</script>

<style lang="scss" scoped>
.main {
  padding: 0.2rem;
}
</style>
