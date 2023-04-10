<template>
  <div class="mobile">
    <div class="header-nbsp"></div>
    <!--无-->

    <div class="rectangle_438">
      <img src="@/assets/image/share/recommend_bg.png">
      <div class="box">
        <div class="box_top">
          <h2>无</h2>
          <p>邀请您注册中国地产</p>
        </div>
        <div class="box_bottom">
          <div id="qrcode" style="width:3.4rem;margin: auto;"
            title="https://71yunduan.com/mobile/index.html/mobile/reg/invite/955506"><canvas width="100" height="100"
              style="display: none;"></canvas><img alt="Scan me!"
              src="data:image/png;base64,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"
              style="display: block;"></div>

          <div class="yqm">
            唯一邀请码：<span style="color: #CD553D">955506</span><br>
            邀请链接：<span style="color: #CD553D" id="yqlj" onclick="">71yunduan.com/mobile/reg.html?id=955506</span><br>
            <span>点击链接即可复制</span>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mobile {
  background: linear-gradient(225deg, #B3D1F9 0%, #E3F0FF 100%);
  min-height: 100vh;
  padding-bottom: 0;
}
</style>