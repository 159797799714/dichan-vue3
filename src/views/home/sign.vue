<template>
  <div class="mobile">
    <div class="rectangle_711">
      <img src="@/assets/image/sign/qiandao.png" />
    </div>
    <div class="rectangle_378">
      <div class="qd_num">已签到0天</div>
      <div class="block_list">
        <div class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>1.00</p>
          <div class="progress_block"></div>
          <p>第1天</p>
        </div>
        <div class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>28.00</p>
          <div class="progress_block"></div>
          <p>第2天</p>
        </div>
        <div class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>38.00</p>
          <div class="progress_block"></div>
          <p>第3天</p>
        </div>
        <div class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>68.00</p>
          <div class="progress_block"></div>
          <p>第4天</p>
        </div>
        <div class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>88.00</p>
          <div class="progress_block"></div>
          <p>第5天</p>
        </div>
        <div class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>888.00</p>
          <div class="progress_block"></div>
          <p>第6天</p>
        </div>
        <div class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>8888.00</p>
          <div class="progress_block"></div>
          <p>第7天</p>
        </div>
      </div>
    </div>
    <a href="https://71yunduan.com/mobile/qiandaos.html">
      <div class="qd_btn">立即签到</div>
    </a>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.rectangle_378 {
  margin: -2.1rem 0.2rem 0;
  padding: 1rem 0.2rem 0.2rem;
  box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 5%);
  border-radius: 0.2rem 0.2rem;
  background-color: #ffffff;
  position: relative;
}

.rectangle_378 .qd_num {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.1rem 0.2rem;
  background: #fff0d1;
  color: #ff9a15;
  border-radius: 0 0 0.2rem 0.2rem;
}

.rectangle_378 .qd_num:after {
  content: '';
  position: absolute;
  top: -0.09rem;
  left: -0.1rem;
  width: 0.3rem;
  height: 86%;
  background: #fff0d1;
  transform: rotate(-25deg);
  z-index: -1;
  -webkit-clip-path: polygon(88% 30%, 60% 30%, 0% 100%, -8% 0);
}

.rectangle_378 .qd_num:before {
  content: '';
  position: absolute;
  top: -0.09rem;
  right: -0.1rem;
  width: 0.3rem;
  height: 86%;
  background: #fff0d1;
  transform: rotate(25deg);
  z-index: -1;
  -webkit-clip-path: polygon(100% 3%, 100% 100%, 0% 100%, 30% 25%);
}

.rectangle_378 .block_list {
  display: flex;
}

.rectangle_378 .block {
  flex: 1;
  text-align: center;
}

.rectangle_378 .block p:nth-of-type(1) {
  margin: 0 0 0.2rem;
}

.rectangle_378 .block p:nth-of-type(2) {
  margin: 0.2rem 0;
  font-size: 0.2rem;
  color: #999999;
}

.rectangle_378 .block .progress_block {
  height: 0.18rem;
  background-color: #e4e4e4;
}

.rectangle_378 .block .progress_block.active {
  background-color: #ffb62d;
}

.rectangle_378 .block:nth-of-type(1) .progress_block {
  border-radius: 0.2rem 0 0 0.2rem;
}

.rectangle_378 .block:nth-last-of-type(1) .progress_block {
  border-radius: 0 0.2rem 0.2rem 0;
}

.qd_btn {
  margin: 0.8rem 1.2rem;
  background: linear-gradient(180deg, #ffa16b 0%, #fe644a 100%);
  border-radius: 4rem;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  font-size: 0.3rem;
  color: #fff;
}
</style>
