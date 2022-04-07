<template>
  <div class="chat-tabbar">
    <a href=""><img src="@/assets/images/icon/voice.svg" alt=""></a>
    <input type="text" placeholder="" value="">
    <a href=""><img src="@/assets/images/icon/emoji.svg" alt=""></a>
    <a href=""><img src="@/assets/images/icon/add.svg" alt=""></a>
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
        'title':"信息",
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