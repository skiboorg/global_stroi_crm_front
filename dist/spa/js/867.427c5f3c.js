"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[867],{8867:(t,l,a)=>{a.r(l),a.d(l,{default:()=>W});var e=a(9835),o=a(6970),u=a(8339),n=a(1569),s=a(499),d=a(8203);const i={class:"flex items-center justify-between q-mb-md"},m={class:"no-margin text-h6 text-bold"},c={class:"text-h6 text-bold"},_={class:"info-table q-mb-lg full-width"},r=(0,e._)("tr",null,[(0,e._)("td",{class:"text-bold"},"№"),(0,e._)("td",{class:"text-bold"},"Вопрос"),(0,e._)("td",{class:"text-bold"},"План"),(0,e._)("td",{class:"text-bold"},"Факт"),(0,e._)("td",{class:"text-bold"},"В процентах")],-1),p={key:0},w=(0,e._)("p",{class:"text-h6 text-bold"},"Оцените результат",-1),b=(0,e._)("p",{class:"text-h6 text-bold"},"Комментарий, почему такая оценка",-1),v={__name:"filled_stress_form",setup(t){const l=(0,u.yj)(),a=(0,u.tv)(),v=(0,s.iH)({}),f=(0,s.iH)({});(0,s.iH)(0);(0,e.wF)((async()=>{await g()}));const g=async()=>{const t=await(0,n.api)(`/api/form/stress_form_data/${l.params.uuid}`);console.log(t.data),v.value=t.data,f.value=v.value.data},k=async()=>{await n.api.patch(`/api/form/stress_form_data/${l.params.uuid}`,{rate:v.value.rate,comment:v.value.comment}),a.back()};return(t,l)=>{const a=(0,e.up)("q-tooltip"),u=(0,e.up)("q-rating"),n=(0,e.up)("q-input"),s=(0,e.up)("q-btn"),g=(0,e.up)("q-page");return(0,e.wg)(),(0,e.j4)(g,{padding:""},{default:(0,e.w5)((()=>[(0,e._)("div",i,[(0,e.Wm)(d.Z),(0,e._)("p",m,"Форма ID "+(0,o.zw)(v.value.id)+" от "+(0,o.zw)(new Date(v.value.created_at).toLocaleString()),1)]),(0,e._)("p",c,"Сотрудник "+(0,o.zw)(v.value.user?.fio),1),(0,e._)("table",_,[r,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(f.value,((t,l)=>((0,e.wg)(),(0,e.iD)("tr",{key:l},[(0,e._)("td",null,(0,o.zw)(l+1),1),(0,e._)("td",null,(0,o.zw)(t.label),1),(0,e._)("td",null,(0,o.zw)(t.plan_amount),1),(0,e._)("td",null,(0,o.zw)(t.fact_amount),1),(0,e._)("td",null,(0,o.zw)(t.percent_done),1)])))),128))]),v.value.is_done?((0,e.wg)(),(0,e.iD)("div",p,[w,(0,e.Wm)(u,{modelValue:v.value.rate,"onUpdate:modelValue":l[0]||(l[0]=t=>v.value.rate=t),size:"2em",max:5,class:"q-mb-md",color:"primary"},{"tip-1":(0,e.w5)((()=>[(0,e.Wm)(a,null,{default:(0,e.w5)((()=>[(0,e.Uk)("Очень плохо")])),_:1})])),"tip-2":(0,e.w5)((()=>[(0,e.Wm)(a,null,{default:(0,e.w5)((()=>[(0,e.Uk)("Плохо")])),_:1})])),"tip-3":(0,e.w5)((()=>[(0,e.Wm)(a,null,{default:(0,e.w5)((()=>[(0,e.Uk)("Пойдет")])),_:1})])),"tip-4":(0,e.w5)((()=>[(0,e.Wm)(a,null,{default:(0,e.w5)((()=>[(0,e.Uk)("Хорошо")])),_:1})])),"tip-5":(0,e.w5)((()=>[(0,e.Wm)(a,null,{default:(0,e.w5)((()=>[(0,e.Uk)("Отлично")])),_:1})])),_:1},8,["modelValue"]),b,(0,e.Wm)(n,{modelValue:v.value.comment,"onUpdate:modelValue":l[1]||(l[1]=t=>v.value.comment=t),outlined:"",class:"q-mb-md",dense:""},null,8,["modelValue"]),v.value.rate?((0,e.wg)(),(0,e.j4)(s,{key:0,label:"Сохранить",onClick:k,"no-caps":"",unelevated:"",icon:"save",color:"positive"})):(0,e.kq)("",!0)])):(0,e.kq)("",!0)])),_:1})}}};var f=a(9885),g=a(1570),k=a(6858),x=a(3119),h=a(8879),q=a(9984),y=a.n(q);const z=v,W=z;y()(v,"components",{QPage:f.Z,QRating:g.Z,QTooltip:k.Z,QInput:x.Z,QBtn:h.Z})}}]);