<template>
  <div class="main-container">
    <HeadBar popTitle="我的收货地址"></HeadBar>

    <section class="aui-myOrder-content">
      <!-- <div class="aui-prompt"><i class="iconfont"></i>填写您的地址信息</div> -->
      <div class="aui-Address-box">
        <p>
          <input class="aui-Address-box-input" type="text" placeholder="收货人姓名" v-model="state.formData.receive_name" />
        </p>
        <p>
          <input class="aui-Address-box-input" type="text" placeholder="手机号码" v-model="state.formData.receive_mobile" />
        </p>
        <p>
          <van-field class="aui-Address-box-input" v-model="state.formData.receive_area" is-link readonly
            placeholder="点击选择所在地区" @click="show = true" />
          <!-- <input  type="text" readonly="" id="J_Address" placeholder="所在地区"> -->
        </p>
        <p>
          <textarea class="aui-Address-box-text" placeholder="街道， 小区门牌等详细地址" rows="3" id="details"
            v-model="state.formData.receive_details"></textarea>
        </p>
      </div>
      <div class="aui-out">
        <a style="color: #4f79bc; border: 1px solid #4f79bc" class="red-color" id="save_address" @click="submit">保存</a>
      </div>
    </section>
  </div>

  <van-popup v-model:show="show" round position="bottom">
    <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" @close="show = false" @finish="onFinish" />
  </van-popup>
</template>

<script setup>
import { ref, reactive } from 'vue'

import HeadBar from '@/components/HeadBar.vue'

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

import { useToastRefreshHook } from '@/hook/toastRefresh.js'
const { showToastRefresh } = useToastRefreshHook()

import { useRouteHook } from '@/hook/routeHook.js'
const { goBack } = useRouteHook()

const state = reactive({
  formData: {
    receive_name: '',
    receive_mobile: '',
    receive_area: '',
    receive_details: ''
  }
})
// 选择地区相关
import { useCascaderAreaData } from '@vant/area-data'
const show = ref(false)
const cascaderValue = ref('')
const options = useCascaderAreaData()
const onFinish = ({ selectedOptions }) => {
  show.value = false
  state.formData.receive_area = selectedOptions.map((option) => option.text).join('')
  console.log('selectedOptions', state.formData.receive_area)
}
// 选择地区相关

const userInfo = ref({})
const setUserInfo = async () => {
  $base.showLoadingToast()
  const data = await userStore.getUserInfo()
  const { receive_name, receive_mobile, receive_area, receive_details } = data || {}
  state.formData = {
    receive_name,
    receive_mobile,
    receive_area,
    receive_details
  }
  $base.closeToast()
}
setUserInfo()

const submit = async () => {
  const { receive_name, receive_mobile, receive_area, receive_details } = state.formData
  if (!receive_name) {
    $base.showToast('请输入收货人姓名')
    return false
  }
  if (!receive_mobile) {
    $base.showToast('请输入手机号码')
    return false
  }
  if (!receive_area) {
    $base.showToast('请选择所在地区')
    return false
  }
  if (!receive_details) {
    $base.showToast('请输入街道， 小区门牌等详细地址')
    return false
  }

  $base.showLoadingToast('保存中')
  let data = await $Http('apiSaveRecipientAddres', state.formData)
  if (!data) return

  showToastRefresh('保存成功', goBack)
  // $base.showToast(`保存成功`)
  // setTimeout(() => {
  //   goBack()
  // }, 1500)
}
</script>

<style scoped>
@import url('@/assets/style/web.css');

.address-box::after {
  content: '';
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 50%;
  right: 0rem;
  transform: translateY(-50%);
  background: url(../../Public/mobile/img/next.png) no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
}

.aui-Address-box {
  padding: 10px 10px 40px 10px;
  border-bottom: none;
}

.aui-Address-box p {
  border-bottom: 1px solid #eee;
}

.aui-Address-box-input {
  margin: 10px 0;
  border-bottom: none;
}
</style>
