(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a8cd030"],{"0b60":function(t,e,s){},"70b2":function(t,e,s){"use strict";var a=s("0b60"),n=s.n(a);n.a},8345:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"auth"}},[!0===t.success?s("div",{staticClass:"success"},[s("h1",[t._v("Spotify Link Successful!")]),s("hr"),t._m(0),s("p",[t._v("You'll do that everytime you want to use the app from now on.")]),s("small",[t._v("(Forget the app URL!! It won't work if you don't click that Icon. Trust me!)")]),s("br"),s("br"),s("p",[t._v("Also don't try to click the Extension Icon in this tab, it just won't work and I can't make it work and I'm tired, I'll fix it later...")]),s("p",[t._v("One more time...It's very important that you always click that Icon to use this app, I cannot stress that enough!")]),s("p",[t._v("Still reading? Close this tab and click that Icon!")])]):t._e(),!1===t.success?s("div",{staticClass:"fail"},[s("h1",[t._v("Uh oh!")]),s("p",[t._v("Something went wrong linking your Spotify Account")]),s("font-awesome-icon",{attrs:{icon:"frown",size:"3x"}}),s("br"),s("br"),s("p",[t._v("Please go back and try again")])],1):t._e()])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("You can CLOSE "),s("i",[t._v("this")]),t._v(" tab now and click on the Extension Icon in a "),s("i",[t._v("new")]),t._v(" tab")])}],o=s("2f94"),c={name:"Auth",data(){return{success:Boolean,code:null}},mounted(){this.$route.query.code&&(this.success=!0,this.code=this.$route.query.code,this.exchange()),this.$route.query.error&&(this.success=!1)},methods:{async exchange(){var t=this.code;const e=await o["a"].exchange({code:t});!0===e.data.success&&(localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token))},cont(){this.$router.replace({name:"visualizer"})}}},i=c,r=(s("70b2"),s("2877")),u=Object(r["a"])(i,a,n,!1,null,"303aa9c4",null);u.options.__file="AuthPage.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4a8cd030.5f059c6f.js.map