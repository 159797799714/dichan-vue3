<template>
  <div class="mobile">
    <div style="height: 3.9rem">
      <img src="@/assets/image/apply/apply_bg.png" />
    </div>
    <div class="apply">
      <div class="tabs">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          :class="activeVal === item.value ? 'active' : ''"
          @click="tabClick(item.value, index)"
        >
          {{ item.label }}
        </div>
      </div>

      <component :is="showComponent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'

import FundList from './compoents/FundList.vue' // 2023二期
import FundEndlist from './compoents/FundEndlist.vue' // 2023一期
import EnsureHouse from './compoents/EnsureHouse.vue' // 提现专属卡
import WithoutCard from './compoents/WithoutCard.vue' //2023保障住房
import CouponList from './compoents/CouponList.vue' // 提现免费券

const tabList = [
  {
    label: '2023二期',
    value: 0,
    component: FundList
  },
  {
    label: '提现免费券',
    value: 4,
    component: CouponList
  },
  {
    label: '2023保障住房',
    value: 3,
    component: EnsureHouse
  },
  {
    label: '提现专属卡',
    value: 2,
    component: WithoutCard
  },
  {
    label: '2023一期',
    value: 1,
    component: FundEndlist
  }
]

const activeVal = ref(0)
const showComponent = shallowRef(tabList[0]['component'])

const tabClick = (val, index) => {
  activeVal.value = val
  showComponent.value = tabList[index]['component']
}
</script>

<style lang="scss">
.apply {
  position: relative;
  top: -3.9rem;
}
.apply .tabs div {
  -webkit-box-flex: 2;
  -webkit-flex: 2 0 auto;
  flex: 2 0 auto;
  padding: 10px 0;
  text-align: center;
  width: 140px;
  margin: 0 20px;
}

.apply .tabs {
  overflow-x: auto;
  justify-content: inherit !important;
  font-size: 0.3rem !important;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE10+ */
}

.apply .tabs::-webkit-scrollbar {
  display: none;
}

.apply .tabs .active {
  font-size: 0.4rem !important;
}

.rectangle_447 {
  display: block;
}

.rectangle_447 .item_c_last {
  border-radius: 0 !important;
  /* font-size: 0 !important; */
  color: currentColor !important;
  background: none !important;
  padding: 0 !important;
  font-weight: initial !important;
}

.mobile {
  overflow: hidden;
  overflow-y: auto;
}

.rectangle_447 .item_c > .haveEnded:nth-last-of-type(1) {
  background: #999;
}

.rectangle_447 .item-btn-money {
  border-radius: 3rem;
  font-size: 0.28rem;
  background: #4f7cf3;
  color: #fff;
  font-weight: 300;
  padding: 0.18rem 0.3rem;
  font-weight: 300;
  width: 30%;
  text-align: center;
  margin: 10px auto 0;
}

.houseItemBox {
  position: relative;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
  padding-bottom: 30px;
  display: block;
}

.houseItem {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.houseItem img {
  width: 170px;
}

.houseItemBottom {
  font-size: 0.32rem;
  color: #000;
  font-weight: bold;
  position: absolute;
  left: 15px;
  bottom: 10px;
}

.houseRight {
  padding-left: 20px;
}

.houseRight span {
  font-size: 0.32rem;
  color: #000;
  font-weight: bold;
}

.houseRight .houseBtn {
  font-size: 0.28rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 5px 8px;
  color: #fff;
  margin-top: 20px;
  background: linear-gradient(to right, #0162ff, #19b0ff);
}

.item_c .itemLeftImg {
  width: 180px;
}
.introduce {
  font-size: 0.28rem;
  font-weight: bold;
  padding-top: 10px;
  line-height: 30px;
  padding: 10px 15px;
}

.houseBtnGray {
  background: #999 !important;
}
</style>
