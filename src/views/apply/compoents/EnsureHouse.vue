<template>
  <div class="rectangle_447 rectangleShow">
    <a v-for="(item, index) in list" :key="index" class="houseItemBox"
      @click="goPage({ name: 'houseDetail', query: { id: item.id } })">
      <div class="houseItem">
        <img :src="item.image" alt="" />
        <div class="houseRight">
          <span>{{ item.name }}</span>
          <div v-if="item.project_status == 1" class="houseBtn">立即申请住房</div>
          <div v-else-if="item.project_status == 0" class="houseBtn" style="background:#999;">未开始</div>
          <div v-else-if="item.project_status == 2" class="houseBtn" style="background:#999;">已结束</div>
        </div>
      </div>
      <div class="houseItemBottom">住房110平限量{{ item.profit }}套</div>
    </a>
    <!-- <a class="houseItemBox" @click="goPage({ name: 'houseDetail' })">
      <div class="houseItem">
        <img src="@/assets/image/apply/20230317163940.png" alt="" />
        <div class="houseRight">
          <span>住房90平</span>
          <div class="houseBtn">立即申请住房</div>
        </div>
      </div>
      <div class="houseItemBottom">住房90平限量3000套</div>
    </a>
    <a class="houseItemBox" @click="goPage({ name: 'houseDetail' })">
      <div class="houseItem">
        <img src="@/assets/image/apply/20230317163832.png" alt="" />
        <div class="houseRight">
          <span>住房75平</span>
          <div class="houseBtn">立即申请住房</div>
        </div>
      </div>
      <div class="houseItemBottom">住房75平限量1000套</div>
    </a>
    <a class="houseItemBox" @click="goPage({ name: 'houseDetail' })">
      <div class="houseItem">
        <img src="@/assets/image/apply/20230317163652.png" alt="" />
        <div class="houseRight">
          <span>住房60平</span>
          <div class="houseBtn">立即申请住房</div>
        </div>
      </div>
      <div class="houseItemBottom">住房60平限量1000套</div>
    </a>
    <a class="houseItemBox" href="https://71yunduan.com/mobile/lists.html#">
      <div class="houseItem">
        <img src="@/assets/image/apply/20230317163449.png" alt="" />
        <div class="houseRight">
          <span>住房38平</span>
          <div class="houseBtn houseBtnGray">已截止</div>
        </div>
      </div>
      <div class="houseItemBottom">住房38平限量1000套</div>
    </a> -->
  </div>
</template>

<script setup>
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped></style>
