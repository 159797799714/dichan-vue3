<template>
  <div class="mobile">
    <div class="othertop">
      <a
        class="goback"
        href="javascript:history.back();"
        style="display: flex; align-items: center"
      >
        <svg
          t="1675514239975"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5140"
          width=".6rem"
          height=".6rem"
        >
          <path
            d="M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z"
            p-id="5141"
            fill="#ffffff"
          ></path>
        </svg>
      </a>
      <div class="othertop-font">住房90平</div>
    </div>
    <!--<div class="header-nbsp"></div>-->
    <div style="height: 3.9rem">
      <img src="@/assets/image/apply/apply_bg.png" />
    </div>
    <div class="rectangle_468">
      <div class="num">¥15000.00&nbsp;元</div>
      <div class="item">
        <div></div>
        <div class="item_b"></div>
        <div></div>
        <div>
          <img style="width: 100%; height: 100%" src="@/assets/image/apply/xuanchuantu.jpg" />
        </div>
      </div>
    </div>

    <!-- 详情 -->
    <div style="display: none">
      <div class="details_top">
        <img src="@/assets/image/apply/20230317163940.png" />
        <h1>住房90平</h1>
        <ul>
          <li>
            <div class="inner">
              <p>
                <span class="span2">项目规模</span>
                <span class="span1">￥<i>0</i>万元</span>
              </p>
              <p>
                <span class="span2">每份分红</span>
                <span class="span1"><i>0</i>元起</span>
              </p>
              <p>
                <span class="span2">投资周期</span>
                <span class="span1"><i></i>天</span>
              </p>
            </div>
          </li>
          <li>分红方式：每日复利,保本保息</li>
          <li>起投金额：0元</li>
          <li>担保机构：</li>
          <li>
            投资零风险：本金保障
            <div class="progressBox1">
              <div class="progress1" style="width: 0%"></div>
              <span class="progressNum1" style="left: 0%">0%</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="details_foot">
        <div class="tabs">
          <span class="on">投资详情</span>
          <span>项目资料</span>
        </div>
        <div class="explain_outer">
          <table class="table">
            <tbody>
              <tr>
                <td><span>项目名称</span></td>
                <td>住房90平</td>
              </tr>
              <tr>
                <td>项目金额：</td>
                <td><i>0万</i>元人民币；</td>
              </tr>
              <tr>
                <td>每天分红：</td>
                <td><i>按每日0%的收益（保本保息）</i></td>
              </tr>
              <tr>
                <td>投资金额：</td>
                <td><i>最低起投元</i>（限买份）</td>
              </tr>
              <tr>
                <td>项目期限：</td>
                <td><i>个</i>自然日；</td>
              </tr>
              <tr>
                <td>收益计算：</td>
                <td><i>本金复利分红</i>*<i>天</i>=总收益<i>0</i>元；</td>
              </tr>
              <tr>
                <td>还款方式：</td>
                <td>每日复利,保本保息 节假日照常收益；</td>
              </tr>
              <tr>
                <td>结算时间：</td>
                <td>
                  当天15点投资，第二天15点系统自动计息结算收益（例如在15:00成功投资，则在下个自然日15:00收到分红），到期系统将当日分红和产品本金一起返还到您的会员账号中；
                </td>
              </tr>
              <tr>
                <td>可投金额：</td>
                <td>投资期间只要产品未投满，投资者均可自由投资；</td>
              </tr>
              <!--<tr>
                        <td>资金用途：</td>
                        <td>新手版票体验项目</td>
                    </tr>-->
              <tr>
                <td>安全保障：</td>
                <td>
                  对平台上的每一笔投资提供<i>100%本金保障</i>，平台设立风险备用金，对本金承诺全额垫付；
                </td>
              </tr>
              <tr>
                <td>项目概述：</td>
                <td>
                  本项目筹集资金<i>0万</i>元人民币，投资本项目（<i>本金复利分红/天</i>）项目周期为<i
                  ></i
                  >个自然日，所筹集资金用于该项目直投运作，作为投资者分红固定且无任何风险，所操作一切风险都由公司与担保公司一律承担，投资者不需要承担任何风险。
                </td>
              </tr>
              <tr>
                <td>推荐奖励：</td>
                <td>
                  在会员中心最下面(邀请好友)转发到您朋友圈里,只要您朋友通过邀请二维码注册的为一级,充值并成功投资一次性还款项目,您就可以得到按投资金额0%的奖励,注册成功后，系统自动赠送
                  ！
                </td>
              </tr>
            </tbody>
          </table>
          <div class="data"></div>
        </div>
      </div>
      <div class="header-nbsp"></div>
    </div>
    <div class="invest_btn">
      <a href="https://71yunduan.com/mobile/form/id/48.html">立即申请</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()
</script>

<style lang="scss" scoped>
.othertop {
  background: transparent;
}
.othertop-font {
  color: #fff;
}
.rectangle_468 .flex-wrap div {
  width: 80%;
}
.rectangle_468 .item_c > div > div:nth-child(1) {
  font-weight: bold !important;
}
.rectangle_468 {
  padding: 0 0.2rem;
  position: absolute;
  top: 1.4rem;
  width: calc(100% - 0.4rem);
}
.rectangle_468 .item {
  background-color: #ffffff;
  border-radius: 0.2rem 0.2rem;
  box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
  overflow: hidden;
  margin-bottom: 0.4rem;
  display: block;
}
.rectangle_468 .item_c {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.3rem;
  align-items: center;
  text-align: center;
  color: #999;
}
.rectangle_468 .item_c > div > div:nth-child(1) {
  font-weight: 300;
}
.rectangle_468 .item_c > div > div:nth-child(2) {
  color: #000;
  font-size: 0.28rem;
  font-family: initial;
  margin-top: 0.1rem;
}
.rectangle_468 .item_b {
  padding: 0.4rem 0.3rem;
  position: relative;
}
.rectangle_468 .item_b > div:nth-last-of-type(1) {
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
}
.rectangle_468 .item_b > div:nth-last-of-type(1) > div {
  color: #999;
  font-size: 0.2rem;
}
.rectangle_468 .item_b .progress {
  height: 0.08rem;
  border-radius: 1rem;
  background: #e4e4e4;
  position: relative;
  overflow: hidden;
}
.rectangle_468 .item_b .progress .jindu {
  position: absolute;
  left: 0;
  top: 0;
  height: 0.08rem;
  background: #ffb62d;
}
.num {
  font-size: 0.4rem;
  font-family: Inter-Regular, Inter;
  color: #fff;
  margin-bottom: 0.8rem;
}
</style>
