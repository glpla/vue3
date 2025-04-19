<template>
  <div class="details-view">
    <div class="loading" v-if="goodsStore.isLoading">loading...</div>
    <div class="loading" v-else-if="!goodsStore.good">产品不存在</div>
    <template v-else>
      <Swiper :imgs="imgsUrl" />
      <div class="cont">
        <div class="header p-1">
          <h3 class="title mb-1">{{ goodsStore.good.name }}</h3>
          <div class="m-b-2">{{ goodsStore.good.desc }}</div>
          <div class="specification">
            <div class="items">
              <span>杯型</span>
              <span class="item" v-for="item in goodsStore.good.cup">
                <input type="radio" name="cup" :id="`cup${item.id}`" :value="item.tag" hidden
                  v-model="goodsSelected.cup">
                <label :for="`cup${item.id}`">{{ item.tag }}</label>
              </span>
            </div>
            <!-- <div>{{ goodsSelected.cup }}</div> -->
            <div class="items">
              <span>温度</span>
              <span class="item" v-for="item in goodsStore.good.ther">
                <input type="radio" name="ther" :id="`ther${item.id}`" :value="item.tag" hidden
                  v-model="goodsSelected.ther">
                <label :for="`ther${item.id}`">{{ item.tag }}</label>
              </span>
            </div>
            <!-- <div>{{ goodsSelected.ther }}</div> -->
            <div class="items">
              <span>糖度</span>
              <span class="item" v-for="item in goodsStore.good.sugar">
                <input type="radio" name="sugar" :id="`sugar${item.id}`" :value="item.tag" hidden
                  v-model="goodsSelected.sugar">
                <label :for="`sugar${item.id}`">{{ item.tag }}</label>
              </span>
            </div>
            <!-- <div>{{ goodsSelected.sugar }}</div> -->
          </div>
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
        <!-- <img v-if="qrCode" :src="qrCode" alt="QR Code" /> -->
        <!-- <button @click="generateQRCode">分享页面</button> -->
        <RecoDessert :dessert="goodsStore.good.dessert" v-model:dessertSelected="goodsSelected.dessert" />
        <!-- <div>{{ goodsSelected.dessert }}</div> -->
        <RecoItems :reco="goodsStore.good.recommend" />
        <div class="">
          <h3 class="cont-title">商品详情</h3>
          <img src="" alt="">
        </div>
        <Guarantee @show-guarantee="isShowModal = true" />
        <div>
          <h3 class="cont-title">主要原料</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt omnis eius dolore temporibus velit
            voluptate
            ipsa esse commodi dignissimos animi!</p>
        </div>
        <div class="cont-price" :class="{ 'show-cont-all': isShow }">
          <h3 class="cont-title">价格说明</h3>
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
          <button class="more" @click="isShow = !isShow">
            <span v-if="isShow" class="iconfont icon-jiantou_liebiaoshouqi_o"></span>
            <span v-else class="iconfont icon-jiantou_liebiaozhankai_o"></span>
          </button>
        </div>
      </div>
      <footer class="w">
        <div class="info">
          <div class="price">
            <span class="f-b f-s-m">&yen;{{ sum }}&nbsp;</span>
            <span class="f-s-s">预估到手</span>
          </div>
          <div class="nums">
            <button class="btn dec" @click="goodsSelected.quantity--">-</button>
            <span class="num f-s-m">{{ goodsSelected.quantity }}</span>
            <button class="btn inc" @click="goodsSelected.quantity++">+</button>
          </div>
        </div>
        <div class="btns">
          <button class="buy" @click="toOrder">立即购买</button>
          <button class="add" @click="addToCart">加入购物车</button>
        </div>
      </footer>
      <div class="modal" :class="{ 'show': isShowModal }" @click.self="isShowModal = false">
        <div class="w modal-cont">
          <button class="btn modal-btn" @click.prevent="isShowModal = false">
            <span class="iconfont icon-jiantou_liebiaozhankai_o"></span>
          </button>
          <div class="modal-header">
            <div class="modal-title">
              <Security />
              <h3>交易保障</h3>
            </div>
            <div class="modal-sub-title">以获得小程序交易保障认证</div>
          </div>
          <div class="modal-items">
            <span class="iconfont icon-balance"></span>
            <div class="modal-item">
              <h3>先行赔付</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente autem ut impedit? Quis,
                suscipit!</p>
            </div>
            <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
            <span class="iconfont icon-si-glyph-balance"></span>
            <div class="modal-item">
              <h3>消费者权益保障</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis.</p>
            </div>
            <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
            <span class="iconfont icon-kefu"></span>
            <div class="modal-item">
              <h3>客服应答</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
          </div>
          <h4 class="modal-help">交易遇到问题？</h4>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import { useGoodsStore } from '@/stores/goods';
