(this["webpackJsonpauth0-example"]=this["webpackJsonpauth0-example"]||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(1),u=n.n(i),l=n(4),s=n(2),d=n(9),p=n(7),h=function(){return window.history.replaceState({},document.title,window.location.pathname)},f=r.a.createContext(),v=function(){return Object(a.useContext)(f)},O=function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?h:n,o=Object(d.a)(e,["children","onRedirectCallback"]),i=Object(a.useState)(),v=Object(s.a)(i,2),O=v[0],b=v[1],g=Object(a.useState)(),m=Object(s.a)(g,2),w=m[0],E=m[1],_=Object(a.useState)(),k=Object(s.a)(_,2),C=k[0],S=k[1],T=Object(a.useState)(!0),j=Object(s.a)(T,2),x=j[0],P=j[1],R=Object(a.useState)(!1),W=Object(s.a)(R,2),y=W[0],A=W[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(o);case 2:if(t=e.sent,S(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,b(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,E(i);case 19:P(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},A(!0),e.prev=2,e.next=5,C.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,A(!1),e.finish(10);case 13:return e.next=15,C.getUser();case 15:n=e.sent,E(n),b(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,C.handleRedirectCallback();case 3:return e.next=5,C.getUser();case 5:t=e.sent,P(!1),b(!0),E(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{isAuthenticated:O,user:w,loading:x,popupOpen:y,loginWithPopup:U,handleRedirectCallback:D,getIdTokenClaims:function(){return C.getIdTokenClaims.apply(C,arguments)},loginWithRedirect:function(){return C.loginWithRedirect.apply(C,arguments)},getTokenSilently:function(){return C.getTokenSilently.apply(C,arguments)},getTokenWithPopup:function(){return C.getTokenWithPopup.apply(C,arguments)},logout:function(){return C.logout.apply(C,arguments)}}},t)},b=function(){var e=v(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement("div",null,!t&&r.a.createElement("button",{onClick:function(){return n({})}},"Log in"),t&&r.a.createElement("button",{onClick:function(){return a()}},"Log out"))};var g=function(){return v().loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m={domain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH0_DOMAIN,clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH0_CLIENT_ID},w=n(8),E=Object(w.a)();o.a.render(r.a.createElement(O,{domain:m.domain,client_id:m.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){E.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.74283d21.chunk.js.map