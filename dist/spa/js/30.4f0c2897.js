"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[30],{30:(l,a,s)=>{s.r(a),s.d(a,{default:()=>G});s(2879);var c=s(9835),o=s(6970),e=(s(8550),s(8203)),t=s(1569),d=s(499),i=s(8339),m=s(9876),_=s(1862);const r={class:"flex items-center justify-between q-mb-lg"},n={class:"no-margin text-h6 text-bold"},v={class:"row q-col-gutter-md"},u={class:"col-12 col-md-3"},p=["src"],g={key:1,src:"https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"},w={class:"col-12 col-md-9"},b={class:"row q-col-gutter-md"},x=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"ФИО")],-1),h={class:"col-12 col-md-9"},y=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"Email")],-1),z={class:"col-12 col-md-9"},f=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"Телефон")],-1),k={class:"col-12 col-md-9"},q=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"Дневной доход сотрудника")],-1),Z={class:"col-12 col-md-9"},j=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"Дневной расход на сотрудника")],-1),W={class:"col-12 col-md-9"},C=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"Всего заработная плата сотрудника на руки")],-1),D={class:"col-12 col-md-9"},Q=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"Всего расходы организации на сотрудника")],-1),$={class:"col-12 col-md-9"},E=(0,c._)("div",{class:"col-12 col-md-3"},[(0,c._)("span",{class:"text-bold"},"Телеграм")],-1),T={class:"col-12 col-md-9"},A={__name:"detail",setup(l){(0,m.E)();const a=(0,i.yj)(),s=(0,d.iH)({});(0,c.wF)((async()=>{await A()}));const A=async()=>{console.log(a.params.id);const l=await(0,t.api)(`/api/user/user/${a.params.id}`);console.log(l.data),s.value=l.data};return(l,a)=>{const t=(0,c.up)("q-space"),d=(0,c.up)("q-avatar"),i=(0,c.up)("q-page");return(0,c.wg)(),(0,c.j4)(i,{padding:""},{default:(0,c.w5)((()=>[(0,c._)("div",r,[(0,c.Wm)(e.Z),(0,c._)("p",n,"Информация о пользователе ID "+(0,o.zw)(s.value.id),1),(0,c.Wm)(t),(0,c.Wm)(_.Z,{icon:"edit",color:"primary",label:"Редактировать пользователя",onClick:a[0]||(a[0]=a=>l.$router.push(`/user/edit/${s.value.id}`))})]),(0,c._)("div",v,[(0,c._)("div",u,[(0,c.Wm)(d,{size:"200px"},{default:(0,c.w5)((()=>[s.value.avatar?((0,c.wg)(),(0,c.iD)("img",{key:0,src:s.value.avatar},null,8,p)):((0,c.wg)(),(0,c.iD)("img",g))])),_:1})]),(0,c._)("div",w,[(0,c._)("div",b,[x,(0,c._)("div",h,(0,o.zw)(s.value.fio),1),y,(0,c._)("div",z,(0,o.zw)(s.value.email),1),f,(0,c._)("div",k,(0,o.zw)(s.value.phone),1),q,(0,c._)("div",Z,(0,o.zw)(s.value.daily_payment),1),j,(0,c._)("div",W,(0,o.zw)(s.value.daily_rashod),1),C,(0,c._)("div",D,(0,o.zw)(s.value.total_income),1),Q,(0,c._)("div",$,(0,o.zw)(s.value.total_outcome),1),E,(0,c._)("div",T,(0,o.zw)(s.value.telega_username),1)])])])])),_:1})}}};var F=s(9885),H=s(136),I=s(1357),P=s(9984),S=s.n(P);const B=A,G=B;S()(A,"components",{QPage:F.Z,QSpace:H.Z,QAvatar:I.Z})}}]);