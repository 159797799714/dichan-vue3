<template>
  <div class="content">
    <div class="rectangle_383">
      <div v-if="config.group_chat_qrcode[0]" class="qr_box">
        <div class="box">
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="qrcode" id="qrcode1">
            <img :src="config.group_chat_qrcode[0]" width="100" />
          </div>
        </div>
        <p>官方微核群</p>
      </div>
      <div class="divide"></div>
      <div v-if="config.group_chat_qrcode[1]" class="qr_box">
        <div class="box">
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="angle"></div>
          <div class="qrcode" id="qrcode1">
            <img :src="config.group_chat_qrcode[1]" width="100" />
          </div>
        </div>
        <p>官方微核群</p>
      </div>
      <div class="divide"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useConfigStore } from '@/store/config'
const configStore = useConfigStore()

const config = ref({
  group_chat_qrcode: ['', '']
})

const getConfig = async () => {
  $base.showLoadingToast()
  let data = await configStore.getConfig()
  console.log('公共配置', data)
  config.value = data || ['', '']
}
getConfig()
</script>

<style lang="scss" scoped>
.content {
  background: linear-gradient(225deg, #b3d1f9 0%, #e3f0ff 100%);
  padding: 0.4rem;
  height: 85%;
  .rectangle_383 {
    margin: 0;
  }
}
</style>
