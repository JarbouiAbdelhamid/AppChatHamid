(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"f+ep":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("mrSG"),o=u("ZZ/e"),i=u("mtpe"),r=function(){function n(n,l,u,t){this.navCtrl=n,this.loadingController=l,this.alertController=u,this.router=t,this.appID="6e13b23d7a3",this.apiKey="824649fc1cdf02059975c40174d0af23695aea65"}return n.prototype.ngOnInit=function(){},n.prototype.presentAlert=function(n){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"Error",message:n,buttons:["OK"]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.onSubmit=function(){return e.b(this,void 0,void 0,function(){var n,l=this;return e.e(this,function(u){switch(u.label){case 0:return[4,this.loadingController.create({message:"Please Wait",spinner:"dots",translucent:!0})];case 1:return(n=u.sent()).present(),i.CometChat.init(this.appID).then(function(){console.log("Initialization completed successfully"),i.CometChat.login(l.userUID,l.apiKey).then(function(u){console.log("Login Successful:",{user:u}),n.dismiss(),l.router.navigate(["tabs"])},function(u){n.dismiss(),l.presentAlert(u.message)})},function(n){console.log("Initialization failed with error:",n),l.presentAlert(n.message)}),[2]}})})},n}(),a=function(){return function(){}}(),b=u("pMnS"),s=u("oBZk"),c=u("gIcY"),p=u("ZYCi"),g=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,s.C,s.h)),t.ob(1,49152,null,0,o.A,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,s.P,s.u)),t.ob(3,49152,null,0,o.Ab,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,s.O,s.t)),t.ob(5,49152,null,0,o.yb,[t.h,t.k],null,null),(n()(),t.Db(-1,0,["Login"])),(n()(),t.pb(7,0,null,null,21,"ion-content",[],null,null,null,s.A,s.f)),t.ob(8,49152,null,0,o.t,[t.h,t.k],null,null),(n()(),t.pb(9,0,null,0,19,"div",[["class","ion-padding"],["text-align","center"]],null,null,null,null,null)),(n()(),t.pb(10,0,null,null,1,"p",[["style","text-align:center;"]],null,null,null,null,null)),(n()(),t.Db(-1,null,[" Welcome to CometChat Pro"])),(n()(),t.pb(12,0,null,null,11,"ion-item",[],null,null,null,s.H,s.m)),t.ob(13,49152,null,0,o.G,[t.h,t.k],null,null),(n()(),t.pb(14,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.I,s.n)),t.ob(15,49152,null,0,o.M,[t.h,t.k],{position:[0,"position"]},null),(n()(),t.Db(-1,0,["Enter UID"])),(n()(),t.pb(17,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.zb(n,18)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.zb(n,18)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.userUID=u)&&e),e},s.G,s.l)),t.ob(18,16384,null,0,o.Jb,[t.k],null,null),t.Ab(1024,null,c.b,function(n){return[n]},[o.Jb]),t.ob(20,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ab(2048,null,c.c,null,[c.e]),t.ob(22,16384,null,0,c.d,[[4,c.c]],null,null),t.ob(23,49152,null,0,o.F,[t.h,t.k],{type:[0,"type"]},null),(n()(),t.pb(24,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(25,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(26,0,null,null,2,"ion-button",[["expand","full"],["shape","round"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.onSubmit()&&t),t},s.y,s.d)),t.ob(27,49152,null,0,o.j,[t.h,t.k],{expand:[0,"expand"],shape:[1,"shape"]},null),(n()(),t.Db(-1,0,["Login"]))],function(n,l){var u=l.component;n(l,15,0,"floating"),n(l,20,0,u.userUID),n(l,23,0,"text"),n(l,27,0,"full","round")},function(n,l){n(l,17,0,t.zb(l,22).ngClassUntouched,t.zb(l,22).ngClassTouched,t.zb(l,22).ngClassPristine,t.zb(l,22).ngClassDirty,t.zb(l,22).ngClassValid,t.zb(l,22).ngClassInvalid,t.zb(l,22).ngClassPending)})}function h(n){return t.Eb(0,[(n()(),t.pb(0,0,null,null,1,"app-login",[],null,null,null,d,g)),t.ob(1,114688,null,0,r,[o.Gb,o.Eb,o.a,p.m],null,null)],function(n,l){n(l,1,0)},null)}var f=t.lb("app-login",r,h,{},{},[]),C=u("Ip0R");u.d(l,"LoginPageModuleNgFactory",function(){return m});var m=t.mb(a,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[b.a,f]],[3,t.j],t.x]),t.xb(4608,C.j,C.i,[t.u,[2,C.p]]),t.xb(4608,c.g,c.g,[]),t.xb(4608,o.b,o.b,[t.z,t.g]),t.xb(4608,o.Fb,o.Fb,[o.b,t.j,t.q,C.c]),t.xb(4608,o.Ib,o.Ib,[o.b,t.j,t.q,C.c]),t.xb(1073742336,C.b,C.b,[]),t.xb(1073742336,c.f,c.f,[]),t.xb(1073742336,c.a,c.a,[]),t.xb(1073742336,o.Cb,o.Cb,[]),t.xb(1073742336,p.n,p.n,[[2,p.t],[2,p.m]]),t.xb(1073742336,a,a,[]),t.xb(1024,p.k,function(){return[[{path:"",component:r}]]},[])])})}}]);