"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[540],{2637:(e,l,a)=>{a.d(l,{d:()=>t});var o=a(6827),n=a(8346);function t(e,l){o.Z.create({message:l,html:!0,color:e,position:n.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>s});var o=a(9835);const n={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=n,s=d;i()(n,"components",{QBtn:t.Z})},4139:(e,l,a)=>{a.d(l,{Z:()=>b});var o=a(9835),n=a(499);const t={class:"row items-center justify-end"},u={__name:"DateInput",props:["label"],emits:["selected"],setup(e,{emit:l}){const a=(0,n.iH)(null),u=(0,n.iH)(null);return(l,n)=>{const i=(0,o.up)("q-btn"),d=(0,o.up)("q-date"),s=(0,o.up)("q-popup-proxy"),c=(0,o.up)("q-icon"),r=(0,o.up)("q-input"),p=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(r,{outlined:"",modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e),label:e.label},{append:(0,o.w5)((()=>[(0,o.Wm)(c,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=e=>u.value=e),mask:"YYYY-MM-DD"},{default:(0,o.w5)((()=>[(0,o._)("div",t,[(0,o.wy)((0,o.Wm)(i,{onClick:n[0]||(n[0]=e=>l.$emit("selected",u.value)),label:"Выбрать",color:"primary",flat:""},null,512),[[p]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}}};var i=a(3119),d=a(2857),s=a(2765),c=a(2535),r=a(8879),p=a(2146),m=a(9984),v=a.n(m);const _=u,b=_;v()(u,"components",{QInput:i.Z,QIcon:d.Z,QPopupProxy:s.Z,QDate:c.Z,QBtn:r.Z}),v()(u,"directives",{ClosePopup:p.Z})},8227:(e,l,a)=>{a.d(l,{Z:()=>_});var o=a(9835),n=a(499);const t={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(e,{emit:l}){const a=(0,n.iH)(!1);return(l,n)=>{const t=(0,o.up)("q-btn"),u=(0,o.up)("q-card-section"),i=(0,o.up)("q-card-actions"),d=(0,o.up)("q-card"),s=(0,o.up)("q-dialog"),c=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",dense:"",loading:e.loading,color:e.color?e.color:"negative",label:e.label,onClick:n[0]||(n[0]=e=>a.value=!0),icon:e.icon?e.icon:"delete"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0),(0,o.Wm)(s,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:{width:"300px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"text-center text-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Вы уверены? ")])),_:1}),(0,o.Wm)(i,{align:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(t,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:n[1]||(n[1]=e=>l.$emit("confirm"))},null,512),[[c]]),(0,o.wy)((0,o.Wm)(t,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[c]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var u=a(8879),i=a(2074),d=a(4458),s=a(3190),c=a(1821),r=a(2146),p=a(9984),m=a.n(p);const v=t,_=v;m()(t,"components",{QBtn:u.Z,QDialog:i.Z,QCard:d.Z,QCardSection:s.Z,QCardActions:c.Z}),m()(t,"directives",{ClosePopup:r.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>s});var o=a(9835);const n={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=n,s=d;i()(n,"components",{QBtn:t.Z})},5540:(e,l,a)=>{a.r(l),a.d(l,{default:()=>M});var o=a(9835),n=a(6970),t=a(499),u=a(1569),i=a(8550),d=a(1862),s=a(9876),c=a(4139),r=a(2637),p=a(8227);const m={class:"flex items-center justify-between q-mb-md"},v=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Исходящие ",-1),_={class:"row q-col-gutter-md q-mb-md"},b={class:"col-12 col-md-10"},g={class:"col-12 col-md-2"},w={class:"text-bold"},f=["innerHTML"],q={class:"q-gutter-md"},Z={__name:"outgoing",setup(e){(0,s.E)();const l=[{name:"inner_id",align:"left",label:"Номер договора",field:e=>e.inner_id,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"receiver",align:"left",label:"Получатель",field:e=>e.receiver,sortable:!0},{name:"send_method",align:"left",label:"Способ отправки",field:e=>e.send_method,sortable:!0},{name:"executor_fio",align:"left",label:"Ф.И.О исполнителя ",field:e=>e.executor_fio,sortable:!0},{name:"send_date",align:"left",label:"Дата отправки",field:e=>new Date(e.send_date).toLocaleDateString(),sortable:!0}],a=(0,t.iH)(!1),Z=((0,t.iH)(!1),(0,t.iH)({}),(0,t.iH)(null),["Почтой","голубями","Другое"]),h=(0,t.iH)({id:null,name:null,receiver:null,send_method:null,executor_fio:null,send_date:null}),W={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},V=(0,t.iH)(1),y=(0,t.iH)(!1),Q=(0,t.iH)([]),k=(0,t.iH)(5),x=((0,t.iH)(null),(0,t.iH)({q:""})),C=async()=>{console.log(V.value),await H()};(0,o.wF)((async()=>{await H()}));const H=async()=>{y.value=!y.value;const e=await(0,u.api)(`/api/catalog/outgoing?page=${V.value}&q=${x.value.q}`);Q.value=e.data.results,k.value=Math.ceil(e.data.count/15),y.value=!y.value},D=async e=>{await u.api.delete(`/api/catalog/outgoing/${e}`),await H()},U=e=>{e?(h.value=e,h.value.send_date=h.value.send_date?new Date(h.value.send_date).toLocaleDateString():null):h.value={id:null,name:null,receiver:null,send_method:null,executor_fio:null,send_date:null},a.value=!0},B=async()=>{if(h.value.send_date){const e=h.value.send_date.split(".");h.value.send_date=`${e[2]}-${e[1]}-${e[0]}`}if(h.value.id){await u.api.patch(`/api/catalog/outgoing/${h.value.id}`,h.value);(0,r.d)("positive","Данные обновлены")}else{await u.api.post("/api/catalog/outgoing",h.value);(0,r.d)("positive","Создан")}await H(),a.value=!1},P=e=>{h.value.send_date=new Date(e).toLocaleDateString()};return(e,t)=>{const u=(0,o.up)("q-space"),s=(0,o.up)("q-input"),r=(0,o.up)("q-btn"),S=(0,o.up)("q-th"),$=(0,o.up)("q-tr"),j=(0,o.up)("q-td"),T=(0,o.up)("q-table"),Y=(0,o.up)("q-pagination"),L=(0,o.up)("q-page"),M=(0,o.up)("q-select"),I=(0,o.up)("q-card-section"),A=(0,o.up)("q-card-actions"),z=(0,o.up)("q-form"),E=(0,o.up)("q-card"),F=(0,o.up)("q-dialog"),K=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(L,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",m,[v,(0,o.Wm)(u),(0,o.Wm)(i.Z,{icon:"add",label:"Добавить",onClick:t[0]||(t[0]=e=>U(null))})]),(0,o._)("div",_,[(0,o._)("div",b,[(0,o.Wm)(s,{dense:"",modelValue:x.value.q,"onUpdate:modelValue":t[1]||(t[1]=e=>x.value.q=e),label:"Поиск по названию, номеру, получателю, исполнителю",outlined:""},null,8,["modelValue"])]),(0,o._)("div",g,[(0,o.Wm)(r,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:H})])]),(0,o.Wm)(T,{flat:"",rows:Q.value,columns:l,"row-key":"name","hide-pagination":"",pagination:W,"onUpdate:pagination":t[2]||(t[2]=e=>W=e),loading:y.value,"table-header-class":"table-header"},{header:(0,o.w5)((e=>[(0,o.Wm)($,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(S,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",w,(0,n.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(S,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((e=>[(0,o.Wm)($,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(j,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",{innerHTML:l.value},null,8,f)])),_:2},1032,["props"])))),128)),(0,o.Wm)(j,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",q,[(0,o.Wm)(d.Z,{dense:"",onClick:l=>U(e.row)},null,8,["onClick"]),(0,o.Wm)(p.Z,{onConfirm:l=>D(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,o.Wm)(Y,{modelValue:V.value,"onUpdate:modelValue":[t[3]||(t[3]=e=>V.value=e),C],max:k.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,o.Wm)(F,{modelValue:a.value,"onUpdate:modelValue":t[9]||(t[9]=e=>a.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(z,{onSubmit:B},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{class:"q-pb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{outlined:"",dense:"",label:"Наименование и содержание документа",modelValue:h.value.name,"onUpdate:modelValue":t[4]||(t[4]=e=>h.value.name=e),"lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(s,{class:"q-mb-md",outlined:"",dense:"",label:"Получатель",modelValue:h.value.receiver,"onUpdate:modelValue":t[5]||(t[5]=e=>h.value.receiver=e)},null,8,["modelValue"]),(0,o.Wm)(c.Z,{dense:"",class:"q-mb-md",modelValue:h.value.send_date,"onUpdate:modelValue":t[6]||(t[6]=e=>h.value.send_date=e),label:"Дата отправки",onSelected:P},null,8,["modelValue"]),(0,o.Wm)(M,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:h.value.send_method,"onUpdate:modelValue":t[7]||(t[7]=e=>h.value.send_method=e),options:Z,label:"Способ отправки"},null,8,["modelValue"]),(0,o.Wm)(s,{class:"q-mb-md",outlined:"",dense:"",label:"Ф.И.О исполнителя ",modelValue:h.value.executor_fio,"onUpdate:modelValue":t[8]||(t[8]=e=>h.value.executor_fio=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(A,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,o.wy)((0,o.Wm)(r,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[K]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var h=a(9885),W=a(136),V=a(3119),y=a(8879),Q=a(1746),k=a(1233),x=a(1682),C=a(7220),H=a(996),D=a(2074),U=a(4458),B=a(8326),P=a(3190),S=a(6384),$=a(1821),j=a(2146),T=a(9984),Y=a.n(T);const L=Z,M=L;Y()(Z,"components",{QPage:h.Z,QSpace:W.Z,QInput:V.Z,QBtn:y.Z,QTable:Q.Z,QTr:k.Z,QTh:x.Z,QTd:C.Z,QPagination:H.Z,QDialog:D.Z,QCard:U.Z,QForm:B.Z,QCardSection:P.Z,QSelect:S.Z,QCardActions:$.Z}),Y()(Z,"directives",{ClosePopup:j.Z})}}]);