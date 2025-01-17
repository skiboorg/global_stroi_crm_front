"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[70],{2070:(e,l,a)=>{a.r(l),a.d(l,{default:()=>ae});a(2879);var o=a(9835),t=a(6970),i=a(499),u=a(1569),n=a(8550),s=a(9876),d=a(2637),m=(a(1801),a(7179)),r=a(1375);const p={class:"row q-col-gutter-md q-mb-md"},c={class:"col-9"},v={class:"col-3"},b={key:0,class:"row q-col-gutter-md"},w={class:"col-9"},_={class:"col-3"},g={key:0,class:"text-negative"},f={key:1,class:"text-negative"},q={class:"text-bold"},W={key:0},V={key:1},y={key:3},k={class:"q-gutter-md"},h={class:"row q-col-gutter-md"},Z={class:"col-6"},Q={class:"col-6"},U={__name:"tools",setup(e){const l=(0,s.E)(),a=(0,i.iH)([]),U=(0,i.iH)([]),x=(0,i.iH)("items"),C=(0,i.iH)(null),H=(0,i.iH)(!1),D=(0,i.iH)(!1),T=(0,i.iH)(null),F=(0,i.iH)(null),z=(0,i.iH)([]),I=(0,i.iH)(null),P={sortBy:"desc",descending:!1,page:1,rowsPerPage:50},j=(0,i.iH)({store:null,name:null,serial_number:null,price:null,condition:null}),S=["Новый","Б/У"],$=[{name:"select",align:"left",label:"",sortable:!1},{name:"id",align:"left",label:"#",field:e=>e.id,sortable:!0},{name:"image",align:"left",label:"Изображение",field:e=>e.image,sortable:!0},{name:"store",align:"left",label:"Склад",style:"min-width: 100px; max-width: 200px; white-space: normal;",field:e=>e.store?.address,sortable:!0},{name:"name",align:"left",style:"min-width: 200px; max-width: 300px; white-space: normal;",label:"Наименование",field:e=>e.name,sortable:!0},{name:"serial_numbers",align:"left",label:"Серийный номер",field:e=>e.serial_number,sortable:!0},{name:"condition",align:"left",label:"Состояние",field:e=>e.condition,sortable:!0},{name:"price",align:"left",label:"Цена",field:e=>e.price,sortable:!0},{name:"is_avaiable",align:"left",label:"На складе",field:e=>e.is_avaiable?"Да":"Выдан",sortable:!0}];(0,o.wF)((async()=>{await Y();const e=await(0,u.api)("/api/material_store/store");U.value=e.data,z.value=await l.getUsers(null,!0)}));const Y=async()=>{const e=await(0,u.api)("/api/material_store/store_tool");a.value=e.data},B=(0,o.Fl)((()=>{if(a.value)return a.value.some((e=>e.is_selected))})),K=async()=>{H.value=!0;let e=new FormData;for(let[a,o]of Object.entries(j.value))e.append(a,o);T.value&&e.append("file",T.value),F.value&&e.append("doc",F.value);try{await(0,u.api)({method:"post",url:"/api/material_store/store_tool",data:e,headers:{"Content-Type":"multipart/form-data"}});(0,d.d)("positive","Инструмент добавлен на склад"),await Y(),H.value=!1,D.value=!1}catch(l){(0,d.d)("negative","Проверьте входные данные"),H.value=!1}},A=async(e,l)=>{await u.api.delete(`/api/material_store/${e}/${l}`),await Y()},E=(e,l)=>{l((async()=>{if(e){H.value=!0;const l=await(0,u.api)(`/api/user/user?q=${e}&page_size=10000`);z.value=l.data,H.value=!1}}))},L=async()=>{H.value=!0;const e=a.value.filter((e=>e.is_selected));await u.api.post("/api/material_store/create_give_act",{store:C.value,who_get:I.value,selected_tools:e});await Y(),H.value=!1};return(e,l)=>{const i=(0,o.up)("q-tab"),u=(0,o.up)("q-tabs"),s=(0,o.up)("q-separator"),d=(0,o.up)("q-select"),Y=(0,o.up)("q-item-label"),O=(0,o.up)("q-item-section"),G=(0,o.up)("q-item"),J=(0,o.up)("q-btn"),M=(0,o.up)("q-th"),N=(0,o.up)("q-tr"),R=(0,o.up)("q-checkbox"),X=(0,o.up)("q-img"),ee=(0,o.up)("q-td"),le=(0,o.up)("q-table"),ae=(0,o.up)("q-tab-panel"),oe=(0,o.up)("q-tab-panels"),te=(0,o.up)("q-input"),ie=(0,o.up)("q-file"),ue=(0,o.up)("q-card-section"),ne=(0,o.up)("q-card-actions"),se=(0,o.up)("q-form"),de=(0,o.up)("q-card"),me=(0,o.up)("q-dialog"),re=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r.Z),(0,o.Wm)(u,{modelValue:x.value,"onUpdate:modelValue":l[0]||(l[0]=e=>x.value=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{name:"items",label:"Инструменты"}),(0,o.Wm)(i,{name:"docs",label:"Акты"})])),_:1},8,["modelValue"]),(0,o.Wm)(s),(0,o.Wm)(oe,{modelValue:x.value,"onUpdate:modelValue":l[4]||(l[4]=e=>x.value=e),animated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(ae,{name:"items"},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o._)("div",c,[(0,o.Wm)(d,{options:U.value,modelValue:C.value,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value=e),clearable:"",outlined:"",dense:"","emit-value":"","option-label":"address","option-value":"id","map-options":"",label:"Выберите склад"},null,8,["options","modelValue"])]),(0,o._)("div",v,[(0,o.Wm)(n.Z,{label:"Добавить",onClick:l[2]||(l[2]=e=>D.value=!0),class:"q-mr-md"})])]),B.value?((0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",w,[(0,o.Wm)(d,{class:"q-mb-xs",dense:"",outlined:"",modelValue:I.value,"onUpdate:modelValue":l[3]||(l[3]=e=>I.value=e),loading:H.value,options:z.value,"option-label":"fio",label:"Выберите пользователя","map-options":"","option-value":"id","emit-value":"","use-input":"",onFilter:E,clearable:""},{option:(0,o.w5)((e=>[(0,o.Wm)(G,(0,t.vs)((0,o.F4)(e.itemProps)),{default:(0,o.w5)((()=>[(0,o.Wm)(O,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.opt.role?.name),1)])),_:2},1024),(0,o.Wm)(Y,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Роль")])),_:1})])),_:2},1024),(0,o.Wm)(O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.opt.fio),1)])),_:2},1024),(0,o.Wm)(Y,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"])]),(0,o._)("div",_,[(0,o.Wm)(J,{"no-caps":"",unelevated:"",color:"positive",disable:!I.value,loading:H.value,onClick:L,label:"Передать выбранное"},null,8,["disable","loading"]),C.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",g,"Выберите склад")),I.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",f,"Выберите пользователя"))])])):(0,o.kq)("",!0),(0,o.Wm)(le,{flat:"",rows:C.value?a.value.filter((e=>e.store.id===C.value)):a.value,columns:$,pagination:P,"table-header-class":"table-header","row-key":"id",selection:"multiple",style:{"table-layout":"fixed"},class:"q-mb-lg"},{header:(0,o.w5)((e=>[(0,o.Wm)(N,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(M,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",q,(0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(M,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((l=>[(0,o.Wm)(N,{props:l},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.cols,(e=>((0,o.wg)(),(0,o.j4)(ee,{key:e.name,props:l},{default:(0,o.w5)((()=>["id"===e.name?((0,o.wg)(),(0,o.iD)("pre",W,(0,t.zw)(l.rowIndex+1),1)):"select"===e.name?((0,o.wg)(),(0,o.iD)("span",V,[(0,o.Wm)(R,{disable:!l.row.is_avaiable,modelValue:l.row.is_selected,"onUpdate:modelValue":e=>l.row.is_selected=e},null,8,["disable","modelValue","onUpdate:modelValue"])])):"image"===e.name?((0,o.wg)(),(0,o.j4)(X,{key:2,ratio:16/9,fit:"contain",src:e.value},null,8,["src"])):((0,o.wg)(),(0,o.iD)("p",y,(0,t.zw)(e.value),1))])),_:2},1032,["props"])))),128)),(0,o.Wm)(ee,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",k,[(0,o.Wm)(J,{icon:"visibility",flat:"",dense:"",onClick:a=>e.$router.push(`/store/tool/${l.row.id}`)},null,8,["onClick"]),(0,o.Wm)(n.Z,{dense:"",color:"negative",icon:"delete",onClick:e=>A("store_tool",l.row.id)},null,8,["onClick"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1}),(0,o.Wm)(ae,{name:"docs"},{default:(0,o.w5)((()=>[(0,o.Wm)(m.Z)])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(me,{modelValue:D.value,"onUpdate:modelValue":l[12]||(l[12]=e=>D.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(de,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(se,{onSubmit:K},{default:(0,o.w5)((()=>[(0,o.Wm)(ue,{class:"q-pb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"q-mb-md",options:U.value,modelValue:j.value.store,"onUpdate:modelValue":l[5]||(l[5]=e=>j.value.store=e),clearable:"",outlined:"",dense:"","emit-value":"","option-label":"address","option-value":"id","map-options":"",label:"Выберите склад"},null,8,["options","modelValue"]),(0,o.Wm)(te,{dense:"",outlined:"",label:"Название",class:"q-mb-md",modelValue:j.value.name,"onUpdate:modelValue":l[6]||(l[6]=e=>j.value.name=e)},null,8,["modelValue"]),(0,o._)("div",h,[(0,o._)("div",Z,[(0,o.Wm)(te,{type:"number",dense:"",outlined:"",label:"Стоимость",class:"q-mb-md",modelValue:j.value.price,"onUpdate:modelValue":l[7]||(l[7]=e=>j.value.price=e)},null,8,["modelValue"])]),(0,o._)("div",Q,[(0,o.Wm)(d,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:j.value.condition,"onUpdate:modelValue":l[8]||(l[8]=e=>j.value.condition=e),options:S,label:"Состояние"},null,8,["modelValue"])])]),(0,o.Wm)(te,{class:"q-mb-md",dense:"",outlined:"",label:"Серийный номер",modelValue:j.value.serial_number,"onUpdate:modelValue":l[9]||(l[9]=e=>j.value.serial_number=e)},null,8,["modelValue"]),(0,o.Wm)(ie,{class:"q-mb-md",outlined:"",dense:"",label:"Фото",modelValue:T.value,"onUpdate:modelValue":l[10]||(l[10]=e=>T.value=e)},null,8,["modelValue"]),(0,o.Wm)(ie,{outlined:"",dense:"",label:"Товарный чек, счет на покупку",modelValue:F.value,"onUpdate:modelValue":l[11]||(l[11]=e=>F.value=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(ne,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(J,{label:"Сохранить",loading:H.value,"no-caps":"",color:"positive",type:"submit"},null,8,["loading"]),(0,o.wy)((0,o.Wm)(J,{label:"Отмена",loading:H.value,"no-caps":"",color:"dark"},null,8,["loading"]),[[re]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var x=a(7817),C=a(900),H=a(926),D=a(9800),T=a(4106),F=a(6384),z=a(490),I=a(6749),P=a(3115),j=a(8879),S=a(1746),$=a(1233),Y=a(1682),B=a(7220),K=a(1006),A=a(335),E=a(2074),L=a(4458),O=a(8326),G=a(3190),J=a(3119),M=a(3837),N=a(1821),R=a(2146),X=a(9984),ee=a.n(X);const le=U,ae=le;ee()(U,"components",{QTabs:x.Z,QTab:C.Z,QSeparator:H.Z,QTabPanels:D.Z,QTabPanel:T.Z,QSelect:F.Z,QItem:z.Z,QItemSection:I.Z,QItemLabel:P.Z,QBtn:j.Z,QTable:S.Z,QTr:$.Z,QTh:Y.Z,QTd:B.Z,QCheckbox:K.Z,QImg:A.Z,QDialog:E.Z,QCard:L.Z,QForm:O.Z,QCardSection:G.Z,QInput:J.Z,QFile:M.Z,QCardActions:N.Z}),ee()(U,"directives",{ClosePopup:R.Z})}}]);