<template>
     <transition name="dialogFade">
           <div class="dialog" v-show="dialogShow" @click="hideDialog">
              <div class="container">
                <div class="close" @click="hideDialog">关闭</div>
                <slot></slot>
              </div>
          </div>
        </transition>
</template>
<script>
export default {
  methods: {
    hideDialog(e) {
      this.$store.commit("hideDialog", e);
    },
    
  },
  computed: {
    dialogShow() {
      return this.$store.state.dialogShow;
    }
  }
};
</script>
<style lang="scss" scoped>
.dialog {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  width: 100vw;
  height: 120vh;
  display: flex;
  justify-content: center;
  top: 0px;
  .container {
    width: 50vw;
    margin-top: 100px;
    background: #fff;
    position: absolute;
    box-shadow: 0px -2px 2px #fff;
    .close {
      margin-left: calc(100% - 70px);
      width: 50px;
      cursor: pointer;
      color: #888;
      padding: 10px;
    }
  }
  @media screen and (max-width: 697px) {
    .container {
      width: 90vw;
      height: 200px;
    }
  }
}

.dialogFade-enter-active,
.dialogFade-leave-active {
  transition: opacity 0.3s;
}
.dialogFade-enter, .dialogFade-leave-to {
  opacity: 0;
}
</style>
