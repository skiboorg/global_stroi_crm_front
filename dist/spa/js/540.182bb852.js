"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[540],{2637:(e,l,a)=>{a.d(l,{d:()=>t});var n=a(6827),o=a(8346);function t(e,l){n.Z.create({message:l,html:!0,color:e,position:o.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>s});var n=a(9835);const o={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const o=(0,n.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,n.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=o,s=d;i()(o,"components",{QBtn:t.Z})},4139:(e,l,a)=>{a.d(l,{Z:()=>_});var n=a(9835),o=a(499);const t={class:"row items-center justify-end"},u={__name:"DateInput",props:["label"],emits:["selected"],setup(e,{emit:l}){const a=(0,o.iH)(null),u=(0,o.iH)(null);return(l,o)=>{const i=(0,n.up)("q-btn"),d=(0,n.up)("q-date"),s=(0,n.up)("q-popup-proxy"),r=(0,n.up)("q-icon"),c=(0,n.up)("q-input"),m=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(c,{outlined:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value=e),label:e.label},{append:(0,n.w5)((()=>[(0,n.Wm)(r,{name:"event",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e),mask:"YYYY-MM-DD"},{default:(0,n.w5)((()=>[(0,n._)("div",t,[(0,n.wy)((0,n.Wm)(i,{onClick:o[0]||(o[0]=e=>l.$emit("selected",u.value)),label:"Выбрать",color:"primary",flat:""},null,512),[[m]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}}};var i=a(3119),d=a(2857),s=a(2765),r=a(2535),c=a(8879),m=a(2146),p=a(9984),v=a.n(p);const b=u,_=b;v()(u,"components",{QInput:i.Z,QIcon:d.Z,QPopupProxy:s.Z,QDate:r.Z,QBtn:c.Z}),v()(u,"directives",{ClosePopup:m.Z})},8227:(e,l,a)=>{a.d(l,{Z:()=>b});var n=a(9835),o=a(499);const t={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(e,{emit:l}){const a=(0,o.iH)(!1);return(l,o)=>{const t=(0,n.up)("q-btn"),u=(0,n.up)("q-card-section"),i=(0,n.up)("q-card-actions"),d=(0,n.up)("q-card"),s=(0,n.up)("q-dialog"),r=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l.auth.user.role?.permission?.can_add?((0,n.wg)(),(0,n.j4)(t,{key:0,"no-caps":"",unelevated:"",dense:"",loading:e.loading,color:e.color?e.color:"negative",label:e.label,onClick:o[0]||(o[0]=e=>a.value=!0),icon:e.icon?e.icon:"delete"},null,8,["loading","color","label","icon"])):(0,n.kq)("",!0),(0,n.Wm)(s,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{style:{width:"300px","max-width":"100vw"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"text-center text-bold"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Вы уверены? ")])),_:1}),(0,n.Wm)(i,{align:"center"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(t,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:o[1]||(o[1]=e=>l.$emit("confirm"))},null,512),[[r]]),(0,n.wy)((0,n.Wm)(t,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[r]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var u=a(8879),i=a(2074),d=a(4458),s=a(3190),r=a(1821),c=a(2146),m=a(9984),p=a.n(m);const v=t,b=v;p()(t,"components",{QBtn:u.Z,QDialog:i.Z,QCard:d.Z,QCardSection:s.Z,QCardActions:r.Z}),p()(t,"directives",{ClosePopup:c.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>s});var n=a(9835);const o={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const o=(0,n.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,n.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=o,s=d;i()(o,"components",{QBtn:t.Z})},5540:(e,l,a)=>{a.r(l),a.d(l,{default:()=>J});var n=a(9835),o=a(6970),t=a(499),u=a(1569),i=a(8550),d=a(1862),s=a(9876),r=a(4139),c=a(2637),m=a(8227);const p=(0,n._)("br",null,null,-1),v=(0,n._)("br",null,null,-1),b=(0,n._)("br",null,null,-1),_=(0,n._)("br",null,null,-1),g={class:"flex items-center justify-between q-mb-md"},f=(0,n._)("p",{class:"no-margin text-h6 text-bold"},"Исходящие ",-1),w={class:"row q-col-gutter-md q-mb-md"},q={class:"col-12 col-md-10"},h={class:"col-12 col-md-2"},Z={class:"text-bold"},W=["innerHTML"],V={class:"q-gutter-md"},y={key:0},k=["href"],Q={__name:"outgoing",setup(e){(0,s.E)();const l=[{name:"inner_id",align:"left",label:"Номер договора",field:e=>e.inner_id,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"receiver",align:"left",label:"Получатель",field:e=>e.receiver,sortable:!0},{name:"send_method",align:"left",label:"Способ отправки",field:e=>e.send_method,sortable:!0},{name:"executor_fio",align:"left",label:"Ф.И.О исполнителя ",field:e=>e.executor_fio,sortable:!0},{name:"send_date",align:"left",label:"Дата отправки",field:e=>new Date(e.send_date).toLocaleDateString(),sortable:!0},{name:"file",align:"left",label:"Файл",field:e=>e.file?`<a href="${e.file}" target="_blank">Открыть</a>`:"Нет",sortable:!0}],a=(0,t.iH)(!1),Q=((0,t.iH)(!1),(0,t.iH)({}),(0,t.iH)(null),["Почтой","Другое"]),x=(0,t.iH)({id:null,name:null,receiver:null,send_method:null,executor_fio:null,send_date:null,file:null}),C={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},H=(0,t.iH)(1),D=(0,t.iH)(!1),U=(0,t.iH)([]),B=(0,t.iH)(5),S=(0,t.iH)(null),T=(0,t.iH)({q:""}),j=async()=>{console.log(H.value),await P()};(0,n.wF)((async()=>{await P()}));const P=async()=>{D.value=!D.value;const e=await(0,u.api)(`/api/catalog/outgoing?page=${H.value}&q=${T.value.q}`);U.value=e.data.results,B.value=Math.ceil(e.data.count/15),D.value=!D.value},Y=async e=>{await u.api.delete(`/api/catalog/outgoing/${e}`),await P()},$=e=>{e?(x.value=e,x.value.send_date=x.value.send_date?new Date(x.value.send_date).toLocaleDateString():null):x.value={id:null,name:null,receiver:null,send_method:null,executor_fio:null,send_date:null},a.value=!0},I=async()=>{let e,l=new FormData;delete x.value.file;for(let[a,n]of Object.entries(x.value))l.append(a,JSON.stringify(n));S.value&&l.append("file",S.value),e=x.value.id?await(0,u.api)({method:"put",url:`/api/catalog/outgoing/${x.value.id}`,data:l,headers:{"Content-Type":"multipart/form-data"}}):await(0,u.api)({method:"post",url:"/api/catalog/outgoing",data:l,headers:{"Content-Type":"multipart/form-data"}}),(0,c.d)(e.data.success?"positive":"negative",e.data.message),a.value=!1,S.value=null},L=e=>{x.value.send_date=new Date(e).toLocaleDateString()},M=async()=>{await P()};return(e,t)=>{const u=(0,n.up)("q-card-section"),s=(0,n.up)("q-card"),c=(0,n.up)("q-expansion-item"),F=(0,n.up)("q-space"),A=(0,n.up)("q-input"),E=(0,n.up)("q-btn"),z=(0,n.up)("q-th"),K=(0,n.up)("q-tr"),O=(0,n.up)("q-td"),J=(0,n.up)("q-table"),N=(0,n.up)("q-pagination"),G=(0,n.up)("q-page"),R=(0,n.up)("q-select"),X=(0,n.up)("q-file"),ee=(0,n.up)("q-card-actions"),le=(0,n.up)("q-form"),ae=(0,n.up)("q-dialog"),ne=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(G,{padding:""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{"expand-separator":"",icon:"help",label:"Описание раздела",class:"q-mb-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" В данный раздел вносятся все документы организации, направляемые контрагентам и государственным органам, с обязательным указанием исходящего номера."),p,v,(0,n.Uk)(" Исходящий номер система создает автоматически, для составления документа укажите номер, следующий за последним номеров, указанным в системе (например, 02-04-24)."),b,_,(0,n.Uk)(" В течение 12 часов документ можно удалить, в этом случае создавая новый документ номер будет такой же как в удаленном документе. При создании исходящего документа, его электронный образ обязательно необходимо загрузить в систему, в противном случае, нужно будет удалить документ и создать его заново. ")])),_:1})])),_:1})])),_:1}),(0,n._)("div",g,[f,(0,n.Wm)(F),(0,n.Wm)(i.Z,{icon:"add",label:"Добавить",onClick:t[0]||(t[0]=e=>$(null))})]),(0,n._)("div",w,[(0,n._)("div",q,[(0,n.Wm)(A,{dense:"",modelValue:T.value.q,"onUpdate:modelValue":t[1]||(t[1]=e=>T.value.q=e),label:"Поиск по названию, номеру, получателю, исполнителю",outlined:""},null,8,["modelValue"])]),(0,n._)("div",h,[(0,n.Wm)(E,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:P})])]),(0,n.Wm)(J,{flat:"",rows:U.value,columns:l,"row-key":"name","hide-pagination":"",pagination:C,"onUpdate:pagination":t[2]||(t[2]=e=>C=e),loading:D.value,"table-header-class":"table-header"},{header:(0,n.w5)((e=>[(0,n.Wm)(K,{props:e,class:"bg-grey-2"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(l=>((0,n.wg)(),(0,n.j4)(z,{key:l.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",Z,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(z,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,n.w5)((e=>[(0,n.Wm)(K,{props:e},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(l=>((0,n.wg)(),(0,n.j4)(O,{key:l.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",{innerHTML:l.value},null,8,W)])),_:2},1032,["props"])))),128)),(0,n.Wm)(O,{"auto-width":""},{default:(0,n.w5)((()=>[(0,n._)("div",V,[(0,n.Wm)(d.Z,{dense:"",onClick:l=>$(e.row)},null,8,["onClick"]),(0,n.Wm)(m.Z,{onConfirm:l=>Y(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,n.Wm)(N,{modelValue:H.value,"onUpdate:modelValue":[t[3]||(t[3]=e=>H.value=e),j],max:B.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,n.Wm)(ae,{modelValue:a.value,"onUpdate:modelValue":t[10]||(t[10]=e=>a.value=e),onBeforeHide:M},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{style:{width:"700px","max-width":"100vw"}},{default:(0,n.w5)((()=>[(0,n.Wm)(le,{onSubmit:I},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"q-pb-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(A,{outlined:"",dense:"",label:"Наименование и содержание документа",modelValue:x.value.name,"onUpdate:modelValue":t[4]||(t[4]=e=>x.value.name=e),"lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,n.Wm)(A,{class:"q-mb-md",outlined:"",dense:"",label:"Получатель",modelValue:x.value.receiver,"onUpdate:modelValue":t[5]||(t[5]=e=>x.value.receiver=e)},null,8,["modelValue"]),(0,n.Wm)(r.Z,{dense:"",class:"q-mb-md",modelValue:x.value.send_date,"onUpdate:modelValue":t[6]||(t[6]=e=>x.value.send_date=e),label:"Дата отправки",onSelected:L},null,8,["modelValue"]),(0,n.Wm)(R,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:x.value.send_method,"onUpdate:modelValue":t[7]||(t[7]=e=>x.value.send_method=e),options:Q,label:"Способ отправки"},null,8,["modelValue"]),(0,n.Wm)(A,{class:"q-mb-md",outlined:"",dense:"",label:"Ф.И.О исполнителя ",modelValue:x.value.executor_fio,"onUpdate:modelValue":t[8]||(t[8]=e=>x.value.executor_fio=e)},null,8,["modelValue"]),x.value.file?((0,n.wg)(),(0,n.iD)("p",y,[(0,n._)("a",{href:x.value.file,target:"_blank"},"Загруженный ранее файл",8,k)])):(0,n.kq)("",!0),(0,n.Wm)(X,{class:"q-mb-md",outlined:"",dense:"",label:"Файл",modelValue:S.value,"onUpdate:modelValue":t[9]||(t[9]=e=>S.value=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(ee,{align:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(E,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,n.wy)((0,n.Wm)(E,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[ne]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var x=a(9885),C=a(651),H=a(4458),D=a(3190),U=a(136),B=a(3119),S=a(8879),T=a(1746),j=a(1233),P=a(1682),Y=a(7220),$=a(996),I=a(2074),L=a(8326),M=a(6384),F=a(9420),A=a(1821),E=a(2146),z=a(9984),K=a.n(z);const O=Q,J=O;K()(Q,"components",{QPage:x.Z,QExpansionItem:C.Z,QCard:H.Z,QCardSection:D.Z,QSpace:U.Z,QInput:B.Z,QBtn:S.Z,QTable:T.Z,QTr:j.Z,QTh:P.Z,QTd:Y.Z,QPagination:$.Z,QDialog:I.Z,QForm:L.Z,QSelect:M.Z,QFile:F.Z,QCardActions:A.Z}),K()(Q,"directives",{ClosePopup:E.Z})}}]);