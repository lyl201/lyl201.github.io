<template>
     <transition name="dialogFade">
           <div class="dialog" v-show="dialogShow" @click="hideDialog">
              <div class="container">
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
    }
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
  height: 100vh;
  display: flex;
  justify-content: center;
  top: 0px;
  .container {
    width: 50vw;
    height: 300px;
    margin-top: 100px;
    
    background: #fff;
    // border-radius: 10px;
    box-shadow: 0px -2px 2px #fff;
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
.dialogFade-enter, .dialogFade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
