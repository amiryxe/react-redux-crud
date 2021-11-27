(this["webpackJsonpreact-redux-crud"]=this["webpackJsonpreact-redux-crud"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),r=n(2),d=n(4),o=n(11),l=n(12),u=n(3),j="ADD_TASK",b="DELETE_TASK",O="EDIT_TASK",h="IS_SHOW_ADD_TASK",p="IS_DONE_TASK",f="SHOW_MODE",x={taskList:[{id:1,title:"Task 1",date:"2020-01-01",description:"Task 1 description",isDone:!1}],isShowAddTask:!1,showMode:"all"};var k=Object(d.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(u.a)(Object(u.a)({},t),{},{taskList:[].concat(Object(l.a)(t.taskList),[e.payload])});case b:return Object(u.a)(Object(u.a)({},t),{},{taskList:t.taskList.filter((function(t){return t.id!==e.payload}))});case O:return Object(u.a)(Object(u.a)({},t),{},{taskList:t.taskList.map((function(t){return t.id===e.payload.id?e.payload:t}))});case h:return Object(u.a)(Object(u.a)({},t),{},{isShowAddTask:e.payload});case p:return Object(u.a)(Object(u.a)({},t),{},{taskList:t.taskList.map((function(t){return t.id===e.payload?Object(u.a)(Object(u.a)({},t),{},{isDone:!t.isDone}):t}))});case f:return Object(u.a)(Object(u.a)({},t),{},{showMode:e.payload});default:return t}}}),m=[o.a],y=Object(d.d)(k,{},Object(d.c)(d.a.apply(void 0,m),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t})),_=function(t){return function(e){e({type:j,payload:t})}},v=function(t){return function(e){e({type:b,payload:t})}},D=function(t){return function(e){e({type:h,payload:t})}},g=function(t){return function(e){e({type:f,payload:t})}},S=n(0);var w=Object(r.b)(null,{addTask:_})((function(){var t=Object(r.c)(),e=Object(r.d)((function(t){return t.tasks.taskList.length>0?t.tasks.taskList[t.tasks.taskList.length-1].id:0}));return Object(r.d)((function(t){return t.tasks.isShowAddTask}))?Object(S.jsxs)("form",{className:"tasks__add",onSubmit:function(n){n.preventDefault();var c={id:e+1,title:n.target.title.value,date:n.target.date.value,description:n.target.description.value,isDone:!1};c.title&&(t(_(c)),t(D(!1)),n.target.reset())},children:[Object(S.jsx)("h3",{children:"Add new task"}),Object(S.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(S.jsx)("input",{type:"text",name:"title",id:"title"}),Object(S.jsx)("label",{htmlFor:"date",children:"Date:"}),Object(S.jsx)("input",{type:"date",name:"date",id:"date"}),Object(S.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(S.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"3"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{className:"btn--success",style:{marginRight:".5rem"},children:"Save"}),Object(S.jsx)("button",{type:"button",onClick:function(){return t(D(!1))},children:"Cancel"})]})]}):""})),T=n(13);var N=Object(r.b)(null,{deleteTask:v})((function(t){var e=t.data,n=e.id,a=e.title,s=e.date,i=e.description,d=Object(r.c)(),o=Object(c.useState)(!1),l=Object(T.a)(o,2),u=l[0],j=l[1],b=Object(r.d)((function(t){return t.tasks.taskList.find((function(t){return t.id===n})).isDone}));return Object(S.jsx)("div",{className:"tasks__item ".concat(b?"tasks__item--done":""),children:u?Object(S.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e,c={id:n,title:t.target.title.value,date:t.target.date.value,description:t.target.description.value};d((e=c,function(t){t({type:O,payload:e})})),j(!1)},children:[Object(S.jsx)("input",{type:"text",defaultValue:a,name:"title"}),Object(S.jsx)("input",{type:"date",defaultValue:s,name:"date"}),Object(S.jsx)("textarea",{defaultValue:i,name:"description"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("button",{className:"btn--success",children:"Apply"}),Object(S.jsx)("button",{type:"button",onClick:function(){return j(!1)},children:"Cancel"})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h2",{children:a}),Object(S.jsx)("h3",{children:s}),Object(S.jsx)("p",{children:i}),Object(S.jsxs)("footer",{children:[Object(S.jsx)("button",{className:"btn--danger",onClick:function(){return function(t){d(v(t))}(n)},children:"Delete"}),Object(S.jsx)("button",{className:"btn--edit",onClick:function(){return j(!0)},children:"Edit"}),Object(S.jsx)("input",{type:"checkbox",defaultChecked:b,onChange:function(){return d(function(t){return function(e){e({type:p,payload:t})}}(n))}})]})]})})}));var L=function(){var t=Object(r.d)((function(t){return t.tasks.taskList}))||[],e=Object(r.d)((function(t){return t.tasks.showMode})),n=function(t){return"done"===e?t.filter((function(t){return t.isDone})):"undone"===e?t.filter((function(t){return!t.isDone})):t};return Object(S.jsx)("div",{className:"tasks",children:n(t).length>0?n(t).map((function(t){return Object(S.jsx)(N,{className:"tasks__item",data:t},t.id)})):Object(S.jsx)("p",{style:{padding:"3rem",textAlign:"center",width:"100%"},children:"No tasks yet"})})};function A(){var t=Object(r.c)();return Object(S.jsxs)("header",{className:"header",children:[Object(S.jsx)("h1",{children:"React redux CRUD"}),Object(S.jsx)("button",{onClick:function(){return t(D(!0))},className:"btn--success",children:"+ Add Task"})]})}function C(){var t=Object(r.c)(),e=Object(r.d)((function(t){return t.tasks.showMode}));return Object(S.jsxs)("div",{className:"tasks__filter",children:[Object(S.jsxs)("span",{children:[Object(S.jsx)("input",{type:"radio",name:"tasks_show",id:"all",onChange:function(){return t(g("all"))},defaultChecked:"all"===e}),Object(S.jsx)("label",{htmlFor:"all",children:"All tasks"})]}),Object(S.jsxs)("span",{children:[Object(S.jsx)("input",{type:"radio",name:"tasks_show",id:"done",onChange:function(){return t(g("done"))},defaultChecked:"done"===e}),Object(S.jsx)("label",{htmlFor:"done",children:"Done"})]}),Object(S.jsxs)("span",{children:[Object(S.jsx)("input",{type:"radio",name:"tasks_show",id:"undone",onChange:function(){return t(g("undone"))},defaultChecked:"undone"===e}),Object(S.jsx)("label",{htmlFor:"undone",children:"Undone"})]})]})}function E(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(A,{}),Object(S.jsx)(C,{}),Object(S.jsx)(w,{}),Object(S.jsx)(L,{})]})}n(25);var F=function(){return Object(S.jsx)(r.a,{store:y,children:Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(E,{})})})};i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(F,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6ffd5e27.chunk.js.map