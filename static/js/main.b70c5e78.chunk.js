(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,s){e.exports={list:"Statisctics_list__bgpDL",list__item:"Statisctics_list__item__2azLq"}},function(e,t,s){e.exports={list:"FeedbackOptions_list__3-Kfe",list__item:"FeedbackOptions_list__item__12kQq",btn:"FeedbackOptions_btn__2IQQo"}},,,function(e,t,s){e.exports={section:"Section_section__2mYr1",section__name:"Section_section__name__Labqc"}},,function(e,t,s){e.exports={message:"Notification_message__359yE"}},,,,,,function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),i=s(7),a=s.n(i),r=s(4),l=s(2),o=s.n(l),b=s(0),u=function(e){var t=e.good,s=e.neutral,c=e.bad,i=e.total,a=e.positivePercentage;return Object(b.jsx)(n.Fragment,{children:Object(b.jsxs)("ul",{className:o.a.list,children:[Object(b.jsxs)("li",{className:o.a.list__item,children:["Good: ",t]}),Object(b.jsxs)("li",{className:o.a.list__item,children:["Neutral: ",s]}),Object(b.jsxs)("li",{className:o.a.list__item,children:["Bad: ",c]}),Object(b.jsxs)("li",{className:o.a.list__item,children:["Total: ",i(t,s,c)]}),Object(b.jsxs)("li",{className:o.a.list__item,children:["Positive feedback: ",a(t,s,c)]})]})})},j=s(3),_=s.n(j),d=function(e){var t=e.options,s=e.onLeaveFeedback;return Object(b.jsx)("ul",{className:_.a.list,children:t.map((function(e){return Object(b.jsx)("li",{className:_.a.list__item,children:Object(b.jsx)("button",{type:"button",onClick:function(){return s(e)},className:_.a.btn,children:e})},e)}))})},m=s(8),O=s.n(m),h=function(e){var t=e.message;return Object(b.jsx)(n.Fragment,{children:Object(b.jsx)("p",{className:O.a.message,children:t})})},f=s(6),x=s.n(f),p=function(e){var t=e.title,s=e.children;return Object(b.jsxs)("div",{className:x.a.section,children:[Object(b.jsx)("h2",{className:x.a.section__name,children:t}),s]})};function g(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(0),a=Object(r.a)(i,2),l=a[0],o=a[1],j=Object(n.useState)(0),_=Object(r.a)(j,2),m=_[0],O=_[1],f=function(e,t,s){return e+t+s};return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(p,{title:"Please leave feedback",children:Object(b.jsx)(d,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":return c((function(e){return e+1}));case"neutral":return o((function(e){return e+1}));case"bad":return O((function(e){return e+1}));default:return}}})}),Object(b.jsx)(p,{title:"Statistics",children:f(s,l,m)>0?Object(b.jsx)(u,{good:s,neutral:l,bad:m,total:f,positivePercentage:function(e,t,s){return Math.round(100/((e+t+s)/e))+"%"}}):Object(b.jsx)(h,{message:"No feedback given"})})]})}a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.b70c5e78.chunk.js.map