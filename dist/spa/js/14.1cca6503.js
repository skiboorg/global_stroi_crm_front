"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[14],{8550:(e,a,l)=>{l.d(a,{Z:()=>c});var n=l(9835);const o={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(a,l)=>{const o=(0,n.up)("q-btn");return a.auth.user.role?.permission?.can_add?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,n.kq)("",!0)}}};var t=l(8879),s=l(9984),r=l.n(s);const i=o,c=i;r()(o,"components",{QBtn:t.Z})},1862:(e,a,l)=>{l.d(a,{Z:()=>c});var n=l(9835);const o={__name:"EditButton",props:["label","icon","color"],setup(e){return(a,l)=>{const o=(0,n.up)("q-btn");return a.auth.user.role?.permission?.can_edit?((0,n.wg)(),(0,n.j4)(o,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,n.kq)("",!0)}}};var t=l(8879),s=l(9984),r=l.n(s);const i=o,c=i;r()(o,"components",{QBtn:t.Z})},9014:(e,a,l)=>{l.r(a),l.d(a,{default:()=>j});var n=l(9835),o=l(6970),t=l(8550),s=l(1862);const r={class:"flex items-center justify-between q-mb-md"},i=(0,n._)("p",{class:"text-bold text-h6 no-margin"},"Роли",-1),c={class:"text-bold"},p=(0,n._)("div",{class:"flex items-center justify-between q-mb-md"},[(0,n._)("p",{class:"text-bold text-h6 no-margin"},"Доступы")],-1),d={class:"text-bold"},u={key:0},m={key:1},_={key:2},g={key:3},w={key:4},b={__name:"role",setup(e){const a={sortBy:"desc",descending:!1,page:1,rowsPerPage:50},l=[{name:"name",align:"left",label:"Название роли",field:e=>e.name,sortable:!0},{name:"permission",align:"left",label:"Доступ",field:e=>e.permission?.name,sortable:!0}],b=[{name:"name",align:"left",label:"Название доступа",field:e=>e.name,sortable:!0},{name:"can_edit_personal_data",align:"left",label:"Может редактировать персональные данные",field:e=>e.can_edit_personal_data,sortable:!0},{name:"can_view",align:"left",label:"Просмотр",field:e=>e.can_view,sortable:!0},{name:"can_edit",align:"left",label:"Редактирование",field:e=>e.can_edit,sortable:!0},{name:"can_add",align:"left",label:"Добавление",field:e=>e.can_add,sortable:!0}];return(e,f)=>{const h=(0,n.up)("q-th"),v=(0,n.up)("q-tr"),k=(0,n.up)("q-td"),y=(0,n.up)("q-table"),W=(0,n.up)("q-icon"),Z=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(Z,{padding:""},{default:(0,n.w5)((()=>[(0,n._)("div",r,[i,(0,n.Wm)(t.Z,{label:"Добавить роль",target:"_blank",to:"/admin/user/role/add/"})]),(0,n.Wm)(y,{flat:"",rows:e.auth.roles,columns:l,"row-key":"name","hide-pagination":"","table-header-class":"table-header",pagination:a},{header:(0,n.w5)((e=>[(0,n.Wm)(v,{props:e,class:"bg-grey-2"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(a=>((0,n.wg)(),(0,n.j4)(h,{key:a.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",c,(0,o.zw)(a.label),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(h,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,n.w5)((e=>[(0,n.Wm)(v,{props:e},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(a=>((0,n.wg)(),(0,n.j4)(k,{key:a.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",null,(0,o.zw)(a.value),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(k,{"auto-width":""},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{target:"_blank",to:`/admin/user/role/${e.row.id}/change/`},null,8,["to"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"]),p,(0,n.Wm)(y,{flat:"",rows:e.auth.permissions,columns:b,"row-key":"name","hide-pagination":"","table-header-class":"table-header",pagination:a},{header:(0,n.w5)((e=>[(0,n.Wm)(v,{props:e,class:"bg-grey-2"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(a=>((0,n.wg)(),(0,n.j4)(h,{key:a.name,props:e},{default:(0,n.w5)((()=>[(0,n._)("span",d,(0,o.zw)(a.label),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(h,{"auto-width":""})])),_:2},1032,["props"])])),body:(0,n.w5)((e=>[(0,n.Wm)(v,{props:e},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(a=>((0,n.wg)(),(0,n.j4)(k,{key:a.name,props:e},{default:(0,n.w5)((()=>["can_edit_personal_data"===a.name?((0,n.wg)(),(0,n.iD)("span",u,[(0,n.Wm)(W,{name:"check_circle",size:"20px",color:a.value?"positive":"negative"},null,8,["color"])])):"can_view"===a.name?((0,n.wg)(),(0,n.iD)("span",m,[(0,n.Wm)(W,{name:"check_circle",size:"20px",color:a.value?"positive":"negative"},null,8,["color"])])):"can_edit"===a.name?((0,n.wg)(),(0,n.iD)("span",_,[(0,n.Wm)(W,{name:"check_circle",size:"20px",color:a.value?"positive":"negative"},null,8,["color"])])):"can_add"===a.name?((0,n.wg)(),(0,n.iD)("span",g,[(0,n.Wm)(W,{name:"check_circle",size:"20px",color:a.value?"positive":"negative"},null,8,["color"])])):((0,n.wg)(),(0,n.iD)("span",w,(0,o.zw)(a.value),1))])),_:2},1032,["props"])))),128)),(0,n.Wm)(k,{"auto-width":""},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{target:"_blank",to:`/admin/user/rolepermission/${e.row.id}/change/`},null,8,["to"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows"])])),_:1})}}};var f=l(9885),h=l(1746),v=l(1233),k=l(1682),y=l(7220),W=l(2857),Z=l(9984),q=l.n(Z);const x=b,j=x;q()(b,"components",{QPage:f.Z,QTable:h.Z,QTr:v.Z,QTh:k.Z,QTd:y.Z,QIcon:W.Z})}}]);