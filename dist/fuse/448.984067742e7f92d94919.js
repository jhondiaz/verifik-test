"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[448],{2448:(P,d,n)=>{n.r(d),n.d(d,{AuthSignUpModule:()=>k});var l=n(3423),p=n(1095),c=n(7539),m=n(8295),g=n(6627),f=n(9983),h=n(7441),Z=n(4885),U=n(2255),v=n(588),x=n(4466),i=n(3679),T=n(8288),e=n(7716),y=n(8951),A=n(8583),C=n(3994),q=n(2458);const w=["signUpNgForm"];function I(t,a){if(1&t&&(e.TgZ(0,"fuse-alert",40),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.xp6(1),e.hij(" ",o.alert.message," ")}}function F(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Nombre completo es requerido "),e.qZA())}function S(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Correo electr\xf3nico es requerido "),e.qZA())}function N(t,a){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function J(t,a){if(1&t&&(e.TgZ(0,"mat-option",41),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.Q6J("value",o.code),e.xp6(1),e.AsE(" ",o.code," ",o.name," ")}}function b(t,a){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function Q(t,a){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function _(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1," Crea tu cuenta gratis "),e.qZA())}function M(t,a){1&t&&e._UZ(0,"mat-progress-spinner",43),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const Y=function(){return["/sign-in"]},E=[{path:"",component:(()=>{class t{constructor(o,r,s){this._authService=o,this._formBuilder=r,this._router=s,this.alert={type:"success",message:""},this.showAlert=!1,this.countryCodes=[{code:"+54",name:"Argentina"},{code:"+55",name:"Brazil"},{code:"+1",name:"Canada"},{code:"+56",name:"Chile"},{code:"+57",name:"Colombia"},{code:"+506",name:"Costa Rica"},{code:"+593",name:"Ecuador"},{code:"+503",name:"El Salvador"},{code:"+502",name:"Guatemala"},{code:"+504",name:"Honduras"},{code:"+52",name:"Mexico"},{code:"+505",name:"Nicaragua"},{code:"+507",name:"Panama"},{code:"+595",name:"Paraguay"},{code:"+51",name:"Peru"},{code:"+1",name:"United States"},{code:"+598",name:"Uruguay"},{code:"+58",name:"Venezuela"},{code:"+353",name:"Ireland"}]}ngOnInit(){Math.floor(1e7+9e7*Math.random()),Math.floor(1e7+9e7*Math.random()),Math.floor(1e7+9e7*Math.random()),Math.floor(1e7+9e7*Math.random()),this.signUpForm=this._formBuilder.group({name:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],password:["",i.kI.required],phone:[""],countryCode:["+57"],agreements:[!1,i.kI.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(o=>{o||this._router.navigateByUrl("/confirmation-required"),this._router.navigateByUrl("/dashboard")},o=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y.e),e.Y36(i.qu),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-up"]],viewQuery:function(o,r){if(1&o&&e.Gf(w,5),2&o){let s;e.iGM(s=e.CRH())&&(r.signUpNgForm=s.first)}},decls:79,vars:20,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","https://and.gov.co/wp-content/uploads/2019/09/cropped-logo2-e1570798009578.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["appearance","outline",1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["matInput","","name","countryCode","formControlName","countryCode","required","",1,"simplified"],[3,"value",4,"ngFor","ngForOf"],["id","company-confirm","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://legal.verifik.co/terminos-y-condiciones",1,"ml-1","text-primary-500","hover:underline"],["href","https://legal.verifik.co/politicas-de-privacidad",1,"ml-1","text-primary-500","hover:underline"],["href","https://legal.verifik.co/manual-de-tratamiento-de-datos",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"value"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,r){if(1&o){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Crea una cuenta nueva"),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div"),e._uU(9,"ya tienes una cuenta?"),e.qZA(),e.TgZ(10,"a",7),e._uU(11,"Inicia sesi\xf3n "),e.qZA(),e.qZA(),e.YNc(12,I,2,5,"fuse-alert",8),e.TgZ(13,"form",9),e.TgZ(14,"mat-form-field",10),e.TgZ(15,"mat-label"),e._uU(16,"Nombre Completo"),e.qZA(),e._UZ(17,"input",11),e.YNc(18,F,2,0,"mat-error",12),e.qZA(),e.TgZ(19,"mat-form-field",10),e.TgZ(20,"mat-label"),e._uU(21,"Correo electr\xf3nico"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,S,2,0,"mat-error",12),e.YNc(24,N,2,0,"mat-error",12),e.qZA(),e.TgZ(25,"mat-form-field",10),e.TgZ(26,"mat-label"),e._uU(27,"Prefijo"),e.qZA(),e.TgZ(28,"mat-select",14),e.YNc(29,J,2,3,"mat-option",15),e.qZA(),e.qZA(),e.TgZ(30,"mat-form-field",10),e.TgZ(31,"mat-label"),e._uU(32,"Tel\xe9fono"),e.qZA(),e._UZ(33,"input",16),e.qZA(),e.TgZ(34,"mat-form-field",10),e.TgZ(35,"mat-label"),e._uU(36,"Contrase\xf1a"),e.qZA(),e._UZ(37,"input",17,18),e.TgZ(39,"button",19),e.NdJ("click",function(){e.CHM(s);const u=e.MAs(38);return u.type="password"===u.type?"text":"password"}),e.YNc(40,b,1,1,"mat-icon",20),e.YNc(41,Q,1,1,"mat-icon",20),e.qZA(),e.TgZ(42,"mat-error"),e._uU(43," Contrase\xf1a es requerida "),e.qZA(),e.qZA(),e.TgZ(44,"div",21),e.TgZ(45,"mat-checkbox",22),e.TgZ(46,"span"),e._uU(47,"Acepto los "),e.qZA(),e.TgZ(48,"a",23),e._uU(49,"Terminos y condiciones "),e.qZA(),e.TgZ(50,"span"),e._uU(51,"y las "),e.qZA(),e.TgZ(52,"a",24),e._uU(53,"Politicas de privacidad "),e.qZA(),e.TgZ(54,"span"),e._uU(55," y por \xfaltimo el "),e.qZA(),e.TgZ(56,"a",25),e._uU(57,"Manual de Tratamiento de Datos "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(58,"button",26),e.NdJ("click",function(){return r.signUp()}),e.YNc(59,_,2,0,"span",12),e.YNc(60,M,1,2,"mat-progress-spinner",27),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(61,"div",28),e.O4$(),e.TgZ(62,"svg",29),e.TgZ(63,"g",30),e._UZ(64,"circle",31),e._UZ(65,"circle",32),e.qZA(),e.qZA(),e.TgZ(66,"svg",33),e.TgZ(67,"defs"),e.TgZ(68,"pattern",34),e._UZ(69,"rect",35),e.qZA(),e.qZA(),e._UZ(70,"rect",36),e.qZA(),e.kcU(),e.TgZ(71,"div",37),e.TgZ(72,"div",38),e.TgZ(73,"div"),e._uU(74,"Reg\xedstrate ahora"),e.qZA(),e.TgZ(75,"div"),e._uU(76,"y prueba nuestro API!"),e.qZA(),e.qZA(),e.TgZ(77,"div",39),e._uU(78," La cuenta gratis tiene un l\xedmite de 150 llamadas al API, despu\xe9s tienes que comprar un plan para poder seguir disfrutando de nuestro servicio. "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const s=e.MAs(38);e.xp6(10),e.Q6J("routerLink",e.DdM(19,Y)),e.xp6(2),e.Q6J("ngIf",r.showAlert),e.xp6(1),e.Q6J("formGroup",r.signUpForm),e.xp6(4),e.Q6J("formControlName","name"),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("name").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.signUpForm.get("email").hasError("email")),e.xp6(5),e.Q6J("ngForOf",r.countryCodes),e.xp6(4),e.Q6J("formControlName","phone"),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===s.type),e.xp6(1),e.Q6J("ngIf","text"===s.type),e.xp6(4),e.Q6J("color","primary")("formControlName","agreements"),e.xp6(13),e.Q6J("color","primary")("disabled",r.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!r.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",r.signUpForm.disabled)}},directives:[l.yS,A.O5,i._Y,i.JL,i.sg,m.KE,m.hX,f.Nt,i.Fj,i.JJ,i.u,h.gD,i.Q7,A.sg,p.lW,m.R9,m.TO,c.oG,C.W,q.ey,g.Hw,Z.Ou],encapsulation:2,data:{animation:T.L}}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(E),p.ot,c.p9,m.lN,g.Ps,f.c,Z.Cq,h.LD,U.J,v.fC,x.m]]}),t})()}}]);