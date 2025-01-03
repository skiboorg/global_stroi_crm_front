"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[200],{2200:(e,l,a)=>{a.r(l),a.d(l,{default:()=>K});var t=a(9835),n=a(6970),o=a(499),u=a(1569),d=a(8550),i=a(1862),s=a(9876),r=a(4139),m=a(2637),p=a(8227),c=(a(8203),a(1375));const v={class:"flex items-center justify-between q-mb-md"},_=(0,t._)("p",{class:"no-margin text-h6 text-bold"},"Доверенности ",-1),b={class:"row q-col-gutter-md q-mb-md"},g={class:"col-12 col-md-10"},f={class:"col-12 col-md-2"},w={class:"text-bold"},q=["innerHTML"],V={class:"q-gutter-md"},W={key:1},h=["href"],y={__name:"doverennosti",setup(e){(0,s.E)();const l=[{name:"inner_id",align:"left",label:"Номер",field:e=>e.inner_id,sortable:!0},{name:"name",align:"left",label:"Наименование",field:e=>e.name,sortable:!0},{name:"receiver",align:"left",label:"Получатель",field:e=>e.receiver,sortable:!0},{name:"start_date",align:"left",label:"Дата начала",field:e=>new Date(e.start_date).toLocaleDateString(),sortable:!0},{name:"end_date",align:"left",label:"Дата окончания",field:e=>new Date(e.end_date).toLocaleDateString(),sortable:!0},{name:"amount",align:"left",label:"Кол-во экземпляров",field:e=>e.amount,sortable:!0},{name:"file",align:"left",label:"Файл",field:e=>e.file?`<a href="${e.file}" target="_blank">Открыть</a>`:"Нет",sortable:!0}],a=(0,o.iH)(!1),y=((0,o.iH)(!1),(0,o.iH)({}),(0,o.iH)(null),(0,o.iH)({id:null,name:null,inner_id:null,receiver:null,start_date:null,end_date:null,amount:null,file:null})),Z={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},k=(0,o.iH)(1),D=(0,o.iH)(!1),H=(0,o.iH)([]),Q=(0,o.iH)(5),C=(0,o.iH)(null),S=(0,o.iH)({q:""}),x=async()=>{console.log(k.value),await U()};(0,t.wF)((async()=>{await U()}));const U=async()=>{D.value=!D.value;const e=await(0,u.api)(`/api/catalog/doverennost?page=${k.value}&q=${S.value.q}`);H.value=e.data.results,Q.value=Math.ceil(e.data.count/15),D.value=!D.value},T=async e=>{await u.api.delete(`/api/catalog/doverennost/${e}`),await U()},L=e=>{e?(y.value=e,y.value.start_date=y.value.start_date?new Date(y.value.start_date).toLocaleDateString():null,y.value.end_date=y.value.end_date?new Date(y.value.end_date).toLocaleDateString():null):y.value={id:null,inner_id:null,name:null,receiver:null,start_date:null,end_date:null,amount:null},a.value=!0},j=async()=>{let e,l=new FormData;delete y.value.file;for(let[a,t]of Object.entries(y.value))l.append(a,JSON.stringify(t));C.value&&l.append("file",C.value),e=y.value.id?await(0,u.api)({method:"put",url:`/api/catalog/doverennost/${y.value.id}`,data:l,headers:{"Content-Type":"multipart/form-data"}}):await(0,u.api)({method:"post",url:"/api/catalog/doverennost",data:l,headers:{"Content-Type":"multipart/form-data"}}),(0,m.d)(e.data.success?"positive":"negative",e.data.message),await U(),a.value=!1,C.value=null},P=e=>{y.value.start_date=new Date(e).toLocaleDateString()},$=e=>{y.value.end_date=new Date(e).toLocaleDateString()};return(e,o)=>{const u=(0,t.up)("q-space"),s=(0,t.up)("q-input"),m=(0,t.up)("q-btn"),F=(0,t.up)("q-th"),M=(0,t.up)("q-tr"),Y=(0,t.up)("q-td"),z=(0,t.up)("q-table"),B=(0,t.up)("q-pagination"),K=(0,t.up)("q-page"),O=(0,t.up)("q-file"),A=(0,t.up)("q-card-section"),E=(0,t.up)("q-card-actions"),I=(0,t.up)("q-form"),J=(0,t.up)("q-card"),N=(0,t.up)("q-dialog"),G=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(K,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(c.Z),(0,t._)("div",v,[_,(0,t.Wm)(u),(0,t.Wm)(d.Z,{icon:"add",label:"Добавить",onClick:o[0]||(o[0]=e=>L(null))})]),(0,t._)("div",b,[(0,t._)("div",g,[(0,t.Wm)(s,{dense:"",modelValue:S.value.q,"onUpdate:modelValue":o[1]||(o[1]=e=>S.value.q=e),label:"Поиск по названию, номеру, получателю",outlined:""},null,8,["modelValue"])]),(0,t._)("div",f,[(0,t.Wm)(m,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:U})])]),(0,t.Wm)(z,{flat:"",rows:H.value,columns:l,"row-key":"name","hide-pagination":"",pagination:Z,"onUpdate:pagination":o[2]||(o[2]=e=>Z=e),loading:D.value,"table-header-class":"table-header"},{header:(0,t.w5)((e=>[(0,t.Wm)(M,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(F,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",w,(0,n.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(F,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(M,{props:e},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(Y,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",{innerHTML:l.value},null,8,q)])),_:2},1032,["props"])))),128)),(0,t.Wm)(Y,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",V,[(0,t.Wm)(i.Z,{dense:"",onClick:l=>L(e.row)},null,8,["onClick"]),(0,t.Wm)(p.Z,{onConfirm:l=>T(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,t.Wm)(B,{modelValue:k.value,"onUpdate:modelValue":[o[3]||(o[3]=e=>k.value=e),x],max:Q.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,t.Wm)(N,{modelValue:a.value,"onUpdate:modelValue":o[11]||(o[11]=e=>a.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{style:{width:"700px","max-width":"100vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{onSubmit:j},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"q-pb-none"},{default:(0,t.w5)((()=>[y.value.inner_id?((0,t.wg)(),(0,t.j4)(s,{key:0,class:"q-mb-md",outlined:"",dense:"",label:"Внутренний номер",modelValue:y.value.inner_id,"onUpdate:modelValue":o[4]||(o[4]=e=>y.value.inner_id=e)},null,8,["modelValue"])):(0,t.kq)("",!0),(0,t.Wm)(s,{outlined:"",dense:"",label:"Наименование документа",modelValue:y.value.name,"onUpdate:modelValue":o[5]||(o[5]=e=>y.value.name=e),"lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,t.Wm)(s,{class:"q-mb-md",outlined:"",dense:"",label:"Получатель",modelValue:y.value.receiver,"onUpdate:modelValue":o[6]||(o[6]=e=>y.value.receiver=e)},null,8,["modelValue"]),(0,t.Wm)(r.Z,{dense:"",class:"q-mb-md",modelValue:y.value.start_date,"onUpdate:modelValue":o[7]||(o[7]=e=>y.value.start_date=e),label:"Дата начала",onSelected:P},null,8,["modelValue"]),(0,t.Wm)(r.Z,{dense:"",class:"q-mb-md",modelValue:y.value.end_date,"onUpdate:modelValue":o[8]||(o[8]=e=>y.value.end_date=e),label:"Дата окончания",onSelected:$},null,8,["modelValue"]),(0,t.Wm)(s,{class:"q-mb-md",outlined:"",dense:"",label:"Кол-во экземпляров",type:"number",modelValue:y.value.amount,"onUpdate:modelValue":o[9]||(o[9]=e=>y.value.amount=e)},null,8,["modelValue"]),y.value.file?((0,t.wg)(),(0,t.iD)("p",W,[(0,t._)("a",{href:y.value.file,target:"_blank"},"Загруженный ранее файл",8,h)])):(0,t.kq)("",!0),(0,t.Wm)(O,{class:"q-mb-md",outlined:"",dense:"",label:"Файл",modelValue:C.value,"onUpdate:modelValue":o[10]||(o[10]=e=>C.value=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(E,{align:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,t.wy)((0,t.Wm)(m,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[G]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var Z=a(9885),k=a(136),D=a(3119),H=a(8879),Q=a(1746),C=a(1233),S=a(1682),x=a(7220),U=a(996),T=a(2074),L=a(4458),j=a(8326),P=a(3190),$=a(3837),F=a(1821),M=a(2146),Y=a(9984),z=a.n(Y);const B=y,K=B;z()(y,"components",{QPage:Z.Z,QSpace:k.Z,QInput:D.Z,QBtn:H.Z,QTable:Q.Z,QTr:C.Z,QTh:S.Z,QTd:x.Z,QPagination:U.Z,QDialog:T.Z,QCard:L.Z,QForm:j.Z,QCardSection:P.Z,QFile:$.Z,QCardActions:F.Z}),z()(y,"directives",{ClosePopup:M.Z})}}]);