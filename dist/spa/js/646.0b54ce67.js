"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[646],{646:(l,e,a)=>{a.r(e),a.d(e,{default:()=>j});a(2879);var o=a(9835),u=a(6970),t=a(499),n=a(1569),s=a(8550),i=a(2637),d=a(8227),m=a(9876),c=a(8203);const p={class:"flex items-center justify-between q-mb-md"},v=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Структура формы усилий",-1),r={key:0},_={key:0,class:"row q-col-gutter-md q-mb-md items-center"},b=(0,o._)("div",{class:"col-1"},"ID",-1),w=(0,o._)("div",{class:"col-3"}," Вопрос",-1),g=(0,o._)("div",{class:"col-1"},"План",-1),f=(0,o._)("div",{class:"col-1"},null,-1),q=[b,w,g,f],k={class:"col-1"},V={class:"col-3"},W={class:"col-1"},h={class:"col-1"},U={__name:"stress_form_structure",setup(l){const e=(0,m.E)(),a=(0,t.iH)([]),b=(0,t.iH)([]),w=(0,t.iH)(null),g=(0,t.iH)([]),f=(0,t.iH)(!1);(0,o.wF)((async()=>{g.value=await e.getUsers(null,!0)}));const U=()=>{a.value.push({label:null,plan_amount:null,fact_amount:0,percent_done:0})},Z=l=>{a.value.splice(l,1)},y=async()=>{f.value=!f.value;const l=await n.api.post("/api/form/stress_form",{default_data:a.value,name:w.value,for_users:b.value});(0,i.d)("positive","Форма сохранена"),console.log(l.data),f.value=!f.value},C=(0,o.Fl)((()=>{let l=!1;return a.value.forEach((e=>{!e.label&&(l=!0),!e.plan_amount&&(l=!0)})),l})),H=(l,e)=>{e((async()=>{if(l){f.value=!f.value;const e=await(0,n.api)(`/api/user/user?q=${l}&page_size=10000`);g.value=e.data,f.value=!f.value}}))};return(l,e)=>{const t=(0,o.up)("q-input"),n=(0,o.up)("q-item-label"),i=(0,o.up)("q-item-section"),m=(0,o.up)("q-item"),Q=(0,o.up)("q-select"),D=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(D,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o.Wm)(c.Z),v]),(0,o.Wm)(t,{class:"q-mb-md",modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=l=>w.value=l),outlined:"",label:"Название формы"},null,8,["modelValue"]),w.value?((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(Q,{class:"q-mb-md",outlined:"",modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=l=>b.value=l),loading:f.value,options:g.value,"option-label":"fio",label:"Выберите пользователей","map-options":"","option-value":"id",multiple:"","use-chips":"","emit-value":"",onFilter:H,"use-input":"",clearable:""},{option:(0,o.w5)((l=>[(0,o.Wm)(m,(0,u.vs)((0,o.F4)(l.itemProps)),{default:(0,o.w5)((()=>[(0,o.Wm)(i,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(l.opt.role?.name),1)])),_:2},1024),(0,o.Wm)(n,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Роль")])),_:1})])),_:2},1024),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(l.opt.fio),1)])),_:2},1024),(0,o.Wm)(n,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"]),a.value.length>0?((0,o.wg)(),(0,o.iD)("div",_,q)):(0,o.kq)("",!0),(0,o.Wm)(s.Z,{class:"q-mb-lg",label:"Добавить ряд",onClick:U}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,((l,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"row q-col-gutter-md q-mb-md items-center",key:e},[(0,o._)("div",k,(0,u.zw)(e+1),1),(0,o._)("div",V,[(0,o.Wm)(t,{outlined:"",dense:"",modelValue:l.label,"onUpdate:modelValue":e=>l.label=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,o._)("div",W,[(0,o.Wm)(t,{outlined:"",dense:"",modelValue:l.plan_amount,"onUpdate:modelValue":e=>l.plan_amount=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,o._)("div",h,[(0,o.Wm)(d.Z,{onConfirm:l=>Z(e)},null,8,["onConfirm"])])])))),128)),a.value.length>0?((0,o.wg)(),(0,o.j4)(s.Z,{key:1,loading:f.value,label:"Сохранить форму",icon:"save",disable:C.value,onClick:y,color:"positive"},null,8,["loading","disable"])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])),_:1})}}};var Z=a(9885),y=a(3119),C=a(6384),H=a(490),Q=a(6749),D=a(3115),I=a(9984),z=a.n(I);const F=U,j=F;z()(U,"components",{QPage:Z.Z,QInput:y.Z,QSelect:C.Z,QItem:H.Z,QItemSection:Q.Z,QItemLabel:D.Z})}}]);