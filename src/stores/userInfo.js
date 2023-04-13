
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userInfo', {
  state: () => ({
    lang: 'cn',
    userInfo: {}
  }),
  // 类似于计算属性computed, 可使用this访问其它getters
  getters: {
    token: (state) => {
      return state.userInfo.token
    }
    // getUserById: (state) => { // 返回一个函数，可以
    //   return (userId) => state.users.find((user) => user.id === userId)
    // },
  },
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },

    loginOut() {
      this.userInfo = {}
      localStorage.clear()
    }
  }
})
