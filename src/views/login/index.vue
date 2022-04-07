<template>
  <div class="page" style="height: 100%;">
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
                <input class="weui-input" type="number" pattern="[0-9]{11}" placeholder="请输入账号" v-model="this.account"/>
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

        <div class="weui-cells__tips" style="text-align: right;margin-top: 20px;margin-right: 10px"><router-link to="reg">注册账号</router-link></div>
      </div>
      <div class="weui-form__tips-area">
        <label id="Agree" for="AgreeCheckbox" class="weui-agree">
          <input id="AgreeCheckbox" type="checkbox" v-model="this.AgreeCheckbox" class="weui-agree__checkbox"/><span class="weui-agree__text">阅读并同意<a @click="agree">《相关条款》</a>
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
import { useRouter } from 'vue-router'
export default {
  name: "login",
  data () {
    return {
      AgreeCheckbox: false,
      account:"",
      password:"",
      router:useRouter()
    }
  },
  methods: {
    /**
     * 登录
     * @returns {boolean}
     */
    login () {
      if(this.account === "" || this.account === null || this.account === undefined){
        this.$weui.topTips('请输入账号')
        return false;
      }
      if(this.password === "" || this.password === null || this.password === undefined){
        this.$weui.topTips('请输入密码')
        return false;
      }
      if(this.AgreeCheckbox === false){
        this.$weui.topTips('请先同意相关条款')
        return false;
      }
      // const loginData = {
      //   account:this.account,
      //   password:this.password
      // }
      // this.$axios.post('/api/users/login',loginData).then(res =>{
      //   // res 结果用会返回token 我们可以用解构模式给他存储
      //   const { token } = res.data;
      //   // 存储ls
      //   localStorage.setItem('token',token);
      //   //存储之后页面进行主页跳转
      //   this.$weui.toast('登录成功',3000)
      //   this.$router.push('home')
      // })
      localStorage.setItem('token',"123456789");
      //存储之后页面进行主页跳转
      this.$weui.toast('登录成功',3000)
      this.$router.push('home')
      return true;
    },
    agree () {
      this.$weui.dialog({
        'title':"相关条款",
        'content':"本系统仅用于学习与研究<br>请勿用于违法行径",
        buttons: [{
          label: '知道了',
          type: 'primary',
        }],
      })
      return true;
    }
  }
}
</script>