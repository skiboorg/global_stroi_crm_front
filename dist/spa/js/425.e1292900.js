"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[425],{1425:(e,l,a)=>{a.r(l),a.d(l,{default:()=>oe});a(2879);var t=a(9835),o=a(6970),i=a(499),u=a(1569),n=a(8550),s=a(9876),d=a(2637),m=a(1801);const r={class:"row q-col-gutter-md q-mb-md"},p={class:"col-9"},c={class:"col-3"},v={key:0,class:"row q-col-gutter-md"},b={class:"col-9"},w={class:"col-3"},_={key:0,class:"text-negative"},g={key:1,class:"text-negative"},f={class:"text-bold"},V={key:0},W={key:1},q={key:2},y={key:4},k={key:5},h={key:6},Z={class:"q-gutter-md"},Q={class:"row q-col-gutter-md"},U={class:"col-6"},x={class:"col-6"},C={__name:"materials",setup(e){const l=(0,s.E)(),a=(0,i.iH)([]),C=(0,i.iH)([]),D=(0,i.iH)("items"),H=(0,i.iH)(null),T=(0,i.iH)(!1),z=(0,i.iH)(!1),F=(0,i.iH)(null),I=(0,i.iH)([]),P=(0,i.iH)(null),j={sortBy:"desc",descending:!1,page:1,rowsPerPage:50},S=(0,i.iH)({store:null,name:null,serial_numbers:null,unit:null,init_amount:null}),$=["шт.","м."],Y=[{name:"select",align:"left",label:"",sortable:!1},{name:"id",align:"left",label:"#",field:e=>e.id,sortable:!0},{name:"image",align:"left",label:"Изображение",field:e=>e.image,sortable:!0},{name:"store",align:"left",label:"Склад",field:e=>e.store?.address,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"serial_numbers",align:"left",label:"Серийные номера",field:e=>e.serial_numbers,sortable:!0},{name:"init_amount",align:"left",label:"Поступило",field:e=>e.init_amount,sortable:!0},{name:"amount",align:"left",label:"Oстаток",field:e=>e.amount,sortable:!0},{name:"give_amount",align:"left",label:"Передать",field:e=>e.amount,sortable:!0}];(0,t.wF)((async()=>{await B();const e=await(0,u.api)("/api/material_store/store");C.value=e.data,I.value=await l.getUsers(null,!0)}));const B=async()=>{const e=await(0,u.api)("/api/material_store/store_material");a.value=e.data},K=(0,t.Fl)((()=>{if(a.value)return a.value.some((e=>e.is_selected&&e.give_amount&&e.give_amount>0))})),O=async()=>{T.value=!0;let e=new FormData;for(let[a,t]of Object.entries(S.value))e.append(a,t);F.value&&e.append("file",F.value);try{await(0,u.api)({method:"post",url:"/api/material_store/store_material",data:e,headers:{"Content-Type":"multipart/form-data"}});(0,d.d)("positive","ТМЦ добавлен на склад"),await B(),T.value=!1,z.value=!1}catch(l){(0,d.d)("negative","Проверьте входные данные"),T.value=!1}},A=async(e,l)=>{await u.api.delete(`/api/material_store/${e}/${l}`),await B()},E=(e,l)=>{l((async()=>{if(e){T.value=!0;const l=await(0,u.api)(`/api/user/user?q=${e}&page_size=10000`);I.value=l.data,T.value=!1}}))},L=async()=>{T.value=!0;const e=a.value.filter((e=>e.is_selected&&e.give_amount>0));await u.api.post("/api/material_store/create_give_act",{store:H.value,who_get:P.value,selected_materials:e});await B(),T.value=!1};return(e,l)=>{const i=(0,t.up)("q-tab"),u=(0,t.up)("q-tabs"),s=(0,t.up)("q-separator"),d=(0,t.up)("q-select"),B=(0,t.up)("q-item-label"),G=(0,t.up)("q-item-section"),J=(0,t.up)("q-item"),M=(0,t.up)("q-btn"),N=(0,t.up)("q-th"),R=(0,t.up)("q-tr"),X=(0,t.up)("q-checkbox"),ee=(0,t.up)("q-img"),le=(0,t.up)("q-input"),ae=(0,t.up)("q-td"),te=(0,t.up)("q-table"),oe=(0,t.up)("q-tab-panel"),ie=(0,t.up)("q-tab-panels"),ue=(0,t.up)("q-file"),ne=(0,t.up)("q-card-section"),se=(0,t.up)("q-card-actions"),de=(0,t.up)("q-form"),me=(0,t.up)("q-card"),re=(0,t.up)("q-dialog"),pe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(u,{modelValue:D.value,"onUpdate:modelValue":l[0]||(l[0]=e=>D.value=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{name:"items",label:"ТМЦ"}),(0,t.Wm)(i,{name:"docs",label:"Акты"})])),_:1},8,["modelValue"]),(0,t.Wm)(s),(0,t.Wm)(ie,{modelValue:D.value,"onUpdate:modelValue":l[4]||(l[4]=e=>D.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(oe,{name:"items"},{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t._)("div",p,[(0,t.Wm)(d,{options:C.value,modelValue:H.value,"onUpdate:modelValue":l[1]||(l[1]=e=>H.value=e),clearable:"",outlined:"",dense:"","emit-value":"","option-label":"address","option-value":"id","map-options":"",label:"Выберите склад"},null,8,["options","modelValue"])]),(0,t._)("div",c,[(0,t.Wm)(n.Z,{label:"Добавить ТМЦ",onClick:l[2]||(l[2]=e=>z.value=!0),class:"q-mr-md"})])]),K.value?((0,t.wg)(),(0,t.iD)("div",v,[(0,t._)("div",b,[(0,t.Wm)(d,{class:"q-mb-xs",dense:"",outlined:"",modelValue:P.value,"onUpdate:modelValue":l[3]||(l[3]=e=>P.value=e),loading:T.value,options:I.value,"option-label":"fio",label:"Выберите пользователя","map-options":"","option-value":"id","emit-value":"","use-input":"",onFilter:E,clearable:""},{option:(0,t.w5)((e=>[(0,t.Wm)(J,(0,o.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(G,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.role?.name),1)])),_:2},1024),(0,t.Wm)(B,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Роль")])),_:1})])),_:2},1024),(0,t.Wm)(G,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.fio),1)])),_:2},1024),(0,t.Wm)(B,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"])]),(0,t._)("div",w,[(0,t.Wm)(M,{"no-caps":"",unelevated:"",color:"positive",disable:!P.value,loading:T.value,onClick:L,label:"Передать выбранное"},null,8,["disable","loading"]),H.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("p",_,"Выберите склад")),P.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("p",g,"Выберите пользователя"))])])):(0,t.kq)("",!0),(0,t.Wm)(te,{flat:"",rows:H.value?a.value.filter((e=>e.store.id===H.value)):a.value,columns:Y,pagination:j,"table-header-class":"table-header","row-key":"id",selection:"multiple",class:"q-mb-lg"},{header:(0,t.w5)((e=>[(0,t.Wm)(R,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(N,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",f,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(N,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((l=>[(0,t.Wm)(R,{props:l},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.cols,(e=>((0,t.wg)(),(0,t.j4)(ae,{key:e.name,props:l},{default:(0,t.w5)((()=>["id"===e.name?((0,t.wg)(),(0,t.iD)("pre",V,(0,o.zw)(l.rowIndex+1),1)):"store"===e.name?((0,t.wg)(),(0,t.iD)("span",W,(0,o.zw)(l.row.store?.address),1)):"select"===e.name?((0,t.wg)(),(0,t.iD)("span",q,[(0,t.Wm)(X,{modelValue:l.row.is_selected,"onUpdate:modelValue":e=>l.row.is_selected=e},null,8,["modelValue","onUpdate:modelValue"])])):"image"===e.name?((0,t.wg)(),(0,t.j4)(ee,{key:3,ratio:16/9,fit:"contain",src:e.value},null,8,["src"])):"serial_numbers"===e.name?((0,t.wg)(),(0,t.iD)("p",y,[(0,t.Wm)(le,{style:{width:"200px"},type:"textarea",label:"Серийные номера",disable:!l.row.is_selected,outlined:"",dense:"",modelValue:l.row.serial_numbers,"onUpdate:modelValue":e=>l.row.serial_numbers=e},null,8,["disable","modelValue","onUpdate:modelValue"])])):"give_amount"===e.name?((0,t.wg)(),(0,t.iD)("p",k,[(0,t.Wm)(le,{style:{width:"200px"},type:"number",onChange:e=>l.row.give_amount>l.row.amount?l.row.give_amount=l.row.amount:null,disable:!l.row.is_selected,label:"Кол-во",class:"q-mb-sm",outlined:"",dense:"",modelValue:l.row.give_amount,"onUpdate:modelValue":e=>l.row.give_amount=e},null,8,["onChange","disable","modelValue","onUpdate:modelValue"]),(0,t.Wm)(le,{style:{width:"200px"},type:"textarea",label:"Серийные номера",disable:!l.row.is_selected,outlined:"",dense:"",modelValue:l.row.give_serial_numbers,"onUpdate:modelValue":e=>l.row.give_serial_numbers=e},null,8,["disable","modelValue","onUpdate:modelValue"])])):((0,t.wg)(),(0,t.iD)("pre",h,(0,o.zw)(e.value),1))])),_:2},1032,["props"])))),128)),(0,t.Wm)(ae,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",Z,[(0,t.Wm)(M,{icon:"visibility",flat:"",dense:"",onClick:a=>e.$router.push(`/store/material/${l.row.id}`)},null,8,["onClick"]),(0,t.Wm)(n.Z,{dense:"",color:"negative",icon:"delete",onClick:e=>A("store_material",l.row.id)},null,8,["onClick"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1}),(0,t.Wm)(oe,{name:"docs"},{default:(0,t.w5)((()=>[(0,t.Wm)(m.Z)])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(re,{modelValue:z.value,"onUpdate:modelValue":l[11]||(l[11]=e=>z.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(me,{style:{width:"700px","max-width":"100vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(de,{onSubmit:O},{default:(0,t.w5)((()=>[(0,t.Wm)(ne,{class:"q-pb-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"q-mb-md",options:C.value,modelValue:S.value.store,"onUpdate:modelValue":l[5]||(l[5]=e=>S.value.store=e),clearable:"",outlined:"",dense:"","emit-value":"","option-label":"address","option-value":"id","map-options":"",label:"Выберите склад"},null,8,["options","modelValue"]),(0,t.Wm)(le,{dense:"",outlined:"",label:"Название",class:"q-mb-md",modelValue:S.value.name,"onUpdate:modelValue":l[6]||(l[6]=e=>S.value.name=e)},null,8,["modelValue"]),(0,t._)("div",Q,[(0,t._)("div",U,[(0,t.Wm)(le,{type:"number",dense:"",outlined:"",label:"Изначальное кол-во",class:"q-mb-md",modelValue:S.value.init_amount,"onUpdate:modelValue":l[7]||(l[7]=e=>S.value.init_amount=e)},null,8,["modelValue"])]),(0,t._)("div",x,[(0,t.Wm)(d,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:S.value.unit,"onUpdate:modelValue":l[8]||(l[8]=e=>S.value.unit=e),options:$,label:"Ед. измерения"},null,8,["modelValue"])])]),(0,t.Wm)(le,{class:"q-mb-md",dense:"",outlined:"",label:"Серийные номера",type:"textarea",modelValue:S.value.serial_numbers,"onUpdate:modelValue":l[9]||(l[9]=e=>S.value.serial_numbers=e)},null,8,["modelValue"]),(0,t.Wm)(ue,{outlined:"",dense:"",label:"Фото",modelValue:F.value,"onUpdate:modelValue":l[10]||(l[10]=e=>F.value=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(se,{align:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{label:"Сохранить",disable:!S.value.store,loading:T.value,"no-caps":"",color:"positive",type:"submit"},null,8,["disable","loading"]),(0,t.wy)((0,t.Wm)(M,{label:"Отмена",loading:T.value,"no-caps":"",color:"dark"},null,8,["loading"]),[[pe]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var D=a(7817),H=a(900),T=a(926),z=a(9800),F=a(4106),I=a(6384),P=a(490),j=a(6749),S=a(3115),$=a(8879),Y=a(1746),B=a(1233),K=a(1682),O=a(7220),A=a(1006),E=a(335),L=a(3119),G=a(2074),J=a(4458),M=a(8326),N=a(3190),R=a(9420),X=a(1821),ee=a(2146),le=a(9984),ae=a.n(le);const te=C,oe=te;ae()(C,"components",{QTabs:D.Z,QTab:H.Z,QSeparator:T.Z,QTabPanels:z.Z,QTabPanel:F.Z,QSelect:I.Z,QItem:P.Z,QItemSection:j.Z,QItemLabel:S.Z,QBtn:$.Z,QTable:Y.Z,QTr:B.Z,QTh:K.Z,QTd:O.Z,QCheckbox:A.Z,QImg:E.Z,QInput:L.Z,QDialog:G.Z,QCard:J.Z,QForm:M.Z,QCardSection:N.Z,QFile:R.Z,QCardActions:X.Z}),ae()(C,"directives",{ClosePopup:ee.Z})}}]);