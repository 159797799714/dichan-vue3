<template>
  <div class="">
    <div class="rectangle_423">
      <div class="left">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          :class="['item', activeIndex === index ? 'active' : '']"
          @click="clickTab(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="right">
        <div class="item" style="display: block">{{ tabList[activeIndex] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { route } = useRouteHook()

const tabList = ['其他问题', '提现问题', '申请保障', '充值问题', '客服问题', '常见问题']
const activeIndex = ref(0)

const { index = 0 } = route.query
activeIndex.value = Number(index)

const clickTab = (index) => {
  activeIndex.value = index
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
