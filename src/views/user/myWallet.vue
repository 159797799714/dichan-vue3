<template>
  <div class="record_outer">
    <HeadBar :popTitle="popTitle"></HeadBar>
    <table>
      <tbody>
        <tr>
          <th>摘要</th>
          <th>金额</th>
          <th>时间</th>
        </tr>
        <tr>
          <td>产权办理，获得600现金红包</td>
          <td>
            <span style="color: #008000">+600.00</span>
          </td>
          <td>03-23 20:50</td>
        </tr>
        <tr>
          <td>缴纳维修基金，使用600元</td>
          <td>
            <span style="color: red">-600.00</span>
          </td>
          <td>03-23 20:50</td>
        </tr>
        <tr>
          <td>实名赠送数字人民币:8000</td>
          <td>
            <span style="color: #008000">+8000.00</span>
          </td>
          <td>02-17 07:19</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeadBar from '@/components/HeadBar.vue'

import { useRouteHook } from '@/hook/routeHook.js'
const { route } = useRouteHook()

const popTitle = ref('')

const { title } = route.query || {}
popTitle.value = title

</script>

<style lang="scss" scoped>
.record_outer .item {
  padding: 0.3rem 0;
  border-bottom: 1px solid #f6f6f6;
}

.record_outer .item .row {
  display: flex;
  justify-content: space-between;
}

.record_outer .item .row:nth-of-type(1) {
  font-size: 0.28rem;
  font-weight: 500;
}

.record_outer .item .row:nth-of-type(2) {
  margin-top: 0.3rem;
  flex-wrap: wrap;
  gap: 0.1rem;
  color: #999999;
  font-size: 0.2rem;
}

.record_outer .item .row:nth-of-type(2) span {
  color: #4f7cf3;
}
</style>
