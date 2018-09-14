<template>
  <div class="article-container">
    <div class="article" v-for="(item, n) in articleList" :key="n" v-show="!isLoading">
      <div class="sum"> <img :src="item.image" alt=""> </div>
      <div class="desc">
        <div class="title"> {{item.title}} </div>
        <div class="text"> {{item.summary}} </div>
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
    <div class="article" v-if="articleList.length===0&&!isLoading" style="display:flex; justify-content: center; align-items: center; color: #808695"> 没有内容 </div>
    <div class="loading" v-show="isLoading">
      <Loading/>
    </div>
  </div>
</template>

<script>
      import Loading from "@/components/Loading";
      export default {
        data() {
          return {}
        },
        components: {
          Loading,
        },
        methods: {
          openText(data) {
            console.log("查看全文", data);
            this.$router.push({
              path: `/detail/${data._id}`,
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
        height: 700px;
      }
      
      .loading {
        display: flex;
        justify-content: center;
      }
      
      .article {
        background: #fff;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        margin-bottom: 10px;
        cursor: pointer;
        box-shadow: 4px 4px 3px #aaa;
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
          .title {
            font-size: 30px;
            height: 50px;
            word-break: break-all;
            line-height: 50px;
          }
          .text {
            word-break: break-all;
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
        .article {}
      }
</style>