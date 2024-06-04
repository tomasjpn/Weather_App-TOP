(()=>{"use strict";var n,e,t,r,a,o,i,c,s,d,u,l,p,f,m={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    color: aliceblue;\n    font-family: "Poppins", sans-serif;\n    overflow: none; /* Verhindert das Scrollen der Seite */\n    justify-content: center;\n    align-items: center;\n\n}\n\n\n/*Animation vom Hintergrund*/\n.background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    background-image: url("https://images.unsplash.com/photo-1505064750047-f810f700e6d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");\n    background-size: cover; /* Damit das Bild den gesamten Bildschirm ausfüllt */\n    background-repeat: repeat; /* "Motion Tile"-Effekt: Das Bild wird wiederholt, um den gesamten Bildschirm auszufüllen */\n    filter: blur(10px); /* Hier wird der Hintergrund um 5 Pixel verwischt */\n    backdrop-filter: blur(5px); /* Falls vorhanden, verwendet backdrop-filter (für neuere Browser) */\n    animation: slideBackground 20s linear 10px;\n    animation: slideBackground 200s linear 10px; /* Ändere die Geschwindigkeit und Dauer nach Bedarf */\n}\n\n@keyframes slideBackground {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(+100%);\n    }\n}\n\n/*Container = alle Elemente*/\n.container {\n    padding: 90px 90px; /* Padding wird angewendet */\n\n}\n\n\n.current-info{\n    justify-content: space-between;\n\n    background: rgba(24,24,27,0.1);\n    padding: 25px;\n    border-radius: 17px;\n\n\n}\n\n.location-container{\n    text-align: center;\n}\n\n\n.location-container .country-city{\n    font-size: 10px;\n    font-weight: 600;\n}\n\n.weather-items{\n    text-align: center;\n\n}\n\n.weather-items .Temperatur{\n    font-size: 60px;\n    font-weight: 150;\n}\n\n.date-container{\n    display: flex;\n    justify-content: space-between;\n\n}\n\n.date {\n    margin-left: 10px;\n}\n\n\n.future-forecast {    \n    margin: 20px 90px; /* Füge einen Außenabstand hinzu, um den Rand nicht zu berühren */\n    padding: 25px; /* Padding wird angewendet */\n\n    overflow: auto;\n\n    justify-content: center;\n    background: rgba(24,24,27,0.1);\n    padding: 25px;\n    border-radius: 15px;\n    display: flex;\n}\n\n.future-forecast .weather-forecast-item{\n    align-items: center;\n    justify-content: center;\n    margin: 0 20px;\n    text-align: center;\n\n}\n\n.future-forecast .day{\n    align-items: center;\n    justify-content: center;\n    background: rgba(24,24,27,0.1);\n    padding: 6px;\n    border-radius: 15px;\n    margin-bottom: 5px;\n}\n\n.future-forecast .temp {\n    margin-top: 10px;\n}\n\n\n/*Resizing für Smartphones*/\n\n@media only screen and (max-width:730px){\n    .future-forecast{\n        justify-content: start;\n        align-items: none;\n        overflow: scroll;\n        padding: 70px;\n        margin: 5px 40px;\n    }\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var u=t(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(72),e=h.n(n),t=h(825),r=h.n(t),a=h(659),o=h.n(a),i=h(56),c=h.n(i),s=h(540),d=h.n(s),u=h(113),l=h.n(u),p=h(365),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(p.A,f),p.A&&p.A.locals&&p.A.locals,function(){document.getElementById("time-zone"),document.getElementById("country-city"),document.getElementById("weather-items");const n=document.getElementById("time"),e=document.getElementById("date"),t=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],r=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];setInterval((()=>{const a=new Date,o=a.getMonth(),i=a.getDate(),c=(a.getDay(),a.getHours()),s=a.getMinutes();n.innerHTML=c+":"+s,e.innerHTML=t[i]+", "+i+" "+r[o]}),1e3),navigator.geolocation.getCurrentPosition((n=>{let{latitude:e,longtitude:t}=n.coords;fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${e}&lon=${t}&exclude=hourly.minutely&appid=245c48a832ecbd1739e093d99b9a5eba`).then((n=>n.json().then((n=>{console.log(date)}))))}))}()})();