import"./assets/modulepreload-polyfill-ec808ebb.js";import{i}from"./assets/vendor-651d7991.js";const n=document.querySelector(".form"),c=n.querySelector('[name="delay"]'),l=n.querySelectorAll('[name="state"]');function m(e,r){return new Promise((o,s)=>{setTimeout(()=>{r==="fulfilled"?o(e):s(e)},e)})}n.addEventListener("submit",e=>{e.preventDefault();const r=Number(c.value),o=Array.from(l).find(t=>t.checked),s=o?o.value:null;m(r,s).then(t=>{i.success({title:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{i.error({title:`❌ Rejected promise in ${t}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
