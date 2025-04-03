import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getGoodsWithAxios, getGoodsWithFetch } from "@/api/api";
import { supabase } from "@/assets/utils/supabase";

export const useGoodsStore = defineStore("goods", () => {
  const goods = ref([]);
  const good = ref({});

  const getGoods = async () => {
    const { data } = await getGoodsWithAxios();
    goods.value = data.cont;
  };
  const getGoodsWithSupabse = async () => {
    const { data, error } = await supabase.from("coffee").select("*");
    console.log("all", data);
    goods.value = data;
  };
  const getGoodsByIdWithSupabse = async (id) => {
    let { data, error } = await supabase
      .from("coffee")
      .select("*")
      .eq("id", id);
    console.log("id", data);
    good.value = data[0];
    return good.value;
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

  return {
    goods,
    good,
    getGoods,
    getGoodById,
    getGoodsWithSupabse,
    getGoodsByIdWithSupabse,
  };
});
