import{C as v,u as h,J as y,r as c,g as u,v as a,D as e,x as t,z as p,A as f,y as n,F as k,E as w,t as i,m as z,B}from"./Ds0kjeUA.js";import{u as C}from"./0ZarKj85.js";import{u as O}from"./D2-IT20U.js";import"./8TPwjKdS.js";const T={key:0,class:"w-[90%] md:w-[80%] lg:w-[50%] mx-auto mt-5"},N={class:"mb-10"},D={class:"flex items-center justify-between"},R={class:"font-bold"},V={class:"font-bold"},E={class:"text-orange-800"},F={class:"font-bold"},S={class:"text-orange-800"},$={class:"col-span-1 bg-zinc-200 rounded-lg"},j=["src"],A={class:"col-span-10"},I={class:"text-lg font-semibold"},J={class:"text-base font-semibold text-yellow-700"},L={key:1,class:"center-center font-bold h-[200px] text-2xl text-red-800"},P={class:"text-center"},Q={__name:"details",setup(U){const{selectedOrder:r}=v(C()),{totalItems:q,formatPrice:d}=O(),m=h(),_=l=>l=="paid"?"green":l=="unpaid"?"red":l=="pending"?"yellow":"gray";return y(),c(!0),c({}),(l,s)=>{const g=u("a-button"),x=u("a-tag");return i(),a("section",null,[e(r)?(i(),a("div",T,[t("div",N,[t("div",D,[s[3]||(s[3]=t("h6",{class:"font-semibold text-2xl mb-5"},"Order Details",-1)),p(g,{danger:"",class:"flex items-center gap-2",size:"large",onClick:s[0]||(s[0]=o=>("navigateTo"in l?l.navigateTo:e(z))("/"))},{default:f(()=>s[2]||(s[2]=[t("i",{class:"fi fi-rr-arrow-small-left inline-flex"},null,-1),t("span",null," Back to shop ",-1)])),_:1})]),t("div",null,[t("h4",R,[s[4]||(s[4]=t("span",{class:"font-semibold text-zinc-800"},"Order status : ",-1)),p(x,{color:_(e(r).transaction)},{default:f(()=>[B(n(e(r).transaction),1)]),_:1},8,["color"])]),t("h4",V,[s[5]||(s[5]=t("span",{class:"font-semibold text-zinc-800"},"Order price : ",-1)),t("span",E,n(e(d)(e(r).order_price)),1)]),t("h4",F,[s[6]||(s[6]=t("span",{class:"font-semibold text-zinc-800"},"Order date : ",-1)),t("span",S,n(e(r).date),1)])])]),(i(!0),a(k,null,w(e(r).order_details,(o,b)=>(i(),a("div",{key:b,class:"grid gap-4 grid-cols-12 border-b-2 border-zinc-200 py-2 items-center"},[t("div",$,[t("img",{src:o.image,alt:"item"},null,8,j)]),t("div",A,[t("h4",I,n(o.title),1),t("h5",J,n(e(d)(o.price))+" x "+n(o.count)+" "+n(o.count>1?"items":"item"),1)])]))),128))])):(i(),a("div",L,[t("div",P,[s[7]||(s[7]=t("h6",{class:"font-extrabold"},"No data found",-1)),t("h6",{class:"underline cursor-pointer",onClick:s[1]||(s[1]=o=>e(m).push("/"))}," Back to shop ")])]))])}}};export{Q as default};
