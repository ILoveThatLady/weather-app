(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4264)}])},4827:function(e,t,n){"use strict";var i=n(5893),a=n(7294),s=n(7321),c=n.n(s);let o=()=>{let[e,t]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e=new Date,n="\n        ".concat(e.toLocaleDateString("en-US",{month:"long",day:"numeric"})," -\n        ").concat(e.toLocaleDateString("en-US",{weekday:"long"}),"\n        ");t(n)},[]),(0,i.jsx)("div",{className:c().date,children:(0,i.jsx)("p",{children:e})})};t.Z=o},4264:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(5893),a=n(9008),s=n.n(a),c=n(9034),o=n.n(c),r=n(7294),l=n(8995),d=n.n(l);async function h(e){let t=await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("f8fe6389d7486cf3724e283f6fb7deaa","&units=metric")),n=await t.json();return console.log(n),n}var u=n(1163);let _=()=>{let e=(0,u.useRouter)(),[t,n]=(0,r.useState)(""),[a,s]=(0,r.useState)(null),c=async i=>{if("Enter"===i.key){let i=await h(t);s(i),n(""),e.push({pathname:"/forecast/".concat(t),query:{data:JSON.stringify(i)}})}};return(0,i.jsx)("div",{className:d().search,children:(0,i.jsx)("input",{type:"text",value:t,onChange:e=>n(e.target.value),placeholder:"Search city...",onKeyUp:c,className:d().location})})};var f=n(4827),m=n(5675),p=n.n(m);function x(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Weather App 0.1.1"}),(0,i.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,i.jsx)("meta",{name:"description",content:"Developed by Emilio Ortiz"}),(0,i.jsx)("meta",{name:"theme-color",content:"#374557"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"/touch-icon.png"})]}),(0,i.jsxs)("main",{className:o().main,children:[(0,i.jsx)(f.Z,{}),(0,i.jsxs)("div",{className:o().iconContainer,children:[(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:o().slideInRight,src:"/sun.svg",width:260,height:260,alt:"sun icon",priority:!0,loading:"eager"})}),(0,i.jsx)("div",{className:o().decorationFirst}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{src:"/cloud.svg",width:330,height:250,alt:"cloud icon",priority:!0,loading:"eager"})})]}),(0,i.jsxs)("div",{className:o().titleCont,children:[(0,i.jsxs)("h1",{children:[(0,i.jsx)("strong",{children:"Where"})," are we?"]}),(0,i.jsx)(_,{})]})]})]})}},7321:function(e){e.exports={date:"GetDate_date__pjm4o","slide-in-right":"GetDate_slide-in-right__hvy7V"}},8995:function(e){e.exports={search:"InputCity_search__25lyU",location:"InputCity_location__TvwWI"}},9034:function(e){e.exports={main:"Home_main__nLjiQ",iconContainer:"Home_iconContainer__wnm9q","slide-in-left":"Home_slide-in-left__WSGvU",decorationFirst:"Home_decorationFirst__cfWWO",titleCont:"Home_titleCont__A63ff"}},9008:function(e,t,n){e.exports=n(2636)}},function(e){e.O(0,[873,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);