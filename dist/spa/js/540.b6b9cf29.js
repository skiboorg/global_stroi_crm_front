"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[540],{2637:(e,l,a)=>{a.d(l,{d:()=>t});var o=a(6827),n=a(8346);function t(e,l){o.Z.create({message:l,html:!0,color:e,position:n.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>s});var o=a(9835);const n={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=n,s=d;i()(n,"components",{QBtn:t.Z})},4139:(e,l,a)=>{a.d(l,{Z:()=>g});var o=a(9835),n=a(499);const t={class:"row items-center justify-end"},u={__name:"DateInput",props:["label"],emits:["selected"],setup(e,{emit:l}){const a=(0,n.iH)(null),u=(0,n.iH)(null);return(l,n)=>{const i=(0,o.up)("q-btn"),d=(0,o.up)("q-date"),s=(0,o.up)("q-popup-proxy"),r=(0,o.up)("q-icon"),c=(0,o.up)("q-input"),m=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(c,{outlined:"",modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e),label:e.label},{append:(0,o.w5)((()=>[(0,o.Wm)(r,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=e=>u.value=e),mask:"YYYY-MM-DD"},{default:(0,o.w5)((()=>[(0,o._)("div",t,[(0,o.wy)((0,o.Wm)(i,{onClick:n[0]||(n[0]=e=>l.$emit("selected",u.value)),label:"Выбрать",color:"primary",flat:""},null,512),[[m]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}}};var i=a(3119),d=a(2857),s=a(2765),r=a(2535),c=a(8879),m=a(2146),p=a(9984),v=a.n(p);const b=u,g=b;v()(u,"components",{QInput:i.Z,QIcon:d.Z,QPopupProxy:s.Z,QDate:r.Z,QBtn:c.Z}),v()(u,"directives",{ClosePopup:m.Z})},8227:(e,l,a)=>{a.d(l,{Z:()=>b});var o=a(9835),n=a(499);const t={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(e,{emit:l}){const a=(0,n.iH)(!1);return(l,n)=>{const t=(0,o.up)("q-btn"),u=(0,o.up)("q-card-section"),i=(0,o.up)("q-card-actions"),d=(0,o.up)("q-card"),s=(0,o.up)("q-dialog"),r=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",dense:"",loading:e.loading,color:e.color?e.color:"negative",label:e.label,onClick:n[0]||(n[0]=e=>a.value=!0),icon:e.icon?e.icon:"delete"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0),(0,o.Wm)(s,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=e=>a.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:{width:"300px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"text-center text-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Вы уверены? ")])),_:1}),(0,o.Wm)(i,{align:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(t,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:n[1]||(n[1]=e=>l.$emit("confirm"))},null,512),[[r]]),(0,o.wy)((0,o.Wm)(t,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[r]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var u=a(8879),i=a(2074),d=a(4458),s=a(3190),r=a(1821),c=a(2146),m=a(9984),p=a.n(m);const v=t,b=v;p()(t,"components",{QBtn:u.Z,QDialog:i.Z,QCard:d.Z,QCardSection:s.Z,QCardActions:r.Z}),p()(t,"directives",{ClosePopup:c.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>s});var o=a(9835);const n={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=n,s=d;i()(n,"components",{QBtn:t.Z})},5540:(e,l,a)=>{a.r(l),a.d(l,{default:()=>A});var o=a(9835),n=a(6970),t=a(499),u=a(1569),i=a(8550),d=a(1862),s=a(9876),r=a(4139),c=a(2637),m=a(8227);const p={class:"flex items-center justify-between q-mb-md"},v=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Исходящие ",-1),b={class:"row q-col-gutter-md q-mb-md"},g={class:"col-12 col-md-10"},_={class:"col-12 col-md-2"},f={class:"text-bold"},w=["innerHTML"],q={class:"q-gutter-md"},h={key:0},Z=["href"],V={__name:"outgoing",setup(e){(0,s.E)();const l=[{name:"inner_id",align:"left",label:"Номер договора",field:e=>e.inner_id,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"receiver",align:"left",label:"Получатель",field:e=>e.receiver,sortable:!0},{name:"send_method",align:"left",label:"Способ отправки",field:e=>e.send_method,sortable:!0},{name:"executor_fio",align:"left",label:"Ф.И.О исполнителя ",field:e=>e.executor_fio,sortable:!0},{name:"send_date",align:"left",label:"Дата отправки",field:e=>new Date(e.send_date).toLocaleDateString(),sortable:!0},{name:"file",align:"left",label:"Файл",field:e=>e.file?`<a href="${e.file}" target="_blank">Открыть</a>`:"Нет",sortable:!0}],a=(0,t.iH)(!1),V=((0,t.iH)(!1),(0,t.iH)({}),(0,t.iH)(null),["Почтой","Другое"]),W=(0,t.iH)({id:null,name:null,receiver:null,send_method:null,executor_fio:null,send_date:null,file:null}),y={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},Q=(0,t.iH)(1),k=(0,t.iH)(!1),x=(0,t.iH)([]),C=(0,t.iH)(5),H=(0,t.iH)(null),D=(0,t.iH)({q:""}),U=async()=>{console.log(Q.value),await B()};(0,o.wF)((async()=>{await B()}));const B=async()=>{k.value=!k.value;const e=await(0,u.api)(`/api/catalog/outgoing?page=${Q.value}&q=${D.value.q}`);x.value=e.data.results,C.value=Math.ceil(e.data.count/15),k.value=!k.value},S=async e=>{await u.api.delete(`/api/catalog/outgoing/${e}`),await B()},T=e=>{e?(W.value=e,W.value.send_date=W.value.send_date?new Date(W.value.send_date).toLocaleDateString():null):W.value={id:null,name:null,receiver:null,send_method:null,executor_fio:null,send_date:null},a.value=!0},j=async()=>{let e,l=new FormData;delete W.value.file;for(let[a,o]of Object.entries(W.value))l.append(a,JSON.stringify(o));H.value&&l.append("file",H.value),e=W.value.id?await(0,u.api)({method:"put",url:`/api/catalog/outgoing/${W.value.id}`,data:l,headers:{"Content-Type":"multipart/form-data"}}):await(0,u.api)({method:"post",url:"/api/catalog/outgoing",data:l,headers:{"Content-Type":"multipart/form-data"}}),(0,c.d)(e.data.success?"positive":"negative",e.data.message),a.value=!1,H.value=null},P=e=>{W.value.send_date=new Date(e).toLocaleDateString()},Y=async()=>{await B()};return(e,t)=>{const u=(0,o.up)("q-space"),s=(0,o.up)("q-input"),c=(0,o.up)("q-btn"),$=(0,o.up)("q-th"),L=(0,o.up)("q-tr"),M=(0,o.up)("q-td"),F=(0,o.up)("q-table"),I=(0,o.up)("q-pagination"),A=(0,o.up)("q-page"),z=(0,o.up)("q-select"),E=(0,o.up)("q-file"),K=(0,o.up)("q-card-section"),O=(0,o.up)("q-card-actions"),J=(0,o.up)("q-form"),N=(0,o.up)("q-card"),G=(0,o.up)("q-dialog"),R=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(A,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",p,[v,(0,o.Wm)(u),(0,o.Wm)(i.Z,{icon:"add",label:"Добавить",onClick:t[0]||(t[0]=e=>T(null))})]),(0,o._)("div",b,[(0,o._)("div",g,[(0,o.Wm)(s,{dense:"",modelValue:D.value.q,"onUpdate:modelValue":t[1]||(t[1]=e=>D.value.q=e),label:"Поиск по названию, номеру, получателю, исполнителю",outlined:""},null,8,["modelValue"])]),(0,o._)("div",_,[(0,o.Wm)(c,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:B})])]),(0,o.Wm)(F,{flat:"",rows:x.value,columns:l,"row-key":"name","hide-pagination":"",pagination:y,"onUpdate:pagination":t[2]||(t[2]=e=>y=e),loading:k.value,"table-header-class":"table-header"},{header:(0,o.w5)((e=>[(0,o.Wm)(L,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)($,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",f,(0,n.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)($,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((e=>[(0,o.Wm)(L,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(M,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",{innerHTML:l.value},null,8,w)])),_:2},1032,["props"])))),128)),(0,o.Wm)(M,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",q,[(0,o.Wm)(d.Z,{dense:"",onClick:l=>T(e.row)},null,8,["onClick"]),(0,o.Wm)(m.Z,{onConfirm:l=>S(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,o.Wm)(I,{modelValue:Q.value,"onUpdate:modelValue":[t[3]||(t[3]=e=>Q.value=e),U],max:C.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,o.Wm)(G,{modelValue:a.value,"onUpdate:modelValue":t[10]||(t[10]=e=>a.value=e),onBeforeHide:Y},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(J,{onSubmit:j},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{class:"q-pb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{outlined:"",dense:"",label:"Наименование и содержание документа",modelValue:W.value.name,"onUpdate:modelValue":t[4]||(t[4]=e=>W.value.name=e),"lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(s,{class:"q-mb-md",outlined:"",dense:"",label:"Получатель",modelValue:W.value.receiver,"onUpdate:modelValue":t[5]||(t[5]=e=>W.value.receiver=e)},null,8,["modelValue"]),(0,o.Wm)(r.Z,{dense:"",class:"q-mb-md",modelValue:W.value.send_date,"onUpdate:modelValue":t[6]||(t[6]=e=>W.value.send_date=e),label:"Дата отправки",onSelected:P},null,8,["modelValue"]),(0,o.Wm)(z,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:W.value.send_method,"onUpdate:modelValue":t[7]||(t[7]=e=>W.value.send_method=e),options:V,label:"Способ отправки"},null,8,["modelValue"]),(0,o.Wm)(s,{class:"q-mb-md",outlined:"",dense:"",label:"Ф.И.О исполнителя ",modelValue:W.value.executor_fio,"onUpdate:modelValue":t[8]||(t[8]=e=>W.value.executor_fio=e)},null,8,["modelValue"]),W.value.file?((0,o.wg)(),(0,o.iD)("p",h,[(0,o._)("a",{href:W.value.file,target:"_blank"},"Загруженный ранее файл",8,Z)])):(0,o.kq)("",!0),(0,o.Wm)(E,{class:"q-mb-md",outlined:"",dense:"",label:"Файл",modelValue:H.value,"onUpdate:modelValue":t[9]||(t[9]=e=>H.value=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(O,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,o.wy)((0,o.Wm)(c,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[R]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var W=a(9885),y=a(136),Q=a(3119),k=a(8879),x=a(1746),C=a(1233),H=a(1682),D=a(7220),U=a(996),B=a(2074),S=a(4458),T=a(8326),j=a(3190),P=a(6384),Y=a(9420),$=a(1821),L=a(2146),M=a(9984),F=a.n(M);const I=V,A=I;F()(V,"components",{QPage:W.Z,QSpace:y.Z,QInput:Q.Z,QBtn:k.Z,QTable:x.Z,QTr:C.Z,QTh:H.Z,QTd:D.Z,QPagination:U.Z,QDialog:B.Z,QCard:S.Z,QForm:T.Z,QCardSection:j.Z,QSelect:P.Z,QFile:Y.Z,QCardActions:$.Z}),F()(V,"directives",{ClosePopup:L.Z})}}]);