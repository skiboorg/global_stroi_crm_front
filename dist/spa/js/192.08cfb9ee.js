"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[192],{1192:(e,l,a)=>{a.r(l),a.d(l,{default:()=>ae});var t=a(9835),o=a(6970),i=a(1957),n=a(499),d=a(1569),s=(a(4139),a(6928)),u=a(2637),r=a(8227),p=a(1375);const m={class:"flex items-center justify-between q-mb-md"},c={class:"no-margin text-h6 text-bold"},w={class:"flex items-center wrap"},v=(0,t._)("p",{class:"q-mb-none q-mr-md"},"Список задач на ",-1),b={class:"row items-center justify-end"},_={class:"text-bold"},g={key:0},f={key:1},k={key:2},y={key:3,class:"no-margin ellipsis",style:{"max-width":"300px"}},q={class:"q-gutter-md"},V=(0,t._)("p",{class:"text-bold q-mb-sm"},"Задача: ",-1),h=(0,t._)("p",{class:"text-bold q-mb-sm"},"Результат выполнения задачи",-1),W={key:2},x=(0,t._)("p",{class:"text-bold q-mb-sm"},"Комментарий администратора",-1),D={key:3},Z=(0,t._)("p",{class:"text-bold q-mb-sm"},"Коментарий к оценке",-1),Q=(0,t._)("br",null,null,-1),j=(0,t._)("p",null,null,-1),C={class:"q-mb-md"},U={__name:"user_tasks",setup(e){(0,s.t)();const l=(0,n.iH)(!1),a=(0,n.iH)(!1),U=(0,n.iH)(!0),z=["Согласен","Не согласен","Нужно обсудить"],H=((0,n.iH)("Согласен"),["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"]),$=[{label:"Низкий",value:1},{label:"Средний",value:2},{label:"Высокий",value:3}],S=(0,n.iH)({priority:1,task:null,dead_line_time:"20:00",is_repeatable:!1}),T=(0,n.iH)(null),Y=(0,n.iH)([]),P={sortBy:"desc",descending:!1,page:1,rowsPerPage:50},F=[{name:"id",align:"left",label:"ID",field:e=>e.id,sortable:!0},{name:"priority",align:"left",label:"Приоритет",field:e=>e.priority,sortable:!0},{name:"user",align:"left",label:"Пользователь",field:e=>e.user.fio,sortable:!0},{name:"task",align:"left",label:"Задача",field:e=>e.task,sortable:!0},{name:"is_done",align:"left",label:"Выполнено",field:e=>e.is_done,sortable:!0},{name:"is_repeatable",align:"left",label:"Ежедневная",field:e=>e.is_repeatable,sortable:!0},{name:"dead_line_date",align:"left",label:"Выполнить до",field:e=>`${new Date(e.dead_line_date).toLocaleDateString()} ${e.dead_line_time}`,sortable:!0},{name:"task_value",align:"left",label:"Оценка",field:e=>e.task_value?e.task_value:"Нет",sortable:!0},{name:"dead_line_time",align:"left",label:"Время вып.",field:e=>{if(e.is_repeatable)return"-";if(!e.created||!e.done_date)return"Нет данных";const l=new Date(e.created),a=new Date(e.done_date),t=a-l,o=Math.floor(t/6e4),i=Math.floor(o/60),n=o%60;return`${i}ч ${n}мин`},sortable:!0}];(0,t.wF)((async()=>{let e=new Date;T.value=e.toLocaleDateString().split(".").join("-"),await M()}));const M=async()=>{let e,l=T.value.split("-").reverse().join("-");e=U.value?await(0,d.api)(`/api/task/task?own=true&dead_line_date=${l}`):await(0,d.api)(`/api/task/task?dead_line_date=${l}`),Y.value=e.data.results},B=async e=>{l.value=!l.value;await d.api.delete(`/api/task/task/${e}`);await M(),l.value=!l.value},I=async()=>{l.value=!l.value;await d.api.post("/api/task/task",S.value);(0,u.d)("positive","Задача добавлена"),a.value=!1,await M(),S.value={priority:1,task:null,dead_line_time:"20:00",is_repeatable:!1},l.value=!l.value},L=async e=>{l.value=!0;let a=new FormData,t={...e};delete t.user;for(let[l,i]of Object.entries(t))"file"!==l&&a.append(l,i);t.file&&a.append("file",t.file);try{await(0,d.api)({method:"patch",url:`/api/task/task/${t.id}`,data:a,headers:{"Content-Type":"multipart/form-data"}});(0,u.d)("positive","Задача обновлена"),await M(),l.value=!1}catch(o){(0,u.d)("negative","Проверьте входные данные"),l.value=!1}l.value=!1};return(e,n)=>{const d=(0,t.up)("q-space"),s=(0,t.up)("q-btn"),u=(0,t.up)("q-date"),K=(0,t.up)("q-popup-proxy"),O=(0,t.up)("q-icon"),A=(0,t.up)("q-input"),E=(0,t.up)("q-checkbox"),G=(0,t.up)("q-th"),J=(0,t.up)("q-tr"),N=(0,t.up)("q-td"),R=(0,t.up)("q-badge"),X=(0,t.up)("q-file"),ee=(0,t.up)("q-select"),le=(0,t.up)("q-table"),ae=(0,t.up)("q-page"),te=(0,t.up)("q-form"),oe=(0,t.up)("q-card-section"),ie=(0,t.up)("q-card"),ne=(0,t.up)("q-dialog"),de=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(ae,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p.Z),(0,t._)("div",m,[(0,t._)("p",c,"Задачи на "+(0,o.zw)(T.value),1),(0,t.Wm)(d),(0,t.Wm)(s,{icon:"add",color:"primary","no-caps":"",unelevated:"",onClick:n[0]||(n[0]=e=>a.value=!0),label:"Добавить"})]),(0,t._)("div",w,[v,(0,t.Wm)(A,{class:"q-mb-xs",outlined:"",dense:"",modelValue:T.value,"onUpdate:modelValue":n[2]||(n[2]=e=>T.value=e),label:"Выберте дату"},{append:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:T.value,"onUpdate:modelValue":[n[1]||(n[1]=e=>T.value=e),M],mask:"DD-MM-YYYY"},{default:(0,t.w5)((()=>[(0,t._)("div",b,[(0,t.wy)((0,t.Wm)(s,{label:"Выбрать",color:"primary",flat:""},null,512),[[de]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(E,{modelValue:U.value,"onUpdate:modelValue":[n[3]||(n[3]=e=>U.value=e),M],label:"Показывыть только мои задачи"},null,8,["modelValue"])]),(0,t.Wm)(le,{flat:"",rows:Y.value,columns:F,"row-key":"id","hide-pagination":"","table-header-class":"table-header",pagination:P},{header:(0,t.w5)((e=>[(0,t.Wm)(J,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[(0,t.Wm)(G,{"auto-width":""}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(G,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",_,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(G,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(J,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{size:"sm",color:"primary",round:"",unelevated:"",dense:"",onClick:l=>e.expand=!e.expand,icon:e.expand?"visibility_off":"visibility"},null,8,["onClick","icon"])])),_:2},1024),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(N,{key:l.name,props:e},{default:(0,t.w5)((()=>["is_done"===l.name?((0,t.wg)(),(0,t.iD)("span",g,[l.value?((0,t.wg)(),(0,t.j4)(O,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(O,{key:1,name:"close",size:"20px",color:"negative"}))])):"is_repeatable"===l.name?((0,t.wg)(),(0,t.iD)("span",f,[l.value?((0,t.wg)(),(0,t.j4)(O,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(O,{key:1,name:"close",size:"20px",color:"negative"}))])):"priority"===l.name?((0,t.wg)(),(0,t.iD)("span",k,[1===l.value?((0,t.wg)(),(0,t.j4)(R,{key:0,color:"positive",label:"Низкий"})):2===l.value?((0,t.wg)(),(0,t.j4)(R,{key:1,color:"warning",label:"Средний"})):3===l.value?((0,t.wg)(),(0,t.j4)(R,{key:2,color:"negative",label:"Высокий"})):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("p",y,(0,o.zw)(l.value),1))])),_:2},1032,["props"])))),128)),(0,t.Wm)(N,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",q,[(0,t.Wm)(r.Z,{onConfirm:l=>B(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"]),(0,t.wy)((0,t.Wm)(J,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{colspan:"100%"},{default:(0,t.w5)((()=>[V,(0,t._)("p",null,(0,o.zw)(e.row.task),1),h,(0,t.Wm)(A,{class:"q-mb-md",modelValue:e.row.result,"onUpdate:modelValue":l=>e.row.result=l,dense:"",type:"textarea",outlined:""},null,8,["modelValue","onUpdate:modelValue"]),e.row.is_done?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(X,{key:0,class:"q-mb-md",modelValue:e.row.file,"onUpdate:modelValue":l=>e.row.file=l,dense:"",outlined:"",label:"Приложите файл, если требуется"},null,8,["modelValue","onUpdate:modelValue"])),e.row.is_done?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(s,{key:1,dense:"",color:"positive",icon:"save","no-caps":"",unelevated:"",label:"Задача выполнена",loading:l.value,onClick:l=>L(e.row)},null,8,["loading","onClick"])),e.row.admin_comment?((0,t.wg)(),(0,t.iD)("div",W,[x,(0,t._)("p",null,(0,o.zw)(e.row.admin_comment),1)])):(0,t.kq)("",!0),e.row.task_value?((0,t.wg)(),(0,t.iD)("div",D,[Z,(0,t.Wm)(ee,{outlined:"",modelValue:e.row.user_comment,"onUpdate:modelValue":l=>e.row.user_comment=l,options:z,label:"Комментарий к оценке"},null,8,["modelValue","onUpdate:modelValue"]),Q,(0,t.Wm)(s,{dense:"",color:"positive",icon:"save","no-caps":"",unelevated:"",label:"Сохранить комментарий",loading:l.value,onClick:l=>L(e.row)},null,8,["loading","onClick"])])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["props"]),[[i.F8,e.expand]])])),_:1},8,["rows"])])),_:1}),(0,t.Wm)(ne,{modelValue:a.value,"onUpdate:modelValue":n[8]||(n[8]=e=>a.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(ie,{style:{width:"700px","max-width":"100vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(oe,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,{onSubmit:(0,i.iM)(I,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(ee,{outlined:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:S.value.priority,"onUpdate:modelValue":n[4]||(n[4]=e=>S.value.priority=e),options:$,label:"Приоритет"},null,8,["modelValue"]),(0,t.Wm)(A,{modelValue:S.value.task,"onUpdate:modelValue":n[5]||(n[5]=e=>S.value.task=e),type:"textarea",label:"Задача *",outlined:"","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),j,(0,t.Wm)(ee,{outlined:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:S.value.dead_line_time,"onUpdate:modelValue":n[6]||(n[6]=e=>S.value.dead_line_time=e),options:H,label:`Выполнить ${(new Date).toLocaleDateString()} до`},null,8,["modelValue","label"]),(0,t._)("div",C,[(0,t.Wm)(E,{modelValue:S.value.is_repeatable,"onUpdate:modelValue":n[7]||(n[7]=e=>S.value.is_repeatable=e),label:"Ежедневная задача"},null,8,["modelValue"])]),(0,t.Wm)(s,{icon:"save",color:"positive","no-caps":"",unelevated:"",type:"submit",loading:l.value,label:"Сохранить"},null,8,["loading"])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var z=a(9885),H=a(136),$=a(8879),S=a(3119),T=a(2857),Y=a(2765),P=a(4939),F=a(1006),M=a(1746),B=a(1233),I=a(1682),L=a(7220),K=a(990),O=a(3837),A=a(6384),E=a(2074),G=a(4458),J=a(3190),N=a(8326),R=a(2146),X=a(9984),ee=a.n(X);const le=U,ae=le;ee()(U,"components",{QPage:z.Z,QSpace:H.Z,QBtn:$.Z,QInput:S.Z,QIcon:T.Z,QPopupProxy:Y.Z,QDate:P.Z,QCheckbox:F.Z,QTable:M.Z,QTr:B.Z,QTh:I.Z,QTd:L.Z,QBadge:K.Z,QFile:O.Z,QSelect:A.Z,QDialog:E.Z,QCard:G.Z,QCardSection:J.Z,QForm:N.Z}),ee()(U,"directives",{ClosePopup:R.Z})}}]);