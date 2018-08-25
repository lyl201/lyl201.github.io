<template>
  <Dialog>
    <h2>注册</h2>
    <form @submit.prevent="submit">
      <ul>
        <li> 
          <label for="name">
              用户名
          </label>
          <input type="text" name="username" id="name" v-model="userInfo.username">
          <div class="tip">{{helpTxt1}}</div>
        </li>
        <li>
          <label for="password">
              密&nbsp;&nbsp;&nbsp;&nbsp;码
          </label>
          <input type="text" name="password" id="password" v-model="userInfo.password">
          <div class="tip">{{helpTxt2}}</div>
        </li>
        <li pic>
          <label for="pic">
              头像上传
          </label>
          <input type="file" name="avator" id="pic" @change="getFiles">
          <img :src="userInfo.avator" v-show="userInfo.avator" alt="">
        </li>
        <li>
          <input type="submit" value="确定">
          <input type="button" value="取消" @click="cancelRegister">
        </li>
      </ul>
    </form>
  </Dialog>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  components: {
    Dialog
  },
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
        avator: ""
      },
      helpTxt1: "",
      helpTxt2: ""
    };
  },
  methods: {
    submit(e) {

      this.checkData() &&
      (async () => {
        try {
          const res = await this.$request({
            path: "register",
            data: this.userInfo,
            method: "POST"
          });
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      })();
    },
    cancelRegister(e) {

      this.userInfo.password = "";
      this.userInfo.username = "";
    },
    getFiles(e) {

      (async () => {
        try {
          const res = await this.$request({
            path: "upload",
            data: {
              avator: e.target.files[0]
            },
            method: "POST"
          });
          this.userInfo.avator = res.avator;
        } catch (err) {
          console.log(err);
        }
      })();
    },
    checkData() {
      if (!/^[a-zA-z0-9_]{3,8}$/.test(this.userInfo.username)) {
        this.helpTxt1 = "用户名为3-8位，只能包含下划线、字母、数字";
      } else {
        this.helpTxt1 = "";
      }

      if (!/^[a-zA-z0-9_@.-]{6,14}$/.test(this.userInfo.password)) {
        this.helpTxt2 =
          "密码为6-14位，只能包含下划线、字母、数字、减号、@、.、";
      } else {
        this.helpTxt2 = "";
      }

      if (this.helpTxt2 === "" && this.helpTxt1 === "") {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  ul {
    li {
      height: 50px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      font-size: 20px;
      position: relative;
      label {
        display: inline-flex;
        margin-right: 20px;
        align-items: flex-end;
        font-family: serif;
        vertical-align: bottom;
      }
      label[for="pic"] {
        display: inline-flex;
        background: #009a61;
        margin-top: 12px;
        height: 30px;
        box-sizing: border-box;
        font-size: 10px;
        padding: 10px;
        align-items: center;
        cursor: pointer;
        color: #fff;
      }
      input[type="text"] {
        width: 200px;
        outline: none;
        border: none;
        padding: 0px;
        border-bottom: 1px solid #976;
      }
      .tip {
        position: absolute;
        top: 52px;
        width: 200px;
        font-size: 14px;
        color: #888;
        left: calc(50% - 60px);
      }
      input[type="file"] {
        display: none;
      }
    }
    li[pic] {
      margin-top: 85px;
      img {
        max-width: 100px;
        max-height: 100px;
        height: auto;
        border-radius: 50%;
      }
    }
    li:last-child {
      margin-top: 50px;
      input[type="button"],
      input[type="submit"] {
        display: inline-block;
        appearance: none;
        -webkit-apperaence: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 20px;
        letter-spacing: 10px;
        padding: 0px;
        padding-left: 10px;
        width: 100px;
        height: 40px;
        margin-right: 30px;
        margin-left: 30px;
        outline: none;
        border: none;
        color: #fff;
        cursor: pointer;
        background: #009a61;
      }
      input[type="button"]:hover,
      input[type="submit"]:hover {
        background: #006741;
      }
    }
  }
}
</style>