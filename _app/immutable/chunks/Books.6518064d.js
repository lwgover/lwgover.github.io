import{s as V,n as B}from"./scheduler.ff881941.js";import{S as z,i as U,g as _,s as A,h as p,j as M,z as G,c as C,f as m,k as b,a as w,y as d,e as J,B as R,m as E,n as L,o as H}from"./index.620f90ac.js";import{e as D}from"./each.e59479a4.js";function W(c,e,a){const t=c.slice();return t[6]=e[a],t[8]=a,t}function P(c,e,a){const t=c.slice();return t[3]=e[a],t}function K(c,e,a){const t=c.slice();return t[3]=e[a],t}function Y(c){let e,a=D(c[0].items),t=[];for(let l=0;l<a.length;l+=1)t[l]=N(W(c,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=J()},l(l){for(let o=0;o<t.length;o+=1)t[o].l(l);e=J()},m(l,o){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(l,o);w(l,e,o)},p(l,o){if(o&1){a=D(l[0].items);let s;for(s=0;s<a.length;s+=1){const u=W(l,a,s);t[s]?t[s].p(u,o):(t[s]=N(u),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},d(l){l&&m(e),R(t,l)}}}function Z(c){let e,a,t=c[0].items[0].title+"",l,o,s,u=c[0].items[0].description+"",v,k,g,f,T="<div>Full Reading List Here</div>",h=D(c[0].items[0].books),i=[];for(let n=0;n<h.length;n+=1)i[n]=O(K(c,h,n));return{c(){e=_("div"),a=_("h3"),l=E(t),o=A(),s=_("h4"),v=E(u),k=A();for(let n=0;n<i.length;n+=1)i[n].c();g=A(),f=_("a"),f.innerHTML=T,this.h()},l(n){e=p(n,"DIV",{class:!0,id:!0});var r=M(e);a=p(r,"H3",{class:!0});var y=M(a);l=L(y,t),y.forEach(m),o=C(r),s=p(r,"H4",{class:!0});var S=M(s);v=L(S,u),S.forEach(m),k=C(r);for(let F=0;F<i.length;F+=1)i[F].l(r);g=C(r),f=p(r,"A",{class:!0,href:!0,"data-svelte-h":!0}),G(f)!=="svelte-182gf9z"&&(f.innerHTML=T),r.forEach(m),this.h()},h(){b(a,"class","book-item-title svelte-1nhnk9l"),b(s,"class","book-item-description svelte-1nhnk9l"),b(f,"class","full-list svelte-1nhnk9l"),b(f,"href","./books"),b(e,"class","book-item-container svelte-1nhnk9l"),b(e,"id","even")},m(n,r){w(n,e,r),d(e,a),d(a,l),d(e,o),d(e,s),d(s,v),d(e,k);for(let y=0;y<i.length;y+=1)i[y]&&i[y].m(e,null);d(e,g),d(e,f)},p(n,r){if(r&1&&t!==(t=n[0].items[0].title+"")&&H(l,t),r&1&&u!==(u=n[0].items[0].description+"")&&H(v,u),r&1){h=D(n[0].items[0].books);let y;for(y=0;y<h.length;y+=1){const S=K(n,h,y);i[y]?i[y].p(S,r):(i[y]=O(S),i[y].c(),i[y].m(e,g))}for(;y<i.length;y+=1)i[y].d(1);i.length=h.length}},d(n){n&&m(e),R(i,n)}}}function I(c){let e,a=c[3].title+"",t;return{c(){e=_("p"),t=E(a),this.h()},l(l){e=p(l,"P",{class:!0});var o=M(e);t=L(o,a),o.forEach(m),this.h()},h(){b(e,"class","book-item svelte-1nhnk9l")},m(l,o){w(l,e,o),d(e,t)},p(l,o){o&1&&a!==(a=l[3].title+"")&&H(t,a)},d(l){l&&m(e)}}}function N(c){let e,a,t=c[6].title+"",l,o,s,u=c[6].description+"",v,k,g,f,T=D(c[6].books),h=[];for(let i=0;i<T.length;i+=1)h[i]=I(P(c,T,i));return{c(){e=_("div"),a=_("h3"),l=E(t),o=A(),s=_("h4"),v=E(u),k=A();for(let i=0;i<h.length;i+=1)h[i].c();g=A(),this.h()},l(i){e=p(i,"DIV",{class:!0,id:!0});var n=M(e);a=p(n,"H3",{class:!0});var r=M(a);l=L(r,t),r.forEach(m),o=C(n),s=p(n,"H4",{class:!0});var y=M(s);v=L(y,u),y.forEach(m),k=C(n);for(let S=0;S<h.length;S+=1)h[S].l(n);g=C(n),n.forEach(m),this.h()},h(){b(a,"class","book-item-title svelte-1nhnk9l"),b(s,"class","book-item-description svelte-1nhnk9l"),b(e,"class","book-item-container svelte-1nhnk9l"),b(e,"id",f=c[0].items.length-1>c[8]?c[8]%2==0?"even":"odd":c[8]%2==0?"even-end":"odd-end")},m(i,n){w(i,e,n),d(e,a),d(a,l),d(e,o),d(e,s),d(s,v),d(e,k);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(e,null);d(e,g)},p(i,n){if(n&1&&t!==(t=i[6].title+"")&&H(l,t),n&1&&u!==(u=i[6].description+"")&&H(v,u),n&1){T=D(i[6].books);let r;for(r=0;r<T.length;r+=1){const y=P(i,T,r);h[r]?h[r].p(y,n):(h[r]=I(y),h[r].c(),h[r].m(e,g))}for(;r<h.length;r+=1)h[r].d(1);h.length=T.length}n&1&&f!==(f=i[0].items.length-1>i[8]?i[8]%2==0?"even":"odd":i[8]%2==0?"even-end":"odd-end")&&b(e,"id",f)},d(i){i&&m(e),R(h,i)}}}function O(c){let e,a=c[3].title+"",t;return{c(){e=_("p"),t=E(a),this.h()},l(l){e=p(l,"P",{class:!0});var o=M(e);t=L(o,a),o.forEach(m),this.h()},h(){b(e,"class","book-item svelte-1nhnk9l")},m(l,o){w(l,e,o),d(e,t)},p(l,o){o&1&&a!==(a=l[3].title+"")&&H(t,a)},d(l){l&&m(e)}}}function j(c){let e,a,t="Books!",l,o,s='<img class="book-image svelte-1nhnk9l" src="./images/Books/reading.jpg" alt="book, while reading"/>',u,v,k,g;function f(i,n){return i[1]?Z:Y}let T=f(c),h=T(c);return{c(){e=_("section"),a=_("h2"),a.textContent=t,l=A(),o=_("div"),o.innerHTML=s,u=A(),h.c(),v=A(),k=_("div"),this.h()},l(i){e=p(i,"SECTION",{class:!0});var n=M(e);a=p(n,"H2",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-e8gvkg"&&(a.textContent=t),l=C(n),o=p(n,"DIV",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-8kyg08"&&(o.innerHTML=s),u=C(n),h.l(n),v=C(n),k=p(n,"DIV",{class:!0,style:!0});var r=M(k);r.forEach(m),n.forEach(m),this.h()},h(){b(a,"class","section-title"),b(o,"class","book-image-container svelte-1nhnk9l"),b(k,"class","extra-spacing"),b(k,"style",g=`margin-top: ${c[2]?"100":"0"}px;`),b(e,"class","Books svelte-1nhnk9l")},m(i,n){w(i,e,n),d(e,a),d(e,l),d(e,o),d(e,u),h.m(e,null),d(e,v),d(e,k)},p(i,[n]){T===(T=f(i))&&h?h.p(i,n):(h.d(1),h=T(i),h&&(h.c(),h.m(e,v))),n&4&&g!==(g=`margin-top: ${i[2]?"100":"0"}px;`)&&b(k,"style",g)},i:B,o:B,d(i){i&&m(e),h.d()}}}function q(c,e,a){let{data:t}=e,{shorten:l=!1}=e,{isMobile:o=!1}=e;return c.$$set=s=>{"data"in s&&a(0,t=s.data),"shorten"in s&&a(1,l=s.shorten),"isMobile"in s&&a(2,o=s.isMobile)},[t,l,o]}class ee extends z{constructor(e){super(),U(this,e,q,j,V,{data:0,shorten:1,isMobile:2})}}const x=[{title:"Currently Reading",description:"I have the bad habit of reading too many things at once. Here's what I'm currently reading",books:[{title:"Capitalist Realism by Mark Fisher"},{title:"The Words that Remain by Stênio Gardel"},{title:"Big Data and Social Science by Ian Foster, Rayid Ghani, Ron S. Jarmin, Frauke Kreuter, and Julia Lane"}]},{title:"2024",description:"All the books I've read so far this year",books:[{title:"Neuromancer by William Gibson"},{title:"This is How you Lose the Time War by Amal El-Mohtar and Max Gladstone"},{title:"What it Took to Win: A History of the Democratic Party by Michael Kazin"},{title:"A Memory called Empire by Arkady Marine"},{title:"How to Know a Person by David Brooks"},{title:"At the Edge of the Woods by Kathryn Bromwich"},{title:"Justice by Means of Democracy by Danielle Allen"},{title:"To Paradise by Hanya Yanagihara"},{title:"Trilogy by John Fosse"},{title:"The Tusks of Extinction by Ray Nayler"},{title:"All About Love by bell hooks"},{title:"Conversations with Friends by Sally Rooney"},{title:"Ten Low by Stark Holborn"},{title:"Nixonland by Rick Pearlstein"},{title:"The Loneliness Files by Athena Dixon"},{title:"A Love Song for Ricki Wilde by Tia Williams"},{title:"Age of Revolutions by Fareed Zakaria"},{title:"The Kitchen Curse by Eka Kurniawan"},{title:"Idlewild by James Frankie Thomas"}]},{title:"2023",description:"All the books I read in 2023",books:[{title:"The Traitor Prince by C. J. Redwine"},{title:"Conversations on Writing by Ursula K. Le Guin"},{title:"True and Only Heaven by Christopher Lasch"},{title:"End of History and the Last Man by Francis Fukuyama"},{title:"Doors of Eden by Adrian Tchaikovsky"},{title:"Democracy matters by Cornell West"},{title:"The Realigners by Timothy Shenk"},{title:"The Bitter End by Chris Tausanovitch, John M. Sides, and Lynn Vavreck"},{title:"Children of Memory by Adrian Tchaikovsky"},{title:"The Shock Doctrine by Naomi Klein"},{title:"The Metaphysical Club by Louis Menand"},{title:"The Lathe of Heaven by Ursula K. Le Guin"},{title:"The Cage of Souls by Adrian Tchaikovsky"},{title:"Babel by R. F. Kuang"},{title:"Slouching Towards Utopia by J. Bradford DeLong"},{title:"Normal People by Sally Rooney"},{title:"Confessions of a Conservative by Garry Wills"},{title:"The Coddling of the American Mind by Greg Lukianoff and Jonathan Haidt"},{title:"There is Nothing For You Here by Fiona Hill"},{title:"Building a Second Brain by Tiago Forte"},{title:"Interactive Data Visualization for the Web by Scott Murphy"},{title:"God Human Animal Machine by Meghan O'Gieblyn"},{title:"Identity: the Demand for Dignity and the Politics of Resentment by Francis Fukuyama"},{title:"City of Last Chances by Adrian Tchaikovsky"},{title:"Man's Search for Meaning by Victor Frankel"},{title:"Psychoanalysis: the Impossible Profession by Janet Malcolm"},{title:"The Price of Peace: Money, Democracy, and the Life of John Maynard Keynes"},{title:"Mobility by Lydia Kiesling"},{title:"Please, Miss by Grace Lavery"},{title:"The Age of Surveillance Capitalism by Shoshana Zuboff"},{title:"The Defining Decade by Meg Jay"},{title:"The Uninhabitable Earth by David Wallace-Wells"},{title:"Adalaide by Genevieve Wheeler"},{title:"Closer baby, Closer by Savannah Brown"},{title:"Doppelganger by Naomi Klein"},{title:"Liberalism Against Itself by Samuel Moyn"},{title:"The Road to Character by David Brooks"},{title:"The Fraud by Zadie Smith"}]},{title:"2022",description:"Everything I read in 2022!",books:[{title:"Children of ruin by Adrian Tchaikovsky"},{title:"Atomic Habits by James Clear"},{title:"A Little Life Hanya Yanagihara"},{title:"Banality of Evil by Hannah Arendt"},{title:"I, Robot by Isaac Asimov"},{title:"The left hand of Darkness by Ursula K. Le Guin"},{title:"The Extended Mind by Annie Murphy Paul"},{title:"Stolen Focus by Johann Hari"},{title:"Why we're polarized by Ezra Klein"},{title:"Gallant by V. E. Schuab"},{title:"Amusing Ourselves to Death by Neil Postman"},{title:"Brave New World Aldous Huxley "},{title:"The Anthropocene Reviewed by John Green"},{title:"Shards of Earth by Adrian Tchaikovsky"},{title:"A Wizard of Earth Sea by Ursula K. Le Guin"},{title:"Weapons of Math Destruction Cathy O'Neil"},{title:"Lost connections by Johann Hari"},{title:"Automation and the Future of Work by Aaron Benanav"},{title:"The Tombs of Atuan by Ursula K. Le Guin"},{title:"Eyes of the Void by Adrian Tchaikovsky"},{title:"The Furthest Shore by Ursula K. Le Guin"},{title:"The Shallows by Nicholas Carr"},{title:"Bewilderment by Richard Powers"},{title:"The Golem and the Jinni by Helene Wecker"},{title:"Twilight of Democracy by Anne Applebaum"},{title:"The Hidden Palace by Helene Wecker"},{title:"The Right: the 100-year war for American Conservatism by Mathew Contenetti"},{title:"A Darker Shade of Magic by V. E. Schuab"},{title:"A Gathering of Shadows by V. E. Schuab"},{title:"Liberalism and its discontents by Francis Fukuyama"},{title:"Politics is for power by Eitan Hirsh"},{title:"A Conjuring of Light by V. E. Schuab"},{title:"Sea of Tranquility by Emily St. John Mandel "},{title:"First, You Write a Sentence"},{title:"The Righteous Mind by Jonathan Haidt"},{title:"Elite Capture by Olúfẹ́mi O. Táíwò"},{title:"Talking to Strangers by Malcolm Gladwell"},{title:"Station Eleven by Emily St. John Mandel "},{title:"The Night Circus by Erin Morgenstern "},{title:"The Soul of an Octopus by Sy Montgomery"},{title:"The Elder Race by Adrian Tchaikovsky"},{title:"The Midnight Library by Matt Haig"},{title:"The Book of Form and Emptiness by Ruth Ozeki"},{title:"How to write a Lot by Paul J. Silvia "},{title:"The Book of Night by Holly Black"},{title:"The Ministry for the Future by Kim Stanley Robinson"},{title:"Deep work by Cal Newport "},{title:"Axiom's end by Lindsay Ellis"},{title:"The Truth of the Divine by Lindsay Ellis"},{title:"The Rise and Fall of the Neoliberal Order Gary Gerstle"},{title:"Why liberalism Failed by Patrick Deneen"},{title:"Liberalism and it's discontents by Francis Fukuyama (again)"},{title:"The Dawn of Everything by David Graeber and David Wengrow"},{title:"Plain Style by Christopher Lasch"},{title:"Looking for Alaska by John Green"},{title:"Dune Messiah by Frank Herbert"},{title:"Children of Dune by Frank Herbert"},{title:"The Common Good by Robert Reich"},{title:"Tomorrow and Tomorrow and Tomorrow by Gabrielle Zevin"},{title:"Lincoln in the Bardo by George Saunders"},{title:"The City We Became by N. K. Jemisin"},{title:"Ordinary Monsters by J. M. Miro"},{title:"The Journalist and the Murderer by Janet Malcolm"},{title:"On Tyranny by Timothy Snyder"},{title:"Exhalation by Ted Chiang"}]}],te={items:x};export{ee as B,te as a};