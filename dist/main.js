(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    color: aliceblue;\n    font-family: "Poppins", sans-serif;\n    overflow: none; /* Verhindert das Scrollen der Seite */\n    justify-content: center;\n    align-items: center;\n\n}\n\n\n/* Animation vom Hintergrund */\n.background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    background-image: url("https://images.unsplash.com/photo-1505064750047-f810f700e6d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");\n    background-size: cover; /* Damit das Bild den gesamten Bildschirm ausfüllt */\n    background-repeat: repeat; /* Bild nicht wiederholen */\n    filter: blur(10px); /* Hier wird der Hintergrund um 10 Pixel verwischt */\n   animation: slideBackground 40s linear infinite; /* Ändere die Geschwindigkeit und Dauer nach Bedarf */\n}\n\n@keyframes slideBackground {\n    0% {\n        background-position: center top;\n    }\n    100% {\n        background-position: center bottom;\n    }\n}\n\n\n/*Container = alle Elemente*/\n.container {\n    padding: 90px 90px; /* Padding wird angewendet */\n\n}\n\n\n.current-info{\n    justify-content: space-between;\n\n    background: rgba(24,24,27,0.1);\n    padding: 25px;\n    border-radius: 17px;\n\n\n}\n\n.Search-button-elm{\n    margin-left: auto;\n    transform: scale(0.7);\n\n}\n\n#city-input{\n    font-size: 25px;\n    font-weight: 300px;\n    background: transparent;\n    border: 2px solid rgb(252, 136, 68);\n    color: aliceblue; \n    padding: 10px;\n    border-radius: 20px;\n    font-size: 16px;\n    cursor: pointer;\n\n}\n\n#city-input:focus {\n    border-color: white; /* Rahmenfarbe auf Weiß ändern, wenn fokussiert */\n    outline: none; /* Standard-Fokusrahmen entfernen */\n}\n\n#city-input:hover{\n    border-color: white; \n    transition: border-color 0.3s;/* Rahmenfarbe auf Weiß ändern beim Hovern */\n}\n\n#search-btn:hover {\n    background-color: rgb(24,24,27,0.1);\n    transition: background-color 0.3s;\n}\n\n#search-btn {\n    background-color: rgb(252, 136, 68);\n    color: white;\n    cursor: pointer;\n    border: none;\n    border-radius: 40px;\n    font-size: 15px;\n    font-weight: 300px;\n    padding: 10px;\n\n}\n\n.location-searchbar{\n    margin-left: auto;\n    font-size: 25px;\n    font-weight: 300px;\n}\n\n.location-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.location-top {\n    display: flex;\n    margin-bottom: 0;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.location-container .time-zone{\n    margin-left: auto;\n    justify-content: center;\n    align-items: center;\n}\n\n.location-container .country-city{\n    align-items: center;\n    justify-content: center;\n    margin-top: 0;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n\n.weather-items{\n    text-align: center;\n\n}\n\n.weather-items .Temperatur{\n    font-size: 60px;\n    font-weight: 150;\n}\n\n/* °-Symbol in orange färben */\n.degree {\n    color:rgb(247, 108, 27);\n}\n\n.date-container{\n    display: flex;\n    justify-content: space-between;\n\n}\n\n.date {\n    margin-left: 10px;\n}\n\n.hourly-forecast-container {\n    display: flex;\n    justify-content: flex-start;\n\n    margin: 1px;\n    margin-top: 40px;\n    margin-bottom: 0px;\n    background: rgba(24,24,27,0.1);\n    padding: 25px;\n    border-radius: 15px;\n    overflow: auto;\n\n}\n\n.hourly-forecast-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center; /* Zentriert die Kinder-Elemente */\n    margin: 0 10px; /* Außenabstand zwischen den stündlichen Vorhersagen */\n    text-align: center;\n}\n\n.hourly-forecast-container .w-icon{\n    transform: scale(0.7);\n}\n\n.text-Vorhersage{\n    margin-right: auto;\n    margin: 20px 90px;\n    padding-bottom: 0;\n    margin-bottom: 10px;\n    font-weight: 200px;\n\n}\n\n.future-forecast {    \n    margin: 0px 90px; /* Füge einen Außenabstand hinzu, um den Rand nicht zu berühren */\n\n    overflow: auto;\n\n    justify-content: center;\n    background: rgba(24,24,27,0.1);\n    padding: 25px;\n    border-radius: 15px;\n    display: flex;\n    margin-bottom: 60px;\n    \n}\n\n.future-forecast .weather-forecast-item{\n    align-items: center;\n    justify-content: flex;\n    margin: 0 20px;\n    text-align: center;\n}\n\n.future-forecast .w-icon {\n    align-items: center;\n    justify-content: flex-start;\n\n}\n\n.future-forecast .day{\n    display: flex;\n    text-align: center;\n    \n    align-items: center;\n    justify-content: center;\n    background: rgba(24,24,27,0.1);\n    padding: 6px;\n    border-radius: 15px;\n    margin-bottom: 8px;\n}\n\n.future-forecast .temp {\n    margin-top: 10px;\n}\n\n.future-forecast .date {\n    display: flex;\n    font-weight: 400;\n    color:rgb(247, 108, 27);\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 5px;\n\n}\n\n\n\n\n/*Resizing für Smartphones*/\n@media only screen and (max-width:730px){\n    .future-forecast{\n        justify-content: flex-start;\n        padding: 70px;\n        margin: 5px 40px;\n    }\n}',""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(n,e,t){const r=document.getElementById("time-zone"),o=document.getElementById("country-city"),i=document.getElementById("weather-items");if(n.main&&void 0!==n.main.humidity&&void 0!==n.main.temp){let{humidity:a,temp:c}=n.main;r.innerHTML=`<div class="time-zone" id="time-zone">${t}</div>`,o.innerHTML=`<div class="country-city" id="country-city">${e}</div>`,i.innerHTML=`<div class="weather-items" id="weather-items">\n            <div class="Temperatur" id="Temperatur">${c}<span class="degree">°</span></div>\n            <div id="humidity">Luftfeuchtigkeit: ${a} %</div>\n        </div>`}else console.error("Weather data is missing required properties:",n)}const e="1ab9663b28c7c70557cf8779d5ca5c79";async function r(t){try{const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=${e}`),i=await r.json(),a=i.coord.lat,c=i.coord.lon;n(i,i.name,i.sys.country),await o(a,c),console.log(i)}catch(n){console.error("Error fetching weather data:",n)}}async function o(n,t){try{const r=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${n}&lon=${t}&units=metric&appid=${e}`),o=await r.json();!function(n){const e=document.getElementById("future-forecast"),t=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];let r="";for(let e=1;e<=7;e++){const o=new Date(1e3*n.daily[e].dt),i=t[o.getDay()],a=o.getDate(),c=o.getMonth()+1;r+=`<div class="weather-forecast-item" id="t-temp">\n            <img src="https://openweathermap.org/img/wn/${n.daily[e].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">\n             <div class="date">${a}.${c}</div>\n            <div class="day">${i}</div>\n            <div class="temp">Tag ${n.daily[e].temp.day} °</div>\n            <div class="temp">Nacht ${n.daily[e].temp.night} °</div>\n        </div>`}e.innerHTML=r}(o),function(n){const e=document.getElementById("hourly-forecast");e.innerHTML="";for(let t=0;t<24;t++){const r=n.hourly[t],o=new Date(1e3*r.dt).getHours(),i=r.temp,a=r.weather[0].icon,c=document.createElement("div");c.classList.add("hourly-forecast-item"),c.innerHTML=`\n            <div class="hour">${o}:00</div>\n            <img src="https://openweathermap.org/img/wn/${a}@2x.png" alt="weather icon" class="w-icon">\n            <div class="temp">${i}°</div>\n        `,e.appendChild(c)}}(o),console.log(o)}catch(n){console.error("Error fetching weather data:",n)}}var i=t(72),a=t.n(i),c=t(825),s=t.n(c),d=t(659),l=t.n(d),u=t(56),p=t.n(u),f=t(540),m=t.n(f),g=t(113),h=t.n(g),y=t(365),b={};b.styleTagTransform=h(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=m(),a()(y.A,b),y.A&&y.A.locals&&y.A.locals,document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.getElementById("time"),e=document.getElementById("date"),t=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],r=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];setInterval((()=>{const o=new Date,i=o.getMonth(),a=o.getDate(),c=o.getDay(),s=("0"+o.getHours()).slice(-2),d=("0"+o.getMinutes()).slice(-2);n.innerHTML=`${s}:${d}`,e.innerHTML=`${t[c]}, ${a} ${r[i]}`}),1e3)}(),function(){const n=document.getElementById("location-searchbar"),e=document.getElementById("location-top"),t=document.createElement("div");t.classList.add("Search-button-elm"),t.innerHTML='\n        <input type="text" id="city-input" placeholder="Stadt eingeben">\n        <button id="search-btn">Suche</button>\n    ',t.style.display="none",e.appendChild(t),document.getElementById("search-btn").addEventListener("click",(()=>{const e=document.getElementById("city-input").value;e&&(r(e),t.style.display="none",n.style.display="block")})),document.getElementById("city-input").addEventListener("keyup",(e=>{if("Enter"===e.key){const e=document.getElementById("city-input").value;e&&(r(e),t.style.display="none",n.style.display="block")}})),n.addEventListener("click",(function(){"none"===t.style.display?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")}))}(),navigator.geolocation.getCurrentPosition((t=>{!async function(t,r){try{const i=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${r}&units=metric&appid=${e}`),a=await i.json();n(a,a.name,a.sys.country),await o(t,r),console.log(a)}catch(n){console.error("Error fetching weather data:",n)}}(t.coords.latitude,t.coords.longitude)}),(n=>{console.error("Error getting location:",n)}))}))})()})();