"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[620],{3620:(e,l,a)=>{a.r(l),a.d(l,{default:()=>E});var t=a(9835),o=a(6970),n=a(499),i=a(1569),s=a(6928),d=a(9876);const u=(0,t._)("div",{class:"flex items-center justify-between q-mb-md"},[(0,t._)("p",{class:"no-margin text-h6 text-bold"},"Операционые показатели")],-1),r={class:"q-mb-md"},c={class:"row q-col-gutter-md q-mb-md"},m={class:"col-12 col-md-3"},_={class:"row items-center justify-end"},p={class:"col-12 col-md-3"},w={class:"col-12 col-md-3"},v={class:"row items-center justify-end"},f={class:"row items-center justify-end"},g={class:"col-12 col-md-3"},b={class:"text-bold"},k={key:0},y={key:1},h={key:2},W={key:3},x=(0,t._)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,t._)("path",{d:"M5.46967 17.4702C5.17678 17.7631 5.17678 18.2379 5.46967 18.5308C5.76256 18.8237 6.23744 18.8237 6.53033 18.5308L5.46967 17.4702ZM6.53033 18.5308L18.5303 6.53082L17.4697 5.47016L5.46967 17.4702L6.53033 18.5308Z",fill:"#131119"}),(0,t._)("path",{d:"M9 6.00049H18V15.0005",stroke:"#131119","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),V={__name:"stress_forms_for_admin",setup(e){const l=(0,s.t)(),a=(0,d.E)(),V=(0,n.iH)([]),q=(0,n.iH)(""),D=[{name:"id",align:"left",label:"ID",field:e=>e.id,sortable:!0},{name:"user",align:"left",label:"Пользователь",field:e=>e.user.fio,sortable:!0},{name:"created_at",align:"left",label:"Создана",field:e=>new Date(e.created_at).toLocaleDateString(),sortable:!0},{name:"dead_line",align:"left",label:"Крайний срок заполнения",field:e=>new Date(e.dead_line_date).toLocaleDateString(),sortable:!0},{name:"is_done",align:"left",label:"Заполнена",field:e=>e.is_done,sortable:!0},{name:"is_time_left",align:"left",label:"Просрочена",field:e=>e.is_time_left,sortable:!0},{name:"mark",align:"left",label:"Оценка",field:e=>e.rate?e.rate:"Нет оценки",sortable:!0},{name:"comment_user",align:"left",label:"Обратная связь",field:e=>e.rate?e.user_comment:"Еще нет",sortable:!0}],Z=(0,n.iH)({user__id:null,is_done:!1,is_time_left:!1,created_at_gte:null,created_at_lte:null,dead_line__exact:null}),Q=(0,n.iH)(1),j=(0,n.iH)(!1),U=(0,n.iH)({sortBy:"desc",descending:!1,page:1,rowsPerPage:15}),Y=(0,n.iH)([]),H=(0,n.iH)(5);(0,t.wF)((async()=>{console.log(l.user.id);let e=new Date;e.setDate(e.getDate()),Z.value.dead_line__exact=e.toLocaleDateString().split(".").reverse().join("-"),await L("apply");const t=await a.getUsers(null,!0);V.value=t}));const z=async()=>{j.value=!j.value;const e=await(0,i.api)(`/api/form/stress_form_data?all=true&page=${Q.value}&${q.value}`);console.log(e.data),Y.value=e.data.results,H.value=Math.ceil(e.data.count/15),j.value=!j.value},M=async()=>{console.log(Q.value),await z()},L=async e=>{if(q.value="",Z.value.is_done||(q.value=""),"apply"===e)for(let[l,a]of Object.entries(Z.value))console.log(l,a),a&&(q.value+=`${l}=${a}&`);"clear"===e&&(q.value="",Z.value={user__id:null,is_done:!1,is_time_left:!1,created_at_gte:null,created_at_lte:null,dead_line__exact:null}),await z()},C=(e,l)=>{l((async()=>{e&&(j.value=!j.value,j.value=!j.value)}))};return(e,l)=>{const a=(0,t.up)("q-item-label"),n=(0,t.up)("q-item-section"),i=(0,t.up)("q-item"),s=(0,t.up)("q-select"),d=(0,t.up)("q-btn"),q=(0,t.up)("q-date"),z=(0,t.up)("q-popup-proxy"),P=(0,t.up)("q-icon"),I=(0,t.up)("q-input"),T=(0,t.up)("q-checkbox"),S=(0,t.up)("q-th"),$=(0,t.up)("q-tr"),B=(0,t.up)("q-td"),F=(0,t.up)("q-table"),K=(0,t.up)("q-pagination"),E=(0,t.up)("q-page"),O=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(E,{padding:""},{default:(0,t.w5)((()=>[u,(0,t._)("div",r,[(0,t._)("div",c,[(0,t._)("div",m,[(0,t.Wm)(s,{class:"q-mb-xs",dense:"",outlined:"",modelValue:Z.value.user__id,"onUpdate:modelValue":l[0]||(l[0]=e=>Z.value.user__id=e),loading:j.value,options:V.value,"option-label":"fio",label:"Выберите пользователя","map-options":"","option-value":"id","emit-value":"","use-input":"",onFilter:C,"fill-input":"",clearable:""},{option:(0,t.w5)((e=>[(0,t.Wm)(i,(0,o.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(n,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(a,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.role?.name),1)])),_:2},1024),(0,t.Wm)(a,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Роль")])),_:1})])),_:2},1024),(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.fio),1)])),_:2},1024),(0,t.Wm)(a,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"]),(0,t.Wm)(I,{outlined:"",dense:"",modelValue:Z.value.dead_line__exact,"onUpdate:modelValue":l[2]||(l[2]=e=>Z.value.dead_line__exact=e),label:"Крайний срок заполнения"},{append:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{modelValue:Z.value.dead_line__exact,"onUpdate:modelValue":l[1]||(l[1]=e=>Z.value.dead_line__exact=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t.wy)((0,t.Wm)(d,{label:"Выбрать",color:"primary",flat:""},null,512),[[O]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",p,[(0,t.Wm)(T,{label:"Заполненые",modelValue:Z.value.is_done,"onUpdate:modelValue":l[3]||(l[3]=e=>Z.value.is_done=e)},null,8,["modelValue"])]),(0,t._)("div",w,[(0,t.Wm)(I,{class:"q-mb-xs",outlined:"",dense:"",modelValue:Z.value.created_at_gte,"onUpdate:modelValue":l[5]||(l[5]=e=>Z.value.created_at_gte=e),label:"Дата создания от"},{append:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{modelValue:Z.value.created_at_gte,"onUpdate:modelValue":l[4]||(l[4]=e=>Z.value.created_at_gte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",v,[(0,t.wy)((0,t.Wm)(d,{label:"Выбрать",color:"primary",flat:""},null,512),[[O]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(I,{outlined:"",dense:"",modelValue:Z.value.created_at_lte,"onUpdate:modelValue":l[7]||(l[7]=e=>Z.value.created_at_lte=e),label:"Дата создания до"},{append:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{modelValue:Z.value.created_at_lte,"onUpdate:modelValue":l[6]||(l[6]=e=>Z.value.created_at_lte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",f,[(0,t.wy)((0,t.Wm)(d,{label:"Выбрать",color:"primary",flat:""},null,512),[[O]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",g,[(0,t.wy)((0,t.Wm)(d,{class:"q-mb-sm full-width",label:"Применить фильтр",color:"positive",onClick:l[8]||(l[8]=e=>L("apply")),unelevated:"","no-caps":""},null,512),[[O]]),(0,t.wy)((0,t.Wm)(d,{class:"full-width",label:"Сбросить фильтр",color:"dark",onClick:l[9]||(l[9]=e=>L("clear")),unelevated:"","no-caps":""},null,512),[[O]])])])]),(0,t.Wm)(F,{flat:"",rows:Y.value,columns:D,"row-key":"name","table-header-class":"table-header","hide-pagination":"",pagination:U.value,"onUpdate:pagination":l[10]||(l[10]=e=>U.value=e),loading:j.value,class:"q-mb-md"},{header:(0,t.w5)((e=>[(0,t.Wm)($,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(S,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",b,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(S,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)($,{props:e},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(B,{key:l.name,props:e},{default:(0,t.w5)((()=>["is_done"===l.name?((0,t.wg)(),(0,t.iD)("span",k,[l.value?((0,t.wg)(),(0,t.j4)(P,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(P,{key:1,name:"close",size:"20px",color:"negative"}))])):"is_time_left"===l.name?((0,t.wg)(),(0,t.iD)("span",y,[l.value?((0,t.wg)(),(0,t.j4)(P,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(P,{key:1,name:"close",size:"20px",color:"negative"}))])):"comment"===l.name?((0,t.wg)(),(0,t.iD)("span",h,[l.value?((0,t.wg)(),(0,t.j4)(P,{key:0,name:"check_circle",size:"20px",color:"positive"})):((0,t.wg)(),(0,t.j4)(P,{key:1,name:"close",size:"20px",color:"negative"}))])):((0,t.wg)(),(0,t.iD)("span",W,(0,o.zw)(l.value),1))])),_:2},1032,["props"])))),128)),(0,t.Wm)(B,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{flat:"",round:"",dense:"",to:`/form/filled_stress_form/${e.row.uuid}`},{default:(0,t.w5)((()=>[x])),_:2},1032,["to"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","pagination","loading"]),(0,t.Wm)(K,{modelValue:Q.value,"onUpdate:modelValue":[l[11]||(l[11]=e=>Q.value=e),M],max:H.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])])),_:1})}}};var q=a(9885),D=a(6384),Z=a(490),Q=a(6749),j=a(3115),U=a(3119),Y=a(2857),H=a(2765),z=a(2535),M=a(8879),L=a(1006),C=a(1746),P=a(1233),I=a(1682),T=a(7220),S=a(996),$=a(2146),B=a(9984),F=a.n(B);const K=V,E=K;F()(V,"components",{QPage:q.Z,QSelect:D.Z,QItem:Z.Z,QItemSection:Q.Z,QItemLabel:j.Z,QInput:U.Z,QIcon:Y.Z,QPopupProxy:H.Z,QDate:z.Z,QBtn:M.Z,QCheckbox:L.Z,QTable:C.Z,QTr:P.Z,QTh:I.Z,QTd:T.Z,QPagination:S.Z}),F()(V,"directives",{ClosePopup:$.Z})}}]);