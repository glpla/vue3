import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const addToCart = (product) => {
    // const existingItem = cart.value.find((item) => item.id === product.id);
    // if (existingItem) {
    //   existingItem.quantity++;
    //   console.log("++");
    // } else {
    //   cart.value.push({ ...product, quantity: 1 });
    //   console.log("1");
    // }
    const res = cart.value.filter((item) => item.id === product.id)[0];
    if (res) {
      res.quantity += product.quantity;
    } else {
      cart.value.push({ ...product });
    }
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter((item) => item.id !== id);
  };

  const fetchCart = async () => {
    let response = await fetch("../data/cart.json");
    let data = await response.json();
    cart.value = data;
    console.log("cart", data);
  };
  const clearCart = () => {
    cart.value = [];
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    fetchCart,
    clearCart,
  };
});
