<template>
  <div class="">
    <!--无-->

    <div class="rectangle_438">
      <img src="@/assets/image/share/recommend_bg.png" />
      <div class="box">
        <div class="box_top">
          <h2>{{ userInfo.nickname || '无' }}</h2>
          <p>邀请您注册中国地产</p>
        </div>
        <div class="box_bottom">
          <div
            id="qrcode"
            style="width: 3.4rem; margin: auto"
            title="https://71yunduan.com/mobile/index.html/mobile/reg/invite/955506"
          >
            <canvas width="100" height="100" style="display: none"></canvas
            ><img alt="Scan me!" :src="codeImgUrl" style="display: block" />
          </div>

          <div class="yqm">
            唯一邀请码：<span style="color: #cd553d">{{ userInfo.invite_code }}</span
            ><br />
            邀请链接：<span style="color: #cd553d" id="yqlj" @click="copyShaneUrl">{{
              userInfo.invite_domain
            }}</span
            ><br />
            <span>点击链接即可复制</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QRCode from 'qrcode'

import { useConfigStore } from '@/store/config'
const configStore = useConfigStore()

import { useUserStore } from '@/store/userInfo'
const userStore = useUserStore()

const config = ref({})
const codeImgUrl = ref('')

const getConfig = async () => {
  $base.showLoadingToast()
  let data = await configStore.getConfig()
  console.log('公共配置', data)
  config.value = data
  QRCode.toDataURL(`${userInfo.value.invite_domain}/register?inviteCode=${userInfo.value.invite_code}`, function (err, url) {
    console.log(url)
    codeImgUrl.value = url
  })
}

const userInfo = ref({})
const setUser = async () => {
  userInfo.value = await userStore.getUserInfo()
}
setUser()
getConfig()

const copyShaneUrl = () => {
  if (!config.value.app_download_url) return $base.showToast('复制失败')
  var input = document.createElement('input') // 直接构建input

  const {invite_domain = '', invite_code = ''} = userInfo.value
  input.value = `${invite_domain}/register?inviteCode=${invite_code}` // 设置内容


  document.body.appendChild(input) // 添加临时实例
  input.select() // 选择实例内容
  document.execCommand('Copy') // 执行复制
  document.body.removeChild(input) // 删除临时实例

  $base.showToast('复制成功')
}
</script>

<style lang="scss" scoped>
.rectangle_438 {
  background: linear-gradient(225deg, #b3d1f9 0%, #e3f0ff 100%);
  min-height: 85vh;
  padding: 0.4rem;
  margin: 0;

  .box {
    width: calc(100% - 0.8rem);
  }
}
</style>
