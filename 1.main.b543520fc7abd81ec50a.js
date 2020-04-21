(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(15);const n=Object(r.b)("@@testModule/FETCH_TEST_DATA")},114:function(e){e.exports=JSON.parse('{"id":1,"name":"Leanne Graham Mock","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"},"assets":{"namespaces":{"testmodule":{"resources":{"en":{"HelloWorld.Text":"Hello World"},"he":{"HelloWorld.Text":"שלום עולם"}}}}}}')},115:function(e,t,a){"use strict";a.r(t);var r=a(113);t.default=(e={},t)=>{switch(t.type){case r.a.SUCCESS:return{...t.response};case r.a.FAILURE:return{...t.error}}return e}},116:function(e,t,a){"use strict";a.r(t);var r=a(4);t.default=()=>e=>t=>{switch(e(t),t.type){case r.b:console.log("TEST MODULE MIDDLEWARE: ",t.payload)}}},117:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),l=a(56),c=a(1),i=a.n(c),o=a(3);const d=o.keyframes`
    0% {
        background-position: -490px 0;
    }
    100% {
        background-position: 490px 0;
    }
`;var u=o.default.div`
    width: ${e=>e.width||"auto"};
    height: ${e=>e.height||"14px"};
    animation: ${d} 1s linear infinite forwards;
    animation-name: ${d};
    background: #e4e7ed;
    border-radius: 4px;
    background-image: -webkit-linear-gradient(
        left,
        #e4e7ed 0%,
        #c3cad9 20%,
        #e4e7ed 40%,
        #e4e7ed 100%
    );
    background-size: 980px 898px;
    position: relative;

    ${e=>e.circle&&o.css`
            border-radius: 100%;
        `};
`;const p=({width:e,height:t,circle:a})=>n.a.createElement(u,{className:"skeleton-loading",width:e,height:t,circle:a});p.propTypes={width:i.a.string,height:i.a.string,circle:i.a.bool};var m=p,h=o.default.div`
    background-color: #fff;
    opacity: .8;
    padding: 16px;

    div { 
        display: flex; 
        align-items: center; 

        .sep {
            width: 16px;
            height: 16px;
        }
    }

    margin-bottom: 16px;
    
`;const g=({n:e})=>{const t=e||3,a=n.a.createElement("div",{className:"sep"},"-"),r=()=>n.a.createElement(h,{className:"skeleton-template__line"},n.a.createElement("div",null,n.a.createElement(m,{circle:!0,width:"60px",height:"60px"}),a,n.a.createElement(m,{width:"100%"})),a,n.a.createElement(m,null),a,n.a.createElement(m,null));return n.a.createElement("div",{className:"skeleton-template__lines"},(()=>{const e=[];for(let a=0;a<t;a++)e.push(n.a.createElement(r,{key:a}));return e})())};g.propTypes={n:i.a.number};var b=g;const E=({type:e})=>n.a.createElement("div",{className:"skeleton-template"},(()=>{switch(e){case"lines":default:return n.a.createElement(b,null)}})());E.propTypes={type:i.a.string};var f=E,v=a(27),w=a(113),y=a(114),k=a(18);var x=o.default.div`
`;var O=()=>{const{t:e}=Object(k.c)("testmodule");return n.a.createElement(x,null,n.a.createElement("div",null,e("HelloWorld.Text")))};t.default=()=>{const e=Object(s.d)(),t=Object(s.e)(Object(l.a)(w.a));return Object(r.useEffect)(()=>{e(Object(v.a)({actionType:w.a,url:"http://jsonplaceholder.typicode.com/users/1",method:"get",onSuccess:(e,t)=>{const{data:a}=e,{assets:r}=a;Object(k.b)(r.namespaces),t({type:"DO_SOMETHING_GOOD"})},onError:(e,t)=>{t({type:"DO_SOMETHING_BAD"})},mock:{enable:!0,status:200,response:y,delay:2e3}}))},[]),n.a.createElement("div",{className:"test-module-outlet"},t?n.a.createElement(f,{type:"lines"}):n.a.createElement(O,null))}}}]);