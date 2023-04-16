<template>
  <div class="">
    <div class="transfer">
      <div class="tabs">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          :class="state.formData.money_type === item.value ? 'active' : ''"
          :value="item.value"
          @click="state.formData.money_type = item.value"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="balance">
        <div>
          可提现余额:&nbsp;¥&nbsp;<span id="userMoney">{{ userInfo.recharge_money }}</span>
        </div>
        <div>
          可用余额:¥&nbsp;<span id="withdrawmoney">{{ userInfo.cash_money }}</span>
        </div>
      </div>
      <!-- 提现 -->
      <form class="form">
        <input type="hidden" name="type" id="type" value="" />

        <div class="form-item">
          <label class="form-item_label">对方手机号码</label>
          <div class="form-item_content">
            <input v-model="state.formData.mobile" placeholder="请输入对方手机号码" />
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">对方姓名</label>
          <div class="form-item_content">
            <input v-model="state.formData.nickname" placeholder="请输入对方姓名" />
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">转出金额</label>
          <div class="form-item_content form-item_many">
            <input
              v-model="state.formData.money"
              placeholder="请输入转出金额"
              onkeyup="value=value.replace(/[^\d]/g,&#39;&#39;)"
            />
            <!--<div id="all" style="color:#4F7CF3;font-size:.26rem">全部</div>-->
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">支付密码</label>
          <div class="form-item-pwd_content">
            <div class="pwd-input_list">
              <div
                v-for="item in 6"
                :key="item"
                :class="['input_item', item === pwdLength && isFocus ? 'input-item_focus' : '']"
              >
                {{ item < pwdLength ? '•' : '' }}
              </div>
            </div>
            <input
              class="pwd_input"
              v-model="state.formData.pay_password"
              type="text"
              maxlength="6"
              @focus="isFocus = true"
              @blur="isFocus = false"
              @input="onInput"
            />
          </div>
        </div>
        <div value="转账" class="input_btn" @click="submit">转账</div>
      </form>
      <!-- 提现  end-->
    </div>
    <!-- 记录 -->
    <div style="height: 0.24rem; background: #f1f1f1; margin-top: 0.6rem"></div>
    <div class="transfer_record">
      <div style="font-size: 0.3rem">最近转账记录</div>
      <div v-if="Record.length" class="record_list">
        <table class="table">
          <tbody>
            <tr>
              <th>转账信息</th>
              <th>金额类型</th>
              <th>转账时间</th>
            </tr>
            <tr v-for="(item, index) in Record" :key="index">
              <td>{{ item.memo }}</td>
              <td>{{ formatType(item.money_type) }}</td>
              <td>{{ formatTime(item.createtime) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="no_record">
        <img
          src="@/assets/image/user/no_record.png"
          style="display: block; height: 3rem; width: 3rem"
        />
      </div>
    </div>

    <MsgDialog ref="MsgDialogRef" :popTitle="popTitle"></MsgDialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
import { useUserStore } from '@/store/userInfo'

import MsgDialog from '@/components/MsgDialog.vue'
const popTitle = ref('错误')

const { goPage } = useRouteHook()

const userStore = useUserStore()
const userInfo = ref({})

const getUserInfo = async () => {
  userInfo.value = await userStore.getUserInfo()
}
getUserInfo()

const tabs = [
  {
    name: '可用余额',
    value: 'recharge_money'
  },
  {
    name: '可用提现余额',
    value: 'cash_money'
  }
]
const state = reactive({
  formData: {
    money_type: tabs[0].value,
    money: '1',
    nickname: '1',
    mobile: '1',
    pay_password: ''
  },
  hadLoad: false
})

const pwdLength = computed(() => {
  const pwd = state.formData.pay_password.toString()
  return pwd.length + 1 || 1
})
const isFocus = ref(false)

const formatTime = (time) => {
  return $base.DateFormat(time, 'MM-dd hh:mm:ss')
}
const formatType = (status) => {
  return status == 'cash_money' ? '可提余额' : '可用余额'
}

const Record = ref([])
const getRecord = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiTransferRecord')
  console.log('转账记录', data)
  Record.value = data || []
}
getRecord()

const submit = async () => {
  let { mobile, nickname, money, pay_password, money_type } = state.formData
  let recharge_money = userInfo.value.recharge_money || 0
  let cash_money = userInfo.value.cash_money || 0
  money = money.toString()

  if (!mobile) {
    $base.showToast('请输入对方手机号码！')
    return false
  }
  if (!nickname) {
    $base.showToast('请输入对方姓名！')
    return false
  }
  if (!money) {
    $base.showToast('请输入转出金额！')
    return false
  }
  if (isNaN(money)) {
    $base.showToast('请输入正确的转出金额！')
    return false
  }

  if (money_type === 'recharge_money' && parseFloat(money) > parseFloat(recharge_money)) {
    $base.showToast('请转出金额不能大于可用余额！')
    return false
  }
  if (money_type === 'cash_money' && parseFloat(money) > parseFloat(cash_money)) {
    $base.showToast('请转出金额不能大于可提现余额！')
    return false
  }
  if (pay_password.length < 6 || pay_password.length > 16) {
    $base.showToast('请输入正确的支付密码！')
    return false
  }

  $base.showLoadingToast()
  let data = await $Http('apiTransfer', state.formData)
  console.log('转账', data)
  cardList.value = data || []
}

const onInput = (e) => {
  state.formData.pay_password = state.formData.pay_password.slice(0, 6)
}
</script>

<style lang="scss" scoped>
.table {
  margin-top: 0.2rem;
  width: 100%;
}

td {
  padding: 0.1rem 0;
  text-align: center;
}
</style>
