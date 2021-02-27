(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{18:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),r=n(13),i=n.n(r),o=(n(18),n(9)),c=n.n(o),h=n(10),u=n(11),l=n(4),d=n(5),p=n(1),j=n(7),b=n(6),f=n(3),g=n.n(f),O=n(8),m=n(0),v=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(e){return t.props.handleRegistrationOrLogin(e,t.state)},children:[Object(m.jsx)("input",{type:"text",name:"username",value:this.state.username,placeholder:"username",onChange:this.handleInput,required:!0}),Object(m.jsx)("input",{type:"email",name:"email",value:this.state.email,placeholder:"email",onChange:this.handleInput,required:!0}),Object(m.jsx)("input",{type:"password",name:"password1",value:this.state.password1,placeholder:"password",onChange:this.handleInput,required:!0}),Object(m.jsx)("input",{type:"password",name:"password2",value:this.state.password2,placeholder:"confirm password",onChange:this.handleInput,required:!0}),Object(m.jsx)("button",{type:"submit",children:"Register"})]})})}}]),n}(a.Component),x=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={isEditing:!1,text:a.props.chat.text},a.handleInputEdit=a.handleInputEdit.bind(Object(p.a)(a)),a.handleEdit=a.handleEdit.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleEdit",value:function(t){13===t.keyCode&&(this.props.editChat(this.props.chat,this.state.text,this.props.chat.id),this.setState({isEditing:!1}))}},{key:"handleInputEdit",value:function(t){this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t,e=this,n=this.props.chat;return console.log("chat",n),Object(m.jsx)("li",{className:"chat-item",children:Object(m.jsxs)("div",{className:"chat-div",children:[Object(m.jsxs)("p",{children:["Said by ",null===(t=n.owner)||void 0===t?void 0:t.username]}),this.state.isEditing?Object(m.jsx)("input",{type:"text",name:"text",value:this.state.text,onChange:this.handleInputEdit,onKeyUp:this.handleEdit}):Object(m.jsxs)("p",{className:"chat-list-text",children:[" ",n.text," "]}),this.state.isEditing?null:Object(m.jsx)("button",{type:"button",onClick:function(){return e.setState({isEditing:!e.state.isEditing})},children:"Edit"}),Object(m.jsx)("button",{type:"button",onClick:function(){return e.props.removeChat(n)},children:"Delete"})]})})}}]),n}(a.Component);var y=function(t){var e=t.chats.map((function(e,n){return Object(m.jsx)(x,{chat:e,editChat:t.editChat,removeChat:t.removeChat},n)}));return console.log(t.chats),Object(m.jsxs)("ul",{className:"chat-list",children:[" ",e]})},C=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={text:"",username:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.addChats(this.state);var e={text:this.state.text,username:this.state.username};console.log("chat",e),fetch("".concat("/api/v1/chatapp/chat/","create/"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)}).then((function(t){if(!t.ok)throw new Error("Bad Post request");return t.json()})).then((function(t){return console.log("Success. Message created!")})).catch((function(t){return console.log("Error:",t)})).finally("I am always going to fire!")}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"intro",children:[Object(m.jsx)("p",{className:"introP",children:"Welcome to Chat app"}),Object(m.jsx)("p",{className:"rules",children:" Please add your username and a message! Once both are added, smash that add button. :)"})]}),Object(m.jsx)("div",{className:"form-div",children:Object(m.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",id:"chat-text",name:"text",value:this.state.text,onChange:this.handleInput,placeholder:"Message",required:!0}),Object(m.jsx)("label",{htmlFor:"chat-text"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",children:"Add Chat"})]})})]})}}]),n}(a.Component),k=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:function(e){return t.props.handleLogin(e,t.state)},children:[Object(m.jsx)("input",{type:"text",name:"username",value:this.state.username,placeholder:"username",onChange:this.handleInput,required:!0}),Object(m.jsx)("input",{type:"email",name:"email",value:this.state.email,placeholder:"email",onChange:this.handleInput,required:!0}),Object(m.jsx)("input",{type:"password",name:"password",value:this.state.password,placeholder:"password",onChange:this.handleInput,required:!0}),Object(m.jsx)("button",{type:"submit",children:"Login"})]}),Object(m.jsx)("form",{onSubmit:function(e){return t.props.handleLogOut(e,t.state)},children:Object(m.jsx)("button",{type:"submit",children:"LogOut"})})]})}}]),n}(a.Component),S=(n(21),"/api/v1/chatapp/chat/"),w=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={chats:[],isLoggedIn:!!g.a.get("Authorization")},a.addChats=a.addChats.bind(Object(p.a)(a)),a.editChat=a.editChat.bind(Object(p.a)(a)),a.removeChat=a.removeChat.bind(Object(p.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(p.a)(a)),a.handleLogin=a.handleLogin.bind(Object(p.a)(a)),a.handleLogOut=a.handleLogOut.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(S)).then((function(t){return t.json()})).then((function(e){console.log("response",e),t.setState({chats:e})}),(function(e){t.setState({error:e})}))}},{key:"addChats",value:function(t){var e=Object(u.a)(this.state.chats);e.push(t),this.setState({chats:e})}},{key:"editChat",value:function(t,e,n){var a=Object(u.a)(this.state.chats),s=a.indexOf(t);a[s].text=e,this.setState({chats:a});var r=t.text;console.log("CHATS",{text:r},"ID",n),fetch("".concat(S,"update/").concat(n,"/"),{method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({text:r})}).then((function(t){if(!t.ok)throw new Error("Bad Post request");return t.json()})).then((function(t){return console.log("Success. ChatApp created!")})).catch((function(t){return console.log("Error:",t)})).finally("I am always going to fire!")}},{key:"removeChat",value:function(t){var e=Object(u.a)(this.state.chats),n=e.indexOf(t);e.splice(n,1),this.setState({chats:e}),fetch("".concat(S,"remove/").concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)}).then((function(t){if(!t.ok)throw new Error("Bad Post request");return t.json()})).then((function(t){return console.log("Success. ChatApp created!")})).catch((function(t){return console.log("Error:",t)})).finally("I am always going to fire!")}},{key:"handleRegistration",value:function(){var t=Object(h.a)(c.a.mark((function t(e,n){var a,s,r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)},s=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/registration/",a);case 5:return r=t.sent,t.next=8,r.json().catch(s);case 8:i=t.sent,console.log(i),i.key&&(g.a.set("Authorization","Token ".concat(i.key)),this.setState({isLoggedIn:!0}));case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var t=Object(h.a)(c.a.mark((function t(e,n){var a,s,r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)},s=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/login/",a);case 5:return r=t.sent,t.next=8,r.json().catch(s);case 8:i=t.sent,console.log(i),i.key&&(g.a.set("Authorization","Token ".concat(i.key)),this.setState({isLoggedIn:!0}));case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleLogOut",value:function(){var t=Object(h.a)(c.a.mark((function t(e){var n,a,s,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),alert("logging out"),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}},a=function(t){return console.warn(t)},t.next=6,fetch("/rest-auth/logout/",n);case 6:return s=t.sent,t.next=9,s.json().catch(a);case 9:r=t.sent,console.log(r),g.a.remove("Authorization"),this.setState({isLoggedIn:!1});case 13:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(k,{handleLogin:this.handleLogin,handleLogOut:this.handleLogOut}),Object(m.jsx)(v,{handleRegistration:this.handleRegistration})]}),!0===this.state.isLoggedIn?Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{addChats:this.addChats}),Object(m.jsx)(y,{chats:this.state.chats,editChat:this.editChat,removeChat:this.removeChat})]}):Object(m.jsx)("div",{children:"Not logged in"})]})}}]),n}(a.Component),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),r(t),i(t)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),I()}},[[22,1,2]]]);
//# sourceMappingURL=main.296b0012.chunk.js.map