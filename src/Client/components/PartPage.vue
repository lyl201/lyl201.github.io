<template>
    <div class="partpage">
        <div>{{num}}</div>
        <div class="exp" @click="goPrev" v-show="prev">上一页</div>
        <div v-for="n in getCurPages" :style="{'color': n === cur ? 'red' : '#444'}" @click="goThis(n)" :key="n">{{n}}</div>
        <div class="exp"  @click="goNext" v-show="next">下一页</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cur: 1,
      gap: 5,
      k: 0,
      curPages: [],
      prev: false,
      next: true
    };
  },
  created() {
    for (let i = 1; i <= this.num; i++) {
      this.curPages.push(i);
    }
  },
  props: {
    num: Number
  },
  methods: {
    goThis(n) {
      console.log(n);
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
    }
  },
  computed: {
    getCurPages() {
      return this.curPages.slice(
        this.k * this.gap,
        this.k * this.gap + this.gap
      );
    }
  },
  watch: {
    cur: function(v1, v2) {
      console.log(v1, v2);
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
