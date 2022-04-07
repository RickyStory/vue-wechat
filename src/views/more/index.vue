<template>
  <div className="weui-tab">
    <div className="weui-tab__panel">
      <Header></Header>
      <div className="me-panel">
        <div className="weui-panel__bd">
          <div className="weui-media-box weui-cell_access weui-media-box_appmsg" style="padding: 2rem 1.5rem;">
            <div aria-hidden="true" className="weui-media-box__hd">
              <img className="weui-media-box__thumb" src="@/assets/avatar/default_nor_avatar.png" alt="">
            </div>
            <div aria-hidden="true" className="weui-media-box__bd">
              <strong className="weui-media-box__title">卷心菜</strong>
              <p className="weui-media-box__desc">账号: ocink666</p>
              <p className="weui-media-box__desc">地区: 圣诞岛</p>
            </div>
          </div>
        </div>
      </div>
      <div className="weui-panel">
        <div className="weui-panel__bd">
          <div className="weui-media-box weui-media-box_small-appmsg">
            <div className="weui-cells">
              <a className="weui-cell weui-cell_active weui-cell_access weui-cell_example"
                 style="padding: 0.8rem 1rem;">
                <div aria-hidden="true" className="weui-cell__hd"
                     style="display: flex;flex-direction: row;align-items: center;">
                  <span>朋友圈</span>
                </div>
                <div aria-hidden="true" className="weui-cell__bd weui-cell_primary" style="margin-left: 2rem;">
                  <ul class="weui-uploader__files">
                    <li class="images_img" role="img" tabindex="0" style="background-image: url(https://q4.qlogo.cn/headimg_dl?dst_uin=167076540&spec=100);"></li>
                    <li class="images_img" role="img" tabindex="0" style="background-image: url(https://q4.qlogo.cn/headimg_dl?dst_uin=167076540&spec=100);"></li>
                    <li class="images_img" role="img" tabindex="0" style="background-image: url(https://q4.qlogo.cn/headimg_dl?dst_uin=167076540&spec=100);"></li>
                  </ul>
                </div>
                <div className="weui-cell__ft"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <router-link to="chat" role="button" class="weui-btn_cell weui-btn_cell-primary" style="margin-top: 10px;font-weight: bold"><img alt="icon" class="weui-btn_cell__icon" src="@/assets/images/icon/more_msg.svg"> 发消息 </router-link>
      <a href="javascript:" role="button" class="weui-btn_cell weui-btn_cell-warn top-border" style="margin-top: 0;font-weight: bold">
        <img alt="icon" class="weui-btn_cell__icon" src="@/assets/images/icon/more_delete.svg">
        删除好友
      </a>
    </div>
  </div>
</template>

<script>
import Header from '@/components/more/header'
export default {
  name: "more",
  components: {
    Header
  }
}
</script>

<style scoped>

</style>