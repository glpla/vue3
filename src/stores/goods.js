import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getGoodsWithAxios, getGoodsWithFetch } from "@/api/api";

export const useGoodsStore = defineStore("goods", () => {
  const goods = ref([]);
  const good = ref({});

  const getGoods = async () => {
    const { data } = await getGoodsWithAxios();
    goods.value = data.cont;
  };
  const getGoodsFetch = async () => {
    const json = await getGoodsWithFetch();
    const data = await json.json();
    console.log(data.cont);
    goods.value = data.cont;
  };

  const getGoodById = async (id) => {
    const { data } = await getGoodsWithAxios();
    good.value = data.cont.find((item) => item.id == id);
    return good.value;
  };

  return { goods, good, getGoods, getGoodById };
});
