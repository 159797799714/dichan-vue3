<template>
  <div class="">
    <HeadBar popTitle="修改密码"></HeadBar>
    <div class="login_bg">
      <form action="https://71yunduan.com/user/pwd_login.html" method="post" id="ifr" class="form">
        <div class="form-item">
          <label class="form-item_label">旧密码</label>
          <div class="form-item_content">
            <input type="text" name="oldpwd" id="oldpwd" placeholder="请输入旧密码">
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">新密码</label>
          <div class="form-item_content">
            <input type="password" name="pwd" id="pwd" placeholder="请输入新密码">
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">确认密码</label>
          <div class="form-item_content">
            <input type="password" name="pwd2" id="pwd2" placeholder="请再次输入新密码">
          </div>
        </div>
        <div @click="submit" class="input_btn">确认</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'


import HeadBar from '@/components/HeadBar.vue'

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const userInfo = ref({})
const setUserInfo = async () => {
  $base.showLoadingToast()
  userInfo.value = await userStore.getUserInfo()
  $base.closeToast()
}
setUserInfo()

const state = reactive({
  formData: {
    channel: '2',
    username: '',
    account: '',
    bank_name: '',
    subbranch_name: ''
  }
})

// const cardList = ref([])
// const getCardList = async () => {
//   $base.showLoadingToast()
//   let data = await $Http('apiGetPayment')
//   console.log('提现账户', data)
//   cardList.value = data || []
// }
// getCardList()


const submit = async () => {
  let { username, account, bank_name, subbranch_name } = state.formData

  if (!username) {
    $base.showToast("请输入姓名！");
    return false;
  }
  if (!account) {
    $base.showToast("请输入银行卡号！");
    return false;
  }
  if (!bank_name) {
    $base.showToast("请输入银行名称！");
    return false;
  }
  if (!subbranch_name) {
    $base.showToast("请输入开户行信息！");
    return false;
  }

  $base.showLoadingToast()
  let data = await $Http('apiBindPayment', state.formData)
  console.log('添加银行卡', data)

  await getCardList()

  addShow.value = false
  state.formData = {
    channel: state.formData.channel,
    username: state.formData.channel,
    account: '',
    bank_name: '',
    subbranch_name: ''
  }

}

</script>

<style lang="scss" scoped>
.login_bg {
  margin: 0 0.3rem;
}
</style>
