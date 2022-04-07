<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <Header></Header>
      <div class="weui-search-bar">
        <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search" class="weui-search-bar__input" v-model="s" maxlength="12" placeholder="账号搜索" />
          </div>
        </form>
      </div>
      <div class="weui-panel" style="margin-top: 0;">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <router-link to="new_friend" class="weui-cell weui-cell_active weui-cell_access weui-cell_example" style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" class="weui-cell__hd" style="display: flex;flex-direction: row;align-items: center;"><img src="@/assets/images/icon/friend.svg" style="width: 1.6rem;" alt=""></div>
                <div aria-hidden="true" class="weui-cell__bd weui-cell_primary" style="margin-left: 1rem;">
                  <span>搜索: <span style="color:var(--weui-TEXTGREEN);">{{s}}</span></span>
                </div>
                <div class="weui-cell__ft"></div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/add_friend/header'
export default {
  name: "add_friend",
  components:{
    Header
  },
  data () {
    return {
      s:""
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>

</style>