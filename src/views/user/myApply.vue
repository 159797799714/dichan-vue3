<template>
  <div class="">
    <div class="record_outer">
      <table>
        <tbody>
          <tr>
            <th>项目名称</th>
            <th>项目类型</th>
            <th>申请金额</th>
            <th>状态</th>
            <!-- <th>详情</th> -->
          </tr>

          <!-- <td>基本保障基金</td>
            <td>
              2023一期
            </td>
            <td>100.00</td>
            <td>
              已完成
            </td> -->
          <tr v-for="(item, index) in Record" :key="index">
            <td>{{ item.project_name }}</td>
            <td>{{ item.project_type }}</td>
            <td>{{ item.money }}</td>
            <td>{{ item.status == '2' ? '已完成' : '未完成' }}</td>
            <!-- <td><a class="a1">查看</a></td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouteHook } from '@/hook/routeHook.js'
const { goPage } = useRouteHook()

import MsgDialog from '@/components/MsgDialog.vue'

const popTitle = ref('错误')

const state = reactive({
  FormData: {
    page: 1,
    page_size: 100
  },
  total: 1

})

const Record = ref([])
const getRecord = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiMyApply', state.FormData)
  console.log('我的申请', data)
  Record.value = data.list || []
}
getRecord()

</script>

<style lang="scss" scoped></style>
