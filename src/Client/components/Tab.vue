<template>
    <div class="tab-container">
        <div @click="switchTab(index, item)" :class="{'high-light': curIndex == index}" v-for="(item, index) in list" :key="index">{{item.name}}</div>
        <img :src="url" alt="" class="more" @click="openList">
        <transition name="listFade">
          <ul v-show="catagoryShow">
              <li @click="switchTab(index, item)" v-for="(item, index) in list" :key="index">{{item.name}}</li>
          </ul>
         </transition>
    </div>  
</template>
<script>
import { mapActions } from 'vuex'
const img = require("../../static/more.png");
export default {
  data() {
    return {
      curIndex: 0,
      url: img,
      list: [{name: 'Latest'}]
    };
  },
  async created() {
    try {
      const res = await this.$request({
        path: "Catagory",
        data: {},
        method: "GET"
      });
      this.list = this.list.concat(res.data);
    } catch (error) {}
  },
  methods: {
    async switchTab(index, item) {
      this.curIndex = index;
      this.$store.commit("changeTag", item.name);
      app.scrollTo(0,0);
      this.$nextTick(async () => {
         this.$router.replace({path: '/'})
         this.$store.commit("switchLoading");
         await this.getArticle({vm: this, page: this.$store.state.curPage})
        this.$store.commit("switchLoading");
     })  
    },
    openList() {
      this.$store.commit("switchStatus");
    },
    ...mapActions([
      'getArticle'
    ]),
  },
  computed: {
    catagoryShow() {
      return this.$store.state.catagoryShow;
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 200px;
  box-sizing: border-box;
  width: calc(100% - 310px);
  margin-left: 0px;
  position: relative;
  .more {
    display: none;
    width: 30px;
    margin-top: 30px;
    height: 30px * (140/521);
  }
  ul {
    display: none;
  }

.listFade-enter-active,
.listFade-leave-active {
  transition: height 0.08s;
}
.listFade-enter-to {
  height: 200px;
}
.listFade-leave {
  height: 200px;
}
.listFade-enter, .listFade-leave-to {
  height: 0px;
}
  @media screen and (max-width: 1000px) {
 
    .more {
      display: block;
      cursor: pointer;
      transform: scale(0.8);
    }
    
    ul {
      display: block;
      background: #eee;
      color: #666;
      padding: 10px;
      font-size: 25px;
      text-align: left;
      margin-top: 10px;
      position: absolute;
      box-sizing: border-box;
      border-radius: 10px;
      overflow: hidden;
      // height: 200px;
      top: 60px;
      li {
        list-style: none;
        cursor: pointer;
        width: 120px;
        margin-bottom: 10px;
      }
      li:hover {
        font-weight: bolder;
        color: #489;
      }
    }
    div {
      display: none;
    }
    

  }
  div {
    width: auto;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 32px;
    font-weight: 500;
    height: 70px;
    color: #969696;
    line-height: 60px;
    position: relative;
    cursor: pointer;
  }

  div:not(.high-light):hover {
    transition: background 200ms;
    background: rgba(200, 200, 200, 0.2);
  }
  .high-light {
    height: 70px;
    font-size: 32px;
    border-bottom: 3px solid #ea6f5a;
  }
}
</style>
