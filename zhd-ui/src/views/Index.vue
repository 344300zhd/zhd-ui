<template>
  <div class="index-box">
    <ul>
      <li>
        <router-link :to="'/border'">边框</router-link>
      </li>
      <li>
        <p @click="open">对话框</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods:{
    open(){
      this.$confirm({
        text:"测试信息"
      }).then((res) => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul li{
  cursor: pointer;
}
</style>
