(this["webpackJsonpreact-redux-crud"]=this["webpackJsonpreact-redux-crud"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(6),i=n.n(s),r=n(2),d=n(4),u=n(11),j=n(12),l=n(3),o="ADD_TASK",b="DELETE_TASK",O="EDIT_TASK",p={taskList:[{id:1,title:"Task 1",date:"2020-01-01",description:"Task 1 description"}]};var x=Object(d.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(l.a)(Object(l.a)({},t),{},{taskList:[].concat(Object(j.a)(t.taskList),[e.payload])});case b:return Object(l.a)(Object(l.a)({},t),{},{taskList:t.taskList.filter((function(t){return t.id!==e.payload}))});case O:return Object(l.a)(Object(l.a)({},t),{},{taskList:t.taskList.map((function(t){return t.id===e.payload.id?e.payload:t}))});default:return t}}}),f=[u.a],h=Object(d.d)(x,{},Object(d.c)(d.a.apply(void 0,f),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t})),k=function(t){return function(e){e({type:o,payload:t})}},v=function(t){return function(e){e({type:b,payload:t})}},m=n(1);var y=Object(r.b)(null,{addTask:k})((function(){var t=Object(r.c)(),e=Object(r.d)((function(t){return t.tasks.taskList.length>0?t.tasks.taskList[t.tasks.taskList.length-1].id:0}));return Object(m.jsxs)("form",{className:"tasks__add",onSubmit:function(n){n.preventDefault();var a={id:e+1,title:n.target.title.value,date:n.target.date.value,description:n.target.description.value};t(k(a)),n.target.reset()},children:[Object(m.jsx)("h3",{children:"Add new task"}),Object(m.jsx)("input",{type:"text",name:"title"}),Object(m.jsx)("input",{type:"date",name:"date"}),Object(m.jsx)("textarea",{name:"description",cols:"30",rows:"3"}),Object(m.jsx)("button",{children:"Save"})]})})),_=n(13);var g=Object(r.b)(null,{deleteTask:v})((function(t){var e=t.data,n=e.id,c=e.title,s=e.date,i=e.description,d=Object(r.c)(),u=Object(a.useState)(!1),j=Object(_.a)(u,2),l=j[0],o=j[1];return Object(m.jsx)("div",{className:"tasks__item",children:l?Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e,a={id:n,title:t.target.title.value,date:t.target.date.value,description:t.target.description.value};d((e=a,function(t){t({type:O,payload:e})})),o(!1)},children:[Object(m.jsx)("input",{type:"text",defaultValue:c,name:"title"}),Object(m.jsx)("input",{type:"date",defaultValue:s,name:"date"}),Object(m.jsx)("textarea",{defaultValue:i,name:"description"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn--success",children:"Apply"}),Object(m.jsx)("button",{type:"button",onClick:function(){return o(!1)},children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:c}),Object(m.jsx)("h3",{children:s}),Object(m.jsx)("p",{children:i}),Object(m.jsx)("button",{className:"btn--danger",onClick:function(){return function(t){d(v(t))}(n)},children:"Delete"}),Object(m.jsx)("button",{className:"btn--edit",onClick:function(){return o(!0)},children:"Edit"})]})})}));var E=function(){var t=Object(r.d)((function(t){return t.tasks.taskList}))||[];return Object(m.jsx)("div",{className:"tasks",children:t.length>0?t.map((function(t){return Object(m.jsx)(g,{className:"tasks__item",data:t},t.id)})):Object(m.jsx)("p",{style:{padding:"3rem",textAlign:"center",width:"100%"},children:"No tasks yet"})})};function L(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{}),Object(m.jsx)(E,{})]})}n(25);var N=function(){return Object(m.jsx)(r.a,{store:h,children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(L,{})})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.edcbbfa5.chunk.js.map