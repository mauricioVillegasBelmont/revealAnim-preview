(()=>{"use strict";class t{static async submit(t,e,s){return new Promise((n=>{fetch(t,{method:e,headers:{"Cache-Control":"no-cache"},body:s}).then((t=>t.json())).then((t=>{n(t)}))}))}}class e{api=t;constructor(t,e){this.form=t,this.callback=e,this.bindEvents()}bindEvents(){const t=this;this.form.addEventListener("submit",(async e=>{e.preventDefault(),t.submit()}))}get formData(){return new FormData(this.form)}submit(){const t=this.formData,e=this.form.action,s=this.form.method.toUpperCase();t&&e&&s&&this.api.submit(e,s,t).then((t=>{this.callback(t)}))}}class s{static success(t){t.redirect&&(window.location.href=t.redirect)}static wrong(t){const e=document.getElementById("error_msg");if(!e)return;e.innerHTML="";const s=document.createElement("p"),n=document.createTextNode(t.msg);s.appendChild(n),s.classList.add("c__error","text--center","my--5"),e.appendChild(s)}}const n=document.querySelectorAll("form");n&&n.forEach((t=>{new Promise((s=>{new e(t,(t=>s(t)))})).then((t=>"ok"==t.status?s.success(t):s.wrong(t)))}))})();