"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[899],{4899:(l,e,a)=>{a.r(e),a.d(e,{default:()=>I});a(2879);var t=a(9835),u=a(6970),n=a(499),o=a(6928),i=a(1569);const d=(0,t._)("br",null,null,-1),s=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),r=(0,t._)("br",null,null,-1),w={key:0,class:""},m={class:"inner-grid"},c={class:"no-margin text-h5"},f={class:"no-margin text-h5"},k={class:""},p={class:""},W={key:2,class:""},g={key:3,class:""},b={key:4,class:""},v=(0,t._)("p",{class:"no-margin"},[(0,t._)("span",{class:"text-negative"}," Бот не подключен"),(0,t._)("br"),(0,t._)("br"),(0,t.Uk)(" 1. Создайте диалог с "),(0,t._)("span",{class:"text-bold"},[(0,t._)("a",{target:"_blank",href:"https://t.me/globalstroy_bot"},"@globalstroy_bot")]),(0,t._)("br"),(0,t._)("br"),(0,t.Uk)(" 3. В созданном диалоге нажмите Start"),(0,t._)("br"),(0,t._)("br"),(0,t.Uk)(" 4. Если вы все сделали правильно, бот сообщит об этом."),(0,t._)("br"),(0,t._)("br")],-1),U={__name:"Dashboard",setup(l){const e=[{id:1,name:"Низкий",color:"positive"},{id:2,name:"Средний",color:"warning"},{id:3,name:"Высокий",color:"negative"}],{user:a}=(0,o.t)(),U=(0,n.iH)([]),h=(0,n.iH)({}),y=(0,n.iH)(null);(0,t.wF)((async()=>{let l=new Date;y.value=l.toLocaleDateString().split(".").join("-"),await z(),await q()}));const z=async()=>{let l,e=y.value.split("-").reverse().join("-");l=await(0,i.api)(`/api/task/task?own=true&dead_line_date=${e}`),U.value=l.data.results},q=async()=>{const{data:l}=await(0,i.api)("/api/report/stats");h.value=l};return(l,o)=>{const i=(0,t.up)("q-card-section"),y=(0,t.up)("q-card"),z=(0,t.up)("q-expansion-item"),q=(0,t.up)("q-separator"),D=(0,t.up)("q-item-label"),C=(0,t.up)("q-badge"),S=(0,t.up)("q-item-section"),j=(0,t.up)("q-item"),Q=(0,t.up)("q-list"),Z=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(Z,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{"expand-separator":"",icon:"help",label:"Описание системы управления показателями (СУП)",class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Система управления показателями (СУП) - онлайн сервис позволяющий вести документооборот внутри одной компании, создавать и контролировать выполнение задач сотрудниками, отслеживать время работы, качество выполнения задач, контролировать операционные показатели бизнеса."),d,s,(0,t.Uk)(" Система выполняет функцию контролера и сигнализирует пользователю о необходимости выполнения конкретных действий. "),_,r,(0,t.Uk)(" Система позволяет взаимодействовать с субподрядными организациями (внештатными сотрудниками), ежедневно планировать и контролировать выполнение работ субподрядной организацией (внештатными сотрудниками). СУП автоматически определяет процент выполненных работ на текущую дату, а также остаток товаров на объекте, не позволяет допустить ошибки при расчете и оплате выполненных работ. ")])),_:1})])),_:1})])),_:1}),(0,t._)("div",{class:(0,u.C_)(["dash-grid",{"no-tasks":0===U.value.length}])},[U.value.length>0?((0,t.wg)(),(0,t.iD)("div",w,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Задач на сегодня "+(0,u.zw)(U.value.length),1)])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(U.value,(l=>((0,t.wg)(),(0,t.j4)(j,{key:l.id},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)("№ "+(0,u.zw)(l.id),1)])),_:2},1024),(0,t.Wm)(D,{caption:""},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{color:e.find((e=>e.id===l.priority)).color},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.find((e=>e.id===l.priority)).name),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,{overline:"",class:"ellipsis"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(l.task),1)])),_:2},1024),(0,t.Wm)(D,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("до "+(0,u.zw)(l.dead_line_time),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(S,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{color:l.is_done?"positive":"negative"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(l.is_done?"Выполнено":"Не выполнено"),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])):(0,t.kq)("",!0),(0,t._)("div",m,[1===(0,n.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",{key:0,onClick:o[0]||(o[0]=e=>l.$router.push("/catalog/clients")),class:"cursor-pointer"},[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Количество клиентов ")])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t._)("p",c,(0,u.zw)(h.value.all_clients_count),1)])),_:1})])),_:1})])):(0,t.kq)("",!0),1===(0,n.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",{key:1,onClick:o[1]||(o[1]=e=>l.$router.push("/user")),class:"cursor-pointer"},[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Количество пользователей в системе ")])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t._)("p",f,(0,u.zw)(h.value.all_users_count),1)])),_:1})])),_:1})])):(0,t.kq)("",!0),(0,t._)("div",k,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Сумма к оплате ")])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{dense:"",separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.value.objects_pay_ostatok,(e=>((0,t.wg)(),(0,t.j4)(j,{clickable:"",onClick:a=>l.$router.push(`/catalog/objects/${e.id}`),key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.pay_ostatok),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})]),(0,t._)("div",p,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Процент выполнения работ ")])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{dense:"",separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.value.objects_procent_done,(e=>((0,t.wg)(),(0,t.j4)(j,{clickable:"",onClick:a=>l.$router.push(`/catalog/objects/${e.id}`),key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.procent_done),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})]),1===(0,n.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",W,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Финансовые показатели ")])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Заработная плата сотрудников на руки: "+(0,u.zw)(h.value.total_income),1)])),_:1}),(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Расходы организации на сотрудников: "+(0,u.zw)(h.value.total_outcome),1)])),_:1})])),_:1})])),_:1})])),_:1})])):((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Финансовые показатели ")])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Заработная плата: "+(0,u.zw)((0,n.SU)(a).total_income),1)])),_:1}),(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Расходы организации: "+(0,u.zw)((0,n.SU)(a).total_outcome),1)])),_:1})])),_:1})])),_:1})])),_:1})])),(0,n.SU)(a).telega_id?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",b,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Статус подключения к TG боту ")])),_:1}),(0,t.Wm)(q),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[v])),_:1})])),_:1})]))])],2)])),_:1})}}};var h=a(9885),y=a(651),z=a(4458),q=a(3190),D=a(926),C=a(3246),S=a(490),j=a(6749),Q=a(3115),Z=a(990),x=a(9984),$=a.n(x);const H=U,I=H;$()(U,"components",{QPage:h.Z,QExpansionItem:y.Z,QCard:z.Z,QCardSection:q.Z,QSeparator:D.Z,QList:C.Z,QItem:S.Z,QItemSection:j.Z,QItemLabel:Q.Z,QBadge:Z.Z})}}]);