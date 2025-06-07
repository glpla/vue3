<template>
  <div class="details-view">
    <div class="loading" v-if="goodsStore.isLoading">loading...</div>
    <div class="loading" v-else-if="!goodsStore.good">产品不存在</div>
    <template v-else>
      <Swiper :imgs="imgsUrl" />
      <div class="cont">
        <div class="cont-item">
          <h3 class="title mb-1">{{ goodsStore.good.title }}·{{ goodsStore.good.flavour }}</h3>
          <div class="m-b-2">{{ goodsStore.good.desc }}</div>
          <Specification class="mb-1" v-for="(item, ind) in goods.specification" :key="item.id" :items="item"
            v-model="goodsSelected.specification[ind].value"></Specification>
          <div class="favor">
            <button>
              <span @click="doFavorite" class="iconfont"
                :class="goodsSelected.is_follow ? 'icon-heart-fill' : 'icon-heart'"></span>
            </button>
            <button @click.stop="sharePage">
              <span class="iconfont icon-fenxiang_o"></span>
            </button>
          </div>
        </div>
        <RecoDessert class="cont-item" :dessert="goodsStore.good.dessert"
          v-model:dessertSelected="goodsSelected.dessert" />
        <RecoItems class="cont-item" :reco="goodsStore.good.recommend" />
        <div class="cont-item">
          <h3>商品详情</h3>
          <img src="" alt="">
        </div>
        <Guarantee class="cont-item" v-model="isShowModal" />
        <div class="cont-item">
          <h3>主要原料</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt omnis eius dolore temporibus velit
            voluptate
            ipsa esse commodi dignissimos animi!</p>
        </div>
        <div class="cont-item cont-price" :class="{ 'show-cont-all': isShow }">
          <h3>价格说明</h3>
          <ul class="sn">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus labore ullam ratione
              excepturi
              facere delectus laboriosam molestiae quas optio sed eaque in, aut corrupti. Nam porro saepe repellendus
              quis.
            </li>
            <li>Ad quis porro vel laborum quidem tempore aspernatur maiores enim illum mollitia nobis quasi, quod
              voluptates
              temporibus eos labore quibusdam. Consequatur tenetur aliquid ab deserunt pariatur asperiores qui delectus
              fuga!</li>
            <li>Praesentium placeat eaque id quidem repudiandae minima in assumenda vitae ducimus commodi molestiae
              ipsa,
              nam quo qui? Deleniti error iure facere minima voluptatem tempora, placeat eligendi. Rerum excepturi
              quisquam
              ipsum.</li>
            <li>Tempora ad harum labore ab vitae quisquam, rem consectetur, cupiditate illum perferendis recusandae
              accusamus facere, et commodi voluptate molestias dignissimos magnam amet ea incidunt? Repellat illo cumque
              quas nostrum vitae.</li>
            <li>Non quae necessitatibus odit vel enim rem veritatis facilis beatae. Suscipit cumque exercitationem
              ducimus,
              enim ea voluptatibus distinctio? Magni recusandae, aspernatur optio ullam dicta accusamus impedit mollitia
              eligendi corrupti unde.</li>
          </ul>
          <button class="cont-more" @click="isShow = !isShow">
            <span v-if="isShow" class="iconfont icon-jiantou_liebiaoshouqi_o"></span>
            <span v-else class="iconfont icon-jiantou_liebiaozhankai_o"></span>
          </button>
        </div>
        <div class="txt-center" @click="showComment">
          <p>展开评论</p>
          <span class="iconfont icon-details"></span>
        </div>
      </div>
      <div class="sub-view">
        <RouterView></RouterView>
      </div>
      <Transition name="fade">
        <GuaranteeModal v-model="isShowModal" v-show="isShowModal" />
      </Transition>
      <footer>
        <div class="info">
          <div class="price">
            <span class="f-b f-s-m">&yen;{{ sum }}&nbsp;</span>
            <span class="f-s-s">预估到手</span>
          </div>
          <div class="nums">
            <button class="btn dec" @click="goodsSelected.quantity--" :disabled="goodsSelected.quantity == 1">-</button>
            <span class="num f-s-m">{{ goodsSelected.quantity }}</span>
            <button class="btn inc" @click="goodsSelected.quantity++"
              :disabled="goodsSelected.quantity >= goodsSelected.stock">+</button>
          </div>
        </div>
        <div class="btns">
          <button class="buy" @click="toOrder">立即购买</button>
          <button class="add" @click="addToCart">加入购物车</button>
        </div>
      </footer>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useGoodsStore } from '@/stores/goods';
