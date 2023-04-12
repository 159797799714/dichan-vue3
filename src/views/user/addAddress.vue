<template>
  <div class="main-container">

    <HeadBar popTitle="我的收货地址"></HeadBar>

    <section class="aui-myOrder-content">
      <div class="aui-prompt"><i class="iconfont"></i>填写您的地址信息</div>
      <div class="aui-Address-box">
        <p>
          <input class="aui-Address-box-input" value="" type="text" placeholder="收货人姓名" id="name">
        </p>
        <p>
          <input class="aui-Address-box-input" value="" type="text" placeholder="手机号码" id="phone">
        </p>
        <p class="address-box" id="J_Address_1">
          <input class="aui-Address-box-input" value="" type="text" readonly="" id="J_Address" placeholder="所在地区">
        </p>
        <p>
          <textarea class="aui-Address-box-text" value="" placeholder="街道， 小区门牌等详细地址" rows="3" id="details"></textarea>
        </p>

      </div>
      <div class="aui-out">
        <a href="javascript:;" style="color: #4f79bc;border:1px solid #4f79bc" class="red-color" id="save_address">保存</a>
      </div>
    </section>
  </div>

  <div class="m-cityselect">
    <div class="cityselect-header">
      <p class="cityselect-title">所在地区</p>
      <div class="cityselect-nav"> <a href="javascript:;" class=""></a> <a href="javascript:;"></a> <a
          href="javascript:;"></a> </div>
    </div>
    <ul class="cityselect-content">
      <li class="cityselect-item">
        <div class="cityselect-item-box"></div>
      </li>
      <li class="cityselect-item">
        <div class="cityselect-item-box"></div>
      </li>
      <li class="cityselect-item">
        <div class="cityselect-item-box"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()
import HeadBar from '@/components/HeadBar.vue'

import MsgDialog from '@/components/MsgDialog.vue'


</script>

<style scoped>
@import url('@/assets/style/web.css');

.address-box::after {
  content: '';
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 50%;
  right: 0rem;
  transform: translateY(-50%);
  background: url(../../Public/mobile/img/next.png) no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
}

.aui-Address-box {
  padding: 10px 10px 40px 10px;
  border-bottom: none;
}

.aui-Address-box p {
  border-bottom: 1px solid #eee;
}

.aui-Address-box-input {
  margin: 10px 0;
  border-bottom: none;
}
</style>
