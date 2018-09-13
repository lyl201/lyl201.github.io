import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    catagoryShow: false,
    dialogShow: false,
    isLoading: false,
    isLogin: false,
    componentId: '',
    username: '',
    avator: '',
    tag: 'Latest',
    pageCount: null,
    articleList: [],
  },
  mutations: {
    hideCatagory(state, e) {
      if (e.target.className !== 'more') {
        if (state.catagoryShow) {
          state.catagoryShow = !state.catagoryShow;
        }
      }
    },

    switchStatus(state) {
      state.catagoryShow = !state.catagoryShow;
    },
    openDialog(state) {
      state.dialogShow = true;
    },
    hideDialog(state, e) {
      if (e === 'isLogin' || ['dialog', 'close'].includes(e.target.className)) {
        state.dialogShow = false;
      }
    },
    switchLoading(state) {
      state.isLoading = !state.isLoading
    },
    login(state) {
      state.isLogin = true;
    },
    getUsername(state, name) {
      state.username = name;
    },
    getAvator(state, url) {
      state.avator = url;
    },
    componentName(state, name) {
      console.log(name);
      state.componentId = name;

    },
    getArticle(state, data) {
      state.articleList = data;
    },
    getPageCount(state, count){
        state.pageCount = count;
    },
    changeTag(state, tag) {
        state.tag = tag;
    }
  },
  actions: {
    async getArticle({
      commit,
      state
    }, option) {
      const vm = option.vm;
      try {
        const res = await vm.$request({
          path: `article?page=${option.page}&tag=${state.tag}`,
          data: {},
          method: "GET"
        });
        commit('getArticle', res.data);
        commit('getPageCount', res.count)
      } catch (msg) {
        console.log(msg);
        commit('getPageCount', 0);
        commit('getArticle', []);
      }
    },
  }
})
export default store;
