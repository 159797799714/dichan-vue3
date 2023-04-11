<template>
  <div class="">
    <div class="content" v-html="content"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const content = ref(
  '<p style="text-indent: 2em;"><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">多年来</span><span style="font-family:Calibri">,</span><span style="font-family:宋体">卓越集团在公益之路上不忘初心</span><span style="font-family:Calibri">,</span><span style="font-family:宋体">持续不断参与社会公益事业</span><span style="font-family:Calibri">,</span><span style="font-family:宋体">在助力精准扶贫方面交出了一份满分答卷。</span></span></p>'
)
</script>

<style lang="scss" scoped>
.login_bg {
  margin: 0 0.3rem;
}
.content {
  line-height: 1.5;
  margin: 0.2rem 0.4rem;
}
</style>
