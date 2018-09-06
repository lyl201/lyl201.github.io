<template>
    <div class="tab-container">
        <div @click="switchTab(index)" :class="{'high-light': curIndex == index}" v-for="(val, index) in item" :key="index">{{val}}</div>
        <img :src="url" alt="" class="more" @click="openList">
        <ul v-show="catagoryShow">
            <li>Latest</li>
            <li>JavaScript</li>
            <li>Css</li>
            <li>Node.js</li>
            <li>Database</li>
            <li>Other</li>
        </ul>
    </div>  
</template>
<script>
const img = require("../../static/more.png");
export default {
  data() {
    return {
      curIndex: 0,
      url: img,
    };
  },
  props: {
    item: Array
  },
  methods: {
    switchTab(index) {
      this.curIndex = index;
    },
    openList() {
        this.$store.commit("switchStatus")
    }
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
  padding-right: 20px;
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
  @media screen and (max-width: 697px) {
    .more {
      display: block;
      cursor: pointer;
    }
    ul {
        display: block;
        background: #444;
        color: #eee;
        padding: 10px;
        font-size: 25px;
        text-align: left;      
        position: absolute;
        box-shadow: 5px 5px 5px #777;
        box-sizing: border-box;
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
    color: #ddd;
    line-height: 60px;
    position: relative;
    cursor: pointer;
  }

  div:not(.high-light):hover {
    transition: background 200ms;
    background: rgba(200, 200, 200, 0.2);
  }
  .high-light {
    color: #489;
    height: 68px;
    font-size: 32px;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>
