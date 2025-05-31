import { ref } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useCartStore = defineStore("cart", () => {
  const carts = ref([]);
  const addToCarts = (product) => {
    const existingItem = carts.value.find(
      (item) => item.productId === product.productId
    );
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      // replace id with nanoid
      carts.value.push({ ...product, id: nanoid(), create_time: Date.now() });
    }
  };

  const fetchCarts = async () => {
    let response = await fetch("../data/cart.json");
    let data = await response.json();
    carts.value = data;
    console.log("cart", data);
  };

  const clearCarts = () => {
    carts.value = [];
  };

  return {
    carts,
    addToCarts,
    fetchCarts,
    clearCarts,
  };
});
