import{s as q,n as A,h as z,r as N}from"../chunks/scheduler.ff881941.js";import{S as M,i as j,g,s as I,r as x,h as $,j as k,z as P,c as O,f as h,u as S,k as p,a as b,y as w,v as C,x as T,d as V,t as L,w as D}from"../chunks/index.620f90ac.js";import{S as U}from"../chunks/Footer.svelte_svelte_type_style_lang.0e79c4be.js";import{B as W}from"../chunks/back.56b8e34c.js";import{V as G}from"../chunks/view_recommendations.c666a352.js";const X=()=>typeof window<"u"&&"document"in window&&"location"in window,R=o=>({...o.location,state:o.history.state,key:o.history.state&&o.history.state.key||"initial"}),Y=o=>{const t=[];let a=R(o);return{get location(){return a},listen(n){t.push(n);const e=()=>{a=R(o),n({location:a,action:"POP"})};return o.addEventListener("popstate",e),()=>{o.removeEventListener("popstate",e);const l=t.indexOf(n);t.splice(l,1)}},navigate(n,{state:e,replace:l=!1,preserveScroll:c=!1}={}){e={...e,key:Date.now()+""};try{l?o.history.replaceState(e,"",n):o.history.pushState(e,"",n)}catch{o.location[l?"replace":"assign"](n)}a=R(o),t.forEach(r=>r({location:a,action:"PUSH",preserveScroll:c})),document.activeElement.blur()}}},F=(o="/")=>{let t=0;const a=[{pathname:o,search:""}],n=[];return{get location(){return a[t]},addEventListener(e,l){},removeEventListener(e,l){},history:{get entries(){return a},get index(){return t},get state(){return n[t]},pushState(e,l,c){const[r,i=""]=c.split("?");t++,a.push({pathname:r,search:i}),n.push(e)},replaceState(e,l,c){const[r,i=""]=c.split("?");a[t]={pathname:r,search:i},n[t]=e}}}},J=Y(X()?window:F()),{navigate:K}=J;function Q(o){let t,a,n,e,l="Recommended Books",c,r,i,u="Recommend me a Book →",v,d,_,s,m;return d=new G({props:{height:"60vh"}}),{c(){t=g("section"),a=g("div"),n=g("div"),e=g("div"),e.textContent=l,c=I(),r=g("div"),i=g("a"),i.textContent=u,v=I(),x(d.$$.fragment),this.h()},l(f){t=$(f,"SECTION",{class:!0});var E=k(t);a=$(E,"DIV",{class:!0});var B=k(a);n=$(B,"DIV",{class:!0});var y=k(n);e=$(y,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-248uiz"&&(e.textContent=l),c=O(y),r=$(y,"DIV",{class:!0});var H=k(r);i=$(H,"A",{class:!0,href:!0,"data-svelte-h":!0}),P(i)!=="svelte-420ppq"&&(i.textContent=u),H.forEach(h),v=O(y),S(d.$$.fragment,y),y.forEach(h),B.forEach(h),E.forEach(h),this.h()},h(){p(e,"class","recommendations-title svelte-1naeho1"),p(i,"class","about-item svelte-1naeho1"),p(i,"href","./book-recommendations/"),p(r,"class","submission-mid-title svelte-1naeho1"),p(n,"class","submission-container"),p(a,"class","view-recommendation-container svelte-1naeho1"),p(t,"class","view-recommendations")},m(f,E){b(f,t,E),w(t,a),w(a,n),w(n,e),w(n,c),w(n,r),w(r,i),w(n,v),C(d,n,null),_=!0,s||(m=T(i,"click",o[0]),s=!0)},p:A,i(f){_||(V(d.$$.fragment,f),_=!0)},o(f){L(d.$$.fragment,f),_=!1},d(f){f&&h(t),D(d),s=!1,m()}}}function Z(o){return[()=>{K("./book-recommendations")}]}class ee extends M{constructor(t){super(),j(this,t,Z,Q,q,{})}}function te(o){let t=!1,a=()=>{t=!1},n,e,l,c,r,i,u,v,d,_;return z(o[3]),z(o[4]),e=new U({props:{title:"View Recommendations | Lucas Gover",description:"View Book Recommendations!",keywords:"books, recommend, recommendations, currently reading, read, student, computer science, political theory, political science, science fiction"}}),c=new W({}),u=new ee({}),{c(){x(e.$$.fragment),l=I(),x(c.$$.fragment),r=I(),i=g("main"),x(u.$$.fragment),this.h()},l(s){S(e.$$.fragment,s),l=O(s),S(c.$$.fragment,s),r=O(s),i=$(s,"MAIN",{id:!0,class:!0});var m=k(i);S(u.$$.fragment,m),m.forEach(h),this.h()},h(){p(i,"id","home"),p(i,"class","svelte-1cj40qv")},m(s,m){C(e,s,m),b(s,l,m),C(c,s,m),b(s,r,m),b(s,i,m),C(u,i,null),v=!0,d||(_=[T(window,"resize",o[3]),T(window,"scroll",()=>{t=!0,clearTimeout(n),n=setTimeout(a,100),o[4]()})],d=!0)},p(s,[m]){m&4&&!t&&(t=!0,clearTimeout(n),scrollTo(window.pageXOffset,s[2]),n=setTimeout(a,100))},i(s){v||(V(e.$$.fragment,s),V(c.$$.fragment,s),V(u.$$.fragment,s),v=!0)},o(s){L(e.$$.fragment,s),L(c.$$.fragment,s),L(u.$$.fragment,s),v=!1},d(s){s&&(h(l),h(r),h(i)),D(e,s),D(c,s),D(u),d=!1,N(_)}}}function ne(o,t,a){let n,e,l=0;function c(){a(0,n=window.innerWidth),a(1,e=window.innerHeight)}function r(){a(2,l=window.pageYOffset)}return o.$$.update=()=>{o.$$.dirty&1},[n,e,l,c,r]}class le extends M{constructor(t){super(),j(this,t,ne,te,q,{})}}export{le as component};