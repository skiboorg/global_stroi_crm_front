"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[337],{2637:(e,l,a)=>{a.d(l,{d:()=>n});var o=a(6827),t=a(8346);function n(e,l){o.Z.create({message:l,html:!0,color:e,position:t.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>r});var o=a(9835);const t={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const t=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var n=a(8879),u=a(9984),i=a.n(u);const d=t,r=d;i()(t,"components",{QBtn:n.Z})},4139:(e,l,a)=>{a.d(l,{Z:()=>b});var o=a(9835),t=a(499);const n={class:"row items-center justify-end"},u={__name:"DateInput",props:["label"],emits:["selected"],setup(e,{emit:l}){const a=(0,t.iH)(null),u=(0,t.iH)(null);return(l,t)=>{const i=(0,o.up)("q-btn"),d=(0,o.up)("q-date"),r=(0,o.up)("q-popup-proxy"),s=(0,o.up)("q-icon"),p=(0,o.up)("q-input"),c=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(p,{outlined:"",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),label:e.label},{append:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),mask:"YYYY-MM-DD"},{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o.wy)((0,o.Wm)(i,{onClick:t[0]||(t[0]=e=>l.$emit("selected",u.value)),label:"Выбрать",color:"primary",flat:""},null,512),[[c]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}}};var i=a(3119),d=a(2857),r=a(2765),s=a(2535),p=a(8879),c=a(2146),m=a(9984),v=a.n(m);const g=u,b=g;v()(u,"components",{QInput:i.Z,QIcon:d.Z,QPopupProxy:r.Z,QDate:s.Z,QBtn:p.Z}),v()(u,"directives",{ClosePopup:c.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>r});var o=a(9835);const t={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const t=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,o.kq)("",!0)}}};var n=a(8879),u=a(9984),i=a.n(u);const d=t,r=d;i()(t,"components",{QBtn:n.Z})},8337:(e,l,a)=>{a.r(l),a.d(l,{default:()=>I});var o=a(9835),t=a(6970),n=a(499),u=a(1569),i=a(8550),d=a(1862),r=a(9876),s=a(4139),p=a(2637);const c={class:"flex items-center justify-between q-mb-md"},m=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Договора ",-1),v={class:"row q-col-gutter-md q-mb-md"},g={class:"col-12 col-md-10"},b={class:"col-12 col-md-2"},_={class:"text-bold"},w=["innerHTML"],f={class:"q-gutter-md"},q={key:0},Z=["href"],k={__name:"dogovora",setup(e){(0,r.E)();const l=[{name:"inner_id",align:"left",label:"Номер договора",field:e=>e.inner_id,sortable:!0},{name:"fio",align:"left",label:"ФИО",field:e=>e.fio,sortable:!0},{name:"srok",align:"left",label:"Срок",field:e=>e.srok,sortable:!0},{name:"dogovor_date",align:"left",label:"Дата заключения",field:e=>new Date(e.dogovor_date).toLocaleDateString(),sortable:!0},{name:"file",align:"left",label:"Файл",field:e=>e.file?`<a href="${e.file}" target="_blank">Открыть</a>`:"Нет",sortable:!0}],a=(0,n.iH)(!1),k=((0,n.iH)(!1),(0,n.iH)({}),(0,n.iH)(null),["Бессрочный","Разовый","Другое"]),h=(0,n.iH)({id:null,fio:null,srok:null,dogovor_date:null}),y={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},W=(0,n.iH)(1),V=(0,n.iH)(!1),Q=(0,n.iH)([]),H=(0,n.iH)(5),C=(0,n.iH)(null),D=(0,n.iH)({q:""}),x=async()=>{console.log(W.value),await T()};(0,o.wF)((async()=>{await T()}));const T=async()=>{V.value=!V.value;const e=await(0,u.api)(`/api/material_store/dogovor?page=${W.value}&q=${D.value.q}`);Q.value=e.data.results,H.value=Math.ceil(e.data.count/15),V.value=!V.value},U=async e=>{await u.api.delete(`/api/material_store/dogovor/${e}`),await T()},S=e=>{e?(h.value=e,h.value.dogovor_date=h.value.dogovor_date?new Date(h.value.dogovor_date).toLocaleDateString():null):h.value={id:null,fio:null,srok:null,dogovor_date:null},a.value=!0},j=async()=>{let e=new FormData;delete h.value.file;for(let[l,a]of Object.entries(h.value))e.append(l,JSON.stringify(a));if(C.value&&e.append("file",C.value),h.value.id){const l=await(0,u.api)({method:"put",url:`/api/material_store/dogovor/${h.value.id}`,data:e,headers:{"Content-Type":"multipart/form-data"}});console.log(l.data),await T(),(0,p.d)("positive","Договор обновлен")}else{await(0,u.api)({method:"post",url:"/api/material_store/dogovor",data:e,headers:{"Content-Type":"multipart/form-data"}});(0,p.d)("positive","Договор создан"),await T()}a.value=!1},P=e=>{h.value.dogovor_date=new Date(e).toLocaleDateString()};return(e,n)=>{const u=(0,o.up)("q-space"),r=(0,o.up)("q-input"),p=(0,o.up)("q-btn"),B=(0,o.up)("q-th"),Y=(0,o.up)("q-tr"),$=(0,o.up)("q-td"),L=(0,o.up)("q-table"),M=(0,o.up)("q-pagination"),F=(0,o.up)("q-page"),I=(0,o.up)("q-select"),z=(0,o.up)("q-file"),A=(0,o.up)("q-card-section"),E=(0,o.up)("q-card-actions"),K=(0,o.up)("q-form"),O=(0,o.up)("q-card"),J=(0,o.up)("q-dialog"),N=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(F,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",c,[m,(0,o.Wm)(u),(0,o.Wm)(i.Z,{icon:"add",label:"Добавить договор",onClick:n[0]||(n[0]=e=>S(null))})]),(0,o._)("div",v,[(0,o._)("div",g,[(0,o.Wm)(r,{dense:"",modelValue:D.value.q,"onUpdate:modelValue":n[1]||(n[1]=e=>D.value.q=e),label:"Поиск по фио, номеру договора",outlined:""},null,8,["modelValue"])]),(0,o._)("div",b,[(0,o.Wm)(p,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:T})])]),(0,o.Wm)(L,{flat:"",rows:Q.value,columns:l,"row-key":"name","hide-pagination":"",pagination:y,"onUpdate:pagination":n[2]||(n[2]=e=>y=e),loading:V.value,"table-header-class":"table-header"},{header:(0,o.w5)((e=>[(0,o.Wm)(Y,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(B,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",_,(0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(B,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((e=>[(0,o.Wm)(Y,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)($,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",{innerHTML:l.value},null,8,w)])),_:2},1032,["props"])))),128)),(0,o.Wm)($,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",f,[(0,o.Wm)(d.Z,{dense:"",onClick:l=>S(e.row)},null,8,["onClick"]),(0,o.Wm)(i.Z,{dense:"",color:"negative",icon:"delete",onClick:l=>U(e.row.id)},null,8,["onClick"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,o.Wm)(M,{modelValue:W.value,"onUpdate:modelValue":[n[3]||(n[3]=e=>W.value=e),x],max:H.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,o.Wm)(J,{modelValue:a.value,"onUpdate:modelValue":n[8]||(n[8]=e=>a.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{onSubmit:j},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{class:"q-pb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{outlined:"",dense:"",label:"ФИО",modelValue:h.value.fio,"onUpdate:modelValue":n[4]||(n[4]=e=>h.value.fio=e),"lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(I,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:h.value.srok,"onUpdate:modelValue":n[5]||(n[5]=e=>h.value.srok=e),options:k,label:"Срок"},null,8,["modelValue"]),(0,o.Wm)(s.Z,{dense:"",class:"q-mb-md",modelValue:h.value.dogovor_date,"onUpdate:modelValue":n[6]||(n[6]=e=>h.value.dogovor_date=e),label:"Дата заключения договора",onSelected:P},null,8,["modelValue"]),h.value.file?((0,o.wg)(),(0,o.iD)("p",q,[(0,o._)("a",{href:h.value.file,target:"_blank"},"Загруженный ранее файл",8,Z)])):(0,o.kq)("",!0),(0,o.Wm)(z,{class:"q-mb-md",outlined:"",dense:"",label:"Файл",modelValue:C.value,"onUpdate:modelValue":n[7]||(n[7]=e=>C.value=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(E,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,o.wy)((0,o.Wm)(p,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[N]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var h=a(9885),y=a(136),W=a(3119),V=a(8879),Q=a(1746),H=a(1233),C=a(1682),D=a(7220),x=a(996),T=a(2074),U=a(4458),S=a(8326),j=a(3190),P=a(6384),B=a(9420),Y=a(1821),$=a(2146),L=a(9984),M=a.n(L);const F=k,I=F;M()(k,"components",{QPage:h.Z,QSpace:y.Z,QInput:W.Z,QBtn:V.Z,QTable:Q.Z,QTr:H.Z,QTh:C.Z,QTd:D.Z,QPagination:x.Z,QDialog:T.Z,QCard:U.Z,QForm:S.Z,QCardSection:j.Z,QSelect:P.Z,QFile:B.Z,QCardActions:Y.Z}),M()(k,"directives",{ClosePopup:$.Z})}}]);