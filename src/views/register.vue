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
            <input type="text" v-model="formData.mobile" placeholder="请输入手机号" maxlength="11" />
          </div>
          <div class="input_text">
            <input type="password" v-model="formData.password" placeholder="请设置密码" maxlength="16" minlength="6"/>
          </div>
          <div class="input_text">
            <input type="password" v-model="formData.confirm_password" placeholder="请再输入密码" maxlength="16" minlength="6"/>
          </div>

          <div class="input_text" style="position: relative">
            <input type="text" v-model="formData.captcha" placeholder="请输入验证码" style="width: 60%" />
            <div class="pull-left codeImg">
              <img :src="codeImgUrl" id="verify_img" alt="点击刷新" title="点击刷新" style="cursor: pointer; margin-left: 10px"
                @click="changeCode" />
            </div>
          </div>
          <div class="input_text">
            <input type="password" v-model="formData.pay_password" placeholder="请再输入支付密码" maxlength="6"
              onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)" />
          </div>

          <div class="input_text">
            <input type="text" v-model="formData.invite_code" placeholder="请输入邀请码(必填)" />
          </div>
          <div class="error_tips"></div>

          <div :class="['input_btn', canSummit? '': 'no_submit']"  @click="submitAction" >立即注册</div>
          <!-- <input type="submit" class="input_btn" value="立即注册" /> -->


          <div style="display: flex; justify-content: center; align-items: center; text-align: center">
            <input type="checkbox" value="0" checked="" />&nbsp; 已阅读并同意<span style="color: #5570ff">《用户协议》</span>与<span
              style="color: #5570ff">《隐私协议》</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'


import { useRouteHook } from '@/hook/routeHook.js'
const { navigateTo } = useRouteHook()

import {useUserStore} from '@/store/userInfo'
const userStore = useUserStore()


const formData = ref({
  mobile: '',
  password: '123456',
  confirm_password: '123456',
  captcha: '',
  pay_password: '',
  invite_code: '9685473'
})
const checkVal = ref(true)


const codeImgUrl = ref('')

const changeCode = () => {
  const random = Math.random()
  codeImgUrl.value = `http://api.zgdc2023tx.com/captcha?t=${random}`
}

changeCode()

const checkSubmit = (toast = false) => {
  const {mobile, password, confirm_password, captcha, invite_code} = formData.value
  
  toast = toast ? $base.showToast: () => {}

  if ((mobile.toString()).length !== 11) {
    toast('请输入11位的手机号码')
    return false
  }
  if ((password.toString()).length < 6) {
    toast('账户密码不能少于6位')
    return false
  }
  if ((confirm_password.toString()).length < 6) {
    toast('确认密码不能少于位')
    return false
  }
  if ((captcha.toString()).length < 4) {
    toast('请正确输入4位图形验证码！')
    return false
  }
  if (!invite_code) {
    toast('请输入邀请码！')
    return false
  }
  var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/
  if (!myreg.test(mobile)) {
    toast('手机号码格式不正确！')
    return false
  }
  if (password !== confirm_password) {
    toast('两次密码不一致！')
    return false
  }
  return true
}

const canSummit = computed(() => {
  return checkSubmit()
})

const submitAction = async () => {
  console.log('checkVal', checkVal.value) 
  if (!checkVal.value) return $base.showToast('请同意用户协议-隐私协议')

  if (!checkSubmit(true)) return


  $base.showLoadingToast('注册中')
  let data = await $Http('apiRegister', formData.value)
  console.log('登录返回', data)
  if (!data) return
  userStore.setUserInfo(data.userinfo || {})
  navigateTo({ name: 'home' })
  
}

</script>

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
.no_submit{
  background: #cccccc;
  color: #fff;
  border-color: #cccccc;
}
</style>
