import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as m,i as f}from"./assets/vendor-651d7991.js";const o=document.querySelector("[data-start]"),a=document.querySelector("#datetime-picker"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let c=null;o.disabled=!0;o.addEventListener("click",q);const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:D};m(a,b);function D(t){const e=Date.now();t[0]<e?(f.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(c=t[0],o.disabled=!1)}function q(){o.disabled=!0,a.disabled=!0;const t=setInterval(()=>{const e=Date.now(),n=c-e;E(v(n)),n<1e3&&(a.disabled=!1,clearInterval(t))},1e3);a.value=null}function v(t){const u=r(Math.floor(t/864e5)),d=r(Math.floor(t%864e5/36e5)),i=r(Math.floor(t%864e5%36e5/6e4)),l=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:u,hours:d,minutes:i,seconds:l}}function r(t){return String(t).padStart(2,"0")}function E({days:t,hours:e,minutes:n,seconds:s}){h.textContent=t,y.textContent=e,S.textContent=n,p.textContent=s}
//# sourceMappingURL=commonHelpers.js.map
