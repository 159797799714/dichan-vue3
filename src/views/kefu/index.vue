<template>
  <div>
    <div class="regards">
      <div class="left">
        <h2>Hi~,有什么要咨询的吗?</h2>
        <p>中国地产客服为您服务</p>
      </div>
      <div class="right">
        <img src="@/assets/image/regards.png" style="width: 1.8rem" />
      </div>
    </div>

    <div class="rectangle_326">
      <a @click="goHelpCenter('recharge_protection')">
        <img src="@/assets/image/kefu/kf1.png" />
        <font>充值问题</font>
      </a>
      <a @click="goHelpCenter('withdraw_question')">
        <img src="@/assets/image/kefu/kf2.png" />
        <font>提现问题</font>
      </a>
      <a @click="goHelpCenter('apply_protection')">
        <img src="@/assets/image/kefu/kf3.png" />
        <font>申请保障</font>
      </a>
      <a @click="goOfficialSop">
        <img src="@/assets/image/kefu/kf4.png" />
        <font>官方社群</font>
      </a>
    </div>

    <div class="rectangle_327">
      <a :href="configStore.kefuLink">
        <div class="btn">联系在线客服</div>
      </a>
      <div class="btn_d">
        <div>猜你想问</div>
        <div style="display: flex; align-items: center; font-weight: 300">
          <a @click="goHelpCenter('other_question')" style="color: #999"
            >查看更多<img src="@/assets/image/kefu/next.png" style="height: 0.3rem"
          /></a>
        </div>
      </div>
    </div>
    <div class="rectangle_328">
      <img src="@/assets/image/kefu/kf_b.png" />
    </div>
  </div>
</template>

<script setup>
import { useRouteHook } from '@/hook/routeHook.js'
const { router } = useRouteHook()

import { useConfigStore } from '@/store/config'
const configStore = useConfigStore()
configStore.getConfig()

const goHelpCenter = name => {
  router.push({
    name: 'helpCenter',
    query: { name }
  })
}
const goOfficialSop = () => {
  router.push({
    name: 'officialSop'
  })
}
</script>

<style lang="scss" scoped>
.mobile {
  background-color: #e4f0fe;
}
</style>
