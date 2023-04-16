<template>
  <div class="">
    <div class="login_bg">
      <form class="form">
        <div class="form-item">
          <label class="form-item_label">姓名</label>
          <div class="form-item_content">
            <input type="text" :disabled="disabled" v-model="state.formData.nickname" />
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">身份证号码</label>
          <div class="form-item_content">
            <input id="idcard" type="text" :disabled="disabled" v-model="state.formData.id_card" />
          </div>
        </div>

        <span v-if="!disabled" class="input_btn submit_btn" @click="submit"> 确定 </span>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const disabled = ref(true)

const state = reactive({
  formData: {
    nickname: '',
    id_card: ''
  }
})

const userInfo = ref({})
const setUserInfo = async () => {
  $base.showLoadingToast()
  userInfo.value = await userStore.getUserInfo()
  disabled.value = userInfo.value.is_realname == 1
  state.formData = {
    nickname: userInfo.value.nickname,
    id_card: userInfo.value.id_card
  }
  $base.closeToast()
}
setUserInfo()

const submit = async () => {
  let { nickname, id_card } = state.formData

  if (!nickname) {
    $base.showToast('请输入姓名！')
    return false
  }
  let regs = /^[\u4e00-\u9fa5]+$/
  if (!regs.test(nickname)) {
    $base.showToast('请输入正确的姓名！')
    return false
  }
  if (!id_card) {
    $base.showToast('请输入身份证号码！')
    return false
  }
  let xg = /^[A-Z]{1,2}[0-9]{6}([0-9A])$/
  let reg =
    /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/
  if (!reg.test(id_card)) {
    if (!xg.test(id_card)) {
      $base.showToast('请输入正确的身份证号码！')
      return false
    }
  }

  $base.showLoadingToast()
  let data = await $Http('apiRealname', state.formData)
  console.log('实名', data)
  if (data === null) {
    $base.showToast('认证成功')
    disabled.value = true
  }
  setUserInfo()
}
</script>

<style lang="scss" scoped></style>
