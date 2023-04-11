<template>
  <div v-show="dialogShow" class="msgBox">
    <div class="box-content">
      <div id="msgTitle" style="padding: 10px 20px; background-color: #4f79bc; color: #fff">
        {{ DialogTitle }}
      </div>
      <div id="msgContent" style="padding: 20px; line-height: 25px">
        <slot />
      </div>
      <slot name="foot">
        <div id="msgBtn" style="padding: 10px 20px; text-align: right; border-top: 1px solid #eee">
          <input
            type="button"
            value="确定"
            style="background-color: #4f79bc; color: #fff; border: none; padding: 5px 10px"
            @click="submit"
          />
          <input
            type="button"
            value="取消"
            style="background-color: #4f79bc; color: #fff; border: none; padding: 5px 10px"
            @click="cancel"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

defineProps({
  DialogTitle: {
    type: String,
    default: '提示'
  }
})

const emit = defineEmits(['submit'])

const dialogShow = ref(false)

const show = () => {
  dialogShow.value = true
}

const submit = () => {
  emit('submit')
  cancel()
}
const cancel = () => {
  dialogShow.value = false
}

defineExpose({
  show,
  cancel
})
</script>

<style lang="scss" scoped>
.msgBox {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  height: 1000px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  font-size: 0.28rem;
  .box-content {
    width: 80%;
    margin-top: 40%;
    margin-left: 10%;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
