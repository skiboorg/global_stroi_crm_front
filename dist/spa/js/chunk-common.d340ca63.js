"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[64],{2637:(e,l,a)=>{a.d(l,{d:()=>n});var t=a(6827),o=a(8346);function n(e,l){t.Z.create({message:l,html:!0,color:e,position:o.Z.lt.sm?"bottom":"bottom-right"})}},8550:(e,l,a)=>{a.d(l,{Z:()=>r});var t=a(9835);const o={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const o=(0,t.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,t.wg)(),(0,t.j4)(o,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,t.kq)("",!0)}}};var n=a(8879),i=a(9984),s=a.n(i);const u=o,r=u;s()(o,"components",{QBtn:n.Z})},8203:(e,l,a)=>{a.d(l,{Z:()=>c});var t=a(9835);function o(e,l){const a=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.j4)(a,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:l[0]||(l[0]=l=>e.$router.back())})}var n=a(1639),i=a(8879),s=a(9984),u=a.n(s);const r={},d=(0,n.Z)(r,[["render",o]]),c=d;u()(r,"components",{QBtn:i.Z})},4139:(e,l,a)=>{a.d(l,{Z:()=>v});var t=a(9835),o=a(499);const n={class:"row items-center justify-end"},i={__name:"DateInput",props:["label"],emits:["selected"],setup(e,{emit:l}){const a=(0,o.iH)(null),i=(0,o.iH)(null);return(l,o)=>{const s=(0,t.up)("q-btn"),u=(0,t.up)("q-date"),r=(0,t.up)("q-popup-proxy"),d=(0,t.up)("q-icon"),c=(0,t.up)("q-input"),p=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(c,{outlined:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value=e),label:e.label},{append:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=e=>i.value=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t.wy)((0,t.Wm)(s,{onClick:o[0]||(o[0]=e=>l.$emit("selected",i.value)),label:"Выбрать",color:"primary",flat:""},null,512),[[p]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}}};var s=a(3119),u=a(2857),r=a(2765),d=a(4939),c=a(8879),p=a(2146),m=a(9984),_=a.n(m);const w=i,v=w;_()(i,"components",{QInput:s.Z,QIcon:u.Z,QPopupProxy:r.Z,QDate:d.Z,QBtn:c.Z}),_()(i,"directives",{ClosePopup:p.Z})},8227:(e,l,a)=>{a.d(l,{Z:()=>w});var t=a(9835),o=a(499);const n={__name:"DeleteButton",props:["label","icon","loading","color"],emits:["confirm"],setup(e,{emit:l}){const a=(0,o.iH)(!1);return(l,o)=>{const n=(0,t.up)("q-btn"),i=(0,t.up)("q-card-section"),s=(0,t.up)("q-card-actions"),u=(0,t.up)("q-card"),r=(0,t.up)("q-dialog"),d=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[l.auth.user.role?.permission?.can_add?((0,t.wg)(),(0,t.j4)(n,{key:0,"no-caps":"",unelevated:"",dense:"",loading:e.loading,color:e.color?e.color:"negative",label:e.label,onClick:o[0]||(o[0]=e=>a.value=!0),icon:e.icon?e.icon:"delete"},null,8,["loading","color","label","icon"])):(0,t.kq)("",!0),(0,t.Wm)(r,{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{style:{width:"300px","max-width":"100vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"text-center text-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Вы уверены? ")])),_:1}),(0,t.Wm)(s,{align:"center"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(n,{color:"negative",unelevated:"","no-caps":"",label:"Да",onClick:o[1]||(o[1]=e=>l.$emit("confirm"))},null,512),[[d]]),(0,t.wy)((0,t.Wm)(n,{color:"positive",unelevated:"","no-caps":"",label:"Нет"},null,512),[[d]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var i=a(8879),s=a(2074),u=a(4458),r=a(3190),d=a(1821),c=a(2146),p=a(9984),m=a.n(p);const _=n,w=_;m()(n,"components",{QBtn:i.Z,QDialog:s.Z,QCard:u.Z,QCardSection:r.Z,QCardActions:d.Z}),m()(n,"directives",{ClosePopup:c.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>r});var t=a(9835);const o={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const o=(0,t.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,t.wg)(),(0,t.j4)(o,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,t.kq)("",!0)}}};var n=a(8879),i=a(9984),s=a.n(i);const u=o,r=u;s()(o,"components",{QBtn:n.Z})},1801:(e,l,a)=>{a.d(l,{Z:()=>S});var t=a(9835),o=a(6970),n=a(1957),i=(a(8227),a(9876)),s=a(499),u=a(1569);const r={class:"row q-col-gutter-md q-mb-lg"},d={class:"col-3"},c={class:"col-2"},p={class:"row items-center justify-end"},m={class:"col-2"},_={class:"row items-center justify-end"},w={class:"col-5"},v={class:"q-gutter-md"},g={class:"text-bold"},b={key:0},f=["href"],y={key:1,class:"no-margin ellipsis",style:{"max-width":"300px"}},W=(0,t._)("br",null,null,-1),h=(0,t._)("span",null,"Серийные номера:",-1),k={class:"no-margin"},q={__name:"MaterialActs",setup(e){const l=(0,i.E)(),a=(0,s.iH)([]),q=(0,s.iH)([]),Z=(0,s.iH)(5),Q=(0,s.iH)(1),V=(0,s.iH)(!1),x=(0,s.iH)(""),D={sortBy:"desc",descending:!1,page:1,rowsPerPage:25},Y=(0,s.iH)({who_get__id:null,created_at_gte:null,created_at_lte:null}),U=[{name:"id",align:"left",label:"#",field:e=>e.number,sortable:!0},{name:"created_at",align:"left",label:"Дата",field:e=>new Date(e.created_at).toLocaleDateString(),sortable:!0},{name:"store",align:"left",label:"Склад",field:e=>e.store?.address,sortable:!0},{name:"who_give",align:"left",label:"Передал",field:e=>e.who_give.fio,sortable:!0},{name:"who_get",align:"left",label:"Принял",field:e=>e.who_get.fio,sortable:!0},{name:"file",align:"left",label:"Акт",field:e=>"",sortable:!1}];(0,t.wF)((async()=>{await H();const e=await l.getUsers(null,!0);a.value=e}));const H=async()=>{V.value=!V.value;const e=await(0,u.api)(`/api/material_store/material_acts?page=${Q.value}&${x.value}`);q.value=e.data.results,Z.value=Math.ceil(e.data.count/15),V.value=!V.value},C=async()=>{console.log(Q.value),await H()},z=(e,l)=>{l((async()=>{if(e){V.value=!V.value;const l=await(0,u.api)(`/api/user/user?q=${e}&page_size=10000`);a.value=l.data,V.value=!V.value}}))},P=async e=>{if(x.value="","apply"===e)for(let[l,a]of Object.entries(Y.value))console.log(l,a),a&&(x.value+=`${l}=${a}&`);"clear"===e&&(x.value="",Y.value={who_get__id:null,created_at_gte:null,created_at_lte:null}),await H()};return(e,l)=>{const i=(0,t.up)("q-item-label"),s=(0,t.up)("q-item-section"),u=(0,t.up)("q-item"),x=(0,t.up)("q-select"),H=(0,t.up)("q-btn"),j=(0,t.up)("q-date"),I=(0,t.up)("q-popup-proxy"),M=(0,t.up)("q-icon"),$=(0,t.up)("q-input"),B=(0,t.up)("q-th"),T=(0,t.up)("q-tr"),F=(0,t.up)("q-td"),S=(0,t.up)("q-table"),K=(0,t.up)("q-pagination"),A=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",r,[(0,t._)("div",d,[(0,t.Wm)(x,{class:"q-mb-xs",dense:"",outlined:"",modelValue:Y.value.who_get__id,"onUpdate:modelValue":l[0]||(l[0]=e=>Y.value.who_get__id=e),loading:V.value,options:a.value,"option-label":"fio",label:"Выберите получателя","map-options":"","option-value":"id","emit-value":"","use-input":"",onFilter:z,clearable:""},{option:(0,t.w5)((e=>[(0,t.Wm)(u,(0,o.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(s,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.role?.name),1)])),_:2},1024),(0,t.Wm)(i,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Роль")])),_:1})])),_:2},1024),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.fio),1)])),_:2},1024),(0,t.Wm)(i,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"])]),(0,t._)("div",c,[(0,t.Wm)($,{outlined:"",dense:"",modelValue:Y.value.created_at_gte,"onUpdate:modelValue":l[2]||(l[2]=e=>Y.value.created_at_gte=e),label:"Дата создания от",clearable:""},{append:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{modelValue:Y.value.created_at_gte,"onUpdate:modelValue":l[1]||(l[1]=e=>Y.value.created_at_gte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",p,[(0,t.wy)((0,t.Wm)(H,{label:"Выбрать",color:"primary",flat:""},null,512),[[A]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",m,[(0,t.Wm)($,{outlined:"",dense:"",modelValue:Y.value.created_at_lte,"onUpdate:modelValue":l[4]||(l[4]=e=>Y.value.created_at_lte=e),label:"Дата создания до",clearable:""},{append:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{modelValue:Y.value.created_at_lte,"onUpdate:modelValue":l[3]||(l[3]=e=>Y.value.created_at_lte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t.wy)((0,t.Wm)(H,{label:"Выбрать",color:"primary",flat:""},null,512),[[A]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",w,[(0,t._)("div",v,[(0,t.wy)((0,t.Wm)(H,{class:"",label:"Применить фильтр",color:"positive",onClick:l[5]||(l[5]=e=>P("apply")),unelevated:"","no-caps":""},null,512),[[A]]),(0,t.wy)((0,t.Wm)(H,{class:"",label:"Сбросить фильтр",color:"dark",onClick:l[6]||(l[6]=e=>P("clear")),unelevated:"","no-caps":""},null,512),[[A]])])])]),(0,t.Wm)(S,{flat:"",rows:q.value,columns:U,"row-key":"id","hide-pagination":"",class:"q-mb-lg","table-header-class":"table-header",pagination:D},{header:(0,t.w5)((e=>[(0,t.Wm)(T,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{"auto-width":""}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(B,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",g,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(B,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(T,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{size:"sm",color:"primary",round:"",unelevated:"",dense:"",onClick:l=>e.expand=!e.expand,icon:e.expand?"visibility_off":"visibility"},null,8,["onClick","icon"])])),_:2},1024),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(F,{key:l.name,props:e},{default:(0,t.w5)((()=>["file"===l.name?((0,t.wg)(),(0,t.iD)("span",b,[(0,t._)("a",{href:e.row.file,target:"_blank"},"Открыть",8,f)])):((0,t.wg)(),(0,t.iD)("p",y,(0,o.zw)(l.value),1))])),_:2},1032,["props"])))),128)),(0,t.Wm)(F,{"auto-width":""})])),_:2},1032,["props"]),(0,t.wy)((0,t.Wm)(T,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{colspan:"100%"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.row.act_items,(e=>((0,t.wg)(),(0,t.iD)("p",{key:e.id},[(0,t.Uk)((0,o.zw)(e.material.name)+" - "+(0,o.zw)(e.amount)+" - "+(0,o.zw)(e.material.unit),1),W,h,(0,t._)("pre",k,(0,o.zw)(e.give_serial_numbers),1)])))),128))])),_:2},1024)])),_:2},1032,["props"]),[[n.F8,e.expand]])])),_:1},8,["rows"]),(0,t.Wm)(K,{modelValue:Q.value,"onUpdate:modelValue":[l[7]||(l[7]=e=>Q.value=e),C],max:Z.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])],64)}}};var Z=a(6384),Q=a(490),V=a(6749),x=a(3115),D=a(3119),Y=a(2857),U=a(2765),H=a(4939),C=a(8879),z=a(1746),P=a(1233),j=a(1682),I=a(7220),M=a(996),$=a(2146),B=a(9984),T=a.n(B);const F=q,S=F;T()(q,"components",{QSelect:Z.Z,QItem:Q.Z,QItemSection:V.Z,QItemLabel:x.Z,QInput:D.Z,QIcon:Y.Z,QPopupProxy:U.Z,QDate:H.Z,QBtn:C.Z,QTable:z.Z,QTr:P.Z,QTh:j.Z,QTd:I.Z,QPagination:M.Z}),T()(q,"directives",{ClosePopup:$.Z})},7179:(e,l,a)=>{a.d(l,{Z:()=>B});var t=a(9835),o=a(6970),n=a(1957),i=(a(8227),a(9876)),s=a(499),u=a(1569);const r={class:"row q-col-gutter-md q-mb-lg"},d={class:"col-3"},c={class:"col-2"},p={class:"row items-center justify-end"},m={class:"col-2"},_={class:"row items-center justify-end"},w={class:"col-5"},v={class:"q-gutter-md"},g={class:"text-bold"},b={key:0},f=["href"],y={key:1,class:"no-margin ellipsis",style:{"max-width":"300px"}},W={__name:"ToolActs",setup(e){const l=(0,i.E)(),a=(0,s.iH)([]),W=(0,s.iH)([]),h=(0,s.iH)(5),k=(0,s.iH)(1),q=(0,s.iH)(!1),Z=(0,s.iH)(""),Q={sortBy:"desc",descending:!1,page:1,rowsPerPage:25},V=(0,s.iH)({who_get__id:null,created_at_gte:null,created_at_lte:null}),x=[{name:"id",align:"left",label:"#",field:e=>e.number,sortable:!0},{name:"created_at",align:"left",label:"Дата",field:e=>new Date(e.created_at).toLocaleDateString(),sortable:!0},{name:"store",align:"left",label:"Склад",field:e=>e.store?.address,sortable:!0},{name:"who_give",align:"left",label:"Передал",field:e=>e.who_give.fio,sortable:!0},{name:"who_get",align:"left",label:"Принял",field:e=>e.who_get.fio,sortable:!0},{name:"file",align:"left",label:"Акт",field:e=>"",sortable:!1}];(0,t.wF)((async()=>{await D();const e=await l.getUsers(null,!0);a.value=e}));const D=async()=>{q.value=!q.value;const e=await(0,u.api)(`/api/material_store/tool_acts?page=${k.value}&${Z.value}`);W.value=e.data.results,h.value=Math.ceil(e.data.count/15),q.value=!q.value},Y=async()=>{console.log(k.value),await D()},U=(e,l)=>{l((async()=>{if(e){q.value=!q.value;const l=await(0,u.api)(`/api/user/user?q=${e}&page_size=10000`);a.value=l.data,q.value=!q.value}}))},H=async e=>{if(Z.value="","apply"===e)for(let[l,a]of Object.entries(V.value))console.log(l,a),a&&(Z.value+=`${l}=${a}&`);"clear"===e&&(Z.value="",V.value={who_get__id:null,created_at_gte:null,created_at_lte:null}),await D()};return(e,l)=>{const i=(0,t.up)("q-item-label"),s=(0,t.up)("q-item-section"),u=(0,t.up)("q-item"),Z=(0,t.up)("q-select"),D=(0,t.up)("q-btn"),C=(0,t.up)("q-date"),z=(0,t.up)("q-popup-proxy"),P=(0,t.up)("q-icon"),j=(0,t.up)("q-input"),I=(0,t.up)("q-th"),M=(0,t.up)("q-tr"),$=(0,t.up)("q-td"),B=(0,t.up)("q-table"),T=(0,t.up)("q-pagination"),F=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",r,[(0,t._)("div",d,[(0,t.Wm)(Z,{class:"q-mb-xs",dense:"",outlined:"",modelValue:V.value.who_get__id,"onUpdate:modelValue":l[0]||(l[0]=e=>V.value.who_get__id=e),loading:q.value,options:a.value,"option-label":"fio",label:"Выберите получателя","map-options":"","option-value":"id","emit-value":"","use-input":"",onFilter:U,clearable:""},{option:(0,t.w5)((e=>[(0,t.Wm)(u,(0,o.vs)((0,t.F4)(e.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(s,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.role?.name),1)])),_:2},1024),(0,t.Wm)(i,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("Роль")])),_:1})])),_:2},1024),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.opt.fio),1)])),_:2},1024),(0,t.Wm)(i,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("ФИО")])),_:1})])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","loading","options"])]),(0,t._)("div",c,[(0,t.Wm)(j,{outlined:"",dense:"",modelValue:V.value.created_at_gte,"onUpdate:modelValue":l[2]||(l[2]=e=>V.value.created_at_gte=e),label:"Дата создания от",clearable:""},{append:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{modelValue:V.value.created_at_gte,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value.created_at_gte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",p,[(0,t.wy)((0,t.Wm)(D,{label:"Выбрать",color:"primary",flat:""},null,512),[[F]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",m,[(0,t.Wm)(j,{outlined:"",dense:"",modelValue:V.value.created_at_lte,"onUpdate:modelValue":l[4]||(l[4]=e=>V.value.created_at_lte=e),label:"Дата создания до",clearable:""},{append:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{modelValue:V.value.created_at_lte,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value.created_at_lte=e),mask:"YYYY-MM-DD"},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t.wy)((0,t.Wm)(D,{label:"Выбрать",color:"primary",flat:""},null,512),[[F]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",w,[(0,t._)("div",v,[(0,t.wy)((0,t.Wm)(D,{class:"",label:"Применить фильтр",color:"positive",onClick:l[5]||(l[5]=e=>H("apply")),unelevated:"","no-caps":""},null,512),[[F]]),(0,t.wy)((0,t.Wm)(D,{class:"",label:"Сбросить фильтр",color:"dark",onClick:l[6]||(l[6]=e=>H("clear")),unelevated:"","no-caps":""},null,512),[[F]])])])]),(0,t.Wm)(B,{flat:"",rows:W.value,columns:x,"row-key":"id","hide-pagination":"",class:"q-mb-lg","table-header-class":"table-header",pagination:Q},{header:(0,t.w5)((e=>[(0,t.Wm)(M,{props:e,class:"bg-grey-2"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{"auto-width":""}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)(I,{key:l.name,props:e},{default:(0,t.w5)((()=>[(0,t._)("span",g,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,t.Wm)(I,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(M,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)($,{"auto-width":""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{size:"sm",color:"primary",round:"",unelevated:"",dense:"",onClick:l=>e.expand=!e.expand,icon:e.expand?"visibility_off":"visibility"},null,8,["onClick","icon"])])),_:2},1024),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(l=>((0,t.wg)(),(0,t.j4)($,{key:l.name,props:e},{default:(0,t.w5)((()=>["file"===l.name?((0,t.wg)(),(0,t.iD)("span",b,[(0,t._)("a",{href:e.row.file,target:"_blank"},"Открыть",8,f)])):((0,t.wg)(),(0,t.iD)("p",y,(0,o.zw)(l.value),1))])),_:2},1032,["props"])))),128)),(0,t.Wm)($,{"auto-width":""})])),_:2},1032,["props"]),(0,t.wy)((0,t.Wm)(M,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)($,{colspan:"100%"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.row.act_items,(e=>((0,t.wg)(),(0,t.iD)("p",{key:e.id},(0,o.zw)(e.tool.name)+" - "+(0,o.zw)(e.give_serial_number),1)))),128))])),_:2},1024)])),_:2},1032,["props"]),[[n.F8,e.expand]])])),_:1},8,["rows"]),(0,t.Wm)(T,{modelValue:k.value,"onUpdate:modelValue":[l[7]||(l[7]=e=>k.value=e),Y],max:h.value,"max-pages":6,"direction-links":"","boundary-numbers":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max"])],64)}}};var h=a(6384),k=a(490),q=a(6749),Z=a(3115),Q=a(3119),V=a(2857),x=a(2765),D=a(4939),Y=a(8879),U=a(1746),H=a(1233),C=a(1682),z=a(7220),P=a(996),j=a(2146),I=a(9984),M=a.n(I);const $=W,B=$;M()(W,"components",{QSelect:h.Z,QItem:k.Z,QItemSection:q.Z,QItemLabel:Z.Z,QInput:Q.Z,QIcon:V.Z,QPopupProxy:x.Z,QDate:D.Z,QBtn:Y.Z,QTable:U.Z,QTr:H.Z,QTh:C.Z,QTd:z.Z,QPagination:P.Z}),M()(W,"directives",{ClosePopup:j.Z})}}]);