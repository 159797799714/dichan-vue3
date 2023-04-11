<template>
  <div class="mobile">
    <div>
      <!--<img src="/Public/mobile/img/zhengche6.jpg" />
        <img src="/Public/mobile/img/zhengche5.jpg" />-->
      <img src="@/assets/image/user/policy/zhengche1.jpg">
      <!--<img src="/Public/mobile/img/zhengche2.jpg" />-->
      <img src="@/assets/image/user/policy/zhengche3.jpg">
      <img src="@/assets/image/user/policy/zhengche4.jpg">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'

const popTitle = ref('错误')

</script>

<style lang="scss" scoped></style>
