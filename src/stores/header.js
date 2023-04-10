import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('header', () => {
  const title = ref('')
  const rightInfo = ref({})


  return { title, rightInfo }
})
