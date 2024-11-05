"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[927],{4762:(e,l,a)=>{a.r(l),a.d(l,{default:()=>we});var t=a(9835),o=a(6970),n=a(1957),i=a(499),u=a(1569),d=a(9876),s=a(8550),m=a(2637),p=a(8227);const r=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),c=(0,t._)("br",null,null,-1),v=(0,t._)("br",null,null,-1),w=(0,t._)("br",null,null,-1),b=(0,t._)("br",null,null,-1),f=(0,t._)("br",null,null,-1),g=(0,t._)("br",null,null,-1),k=(0,t._)("br",null,null,-1),y=(0,t._)("br",null,null,-1),W=(0,t._)("div",{class:"flex items-center justify-between q-mb-md"},[(0,t._)("p",{class:"no-margin text-h6 text-bold"},"Задачи")],-1),q={class:"row q-col-gutter-md q-mb-lg"},x={class:"col-12 col-md-9"},h={class:"row items-center justify-end"},V={class:"col-12 col-md-3"},U={class:"text-bold"},Z={key:0},Q={key:1},D={key:2},C={key:3,class:"no-margin ellipsis",style:{"max-width":"300px"}},j={class:"q-gutter-md"},z=(0,t._)("p",{class:"text-bold q-mb-sm"},"Задача:",-1),H={key:0},P=(0,t._)("p",{class:"text-bold q-mb-sm"},"Результат выполнения задачи",-1),S=(0,t._)("p",{class:"text-bold q-mb-sm"},"Оценка выполнения задачи",-1),T={class:"q-gutter-md q-mt-md"},$=(0,t._)("p",null,null,-1),I={class:"q-mb-md"},Y={__name:"admin_tasks",setup(e){const l=(0,d.E)(),a=((0,i.iH)(null),(0,i.iH)([])),Y=(0,i.iH)([]),F=(0,i.iH)(!1),M=["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"],B=[{label:"Низкий",value:1},{label:"Средний",value:2},{label:"Высокий",value:3}],L=(0,i.iH)({priority:1,task:null,dead_line_time:"20:00",is_repeatable:!1}),E=(0,i.iH)({user__id:null,is_done:!1,dead_line_date__exact:null}),K=(0,i.iH)(""),O=(0,i.iH)(5),R=(0,i.iH)(1),A=(0,i.iH)(!1),G={sortBy:"desc",descending:!1,page:1,rowsPerPage:25},J=[{name:"id",align:"left",label:"ID",field:e=>e.id,sortable:!0},{name:"priority",align:"left",label:"Приоритет",field:e=>e.priority,sortable:!0},{name:"user",align:"left",label:"Пользователь",field:e=>e.user?.fio,sortable:!0},{name:"task",align:"left",label:"Задача",field:e=>e.task,sortable:!0},{name:"is_done",align:"left",label:"Выполнено",field:e=>e.is_done,sortable:!0},{name:"is_repeatable",align:"left",label:"Ежедневная",field:e=>e.is_repeatable,sortable:!0},{name:"dead_line",align:"left",label:"Дата",field:e=>new Date(e.dead_line_date).toLocaleDateString(),sortable:!0},{name:"dead_line_time",align:"left",label:"Время",field:e=>e.dead_line_time,sortable:!0},{name:"task_value",align:"left",label:"Оценка",field:e=>e.task_value?e.task_value:"Нет",sortable:!0},{name:"user_comment",align:"left",label:"Обратная связь",field:e=>e.user_comment?e.user_comment:"Нет",sortable:!0}];(0,t.wF)((async()=>{await N();const e=await l.getUsers(null,!0);a.value=e}));const N=async()=>{A.value=!A.value;const e=await(0,u.api)(`/api/task/task?admin=true&page=${R.value}&${K.value}`);Y.value=e.data.results,O.value=Math.ceil(e.data.count/15),A.value=!A.value},X=async e=>{A.value=!0;let l=new FormData;l.append("task_value",e.task_value),l.append("admin_comment",e.admin_comment);try{await(0,u.api)({method:"patch",url:`/api/task/task/${e.id}`,data:l,headers:{"Content-Type":"multipart/form-data"}});(0,m.d)("positive","Задача обновлена"),await N(),A.value=!1}catch(a){(0,m.d)("negative","Проверьте входные данные"),A.value=!1}A.value=!1},ee=(e,l)=>{l((async()=>{if(e){A.value=!A.value;const l=await(0,u.api)(`/api/user/user?q=${e}&page_size=10000`);a.value=l.data,A.value=!A.value}}))},le=async()=>{console.log(R.value),await N()},ae=async e=>{if(K.value="",E.value.is_done||(K.value=""),"apply"===e)for(let[l,a]of Object.entries(E.value))console.log(l,a),a&&(K.value+=`${l}=${a}&`);"clear"===e&&(K.value="",E.value={user__id:null,is_done:!1,dead_line_date__exact:null}),await N()},te=async()=>{A.value=!A.value,L.value.user_id=E.value.user__id;await u.api.post("/api/task/task",L.value);(0,m.d)("positive","Задача добавлена"),L.value={priority:1,task:null,dead_line_time:"20:00",is_repeatable:!1},F.value=!1,await N(),A.value=!A.value},oe=async e=>{A.value=!A.value;await u.api.delete(`/api/task/task/${e}`);await N(),A.value=!A.value};return(e,l)=>{const i=(0,t.up)("q-card-section"),u=(0,t.up)("q-card"),d=(0,t.up)("q-expansion-item"),m=(0,t.up)("q-item-label"),K=(0,t.up)("q-item-section"),N=(0,t.up)("q-item"),ne=(0,t.up)("q-select"),ie=(0,t.up)("q-btn"),ue=(0,t.up)("q-date"),de=(0,t.up)("q-popup-proxy"),se=(0,t.up)("q-icon"),me=(0,t.up)("q-input"),pe=(0,t.up)("q-checkbox"),re=(0,t.up)("q-th"),_e=(0,t.up)("q-tr"),ce=(0,t.up)("q-td"),ve=(0,t.up)("q-badge"),we=(0,t.up)("q-tooltip"),be=(0,t.up)("q-rating"),fe=(0,t.up)("q-table"),ge=(0,t.up)("q-pagination"),ke=(0,t.up)("q-page"),ye=(0,t.up)("q-form"),We=(0,t.up)("q-dialog"),qe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(ke,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{"expand-separator":"",icon:"help",label:"Описание раздела",class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Оценку задач осуществляет сотрудник организации с правами администратора системы."),r,_,(0,t.Uk)(" У каждого отдела компании в соответствии с организационной структурой есть руководитель."),c,v,(0,t.Uk)(" Оценка субъективная, руководитель должен объяснить почему он оценил выполнение вашей задачи именно так."),w,b,(0,t.Uk)(" После оценки у задачи появляется оценка по 5 (пяти) бальной шкале и комментарий к ней. "),f,g,(0,t.Uk)(" Система автоматически, после выставления оценки, в раздел обратная связь выставляет комментарий пользователя – Согласен. "),k,y,(0,t.Uk)(" Пользователь на конкретной задаче может изменить обратную связь на - не согласен, надо обсудить. ")])),_:1})])),_:1})])),_:1}),W,(0,t._)("div",q,[(0,t._)("div",x,[(0,t.Wm)(ne,{class:"q-mb-xs",dense:"",outlined:"",modelValue:E.value.user__id,"onUpdate:modelValue":l[0]||(l[0]=e=>E.value.user__id=e),loading:A.value,options:a.value,"option-label":"fio",label:"Выберите пользователя","map-options":"","option-value":"id","emit-value":"","use-input":"",onFilter:ee,clearable:""},{option:(0,t.w5)((e=>[(0,t.Wm)(N,(0,o.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(K,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.role?.name),1)])),_:2},1024),(0,t.Wm)(m,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Роль")])),_:1})])),_:2},1024),(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.fio),1)])),_:2},1024),(0,t.Wm)(m,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"]),(0,t.Wm)(me,{outlined:"",dense:"",modelValue:E.value.dead_line_date__exact,"onUpdate:modelValue":l[2]||(l[2]=e=>E.value.dead_line_date__exact=e),label:"Выполнить до",clearable:""},{append:(0,t.w5)((()=>[(0,t.Wm)(se,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(de,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(ue,{modelValue:E.value.dead_line_date__exact,"onUpdate:modelValue":l[1]||(l[1]=e=>E.value.dead_line_date__exact=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",h,[(0,t.wy)((0,t.Wm)(ie,{label:"Выбрать",color:"primary",flat:""},null,512),[[qe]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(pe,{label:"Выполнено",modelValue:E.value.is_done,"onUpdate:modelValue":l[3]||(l[3]=e=>E.value.is_done=e)},null,8,["modelValue"])]),(0,t._)("div",V,[(0,t.wy)((0,t.Wm)(ie,{class:"q-mb-sm full-width",label:"Применить фильтр",color:"positive",onClick:l[4]||(l[4]=e=>ae("apply")),unelevated:"","no-caps":""},null,512),[[qe]]),(0,t.wy)((0,t.Wm)(ie,{class:"full-width",label:"Сбросить фильтр",color:"dark",onClick:l[5]||(l[5]=e=>ae("clear")),unelevated:"","no-caps":""},null,512),[[qe]]),E.value.user__id?(0,t.wy)(((0,t.wg)(),(0,t.j4)(s.Z,{key:0,class:"full-width q-mt-sm",label:"Создать задачу",color:"warning",onClick:l[6]||(l[6]=e=>F.value=!0),unelevated:"","no-caps":""},null,512)),[[qe]]):(0,t.kq)("",!0)])]),(0,t.Wm)(fe,{flat:"",rows:Y.value,columns:J,"row-key":"id","hide-pagination":"","table-header-class":"table-header",pagination:G},{header:(0,t.w5)((e=>[(0,t.Wm)(_e,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[(0,t.Wm)(re,{"auto-width":""}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(re,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",U,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(re,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(_e,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(ce,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(ie,{size:"sm",color:"primary",round:"",unelevated:"",dense:"",onClick:l=>e.expand=!e.expand,icon:e.expand?"visibility_off":"visibility"},null,8,["onClick","icon"])])),_:2},1024),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(ce,{key:l.name,props:e},{default:(0,t.w5)((()=>["is_done"===l.name?((0,t.wg)(),(0,t.iD)("span",Z,[l.value?((0,t.wg)(),(0,t.j4)(se,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(se,{key:1,name:"close",size:"20px",color:"negative"}))])):"is_repeatable"===l.name?((0,t.wg)(),(0,t.iD)("span",Q,[l.value?((0,t.wg)(),(0,t.j4)(se,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(se,{key:1,name:"close",size:"20px",color:"negative"}))])):"priority"===l.name?((0,t.wg)(),(0,t.iD)("span",D,[1===l.value?((0,t.wg)(),(0,t.j4)(ve,{key:0,color:"positive",label:"Низкий"})):2===l.value?((0,t.wg)(),(0,t.j4)(ve,{key:1,color:"warning",label:"Средний"})):3===l.value?((0,t.wg)(),(0,t.j4)(ve,{key:2,color:"negative",label:"Высокий"})):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("p",C,(0,o.zw)(l.value),1))])),_:2},1032,["props"])))),128)),(0,t.Wm)(ce,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t._)("div",j,[(0,t.Wm)(p.Z,{onConfirm:l=>oe(e.row.id)},null,8,["onConfirm"])])])),_:2},1024)])),_:2},1032,["props"]),(0,t.wy)((0,t.Wm)(_e,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(ce,{colspan:"100%"},{default:(0,t.w5)((()=>[z,(0,t._)("p",null,(0,o.zw)(e.row.task),1),e.row.is_done?((0,t.wg)(),(0,t.iD)("div",H,[P,(0,t._)("p",null,(0,o.zw)(e.row.result),1),S,(0,t.Wm)(be,{modelValue:e.row.task_value,"onUpdate:modelValue":l=>e.row.task_value=l,size:"2em",class:"q-mb-md",max:5,color:"primary"},{"tip-1":(0,t.w5)((()=>[(0,t.Wm)(we,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Очень плохо")])),_:1})])),"tip-2":(0,t.w5)((()=>[(0,t.Wm)(we,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Плохо")])),_:1})])),"tip-3":(0,t.w5)((()=>[(0,t.Wm)(we,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Пойдет")])),_:1})])),"tip-4":(0,t.w5)((()=>[(0,t.Wm)(we,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Хорошо")])),_:1})])),"tip-5":(0,t.w5)((()=>[(0,t.Wm)(we,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Отлично")])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"]),(0,t.Wm)(me,{outlined:"",dense:"",modelValue:e.row.admin_comment,"onUpdate:modelValue":l=>e.row.admin_comment=l,type:"textarea",label:"Обратная связь"},null,8,["modelValue","onUpdate:modelValue"]),(0,t._)("div",T,[(0,t.Wm)(ie,{dense:"",color:"positive",icon:"save",loading:A.value,"no-caps":"",unelevated:"",label:"Сохранить",onClick:l=>X(e.row)},null,8,["loading","onClick"]),e.row.file?((0,t.wg)(),(0,t.j4)(ie,{key:0,href:e.row.file,loading:A.value,dense:"",color:"info",target:"_blank","no-caps":"",unelevated:"",label:"Открыть прикрепленный файл"},null,8,["href","loading"])):(0,t.kq)("",!0)])])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["props"]),[[n.F8,e.expand]])])),_:1},8,["rows"]),(0,t.Wm)(ge,{modelValue:R.value,"onUpdate:modelValue":[l[7]||(l[7]=e=>R.value=e),le],max:O.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1}),(0,t.Wm)(We,{modelValue:F.value,"onUpdate:modelValue":l[12]||(l[12]=e=>F.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{style:{width:"700px","max-width":"100vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ye,{onSubmit:(0,n.iM)(te,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(ne,{outlined:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:L.value.priority,"onUpdate:modelValue":l[8]||(l[8]=e=>L.value.priority=e),options:B,label:"Приоритет"},null,8,["modelValue"]),(0,t.Wm)(me,{modelValue:L.value.task,"onUpdate:modelValue":l[9]||(l[9]=e=>L.value.task=e),type:"textarea",label:"Задача *",outlined:"","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Это обязательное поле"]},null,8,["modelValue","rules"]),$,(0,t.Wm)(ne,{outlined:"","map-options":"","emit-value":"",behavior:"menu",class:"q-mb-md",modelValue:L.value.dead_line_time,"onUpdate:modelValue":l[10]||(l[10]=e=>L.value.dead_line_time=e),options:M,label:`Выполнить ${(new Date).toLocaleDateString()} до`},null,8,["modelValue","label"]),(0,t._)("div",I,[(0,t.Wm)(pe,{modelValue:L.value.is_repeatable,"onUpdate:modelValue":l[11]||(l[11]=e=>L.value.is_repeatable=e),label:"Ежедневная задача"},null,8,["modelValue"])]),(0,t.Wm)(ie,{icon:"save",color:"positive","no-caps":"",unelevated:"",type:"submit",loading:A.value,label:"Сохранить"},null,8,["loading"])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var F=a(9885),M=a(651),B=a(4458),L=a(3190),E=a(136),K=a(8879),O=a(6384),R=a(490),A=a(6749),G=a(3115),J=a(3119),N=a(2857),X=a(2765),ee=a(4939),le=a(1006),ae=a(1746),te=a(1233),oe=a(1682),ne=a(7220),ie=a(990),ue=a(1570),de=a(6858),se=a(996),me=a(2074),pe=a(8326),re=a(2146),_e=a(9984),ce=a.n(_e);const ve=Y,we=ve;ce()(Y,"components",{QPage:F.Z,QExpansionItem:M.Z,QCard:B.Z,QCardSection:L.Z,QSpace:E.Z,QBtn:K.Z,QSelect:O.Z,QItem:R.Z,QItemSection:A.Z,QItemLabel:G.Z,QInput:J.Z,QIcon:N.Z,QPopupProxy:X.Z,QDate:ee.Z,QCheckbox:le.Z,QTable:ae.Z,QTr:te.Z,QTh:oe.Z,QTd:ne.Z,QBadge:ie.Z,QRating:ue.Z,QTooltip:de.Z,QPagination:se.Z,QDialog:me.Z,QForm:pe.Z}),ce()(Y,"directives",{ClosePopup:re.Z})}}]);