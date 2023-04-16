<template>
  <div class="mobile">
    <div class="othertop">
      <a class="goback" href="javascript:history.back();"
        ><img src="./我的申请_files/goback.png"
      /></a>
      <div class="othertop-font">我的申请</div>
    </div>
    <div class="header-nbsp"></div>
    <div class="record_outer">
      <table>
        <tbody>
          <tr>
            <th>项目名称</th>
            <th>项目类型</th>
            <th>申请金额</th>
            <th>状态</th>
            <th>详情</th>
            <!--<th>合同</th>-->
          </tr>
          <tr>
            <td>中国地产提现免费券100万额度</td>
            <td>免费券</td>
            <td>1000.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/242039.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/242039.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>中国地产提现免费券1000万额度</td>
            <td>免费券</td>
            <td>10000.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/228309.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/228309.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>国家数学天元基金</td>
            <td>2023二期</td>
            <td>500.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/228271.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/228271.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>国家数学天元基金</td>
            <td>2023二期</td>
            <td>500.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/198216.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/198216.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>中国地产提现免费券100万额度</td>
            <td>免费券</td>
            <td>1000.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/198197.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/198197.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>国家数学天元基金</td>
            <td>2023二期</td>
            <td>500.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/198192.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/198192.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>中国地产提现免费券100万额度</td>
            <td>免费券</td>
            <td>1000.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/198164.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/198164.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>C档</td>
            <td>提现板块</td>
            <td>2000.00</td>
            <td>未完成</td>
            <td><a href="https://71yunduan.com/user/details/id/6.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/6.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>创业保障基金</td>
            <td>2023一期</td>
            <td>5000.00</td>
            <td>已完成</td>
            <td><a href="https://71yunduan.com/user/details/id/5.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/5.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>复工保障基金</td>
            <td>2023一期</td>
            <td>1500.00</td>
            <td>已完成</td>
            <td><a href="https://71yunduan.com/user/details/id/4.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/4.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>健康保障基金</td>
            <td>2023一期</td>
            <td>500.00</td>
            <td>已完成</td>
            <td><a href="https://71yunduan.com/user/details/id/3.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/3.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>生活保障基金</td>
            <td>2023一期</td>
            <td>200.00</td>
            <td>已完成</td>
            <td><a href="https://71yunduan.com/user/details/id/2.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/2.html" class="a2">查看</a></td>-->
          </tr>
          <tr>
            <td>基本保障基金</td>
            <td>2023一期</td>
            <td>100.00</td>
            <td>已完成</td>
            <td><a href="https://71yunduan.com/user/details/id/1.html" class="a1">查看</a></td>
            <!--<td><a href="/user/contract/id/1.html" class="a2">查看</a></td>-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'

const popTitle = ref('错误')
</script>

<style lang="scss" scoped></style>
