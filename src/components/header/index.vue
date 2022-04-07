<template>
  <div class="weui-header">
    <span>{{title}}</span>
    <div class="header-buttons header-right-buttons">
      <a @click="changeShow"><img src="@/assets/images/icon/add.svg" alt=""></a>
    </div>
  </div>
  <div class="weui-header-shadow">
    <span>别问我为什么这么写</span>
  </div>
  <template v-if="showMore">
    <div class="home-bubble">
      <div class="bubble-links">
        <router-link to="add_friend" class="bubble-link"><img src="@/assets/images/bubble-icon/add_friend.svg" alt="">添加朋友</router-link>
        <div class="bubble-link"><img src="@/assets/images/bubble-icon/add_qun.svg" alt="">发起群聊</div>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      showMore:false
    }
  },
  props: {
    title:String
  },
  methods: {
    changeShow(){
      this.showMore = this.showMore !== true;
    }
  }
}
</script>

<style scoped>

</style>