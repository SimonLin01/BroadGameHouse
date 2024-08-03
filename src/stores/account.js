import { ref,reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
  const account = reactive({
    name: '', token: ''
  },{
    persist: {
      key: 'BoardGameAccount',
      paths: ['account'],
      storage: localStorage
    },
  })
  return { account }
})
