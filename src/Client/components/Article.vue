<template>
<div>
    <div class="article" v-for="(item, n) in articleList" :key="n">
         <img :src="item.image" alt="">
         <div class="desc">
           <div class="title">
             {{item.title}}
           </div>
           <div class="text">
             {{item.summary}}
           </div>
           <div class="underline">
             <div class="tag">{{item.tag}}</div>
             <div class="clock">{{getDate(item.date)}}</div>
             <div class="comment">{{item.commentCount}}</div>
             <div class="read">{{item.readCount}}</div>
             <div class="like">{{item.likeCount}}</div>
             <div @click="openText(item)" class="all">查看全文</div>
           </div>
         </div>
       </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      articleList: [],
    }
  },
  async mounted() {
    try {
      const res = await this.$request({
        path: "article",
        data: {},
        method: "GET"
      });

      Object.keys(res).forEach(key => {
        if (typeof res[key] === "object") {
          this.articleList.push(res[key]);
        }
      });
    } catch (msg) {
      this.$Message.info(msg);
    }
  },
  methods: {
    openText(data) {
      console.log("查看全文", data);
      this.$router.push({
        path: `/detail/${data._id}`,
      });
      fetch("http://192.168.199.146:3000")
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log(res.a);
        });
    },
    getDate(date) {

      return this.$moment(Number(date)).format("YYYY-MM-DD");
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
    height: 160px;
  }
}
</style>
