<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <Header title="Ocink"></Header>
      <div class="chat-receiver">
        <div><a href=""><img src="https://q4.qlogo.cn/headimg_dl?dst_uin=2687409344&spec=100"></a></div>
<!--        <div>卷心菜</div>-->
        <div>
          <div class="msgright">
            <div class="chat-right_triangle"></div>
            <span>

						你好啊

						</span>
          </div>
        </div>
      </div>
      <div class="chat-sender">
        <div><a href=""><img src="https://q4.qlogo.cn/headimg_dl?dst_uin=167076540&spec=100"></a></div>
<!--        <div>Ocink</div>-->
        <div>
          <div class="msgleft">
            <div class="chat-left_triangle"></div>
            <span>
						你好
						</span>
          </div>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/chat/header'
import Tabbar from '@/components/chat/tabbar'
export default {
  name: "chat",
  components:{
    Header,
    Tabbar
  }
}
</script>

<style scoped>

</style>