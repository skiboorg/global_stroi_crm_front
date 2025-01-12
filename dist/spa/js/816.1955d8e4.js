"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[816],{1816:(e,l,t)=>{t.r(l),t.d(l,{default:()=>me});t(2879);var a=t(9835),o=t(6970),n=t(499),s=t(1569),u=t(8339),d=t(8550),i=t(1862),r=t(6928),c=t(8203),_=t(8227);t(1375);const p={key:0,class:"q-mb-md"},m={class:"flex items-center justify-between q-mb-md"},w={class:"no-margin text-h6 text-bold"},b=(0,a._)("p",{class:"text-h6 text-bold"},"Общие данные",-1),v={class:"object-tables-grid items-start no-wrap",style:{gap:"8px"}},g={class:"info-table q-mb-lg"},k=(0,a._)("td",null,[(0,a._)("span",{class:"text-bold"},"Адрес ")],-1),y=(0,a._)("td",null,[(0,a._)("span",{class:"text-bold"},"Подрядчик ")],-1),f=(0,a._)("td",null,[(0,a._)("span",{class:"text-bold"},"Сумма договора ")],-1),x=(0,a._)("td",null,[(0,a._)("span",{class:"text-bold"},"Сумма аванса ")],-1),h=(0,a._)("td",null,[(0,a._)("span",{class:"text-bold"},"Выполнено работ ")],-1),q=(0,a._)("td",null,[(0,a._)("span",{class:"text-bold"},"Сумма к оплате ")],-1),D={key:1,class:"q-gutter-md q-mb-md"},C={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},V=(0,a._)("div",{class:"col"},[(0,a._)("div",{class:"q-uploader__title"},"Выберите файл для загрузки в формате Наименованое, единица измерения, кол-во, цена за единицу, после выбора файла нажмите кнопку загрузить"),(0,a._)("div",{class:"q-uploader__subtitle"},"xls или xlsx")],-1),j=(0,a._)("p",{class:"text-h6 text-bold"},"Расчет стоимости",-1),U={class:"object-tables-grid items-start no-wrap",style:{gap:"8px"}},z={class:"table q-mb-md"},Z={style:{height:"118px"},class:"table-head-row"},W=(0,a._)("td",{style:{width:"0px"}},"№",-1),H=(0,a._)("td",{style:{width:"700px"}},"Наименование",-1),S=(0,a._)("td",null,"Ед. изм",-1),F=(0,a._)("td",null,"Кол-во",-1),L=(0,a._)("td",null,"Текущий остаток",-1),Q=(0,a._)("td",null,"Цена",-1),T=(0,a._)("td",null,"Общая стоимость",-1),$={key:0},P={class:"text-center"},A={class:"text-center"},K={key:0},Y={class:"table-row"},I=(0,a._)("td",{colspan:"5"},null,-1),B=(0,a._)("td",{class:"text-bold"},"Итого",-1),E={class:"text-bold"},G={class:"table-wrapper"},J={class:"object-subtables-grid items-start no-wrap",style:{gap:"8px"}},M={class:"table"},N={class:"table-head-row"},O={colspan:"4"},R=(0,a._)("tr",{class:"table-subhead-row"},[(0,a._)("td",null,"План"),(0,a._)("td",null,"Факт"),(0,a._)("td",null,"Сумма к оплате")],-1),X={class:"text-center"},ee={key:0},le={key:1,style:{"text-align":"center !important"}},te=(0,a._)("br",null,null,-1),ae={__name:"object",setup(e){const l=(0,r.t)(),t=(0,n.iH)({}),ae=(0,n.iH)([]),oe=(0,n.iH)([]),ne=(0,n.iH)(!1),se=(0,n.iH)(!1),ue=(0,n.iH)({date:(new Date).toLocaleDateString(),total_done_work_percent:0,total_to_pay:0,items:[],is_new:!0}),de=(0,u.yj)(),ie=(0,n.iH)(!1),re=["м.","шт","уп.","усл."];(0,a.wF)((async()=>{await ce()}));const ce=async()=>{const e=await(0,s.api)(`/api/catalog/object/${de.params.id}?full=true`);t.value=e.data,ae.value=t.value.items,oe.value=t.value.dates},_e=(0,a.Fl)((()=>{let e=!0,l=!0;for(let t of ae.value){if(0===t.total_amount){e=!1;break}if(0===t.price_per_unit){l=!1;break}}return e&&l})),pe=async()=>{await s.api.post("/api/catalog/object/save_table",t.value);await ce(),se.value=!1},me=async()=>{await s.api.post("/api/catalog/object/update_table",t.value);await ce(),ie.value=!1},we=async e=>{ae.value[e].is_new?(console.log("new"),ae.value.splice(e,1)):(console.log("old"),await s.api.delete(`/api/catalog/object_item/${ae.value[e].id}`),await ce())},be=async e=>{console.log(e);const l=new FormData;l.append("file",e[0]);const{data:t}=await s.api.post("/api/catalog/object/upload_xls",l,{headers:{"Content-Type":"multipart/form-data"}});t.success&&(console.log(t),t.data.forEach((e=>{ae.value.push({is_new:!0,name:e["Наименование"],unit:e["Ед. изм."],total_amount:e["Кол-во"],today_ostatok:0,price_per_unit:e["Цена "],total_price:e["Общая стоимость"]})})),se.value=!0)},ve=()=>{se.value=!0,ae.value.push({is_new:!0,name:null,unit:null,total_amount:0,today_ostatok:0,price_per_unit:0,total_price:0})},ge=()=>{for(let e of oe.value)if(new Date(e.date).toLocaleDateString()===(new Date).toLocaleDateString())return;oe.value.push(ue.value),ne.value=!0;for(let e of ae.value)ue.value.items.push({plan_amount:0,fact_amount:0,done_work_percent:0,to_pay:0,item:e.id})};return(e,s)=>{const u=(0,a.up)("q-uploader-add-trigger"),r=(0,a.up)("q-tooltip"),ue=(0,a.up)("q-btn"),de=(0,a.up)("q-uploader"),ce=(0,a.up)("q-input"),ke=(0,a.up)("q-select"),ye=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(ye,{padding:""},{default:(0,a.w5)((()=>[t.value.id?((0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",m,[(0,a.Wm)(c.Z),(0,a._)("p",w,"Проект ID:"+(0,o.zw)(t.value.id)+" - "+(0,o.zw)(t.value.name),1)]),b,(0,a._)("div",v,[(0,a._)("table",g,[(0,a._)("tr",null,[k,(0,a._)("td",null,(0,o.zw)(t.value.address),1)]),(0,a._)("tr",null,[y,(0,a._)("td",null,(0,o.zw)(t.value.subworker?.fio),1)]),(0,a._)("tr",null,[f,(0,a._)("td",null,(0,o.zw)(e.$filters.formatPrice(t.value.total))+" руб",1)]),(0,a._)("tr",null,[x,(0,a._)("td",null,(0,o.zw)(e.$filters.formatPrice(t.value.avans))+" руб",1)]),(0,a._)("tr",null,[h,(0,a._)("td",null,(0,o.zw)(t.value.procent_done)+" %",1)]),(0,a._)("tr",null,[q,(0,a._)("td",null,(0,o.zw)(e.$filters.formatPrice(t.value.to_pay))+" руб",1)])])])])):(0,a.kq)("",!0),t.value.procent_done<100?((0,a.wg)(),(0,a.iD)("div",D,[0!==t.value.dates?.length||ie.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(de,{key:0,factory:be,accept:".xls, .xlsx ",style:{"max-width":"300px"}},{header:(0,a.w5)((e=>[(0,a._)("div",C,[V,e.canAddFiles?((0,a.wg)(),(0,a.j4)(ue,{key:0,type:"a",icon:"add_box",onClick:e.pickFiles,round:"",dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Выбрать")])),_:1})])),_:2},1032,["onClick"])):(0,a.kq)("",!0),e.canUpload?((0,a.wg)(),(0,a.j4)(ue,{key:1,icon:"cloud_upload",onClick:e.upload,round:"",dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Загрузить")])),_:1})])),_:2},1032,["onClick"])):(0,a.kq)("",!0),e.isUploading?((0,a.wg)(),(0,a.j4)(ue,{key:2,icon:"clear",onClick:e.abort,round:"",dense:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Abort Upload")])),_:1})])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])])),_:1})),t.value.is_items_added&&t.value.items?.length>0&&!ne.value?((0,a.wg)(),(0,a.j4)(i.Z,{key:1,class:"q-mb-md",label:"Редактировать таблицу",color:"warning",onClick:s[0]||(s[0]=e=>ie.value=!0)})):(0,a.kq)("",!0),t.value.is_items_added&&t.value.items?.length>0&&!ne.value&&!ie.value?((0,a.wg)(),(0,a.j4)(d.Z,{key:2,class:"q-mb-md",label:"Добавить дату",color:"positive",onClick:ge})):(0,a.kq)("",!0)])):(0,a.kq)("",!0),j,(0,a._)("div",U,[(0,a._)("table",z,[(0,a._)("tr",Z,[W,H,S,F,L,Q,T,0===t.value.dates?.length?((0,a.wg)(),(0,a.iD)("td",$)):(0,a.kq)("",!0)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(ae.value,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{class:"table-row",key:l},[(0,a._)("td",P,(0,o.zw)(l+1),1),(0,a._)("td",null,[(0,a.Wm)(ce,{readonly:!ie.value&&!e.is_new,dense:"",standout:"",borderless:!ie.value&&!e.is_new,class:"input-no-center",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["readonly","borderless","modelValue","onUpdate:modelValue"]),e.name?.length>50?((0,a.wg)(),(0,a.j4)(r,{key:0},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.name),1)])),_:2},1024)):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a.Wm)(ke,{readonly:!ie.value&&!e.is_new,dense:"",borderless:!ie.value&&!e.is_new,class:"text-center",standout:"",options:re,modelValue:e.unit,"onUpdate:modelValue":l=>e.unit=l},null,8,["readonly","borderless","modelValue","onUpdate:modelValue"])]),(0,a._)("td",null,[(0,a.Wm)(ce,{onFocus:s[1]||(s[1]=e=>e.target.select()),type:"number",readonly:!ie.value&&!e.is_new,dense:"",standout:"",class:"text-center",onChange:l=>e.total_amount?null:e.total_amount=0,borderless:!ie.value&&!e.is_new,modelValue:e.total_amount,"onUpdate:modelValue":l=>e.total_amount=l},null,8,["readonly","onChange","borderless","modelValue","onUpdate:modelValue"])]),(0,a._)("td",A,(0,o.zw)(e.today_ostatok),1),(0,a._)("td",null,[(0,a.Wm)(ce,{onFocus:s[2]||(s[2]=e=>e.target.select()),type:"number",readonly:!ie.value&&!e.is_new,dense:"",standout:"",class:"text-center",onChange:l=>e.price_per_unit?null:e.price_per_unit=0,borderless:!ie.value&&!e.is_new,modelValue:e.price_per_unit,"onUpdate:modelValue":l=>e.price_per_unit=l},null,8,["readonly","onChange","borderless","modelValue","onUpdate:modelValue"])]),(0,a._)("td",null,(0,o.zw)(e.total_price),1),0===t.value.dates?.length?((0,a.wg)(),(0,a.iD)("td",K,[(0,a.Wm)(_.Z,{onConfirm:e=>we(l)},null,8,["onConfirm"])])):(0,a.kq)("",!0)])))),128)),(0,a._)("tr",Y,[I,B,(0,a._)("td",E,(0,o.zw)(t.value.total_items_price),1)])]),(0,a._)("div",G,[(0,a._)("div",J,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(oe.value,((e,t)=>((0,a.wg)(),(0,a.iD)("table",M,[(0,a._)("tr",N,[(0,a._)("td",O,(0,o.zw)(e.is_new?e.date:new Date(e.date).toLocaleDateString()),1)]),R,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.items,((t,u)=>((0,a.wg)(),(0,a.iD)("tr",{class:"table-row",key:u},[(0,a._)("td",X,[(0,a.Wm)(ce,{type:"number",class:"text-center",onFocus:s[3]||(s[3]=e=>e.target.select()),onChange:e=>t.plan_amount>ae.value.find((e=>e.id===t.item)).today_ostatok?t.plan_amount=ae.value.find((e=>e.id===t.item)).today_ostatok:null,dense:"",autofocus:e.is_new,standout:"",borderless:!e.is_new,modelValue:t.plan_amount,"onUpdate:modelValue":e=>t.plan_amount=e},null,8,["onChange","autofocus","borderless","modelValue","onUpdate:modelValue"])]),(0,n.SU)(l).user.role.is_subworker&&(new Date).toLocaleDateString()===new Date(e.date).toLocaleDateString()&&(new Date).toLocaleTimeString()>="10:00:00"?((0,a.wg)(),(0,a.iD)("td",ee,[(0,a.Wm)(ce,{class:"text-center",type:"number",onFocus:s[4]||(s[4]=e=>e.target.select()),onChange:e=>t.fact_amount>ae.value.find((e=>e.id===t.item)).today_ostatok?t.fact_amount=ae.value.find((e=>e.id===t.item)).today_ostatok:null,dense:"",standout:"",modelValue:t.fact_amount,"onUpdate:modelValue":e=>t.fact_amount=e},null,8,["onChange","modelValue","onUpdate:modelValue"])])):((0,a.wg)(),(0,a.iD)("td",le,(0,o.zw)(t.fact_amount),1)),(0,a._)("td",null,(0,o.zw)(t.to_pay),1)])))),128))])))),256))])])]),0!==t.value.dates?.length||ie.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(d.Z,{key:2,class:"q-mb-md",label:"Добавить товар",color:"primary",onClick:ve})),te,!ie.value&&0===t.value.dates?.length&&ae.value.length>0&&se.value?((0,a.wg)(),(0,a.j4)(d.Z,{key:3,disable:!_e.value,class:"q-mb-md",icon:"save",label:"Сохранить таблицу",color:"positive",onClick:pe},null,8,["disable"])):(0,a.kq)("",!0),ie.value||ne.value?((0,a.wg)(),(0,a.j4)(d.Z,{key:4,class:"q-mb-md",label:"Обновить таблицу",disable:!_e.value,icon:"save",color:"positive",onClick:me},null,8,["disable"])):(0,a.kq)("",!0),(0,n.SU)(l).user.role.is_subworker?((0,a.wg)(),(0,a.j4)(ue,{key:5,"no-caps":"",unelevated:"",class:"q-mb-md",label:"Сохранить таблицу",icon:"save",color:"positive",onClick:me})):(0,a.kq)("",!0)])),_:1})}}};var oe=t(9885),ne=t(4539),se=t(8879),ue=t(6246),de=t(6858),ie=t(3119),re=t(6384),ce=t(9984),_e=t.n(ce);const pe=ae,me=pe;_e()(ae,"components",{QPage:oe.Z,QUploader:ne.Z,QBtn:se.Z,QUploaderAddTrigger:ue.Z,QTooltip:de.Z,QInput:ie.Z,QSelect:re.Z})}}]);