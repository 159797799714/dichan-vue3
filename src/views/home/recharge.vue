<template>
  <div class="mobile">
    <div class="header-nbsp"></div>
    <div class="blank_card">
      <p>请输入金额</p>
      <div style="margin:.4rem 0;border-bottom: 1px solid #D9D9D9;">
        <label class="big">￥</label>
        <input class="big" type="text" name="money" placeholder="" id="money">
      </div>
      <p style="color:#999999;font-size:.25rem">充值金额每次最低50 10000</p>
    </div>
    <div style="height: .24rem;background: #F1F1F1;margin-top: .3rem"></div>
    <!--<div class="blank_card">-->
    <!--    <p>充值金额</p>-->
    <!--    <div class="money_list">-->
    <!--        <div class="item" value="200"><span>¥</span>200</div>-->
    <!--        <div class="item" value="300"><span>¥</span>300</div>-->
    <!--        <div class="item" value="500"><span>¥</span>500</div>-->
    <!--    </div>-->
    <!--</div>-->
    <div style="height: .24rem;background: #F1F1F1;margin-top: .3rem"></div>
    <div class="blank_card">
      <p>请选择充值方式</p>
      <div class="way_list">
        <div class="item">
          <div>
            <img src="@/assets/image/vx.png" style="width:.4rem">
            <span>地产微信</span>
          </div>
          <input type="radio" name="type" value="3">
        </div>
        <div class="item">
          <div>
            <img src="@/assets/image/zfb.png" style="width:.4rem">
            <span>地产支付宝</span>
          </div>
          <input type="radio" name="type" value="4">
        </div>
        <div class="item">
          <div>
            <img src="@/assets/image/vx.png" style="width:.4rem">
            <span>地产微信2</span>
          </div>
          <input type="radio" name="type" value="5">
        </div>
      </div>
    </div>
    <span class="input_btn submit_btn"> 立即充值 </span>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.money_list {
  display: flex;
  gap: .26rem;
  margin-top: 0.25rem;
}

.money_list .item {
  width: 1.6rem;
  height: 0.8rem;
  line-height: .8rem;
  text-align: center;
  background-color: #F1F1F1;
  border-radius: .1rem;
  font-size: .34rem;
}

.money_list .item span {
  font-size: .24rem;
  margin-right: 0.05rem;
}

.way_list .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
}

.way_list .item>div:nth-of-type(1) {
  display: flex;
  align-items: center;
  gap: .1rem
}

.input_btn {
  margin-left: .2rem;
  margin-right: .2rem;
  width: calc(100% - .4rem)
}
</style>