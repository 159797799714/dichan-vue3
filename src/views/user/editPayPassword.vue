<template>
  <div class="">
    <HeadBar popTitle="修改支付密码"></HeadBar>
    <div class="login_bg">
      <form action="https://71yunduan.com/user/pwd_pay.html" method="post" id="ifr" class="form">

        <!--<div class="input_text cert">-->
        <!--    <label>原交易密码</label>-->
        <!--    <input type="text" name="oldpwd" id="oldpwd" placeholder="请输入交易密码">-->
        <!--</div>-->
        <!--<div class="input_text cert">-->
        <!--    <label>新交易密码</label>-->
        <!--    <input type="password" name="pwd" id="pwd" placeholder="请输入新交易密码">-->
        <!--</div>-->
        <!--<div class="input_text cert">-->
        <!--    <label>确认密码</label>-->
        <!--    <input type="password" name="pwd2" id="pwd2" placeholder="请输入确认密码">-->
        <!--</div>-->
        <div class="form-item">
          <label class="form-item_label">旧密码</label>
          <div class="form-item_content">
            <input type="text" name="oldpwd" id="oldpwd" placeholder="请输入旧密码">
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">新密码</label>
          <div class="form-item_content">
            <input type="password" name="pwd" id="pwd" placeholder="请输入新密码" maxlength="6"
              onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)">
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">确认密码</label>
          <div class="form-item_content">
            <input type="password" name="pwd2" id="pwd2" placeholder="请再次输入新密码" maxlength="6"
              onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)">
          </div>
        </div>
        <!--<div class="form-item">-->
        <!--    <label class="form-item_label">设置6位数字支付密码</label>-->
        <!--    <div class="form-item-pwd_content">-->
        <!--        <div class="pwd-input_list">-->
        <!--            <div class="input_item"></div>-->
        <!--            <div class="input_item"></div>-->
        <!--            <div class="input_item"></div>-->
        <!--            <div class="input_item"></div>-->
        <!--            <div class="input_item"></div>-->
        <!--            <div class="input_item"></div>-->
        <!--        </div>-->
        <!--        <input class="pwd_input" type="number" maxlength="6"/>-->
        <!--    </div>-->
        <!--</div>-->
        <input type="submit" class="input_btn" value="确认">
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()
import HeadBar from '@/components/HeadBar.vue'

import MsgDialog from '@/components/MsgDialog.vue'


</script>

<style lang="scss" scoped>
.login_bg {
  margin: 0 0.3rem;
}
</style>
