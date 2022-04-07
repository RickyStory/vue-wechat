<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <Header title="发现"></Header>
      <div class="weui-grids">
        <a href="javascript:" class="weui-grid" role="button">
          <div class="weui-grid__icon">
            <img src="@/assets/images/icon/friends.svg" alt="">
          </div>
          <p class="weui-grid__label">朋友圈</p>
        </a>
        <a href="javascript:" class="weui-grid" role="button">
          <div class="weui-grid__icon">
            <img src="@/assets/images/icon/music.svg" alt="">
          </div>
          <p class="weui-grid__label">音乐</p>
        </a>
        <a href="javascript:" class="weui-grid" role="button">
          <div class="weui-grid__icon">
            <img src="@/assets/images/icon/video.svg" alt="">
          </div>
          <p class="weui-grid__label">视频</p>
        </a>
        <a href="javascript:" class="weui-grid" role="button">
          <div class="weui-grid__icon">
            <img src="@/assets/images/icon/read.svg" alt="">
          </div>
          <p class="weui-grid__label">阅读</p>
        </a>
        <a href="javascript:" class="weui-grid" role="button">
          <div class="weui-grid__icon">
            <img src="@/assets/images/icon/game.svg" alt="">
          </div>
          <p class="weui-grid__label">游戏</p>
        </a>
        <a href="javascript:" class="weui-grid" role="button">
          <div class="weui-grid__icon">
            <img src="@/assets/images/icon/information.svg" alt="">
          </div>
          <p class="weui-grid__label">资讯</p>
        </a>
      </div>
    </div>
    <Tabbar pathActive="find"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
import Header from "@/components/header";
export default {
  name: "find",
  components:{
    Tabbar,
    Header
  }
}
</script>

<style scoped>

</style>