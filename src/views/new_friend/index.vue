<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <Header title="通讯录"></Header>
      <div class="weui-panel" style="margin-top: 0;">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" class="weui-cell__hd" style="display: flex;flex-direction: row;align-items: center;"><img src="@/assets/images/icon/friend.svg" style="width: 1.6rem;" alt=""></div>
                <div aria-hidden="true" class="weui-cell__bd weui-cell_primary" style="margin-left: 1rem;">
                  <span>新的朋友</span>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" class="weui-cell__hd" style="display: flex;flex-direction: row;align-items: center;"><img src="@/assets/images/icon/team.svg" style="width: 1.6rem;" alt=""></div>
                <div aria-hidden="true" class="weui-cell__bd weui-cell_primary" style="margin-left: 1rem;">
                  <span>群聊</span>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <template v-for="(item,index) in friends">
        <div :id="index" class="friends-index">{{index}}</div>
        <div class="messages" style="margin-top: 5px;">
          <template v-for="info in item">
            <div class="message">
              <img :src="info.avatar" style="width: 1.8rem" alt="">
              <div class="con">
                <span>{{info.nickname}}</span>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
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
      'A' : [{
        'uid' : 1,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Acink"
      },{
        'uid' : 2,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Ait"
      },{
        'uid' : 3,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Aick"
      },{
        'uid' : 4,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Aitty"
      }],
      'B' : [{
        'uid' : 5,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bcink"
      },{
        'uid' : 6,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bit"
      },{
        'uid' : 7,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bick"
      },{
        'uid' : 8,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Bitty"
      }],
      'C' : [{
        'uid' : 9,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Ccink"
      },{
        'uid' : 10,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Cit"
      },{
        'uid' : 11,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Cick"
      },{
        'uid' : 12,
        'avatar' : require('@/assets/avatar/default_nor_avatar.png'),
        'nickname' : "Citty"
      }]
    }
  }
}
</script>

<style scoped>

</style>