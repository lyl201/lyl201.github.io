<template>
  <div id="app">
    <header>
      <div class="title">
        silentport的博客
      </div>
      <Tab :item=item />
    </header>
    <div class="container">
     <div class="main">
       <div class="article" v-for="n in 4" :key="n">
         <img src="http://www.yangqq.com/skin/850/images/text01.jpg" alt="">
         <div class="desc">
           <div class="title">
             js新特性
           </div>
           <div class="text">
             市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工
             市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工
             市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工
             市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工
           </div>
           <div class="underline">
             <div>2015-09-30</div>
             <div>赞数：0</div>
             <div>评论：0</div>
             <div>查看全文</div>
           </div>

         </div>
       </div>
        <div class="partpage">
           <div>99</div>
           <div style="width: 100px">上一页</div>
           <div>1</div>
           <div>2</div>
           <div>3</div>
           <div>4</div>
           <div>5</div>
           <div>6</div>
           <div style="width: 100px">下一页</div>
         </div>
     </div>
     <div class="side">
       <div class="intro">
          <div class="side-title">
              About Me
          </div>
          <div class="avator">
            <img :src="url1" alt="" >
          </div>   
          <p>
            前端攻城狮、坐标帝都
          </p>
       </div>
       <div class="search">
         <input type="text" placeholder="输入搜索词"><span>搜索</span>
       </div>

       <div class="msg">
        <div class="side-title">
          标签
        </div>
        <ul>
          <li>最近一周-[2]</li>
          <li>JavaScript-[6]</li>
          <li>Css-[56]</li>
          <li>Node.js-[7]</li>
          <li>Database-[9]</li>
          <li>other-[89]</li>
          <li>全部-[78]</li>
        </ul>
       </div>
     </div>

    </div>
      <footer>
        联系我: 
        邮箱： <a href="mailto://18201180289@163.com">18201180289@163.com</a>    
        github： <a href="https://github.com/silentport">https://github.com/silentport</a>
      </footer>  
  </div>
</template>

<script>
import Tab from "@/components/Tab";
const img1 = require("../static/icon.jpg");
export default {
  name: "App",
  data() {
    return {
      item: ["Latest", "JavaScript", "Css", "Node.js", "Database", "Other"],
      url1: img1,
    };
  },
  components: {
    Tab
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "time new roman";
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
    margin-left: 10px;
    width: 300px;
    font-weight: bolder;
    font-family: serif;
    
  }
}
.container {
  display: flex;
  // background: #fff;
  height: 980px;
  margin-bottom: 20px;
  width: 80%;
  margin: -40px auto 20px;
  .main {
    // border: 1px solid #000;
    width: 75%;
    height: 980px;
    text-align: left;
    .partpage {
      display: flex;
      width: 60%;
      margin: 30px;
      justify-content: space-between;
      div {
        border: 1px solid #666;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        color: #444;
      }
    }
    .article {
      background: #fff;
      height: 220px;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      margin-bottom: 10px;
      cursor: pointer;
      box-shadow: 4px 4px 3px #aaa;
      img{
        height: 200px;
      }
      .desc {
        margin-left: 20px;
        .title {
          font-size: 30px;
          font-family: serif;
          height: 50px;
          line-height: 50px;
        }
        .text {
          height: 130px;
          font-size: 16px;
          color: #444;
        }
        .underline {
          display: flex;
          justify-content: space-around;
          color:#888;
        }
      }
    }
  }
  .side {
    width: calc(25% - 10px);
    margin-left: 10px;
    background: #eee;
    font-family: serif;
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
        border: 1px dashed #000;
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
    }
    .msg {
      background: #fff;
      margin-top: 10px;
      text-align: left;
      height: 474px;
      padding: 7px 5px;
      box-sizing: border-box;
      box-shadow: 4px 4px 3px #aaa;

      ul {
        li{
          cursor: pointer;
          height: 40px;
          font-size: 16px;
          color: #444;
        }
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
  // position: fixed;
  // bottom: 0px;
  width: 100%;
  font-family: serif;
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
.side-title {
  height: 80px;
  position: relative;
  box-sizing: border-box;
  text-align: center;
  padding-top: 20px;
  font-weight: bolder;
  font-size: 30px;
  color: #666;
  background: #fff;
}
.side-title::before {
  position: absolute;
  content: "";
  display: inline;
  border-radius: 2px;
  width: 40px;
  height: 4px;
  top: 39px;
  left: 20px;
  background: #666;
}
.side-title::after {
  position: absolute;
  content: "";
  display: inline;
  border-radius: 2px;
  width: 40px;
  height: 4px;
  top: 39px;
  right: 20px;
  background: #666;
}
</style>
