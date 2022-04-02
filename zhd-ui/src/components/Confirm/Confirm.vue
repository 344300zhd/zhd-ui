<template>
  <transition name="fade">
    <div class="confirm-mask" v-show="showFlag">
      <div class="confirm-content">
        <div class="confirm-text">
          {{ text }}
        </div>
        <!-- 禁止点击穿透 -->
        <div class="confirm-operation" @click.stop>
          <div class="operation-ok" @click="confirm">确认</div>
          <div class="operation-no" @click="close">取消</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Confirm",
  data() {
    return {
      showFlag: true,
      text: "默认信息",
    };
  },
  methods: {
    show: function (cb) {
      this.showFlag = true;
      typeof cb === "function" && cb.call(this)
      return new Promise((resolve,reject) => {
          this.resolve = resolve
          this.reject = reject
      })
    },
    confirm() 
    {
        this.hide()
        this.resolve("确认");
    },
    close() {
      this.hide()
      this.reject("取消");
    },
    hide(){
      this.showFlag = false;
      document.body.removeChild(this.$el);
      this.$destroy();
    }
  },
};
</script>

<style lang="scss" scoped>
.confirm-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  animation: fade 1s;
  .confirm-content {
    background: #fff;
    width: 400px;
    height: 300px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .confirm-text {
      height: 85%;
      padding: 20px;
    }
    .confirm-operation {
      display: flex;
      justify-content: space-around;
      height: 15%;
      .operation-no,
      .operation-ok {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .operation-no {
        border-top: 1px solid #eee;
        border-left: 1px solid #eee;
      }
      .operation-ok {
        border-top: 1px solid #eee;
      }
    }
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
</style>