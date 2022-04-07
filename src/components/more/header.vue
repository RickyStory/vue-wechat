<template>
  <div class="weui-header" style="    background-color: #fff;
    background-color: var(--weui-BG-2);">
    <div class="header-buttons header-left-buttons">
      <img v-on:click="back" src="@/assets/images/icon/back.svg" alt="">
    </div>
    <span>&nbsp;</span>
  </div>
  <div class="weui-header-shadow">
    <span>别问我为什么这么写</span>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
  },
  methods:{
    back(){
      this.$router.go(-1);//返回上一层
    },
  },
}
</script>

<style scoped>

</style>