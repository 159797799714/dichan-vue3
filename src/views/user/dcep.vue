<template>
  <div class="">
    <div class="othertop">
      <a
        class="goback"
        href="javascript:history.back();"
        style="display: flex; align-items: center"
      >
        <svg
          t="1675514239975"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5140"
          width=".6rem"
          height=".6rem"
        >
          <path
            d="M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z"
            p-id="5141"
            fill="#ffffff"
          ></path>
        </svg>
      </a>
      <div class="othertop-font">数字人民币</div>
    </div>
    <div class="dcep_bg"></div>
    <div class="dcep">
      <div class="card">
        <div class="rectangle_455">
          <img src="@/assets/image/user/dcep/maoyeye.png" />
          <div class="balance_box">
            <div class="row">
              <div>余额</div>
              <div class="value">¥&nbsp;{{ userInfo.figure_money }}</div>
            </div>
            <div class="row">
              <div>钱包编号:</div>
              <div class="value">{{ userInfo.figure_money_sn }}</div>
            </div>
          </div>
        </div>
        <div class="rectangle_456">
          <div class="roll_out" @click="showToast">转出</div>
          <div class="roll_in" @click="showToast">转入</div>
        </div>
        <div class="func" @click="showToast">
          <div>
            <img src="@/assets/image/user/dcep/dcep_func1.png" />
            <div>转账</div>
          </div>
          <div>
            <img src="@/assets/image/user/dcep/dcep_func2.png" />
            <div>收付款</div>
          </div>
          <div @click="goPage({ name: 'myWallet', query: { title: '资金明细' } })">
            <img src="@/assets/image/user/dcep/dcep_func3.png" />
            <div>资金明细</div>
          </div>
          <div>
            <img src="@/assets/image/user/dcep/dcep_func4.png" />
            <div>钱包设置</div>
          </div>
        </div>
      </div>
      <div style="height: 0.5rem"></div>
      <div class="card" @click="showToast">
        <div class="rectangle_459">
          <div>
            <div style="font-size: 0.4rem">什么是数字人民币</div>
            <div style="color: #999; margin-top: 0.1rem">应用方式及使用范围</div>
            <div class="btn">
              <div>立即了解</div>
              &nbsp;
              <svg
                t="1675513291106"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3459"
                width=".32rem"
                height=".32rem"
              >
                <path
                  d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z"
                  fill="#007FFC"
                  p-id="3460"
                ></path>
              </svg>
            </div>
          </div>
          <img src="@/assets/image/user/dcep/slice_165.png" style="height: 2rem" />
        </div>
      </div>
      <div style="text-align: center; margin: 1rem 0 0.2rem; font-size: 0.28rem; color: #999999">
        数字人民币服务由中国地产提供
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const userInfo = ref({})
const setUserInfo = async () => {
  $base.showLoadingToast()
  userInfo.value = await userStore.getUserInfo()
  $base.closeToast()
}
setUserInfo()

const showToast = () => {
  $base.showToast('功能待开发')
}
</script>

<style lang="scss" scoped>
.othertop {
  background: transparent;
}

.othertop-font {
  color: #fff;
}
</style>
