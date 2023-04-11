<template>
  <div class="rectangle_447">
    <a v-for="(item, index) in fundList" :key="index" class="item" @click="clickItem(item)">
      <div class="item_t">
        <div>健康保障基金</div>
        <div>赠送数字人民币30000.00</div>
      </div>
      <div class="item_c">
        <div>
          <div>赠送现金红包</div>
          <div>15000.00</div>
        </div>
        <div>
          <div>投资期限</div>
          <div>15天</div>
        </div>
        <div>
          <div>15天发放收益</div>
          <div>90000.00</div>
        </div>
        <div class="haveEnded">
          <div>已结束</div>
        </div>
        <!--<div style="display:none">¥&nbsp;0万元</div>-->
      </div>
      <div class="item_b">
        <div>
          <div>申请进度</div>
          <!--<div>0%</div>-->
          <div>96.00%</div>
        </div>
        <div class="progress">
          <div class="jindu" style="width: 96%"></div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  fundList: {
    type: Array,
    default: () => ['']
  }
})
const clickItem = (item) => {}
</script>

<style lang="scss" scoped></style>
