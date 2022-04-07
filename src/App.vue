<template>
  <div class="container" id="container">
    <router-view v-wechat-title='$route.meta.title'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
}
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  color: var(--weui-FG-0);
}
</style>
