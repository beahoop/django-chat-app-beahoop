(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{18:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),i=n(13),o=n.n(i),c=(n(18),n(10)),r=n.n(c),l=n(11),h=n(9),u=n(4),d=n(5),p=n(1),j=n(7),m=n(6),b=n(3),g=n.n(b),f=n(8),O=n(0),v=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{className:"regform",onSubmit:function(e){return t.props.handleRegistrationOrLogin(e,t.state)},children:[Object(O.jsx)("input",{type:"text",name:"username",value:this.state.username,placeholder:"username",onChange:this.handleInput,required:!0}),Object(O.jsx)("input",{type:"email",name:"email",value:this.state.email,placeholder:"email",onChange:this.handleInput,required:!0}),Object(O.jsx)("input",{type:"password",name:"password1",value:this.state.password1,placeholder:"password",onChange:this.handleInput,required:!0}),Object(O.jsx)("input",{type:"password",name:"password2",value:this.state.password2,placeholder:"confirm password",onChange:this.handleInput,required:!0}),Object(O.jsx)("button",{type:"submit",children:"Register"})]})})}}]),n}(a.Component),x=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={isEditing:!1,text:a.props.chat.text},a.handleInputEdit=a.handleInputEdit.bind(Object(p.a)(a)),a.handleEdit=a.handleEdit.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleEdit",value:function(t){13===t.keyCode&&(this.props.editChat(this.props.chat,this.state.text,this.props.chat.id),this.setState({isEditing:!1}))}},{key:"handleInputEdit",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t,e=this,n=this.props.chat;return console.log("chat",n),Object(O.jsx)("li",{className:"chat-item",children:Object(O.jsxs)("div",{className:"chat-div",children:[Object(O.jsxs)("p",{children:[null===(t=n.owner)||void 0===t?void 0:t.username,":"]}),this.state.isEditing?null:Object(O.jsx)("button",{type:"button",onClick:function(){return e.setState({isEditing:!e.state.isEditing})},children:Object(O.jsx)("i",{className:"fas fa-edit"})}),Object(O.jsx)("button",{type:"button",onClick:function(){return e.props.removeChat(n)},children:Object(O.jsx)("i",{className:"fas fa-trash-alt"})}),this.state.isEditing?Object(O.jsx)("input",{type:"text",name:"text",value:this.state.text,onChange:this.handleInputEdit,onKeyUp:this.handleEdit}):Object(O.jsxs)("span",{className:"chat-list-text",children:[" ",n.text," "]})]})})}}]),n}(a.Component);var y=function(t){var e=t.chats.filter((function(e){return e.room===t.roomSelection?(console.log("matchChatsWithRooms",e.room),e):console.log("what is this?",e.room)})).map((function(e,n){return Object(O.jsx)(x,{chat:e,editChat:t.editChat,removeChat:t.removeChat},n)}));return Object(O.jsxs)("ul",{className:"chatList",children:[" ",e]})},C=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={text:"",room:a.props.roomSelection},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n={text:this.state.text,room:this.props.roomSelection};console.log("CHAT I CREATED",n,"ROOM ID",1),fetch("".concat("/api/v1/chatapp/chat/","create/"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)}).then((function(t){if(!t.ok)throw new Error("Bad Post request");return t.json()})).then((function(t){e.props.addChats(t),console.log("Success. Message created!",t)})).catch((function(t){return console.log("Error:",t)})).finally("I am always going to fire!"),this.setState({text:""})}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"chatForm",children:Object(O.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",id:"chat-text",name:"text",value:this.state.text,onChange:this.handleInput,placeholder:"Message",required:!0}),Object(O.jsx)("label",{htmlFor:"chat-text"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Add Chat"})]})})})}}]),n}(a.Component),k=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={title:"",rooms:[],roomSelection:1},a.filterRoom=a.filterRoom.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/chatapp/room/").then((function(t){return t.json()})).then((function(e){console.log("ROOMS",e),t.setState({rooms:e})}),(function(e){t.setState({error:e})}))}},{key:"addRooms",value:function(t){var e=Object(h.a)(this.state.title),n=Object(h.a)(this.state.rooms);console.log("HERE title",e,"room",n),e.push(e),this.setState({title:e})}},{key:"handleInput",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n={title:this.state.title};console.log("title",n),fetch("/api/v1/chatapp/room/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)}).then((function(t){if(!t.ok)throw new Error("Bad Post request");return t.json()})).then((function(t){e.addRooms(t),console.log("Success. Message created!",t,"title",t.room)})).catch((function(t){return console.log("Error:",t)})).finally("I am always going to fire!"),this.setState({title:""})}},{key:"filterRoom",value:function(t){var e=t.target.dataset.room;this.setState({roomSelection:e}),console.log("RoomType",e)}},{key:"render",value:function(){var t=this,e=this.state.rooms.map((function(e,n){return Object(O.jsx)("li",{children:Object(O.jsxs)("button",{className:"room-button",onClick:t.filterRoom,"data-room":e.title,children:["  ",e.title," "]})},n)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("ul",{className:"roomNav-Choice",children:[e,Object(O.jsx)("li",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",id:"chat-title",name:"title",value:this.state.title,onChange:this.handleInput,placeholder:"New Room"}),Object(O.jsx)("label",{htmlFor:"chat-title"}),Object(O.jsx)("button",{type:"submit",children:"Add Room"})]})})]}),Object(O.jsxs)("div",{className:"chatDisplay",children:[Object(O.jsx)(C,{roomSelection:this.state.roomSelection,rooms:this.state.rooms,addChats:this.props.addChats}),Object(O.jsx)(y,{roomSelection:this.state.roomSelection,chats:this.props.chats,editChat:this.props.editChat,removeChat:this.props.removeChat})]})]})}}]),n}(a.Component),S=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this;return Object(O.jsxs)(O.Fragment,{children:[!1===this.props.isLoggedIn?Object(O.jsxs)("form",{className:"loginform",onSubmit:function(e){return t.props.handleLogin(e,t.state)},children:[Object(O.jsx)("button",{type:"submit",children:"Login"})," ",Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"username",value:this.state.username,placeholder:"username",onChange:this.handleInput,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"email",name:"email",value:this.state.email,placeholder:"email",onChange:this.handleInput,required:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"password",name:"password",value:this.state.password,placeholder:"password",onChange:this.handleInput,required:!0}),Object(O.jsx)("br",{})]}):null,!0===this.props.isLoggedIn?Object(O.jsx)("form",{className:"logoutform",onSubmit:function(e){return t.props.handleLogOut(e,t.state)},children:Object(O.jsx)("button",{type:"submit",children:"LogOut"})}):null]})}}]),n}(a.Component),I=(n(21),"/api/v1/chatapp/chat/"),w=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={chats:[],isLoggedIn:!!g.a.get("Authorization"),clickLogin:!1,clickRegister:!1},a.addChats=a.addChats.bind(Object(p.a)(a)),a.editChat=a.editChat.bind(Object(p.a)(a)),a.removeChat=a.removeChat.bind(Object(p.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(p.a)(a)),a.handleLogin=a.handleLogin.bind(Object(p.a)(a)),a.handleLogOut=a.handleLogOut.bind(Object(p.a)(a)),a.clickLogin=a.clickLogin.bind(Object(p.a)(a)),a.clickRegister=a.clickRegister.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(I)).then((function(t){return t.json()})).then((function(e){console.log("response",e),t.setState({chats:e})}),(function(e){t.setState({error:e})}))}},{key:"addChats",value:function(t){var e=Object(h.a)(this.state.chats);console.log("YES CHAT",t),e.push(t),this.setState({chats:e})}},{key:"editChat",value:function(t,e,n){var a={chats:Object(h.a)(this.state.chats)},s=a.indexOf(t);a[s].text=e,this.setState({chats:a});var i=t.text;console.log("CHATS",{text:i},"ID",n),fetch("".concat(I,"update/").concat(n,"/"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({text:i})}).then((function(t){if(!t.ok)throw new Error("Bad Post request");return t.json()})).then((function(t){return console.log("Success. ChatApp created!")})).catch((function(t){return console.log("Error:",t)})).finally("I am always going to fire!")}},{key:"removeChat",value:function(t){var e=Object(h.a)(this.state.chats),n=e.indexOf(t);e.splice(n,1),this.setState({chats:e}),fetch("".concat(I,"remove/").concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}}).then((function(t){if(!t.ok)throw new Error("Bad Post request")})).catch((function(t){return console.log("Error:",t)})).finally("I am always going to fire!")}},{key:"handleRegistration",value:function(){var t=Object(l.a)(r.a.mark((function t(e,n){var a,s,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)},s=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/registration/",a);case 5:return i=t.sent,t.next=8,i.json().catch(s);case 8:o=t.sent,console.log(o),o.key&&(g.a.set("Authorization","Token ".concat(o.key)),this.setState({isLoggedIn:!0}));case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var t=Object(l.a)(r.a.mark((function t(e,n){var a,s,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)},s=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/login/",a);case 5:return i=t.sent,t.next=8,i.json().catch(s);case 8:o=t.sent,console.log(o),o.key&&(g.a.set("Authorization","Token ".concat(o.key)),this.setState({isLoggedIn:!0}));case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleLogOut",value:function(){var t=Object(l.a)(r.a.mark((function t(e){var n,a,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),alert("logging out"),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}},a=function(t){return console.warn(t)},t.next=6,fetch("/rest-auth/logout/",n);case 6:return s=t.sent,t.next=9,s.json().catch(a);case 9:i=t.sent,console.log(i),g.a.remove("Authorization"),this.setState({isLoggedIn:!1});case 13:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"clickLogin",value:function(){var t=this.state.clickLogin;!1===t?this.setState({clickLogin:!0}):!0===t&&this.setState({clickLogin:!1})}},{key:"clickRegister",value:function(){var t=this.state.clickRegister;!1===t?this.setState({clickRegister:!0}):!0===t&&this.setState({clickRegister:!1})}},{key:"render",value:function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("nav",{className:"nav-top",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:" ChadTime "}),Object(O.jsx)("li",{className:"login",onClick:this.clickLogin,children:!0===this.state.isLoggedIn?"LogOut":"Login"}),Object(O.jsx)("li",{className:"Register",onClick:this.clickRegister,children:!1===this.state.isLoggedIn?"Register":null})]})}),!0===this.state.clickLogin?Object(O.jsx)(S,{className:"loginform",isLoggedIn:this.state.isLoggedIn,handleLogin:this.handleLogin,handleLogOut:this.handleLogOut}):null,!0===this.state.clickRegister?Object(O.jsx)(v,{handleRegistration:this.handleRegistration}):null,Object(O.jsxs)("div",{className:"top-div",children:[Object(O.jsx)("p",{className:"chadTime",children:" Welcome to ChadTime"}),Object(O.jsx)("p",{className:"tagline",children:" A play on chat time but yanno for Chad"})]})]}),!0===this.state.isLoggedIn?Object(O.jsx)("div",{className:"roomAndChatDisplay",children:Object(O.jsx)(k,{className:"room",chats:this.state.chats,roomChoices:this.state.roomChoices,roomSelection:this.state.roomSelection,addChats:this.addChats,editChat:this.editChat,removeChat:this.removeChat})}):null]})}}]),n}(a.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),s(t),i(t),o(t)}))};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),L()}},[[22,1,2]]]);
//# sourceMappingURL=main.2890ded6.chunk.js.map