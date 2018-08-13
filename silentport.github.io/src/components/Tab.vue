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
  margin-left: 140px;
  justify-content: space-between;
  
  div {
    width: 200px;
    font-size: 30px;
    font-weight: 500;
    height: 60px;
    color: #888;
    line-height: 60px;
    position: relative;
    cursor: pointer;
  }
  .high-light {
      color: #000;
      font-size: 35px;
  }
  .high-light:after {
    display: block;
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    border-radius: 3px;
    background: seagreen;
  }
}
</style>
