"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[396],{2637:(e,l,a)=>{a.d(l,{d:()=>n});var o=a(6827),t=a(8346);function n(e,l){o.Z.create({message:l,html:!0,color:e,position:t.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>d});var o=a(9835);const t={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const t=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(t,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var n=a(8879),i=a(9984),u=a.n(i);const s=t,d=s;u()(t,"components",{QBtn:n.Z})},8203:(e,l,a)=>{a.d(l,{Z:()=>r});var o=a(9835);function t(e,l){const a=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(a,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:l[0]||(l[0]=l=>e.$router.back())})}var n=a(1639),i=a(8879),u=a(9984),s=a.n(u);const d={},m=(0,n.Z)(d,[["render",t]]),r=m;s()(d,"components",{QBtn:i.Z})},9396:(e,l,a)=>{a.r(l),a.d(l,{default:()=>pe});a(2879);var o=a(9835),t=a(6970),n=a(8339),i=a(499),u=a(1569),s=a(8203),d=a(8550),m=a(9876),r=a(2637);const p={key:0},c={class:"flex items-center justify-between q-mb-lg"},b={class:"no-margin text-h6 text-bold"},v={key:0,class:"row q-col-gutter-md"},w={class:"col-9"},_={class:"col-3"},g={class:"text-bold"},f={key:0},V={key:1},W={key:3},y={key:4},q={key:5},k={class:"q-gutter-md"},h={class:"text-bold"},Z={key:0},U={key:1},Q={key:3},C={class:"q-gutter-md"},x={class:"row"},D={class:"col-6"},H={class:"col-6"},j={class:"row"},T={class:"col-6"},z={class:"col-6"},$={__name:"detail",setup(e){const l=(0,m.E)(),a=(0,n.yj)(),$=(0,i.iH)(null),F=(0,i.iH)(!1),I=(0,i.iH)(!1),S=(0,i.iH)(!1),P=(0,i.iH)(null),B=(0,i.iH)(null),K=(0,i.iH)(null),Y=(0,i.iH)([]),O=(0,i.iH)(null),A=(0,i.iH)("mat"),E=["шт.","м."],L=["Новый","Б/У"],G=(0,i.iH)({store:a.params.store_id,name:null,serial_numbers:null,unit:null,init_amount:null}),J=(0,i.iH)({store:a.params.store_id,name:null,serial_number:null,price:null,condition:null}),M=[{name:"select",align:"left",label:"",sortable:!1},{name:"id",align:"left",label:"#",field:e=>e.id,sortable:!0},{name:"image",align:"left",label:"Изображение",field:e=>e.image,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"serial_numbers",align:"left",label:"Серийный номер",field:e=>e.serial_number,sortable:!0},{name:"condition",align:"left",label:"Состояние",field:e=>e.condition,sortable:!0},{name:"price",align:"left",label:"Цена",field:e=>e.price,sortable:!0},{name:"is_avaiable",align:"left",label:"На складе",field:e=>e.is_avaiable?"Да":"Выдан",sortable:!0}],N=[{name:"select",align:"left",label:"",sortable:!1},{name:"id",align:"left",label:"#",field:e=>e.id,sortable:!0},{name:"image",align:"left",label:"Изображение",field:e=>e.image,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"serial_numbers",align:"left",label:"Серийные номера",field:e=>e.serial_numbers,sortable:!0},{name:"init_amount",align:"left",label:"Поступило",field:e=>e.init_amount,sortable:!0},{name:"amount",align:"left",label:"Oстаток",field:e=>e.amount,sortable:!0},{name:"give_amount",align:"left",label:"Передать",field:e=>e.amount,sortable:!0}],R=(0,o.Fl)((()=>{if($.value){const e=$.value.materials.some((e=>e.is_selected&&e.give_amount&&e.give_amount>0)),l=$.value.tools.some((e=>e.is_selected));return e||l}}));(0,o.wF)((async()=>{await X(),Y.value=await l.getUsers(null,!0)}));const X=async()=>{const e=await(0,u.api)(`/api/material_store/store/${a.params.store_id}?full=true`);$.value=e.data},ee=async()=>{F.value=!0;let e=new FormData;for(let[a,o]of Object.entries(G.value))e.append(a,o);P.value&&e.append("file",P.value);try{await(0,u.api)({method:"post",url:"/api/material_store/store_material",data:e,headers:{"Content-Type":"multipart/form-data"}});(0,r.d)("positive","Материал добавлен на склад"),await X(),F.value=!1,I.value=!1}catch(l){(0,r.d)("negative","Проверьте входные данные"),F.value=!1}},le=async()=>{F.value=!0;let e=new FormData;for(let[a,o]of Object.entries(J.value))e.append(a,o);B.value&&e.append("file",B.value),K.value&&e.append("doc",K.value);try{await(0,u.api)({method:"post",url:"/api/material_store/store_tool",data:e,headers:{"Content-Type":"multipart/form-data"}});(0,r.d)("positive","Инструмент добавлен на склад"),await X(),F.value=!1,S.value=!1}catch(l){(0,r.d)("negative","Проверьте входные данные"),F.value=!1}},ae=async(e,l)=>{await u.api.delete(`/api/material_store/${e}/${l}`),await X()},oe=(e,l)=>{l((async()=>{if(e){F.value=!0;const l=await(0,u.api)(`/api/user/user?q=${e}&page_size=10000`);Y.value=l.data,F.value=!1}}))},te=async()=>{F.value=!0;const e=$.value.materials.filter((e=>e.is_selected&&e.give_amount>0)),l=$.value.tools.filter((e=>e.is_selected));await u.api.post("/api/material_store/create_give_act",{store:a.params.store_id,who_get:O.value,selected_materials:e,selected_tools:l});await X(),F.value=!1};return(e,l)=>{const a=(0,o.up)("q-space"),n=(0,o.up)("q-item-label"),i=(0,o.up)("q-item-section"),u=(0,o.up)("q-item"),m=(0,o.up)("q-select"),r=(0,o.up)("q-btn"),X=(0,o.up)("q-tab"),ne=(0,o.up)("q-tabs"),ie=(0,o.up)("q-separator"),ue=(0,o.up)("q-th"),se=(0,o.up)("q-tr"),de=(0,o.up)("q-checkbox"),me=(0,o.up)("q-img"),re=(0,o.up)("q-input"),pe=(0,o.up)("q-td"),ce=(0,o.up)("q-table"),be=(0,o.up)("q-tab-panel"),ve=(0,o.up)("q-tab-panels"),we=(0,o.up)("q-file"),_e=(0,o.up)("q-card-section"),ge=(0,o.up)("q-card-actions"),fe=(0,o.up)("q-form"),Ve=(0,o.up)("q-card"),We=(0,o.up)("q-dialog"),ye=(0,o.up)("q-page"),qe=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(ye,{padding:""},{default:(0,o.w5)((()=>[$.value?((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",c,[(0,o.Wm)(s.Z),(0,o._)("p",b,"Информация о складе ID "+(0,t.zw)($.value.id),1),(0,o.Wm)(a),(0,o.Wm)(d.Z,{label:"Добавить материал",onClick:l[0]||(l[0]=e=>I.value=!0),class:"q-mr-md"}),(0,o.Wm)(d.Z,{label:"Добавить инструмент",onClick:l[1]||(l[1]=e=>S.value=!0)})]),R.value?((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",w,[(0,o.Wm)(m,{class:"q-mb-xs",dense:"",outlined:"",modelValue:O.value,"onUpdate:modelValue":l[2]||(l[2]=e=>O.value=e),loading:F.value,options:Y.value,"option-label":"fio",label:"Выберите пользователя","map-options":"","option-value":"id","emit-value":"","use-input":"",onFilter:oe,clearable:""},{option:(0,o.w5)((e=>[(0,o.Wm)(u,(0,t.vs)((0,o.F4)(e.itemProps)),{default:(0,o.w5)((()=>[(0,o.Wm)(i,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.opt.role?.name),1)])),_:2},1024),(0,o.Wm)(n,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Роль")])),_:1})])),_:2},1024),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(e.opt.fio),1)])),_:2},1024),(0,o.Wm)(n,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"])]),(0,o._)("div",_,[(0,o.Wm)(r,{"no-caps":"",unelevated:"",color:"positive",disable:!O.value,loading:F.value,onClick:te,label:"Передать выбранное"},null,8,["disable","loading"])])])):(0,o.kq)("",!0),(0,o.Wm)(ne,{modelValue:A.value,"onUpdate:modelValue":l[3]||(l[3]=e=>A.value=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{name:"mat",label:"Материалы"}),(0,o.Wm)(X,{name:"tool",label:"Инструменты"})])),_:1},8,["modelValue"]),(0,o.Wm)(ie),(0,o.Wm)(ve,{modelValue:A.value,"onUpdate:modelValue":l[4]||(l[4]=e=>A.value=e),animated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(be,{name:"mat"},{default:(0,o.w5)((()=>[(0,o.Wm)(ce,{flat:"",rows:$.value?.materials,columns:N,"hide-pagination":"","table-header-class":"table-header","row-key":"id",selection:"multiple",class:"q-mb-lg"},{header:(0,o.w5)((e=>[(0,o.Wm)(se,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(ue,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",g,(0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(ue,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((l=>[(0,o.Wm)(se,{props:l},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.cols,(e=>((0,o.wg)(),(0,o.j4)(pe,{key:e.name,props:l},{default:(0,o.w5)((()=>["id"===e.name?((0,o.wg)(),(0,o.iD)("pre",f,(0,t.zw)(l.rowIndex+1),1)):"select"===e.name?((0,o.wg)(),(0,o.iD)("span",V,[(0,o.Wm)(de,{modelValue:l.row.is_selected,"onUpdate:modelValue":e=>l.row.is_selected=e},null,8,["modelValue","onUpdate:modelValue"])])):"image"===e.name?((0,o.wg)(),(0,o.j4)(me,{key:2,ratio:16/9,fit:"contain",src:e.value},null,8,["src"])):"serial_numbers"===e.name?((0,o.wg)(),(0,o.iD)("p",W,[(0,o.Wm)(re,{style:{width:"200px"},type:"textarea",label:"Серийные номера",disable:!l.row.is_selected,outlined:"",dense:"",modelValue:l.row.serial_numbers,"onUpdate:modelValue":e=>l.row.serial_numbers=e},null,8,["disable","modelValue","onUpdate:modelValue"])])):"give_amount"===e.name?((0,o.wg)(),(0,o.iD)("p",y,[(0,o.Wm)(re,{style:{width:"200px"},type:"number",onChange:e=>l.row.give_amount>l.row.amount?l.row.give_amount=l.row.amount:null,disable:!l.row.is_selected,label:"Кол-во",class:"q-mb-sm",outlined:"",dense:"",modelValue:l.row.give_amount,"onUpdate:modelValue":e=>l.row.give_amount=e},null,8,["onChange","disable","modelValue","onUpdate:modelValue"]),(0,o.Wm)(re,{style:{width:"200px"},type:"textarea",label:"Серийные номера",disable:!l.row.is_selected,outlined:"",dense:"",modelValue:l.row.give_serial_numbers,"onUpdate:modelValue":e=>l.row.give_serial_numbers=e},null,8,["disable","modelValue","onUpdate:modelValue"])])):((0,o.wg)(),(0,o.iD)("pre",q,(0,t.zw)(e.value),1))])),_:2},1032,["props"])))),128)),(0,o.Wm)(pe,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",k,[(0,o.Wm)(r,{icon:"visibility",flat:"",dense:"",onClick:a=>e.$router.push(`/store/material/${l.row.id}`)},null,8,["onClick"]),(0,o.Wm)(d.Z,{dense:"",color:"negative",icon:"delete",onClick:e=>ae("store_material",l.row.id)},null,8,["onClick"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1}),(0,o.Wm)(be,{name:"tool"},{default:(0,o.w5)((()=>[(0,o.Wm)(ce,{flat:"",rows:$.value?.tools,columns:M,"hide-pagination":"","table-header-class":"table-header","row-key":"id",selection:"multiple"},{header:(0,o.w5)((e=>[(0,o.Wm)(se,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(ue,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",h,(0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(ue,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((l=>[(0,o.Wm)(se,{props:l},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.cols,(e=>((0,o.wg)(),(0,o.j4)(pe,{key:e.name,props:l},{default:(0,o.w5)((()=>["id"===e.name?((0,o.wg)(),(0,o.iD)("pre",Z,(0,t.zw)(l.rowIndex+1),1)):"select"===e.name?((0,o.wg)(),(0,o.iD)("span",U,[(0,o.Wm)(de,{disable:!l.row.is_avaiable,modelValue:l.row.is_selected,"onUpdate:modelValue":e=>l.row.is_selected=e},null,8,["disable","modelValue","onUpdate:modelValue"])])):"image"===e.name?((0,o.wg)(),(0,o.j4)(me,{key:2,ratio:16/9,fit:"contain",src:e.value},null,8,["src"])):((0,o.wg)(),(0,o.iD)("pre",Q,(0,t.zw)(e.value),1))])),_:2},1032,["props"])))),128)),(0,o.Wm)(pe,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o._)("div",C,[(0,o.Wm)(r,{icon:"visibility",flat:"",dense:"",onClick:a=>e.$router.push(`/store/tool/${l.row.id}`)},null,8,["onClick"]),(0,o.Wm)(d.Z,{dense:"",color:"negative",icon:"delete",onClick:e=>ae("store_tool",l.row.id)},null,8,["onClick"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(We,{modelValue:I.value,"onUpdate:modelValue":l[10]||(l[10]=e=>I.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(Ve,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(fe,{onSubmit:ee},{default:(0,o.w5)((()=>[(0,o.Wm)(_e,{class:"q-pb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(re,{dense:"",outlined:"",label:"Название",class:"q-mb-md",modelValue:G.value.name,"onUpdate:modelValue":l[5]||(l[5]=e=>G.value.name=e)},null,8,["modelValue"]),(0,o._)("div",x,[(0,o._)("div",D,[(0,o.Wm)(re,{type:"number",dense:"",outlined:"",label:"Изначальное кол-во",class:"q-mb-md",modelValue:G.value.init_amount,"onUpdate:modelValue":l[6]||(l[6]=e=>G.value.init_amount=e)},null,8,["modelValue"])]),(0,o._)("div",H,[(0,o.Wm)(m,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:G.value.unit,"onUpdate:modelValue":l[7]||(l[7]=e=>G.value.unit=e),options:E,label:"Ед. измерения"},null,8,["modelValue"])])]),(0,o.Wm)(re,{class:"q-mb-md",dense:"",outlined:"",label:"Серийные номера",type:"textarea",modelValue:G.value.serial_numbers,"onUpdate:modelValue":l[8]||(l[8]=e=>G.value.serial_numbers=e)},null,8,["modelValue"]),(0,o.Wm)(we,{outlined:"",dense:"",label:"Фото",modelValue:P.value,"onUpdate:modelValue":l[9]||(l[9]=e=>P.value=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(ge,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{label:"Сохранить",loading:F.value,"no-caps":"",color:"positive",type:"submit"},null,8,["loading"]),(0,o.wy)((0,o.Wm)(r,{label:"Отмена",loading:F.value,"no-caps":"",color:"dark"},null,8,["loading"]),[[qe]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(We,{modelValue:S.value,"onUpdate:modelValue":l[17]||(l[17]=e=>S.value=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(Ve,{style:{width:"700px","max-width":"100vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(fe,{onSubmit:le},{default:(0,o.w5)((()=>[(0,o.Wm)(_e,{class:"q-pb-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(re,{dense:"",outlined:"",label:"Название",class:"q-mb-md",modelValue:J.value.name,"onUpdate:modelValue":l[11]||(l[11]=e=>J.value.name=e)},null,8,["modelValue"]),(0,o._)("div",j,[(0,o._)("div",T,[(0,o.Wm)(re,{type:"number",dense:"",outlined:"",label:"Стоимость",class:"q-mb-md",modelValue:J.value.price,"onUpdate:modelValue":l[12]||(l[12]=e=>J.value.price=e)},null,8,["modelValue"])]),(0,o._)("div",z,[(0,o.Wm)(m,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:J.value.condition,"onUpdate:modelValue":l[13]||(l[13]=e=>J.value.condition=e),options:L,label:"Состояние"},null,8,["modelValue"])])]),(0,o.Wm)(re,{class:"q-mb-md",dense:"",outlined:"",label:"Серийный номер",modelValue:J.value.serial_number,"onUpdate:modelValue":l[14]||(l[14]=e=>J.value.serial_number=e)},null,8,["modelValue"]),(0,o.Wm)(we,{class:"q-mb-md",outlined:"",dense:"",label:"Фото",modelValue:B.value,"onUpdate:modelValue":l[15]||(l[15]=e=>B.value=e)},null,8,["modelValue"]),(0,o.Wm)(we,{outlined:"",dense:"",label:"Товарный чек, счет на покупку",modelValue:K.value,"onUpdate:modelValue":l[16]||(l[16]=e=>K.value=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(ge,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{label:"Сохранить",loading:F.value,"no-caps":"",color:"positive",type:"submit"},null,8,["loading"]),(0,o.wy)((0,o.Wm)(r,{label:"Отмена",loading:F.value,"no-caps":"",color:"dark"},null,8,["loading"]),[[qe]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])):(0,o.kq)("",!0)])),_:1})}}};var F=a(9885),I=a(136),S=a(6384),P=a(490),B=a(6749),K=a(3115),Y=a(8879),O=a(7817),A=a(900),E=a(926),L=a(9800),G=a(4106),J=a(1746),M=a(1233),N=a(1682),R=a(7220),X=a(1006),ee=a(335),le=a(3119),ae=a(2074),oe=a(4458),te=a(8326),ne=a(3190),ie=a(9420),ue=a(1821),se=a(2146),de=a(9984),me=a.n(de);const re=$,pe=re;me()($,"components",{QPage:F.Z,QSpace:I.Z,QSelect:S.Z,QItem:P.Z,QItemSection:B.Z,QItemLabel:K.Z,QBtn:Y.Z,QTabs:O.Z,QTab:A.Z,QSeparator:E.Z,QTabPanels:L.Z,QTabPanel:G.Z,QTable:J.Z,QTr:M.Z,QTh:N.Z,QTd:R.Z,QCheckbox:X.Z,QImg:ee.Z,QInput:le.Z,QDialog:ae.Z,QCard:oe.Z,QForm:te.Z,QCardSection:ne.Z,QFile:ie.Z,QCardActions:ue.Z}),me()($,"directives",{ClosePopup:se.Z})}}]);