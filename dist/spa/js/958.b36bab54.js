"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[958],{8550:(l,e,a)=>{a.d(e,{Z:()=>s});var o=a(9835);const t={__name:"AddButton",props:["label","icon","loading","color"],setup(l){return(e,a)=>{const t=(0,o.up)("q-btn");return e.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",loading:l.loading,color:l.color?l.color:"primary",label:l.label,icon:l.icon?l.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var n=a(8879),u=a(9984),i=a.n(u);const r=t,s=r;i()(t,"components",{QBtn:n.Z})},8203:(l,e,a)=>{a.d(e,{Z:()=>c});var o=a(9835);function t(l,e){const a=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(a,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:e[0]||(e[0]=e=>l.$router.back())})}var n=a(1639),u=a(8879),i=a(9984),r=a.n(i);const s={},d=(0,n.Z)(s,[["render",t]]),c=d;r()(s,"components",{QBtn:u.Z})},8227:(l,e,a)=>{a.d(e,{Z:()=>w});var o=a(9835),t=a(499);const n={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(l,{emit:e}){const a=(0,t.iH)(!1);return(e,t)=>{const n=(0,o.up)("q-btn"),u=(0,o.up)("q-card-section"),i=(0,o.up)("q-card-actions"),r=(0,o.up)("q-card"),s=(0,o.up)("q-dialog"),d=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",dense:"",loading:l.loading,color:l.color?l.color:"negative",label:l.label,onClick:t[0]||(t[0]=l=>a.value=!0),icon:l.icon?l.icon:"delete"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0),(0,o.Wm)(s,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{style:{width:"300px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"text-center text-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Вы уверены? ")])),_:1}),(0,o.Wm)(i,{align:"center"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(n,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:t[1]||(t[1]=l=>e.$emit("confirm"))},null,512),[[d]]),(0,o.wy)((0,o.Wm)(n,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[d]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var u=a(8879),i=a(2074),r=a(4458),s=a(3190),d=a(1821),c=a(2146),p=a(9984),m=a.n(p);const b=n,w=b;m()(n,"components",{QBtn:u.Z,QDialog:i.Z,QCard:r.Z,QCardSection:s.Z,QCardActions:d.Z}),m()(n,"directives",{ClosePopup:c.Z})},1862:(l,e,a)=>{a.d(e,{Z:()=>s});var o=a(9835);const t={__name:"EditButton",props:["label","icon","color"],setup(l){return(e,a)=>{const t=(0,o.up)("q-btn");return e.auth.user.role?.permission?.can_edit?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",color:l.color,label:l.label,icon:l.icon?l.icon:"edit"},null,8,["color","label","icon"])):(0,o.kq)("",!0)}}};var n=a(8879),u=a(9984),i=a.n(u);const r=t,s=r;i()(t,"components",{QBtn:n.Z})},4958:(l,e,a)=>{a.r(e),a.d(e,{default:()=>M});a(2879);var o=a(9835),t=a(6970),n=a(1957),u=a(499),i=a(1569),r=a(8550),s=a(1862),d=a(9876),c=a(6928),p=a(8227);a(8203);const m=(0,o._)("br",null,null,-1),b=(0,o._)("br",null,null,-1),w=(0,o._)("br",null,null,-1),_=(0,o._)("br",null,null,-1),v={class:"flex items-center justify-between q-mb-md"},g=(0,o._)("p",{class:"no-margin text-h6 text-bold"},"Объекты ",-1),f={class:"text-bold"},k={class:"q-gutter-md"},W={class:"row q-col-gutter-md"},q={class:"col-12 col-md-6"},Z={class:"col-12 col-md-6"},y={__name:"objects",setup(l){(0,d.E)();const e=(0,c.t)(),a=[{name:"name",align:"left",label:"Название",field:l=>l.name,sortable:!0},{name:"address",align:"left",label:"Адрес",field:l=>l.address,sortable:!0},{name:"subworker_name",align:"left",label:"Субподрядчик",field:l=>l.subworker_name,sortable:!0},{name:"total",align:"left",label:"Сумма договора",field:l=>C(l.total),sortable:!0},{name:"avans",align:"left",label:"Сумма аванса",field:l=>C(l.avans),sortable:!0},{name:"procent_done",align:"left",label:"Выполнено работ в %",field:l=>l.procent_done,sortable:!0},{name:"to_pay",align:"left",label:"Сумма к оплате",field:l=>C(l.to_pay),sortable:!0},{name:"pay_ostatok",align:"left",label:"Остаток оплаты",field:l=>C(l.pay_ostatok),sortable:!0},{name:"created_at",align:"left",label:"Создан",field:l=>new Date(l.created_at).toLocaleDateString(),sortable:!0}],y=(0,u.iH)(!1),Q=(0,u.iH)(!1),h=(0,u.iH)([]),C=((0,u.iH)(null),l=>l.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})),V=(0,u.iH)({id:null,name:null,address:null,subworker:null,total:null,avans:0,procent_done:0,to_pay:0,pay_ostatok:0}),U={sortBy:"desc",descending:!1,page:1,rowsPerPage:25},x=(0,u.iH)([]);(0,u.iH)({q:"",role__id:""});(0,o.wF)((async()=>{await j()}));const j=async()=>{let l;l=e.user.role.is_subworker?await(0,i.api)(`/api/catalog/object?subworker_id=${e.user.sub_worker_id}`):await(0,i.api)("/api/catalog/object"),x.value=l.data.results},H=async l=>{await i.api.delete(`/api/catalog/object/${l}`),await j()},D=l=>{l?(h.value=[],V.value=l):V.value={id:null,name:null,address:null,subworker:null,total:null,avans:0,procent_done:0,to_pay:0,pay_ostatok:0},y.value=!0},z=async()=>{V.value.id?await i.api.put(`/api/catalog/object/${V.value.id}`,V.value):await i.api.post("/api/catalog/object",V.value),y.value=!1,await j()},B=(l,e)=>{e((async()=>{if(l){Q.value=!Q.value;l.toLowerCase();const e=await(0,i.api)(`/api/catalog/subworker?q=${l}&page_size=10000`);h.value=e.data.results,Q.value=!Q.value}}))};return(l,e)=>{const u=(0,o.up)("q-card-section"),i=(0,o.up)("q-card"),d=(0,o.up)("q-expansion-item"),c=(0,o.up)("q-space"),C=(0,o.up)("q-th"),j=(0,o.up)("q-tr"),S=(0,o.up)("q-td"),$=(0,o.up)("q-table"),F=(0,o.up)("q-page"),P=(0,o.up)("q-input"),T=(0,o.up)("q-item-label"),I=(0,o.up)("q-item-section"),A=(0,o.up)("q-item"),L=(0,o.up)("q-select"),Y=(0,o.up)("q-btn"),E=(0,o.up)("q-card-actions"),K=(0,o.up)("q-form"),M=(0,o.up)("q-dialog"),R=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(F,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{"expand-separator":"",icon:"help",label:"Описание раздела",class:"q-mb-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" В данный раздел вносятся все данные по объекту, на котором организация производит работы."),m,b,(0,o.Uk)(" При создании объекта, уполномоченный пользователь создает расчет стоимости работ по этому объекту и добавляет к нему субподрядчика. Сумма договора и аванса подлежит округлению до целого числа в большую сторону."),w,_,(0,o.Uk)(" В процессе выполнения работ уполномоченный пользователь выставляет ежедневный план выполнения работ субподрядчику, субподрядчик ежедневно вносит в расчет стоимости фактически выполненные объемы работ, система автоматически определяет сколько субподрядчик сегодня заработал денег и сколько процент от общего объема работ выполнено. ")])),_:1})])),_:1})])),_:1}),(0,o._)("div",v,[g,(0,o.Wm)(c),(0,o.Wm)(r.Z,{icon:"add",label:"Добавить",onClick:e[0]||(e[0]=l=>D(null))})]),(0,o.Wm)($,{flat:"",rows:x.value,columns:a,loading:Q.value,"row-key":"name","hide-pagination":"","table-header-class":"table-header",pagination:U},{header:(0,o.w5)((l=>[(0,o.Wm)(j,{props:l,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.cols,(e=>((0,o.wg)(),(0,o.j4)(C,{key:e.name,props:l},{default:(0,o.w5)((()=>[(0,o._)("span",f,(0,t.zw)(e.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(C,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((e=>[(0,o.Wm)(j,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(a=>((0,o.wg)(),(0,o.j4)(S,{key:a.name,class:"cursor-pointer",onClick:a=>l.$router.push(`/catalog/objects/${e.row.id}`),props:e},{default:(0,o.w5)((()=>[(0,o._)("span",null,(0,t.zw)(a.value),1)])),_:2},1032,["onClick","props"])))),128)),(0,o.Wm)(S,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",k,[(0,o.Wm)(s.Z,{dense:"",onClick:l=>D(e.row)},null,8,["onClick"]),(0,o.Wm)(p.Z,{onConfirm:l=>H(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"])])),_:1}),(0,o.Wm)(M,{modelValue:y.value,"onUpdate:modelValue":e[6]||(e[6]=l=>y.value=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{onSubmit:(0,n.iM)(z,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"q-pb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{outlined:"",label:"Название",modelValue:V.value.name,"onUpdate:modelValue":e[1]||(e[1]=l=>V.value.name=l),"lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(P,{outlined:"",type:"textarea",label:"Адрес",modelValue:V.value.address,"onUpdate:modelValue":e[2]||(e[2]=l=>V.value.address=l),"lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,o.Wm)(L,{outlined:"",modelValue:V.value.subworker,"onUpdate:modelValue":e[3]||(e[3]=l=>V.value.subworker=l),loading:Q.value,options:h.value,"option-label":"fio",label:"Выберите субподрядчика (поиск по фио, инн, телефону)","map-options":"","option-value":"id","emit-value":"",class:"q-mb-md","use-input":"",onFilter:B,clearable:""},{"selected-item":(0,o.w5)((l=>[(0,o.Uk)((0,t.zw)(l.opt.fio?l.opt.fio:V.value.subworker_name),1)])),option:(0,o.w5)((l=>[(0,o.Wm)(A,(0,t.vs)((0,o.F4)(l.itemProps)),{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(l.opt.fio),1)])),_:2},1024),(0,o.Wm)(T,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("ФИО")])),_:1})])),_:2},1024),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(l.opt.inn),1)])),_:2},1024),(0,o.Wm)(T,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("ИНН")])),_:1})])),_:2},1024),(0,o.Uk)(),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(l.opt.phone),1)])),_:2},1024),(0,o.Wm)(T,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Телефон")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"]),(0,o._)("div",W,[(0,o._)("div",q,[(0,o.Wm)(P,{outlined:"",label:"Сумма договора",modelValue:V.value.total,"onUpdate:modelValue":e[4]||(e[4]=l=>V.value.total=l),"lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"])]),(0,o._)("div",Z,[(0,o.Wm)(P,{outlined:"",label:"Aванс",modelValue:V.value.avans,"onUpdate:modelValue":e[5]||(e[5]=l=>V.value.avans=l)},null,8,["modelValue"])])])])),_:1}),(0,o.Wm)(E,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,o.wy)((0,o.Wm)(Y,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[R]])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"])],64)}}};var Q=a(9885),h=a(651),C=a(4458),V=a(3190),U=a(136),x=a(1746),j=a(1233),H=a(1682),D=a(7220),z=a(2074),B=a(8326),S=a(3119),$=a(6384),F=a(490),P=a(6749),T=a(3115),I=a(1821),A=a(8879),L=a(2146),Y=a(9984),E=a.n(Y);const K=y,M=K;E()(y,"components",{QPage:Q.Z,QExpansionItem:h.Z,QCard:C.Z,QCardSection:V.Z,QSpace:U.Z,QTable:x.Z,QTr:j.Z,QTh:H.Z,QTd:D.Z,QDialog:z.Z,QForm:B.Z,QInput:S.Z,QSelect:$.Z,QItem:F.Z,QItemSection:P.Z,QItemLabel:T.Z,QCardActions:I.Z,QBtn:A.Z}),E()(y,"directives",{ClosePopup:L.Z})}}]);