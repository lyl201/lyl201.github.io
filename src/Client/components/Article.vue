<template>
  <div class="article-container">
    <div class="article" v-for="(item, n) in articleList" :key="n" v-show="!isLoading">
      <!-- <div class="sum"> <img :src="item.image" alt=""> </div>
      <div class="desc">
        <div class="title"> {{item.title}} </div>
        <div class="text">  </div>
        <div class="underline">
          <div class="tag">{{item.tag}}</div>
          <div class="clock">{{getDate(item.date)}}</div>
          <div class="comment">{{item.commentCount}}</div>
          <div class="read">{{item.readCount}}</div>
          <div class="like">{{item.likeCount}}</div>
          <div @click="openText(item)" class="all">查看全文</div>
        </div>
      </div> -->
      <div class="title" @click="openText(item)">{{item.title}}</div>
      <div class="summary">
        {{item.summary}}
      </div>
      <div class="bottom">
        <div class="tag">{{item.tag}}</div>
        <div class="comment">{{item.commentCount}}</div>
        <div class="like">{{item.likeCount}}</div>
        <div class="read">{{item.readCount}}</div>
      </div>

    </div>
    <div v-if="articleList.length===0&&!isLoading" style="display:flex; justify-content: center; align-items: center; color: #808695"> 没有内容 </div>
    <div class="loading" v-show="isLoading">
      <Loading/>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
export default {
  data() {
    return {};
  },
  components: {
    Loading
  },
  methods: {
    openText(data) {
      console.log("查看全文", data);
      this.$router.push({
        path: `/detail/${data._id}`
      });
    },
    getDate(date) {
      return moment(Number(date)).format("YYYY-MM-DD");
    }
  },
  computed: {
    articleList() {
      return this.$store.state.articleList;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style lang="scss" scoped>
.article-container {
  min-height: 700px;
  background: #fff;
  padding: 20px 10px;
  & > .article:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
}

.loading {
  display: flex;
  justify-content: center;
}

.article {
  background: #fff;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  .title {
    word-break: break-all;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .title:hover {
    text-decoration: underline;
  }
  .summary {
    margin-top: 10px;
    word-break: break-all;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .bottom {
    display: flex;
    margin-top: 10px;

    & > div {
      margin-right: 20px;
      padding: 0px 20px;
      color: #b4b4b4;
      font-size: 14px;
    }
    .read {
      background-image: url(../../static/read.png);
      background-repeat: no-repeat;
      background-position: 0 1px;
    }
    .like {
      background-image: url(../../static/like.jpg);
      background-repeat: no-repeat;
      background-position: 0 1px;
    }
    .tag {
      background-image: url(../../static/tag.png);
      background-repeat: no-repeat;
      background-position: 0 2px;
    }
    .comment {
      background-image: url(../../static/comment.png);
      background-repeat: no-repeat;
      background-position: 0 1px;
    }
  }
  & img {
    height: 200px;
    width: 300px;
  }
  .desc {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

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
  .like,
  .text {
    display: none !important;
  }
  .all {
    width: 100%;
    margin-left: -20px;
  }
  .title {
    font-size: 16px !important;
    line-height: 23px !important;
  }
  .article {
  }
}
</style>