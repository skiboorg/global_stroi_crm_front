"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[411],{6411:(e,l,a)=>{a.r(l),a.d(l,{default:()=>z});a(2879);var t=a(9835),n=a(499),o=a(6970),u=a(3130),i=a.n(u),m=a(9302),s=a(2591),d=a(1569);const c={key:0},p={class:"text-right"},r={key:1},g=(0,t._)("div",{class:"text-h6"},"Редактирование элемента меню",-1),_=(0,t._)("p",null,[(0,t.Uk)("Для выбора иконки перейдите на "),(0,t._)("a",{target:"_blank",href:"https://fonts.google.com/icons?selected=Material+Symbols+Outlined:settings:FILL@0;wght@400;GRAD@0;opsz@24&icon.platform=android"},"эту страницу")],-1),w={__name:"index",setup(e){(0,t.aZ)(i());const l=(0,m.Z)(),a=(0,s.L)(),u=(0,n.iH)([]);a.main_menu.forEach((e=>{u.value.push(e)}));(0,n.iH)(!0);const w=(0,n.iH)(!1),h=(0,n.iH)({}),v={animation:200,group:"description",disabled:!1,ghostClass:"ghost"},b=e=>{h.value=e,w.value=!0},f=async()=>{l.loading.show();let e=[];u.value.forEach((l=>{let a={main_menu:l.id,menu_items:[]};l.menu_items.length>0&&l.menu_items.forEach((e=>{a.menu_items.push(e.id)})),e.push(a)})),await d.api.post("api/common_data/update_main_menu_order",{data:e}),await a.getMenu(),l.loading.hide()};return(e,l)=>{const m=(0,t.up)("q-btn"),s=(0,t.up)("q-icon"),d=(0,t.up)("q-item-section"),W=(0,t.up)("q-item"),k=(0,t.up)("q-expansion-item"),q=(0,t.up)("q-page"),Z=(0,t.up)("q-card-section"),Q=(0,t.up)("q-input"),C=(0,t.up)("q-select"),y=(0,t.up)("q-card-actions"),V=(0,t.up)("q-form"),U=(0,t.up)("q-card"),x=(0,t.up)("q-dialog"),S=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(q,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(i()),(0,t.dG)({list:u.value},v,{class:"list-group","ghost-class":"ghost",group:"main",onEnd:f,"item-key":"name"}),{item:(0,t.w5)((({element:e})=>[e.menu_items.length>0?((0,t.wg)(),(0,t.iD)("div",c,[(0,t.Wm)(k,{group:"g","header-class":"handle",class:"draggable-item q-mb-md",icon:e.icon,label:e.name?e.name:e.page.name,"expand-separator":""},{default:(0,t.w5)((()=>[(0,t._)("div",p,[(0,t.Wm)(m,{icon:"edit",label:"Редактировать меню","no-caps":"",flat:"",onClick:l=>b(e)},null,8,["onClick"])]),(0,t.Wm)((0,n.SU)(i()),(0,t.dG)({list:e.menu_items},v,{class:"list-group q-pa-md","ghost-class":"ghost",group:`sub-${e.id}`,onEnd:f,"item-key":"name"}),{item:(0,t.w5)((({element:e})=>[(0,t.Wm)(W,{class:"draggable-item q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{name:e.icon},null,8,["name"])])),_:2},1024),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.name?e.name:e.page.name),1)])),_:2},1024),(0,t.Wm)(d,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{icon:"edit",flat:"",onClick:l=>b(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1040,["list","group"])])),_:2},1032,["icon","label"])])):((0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(W,{class:"draggable-item q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{name:e.icon},null,8,["name"])])),_:2},1024),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(d,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{icon:"edit",flat:"",onClick:l=>b(e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)]))])),_:1},16,["list"])])),_:1}),(0,t.Wm)(x,{modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{style:{width:"700px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{onSubmit:l[3]||(l[3]=e=>(0,n.SU)(a).updateMenu(h.value))},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,null,{default:(0,t.w5)((()=>[g])),_:1}),(0,t.Wm)(Z,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{outlined:"",label:"Название меню",modelValue:h.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>h.value.name=e),"lazy-rules":"",rules:[e=>e&&e.length>0||"Это обязательное поле"]},null,8,["modelValue","rules"]),_,(0,t.Wm)(Q,{outlined:"",label:"Иконка",modelValue:h.value.icon,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value.icon=e),class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(C,{outlined:"",label:"Пункт меню виден для ролей",options:e.auth.roles,"option-label":"name","option-value":"id",modelValue:h.value.role_can_view,"onUpdate:modelValue":l[2]||(l[2]=e=>h.value.role_can_view=e),"lazy-rules":"","emit-value":"","map-options":"",multiple:"","use-chips":"",rules:[e=>e||"Это обязательное поле"]},null,8,["options","modelValue","rules"])])),_:1}),(0,t.Wm)(y,{align:"right",class:"bg-white"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(m,{unelevated:"","no-caps":"",label:"Сохранить",color:"positive",type:"submit"},null,512),[[S]]),(0,t.wy)((0,t.Wm)(m,{unelevated:"","no-caps":"",label:"Отмена",color:"dark"},null,512),[[S]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}};var h=a(9885),v=a(651),b=a(8879),f=a(490),W=a(6749),k=a(2857),q=a(2074),Z=a(4458),Q=a(8326),C=a(3190),y=a(3119),V=a(6384),U=a(1821),x=a(2146),S=a(9984),E=a.n(S);const I=w,z=I;E()(w,"components",{QPage:h.Z,QExpansionItem:v.Z,QBtn:b.Z,QItem:f.Z,QItemSection:W.Z,QIcon:k.Z,QDialog:q.Z,QCard:Z.Z,QForm:Q.Z,QCardSection:C.Z,QInput:y.Z,QSelect:V.Z,QCardActions:U.Z}),E()(w,"directives",{ClosePopup:x.Z})}}]);