<template>
  <div class="form_outer">
    <HeadBar :popTitle="headTitle"></HeadBar>
    <div class="form_top">
      <p>
        <span class="span_tit">账户可提现余额（元）</span>
        <span class="span_num">￥ {{ userInfo.cash_money || 0 }}元</span>
      </p>
      <p>
        <span class="span_tit">账号可用金额（元）</span>
        <span class="span_num">￥ <strong id="maxNum">{{ userInfo.recharge_money || 0 }} </strong>元</span>
      </p>
    </div>
    <form>
      <input type="hidden" value="42" name="id" />
      <input type="hidden" value="0" id="maxNum2" />
      <input type="hidden" value="0" id="userMoney" />
      <input type="hidden" value="0" id="userMoney2" />
      <ul>
        <li>
          <label> 投资金额 </label>
          <input type="text" :disabled="itemMoney > 0" v-model="itemMoney" />
        </li>
        <li>
          <label>支付密码</label>
          <input type="password" placeholder="请输入支付密码" class="pwd" v-model="pay_password" />
        </li>
      </ul>
      <div v-if="id" class="input_btn" @click="submit">立即申请</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeadBar from '../../components/HeadBar.vue'

import { useRouteHook } from '@/hook/routeHook.js'
const { goBack, route } = useRouteHook()

import { useApplyItemStore } from '@/store/applyItem'
const applyItemStore = useApplyItemStore()

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()
const userInfo = ref({})

const getUserInfo = async () => {
  $base.showLoadingToast()
  userInfo.value = await userStore.getUserInfo()
}
getUserInfo()

const headTitle = ref('')

const { id, money } = route.query
const itemMoney = ref(0)

const pay_password = ref('')

// 详情
const getMoney = async (id) => {
  if (!id) return (itemMoney.value = 0)
  console.log('投资金额', applyItemStore.money)
  itemMoney.value = money || applyItemStore.money
}
getMoney(id)

const submit = async () => {
  if (!pay_password.value) return $base.showToast('请输入支付密码')

  $base.showLoadingToast('提交中')
  let data = await $Http('apiApplyProject', { id, pay_password: pay_password.value })
  console.log('申请返回', data)
  if (!data) return
  $base.showToast('申请成功')
  setTimeout(() => {
    goBack()
  }, 1500)
}
</script>

<style lang="scss" scoped>
.form_outer {
  padding-top: 0;
}
</style>
