import { defineStore } from 'pinia'

export const useUserStore = defineStore('userInfo', {
  state: () => ({
    lang: 'cn',
    userInfo: {}
  }),
  // 类似于计算属性computed, 可使用this访问其它getters
  getters: {
    token: (state) => {
      return state.userInfo.token || localStorage.getItem('token')
    },
    hadInfo: (state) => {
      return JSON.stringify(state.userInfo) !== '{}'
    },
    hadPwd: (state) => {
      return state.userInfo.set_pay_password == 1
    }
    // getUserById: (state) => { // 返回一个函数，可以
    //   return (userId) => state.users.find((user) => user.id === userId)
    // },
  },
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
      localStorage.setItem('token', userInfo.token || '')
    },
    async getUserInfo() {
      console.log('this', this.userInfo)
      // if (JSON.stringify(this.userInfo) !== '{}') return this.userInfo
      let data = await $Http('apiFindUserInfo')
      console.log('重新获取用户信息', data)
      this.userInfo = data
      return data
    },

    loginOut() {
      this.userInfo = {}
      localStorage.clear()
      sessionStorage.clear()
      $base.showToast('已成功安全退出')
      setTimeout(() => {
        window.location.href = `${window.location.origin}/login`
      }, 1500)
    }
  }
})
