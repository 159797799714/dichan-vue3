<template>
  <div class="">
    <div class="transfer">
      <div class="tabs">
        <div class="active" value="1">可提现余额</div>
        <div value="2" class="">可用余额</div>
      </div>
      <div class="balance">
        <div>可提现余额:&nbsp;¥&nbsp;<span id="userMoney">0.00</span></div>
        <div>可用余额:¥&nbsp;<span id="withdrawmoney">0.00</span></div>
      </div>
      <!-- 提现 -->
      <form action="https://71yunduan.com/user/acre_transfers.html" method="post" id="ifr" class="form">
        <input type="hidden" name="type" id="type" value="">

        <div class="form-item">
          <label class="form-item_label">对方手机号码</label>
          <div class="form-item_content">
            <input name="phone" id="phone" placeholder="请输入对方手机号码">
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">对方姓名</label>
          <div class="form-item_content">
            <input id="name" name="name" placeholder="请输入对方姓名">
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">转出金额</label>
          <div class="form-item_content form-item_many">
            <input name="money" id="money" placeholder="请输入转出金额" onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)">
            <!--<div id="all" style="color:#4F7CF3;font-size:.26rem">全部</div>-->
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">支付密码</label>
          <div class="form-item-pwd_content">
            <div class="pwd-input_list">
              <div class="input_item"></div>
              <div class="input_item"></div>
              <div class="input_item"></div>
              <div class="input_item"></div>
              <div class="input_item"></div>
              <div class="input_item"></div>
            </div>
            <input class="pwd_input" name="password2" id="pwd" type="number" maxlength="6">
          </div>
        </div>
        <input type="submit" value="转账" class="input_btn">
      </form>
      <!-- 提现  end-->
    </div>
    <!-- 记录 -->
    <div style="height: .24rem;background: #F1F1F1;margin-top: .6rem"></div>
    <div class="transfer_record">
      <div style="font-size: .3rem;">最近转账记录</div>
      <div class="no_record">
        <img src="./转账_files/no_record.png" style="height: 3rem;">
      </div>
      <div class="record_list">
      </div>
    </div>

    <MsgDialog ref="MsgDialogRef" :popTitle="popTitle"></MsgDialog>
    2
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'

const popTitle = ref('错误')

</script>

<style lang="scss" scoped></style>