import { useOrderStore } from '@/stores/order';
import QRCode from 'qrcode';
import Swiper from '@/components/Swiper.vue';
import Specification from '@/components/Specification.vue';
import RecoItems from '@/components/RecoItems.vue';
import RecoDessert from '@/components/RecoDessert.vue';
import Guarantee from '@/components/Guarantee.vue';
import GuaranteeModal from '@/components/GuaranteeModal.vue';
const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const goodsStore = useGoodsStore()
const orderStore = useOrderStore()
const qrCode = ref(null);
const isShow = ref(false)
const isShowModal = ref(false)
const goods = ref({})
const goodsSelected = ref({})
const imgs = ref(['swiper0.jpg', 'swiper1.jpg', 'swiper2.jpg', 'swiper3.jpg', 'swiper4.jpg', 'swiper5.jpg', 'swiper6.jpg'])
const imgsUrl = computed(() => {
  return imgs.value.map(img => new URL(`../assets/swiper/${img}`, import.meta.url).href)
})
const addToCart = () => {
  const cartItem = {
    ...goodsSelected.value,
    productId: goodsSelected.value.id,
  };
  cartStore.addToCarts(cartItem)
  router.replace('/menu')
  alert('添加成功')
}

const toOrder = () => {
  const cartItem = {
    ...goodsSelected.value,
    productId: goodsSelected.value.id,
  };
  orderStore.addToOrders(selectedGoods.value)
  router.push('/order')
}

const handleGoods = async (id) => {
  console.log({ id });
  const res = await goodsStore.getById(id);
  goods.value = res
  goodsSelected.value = {
    ...res,
    quantity: 1,
    specification: [
      { name: '杯型', value: res.specification[0].options.find(item => item.sel)?.label || '中杯' },
      { name: '温度', value: res.specification[1].options.find(item => item.sel)?.label || '冷' },
      { name: '糖度', value: res.specification[2].options.find(item => item.sel)?.label || '标准糖' }
    ],
    dessert: [],
    recommend: []
  }
}

const sum = computed(() => {
  return goodsSelected.value.quantity * goodsSelected.value.price
})

watch(() => route.params.id, (newId, oldId) => {
  handleGoods(newId)
})

const generateQRCode = () => {
  const urlStr = window.location.href;
  console.log(urlStr);

  QRCode.toDataURL(urlStr, (err, code) => {
    if (err) {
      console.error('生成二维码失败', err);
    } else {
      qrCode.value = code;
      console.log(code);
    }
  });
};

const sharePage = () => {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: '分享页面内容',
      url: window.location.href,
    })
      .then(() => console.log('分享成功'))
      .catch((error) => console.error('分享失败', error));
  } else {
    alert('您的浏览器不支持分享功能');
  }
};

const showComment = () => {
  // router.push(`/details/${route.params.id}/comment`)
  router.push({ name: 'comment' })
}

onMounted(() => {
  handleGoods(route.params.id)
  console.log('timestamp ', Date.now());
})
</script>

<style scoped>
.details-view {
  background-color: #f5f5f5;
}

.favor {
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  gap: var(--p-m-g);
}

.cont {
  padding: var(--p-m-g);
}

.cont-item {
  position: relative;
  border-radius: 1rem;
  background-color: #fff;
  padding: 2rem 1rem;
  margin-bottom: var(--p-m-g);
}

.cont-more {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.cont-price ul {
  height: 10rem;
  overflow: hidden;
}

.cont-price ul li {
  margin-bottom: var(--p-m-g);
}

.cont-price.show-cont-all ul {
  height: auto;
}

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem 1rem;
  z-index: 99;
  background-color: #fff;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.price {
  color: var(--warn-color);
}

.nums {
  display: flex;
}

.nums .btn {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.nums .dec {
  border: 1px solid var(--main-color);
}

.nums .num {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
}

.nums .inc {
  background-color: var(--main-color);
  color: #fff;
}

.btns {
  display: flex;
  gap: var(--p-m-g);
}

.buy,
.add {
  flex: 1;
  height: var(--el-h);
  border-radius: 20px;
}

.buy {
  border: 1px solid var(--second-color);
  color: var(--second-color);
}

.add {
  background-color: var(--main-color);
  color: #fff;
}

.guarantee-modal {
  position: fixed;
  inset: 0;
  z-index: 100;
}

.loading {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  bottom: -100%;
}

.sub-view {
  margin-bottom: calc(var(--app-nav-h) + 5rem);

}
</style>