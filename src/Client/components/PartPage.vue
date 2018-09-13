<template>
    <div class="partpage" v-show="num > 1">
        <div>{{num}}</div>
        <div class="exp" @click="goPrev" v-show="prev">上一页</div>
        <div v-for="n in getCurPages" :style="{'color': n === cur ? 'red' : '#444'}" @click="goThis(n)" :key="n">{{n}}</div>
        <div class="exp"  @click="goNext" v-show="next">下一页</div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      cur: 1,
      gap: 5,
      k: 0,
      prev: false,
      next: true
    };
  },
  created() {},
  async mounted() {
    this.$store.commit("switchLoading");
    await this.getArticle({ vm: this, page: 1, tag: this.$store.state.tag });
    this.$store.commit("switchLoading");
  },
  methods: {
    goThis(n) {
      this.cur = n;
    },
    goPrev() {
      console.log("prev");
      if (this.cur % this.gap === 1) {
        this.k--;
      }
      this.cur--;
    },
    goNext() {
      console.log("Next");
      if (this.cur % this.gap === 0) {
        this.k++;
      }
      this.cur++;
    },
    ...mapActions(["getArticle"])
  },
  computed: {
    getCurPages() {
      let curPages = [];
      for (let i = 1; i <= this.num; i++) {
        curPages.push(i);
      }
      return curPages.slice(this.k * this.gap, this.k * this.gap + this.gap);
    },
    num() {
      return this.$store.state.pageCount;
    }
  },
  watch: {
    cur: async function(v1, v2) {
      console.log(v1);
      this.$store.commit("switchLoading");
      await this.getArticle({
        page: v1,
        tag: this.$store.state.tag,
        vm: this
      });
      this.$store.commit("switchLoading");
      if (v1 > 1) {
        this.prev = true;
      } else {
        this.prev = false;
      }
      if (v1 >= this.num) {
        this.next = false;
      } else {
        this.next = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.partpage {
  display: flex;
  width: 60%;
  margin: 30px;
  .exp {
    width: 100px;
  }
  div {
    border: 1px solid#B3B3B3;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    color: #444;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  div:not(:first-child):hover {
    color: #697 !important;
    background-color: #b3b3b3;
  }
}
@media screen and (max-width: 697px) {
  .partpage {
    width: 100%;
    margin-left: 0px;
    .exp {
      width: 50px;
    }
    div {
      margin-left: 10px;
      border: none;
      width: 15px;
      height: 15px;
    }
    div:not(:first-child):hover {
      background: none;
    }
  }
}
</style>
