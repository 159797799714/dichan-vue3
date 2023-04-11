<template>
  <div class="rectangle_447">
    <a v-for="(item, index) in fundList" :key="index" class="item" @click="goDetail(item)">
      <div class="item_t">
        <div>国家数学天元基金</div>
        <div>赠送数字人民币6000.00</div>
      </div>
      <div class="item_c">
        <div>
          <div>每日收益</div>
          <div>10</div>
        </div>
        <div>
          <div>期限</div>
          <div>30天</div>
        </div>
        <div>
          <div>赠送现金红包</div>
          <div>3000.00</div>
        </div>
        <div class="item_c_last">
          <div>15天返还本金</div>
          <div>500.00</div>
        </div>
      </div>
      <div class="item_c">
        <div>
          <div>30天发放收益</div>
          <div>15000.00</div>
        </div>
        <div>
          <div>¥&nbsp;500.00</div>
        </div>
      </div>
      <div class="item_b">
        <div>
          <div>申请进度</div>
          <div>98.00%</div>
        </div>
        <div class="progress">
          <div class="jindu" style="width: 98%"></div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { useRouteHook } from '@/hook/routeHook.js'
const { router } = useRouteHook()

const props = defineProps({
  fundList: {
    type: Array,
    default: () => ['', '']
  }
})

const goDetail = (item) => {
  router.push({ name: 'fundDetail', query: { id: item.id } })
}
</script>

<style lang="scss" scoped></style>
