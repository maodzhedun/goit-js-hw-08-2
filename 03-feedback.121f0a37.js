function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var o,i,r,f,u,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,u=setTimeout(O,t),l?y(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=r}function O(){var e=p();if(h(e))return w(e);u=setTimeout(O,function(e){var n=t-(e-a);return s?v(n,r-(e-c)):n}(e))}function w(e){return u=void 0,g&&o?y(e):(o=i=void 0,f)}function T(){var e=p(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===u)return j(a);if(s)return u=setTimeout(O,t),y(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=b(t)||0,m(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=i=u=void 0},T.flush=function(){return void 0===u?f:w(p())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");let j={};y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(j),localStorage.removeItem("feedback-form-state"),y.reset()})),function(){const e=localStorage.getItem("feedback-form-state");if(!e)return;j=JSON.parse(e),console.log(j),Object.entries(j).forEach((([e,t])=>{y.elements[e].value=t}))}();
//# sourceMappingURL=03-feedback.121f0a37.js.map
