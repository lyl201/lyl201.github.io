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
        username: ''
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
            if(e === 'isLogin' || ['dialog', 'close'].includes(e.target.className)) {
                state.dialogShow = false;
            }
        },
        switchLoading(state) {
            state.isLoading = !state.isLoading
        },
        login(state){
            state.isLogin = true;
        },
        getUsername(state, name){
            state.username = name;
        },
        componentName(state, name) {
            console.log(name);
            state.componentId = name;

        }
    }
})
export default store;