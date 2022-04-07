<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <Header title="消息"></Header>
      <div class="messages">
        <template v-for="item in messages">
          <router-link to="chat" class="message">
            <img :src="item.avatar" alt="">
            <template v-if="item.unread!==0">
              <span class="weui-badge">{{item.unread}}</span>
            </template>
            <div class="con">
              <span>{{item.nickname}}</span>
              <p>{{item.new_message}}</p>
            </div>
            <div class="time">{{item.create_time}}</div>
          </router-link>
        </template>
      </div>
    </div>
  <Tabbar pathActive="home"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
import Header from '@/components/header'
export default {
  name: "home",
  components:{
    Tabbar,
    Header
  },
  data () {
    return {
      messages: {},
    }
  },
  methods: {

  },
  mounted() {
    this.messages = [{
      'uid' : 1,
      'unread' : 8,
      'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
      'nickname' : "Ocink",
      'new_message' : "你好",
      'create_time' : "晚上11:56"
    },{
      'uid' : 2,
      'unread' : 0,
      'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
      'nickname' : "Bit",
      'new_message' : "你好",
      'create_time' : "晚上10:56"
    },{
      'uid' : 3,
      'unread' : 2,
      'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
      'nickname' : "Rick",
      'new_message' : "你好",
      'create_time' : "晚上9:56"
    },{
      'uid' : 4,
      'unread' : 3,
      'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
      'nickname' : "Kitty",
      'new_message' : "你好",
      'create_time' : "晚上8:56"
    }]
  }
}
</script>

<style scoped>

</style>