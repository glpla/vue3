import { ref, inject } from "vue";
import { defineStore } from "pinia";
import { apiKey, keyword, radius } from "@/assets/config/tbl";

export const useMapStore = defineStore("map", () => {
  const axios = inject("axios");
  const center = ref({ lat: 23.02067, lng: 113.75179 });
  const locs = ref([]);
  const geometries = ref([]);
  const updateMarker = () => {
    console.log("center", center.value);

    axios
      .get(
        `/map-api/ws/place/v1/search?boundary=nearby(${center.value.lat},${center.value.lng},${radius})&keyword=${keyword}&page_size=10&page_index=1&key=${apiKey}`
      )
      .then((res) => {
        console.log("res", res);

        locs.value = res.data.data.map((item) => ({
          ...item,
          title: item.title.replace(/瑞幸咖啡\(/, "").replace(/\)/, ""),
          open: "08:30 - 21:30",
        }));

        geometries.value = res.data.data.map((item) => ({
          styleId: "marker",
          position: item.location,
          content: item.title.replace(/瑞幸咖啡\(/, "").replace(/\)/, ""),
        }));
      });
  };
  return { center, locs, geometries, updateMarker };
});
