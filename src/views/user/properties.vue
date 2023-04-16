<template>
  <!-- 流程图部分 -->
  <div class="process">
    <!-- <img
        class="process-img"
        src="../Public/mobile/img/property1.png"
        alt=""
      /> -->
    <div class="process-right">
      <!-- 已分配房产 -->
      <div class="step">
        <img class="step-bar" src="@/assets/image/user/properties/property8.png" alt="" />
        <div class="step-right">
          <img src="@/assets/image/user/properties/property5.png" alt="" />
          <div class="step-text1">已分配房产</div>
          <div class="step-text2">请业主按照流程办理收房手续</div>
        </div>
      </div>
      <!-- 缴存维修基金 -->
      <div class="step">
        <!-- 已缴存维修基金 -->
        <img class="step-bar" src="@/assets/image/user/properties/property10.png" alt="" />
        <!-- -->
        <!-- 未缴存维修基金 -->

        <div class="step-right step-right1">
          <img src="@/assets/image/user/properties/property6.png" alt="" />
          <div class="step-text1">缴存维修基金</div>
          <div class="step-text2">正在申报维修基金，请耐心等候</div>
        </div>
        <img class="step-right-tip" src="@/assets/image/user/properties/property12.png" alt="" />
        <a class="step-right-btn">缴存维修基金</a>
      </div>
      <!-- 可办理产证 -->
      <div class="step">
        <!-- 已提交身份证 -->
        <img class="step-bar" src="@/assets/image/user/properties/property9.png" alt="" />
        <!-- -->
        <!-- 未提交身份证 -->

        <div class="step-right step-right1">
          <img src="@/assets/image/user/properties/property7.png" alt="" />
          <div class="step-text1">可办理产证</div>
          <div class="step-text2">您的资料已收齐，房产证正在办理中，请耐心等候</div>
        </div>
        <img class="step-right-tip" src="@/assets/image/user/properties/property12.png" alt="" />
        <div class="step-right-btn idCard" data-type="2">请先缴存维修基金！</div>
      </div>
      <!-- 已出房产证可领取 -->
      <div class="step">
        <img class="step-bar" src="@/assets/image/user/properties/property9.png" alt="" />
        <div class="step-right step-right1">
          <img src="@/assets/image/user/properties/property4.png" alt="" />
          <div class="step-text1">已出房产证可领取</div>
          <div class="step-text2">
            请于周一至周五8:30-12:0014:00-17:30，业主本人 携带身份证，前往不动产登记中心领取房产证
          </div>
        </div>
      </div>
      <!-- 已领取房产证 -->
      <div class="step">
        <img class="step-bar" src="@/assets/image/user/properties/property11.png" alt="" />
        <div class="step-right step-right1">
          <img src="@/assets/image/user/properties/property5.png" alt="" />
          <div class="step-text1">已领取房产证</div>
          <div class="step-text2">房产证领取成功</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'

const popTitle = ref('错误')
</script>

<style lang="scss" scoped>
.propertyHeader {
  width: 100%;
  height: 109px;
  font-size: 0.32rem;
  text-align: center;
  color: #fff;
  padding-top: 20px;
  background: url(../Public/mobile/img/propertyTop.png) no-repeat;
  background-size: cover;
  position: relative;
}

.propertyHeader .goback {
  position: absolute;
  left: 0;
  top: 10px;
}

/* 流程图样式 */
.process-img {
  width: 2rem;
  position: absolute;
  left: 10px;
}

.process-right {
  padding-left: 10px;
  padding-top: 25px;
}

.step {
  height: 153px;
  position: relative;
}

.step .step-bar {
  width: 100px;
  position: absolute;
}

.step-right {
  position: absolute;
  left: 50px;
  text-align: center;
  width: 155px;
}

.step-right1 {
  top: -15px;
}

.step-right img {
  width: 45px;
}

.step-right .step-text1 {
  font-size: 0.3rem;
  color: #ff7006;
  padding-bottom: 5px;
}

.step-right .step-text2 {
  font-size: 0.2rem;
  color: #747474;
}

.step-right-tip {
  width: 50px;
  position: absolute;
  left: 210px;
  top: 40px;
}

.step-right-btn {
  position: absolute;
  left: 255px;
  top: 38px;
  padding: 6px 3px;
  border-radius: 20px;
  font-size: 0.22rem;
  color: #fff;
  background: linear-gradient(to right, #7992fb, #4d6efa);
}
</style>
