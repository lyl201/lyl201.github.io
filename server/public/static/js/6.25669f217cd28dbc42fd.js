webpackJsonp([6],{"74X2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Xxa5"),a=i.n(n),r=i("exGp"),s=i.n(r),c={data:function(){return{article:"",title:""}},components:{Loading:i("MLSf").a},created:function(){var t=this;return s()(a.a.mark(function e(){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("switchLoading"),e.next=4,t.$request({path:"article?id="+t.$route.params.id,data:{},method:"GET"});case 4:i=e.sent,t.article=i.content,t.title=i.title,t.$store.commit("switchLoading"),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}},e,t,[[0,10]])}))()},mounted:function(){},methods:{},computed:{mark:function(){return this.$marked(this.article)},isLoading:function(){return this.$store.state.isLoading}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-container"},[t._v("\n     \n    "),t.isLoading?t._e():i("h1",[t._v(t._s(t.title))]),t._v(" "),t.isLoading?t._e():i("div",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{article:""},domProps:{innerHTML:t._s(t.mark)}}),t._v(" "),i("div",{staticClass:"comment"}),t._v(" "),t.isLoading?i("div",{staticClass:"loading"},[i("Loading")],1):t._e()])},staticRenderFns:[]};var d=i("VU/8")(c,o,!1,function(t){i("I38i")},"data-v-4ef326ca",null);e.default=d.exports},I38i:function(t,e){}});