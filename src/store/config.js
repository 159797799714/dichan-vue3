import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    data: {}
  }),
  // 类似于计算属性computed, 可使用this访问其它getters
  getters: {
    kefuLink: (state) => {
      return state.data.custom_service
    }
    // getUserById: (state) => { // 返回一个函数，可以
    //   return (userId) => state.users.find((user) => user.id === userId)
    // },
  },
  actions: {
    saveConfig(config) {
      this.data = config
    },
    async getConfig() {
      console.log('config', this.data)
      // if (JSON.stringify(this.data) !== '{}') return this.data
      let data = await $Http('apiIndexCommon')
      console.log('重新获取公共配置', data)
      this.data = data
      return data
    }
  }
})
