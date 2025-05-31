import { ref } from "vue";
import { defineStore } from "pinia";

export const useGoodsStore = defineStore("goods", () => {
  const goods = ref([]);
  const good = ref({});
  const isLoading = ref(false);
  const error = ref(null);
  const getAll = async () => {
    try {
      isLoading.value = true;
      let res = await fetch("https://glpla.github.io/utils/data/coffee.json");
      let data = await res.json();
      goods.value = data.cont;
      return goods.value;
    } catch (error) {
      error.value = "Failed to load data";
      goods.value = [];
    } finally {
      isLoading.value = false;
    }
  };
  const getById = async (id) => {
    if (goods.value.length === 0) {
      await getAll();
    }
    good.value = goods.value.find((item) => item.id == id);
    return good.value;
  };

  return {
    isLoading,
    error,
    goods,
    good,
    getAll,
    getById,
  };
});
