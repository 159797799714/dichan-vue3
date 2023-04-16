<template>
  <div class="rectangle_447">
    <a v-for="(item, index) in list" :key="index" class="item" @click="apply(item)">
      <div class="item_t">
        <div>{{ item.name }}</div>
        <div>赠送数字人民币{{ item.give_figure_money }}</div>
      </div>
      <div class="item_c">
        <div>
          <div>每日收益</div>
          <div>{{ item.rate }}</div>
        </div>
        <div>
          <div>期限</div>
          <div>{{ item.capital_day }}天</div>
        </div>
        <div>
          <div>赠送现金红包</div>
          <div>{{ item.give_fund_money }}</div>
        </div>
        <div class="item_c_last">
          <div>{{ item.capital_day }}天返还本金</div>
          <div>{{ item.money }}</div>
        </div>
      </div>
      <div class="item_c">
        <div>
          <div>{{ item.capital_day }}天发放收益</div>
          <div>{{ item.profit }}</div>
        </div>
        <div>
          <div>¥&nbsp;{{ item.money }}</div>
        </div>
      </div>
      <div class="item_b">
        <div>
          <div>申请进度</div>
          <div>{{ item.progress }}%</div>
        </div>
        <div class="progress">
          <div class="jindu" :style="`width: ${item.progress}%`"></div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { useRouteHook } from '@/hook/routeHook.js'
const { router } = useRouteHook()

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['apply'])

const apply = (item) => {
  emit('apply', item)
}
</script>

<style lang="scss" scoped></style>
