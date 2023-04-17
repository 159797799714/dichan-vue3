<template>
  <div class="">
    <HeadBar :popTitle="popTitle"></HeadBar>
    <div class="login_bg">
      <form action="https://71yunduan.com/user/pwd_pay.html" method="post" id="ifr" class="form">
        <div v-if="hadPwd" class="form-item">
          <label class="form-item_label">旧密码</label>
          <div class="form-item_content">
            <input
              type="text"
              name="oldpwd"
              id="oldpwd"
              placeholder="请输入旧密码"
              v-model="state.formData.old_pay_password"
            />
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">{{ hadPwd ? '新密码' : '支付密码' }}</label>
          <div class="form-item_content">
            <input
              type="password"
              name="pwd"
              id="pwd"
              :placeholder="hadPwd ? '请输入新密码' : '请输入密码'"
              maxlength="6"
              v-model="state.formData.new_pay_password"
              onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)"
            />
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">确认密码</label>
          <div class="form-item_content">
            <input
              type="password"
              name="pwd2"
              id="pwd2"
              placeholder="请再次输入新密码"
              maxlength="6"
              v-model="state.formData.confirm_pay_password"
              onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)"
            />
          </div>
        </div>
        <div class="input_btn" @click="submit">确认</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import { useRouteHook } from '@/hook/routeHook.js'
const { goBack } = useRouteHook()

import HeadBar from '@/components/HeadBar.vue'

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const popTitle = ref('设置密码')
const hadPwd = ref(false)

const state = reactive({
  formData: {
    set_pay_password: 1,
    old_pay_password: '',
    new_pay_password: '',
    confirm_pay_password: ''
  }
})

const userInfo = ref({})
const setUserInfo = async () => {
  $base.showLoadingToast()
  userInfo.value = await userStore.getUserInfo()
  console.log('用户信息', userStore.hadPwd)
  hadPwd.value = userStore.hadPwd
  popTitle.value = userStore.hadPwd ? '修改支付密码' : '设置支付密码'
  state.formData.set_pay_password = userStore.hadPwd? 0: 1,
  $base.closeToast()
}
setUserInfo()

const submit = async () => {
  const { old_pay_password, new_pay_password, confirm_pay_password } = state.formData
  if (hadPwd.value && !old_pay_password) {
    $base.showToast('请输入旧密码')
    return false
  }

  if (hadPwd.value && old_pay_password.toString().length < 6) {
    $base.showToast('旧密码长度不能少于6位')
    return false
  }
  const newPwdText = hadPwd.value ? '新密码' : '密码'
  if (!new_pay_password) {
    $base.showToast(`请输入${newPwdText}`)
    return false
  }
  if (new_pay_password.toString().length < 6) {
    $base.showToast(`${newPwdText}长度不能少于6位`)
    return false
  }
  if (!confirm_pay_password) {
    $base.showToast('请输入确认密码')
    return false
  }
  if (confirm_pay_password.toString().length < 6) {
    $base.showToast('确认密码长度不能少于6位')
    return false
  }
  if (new_pay_password !== confirm_pay_password) {
    $base.showToast('两次密码不一致！')
    return false
  }

  $base.showLoadingToast('提交中')
  let data = await $Http('apiProfile', state.formData)
  if (!data) return
  $base.showToast(`${popTitle.value}成功`)
  setTimeout(() => {
    goBack()
  }, 1500)
}
</script>

<style lang="scss" scoped>
.login_bg {
  margin: 0 0.3rem;
}
</style>
