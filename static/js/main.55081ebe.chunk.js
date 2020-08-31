(this["webpackJsonpkanban-hackathon"]=this["webpackJsonpkanban-hackathon"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(2),i=a.n(l),o=a(10),c=a(3),r=a(18),d=a(4),u=a(5),m=a(1),h=a(7),p=a(6),k=a(11),b=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){this.props.displayTaskDetails(!0,this.props.task.id)}},{key:"render",value:function(){var e=this;return s.a.createElement(k.b,{draggableId:this.props.task.id,index:this.props.index},(function(t,a){return s.a.createElement("div",Object.assign({onClick:e.handleClick,className:"\n              border\n              p-2\n              m-2\n              bg-light\n              card\n              ".concat(a.isDragging?"highlighted-task":"")},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),s.a.createElement("div",{className:"card-title"},e.props.task.title))}))}}]),a}(s.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={editTitle:!1,columnTitle:n.props.column.title},n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.deleteThisColumn=n.deleteThisColumn.bind(Object(m.a)(n)),n.handleContext=n.handleContext.bind(Object(m.a)(n)),n.onTitleChange=n.onTitleChange.bind(Object(m.a)(n)),n.onTitleClick=n.onTitleClick.bind(Object(m.a)(n)),n.onTitleSave=n.onTitleSave.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){var t=e.target.id;"column"===t.split("-")[0]&&this.props.addCard(t)}},{key:"onTitleClick",value:function(){this.setState({editTitle:!0})}},{key:"onTitleChange",value:function(e){this.setState({columnTitle:e.target.value})}},{key:"onTitleSave",value:function(e){e.preventDefault(),this.props.changeColumnTitle(this.props.column.id,this.state.columnTitle),this.setState({editTitle:!1})}},{key:"handleContext",value:function(e){e.preventDefault();var t=e.pageX,a=e.pageY;this.props.displayContext(!0,this.props.column.id,t,a)}},{key:"deleteThisColumn",value:function(){this.props.deleteColumn(this.props.column.id)}},{key:"render",value:function(){var e=this;return s.a.createElement(k.b,{draggableId:this.props.column.id,index:this.props.index},(function(t,a){return s.a.createElement("div",Object.assign({className:"\n          col-min\n          card\n          h-80\n          w-25\n          m-1\n          ".concat(a.isDragging?"highlighted-task":"","\n          "),onContextMenu:e.handleContext,ref:t.innerRef},t.draggableProps),s.a.createElement("div",Object.assign({className:"w-100 border-bottom d-flex justify-content-between"},t.dragHandleProps),e.state.editTitle?s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{value:e.state.columnTitle,onChange:e.onTitleChange}),s.a.createElement("button",{className:"btn btn-success",onClick:e.onTitleSave},"Save")):s.a.createElement("h3",{className:"pt-2 pl-2",onClick:e.onTitleClick},e.props.column.title),s.a.createElement("div",{className:"m-2"},s.a.createElement("button",{id:e.props.column.id,className:"btn btn-primary",onClick:e.handleClick},s.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})),e.props.deleteColumnButton&&s.a.createElement("button",{className:"btn btn-outline-danger ml-2",onClick:e.deleteThisColumn},s.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})))),s.a.createElement(k.c,{droppableId:e.props.column.id},(function(t,a){return s.a.createElement("div",Object.assign({className:"\n              tasklist\n              h-80\n              p-1\n              ".concat(a.isDraggingOver?"bg-info":"","\n              "),ref:t.innerRef},t.droppableProps),e.props.tasks.map((function(t,a){return s.a.createElement(b,{key:t.id,task:t,index:a,displayTaskDetails:e.props.displayTaskDetails})})),t.placeholder)})))}))}}]),a}(s.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleDelete=n.handleDelete.bind(Object(m.a)(n)),n.state={title:n.props.task.title,content:n.props.task.content},n}return Object(u.a)(a,[{key:"handleClick",value:function(e){"overlay"===e.target.id&&this.closeModal(),"save"===e.target.id&&(this.props.changeTaskData(this.props.task.id,this.state.title,this.state.content),this.closeModal())}},{key:"handleDelete",value:function(){this.closeModal(),this.props.deleteTask(this.props.task.id)}},{key:"closeModal",value:function(){this.props.displayTaskDetails(!1,null)}},{key:"handleChange",value:function(e){var t=e.target.id,a=e.target.value;this.setState(Object(o.a)({},t,a))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"overlay",onClick:this.handleClick,style:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"black",opacity:.5,zIndex:99}}),s.a.createElement("div",{style:{position:"fixed",zIndex:100,top:"50%",left:"50%",right:"50%",transform:"translate(-50%, -50%)"},className:"card w-75",tabIndex:"0"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",null,"Title:"),s.a.createElement("input",{type:"text",id:"title",className:"form-control-lg mb-1",value:this.state.title,onChange:this.handleChange}),s.a.createElement("h5",null,"Description:"),s.a.createElement("textarea",{className:"form-control text-dark mb-1",value:this.state.content,placeholder:"Type here to add a description",onChange:this.handleChange,id:"content"}),s.a.createElement("button",{id:"save",onClick:this.handleClick,className:"btn btn-primary m-1"},"Save"),s.a.createElement("button",{className:"btn btn-danger m-1",onClick:this.handleDelete},"Delete"))))}}]),a}(s.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){var t=e.target.id.split("_"),a=this.props.id;"moveto"===t[0]&&(this.props.moveTasksColumn(a,t[1]),this.props.displayContext(!1,null,{}))}},{key:"render",value:function(){var e=this.props.pos.xPos,t=this.props.pos.yPos,a=this.props.id,n=this.props.columns,l=[];for(var i in n){var o=n[i].title;n[i]!==n[a]&&l.push(s.a.createElement("li",{key:i,id:"moveto_".concat(i),className:"list-group-item"},o))}return s.a.createElement("div",{onClick:this.handleClick,id:"context",className:"card",style:{position:"fixed",top:t,left:e,zIndex:55}},s.a.createElement("div",{className:"p-2"},s.a.createElement("h6",null,n[a].title),s.a.createElement("p",null,"Move All Cards To:"),s.a.createElement("ul",{className:"list-group"},l.map((function(e){return e})))))}}]),a}(s.a.Component),g=a(8),y=(a(31),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onDragEnd=function(e){var t,a=e.destination,s=e.source,l=e.draggableId,i=e.type;if(a&&(a.droppableId!==s.droppableId||a.index!==s.index)){if("column"===i){var d=Object(r.a)(n.state.columnOrder);return d.splice(s.index,1),d.splice(a.index,0,l),void n.setState({columnOrder:d})}var u=n.state.columns[s.droppableId],m=n.state.columns[a.droppableId];if(u!==m){var h=Array.from(u.taskIds);h.splice(s.index,1);var p=Object(c.a)(Object(c.a)({},u),{},{taskIds:h}),k=Array.from(m.taskIds);k.splice(a.index,0,l);var b=Object(c.a)(Object(c.a)({},m),{},{taskIds:k}),v={columns:Object(c.a)(Object(c.a)({},n.state.columns),{},(t={},Object(o.a)(t,p.id,p),Object(o.a)(t,b.id,b),t))};n.setState(v)}else{var C=Array.from(u.taskIds);C.splice(s.index,1),C.splice(a.index,0,l);var f=Object(c.a)(Object(c.a)({},u),{},{taskIds:C});n.setState({columns:Object(c.a)(Object(c.a)({},n.state.columns),{},Object(o.a)({},f.id,f))})}}},n.addCard=n.addCard.bind(Object(m.a)(n)),n.addColumn=n.addColumn.bind(Object(m.a)(n)),n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.displayTaskDetails=n.displayTaskDetails.bind(Object(m.a)(n)),n.changeTaskData=n.changeTaskData.bind(Object(m.a)(n)),n.showDeleteColumn=n.showDeleteColumn.bind(Object(m.a)(n)),n.deleteColumn=n.deleteColumn.bind(Object(m.a)(n)),n.deleteTask=n.deleteTask.bind(Object(m.a)(n)),n.displayContext=n.displayContext.bind(Object(m.a)(n)),n.moveTasksColumn=n.moveTasksColumn.bind(Object(m.a)(n)),n.changeColumnTitle=n.changeColumnTitle.bind(Object(m.a)(n)),n.state={taskSerial:5,tasks:{"task-1":{id:"task-1",title:"Take out the garbage.",content:""},"task-2":{id:"task-2",title:"Charge my phone.",content:""},"task-3":{id:"task-3",title:"Complete the hackathon.",content:""},"task-4":{id:"task-4",title:"Get a job.",content:""}},columnSerial:4,columns:{"column-1":{id:"column-1",title:"To Do",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"In Progress",taskIds:[]},"column-3":{id:"column-3",title:"Done",taskIds:[]}},columnOrder:["column-1","column-2","column-3"],taskDetails:{display:!1,taskId:null},deleteColumnButton:!1,displayContext:{display:!1,contextId:null,pos:{}}},n}return Object(u.a)(a,[{key:"changeTaskData",value:function(e,t,a){var n=JSON.parse(JSON.stringify(this.state.tasks)),s={id:e,title:t,content:a};n[e]=s,this.setState({tasks:n},(function(){return g.c.success("Task Updated!")}))}},{key:"changeColumnTitle",value:function(e,t){var a=Object(c.a)({},this.state.columns);a[e].title=t,this.setState({columns:a}),g.c.success("Column Title Updated!")}},{key:"displayContext",value:function(e,t,a,n){this.setState({displayContext:{display:e,contextId:t,pos:{xPos:a,yPos:n}}})}},{key:"componentDidUpdate",value:function(e){if(this.state!==e){var t=JSON.stringify(this.state);localStorage.savedState=t}}},{key:"displayTaskDetails",value:function(e,t){var a={display:e,taskId:t};this.setState({taskDetails:a})}},{key:"deleteTask",value:function(e){var t=JSON.parse(JSON.stringify(this.state.tasks));delete t[e];var a=JSON.parse(JSON.stringify(this.state.columns));for(var n in a){var s=a[n].taskIds.findIndex((function(t){return t===e}));if(s>=0){a[n].taskIds.splice(s,1);break}}this.setState({tasks:t,columns:a},(function(){return g.c.error("Task Deleted :(")}))}},{key:"moveTasksColumn",value:function(e,t){var a=JSON.parse(JSON.stringify(this.state.columns)),n=a[e].taskIds;a[e].taskIds=[];var s=a[t].taskIds.concat(n);a[t].taskIds=s,this.setState({columns:a})}},{key:"componentDidMount",value:function(){var e=localStorage.savedState;if(e)e=JSON.parse(e),this.setState({taskSerial:e.taskSerial,tasks:e.tasks,columnSerial:e.columnSerial,columns:e.columns,columnOrder:e.columnOrder,taskDetails:{display:!1,taskId:null},displayContext:{display:!1,contextId:null,pos:{}}});else{var t=JSON.stringify(this.state);localStorage.savedState=t}}},{key:"addCard",value:function(e){var t=this.state.taskSerial,a=t+1,n=JSON.parse(JSON.stringify(this.state.tasks));n["task-".concat(t)]={id:"task-".concat(t),title:"Click to edit New Card",content:""};var s=JSON.parse(JSON.stringify(this.state.columns));s[e].taskIds.unshift("task-".concat(t)),this.setState({taskSerial:a,tasks:n,columns:s},(function(){return g.c.info("New Task Added!")}))}},{key:"handleClick",value:function(e){"add-column"===e.target.id&&this.addColumn();for(var t=!1,a=e.target;a;){if("context"===a.id){t=!0;break}a=a.parentNode}t||this.setState({displayContext:{display:!1,contextId:null,pos:{}}})}},{key:"deleteColumn",value:function(e){var t=JSON.parse(JSON.stringify(this.state.columns)),a=JSON.parse(JSON.stringify(this.state.tasks)),n=Object(r.a)(this.state.columnOrder),s=n.findIndex((function(t){return t===e}));n.splice(s,1);for(var l=t[e].taskIds,i=0;i<l.length;i++)delete a[l[i]];delete t[e],this.setState({columns:t,tasks:a,columnOrder:n},(function(){return g.c.error("Column Deleted :(")}))}},{key:"showDeleteColumn",value:function(){this.state.deleteColumnButton||g.c.warn("Columns can now be deleted?!"),this.setState((function(e){return{deleteColumnButton:!e.deleteColumnButton}}))}},{key:"addColumn",value:function(){var e=this.state.columnSerial,t=e+1,a=JSON.parse(JSON.stringify(this.state.columns)),n=this.state.columnOrder.splice(0);a["column-".concat(e)]={id:"column-".concat(e),title:"New Column",taskIds:[]},n.push("column-".concat(e)),this.setState({columns:a,columnSerial:t,columnOrder:n},(function(){return g.c.info("New Column Added!")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"app overflow-x",onClick:this.handleClick},this.state.displayContext.display?s.a.createElement(f,{moveTasksColumn:this.moveTasksColumn,displayContext:this.displayContext,columns:this.state.columns,pos:this.state.displayContext.pos,id:this.state.displayContext.contextId}):s.a.createElement(s.a.Fragment,null),s.a.createElement("header",null,s.a.createElement("nav",{className:"\n              navbar\n              navbar-light\n              nav-z\n              bg-dark\n              d-flex\n              navbar-horizontal-fixed\n              justify-content-between\n              align-items-center\n            ",id:"navbar"},s.a.createElement("h2",{className:"text-white navbar-brand"},"Kanban"),s.a.createElement("div",null,s.a.createElement("h5",{className:"text-white navbar-brand"},"Add New Column"),s.a.createElement("button",{className:"btn btn-primary",id:"add-column"},s.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})),s.a.createElement("button",{className:"btn btn-danger ml-3",onClick:this.showDeleteColumn},s.a.createElement("h5",null,"Toggle Column Delete")))),s.a.createElement("div",{className:"navbar-space"})),this.state.taskDetails.display&&s.a.createElement(C,{changeTaskData:this.changeTaskData,displayTaskDetails:this.displayTaskDetails,task:this.state.tasks[this.state.taskDetails.taskId],deleteTask:this.deleteTask}),s.a.createElement("div",{className:"p-3 app"},s.a.createElement(k.a,{onDragEnd:this.onDragEnd},s.a.createElement(k.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(t){return s.a.createElement("div",Object.assign({className:"row flex-nowrap"},t.droppableProps,{ref:t.innerRef}),e.state.columnOrder.map((function(t,a){var n=e.state.columns[t],l=n.taskIds.map((function(t){return e.state.tasks[t]}));return s.a.createElement(v,{displayContext:e.displayContext,addCard:e.addCard,key:n.id,column:n,tasks:l,index:a,displayTaskDetails:e.displayTaskDetails,deleteColumn:e.deleteColumn,deleteColumnButton:e.state.deleteColumnButton,changeColumnTitle:e.changeColumnTitle})})),t.placeholder)}))))),s.a.createElement(g.b,{autoClose:1500,position:"bottom-right",hideProgressBar:!0,transition:g.a}))}}]),a}(s.a.Component));a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.55081ebe.chunk.js.map