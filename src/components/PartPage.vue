<template>
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
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
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
</style>
