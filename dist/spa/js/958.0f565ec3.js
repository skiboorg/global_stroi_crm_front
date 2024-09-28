"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[958],{4958:(l,e,a)=>{a.r(e),a.d(e,{default:()=>M});a(2879);var t=a(9835),o=a(6970),u=a(1957),n=a(499),i=a(1569),s=a(8550),d=a(1862),r=a(9876),p=a(6928),m=a(8227);a(8203);const c=(0,t._)("br",null,null,-1),w=(0,t._)("br",null,null,-1),b=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),f={class:"flex items-center justify-between q-mb-md"},v=(0,t._)("p",{class:"no-margin text-h6 text-bold"},"Проекты ",-1),g={class:"text-bold"},k={class:"q-gutter-md"},W={class:"row q-col-gutter-md"},y={class:"col-12 col-md-6"},q={class:"col-12 col-md-6"},Z={__name:"objects",setup(l){(0,r.E)();const e=(0,p.t)(),a=[{name:"name",align:"left",label:"Название",field:l=>l.name,sortable:!0},{name:"address",align:"left",label:"Адрес",field:l=>l.address,sortable:!0},{name:"subworker_name",align:"left",label:"Субподрядчик",field:l=>l.subworker_name,sortable:!0},{name:"total",align:"left",label:"Сумма договора",field:l=>U(l.total),sortable:!0},{name:"avans",align:"left",label:"Сумма аванса",field:l=>U(l.avans),sortable:!0},{name:"procent_done",align:"left",label:"Выполнено работ в %",field:l=>l.procent_done,sortable:!0},{name:"to_pay",align:"left",label:"Сумма к оплате",field:l=>U(l.to_pay),sortable:!0},{name:"pay_ostatok",align:"left",label:"Остаток оплаты",field:l=>U(l.pay_ostatok),sortable:!0},{name:"created_at",align:"left",label:"Создан",field:l=>new Date(l.created_at).toLocaleDateString(),sortable:!0}],Z=(0,n.iH)(!1),h=(0,n.iH)(!1),Q=(0,n.iH)([]),U=((0,n.iH)(null),l=>l.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})),V=(0,n.iH)({id:null,name:null,address:null,subworker:null,total:null,avans:0,procent_done:0,to_pay:0,pay_ostatok:0}),C={sortBy:"desc",descending:!1,page:1,rowsPerPage:25},x=(0,n.iH)([]);(0,n.iH)({q:"",role__id:""});(0,t.wF)((async()=>{await j()}));const j=async()=>{let l;l=e.user.role.is_subworker?await(0,i.api)(`/api/catalog/object?subworker_id=${e.user.sub_worker_id}`):await(0,i.api)("/api/catalog/object"),x.value=l.data.results},z=async l=>{await i.api.delete(`/api/catalog/object/${l}`),await j()},H=l=>{l?(Q.value=[],V.value=l):V.value={id:null,name:null,address:null,subworker:null,total:null,avans:0,procent_done:0,to_pay:0,pay_ostatok:0},Z.value=!0},D=async()=>{V.value.id?await i.api.put(`/api/catalog/object/${V.value.id}`,V.value):await i.api.post("/api/catalog/object",V.value),Z.value=!1,await j()},S=(l,e)=>{e((async()=>{if(l){h.value=!h.value;l.toLowerCase();const e=await(0,i.api)(`/api/catalog/subworker?q=${l}&page_size=10000`);Q.value=e.data.results,h.value=!h.value}}))};return(l,e)=>{const n=(0,t.up)("q-card-section"),i=(0,t.up)("q-card"),r=(0,t.up)("q-expansion-item"),p=(0,t.up)("q-space"),U=(0,t.up)("q-th"),j=(0,t.up)("q-tr"),F=(0,t.up)("q-td"),T=(0,t.up)("q-table"),$=(0,t.up)("q-page"),I=(0,t.up)("q-input"),P=(0,t.up)("q-item-label"),L=(0,t.up)("q-item-section"),Y=(0,t.up)("q-item"),A=(0,t.up)("q-select"),B=(0,t.up)("q-btn"),E=(0,t.up)("q-card-actions"),K=(0,t.up)("q-form"),M=(0,t.up)("q-dialog"),R=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)($,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{"expand-separator":"",icon:"help",label:"Описание раздела",class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" В данный раздел вносятся все данные по объекту, на котором организация производит работы."),c,w,(0,t.Uk)(" При создании объекта, уполномоченный пользователь создает расчет стоимости работ по этому объекту и добавляет к нему субподрядчика. Сумма договора и аванса подлежит округлению до целого числа в большую сторону."),b,_,(0,t.Uk)(" В процессе выполнения работ уполномоченный пользователь выставляет ежедневный план выполнения работ субподрядчику, субподрядчик ежедневно вносит в расчет стоимости фактически выполненные объемы работ, система автоматически определяет сколько субподрядчик сегодня заработал денег и сколько процент от общего объема работ выполнено. ")])),_:1})])),_:1})])),_:1}),(0,t._)("div",f,[v,(0,t.Wm)(p),(0,t.Wm)(s.Z,{icon:"add",label:"Добавить",onClick:e[0]||(e[0]=l=>H(null))})]),(0,t.Wm)(T,{flat:"",rows:x.value,columns:a,loading:h.value,"row-key":"name","hide-pagination":"","table-header-class":"table-header",pagination:C},{header:(0,t.w5)((l=>[(0,t.Wm)(j,{props:l,class:"bg-grey-2"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.cols,(e=>((0,t.wg)(),(0,t.j4)(U,{key:e.name,props:l},{default:(0,t.w5)((()=>[(0,t._)("span",g,(0,o.zw)(e.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(U,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(j,{props:e},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(F,{key:a.name,class:"cursor-pointer",onClick:a=>l.$router.push(`/catalog/objects/${e.row.id}`),props:e},{default:(0,t.w5)((()=>[(0,t._)("span",null,(0,o.zw)(a.value),1)])),_:2},1032,["onClick","props"])))),128)),(0,t.Wm)(F,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",k,[(0,t.Wm)(d.Z,{dense:"",onClick:l=>H(e.row)},null,8,["onClick"]),(0,t.Wm)(m.Z,{onConfirm:l=>z(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"])])),_:1}),(0,t.Wm)(M,{modelValue:Z.value,"onUpdate:modelValue":e[6]||(e[6]=l=>Z.value=l)},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{style:{width:"700px","max-width":"100vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{onSubmit:(0,u.iM)(D,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{class:"q-pb-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{outlined:"",label:"Название",modelValue:V.value.name,"onUpdate:modelValue":e[1]||(e[1]=l=>V.value.name=l),"lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,t.Wm)(I,{outlined:"",type:"textarea",label:"Адрес",modelValue:V.value.address,"onUpdate:modelValue":e[2]||(e[2]=l=>V.value.address=l),"lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,t.Wm)(A,{outlined:"",modelValue:V.value.subworker,"onUpdate:modelValue":e[3]||(e[3]=l=>V.value.subworker=l),loading:h.value,options:Q.value,"option-label":"fio",label:"Выберите субподрядчика (поиск по фио, инн, телефону)","map-options":"","option-value":"id","emit-value":"",class:"q-mb-md","use-input":"",onFilter:S,clearable:""},{"selected-item":(0,t.w5)((l=>[(0,t.Uk)((0,o.zw)(l.opt.fio?l.opt.fio:V.value.subworker_name),1)])),option:(0,t.w5)((l=>[(0,t.Wm)(Y,(0,o.vs)((0,t.F4)(l.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(P,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.opt.fio),1)])),_:2},1024),(0,t.Wm)(P,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ФИО")])),_:1})])),_:2},1024),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(P,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.opt.inn),1)])),_:2},1024),(0,t.Wm)(P,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ИНН")])),_:1})])),_:2},1024),(0,t.Uk)(),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(P,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.opt.phone),1)])),_:2},1024),(0,t.Wm)(P,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Телефон")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"]),(0,t._)("div",W,[(0,t._)("div",y,[(0,t.Wm)(I,{outlined:"",label:"Сумма договора",modelValue:V.value.total,"onUpdate:modelValue":e[4]||(e[4]=l=>V.value.total=l),"lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"])]),(0,t._)("div",q,[(0,t.Wm)(I,{outlined:"",label:"Aванс",modelValue:V.value.avans,"onUpdate:modelValue":e[5]||(e[5]=l=>V.value.avans=l)},null,8,["modelValue"])])])])),_:1}),(0,t.Wm)(E,{align:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,t.wy)((0,t.Wm)(B,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[R]])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"])],64)}}};var h=a(9885),Q=a(651),U=a(4458),V=a(3190),C=a(136),x=a(1746),j=a(1233),z=a(1682),H=a(7220),D=a(2074),S=a(8326),F=a(3119),T=a(6384),$=a(490),I=a(6749),P=a(3115),L=a(1821),Y=a(8879),A=a(2146),B=a(9984),E=a.n(B);const K=Z,M=K;E()(Z,"components",{QPage:h.Z,QExpansionItem:Q.Z,QCard:U.Z,QCardSection:V.Z,QSpace:C.Z,QTable:x.Z,QTr:j.Z,QTh:z.Z,QTd:H.Z,QDialog:D.Z,QForm:S.Z,QInput:F.Z,QSelect:T.Z,QItem:$.Z,QItemSection:I.Z,QItemLabel:P.Z,QCardActions:L.Z,QBtn:Y.Z}),E()(Z,"directives",{ClosePopup:A.Z})}}]);