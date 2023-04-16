<template>
  <div class="rectangle_447 rectangleShow">
    <a v-for="(item, index) in list" :key="index" class="houseItemBox" @click="apply(item)">
      <div class="houseItem">
        <img :src="item.image" alt="" />
        <div class="houseRight">
          <span>{{ item.name }}</span>
          <div v-if="item.project_status == 1" class="houseBtn">立即申请住房</div>
          <div v-else-if="item.project_status == 0" class="houseBtn" style="background: #999">
            未开始
          </div>
          <div v-else-if="item.project_status == 2" class="houseBtn" style="background: #999">
            已结束
          </div>
        </div>
      </div>
      <div class="houseItemBottom">住房110平限量{{ item.profit }}套</div>
    </a>
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

const emit = defineEmits(['apply'])

const apply = (item) => {
  emit('apply', item)
}
</script>

<style lang="scss" scoped></style>
