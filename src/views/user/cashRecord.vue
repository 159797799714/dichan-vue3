<template>
  <div ref="outRef" class="record_main">
    <div ref="contentRef" class="record_outer">
      <template v-if="recordList.length">
        <table>
          <tbody>
            <tr>
              <th>提现金额</th>
              <th>提现时间</th>
              <th>状态</th>
            </tr>
            <tr v-for="(item, index) in recordList" :key="index">
              <th>{{ item.money }}</th>
              <th>{{ formatTime(item.createtime) }}</th>
              <th>{{ statusObj[item.status] || '--' }}</th>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-else>
        <div class="t-center">暂无数据</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
const statusObj = {
  0: '待审核',
  1: '成功',
  2: '失败'
}
const hadLoad = ref(false)
const recordList = ref([])

const state = reactive({
  pageData: {
    page: 1,
    page_size: 1000
  },
  total: 1
})

const setrecordList = async () => {
  $base.showLoadingToast()
  let data = await $Http('apiGetWithdrawRecord', state.pageData)
  $base.closeToast()
  hadLoad.value = true
  state.total = data.total || 1
  recordList.value = data.list || []
}
setrecordList()

const formatTime = (time) => {
  return $base.DateFormat(time)
}

// const outRef = ref(null)
// const contentRef = ref(null)
// const sTop = ref(0)

// const isLoad = ref(false)
// const time = ref('')

// const pageScroll = e => {
//   const { scrollTop, clientHeight } = outRef.value
//   const contentHeight = contentRef.value.clientHeight

//   if (time.value) {
//     // clearTimeout(time.value)
//     // time.value = ''
//     return
//   }

//   time.value = setTimeout(() => {
//     sTop.value = scrollTop

//     console.log('e', scrollTop, sTop.value)

//     clearTimeout(time.value)
//     time.value = ''
//   }, 500)

//   if (scrollTop <= sTop.value) return
//   if (scrollTop > contentHeight - clientHeight - 100) {
//     console.log('--------触底100')
//   }

// }

// onMounted(() => {
//   console.log('mounted')
//   outRef.value.addEventListener('scroll', pageScroll, true)

//   setrecordList()
// })
// onBeforeUnmount(() => {
//   console.log('beforeUnmount')
//   outRef.value.removeEventListener('scroll', pageScroll, true);
// })
</script>

<style lang="scss" scoped>
.record_main {
  height: 100%;
  overflow-y: scroll;
}
</style>
