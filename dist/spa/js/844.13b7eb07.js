"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[844],{5844:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});var t=l(9835),o=l(6970),n=l(499),s=l(1569),i=l(6928);const r=(0,t._)("div",{class:"flex items-center justify-between q-mb-md"},[(0,t._)("p",{class:"no-margin text-h6 text-bold"},"Формы усилий")],-1),d={class:"text-bold"},u={key:0},p={key:1},c={key:2},m=(0,t._)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,t._)("path",{d:"M5.46967 17.4702C5.17678 17.7631 5.17678 18.2379 5.46967 18.5308C5.76256 18.8237 6.23744 18.8237 6.53033 18.5308L5.46967 17.4702ZM6.53033 18.5308L18.5303 6.53082L17.4697 5.47016L5.46967 17.4702L6.53033 18.5308Z",fill:"#131119"}),(0,t._)("path",{d:"M9 6.00049H18V15.0005",stroke:"#131119","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),g={__name:"stress_forms_for_user",setup(e){const a=(0,i.t)(),l=[{name:"id",align:"left",label:"ID",field:e=>e.id,sortable:!0},{name:"created_at",align:"left",label:"Создана",field:e=>new Date(e.created_at).toLocaleString(),sortable:!0},{name:"dead_line",align:"left",label:"Крайний срок заполнения",field:e=>new Date(e.dead_line).toLocaleString(),sortable:!0},{name:"is_done",align:"left",label:"Заполнена",field:e=>e.is_done,sortable:!0},{name:"is_time_left",align:"left",label:"Просрочена",field:e=>e.is_time_left,sortable:!0},{name:"mark",align:"left",label:"Оценка",field:e=>e.mark?e.mark:"Нет оценки",sortable:!0},{name:"comment",align:"left",label:"Коментарий",field:e=>e.admin_feedback?"Есть коментарий":"Нет коментария",sortable:!0}],g=(0,n.iH)(1),_=(0,n.iH)(!1),w=(0,n.iH)({sortBy:"desc",descending:!1,page:1,rowsPerPage:15}),f=(0,n.iH)([]),b=(0,n.iH)(5);(0,t.wF)((async()=>{console.log(a.user.id),await v()}));const v=async()=>{_.value=!_.value;const e=await(0,s.api)(`/api/form/stress_form_data?user_id=${a.user.id}&page=${g.value}`);console.log(e.data),f.value=e.data.results,b.value=e.data.count/15,_.value=!_.value},k=async()=>{console.log(g.value),await v()};return(e,a)=>{const n=(0,t.up)("q-th"),s=(0,t.up)("q-tr"),i=(0,t.up)("q-icon"),v=(0,t.up)("q-td"),h=(0,t.up)("q-btn"),y=(0,t.up)("q-table"),x=(0,t.up)("q-pagination"),q=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(q,{padding:""},{default:(0,t.w5)((()=>[r,(0,t.Wm)(y,{flat:"",rows:f.value,columns:l,"row-key":"name","table-header-class":"table-header","hide-pagination":"",pagination:w.value,"onUpdate:pagination":a[0]||(a[0]=e=>w.value=e),loading:_.value,class:"q-mb-md"},{header:(0,t.w5)((e=>[(0,t.Wm)(s,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(n,{key:a.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",d,(0,o.zw)(a.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(n,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(s,{props:e},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(v,{key:a.name,props:e},{default:(0,t.w5)((()=>["is_done"===a.name?((0,t.wg)(),(0,t.iD)("span",u,[a.value?((0,t.wg)(),(0,t.j4)(i,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(i,{key:1,name:"close",size:"20px",color:"negative"}))])):"is_time_left"===a.name?((0,t.wg)(),(0,t.iD)("span",p,[a.value?((0,t.wg)(),(0,t.j4)(i,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(i,{key:1,name:"close",size:"20px",color:"negative"}))])):((0,t.wg)(),(0,t.iD)("span",c,(0,o.zw)(a.value),1))])),_:2},1032,["props"])))),128)),(0,t.Wm)(v,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{flat:"",round:"",dense:"",to:`/form/user_stress_form/${e.row.uuid}`},{default:(0,t.w5)((()=>[m])),_:2},1032,["to"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","pagination","loading"]),(0,t.Wm)(x,{modelValue:g.value,"onUpdate:modelValue":[a[1]||(a[1]=e=>g.value=e),k],max:b.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1})}}};var _=l(9885),w=l(1746),f=l(1233),b=l(1682),v=l(7220),k=l(2857),h=l(8879),y=l(996),x=l(9984),q=l.n(x);const Z=g,j=Z;q()(g,"components",{QPage:_.Z,QTable:w.Z,QTr:f.Z,QTh:b.Z,QTd:v.Z,QIcon:k.Z,QBtn:h.Z,QPagination:y.Z})}}]);