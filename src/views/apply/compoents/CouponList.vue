<template>
  <!-- 提现优惠劵 -->
  <div class="rectangle_447">
    <a v-for="(item, index) in list" :key="index" class="item"
      @click="goPage({ name: 'applyNow', query: { id: item.id } })">
      <div class="item_t">
        <div>{{ item.name }}</div>
      </div>
      <div class="item_c">
        <div class="itemLeftImg">
          <img :src="`@/assets/image/apply/${Number(item.money)}.png`" alt="" />
        </div>
        <div>
          <div>立即兑换</div>
        </div>
      </div>
      <div class="introduce">
        介绍：保障款提现至北京银行专属联名卡，可减免{{ item.money }}万提现额度的手续费，可拆分使用。
      </div>
      <div v-show="item.progress" class="item_b">
        <div>
          <div>申请进度</div>
          <div>{{ item.progress }}%</div>
        </div>
        <div class="progress">
          <div class="jindu" :style="`width:${item.progress}%`"></div>
        </div>
      </div>
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
</script>

<style lang="scss" scoped></style>
