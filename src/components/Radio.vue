<template>
  <div class="radio">
    <div v-for="(item, index) in speci" :key="index">
      <input type="radio" :name="index" :id="item.id" :value="item.tag" :checked="item.tag === modelValue"
        @change="$emit('update:modelValue', item.tag)">
      <label>{{ item.tag }}</label>
      <!-- diff with tag  -->
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  speci: { type: Object, default: {} },
  modelValue: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
  emit('update:modelValue', value);
};

</script>

<style scoped>
.radio {
  display: flex;
  gap: var(--p-m-g);
}

.radio div {
  background-color: #f7f7f7;
  padding: 0 10px;
}
</style>