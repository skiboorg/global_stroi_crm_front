"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[869],{2637:(e,l,a)=>{a.d(l,{d:()=>t});var n=a(6827),o=a(8346);function t(e,l){n.Z.create({message:l,html:!0,color:e,position:o.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>s});var n=a(9835);const o={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const o=(0,n.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,n.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=o,s=d;i()(o,"components",{QBtn:t.Z})},8203:(e,l,a)=>{a.d(l,{Z:()=>c});var n=a(9835);function o(e,l){const a=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(a,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:l[0]||(l[0]=l=>e.$router.back())})}var t=a(1639),u=a(8879),i=a(9984),d=a.n(i);const s={},r=(0,t.Z)(s,[["render",o]]),c=r;d()(s,"components",{QBtn:u.Z})},4139:(e,l,a)=>{a.d(l,{Z:()=>g});var n=a(9835),o=a(499);const t={class:"row items-center justify-end"},u={__name:"DateInput",props:["label"],emits:["selected"],setup(e,{emit:l}){const a=(0,o.iH)(null),u=(0,o.iH)(null);return(l,o)=>{const i=(0,n.up)("q-btn"),d=(0,n.up)("q-date"),s=(0,n.up)("q-popup-proxy"),r=(0,n.up)("q-icon"),c=(0,n.up)("q-input"),p=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(c,{outlined:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value=e),label:e.label},{append:(0,n.w5)((()=>[(0,n.Wm)(r,{name:"event",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e),mask:"YYYY-MM-DD"},{default:(0,n.w5)((()=>[(0,n._)("div",t,[(0,n.wy)((0,n.Wm)(i,{onClick:o[0]||(o[0]=e=>l.$emit("selected",u.value)),label:"Выбрать",color:"primary",flat:""},null,512),[[p]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}}};var i=a(3119),d=a(2857),s=a(2765),r=a(2535),c=a(8879),p=a(2146),m=a(9984),v=a.n(m);const b=u,g=b;v()(u,"components",{QInput:i.Z,QIcon:d.Z,QPopupProxy:s.Z,QDate:r.Z,QBtn:c.Z}),v()(u,"directives",{ClosePopup:p.Z})},8227:(e,l,a)=>{a.d(l,{Z:()=>b});var n=a(9835),o=a(499);const t={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(e,{emit:l}){const a=(0,o.iH)(!1);return(l,o)=>{const t=(0,n.up)("q-btn"),u=(0,n.up)("q-card-section"),i=(0,n.up)("q-card-actions"),d=(0,n.up)("q-card"),s=(0,n.up)("q-dialog"),r=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l.auth.user.role?.permission?.can_add?((0,n.wg)(),(0,n.j4)(t,{key:0,"no-caps":"",unelevated:"",dense:"",loading:e.loading,color:e.color?e.color:"negative",label:e.label,onClick:o[0]||(o[0]=e=>a.value=!0),icon:e.icon?e.icon:"delete"},null,8,["loading","color","label","icon"])):(0,n.kq)("",!0),(0,n.Wm)(s,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{style:{width:"300px","max-width":"100vw"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"text-center text-bold"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Вы уверены? ")])),_:1}),(0,n.Wm)(i,{align:"center"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(t,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:o[1]||(o[1]=e=>l.$emit("confirm"))},null,512),[[r]]),(0,n.wy)((0,n.Wm)(t,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[r]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var u=a(8879),i=a(2074),d=a(4458),s=a(3190),r=a(1821),c=a(2146),p=a(9984),m=a.n(p);const v=t,b=v;m()(t,"components",{QBtn:u.Z,QDialog:i.Z,QCard:d.Z,QCardSection:s.Z,QCardActions:r.Z}),m()(t,"directives",{ClosePopup:c.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>s});var n=a(9835);const o={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const o=(0,n.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,n.kq)("",!0)}}};var t=a(8879),u=a(9984),i=a.n(u);const d=o,s=d;i()(o,"components",{QBtn:t.Z})},5869:(e,l,a)=>{a.r(l),a.d(l,{default:()=>I});var n=a(9835),o=a(6970),t=a(499),u=a(1569),i=a(8550),d=a(1862),s=a(9876),r=a(4139),c=a(2637),p=a(8227);a(8203);const m={class:"flex items-center justify-between q-mb-md"},v=(0,n._)("p",{class:"no-margin text-h6 text-bold"},"Приказы ",-1),b={class:"row q-col-gutter-md q-mb-md"},g={class:"col-12 col-md-10"},w={class:"col-12 col-md-2"},_={class:"text-bold"},f=["innerHTML"],q={class:"q-gutter-md"},Z={key:1},y=["href"],V={__name:"orders",setup(e){(0,s.E)();const l=[{name:"inner_id",align:"left",label:"Номер",field:e=>e.inner_id,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"date",align:"left",label:"Дата издания",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"responsible_fio",align:"left",label:"Ответственное лицо за исполнение",field:e=>e.responsible_fio,sortable:!0},{name:"sign_date",align:"left",label:"Дата ознакомления с приказом",field:e=>new Date(e.sign_date).toLocaleDateString(),sortable:!0},{name:"file",align:"left",label:"Файл",field:e=>e.file?`<a href="${e.file}" target="_blank">Открыть</a>`:"Нет",sortable:!0}],a=(0,t.iH)(!1),V=((0,t.iH)(!1),(0,t.iH)({}),(0,t.iH)(null),(0,t.iH)({id:null,name:null,inner_id:null,date:null,sign_date:null,responsible_fio:null,file:null})),k={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},W=(0,t.iH)(1),h=(0,t.iH)(!1),Q=(0,t.iH)([]),D=(0,t.iH)(5),C=(0,t.iH)(null),H=(0,t.iH)({q:""}),x=async()=>{console.log(W.value),await U()};(0,n.wF)((async()=>{await U()}));const U=async()=>{h.value=!h.value;const e=await(0,u.api)(`/api/catalog/order?page=${W.value}&q=${H.value.q}`);Q.value=e.data.results,D.value=Math.ceil(e.data.count/15),h.value=!h.value},S=async e=>{await u.api.delete(`/api/catalog/order/${e}`),await U()},j=e=>{e?(V.value=e,V.value.date=V.value.date?new Date(V.value.date).toLocaleDateString():null,V.value.sign_date=V.value.sign_date?new Date(V.value.sign_date).toLocaleDateString():null):V.value={id:null,name:null,inner_id:null,date:null,sign_date:null,responsible_fio:null},a.value=!0},B=async()=>{let e,l=new FormData;delete V.value.file;for(let[a,n]of Object.entries(V.value))l.append(a,JSON.stringify(n));C.value&&l.append("file",C.value),e=V.value.id?await(0,u.api)({method:"put",url:`/api/catalog/order/${V.value.id}`,data:l,headers:{"Content-Type":"multipart/form-data"}}):await(0,u.api)({method:"post",url:"/api/catalog/order",data:l,headers:{"Content-Type":"multipart/form-data"}}),(0,c.d)(e.data.success?"positive":"negative",e.data.message),await U(),a.value=!1,C.value=null},T=e=>{V.value.date=new Date(e).toLocaleDateString()},P=e=>{V.value.sign_date=new Date(e).toLocaleDateString()};return(e,t)=>{const u=(0,n.up)("q-space"),s=(0,n.up)("q-input"),c=(0,n.up)("q-btn"),L=(0,n.up)("q-th"),Y=(0,n.up)("q-tr"),$=(0,n.up)("q-td"),M=(0,n.up)("q-table"),F=(0,n.up)("q-pagination"),I=(0,n.up)("q-page"),A=(0,n.up)("q-file"),z=(0,n.up)("q-card-section"),E=(0,n.up)("q-card-actions"),K=(0,n.up)("q-form"),O=(0,n.up)("q-card"),J=(0,n.up)("q-dialog"),N=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(I,{padding:""},{default:(0,n.w5)((()=>[(0,n._)("div",m,[v,(0,n.Wm)(u),(0,n.Wm)(i.Z,{icon:"add",label:"Добавить",onClick:t[0]||(t[0]=e=>j(null))})]),(0,n._)("div",b,[(0,n._)("div",g,[(0,n.Wm)(s,{dense:"",modelValue:H.value.q,"onUpdate:modelValue":t[1]||(t[1]=e=>H.value.q=e),label:"Поиск по названию, номеру, получателю",outlined:""},null,8,["modelValue"])]),(0,n._)("div",w,[(0,n.Wm)(c,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:U})])]),(0,n.Wm)(M,{flat:"",rows:Q.value,columns:l,"row-key":"name","hide-pagination":"",pagination:k,"onUpdate:pagination":t[2]||(t[2]=e=>k=e),loading:h.value,"table-header-class":"table-header"},{header:(0,n.w5)((e=>[(0,n.Wm)(Y,{props:e,class:"bg-grey-2"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(l=>((0,n.wg)(),(0,n.j4)(L,{key:l.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",_,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(L,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,n.w5)((e=>[(0,n.Wm)(Y,{props:e},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(l=>((0,n.wg)(),(0,n.j4)($,{key:l.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",{innerHTML:l.value},null,8,f)])),_:2},1032,["props"])))),128)),(0,n.Wm)($,{"auto-width":""},{default:(0,n.w5)((()=>[(0,n._)("div",q,[(0,n.Wm)(d.Z,{dense:"",onClick:l=>j(e.row)},null,8,["onClick"]),(0,n.Wm)(p.Z,{onConfirm:l=>S(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,n.Wm)(F,{modelValue:W.value,"onUpdate:modelValue":[t[3]||(t[3]=e=>W.value=e),x],max:D.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,n.Wm)(J,{modelValue:a.value,"onUpdate:modelValue":t[10]||(t[10]=e=>a.value=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(O,{style:{width:"700px","max-width":"100vw"}},{default:(0,n.w5)((()=>[(0,n.Wm)(K,{onSubmit:B},{default:(0,n.w5)((()=>[(0,n.Wm)(z,{class:"q-pb-none"},{default:(0,n.w5)((()=>[V.value.inner_id?((0,n.wg)(),(0,n.j4)(s,{key:0,class:"q-mb-md",outlined:"",dense:"",label:"Внутренний номер",modelValue:V.value.inner_id,"onUpdate:modelValue":t[4]||(t[4]=e=>V.value.inner_id=e)},null,8,["modelValue"])):(0,n.kq)("",!0),(0,n.Wm)(s,{outlined:"",dense:"",label:"Наименование документа",modelValue:V.value.name,"onUpdate:modelValue":t[5]||(t[5]=e=>V.value.name=e),"lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,n.Wm)(r.Z,{dense:"",class:"q-mb-md",modelValue:V.value.date,"onUpdate:modelValue":t[6]||(t[6]=e=>V.value.date=e),label:"Дата издания",onSelected:T},null,8,["modelValue"]),(0,n.Wm)(s,{class:"q-mb-md",outlined:"",dense:"",label:"Ответственное лицо за исполнение",modelValue:V.value.responsible_fio,"onUpdate:modelValue":t[7]||(t[7]=e=>V.value.responsible_fio=e)},null,8,["modelValue"]),(0,n.Wm)(r.Z,{dense:"",class:"q-mb-md",modelValue:V.value.sign_date,"onUpdate:modelValue":t[8]||(t[8]=e=>V.value.sign_date=e),label:"Дата ознакомления с приказом",onSelected:P},null,8,["modelValue"]),V.value.file?((0,n.wg)(),(0,n.iD)("p",Z,[(0,n._)("a",{href:V.value.file,target:"_blank"},"Загруженный ранее файл",8,y)])):(0,n.kq)("",!0),(0,n.Wm)(A,{class:"q-mb-md",outlined:"",dense:"",label:"Файл",modelValue:C.value,"onUpdate:modelValue":t[9]||(t[9]=e=>C.value=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(E,{align:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,n.wy)((0,n.Wm)(c,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[N]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var k=a(9885),W=a(136),h=a(3119),Q=a(8879),D=a(1746),C=a(1233),H=a(1682),x=a(7220),U=a(996),S=a(2074),j=a(4458),B=a(8326),T=a(3190),P=a(9420),L=a(1821),Y=a(2146),$=a(9984),M=a.n($);const F=V,I=F;M()(V,"components",{QPage:k.Z,QSpace:W.Z,QInput:h.Z,QBtn:Q.Z,QTable:D.Z,QTr:C.Z,QTh:H.Z,QTd:x.Z,QPagination:U.Z,QDialog:S.Z,QCard:j.Z,QForm:B.Z,QCardSection:T.Z,QFile:P.Z,QCardActions:L.Z}),M()(V,"directives",{ClosePopup:Y.Z})}}]);