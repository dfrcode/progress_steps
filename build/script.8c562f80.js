parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wgu1":[function(require,module,exports) {

},{}],"MO7r":[function(require,module,exports) {
"use strict";require("../css/style.scss");var e=document.getElementById("progress"),t=document.getElementById("prev"),c=document.getElementById("next"),n=document.querySelectorAll(".container_progress_circle"),l=1;function s(){n.forEach(function(e,t){t<l?e.classList.add("active"):e.classList.remove("active")});var t=document.querySelectorAll(".active");e.style.width="".concat((t.length-1)/(n.length-1)*100,"%"),console.log(e.style.width)}c.addEventListener("click",function(){++l>n.length-1&&(l=n.length,c.disabled=!0),t.disabled=!1,s()}),t.addEventListener("click",function(){--l<2&&(l=1,t.disabled=!0),c.disabled=!1,s()});
},{"../css/style.scss":"wgu1"}]},{},["MO7r"], null)
//# sourceMappingURL=/script.8c562f80.js.map