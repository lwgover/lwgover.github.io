import{s as q,n as T,h as R,r as W}from"../chunks/scheduler.ff881941.js";import{S as j,i as P,g as b,h,j as L,f as d,k as _,a as v,y,p as J,t as E,b as U,d as I,s as g,z as $,c as w,x as N,l as Y,r as A,u as V,v as D,w as M,m as F,n as G,o as X}from"../chunks/index.620f90ac.js";import{S as K}from"../chunks/Footer.svelte_svelte_type_style_lang.0e79c4be.js";import{B as Q}from"../chunks/back.56b8e34c.js";import{V as Z}from"../chunks/view_recommendations.c666a352.js";function ee(p){let l,a="Recommend me a Book!",n,t,c,r=`Book Title
					<input class="text-input svelte-1rcb9e2" type="text" id="bookname" placeholder="Title"/>`,s,i,e=`Book Author
					<input class="text-input svelte-1rcb9e2" type="text" id="author" placeholder="Author"/>`,u,f,x=`Your Name (Optional)
					<input class="text-input svelte-1rcb9e2" type="text" id="recommender-name" placeholder="Your Name"/>`,o,m,S=`Description
					<textarea class="text-input description svelte-1rcb9e2" id="description" placeholder="What makes it so good?"></textarea>`,O,B,z,H;return{c(){l=b("div"),l.textContent=a,n=g(),t=b("form"),c=b("label"),c.innerHTML=r,s=g(),i=b("label"),i.innerHTML=e,u=g(),f=b("label"),f.innerHTML=x,o=g(),m=b("label"),m.innerHTML=S,O=g(),B=b("input"),this.h()},l(C){l=h(C,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-flthtl"&&(l.textContent=a),n=w(C),t=h(C,"FORM",{});var k=L(t);c=h(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(c)!=="svelte-1s9qhqg"&&(c.innerHTML=r),s=w(k),i=h(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(i)!=="svelte-gy4mo1"&&(i.innerHTML=e),u=w(k),f=h(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(f)!=="svelte-15jimbz"&&(f.innerHTML=x),o=w(k),m=h(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(m)!=="svelte-a4r0w"&&(m.innerHTML=S),O=w(k),B=h(k,"INPUT",{class:!0,type:!0}),k.forEach(d),this.h()},h(){_(l,"class","recommendations-title svelte-1rcb9e2"),_(c,"class","text-input-container svelte-1rcb9e2"),_(i,"class","text-input-container svelte-1rcb9e2"),_(f,"class","text-input-container svelte-1rcb9e2"),_(m,"class","text-input-container svelte-1rcb9e2"),_(B,"class","submit-button svelte-1rcb9e2"),_(B,"type","submit"),B.value="Submit →"},m(C,k){v(C,l,k),v(C,n,k),v(C,t,k),y(t,c),y(t,s),y(t,i),y(t,u),y(t,f),y(t,o),y(t,m),y(t,O),y(t,B),z||(H=N(B,"click",p[4]),z=!0)},p:T,i:T,o:T,d(C){C&&(d(l),d(n),d(t)),z=!1,H()}}}function te(p){let l,a,n="Recommend me a Book!",t,c,r,s,i,e;const u=[ne,se,le],f=[];function x(o,m){return m&2&&(c=null),m&2&&(r=null),c==null&&(c=o[1].status.localeCompare("waiting")==0),c?0:(r==null&&(r=o[1].status.localeCompare("succeeded")==0),r?1:2)}return s=x(p,-1),i=f[s]=u[s](p),{c(){l=b("div"),a=b("div"),a.textContent=n,t=g(),i.c(),this.h()},l(o){l=h(o,"DIV",{class:!0});var m=L(l);a=h(m,"DIV",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-flthtl"&&(a.textContent=n),t=w(m),i.l(m),m.forEach(d),this.h()},h(){_(a,"class","recommendations-title svelte-1rcb9e2"),_(l,"class","submission-container")},m(o,m){v(o,l,m),y(l,a),y(l,t),f[s].m(l,null),e=!0},p(o,m){let S=s;s=x(o,m),s===S?f[s].p(o,m):(J(),E(f[S],1,1,()=>{f[S]=null}),U(),i=f[s],i?i.p(o,m):(i=f[s]=u[s](o),i.c()),I(i,1),i.m(l,null))},i(o){e||(I(i),e=!0)},o(o){E(i),e=!1},d(o){o&&d(l),f[s].d()}}}function le(p){let l,a,n,t="Unfortunately, the submission failed.",c,r,s,i;return{c(){l=b("div"),a=g(),n=b("div"),n.textContent=t,c=g(),r=b("input"),this.h()},l(e){l=h(e,"DIV",{style:!0}),L(l).forEach(d),a=w(e),n=h(e,"DIV",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-obczcz"&&(n.textContent=t),c=w(e),r=h(e,"INPUT",{class:!0,type:!0}),this.h()},h(){Y(l,"margin-top","30%"),_(n,"class","submission-mid-title svelte-1rcb9e2"),_(r,"class","submit-button svelte-1rcb9e2"),_(r,"type","submit"),r.value="Try Again?"},m(e,u){v(e,l,u),v(e,a,u),v(e,n,u),v(e,c,u),v(e,r,u),s||(i=N(r,"click",p[3]),s=!0)},p:T,i:T,o:T,d(e){e&&(d(l),d(a),d(n),d(c),d(r)),s=!1,i()}}}function se(p){let l,a="Thanks for your recommendation!",n,t,c="Check out some of the other reviews below",r,s,i;return s=new Z({}),{c(){l=b("div"),l.textContent=a,n=g(),t=b("div"),t.textContent=c,r=g(),A(s.$$.fragment),this.h()},l(e){l=h(e,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-8eni0q"&&(l.textContent=a),n=w(e),t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),$(t)!=="svelte-zqq6ue"&&(t.textContent=c),r=w(e),V(s.$$.fragment,e),this.h()},h(){_(l,"class","submission-mid-title svelte-1rcb9e2"),_(t,"class","submission-subtitle svelte-1rcb9e2")},m(e,u){v(e,l,u),v(e,n,u),v(e,t,u),v(e,r,u),D(s,e,u),i=!0},p:T,i(e){i||(I(s.$$.fragment,e),i=!0)},o(e){E(s.$$.fragment,e),i=!1},d(e){e&&(d(l),d(n),d(t),d(r)),M(s,e)}}}function ne(p){let l,a=JSON.stringify(p[1].message).slice(1,-1)+"",n,t,c;return{c(){l=b("div"),n=F(a),t=g(),c=b("div"),this.h()},l(r){l=h(r,"DIV",{class:!0});var s=L(l);n=G(s,a),s.forEach(d),t=w(r),c=h(r,"DIV",{class:!0}),L(c).forEach(d),this.h()},h(){_(l,"class","submission-subtitle svelte-1rcb9e2"),_(c,"class","lds-dual-ring svelte-1rcb9e2")},m(r,s){v(r,l,s),y(l,n),v(r,t,s),v(r,c,s)},p(r,s){s&2&&a!==(a=JSON.stringify(r[1].message).slice(1,-1)+"")&&X(n,a)},i:T,o:T,d(r){r&&(d(l),d(t),d(c))}}}function oe(p){let l,a,n,t,c;const r=[te,ee],s=[];function i(e,u){return e[0]?0:1}return n=i(p),t=s[n]=r[n](p),{c(){l=b("section"),a=b("div"),t.c(),this.h()},l(e){l=h(e,"SECTION",{class:!0});var u=L(l);a=h(u,"DIV",{class:!0});var f=L(a);t.l(f),f.forEach(d),u.forEach(d),this.h()},h(){_(a,"class","book-recommendation-container svelte-1rcb9e2"),_(l,"class","book-recommendations")},m(e,u){v(e,l,u),y(l,a),s[n].m(a,null),c=!0},p(e,[u]){let f=n;n=i(e),n===f?s[n].p(e,u):(J(),E(s[f],1,1,()=>{s[f]=null}),U(),t=s[n],t?t.p(e,u):(t=s[n]=r[n](e),t.c()),I(t,1),t.m(a,null))},i(e){c||(I(t),c=!0)},o(e){E(t),c=!1},d(e){e&&d(l),s[n].d()}}}function ie(p,l,a){var n=!1,t={status:"waiting",message:"Submitting ..."};function c(){var i=document.getElementById("bookname"),e=document.getElementById("author"),u=document.getElementById("recommender-name"),f=document.getElementById("description").value;if(i.value===""?(i.parentElement.style.color="red",i.style.borderColor="red"):(i.parentElement.style.color="#555",i.style.borderColor="#777"),e.value===""?(e.parentElement.style.color="red",e.style.borderColor="red"):(e.parentElement.style.color="#555",e.style.borderColor="#777"),i.value!==""&&e.value!==""){const x={book_name:i.value,author:author.value,recommender_name:u.value,recommendation:f};a(0,n=!0),console.log(JSON.stringify(x)),fetch("https://shhboimzz4.execute-api.us-east-1.amazonaws.com/BookAPI",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(x)}).then(o=>o.json()).then(o=>{console.log("Success",o),a(0,n=!0),a(1,t=o)})}}return[n,t,c,function(){a(0,n=!1),a(1,t={status:"waiting",message:"Submitting ..."})},()=>c()]}class re extends j{constructor(l){super(),P(this,l,ie,oe,q,{})}}function ae(p){let l=!1,a=()=>{l=!1},n,t,c,r,s,i,e,u,f,x;return R(p[3]),R(p[4]),t=new K({props:{title:"Recommend Me a Book! | Lucas Gover",description:"Recommend Lucas a book!",keywords:"books, recommend, recommendations, currently reading, read, student, computer science, political theory, political science, science fiction"}}),r=new Q({}),e=new re({}),{c(){A(t.$$.fragment),c=g(),A(r.$$.fragment),s=g(),i=b("main"),A(e.$$.fragment),this.h()},l(o){V(t.$$.fragment,o),c=w(o),V(r.$$.fragment,o),s=w(o),i=h(o,"MAIN",{id:!0,class:!0});var m=L(i);V(e.$$.fragment,m),m.forEach(d),this.h()},h(){_(i,"id","home"),_(i,"class","svelte-1cj40qv")},m(o,m){D(t,o,m),v(o,c,m),D(r,o,m),v(o,s,m),v(o,i,m),D(e,i,null),u=!0,f||(x=[N(window,"resize",p[3]),N(window,"scroll",()=>{l=!0,clearTimeout(n),n=setTimeout(a,100),p[4]()})],f=!0)},p(o,[m]){m&4&&!l&&(l=!0,clearTimeout(n),scrollTo(window.pageXOffset,o[2]),n=setTimeout(a,100))},i(o){u||(I(t.$$.fragment,o),I(r.$$.fragment,o),I(e.$$.fragment,o),u=!0)},o(o){E(t.$$.fragment,o),E(r.$$.fragment,o),E(e.$$.fragment,o),u=!1},d(o){o&&(d(c),d(s),d(i)),M(t,o),M(r,o),M(e),f=!1,W(x)}}}function ce(p,l,a){let n,t,c=0;function r(){a(0,n=window.innerWidth),a(1,t=window.innerHeight)}function s(){a(2,c=window.pageYOffset)}return p.$$.update=()=>{p.$$.dirty&1},[n,t,c,r,s]}class _e extends j{constructor(l){super(),P(this,l,ce,ae,q,{})}}export{_e as component};