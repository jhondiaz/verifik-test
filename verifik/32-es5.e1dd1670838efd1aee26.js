!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[32],{61032:function(i,n,o){o.r(n),o.d(n,{DashboardModule:function(){return A}});var l,r=o(38583),a=o(63423),d=o(51095),s=o(1769),c=o(76627),u=o(33935),g=o(44466),Z=o(12178),f=o(11494),x=o(32789),v=o(34256),m=o(37716),p=[{path:"",component:(l=function(){function i(){e(this,i),this.user=JSON.parse(localStorage.getItem("user")),this.accessToken=localStorage.getItem("accessToken"),console.log(this.user)}var n,o,l;return n=i,(o=[{key:"ngOnInit",value:function(){}}])&&t(n.prototype,o),l&&t(n,l),i}(),l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=m.Xpm({type:l,selectors:[["app-dashboard"]],decls:48,vars:7,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-8","w-full","mt-8"],[1,"grid","gap-8","sm:grid-flow-col","xl:grid-flow-row"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-green-500","dark:text-green-400",3,"svgIcon"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-green-600","font-medium","text-sm"],[1,"flex","flex-row","flex-wrap","mt-4","-mx-6"],[1,"flex","flex-col","mx-6","my-3"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"mt-2","font-medium","text-3xl","leading-none"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"text-red-600","font-medium","text-sm"],[1,"font-semibold","text-xl","md:text-xl","tracking-tighter",2,"word-break","break-all"],[1,"grid","grid-cols-1","xl:grid-cols-3","gap-8","w-full","mt-8"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"div"),m.TgZ(4,"h2",3),m._uU(5),m.qZA(),m.TgZ(6,"div",4),m._uU(7,"Detalles de la cuenta: plan, uso y llave privada "),m.qZA(),m.qZA(),m._UZ(8,"div",5),m.qZA(),m.TgZ(9,"div",6),m.TgZ(10,"div",7),m.TgZ(11,"div",8),m.TgZ(12,"div",9),m._UZ(13,"mat-icon",10),m.qZA(),m.TgZ(14,"div",11),m.TgZ(15,"div",12),m.TgZ(16,"div",13),m._uU(17,"Detalles de la cuenta "),m.qZA(),m.TgZ(18,"div",14),m._uU(19," Plan & Uso "),m.qZA(),m.qZA(),m.qZA(),m.TgZ(20,"div",15),m.TgZ(21,"div",16),m.TgZ(22,"div",17),m._uU(23,"Plan"),m.qZA(),m.TgZ(24,"div",18),m._uU(25),m.qZA(),m.qZA(),m.TgZ(26,"div",16),m.TgZ(27,"div",17),m._uU(28,"Uso"),m.qZA(),m.TgZ(29,"div",18),m._uU(30),m.qZA(),m.qZA(),m.TgZ(31,"div",16),m.TgZ(32,"div",17),m._uU(33,"L\xedmite"),m.qZA(),m.TgZ(34,"div",18),m._uU(35),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(36,"div",8),m.TgZ(37,"div",9),m._UZ(38,"mat-icon",19),m.qZA(),m.TgZ(39,"div",11),m.TgZ(40,"div",12),m.TgZ(41,"div",13),m._uU(42," Llave privada "),m.qZA(),m.TgZ(43,"div",20),m._uU(44," Esta llave debe de ser incluida en 'headers > Authorization' "),m.qZA(),m.TgZ(45,"div",21),m._uU(46),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(47,"div",22),m.qZA(),m.qZA(),m.qZA()),2&e&&(m.xp6(5),m.hij("Bienvenido ",t.user.name,""),m.xp6(8),m.Q6J("svgIcon","heroicons_outline:check-circle"),m.xp6(12),m.hij(" ",t.user.subscriptionPlan.name,""),m.xp6(5),m.hij(" ",t.user.requestsCount,""),m.xp6(5),m.hij(" ",t.user.subscriptionPlan.limit,""),m.xp6(3),m.Q6J("svgIcon","heroicons_outline:exclamation-circle"),m.xp6(8),m.hij(" ",t.accessToken," "))},directives:[c.Hw],styles:[""]}),l)}],T=o(10588),h=o(77001),A=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[r.ez,a.Bz.forChild(p),d.ot,s.t,c.Ps,u.Tx,Z.Cv,f.JX,x.p0,v.X,g.m,T.fC,h.ZX]]}),t}()}}])}();