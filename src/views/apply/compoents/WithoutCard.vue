<template>
  <div class="rectangle_447 rectangleShow">
    <a v-for="(item, index) in list" :key="index" class="item" @click="apply(item)">
      <div class="item_t">
        <div>{{ item.name }}</div>
        <div style="color: red; font-weight: bold">
          申请时间截止到{{ setTime(item.end_time) }}
        </div>
      </div>
      <div class="item_c">
        <!--<div>-->
        <!--    <div>赠送现金红包</div>-->
        <!--    <div>0.00</div>-->
        <!--</div>-->
        <!--<div>-->
        <!--    <div>投资期限</div>-->
        <!--    <div>15天</div>-->
        <!--</div>-->
        <div>
          <div>提现金额</div>
          <div>
            {{ item.low_withdraw_quo || item.low_withdraw_money }}-{{
              item.high_withdraw_quo || item.high_withdraw_money
            }}
          </div>
        </div>
        <div>
          <!--<div>项目规模</div>-->
          <!--<div>¥&nbsp;200.00</div>-->
          <div v-if="item.project_status == 1">立即申请</div>
          <div v-if="item.project_status == 2" class="">已结束</div>
        </div>
        <!--<div style="display:none">¥&nbsp;0万元</div>-->
      </div>
      <div class="item_b">
        <div>
          <div>申请进度</div>
          <!--<div>0%</div>-->
          <div>{{ item.progress }}%</div>
        </div>
        <div class="progress">
          <div class="jindu" :style="`width: ${item.progress}%`"></div>
        </div>
      </div>
      <!-- </a> -->
    </a>
  </div>
</template>

<script setup>
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

const setTime = (time) => $base.DateFormat(time, 'MM月dd日hh时')
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
