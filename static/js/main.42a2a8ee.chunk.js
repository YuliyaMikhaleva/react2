(this.webpackJsonphomework1=this.webpackJsonphomework1||[]).push([[0],{143:function(e,t,n){e.exports={app:"layout_app__26Bxy",header:"layout_header__nBV4b",headerTitle:"layout_headerTitle__STGgR",message:"layout_message__uyW6r",buttonMessage:"layout_buttonMessage__1igWz"}},216:function(e,t,n){"use strict";n.r(t);var a=n(22),s=n(148),c=n(2),r=n.n(c),o=n(28),i=n.n(o),l=n(26),u=n(29),b=n(34),d=n(137),j=n(147).a.initializeApp({apiKey:"AIzaSyCishWgMKqs8cs0D_kgmB2GN9GaAi_TMzk",authDomain:"gb-chatmy.firebaseapp.com",databaseURL:"https://gb-chatmy-default-rtdb.europe-west1.firebasedatabase.app",projectId:"gb-chatmy",storageBucket:"gb-chatmy.appspot.com",messagingSenderId:"241893539443",appId:"1:241893539443:web:59c95375ff81cb205fb406",measurementId:"G-BJEFE7G8GR"}),h=j.database(),p=n(15),m=n(21),g=n(252),O=n(244),f=n(245),x=n(24),v=n(46),_="@conversations/start handle change value",y="@conversations/success handle change value",N="@conversations/error handle change value",k="@conversations/clear message value",w="@conversations/start add room",C="@conversations/success add room",E="@conversations/error add room",L="@conversations/delete room",T="@conversations/edit name room",A="@gists/start get conversation from fb",I="@gists/success get conversation from fb",P="@gists/error get conversation from fb",S={conversations:[],conversationsPending:!1,conversationsError:null},D=function(e,t){return{type:y,payload:{value:e,roomId:t}}},M=function(e){return{type:k,payload:e}},B=function(e,t){return{type:T,payload:{oldTitleId:e,newTitle:t}}},q=n(0),W=n.n(q),R=n(4),V=n(98),F=n.n(V),G=function(){return function(e,t,n){var a=n.getConversationsApi;e({type:A}),a().then((function(t){var n=[];t.forEach((function(e){n.push(e.val())})),e(function(e){return{type:I,payload:e}}(n))})).catch((function(t){e({type:P,payload:t}),console.log(t)}))}},X=F()(function(){var e=Object(R.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),5e3),J=n(6),Q="@messages/send message start",U="@messages/send message success",z="@messages/send message error",K="@messages/edit message",Y="@gists/start get messages from fb",H="@gists/success get messages from fb",Z="@gists/error get messages from fb",$={messages:{},messagesPending:!1,messagesError:null},ee=function(e,t){return{type:U,payload:{message:e,roomId:t},meta:{delay:500}}},te=function(){return function(e,t,n){(0,n.getMessagesApi)().then((function(t){e({type:Y});var n={};t.forEach((function(e){console.log(e),n[e.key]=Object.values(e.val())})),console.log("messages",n),e(function(e){return{type:H,payload:e}}(n))})).catch((function(t){e({type:Z,payload:t}),console.log(t)}))}},ne=n(42),ae=n.n(ne),se=n(138),ce=n.n(se),re=n(47),oe=n.n(re),ie=n(7);function le(e){var t=e.id,n=e.author,a=e.message,s=e.date,c=Object(l.b)(),r=Object(b.h)().roomId,o=function(e,t){var n=prompt("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:",t);c(function(e,t,n){return{type:K,payload:{oldMessageId:e,roomId:t,newMessage:n}}}(e,r,n))};return Object(ie.jsx)("div",{children:Object(ie.jsxs)("div",{className:ce()(oe.a.blockMessage,Object(J.a)({},oe.a.blockMessageBot,"bot"===n)),children:[Object(ie.jsx)("p",{className:oe.a.iconEdit,onClick:function(){return o(t,a)},children:Object(ie.jsx)("i",{className:"fa fa-edit"})}),Object(ie.jsxs)("p",{className:oe.a.textMessage,children:[Object(ie.jsx)("span",{className:oe.a.userName,children:n}),": ",a," "]}),Object(ie.jsx)("p",{className:oe.a.date,children:"".concat(s)})]})})}var ue=Object(m.a)({root:{"& label.Mui-focused":{color:"black"},"& .MuiInput-underline:after":{borderBottomColor:"black"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#b2dfee",border:"3 px solid #b2dfee"},"&:hover fieldset":{borderColor:"#b2dfee",backgroundColor:"#b2dfee",opacity:"30%"},"&.Mui-focused fieldset":{borderColor:"#b2dfee"}}}})(g.a),be=function(e){e.sendMessageFromBot;var t=Object(l.c)((function(e){return e.messages})),n=t.messages,a=t.messagesPending,s=t.messagesError,r=Object(l.b)(),o=Object(c.useRef)(null),i=Object(c.useRef)(null),u=Object(b.h)().roomId,d=Object(l.c)((function(e){return e.messages.messages[u]||[]})),j=Object(l.c)((function(e){var t;return(null===(t=e.conversations.conversations.find((function(e){return e.title===u})))||void 0===t?void 0:t.value)||""}));console.log(j);var h=function(){j&&r(function(e,t){return function(){var n=Object(R.a)(W.a.mark((function n(a,s,c){var r,o;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.sendMessagesApi,n.prev=1,a({type:Q}),n.next=5,r(t,e);case 5:o=n.sent,console.log(o),a(ee(e,t)),a(M(t)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),a((s=n.t0,{type:z,payload:s})),console.log("\u041e\u0428\u0418\u0411\u041a\u0410",n.t0.message);case 15:case"end":return n.stop()}var s}),n,null,[[1,11]])})));return function(e,t,a){return n.apply(this,arguments)}}()}({author:"User",message:j},u))};return Object(c.useEffect)((function(){return o.current.focus(),870<i.current.scrollHeight&&window.scrollTo(0,9999),function(){clearTimeout(undefined),console.log("\u0442\u0430\u0439\u043c\u0435\u0440 \u043e\u0447\u0438\u0449\u0435\u043d")}}),[d]),s?Object(ie.jsx)("h1",{children:"ooooopppssss..."}):(n&&console.log(n),Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsxs)("div",{className:oe.a.chat,style:{overflow:scroll},ref:i,children:[Object(ie.jsx)("div",{className:oe.a.message,children:d.map((function(e,t){return Object(ie.jsx)(le,Object(p.a)(Object(p.a)({},e),{},{date:e.date}),t)}))}),Object(ie.jsx)(ue,{id:"outlined-basic",inputRef:o,onChange:function(e){return r(function(e,t){return function(){var n=Object(R.a)(W.a.mark((function n(a,s,c){var r;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.handleChangeMessageApi,n.prev=1,a({type:_}),n.next=5,X((function(){return r(e,t)}));case 5:a(D(e,t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a((s=n.t0,{type:N,payload:s}));case 11:case"end":return n.stop()}var s}),n,null,[[1,8]])})));return function(e,t,a){return n.apply(this,arguments)}}()}(e.target.value,u))},autoFocus:!0,label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:oe.a.text,variant:"outlined",fullWidth:!0,value:j,onKeyPress:function(e){"Enter"===e.code&&h()},InputProps:{endAdornment:Object(ie.jsxs)(O.a,{children:[a&&Object(ie.jsx)("div",{className:ae.a.spinner,children:Object(ie.jsx)("div",{className:"spinner-border",role:"status"})}),j&&Object(ie.jsx)(f.a,{style:{cursor:"pointer"},onClick:h})]})}})]})}))},de=n(243),je=n(246),he=n(247),pe=n(248),me=function(e){var t=e.id,n=e.title,a=e.selected,s=Object(l.c)((function(e){return e.messages.messages[n]||[]})),c=Object(l.b)(),r=s[s.length-1];return Object(ie.jsx)(u.b,{className:ae.a.listItemLink,to:"/chat/".concat(n),children:Object(ie.jsxs)(je.a,{button:!0,selected:a,children:[Object(ie.jsx)("button",{className:ae.a.iconEdit,onClick:function(){return B(t,n)},children:Object(ie.jsx)("i",{className:"fa fa-edit"})}),Object(ie.jsx)("button",{className:ae.a.iconDelete,onClick:function(){return c({type:L,payload:t})},children:Object(ie.jsx)("i",{className:"fa fa-trash-alt"})}),Object(ie.jsx)(he.a,{className:ae.a.chatName,primary:n}),r&&Object(ie.jsx)(he.a,{className:ae.a.listItem,primary:"".concat(r.author,":").concat(r.message)})]})})},ge=Object(pe.a)((function(){return{root:{width:"100%",maxWidth:360}}}));var Oe=function(){var e=Object(l.c)((function(e){return e.conversations})),t=e.conversations,n=e.conversationsPending,a=e.conversationsError;console.log("PENDING",n),console.log("CONVERSATIONS",t);var s=Object(l.b)(),c=ge(),r=Object(b.h)().roomId,o=Object(l.c)((function(e){return e.messages.messages}));return n&&console.log("\u0417\u0410\u0413\u0420\u0423\u0417\u041a\u0410"),a&&console.log("\u041e\u0428\u0418\u0411\u041a\u0410"),Object(ie.jsxs)("div",{className:c.root,children:[Object(ie.jsx)(de.a,{component:"nav","aria-label":"secondary mailbox folder",children:t.map((function(e,t){var n=o[e.title]||[];n[(null===n||void 0===n?void 0:n.length)-1];return Object(ie.jsx)(me,{id:e.id,title:e.title,selected:r===e.title},t)}))}),n&&Object(ie.jsx)("div",{className:ae.a.spinner,children:Object(ie.jsx)("div",{className:"spinner-border",role:"status"})}),Object(ie.jsx)("button",{className:ae.a.btn,onClick:function(){s(function(){var e=Object(R.a)(W.a.mark((function e(t,n,a){var s,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.addConversationApi,e.prev=1,t({type:w}),e.next=5,s();case 5:c=e.sent,console.log(c),t({type:C}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t((n=e.t0,{type:E,payload:n})),console.log(e.t0);case 14:case"end":return e.stop()}var n}),e,null,[[1,10]])})));return function(t,n,a){return e.apply(this,arguments)}}())},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u0435\u0441\u0435\u0434\u0443"})]})},fe=n(250),xe=n(249),ve=Object(c.createContext)(),_e=function(e){var t=e.children,n=e.themes,s=e.initialTheme,r=Object(c.useState)({theme:n[s],name:"\u043c\u044f\u0442\u043d\u0430\u044f"}),o=Object(a.a)(r,2),i=o[0],l=o[1],u=Object(c.useCallback)((function(e){n[e]&&l({name:e,theme:n[e]})}),[n]);return Object(ie.jsx)(ve.Provider,{value:{theme:i,changeTheme:u},children:Object(ie.jsx)(xe.a,{theme:i.theme,children:t})})},ye=n(143),Ne=n.n(ye);function ke(e){var t=e.chats,n=e.children;return Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(ve.Consumer,{children:function(e){var a=e.theme;return Object(ie.jsx)("div",{children:Object(ie.jsxs)(fe.a,{container:!0,className:Ne.a.app,children:[Object(ie.jsx)(fe.a,{item:!0,xs:2,className:ae.a.chatList,style:{backgroundColor:a.theme.color},children:t}),Object(ie.jsx)(fe.a,{item:!0,xs:10,style:{minWidth:"50px"},className:oe.a.messageList,children:n})]})})}})})}var we=n(35),Ce=n.n(we),Ee=n(49),Le=n.n(Ee);function Te(e){var t=e.session,n=Object(c.useState)(""),s=Object(a.a)(n,2),r=s[0],o=s[1],i=Object(c.useState)(!1),b=Object(a.a)(i,2),d=b[0],h=b[1],p=Object(c.useState)(null),m=Object(a.a)(p,2),g=m[0],O=m[1],f=function(){var e=Object(R.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,j.auth().signOut();case 4:h(!1),console.log("\u0417\u0410\u0413\u0420\u0423\u0417\u041a\u0410"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),O(e.t0.message),console.log(g);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){t&&(o(null===t||void 0===t?void 0:t.email),console.log(r))}),[r,t]);var x=Object(c.useContext)(ve),v=x.theme,_=x.changeTheme,y=Object(l.c)((function(e){return e.profile.user}));return g?Object(ie.jsx)("h1",{children:"ooooppss..."}):Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsxs)("div",{className:Le.a.header,style:{backgroundColor:v.theme.color},children:[Object(ie.jsxs)("div",{className:Le.a.btn,children:[Object(ie.jsx)("button",{className:"btn btn-secondary dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-expanded":"false",children:"\u0426\u0432\u0435\u0442 \u0442\u0435\u043c\u044b"}),Object(ie.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink",children:[Object(ie.jsx)("li",{children:Object(ie.jsx)("a",{onClick:function(){return _("\u043c\u044f\u0442\u043d\u0430\u044f")},className:"dropdown-item",href:"#",children:"\u041c\u044f\u0442\u043d\u044b\u0439"})}),Object(ie.jsx)("li",{children:Object(ie.jsx)("a",{onClick:function(){return _("\u0441\u0438\u043d\u044f\u044f")},className:"dropdown-item",href:"#",children:"\u0421\u0438\u043d\u0438\u0439"})}),Object(ie.jsx)("li",{children:Object(ie.jsx)("a",{onClick:function(){return _("\u0447\u0435\u0440\u043d\u0430\u044f")},className:"dropdown-item",href:"#",children:"\u0427\u0435\u0440\u043d\u044b\u0439"})})]})]})," ",Object(ie.jsx)(u.b,{to:"/gists",style:{textDecoration:"none",margin:"auto 8px"},children:Object(ie.jsx)("button",{className:Le.a.btnToCab,children:"Gists"})}),Object(ie.jsx)(u.b,{to:"/anime",style:{textDecoration:"none",margin:"auto 8px"},children:Object(ie.jsx)("button",{className:Le.a.btnToCab,children:"Gists Anime"})}),Object(ie.jsx)(u.b,{to:"/chat",style:{textDecoration:"none",margin:"auto 8px"},children:Object(ie.jsx)("button",{className:Le.a.btnToCab,children:"Chat"})}),Object(ie.jsx)(u.b,{to:"/login",style:{textDecoration:"none",margin:"auto 8px"},children:Object(ie.jsx)("button",{className:Le.a.btnToCab,children:"\u041b\u043e\u0433\u0438\u043d"})}),Object(ie.jsx)(u.b,{to:"/sign-up",style:{textDecoration:"none",margin:"auto 8px"},children:Object(ie.jsx)("button",{className:Le.a.btnToCab,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(ie.jsxs)("span",{className:Le.a.userName,children:[Object(ie.jsx)("p",{className:Le.a.user,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:"})," ",y.firstName," ",y.soName]}),Object(ie.jsx)(u.b,{to:"/profile",style:{textDecoration:"none",margin:"auto 8px"},children:Object(ie.jsx)("button",{className:Le.a.btnToCab,children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),(null===t||void 0===t?void 0:t.email)&&(d?Object(ie.jsx)("a",{children:Object(ie.jsxs)("button",{style:{textDecoration:"none",margin:"auto 8px",backgroundColor:"red",color:"white"},className:Le.a.btnToCab,onClick:f,children:[" ","\u0412\u044b\u0445\u043e\u0434 (",t.email,")"]})}):Object(ie.jsx)("a",{style:{textDecoration:"none",margin:"auto 8px"},children:Object(ie.jsxs)("button",{className:Le.a.btnToCab,onClick:f,children:[" ","\u0412\u044b\u0445\u043e\u0434 (",t.email,")"]})}))]})})}var Ae="@profile/toggle name visible",Ie="@profile/edit data",Pe="@profile/save",Se="@profile/edit user",De={nameVisible:!1,user:{firstName:"\u0412\u0430\u043d\u044f",soName:"\u0418\u0432\u0430\u043d\u043e\u0432",age:"28",birthDay:"05.01.1993"},edit:!1},Me=n(38),Be=n.n(Me),qe=function(){var e=Object(l.c)((function(e){return e.profile.user})),t=e.firstName,n=e.soName,s=e.age,r=e.birthDay,o=Object(l.c)((function(e){return e.profile.user})),i=function(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),s=n[0],r=n[1];return{value:s,onChange:function(e){r(Object(p.a)(Object(p.a)({},s),{},Object(J.a)({},e.target.name,e.target.value)))}}}({firstName:o.firstName,soName:o.soName,age:o.age,birthDay:o.birthDay}),u=Object(l.c)((function(e){return e.profile.edit})),b=Object(l.b)();return Object(ie.jsx)("div",{children:u?Object(ie.jsxs)("div",{children:[Object(ie.jsx)("label",{className:Be.a.label,htmlFor:"firstName",children:"\u0418\u043c\u044f:"}),Object(ie.jsx)("input",{"data-testid":"firstName",name:"firstName",className:Be.a.input,id:"firstName",defaultValue:t,value:i.value.firstName,onChange:i.onChange,type:"text",disabled:!1}),Object(ie.jsx)("label",{className:Be.a.label,htmlFor:"soName",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),Object(ie.jsx)("input",{name:"soName",className:Be.a.input,id:"soName",defaultValue:n,type:"text",disabled:!1,value:i.value.soName,onChange:i.onChange}),Object(ie.jsx)("label",{className:Be.a.label,htmlFor:"age",children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442, \u043b\u0435\u0442:"}),Object(ie.jsx)("input",{name:"age",className:Be.a.input,id:"age",defaultValue:s,type:"text",disabled:!1,onChange:i.onChange,value:i.value.age}),Object(ie.jsxs)("label",{className:Be.a.label,htmlFor:"birthDay",children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"," "]}),Object(ie.jsx)("input",{name:"birthDay",className:Be.a.input,id:"birthDay",defaultValue:r,type:"text",disabled:!1,onChange:i.onChange,value:i.value.birthDay}),Object(ie.jsx)("button",{className:Be.a.btnEditSave,type:"submit",onClick:function(){var e;b((e=i.value,{type:Se,payload:e})),b({type:Pe})},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}):Object(ie.jsxs)("div",{children:[Object(ie.jsxs)("label",{className:Be.a.label,htmlFor:"firstName",children:["\u0418\u043c\u044f:"," "]}),Object(ie.jsx)("input",{className:Be.a.input,id:"firstName",defaultValue:t,type:"text",disabled:!0}),Object(ie.jsxs)("label",{className:Be.a.label,htmlFor:"soName",children:["\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"," "]}),Object(ie.jsx)("input",{className:Be.a.input,id:"soName",defaultValue:n,type:"text",disabled:!0}),Object(ie.jsxs)("label",{className:Be.a.label,htmlFor:"age",children:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442, \u043b\u0435\u0442:"," "]}),Object(ie.jsx)("input",{className:Be.a.input,id:"age",defaultValue:s,type:"text",disabled:!0}),Object(ie.jsxs)("label",{className:Be.a.label,htmlFor:"birthDay",children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"," "]}),Object(ie.jsx)("input",{className:Be.a.input,id:"birthDay",defaultValue:r,type:"text",disabled:!0}),Object(ie.jsx)("button",{onClick:function(){b({type:Ie})},className:Be.a.btnEditSave,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})})},We=n(242),Re=n(251),Ve=Object(pe.a)((function(){return{input:{color:"#007cad",padding:"10px 15px",fontSize:"15px",fontWeight:"bold",marginBottom:15},root:{"& h1":{fontSize:25,fontWeight:"bold",marginBottom:50,textAlign:"center"}}}}));function Fe(e){var t=e.title,n=e.submitButton,s=e.onSubmit,r=Ve(),o=Object(c.useState)(""),i=Object(a.a)(o,2),l=i[0],u=i[1],b=Object(c.useState)(""),d=Object(a.a)(b,2),j=d[0],h=d[1],p=Object(c.useState)(""),m=Object(a.a)(p,2),g=(m[0],m[1]),O=function(){var e=Object(R.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(l,j);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),g(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(ie.jsxs)("div",{className:r.root,children:[Object(ie.jsx)("h1",{children:t}),Object(ie.jsx)(We.a,{value:l,onChange:function(e){return u(e.target.value)},fullWidth:!0,placeholder:"Email",className:r.input}),Object(ie.jsx)(We.a,{value:j,onChange:function(e){return h(e.target.value)},fullWidth:!0,placeholder:"Password",className:r.input,type:"password"}),Object(ie.jsx)(Re.a,{variant:"text",fullWidth:!0,onClick:O,children:n})]})}var Ge=n(144),Xe=n.n(Ge)()((function(){return{link:{display:"flex",justifyContent:"center",marginTop:30,color:"#000"},root:{width:500,margin:"0 auto",marginTop:"10%"}}}));function Je(e){var t=e.children,n=e.link,a=Xe();return Object(ie.jsxs)("div",{className:a.root,children:[t,Object(ie.jsx)("div",{className:a.link,children:n})]})}var Qe=n(119),Ue=["isAut"],ze=["isAut"];function Ke(e){var t=e.isAut,n=Object(Qe.a)(e,Ue);return t?Object(ie.jsx)(b.b,Object(p.a)({},n)):Object(ie.jsx)(b.a,{to:"/login"})}function Ye(e){var t=e.isAut,n=Object(Qe.a)(e,ze);return t?Object(ie.jsx)(b.a,{to:"/chat"}):Object(ie.jsx)(b.b,Object(p.a)({},n))}function He(){var e=Object(b.g)().push;Object(c.useEffect)((function(){var t=function(t){"Escape"===t.code&&e("/chat")};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[e]);var t=Object(l.b)();Object(c.useEffect)((function(){t(G()),t(te())}),[t]);var n=Object(l.c)((function(e){return e.conversations})),a=n.conversations,s=n.conversationsPending,r=n.conversationsError;console.log(a);var o=Object(l.c)((function(e){return e.messages})),i=o.messages,u=o.messagesPending,d=o.messagesError;return s&&console.log("\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),a&&console.log("\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"),r?Object(ie.jsx)("div",{children:Object(ie.jsx)("h1",{children:"oooppss..."})}):Object(ie.jsxs)(b.d,{children:[Object(ie.jsx)(b.b,{exact:!0,path:["/chat/:roomId","/chat"],children:Object(ie.jsxs)(ke,{chats:Object(ie.jsx)(Oe,{title:s}),children:[Object(ie.jsx)(b.b,{path:"/chat/:roomId",children:Object(ie.jsx)(be,{title1:i,title2:u,title3:d})}),Object(ie.jsxs)(b.b,{exact:!0,path:"/chat",children:[Object(ie.jsx)("h1",{className:Ce.a.title,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433"}),Object(ie.jsx)("img",{className:Ce.a.img,src:"/React-projects/logoDialog.png",width:"50"})]})]})}),Object(ie.jsx)(b.b,{path:"*",children:Object(ie.jsx)("h1",{children:"\u0442\u0430\u043a\u043e\u0433\u043e \u0447\u0430\u0442\u0430 \u043d\u0435\u0442"})})]})}function Ze(){return Object(ie.jsxs)(b.d,{children:[Object(ie.jsx)(b.b,{path:"/",children:Object(ie.jsxs)("div",{className:Ce.a.pageWelcome,children:[Object(ie.jsx)("h1",{className:Ce.a.welcomeText,children:"\u041f\u0440\u0438\u0432\u0435\u0442! \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0430\u0442!"}),Object(ie.jsxs)(u.b,{to:"/chat",style:{textDecoration:"none"},children:[Object(ie.jsx)("button",{className:Ce.a.welcomeBtn,children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0447\u0430\u0442"}),Object(ie.jsx)("img",{className:Ce.a.img,src:"/React-projects/logoDialog.png",width:"300"})]})]})}),Object(ie.jsx)(b.b,{exact:!0,path:"/chat",children:Object(ie.jsx)(He,{})}),Object(ie.jsx)(b.b,{path:"*",children:Object(ie.jsx)("h1",{children:"\u0442\u0430\u043a\u043e\u0433\u043e \u0447\u0430\u0442\u0430 \u043d\u0435\u0442"})})]})}function $e(){return Object(ie.jsx)(b.d,{children:Object(ie.jsx)(b.b,{path:"*",children:Object(ie.jsxs)("div",{children:[Object(ie.jsx)("img",{className:Ce.a.img,src:"/React-projects/404.jpg",width:"1024"}),Object(ie.jsx)(u.b,{to:"/",style:{textDecoration:"none"},children:Object(ie.jsx)("button",{className:Ce.a.welcomeBtn,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})})]})})})}var et=n(69),tt=n.n(et);var nt=function(){var e=Object(l.c)((function(e){return e.profile.nameVisible})),t=Object(l.b)();return Object(ie.jsxs)("div",{className:tt.a.pageProfile,children:[Object(ie.jsxs)("div",{className:tt.a.profile,children:[Object(ie.jsx)("img",{className:tt.a.profileLogo,src:"/React-projects/logoDialog.png",width:"200"}),Object(ie.jsx)("h1",{className:tt.a.profileTitle,children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(ie.jsx)("button",{className:tt.a.profileBtn,onClick:function(){t({type:Ae})},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0421\u043a\u0440\u044b\u0442\u044c"}),e&&Object(ie.jsx)(qe,{})]}),Object(ie.jsx)(u.b,{to:"/chat",style:{textDecoration:"none"},children:Object(ie.jsx)("button",{className:tt.a.btnToChat,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u0447\u0430\u0442"})})]})},at="@gists/start query",st="@gists/success query",ct="@gists/error query",rt="@gists/search start query",ot="@gists/search success query",it="@gists/search error query",lt={gists:[],gistsPending:!1,gistsError:null},ut=function(e){return{type:st,payload:e}},bt=function(){return{type:at}},dt=function(e){return{type:ct,payload:e}},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(R.a)(W.a.mark((function t(n,a,s){var c,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(bt()),t.next=4,s.getGistsApi(e);case 4:c=t.sent,r=c.data,n(ut(r)),console.log("data1",r),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),n(dt(t.t0)),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n,a){return t.apply(this,arguments)}}()};function ht(){var e=Object(c.useRef)(),t=Object(l.c)((function(e){return e.gists})),n=t.gistsPending,s=t.gists,r=t.gistsError,o=Object(c.useState)(""),i=Object(a.a)(o,2),u=i[0],b=i[1],d=Object(l.b)(),j=Object(c.useMemo)((function(){return F()((function(t){var n=t===e.current;d(function(e,t){return function(){var n=Object(R.a)(W.a.mark((function n(a,s,c){var r,o;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:rt}),n.next=4,c.searchGistsByUserNameApi(e);case 4:r=n.sent,o=r.data,t&&(a({type:ot,payload:o}),console.log("data1",o)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),a((s=n.t0,{type:it,payload:s})),console.log(n.t0);case 13:case"end":return n.stop()}var s}),n,null,[[0,9]])})));return function(e,t,a){return n.apply(this,arguments)}}()}(t,n))}),1e3)}),[d]);return Object(c.useEffect)((function(){s.length||d(jt())}),[d,s]),Object(c.useEffect)((function(){u&&j(u,d),e.current=u}),[u,d,j]),r?Object(ie.jsx)("div",{children:Object(ie.jsx)("h1",{children:"oooppss..."})}):Object(ie.jsxs)("div",{children:[Array.from({length:10}).map((function(e,t){return Object(ie.jsxs)("button",{className:Ce.a.btnQuery,onClick:function(){return d(jt(t+1))},children:["button ",t]},t)})),Object(ie.jsx)("hr",{}),Object(ie.jsxs)("div",{className:Ce.a.gistsBlock,children:[Object(ie.jsx)("h1",{children:"Search"}),Object(ie.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)}}),Object(ie.jsx)("hr",{})]}),n?Object(ie.jsx)("div",{children:Object(ie.jsx)("div",{className:Ce.a.spinner,children:Object(ie.jsx)("div",{className:"spinner-border",role:"status"})})}):Object(ie.jsx)("div",{children:Object(ie.jsx)("div",{children:s.map((function(e,t){return Object(ie.jsx)("p",{className:Ce.a.gistsBlock,children:e.description},t)}))})})]})}var pt="@gists/start anime query",mt="@gists/success anime query",gt="@gists/error anime query",Ot={gists:[],gistsPending:!1,gistsError:null},ft=function(e){return{type:mt,payload:e}},xt=function(){return{type:pt}},vt=function(e){return{type:gt,payload:e}},_t=function(e){return"https://animechan.vercel.app/api/quotes/anime?title=naruto&page=".concat(e)},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(R.a)(W.a.mark((function t(n){var a,s;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(xt()),t.next=4,fetch(_t(e));case 4:return a=t.sent,t.next=7,a.json();case 7:s=t.sent,n(ft(s)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),n(vt(t.t0)),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()};function Nt(){var e=Object(l.c)((function(e){return e.anime})),t=e.gistsPending,n=e.gists,a=e.gistsError,s=Object(l.b)();return Object(c.useEffect)((function(){n.length||(s(yt()),console.log(n))}),[s,n]),t?Object(ie.jsx)("div",{children:Object(ie.jsx)("div",{className:Ce.a.spinner,children:Object(ie.jsx)("div",{className:"spinner-border",role:"status"})})}):a?Object(ie.jsx)("div",{children:Object(ie.jsx)("h1",{children:"oooppss..."})}):Object(ie.jsxs)("div",{children:[Array.from({length:10}).map((function(e,t){return Object(ie.jsxs)("button",{className:Ce.a.btnQuery,onClick:function(){return s(yt(t+1))},children:["button ",t]},t)})),Object(ie.jsx)("div",{children:n.map((function(e,t){return Object(ie.jsx)("p",{className:Ce.a.gistsBlock,children:e.character},t)}))})]})}var kt=function(e,t){return j.auth().signInWithEmailAndPassword(e,t)};function wt(){return Object(ie.jsx)("div",{children:Object(ie.jsx)(Je,{link:Object(ie.jsx)(u.b,{to:"sign-up",children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"}),children:Object(ie.jsx)(Fe,{title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",submitButton:"\u0412\u043e\u0439\u0442\u0438",onSubmit:kt})})})}var Ct=function(e,t){return console.log(e,t),j.auth().createUserWithEmailAndPassword(e,t)};function Et(){return Object(ie.jsx)("div",{children:Object(ie.jsx)(Je,{link:Object(ie.jsx)(u.b,{to:"login",children:"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0412\u043e\u0439\u0434\u0438\u0442\u0435"}),children:Object(ie.jsx)(Fe,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitButton:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:Ct})})})}var Lt=n(61),Tt=n(117),At=n(145),It=n.n(At),Pt=n(146),St=n(3),Dt=n(113),Mt=n.n(Dt),Bt=new function e(t){var n=this;Object(St.a)(this,e),this.requestWithToken=function(){return{headers:{"x-token":n.token}}},this.get=function(e,t){var a={};return t&&(a=Object(p.a)(Object(p.a)({},a),n.requestWithToken())),n.request.get(e,a)},this.post=function(e,t,a){var s={};return a&&(s=Object(p.a)(Object(p.a)({},s),n.requestWithToken())),n.request.post(e,t,s)},this.request=function(e){return e.interceptors.request.use((function(e){return console.log("%c AXIOS [request] ".concat(e.url,":"),"color: green; font-weight: bold",e),e})),e.interceptors.response.use((function(e){return console.log("%c AXIOS [response-success] ".concat(e.config.url,":"),"color: #b2dfee; font-weight: bold",e),e}),(function(e){console.log("%c AXIOS [response-error]","color: red; font-weight: bold",e)})),e}(Mt.a.create({baseURL:"https://api.github.com"})),this.token=t}("test token"),qt={key:"root",storage:It.a,blacklist:["conversations","messages"],whitelist:["profile"]},Wt=Object(Lt.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:return Object(p.a)(Object(p.a)({},e),{},{nameVisible:!e.nameVisible});case Ie:return Object(p.a)(Object(p.a)({},e),{},{edit:!0});case Pe:return Object(p.a)(Object(p.a)({},e),{},{edit:!1});case Se:return Object(p.a)(Object(p.a)({},e),{},{user:t.payload});default:return e}},conversations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!0});case y:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!1,conversations:e.conversations.map((function(e){return e.title===t.payload.roomId?Object(p.a)(Object(p.a)({},e),{},{value:t.payload.value,id:Object(v.a)()}):e}))});case N:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!1,conversationsError:t.payload});case k:return Object(p.a)(Object(p.a)({},e),{},{conversations:e.conversations.map((function(e){return e.title===t.payload?Object(p.a)(Object(p.a)({},e),{},{value:""}):e}))});case w:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!0});case C:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!1,conversations:[].concat(Object(x.a)(e.conversations),[{id:Object(v.a)(),title:"room ".concat(e.conversations.length+1),value:"test value".concat(e.conversations.length+1)}])});case E:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!1,conversationsError:t.payload});case L:return Object(p.a)(Object(p.a)({},e),{},{conversations:e.conversations.filter((function(e){return e.id!==t.payload}))});case T:return Object(p.a)(Object(p.a)({},e),{},{conversations:Object(x.a)(e.conversations).map((function(e){return e.id===t.payload.oldTitleId?Object(p.a)(Object(p.a)({},e),{},{title:t.payload.newTitle}):e}))});case A:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!0});case I:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!1,conversations:t.payload});case P:return Object(p.a)(Object(p.a)({},e),{},{conversationsPending:!1,conversationsError:t.payload});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(p.a)(Object(p.a)({},e),{},{messagesPending:!0});case U:return Object(p.a)(Object(p.a)({},e),{},{messagesPending:!1,messages:Object(p.a)(Object(p.a)({},e.messages),{},Object(J.a)({},t.payload.roomId,[].concat(Object(x.a)(e.messages[t.payload.roomId]||[]),[Object(p.a)(Object(p.a)({},t.payload.message),{},{date:(new Date).toLocaleTimeString(),id:Object(v.a)()})])||[]))});case z:return Object(p.a)(Object(p.a)({},e),{},{messagesPending:!1,messagesError:t.payload});case K:return Object(p.a)(Object(p.a)({},e),{},{messages:Object(p.a)(Object(p.a)({},e.messages),{},Object(J.a)({},t.payload.roomId,Object(x.a)((e.messages[t.payload.roomId]||[]).map((function(e){return e.id===t.payload.oldMessageId?Object(p.a)(Object(p.a)({},e),{},{message:t.payload.newMessage}):e})))))});case Y:return Object(p.a)(Object(p.a)({},e),{},{messagesPending:!0});case H:return Object(p.a)(Object(p.a)({},e),{},{messagesPending:!1,messages:t.payload});case Z:return Object(p.a)(Object(p.a)({},e),{},{messagesPending:!1,messagesError:t.payload});default:return e}},gists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:case rt:return Object(p.a)(Object(p.a)({},e),{},{gistsPending:!0});case st:case ot:return Object(p.a)(Object(p.a)({},e),{},{gistsPending:!1,gists:t.payload});case ct:case it:return Object(p.a)(Object(p.a)({},e),{},{gistsError:t.payload,gistsPending:!1});default:return e}},anime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pt:return Object(p.a)(Object(p.a)({},e),{},{gistsPending:!0});case mt:return Object(p.a)(Object(p.a)({},e),{},{gistsPending:!1,gists:t.payload});case gt:return Object(p.a)(Object(p.a)({},e),{},{gistsError:t.payload,gistsPending:!1});default:return e}}}),Rt=Object(Tt.a)(qt,Wt),Vt=Object(Lt.d)(Rt,Object(Lt.c)(Object(Lt.a)((function(){return function(e){return function(t){console.log("report");try{return e(t)}catch(n){console.error("Some error: ",n)}}}}),Pt.a.withExtraArgument({getGistsApi:function(e){return Bt.get("/gists/public?page=".concat(e))},searchGistsByUserNameApi:function(e){return Bt.get("/users/".concat(e,"/gists"))},getMessagesApi:function(){return h.ref("messages").get()},sendMessagesApi:function(){return function(e,t){var n=t.author,a=t.message;return h.ref("messages").child(e).push({id:Object(v.a)(),author:n,message:a})}},getConversationsApi:function(){return h.ref("conversations").get()},handleChangeMessageApi:function(e,t){return h.ref("conversations").child(t).update({title:t,value:e})},addConversationApi:function(){return h.ref("conversations").child("room ".concat(Object(v.a)())).set({id:Object(v.a)(),title:"room ".concat(Object(v.a)()),value:"test value".concat(Object(v.a)())})}}),(function(){return function(e){return function(t){console.log("dispatching",t),console.log("prev state",Vt.getState());var n=e(t);return console.log("next state",Vt.getState()),n}}}),(function(e){return function(t){return function(n){return n.type===U&&"User"===n.payload.message.author&&setTimeout((function(){e.dispatch(ee({author:"bot",message:"Hello from bot middleware",date:(new Date).toLocaleTimeString()},n.payload.roomId))}),500),t(n)}}}),(function(){return function(e){return function(t){var n,a=null===t||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.delay;if(!a)return e(t);var s=setTimeout((function(){return e(t)}),a);return function(){clearInterval(s)}}}})),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),Ft=Object(Tt.b)(Vt),Gt={"\u043c\u044f\u0442\u043d\u0430\u044f":Object(s.a)({color:"#b2dfee"}),"\u0441\u0438\u043d\u044f\u044f":Object(s.a)({color:"#007cad"}),"\u0447\u0435\u0440\u043d\u0430\u044f":Object(s.a)({color:"black"})},Xt=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){j.auth().onAuthStateChanged((function(e){s(e||null)}))}),[]),Object(ie.jsx)(l.a,{store:Vt,children:Object(ie.jsx)(r.a.StrictMode,{children:Object(ie.jsx)(d.a,{loading:null,persistor:Ft,children:Object(ie.jsx)(u.a,{children:Object(ie.jsxs)(_e,{themes:Gt,initialTheme:"\u043c\u044f\u0442\u043d\u0430\u044f",children:[Object(ie.jsx)(Te,{session:n}),Object(ie.jsxs)(b.d,{children:[Object(ie.jsx)(Ke,{exact:!0,isAut:n,path:"/chat",component:He}),Object(ie.jsx)(Ke,{exact:!0,isAut:n,path:"/chat/:roomId",component:He}),Object(ie.jsx)(b.b,{exact:!0,isAut:n,path:"/",component:Ze}),Object(ie.jsx)(Ke,{exact:!0,isAut:n,path:"/profile",component:nt}),Object(ie.jsx)(Ke,{exact:!0,isAut:n,path:"/gists",component:ht}),Object(ie.jsx)(Ke,{exact:!0,isAut:n,path:"/anime",component:Nt}),Object(ie.jsx)(Ye,{exact:!0,isAut:n,path:"/login",component:wt}),Object(ie.jsx)(Ye,{exact:!0,isAut:n,path:"/sign-up",component:Et}),Object(ie.jsx)(b.b,{path:"*",component:$e})]})]})})})})})};i.a.render(Object(ie.jsx)(Xt,{}),document.getElementById("root"))},35:function(e,t,n){e.exports={title:"page_title__Ds8Lg",img:"page_img__12bgB",main:"page_main__1RiuD",error404:"page_error404__2_l6W",pageWelcome:"page_pageWelcome__3dqS4",welcomeText:"page_welcomeText__3VhpQ",welcomeBtn:"page_welcomeBtn__2JxqC",btnQuery:"page_btnQuery__1HyXX",hr:"page_hr__1JJzQ",gistsBlock:"page_gistsBlock__1ocBx",spinner:"page_spinner__2U7NW"}},38:function(e,t,n){e.exports={input:"profileForm_input__1Qd8D",label:"profileForm_label__1idKA",btnEditSave:"profileForm_btnEditSave__-jKPj"}},42:function(e,t,n){e.exports={chatList:"chatList_chatList__3hqp1",title:"chatList_title__X7XY5",listItem:"chatList_listItem__1dCRo",buttonAdd:"chatList_buttonAdd__1_0YQ",listItemLink:"chatList_listItemLink__1lqVk",chatName:"chatList_chatName__2GlJ_",chatList_listItem__1mE9X:"chatList_chatList_listItem__1mE9X__H7Ms0",btn:"chatList_btn__en_74",iconDelete:"chatList_iconDelete__1uPOq",iconEdit:"chatList_iconEdit__r_-PI",spinner:"chatList_spinner__1y5ZJ"}},47:function(e,t,n){e.exports={messageList:"messageList_messageList__1h0wR",title:"messageList_title__J7oiP",text:"messageList_text__3v8j7",blockMessage:"messageList_blockMessage__VRMT_",blockMessageBot:"messageList_blockMessageBot__30BsU",chat:"messageList_chat__3Bbpf",message:"messageList_message__3M_Xe",userName:"messageList_userName__2eDA-",date:"messageList_date__1C4cV",textMessage:"messageList_textMessage__lv3QR",iconEdit:"messageList_iconEdit__i7gxN"}},49:function(e,t,n){e.exports={header:"header_header__a9rao",headerTitle:"header_headerTitle__1v3fG",btn:"header_btn__2GINy",btnToCab:"header_btnToCab__2OJYf",user:"header_user__1YA2F",userName:"header_userName__32PQA"}},69:function(e,t,n){e.exports={pageProfile:"profile_pageProfile__WGROu",profile:"profile_profile__1aegY",profileTitle:"profile_profileTitle__S_erQ",profileBtn:"profile_profileBtn__30kcn",profileLogo:"profile_profileLogo__2sLzj",btnToChat:"profile_btnToChat__3oL_w",btnEditSave:"profile_btnEditSave__1VJ3C",input:"profile_input__Z4KDL"}}},[[216,1,2]]]);
//# sourceMappingURL=main.42a2a8ee.chunk.js.map