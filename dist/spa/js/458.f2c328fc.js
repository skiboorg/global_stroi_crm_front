"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[458],{8550:(a,e,o)=>{o.d(e,{Z:()=>c});var l=o(9835);const n={__name:"AddButton",props:["label","icon","loading","color"],setup(a){return(e,o)=>{const n=(0,l.up)("q-btn");return e.auth.user.role?.permission?.can_add?((0,l.wg)(),(0,l.j4)(n,{key:0,"no-caps":"",unelevated:"",loading:a.loading,color:a.color?a.color:"primary",label:a.label,icon:a.icon?a.icon:"add"},null,8,["loading","color","label","icon"])):(0,l.kq)("",!0)}}};var t=o(8879),r=o(9984),s=o.n(r);const i=n,c=i;s()(n,"components",{QBtn:t.Z})},8203:(a,e,o)=>{o.d(e,{Z:()=>p});var l=o(9835);function n(a,e){const o=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)(o,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:e[0]||(e[0]=e=>a.$router.back())})}var t=o(1639),r=o(8879),s=o(9984),i=o.n(s);const c={},d=(0,t.Z)(c,[["render",n]]),p=d;i()(c,"components",{QBtn:r.Z})},8458:(a,e,o)=>{o.r(e),o.d(e,{default:()=>k});o(2879);var l=o(9835),n=o(6970),t=o(8550),r=o(499),s=o(1569),i=o(6928);o(8203);const c={class:"flex items-center justify-between q-mb-md"},d=(0,l._)("p",{class:"no-margin text-h6 text-bold"},"Формы показателей",-1),p={class:"text-bold"},u={__name:"forms",setup(a){const e=(0,i.t)(),o=[{name:"id",align:"left",label:"ID",field:a=>a.id,sortable:!0},{name:"name",align:"left",label:"Название",field:a=>a.name,sortable:!0},{name:"users",align:"left",label:"Кол-во пользователей",field:a=>a.for_users.length,sortable:!0}],u=((0,r.iH)(1),(0,r.iH)(!1)),m=(0,r.iH)({sortBy:"desc",descending:!1,page:1,rowsPerPage:15}),g=(0,r.iH)([]);(0,r.iH)(5);(0,l.wF)((async()=>{console.log(e.user.id),await b()}));const b=async()=>{u.value=!u.value;const a=await(0,s.api)("/api/form/stress_form");console.log(a.data),g.value=a.data,u.value=!u.value},w=async()=>{await(0,s.api)("/api/form/test")};return(a,e)=>{const r=(0,l.up)("q-space"),s=(0,l.up)("q-th"),i=(0,l.up)("q-tr"),b=(0,l.up)("q-td"),f=(0,l.up)("q-table"),_=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(_,{padding:""},{default:(0,l.w5)((()=>[(0,l._)("div",c,[d,(0,l.Wm)(r),(0,l.Wm)(t.Z,{icon:"add",color:"primary","no-caps":"",unelevated:"",onClick:w,label:"Тест"}),(0,l.Wm)(t.Z,{icon:"add",color:"primary","no-caps":"",unelevated:"",onClick:e[0]||(e[0]=e=>a.$router.push("/form/stress_form")),label:"Добавить форму"})]),(0,l.Wm)(f,{flat:"",rows:g.value,columns:o,"row-key":"name","table-header-class":"table-header","hide-pagination":"",pagination:m.value,"onUpdate:pagination":e[1]||(e[1]=a=>m.value=a),loading:u.value,class:"q-mb-md"},{header:(0,l.w5)((a=>[(0,l.Wm)(i,{props:a,class:"bg-grey-2"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.cols,(e=>((0,l.wg)(),(0,l.j4)(s,{key:e.name,props:a},{default:(0,l.w5)((()=>[(0,l._)("span",p,(0,n.zw)(e.label),1)])),_:2},1032,["props"])))),128)),(0,l.Wm)(s,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,l.w5)((a=>[(0,l.Wm)(i,{props:a},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.cols,(e=>((0,l.wg)(),(0,l.j4)(b,{key:e.name,props:a},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,n.zw)(e.value),1)])),_:2},1032,["props"])))),128)),(0,l.Wm)(b,{"auto-width":""},{default:(0,l.w5)((()=>[(0,l.Wm)(t.Z,{flat:"",icon:"east",round:"",dense:"",to:`/form/forms/${a.row.id}`},null,8,["to"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","pagination","loading"])])),_:1})}}};var m=o(9885),g=o(136),b=o(1746),w=o(1233),f=o(1682),_=o(7220),v=o(9984),h=o.n(v);const y=u,k=y;h()(u,"components",{QPage:m.Z,QSpace:g.Z,QTable:b.Z,QTr:w.Z,QTh:f.Z,QTd:_.Z})}}]);