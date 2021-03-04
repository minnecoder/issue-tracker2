(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var r,i,c,a,s,o,d=t(1),l=t.n(d),j=t(32),p=t.n(j),b=(t(42),t(12)),h=t(5),u=t(2),m=t(3),x=Object(m.a)(r||(r=Object(u.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    outline: 0; \n    border: 0;\n    box-sizing: border-box;\n  }  \n  \n  *:focus {\n    outline: 0;\n  }  \n  \n  html, body, #root {\n    height: 100%;\n  }  \n  \n  body {\n    -webkit-font-smoothing: antialiased;\n  }  \n  \n  body, input, button {\n    font: 14px 'Roboto', sans-serif;\n  }  \n  \n  a {\n    text-decoration: none;\n  }  \n  \n  ul {\n    list-style: none;\n  }  \n  \n  button {\n    cursor: pointer;\n  }\n"]))),g=t(21),O=t(0);function f(){var e=Object(h.f)();return Object(O.jsx)(w,{children:Object(O.jsxs)(y,{children:[Object(O.jsx)(N,{children:Object(O.jsx)("h3",{children:"Issue Tracker"})}),Object(O.jsx)(T,{children:Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsxs)("button",{className:"dropbtn",children:["Users",Object(O.jsx)(g.a,{style:{paddingTop:".35rem"}})]}),Object(O.jsxs)("div",{className:"dropdown-content",children:[Object(O.jsx)("button",{onClick:function(){return e.push("/profile")},children:"User Profile"}),Object(O.jsx)("button",{onClick:function(){return sessionStorage.clear(),void e.push("/")},children:"Log Out"})]})]})})]})})}var v,k,w=m.b.div(i||(i=Object(u.a)(["\ngrid-area: header;\nheight: 65px;\nbackground: #128DEB;\n"]))),y=m.b.div(c||(c=Object(u.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding-top: 1rem;\n"]))),N=m.b.div(a||(a=Object(u.a)(["\ndisplay: flex;\nalign-items: center;\n\nh3{\n  padding: 0 2rem;\n  color: white;\n  font-size: 2rem;\n}\n\n"]))),T=m.b.ul(s||(s=Object(u.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 6rem;\n\nli {\n  padding: 0 1rem;\n  color: white;\n}\n.dropdown{\n \n}\n.dropbtn {\n  background: #128DEB;\n  color: white;\n}\n.dropdown:hover .dropdown-content{\n  display: block;\n}\n.dropdown-content {\n  background: #A0D1F7;\n  display: none;\n  position: absolute;\n  min-width: 120px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n.dropdown-content button {\n  background: #A0D1F7;\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n"])));m.b.div(o||(o=Object(u.a)(["\nmargin-left: 2rem;\ndisplay: inline-flex;\nbackground: #128DEB;\noverflow: hidden;\ncolor: white;\ninput {\n  border-style:hidden;\n  background: #128DEB;\n  width: 15rem;\n  color: white;\n}\ninput: focus {\n  outline: none;\n}\n"])));function S(){return Object(O.jsx)(P,{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(I,{to:"/dashboard",children:"Dashboard"})}),Object(O.jsx)("li",{children:Object(O.jsx)(I,{to:"/projects",children:"Projects"})}),Object(O.jsx)("li",{children:Object(O.jsx)(I,{to:"/tickets",children:"Tickets"})})]})})}var C,B,P=m.b.div(v||(v=Object(u.a)(["\ngrid-area: sidebar;\nheight: calc(100vh - 65px);\nwidth: 130px;\nbackground: #a0d1f7;\nborder-right: solid 1px #ddd;\nul {\n    margin-left: 1rem;\n   height: 100%\n}\nli {\npadding: 1rem 0;\njustify-content: space-between;\n}\n"]))),I=Object(m.b)(b.b)(k||(k=Object(u.a)(["\ncolor: white;\nfont-weight:600;\n"]))),D=t(4),E=t.n(D),F=t(8),H=t(6),L=t(13),V=t(9);function M(e){var n=new Date(e).getTime(),t=new Date,r=Math.floor((t-n)/6e4);if(r<60)return"".concat(r," minutes ago");var i=Math.floor((t-n)/36e5);if(i<24)return"".concat(i," hours ago");var c=Math.floor((t-n)/864e5);if(c<30)return"".concat(c," days ago");var a=Math.floor((t-n)/2592e6);if(a<12)return"".concat(a," months ago");var s=Math.floor((t-n)/31104e6);return"".concat(s," years ago")}function z(e){for(var n=[],t=0;t<e.data.ticketComment.length;t++)n.push(e.data.ticketComment[t]);for(var r=0;r<e.data.ticketHistory.length;r++)n.push(e.data.ticketHistory[r]);return n.sort((function(e,n){return new Date(e.created)-new Date(n.created)})),Object(O.jsx)("div",{children:n.map((function(e){return"comment"in e?Object(O.jsxs)(R,{children:[Object(O.jsxs)("div",{children:[e.user," ","commented"," ",Object(O.jsx)("span",{children:M(e.created)})]}),Object(O.jsx)("p",{children:e.comment})]},e._id):"oldValue"in e?Object(O.jsx)(J,{children:Object(O.jsxs)("p",{children:[e.user," ","changed"," ",e.propertyChanged," ","from"," ",e.oldValue," ","to"," ",e.newValue,Object(O.jsx)("span",{children:M(e.created)})]})},e._id):null}))})}var A,J=m.b.div(C||(C=Object(u.a)(["\ndisplay: flex;\njustify-content: space-between;\nbackground: #E7F3FD;\nmargin: .5rem;\npadding: .5rem;\n\nspan {\n  padding-top: .25rem;\n  padding-left: .25rem;\n    font-size: 12px;\n    color: #B2B9BE; \n}\n"]))),R=m.b.div(B||(B=Object(u.a)(["\ndisplay: flex;\nflex-direction: column;\npadding: .5rem;\n\ndiv {\n   \n    padding: .5rem;\n    background: #E7F3FD;\n}\nspan {\n  padding-top: .25rem;\n    font-size: 12px;\n    color: #B2B9BE; \n}\np {\n    margin-top: .25rem;\n    padding: .75rem;\n    border-left: solid 1px #ccc;\n}\n"])));function _(e){var n=e.data,t=e.index,r=Object(d.useState)(!1),i=Object(H.a)(r,2),c=i[0],a=i[1],s=Object(d.useState)({ticketPriority:"",ticketType:"",ticketStatus:"",ticketComment:""}),o=Object(H.a)(s,2),l=o[0],j=o[1];function p(e){j(Object(V.a)(Object(V.a)({},l),{},Object(L.a)({},e.target.name,e.target.value)))}function b(){return(b=Object(F.a)(E.a.mark((function e(t){var r,i,c,s,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=[],i=sessionStorage.getItem("firstName"),c=sessionStorage.getItem("lastName"),s="".concat(i," ").concat(c),n.ticketType!==l.ticketType&&""!==l.ticketType&&r.push({user:s,propertyChanged:"Ticket Type",property:"ticketType",oldValue:n.ticketType,newValue:l.ticketType}),n.ticketStatus!==l.ticketStatus&&""!==l.ticketStatus&&r.push({user:s,propertyChanged:"Ticket Status",property:"ticketStatus",oldValue:n.ticketStatus,newValue:l.ticketStatus}),n.ticketPriority!==l.ticketPriority&&""!==l.ticketPriority&&r.push({user:s,propertyChanged:"Ticket Priority",property:"ticketPriority",oldValue:n.ticketPriority,newValue:l.ticketPriority}),o=0;case 9:if(!(o<r.length)){e.next=15;break}return e.next=12,fetch("/api/v1/tickethistory",{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n._id,user:r[o].user,propertyChanged:r[o].propertyChanged,property:r[o].property,oldValue:r[o].oldValue,newValue:r[o].newValue})});case 12:o++,e.next=9;break;case 15:a(!1),window.location.reload();case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(F.a)(E.a.mark((function e(){var t,r,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=sessionStorage.getItem("firstName"),r=sessionStorage.getItem("lastName"),i="".concat(t," ").concat(r),e.next=5,fetch("/api/v1/ticketcomment",{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n._id,user:i,comment:l.ticketComment})});case 5:j({ticketComment:""}),window.location.reload();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsxs)($,{children:[Object(O.jsxs)("div",{className:"ticketInfo",children:[Object(O.jsxs)("div",{className:"ticketTitle",children:[Object(O.jsx)("h2",{children:n.title}),Object(O.jsxs)("span",{onClick:function(){a(!c)},children:[Object(O.jsx)(g.b,{style:{marginTop:".25rem"}}),"Edit"]})]}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Assigned To"}),Object(O.jsx)("p",{children:n.assignedDev})]}),Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Created By"}),Object(O.jsx)("p",{children:n.submitter})]})]}),c?Object(O.jsxs)("div",{children:[Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Type"}),Object(O.jsxs)("select",{name:"ticketType",value:l.ticketType,onChange:p,children:[Object(O.jsx)("option",{value:"",children:"-"}),Object(O.jsx)("option",{value:"Bug",children:"Bug"}),Object(O.jsx)("option",{value:"New Feature",children:"New Feature"}),Object(O.jsx)("option",{value:"Improvement",children:"Improvement"}),Object(O.jsx)("option",{value:"Task",children:"Task"}),Object(O.jsx)("option",{value:"Testing",children:"Testing"})]})]}),Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Status"}),Object(O.jsxs)("select",{name:"ticketStatus",value:l.ticketStatus,onChange:p,children:[Object(O.jsx)("option",{value:"",children:"-"}),Object(O.jsx)("option",{value:"Open",children:"Open"}),Object(O.jsx)("option",{value:"Resolved",children:"Resolved"}),Object(O.jsx)("option",{value:"Closed",children:"Closed"}),Object(O.jsx)("option",{value:"Reopened",children:"Reopened"}),Object(O.jsx)("option",{value:"In Progress",children:"In Progress"})]})]}),Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Priority"}),Object(O.jsxs)("select",{name:"ticketPriority",value:l.ticketPriority,onChange:p,children:[Object(O.jsx)("option",{value:"",children:"-"}),Object(O.jsx)("option",{value:"Lowest",children:"Lowest"}),Object(O.jsx)("option",{value:"Low",children:"Low"}),Object(O.jsx)("option",{value:"Medium",children:"Medium"}),Object(O.jsx)("option",{value:"High",children:"High"}),Object(O.jsx)("option",{value:"Highest",children:"Highest"})]})]}),Object(O.jsx)("button",{onClick:function(e){return b.apply(this,arguments)},className:"submitBtn",children:"Submit"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Type"}),Object(O.jsx)("p",{children:n.ticketType})]}),Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Status"}),Object(O.jsx)("p",{children:n.ticketStatus})]}),Object(O.jsxs)("section",{className:"infoItem",children:[Object(O.jsx)("p",{children:"Priority"}),Object(O.jsx)("p",{children:n.ticketPriority})]})]})]}),Object(O.jsx)("p",{className:"description",children:n.description})]},t),Object(O.jsx)(z,{data:n}),Object(O.jsxs)("div",{className:"ticketComment",children:[Object(O.jsx)("textarea",{name:"ticketComment",value:l.ticketComment,onChange:p,cols:"30",rows:"10"}),Object(O.jsx)("button",{onClick:function(){return h.apply(this,arguments)},type:"submit",children:"Submit"})]})]})}var U,W,X,$=m.b.div(A||(A=Object(u.a)(["\nbackground: white;\nborder-left: 1px solid #ccc;\n\n.ticketTitle {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: .5rem;\n  h2{\n    margin-left: .25rem;\n  }\n  span{\n    cursor: pointer;\n    margin-right: 2rem; \n    padding: .5rem;\n    color: white;\n    background: #EB7012;\n    border-radius: 5px;\n  }\n}\n\n.description{\n  padding-top: .5rem;\n}\n.infoItem{\n  ","\n  padding: .5rem;\n  \n p:nth-child(1) {\n   text-transform: uppercase;\n   color: #ABB1B6;\n   font-weight: 500;\n   padding-bottom: .25rem;\n }\n}\n.info{\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  border-bottom: solid 1px #ddd;\n  margin: 0 1rem;\n  div{\n    display: flex;\n    justify-content: space-between;\n  }\n  select{\n    border: 1px solid black;\n  }\n  .submitBtn{\n    width: 8rem;\n    padding: .5rem;\n    margin: .5rem;\n    background: #EB7012;\n    color: white;\n    border-radius: 5px;\n}\n}\n.ticketInfo{\n  margin: .5rem;\n  h2{\n  padding: 0.5rem 0;\n  }\n}\n\n.ticketComment {\n  display: flex;\n  flex-direction: column;\n  width: 40rem;\n  margin: 0 1rem ;\n\ninput[type=text] {\n  \n  height: 5rem;\n  border: solid 1px black;\n}\n\ntextarea {\n  border: solid 1px black;\n}\n\nbutton {\n  margin-top: .5rem;\n  padding: .5rem;\n  width: 6rem;\n  background: #EB7012;\n  color: white;\n  border-radius: 5px;\n}\n}\n"])),"");function q(){var e=Object(h.f)(),n=Object(d.useState)([]),t=Object(H.a)(n,2),r=t[0],i=t[1],c=Object(d.useState)("0"),a=Object(H.a)(c,2),s=a[0],o=a[1];Object(d.useEffect)((function(){function e(){return(e=Object(F.a)(E.a.mark((function e(){var n,t,r,c,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.getItem("firstName"),t=sessionStorage.getItem("lastName"),r="".concat(n," ").concat(t),e.next=5,fetch("/api/v1/tickets/name/".concat(r));case 5:return c=e.sent,e.next=8,c.json();case 8:a=e.sent,i(a.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=function(e){var n=e.substr(0,10).split("-");return n.push(n.splice(0,1)[0]),n.join("/")};return Object(O.jsxs)(K,{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)(Y,{children:[Object(O.jsx)("h3",{children:"Tickets"}),Object(O.jsx)("button",{onClick:function(){e.push("/createtickets")},children:"Create A Ticket"})]}),Object(O.jsxs)(Q,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Created"}),Object(O.jsx)("th",{children:"Assigned Developer"}),Object(O.jsx)("th",{children:"Ticket Priority"}),Object(O.jsx)("th",{children:"Ticket Status"}),Object(O.jsx)("th",{children:"Ticket Type"})]})}),Object(O.jsx)("tbody",{children:r.map((function(e,n){return Object(O.jsxs)("tr",{onClick:function(){return o(n)},children:[Object(O.jsx)("td",{children:e.title}),Object(O.jsx)("td",{children:l(e.createdOn)}),Object(O.jsx)("td",{children:e.assignedDev}),Object(O.jsx)("td",{children:e.ticketPriority}),Object(O.jsx)("td",{children:e.ticketStatus}),Object(O.jsx)("td",{children:e.ticketType})]},n)}))})]})]}),!!r.length&&Object(O.jsx)(_,{data:r[s]},r._id)]})}var G,K=m.b.div(U||(U=Object(u.a)([" \ndisplay: flex;\nflex: 1;\njustify-content: space-between;\nbackground: white;\ngrid-area: ticketarea;\nheight: calc(100vh - 4.25rem);\noverflow-y: scroll;\n"]))),Q=m.b.table(W||(W=Object(u.a)(["\nwidth: 100%;\nborder-collapse: collapse;\n\nthead th {\n    padding: 0.5rem;\n    text-align: left;\n    background: #e7f3fd;\n}\n\ntd{\n  padding: 0.5rem;\n  text-align: left;\n  border-bottom: solid 1px #EEE;\n}\ntd:nth-child(1) {\n    max-width: 400px;\n    white-space: nowrap;\n  overflow: hidden;\n    text-overflow: ellipsis;\n}\ntr{\n  height: 2rem;\n}\n"]))),Y=m.b.div(X||(X=Object(u.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding: 1rem 1rem;\n\nh3 {\n    padding-top: .25rem; \n}\nbutton {\n      padding: .5rem;\n      background: #eb7012;\n      color: white;\n      border-radius: 5px;\n}\n"])));function Z(){return Object(O.jsx)("div",{children:Object(O.jsxs)(ne,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)(q,{})]})})}var ee,ne=m.b.div(G||(G=Object(u.a)(['\ndisplay: grid;\ngrid-template-columns: 130px 1fr 1fr;\ngrid-template-rows: 65px 1fr;\ngrid-template-areas:\n"header header header"\n"sidebar ticketarea ticketarea";\ngrid-gap: 0;\n'])));function te(){var e=Object(d.useState)({}),n=Object(H.a)(e,2),t=n[0],r=n[1],i=Object(d.useState)([]),c=Object(H.a)(i,2),a=c[0],s=c[1];return Object(d.useEffect)((function(){function e(){return(e=Object(F.a)(E.a.mark((function e(){var n,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/dashboard");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,r(t.data),s(t.data.projects);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)(ie,{children:[Object(O.jsxs)("div",{className:"projects",children:[Object(O.jsx)("p",{children:"Top 10 Projects"}),Object(O.jsx)("ul",{children:a.map((function(e){return Object(O.jsx)("li",{children:e.title},e._id)}))})]}),Object(O.jsxs)("div",{className:"row1",children:[Object(O.jsxs)("div",{className:"dashboardItem",children:[Object(O.jsx)("p",{children:"Number of Tickets"}),Object(O.jsx)("h1",{children:t.ticketNum})]}),Object(O.jsxs)("div",{className:"dashboardItem",children:[Object(O.jsx)("p",{children:"Bug Tickets"}),Object(O.jsx)("h1",{children:t.ticketsBug})]}),Object(O.jsxs)("div",{className:"dashboardItem",children:[Object(O.jsx)("p",{children:"Open Tickets"}),Object(O.jsx)("h1",{children:t.ticketsOpen})]})]}),Object(O.jsxs)("div",{className:"row2",children:[Object(O.jsxs)("div",{className:"dashboardItem",children:[Object(O.jsx)("p",{children:"Tickets In Progress"}),Object(O.jsx)("h1",{children:t.ticketsInProgress})]}),Object(O.jsxs)("div",{className:"dashboardItem",children:[Object(O.jsx)("p",{children:"Highest Priority Tickets"}),Object(O.jsx)("h1",{children:t.ticketsHighest})]}),Object(O.jsxs)("div",{className:"dashboardItem",children:[Object(O.jsx)("p",{children:"High Priority Tickets"}),Object(O.jsx)("h1",{children:t.ticketsHigh})]})]})]})}var re,ie=m.b.div(ee||(ee=Object(u.a)(['\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n    "projects row1"\n    "projects row2";\n    width: 80vw;\n\n.projects{\n    grid-area: projects;\n    width: 20vw;\n    margin: 2rem 0.5rem 2rem 1.5rem;\n    border-radius: 10px;\n    background: #128DEB;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    p{\n        font-size: 2rem;\n        font-weight: bold;\n        text-align: center;\n        padding: 1rem 0;\n        color: white;\n    }\n    li {\n        color: white;\n        padding: 1rem 0;\n        text-align: center;\n        font-size: 1rem;\n    }\n   \n}\n\n.row1 {\n    grid-area: row1;\n    display: flex;\n    justify-content: space-between;\n    ',"\n    margin: 5rem 1rem 1rem 1rem;\n    width: 90%;\n    ","\n    }\n.row2 {\n    grid-area: row2;\n    display: flex;\n    justify-content: space-between;\n    ","\n    margin: 1rem 1rem 1rem 1rem;\n    width: 90%;\n    ","\n}\n\n.dashboardItem{\n    width: 22vw;\n    height: 26vh;\n    margin: 0 1rem;\n    ","\n    background: #128DEB;\n    border-radius: 10px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    p{\n        color: white;\n        font-size: 1.5rem;\n        text-align: center;\n        padding-top: 1rem;\n    }\n    h1{\n        text-align: center;\n        color: white;\n        font-size: 6rem;\n        padding-top: 1rem;\n    }\n}\n"])),"","","","","");function ce(){return Object(O.jsx)("div",{children:Object(O.jsxs)(se,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)(te,{})]})})}var ae,se=m.b.div(re||(re=Object(u.a)(['\ndisplay: grid;\ngrid-template-columns: 150px 1fr 1fr;\ngrid-template-rows: 65px 1fr;\ngrid-template-areas:\n"header header header"\n"sidebar dashboard dashboard";\ngrid-gap: 0;\nbackground: white;\n'])));function oe(){return Object(O.jsx)("div",{children:Object(O.jsxs)(le,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)("h1",{children:"ManageRoles"})]})})}var de,le=m.b.div(ae||(ae=Object(u.a)(['\ndisplay: grid;\ngrid-template-columns: 150px 1fr 1fr;\ngrid-template-rows: 65px 1fr;\ngrid-template-areas:\n"header header header"\n"sidebar managerole managerole";\ngrid-gap: 0;\nbackground: white;\n'])));function je(){return Object(O.jsx)("div",{children:Object(O.jsxs)(he,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)("h1",{children:"ManageUsers"})]})})}var pe,be,he=m.b.div(de||(de=Object(u.a)(['\ndisplay: grid;\ngrid-template-columns: 150px 1fr 1fr;\ngrid-template-rows: 65px 1fr;\ngrid-template-areas:\n"header header header"\n"sidebar manageuser manageuser";\ngrid-gap: 0;\nbackground: white;\n'])));function ue(){var e=Object(h.f)(),n=Object(d.useState)([]),t=Object(H.a)(n,2),r=t[0],i=t[1];return Object(d.useEffect)((function(){function e(){return(e=Object(F.a)(E.a.mark((function e(){var n,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/projects");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,i(t.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),Object(O.jsxs)("div",{children:[Object(O.jsxs)(ge,{children:[Object(O.jsx)("h3",{children:"Projects"}),Object(O.jsx)("button",{onClick:function(){return e.push("/addproject")},children:"Add A Project"})]}),Object(O.jsxs)(xe,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"# of Tickets"})]})}),Object(O.jsx)("tbody",{children:r.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.title}),Object(O.jsx)("td",{children:e.description}),Object(O.jsx)("td",{children:e.tickets.length})]})}))})]})]})}var me,xe=m.b.table(pe||(pe=Object(u.a)(["\ngrid-area: projectarea;\nbackground: white;\nborder-collapse: collapse;\nwidth: calc(100vw - 220px);\n\nthead th {\n    padding: 1rem;\n    text-align: left;\n    border-bottom: solid 1px #F8F8F8;\n    background: #e7f3fd;\n}\ntd{\n  padding: 1rem;\n  text-align: left;\n  border-bottom: solid 1px #EEE;\n}\ntr{\n    height: 2rem;\n}\n\n"]))),ge=m.b.div(be||(be=Object(u.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding: 1rem 2rem;\nh3 {\n    padding-top: .25rem; \n}\nbutton {\n      padding: .5rem;\n      background: #eb7012;\n      color: white;\n      border-radius: 5px;\n}\n"])));function Oe(){return Object(O.jsx)("div",{children:Object(O.jsxs)(ke,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)(ue,{})]})})}var fe,ve,ke=m.b.div(me||(me=Object(u.a)(['\ndisplay: grid;\ngrid-template-columns: 150px 1fr 1fr;\ngrid-template-rows: 65px 1fr;\ngrid-template-areas:\n"header header header"\n"sidebar projectarea projectarea";\ngrid-gap: 0;\nbackground: white;\n'])));function we(){var e=Object(h.f)(),n=Object(d.useState)({email:"",password:"",error:""}),t=Object(H.a)(n,2),r=t[0],i=t[1];function c(e){i(Object(V.a)(Object(V.a)({},r),{},Object(L.a)({},e.target.name,e.target.value))),e.preventDefault()}function a(){return(a=Object(F.a)(E.a.mark((function n(t){var c,a,s;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,fetch("/api/v1/users/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,password:r.password})});case 3:if(400!==(c=n.sent).status){n.next=9;break}return n.next=7,c.json();case 7:a=n.sent,i({error:a.error,email:"",password:""});case 9:if(200!==c.status){n.next=17;break}return n.next=12,c.json();case 12:s=n.sent,sessionStorage.setItem("token",s.token),sessionStorage.setItem("firstName",s.firstName),sessionStorage.setItem("lastName",s.lastName),e.push("/tickets");case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(O.jsx)(Te,{children:Object(O.jsxs)(Se,{onSubmit:function(e){return a.apply(this,arguments)},children:[Object(O.jsx)("h1",{children:"Issue Tracker"}),Object(O.jsx)("h4",{children:r.error}),Object(O.jsx)("input",{name:"email",type:"text",placeholder:"Email",value:r.email,onChange:c}),Object(O.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:r.password,onChange:c}),Object(O.jsx)("input",{type:"submit",value:"Submit"}),Object(O.jsxs)("div",{className:"loginLinks",children:[Object(O.jsxs)("p",{children:["Don't have an account?",Object(O.jsx)(b.b,{to:"/register",children:" Register User"})]}),Object(O.jsxs)("p",{children:["Login as a Demo User ",Object(O.jsx)(b.b,{to:"/demo",children:" Click Here"})]})]})]})})}var ye,Ne,Te=m.b.div(fe||(fe=Object(u.a)(["\nbackground:#128DEB;\nheight: 100vh;\nwidth: 100%;\n\n"]))),Se=m.b.form(ve||(ve=Object(u.a)(['\n    position: absolute;\n    top: 10%;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    background: white;\n    width: 30rem;\n    padding: 2rem 0;\n \n  \n  h1{\n    text-align: center;\n    color: #0d62a4;\n    padding-bottom: .5rem;  \n  }\n\n  h4{\n      color: red;\n  }\n  \n  input {\n    width: 20rem;\n    margin: 0.5rem 0;\n    padding: 1rem 0;\n    text-align: center;\n  border: 1px solid black;\n  }\n  input[type="submit"] {\n      margin-top: .75rem;\n    width: 5rem;\n    background: #eb7012;\n    color: white;\n  }\n  .loginLinks {\n      padding: .5rem 0;\n  }\n  .loginLinks p {\n      padding: .25rem 0;\n  }\n']))),Ce=t(37);function Be(){var e=Object(Ce.a)(),n=Object(d.useState)({firstName:"",lastName:"",email:"",password:"",error:""}),t=Object(H.a)(n,2),r=t[0],i=t[1];function c(e){i(Object(V.a)(Object(V.a)({},r),{},Object(L.a)({},e.target.name,e.target.value))),e.preventDefault()}function a(n){n.preventDefault(),fetch("/api/v1/users/add",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:r.firstName,lastName:r.lastName,email:r.email,password:r.password})}).then((function(e){return e.json()})).then((function(n){Object.prototype.hasOwnProperty.call(n,"error")&&i({error:n.error,firstName:"",lastName:"",email:"",password:""}),Object.prototype.hasOwnProperty.call(n,"token")&&(sessionStorage.setItem("token",n.token),sessionStorage.setItem("First Name",n.firstName),sessionStorage.setItem("Last Name",n.lastName),e.push("/tickets"))}))}return Object(O.jsx)(Ie,{children:Object(O.jsxs)(De,{onSubmit:a,children:[Object(O.jsx)("h1",{children:"Delivery Notes"}),Object(O.jsx)("h4",{children:r.error}),Object(O.jsx)("input",{name:"firstName",type:"text",placeholder:"First Name",value:r.firstName,onChange:c}),Object(O.jsx)("input",{name:"lastName",type:"text",placeholder:"Last Name",value:r.lastName,onChange:c}),Object(O.jsx)("input",{name:"email",type:"text",placeholder:"Email",value:r.email,onChange:c}),Object(O.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:r.password,onChange:c}),Object(O.jsx)("input",{type:"submit",value:"Submit",onClick:a})]})})}var Pe,Ie=m.b.div(ye||(ye=Object(u.a)(["\nbackground:#128DEB;\nheight: 100vh;\nwidth: 100%;\n\n"]))),De=m.b.form(Ne||(Ne=Object(u.a)(['\n    position: absolute;\n    top: 10%;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    background: white;\n    width: 30rem;\n    padding: 2rem 0;\n    border-radius: 10px;\n  \n  h1{\n    text-align: center;\n    color: #0d62a4;\n    padding-bottom: .5rem;  \n  }\n\n  h4{\n      color: red;\n  }\n  \n  input {\n    width: 20rem;\n    margin: 0.5rem 0;\n    padding: 1rem 0;\n    text-align: center;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n  input[type="submit"] {\n      margin-top: .75rem;\n    width: 5rem;\n    background: #eb7012;\n    color: white;\n  }\n \n'])));function Ee(){var e=Object(h.f)(),n=Object(d.useState)([]),t=Object(H.a)(n,2),r=t[0],i=t[1],c=Object(d.useState)({project:"",title:"",description:"",ticketType:"",ticketPriority:"",user:""}),a=Object(H.a)(c,2),s=a[0],o=a[1];function l(e){o(Object(V.a)(Object(V.a)({},s),{},Object(L.a)({},e.target.name,e.target.value)))}function j(e){return p.apply(this,arguments)}function p(){return(p=Object(F.a)(E.a.mark((function n(t){var r,i,c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),r=sessionStorage.getItem("firstName"),i=sessionStorage.getItem("lastName"),c="".concat(r," ").concat(i),n.next=6,fetch("/api/v1/tickets",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({project:s.project,title:s.title,description:s.description,assignedDev:c,submitter:c,ticketPriority:s.ticketPriority,ticketType:s.ticketType})});case 6:e.push("/tickets");case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(d.useEffect)((function(){function e(){return(e=Object(F.a)(E.a.mark((function e(){var n,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/projects/dropdown");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,t.data.unshift({_id:0,title:"-"}),i(t.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)(He,{children:[Object(O.jsx)("button",{className:"closeBtn",onClick:function(){e.push("/tickets")},children:"Close X"}),Object(O.jsx)("h1",{children:"Create A Ticket"}),Object(O.jsxs)("form",{onSubmit:j,children:[Object(O.jsxs)("label",{children:["Project",Object(O.jsx)("select",{name:"project",value:s.project,onChange:l,children:r.map((function(e,n){return Object(O.jsxs)("option",{value:e.title,children:["  ",e.title]},e._id)}))})]}),Object(O.jsx)("input",{name:"title",type:"text",value:s.title,onChange:l,placeholder:"Title"}),Object(O.jsx)("input",{name:"description",type:"text",value:s.description,onChange:l,placeholder:"Description"}),Object(O.jsxs)("label",{children:["Ticket Priority",Object(O.jsxs)("select",{name:"ticketPriority",value:s.ticketPriority,onChange:l,children:[Object(O.jsx)("option",{value:"",children:"-"}),Object(O.jsx)("option",{value:"Lowest",children:"Lowest"}),Object(O.jsx)("option",{value:"Low",children:"Low"}),Object(O.jsx)("option",{value:"Medium",children:"Medium"}),Object(O.jsx)("option",{value:"High",children:"High"}),Object(O.jsx)("option",{value:"Highest",children:"Highest"})]})]}),Object(O.jsxs)("label",{children:["Ticket Type",Object(O.jsxs)("select",{name:"ticketType",value:s.ticketType,onChange:l,children:[Object(O.jsx)("option",{value:"",children:"-"}),Object(O.jsx)("option",{value:"Bug",children:"Bug"}),Object(O.jsx)("option",{value:"New Feature",children:"New Feature"}),Object(O.jsx)("option",{value:"Improvement",children:"Improvement"}),Object(O.jsx)("option",{value:"Task",children:"Task"}),Object(O.jsx)("option",{value:"Testing",children:"Testing"})]})]}),Object(O.jsx)("button",{onClick:j,className:"submitBtn",children:"Submit"})]})]})}var Fe,He=m.b.div(Pe||(Pe=Object(u.a)([" \nposition: absolute;\ntop: 15%;\nleft: 14%;\nwidth: 80%;\nheight: 80%;\nbackground:#128DEB;\nborder-radius: 10px;\n\nform{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    padding:  .5rem 0;\n    margin-top: .5rem;\n    color: white;\n}\nlabel{\n    color: white;\n}\n\ninput[type=text]{\n    width: 50%;\n    padding: 1.5rem;\n    margin: .75rem;\n}\n\nselect{\n    padding: 1.5rem;\n    margin: .5rem;\n}\n\n.submitBtn{\n    width: 8rem;\n    padding: 1.5rem;\n    margin: .5rem;\n    background: #EB7012;\n    color: white;\n    border-radius: 5px;\n}\n.closeBtn{\n    ","\n    background: #EB7012;\n    border-radius: 5px;\n    padding: 1rem;\n    margin: .5rem;\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    color: white;\n}\n"])),"");function Le(){return Object(O.jsx)("div",{children:Object(O.jsxs)(Me,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)(Ee,{})]})})}var Ve,Me=m.b.div(Fe||(Fe=Object(u.a)(['\ndisplay: grid;\ngrid-template-columns: 150px 1fr 1fr;\ngrid-template-rows: 65px 1fr;\ngrid-template-areas:\n"header header header"\n"sidebar projectarea projectarea";\ngrid-gap: 0;\nbackground: white;\n'])));function ze(){var e=Object(h.f)(),n=Object(d.useState)({title:"",description:""}),t=Object(H.a)(n,2),r=t[0],i=t[1];function c(e){i(Object(V.a)(Object(V.a)({},r),{},Object(L.a)({},e.target.name,e.target.value)))}function a(e){return s.apply(this,arguments)}function s(){return(s=Object(F.a)(E.a.mark((function n(t){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,fetch("api/v1/projects",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r.title,description:r.description})});case 3:e.push("/projects");case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(O.jsxs)(Je,{children:[Object(O.jsx)("button",{className:"closeBtn",onClick:function(){return e.push("/projects")},children:" Close"}),Object(O.jsx)("h1",{children:"Add Project"}),Object(O.jsxs)("form",{onSubmit:a,children:[Object(O.jsx)("input",{name:"title",type:"text",value:r.title,onChange:c,placeholder:"Title"}),Object(O.jsx)("input",{name:"description",type:"text",value:r.description,onChange:c,placeholder:"Description"}),Object(O.jsx)("button",{onClick:a,className:"submitBtn",children:"Submit"})]})]})}var Ae,Je=m.b.div(Ve||(Ve=Object(u.a)([" \nposition: absolute;\ntop: 15%;\nleft: 14%;\nwidth: 80%;\nheight: 80%;\nbackground:#128DEB;\nborder-radius: 10px;\n\nform{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    padding:  .5rem 0;\n    margin-top: 5rem;\n    color: white;\n}\nlabel{\n    color: white;\n}\n\ninput[type=text]{\n    width: 50%;\n    padding: 1.5rem;\n    margin: .75rem;\n}\n\nselect{\n    padding: 1.5rem;\n    margin: .5rem;\n}\n\n.submitBtn{\n    width: 8rem;\n    padding: 1.5rem;\n    margin: .5rem;\n    background: #EB7012;\n    color: white;\n    border-radius: 5px;\n}\n.closeBtn{\n    background: #EB7012;\n    border-radius: 5px;\n    padding: 1rem;\n    margin: .5rem;\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    color: white;\n}\n"])));function Re(){return Object(O.jsx)("div",{children:Object(O.jsxs)(_e,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(S,{}),Object(O.jsx)(ze,{})]})})}var _e=m.b.div(Ae||(Ae=Object(u.a)(['\ndisplay: grid;\ngrid-template-columns: 150px 1fr 1fr;\ngrid-template-rows: 65px 1fr;\ngrid-template-areas:\n"header header header"\n"sidebar projectarea projectarea";\ngrid-gap: 0;\nbackground: white;\n'])));var Ue=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsx)(b.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{path:"/",exact:!0,component:we}),Object(O.jsx)(h.a,{path:"/createtickets",component:Le}),Object(O.jsx)(h.a,{path:"/addproject",component:Re}),Object(O.jsx)(h.a,{path:"/dashboard",component:ce}),Object(O.jsx)(h.a,{path:"/manageroles",component:oe}),Object(O.jsx)(h.a,{path:"/manageusers",component:je}),Object(O.jsx)(h.a,{path:"/projects",component:Oe}),Object(O.jsx)(h.a,{path:"/tickets",component:Z}),Object(O.jsx)(h.a,{path:"/register",component:Be})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(Ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.cb062906.chunk.js.map