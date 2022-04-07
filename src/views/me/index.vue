<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <div class="me-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-cell_access weui-media-box_appmsg" style="padding: 2rem 1.5rem;">
            <div aria-hidden="true" class="weui-media-box__hd">
              <img class="weui-media-box__thumb" src="@/assets/avatar/default_nor_avatar.png" alt="">
            </div>
            <div aria-hidden="true" class="weui-media-box__bd">
              <strong class="weui-media-box__title">Ricky</strong>
              <p class="weui-media-box__desc">账号:ocink666</p>
            </div>
            <div class="weui-cell__ft"><img src="@/assets/images/icon/qrcode.svg" width="16rem" style="position: absolute;top: -0.5rem;right: 1.5rem;" alt=""></div>
          </div>
        </div>
      </div>
      <div class="weui-panel" >
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" class="weui-cell__hd" style="display: flex;flex-direction: row;align-items: center;"><img src="@/assets/images/icon/pay.svg" style="width: 1.6rem;" alt=""></div>
                <div aria-hidden="true" class="weui-cell__bd weui-cell_primary" style="margin-left: 1rem;">
                  <span>钱包</span>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-panel" >
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" class="weui-cell__hd" style="display: flex;flex-direction: row;align-items: center;"><img src="@/assets/images/icon/collect.svg" style="width: 1.6rem;" alt=""></div>
                <div aria-hidden="true" class="weui-cell__bd weui-cell_primary" style="margin-left: 1rem;">
                  <span>收藏</span>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" class="weui-cell__hd" style="display: flex;flex-direction: row;align-items: center;"><img src="@/assets/images/icon/friends.svg" style="width: 1.6rem;" alt=""></div>
                <div aria-hidden="true" class="weui-cell__bd weui-cell_primary" style="margin-left: 1rem;">
                  <span>朋友圈</span>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-panel" >
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" class="weui-cell__hd" style="display: flex;flex-direction: row;align-items: center;"><img src="@/assets/images/icon/set.svg" style="width: 1.6rem;" alt=""></div>
                <div aria-hidden="true" class="weui-cell__bd weui-cell_primary" style="margin-left: 1rem;">
                  <span>设置</span>
                </div>
                <div class="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Tabbar pathActive="me"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
export default {
  name: "me",
  components:{
    Tabbar
  }
}
</script>

<style scoped>

</style>