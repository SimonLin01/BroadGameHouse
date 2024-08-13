import { ref,reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
  const name = ref('');
  const token = ref('');
  const isAdmin = ref(0);
  return { name, token, isAdmin }
},{
  persist: {
    key: 'BoardGameAccount',
    paths: ['name', 'token', 'isAdmin'],
    storage: localStorage
  },
})
