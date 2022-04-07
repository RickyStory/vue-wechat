<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <Header></Header>
      <div class="weui-search-bar">
        <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <input type="search" class="weui-search-bar__input" placeholder="搜索" />
          </div>
          <router-link to="add_friend"><label class="weui-search-bar__label" >
            <i class="weui-icon-search"></i>
            <span>账号搜索</span>
          </label>
          </router-link>
        </form>
      </div>
      <template v-for="(item,index) in friends">
        <div :id="index" class="friends-index">{{index}}</div>
        <div class="messages" style="margin-top: 5px;">
          <template v-for="info in item">
            <div class="message">
              <img :src="info.avatar" style="width: 2.8rem" alt="">
              <div class="con">
                <span>{{info.nickname}}</span>
                <p>{{info.des}}</p>
              </div>
              <div class="buttons">
                <template v-if="info.status===0">
                  已添加
                </template>
                <template v-else>
                  <a href="javascript:" role="button" class="weui-btn weui-btn_mini weui-btn_primary weui-wa-hotarea">同意</a>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Header from '@/components/new_friend/header'
export default {
  name: "new_friend",
  components:{
    Header
  },
  data () {
    return {
      friends: {},
    }
  },
  methods: {

  },
  mounted() {
    this.friends = {
      '三天前' : [{
        'uid' : 1,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Acink",
        'des' : "我是XXX看到你的",
        'status' : 1
      },{
        'uid' : 2,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Ait",
        'des' : "我是XXX看到你的",
        'status' : 1
      },{
        'uid' : 3,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Aick",
        'des' : "我是XXX看到你的",
        'status' : 1
      },{
        'uid' : 4,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Aitty",
        'des' : "我是XXX看到你的",
        'status' : 0
      }],
      '一周前' : [{
        'uid' : 5,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bcink",
        'des' : "我是XXX看到你的",
        'status' : 0
      },{
        'uid' : 6,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bit",
        'des' : "我是XXX看到你的",
        'status' : 0
      },{
        'uid' : 7,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bick",
        'des' : "我是XXX看到你的",
        'status' : 0
      },{
        'uid' : 8,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bitty",
        'des' : "我是XXX看到你的",
        'status' : 0
      }],
      '一月前' : [{
        'uid' : 9,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Ccink",
        'des' : "我是XXX看到你的",
        'status' : 0
      },{
        'uid' : 10,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Cit",
        'des' : "我是XXX看到你的",
        'status' : 0
      },{
        'uid' : 11,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Cick",
        'des' : "我是XXX看到你的",
        'status' : 0
      },{
        'uid' : 12,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Citty",
        'des' : "我是XXX看到你的",
        'status' : 0
      }]
    }
  }
}
</script>

<style scoped>

</style>