import QRCode from 'qrcode';
import Swiper from '@/components/Swiper.vue';
import RecoItems from '@/components/RecoItems.vue';
import RecoDessert from '@/components/RecoDessert.vue';
import Guarantee from '@/components/Guarantee.vue';
import Security from '@/components/Security.vue';
const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const goodsStore = useGoodsStore()
const qrCode = ref(null);
const isShow = ref(false)
const isShowModal = ref(false)
const goodsSelected = ref({})
const imgs = ref(['swiper0.jpg', 'swiper1.jpg', 'swiper2.jpg', 'swiper3.jpg', 'swiper4.jpg', 'swiper5.jpg', 'swiper6.jpg'])
const imgsUrl = computed(() => {
  return imgs.value.map(img => new URL(`../assets/swiper/${img}`, import.meta.url).href)
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

const addToCart = () => {

  cartStore.addToCart(goodsSelected.value)
  console.log(goodsSelected.value);

  alert('添加成功')
  router.replace('/menu')
}

const toOrder = () => {
  router.push('/order')
}

const handleGoods = async (id) => {
  const res = await goodsStore.getGoodById(id);
  console.log('res', res);

  goodsSelected.value = {
    ...res,
    quantity: 1,
    cup: res.cup.find(item => item.sel)?.tag || '中杯',
    ther: res.ther.find(item => item.sel)?.tag || '冷',
    sugar: res.sugar.find(item => item.sel)?.tag || '标准杯',
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

onMounted(() => {
  handleGoods(route.params.id)
})
</script>

<style scoped>
.details-view {
  background-color: #f5f5f5;
}

.cont {
  padding: var(--p-m-g);
}

.header {
  position: relative;
  border-radius: 1rem;
  background-color: #fff;
}

.specification .items {
  display: flex;
  align-items: center;
  gap: var(--p-m-g);
  margin-bottom: 2rem;
}

.specification .item label {
  display: inline-block;
  background-color: var(--second-bg-color);
  width: 8rem;
  padding: 4px var(--p-m-g);
  text-align: center;
}

.specification .item input:checked+label {
  background-color: var(--third-bg-color);
  color: var(--main-color);
}

.favor {
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  gap: var(--p-m-g);
}

.reco-dessert,
.reco-items {
  border-radius: 1rem;
}

.cont>* {
  position: relative;
  border-radius: 1rem;
  background-color: #fff;
  padding: 2rem 1rem;
  margin-bottom: var(--p-m-g);
}

.cont .more {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.cont-price {
  margin-bottom: calc(var(--app-nav-h) + 2*var(--p-m-g));
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

.guarantee {
  border-radius: 1rem;
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

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
  overflow: hidden;
}

.modal-cont {
  position: absolute;
  left: 50%;
  bottom: 0;
  background-color: #fff;
  padding: 2rem 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  transform: translateX(-50%) translateY(100%);
  transition: 0.5s;
}

/* .details:has(.modal.show) {
  height: 100vh;
  overflow: hidden;
} */

.modal.show {
  transform: translateY(0);
}

.modal.show .modal-cont {
  transform: translateX(-50%) translateY(0);
}

.modal-btn {
  display: block;
  width: max-content;
  margin: 0 auto;
}

.modal-btn .iconfont {
  background-color: #f5f5f5;
  padding: 0rem 2rem;
  border-radius: 0.5rem;
}

.modal-header {
  text-align: center;
  padding: 4rem 0;
}

.modal-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: var(--security-color);
}

.modal-items {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  gap: 2rem 1rem;
  padding-bottom: 6rem;
}

.modal-items .iconfont {
  font-size: 3rem;
  color: var(--security-color);
}

.modal-help {
  text-align: center;
  color: var(--tips-color);
}

.loading {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>