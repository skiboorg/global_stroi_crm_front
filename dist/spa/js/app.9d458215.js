(()=>{"use strict";var e={1753:(e,t,o)=>{var n=o(1957),r=o(1947),a=o(499),i=o(9835);function s(e,t,o,n,r,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var c=o(1639);const u=(0,c.Z)(l,[["render",s]]),p=u;var d=o(3340),h=o(1809);const m=(0,d.h)((()=>{const e=(0,h.WB)();return e}));var f=o(8339);const b=[{path:"/login",component:()=>Promise.all([o.e(736),o.e(378)]).then(o.bind(o,3378)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(139)]).then(o.bind(o,8139))}]},{path:"/",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(839)]).then(o.bind(o,3839))}]},{path:"/dashboard",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(839)]).then(o.bind(o,3839))}]},{path:"/organization",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(585)]).then(o.bind(o,8585))}]},{path:"/menu",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(411)]).then(o.bind(o,6411))}]},{path:"/user",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(986)]).then(o.bind(o,6986))}]},{path:"/user/add",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(256)]).then(o.bind(o,1256))}]},{path:"/user/edit/:id",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(602)]).then(o.bind(o,7602))}]},{path:"/user/:id",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(30)]).then(o.bind(o,30))}]},{path:"/user/role",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(14)]).then(o.bind(o,9014))}]},{path:"/journal",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"outgoing",component:()=>Promise.all([o.e(736),o.e(540)]).then(o.bind(o,5540))},{path:"doverennosti",component:()=>Promise.all([o.e(736),o.e(200)]).then(o.bind(o,2200))},{path:"employment_contracts",component:()=>Promise.all([o.e(736),o.e(2)]).then(o.bind(o,1002))},{path:"orders",component:()=>Promise.all([o.e(736),o.e(869)]).then(o.bind(o,5869))}]},{path:"/catalog",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"subworkers",component:()=>Promise.all([o.e(736),o.e(35)]).then(o.bind(o,3035))},{path:"suppliers",component:()=>Promise.all([o.e(736),o.e(457)]).then(o.bind(o,9457))},{path:"objects",component:()=>Promise.all([o.e(736),o.e(958)]).then(o.bind(o,4958))},{path:"objects/:id",component:()=>Promise.all([o.e(736),o.e(816)]).then(o.bind(o,1816))},{path:"clients",component:()=>Promise.all([o.e(736),o.e(250)]).then(o.bind(o,1250))}]},{path:"/form",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,8317)),children:[{path:"stress_form",component:()=>Promise.all([o.e(736),o.e(646)]).then(o.bind(o,646))},{path:"user_stress_forms",component:()=>Promise.all([o.e(736),o.e(844)]).then(o.bind(o,5844))},{path:"admin_stress_forms",component:()=>Promise.all([o.e(736),o.e(620)]).then(o.bind(o,3620))},{path:"user_stress_form/:uuid",component:()=>Promise.all([o.e(736),o.e(237)]).then(o.bind(o,2237))},{path:"filled_stress_form/:uuid",component:()=>Promise.all([o.e(736),o.e(867)]).then(o.bind(o,8867))},{path:"user_tasks",component:()=>Promise.all([o.e(736),o.e(786)]).then(o.bind(o,6786))},{path:"admin_tasks",component:()=>Promise.all([o.e(736),o.e(970)]).then(o.bind(o,8970))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(134)]).then(o.bind(o,4134))}],g=b,v=(0,d.BC)((function(){const e=f.PO,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("/")});return t}));async function P(e,t){const o=e(p);o.use(r.Z,t);const n="function"===typeof m?await m({}):m;o.use(n);const i=(0,a.Xl)("function"===typeof v?await v({store:n}):v);return n.use((({store:e})=>{e.router=i})),{app:o,store:n,router:i}}var y=o(5943),_=o(4006),w=o(6827),k=o(6950),Z=o(5917);const j={config:{},lang:y.Z,plugins:{Cookies:_.Z,Notify:w.Z,Loading:k.Z,LoadingBar:Z.Z}};o(9766);let O="function"===typeof p.preFetch?p.preFetch:void 0!==p.__c&&"function"===typeof p.__c.preFetch&&p.__c.preFetch;function A(e,t){const o=e?e.matched?e:t.resolve(e).route:t.currentRoute.value;if(!o)return[];const n=o.matched.filter((e=>void 0!==e.components));return 0===n.length?[]:Array.prototype.concat.apply([],n.map((e=>Object.keys(e.components).map((t=>{const o=e.components[t];return{path:e.path,c:o}})))))}function C({router:e,store:t,publicPath:o}){e.beforeResolve(((n,r,a)=>{const i=window.location.href.replace(window.location.origin,""),s=A(n,e),l=A(r,e);let c=!1;const u=s.filter(((e,t)=>c||(c=!l[t]||l[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==O&&(u.unshift(O),O=!1),0===u.length)return a();let p=!1;const d=e=>{p=!0,a(e)},h=()=>{Z.Z.stop(),!1===p&&a()};Z.Z.start(),u.reduce(((e,a)=>e.then((()=>!1===p&&a({store:t,currentRoute:n,previousRoute:r,redirect:d,urlPath:i,publicPath:o})))),Promise.resolve()).then(h).catch((e=>{console.error(e),h()}))}))}const x="/";async function F({app:e,router:t,store:o},n){let r=!1;const a=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},i=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===r&&c<n.length;c++)try{await n[c]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:s,publicPath:x})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&(e.use(t),C({router:t,store:o}),e.mount("#q-app"))}P(n.ri,j).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,1569)),Promise.resolve().then(o.bind(o,6927))]).then((t=>{const o=n(t).filter((e=>"function"===typeof e));F(e,o)}))}))},1569:(e,t,o)=>{o.r(t),o.d(t,{api:()=>i,default:()=>s});var n=o(3340),r=o(7524),a=o(4006);const i=r.Z.create({baseURL:"http://194.67.113.163:8010"}),s=(0,n.xr)((({app:e,ssrContext:t})=>{const o=a.Z;let n=o.get("auth_token");console.log("before",i.defaults.headers.common),n?(console.log("Token exists axios"),i.defaults.headers.common["Authorization"]="Token "+n):(i.defaults.headers.common["Authorization"]=null,o.remove("auth_token")),console.log("after",i.defaults.headers.common)}))},6927:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=o(3340),r=o(4006),a=o(6928),i=o(2591),s=o(9876);const l=(0,n.xr)((async({app:e,ssrContext:t,store:o})=>{const n=(0,a.t)(o),l=(0,i.L)(o),c=(0,s.E)(o);r.Z;await n.getUser(),await n.getRoles(),await n.getPermissions(),await l.getMenu(),await c.getDepartments(),e.config.globalProperties.auth=n.$state,e.config.globalProperties.menu=l.$state,e.config.globalProperties.common_data=c.$state,e.config.globalProperties.$filters={formatPrice(e){return e.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})}}}))},6928:(e,t,o)=>{o.d(t,{t:()=>u});o(2879);var n=o(499),r=o(1809),a=o(1569),i=o(4006),s=o(6827),l=o(8346),c=o(8339);const u=(0,r.Q_)("auth",(()=>{const e=(0,n.iH)({}),t=(0,n.iH)([]),o=(0,n.iH)([]),r=(0,n.iH)(!1);(0,c.tv)();async function u(){await a.api.post("/auth/token/logout/"),a.api.defaults.headers.common["Authorization"]=null,i.Z.remove("auth_token"),this.router.push("/login")}function p(e){let t=this;a.api.post("/auth/token/login/",e).then((async function(e){i.Z.set("auth_token",e.data.auth_token,{expires:"2h"}),a.api.defaults.headers.common["Authorization"]="Token "+e.data.auth_token,s.Z.create({message:"Успешная авторизация",color:"positive",position:l.Z.lt.sm?"bottom":"bottom-right"}),await t.getUser(),console.log(t.user),t.router.push("/dashboard")})).catch((function(e){console.log(e),s.Z.create({message:e.response.data.non_field_errors,html:!0,color:"red",position:l.Z.lt.sm?"bottom":"bottom-right"})}))}async function d(){let e;console.log("get user"),console.log(a.api.defaults.headers.common["Authorization"]);try{e=await a.api.get("/api/user/me"),this.loggedIn=!0,this.user=e.data,console.log("get user done")}catch(t){return a.api.defaults.headers.common["Authorization"]=null,i.Z.remove("auth_token"),this.loggedIn=!1,void(this.user={})}}async function h(){const e=await(0,a.api)("/api/user/role");t.value=e.data}async function m(){const e=await(0,a.api)("/api/user/permission");o.value=e.data}return{user:e,roles:t,permissions:o,loginUser:p,getUser:d,getRoles:h,getPermissions:m,loggedIn:r,logoutUser:u}}))},9876:(e,t,o)=>{o.d(t,{E:()=>s});var n=o(1809),r=o(499),a=o(1569),i=o(9302);const s=(0,n.Q_)("common_data",(()=>{(0,i.Z)(),(0,r.iH)([]);const e=(0,r.iH)([2]);async function t(e){let t;return t=e?await(0,a.api)(`/api/user/user?${e}`):await(0,a.api)("/api/user/user"),t.data}async function o(){const t=await(0,a.api)("/api/user/department");e.value=t.data}return{getUsers:t,getDepartments:o,departments:e}}))},2591:(e,t,o)=>{o.d(t,{L:()=>s});var n=o(1809),r=o(499),a=o(1569),i=o(9302);const s=(0,n.Q_)("menu",(()=>{const e=(0,i.Z)();let t=(0,r.iH)([]);async function o(){const e=await(0,a.api)("/api/common_data/main_menu");t.value=e.data}async function n(t){e.loading.show(),t.menu_item?await a.api.put(`/api/common_data/sub_menu/${t.id}`,t):await a.api.put(`/api/common_data/main_menu/${t.id}`,t),await o(),e.loading.hide()}return{getMenu:o,updateMenu:n,main_menu:t}}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{2:"5e87d1a6",14:"b14d8355",30:"fb6904e3",35:"b79ff476",134:"25bf2ce5",139:"34a0f5bc",200:"18a13a70",237:"a8162962",250:"6401e458",256:"607b48f1",317:"f84f144e",378:"0cb71f65",411:"dba47508",457:"cc925ae8",540:"1b481ac2",585:"ef1c9bf8",602:"1c07c782",620:"98f3c1b6",646:"b35a74f0",786:"699015e0",816:"9f1239c8",839:"450aec69",844:"13b7eb07",867:"fed7da58",869:"50ca3d93",958:"d33dc463",970:"6087ae30",986:"2c2c95fd"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+e+"."+{411:"6ec7f235",816:"ec2a1ba5"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="global-stroi-crm-front:";o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var d=(t,o)=>{s.onerror=s.onload=null,clearTimeout(h);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,n,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=o=>{if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=n=>new Promise(((r,a)=>{var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,null,r,a)})),r={143:0};o.f.miniCss=(e,t)=>{var o={411:1,816:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}}})(),(()=>{var e={143:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((o,n)=>r=e[t]=[o,n]));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,l=n=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=globalThis["webpackChunkglobal_stroi_crm_front"]=globalThis["webpackChunkglobal_stroi_crm_front"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[736],(()=>o(1753)));n=o.O(n)})();