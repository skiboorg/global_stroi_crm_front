"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[899],{4899:(l,e,a)=>{a.r(e),a.d(e,{default:()=>J});a(2879);var t=a(9835),o=a(6970),u=a(499),n=a(6928),i=a(1569);const s={class:"row q-col-gutter-md"},d={key:0,class:"col-12 col-sm-6 col-md-6 col-lg-4"},c={key:1,class:"col-12 col-sm-6 col-md-6 col-lg-4"},_={class:"no-margin text-h5"},m={key:2,class:"col-12 col-sm-6 col-md-6 col-lg-4"},w={class:"no-margin text-h5"},r={key:3,class:"col-12 col-sm-6 col-md-6 col-lg-4"},g={key:4,class:"col-12 col-sm-6 col-md-6 col-lg-4"},k={key:5,class:"col-12 col-sm-6 col-md-6 col-lg-4"},p={class:"no-margin text-h5"},f={key:6,class:"col-12 col-sm-6 col-md-6 col-lg-4"},W={class:"no-margin"},v={class:"no-margin"},b={class:"col-12 col-sm-6 col-md-6 col-lg-4"},U={key:0,class:"no-margin text-positive"},y={key:1,class:"no-margin"},q=(0,t._)("span",{class:"text-negative"}," Бот не подключен",-1),h=(0,t._)("br",null,null,-1),z=(0,t._)("br",null,null,-1),D=(0,t._)("span",{class:"text-bold"},[(0,t._)("a",{target:"_blank",href:"https://t.me/globalstroy_bot"},"@globalstroy_bot")],-1),S=(0,t._)("br",null,null,-1),j=(0,t._)("br",null,null,-1),Q=(0,t._)("br",null,null,-1),Z=(0,t._)("br",null,null,-1),C=(0,t._)("br",null,null,-1),x=(0,t._)("br",null,null,-1),H={__name:"Dashboard",setup(l){const e=[{id:1,name:"Низкий",color:"positive"},{id:2,name:"Средний",color:"warning"},{id:3,name:"Высокий",color:"negative"}],{user:a}=(0,n.t)(),H=(0,u.iH)([]),$=(0,u.iH)({}),I=(0,u.iH)(null);(0,t.wF)((async()=>{let l=new Date;I.value=l.toLocaleDateString().split(".").join("-"),await K(),await L()}));const K=async()=>{let l,e=I.value.split("-").reverse().join("-");l=await(0,i.api)(`/api/task/task?own=true&dead_line_date=${e}`),H.value=l.data.results},L=async()=>{const{data:l}=await(0,i.api)("/api/report/stats");$.value=l};return(l,n)=>{const i=(0,t.up)("q-card-section"),I=(0,t.up)("q-separator"),K=(0,t.up)("q-item-label"),L=(0,t.up)("q-badge"),T=(0,t.up)("q-item-section"),Y=(0,t.up)("q-item"),B=(0,t.up)("q-list"),F=(0,t.up)("q-card"),G=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(G,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",s,[H.value.length>0?((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Задач на сегодня "+(0,o.zw)(H.value.length),1)])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(H.value,(l=>((0,t.wg)(),(0,t.j4)(Y,{key:l.id},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)("№ "+(0,o.zw)(l.id),1)])),_:2},1024),(0,t.Wm)(K,{caption:""},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{color:e.find((e=>e.id===l.priority)).color},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.find((e=>e.id===l.priority)).name),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024),(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,{overline:"",class:"ellipsis"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.task),1)])),_:2},1024),(0,t.Wm)(K,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)("до "+(0,o.zw)(l.dead_line_time),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(T,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{color:l.is_done?"positive":"negative"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.is_done?"Выполнено":"Не выполнено"),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])):(0,t.kq)("",!0),1===(0,u.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",c,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Общее количество объектов ")])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t._)("p",_,(0,o.zw)($.value.objects_count),1)])),_:1})])),_:1})])):(0,t.kq)("",!0),1===(0,u.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",m,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Количество клиентов ")])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t._)("p",w,(0,o.zw)($.value.all_clients_count),1)])),_:1})])),_:1})])):(0,t.kq)("",!0),1===(0,u.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Процент выполнения работ ")])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,{dense:"",separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)($.value.objects_procent_done,(e=>((0,t.wg)(),(0,t.j4)(Y,{clickable:"",onClick:a=>l.$router.push(`/catalog/objects/${e.id}`),key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.procent_done),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})])):(0,t.kq)("",!0),1===(0,u.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Сумма к оплате ")])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,{dense:"",separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)($.value.objects_pay_ostatok,(e=>((0,t.wg)(),(0,t.j4)(Y,{clickable:"",onClick:a=>l.$router.push(`/catalog/objects/${e.id}`),key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.pay_ostatok),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})])):(0,t.kq)("",!0),1===(0,u.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",k,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Количество пользователей в системе ")])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t._)("p",p,(0,o.zw)($.value.all_users_count),1)])),_:1})])),_:1})])):(0,t.kq)("",!0),1===(0,u.SU)(a)?.role.id?((0,t.wg)(),(0,t.iD)("div",f,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Финансовые показатели ")])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t._)("p",W,"Заработная плата сотрудников на руки: "+(0,o.zw)($.value.total_income),1),(0,t._)("p",v,"Расходы организации на сотрудников: "+(0,o.zw)($.value.total_outcome),1)])),_:1})])),_:1})])):(0,t.kq)("",!0),(0,t._)("div",b,[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Статус подключения к TG боту ")])),_:1}),(0,t.Wm)(I),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,u.SU)(a).telega_id?((0,t.wg)(),(0,t.iD)("p",U," Бот подключен ")):((0,t.wg)(),(0,t.iD)("p",y,[q,h,z,(0,t.Uk)(" 1. Создайте диалог с "),D,S,j,(0,t.Uk)(" 3. В созданном диалоге нажмите Start"),Q,Z,(0,t.Uk)(" 4. Если вы все сделали правильно, бот сообщит об этом."),C,x]))])),_:1})])),_:1})])])])),_:1})}}};var $=a(9885),I=a(4458),K=a(3190),L=a(926),T=a(3246),Y=a(490),B=a(6749),F=a(3115),G=a(990),P=a(9984),A=a.n(P);const E=H,J=E;A()(H,"components",{QPage:$.Z,QCard:I.Z,QCardSection:K.Z,QSeparator:L.Z,QList:T.Z,QItem:Y.Z,QItemSection:B.Z,QItemLabel:F.Z,QBadge:G.Z})}}]);