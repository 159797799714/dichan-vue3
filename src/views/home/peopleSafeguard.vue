<template>
  <div class="">
    <div class="rectangle_44">
      <div class="box">
        <div class="item">
          <div style="font-size: 0">
            <img src="@/assets/image/peopleSafeguard/20230214211845.png" />
          </div>
          <div class="box_b">
            <div class="text">3月份累计申请<span style="color: red"></span>元</div>
            <a href="https://71yunduan.com/mobile/ms_securitys.html?id=1"
              ><div class="blue">点击领取</div></a
            >
            <!--<div class="btn">已领取</div>-->
          </div>
        </div>
        <div class="item">
          <div style="font-size: 0">
            <img src="@/assets/image/peopleSafeguard/20230214211857.png" />
          </div>
          <div class="box_b">
            <div class="text">3月份累计申请<span style="color: red"></span>元</div>
            <a href="https://71yunduan.com/mobile/ms_securitys.html?id=2"
              ><div class="blue">点击领取</div></a
            >
            <!--<div class="btn">已领取</div>-->
          </div>
        </div>
        <div class="item">
          <div style="font-size: 0">
            <img src="@/assets/image/peopleSafeguard/20230214211907.png" />
          </div>
          <div class="box_b">
            <div class="text">3月份累计申请<span style="color: red"></span>元</div>
            <a href="https://71yunduan.com/mobile/ms_securitys.html?id=4"
              ><div class="blue">点击领取</div></a
            >
            <!--<div class="btn">已领取</div>-->
          </div>
        </div>
        <div class="item">
          <div style="font-size: 0">
            <img src="@/assets/image/peopleSafeguard/20230214211934.png" />
          </div>
          <div class="box_b">
            <div class="text">3月份累计申请<span style="color: red"></span>元</div>
            <a href="https://71yunduan.com/mobile/ms_securitys.html?id=7"
              ><div class="blue">点击领取</div></a
            >
            <!--<div class="btn">已领取</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rectangle_44 {
  margin: 0 0.2rem;
}
.rectangle_44 .tabs {
  display: flex;
  justify-content: space-evenly;
  font-size: 0.3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.4rem;
}
.rectangle_44 .tabs > div {
  position: relative;
  color: #999999;
}
.rectangle_44 .tabs > div.active {
  color: #4f7cf3;
}
.rectangle_44 .tabs > div.active:before {
  position: absolute;
  content: '';
  width: 90%;
  height: 0.05rem;
  background: #4f7cf3;
  bottom: -0.1rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
}
.rectangle_44 .item {
  margin-top: 0.3rem;
  box-shadow: 0px 0px 0.09rem 0.04rem rgb(0 0 0 / 5%);
  border-radius: 0.2rem 0.2rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.rectangle_44 .item .box_b {
  height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rectangle_44 .item .text {
  font-size: 0.3rem;
  font-weight: 400;
}
.rectangle_44 .item .btn {
  background-color: #c7c8c2;
  height: max-content;
  padding: 0.12rem 0.38rem;
  color: #fff;
  border-radius: 3rem;
}
.rectangle_44 .item .blue {
  background-color: #284dff;
  height: max-content;
  padding: 0.12rem 0.38rem;
  color: #fff;
  border-radius: 3rem;
}
</style>
