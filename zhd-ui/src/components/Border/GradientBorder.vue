<template>
  <div class="gradientBorder-box">
      <div class="gradient-border" :background="dd">
          <!-- 自定义内容 -->
          <slot name="text"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:"GradientBorder",
  data(){
      return{
          dd:"red"
      }
  }
}
</script>

<style lang="scss" scoped>
.gradientBorder-box{
    --border-width: 5px;
    padding: 20px;
    .gradient-border{
        text-align: center;
        margin-top: 20px;
        border-radius: var(--border-width);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 100px;
        font-size: 20px;
        background: #222;
        color: #fff;
    }
    .gradient-border:after{
        position: absolute;
        content: "";
        top: calc(-1 * var(--border-width));
        left: calc(-1 * var(--border-width));
        z-index: -1;
        width: calc(100% + var(--border-width) * 2);
        height: calc(100% + var(--border-width) * 2);
        background: linear-gradient(60deg,
                                    #5f86f2,
                                    #a65ff2,
                                    #f25fd0, 
                                    #f25f61, 
                                    #f2cb5f, 
                                    #abf25f, 
                                    #5ff281, 
                                    #5ff2f0);
        background-size: 300% 300%;
        background-position: 0 0;
        border-radius: calc(2 * var(--border-width));
        animation: moveGradient 4s  infinite;
    }
    @keyframes moveGradient {
    50% {
        background-position: 100% 0;
    }
}
}
</style>