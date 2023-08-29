"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{5811:function(n,e,r){r.d(e,{Vm:function(){return h},bU:function(){return u},ds:function(){return l},qu:function(){return g}});var i,t,o,s,c=r(168),a=r(5706),d=r(5372),l=a.Z.ul(i||(i=(0,c.Z)(["\n  "," {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    gap: ",";\n  }\n"])),d.rS.mq[0],d.rS.sizing(2)),h=a.Z.div(t||(t=(0,c.Z)(["\n  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg);\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n"]))),u=a.Z.div(o||(o=(0,c.Z)(["\n  width: 100%;\n\n  "," {\n    height: 270px;\n  }\n"])),d.rS.mq[0]),g=a.Z.li(s||(s=(0,c.Z)(["\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: ",";\n  img {\n    width: 100%;\n  }\n\n  "," {\n    width: 180px;\n    img {\n      max-width: 100%;\n    }\n  }\n"])),d.rS.colors.white,d.rS.mq[0])},5170:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var i,t,o,s,c=r(5861),a=r(9439),d=r(4687),l=r.n(d),h=r(4614),u=r(2791),g=r(7689),p=r(168),v=r(5706),x=r(5372),f=r(1087),w=v.Z.div(i||(i=(0,p.Z)(["\n  "," {\n    display: flex;\n    column-gap: ",";\n  }\n"])),x.rS.mq[0],x.rS.sizing(4)),b=(0,v.Z)(f.rU)(t||(t=(0,p.Z)(["\n  display: block;\n  width: 100px;\n  height: 30px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  padding: ",";\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),x.rS.sizing(2),x.rS.colors.movieCardBg,x.rS.colors.white,x.rS.colors.black),m=v.Z.ul(o||(o=(0,p.Z)(["\n  display: flex;\n  column-gap: ",";\n"])),x.rS.sizing(2)),j=(0,v.Z)(f.rU)(s||(s=(0,p.Z)(["\n  display: inline-flex;\n  justify-content: space-between;\n  margin-bottom: ",";\n  width: 100px;\n  height: 30px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  padding: ",";\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),x.rS.sizing(3),x.rS.sizing(2),x.rS.colors.movieCardBg,x.rS.colors.white,x.rS.colors.black),k=r(6095),S=r(5811),_=r(8185),Z=r(184),y=function(){var n,e,r=(0,u.useState)({}),i=(0,a.Z)(r,2),t=i[0],o=i[1],s=(0,g.UO)().movieId,d=(0,g.TH)(),p=(0,u.useRef)(null===(n=d.state)||void 0===n?void 0:n.from);return(0,u.useEffect)((function(){function n(){return(n=(0,c.Z)(l().mark((function n(){var e,r,i,t,c,a,d;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Rg)(s);case 3:e=n.sent,r=e.data,i=r.poster_path,t=r.title,c=r.vote_average,a=r.overview,d=r.genres,o({poster_path:i,title:t,vote_average:c,overview:a,genres:d}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[s]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(j,{to:null!==(e=p.current)&&void 0!==e?e:"/movies",children:["Go back",(0,Z.jsx)(_.R_q,{})]}),(0,Z.jsxs)(w,{children:[t.poster_path?(0,Z.jsx)("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(t.poster_path),alt:t.title,width:"360"}):(0,Z.jsx)(S.Vm,{}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h1",{children:t.title}),(0,Z.jsx)("p",{children:"User score: ".concat(Math.round(10*t.vote_average),"%")}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:t.overview}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)("ul",{children:t.genres&&t.genres.map((function(n){var e=n.id,r=n.name;return(0,Z.jsx)("li",{children:r},e)}))})]})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h4",{children:"Additional info"}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(b,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(b,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)(u.Suspense,{fallback:(0,Z.jsx)(k.a,{}),children:(0,Z.jsx)(g.j3,{})})]})]})}}}]);
//# sourceMappingURL=170.3387d9f7.chunk.js.map