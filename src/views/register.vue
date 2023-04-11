<template>
  <div class="mobile">
    <div class="logo_title">
      <h1>注册账户</h1>
      <p>
        已有账号，<RouterLink to="/login"><a>立即登录</a></RouterLink>
      </p>
    </div>
    <div class="container_page">
      <!--<div style="text-align: center;">-->
      <!--    <img src="/Public/uploads/mlogo2.png" width="50%">-->
      <!--</div>-->
      <div class="reg_bg">
        <form action="https://71yunduan.com/mobile/reg.html" method="post" id="ifr">
          <div class="input_text log">
            <label>+86</label>
            <input type="text" id="phone" name="phone" placeholder="请输入手机号" maxlength="11" />
          </div>
          <div class="input_text">
            <input type="password" placeholder="请设置密码" id="pwd" name="pwd" />
          </div>
          <div class="input_text">
            <input type="password" placeholder="请再输入密码" id="pwd2" name="pwd2" />
          </div>

          <div class="input_text" style="position: relative">
            <input type="text" name="code" placeholder="请输入验证码" style="width: 60%" />
            <div class="pull-left codeImg">
              <img
                src="./注册_files/verify.html"
                id="verify_img"
                alt="点击刷新"
                title="点击刷新"
                style="cursor: pointer; margin-left: 10px"
              />
            </div>
          </div>
          <div class="input_text">
            <input
              type="password"
              placeholder="请再输入支付密码"
              id="zfpwd"
              name="zfpwd"
              maxlength="6"
              onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)"
            />
          </div>
          <!--<div class="input_text">-->
          <!--    <input type="text" id="code" name="code" placeholder="请输入图形验证码">-->
          <!--    <button id="imgcode" type="button" style="font-style: italic;">1234</button>-->
          <!--</div>-->
          <!---->
          <!--    <div class="input_text log">-->
          <!--        <i><img src="/Public/mobile/img/icon_code.png"></i>-->
          <!--        <input type="text" id="smsCode" name="smscode" placeholder="请输入短信验证码">-->
          <!--        <button id="getcode" type="button" onclick="regcode(60)">发送</button>-->
          <!--    </div>-->
          <!---->

          <div class="input_text">
            <input type="text" name="top" value="955506" placeholder="请输入邀请码(必填)" />
          </div>
          <div class="error_tips"></div>
          <input type="submit" class="input_btn" value="立即注册" />
          <div
            style="display: flex; justify-content: center; align-items: center; text-align: center"
          >
            <input type="checkbox" value="0" checked="" />&nbsp; 已阅读并同意<span
              style="color: #5570ff"
              >《用户协议》</span
            >与<span style="color: #5570ff">《隐私协议》</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.input_text {
  overflow: hidden;
}

.codeImg {
  position: absolute;
  top: 0;
  right: 0;
}

.codeImg img {
  height: 1rem;
  width: 2.2rem;
  border-radius: 5rem;
}

a {
  color: #98a4fa;
}
</style>
