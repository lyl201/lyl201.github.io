<template>
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
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import url(./css/side.css);
.msg {
  background: #fff;
  margin-top: 10px;
  text-align: left;
  height: 474px;
  padding: 7px 5px;
  box-sizing: border-box;
  box-shadow: 4px 4px 3px #aaa;

  ul {
    li {
      cursor: pointer;
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
