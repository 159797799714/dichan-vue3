<template>
    <div class="">
        <div class="packet">
            <form action="https://71yunduan.com/user/red_packets.html" method="post" id="ifr">
                <div class="card">
                    <div class="title">红包兑换可提余额</div>
                    <div class="red_input">
                        <img src="@/assets/image/user/slice_166.png" style="height: 0.64rem" />
                        <input name="money" id="money" placeholder="请输入" v-model="state.formData.from_money" />
                        <span id="all" @click="setAll">全部兑换</span>
                    </div>
                    <p class="hit">
                        当前可用现金{{ userInfo.recharge_money }}， 可以兑换可提余额{{
                            userInfo.cash_money
                        }}元。(工作日){{ config.withdraw_start_time }}-{{ config.withdraw_end_time }}可申请兑换
                    </p>
                    <div class="show_money">可兑换金额{{ userInfo.fund_money }}元</div>
                    <!--<div class="btn">兑换</div>-->
                    <div type="submit" value="兑换" class="input_btn" @click="submit">兑换</div>
                </div>
            </form>
            <div class="red_record">
                <div>最近兑换记录</div>
                <template v-if="recordList.length">
                    <table>
                        <tbody>
                            <tr>
                                <th>兑换金额</th>
                                <th>状态</th>
                            </tr>
                            <tr v-for="(item, index) in recordList" :key="index">
                                <td>{{ item.from_money }}</td>
                                <td>{{ statusObj[item.status] || '--' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </template>
                <template v-else>
                    <div class="t-center">暂无数据</div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import { useRouteHook } from '@/hook/routeHook.js'
const { goBack } = useRouteHook()

import { useConfigStore } from '@/store/config'
const configStore = useConfigStore()

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const config = ref({})
const codeImgUrl = ref('')
const statusObj = {
    0: '处理中',
    1: '兑换成功',
    2: '兑换失败'
}

const getConfig = async () => {
    $base.showLoadingToast()
    let data = await $Http('apiIndexCommon')
    console.log('公共配置', data)
    config.value = data
}

const userInfo = ref({})
const setUser = async () => {
    userInfo.value = await userStore.getUserInfo()
}

getConfig()
setUser()

const state = reactive({
    formData: {
        from_money_type: 'fund_money',
        to_money_type: 'cash_money',
        from_money: ''
    }
})

const recordList = ref([])
const setrecordList = async () => {
    $base.showLoadingToast()
    let data = await $Http('apiExchangeRecord')
    $base.closeToast()
    hadLoad.value = true
    recordList.value = data || []
}
setrecordList()

const submit = async () => {
    let { from_money } = state.formData
    let fund_money = userInfo.value.fund_money || 0
    from_money = from_money.toString()
    if (!from_money || isNaN(from_money)) {
        $base.showToast('请输入正确的金额！')
        return false
    }
    if (from_money > fund_money) {
        $base.showToast('输入金额不可大于可兑换金额！')
        return false
    }

    $base.showLoadingToast()
    let data = await $Http('apiExchange', state.formData)
    console.log('兑换', data)
    if (!data) return
    $base.showToast('兑换成功')

    setTimeout(() => {
        goBack()
    }, 1500)
}


const setAll = () => {
    state.formData.from_money = userInfo.value.fund_money
}


</script>

<style lang="scss" scoped></style>
