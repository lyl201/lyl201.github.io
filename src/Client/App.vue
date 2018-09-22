<template>
  <div id="app">
    <header>
      <div class="title" v-if="headShow">
        <div v-if="!isLogin">
          <span @click="register">注册 - &nbsp;</span><span @click="login"> 登录</span>
          <span class="name">liyonglong的技术博客</span>
        </div>
        <div user v-else>
          <label for="pic">
                <span v-if="!avatorUrl">设置头像 </span>
                <img v-if="avatorUrl" :src="avatorUrl" alt="" title="点击可更换头像"> 
          </label>
          <input type="file" id="pic" name="avator" @change="getPicture"> {{username}}
        </div>
      </div>
      <Tab v-if="headShow" />
    </header>
    <div class="container">
      <div class="main">
        <div class="mobile-tag">
          <MobileTag/>
        </div>
        <router-view/>
      </div>
      <div class="side">
        <div class="intro">
          <div class="side-title">
            About Me
          </div>
          <div class="avator" @click="goToMange" :style="{cursor: admin ? 'pointer' : '' }">
            <img :src="icon" alt="">
          </div>
          <ul class="right">
            <li>职 业：前端攻城狮、坐标帝都</li>
            <li>邮 箱：<a href="mailto:18201180289@163.com">18201180289@163.com</a></li>
            <li>github: <a href="https://github.com/silentport">https://github.com/silentport</a></li>
          </ul>
        </div>
        <div class="search">
          <input v-model="keyWord" type="text" placeholder="输入搜索词" @keyup.enter="goSearch">
          <div @click="goSearch">
            搜索
          </div>
        </div>
        <Tag/>
      </div>
    </div>
    <component :is="componentId" v-if="dialogShow"></component>
    <footer>
    </footer>
  </div>
</template>

<script>
  const icon = require("../static/icon.jpg");
  import {host} from "../config";
  import {
    mapActions
  } from "vuex";
  import Tab from "@/components/Tab";
  import Tag from "@/components/Tag";
  import Login from "@/components/Login";
  import MobileTag from "@/components/MobileTag";
  import Register from "@/components/Register";
  require("es6-promise").polyfill();
  require("isomorphic-fetch");
  export default {
    name: "App",
    components: {
      Tab,
      Tag,
      Login,
      Register,
      MobileTag
    },
    data() {
      return {
        icon: icon,
        headShow: false,
        beforeScrollTop: 0,
        keyWord: ""
      };
    },
    computed: {
      dialogShow() {
        return this.$store.state.dialogShow;
      },
      isLogin() {
        return this.$store.state.isLogin;
      },
      componentId() {
        return this.$store.state.componentId;
      },
      username() {
        return this.$store.state.username;
      },
      avatorUrl() {
        return this.$store.state.avator;
      },
      isLoading() {
        return this.$store.state.isLoading;
      },
      admin() {
        return this.$store.state.admin;
      }
    },
    async created() {
      const res = await this.$request({
        path: "home",
        data: {},
        method: "GET"
      });
      if (res.hasUser) {
        if (res.admin) {
          this.$store.commit("getAdmin");
        }
        this.$store.commit("login");
        this.$store.commit("getUsername", res.username);
        this.$store.commit("getAvator", res.avator);
        this.$store.commit("hideDialog", "isLogin");
      }
      this.headShow = true;
    },
    async mounted() {
      this.$store.commit("switchLoading");
      this.getCatagory({
        vm: this
      });
      await this.getArticle({
        vm: this,
        page: this.$store.state.curPage,
        tag: this.$store.state.tag
      });
      this.$store.commit("switchLoading");
  
      this.beforeScrollTop = app.scrollTop;
      app.addEventListener(
        "scroll",
        this.debounce(this.scrollHandler, 300, 1000)
      );
    },
    methods: {
  
      register() {
        this.$store.commit("openDialog");
        this.$store.commit("componentName", "Register");
      },
      login() {
        this.$store.commit("openDialog");
        this.$store.commit("componentName", "Login");
      },
      async getPicture(e) {
        try {
          const res = await this.$request({
            path: "upload/avator",
            data: {
              avator: e.target.files[0],
              username: this.$store.state.username
            },
            method: "POST"
          });
          this.avator = res.avator;
          this.$store.commit("getAvator", res.avator);
        } catch (err) {
          console.log(err);
        }
      },
      debounce(fn, wait, maxTimelong) {
        var timeout = null,
          startTime = Date.parse(new Date());
  
        return function() {
          if (timeout !== null) clearTimeout(timeout);
          var curTime = Date.parse(new Date());
          if (curTime - startTime >= maxTimelong) {
            fn();
            startTime = curTime;
          } else {
            timeout = setTimeout(fn, wait);
          }
        };
      },
      async scrollHandler() {
        if (this.$route.path.includes("detail")) {
          return;
        }
        if (this.$store.state.isLoading && this.$store.state.noArticle) {
          console.log(77);
          return;
        }
  
        function isReachedBottom() {
          // 手机浏览器会有1px误差
          return app.scrollHeight - app.clientHeight - app.scrollTop < 3;
        }
        let afterScrollTop = app.scrollTop;
        // 向上滚
        if (afterScrollTop - this.beforeScrollTop < 0) {
          this.beforeScrollTop = afterScrollTop;
          console.log("up");
          return;
        }
        if (isReachedBottom()) {
          this.getNextPage();
        }
        this.beforeScrollTop = afterScrollTop;
      },
      async getNextPage() {
        this.$store.commit("switchLoading");
        this.$store.commit("nextPage");
        await this.getArticle({
          vm: this,
          page: this.$store.state.curPage,
          tag: this.$store.state.tag
        });
        this.$store.commit("switchLoading");
      },
      async goSearch() {
        if (!this.keyWord) {
          return;
        }
        await this.getArticle({
          vm: this,
          page: this.$store.state.curPage,
          tag: this.$store.state.tag,
          keyWord: this.keyWord,
        });
  
      },
      goToMange () {
        if (this.admin) {
           location.href = `${host}/admin`;
        }
      },
      ...mapActions(["getArticle", "getCatagory"])
    },
  };
