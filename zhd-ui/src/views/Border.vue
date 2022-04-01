<template>
  <div class="border-box">
    <gradient-border>
      <template #text>
        <div class="text">
          <p>座右铭</p>
          <p>当学习成为了一种习惯</p>
          <p>知识就变成了常识</p>
        </div>
      </template>
    </gradient-border>
  </div>
</template>

<script>
import GradientBorder from "@/components/Border/GradientBorder";
export default {
  name:"Border",
  components:{ GradientBorder } 
}
</script>

<style lang="scss" scoped>
.border-box{
    .text p:not(:first-child){
      font-size: 15px;
    }
}
</style>