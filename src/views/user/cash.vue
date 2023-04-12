<template>
  <div class="">
    <!-- 提现 -->
    <form action="https://71yunduan.com/user/cash.html" method="post" id="ifr">
      <div class="blank_card" style="display: none">
        <label>卡号</label><input id="chose_input" type="text" placeholder="请选择银行卡" />
        <div class="jt_xz"><img class="down" src="@/assets/image/user/cash/jtx.png" /></div>
        <div id="chose_bank" class="bank_xljt1"></div>
        <ul class="bank_xl">
          <li>
            <a href="javascript:;" title="中国工商银行">
              <img src="@/assets/image/user/cash/bank_ICBC.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="javascript:;" title="中国农业银行">
              <img src="@/assets/image/user/cash/bank_ABC.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="javascript:;" title="中国建设银行">
              <img src="@/assets/image/user/cash/bank_CCB.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="javascript:;" title="招商银行">
              <img src="@/assets/image/user/cash/bank_CMB.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="javascript:;" title="中国银行">
              <img src="@/assets/image/user/cash/bank_BOC.jpg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div class="blank_card">
        <label>银行卡</label
        ><select name="bank" id="bank">
          <option value="0">选择提现银行卡</option>
        </select>
      </div>
      <div class="blank_card">
        <p>提现金额：</p>
        <label class="big">￥</label><input class="big" name="money" id="money" type="text" />
        <p>可提现金额: <span id="userMoney">0.00</span>元</p>
      </div>
      <div class="blank_card">
        <label>交易密码： </label
        ><input type="password" name="pwd" id="pwd" placeholder="请输入交易密码" />
      </div>
      <div class="blank_card" style="display: show">
        <label>注：100元起提(每天限一笔)，手续费2元/笔，10:00-17:00可申请提现，24小时内到账</label>
      </div>
      <div class="blank_card" style="display: none"><label>时间</label> 预计30分钟内到账</div>
      <input type="submit" value="确认提现" class="input_btn" />
    </form>
    <!-- 提现  end-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.record_outer .item {
  padding: 0.3rem 0;
  border-bottom: 1px solid #f6f6f6;
}
.record_outer .item .row {
  display: flex;
  justify-content: space-between;
}
.record_outer .item .row:nth-of-type(1) {
  font-size: 0.28rem;
  font-weight: 500;
}
.record_outer .item .row:nth-of-type(2) {
  margin-top: 0.3rem;
  flex-wrap: wrap;
  gap: 0.1rem;
  color: #999999;
  font-size: 0.2rem;
}
.record_outer .item .row:nth-of-type(2) span {
  color: #4f7cf3;
}
</style>
