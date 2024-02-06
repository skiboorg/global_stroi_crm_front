"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[2],{2637:(e,l,a)=>{a.d(l,{d:()=>t});var o=a(6827),n=a(8346);function t(e,l){o.Z.create({message:l,html:!0,color:e,position:n.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>r});var o=a(9835);const n={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),i=a(9984),u=a.n(i);const d=n,r=d;u()(n,"components",{QBtn:t.Z})},8203:(e,l,a)=>{a.d(l,{Z:()=>c});var o=a(9835);function n(e,l){const a=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(a,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:l[0]||(l[0]=l=>e.$router.back())})}var t=a(1639),i=a(8879),u=a(9984),d=a.n(u);const r={},s=(0,t.Z)(r,[["render",n]]),c=s;d()(r,"components",{QBtn:i.Z})},4139:(e,l,a)=>{a.d(l,{Z:()=>b});var o=a(9835),n=a(499);const t={class:"row items-center justify-end"},i={__name:"DateInput",props:["label"],emits:["selected"],setup(e,{emit:l}){const a=(0,n.iH)(null),i=(0,n.iH)(null);return(l,n)=>{const u=(0,o.up)("q-btn"),d=(0,o.up)("q-date"),r=(0,o.up)("q-popup-proxy"),s=(0,o.up)("q-icon"),c=(0,o.up)("q-input"),p=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(c,{outlined:"",modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e),label:e.label},{append:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=e=>i.value=e),mask:"YYYY-MM-DD"},{default:(0,o.w5)((()=>[(0,o._)("div",t,[(0,o.wy)((0,o.Wm)(u,{onClick:n[0]||(n[0]=e=>l.$emit("selected",i.value)),label:"Выбрать",color:"primary",flat:""},null,512),[[p]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}}};var u=a(3119),d=a(2857),r=a(2765),s=a(2535),c=a(8879),p=a(2146),m=a(9984),v=a.n(m);const w=i,b=w;v()(i,"components",{QInput:u.Z,QIcon:d.Z,QPopupProxy:r.Z,QDate:s.Z,QBtn:c.Z}),v()(i,"directives",{ClosePopup:p.Z})},8227:(e,l,a)=>{a.d(l,{Z:()=>w});var o=a(9835),n=a(499);const t={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(e,{emit:l}){const a=(0,n.iH)(!1);return(l,n)=>{const t=(0,o.up)("q-btn"),i=(0,o.up)("q-card-section"),u=(0,o.up)("q-card-actions"),d=(0,o.up)("q-card"),r=(0,o.up)("q-dialog"),s=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",dense:"",loading:e.loading,color:e.color?e.color:"negative",label:e.label,onClick:n[0]||(n[0]=e=>a.value=!0),icon:e.icon?e.icon:"delete"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0),(0,o.Wm)(r,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:{width:"300px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"text-center text-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Вы уверены? ")])),_:1}),(0,o.Wm)(u,{align:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(t,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:n[1]||(n[1]=e=>l.$emit("confirm"))},null,512),[[s]]),(0,o.wy)((0,o.Wm)(t,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[s]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var i=a(8879),u=a(2074),d=a(4458),r=a(3190),s=a(1821),c=a(2146),p=a(9984),m=a.n(p);const v=t,w=v;m()(t,"components",{QBtn:i.Z,QDialog:u.Z,QCard:d.Z,QCardSection:r.Z,QCardActions:s.Z}),m()(t,"directives",{ClosePopup:c.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>r});var o=a(9835);const n={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),i=a(9984),u=a.n(i);const d=n,r=d;u()(n,"components",{QBtn:t.Z})},1002:(e,l,a)=>{a.r(l),a.d(l,{default:()=>M});var o=a(9835),n=a(6970),t=a(499),i=a(1569),u=a(8550),d=a(1862),r=a(9876),s=a(4139),c=a(2637),p=a(8227);a(8203);const m={class:"flex items-center justify-between q-mb-md"},v=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Трудовые договора",-1),w={class:"row q-col-gutter-md q-mb-md"},b={class:"col-12 col-md-10"},_={class:"col-12 col-md-2"},g={class:"text-bold"},f=["innerHTML"],q={class:"q-gutter-md"},Z={__name:"employment_contracts",setup(e){(0,r.E)();const l=[{name:"inner_id",align:"left",label:"Номер",field:e=>e.inner_id,sortable:!0},{name:"date",align:"left",label:"Дата заключения",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"worker_fio",align:"left",label:"Ф.И.О сотрудника",field:e=>e.worker_fio,sortable:!0},{name:"period",align:"left",label:"Срок действия",field:e=>e.period,sortable:!0}],a=(0,t.iH)(!1),Z=((0,t.iH)(!1),(0,t.iH)({}),(0,t.iH)(null),["Бессрочный","1 мес","6 мес","1 год","Другое"]),k=(0,t.iH)({id:null,date:null,worker_fio:null,period:null}),y={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},W=(0,t.iH)(1),Q=(0,t.iH)(!1),V=(0,t.iH)([]),h=(0,t.iH)(5),C=((0,t.iH)(null),(0,t.iH)({q:""})),H=async()=>{console.log(W.value),await x()};(0,o.wF)((async()=>{await x()}));const x=async()=>{Q.value=!Q.value;const e=await(0,i.api)(`/api/catalog/employment_contract?page=${W.value}&q=${C.value.q}`);V.value=e.data.results,h.value=Math.ceil(e.data.count/15),Q.value=!Q.value},D=async e=>{await i.api.delete(`/api/catalog/employment_contract/${e}`),await x()},U=e=>{e?(k.value=e,k.value.date=k.value.date?new Date(k.value.date).toLocaleDateString():null):k.value={id:null,name:null,inner_id:null,date:null,sign_date:null,responsible_fio:null},a.value=!0},j=e=>{const l=e.split(".");return`${l[2]}-${l[1]}-${l[0]}`},B=async()=>{if(k.value.date&&(k.value.date=j(k.value.date)),k.value.id){await i.api.patch(`/api/catalog/employment_contract/${k.value.id}`,k.value);(0,c.d)("positive","Данные обновлены")}else{await i.api.post("/api/catalog/employment_contract",k.value);(0,c.d)("positive","Создан")}await x(),a.value=!1},$=e=>{k.value.date=new Date(e).toLocaleDateString()};return(e,t)=>{const i=(0,o.up)("q-space"),r=(0,o.up)("q-input"),c=(0,o.up)("q-btn"),j=(0,o.up)("q-th"),P=(0,o.up)("q-tr"),S=(0,o.up)("q-td"),T=(0,o.up)("q-table"),Y=(0,o.up)("q-pagination"),L=(0,o.up)("q-page"),M=(0,o.up)("q-select"),I=(0,o.up)("q-card-section"),A=(0,o.up)("q-card-actions"),E=(0,o.up)("q-form"),F=(0,o.up)("q-card"),K=(0,o.up)("q-dialog"),z=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(L,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",m,[v,(0,o.Wm)(i),(0,o.Wm)(u.Z,{icon:"add",label:"Добавить",onClick:t[0]||(t[0]=e=>U(null))})]),(0,o._)("div",w,[(0,o._)("div",b,[(0,o.Wm)(r,{dense:"",modelValue:C.value.q,"onUpdate:modelValue":t[1]||(t[1]=e=>C.value.q=e),label:"Поиск по ФИО сотрудника, сроку действия",outlined:""},null,8,["modelValue"])]),(0,o._)("div",_,[(0,o.Wm)(c,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:x})])]),(0,o.Wm)(T,{flat:"",rows:V.value,columns:l,"row-key":"name","hide-pagination":"",pagination:y,"onUpdate:pagination":t[2]||(t[2]=e=>y=e),loading:Q.value,"table-header-class":"table-header"},{header:(0,o.w5)((e=>[(0,o.Wm)(P,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(j,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",g,(0,n.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(j,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((e=>[(0,o.Wm)(P,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(S,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",{innerHTML:l.value},null,8,f)])),_:2},1032,["props"])))),128)),(0,o.Wm)(S,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",q,[(0,o.Wm)(d.Z,{dense:"",onClick:l=>U(e.row)},null,8,["onClick"]),(0,o.Wm)(p.Z,{onConfirm:l=>D(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,o.Wm)(Y,{modelValue:W.value,"onUpdate:modelValue":[t[3]||(t[3]=e=>W.value=e),H],max:h.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,o.Wm)(K,{modelValue:a.value,"onUpdate:modelValue":t[8]||(t[8]=e=>a.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(F,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{onSubmit:B},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{class:"q-pb-none"},{default:(0,o.w5)((()=>[k.value.inner_id?((0,o.wg)(),(0,o.j4)(r,{key:0,class:"q-mb-md",outlined:"",dense:"",label:"Внутренний номер",modelValue:k.value.inner_id,"onUpdate:modelValue":t[4]||(t[4]=e=>k.value.inner_id=e)},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(s.Z,{dense:"",class:"q-mb-md",modelValue:k.value.date,"onUpdate:modelValue":t[5]||(t[5]=e=>k.value.date=e),label:"Дата заключения",onSelected:$},null,8,["modelValue"]),(0,o.Wm)(r,{class:"q-mb-md",outlined:"",dense:"",label:"Ф.И.О сотрудника",modelValue:k.value.worker_fio,"onUpdate:modelValue":t[6]||(t[6]=e=>k.value.worker_fio=e)},null,8,["modelValue"]),(0,o.Wm)(M,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:k.value.period,"onUpdate:modelValue":t[7]||(t[7]=e=>k.value.period=e),options:Z,label:"Срок действия"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(A,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,o.wy)((0,o.Wm)(c,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[z]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var k=a(9885),y=a(136),W=a(3119),Q=a(8879),V=a(1746),h=a(1233),C=a(1682),H=a(7220),x=a(996),D=a(2074),U=a(4458),j=a(8326),B=a(3190),$=a(6384),P=a(1821),S=a(2146),T=a(9984),Y=a.n(T);const L=Z,M=L;Y()(Z,"components",{QPage:k.Z,QSpace:y.Z,QInput:W.Z,QBtn:Q.Z,QTable:V.Z,QTr:h.Z,QTh:C.Z,QTd:H.Z,QPagination:x.Z,QDialog:D.Z,QCard:U.Z,QForm:j.Z,QCardSection:B.Z,QSelect:$.Z,QCardActions:P.Z}),Y()(Z,"directives",{ClosePopup:S.Z})}}]);