import{j as I,a7 as N,l as z,a8 as U,a9 as j,aa as L,ab as $,a as C,q as T,i as w,d as D,ac as B,r as q,o as R,t as H,v as F,ad as G,D as M,L as Y}from"./Ds0kjeUA.js";import{u as J}from"./Di9L7raQ.js";import{u as V}from"./8TPwjKdS.js";async function Q(t,e){return await X(e).catch(r=>(console.error("Failed to get image meta for "+e,r+""),{width:0,height:0,ratio:0}))}async function X(t){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((e,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};e(s)},r.onerror=s=>i(s),r.src=t})}function E(t){return e=>e?t[e]||e:t.missingValue}function Z({formatter:t,keyMap:e,joinWith:i="/",valueMap:r}={}){t||(t=(n,o)=>`${n}=${o}`),e&&typeof e!="function"&&(e=E(e));const s=r||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=E(s[n]))}),(n={})=>Object.entries(n).filter(([a,f])=>typeof f<"u").map(([a,f])=>{const g=s[a];return typeof g=="function"&&(f=g(n[a])),a=typeof e=="function"?e(a):a,t(a,f)}).join(i)}function S(t=""){if(typeof t=="number")return t;if(typeof t=="string"&&t.replace("px","").match(/^\d+$/g))return Number.parseInt(t,10)}function K(t=""){if(t===void 0||!t.length)return[];const e=new Set;for(const i of t.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&e.add(r)}return Array.from(e)}function ee(t){if(t.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function te(t){const e={};if(typeof t=="string")for(const i of t.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?e["1px"]=r[0].trim():e[r[0].trim()]=r[1].trim()}else Object.assign(e,t);return e}function re(t){const e={options:t},i=(s,n={})=>P(e,s,n),r=(s,n={},o={})=>i(s,{...o,modifiers:j(n,o.modifiers||{})}).url;for(const s in t.presets)r[s]=(n,o,a)=>r(n,o,{...t.presets[s],...a});return r.options=t,r.getImage=i,r.getMeta=(s,n)=>ie(e,s,n),r.getSizes=(s,n)=>oe(e,s,n),e.$img=r,r}async function ie(t,e,i){const r=P(t,e,{...i});return typeof r.getMeta=="function"?await r.getMeta():await Q(t,r.url)}function P(t,e,i){var g,m;if(e&&typeof e!="string")throw new TypeError(`input must be a string (received ${typeof e}: ${JSON.stringify(e)})`);if(!e||e.startsWith("data:"))return{url:e};const{provider:r,defaults:s}=se(t,i.provider||t.options.provider),n=ne(t,i.preset);if(e=I(e)?e:N(e),!r.supportsAlias){for(const d in t.options.alias)if(e.startsWith(d)){const c=t.options.alias[d];c&&(e=z(c,e.slice(d.length)))}}if(r.validateDomains&&I(e)){const d=U(e).host;if(!t.options.domains.find(c=>c===d))return{url:e}}const o=j(i,n,s);o.modifiers={...o.modifiers};const a=o.modifiers.format;(g=o.modifiers)!=null&&g.width&&(o.modifiers.width=S(o.modifiers.width)),(m=o.modifiers)!=null&&m.height&&(o.modifiers.height=S(o.modifiers.height));const f=r.getImage(e,o,t);return f.format=f.format||a||"",f}function se(t,e){const i=t.options.providers[e];if(!i)throw new Error("Unknown provider: "+e);return i}function ne(t,e){if(!e)return{};if(!t.options.presets[e])throw new Error("Unknown preset: "+e);return t.options.presets[e]}function oe(t,e,i){var p,x,_,u,v;const r=S((p=i.modifiers)==null?void 0:p.width),s=S((x=i.modifiers)==null?void 0:x.height),n=te(i.sizes),o=(_=i.densities)!=null&&_.trim()?K(i.densities.trim()):t.options.densities;ee(o);const a=r&&s?s/r:0,f=[],g=[];if(Object.keys(n).length>=1){for(const h in n){const y=A(h,String(n[h]),s,a,t);if(y!==void 0){f.push({size:y.size,screenMaxWidth:y.screenMaxWidth,media:`(max-width: ${y.screenMaxWidth}px)`});for(const b of o)g.push({width:y._cWidth*b,src:W(t,e,i,y,b)})}}ae(f)}else for(const h of o){const y=Object.keys(n)[0];let b=y?A(y,String(n[y]),s,a,t):void 0;b===void 0&&(b={size:"",screenMaxWidth:0,_cWidth:(u=i.modifiers)==null?void 0:u.width,_cHeight:(v=i.modifiers)==null?void 0:v.height}),g.push({width:h,src:W(t,e,i,b,h)})}ce(g);const m=g[g.length-1],d=f.length?f.map(h=>`${h.media?h.media+" ":""}${h.size}`).join(", "):void 0,c=d?"w":"x",l=g.map(h=>`${h.src} ${h.width}${c}`).join(", ");return{sizes:d,srcset:l,src:m==null?void 0:m.src}}function A(t,e,i,r,s){const n=s.options.screens&&s.options.screens[t]||Number.parseInt(t),o=e.endsWith("vw");if(!o&&/^\d+$/.test(e)&&(e=e+"px"),!o&&!e.endsWith("px"))return;let a=Number.parseInt(e);if(!n||!a)return;o&&(a=Math.round(a/100*n));const f=r?Math.round(a*r):i;return{size:e,screenMaxWidth:n,_cWidth:a,_cHeight:f}}function W(t,e,i,r,s){return t.$img(e,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function ae(t){var i;t.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let e=null;for(let r=t.length-1;r>=0;r--){const s=t[r];s.media===e&&t.splice(r,1),e=s.media}for(let r=0;r<t.length;r++)t[r].media=((i=t[r+1])==null?void 0:i.media)||""}function ce(t){t.sort((i,r)=>i.width-r.width);let e=null;for(let i=t.length-1;i>=0;i--){const r=t[i];r.width===e&&t.splice(i,1),e=r.width}}const ue=Z({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(t,e)=>$(t)+"_"+$(e)}),de=(t,{modifiers:e={},baseURL:i}={},r)=>{e.width&&e.height&&(e.resize=`${e.width}x${e.height}`,delete e.width,delete e.height);const s=ue(e)||"_";return i||(i=z(r.options.nuxt.baseURL,"/_ipx")),{url:z(i,s,L(t))}},le=!0,fe=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,getImage:de,supportsAlias:fe,validateDomains:le},Symbol.toStringTag,{value:"Module"})),O={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};O.providers={ipxStatic:{provider:ge,defaults:{}}};const k=()=>{const t=T(),e=C();return e.$img||e._img||(e._img=re({...O,nuxt:{baseURL:t.app.baseURL},runtimeConfig:t}))};function me(t){var e;(e=performance==null?void 0:performance.mark)==null||e.call(performance,"mark_feature_usage",{detail:{feature:t}})}const he={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:t=>["lazy","eager"].includes(t)},crossorigin:{type:[Boolean,String],required:!1,validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},decoding:{type:String,required:!1,validator:t=>["async","auto","sync"].includes(t)},nonce:{type:[String],required:!1}},pe=t=>{const e=w(()=>({provider:t.provider,preset:t.preset})),i=w(()=>({width:S(t.width),height:S(t.height),alt:t.alt,referrerpolicy:t.referrerpolicy,usemap:t.usemap,longdesc:t.longdesc,ismap:t.ismap,crossorigin:t.crossorigin===!0?"anonymous":t.crossorigin||void 0,loading:t.loading,decoding:t.decoding,nonce:t.nonce})),r=k(),s=w(()=>({...t.modifiers,width:S(t.width),height:S(t.height),format:t.format,quality:t.quality||r.options.quality,background:t.background,fit:t.fit}));return{options:e,attrs:i,modifiers:s}},ve={...he,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},ye=["src"],_e=D({__name:"NuxtImg",props:ve,emits:["load","error"],setup(t,{emit:e}){const i=t,r=B(),s=e,n=!1,o=k(),a=pe(i),f=q(!1),g=q(),m=w(()=>o.getSizes(i.src,{...a.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...a.modifiers.value,width:S(i.width),height:S(i.height)}})),d=w(()=>{const u={...a.attrs.value,"data-nuxt-img":""};return(!i.placeholder||f.value)&&(u.sizes=m.value.sizes,u.srcset=m.value.srcset),u}),c=w(()=>{let u=i.placeholder;if(u===""&&(u=!0),!u||f.value)return!1;if(typeof u=="string")return u;const v=Array.isArray(u)?u:typeof u=="number"?[u,u]:[10,10];return o(i.src,{...a.modifiers.value,width:v[0],height:v[1],quality:v[2]||50,blur:v[3]||3},a.options.value)}),l=w(()=>i.sizes?m.value.src:o(i.src,a.modifiers.value,a.options.value)),p=w(()=>c.value?c.value:l.value),_=C().isHydrating;return R(()=>{if(c.value){const u=new Image;l.value&&(u.src=l.value),i.sizes&&(u.sizes=m.value.sizes||"",u.srcset=m.value.srcset),u.onload=v=>{f.value=!0,s("load",v)},me("nuxt-image");return}g.value&&(g.value.complete&&_&&(g.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),g.value.onload=u=>{s("load",u)},g.value.onerror=u=>{s("error",u)})}),(u,v)=>(H(),F("img",G({ref_key:"imgEl",ref:g,class:i.placeholder&&!f.value?i.placeholderClass:void 0},{...M(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...d.value,...M(r)},{src:p.value}),null,16,ye))}}),qe=Y("cartStore",()=>{const e=V("cartList",{maxAge:2592e6,default:()=>[]}),{marketUser:i}=J(),r=q([]),s=q(!1);async function n(){s.value=!0;const d=await fetch("https://dummyjson.com/products",{headers:{token:i.accessToken}}),c=await d.json();s.value=!1,d.ok?r.value=c.products.map(l=>l.id==1||l.id==5?{...l,stock:0}:{...l}):notification.error({message:"Error",description:`${c.message}`})}async function o(d){if(!e.value.length||!e.value.filter(c=>c.id==d.id).length)return e.value.push({...d,count:1});if(e.value.filter(c=>c.id==d.id).length)return e.value.map(c=>c.id==d.id?{...c,count:c.count++}:{...c})}async function a(d){if(e.value.length){const c=e.value.filter(l=>l.id==d.id);if(c.length){if(c[0].count>1)return c[0].count--;if(c[0].count==1){const l=e.value.findIndex(p=>p.id==d.id);return e.value.splice(l,1)}}}else return}const f=w(()=>e.value.map(l=>({price:l.price,count:l.count})).reduce((l,p)=>l+p.price*p.count,0)),g=w(()=>e.value.map(l=>l.count).reduce((l,p)=>l+p,0));return{getAllProducts:n,productsLoading:s,productList:r,addToCart:o,cartList:e,totalPriceCart:f,totalCountCart:g,removeFromCart:a,poynt:{entryDetails:{customerPresenceStatus:"ECOMMERCE",entryMode:"KEYED"},type:"CREDIT_DEBIT",references:[{id:"e1cb771c-1078-0010-88a1-43abc12ba121",customType:"CUSTOM",type:"CUSTOM"}]}}});export{_e as _,qe as u};
