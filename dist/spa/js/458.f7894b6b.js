"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[458],{8458:(a,e,l)=>{l.r(e),l.d(e,{default:()=>Z});l(2879);var o=l(9835),s=l(6970),t=l(8550),n=l(499),r=l(1569),i=l(6928),p=(l(8203),l(1375));const u={class:"flex items-center justify-between q-mb-md"},d=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Формы показателей",-1),m={class:"text-bold"},c={__name:"forms",setup(a){const e=(0,i.t)(),l=[{name:"id",align:"left",label:"ID",field:a=>a.id,sortable:!0},{name:"name",align:"left",label:"Название",field:a=>a.name,sortable:!0},{name:"users",align:"left",label:"Кол-во пользователей",field:a=>a.for_users.length,sortable:!0}],c=((0,n.iH)(1),(0,n.iH)(!1)),g=(0,n.iH)({sortBy:"desc",descending:!1,page:1,rowsPerPage:15}),w=(0,n.iH)([]);(0,n.iH)(5);(0,o.wF)((async()=>{console.log(e.user.id),await f()}));const f=async()=>{c.value=!c.value;const a=await(0,r.api)("/api/form/stress_form");console.log(a.data),w.value=a.data,c.value=!c.value};return(a,e)=>{const n=(0,o.up)("q-space"),r=(0,o.up)("q-th"),i=(0,o.up)("q-tr"),f=(0,o.up)("q-td"),b=(0,o.up)("q-table"),_=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(_,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p.Z),(0,o._)("div",u,[d,(0,o.Wm)(n),(0,o.Wm)(t.Z,{icon:"add",color:"primary","no-caps":"",unelevated:"",onClick:e[0]||(e[0]=e=>a.$router.push("/form/stress_form")),label:"Добавить"})]),(0,o.Wm)(b,{flat:"",rows:w.value,columns:l,"row-key":"name","table-header-class":"table-header","hide-pagination":"",pagination:g.value,"onUpdate:pagination":e[1]||(e[1]=a=>g.value=a),loading:c.value,class:"q-mb-md"},{header:(0,o.w5)((a=>[(0,o.Wm)(i,{props:a,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cols,(e=>((0,o.wg)(),(0,o.j4)(r,{key:e.name,props:a},{default:(0,o.w5)((()=>[(0,o._)("span",m,(0,s.zw)(e.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(r,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((a=>[(0,o.Wm)(i,{props:a},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cols,(e=>((0,o.wg)(),(0,o.j4)(f,{key:e.name,props:a},{default:(0,o.w5)((()=>[(0,o._)("span",null,(0,s.zw)(e.value),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(f,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o.Wm)(t.Z,{flat:"",icon:"east",round:"",dense:"",to:`/form/forms/${a.row.id}`},null,8,["to"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","pagination","loading"])])),_:1})}}};var g=l(9885),w=l(136),f=l(1746),b=l(1233),_=l(1682),h=l(7220),v=l(9984),y=l.n(v);const W=c,Z=W;y()(c,"components",{QPage:g.Z,QSpace:w.Z,QTable:f.Z,QTr:b.Z,QTh:_.Z,QTd:h.Z})}}]);