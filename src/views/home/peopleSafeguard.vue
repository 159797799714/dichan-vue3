<template>
  <div class="">
    <div class="rectangle_44">
      <div class="box">
        <div v-for="(item, index) in list" :key="index" class="item">
          <div style="font-size: 0">
            <img :src="item.image" class="item-img" />
          </div>
          <div class="box_b">
            <div class="text">
              {{nowMonth}}月份累计申请<span style="color: red">{{ total_recharge_money || 0 }}</span
              >元
            </div>
            <div v-if="item.draw_status != 1" class="blue" @click="getAction(item.id)">
              点击领取
            </div>
            <div v-else class="btn">已领取</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const list = ref('')
const myDate = new Date()
const nowMonth = myDate.getMonth() + 1

const total_recharge_money = ref(0)
// 民生保障列表
const getList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiEnsureList')
  console.log('民生保障列表', data)
  list.value = data.list || []
  total_recharge_money.value = data.total_recharge_money || 0
}
getList()

// 民生保障列表
const getAction = async (id) => {
  $base.showLoadingToast('领取中')
  let data = await $Http('apiDrawEnsure', { id })
  console.log('民生保障列表', data)
  if (!data) return
  $base.showToast('领取成功')
  setTimeout(() => {
    getList()
  }, 1500)
}
</script>

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

.item-img {
  width: 100%;
  height: auto;
}
</style>
