import{D as s,S as e,i as a,s as t,e as r,t as c,k as n,c as l,a as o,g as i,d as v,n as u,b as f,E as h,f as g,F as $,G as d,H as p,j as b,m as w,o as m,I as E,v as I,r as k,w as A,J as L}from"../chunks/vendor-a2359bda.js";const _={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function N(s){let e,a,t,p,b,w,m,E,I,k,A,L,_,N,q,x,F;return{c(){e=r("nav"),a=r("ul"),t=r("li"),p=r("a"),b=c("SNIK"),w=n(),m=r("li"),E=r("a"),I=c("HITO"),k=n(),A=r("li"),L=r("a"),_=c("FAQ"),N=n(),q=r("li"),x=r("a"),F=c("Issuetracker"),this.h()},l(s){e=l(s,"NAV",{class:!0});var r=o(e);a=l(r,"UL",{class:!0});var c=o(a);t=l(c,"LI",{class:!0});var n=o(t);p=l(n,"A",{href:!0,class:!0});var f=o(p);b=i(f,"SNIK"),f.forEach(v),n.forEach(v),w=u(c),m=l(c,"LI",{class:!0});var h=o(m);E=l(h,"A",{href:!0,class:!0});var g=o(E);I=i(g,"HITO"),g.forEach(v),h.forEach(v),k=u(c),A=l(c,"LI",{class:!0});var $=o(A);L=l($,"A",{href:!0,class:!0});var d=o(L);_=i(d,"FAQ"),d.forEach(v),$.forEach(v),N=u(c),q=l(c,"LI",{class:!0});var H=o(q);x=l(H,"A",{href:!0,target:!0,class:!0});var S=o(x);F=i(S,"Issuetracker"),S.forEach(v),H.forEach(v),c.forEach(v),r.forEach(v),this.h()},h(){f(p,"href","../snik"),f(p,"class","svelte-1n78wov"),h(p,"selected","snik"===s[0]),f(t,"class","svelte-1n78wov"),f(E,"href","../hito"),f(E,"class","svelte-1n78wov"),h(E,"selected","hito"===s[0]),f(m,"class","svelte-1n78wov"),f(L,"href","../faq"),f(L,"class","svelte-1n78wov"),h(L,"selected","faq"===s[0]),f(A,"class","right svelte-1n78wov"),f(x,"href","https://github.com/DigitaleZukunft/glossar/issues/new"),f(x,"target","_blank"),f(x,"class","svelte-1n78wov"),f(q,"class","right svelte-1n78wov"),f(a,"class","svelte-1n78wov"),f(e,"class","svelte-1n78wov")},m(s,r){g(s,e,r),$(e,a),$(a,t),$(t,p),$(p,b),$(a,w),$(a,m),$(m,E),$(E,I),$(a,k),$(a,A),$(A,L),$(L,_),$(a,N),$(a,q),$(q,x),$(x,F)},p(s,[e]){1&e&&h(p,"selected","snik"===s[0]),1&e&&h(E,"selected","hito"===s[0]),1&e&&h(L,"selected","faq"===s[0])},i:d,o:d,d(s){s&&v(e)}}}function q(s,e,a){let{section:t}=e;return s.$$set=s=>{"section"in s&&a(0,t=s.section)},[t]}class x extends e{constructor(s){super(),a(this,s,q,N,t,{section:0})}}function F(s){let e,a,t,c;e=new x({props:{section:s[0]}});const i=s[3].default,f=p(i,s,s[2],null);return{c(){b(e.$$.fragment),a=n(),t=r("main"),f&&f.c()},l(s){w(e.$$.fragment,s),a=u(s),t=l(s,"MAIN",{});var r=o(t);f&&f.l(r),r.forEach(v)},m(s,r){m(e,s,r),g(s,a,r),g(s,t,r),f&&f.m(t,null),c=!0},p(s,[a]){const t={};1&a&&(t.section=s[0]),e.$set(t),f&&f.p&&(!c||4&a)&&E(f,i,s,s[2],c?a:-1,null,null)},i(s){c||(I(e.$$.fragment,s),I(f,s),c=!0)},o(s){k(e.$$.fragment,s),k(f,s),c=!1},d(s){A(e,s),s&&v(a),s&&v(t),f&&f.d(s)}}}function H(s,e,a){let t,r;L(s,_,(s=>a(1,r=s)));let{$$slots:c={},$$scope:n}=e;return s.$$set=s=>{"$$scope"in s&&a(2,n=s.$$scope)},s.$$.update=()=>{2&s.$$.dirty&&a(0,t=r.path.split("/")[1])},[t,r,n,c]}export default class extends e{constructor(s){super(),a(this,s,H,F,t,{})}}
