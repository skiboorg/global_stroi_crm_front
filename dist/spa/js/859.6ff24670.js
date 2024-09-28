"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[859],{9859:(e,l,a)=>{a.r(l),a.d(l,{default:()=>K});var t=a(9835),u=a(6970),o=a(499),n=a(1569),s=(a(8550),a(1862),a(9876));const r=(0,t._)("br",null,null,-1),d=(0,t._)("br",null,null,-1),i=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),m=(0,t._)("br",null,null,-1),c=(0,t._)("br",null,null,-1),p=(0,t._)("br",null,null,-1),w=(0,t._)("br",null,null,-1),b=(0,t._)("div",{class:"flex items-center justify-between q-mb-md"},[(0,t._)("p",{class:"no-margin text-h6 text-bold"},"Оценки")],-1),f={class:"row q-col-gutter-md q-mb-lg"},v={class:"col-12 col-md-9"},g={class:"row items-center justify-end"},k={class:"row items-center justify-end"},W={class:"col-12 col-md-3"},q={class:"text-bold"},y={__name:"marks",setup(e){const l=(0,s.E)(),a=[{name:"username",align:"left",label:"ФИО",field:e=>e.user.fio,sortable:!0},{name:"middle_logins_mark",align:"left",label:"Количество усилий",field:e=>e.middle_logins_mark,sortable:!0},{name:"middle_task_mark",align:"left",label:"Качество усилий",field:e=>e.middle_task_mark,sortable:!0},{name:"middle_forms_mark",align:"left",label:"Операционные результаты",field:e=>e.middle_forms_mark,sortable:!0},{name:"total_mark",align:"left",label:"Общая оценка",field:e=>e.total_mark,sortable:!0}],y={sortBy:"desc",descending:!1,page:1,rowsPerPage:100},h=(0,o.iH)({user__id:null,created_at_gte:"",created_at_lte:""}),Q=(0,o.iH)([]),Z=(0,o.iH)([]),U=(0,o.iH)(!1),V=((0,o.iH)(null),(0,o.iH)({q:"",role__id:""}),async()=>{h.value.user__id?Q.value=Q.value.filter((e=>e.user.id===h.value.user__id)):await Y()});(0,t.wF)((async()=>{let e=new Date;e.setDate(e.getDate()-1),h.value.created_at_gte=e.toLocaleDateString().split(".").reverse().join("-"),h.value.created_at_lte=e.toLocaleDateString().split(".").reverse().join("-"),await D(),Z.value=await l.getUsers(null,!0)}));const D=async()=>{const e=await(0,n.api)(`/api/report/marks?created_at_gte=${h.value.created_at_gte}&created_at_lte=${h.value.created_at_lte}`);Q.value=e.data,h.value.user__id&&(Q.value=Q.value.filter((e=>e.user.id===h.value.user__id)))},x=async()=>{await D()},Y=async()=>{h.value={user__id:null,created_at_gte:"",created_at_lte:""},await D()};return(e,l)=>{const o=(0,t.up)("q-card-section"),n=(0,t.up)("q-card"),s=(0,t.up)("q-expansion-item"),D=(0,t.up)("q-item-label"),j=(0,t.up)("q-item-section"),H=(0,t.up)("q-item"),C=(0,t.up)("q-select"),P=(0,t.up)("q-btn"),I=(0,t.up)("q-date"),T=(0,t.up)("q-popup-proxy"),S=(0,t.up)("q-icon"),z=(0,t.up)("q-input"),M=(0,t.up)("q-th"),L=(0,t.up)("q-tr"),B=(0,t.up)("q-td"),E=(0,t.up)("q-table"),F=(0,t.up)("q-page"),K=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(F,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{"expand-separator":"",icon:"help",label:"Описание раздела",class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Оценки – это сводная ведомость оценок за вчерашний день."),r,d,(0,t.Uk)(" Общая оценка пользователя определяется путем сложения оценок за следующие показатели:"),i,_,(0,t.Uk)(" 1. Количество усилий (время, которое пользователь провел в системе) оценивается системой автоматически по количеству авторизаций в системе. Четыре авторизации оценка 5, три авторизации оценка 4, две авторизации оценка 3, меньше двух оценка 2"),m,(0,t.Uk)(" 2. Качество усилий (оценка выполненных задач пользователя деленное на их количество)"),c,(0,t.Uk)(" 3. Операционные результаты (оценка за выполнение операционных показателей)"),p,w,(0,t.Uk)(" Средняя оценка определяется путем сложения всех оценок и деления на их количество. Если общая оценка дробная, то округляется до целой по математическим правилам. ")])),_:1})])),_:1})])),_:1}),b,(0,t._)("div",f,[(0,t._)("div",v,[(0,t.Wm)(C,{class:"q-mb-xs",dense:"",outlined:"",modelValue:h.value.user__id,"onUpdate:modelValue":[l[0]||(l[0]=e=>h.value.user__id=e),V],loading:U.value,options:Z.value.filter((e=>e.role?.use_in_report)),"option-label":"fio",label:"Выберите пользователя","map-options":"","option-value":"id","emit-value":"","use-input":"",clearable:""},{option:(0,t.w5)((e=>[(0,t.Wm)(H,(0,u.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(j,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.opt.role?.name),1)])),_:2},1024),(0,t.Wm)(D,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Роль")])),_:1})])),_:2},1024),(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.opt.fio),1)])),_:2},1024),(0,t.Wm)(D,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"]),(0,t.Wm)(z,{class:"q-mb-xs",outlined:"",dense:"",modelValue:h.value.created_at_gte,"onUpdate:modelValue":l[2]||(l[2]=e=>h.value.created_at_gte=e),label:"Отчет с"},{append:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{modelValue:h.value.created_at_gte,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value.created_at_gte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",g,[(0,t.wy)((0,t.Wm)(P,{label:"Выбрать",color:"primary",flat:""},null,512),[[K]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(z,{outlined:"",dense:"",modelValue:h.value.created_at_lte,"onUpdate:modelValue":l[4]||(l[4]=e=>h.value.created_at_lte=e),label:"Отчет до"},{append:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{modelValue:h.value.created_at_lte,"onUpdate:modelValue":l[3]||(l[3]=e=>h.value.created_at_lte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",k,[(0,t.wy)((0,t.Wm)(P,{label:"Выбрать",color:"primary",flat:""},null,512),[[K]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",W,[(0,t.wy)((0,t.Wm)(P,{class:"q-mb-sm full-width",label:"Применить фильтр",color:"positive",onClick:x,unelevated:"","no-caps":""},null,512),[[K]]),(0,t.wy)((0,t.Wm)(P,{class:"full-width",label:"Сбросить фильтр",color:"dark",onClick:Y,unelevated:"","no-caps":""},null,512),[[K]])])]),(0,t.Wm)(E,{flat:"",rows:Q.value,columns:a,"row-key":"name","hide-pagination":"","table-header-class":"table-header",pagination:y},{header:(0,t.w5)((e=>[(0,t.Wm)(L,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(M,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",q,(0,u.zw)(l.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(L,{props:e},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(B,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",null,(0,u.zw)(l.value),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1})}}};var h=a(9885),Q=a(651),Z=a(4458),U=a(3190),V=a(6384),D=a(490),x=a(6749),Y=a(3115),j=a(3119),H=a(2857),C=a(2765),P=a(4939),I=a(8879),T=a(1746),S=a(1233),z=a(1682),M=a(7220),L=a(2146),B=a(9984),E=a.n(B);const F=y,K=F;E()(y,"components",{QPage:h.Z,QExpansionItem:Q.Z,QCard:Z.Z,QCardSection:U.Z,QSelect:V.Z,QItem:D.Z,QItemSection:x.Z,QItemLabel:Y.Z,QInput:j.Z,QIcon:H.Z,QPopupProxy:C.Z,QDate:P.Z,QBtn:I.Z,QTable:T.Z,QTr:S.Z,QTh:z.Z,QTd:M.Z}),E()(y,"directives",{ClosePopup:L.Z})}}]);