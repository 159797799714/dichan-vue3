<template>
  <div>
    <div class="money">银行入款{{ state.money }}元</div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field label="收款银行:" v-model="state.bank_name" readonly />
        <van-field label="收款人:" v-model="state.name" readonly >
          <template #button>
            <van-button size="small" @click="copyShaneUrl(state.name)">复制</van-button>
          </template>
        </van-field>
        <van-field label="收款账号:" v-model="state.account" readonly >
          <template #button>
            <van-button size="small" @click="copyShaneUrl(state.account)">复制</van-button>
          </template>
        </van-field>

        <van-field name="uploader" label="充值截图">
          <template #input>
            <input class="file" @change="handleFileChange" accept="image/*" type="file" :multiple="false">
          </template>
        </van-field>

        <div>
          <img :src="uploadImg"/>
        </div>

      </van-cell-group>
    <span class="input_btn submit_btn" @click="submit"> 提交 </span>
    </van-form>


  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {Form, Field, CellGroup} from 'vant'

import { useRouteHook } from '@/hook/routeHook.js'
const { goBack, route } = useRouteHook()

import { useToastRefreshHook } from '@/hook/toastRefresh.js'
const { showToastRefresh } = useToastRefreshHook()


import { useUserStore } from '@/store/userInfo'
const userInfo = useUserStore()

const state = reactive({
  hadLoad: false,
  money: 0,
  bank_name: '',
  name: '',
  account: '',
})

const formData = ref({
  id: '',
  money: '',
  image: ''
})

const {id, money, account, bank, name} = route.query
state.money = money
state.bank_name = bank
state.name = name
state.account = account

formData.value = {
  id, money, image: ''
}

const uploadImg = ref('')

const  handleFileChange = async e => {
  console.log('e', e)
  $base.showLoadingToast('上传中')
  let file = e.target.files[0];
  //调用封装的uploadAvatar.js
  let res = await $base.uploadAvatar(file, {lang: userInfo.lang, token: userInfo.token})
  console.log('上传返回信息', res, file)

  $base.closeToast()

  if (res.picture === 'error') return $base.showToast('上传失败')

  uploadImg.value = 'https://api.zgdc2023tx.com' + res.url
  formData.value.image = res.url
  
  $base.showToast('上传成功')
  
}


const ChannelList = ref([])
const getChannelList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetRechargeChannel')
  console.log('充值渠道', data)
  state.hadLoad = true
  ChannelList.value = data || []
}

const submit = async () => {
  let { image } = formData.value
  if (!image) {
    $base.showToast('请上传图片！')
    return false
  }
  $base.showLoadingToast()
  let data = await $Http('apiRecharge', formData.value)
  console.log('充值', data)
  
  if (!data) return

  showToastRefresh('提交成功,等待入账', goBack)

}

const copyShaneUrl = content => {
  var input = document.createElement('input') // 直接构建input

  input.value =  content// 设置内容


  document.body.appendChild(input) // 添加临时实例
  input.select() // 选择实例内容
  document.execCommand('Copy') // 执行复制
  document.body.removeChild(input) // 删除临时实例

  $base.showToast('复制成功')
}
</script>

<style lang="scss" scoped>
.money{
  padding: .4rem .2rem;
  font-size: .4rem;
  text-align: center;
  color: #999999;
  background: #F5F5F5;
}
.file{
  width: 4rem;
}
.input_btn {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  width: calc(100% - 0.4rem);
}
</style>
