<template>
  <div id="app">
    <header>
      <div class="avator">
        icon
      </div>
      <Tab :item=item />
    </header>
    <div class="container">
      <div class="side">

      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>

    
  </div>
</template>

<script>
import Tab from '@/components/Tab'
export default {
  name: 'App',
  data(){
    return {
      item: [
        'Latest',
        'JavaScript',
        'Css',
        'Node.js',
        'DataBase',
        'Other'
      ],
    }
  },
  components: {
    Tab,
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 30px;
  font-family: 'time new roman';
}
header {
  // background: #eee;
  display: flex;
  .avator {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    font-size: 20px;  
  } 
}
.container {
  display: flex;
}
.side {
  width: 230px;
  height: 800px;
  background: #eee;
}
.main {
  width: calc(100% - 230px);
  background: #ddd;
}
</style>
