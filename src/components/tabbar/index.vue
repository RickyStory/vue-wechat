<template>
  <div class="weui-tabbar">
    <template v-for="item in tabbars">
      <template v-if="item.path === pathActive">
        <router-link :to="item.path" class="weui-tabbar__item weui-bar__item_on">
          <img :src="item.onicon" alt="icon" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">{{item.title}}</p>
        </router-link>
      </template>
      <template v-else>
        <router-link :to="item.path" class="weui-tabbar__item">
          <img :src="item.icon" alt="icon" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">{{item.title}}</p>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    pathActive:String
  },
  data () {
    return {
      tabbars:[{
        'title':"消息",
        'path':"home",
        'icon':require("@/assets/images/tabbar/home.svg"),
        'onicon':require("@/assets/images/tabbar/on_home.svg")
      },{
        'title':"通讯录",
        'path':"friends",
        'icon':require("@/assets/images/tabbar/friends.svg"),
        'onicon':require("@/assets/images/tabbar/on_friends.svg")
      },{
        'title':"发现",
        'path':"find",
        'icon':require("@/assets/images/tabbar/find.svg"),
        'onicon':require("@/assets/images/tabbar/on_find.svg")
      },{
        'title':"我",
        'path':"me",
        'icon':require("@/assets/images/tabbar/me.svg"),
        'onicon':require("@/assets/images/tabbar/on_me.svg")
      }]
    }
  },
}
</script>

<style scoped>

</style>