(this.webpackJsonpSeniorProject=this.webpackJsonpSeniorProject||[]).push([[0],{64:function(e,t,n){e.exports=n.p+"static/media/menuIcon.d7a593e9.png"},65:function(e,t,n){e.exports=n.p+"static/media/coin.515325b9.png"},67:function(e,t,n){e.exports=n.p+"static/media/monalisa.c08cd151.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/dance.94d13e19.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/sunflowers.7ebd97b8.jpg"},78:function(e,t,n){e.exports=n(89)},83:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=(n(83),n(41)),c=n(42),s=n(51),u=n(43),m=n(52),d=n(142),p=n(131),h=(n(132),n(133),n(134)),g=n(26),f=n(128);n(71),n(144),n(64);n(65),Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));var E=n(91),b=n(135),y=n(136),v=Object(p.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function w(e){var t=v(),n=r.a.useState(null),a=Object(g.a)(n,2),i=a[0],o=a[1],l=Boolean(i),c=l?"simple-popper":void 0;return r.a.createElement("div",null,r.a.createElement(f.a,{"aria-describedby":c,onClick:function(e){o(i?null:e.currentTarget)}},"More Info"),r.a.createElement(b.a,{id:c,open:l,anchorEl:i,transition:!0},(function(n){var a=n.TransitionProps;return r.a.createElement(y.a,Object.assign({},a,{timeout:350}),r.a.createElement(E.a,{style:{width:700}},r.a.createElement(h.a,{className:t.typography},e.text)))})))}var x=n(137),j=n(141),k=n(140),O=n(138),B=n(143),I=n(139),S=n(145),N=n(25),P=n(11),C=n.n(P);var M=!1;!function(e){var t=e();t.next()}(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void(e.next=3);case 3:W(),M&&console.log("trade requested"),e.next=0;break;case 7:case"end":return e.stop()}}),e)})));function W(){return J.apply(this,arguments)}function J(){return(J=Object(N.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:9000/students/dholley");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,"undefined"!==typeof JSON.parse(JSON.stringify(n))[0]?M=!0:console.log("no trade");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return V.apply(this,arguments)}function V(){return(V=Object(N.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("username").value,e.next=3,fetch("http://localhost:9000/students/"+t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,"undefined"===typeof(r=JSON.parse(JSON.stringify(a))[0])?console.log("username does not exist"):r.hash!==document.getElementById("password").value?console.log("incorrect password for username"):(console.log("login successful"),localStorage.setItem("username",document.getElementById("username").value),r.admin?window.location.replace("/table"):window.location.replace("/"));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(N.a)(C.a.mark((function e(){var t,n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("username"),e.next=3,fetch("http://localhost:9000/students/"+t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,"undefined"===typeof JSON.parse(JSON.stringify(a))[0]?localStorage.clear():(console.log("login successful"),window.location.replace("/"));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){localStorage.clear(),window.location.reload()}function L(){return(L=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.stringify({username:document.getElementById(t+"name").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,money:document.getElementById(t+"money").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,paintings:document.getElementById(t+"paintings").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,value:document.getElementById(t+"value").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value,kudos:document.getElementById(t+"kudos").children.item(0).getElementsByClassName("MuiInputBase-input")[0].value}),console.log(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=[{id:"username",label:"Username",minWidth:170},{id:"name",label:"Name",minWidth:170},{id:"money",label:"Money",minWidth:100},{id:"paintings",label:"Paintings",minWidth:100},{id:"value",label:"Value",minWidth:100},{id:"kudos",label:"Kudos",minWidth:100},{id:"change",minWidth:50}];function q(e,t,n,a,r,i){return{username:e,name:t,paintings:n,money:a,value:r,kudos:i}}var F=Object(p.a)({root:{width:"100%"},tableWrapper:{maxHeight:440,overflow:"auto"}}),G=[q("jopatrny","Julia Opatrny","5","9,000","200","50"),q("dholley","Donald Holley","6","4,000","400","85"),q("mjenkins","Matt Jenkins","8","1,500","350","35")];function A(){var e=F(),t=r.a.useState(0),n=Object(g.a)(t,2),a=n[0],i=n[1],o=r.a.useState(10),l=Object(g.a)(o,2),c=l[0],s=l[1];return r.a.createElement(E.a,{className:e.root},r.a.createElement("div",{className:e.tableWrapper},r.a.createElement(x.a,{stickyHeader:!0},r.a.createElement(O.a,null,r.a.createElement(I.a,null,R.map((function(e){return r.a.createElement(k.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(j.a,null,G.slice(a*c,a*c+c).map((function(e){return r.a.createElement(I.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.username},R.map((function(t){var n=e[t.id];return r.a.createElement(k.a,{id:e.username+t.id,align:t.align},"change"==t.id?r.a.createElement(f.a,{variant:"contained",onClick:function(){return function(e){return L.apply(this,arguments)}(e.username)}},"Save"):r.a.createElement(S.a,{defaultValue:n,inputProps:{"aria-label":"description"}}))})))}))))),r.a.createElement(B.a,{rowsPerPageOptions:[10,25,100],component:"div",count:G.length,rowsPerPage:c,page:a,backIconButtonProps:{"aria-label":"previous page"},nextIconButtonProps:{"aria-label":"next page"},onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){s(+e.target.value),i(0)}}))}var K=n(67),U=n.n(K),$=n(68),z=n.n($),Q=n(69),X=n.n(Q),Y=[{img:U.a,title:"Mona Lisa",artist:"DaVinci",description:"The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world."},{img:z.a,title:"Dance",artist:"Matisse",description:"Dance is a painting made by Henri Matisse in 1910, at the request of Russian businessman and art collector Sergei Shchukin, who bequeathed the large decorative panel to the Hermitage Museum in Saint Petersburg, Russia."},{img:X.a,title:"Sunflowers",artist:"Van Gogh",description:"Sunflowers is the name of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, executed a year later in Arles, shows a bouquet of sunflowers in a vase. "}],Z=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{fontFamily:"roboto",variant:"h4",component:"h4",style:{textAlign:"center",paddingTop:20,paddingBottom:10}},"My Gallery"),r.a.createElement("div",null,r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"left-justified"},Y.map((function(e){return r.a.createElement("div",{style:{padding:10}},r.a.createElement("img",{src:e.img,alt:e.title,height:500}),r.a.createElement(E.a,{style:{padding:10}},r.a.createElement(h.a,{variant:"h6",fontFamily:"roboto"},e.title),r.a.createElement(h.a,{variant:"subtitle1",fontFamily:"roboto"},"By: ",e.artist),r.a.createElement("div",{style:{paddingTop:5,position:"relative",alignSelf:"right",justifyContent:"flex-end"}},r.a.createElement(w,{text:e.description}))))})))))}}]),t}(a.Component),_=n(30),ee=n(23),te=function(){return r.a.createElement("div",null,r.a.createElement(_.b,{to:"/table"},"Table"),r.a.createElement("p",null),r.a.createElement(_.b,{to:"/login"},"Log In"),r.a.createElement(Z,null))},ne=function(){return r.a.createElement("div",null,r.a.createElement(A,null))},ae=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Error 404 Page Not Found"))};console.log(window.location),null!==localStorage.getItem("username")&&"/login"==window.location.pathname&&function(){D.apply(this,arguments)}();var re=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),"username:",r.a.createElement("input",{type:"text",id:"username"}),r.a.createElement("p",null),"password:",r.a.createElement("input",{type:"text",id:"password"}),r.a.createElement("p",null),r.a.createElement("button",{onClick:T},"log in"),r.a.createElement("p",null),r.a.createElement("button",{onClick:H},"log out"))},ie=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(ee.d,null,r.a.createElement(ee.b,{exact:!0,path:"/",component:te}),r.a.createElement(ee.b,{exact:!0,path:"/table",component:ne}),r.a.createElement(ee.b,{exact:!0,path:"/login",component:re}),r.a.createElement(ee.b,{exact:!0,path:"/404notfound",component:ae}),r.a.createElement(ee.a,{to:"/404notfound"})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.b06144c2.chunk.js.map