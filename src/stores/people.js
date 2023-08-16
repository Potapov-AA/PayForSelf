import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'people'

export const usePeopleStore = defineStore(STORE_NAME, () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
