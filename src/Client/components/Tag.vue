<template>
    <div class="msg">
        <div class="side-title">
          标签
        </div>
        <ul>
          <li v-for="(item, index) in catagoryList" :key="index">
            {{item.name}} - {{ '[' + item.count + ']'}}
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  computed:{
    catagoryList(){
      return this.$store.state.catagoryList.slice(1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import url(./css/side.css);
.msg {
   background: #f9f9f9;
   border-radius: 10px;
  margin-top: 10px;
  text-align: left;
  height: 400px;
  padding: 7px 5px;
  box-sizing: border-box;
  // box-shadow: 4px 4px 3px #aaa;

  ul {
    padding-left: 40px;
    li {
      cursor: pointer;
      list-style: disc;
      height: 40px;
      font-size: 16px;
      color: #444;
    }
    li:hover {
      color: #096;
    }
  }
}

</style>
