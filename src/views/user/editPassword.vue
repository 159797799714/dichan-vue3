<template>
  <div class="">
    <HeadBar popTitle="修改密码"></HeadBar>
    <div class="login_bg">
      <form action="https://71yunduan.com/user/pwd_login.html" method="post" id="ifr" class="form">
        <div class="form-item">
          <label class="form-item_label">旧密码</label>
          <div class="form-item_content">
            <input type="text" placeholder="请输入旧密码" v-model="state.formData.old_password" />
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">新密码</label>
          <div class="form-item_content">
            <input
              type="password"
              placeholder="请输入新密码"
              v-model="state.formData.new_password"
            />
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">确认密码</label>
          <div class="form-item_content">
            <input
              type="password"
              placeholder="请再次输入新密码"
              v-model="state.formData.confirm_password"
            />
          </div>
        </div>
        <div @click="submit" class="input_btn">确认</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import { useToastRefreshHook } from '@/hook/toastRefresh.js'
const { showToastRefresh } = useToastRefreshHook()

import HeadBar from '@/components/HeadBar.vue'

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const state = reactive({
  formData: {
    set_pay_password: 0,
    old_password: '',
    new_password: '',
    confirm_password: ''
  }
})

const userInfo = ref({})
const setUserInfo = async () => {
  $base.showLoadingToast()
  userInfo.value = await userStore.getUserInfo()
  $base.closeToast()
}
setUserInfo()

const submit = async () => {
  const { old_password, new_password, confirm_password } = state.formData
  if (!old_password) {
    $base.showToast('请输入旧密码')
    return false
  }

  if (old_password.toString().length < 6) {
    $base.showToast('旧密码长度不能少于6位')
    return false
  }
  if (!new_password) {
    $base.showToast('请输入新密码')
    return false
  }
  if (new_password.toString().length < 6) {
    $base.showToast('新密码长度不能少于6位')
    return false
  }
  if (!confirm_password) {
    $base.showToast('请输入确认密码')
    return false
  }
  if (confirm_password.toString().length < 6) {
    $base.showToast('确认密码长度不能少于6位')
    return false
  }
  if (new_password !== confirm_password) {
    $base.showToast('两次密码不一致！')
    return false
  }

  $base.showLoadingToast('提交中')
  let data = await $Http('apiProfile', state.formData)
  if (!data) return

  showToastRefresh('密码修改成功', () => goPage({ name: 'login' }))

  // $base.showToast(`密码修改成功`)
  // setTimeout(() => {
  //   goPage({ name: 'login' })
  // }, 1500)
}
</script>

<style lang="scss" scoped>
.login_bg {
  margin: 0 0.3rem;
}
</style>
