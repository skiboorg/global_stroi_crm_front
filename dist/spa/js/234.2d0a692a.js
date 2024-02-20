"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[234],{2637:(l,e,a)=>{a.d(e,{d:()=>t});var o=a(6827),n=a(8346);function t(l,e){o.Z.create({message:e,html:!0,color:l,position:n.Z.lt.sm?"bottom":"bottom-right"})}},8550:(l,e,a)=>{a.d(e,{Z:()=>c});var o=a(9835);const n={__name:"AddButton",props:["label","icon","loading","color"],setup(l){return(e,a)=>{const n=(0,o.up)("q-btn");return e.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",loading:l.loading,color:l.color?l.color:"primary",label:l.label,icon:l.icon?l.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const s=n,c=s;i()(n,"components",{QBtn:t.Z})},8203:(l,e,a)=>{a.d(e,{Z:()=>r});var o=a(9835);function n(l,e){const a=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(a,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:e[0]||(e[0]=e=>l.$router.back())})}var t=a(1639),u=a(8879),i=a(9984),s=a.n(i);const c={},d=(0,t.Z)(c,[["render",n]]),r=d;s()(c,"components",{QBtn:u.Z})},8227:(l,e,a)=>{a.d(e,{Z:()=>_});var o=a(9835),n=a(499);const t={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(l,{emit:e}){const a=(0,n.iH)(!1);return(e,n)=>{const t=(0,o.up)("q-btn"),u=(0,o.up)("q-card-section"),i=(0,o.up)("q-card-actions"),s=(0,o.up)("q-card"),c=(0,o.up)("q-dialog"),d=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",dense:"",loading:l.loading,color:l.color?l.color:"negative",label:l.label,onClick:n[0]||(n[0]=l=>a.value=!0),icon:l.icon?l.icon:"delete"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0),(0,o.Wm)(c,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=l=>a.value=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{style:{width:"300px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"text-center text-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Вы уверены? ")])),_:1}),(0,o.Wm)(i,{align:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(t,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:n[1]||(n[1]=l=>e.$emit("confirm"))},null,512),[[d]]),(0,o.wy)((0,o.Wm)(t,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[d]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var u=a(8879),i=a(2074),s=a(4458),c=a(3190),d=a(1821),r=a(2146),m=a(9984),p=a.n(m);const v=t,_=v;p()(t,"components",{QBtn:u.Z,QDialog:i.Z,QCard:s.Z,QCardSection:c.Z,QCardActions:d.Z}),p()(t,"directives",{ClosePopup:r.Z})},1234:(l,e,a)=>{a.r(e),a.d(e,{default:()=>z});a(2879);var o=a(9835),n=a(6970),t=a(499),u=a(1569),i=a(8550),s=a(2637),c=a(8227),d=a(9876),r=a(8203),m=a(8339);const p={class:"flex items-center justify-between q-mb-md"},v=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Структура формы усилий",-1),_={key:0},b={key:0,class:"row q-col-gutter-md q-mb-md items-center"},g=(0,o._)("div",{class:"col-1"},"ID",-1),w=(0,o._)("div",{class:"col-3"}," Вопрос",-1),f=(0,o._)("div",{class:"col-1"},"План",-1),q=(0,o._)("div",{class:"col-1"},null,-1),k=[g,w,f,q],Z={class:"col-1"},W={class:"col-3"},h={class:"col-1"},y={class:"col-1"},V={__name:"form",setup(l){const e=(0,d.E)(),a=(0,m.yj)(),g=(0,m.tv)(),w=(0,t.iH)([]),f=(0,t.iH)([]),q=(0,t.iH)(null),V=(0,t.iH)([]),Q=(0,t.iH)(!1);(0,o.wF)((async()=>{await C(),V.value=await e.getUsers()}));const C=async()=>{const l=await(0,u.api)(`/api/form/stress_form/${a.params.id}`);q.value=l.data.name,w.value=l.data.default_data,f.value=l.data.for_users},U=()=>{w.value.push({label:null,plan_amount:null,fact_amount:0,percent_done:0})},D=async()=>{await u.api.delete(`/api/form/stress_form/${a.params.id}`),g.push("/form/forms")},H=l=>{w.value.splice(l,1)},j=async()=>{Q.value=!Q.value;const l=await u.api.patch(`/api/form/stress_form/${a.params.id}`,{default_data:w.value,name:q.value,for_users:f.value});(0,s.d)("positive","Форма обновлена"),console.log(l.data),Q.value=!Q.value},x=(0,o.Fl)((()=>{let l=!1;return w.value.forEach((e=>{!e.label&&(l=!0),!e.plan_amount&&(l=!0)})),l})),$=(l,e)=>{e((async()=>{if(l){Q.value=!Q.value;const e=await(0,u.api)(`/api/user/user?q=${l}&page_size=10000`);V.value=e.data,Q.value=!Q.value}}))};return(l,e)=>{const a=(0,o.up)("q-space"),t=(0,o.up)("q-input"),u=(0,o.up)("q-item-label"),s=(0,o.up)("q-item-section"),d=(0,o.up)("q-item"),m=(0,o.up)("q-select"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o.Wm)(r.Z),v,(0,o.Wm)(a),(0,o.Wm)(c.Z,{onConfirm:D,label:"Удалить форму"})]),(0,o.Wm)(t,{class:"q-mb-md",modelValue:q.value,"onUpdate:modelValue":e[0]||(e[0]=l=>q.value=l),outlined:"",label:"Название формы"},null,8,["modelValue"]),q.value?((0,o.wg)(),(0,o.iD)("div",_,[(0,o.Wm)(m,{class:"q-mb-md",outlined:"",modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=l=>f.value=l),loading:Q.value,options:V.value,"option-label":"fio",label:"Выберите пользователей","map-options":"","option-value":"id",multiple:"","use-chips":"","emit-value":"",onFilter:$,"use-input":"",clearable:""},{option:(0,o.w5)((l=>[(0,o.Wm)(d,(0,n.vs)((0,o.F4)(l.itemProps)),{default:(0,o.w5)((()=>[(0,o.Wm)(s,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(l.opt.role?.name),1)])),_:2},1024),(0,o.Wm)(u,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Роль")])),_:1})])),_:2},1024),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(l.opt.fio),1)])),_:2},1024),(0,o.Wm)(u,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"]),w.value.length>0?((0,o.wg)(),(0,o.iD)("div",b,k)):(0,o.kq)("",!0),(0,o.Wm)(i.Z,{class:"q-mb-lg",label:"Добавить ряд",onClick:U}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(w.value,((l,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"row q-col-gutter-md q-mb-md items-center",key:e},[(0,o._)("div",Z,(0,n.zw)(e+1),1),(0,o._)("div",W,[(0,o.Wm)(t,{outlined:"",dense:"",modelValue:l.label,"onUpdate:modelValue":e=>l.label=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,o._)("div",h,[(0,o.Wm)(t,{outlined:"",dense:"",modelValue:l.plan_amount,"onUpdate:modelValue":e=>l.plan_amount=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,o._)("div",y,[(0,o.Wm)(c.Z,{onConfirm:l=>H(e)},null,8,["onConfirm"])])])))),128)),w.value.length>0?((0,o.wg)(),(0,o.j4)(i.Z,{key:1,loading:Q.value,label:"Сохранить форму",icon:"save",disable:x.value,onClick:j,color:"positive"},null,8,["loading","disable"])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])),_:1})}}};var Q=a(9885),C=a(136),U=a(3119),D=a(6384),H=a(490),j=a(6749),x=a(3115),$=a(9984),B=a.n($);const I=V,z=I;B()(V,"components",{QPage:Q.Z,QSpace:C.Z,QInput:U.Z,QSelect:D.Z,QItem:H.Z,QItemSection:j.Z,QItemLabel:x.Z})}}]);