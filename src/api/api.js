import axios from "axios";
export const getGoods = () => axios.get("@/data/goods.json");
export const getGoodsWithAxios = () =>
  axios.get("https://glpla.github.io/utils/data/coffee.json");
export const getGoodsWithFetch = () =>
  fetch("https://glpla.github.io/utils/data/coffee.json");
export const getCartWithAxios = () =>
  axios.get("https://glpla.github.io/utils/data/cart.json");
export const getCartWithFetch = () =>
  fetch("https://glpla.github.io/utils/data/cart.json");
