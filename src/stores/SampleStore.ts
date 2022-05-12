import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0);

  // Mutation(Action)
  const increment = () => {
    count.value += 1;
  };

  // Getters
  const getDoubleCount = computed(() => count.value * 2);

  return {
    count,
    increment,
    getDoubleCount,
  };
});

export default useCounterStore;
