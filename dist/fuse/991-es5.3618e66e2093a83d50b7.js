!function(){"use strict";function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[991],{92255:function(n,e,i){i.d(e,{J:function(){return c}}),i(28288);var o,u=i(38583),r=i(37716),c=((o=function n(){t(this,n)}).\u0275fac=function(n){return new(n||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[u.ez]]}),o)},38991:function(e,i,o){o.r(i),o.d(i,{AuthSignOutModule:function(){return A}});var u=o(63423),r=o(51095),c=o(92255),s=o(44466),a=o(79765),f=o(38634),l=o(68939),d=o(70409),p=o(46782),m=o(93342),g=o(37716),h=o(88951),x=o(38583);function v(n,t){if(1&n&&(g.ynx(0),g._uU(1),g.ALo(2,"i18nPlural"),g.BQk()),2&n){var e=g.oxw();g.xp6(1),g.hij(" Redireccionando en ",g.xi3(2,1,e.countdown,e.countdownMapping)," ")}}function w(n,t){1&n&&(g.ynx(0),g._uU(1," Adios, vuelve pronto! "),g.BQk())}var b,Z=function(){return["/sign-in"]},y=[{path:"",component:(b=function(){function e(n,i){t(this,e),this._authService=n,this._router=i,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new a.xQ}var i,o,u;return i=e,(o=[{key:"ngOnInit",value:function(){var n=this;this._authService.signOut(),(0,f.H)(1e3,1e3).pipe((0,l.x)(function(){n._router.navigate(["sign-in"])}),(0,d.o)(function(){return n.countdown>0}),(0,p.R)(this._unsubscribeAll),(0,m.b)(function(){return n.countdown--})).subscribe()}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}])&&n(i.prototype,o),u&&n(i,u),e}(),b.\u0275fac=function(n){return new(n||b)(g.Y36(h.e),g.Y36(u.F0))},b.\u0275cmp=g.Xpm({type:b,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","https://cdn.gomat.co/verifik/logo.jpeg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(n,t){1&n&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"div",3),g._UZ(4,"img",4),g.qZA(),g.TgZ(5,"div",5),g._uU(6,"Cerrando sesi\xf3n..."),g.qZA(),g.TgZ(7,"div",6),g.YNc(8,v,3,4,"ng-container",7),g.YNc(9,w,2,0,"ng-container",7),g.qZA(),g.TgZ(10,"div",8),g.TgZ(11,"span"),g._uU(12,"Ir a "),g.qZA(),g.TgZ(13,"a",9),g._uU(14,"Iniciar sesi\xf3n "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(8),g.Q6J("ngIf",t.countdown>0),g.xp6(1),g.Q6J("ngIf",0===t.countdown),g.xp6(4),g.Q6J("routerLink",g.DdM(3,Z)))},directives:[x.O5,u.yS],pipes:[x.Gx],encapsulation:2}),b)}],A=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[u.Bz.forChild(y),r.ot,c.J,s.m]]}),n}()}}])}();