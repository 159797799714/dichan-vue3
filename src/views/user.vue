<template>
  <div id="msgBox"
    style="width: 100%;background-color: rgba(0,0,0,0.25);height: 1000px;position: fixed;top: 0;left: 0;z-index: 9999;font-size:.28rem;display: none;">
    <div style="width: 80%;margin-top: 40%;margin-left: 10%;background-color: #fff;border-radius: 5px;overflow: hidden;">
      <div id="msgTitle" style="padding:10px 20px;background-color: #4f79bc;color:#fff;">
        提示
      </div>
      <div id="msgContent" style="padding:20px;line-height: 25px;">
        内容
      </div>
      <div id="msgBtn" style="padding: 10px 20px;text-align: right;border-top: 1px solid #eee;">
        <input type="button" value="确定" style="background-color: #4f79bc;color:#fff;border: none;padding:5px 10px;">
        <input type="button" value="取消" style="background-color: #4f79bc;color:#fff;border: none;padding:5px 10px;">
      </div>
    </div>
  </div>
  <div class="mobile">
    <div class="my_total">
      <!--<div class="user">-->
      <!--    <span>我的账户：13766698595</span>-->
      <!--    <span>用户等级：普通会员</span>-->
      <!--</div>-->
      <!--<p class="bal">0.00</p>-->
      <!--<p class="bal_tit">账户余额（元））</p>  -->
      <!--<div class="wait">-->
      <!--    <div class="item">-->
      <!--        <span class="span_num">0</span>-->
      <!--        <span class="span_tit">待收利息（元）</span>-->
      <!--    </div>-->
      <!--    <div class="item">-->
      <!--        <span class="span_num">0</span>-->
      <!--        <span class="span_tit">待收本金（元）</span>-->
      <!--    </div>-->
      <!--    <div class="item">-->
      <!--        <span class="span_num">0</span>-->
      <!--        <span class="span_tit">账户积分</span>-->
      <!--    </div>-->
      <!--    <div class="item">-->
      <!--        <span class="span_num">0.00</span>-->
      <!--        <span class="span_tit">冻结金额</span>-->
      <!--    </div>-->
      <!--</div>-->
      <div style="display: flex;">
        <div class="my_icon">
          <img src="@/assets/image/user/my_icon.png">
        </div>
        <div class="my_info">
          <div style="display:flex">
            <span id="phone">137****8595</span>
            <svg onclick="hidePhone(false)" t="1675871686955" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3542" width=".6rem" height=".4rem" style="display: block;">
              <path
                d="M929.87392 374.6816c13.5168 9.97376 16.22016 28.7744 6.0416 41.984-27.8528 36.1472-65.59744 68.77184-110.20288 96.11264l62.8736 87.8592c8.99072 12.53376 6.84032 29.696-4.5056 39.69024l-2.64192 2.06848-0.53248 0.38912a30.72 30.72 0 0 1-42.35264-7.4752l-66.9696-93.55264a607.06816 607.06816 0 0 1-108.7488 38.33856l26.97216 98.38592a30.28992 30.28992 0 0 1-18.432 36.29056l-3.33824 1.06496a30.72 30.72 0 0 1-37.41696-21.6064l-27.9552-102.15424a619.08992 619.08992 0 0 1-91.07456 6.79936c-30.72 0-61.19424-2.3552-91.0336-6.79936l-27.99616 102.15424a30.72 30.72 0 0 1-34.52928 22.20032l-3.11296-0.65536a30.28992 30.28992 0 0 1-22.2208-34.11968l0.69632-3.1744 26.95168-98.38592a606.90432 606.90432 0 0 1-108.7488-38.33856l-66.9696 93.55264a30.72 30.72 0 0 1-39.69024 9.09312l-2.92864-1.82272a29.81888 29.81888 0 0 1-9.35936-38.85056l1.9456-3.11296 62.89408-87.8592c-44.11392-27.0336-81.55136-59.24864-109.30176-94.9248a29.55264 29.55264 0 0 1 5.8368-42.02496 31.1296 31.1296 0 0 1 42.96704 5.69344c70.20544 90.23488 219.0336 157.3888 374.59968 157.3888 156.18048 0 305.54112-67.6864 375.33696-158.3104a31.1296 31.1296 0 0 1 42.94656-5.89824z"
                fill="#ffffff" p-id="3543"></path>
            </svg>
            <svg onclick="hidePhone(true)" style="display: none;" val="true" t="1675872378511" class="icon"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3793" width=".6rem"
              height=".4rem">
              <path
                d="M512 284.19072c72.35072 0 160.18944 36.57728 247.33184 102.9888 64.68608 49.30048 108.30848 99.36896 126.17728 125.17888-17.8432 25.5232-62.29504 75.64288-129.3312 125.63456-88.04864 65.664-174.76608 101.82144-244.17792 101.82144-70.528 0-157.68064-36.58752-245.4016-103.02464-65.13664-49.3312-109.26592-99.0976-127.67744-125.05088 18.13504-25.984 61.57312-75.648 125.75232-124.55936C351.81056 320.76288 439.64928 284.19072 512 284.19072m0-70.87616c-220.32896 0-450.56 250.59328-450.56 298.68544s235.18208 298.68544 450.56 298.68544c210.42688 0 450.56-245.5296 450.56-298.68544 0-48.09216-230.23104-298.68544-450.56-298.68544z"
                fill="#ffffff" p-id="3794"></path>
              <path
                d="M512 446.18752c36.28544 0 65.81248 29.52192 65.81248 65.81248s-29.52704 65.81248-65.81248 65.81248S446.18752 548.29056 446.18752 512 475.71456 446.18752 512 446.18752m0-70.87616c-75.48928 0-136.68864 61.19424-136.68864 136.68864S436.51072 648.68864 512 648.68864s136.68864-61.19424 136.68864-136.68864S587.48928 375.31136 512 375.31136z"
                fill="#ffffff" p-id="3795"></path>
            </svg>
          </div>
          <div class="day_num">已加入2天</div>
        </div>
      </div>
      <div class="fx">
        <a href="https://71yunduan.com/user/recommend.html"><span>分享邀请</span></a>
        <img src="@/assets/image/user/fx.png">
      </div>
    </div>
    <div class="rectangle_331">
      <div class="asset_details">
        <div><a href="https://71yunduan.com/user/fund.html">
            <div>我的资产</div>
            <div class="a_value">¥&nbsp;10888.00</div>
          </a>
        </div>
        <div><a href="https://71yunduan.com/user/cash.html">
            <div>可用余额</div>
            <div class="a_value">¥&nbsp;0.00</div>
          </a>
        </div>
      </div>
      <div class="other_asset">
        <a href="https://71yunduan.com/user/dcep.html">
          <div>数字人民币</div>
          <div class="a_value">8000.00</div>
        </a>
        <a href="https://71yunduan.com/user/red_packet.html">
          <div>现金红包</div>
          <div class="a_value">2888.00</div>
        </a>
        <!--<div>-->
        <!--    <div>已发放保障</div>-->
        <!--    <div class="a_value">0</div>-->
        <!--</div>-->
      </div>
    </div>
    <!--<div class="user_btn" >-->
    <!--    <a href="/user/recharge.html"  style = "color: #3582b3;">充值</a>-->
    <!--    <a href="/user/cash.html"  style = "color: #3582b3;">提现</a>-->
    <!--</div>-->
    <div class="rectangle_333">
      <a href="https://71yunduan.com/user/cash.html"><img src="@/assets/image/user/nav11.png">
        <font>提现申请</font>
      </a>
      <a href="https://71yunduan.com/user/recharge.html"><img src="@/assets/image/user/nav15.png">
        <font>在线充值</font>
      </a>
      <a href="https://71yunduan.com/user/acre_transfer.html"><img src="@/assets/image/user/nav12.png">
        <font>地产转账</font>
      </a>
      <a href="https://71yunduan.com/user/properties.html"><img src="@/assets/image/user/nav16.png">
        <font>房产申请</font>
      </a>
      <a href="https://71yunduan.com/user/policy.html"><img src="@/assets/image/user/nav14.png">
        <font>政策文件</font>
      </a>
    </div>
    <ul class="user_list">
      <!--<li><a href="/mobile/apply.html"><img src="/Public/mobile/img/u1.png">住房申请</a></li>-->
      <!--<li><a href="/user/my_apply.html"><img src="/Public/mobile/img/u2.png">我的申请</a></li>-->
      <li><a href="https://71yunduan.com/user/invest.html"><img src="@/assets/image/user/u2.png">我的申请</a></li>
      <li><a href="https://71yunduan.com/user/fund.html"><img src="@/assets/image/user/u3.png">我的账单</a></li>
      <li><a href="https://71yunduan.com/user/certification.html"><img src="@/assets/image/user/u4.png">实名认证</a></li>
      <li><a href="https://71yunduan.com/user/add_card.html"><img src="@/assets/image/user/u5.png">提现账户</a></li>
      <li><a href="https://71yunduan.com/user/pwd_login.html"><img src="@/assets/image/user/u6.png">密码修改</a></li>
      <li><a href="https://71yunduan.com/user/pwd_pay.html"><img src="@/assets/image/user/u7.png">支付密码修改</a></li>
      <li><a href="https://71yunduan.com/gs/sm_add_address.html"><img src="@/assets/image/user/u7.png">我的收件地址</a></li>
      <!--<li><a href="/user/add_card.html"><img src="/Public/mobile/img/user_card.png">银行卡绑定</a></li>-->
    </ul>
    <!--  <ul class="user_list">-->
    <!--li><a href="https://chatlink.mstatik.com/widget/standalone.html?eid=3a1c9fbbe1672f88527a6fdde9f5de93"><img src="/Public/mobile/img/notice.png">在线客服</a></li-->
    <!--      <li><a href="/user/zhannei.html"><img src="/Public/mobile/img/notice.png">站内消息</a></li>-->
    <!--<li><a href="/gs/my_order.html?state=1"><img src="/Public/mobile/img/user_fund.png">我的订单</a></li>-->
    <!--      <li><a href="javascript:;" onclick="qiandao()"><img src="/Public/mobile/img/nav4.png">每日签到</a></li>-->
    <!--      <li><a href="/user/yuebao.html"><img src="/Public/mobile/img/user_fund.png">余额宝</a></li>-->
    <!--      <li><a href="/user/fund.html"><img src="/Public/mobile/img/user_fund.png">资金明细</a></li>-->
    <!--      <li><a href="/user/invest.html"><img src="/Public/mobile/img/user_invest.png">投资记录</a></li>-->
    <!--      <li><a href="/user/interest.html"><img src="/Public/mobile/img/user_inter.png">收益记录</a></li>-->
    <!--      <li><a href="/user/tuiguang.html"><img src="/Public/mobile/img/user_inter.png">推广记录</a></li>-->
    <!--      <li><a href="/user/recharge_record.html"><img src="/Public/mobile/img/user_rech.png">充值记录</a></li>-->
    <!--      <li><a href="/user/cash_record.html"><img src="/Public/mobile/img/user_cash.png">提现记录</a></li>-->
    <!--li><a href="/lottery/index.html"><img src="/Public/mobile/img/user_cash.png">大转盘</a></li-->
    <!--  </ul>-->
    <!--<ul class="user_list">-->
    <!--    <li><a href="/user/set_account.html"><img src="/Public/mobile/img/user_safe.png">账户安全</a></li>-->
    <!--    <li><a href="/user/add_card.html"><img src="/Public/mobile/img/user_card.png">银行卡绑定</a></li>-->
    <!--    <li><a href="/user/certification.html"><img src="/Public/mobile/img/user_cert.png">实名认证</a></li>-->
    <!--li><a href="javascript:alert('登陆成功')"><img src="/Public/mobile/img/user_cert.png">微信登陆</a></li-->
    <!--</ul>-->
    <!--<ul class="user_list">-->
    <!--    <li><a href="/user/recommend.html"><img src="/Public/mobile/img/user_invite.png">邀请好友</a></li>-->
    <!--</ul>-->
    <a href="https://71yunduan.com/user/logout.html" class="input_btn" style="margin-bottom:2rem;">退出登录</a>

    <div class="go_top" id="go_top" style="display: none;"><img src="@/assets/image/user/top.png"></div>
    <!--<script type="text/javascript" src="https://js.users.51.la/20172683.js"></script>-->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.input_btn {
  display: block;
  text-align: center;
  height: .8rem;
  line-height: .8rem;
  font-size: .35rem;
  border-radius: 5rem;
  color: #4F7CF3;
  border: 3px solid #4F7CF3;
  margin: .5rem .2rem;
  width: auto;
  background-color: #fff;
}
</style>