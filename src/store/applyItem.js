import { defineStore } from 'pinia'

export const useApplyItemStore = defineStore('applyItem', {
  state: () => ({
    itemInfo: {}
  }),
  // 类似于计算属性computed, 可使用this访问其它getters
  getters: {
    content: (state) => {
      return state.itemInfo.content || '暂无项目数据'
    },
    money: (state) => {
      return state.itemInfo.money ? state.itemInfo.money * 1 : 0
    }
  },
  actions: {
    setInfo(itemInfo) {
      console.log('申请的项目信息', itemInfo)
      this.itemInfo = itemInfo
    }
  }
})
