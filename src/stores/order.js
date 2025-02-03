import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", () => {
  const order = ref(0);

  return { order };
});
