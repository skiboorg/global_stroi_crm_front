"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[986],{8550:(e,l,a)=>{a.d(l,{Z:()=>c});var n=a(9835);const o={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const o=(0,n.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,n.kq)("",!0)}}};var t=a(8879),s=a(9984),r=a.n(s);const i=o,c=i;r()(o,"components",{QBtn:t.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>c});var n=a(9835);const o={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const o=(0,n.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,n.kq)("",!0)}}};var t=a(8879),s=a(9984),r=a.n(s);const i=o,c=i;r()(o,"components",{QBtn:t.Z})},6986:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});a(2879);var n=a(9835),o=a(6970),t=a(499),s=(a(1569),a(8550)),r=a(1862),i=a(9876);const c={class:"flex items-center justify-between q-mb-md"},u={class:"no-margin text-h6 text-bold"},p={class:"text-grey-6"},d={class:"text-bold"},b=["innerHTML"],m={__name:"index",setup(e){const l=(0,i.E)(),a=[{name:"username",align:"left",label:"Логин",field:e=>e.username,sortable:!0},{name:"role",align:"left",label:"Роль",field:e=>e.role?.name,sortable:!0},{name:"firstname",align:"left",label:"ФИО",field:e=>e.fio,sortable:!0},{name:"telega_id",align:"left",label:"TG бот",field:e=>e.telega_id?'<span class="text-positive">Подключен</span>':'<span class="text-negative">Не подключен</span>',sortable:!0},{name:"position",align:"left",label:"Телефон",field:e=>e.phone,sortable:!0}],m={sortBy:"desc",descending:!1,page:1,rowsPerPage:100},g=(0,t.iH)([]),_=(0,t.iH)({q:"",role__id:""});(0,n.wF)((async()=>{await w()}));const w=async()=>{g.value=await l.getUsers(`q=${_.value.q}&role__id=${_.value.role__id}`)};return(e,l)=>{const t=(0,n.up)("q-space"),i=(0,n.up)("q-th"),_=(0,n.up)("q-tr"),w=(0,n.up)("q-td"),f=(0,n.up)("q-table"),h=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(h,{padding:""},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n._)("p",u,[(0,n.Uk)("Пользователи "),(0,n._)("span",p,(0,o.zw)(g.value.length),1)]),(0,n.Wm)(t),(0,n.Wm)(s.Z,{icon:"add",label:"Добавить пользователя",onClick:l[0]||(l[0]=l=>e.$router.push("/user/add"))})]),(0,n.Wm)(f,{flat:"",rows:g.value,columns:a,"row-key":"name","table-header-class":"table-header",pagination:m},{header:(0,n.w5)((e=>[(0,n.Wm)(_,{props:e,class:"bg-grey-2"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(l=>((0,n.wg)(),(0,n.j4)(i,{key:l.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",d,(0,o.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(i,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,n.w5)((l=>[(0,n.Wm)(_,{props:l},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.cols,(a=>((0,n.wg)(),(0,n.j4)(w,{key:a.name,onClick:a=>e.auth.user.role.permission.can_view?e.$router.push(`/user/${l.row.id}`):null,props:l},{default:(0,n.w5)((()=>[(0,n._)("p",{class:"no-margin",innerHTML:a.value},null,8,b)])),_:2},1032,["onClick","props"])))),128)),(0,n.Wm)(w,{"auto-width":""},{default:(0,n.w5)((()=>[(0,n.Wm)(r.Z,{onClick:a=>e.$router.push(`/user/edit/${l.row.id}`)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1})}}};var g=a(9885),_=a(136),w=a(1746),f=a(1233),h=a(1682),v=a(7220),k=a(9984),q=a.n(k);const y=m,Z=y;q()(m,"components",{QPage:g.Z,QSpace:_.Z,QTable:w.Z,QTr:f.Z,QTh:h.Z,QTd:v.Z})}}]);