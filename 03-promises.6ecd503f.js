!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector("form");function a(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))}function l(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}u.addEventListener("submit",(function(e){var n=function(e){var n=o+t*e,r=e+1;setTimeout((function(){(function(e,n){var o=Math.random()>.3;return new Promise((function(t,r){o?t({position:e,delay:n}):r({position:e,delay:n})}))})(r,n).then(a).catch(l).finally((function(){return u.reset()}))}),n)};e.preventDefault();for(var o=Number(u.delay.value),t=Number(u.step.value),r=Number(u.amount.value),i=0;i<r;i+=1)n(i)}))}();
//# sourceMappingURL=03-promises.6ecd503f.js.map