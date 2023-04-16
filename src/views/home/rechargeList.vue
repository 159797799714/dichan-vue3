<template>
  <div>
    <div class="record_outer">
      <template v-if="list.length">
        <table>
          <tbody>
            <tr>
              <th>充值金额</th>
              <th>充值方式</th>
              <th>充值时间</th>
              <th>状态</th>
            </tr>
            <tr v-for="(item, index) in list" :key="index">
              <td>{{ item.money }}</td>
              <td>{{ item.channel }}</td>
              <td>{{ formatTime(item.createtime) }}</td>
              <td>{{ statusObj[item.status] || '--' }}</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-else-if="hadLoad">
        <div class="t-center">暂无数据</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const statusObj = {
  0: '处理中',
  1: '成功',
  2: '失败'
}
const hadLoad = ref(false)
const list = ref([])

const getList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetRechargeRecord')
  $base.closeToast()
  hadLoad.value = true
  list.value = data || []
}
getList()

const formatTime = (time) => {
  return $base.DateFormat(time)
}
</script>

<style lang="scss" scoped></style>
