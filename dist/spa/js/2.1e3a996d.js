"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[2],{1002:(e,l,a)=>{a.r(l),a.d(l,{default:()=>G});var n=a(9835),t=a(6970),o=a(499),u=a(1569),i=a(8550),d=a(1862),r=a(9876),s=a(4139),m=a(2637),p=a(8227);a(8203);const c=(0,n._)("br",null,null,-1),v=(0,n._)("br",null,null,-1),f=(0,n._)("br",null,null,-1),w=(0,n._)("br",null,null,-1),b=(0,n._)("br",null,null,-1),_=(0,n._)("br",null,null,-1),g={class:"flex items-center justify-between q-mb-md"},q=(0,n._)("p",{class:"no-margin text-h6 text-bold"},"Трудовые договора",-1),k={class:"row q-col-gutter-md q-mb-md"},h={class:"col-12 col-md-10"},y={class:"col-12 col-md-2"},W={class:"text-bold"},V=["innerHTML"],Z={class:"q-gutter-md"},Q={key:1},H=["href"],x={__name:"employment_contracts",setup(e){(0,r.E)();const l=[{name:"inner_id",align:"left",label:"Номер",field:e=>e.inner_id,sortable:!0},{name:"date",align:"left",label:"Дата заключения",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"worker_fio",align:"left",label:"Ф.И.О сотрудника",field:e=>e.worker_fio,sortable:!0},{name:"period",align:"left",label:"Срок действия",field:e=>e.period,sortable:!0},{name:"file",align:"left",label:"Файл",field:e=>e.file?`<a href="${e.file}" target="_blank">Открыть</a>`:"Нет",sortable:!0}],a=(0,o.iH)(!1),x=((0,o.iH)(!1),(0,o.iH)({}),(0,o.iH)(null),["Бессрочный","1 мес","6 мес","1 год","Другое"]),C=(0,o.iH)({id:null,date:null,worker_fio:null,period:null,file:null}),U={sortBy:"desc",descending:!1,page:1,rowsPerPage:15},D=(0,o.iH)(1),T=(0,o.iH)(!1),S=(0,o.iH)([]),j=(0,o.iH)(5),L=(0,o.iH)(null),P=(0,o.iH)({q:""}),$=async()=>{console.log(D.value),await F()};(0,n.wF)((async()=>{await F()}));const F=async()=>{T.value=!T.value;const e=await(0,u.api)(`/api/catalog/employment_contract?page=${D.value}&q=${P.value.q}`);S.value=e.data.results,j.value=Math.ceil(e.data.count/15),T.value=!T.value},M=async e=>{await u.api.delete(`/api/catalog/employment_contract/${e}`),await F()},Y=e=>{e?(C.value=e,C.value.date=C.value.date?new Date(C.value.date).toLocaleDateString():null):C.value={id:null,date:null,worker_fio:null,period:null,file:null},a.value=!0},B=async()=>{let e,l=new FormData;delete C.value.file;for(let[a,n]of Object.entries(C.value))l.append(a,JSON.stringify(n));L.value&&l.append("file",L.value),e=C.value.id?await(0,u.api)({method:"put",url:`/api/catalog/employment_contract/${C.value.id}`,data:l,headers:{"Content-Type":"multipart/form-data"}}):await(0,u.api)({method:"post",url:"/api/catalog/employment_contract",data:l,headers:{"Content-Type":"multipart/form-data"}}),(0,m.d)(e.data.success?"positive":"negative",e.data.message),await F(),a.value=!1,L.value=null},E=e=>{C.value.date=new Date(e).toLocaleDateString()};return(e,o)=>{const u=(0,n.up)("q-card-section"),r=(0,n.up)("q-card"),m=(0,n.up)("q-expansion-item"),I=(0,n.up)("q-space"),K=(0,n.up)("q-input"),O=(0,n.up)("q-btn"),z=(0,n.up)("q-th"),A=(0,n.up)("q-tr"),J=(0,n.up)("q-td"),N=(0,n.up)("q-table"),G=(0,n.up)("q-pagination"),R=(0,n.up)("q-page"),X=(0,n.up)("q-select"),ee=(0,n.up)("q-file"),le=(0,n.up)("q-card-actions"),ae=(0,n.up)("q-form"),ne=(0,n.up)("q-dialog"),te=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(R,{padding:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{"expand-separator":"",icon:"help",label:"Описание раздела",class:"q-mb-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" В данный раздел вносятся все трудовые договоры, заключаемые организацией с физическими лицами с обязательным указанием их номеров, даты заключения и срока действия договора."),c,v,(0,n.Uk)(" Номер система создает автоматически, для составления трудового договора укажите номер, следующий за последним номеров, указанным в системе. "),f,w,(0,n.Uk)(" В течение 12 часов трудовой договор можно удалить, в этом случае создавая новый трудовой договор номер будет такой же как в удаленном. "),b,_,(0,n.Uk)(" При создании трудового договора, его электронный образ обязательно необходимо загрузить в систему, в противном случае, нужно будет удалить документ и создать его заново. ")])),_:1})])),_:1})])),_:1}),(0,n._)("div",g,[q,(0,n.Wm)(I),(0,n.Wm)(i.Z,{icon:"add",label:"Добавить",onClick:o[0]||(o[0]=e=>Y(null))})]),(0,n._)("div",k,[(0,n._)("div",h,[(0,n.Wm)(K,{dense:"",modelValue:P.value.q,"onUpdate:modelValue":o[1]||(o[1]=e=>P.value.q=e),label:"Поиск по ФИО сотрудника, сроку действия",outlined:""},null,8,["modelValue"])]),(0,n._)("div",y,[(0,n.Wm)(O,{class:"full-width",label:"Найти","no-caps":"",color:"primary",unelevated:"",onClick:F})])]),(0,n.Wm)(N,{flat:"",rows:S.value,columns:l,"row-key":"name","hide-pagination":"",pagination:U,"onUpdate:pagination":o[2]||(o[2]=e=>U=e),loading:T.value,"table-header-class":"table-header"},{header:(0,n.w5)((e=>[(0,n.Wm)(A,{props:e,class:"bg-grey-2"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(l=>((0,n.wg)(),(0,n.j4)(z,{key:l.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",W,(0,t.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(z,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,n.w5)((e=>[(0,n.Wm)(A,{props:e},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(l=>((0,n.wg)(),(0,n.j4)(J,{key:l.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",{innerHTML:l.value},null,8,V)])),_:2},1032,["props"])))),128)),(0,n.Wm)(J,{"auto-width":""},{default:(0,n.w5)((()=>[(0,n._)("div",Z,[(0,n.Wm)(d.Z,{dense:"",onClick:l=>Y(e.row)},null,8,["onClick"]),(0,n.Wm)(p.Z,{onConfirm:l=>M(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","loading"]),(0,n.Wm)(G,{modelValue:D.value,"onUpdate:modelValue":[o[3]||(o[3]=e=>D.value=e),$],max:j.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,n.Wm)(ne,{modelValue:a.value,"onUpdate:modelValue":o[9]||(o[9]=e=>a.value=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{style:{width:"700px","max-width":"100vw"}},{default:(0,n.w5)((()=>[(0,n.Wm)(ae,{onSubmit:B},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"q-pb-none"},{default:(0,n.w5)((()=>[C.value.inner_id?((0,n.wg)(),(0,n.j4)(K,{key:0,class:"q-mb-md",outlined:"",dense:"",label:"Внутренний номер",modelValue:C.value.inner_id,"onUpdate:modelValue":o[4]||(o[4]=e=>C.value.inner_id=e)},null,8,["modelValue"])):(0,n.kq)("",!0),(0,n.Wm)(s.Z,{dense:"",class:"q-mb-md",modelValue:C.value.date,"onUpdate:modelValue":o[5]||(o[5]=e=>C.value.date=e),label:"Дата заключения",onSelected:E},null,8,["modelValue"]),(0,n.Wm)(K,{class:"q-mb-md",outlined:"",dense:"",label:"Ф.И.О сотрудника",modelValue:C.value.worker_fio,"onUpdate:modelValue":o[6]||(o[6]=e=>C.value.worker_fio=e)},null,8,["modelValue"]),(0,n.Wm)(X,{outlined:"",dense:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:C.value.period,"onUpdate:modelValue":o[7]||(o[7]=e=>C.value.period=e),options:x,label:"Срок действия"},null,8,["modelValue"]),C.value.file?((0,n.wg)(),(0,n.iD)("p",Q,[(0,n._)("a",{href:C.value.file,target:"_blank"},"Загруженный ранее файл",8,H)])):(0,n.kq)("",!0),(0,n.Wm)(ee,{class:"q-mb-md",outlined:"",dense:"",label:"Файл",modelValue:L.value,"onUpdate:modelValue":o[8]||(o[8]=e=>L.value=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(le,{align:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(O,{label:"Сохранить",type:"submit","no-caps":"",color:"positive"}),(0,n.wy)((0,n.Wm)(O,{label:"Отмена","no-caps":"",color:"dark"},null,512),[[te]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var C=a(9885),U=a(651),D=a(4458),T=a(3190),S=a(136),j=a(3119),L=a(8879),P=a(1746),$=a(1233),F=a(1682),M=a(7220),Y=a(996),B=a(2074),E=a(8326),I=a(6384),K=a(9420),O=a(1821),z=a(2146),A=a(9984),J=a.n(A);const N=x,G=N;J()(x,"components",{QPage:C.Z,QExpansionItem:U.Z,QCard:D.Z,QCardSection:T.Z,QSpace:S.Z,QInput:j.Z,QBtn:L.Z,QTable:P.Z,QTr:$.Z,QTh:F.Z,QTd:M.Z,QPagination:Y.Z,QDialog:B.Z,QForm:E.Z,QSelect:I.Z,QFile:K.Z,QCardActions:O.Z}),J()(x,"directives",{ClosePopup:z.Z})}}]);