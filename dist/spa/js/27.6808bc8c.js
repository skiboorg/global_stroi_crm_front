"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[27],{2637:(e,l,a)=>{a.d(l,{d:()=>u});var o=a(6827),n=a(8346);function u(e,l){o.Z.create({message:l,html:!0,color:e,position:n.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>m});var o=a(9835);const n={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var u=a(8879),t=a(9984),r=a.n(t);const s=n,m=s;r()(n,"components",{QBtn:u.Z})},8203:(e,l,a)=>{a.d(l,{Z:()=>i});var o=a(9835);function n(e,l){const a=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(a,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:l[0]||(l[0]=l=>e.$router.back())})}var u=a(1639),t=a(8879),r=a(9984),s=a.n(r);const m={},d=(0,u.Z)(m,[["render",n]]),i=d;s()(m,"components",{QBtn:t.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>m});var o=a(9835);const n={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,o.kq)("",!0)}}};var u=a(8879),t=a(9984),r=a.n(t);const s=n,m=s;r()(n,"components",{QBtn:u.Z})},5027:(e,l,a)=>{a.r(l),a.d(l,{default:()=>U});var o=a(9835),n=a(1957),u=a(8203),t=a(499),r=(a(8550),a(2637)),s=a(8339),m=a(1569),d=a(9876),i=(a(1862),a(6928));const c={class:"flex items-center q-mb-md"},p=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Профиль пользователя",-1),v={key:0,class:"q-mb-md"},b=["src"],g={class:"row q-col-gutter-md q-mb-md"},_={class:"col-12 col-md-6"},f={__name:"profile",setup(e){const l=(0,d.E)(),a=((0,s.tv)(),(0,s.yj)(),(0,t.iH)(!1)),f=(0,t.iH)(""),{user:V,getUser:h}=(0,i.t)(),q=(0,t.iH)(null),w=(0,t.iH)({username:null,fio:null,phone:null,email:null,telega_username:null,password:null});(0,o.Fl)((()=>l.departments));(0,o.wF)((async()=>{w.value.username=V.username,w.value.fio=V.fio,w.value.phone=V.phone,w.value.email=V.email,w.value.telega_username=V.telega_username}));const y=async()=>{a.value=!a.value,f.value="";let e=new FormData;for(let[l,a]of Object.entries(w.value))e.append(l,JSON.stringify(a));q.value&&e.append("avatar",q.value),(0,m.api)({method:"patch",url:`/api/user/user/${V.id}`,data:e,headers:{"Content-Type":"multipart/form-data"}}).then((e=>{(0,r.d)("positive","Пользователь успешно изменен")})).catch((e=>{let l=Object.keys(e.response.data);for(let a of l)f.value+=e.response.data[a][0];(0,r.d)("negative",f.value)})),await h(),a.value=!a.value};return(e,l)=>{const t=(0,o.up)("q-avatar"),r=(0,o.up)("q-input"),s=(0,o.up)("q-file"),m=(0,o.up)("q-btn"),d=(0,o.up)("q-form"),i=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(i,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)(u.Z),p]),w.value.avatar?((0,o.wg)(),(0,o.iD)("div",v,[(0,o.Wm)(t,{size:"100px"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:w.value.avatar},null,8,b)])),_:1})])):(0,o.kq)("",!0),(0,o.Wm)(d,{onSubmit:(0,n.iM)(y,["prevent"])},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o._)("div",_,[(0,o.Wm)(r,{outlined:"",modelValue:w.value.username,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value.username=e),label:"Логин*","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(r,{outlined:"",modelValue:w.value.password,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value.password=e),class:"q-mb-md",label:"Новый пароль"},null,8,["modelValue"]),(0,o.Wm)(r,{outlined:"",modelValue:w.value.telega_username,"onUpdate:modelValue":l[2]||(l[2]=e=>w.value.telega_username=e),label:"Telegram username ID (без символа@)*","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(r,{outlined:"",modelValue:w.value.fio,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value.fio=e),label:"ФИО*","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(r,{outlined:"",modelValue:w.value.phone,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value.phone=e),label:"Телефон*","lazy-rules":"",mask:"+7 (###) ###-##-##","fill-mask":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(r,{outlined:"",modelValue:w.value.email,"onUpdate:modelValue":l[5]||(l[5]=e=>w.value.email=e),label:"Email*","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(s,{outlined:"",modelValue:q.value,"onUpdate:modelValue":l[6]||(l[6]=e=>q.value=e),class:"q-mb-md",label:"Фото"},null,8,["modelValue"])])]),(0,o.Wm)(m,{loading:a.value,"no-caps":"",unelevated:"",label:"Сохранить изменения",type:"submit",color:"positive",icon:"done"},null,8,["loading"])])),_:1},8,["onSubmit"])])),_:1})}}};var V=a(9885),h=a(1357),q=a(8326),w=a(3119),y=a(9420),k=a(8879),Z=a(9984),W=a.n(Z);const Q=f,U=Q;W()(f,"components",{QPage:V.Z,QAvatar:h.Z,QForm:q.Z,QInput:w.Z,QFile:y.Z,QBtn:k.Z})}}]);