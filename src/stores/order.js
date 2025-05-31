import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useOrderStore = defineStore("order", () => {
  const orders = ref([]);
  const tempOrder = ref({});
  const addToOrders = () => {
    orders.value.push(tempOrder.value);
    tempOrder.value = {};
  };
  const gerTempOrder = (products) => {
    tempOrder.value = {
      id: nanoid(),
      create_time: Date.now(),
      products,
    };
  };
  const sum = computed(() => {
    return tempOrder.value.products.reduce(
      (total, item) => total + item.quantity * item.price * (1 - item.discount),
      0
    );
  });
  const discount = computed(() => {
    return tempOrder.value.products.reduce(
      (total, item) => total + item.quantity * item.price * item.discount,
      0
    );
  });

  return { orders, addToOrders, tempOrder, gerTempOrder, sum, discount };
});
