"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[899],{4899:(l,e,a)=>{a.r(e),a.d(e,{default:()=>L});var t=a(9835),n=a(499),o=a(6970),i=a(6928),u=a(1569);const s={class:"row q-col-gutter-md"},r={class:"col-12 col-sm-6 col-md-6 col-lg-4"},d={key:0,class:"no-margin text-positive"},_={key:1,class:"no-margin"},c=(0,t._)("span",{class:"text-negative"}," Бот не подключен",-1),m=(0,t._)("br",null,null,-1),w=(0,t._)("br",null,null,-1),p=(0,t._)("span",{class:"text-bold"},[(0,t._)("a",{target:"_blank",href:"https://t.me/globalstroy_bot"},"@globalstroy_bot")],-1),g=(0,t._)("br",null,null,-1),b=(0,t._)("br",null,null,-1),f=(0,t._)("br",null,null,-1),k=(0,t._)("br",null,null,-1),v=(0,t._)("br",null,null,-1),W=(0,t._)("br",null,null,-1),U={class:"col-12 col-sm-6 col-md-6 col-lg-4"},q={__name:"Dashboard",setup(l){const e=[{id:1,name:"Низкий",color:"positive"},{id:2,name:"Средний",color:"warning"},{id:3,name:"Высокий",color:"negative"}],{user:a}=(0,i.t)(),q=(0,n.iH)([]),h=(0,n.iH)(null);(0,t.wF)((async()=>{let l=new Date;h.value=l.toLocaleDateString().split(".").join("-"),await y()}));const y=async()=>{let l,e=h.value.split("-").reverse().join("-");l=await(0,u.api)(`/api/task/task?own=true&dead_line_date=${e}`),q.value=l.data.results};return(l,i)=>{const u=(0,t.up)("q-card-section"),h=(0,t.up)("q-separator"),y=(0,t.up)("q-card"),Q=(0,t.up)("q-item-label"),Z=(0,t.up)("q-badge"),z=(0,t.up)("q-item-section"),D=(0,t.up)("q-item"),S=(0,t.up)("q-list"),j=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(j,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t._)("div",r,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Статус подключения к TG боту ")])),_:1}),(0,t.Wm)(h),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,n.SU)(a).telega_id?((0,t.wg)(),(0,t.iD)("p",d," Бот подключен ")):((0,t.wg)(),(0,t.iD)("p",_,[c,m,w,(0,t.Uk)(" 1. Создайте диалог с "),p,g,b,(0,t.Uk)(" 3. В созданном диалоге нажмите Start"),f,k,(0,t.Uk)(" 4. Если вы все сделали правильно, бот сообщит об этом."),v,W]))])),_:1})])),_:1})]),(0,t._)("div",U,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Задач на сегодня "+(0,o.zw)(q.value.length),1)])),_:1}),(0,t.Wm)(h),(0,t.Wm)(u,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(q.value,(l=>((0,t.wg)(),(0,t.j4)(D,{key:l.id},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)("№ "+(0,o.zw)(l.id),1)])),_:2},1024),(0,t.Wm)(Q,{caption:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{color:e.find((e=>e.id===l.priority)).color},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.find((e=>e.id===l.priority)).name),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024),(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{overline:"",class:"ellipsis"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.task),1)])),_:2},1024),(0,t.Wm)(Q,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("до "+(0,o.zw)(l.dead_line_time),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(z,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{color:l.is_done?"positive":"negative"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.is_done?"Выполнено":"Не выполнено"),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])])])),_:1})}}};var h=a(9885),y=a(4458),Q=a(3190),Z=a(926),z=a(3246),D=a(490),S=a(6749),j=a(3115),C=a(990),x=a(9984),H=a.n(x);const I=q,L=I;H()(q,"components",{QPage:h.Z,QCard:y.Z,QCardSection:Q.Z,QSeparator:Z.Z,QList:z.Z,QItem:D.Z,QItemSection:S.Z,QItemLabel:j.Z,QBadge:C.Z})}}]);