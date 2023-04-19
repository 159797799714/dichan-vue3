<template>
  <div class="rectangle_447">
    <a v-for="(item, index) in list" :key="index" class="item" @click="apply(item)">
      <div class="item_t">
        <div>{{ item.name }}</div>
        <div>赠送数字人民币{{ item.give_figure_money }}</div>
      </div>
      <div class="item_c">
        <div>
          <div>赠送现金红包</div>
          <div>{{ item.give_fund_money }}</div>
        </div>
        <div>
          <div>投资期限</div>
          <div>{{ item.invest_day }}天</div>
        </div>
        <div>
          <div>{{ item.capital_day }}天发放收益</div>
          <div>{{ item.profit }}</div>
        </div>
        <div class="haveEnded" :style="setStatus(item).style">
          <div>{{ setStatus(item).text }}</div>
        </div>
        <!--<div style="display:none">¥&nbsp;0万元</div>-->
      </div>
      <div v-show="item.progress" class="item_b">
        <div>
          <div>申请进度</div>
          <!--<div>0%</div>-->
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
import { projectStatusArr } from '@/views/apply/projectData'
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const setStatus = (item) => {
  const data = projectStatusArr[item.project_status] || {}
  if (item.project_status == 1) data.text = `￥${item.money}`
  return data
}

const emit = defineEmits(['apply'])

const apply = (item) => {
  emit('apply', item)
}
</script>

<style lang="scss" scoped></style>
