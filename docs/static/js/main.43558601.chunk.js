(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},64:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(48),r=a.n(c),o=a(14),i=a(2),l=a(5),j={get:function(e,t){var a=localStorage.getItem(e);return null===a?t:JSON.parse(a)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},u=function(){var e=j.get("token");return fetch("http://51.38.51.187:5050/api/v1/users",{method:"GET",credentials:"include",headers:{Accept:"application/json",Authentication:"Bearer Token","X-Custom-Header":e.accessToken}}).then((function(e){return console.log(e),e.json()})).then((function(e){return e.results.map((function(e){return{email:e.email,password:e.password,name:e.name,surname:e.surname,id:e.id}}))})).catch((function(e){return console.log(e)}))},b=a(86),h=a(85),m=a.p+"static/media/logo.401216d7.png",d=(a(64),a(1));function p(){JSON.parse(localStorage.getItem("user"));return console.log("data"),Object(d.jsx)("div",{children:Object(d.jsx)(o.b,{to:"/",children:Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"header__img",src:m,title:"Go to home",alt:"Isle of dogs"}),Object(d.jsx)("h1",{className:"header__title",children:"Isle of dogs"}),Object(d.jsx)(b.a,{children:Object(d.jsx)(h.a,{title:"User Name",children:Object(d.jsx)(h.a.Item,{children:"Logout"})})})]})})})}a(46);var O=function(){var e=Object(l.f)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"page__wrapper",children:[Object(d.jsx)("h1",{className:"page__title",children:"Why we are here?"}),Object(d.jsx)("p",{className:"page__paragraph",children:"An outbreak of canine influenza spreads through the city of Megasaki with the risk of contagion to humans. The city's authoritarian mayor, Kenji Kobayashi, ratifies an official decree banishing all dogs to Garbage Island, which is immediately approved despite the insistence of Professor Watanabe, the mayor's political opponent, who claims to be close to creating a cure."}),Object(d.jsx)("h1",{className:"page__title",children:"Who are we?"}),Object(d.jsxs)("p",{className:"page__paragraph",children:[" ","Like many of us, six months ago Atari lost his best friend Spots. We believe there is a cure for the disease, but the government is hiding it, so we are willing to fly to Trash Island and get all our friends back. We have a great team and a better canine pack on the ground led by Chief. Will you join us in this adventure?"]}),Object(d.jsxs)("div",{className:"page__buttons",children:[Object(d.jsx)("button",{className:"page__button",onClick:function(){return e.push("/SignUp")},children:"Sign Up"}),Object(d.jsx)("button",{className:"page__button",onClick:function(){return e.push("/Login")},children:"Login"})]})]})})},f=a(55),x=a(56),g=a(58),_=a(57),N=(a(75),function(e){Object(g.a)(a,e);var t=Object(_.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsxs)("small",{className:"footer__small",children:["We ",Object(d.jsx)("i",{class:"footer__heart fas fa-heart"})," dogs"]}),Object(d.jsx)("img",{className:"footer__logo",src:m,alt:"Butterfly"})]})}}]),a}(s.a.Component)),v=N,y=(a(47),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(i.a)(c,2),l=r[0],j=r[1],u=Object(n.useState)(""),b=Object(i.a)(u,2),h=b[0],m=b[1],p=Object(n.useState)(""),O=Object(i.a)(p,2),f=O[0],x=O[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.b,{className:"form__link",to:"/",children:Object(d.jsx)("span",{className:"form__icon",children:"\ud83d\udc48\ud83c\udffb"})}),Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("label",{htmlFor:"name",className:"form__label",children:[Object(d.jsx)("input",{placeholder:"Name",className:"form__input",type:"text",name:"name",value:a,onChange:function(e){s(e.target.value)}})," "]}),Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"surname",className:"form__label",children:Object(d.jsx)("input",{placeholder:"Surname",className:"form__input",type:"text",name:"surname",value:l,onChange:function(e){j(e.target.value)}})})," ",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"email",className:"form__label",children:Object(d.jsx)("input",{placeholder:"Email",className:"form__input",type:"text",name:"email",value:h,onChange:function(e){m(e.target.value)}})})," ",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"password",className:"form__label",children:[Object(d.jsx)("input",{placeholder:"Pasword",className:"form__input",type:"text",name:"password",value:f,onChange:function(e){x(e.target.value)}})," "]}),Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"form__button",type:"submit",onClick:function(){var e={name:a,surname:l,email:h,password:f};fetch("http://51.38.51.187:5050/api/v1/auth/sign-up",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.json().then((function(e){console.log("result",e)}))}))},children:"Sign Up"})]})]})}),S=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(i.a)(c,2),l=r[0],j=r[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("span",{className:"form__icon",children:"\ud83d\udc48\ud83c\udffb"})}),Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("label",{htmlFor:"email",className:"form__label",children:[Object(d.jsx)("input",{className:"form__input",placeholder:"Email",type:"text",name:"email",value:a,onChange:function(e){s(e.target.value)}})," "]}),Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("label",{htmlFor:"password",className:"form__label",children:[Object(d.jsx)("input",{className:"form__input",placeholder:"Pasword",type:"text",name:"password",value:l,onChange:function(e){j(e.target.value)}})," "]}),Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",className:"form__button",onClick:function(){var e={email:a,password:l};console.log(e),fetch("http://51.38.51.187:5050/api/v1/auth/log-in",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var t=JSON.stringify(e);localStorage.setItem("token",t)}))},children:"Login"})]})]})},w=(a(76),function(e){var t=e.user;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("article",{className:"user",children:[Object(d.jsx)("h4",{className:"user__name",children:t.name}),Object(d.jsxs)(o.b,{to:"/user/".concat(t.id),children:[" ",Object(d.jsx)("button",{className:"user__button",children:"Book a 3D consultation"})," "]})]})})}),k=(a(77),function(e){var t=e.users.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(w,{user:e})},e.id)}));return Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:"cards",children:t})})}),C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){0===a.length&&u().then((function(e){s(e)}))}),[]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(p,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{})}),Object(d.jsx)(l.a,{path:"/SignUp",children:Object(d.jsx)(y,{})}),Object(d.jsx)(l.a,{path:"/Login",children:Object(d.jsx)(S,{})}),Object(d.jsx)(l.a,{path:"/users",children:Object(d.jsx)(k,{users:a})})]}),Object(d.jsx)(v,{})]})};a(78);r.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(C,{})}),document.querySelector("#root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.43558601.chunk.js.map