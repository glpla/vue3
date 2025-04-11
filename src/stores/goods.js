import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getGoodsWithAxios, getGoodsWithFetch } from "@/api/api";
import { supabase } from "@/assets/utils/supabase";

export const useGoodsStore = defineStore("goods", () => {
  const goods = ref([]);
  const good = ref({});
  const isLoading = ref(false);
  const error = ref(null);
  const getGoods = async () => {
    try {
      isLoading.value = true;
      const { data, error } = await supabase.from("coffee").select("*");
      if (error) {
        console.log("error", error);
        return;
      }
      goods.value = data;
    } catch (error) {
      error.value = "Failed to load data";
      goods.value = [];
    } finally {
      isLoading.value = false;
    }
  };
  const getGoodById = async (id) => {
    try {
      isLoading.value = true;
      const { data, error } = await supabase
        .from("coffee")
        .select("*")
        .eq("id", id);
      if (error) {
        console.log("error", error);
        return;
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

  return {
    isLoading,
    error,
    goods,
    good,
    getGoods,
    getGoodById,
  };
});
