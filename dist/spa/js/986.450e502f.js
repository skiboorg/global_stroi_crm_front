"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[986],{8550:(e,l,a)=>{a.d(l,{Z:()=>u});var o=a(9835);const n={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_add?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),r=a(9984),s=a.n(r);const i=n,u=i;s()(n,"components",{QBtn:t.Z})},1862:(e,l,a)=>{a.d(l,{Z:()=>u});var o=a(9835);const n={__name:"EditButton",props:["label","icon","color"],setup(e){return(l,a)=>{const n=(0,o.up)("q-btn");return l.auth.user.role?.permission?.can_edit?((0,o.wg)(),(0,o.j4)(n,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,o.kq)("",!0)}}};var t=a(8879),r=a(9984),s=a.n(r);const i=n,u=i;s()(n,"components",{QBtn:t.Z})},6986:(e,l,a)=>{a.r(l),a.d(l,{default:()=>y});a(2879);var o=a(9835),n=a(6970),t=a(499),r=(a(1569),a(8550)),s=a(1862),i=a(9876);const u={class:"flex items-center justify-between q-mb-md"},c={class:"no-margin text-h6 text-bold"},d={class:"text-grey-6"},p={class:"text-bold"},m={__name:"index",setup(e){const l=(0,i.E)(),a=[{name:"username",align:"left",label:"Логин",field:e=>e.username,sortable:!0},{name:"role",align:"left",label:"Роль",field:e=>e.role?.name,sortable:!0},{name:"firstname",align:"left",label:"Имя",field:e=>e.firstname,sortable:!0},{name:"lastname",align:"left",label:"Фамилия",field:e=>e.lastname,sortable:!0},{name:"position",align:"left",label:"Должность",field:e=>e.position,sortable:!0}],m={sortBy:"desc",descending:!1,page:1,rowsPerPage:100},b=(0,t.iH)([]),g=(0,t.iH)({q:"",role__id:""});(0,o.wF)((async()=>{await w()}));const w=async()=>{b.value=await l.getUsers(`q=${g.value.q}&role__id=${g.value.role__id}`)};return(e,l)=>{const t=(0,o.up)("q-space"),i=(0,o.up)("q-th"),g=(0,o.up)("q-tr"),w=(0,o.up)("q-td"),_=(0,o.up)("q-table"),f=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(f,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o._)("p",c,[(0,o.Uk)("Пользователи "),(0,o._)("span",d,(0,n.zw)(b.value.length),1)]),(0,o.Wm)(t),(0,o.Wm)(r.Z,{icon:"add",label:"Добавить пользователя",onClick:l[0]||(l[0]=l=>e.$router.push("/user/add"))})]),(0,o.Wm)(_,{flat:"",rows:b.value,columns:a,"row-key":"name","table-header-class":"table-header",pagination:m},{header:(0,o.w5)((e=>[(0,o.Wm)(g,{props:e,class:"bg-grey-2"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(l=>((0,o.wg)(),(0,o.j4)(i,{key:l.name,props:e},{default:(0,o.w5)((()=>[(0,o._)("span",p,(0,n.zw)(l.label),1)])),_:2},1032,["props"])))),128)),(0,o.Wm)(i,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,o.w5)((l=>[(0,o.Wm)(g,{props:l},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.cols,(a=>((0,o.wg)(),(0,o.j4)(w,{key:a.name,onClick:a=>e.auth.user.role.permission.can_view?e.$router.push(`/user/${l.row.id}`):null,props:l},{default:(0,o.w5)((()=>[(0,o._)("span",null,(0,n.zw)(a.value),1)])),_:2},1032,["onClick","props"])))),128)),(0,o.Wm)(w,{"auto-width":""},{default:(0,o.w5)((()=>[(0,o.Wm)(s.Z,{onClick:a=>e.$router.push(`/user/edit/${l.row.id}`)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1})}}};var b=a(9885),g=a(136),w=a(1746),_=a(1233),f=a(1682),h=a(7220),k=a(9984),v=a.n(k);const q=m,y=q;v()(m,"components",{QPage:b.Z,QSpace:g.Z,QTable:w.Z,QTr:_.Z,QTh:f.Z,QTd:h.Z})}}]);