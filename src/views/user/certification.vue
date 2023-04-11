<template>
  <div class="">
    <div class="login_bg">
      <form class="form">
        <div class="form-item">
          <label class="form-item_label">姓名</label>
          <div class="form-item_content">
            <input type="text" readonly="readonly" value="陈新">
          </div>
        </div>
        <div class="form-item">
          <label class="form-item_label">身份证号码</label>
          <div class="form-item_content">
            <input id="idcard" type="text" readonly="readonly" value="365542199503213612">

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'


</script>

<style lang="scss" scoped></style>
