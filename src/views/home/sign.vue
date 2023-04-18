<template>
  <div class="">
    <div class="rectangle_711">
      <img src="@/assets/image/sign/qiandao.png" />
    </div>
    <div v-if="SignList.length" class="rectangle_378">
      <div class="qd_num">已签到{{ signDay }}天</div>
      <div class="block_list">
        <div v-for="(item, index) in SignList" :key="index" class="block">
          <img src="@/assets/image/sign/jb_icon.png" style="width: 0.6rem" />
          <p>{{ item.money }}</p>
          <div :class="['progress_block', item.status == 1 ? 'had-sign' : '']"></div>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <a>
      <div v-if="!todayStatus" class="qd_btn" @click="signNow">立即签到</div>
      <div v-else class="qd_btn bg-99">今日已签到</div>
    </a>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()


import { useToastRefreshHook } from '@/hook/toastRefresh.js'
const { showToastRefresh } = useToastRefreshHook()

const todayStatus = ref(true)
const SignList = ref([])
const signDay = computed(() => {
  const list =  SignList.value.filter(item => item.status == 1)
  return list.length || 1
})
const getSignList = async (noLoading) => {
  !noLoading && $base.showLoadingToast()
  let data = await $Http('apiSignInList')
  console.log('签到列表', data)

  data = data || {}
  const list = []
  for (var i = 0; i < 7; i++) {
    list.push(data[i])
  }
  todayStatus.value = data['today_status'] == 1 ? true : false
  SignList.value = list
}
getSignList()

const signNow = async () => {
  if (todayStatus.value) return

  $base.showLoadingToast('签到中')
  let data = await $Http('apiSignin')
  console.log('签到返回', data)
  if (!data) return

  showToastRefresh('签到成功', () => getSignList(true))

  // $base.showToast('签到成功')
  // setTimeout(() => {
  //   getSignList(true)
  // }, 1500)
}
</script>
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

.had-sign {
  background-color: #ff9a15!important;
}

.bg-99 {
  background: #999;
}
</style>
