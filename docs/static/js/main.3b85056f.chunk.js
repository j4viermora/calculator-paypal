(this["webpackJsonpcalculator-paypal"]=this["webpackJsonpcalculator-paypal"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(5),r=c.n(n),i=c(2),o=c(0),j=Object(a.createContext)(),l=function(e){var t=e.children,c=Object(a.useState)({}),n=Object(i.a)(c,2),r=n[0],l=n[1];return Object(o.jsx)(j.Provider,{value:{saved:r,setSaved:l},children:t})},u=function(e){var t=e.children;return Object(o.jsx)("div",{className:"container",children:t})},s=c(3);function b(e){return 5.4*e/100+.3}function v(e,t){return e+t}var O=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({}),j=Object(i.a)(r,2),l=j[0],u=j[1],O=l.totalAverage,d=l.totalToSend,x=""===c;Object(a.useEffect)((function(){var e=function(e){var t=b(e=Number(e)),c=b(v(t,e));return{totalToSend:v(e,c),totalAverage:c}}(c),t=e.totalToSend,a=e.totalAverage;u(Object(s.a)(Object(s.a)({},l),{},{totalAverage:a,totalToSend:t}))}),[c]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"form",children:[Object(o.jsx)("h2",{children:"Calculadora para recibir"}),Object(o.jsx)("input",{name:"toReceive",onChange:function(e){var t=e.target;n(t.value)},placeholder:"Para recibir",type:"number",value:c,style:{marginRight:"10px"}})]}),Object(o.jsx)("h3",{children:"Comisi\xf3n"}),Object(o.jsx)("input",{type:"number",value:x?0:O.toFixed(2)}),Object(o.jsx)("h3",{children:"Debo enviar"}),Object(o.jsx)("input",{type:"number",value:x?0:d.toFixed(2)})]})},d=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)({}),j=Object(i.a)(r,2),l=j[0],u=j[1],v=l.receive,O=l.porcentajeTotal,d=""===c;Object(a.useEffect)((function(){var e=function(e){var t=b(e=Number(e));return{porcentajeTotal:t,receive:e-t}}(c),t=e.receive,a=e.porcentajeTotal;u(Object(s.a)(Object(s.a)({},l),{},{receive:t,porcentajeTotal:a}))}),[c]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Calculadora para enviar"}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log({valueToCalc:c,receive:v,totalAverage:totalAverage})},className:"form",children:Object(o.jsx)("input",{type:"number",placeholder:"Enviar",value:c,onChange:function(e){var t=e.target;n(t.value)},style:{marginRight:"10px"}})}),Object(o.jsx)("h3",{children:"Comisi\xf3n"}),Object(o.jsx)("input",{type:"number",value:d?0:O.toFixed(2)}),Object(o.jsx)("h3",{children:"Recibes"}),Object(o.jsx)("input",{type:"number",value:d?0:v.toFixed(2)})]})},x=function(e){return Object(o.jsx)(u,{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"six columns",children:Object(o.jsx)(d,{})}),Object(o.jsx)("div",{className:"six columns",children:Object(o.jsx)(O,{})})]})})},h=function(){return Object(o.jsx)(l,{children:Object(o.jsx)(x,{})})};c(11),c(12),c(13);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.3b85056f.chunk.js.map