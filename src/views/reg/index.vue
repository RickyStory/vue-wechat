<template>
  <div class="page">
    <div class="close" @click="close"></div>
    <div class="weui-form">
      <div class="weui-form__text-area">
        <h2 class="weui-form__title">用户登录</h2>
      </div>
      <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">
          <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">账号</label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" type="number" pattern="[0-9]{11}" placeholder="请输入手机号" v-model="this.number"/>
              </div>

            </div>
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" type="password" placeholder="请输入密码" v-model="this.password"/>
              </div>
            </div>
          </div>
        </div>

        <div class="weui-cells__tips" style="text-align: right;margin-top: 20px;margin-right: 10px"><router-link to="/login">登录账号</router-link></div>
      </div>
      <div class="weui-form__tips-area">
        <label id="Agree" for="AgreeCheckbox" class="weui-agree">
          <input id="AgreeCheckbox" type="checkbox" v-model="this.AgreeCheckbox" class="weui-agree__checkbox"/><span class="weui-agree__text">阅读并同意<a href="javascript:">《相关条款》</a>
        </span>
        </label>
      </div>
      <div class="weui-form__opr-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" @click="login">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
import weui from 'weui.js'
export default {
  data () {
    return {
      AgreeCheckbox: false,
      number:"",
      password:""
    }
  },
  methods: {
    /**
     * 登录
     * @returns {boolean}
     */
    login () {
      if(this.number === "" || this.number === null || this.number === undefined){
        weui.dialog({
          'title':"登录失败",
          'content':"账号不能为空",
          buttons: [{
            label: '知道了',
            type: 'primary',
          }],
        })
        return false;
      }
      if(this.password === "" || this.password === null || this.password === undefined){
        weui.dialog({
          'title':"登录失败",
          'content':"密码不能为空",
          buttons: [{
            label: '知道了',
            type: 'primary',
          }],
        })
        return false;
      }
      if(this.AgreeCheckbox === false){
        weui.dialog({
          'title':"登录失败",
          'content':"请先同意相关条款",
          buttons: [{
            label: '知道了',
            type: 'primary',
          }],
        })
        return false;
      }
      weui.toast('登录成功',3000)
      return true;
    }
  }
}
</script>