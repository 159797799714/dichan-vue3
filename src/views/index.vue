<template>
  <div class="main">
    <div class="mobile">
      <!--<div class="header">-->
      <!--    <img src="/Public/uploads/logo.png" />-->
      <!--    -->
      <!--        <a href="/user/person.html">会员中心</a>-->
      <!--        -->
      <!--</div>-->
      <!--<div class="header-nbsp"></div>-->
      <!--banner-->
      <div style="position: relative;z-index: 0;">
        <video src="/Public/mobile/video/home.mp4" controls="" autoplay="" height="220px" width="100%"
          style="object-fit: cover;" x5-playsinline="" playsinline="true" webkit-playsinline="true"
          x-webkit-airplay="true" x5-video-player-type="h5" x5-video-player-fullscreen=""
          x5-video-orientation="portraint">
        </video>
      </div>
      <div class="indexbanner">
        <div class="slide_01" id="slide_01">
          <div class="mod_01" style="border-radius:10px;overflow: hidden;">
            <a href=""><img src="/Public/uploads/slide/20201119132729.jpg"></a>
          </div>
          <div class="mod_01" style="border-radius:10px;overflow: hidden;">
            <a href=""><img src="/Public/uploads/slide/20201119132742.jpg"></a>
          </div>
        </div>
        <div class="dotModule_new">
          <div id="slide_01_dot"></div>
        </div>
      </div>
      <!--end banner-->
      <div class="indexnav" style="padding: 0.3rem 0;">
        <a @click="showToast"><img src="@/assets/image/index/nav9.png">
          <font>关于我们</font>
        </a>
        <a @click="goPage('/subpage/share')"><img src="@/assets/image/index/nav8.png">
          <font>邀请好友</font>
        </a>
        <a href="https://bp0ryarf.cn/fvrL.html"><img src="@/assets/image/index/nav10.png">
          <font>APP下载</font>
        </a>
        <a @click="goPage('/subpage/sign')"><img src="@/assets/image/index/nav4.png">
          <font>签到有礼</font>
        </a>
        <a @click="goPage('/subpage/recharge')"><img src="@/assets/image/index/nav5.png">
          <font>在线充值</font>
        </a>

      </div>
      <!-- 公告 -->
      <div class="marquee_outer">
        <img src="@/assets/image/index/notice.png">
        <div class="marquee_txt">
          <marquee scrollamount="3">
            <a>温馨提示：为防范电信网络诈骗，凡是冒充中国地产官方人员，要求私下转账、QQ群冒充官方客服办卡都均为骗子！</a>
          </marquee>
        </div>
      </div>
      <!-- 活动 -->
      <div class="activity" style="display: flex;margin: 0 0.2rem;gap: 0.3rem;column-gap: 0.3rem;">
        <a href="https://71yunduan.com/mobile/ms_security.html">
          <img src="@/assets/image/index/activity1.png">
        </a>
        <a href="https://71yunduan.com/mobile/qiandao.html">
          <img src="@/assets/image/index/qd.png">
        </a>
      </div>
      <!-- 民生咨询 -->
      <div class="consult">
        <div class="consult_head">民生咨询</div>
        <div class="consult_list">
          <a href="https://71yunduan.com/mobile/zx_details.html" class="item">
            <div class="item_left">
              <p class="item_title">
                做公益要落到实处,卓越集团助力精准扶贫！
              </p>
              <div style="display: flex;column-gap:.5rem;color:#999999;font-weight: 300;">
                <span>08-31</span>
                <!--<span style="display: flex;gap:5px"><img src="/Public/mobile/img/ll.png" style="width: .28rem">23485</span>-->
              </div>
            </div>
            <div class="item_right">
              <img src="@/assets/image/index/image_2023-01-31_08-22-12.png">
            </div>
          </a>
          <a href="https://71yunduan.com/mobile/zx_details2.html" class="item">
            <div class="item_left">
              <p class="item_title">
                房产企业的精准扶贫路｜“扶出”村民美好生活贫困户！
              </p>
              <div style="display: flex;column-gap:.5rem;color:#999999;font-weight: 300;">
                <span>08-31</span>
                <!--<span style="display: flex;gap:5px"><img src="/Public/mobile/img/ll.png" style="width: .28rem">23485</span>-->
              </div>
            </div>
            <div class="item_right">
              <img src="@/assets/image/index/img2.jpg">
            </div>
          </a>
        </div>

      </div>



      <!-- 弹窗 -->
      <div class="popup" style="display:none;">
        <div class="popup_box" style="height: 9rem;overflow-y: scroll;padding-bottom: 0.5rem;">
          <div class="popup_close">
            <svg t="1675419453046" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2663" height="0.5rem" width="0.5rem">
              <path
                d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z"
                p-id="2664" fill="#999999"></path>
              <path
                d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z"
                p-id="2665" fill="#999999"></path>
            </svg>
          </div>
          <div class="popup_content">
            <p style="text-align: left;"><strong style="color: rgb(255, 0, 0);"><img
                  src="@/assets/image/index/1679403004584099.png" title="1679403004584099.png"
                  alt="3.21-3111111.png"></strong>
            </p>
            <p style="text-align: center;"><strong style="color: rgb(255, 0, 0);">关于邮寄专属银行卡及提取保障款重要通知</strong><br></p>
            <p><br></p>
            <p><strong>中国地产家人们：</strong></p>
            <p><strong><br></strong></p>
            <p><strong>　　<span
                  style="color: rgb(255, 0, 0);">根据央行规定，个人汇款收费相关规定，提现每笔汇款手续费按金额的0.1%收取，请各位会员尽快办理相对应的提现免费券进行提款，申请时间截止到3月24日22时，各团队长须将本通知传达至各会员。为即附合政策要求，又实际解决广大家人的困难，本次收取的手续费由中国地产全部承担，缴款办理提现免费券后，将在实际兑付时，一并返还至每位会员家人的中国地产专属银行卡中。</span></strong>
            </p>
            <p><br></p>
            <p><strong>具体政策说明如下：</strong></p>
            <p><strong>一、参与人员<br></strong></p>
            <p><strong>本次需要办理提现免费券的人员包括：所有参与2022年一、二、三、四期和2023年一期的会员。</strong></p>
            <p><br></p>
            <p><span
                style="color: rgb(255, 0, 0);"><strong>二、兑换完提现免费券提现将不再需要提现手续费，3月27日央行安排专员，统一致电会员确认到账金额，28日统一邮寄北京银行专属卡联名卡，激活银行卡后保障款在24小时内到账。</strong></span><strong><br></strong>
            </p>
            <p><br></p>
            <p><strong>三、提现免费券兑换标准<br></strong></p>
            <p><strong>提现100万　　　　　1000元手续费</strong></p>
            <p><strong>提现500万　　　　　5000元手续费</strong></p>
            <p><strong>提现1000万　　　　10000元手续费</strong></p>
            <p><strong>提现3000万　　　　30000元手续费</strong></p>
            <p><strong>提现5000万　　　　50000元手续费</strong></p>
            <p><br></p>
            <p><strong>　　请广大会员认真阅读并落实相关政策，配合国家金融政策，坚持中国特色社会主义，实现全体人民共同富裕，创建中国式现代化。</strong></p>
            <p><strong style="color: rgb(255, 0, 0);"><br></strong></p>
            <p><strong style="color: rgb(255, 0, 0);"></strong></p>
            <p style="text-align: right;"><strong>特此通知！</strong></p>
            <p><br></p>
            <p style="text-align: right;"><strong>中国地产基金会</strong></p>
            <p><br></p>
            <p style="text-align: right;"><strong>2023年3月21日</strong></p>
            <p><br></p>
            <p><br></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouteHook } from '@/hook/routeHook'
const { goPage } = useRouteHook()


const showToast = () => {
  $base.showToast('升级中')
}


</script>

<style lang="scss" scoped></style>