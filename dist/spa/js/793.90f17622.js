"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[793],{8550:(a,l,e)=>{e.d(l,{Z:()=>c});var o=e(9835);const t={__name:"AddButton",props:["label","icon","loading","color"],setup(a){return(l,e)=>{const t=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",loading:a.loading,color:a.color?a.color:"primary",label:a.label,icon:a.icon?a.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var n=e(8879),r=e(9984),s=e.n(r);const i=t,c=i;s()(t,"components",{QBtn:n.Z})},8203:(a,l,e)=>{e.d(l,{Z:()=>p});var o=e(9835);function t(a,l){const e=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(e,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:l[0]||(l[0]=l=>a.$router.back())})}var n=e(1639),r=e(8879),s=e(9984),i=e.n(s);const c={},u=(0,n.Z)(c,[["render",t]]),p=u;i()(c,"components",{QBtn:r.Z})},3793:(a,l,e)=>{e.r(l),e.d(l,{default:()=>W});var o=e(9835),t=e(6970),n=e(499),r=e(1569),s=e(8339),i=(e(8550),e(8203));const c={class:"flex items-center q-mb-lg"},u={class:"no-margin text-h6 text-bold"},p={class:"row q-col-gutter-md"},d={class:"col-6"},m={class:"col-6"},g={class:"no-margin"},_={class:"no-margin"},b=(0,o._)("p",{class:"no-margin"},"Серийные номера на складе: ",-1),w={class:"q-mb-lg"},f=(0,o._)("p",{class:"text-h6"},"История",-1),v={class:"text-bold"},h={__name:"material",setup(a){const l=(0,s.yj)(),e=(0,n.iH)({}),h=[{name:"id",align:"left",label:"#",field:a=>a.id,sortable:!0},{name:"created_at",align:"left",label:"Дата",field:a=>new Date(a.created_at).toLocaleString(),sortable:!0},{name:"who_give",align:"left",label:"Передал",field:a=>a.who_give.fio,sortable:!0},{name:"who_get",align:"left",label:"Принял",field:a=>a.who_get.fio,sortable:!0},{name:"who_get",align:"left",label:"Кол-во",field:a=>a.amount,sortable:!0},{name:"give_serial_numbers",align:"left",label:"Серийные номера",field:a=>a.give_serial_numbers,sortable:!0}];(0,o.wF)((async()=>{await q()}));const q=async()=>{const a=await(0,r.api)(`/api/material_store/store_material/${l.params.id}?full=true`);e.value=a.data};return(a,l)=>{const n=(0,o.up)("q-img"),r=(0,o.up)("q-th"),s=(0,o.up)("q-tr"),q=(0,o.up)("q-td"),k=(0,o.up)("q-table"),y=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(y,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)(i.Z),(0,o._)("p",u,(0,t.zw)(e.value.name),1)]),(0,o._)("div",p,[(0,o._)("div",d,[(0,o.Wm)(n,{fit:"contain",ratio:16/9,src:e.value.image},null,8,["src"])]),(0,o._)("div",m,[(0,o._)("p",g,"Поступило на склад: "+(0,t.zw)(e.value.init_amount),1),(0,o._)("p",_,"Остаток на складе: "+(0,t.zw)(e.value.amount),1),b,(0,o._)("pre",w,(0,t.zw)(e.value.serial_numbers),1)])]),f,(0,o.Wm)(k,{flat:"",rows:e.value?.history,columns:h,"hide-pagination":"","table-header-class":"table-header","row-key":"id",selection:"multiple",class:"q-mb-lg"},{header:(0,o.w5)((a=>[(0,o.Wm)(s,{props:a,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cols,(l=>((0,o.wg)(),(0,o.j4)(r,{key:l.name,props:a},{default:(0,o.w5)((()=>[(0,o._)("span",v,(0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,o.w5)((a=>[(0,o.Wm)(s,{props:a},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cols,(l=>((0,o.wg)(),(0,o.j4)(q,{key:l.name,props:a},{default:(0,o.w5)((()=>[(0,o._)("pre",null,(0,t.zw)(l.value),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1})}}};var q=e(9885),k=e(335),y=e(1746),Z=e(1233),Q=e(1682),j=e(7220),z=e(9984),T=e.n(z);const x=h,W=x;T()(h,"components",{QPage:q.Z,QImg:k.Z,QTable:y.Z,QTr:Z.Z,QTh:Q.Z,QTd:j.Z})}}]);