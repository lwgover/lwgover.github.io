import{s as q,k as v,r as z}from"../chunks/scheduler.604080fe.js";import{S as F,i as H,r as d,s as T,g as L,u as _,c as B,h as O,j as W,f as g,k as S,v as $,a as b,y as A,x as j,d as w,t as h,w as y}from"../chunks/index.c873dd19.js";import{S as C,F as E}from"../chunks/Footer.ef3426d1.js";import"../chunks/global.a9e61c67.js";import{B as G,a as I}from"../chunks/Books.83471daa.js";function M(r){let a=!1,m=()=>{a=!1},i,s,l,t,o,p,c,f,u,k;return v(r[3]),v(r[4]),s=new C({props:{title:"Books | Lucas Gover",description:"Lucas's reading list",keywords:"books, currently reading, read, student, computer science, political theory, political science, science fiction"}}),o=new G({props:{data:I,shorten:!1}}),c=new E({}),{c(){d(s.$$.fragment),l=T(),t=L("main"),d(o.$$.fragment),p=T(),d(c.$$.fragment),this.h()},l(e){_(s.$$.fragment,e),l=B(e),t=O(e,"MAIN",{id:!0,class:!0});var n=W(t);_(o.$$.fragment,n),p=B(n),_(c.$$.fragment,n),n.forEach(g),this.h()},h(){S(t,"id","home"),S(t,"class","svelte-1cj40qv")},m(e,n){$(s,e,n),b(e,l,n),b(e,t,n),$(o,t,null),A(t,p),$(c,t,null),f=!0,u||(k=[j(window,"resize",r[3]),j(window,"scroll",()=>{a=!0,clearTimeout(i),i=setTimeout(m,100),r[4]()})],u=!0)},p(e,[n]){n&4&&!a&&(a=!0,clearTimeout(i),scrollTo(window.pageXOffset,e[2]),i=setTimeout(m,100))},i(e){f||(w(s.$$.fragment,e),w(o.$$.fragment,e),w(c.$$.fragment,e),f=!0)},o(e){h(s.$$.fragment,e),h(o.$$.fragment,e),h(c.$$.fragment,e),f=!1},d(e){e&&(g(l),g(t)),y(s,e),y(o),y(c),u=!1,z(k)}}}function N(r,a,m){let i,s,l=0;function t(){m(0,i=window.innerWidth),m(1,s=window.innerHeight)}function o(){m(2,l=window.pageYOffset)}return r.$$.update=()=>{r.$$.dirty&1},[i,s,l,t,o]}class J extends F{constructor(a){super(),H(this,a,N,M,q,{})}}export{J as component};