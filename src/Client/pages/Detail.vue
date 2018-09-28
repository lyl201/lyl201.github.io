<template>
  <div class="detail-container">
    &nbsp;
    <h1 v-if="!isLoading">{{title}}</h1>
    <div style="font-size: 14px; color: #969696; padding-bottom: 10px;border-bottom: 1px solid #f0f0f0">
      <div class="tag">标签：{{tag}}</div>
      <div class="date">时间：{{date}}</div>
    </div>
    <div v-if="!isLoading" v-html="mark" v-highlight article></div>
    <div class="comment">
      <!-- <div class="title">12条评论:</div>
              <ul>
                  <li v-for="n in 5" :key="n">
                      <div><img src="http://www.yangqq.com/skin/850/images/text01.jpg" alt=""><b>alloc</b> 1楼-4年前 </div>
                      <div>marked 在浏览器里应该也能跑</div>
                  </li>
              </ul> -->
    </div>
    <div class="loading" v-if="isLoading">
      <Loading/>
    </div>
  </div>
</template>

<script>
  import Loading from "@/components/Loading";
  import Marked from "marked"; 
  export default {
    components: {
      Loading,
    },
    data() {
      return {
        article: "",
        title: "",
        date: "",
        tag: "",
      };
    },
    computed: {
      mark() {
        return Marked(this.article);
      },
      isLoading() {
        return this.$store.state.isLoading;
      }
    },
    async created() {
      try {
        this.$store.commit("switchLoading");
        const res = await this.$request({
          path: `article?id=${this.$route.params.id}`,
          data: {},
          method: "GET"
        });
        this.article = res.content;
        this.title = res.title;
        this.date = moment(Number(res.date)).format("YYYY-MM-DD");
        this.tag = res.tag;
        this.$store.commit("switchLoading");
      } catch (err) {
  
      }
    },
    mounted() {},
    methods: {},
  };
</script>

<style lang="scss" scoped>
  h1 {
    // border-bottom: 2px solid #ddd;
    // padding-bottom: 10px;
    word-break: break-all;
  }
  
  .loading {
    display: flex;
    justify-content: center;
  }
  
  .detail-container {
    background: #fff;
    // height: 1500px;
    padding: 0px 20px;
    min-height: 800px;
    div[article] {
      word-break: break-all;
    }
  }
  
  .comment {
    // border-top: 2px solid #976;
    padding: 10px 0px;
    .title {
      background: #f6f6f6;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
    ul {
      li {
        list-style: none;
        div:first-child {
          padding-top: 10px;
          height: 40px;
          img {
            height: 30px;
            width: 30px;
            vertical-align: middle;
            margin-right: 20px;
          }
        }
        div:last-child {
          padding: 10px 0px;
          padding-left: 50px;
          display: flex;
          align-items: center;
        }
      }
      li:not(:last-child) {
        border-bottom: 2px solid #f6f6f6;
      }
      li:hover {
        background: #f6f6f6;
      }
    }
  }
  
  @media screen and (max-width: 1060px) {
    h1 {
      font-size: 20px;
    }
  }
</style>
