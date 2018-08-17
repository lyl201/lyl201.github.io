<template>
<div>
    <div class="article" v-for="n in 4" :key="n">
         <img src="http://www.yangqq.com/skin/850/images/text01.jpg" alt="">
         <div class="desc">
           <div class="title">
             js新特性
           </div>
           <div class="text">
             市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工市场高富帅噶大会发化工
           </div>
           <div class="underline">
             <div class="tag">JavaScript</div>
             <div class="clock">2015-09-30</div>
             <div class="comment">0</div>
             <div class="read">8</div>
             <div class="like">0</div>
             <div @click="openText" class="all">查看全文</div>
           </div>
         </div>
       </div>
</div>
</template>
<script>
export default {
  methods: {
    openText() {
      console.log("查看全文");
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  background: #fff;
  height: 220px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 4px 4px 3px #aaa;
  img {
    height: 200px;
  }

  .desc {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 30px;
      font-family: serif;
      height: 50px;
      line-height: 50px;
    }
    .text {
      // height: 130px;
      font-size: 16px;
      color: #444;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    .underline {
      display: flex;
      justify-content: space-between;
      color: #888;
      font-size: 14px;
      div {
        padding-left: 20px;
        background-repeat: no-repeat;
        background-position: 0px 3px;
      }
      .clock {
        background-image: url(../../static/clock.png);
      }
      .read {
        background-image: url(../../static/read.png);
      }
      .like {
        background-image: url(../../static/like.jpg);
      }
      .tag {
        background-image: url(../../static/tag.png);
      }
      .comment {
        background-image: url(../../static/comment.png);
      }
      .all {
        color: #096;
      }
    }
  }
}
@media screen and (max-width: 1060px) {
  img {
    display: none;
  }
  .clock,
  .read,
  .comment,
  .tag,
  .like {
    display: none;
  }

  .all {
    width: 100%;
    margin-left: -20px;
  }
  .article {
    height: 170px;
  }
}
</style>
