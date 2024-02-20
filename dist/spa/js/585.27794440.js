"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[585],{8550:(e,n,t)=>{t.d(n,{Z:()=>i});var l=t(9835);const o={__name:"AddButton",props:["label","icon","loading","color"],setup(e){return(n,t)=>{const o=(0,l.up)("q-btn");return n.auth.user.role?.permission?.can_add?((0,l.wg)(),(0,l.j4)(o,{key:0,"no-caps":"",unelevated:"",loading:e.loading,color:e.color?e.color:"primary",label:e.label,icon:e.icon?e.icon:"add"},null,8,["loading","color","label","icon"])):(0,l.kq)("",!0)}}};var a=t(8879),r=t(9984),s=t.n(r);const d=o,i=d;s()(o,"components",{QBtn:a.Z})},8203:(e,n,t)=>{t.d(n,{Z:()=>u});var l=t(9835);function o(e,n){const t=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)(t,{"no-caps":"",outline:"",color:"primary",label:"Назад",icon:"arrow_back",class:"q-mr-md",onClick:n[0]||(n[0]=n=>e.$router.back())})}var a=t(1639),r=t(8879),s=t(9984),d=t.n(s);const i={},c=(0,a.Z)(i,[["render",o]]),u=c;d()(i,"components",{QBtn:r.Z})},1862:(e,n,t)=>{t.d(n,{Z:()=>i});var l=t(9835);const o={__name:"EditButton",props:["label","icon","color"],setup(e){return(n,t)=>{const o=(0,l.up)("q-btn");return n.auth.user.role?.permission?.can_edit?((0,l.wg)(),(0,l.j4)(o,{key:0,"no-caps":"",unelevated:"",color:e.color,label:e.label,icon:e.icon?e.icon:"edit"},null,8,["color","label","icon"])):(0,l.kq)("",!0)}}};var a=t(8879),r=t(9984),s=t.n(r);const d=o,i=d;s()(o,"components",{QBtn:a.Z})},8585:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(2879);var l=t(9835),o=t(499),a=t(6970),r=(t(8203),t(9876)),s=t(1862),d=t(8550);const i={class:"flex items-center justify-between q-mb-md"},c=(0,l._)("p",{class:"no-margin text-h6 text-bold"},"Структура организации",-1),u={class:"flex items-center justify-between full-width"},m={class:"text-weight-bold text-primary"},p={class:"flex items-center"},w={key:0,class:"q-mb-none text-grey-9 q-mr-md"},b={key:0,class:""},k={__name:"structure",setup(e){const n=(0,r.E)(),t="http://194.67.113.163:8010",k=(0,l.Fl)((()=>n.departments)),_=(0,o.iH)("пп1");return(e,n)=>{const r=(0,l.up)("q-item-label"),g=(0,l.up)("q-item-section"),f=(0,l.up)("q-item"),v=(0,l.up)("q-list"),y=(0,l.up)("q-tree"),h=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(h,{padding:""},{default:(0,l.w5)((()=>[(0,l._)("div",i,[c,(0,l.Wm)(d.Z,{label:"Добавить отдел",target:"_blank",href:`${(0,o.SU)(t)}/admin/user/department/add/`},null,8,["href"])]),(0,l.Wm)(y,{nodes:k.value,"node-key":"name","children-key":"divisions","label-key":"name","selected-color":"primary",selected:_.value,"onUpdate:selected":n[0]||(n[0]=e=>_.value=e),"default-expand-all":""},{"default-header":(0,l.w5)((e=>[(0,l._)("div",u,[(0,l._)("div",m,(0,a.zw)(e.node.name),1),(0,l._)("div",p,[e.node.leader?((0,l.wg)(),(0,l.iD)("p",w," Ответственный: "+(0,a.zw)(e.node.leader.fio),1)):(0,l.kq)("",!0),e.node.divisions?((0,l.wg)(),(0,l.j4)(s.Z,{key:1,icon:"edit",target:"_blank",href:`${(0,o.SU)(t)}/admin/user/department/${e.node.id}/change/`,flat:""},null,8,["href"])):(0,l.kq)("",!0)])])])),"default-body":(0,l.w5)((n=>[n.node.divisions?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)(v,{separator:"",bordered:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.node.users,(n=>((0,l.wg)(),(0,l.j4)(f,{dense:"",key:n.id,clickable:"",onClick:t=>e.$router.push(`/user/${n.id}`)},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[n.firstname?((0,l.wg)(),(0,l.j4)(r,{key:0},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(n.lastname)+" "+(0,a.zw)(n.firstname)+(0,a.zw)(n.surname),1)])),_:2},1024)):((0,l.wg)(),(0,l.j4)(r,{key:1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(n.username),1)])),_:2},1024))])),_:2},1024),n.role?((0,l.wg)(),(0,l.j4)(g,{key:0},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(n.role.name),1)])),_:2},1024)):((0,l.wg)(),(0,l.j4)(g,{key:1},{default:(0,l.w5)((()=>[(0,l.Uk)(" Роль не указана ")])),_:1}))])),_:2},1032,["onClick"])))),128))])),_:2},1024)]))])),_:1},8,["nodes","selected"])])),_:1})}}};var _=t(9885),g=t(4749),f=t(3246),v=t(490),y=t(6749),h=t(3115),q=t(9984),Z=t.n(q);const j=k,x=j;Z()(k,"components",{QPage:_.Z,QTree:g.Z,QList:f.Z,QItem:v.Z,QItemSection:y.Z,QItemLabel:h.Z})}}]);