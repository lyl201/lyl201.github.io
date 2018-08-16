<template>
    <div class="tab-container">
        <div @click="switchTab(index)" :class="{'high-light': curIndex == index}" v-for="(val, index) in item" :key="index">{{val}}</div>
    </div>  
</template>
<script>
export default {
    data() {
        return {
            curIndex: 0,
        }
    },
    props: {
        item: Array,
    },
    methods: {
        switchTab (index) {
            this.curIndex = index;
        }
    }

};
</script>
<style lang="scss" scoped>
.tab-container {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 580px);
  margin-left: 100px;
  justify-content: space-around;
  font-family: serif;
  
  div {
    width: 100px;
    font-size: 30px;
    font-weight: 500;
    height: 70px;
    color: #ddd;
    line-height: 60px;
    position: relative;
    cursor: pointer;
  }
  div:not(.high-light):hover {
      transition: background 200ms;
      background: rgba(200,200,200,0.2);
  }
  .high-light {
      color: #fff;
      height: 68px;
      font-weight:bolder;
      font-size: 32px;
      background: rgba(0,0,0,0.4);

  }
 
}
</style>
