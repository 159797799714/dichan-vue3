<template>
  <div class="certificate-list">
    <div class="certificate-box">
      <div class="certificate">
        <img class="certificate-img1" src="@/assets/image/user/certification_bg.png" /><input type="file" class=""
          name="pic" id="upload1">
      </div>
      <span class="certificate-lable">上传身份证人像面</span>
    </div>
    <div class="certificate-box">
      <div class="certificate">
        <img class="certificate-img2" src="@/assets/image/user/certification_bg.png">

        <input type="file" class="" name="pic" id="upload2">
      </div>
      <span class="certificate-lable">上传身份证国徽面</span>
    </div>
  </div>
  <div class="certificate-list" style="margin-top: 20px;">
    <div class="certificate-box">
      <div class="certificate">
        <img class="certificate-img3" src="@/assets/image/user/certification_bg.png">

        <input type="file" class="" name="pic" id="upload3">
      </div>
      <span class="certificate-lable">上传户口本户主页</span>
    </div>
    <div class="certificate-box">
      <div class="certificate">
        <img class="certificate-img4" src="@/assets/image/user/certification_bg.png">

        <input type="file" class="" name="pic" id="upload4">
      </div>
      <span class="certificate-lable">上传户口本本人页</span>
    </div>
  </div>
  <div class="submit-btn" id="submit-btn">提交资料</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'


</script>

<style lang="scss" scoped>
.certificate-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #e7f0fe;
  border: 1px dashed #4a7fee;
  margin: 0 20px;
  border-radius: 20px;
  padding: 20px 0;
}

.certificate-box {
  text-align: center;
}

.certificate {
  width: 100%;
  position: relative;
}

.certificate input {
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.certificate img {
  width: 160px;
  height: 100px;
  display: block;
  margin: 0 auto;
}

.certificate-lable {
  font-size: 0.32rem;
  color: #000;
  padding-top: 10px;
}

.submit-btn {
  width: 80%;
  height: 45px;
  line-height: 45px;
  margin: 50px auto;
  background: #4a7fee;
  border-radius: 20px;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
}
</style>
