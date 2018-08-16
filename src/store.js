import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        listShow: false
    },
    mutations: {
        hide(state, e) {
            if(e.target.className != 'more') {
                if (state.listShow) {
                    state.listShow = !state.listShow;
                }
            }
        },
        switchStatus(state) {
            console.log(999)
            state.listShow = !state.listShow;
        }
    }
})
export default store;