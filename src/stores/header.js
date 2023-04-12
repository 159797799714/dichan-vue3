
import { defineStore } from 'pinia'

export const useHeadInfo = defineStore('header', {
  state: () => {
    title: ''
    rightInfo: { }
  },
  getters: {
    getTitle: state => {
      return state.title
    },
    getRightInfo: state => {
      return state.rightInfo
    }
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
