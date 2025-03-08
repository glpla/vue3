import axios from "axios";
// axios.defaults.baseURL = "https://glpla.github.io/utils/data";

// test
export const getGoodsWithAxios = () =>
  axios.get("https://glpla.github.io/utils/data/coffee.json");
export const getGoodsWithFetch = () =>
  fetch("https://glpla.github.io/utils/data/coffee.json");
export const getCartWithAxios = () =>
  axios.get("https://glpla.github.io/utils/data/cart.json");
export const getCartWithFetch = () =>
  fetch("https://glpla.github.io/utils/data/cart.json");
