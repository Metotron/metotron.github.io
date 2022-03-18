import{d as O,a as k,r as b,w as F,o as r,c as d,b as t,e as M,f as T,v as U,F as C,g as A,u as l,t as h,p as g,h as $,i as N,j as q,k as W,l as J,m as y,n as E,q as x,s as V,x as Q,y as X}from"./vendor.9471e5e0.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}};Y();const P={bard:{name:"\u0411\u0430\u0440\u0434",hitDice:8},barbarian:{name:"\u0412\u0430\u0440\u0432\u0430\u0440",hitDice:12},fighter:{name:"\u0412\u043E\u0438\u043D",hitDice:10},wizard:{name:"\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A",hitDice:6},druid:{name:"\u0414\u0440\u0443\u0438\u0434",hitDice:8},cleric:{name:"\u0416\u0440\u0435\u0446",hitDice:8},warlock:{name:"\u041A\u043E\u043B\u0434\u0443\u043D",hitDice:8},monk:{name:"\u041C\u043E\u043D\u0430\u0445",hitDice:8},paladin:{name:"\u041F\u0430\u043B\u0430\u0434\u0438\u043D",hitDice:10},rogue:{name:"\u041F\u043B\u0443\u0442",hitDice:8},ranger:{name:"\u0421\u043B\u0435\u0434\u043E\u043F\u044B\u0442",hitDice:10},sorcerer:{name:"\u0427\u0430\u0440\u043E\u0434\u0435\u0439",hitDice:6}},G=O({id:"charClass",state:()=>({charClass:"fighter"}),actions:{setCharClass(u){this.charClass=u}},getters:{charHitDice:u=>P[u.charClass].hitDice}});var S=(u,e)=>{const i=u.__vccOpts||u;for(const[o,s]of e)i[o]=s;return i};const Z=u=>(g("data-v-e3bac8da"),u=u(),$(),u),uu={class:"pageBlock charClass"},eu={class:"blockTitle"},tu={class:"blockBody"},su=["value"],au=Z(()=>t("span",{class:"arrow"},"\u2192",-1)),nu={class:"hitDice",title:"\u0411\u0430\u0437\u043E\u0432\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0445\u0438\u0442\u043F\u043E\u0439\u043D\u0442\u043E\u0432"},ou=k({setup(u){const e=G(),i=b("fighter");return F(i,o=>{e.setCharClass(o)}),(o,s)=>(r(),d("div",uu,[t("div",eu,[M(o.$slots,"default",{},void 0,!0)]),t("div",tu,[T(t("select",{"onUpdate:modelValue":s[0]||(s[0]=a=>i.value=a)},[(r(!0),d(C,null,A(l(P),(a,n)=>(r(),d("option",{key:n,value:n},h(a.name),9,su))),128))],512),[[U,i.value]]),au,t("span",nu,"HP: "+h(l(e).charHitDice),1)])]))}});var iu=S(ou,[["__scopeId","data-v-e3bac8da"]]);function lu(u=ru){const e=[];for(let i=0;i<6;++i)e.push(u());return e}function ru(){let u=[];for(let e=0;e<4;++e)u.push(Math.floor(Math.random()*6+1));return u=cu(u),u[0]+u[1]+u[2]}function cu(u){const e=[...u],i=Math.min(...e),o=e.findIndex(s=>s==i);return e.splice(o,1),e}const I={str:"\u0421\u0438\u043B\u0430",dex:"\u041B\u043E\u0432\u043A\u043E\u0441\u0442\u044C",con:"\u0422\u0435\u043B\u043E\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435",int:"\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",wis:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C",cha:"\u0425\u0430\u0440\u0438\u0437\u043C\u0430"};function j(u){return u in I?I[u]:u}const m=30,R=O({id:"stats",state:()=>({generatedValues:[0,0,0,0,0,0],stats:{str:0,dex:0,con:0,int:0,wis:0,cha:0},dataToStatsLinks:{0:null,1:null,2:null,3:null,4:null,5:null}}),actions:{resetStatsLinks(){for(const u in this.dataToStatsLinks)this.dataToStatsLinks[u]=null},setStatValue(u,e){this.stats[u]=e},setValueLink(u,e){if(u<0||u>5)return 0;this.dataToStatsLinks[u]=e},setGeneratedValue(u,e){if(e<1||e>m)throw"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435. \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043E\u0442 1 \u0434\u043E 20";this.generatedValues[u]=e}},getters:{isAllFieldsLinked:u=>{for(const e in u.dataToStatsLinks)if(u.dataToStatsLinks[e]===null)return!1;return!0}}});var v=(u=>(u.ResetStatsStore="ResetStatsStore",u.LoadValuesToCharlist="LoadValuesToCharlist",u.AutoLinkStats="AutoLinkStats",u))(v||{});function w(u){window.dispatchEvent(new Event(u))}const z=u=>(g("data-v-2b2eb02a"),u=u(),$(),u),du={class:"valueLink"},_u=["max"],hu=z(()=>t("span",{class:"arrow"},"\u2192",-1)),vu=z(()=>t("option",null,"-",-1)),pu=["value","disabled"],fu=k({props:{value:{type:Number,required:!0,validator:u=>u>0&&u<=m},valueIndex:{type:Number,required:!0,validator:u=>u>=0&&u<6}},setup(u){const e=u,i={0:"str",1:"dex",2:"con",3:"int",4:"wis",5:"cha"},o=R(),s=[];let a;for(a in I)s.push(a);const n=b(0);n.value=e.value,F(()=>e.value,_=>{n.value=_}),F(n,(_,p)=>{!_||_<1||_>m?n.value=p:o.setGeneratedValue(e.valueIndex,n.value)});const c=b("-");N(()=>{o.setGeneratedValue(e.valueIndex,n.value),window.addEventListener(v.ResetStatsStore,D),window.addEventListener(v.AutoLinkStats,L)}),q(()=>{window.removeEventListener(v.ResetStatsStore,D),window.removeEventListener(v.AutoLinkStats,L)}),F(c,_=>{o.setValueLink(e.valueIndex,_==="-"?null:_)});function D(){c.value="-",o.setValueLink(e.valueIndex,null)}function L(){c.value=i[e.valueIndex]}function B(_){if(_==="-")return!1;for(const p in o.dataToStatsLinks)if(o.dataToStatsLinks[p]===_)return!0;return!1}return(_,p)=>(r(),d("div",du,[T(t("input",{"onUpdate:modelValue":p[0]||(p[0]=f=>n.value=f),type:"number",min:"1",max:l(m)},null,8,_u),[[W,n.value,void 0,{number:!0}]]),hu,T(t("select",{"onUpdate:modelValue":p[1]||(p[1]=f=>c.value=f)},[vu,(r(),d(C,null,A(s,f=>t("option",{value:f,key:f,disabled:B(f)},h(l(j)(f)),9,pu)),64))],512),[[U,c.value]])]))}});var Du=S(fu,[["__scopeId","data-v-2b2eb02a"]]);const Eu={class:"pageBlock charStats"},mu={class:"blockTitle"},ku={class:"blockBody"},Cu={class:"valuesToStats"},Su={class:"buttons"},Lu=["disabled"],Bu=k({setup(u){const e=b([]),i=R();N(()=>{o()});function o(){e.value=lu()}function s(){w(v.ResetStatsStore)}function a(){w(v.LoadValuesToCharlist)}function n(){w(v.AutoLinkStats)}return(c,D)=>(r(),d("div",Eu,[t("div",mu,[M(c.$slots,"default",{},void 0,!0)]),t("div",ku,[t("div",{class:"buttons asymmetric"},[t("input",{class:"fullWidth",type:"button",value:"\u{1F527} \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",title:"\u0421\u0443\u043C\u043C\u0430 3 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043D\u0430 4 \u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0445 \u043A\u0443\u0431\u0438\u043A\u0430\u0445 (3\u201318)",onClick:o}),t("input",{class:"short",type:"button",value:"\u2935\uFE0F",title:"\u0410\u0432\u0442\u043E\u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430",onClick:n})]),t("div",Cu,[(r(!0),d(C,null,A(e.value,(L,B)=>(r(),J(Du,{value:L,"value-index":B,key:B},null,8,["value","value-index"]))),128))]),t("div",Su,[t("input",{type:"button",value:"\u{1F4DD} \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",onClick:a,disabled:!l(i).isAllFieldsLinked},null,8,Lu),t("input",{type:"button",value:"\u267B\uFE0F \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",onClick:s})])])]))}});var yu=S(Bu,[["__scopeId","data-v-e887d092"]]);const H=u=>(g("data-v-05c20a04"),u=u(),$(),u),Fu={class:"pageBlock charList"},bu={class:"blockTitle"},Au={class:"blockBody"},gu={class:"valueBlock"},$u={class:"stats"},xu={class:"statValue"},Vu={key:0,class:"value"},wu=E("("),Tu={title:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0439 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440"},Iu=E(")"),Mu={key:0,class:"valueBlock"},Nu=H(()=>t("span",null,"\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430:",-1)),Ru={class:"value"},Hu={key:1,class:"valueBlock"},Ou=H(()=>t("span",{title:"\u0415\u0441\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u043D \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043D\u0430\u0432\u044B\u043A, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u043E\u043D\u0443\u0441 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430"},"\u041F\u0430\u0441\u0441\u0438\u0432\u043D\u0430\u044F \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:",-1)),Uu={class:"value"},qu={key:2,class:"valueBlock"},Pu=["title"],Gu={class:"value"},ju={class:"valueBlock"},zu=H(()=>t("span",{title:"\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430"},"\u041A\u043E\u0441\u0442\u044C \u0445\u0438\u0442\u043E\u0432:",-1)),Ku={class:"value"},Wu=k({setup(u){const e=R(),i=G();N(()=>{window.addEventListener(v.LoadValuesToCharlist,o)}),q(()=>{window.removeEventListener(v.LoadValuesToCharlist,o)});function o(){const a=e.generatedValues,n=e.dataToStatsLinks;for(const c in n)n[c]!==null&&e.setStatValue(n[c],a[c])}function s(a){if(a<1||a>m)return null;const n=Math.ceil((a-11)/2);return n==0?"0":(Math.sign(n)>0?"+":"-")+Math.abs(n)}return(a,n)=>(r(),d("div",Fu,[t("div",bu,[M(a.$slots,"default",{},void 0,!0)]),t("div",Au,[t("div",gu,[t("div",$u,[(r(!0),d(C,null,A(l(e).stats,(c,D)=>(r(),d("div",{key:D},[t("span",null,h(l(j)(D))+":",1),t("span",xu,[E(h(c),1),s(c)!==null?(r(),d("span",Vu,[wu,t("span",Tu,h(s(c)),1),Iu])):y("",!0)])]))),128))])]),s(l(e).stats.dex)!==null?(r(),d("div",Mu,[Nu,t("span",Ru,h(10+Number(s(l(e).stats.dex))),1)])):y("",!0),s(l(e).stats.wis)!==null?(r(),d("div",Hu,[Ou,t("span",Uu,h(10+Number(s(l(e).stats.wis))),1)])):y("",!0),s(l(e).stats.con)!==null?(r(),d("div",qu,[t("span",{title:`\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043D\u0443\u0436\u043D\u043E \u0431\u0440\u043E\u0441\u0430\u0442\u044C d${l(i).charHitDice} \u0438 \u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u0431\u0430\u0432\u043B\u044F\u0442\u044C ${Number(s(l(e).stats.con))}`},"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0445\u0438\u0442\u043E\u0432:",8,Pu),t("span",Gu,h(l(i).charHitDice+Number(s(l(e).stats.con))),1)])):y("",!0),t("div",ju,[zu,t("span",Ku,"d"+h(l(i).charHitDice),1)])])]))}});var Ju=S(Wu,[["__scopeId","data-v-05c20a04"]]);const Qu=u=>(g("data-v-6ff97c16"),u=u(),$(),u),Xu=Qu(()=>t("header",null,[t("h1",null,"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 (D&D 5e)")],-1)),Yu={class:"blocksArea"},Zu=E("\u{1F9CD} \u041A\u043B\u0430\u0441\u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430"),u4=E("\u{1F3B2} \u0427\u0438\u0441\u043B\u043E\u0432\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F"),e4=E("\u{1F4CE} \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430"),t4=k({setup(u){return(e,i)=>(r(),d(C,null,[Xu,t("div",Yu,[x(iu,null,{default:V(()=>[Zu]),_:1}),x(yu,null,{default:V(()=>[u4]),_:1}),x(Ju,null,{default:V(()=>[e4]),_:1})])],64))}});var s4=S(t4,[["__scopeId","data-v-6ff97c16"]]);const K=Q(s4);K.use(X());K.mount("#app");
