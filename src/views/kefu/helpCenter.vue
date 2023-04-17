<template>
  <div class="">
    <div v-show="hadLoad" class="rectangle_423">
      <div class="left">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          :class="['item', activeName === item.name ? 'active' : '']"
          @click="clickTab(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="right">
        <div class="item" style="display: block" v-html="activeContent"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { route } = useRouteHook()

const hadLoad = ref(false)
const activeName = ref('')

const { name = 'other_question' } = route.query
activeName.value = name

const tabList = ref([])

const activeContent = computed(() => {
  const activeList = tabList.value.filter(item => item.name == activeName.value)
  if (!activeList.length) return ''
  return activeList[0]['content'] || activeList[0]['title'] || '暂无内容'
})
const getTabList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiQuestionList')
  console.log('客服问题', data)
  hadLoad.value = true
  tabList.value = data || []
  
}
getTabList()


const clickTab = item => {
  activeName.value = item.name
}
</script>

<style lang="scss" scoped>
.rectangle_423 {
  display: flex;
  min-height: 100%;
}
.rectangle_423 .left {
  width: 2rem;
  text-align: center;
  background: #fcfcfc;
}
.rectangle_423 .left .item {
  padding: 0.28rem 0;
  font-size: 0.28rem;
}
.rectangle_423 .left .item.active {
  color: #4f7cf3;
}
.rectangle_423 .right {
  flex: 1;
}
.rectangle_423 .right .item {
  display: none;
}
</style>
