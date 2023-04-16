<template>
  <div>
    <div class="blank_card">
      <p>请输入金额</p>
      <div style="margin: 0.4rem 0; border-bottom: 1px solid #d9d9d9">
        <label class="big">￥</label>
        <input class="big" type="text" placeholder="" v-model="state.formData.money" />
      </div>
      <p style="color: #999999; font-size: 0.25rem">充值金额每次最低50 10000</p>
    </div>
    <div style="height: 0.24rem; background: #f1f1f1; margin-top: 0.3rem"></div>
    <!--<div class="blank_card">-->
    <!--    <p>充值金额</p>-->
    <!--    <div class="money_list">-->
    <!--        <div class="item" value="200"><span>¥</span>200</div>-->
    <!--        <div class="item" value="300"><span>¥</span>300</div>-->
    <!--        <div class="item" value="500"><span>¥</span>500</div>-->
    <!--    </div>-->
    <!--</div>-->
    <div style="height: 0.24rem; background: #f1f1f1; margin-top: 0.3rem"></div>
    <div class="blank_card">
      <p>请选择充值方式</p>
      <div class="way_list">
        <div v-for="(item, index) in ChannelList" :key="index" class="item">
          <div>
            <img :src="item.icon_image" style="width: 0.4rem" />
            <span>{{ item.name }}</span>
          </div>
          <input type="radio" name="type" :value="item.id" v-model="state.formData.id" />
        </div>
      </div>
    </div>
    <span v-if="ChannelList.length" class="input_btn submit_btn" @click="submit"> 立即充值 </span>
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
    money: ''
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

const ChannelList = ref([])
const getChannelList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetRechargeChannel')
  console.log('充值渠道', data)
  state.hadLoad = true
  ChannelList.value = data || []
}
getChannelList()

const submit = async () => {
  let { id, money } = state.formData
  money = money.toString()
  if (!id) {
    $base.showToast('请选择充值方式！')
    return false
  }
  if (!money || isNaN(money)) {
    $base.showToast('请输入正确的充值金额！')
    return false
  }

  $base.showLoadingToast()
  let data = await $Http('apiRecharge', state.formData)
  console.log('充值', data)
  const url = data.url
  if (!url) $base.showToast('未获取到支付页面')
  if (url) window.location.href = url
}
</script>

<style lang="scss" scoped>
.money_list {
  display: flex;
  gap: 0.26rem;
  margin-top: 0.25rem;
}

.money_list .item {
  width: 1.6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 0.1rem;
  font-size: 0.34rem;
}

.money_list .item span {
  font-size: 0.24rem;
  margin-right: 0.05rem;
}

.way_list .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
}

.way_list .item > div:nth-of-type(1) {
  display: flex;
  align-items: center;
  gap: 0.1rem;
}

.input_btn {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  width: calc(100% - 0.4rem);
}
</style>
