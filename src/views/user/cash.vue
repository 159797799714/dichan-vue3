<template>
  <div v-if="state.hadLoad" class="">
    <!-- 提现 -->
    <form>
      <div class="blank_card">
        <label>银行卡</label>
        <select name="bank" id="bank" v-model="state.formData.id">
          <option value="">选择提现银行卡</option>
          <option v-for="(item, index) in cardList" :key="index" :value="item.id">
            {{ item.bank_name }}
          </option>
        </select>
      </div>
      <div class="blank_card">
        <p>提现金额：</p>
        <label class="big">￥</label
        ><input class="big" v-model="state.formData.money" placeholder="请输入提现金额" type="text" />
        <p>
          可提现金额: <span id="userMoney">{{ userInfo.cash_money || 0 }}</span
          >元
        </p>
      </div>
      <div class="blank_card">
        <label>交易密码： </label
        ><input
          type="password"
          v-model="state.formData.pay_password"
          placeholder="请输入交易密码"
        />
      </div>
      <div class="blank_card">
        <label
          >注：{{ config.low_withdraw_money }}元起提(每天限一笔)，手续费{{
            rateMoney
          }}元/笔，{{ config.withdraw_start_time }}-{{
            config.withdraw_end_time
          }}可申请提现，24小时内到账</label
        >
      </div>
      <div class="blank_card" style="display: none"><label>时间</label> 预计30分钟内到账</div>
      <div type="submit" class="input_btn" @click="submit">确认提现</div>
    </form>
    <!-- 提现  end-->
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

import { useUserStore } from '@/store/userInfo'
import { useConfigStore } from '@/store/config'
import { useRouteHook } from '@/hook/routeHook.js'
const { goBack } = useRouteHook()
const userStore = useUserStore()
const userInfo = ref({})

const configStore = useConfigStore()
const config = ref({})

const state = reactive({
  formData: {
    id: '',
    money: '',
    pay_password: ''
  },
  hadLoad: false
})

const getUserInfo = async () => {
  userInfo.value = await userStore.getUserInfo()
}
const getConfig = async () => {
  config.value = await configStore.getConfig()
}
getConfig()
getUserInfo()

const rateMoney = computed(() => {
  return 2
  // const money = state.formData.money || 0
  // const withdraw_rate = config.value.withdraw_rate || 0
  // return ((money * withdraw_rate) / 100).toFixed(2)
})

const cardList = ref([])
const getCardList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetPayment')
  console.log('收款方式', data)
  // if (!data) {
  //   setTimeout(() => {
  //     goBack()
  //   }, 1500)
  //   return
  // }
  state.hadLoad = true
  cardList.value = data || []
}
getCardList()

const submit = async () => {
  let { id, money, pay_password } = state.formData
  let cash_money = userInfo.value.cash_money || 0
  const min = config.value.bank_min_withdraw_money || 0
  money = money.toString()
  if (!id) {
    $base.showToast('请选择或者添加提现银行卡！')
    return false
  }
  if (money.length <= 0) {
    $base.showToast('请输入提现金额！')
    return false
  }
  if (isNaN(money)) {
    $base.showToast('请输入正确的提现金额！')
    return false
  }
  if (parseFloat(money) < parseFloat(min)) {
    $base.showToast('小于最低提现金额' + min + '元！')
    return false
  }
  if (parseFloat(money) > parseFloat(cash_money)) {
    $base.showToast('请提现金额不能大于可提现余额！')
    return false
  }
  if (pay_password.length < 6 || pay_password.length > 16) {
    $base.showToast('请输入正确的交易密码！')
    return false
  }

  $base.showLoadingToast()
  let data = await $Http('apiWithdraw', state.formData)
  console.log('收款方式', data)
  cardList.value = data || []
}
</script>

<style lang="scss" scoped>
.record_outer .item {
  padding: 0.3rem 0;
  border-bottom: 1px solid #f6f6f6;
}

.record_outer .item .row {
  display: flex;
  justify-content: space-between;
}

.record_outer .item .row:nth-of-type(1) {
  font-size: 0.28rem;
  font-weight: 500;
}

.record_outer .item .row:nth-of-type(2) {
  margin-top: 0.3rem;
  flex-wrap: wrap;
  gap: 0.1rem;
  color: #999999;
  font-size: 0.2rem;
}

.record_outer .item .row:nth-of-type(2) span {
  color: #4f7cf3;
}
</style>
