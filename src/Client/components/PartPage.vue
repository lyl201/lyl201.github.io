<template>
  <div class="partpage-container">
    <div class="partpage" v-show="num > 1">
          <div>{{num}}页</div>
          <div class="exp" @click="goPrev" :class="{no: !prev}">上一页</div>
          <div v-for="n in getCurPages" :style="{'color': n === cur ? 'red' : '#444'}" @click="goThis(n)" :key="n">第{{n}}页</div>
          <div class="exp"  @click="goNext" :class="{no: !next}">下一页</div>
      </div>
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
      if (!this.prev) {
        return ;
      }
      if (this.cur % this.gap === 1) {
        this.k--;
      }
      this.cur--;
    },
    goNext() {
      if (!this.next) {
        return ;
      }
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
.partpage-container {
  background: #fff;
  margin-top: -20px;
  padding: 20px 0px;
}
.partpage {
  display: flex;
  width: 60%;
  // margin: 30px;
  .exp {
    width: 100px;
  }
  div {
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 25px;
    color: #444;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  div:not(:first-child):not(.no):hover{
    color: #697 !important;
  }
}
.no {
  color:rgba(0,0,0,0.2) !important;
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
