<script setup>
import { computed, reactive, onMounted, watch, ref } from 'vue';

let isShow = ref(false)
let tips = ref('')

const cartData = reactive({
  selectedAll: false,
  selectedLists: [],
  lists: []
})
let total = ref(0)

const inc = (item) => {
  if (item.quantity < item.stock) {
    item.quantity++
  }
}
const dec = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const sortUp = (key) => {
  cartData.lists.sort((a, b) => {
    return a[key] - b[key]
  })
}
const sortDown = (key) => {
  cartData.lists.sort((a, b) => {
    return b[key] - a[key]
  })
}
const sortStrUp = (key) => {
  cartData.lists.sort((a, b) => {
    return a[key].localeCompare(b[key])
  })
}
const sortStrDown = (key) => {
  cartData.lists.sort((a, b) => {
    return b[key].localeCompare(a[key])
  })
}

onMounted(() => {
  let json = fetch('https://glpla.github.io/utils/data/cart.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      cartData.lists = data
    })
})
</script>

<template>
  <div class="cart">
    <table v-if="cartData.lists.length">
      <thead>
        <tr class="">
          <th>
            <input type="checkbox" v-model="cartData.selectedAll" @change="selAll">
            <span>商品</span>
          </th>
          <th>
            <span>单价</span>
            <span class="iconfont icon-sort"></span>
          </th>
          <th>
            <span>库存</span>
            <span class="iconfont icon-sort"></span>
          </th>
          <th>
            <span>操作</span>
            <span class="iconfont icon-sort"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="item in cartData.lists">
          <td>
            <input type="checkbox" :value="item" v-model="cartData.selectedLists" :id="`cb${item.id}`">
            <label :for="`cb${item.id}`" class="ellipsis">{{ item.name }}</label>
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.stock }}</td>
          <td class="btn-group">
            <button @click="dec(item)">-</button>
            <div class="number">{{ item.quantity }}</div>
            <button @click="inc(item)">+</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <div>总价: {{ total }}</div>
          </td>
        </tr>
      </tfoot>
    </table>
    <div v-else class="empty">
      <span class="iconfont icon-gouwuche_o"></span>
      <div>购物车为空</div>
    </div>
  </div>
</template>

<style scoped>
@import url(../assets/table.css);

.cart {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

th,
input[type='checkbox'],
input[type='checkbox']+label {
  cursor: pointer;
}

th>* {
  vertical-align: middle;
}

th:hover .iconfont {
  color: var(--main-color);
}

.number {
  width: 30px;
  text-align: center;
}

.btn-group {
  display: flex;
  align-items: center;
}

.btn-group button {
  background-color: #eee;
  color: var(--txt-color);
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
}

.btn-group button:hover {
  background-color: var(--main-color);
  color: var(--bg-color);
}

.empty {
  margin: auto;
  text-align: center;
}

.empty .iconfont {
  font-size: 48px;
  color: var(--main-color);
}
</style>