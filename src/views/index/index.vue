<template>
  <div class="weui-msg">
    <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
    <div class="weui-msg__text-area">
      <h2 class="weui-msg__title">欢迎访问</h2>
      <p class="weui-msg__desc">基于WEUI实现的微信页面</p>
    </div>
    <div class="weui-msg__opr-area">
      <p class="weui-btn-area">
        <router-link to="login" class="weui-btn weui-btn_primary">登录</router-link>
        <router-link to="reg" class="weui-btn weui-btn_default">注册</router-link>
      </p>
    </div>
    <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__text">Copyright &copy; 2022 ocink.cn</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>