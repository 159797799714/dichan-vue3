<template>
  <div class="">
    <!-- 银行卡 -->
    <div v-show="!addShow">
      <div v-for="(item, index) in cardList" :key="index" class="mycard">
        <p><span class="card_name">{{ item.bank_name }}</span>
          <!-- <a href="https://71yunduan.com/user/del_card/id/65127.html"
            style="float: right;">删除此卡</a> -->
        </p>
        <p><span class="card_type">{{ item.channel == 2 ? '储蓄卡' : '支付宝' }}</span></p>
        <p>
          <span class="card_num">{{ item.account.slice(0, 4) }}</span>
          <span class="card_num">****</span>
          <span class="card_num">****</span>
          <span class="card_num">{{ item.account.slice(-4) }}</span>
        </p>
      </div>
      <a class="input_btn" @click="addAction(true)">+添加银行卡</a>
    </div>
    <!-- 银行卡  end-->


    <!-- 添加银行卡表单 -->
    <form v-show="addShow" class="mycard_add form">
      <!--<h3>添加银行卡</h3>-->
      <div class="form-item">
        <label class="form-item_label">姓名</label>
        <div class="form-item_content">
          <input type="text" v-model="state.formData.username" :disabled="disabled" placeholder="请输入姓名">
        </div>
      </div>
      <div class="form-item">
        <label class="form-item_label">银行卡</label>
        <div class="form-item_content">
          <input type="text" v-model="state.formData.bank_name" placeholder="请输入银行名称">
        </div>
      </div>
      <div class="form-item">
        <label class="form-item_label">银行卡号</label>
        <div class="form-item_content">
          <input type="text" v-model="state.formData.account" placeholder="请输入银行卡号">
        </div>
      </div>
      <div class="form-item">
        <label class="form-item_label">开户行</label>
        <div class="form-item_content">
          <input type="text" v-model="state.formData.subbranch_name" placeholder="请输入开户行信息">
        </div>
      </div>
      <div class="error_tips"></div>
      <div class="input_btn" @click="submit">确认</div>
    </form>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const disabled = ref(true)

const userInfo = ref({})
const setUserInfo = async () => {
  $base.showLoadingToast()
  userInfo.value = await userStore.getUserInfo()
  disabled.value = userInfo.value.nickname ? true : false
  state.formData.username = userInfo.value.nickname || ''
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

const addShow = ref(false)
const addAction = val => {
  console.log('val', val)
  addShow.value = val
}

const cardList = ref([])
const getCardList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetPayment')
  console.log('提现账户', data)
  cardList.value = data || []
}
getCardList()


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
.mycard_add {
  display: block;
}
</style>
