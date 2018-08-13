<template>
  <div id="app">
    <header>
      <div class="avator">
         <img src="" alt="" class="avator">
      </div>
      <div class="tab">
        <div>Latest</div>
        <div>JavaScript</div>
        <div>CSS</div>
        <div>Node.js</div>
        <div>Database</div>
        <div>Experiences</div>
        <div>Others</div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
header {
  display: flex;
}
.tab {
  margin-left: 30px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  padding: 0 0 20px 0px
}
.avator {
  background: #000;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  vertical-align: top;
}
header > div {

}
</style>
