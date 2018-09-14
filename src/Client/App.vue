<template>
  <div id="app" :class="{'forbid-scroll': dialogShow}" @click="handleclick">
    <header>
      <div class="title" v-if="headShow">
        <div v-if="!isLogin">
          <span @click="register">注册 |&nbsp;</span><span  @click="login"> 登录</span> silentport的博客 
        </div>
        <div user v-else>         
        <label for="pic">
              <span v-if="!avatorUrl">设置头像 </span>
              <img v-if="avatorUrl" :src="avatorUrl" alt="" title="点击可更换头像"> 
        </label>
        <input type="file" id="pic" name="avator"  @change="getPicture">
          {{username}}
        </div>
      </div>
      <Tab :item=item v-if="headShow" />
    </header>
    <div class="container">
     <div class="main">
       <router-view/>
     </div>
     <div class="side">
       <div class="intro">
          <div class="side-title">
              About Me
          </div>
          <div class="avator">
            <img :src="icon" alt="" >
          </div>   
          <p>
            前端攻城狮、坐标帝都
          </p>
       </div>
       <div class="search">
         <input type="text" placeholder="输入搜索词"><span>搜索</span>
       </div>
        <Tag/>
       
     </div>
    </div>
      <component :is="componentId" v-if="dialogShow"></component>
      <footer>
        联系我:&nbsp;&nbsp;&nbsp;&nbsp;
        邮箱： <a href="mailto:18201180289@163.com">18201180289@163.com</a> 
        &nbsp;&nbsp;&nbsp;&nbsp;
        github： <a href="https://github.com/silentport">https://github.com/silentport</a>
      </footer>  
  </div>
</template>

<script>
const icon = require("../static/icon.jpg");
import Tab from "@/components/Tab";
import Tag from "@/components/Tag";
import Login from "@/components/Login";
import Register from "@/components/Register";
require("es6-promise").polyfill();
require("isomorphic-fetch");
export default {
  name: "App",
  data() {
    return {
      item: ["Latest", "JavaScript", "Css", "Node.js", "Database", "Other"],
      icon: icon,
      headShow: false,
    };
  },
  components: {
    Tab,
    Tag,
    Login,
    Register
  },
  async created() {
    const res = await this.$request({
      path: "home",
      data: {},
      method: "GET"
    });
    if (res.hasUser) {
      this.$store.commit("login");
      this.$store.commit("getUsername", res.username);
      this.$store.commit("getAvator", res.avator);
      this.$store.commit("hideDialog", "isLogin");
    }
    this.headShow = true;
  },
  methods: {

    handleclick(e) {
      this.$store.commit("hideCatagory", e);
    },
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
    }
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import url(./components/css/side.css);
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  height: 100vh;
  overflow: scroll;
}
.forbid-scroll {
  overflow: hidden !important;
}
header {
  background: linear-gradient(#444 48%, #eee 52%);
  width: 100%;
  display: flex;
  height: 140px;
  .title {
    color: #dee;
    font-size: 30px;
    line-height: 70px;
    width: 500px;
    font-weight: bolder;
    label[for="pic"] {
      color: #689;
      display: inline;
      margin-right: 10px;
      cursor: pointer;
    }
    input[type="file"] {
      display: none;
    }

    & > div > span {
      font-size: 16px;
      color: #eee;
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
      font-size: 14px;
      img {
        height: 40px;
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
  // height: 980px;
  margin-bottom: 20px;
  width: 80%;
  margin: -40px auto 20px;
  .main {
    width: 75%;
    // height: 980px;
    text-align: left;
  }
  .side {
    width: calc(25% - 10px);
    margin-left: 10px;
    background: #eee;
    .intro {
      box-shadow: 4px 4px 3px #aaa;
      .avator {
        background: #fff;
        padding-bottom: 20px;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
      }
      p {
        color: #666;
        background: #fff;
        margin: 0px;
        padding-bottom: 10px;
      }
    }

    .search {
      background: #fff;
      margin-top: 10px;
      text-align: left;
      height: 50px;
      padding: 7px 5px;
      box-sizing: border-box;
      box-shadow: 4px 4px 3px #aaa;

      input {
        height: 35px;
        box-sizing: border-box;
        margin-left: 0px;
        vertical-align: top;
        outline: none;
        width: calc(100% - 60px);
        border: none;
        border-right: none;
        font-size: 16px;
      }
      span {
        display: inline-block;
        width: 60px;
        height: 35px;
        background: #666;
        text-align: center;
        line-height: 35px;
        color: #eee;
        letter-spacing: 5px;
        font-weight: bolder;
        cursor: pointer;
      }
      span:hover {
        background: #444;
      }
    }
  }
}

footer {
  height: 80px;
  background: #444;
  padding-top: 30px;
  color: #fff;
  box-sizing: border-box;
  width: 100%;

  img {
    width: 25px;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    font-size: 16px;
  }
}

@media screen and (max-width: 1053px) {
  header {
    background: linear-gradient(#444 48%, #444 52%);
    margin-bottom: 70px;
  }
}
@media screen and (max-width: 697px) {
  header {
    background: linear-gradient(#444 48%, #eee 52%);
    margin-bottom: 0px;
    .title {
      font-size: 20px;
    }
  }
  .container{
    margin-top: -70px;
    width:99%;
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
