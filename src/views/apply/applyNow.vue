<template>
  <div class="form_outer">
    <HeadBar :popTitle="headTitle"></HeadBar>
    <div class="form_top">
      <p>
        <span class="span_tit">账户可提现余额（元）</span>
        <span class="span_num">￥ 0.00元</span>
      </p>
      <p>
        <span class="span_tit">账号可用金额（元）</span>
        <span class="span_num">￥ <strong id="maxNum">0.00 </strong>元</span>
      </p>
    </div>
    <form action="https://71yunduan.com/mobile/form.html" method="post" id="ifr">
      <input type="hidden" value="42" name="id" />
      <input type="hidden" value="0" id="maxNum2" />
      <input type="hidden" value="0" id="userMoney" />
      <input type="hidden" value="0" id="userMoney2" />
      <ul>
        <li>
          <label> 投资金额 </label>
          <input type="text" name="money" readonly="readonly" id="money" value="1500.00" />
        </li>
        <li>
          <label>支付密码</label>
          <input type="password" placeholder="请输入支付密码" name="pwd" id="pwd" class="pwd" />
        </li>
      </ul>
      <input type="submit" value="立即申请" class="input_btn" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeadBar from '../../components/HeadBar.vue'

const headTitle = ref('')
</script>

<style lang="scss" scoped>
.form_outer {
  padding-top: 0;
}
</style>
