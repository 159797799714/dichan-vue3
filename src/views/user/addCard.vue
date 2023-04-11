<template>
  <div class="">
    <!-- 银行卡 -->
    <div v-show="!addShow">
      <div class="mycard">
        <p><span class="card_name">建设银行</span><a href="https://71yunduan.com/user/del_card/id/65127.html"
            style="float: right;">删除此卡</a></p>
        <p><span class="card_type">储蓄卡</span></p>
        <p>
          <span class="card_num">6336</span>
          <span class="card_num">****</span>
          <span class="card_num">****</span>
          <span class="card_num">3295</span>
        </p>
      </div>
      <a class="input_btn" @click="addAction(true)">+添加银行卡</a>
    </div>
    <!-- 银行卡  end-->


    <!-- 添加银行卡表单 -->
    <form v-show="addShow" action="https://71yunduan.com/user/add_card.html" method="post" class="mycard_add form">
      <!--<h3>添加银行卡</h3>-->
      <div class="form-item">
        <label class="form-item_label">姓名</label>
        <div class="form-item_content">
          <input type="text" name="name" id="name" disabled="disabled" placeholder="请输入姓名" value="陈新">
        </div>
      </div>
      <div class="form-item">
        <label class="form-item_label">银行卡</label>
        <div class="form-item_content">
          <input type="text" name="bank" id="bank" placeholder="请输入银行名称">
        </div>
      </div>
      <div class="form-item">
        <label class="form-item_label">银行卡号</label>
        <div class="form-item_content">
          <input type="text" name="account" id="account" placeholder="请输入银行卡号">
        </div>
      </div>
      <div class="form-item">
        <label class="form-item_label">开户行</label>
        <div class="form-item_content">
          <input type="text" name="address" id="address" placeholder="请输入开户行信息">
        </div>
      </div>
      <div class="error_tips"></div>
      <input type="submit" class="input_btn" value="确认">
    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'

const popTitle = ref('错误')

const addShow = ref(false)
const addAction = val => {
  console.log('val', val)
  addShow.value = val
}

</script>

<style lang="scss" scoped>
.mycard_add {
  display: block;
}
</style>