</script>

<style lang="scss" scoped>
  @import url(./components/css/side.css);
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    position: relative;
    background: #fff;
    height: 100vh;
    overflow: scroll;
  }
  
  .loading {
    position: absolute;
    left: 40%;
  }
  
  header {
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    display: flex;
    height: 70px;
    position: fixed;
    z-index: 999;
    top: 0px;
    .title {
      color: #dee;
      font-size: 30px;
      line-height: 70px;
      width: 500px;
      font-weight: bolder;
      .name {
        width: 200px;
        font-size: 30px;
        display: block;
        margin-left: 40px;
        content: "liyonglong的技术博客";
        font-weight: 700;
        color: #ea6f20;
      }
      label[for="pic"] {
        color: #689;
        display: inline;
        margin-right: 10px;
        cursor: pointer;
      }
      input[type="file"] {
        display: none;
      }
      &>div {
        display: flex;
        padding-left: 30px;
      }
      &>div>span {
        font-size: 16px;
        color: #969696;
        cursor: pointer;
        vertical-align: middle;
        display: inline-block;
      }
      div[user] {
        box-sizing: border-box;
        height: inherit;
        text-align: left;
        padding-left: 20px;
        font-weight: normal;
        font-size: 18px;
        color: #666;
        img {
          height: 40px;
          min-width: 40px;
          min-height: 4opx;
          background: #eee;
          width: 40px;
          vertical-align: middle;
          margin-right: 10px;
          border-radius: 50%;
        }
      }
    }
  }
  
  .container {
    display: flex;
    margin-bottom: 20px;
    width: 60%;
    margin: 90px auto 20px;
    .mobile-tag {
      display: none;
    }
    .main {
      width: 70%;
      min-height: 50px;
      background: #fff;
      text-align: left;
    }
    .side {
      width: calc(30% - 10px);
      margin-left: 10px;
      .intro {
        // box-shadow: 4px 4px 3px #aaa;
        border-radius: 10px;
        padding-bottom: 20px;
        background: rgb(249, 249, 249);
        .avator {
          padding-bottom: 20px;
          img {
            width: 120px;
            min-height: 120px;
            min-width: 120px;
            background: rgb(249, 249, 249);
            height: 120px;
            border-radius: 50%;
          }
        }
        ul {
          text-align: left;
          color: #666;
          & > li {
            line-height: 30px;
            width: 70%;
            word-break: break-all;
            margin: 0 auto;
          }
          & > li > a {
            font-size: 14px;
            text-decoration: none;
            word-break: break-all;
            color: #666;
          }
        }
      }
      .search {
        background: rgb(249, 249, 249);
        border-radius: 10px;
        margin-top: 10px;
        text-align: left;
        height: 50px;
        padding: 7px 15px;
        box-sizing: border-box;
        display: flex;
        input {
          height: 35px;
          background: rgb(249, 249, 249);
          box-sizing: border-box;
          margin-left: 0px;
          vertical-align: top;
          outline: none;
          width: calc(100% - 60px);
          border: none;
          border-right: none;
          font-size: 16px;
        }
        div {
          display: inline-block;
          border-radius: 10px;
          width: 60px;
          height: 35px;
          background: #ea6f5a;
          text-align: center;
          line-height: 35px;
          color: #eee;
          letter-spacing: 5px;
          font-weight: 700;
          cursor: pointer;
        }
        div:hover {
          background: #ea6f20;
        }
      }
    }
  }
  
  footer {}
  
  @media screen and (max-width: 1000px) {
    header {
      height: 47px;
      box-shadow: 0 1px 1px #f0f0f0;
      .title {
        display: none;
      }
    }
    header::before {
      width: 100px;
      height: 47px;
      font-size: 20px;
      display: block;
      margin-left: 20px;
      line-height: 47px;
      content: "liyonglong的技术博客";
      font-weight: 700;
      color: #ea6f20;
    }
    .tab-container {
      padding-right: 40px !important;
    }
    .container {
      width: 99%;
    }
    .mobile-tag {
      display: block !important;
      width: 100%;
      margin-bottom: 10px;
      height: 110px;
      box-shadow: 0 1px 1px #f0f0f0;
    }
    .main {
      width: 100%;
    }
    .side {
      display: none;
    }
    .container .main {
      width: 100%;
    }
  }
</style>
