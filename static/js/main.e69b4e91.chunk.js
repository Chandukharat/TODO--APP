(this["webpackJsonpt-o-d-o-a-p-p"]=this["webpackJsonpt-o-d-o-a-p-p"]||[]).push([[0],{20:function(t,e,c){},22:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(4),s=c.n(i),a=c(7),r=c(2),d=(c(20),c(1)),j=function(){var t=Object(r.b)(),e=Object(n.useState)(""),c=Object(a.a)(e,2),i=c[0],s=c[1],j=Object(n.useState)(""),l=Object(a.a)(j,2),o=l[0],b=l[1],u=Object(n.useState)(""),O=Object(a.a)(u,2),p=O[0],h=O[1],x=Object(r.c)((function(t){return t.Update}));return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{id:"list",style:{border:"solid black 1px"},children:[Object(d.jsx)("div",{id:"txt",children:"TITLE"}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("input",{onChange:function(t){s(t.target.value)}})]}),Object(d.jsx)("div",{id:"txt",children:"DESCRIPTION"}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("input",{onChange:function(t){b(t.target.value)}})]}),Object(d.jsx)("div",{id:"txt",children:"DATE"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"Date",onChange:function(t){h(t.target.value)}})}),Object(d.jsx)("button",{id:"listbtn",type:"button",class:"btn btn-info",onClick:function(){t({type:"change",payload:{data:i,desc:o,dat:p}})},children:"ADD"}),console.log(x)]})})},l=function(){var t=Object(r.c)((function(t){return t.Update})),e=Object(r.b)();new Date;var c=function(){var t=new Date,e=""+(t.getMonth()+1),c=""+t.getDate(),n=t.getFullYear();return e.length<2&&(e="0"+e),c.length<2&&(c="0"+c),[n,e,c].join("-")}();console.log(c);var n=c.replace(/-/g,"");return console.log(n),Object(d.jsx)("div",{children:t.map((function(t,c){return Object(d.jsxs)("div",{style:{border:"solid black 1px"},id:"show",children:[" ",Object(d.jsx)("p",{children:t.data}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("p",{children:t.dat}),t.dat.replace(/-/g,"")===n?Object(d.jsx)("p",{children:"DUE DATE IS TODAY"}):t.dat.replace(/-/g,"")<=n?Object(d.jsxs)("p",{style:{color:"red"},children:["DUE DATE PASSED",t.dat," "]}):Object(d.jsxs)("p",{children:["DUE DATE ",t.dat]}),Object(d.jsx)("button",{class:"bg-success p-2 text-dark bg-opacity-25",onClick:function(){return e({type:"ckk",payload:{ind:c}})},children:Object(d.jsx)("img",{src:"https://icons.veryicon.com/png/o/construction-tools/coca-design/delete-189.png"})})]})}))})};var o=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{style:{display:"flex",justifyContent:"center",fontFamily:"italic"},children:"TODO APP"}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{class:"row",children:[Object(d.jsx)("div",{class:"col",children:Object(d.jsx)(j,{})}),Object(d.jsx)("div",{class:"col",children:Object(d.jsx)(l,{})})]})})]})},b=c(6),u=c(11),O=Object(b.a)({Update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"change":return[].concat(Object(u.a)(t),[e.payload]);case"ckk":var c=t.filter((function(t,c){return c!==e.payload.ind}));return t.value=c,c;default:return t}}}),p=Object(b.b)(O);s.a.render(Object(d.jsx)(r.a,{store:p,children:Object(d.jsx)(o,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e69b4e91.chunk.js.map