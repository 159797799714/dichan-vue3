
import { defineStore } from 'pinia'

export const useHeadInfoStore = defineStore('header', {
  state: () => ({
    title: '',
    rightInfo: {},
  }),
  // 类似于计算属性computed, 可使用this访问其它getters
  getters: {
    // getUserById: (state) => { // 返回一个函数，可以
    //   return (userId) => state.users.find((user) => user.id === userId)
    // },
  },
  actions: {
    saveTitle(name) {
      this.title = name
    },
    saveRightInfo(rightInfo) {
      this.rightInfo = rightInfo
    }
  }
})
