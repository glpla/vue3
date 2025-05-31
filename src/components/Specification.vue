<template>
  <div class="specification">
    <span>{{ items.label }}</span>
    <label class="specification-item" v-for="item in items.options" :key="item.id">
      <input type="radio" :name="items.tag" :value="item.label" v-model="model" hidden>
      <span>{{ item.label }}</span>
    </label>
  </div>
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  items: {
    type: Object,
    default: {}
  }
})

</script>

<style scoped>
.specification {
  display: grid;
  grid-template-columns: 4rem repeat(auto-fill, minmax(7rem, 1fr));
  align-items: center;
  gap: var(--p-m-g);
}

.specification-item {
  background-color: var(--second-bg-color);
  padding: 4px var(--p-m-g);
  text-align: center;
  cursor: pointer;
}

.specification-item:has(input:checked) {
  background-color: var(--third-bg-color);
  color: var(--main-color);
}
</style>