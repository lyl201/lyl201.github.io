webpackJsonp([5],{"74X2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),r=a("exGp"),s=a.n(r),o={components:{Loading:a("MLSf").a},data:function(){return{article:"",title:"",date:"",tag:""}},computed:{mark:function(){return this.$marked(this.article)},isLoading:function(){return this.$store.state.isLoading}},created:function(){var t=this;return s()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.commit("switchLoading"),e.next=4,t.$request({path:"article?id="+t.$route.params.id,data:{},method:"GET"});case 4:a=e.sent,t.article=a.content,t.title=a.title,t.date=moment(Number(a.date)).format("YYYY-MM-DD"),t.tag=a.tag,t.$store.commit("switchLoading"),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}},e,t,[[0,12]])}))()},mounted:function(){},methods:{}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-container"},[t._v("\n   \n  "),t.isLoading?t._e():a("h1",[t._v(t._s(t.title))]),t._v(" "),a("div",{staticStyle:{"font-size":"14px",color:"#969696","padding-bottom":"10px","border-bottom":"1px solid #f0f0f0"}},[a("div",{staticClass:"tag"},[t._v("标签："+t._s(t.tag))]),t._v(" "),a("div",{staticClass:"date"},[t._v("时间："+t._s(t.date))])]),t._v(" "),t.isLoading?t._e():a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{article:""},domProps:{innerHTML:t._s(t.mark)}}),t._v(" "),a("div",{staticClass:"comment"}),t._v(" "),t.isLoading?a("div",{staticClass:"loading"},[a("Loading")],1):t._e()])},staticRenderFns:[]};var d=a("VU/8")(o,c,!1,function(t){a("OvYB")},"data-v-74e011fa",null);e.default=d.exports},OvYB:function(t,e){}});