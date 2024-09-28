"use strict";(globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[]).push([[256],{1256:(l,e,a)=>{a.r(e),a.d(e,{default:()=>U});a(2879);var u=a(9835),o=a(1957),n=(a(8203),a(499)),t=a(8550),d=a(2637),m=a(8339),s=a(1569),i=a(9876);const r=(0,u._)("div",{class:"flex items-center q-mb-md"},[(0,u._)("p",{class:"no-margin text-h6 text-bold"},"Новый пользователь")],-1),p={class:"row q-col-gutter-md"},v={class:"col-12 col-md-6"},b={class:"col-12 col-md-6"},V={__name:"add",setup(l){const e=(0,i.E)(),a=(0,m.tv)(),V=((0,n.iH)([]),(0,n.iH)([]),(0,n.iH)([]),(0,n.iH)(!1)),c=(0,n.iH)(""),y=(0,n.iH)(null),_=(0,n.iH)({role:null,username:null,department:null,subdivision:null,fio:null,phone:null,email:null,telega_username:null,timezone:0,daily_payment:3500,daily_rashod:4500,password:null}),f=(0,u.Fl)((()=>e.departments)),g=async()=>{V.value=!V.value,c.value="";let l=new FormData;_.value.department=_.value.department.id;for(let[e,a]of Object.entries(_.value))l.append(e,JSON.stringify(a));y.value&&l.append("avatar",y.value),(0,s.api)({method:"post",url:"/api/user/user",data:l,headers:{"Content-Type":"multipart/form-data"}}).then((l=>{(0,d.d)("positive","Пользователь успешно создан"),a.push("/user")})).catch((l=>{let e=Object.keys(l.response.data);for(let a of e)c.value+=l.response.data[a][0];(0,d.d)("negative",c.value)})),V.value=!V.value};return(l,e)=>{const a=(0,u.up)("q-select"),n=(0,u.up)("q-input"),d=(0,u.up)("q-file"),m=(0,u.up)("q-form"),s=(0,u.up)("q-page");return(0,u.wg)(),(0,u.j4)(s,{padding:""},{default:(0,u.w5)((()=>[r,(0,u.Wm)(m,{onSubmit:(0,o.iM)(g,["prevent"])},{default:(0,u.w5)((()=>[(0,u._)("div",p,[(0,u._)("div",v,[(0,u.Wm)(a,{outlined:"",modelValue:_.value.role,"onUpdate:modelValue":e[0]||(e[0]=l=>_.value.role=l),options:l.auth.roles,"option-label":"name",label:"Выберите роль*","map-options":"","option-value":"id","emit-value":"",clearable:"","lazy-rules":"",rules:[l=>l||"Это обязательное поле"]},null,8,["modelValue","options","rules"]),(0,u.Wm)(a,{outlined:"",modelValue:_.value.department,"onUpdate:modelValue":e[1]||(e[1]=l=>_.value.department=l),options:f.value,"option-label":"name",label:"Выберите отдел*",clearable:"","lazy-rules":"",rules:[l=>l||"Это обязательное поле"]},null,8,["modelValue","options","rules"]),(0,u.Wm)(a,{outlined:"",modelValue:_.value.subdivision,"onUpdate:modelValue":e[2]||(e[2]=l=>_.value.subdivision=l),options:_.value.department?.divisions,"option-label":"name",label:"Выберите подразделение*","map-options":"","option-value":"id","emit-value":"",clearable:"","lazy-rules":"",rules:[l=>l||"Это обязательное поле"]},null,8,["modelValue","options","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.username,"onUpdate:modelValue":e[3]||(e[3]=l=>_.value.username=l),label:"Логин*","lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.password,"onUpdate:modelValue":e[4]||(e[4]=l=>_.value.password=l),label:"Пароль*","lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.daily_payment,"onUpdate:modelValue":e[5]||(e[5]=l=>_.value.daily_payment=l),type:"number",label:"Дневной доход сотрудника*","lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.daily_rashod,"onUpdate:modelValue":e[6]||(e[6]=l=>_.value.daily_rashod=l),type:"number",label:"Дневной расход на сотрудника*","lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"])]),(0,u._)("div",b,[(0,u.Wm)(n,{outlined:"",modelValue:_.value.timezone,"onUpdate:modelValue":e[7]||(e[7]=l=>_.value.timezone=l),type:"number",class:"q-mb-md",label:"Часовой пояс"},null,8,["modelValue"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.telega_username,"onUpdate:modelValue":e[8]||(e[8]=l=>_.value.telega_username=l),label:"Telegram username (без символа@)*","lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.fio,"onUpdate:modelValue":e[9]||(e[9]=l=>_.value.fio=l),label:"ФИО*","lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.phone,"onUpdate:modelValue":e[10]||(e[10]=l=>_.value.phone=l),label:"Телефон*","lazy-rules":"",mask:"+7 (###) ###-##-##","fill-mask":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.email,"onUpdate:modelValue":e[11]||(e[11]=l=>_.value.email=l),label:"Email*","lazy-rules":"",rules:[l=>null!==l&&""!==l||"Это обязательное поле"]},null,8,["modelValue","rules"]),(0,u.Wm)(n,{outlined:"",modelValue:_.value.position,"onUpdate:modelValue":e[12]||(e[12]=l=>_.value.position=l),class:"q-mb-md",label:"Должность"},null,8,["modelValue"]),(0,u.Wm)(d,{outlined:"",modelValue:y.value,"onUpdate:modelValue":e[13]||(e[13]=l=>y.value=l),class:"q-mb-md",label:"Фото"},null,8,["modelValue"])])]),(0,u.Wm)(t.Z,{loading:V.value,label:"Сохранить пользователя",type:"submit",color:"positive",icon:"done"},null,8,["loading"])])),_:1},8,["onSubmit"])])),_:1})}}};var c=a(9885),y=a(8326),_=a(6384),f=a(3119),g=a(9420),h=a(9984),W=a.n(h);const z=V,U=z;W()(V,"components",{QPage:c.Z,QForm:y.Z,QSelect:_.Z,QInput:f.Z,QFile:g.Z})}}]);