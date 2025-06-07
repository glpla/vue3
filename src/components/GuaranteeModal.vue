<template>
  <div class="guarantee-modal" @click.self="model = false">
    <div class="modal-cont">
      <button class="btn modal-btn" @click.stop="model = false">
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

<script setup>
import Security from '@/components/Security.vue';
const model = defineModel()
</script>

<style scoped>
.guarantee-modal {
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-cont {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--max-width);
  background-color: #fff;
  padding: 2rem 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
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
</style>