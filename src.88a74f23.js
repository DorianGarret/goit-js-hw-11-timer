parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({6:[function(require,module,exports) {

},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class t{constructor({selector:t,targetDate:e}){this.targetDate=e,this.selector=t,this.deltaTime,this.time,this.start()}start(){setInterval(()=>{const t=Date.now();this.deltaTime=this.targetDate-t,this.time=this.getTimeComponents(this.deltaTime),this.clockInterface(this.time)},1e3)}clockInterface({days:t,hours:e,mins:s,secs:a}){document.querySelectorAll(`${this.selector} .value`).forEach(r=>{switch(r.dataset.value){case"days":r.textContent=t;break;case"hours":r.textContent=e;break;case"mins":r.textContent=s;break;case"secs":r.textContent=a}})}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}}exports.CountdownTimer=t;
},{}],7:[function(require,module,exports) {
"use strict";var e=require("./countdown-timer");const t=new e.CountdownTimer({selector:"#timer-1",targetDate:new Date("Dec 31, 2021, 23:59:00")});t.start();
},{"./countdown-timer":11}],4:[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/timer");
},{"./sass/main.scss":6,"./js/timer":7}]},{},[4], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.88a74f23.map