import{d as P,a as x,r as M,w as A,o as d,c as _,b as t,e as I,v as R,F as y,f as g,u as r,t as f,p as k,g as S,h as U,i as G,j as uu,k as eu,l as b,m as B,n as H,q as L,s as tu,x as su}from"./vendor.77972ba0.js";const au=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=c(s);fetch(s.href,l)}};au();const j={bard:{name:"\u0411\u0430\u0440\u0434",hitDice:8},barbarian:{name:"\u0412\u0430\u0440\u0432\u0430\u0440",hitDice:12},fighter:{name:"\u0412\u043E\u0438\u043D",hitDice:10},wizard:{name:"\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A",hitDice:6},druid:{name:"\u0414\u0440\u0443\u0438\u0434",hitDice:8},cleric:{name:"\u0416\u0440\u0435\u0446",hitDice:8},warlock:{name:"\u041A\u043E\u043B\u0434\u0443\u043D",hitDice:8},monk:{name:"\u041C\u043E\u043D\u0430\u0445",hitDice:8},paladin:{name:"\u041F\u0430\u043B\u0430\u0434\u0438\u043D",hitDice:10},rogue:{name:"\u041F\u043B\u0443\u0442",hitDice:8},ranger:{name:"\u0421\u043B\u0435\u0434\u043E\u043F\u044B\u0442",hitDice:10},sorcerer:{name:"\u0427\u0430\u0440\u043E\u0434\u0435\u0439",hitDice:6}},z=P({id:"charClass",state:()=>({charClass:"fighter"}),actions:{setCharClass(u){this.charClass=u}},getters:{charHitDice:u=>j[u.charClass].hitDice}});var F=(u,e)=>{const c=u.__vccOpts||u;for(const[i,s]of e)c[i]=s;return c};const K=u=>(k("data-v-220617c0"),u=u(),S(),u),nu={class:"pageBlock charClass"},iu=K(()=>t("div",{class:"blockTitle"},"\u{1F9CD} \u041A\u043B\u0430\u0441\u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",-1)),ou={class:"blockBody"},ru=["value"],cu=K(()=>t("span",{class:"arrow"},"\u2192",-1)),lu={class:"hitDice",title:"\u0411\u0430\u0437\u043E\u0432\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0445\u0438\u0442\u043F\u043E\u0439\u043D\u0442\u043E\u0432"},du=x({setup(u){const e=z(),c=M("fighter");return A(c,i=>{e.setCharClass(i)}),(i,s)=>(d(),_("div",nu,[iu,t("div",ou,[I(t("select",{"onUpdate:modelValue":s[0]||(s[0]=l=>c.value=l)},[(d(!0),_(y,null,g(r(j),(l,a)=>(d(),_("option",{key:a,value:a},f(l.name),9,ru))),128))],512),[[R,c.value]]),cu,t("span",lu,"HP: "+f(r(e).charHitDice),1)])]))}});var _u=F(du,[["__scopeId","data-v-220617c0"]]);function pu(u=hu){const e=[];for(let c=0;c<6;++c)e.push(u());return e}function hu(){let u=[];for(let e=0;e<4;++e)u.push(Math.floor(Math.random()*6+1));return u=vu(u),u[0]+u[1]+u[2]}function vu(u){const e=[...u],c=Math.min(...e),i=e.findIndex(s=>s==c);return e.splice(i,1),e}var E=(u=>(u.ResetStatsStore="ResetStatsStore",u.LoadValuesToCharlist="LoadValuesToCharlist",u.AutoLinkStats="AutoLinkStats",u))(E||{});function T(u){window.dispatchEvent(new Event(u))}const O={str:"\u0421\u0438\u043B\u0430",dex:"\u041B\u043E\u0432\u043A\u043E\u0441\u0442\u044C",con:"\u0422\u0435\u043B\u043E\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435",int:"\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442",wis:"\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C",cha:"\u0425\u0430\u0440\u0438\u0437\u043C\u0430"},mu={str:"\u0441\u0438\u043B",dex:"\u043B\u043E\u0432",con:"\u043A\u043E\u043D",int:"\u0438\u043D\u0442",wis:"\u043C\u0434\u0440",cha:"\u0445\u0430\u0440"};function W(u){return u in O?O[u]:u}const $=30,w=P({id:"stats",state:()=>({generatedValues:[0,0,0,0,0,0],stats:{str:0,dex:0,con:0,int:0,wis:0,cha:0},dataToStatsLinks:{0:null,1:null,2:null,3:null,4:null,5:null}}),actions:{resetStatsLinks(){for(const u in this.dataToStatsLinks)this.dataToStatsLinks[u]=null},setStatValue(u,e){this.stats[u]=e},setValueLink(u,e){if(u<0||u>5)return 0;this.dataToStatsLinks[u]=e},setGeneratedValue(u,e){if(e<1||e>$)throw"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435. \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043E\u0442 1 \u0434\u043E 20";this.generatedValues[u]=e}},getters:{isAllFieldsLinked:u=>{for(const e in u.dataToStatsLinks)if(u.dataToStatsLinks[e]===null)return!1;return!0}}});const J=u=>(k("data-v-4dfff556"),u=u(),S(),u),fu={class:"valueLink"},Du=["max"],Eu=J(()=>t("span",{class:"arrow"},"\u2192",-1)),Cu=J(()=>t("option",null,"-",-1)),yu=["value","disabled"],Bu=x({props:{value:{type:Number,required:!0,validator:u=>u>0&&u<=$},valueIndex:{type:Number,required:!0,validator:u=>u>=0&&u<6}},setup(u){const e=u,c={0:"str",1:"dex",2:"con",3:"int",4:"wis",5:"cha"},i=w(),s=[];let l;for(l in O)s.push(l);const a=M(0);a.value=e.value,A(()=>e.value,m=>{a.value=m}),A(a,(m,D)=>{!m||m<1||m>$?a.value=D:i.setGeneratedValue(e.valueIndex,a.value)});const h=M("-");U(()=>{i.setGeneratedValue(e.valueIndex,a.value),window.addEventListener(E.ResetStatsStore,n),window.addEventListener(E.AutoLinkStats,o)}),G(()=>{window.removeEventListener(E.ResetStatsStore,n),window.removeEventListener(E.AutoLinkStats,o)}),A(h,m=>{i.setValueLink(e.valueIndex,m==="-"?null:m)});function n(){h.value="-",i.setValueLink(e.valueIndex,null)}function o(){h.value=c[e.valueIndex]}function p(m){if(m==="-")return!1;for(const D in i.dataToStatsLinks)if(i.dataToStatsLinks[D]===m)return!0;return!1}return(m,D)=>(d(),_("div",fu,[I(t("input",{"onUpdate:modelValue":D[0]||(D[0]=C=>a.value=C),type:"number",min:"1",max:r($)},null,8,Du),[[uu,a.value,void 0,{number:!0}]]),Eu,I(t("select",{"onUpdate:modelValue":D[1]||(D[1]=C=>h.value=C)},[Cu,(d(),_(y,null,g(s,C=>t("option",{value:C,key:C,disabled:p(C)},f(r(W)(C)),9,yu)),64))],512),[[R,h.value]])]))}});var Au=F(Bu,[["__scopeId","data-v-4dfff556"]]);const gu=u=>(k("data-v-3a41350b"),u=u(),S(),u),xu={class:"pageBlock charStats"},Fu=gu(()=>t("div",{class:"blockTitle"},"\u{1F3B2} \u0427\u0438\u0441\u043B\u043E\u0432\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",-1)),ku={class:"blockBody"},Su={class:"valuesToStats"},Lu={class:"buttons"},bu=["disabled"],$u=x({setup(u){const e=M([]),c=w();U(()=>{i()});function i(){e.value=pu()}function s(){T(E.ResetStatsStore)}function l(){T(E.LoadValuesToCharlist)}function a(){T(E.AutoLinkStats)}return(h,n)=>(d(),_("div",xu,[Fu,t("div",ku,[t("div",{class:"buttons asymmetric"},[t("input",{class:"fullWidth",type:"button",value:"\u{1F527} \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",title:"\u0421\u0443\u043C\u043C\u0430 3 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043D\u0430 4 \u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0445 \u043A\u0443\u0431\u0438\u043A\u0430\u0445 (3\u201318)",onClick:i}),t("input",{class:"short",type:"button",value:"\u2935\uFE0F",title:"\u0410\u0432\u0442\u043E\u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430",onClick:a})]),t("div",Su,[(d(!0),_(y,null,g(e.value,(o,p)=>(d(),eu(Au,{value:o,"value-index":p,key:p},null,8,["value","value-index"]))),128))]),t("div",Lu,[t("input",{type:"button",value:"\u{1F4DD} \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",onClick:l,disabled:!r(c).isAllFieldsLinked},null,8,bu),t("input",{type:"button",value:"\u267B\uFE0F \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",onClick:s})])])]))}});var Mu=F($u,[["__scopeId","data-v-3a41350b"]]),v=(u=>(u[u.athletics=0]="athletics",u[u.acrobatics=1]="acrobatics",u[u.sleightOfHand=2]="sleightOfHand",u[u.stealth=3]="stealth",u[u.arcana=4]="arcana",u[u.history=5]="history",u[u.investigation=6]="investigation",u[u.nature=7]="nature",u[u.religion=8]="religion",u[u.animalHandling=9]="animalHandling",u[u.insight=10]="insight",u[u.medicine=11]="medicine",u[u.perception=12]="perception",u[u.survival=13]="survival",u[u.deception=14]="deception",u[u.intimidation=15]="intimidation",u[u.performance=16]="performance",u[u.persuasion=17]="persuasion",u))(v||{});const q={[0]:{name:"\u0410\u0442\u043B\u0435\u0442\u0438\u043A\u0430",statType:"str"},[1]:{name:"\u0410\u043A\u0440\u043E\u0431\u0430\u0442\u0438\u043A\u0430",statType:"dex"},[2]:{name:"\u041B\u043E\u0432\u043A\u043E\u0441\u0442\u044C \u0440\u0443\u043A",statType:"dex"},[3]:{name:"\u0421\u043A\u0440\u044B\u0442\u043D\u043E\u0441\u0442\u044C",statType:"dex"},[4]:{name:"\u041C\u0430\u0433\u0438\u044F",statType:"int"},[5]:{name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F",statType:"int"},[6]:{name:"\u0410\u043D\u0430\u043B\u0438\u0437",statType:"int"},[7]:{name:"\u041F\u0440\u0438\u0440\u043E\u0434\u0430",statType:"int"},[8]:{name:"\u0420\u0435\u043B\u0438\u0433\u0438\u044F",statType:"int"},[9]:{name:"\u0423\u0445\u043E\u0434 \u0437\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u043C\u0438",statType:"wis"},[10]:{name:"\u041F\u0440\u043E\u043D\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",statType:"wis"},[11]:{name:"\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0430",statType:"wis"},[12]:{name:"\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",statType:"wis"},[13]:{name:"\u0412\u044B\u0436\u0438\u0432\u0430\u043D\u0438\u0435",statType:"wis"},[14]:{name:"\u041E\u0431\u043C\u0430\u043D",statType:"cha"},[15]:{name:"\u0417\u0430\u043F\u0443\u0433\u0438\u0432\u0430\u043D\u0438\u0435",statType:"cha"},[16]:{name:"\u0412\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",statType:"cha"},[17]:{name:"\u0423\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u0435",statType:"cha"}},Q=P({id:"armor",state:()=>({armorClass:null,hasDisadvantage:!1,needMoreStrength:!1}),actions:{setArmorClass(u){this.armorClass=u},setDisadvantage(u){this.hasDisadvantage=u},setNeedMoreStrength(u){this.needMoreStrength=u}}}),X=P({id:"skills",state:()=>({skillsProficiencies:{[v.athletics]:!1,[v.acrobatics]:!1,[v.sleightOfHand]:!1,[v.stealth]:!1,[v.arcana]:!1,[v.history]:!1,[v.investigation]:!1,[v.nature]:!1,[v.religion]:!1,[v.animalHandling]:!1,[v.insight]:!1,[v.medicine]:!1,[v.perception]:!1,[v.survival]:!1,[v.deception]:!1,[v.intimidation]:!1,[v.performance]:!1,[v.persuasion]:!1}}),actions:{setSkillProficiency(u,e){this.skillsProficiencies[u]=e}}});const V=u=>(k("data-v-7be79176"),u=u(),S(),u),wu={class:"pageBlock charList"},Vu=V(()=>t("div",{class:"blockTitle"},"\u{1F4CE} \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",-1)),Iu={class:"blockBody"},Pu={class:"valueBlock"},Hu={class:"stats"},Tu={class:"statValue"},Nu={key:0,class:"value"},Ou=H("("),Ru={title:"\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0439 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440"},Uu=H(")"),qu={key:0,class:"valueBlock"},Gu=V(()=>t("span",null,"\u0418\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432\u0430:",-1)),ju={class:"value"},zu={key:1,class:"valueBlock"},Ku=V(()=>t("span",{title:"\u0415\u0441\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u043D \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043D\u0430\u0432\u044B\u043A, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u043E\u043D\u0443\u0441 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430"},"\u041F\u0430\u0441\u0441\u0438\u0432\u043D\u0430\u044F \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:",-1)),Wu={class:"value"},Ju={key:2,class:"valueBlock"},Qu=["title"],Xu={class:"value"},Yu={class:"valueBlock"},Zu=V(()=>t("span",{title:"\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430"},"\u041A\u043E\u0441\u0442\u044C \u0445\u0438\u0442\u043E\u0432:",-1)),u4={class:"value"},e4={key:3,class:"valueBlock"},t4=V(()=>t("span",null,"\u041A\u043B\u0430\u0441\u0441 \u0434\u043E\u0441\u043F\u0435\u0445\u0430:",-1)),s4={class:"value"},a4=x({setup(u){const e=w(),c=z(),i=Q(),s=X();U(()=>{window.addEventListener(E.LoadValuesToCharlist,l)}),G(()=>{window.removeEventListener(E.LoadValuesToCharlist,l)});function l(){const n=e.generatedValues,o=e.dataToStatsLinks;for(const p in o)o[p]!==null&&e.setStatValue(o[p],n[p])}function a(n){if(n<1||n>$)return null;const o=Math.ceil((n-11)/2);return o==0?"0":(Math.sign(o)>0?"+":"-")+Math.abs(o)}const h=b(()=>s.skillsProficiencies[v.perception]?2:0);return(n,o)=>(d(),_("div",wu,[Vu,t("div",Iu,[t("div",Pu,[t("div",Hu,[(d(!0),_(y,null,g(r(e).stats,(p,m)=>(d(),_("div",{key:m},[t("span",null,f(r(W)(m))+":",1),t("span",Tu,[H(f(p),1),a(p)!==null?(d(),_("span",Nu,[Ou,t("span",Ru,f(a(p)),1),Uu])):B("",!0)])]))),128))])]),a(r(e).stats.dex)!==null?(d(),_("div",qu,[Gu,t("span",ju,f(10+Number(a(r(e).stats.dex))),1)])):B("",!0),a(r(e).stats.wis)!==null?(d(),_("div",zu,[Ku,t("span",Wu,f(10+Number(a(r(e).stats.wis))+r(h)),1)])):B("",!0),a(r(e).stats.con)!==null?(d(),_("div",Ju,[t("span",{title:`\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043D\u0443\u0436\u043D\u043E \u0431\u0440\u043E\u0441\u0430\u0442\u044C d${r(c).charHitDice} \u0438 \u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u0431\u0430\u0432\u043B\u044F\u0442\u044C ${Number(a(r(e).stats.con))}`},"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0445\u0438\u0442\u043E\u0432:",8,Qu),t("span",Xu,f(r(c).charHitDice+Number(a(r(e).stats.con))),1)])):B("",!0),t("div",Yu,[Zu,t("span",u4,"d"+f(r(c).charHitDice),1)]),r(i).armorClass!==null&&!r(i).needMoreStrength&&r(e).stats.str?(d(),_("div",e4,[t4,t("span",s4,f(r(i).armorClass),1)])):B("",!0)])]))}});var n4=F(a4,[["__scopeId","data-v-7be79176"]]);const N={"\u041B\u0451\u0433\u043A\u0438\u0439 \u0434\u043E\u0441\u043F\u0435\u0445":[{type:0,name:"\u0421\u0442\u0451\u0433\u0430\u043D\u044B\u0439 \u0434\u043E\u0441\u043F\u0435\u0445",AC:11,useDexModifier:!0,stealthDisadvantage:!0},{type:1,name:"\u041A\u043E\u0436\u0430\u043D\u044B\u0439 \u0434\u043E\u0441\u043F\u0435\u0445",AC:11,useDexModifier:!0},{type:2,name:"\u041F\u0440\u043E\u043A\u043B\u0451\u043F\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u0436\u0430",AC:12,useDexModifier:!0}],"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0434\u043E\u0441\u043F\u0435\u0445":[{type:3,name:"\u0428\u043A\u0443\u0440\u043D\u044B\u0439 \u0434\u043E\u0441\u043F\u0435\u0445",AC:12,useDexModifier:!0,maximumDexModifier:2},{type:4,name:"\u041A\u043E\u043B\u044C\u0447\u0443\u0436\u043D\u0430\u044F \u0440\u0443\u0431\u0430\u0445\u0430",AC:13,useDexModifier:!0,maximumDexModifier:2},{type:5,name:"\u0427\u0435\u0448\u0443\u0439\u0447\u0430\u0442\u044B\u0439 \u0434\u043E\u0441\u043F\u0435\u0445",AC:14,useDexModifier:!0,maximumDexModifier:2,stealthDisadvantage:!0},{type:6,name:"\u041A\u0438\u0440\u0430\u0441\u0430",AC:14,useDexModifier:!0,maximumDexModifier:2},{type:7,name:"\u041F\u043E\u043B\u0443\u043B\u0430\u0442\u044B",AC:15,useDexModifier:!0,stealthDisadvantage:!0,maximumDexModifier:2}],"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0434\u043E\u0441\u043F\u0435\u0445":[{type:8,name:"\u041A\u043E\u043B\u0435\u0447\u043D\u044B\u0439 \u0434\u043E\u0441\u043F\u0435\u0445",AC:14,stealthDisadvantage:!0},{type:9,name:"\u041A\u043E\u043B\u044C\u0447\u0443\u0433\u0430",AC:16,minimumStr:13,stealthDisadvantage:!0},{type:10,name:"\u041D\u0430\u0431\u043E\u0440\u043D\u044B\u0439 \u0434\u043E\u0441\u043F\u0435\u0445",AC:17,minimumStr:15,stealthDisadvantage:!0},{type:11,name:"\u041B\u0430\u0442\u044B",AC:18,minimumStr:15,stealthDisadvantage:!0}]};const Y=u=>(k("data-v-4e92fc4b"),u=u(),S(),u),i4={class:"pageBlock armor"},o4=Y(()=>t("div",{class:"blockTitle"},"\u{1F6E1}\uFE0F \u041D\u0430\u0434\u0435\u0442\u0430\u044F \u0431\u0440\u043E\u043D\u044F",-1)),r4={class:"blockBody"},c4=["title"],l4=Y(()=>t("option",null,"-",-1)),d4=["label"],_4=["value"],p4={key:0,class:"alert"},h4=x({setup(u){const e=w(),c=Q(),i=M("-"),s=b(()=>{if(i.value=="-")return null;for(const n in N){const o=N[n].find(p=>p.type==i.value);if(o)return o}return null}),l=b(()=>{if(!s.value)return null;const n=s.value.AC;let o=0;return s.value.useDexModifier&&(o=Math.ceil((e.stats.dex-11)/2),s.value.maximumDexModifier&&(o=Math.min(o,s.value.maximumDexModifier))),n+o});A(l,n=>{c.setArmorClass(n)}),A(s,n=>{if(n===null)return 0;c.setDisadvantage(!!n.stealthDisadvantage)});const a=b(()=>e.stats.str>0&&s.value!==null&&s.value!==void 0&&s.value.minimumStr!==void 0&&e.stats.str<s.value.minimumStr);A(a,n=>{c.setNeedMoreStrength(n)});const h=b(()=>{if(!s.value)return"";let n=s.value.AC.toString();return s.value.useDexModifier&&(n+=" + \u043B\u043E\u0432\u043A\u043E\u0441\u0442\u044C",s.value.maximumDexModifier!==void 0&&(n+=` (\u043C\u0430\u043A\u0441. ${s.value.maximumDexModifier})`)),n});return(n,o)=>(d(),_("div",i4,[o4,t("div",r4,[I(t("select",{"onUpdate:modelValue":o[0]||(o[0]=p=>i.value=p),title:r(h)},[l4,(d(!0),_(y,null,g(r(N),(p,m)=>(d(),_("optgroup",{label:m},[(d(!0),_(y,null,g(p,D=>(d(),_("option",{key:D.type,value:D.type},f(D.name),9,_4))),128))],8,d4))),256))],8,c4),[[R,i.value]]),r(a)&&r(s)?(d(),_("div",p4,"\u2757\u041D\u0443\u0436\u043D\u043E "+f(r(s).minimumStr)+" \u0441\u0438\u043B\u044B",1)):B("",!0)])]))}});var v4=F(h4,[["__scopeId","data-v-4e92fc4b"]]);const m4={class:"pageBlock skills"},f4={class:"blockTitle"},D4=H("\u{1F9E0} \u041D\u0430\u0432\u044B\u043A\u0438"),E4={key:0,class:"selectedCount"},C4={class:"blockBody"},y4={class:"skill"},B4=["checked","onChange"],A4={class:"name"},g4={class:"stat"},x4={class:"value"},F4=x({setup(u){const e=X(),c=w();function i(h){return e.skillsProficiencies[h]}function s(h,n){e.setSkillProficiency(h,n.target.checked)}function l(h){const n=q[h].statType,o=c.stats[n];return(o>0?Math.ceil((o-11)/2):0)+(e.skillsProficiencies[h]?2:0)}function a(){return Object.values(e.skillsProficiencies).reduce((h,n)=>h+=+(n==!0),0)}return(h,n)=>(d(),_("div",m4,[t("div",f4,[D4,a()?(d(),_("span",E4,"(\u0412\u044B\u0431\u0440\u0430\u043D\u043E: "+f(a())+")",1)):B("",!0)]),t("div",C4,[(d(!0),_(y,null,g(r(q),(o,p)=>(d(),_("div",y4,[t("label",null,[t("input",{type:"checkbox",checked:i(p),onChange:m=>s(p,m)},null,40,B4),t("span",A4,f(o.name),1),t("span",g4,"("+f(r(mu)[o.statType])+")",1)]),t("span",x4,f(10+l(p)),1)]))),256))])]))}});var k4=F(F4,[["__scopeId","data-v-5761b55a"]]);const S4=u=>(k("data-v-254f34dd"),u=u(),S(),u),L4=S4(()=>t("header",null,[t("h1",null,"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 (D&D\xA05e)")],-1)),b4={class:"blocksArea"},$4=x({setup(u){return(e,c)=>(d(),_(y,null,[L4,t("div",b4,[L(_u),L(v4),L(Mu),L(n4),L(k4)])],64))}});var M4=F($4,[["__scopeId","data-v-254f34dd"]]);const Z=tu(M4);Z.use(su());Z.mount("#app");
