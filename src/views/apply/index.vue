<template>
  <div class="">
    <div style="height: 3.9rem">
      <img src="@/assets/image/apply/apply_bg.png" />
    </div>
    <div class="apply">
      <div class="tabs">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          :class="activeVal === item.plate ? 'active' : ''"
          @click="tabClick(item)"
        >
          {{ item.name }}
        </div>
      </div>

      <component :is="showComponent" :list="projectList" @apply="goDetail"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'

import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import { useApplyItemStore } from '@/store/applyItem'
const applyItemStore = useApplyItemStore()

import FundList from './compoents/FundList.vue' // 2023二期
import FundEndlist from './compoents/FundEndlist.vue' // 2023一期
import EnsureHouse from './compoents/EnsureHouse.vue' // 提现专属卡
import WithoutCard from './compoents/WithoutCard.vue' //2023保障住房
import CouponList from './compoents/CouponList.vue' // 提现免费券

const plateObj = {
  1: CouponList,
  2: FundEndlist,
  3: FundList,
  4: WithoutCard,
  5: EnsureHouse,
  6: WithoutCard
}

const activeVal = ref('')
const showComponent = shallowRef('')

const tabList = ref([])
const projectList = ref([])
// 项目分类列表
const getTablist = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiProjectCategoryList')
  console.log('项目分类列表', data)
  const list = data || []

  tabList.value = list

  if (!list.length) return
  const { plate, id } = list[0] || {}
  activeVal.value = plate
  projectList.value = await getProjectList(id)
  showComponent.value = plateObj[plate]
}

// 分类下项目列表
const getProjectList = async (id) => {
  $base.showLoadingToast()
  let data = await $Http('apiProjectList', { id })
  console.log('分类下项目列表', data)
  return data || []
}

const tabClick = async (item) => {
  if (item.plate === activeVal.value) return

  $base.showLoadingToast()

  activeVal.value = item.plate
  showComponent.value = plateObj[item.plate]

  projectList.value = await getProjectList(item.id)
}

const goDetail = async (item) => {
  await applyItemStore.setInfo(item)
  goPage({ name: 'houseDetail', query: { id: item.id } })
}

const init = async () => {
  $base.showLoadingToast()
  await getTablist()
}
init()
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
