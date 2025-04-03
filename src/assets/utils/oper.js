import { ref } from "vue";
export default (para) => {
  const num = ref(para);
  const inc = () => {
    num.value++;
  };
  const dec = () => {
    num.value--;
  };
  return { num, inc, dec };
};
