(()=>{"use strict";var e={57:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(379),r=n.n(a),o=n(364),i=n.n(o)()(r());i.push([e.id,".entryPage--eKzjh{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 500px;\n    justify-content: center;\n}\n\n.form_content--FIfZo{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.title-game--u5IXs{\n    padding-bottom: 50px;\n    font-size: 25px;\n}\n\nform{\n    width: 250px;\n}",""]),i.locals={entryPage:"entryPage--eKzjh",form_content:"form_content--FIfZo","title-game":"title-game--u5IXs"};const s=i},333:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <title>Document</title> </head> <body> </body> </html>'},364:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);a&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},379:e=>{e.exports=function(e){return e[1]}},922:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(72),r=n.n(a),o=n(206),i=n.n(o),s=n(659),l=n.n(s),u=n(56),c=n.n(u),d=n(540),f=n.n(d),p=n(113),m=n.n(p),h=n(57),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),r()(h.A,v);const g=h.A&&h.A.locals?h.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],u=a.base?l[0]+a.base:l[0],c=o[u]||0,d="".concat(u," ").concat(c);o[u]=c+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=r(p,a);a.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var l=a(e,r),u=0;u<o.length;u++){var c=n(o[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=l}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},206:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},675:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(880)),o=a(n(825)),i=a(n(779));class s{constructor(){const e=this.createView();this.routing=new r.default(e)}loadEntryPage(){this.routing.navigate("login-page")}createView(){return[{path:"login-page",callback:()=>{s.addContent(new o.default(this.routing))}},{path:"main-page",callback:()=>{s.addContent(new i.default(this.routing))}}]}static addContent(e){document.body.innerHTML="",document.body.append(e.getElement())}}t.default=s},433:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(653));t.default=({txt:e,onClick:t,className:n})=>new r.default({tag:"button",className:`${n||""}`,onclick:()=>{t?.()},textContent:e})},292:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.input=t.label=t.ul=t.div=void 0;const r=a(n(653));t.div=(e,...t)=>new r.default({tag:"div",...e},...t),t.ul=(e,...t)=>new r.default({tag:"ul",...e},...t),t.label=(e,...t)=>new r.default({tag:"label",...e},...t),t.input=(e,t,n,a,o,i,s)=>{const l=new r.default({tag:"input"});return l.setAttribute("type",o),e&&l.setAttribute("name",e),t&&l.setAttribute("pattern",t),a&&l.setAttribute("placeholder",a),n&&l.setAttribute("minlength",n),i&&l.setAttribute("title",i),s&&l.addClass(s),l}},653:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=n(264);class r{constructor(e,...t){const n=document.createElement(e.tag);e.className&&n.classList.add(e.className),e.textContent&&(n.textContent=e.textContent),Object.assign(n,e),this.element=n,t&&t.forEach((e=>{(0,a.notNullable)(e)&&this.append(e)}))}setContent(e){this.element.textContent=e}setInnerHtml(e){this.element.innerHTML=e}addClass(e){this.element.classList.add(e)}removeClass(e){this.element.classList.remove(e)}getElement(){return this.element}append(e){if(e instanceof r){const t=e.getElement();this.element.append(t)}else this.element.append(e)}remove(){this.element.remove()}appendChildren(...e){e.filter(a.notNullable).forEach((e=>{this.append(e)}))}addListener(e,t){this.element.addEventListener(e,t)}setAttribute(e,t){this.element.setAttribute(e,t)}}t.default=r},264:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.notNullable=void 0,t.default=function(e){return null==e},t.notNullable=function(e){return null!=e}},880:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.routes=e;const t=this.navigate.bind(this);window.addEventListener("hashchange",t)}navigate(e){"string"==typeof e&&(window.location.href=`${window.location.href.replace(/#(.*)$/,"")}#${e}`);const t=window.location.hash.slice(1),n=this.routes.find((e=>e.path===t));if(!n)throw new Error("page not found!");n.callback()}}},0:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(292),o=a(n(653));class i extends o.default{constructor(e){super({tag:"form",className:"form_content"},(0,r.input)("userName","^[A-Z][\\-a-zA-z]+$","3","E-mail","text","Only english first word uppercase, min 3 char","input_name"),(0,r.input)("userSurname","^[A-Z][\\-a-zA-z]+$","4","Password","password","Only english, first word uppercase, min 4 char","input_password"),(0,r.input)("","","","","submit","","input_check")),this.inputData={name:"",surname:""},this.routing=e;const t=this.submitHandler.bind(this);this.element.addEventListener("submit",t),this.element.addEventListener("keydown",(e=>{e.code}))}submitHandler(e){e.preventDefault(),this.setData(),this.saveData(),this.validateFillForm()}setData(){const e=new FormData(this.getElement());this.inputData.name=e.get("userName"),this.inputData.surname=e.get("userSurname")}validateFillForm(){""!==this.inputData.name&&""!==this.inputData.surname&&this.routing.navigate("main-page")}saveData(){window.localStorage.setItem("logData",JSON.stringify(this.inputData))}}t.default=i},825:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(292),o=a(n(653)),i=a(n(0));class s extends o.default{constructor(e){super({tag:"div",className:"entryPage"},(0,r.div)({className:"title-game",textContent:"E-Commerce"}),new i.default(e))}}t.default=s},779:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(433)),o=n(292),i=a(n(653));class s extends i.default{constructor(e){super({tag:"div",className:"startPage"},(0,o.div)({className:"title-game",textContent:"E-COMM"}),(0,r.default)({txt:"Log Out",onClick:()=>{window.localStorage.clear(),this.routing.navigate("login-page")},className:"btn__start-page"})),this.routing=e}}t.default=s},156:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(675));n(333),n(922),(new r.default).loadEntryPage()}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(156)})();