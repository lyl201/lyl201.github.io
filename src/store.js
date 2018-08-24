import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        catagoryShow: false,
        dialogShow: false
    },
    mutations: {
        hideCatagory(state, e) {
            if(e.target.className !== 'more') {
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
            if(e.target.className === 'dialog') {
                state.dialogShow = false;
            }
        }
    }
})
export default store;