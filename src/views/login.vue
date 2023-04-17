<template>
  <div class="mobile">
    <div class="logo_title">
      <h1>欢迎登录</h1>
      <p>
        还没有账号，
        <RouterLink to="/register"><a>立即注册</a></RouterLink>
      </p>
    </div>
    <div class="login_bg">
      <form>
        <div class="input_text log">
          <label>+86</label>
          <input type="text" v-model="formData.mobile" placeholder="请输入手机号码" />
        </div>
        <div class="input_text log">
          <!--<label>密码</label>-->
          <input
            type="password"
            v-model="formData.password"
            placeholder="请输入密码"
            style="width: 100%"
          />
        </div>
        <div class="error_tips"></div>
        <!-- <input type="btn" :class="['input_btn', canSummit? '': 'no_submit']" value="登录" @click="submitAction" /> -->
        <div type="btn" :class="['input_btn', canSummit ? '' : 'no_submit']" @click="submitAction">
          登录
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center; text-align: center"
        >
          <input type="checkbox" v-model="checkVal" value="0" checked="" />&nbsp; 已阅读并同意<span
            style="color: #5570ff"
            >《用户协议》</span
          >与<span style="color: #5570ff">《隐私协议》</span>
        </div>
        <!--<p class="p2 re"><a href="reg.html">注册账号</a></p>-->
        <!--<p class="p1"><a href="forget.html">忘记密码?</a></p>-->
      </form>
    </div>
    <div
      class="kefu"
      style="
        width: 0.5rem;
        height: 0.5rem;
        padding: 0.2rem;
        background: #e3e3e3;
        border-radius: 5rem;
        text-align: center;
        position: fixed;
        top: 10rem;
        right: 0.5rem;
      "
    >
      <a @click="goPage({ name: 'kefu' })"
        ><img src="@/assets/image/regards.png" style="height: 0.5rem"
      /></a>
      <div style="white-space: nowrap; position: absolute; bottom: -50%; left: 0">在线客服</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useRouteHook } from '@/hook/routeHook.js'
const { goPage, navigateTo } = useRouteHook()

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

// 进入登录页即清空登录信息
userStore.clearAll()

const formData = ref({
  mobile: '',
  password: ''
})
const checkVal = ref(true)

const checkSubmit = (toast = false) => {
  const { mobile, password } = formData.value
  if (mobile.length !== 11) {
    toast && $base.showToast('请输入11位的手机号码')
    return false
  }
  if (password.length < 6) {
    toast && $base.showToast('账户密码不能少于6位')
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
  if (!canSummit.value) return

  var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  if (!myreg.test(formData.value.mobile)) {
    $base.showToast('手机格式不正确！')
    return false
  }

  $base.showLoadingToast('登录中')
  let data = await $Http('apiLogin', formData.value)
  console.log('登录返回', data)
  if (!data) return
  userStore.setUserInfo(data.userinfo || {})
  navigateTo({ name: 'home' })
}
</script>

<style lang="scss" scoped>
a {
  color: #98a4fa;
}

.no_submit {
  background: #cccccc;
  color: #fff;
  border-color: #cccccc;
}
</style>
