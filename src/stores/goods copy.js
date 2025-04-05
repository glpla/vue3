import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getGoodsWithAxios, getGoodsWithFetch } from "@/api/api";
import { supabase } from "@/assets/utils/supabase";

export const useGoodsStore = defineStore("goods", () => {
  const goods = ref([]);
  const good = ref({});
  const isLoading = ref(false);
  const error = ref(null);

  const fetchGoods = async () => {
    try {
      const { data } = await getGoodsWithAxios();
      return data.cont;
    } catch (error) {
      console.error("Failed to fetch goods:", error);
      return [];
    }
  };

  const getGoods = async () => {
    goods.value = await fetchGoods();
  };

  const getGoodById = async (id) => {
    if (!goods.value.length) {
      goods.value = await fetchGoods();
    }
    good.value = goods.value.find((item) => item.id == id);
    return good.value;
  };

  // const getGoods = async () => {
  //   const { data } = await getGoodsWithAxios();
  //   goods.value = data.cont;
  // };

  // const getGoodById = async (id) => {
  //   const { data } = await getGoodsWithAxios();
  //   good.value = data.cont.find((item) => item.id == id);
  //   return good.value;
  // };

  const getGoodsWithSupabse = async () => {
    try {
      isLoading.value = true;
      const { data, error } = await supabase.from("coffee").select("*");
      if (error) {
        throw new Error(error.message); // 如果有错误，抛出异常
      }
      goods.value = data;
      return data;
    } catch (error) {
      error.value = "Failed to load data";
      goods.value = [];
      return [];
    } finally {
      isLoading.value = false;
    }
  };
  const getGoodsByIdWithSupabse = async (id) => {
    try {
      isLoading.value = true;
      const { data, error } = await supabase
        .from("coffee")
        .select("*")
        .eq("id", id);
      if (error) {
        throw new Error(error.message); // 如果有错误，抛出异常
      }
      good.value = data[0];
      return data[0];
    } catch (error) {
      error.value = "Failed to load data";
      good.value = {};
      return {};
    } finally {
      isLoading.value = false;
    }
  };
  const getGoodsFetch = async () => {
    const json = await getGoodsWithFetch();
    const data = await json.json();
    console.log(data.cont);
    goods.value = data.cont;
    return data.cont;
  };

  return {
    isLoading,
    error,
    goods,
    good,
    getGoods,
    getGoodById,
    getGoodsWithSupabse,
    getGoodsByIdWithSupabse,
  };
});
