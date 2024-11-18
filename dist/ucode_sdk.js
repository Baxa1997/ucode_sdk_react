!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.UcodeSdk=e():t.UcodeSdk=e()}(this,(()=>(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>r});class o{constructor(t){this.config=t}login(t,e={}){const o=`${this?.config?.authBaseUrl}/v2/login?project-id=${this.config.project_id}`;return t.project_id||(t.project_id=this.config.project_id),this.request(o,"POST",t,e)}multiCompany(t,e={}){const o=`${this?.config?.authBaseUrl}/v2/multi-company/one-login?project-id=${this.config.project_id}`;return t.project_id||(t.project_id=this.config.project_id),this.request(o,"POST",t,e)}forgotPassword(t,e={}){const o=`${this?.config?.authBaseUrl}/v2/forgot-password?project-id=${this.config.project_id}`;return this.request(o,"POST",t,e)}loginWithOption(t,e={}){const o=`${this?.config?.authBaseUrl}/v2/login/with-option?project-id=${this.config.project_id}`;return this.request(o,"POST",t,e)}register(t,e={}){const o=`${this.config.authBaseUrl}/v2/register?project-id=${this.config.projectId}`;return this.request(o,"POST",t,e)}resetPassword(t,e={}){const o=`${this.config.authBaseUrl}/v2/reset-password`,i={authorization:"API-KEY","X-API-KEY":this.config.appId};return this.request(o,"PUT",t,{...i,...e})}sendCode(t,e={}){const o=`${this.config.authBaseUrl}/v2/send-code`;return this.request(o,"POST",t,e)}async request(t,e,o,i={}){const s={"Content-Type":"application/json",Authorization:`Bearer ${this.config?.token||""}`},r=await fetch(t,{method:e,headers:{...s,...i},body:JSON.stringify(o)});return r.ok?{status:"done",data:await r.json()}:{status:"error",data:{description:await r.json(),message:`Error ${e} ${t}`,error:r.statusText}}}}class i{constructor(t){this.config=t}fileUpload(t,e={}){const o=`${this?.config?.baseURL}/v1/files/folder_upload`;return this.request(o,"POST",t,e)}imageUpload(t,e={}){const o=`${this?.config?.baseURL}/v1/files/folder_upload?folder_name=Media`;return this.request(o,"POST",t,e)}videoUpload(t,e={}){const o=`${this?.config?.baseURL}/v1/files/folder_upload?project-id=${this.config.project_id}`;return this.request(o,"POST",t,e)}fileDelete(t,e={}){const o=`${this?.config?.baseURL}/v1/files/${t}`;return this.request(o,"DELETE",data,e)}async request(t,e,o,i={}){const s={method:e,headers:{authorization:"API-KEY","X-API-KEY":this.config.appId??void 0,"Resource-Id":this.config.resource_id??void 0,"Environment-Id":this.config?.env_id??void 0,...i}},r=new FormData;r.append("file",o),"GET"!==e&&"HEAD"!==e&&(s.body=r);const n=await fetch(t,s);return n.ok?{status:"done",data:await n.json()}:{status:"error",data:{description:await n.json(),message:`Error ${e} ${t}`,error:n.statusText}}}}class s{constructor(t){this.config=t}create(t,e,o={}){const i=`${this?.config?.baseURL}/v2/items/${t}`;return this.request(i,"POST",e,o)}update(t,e,o={}){const i=`${this?.config?.baseURL}/v2/items/${t}`;return this.request(i,"PUT",e,o)}delete(t,e,o="",i={}){let s;return s=e?.ids?`${this?.config?.baseURL}/v2/items/${t}/?project_id=${this?.config?.project_id}`:`${this?.config?.baseURL}/v2/items/${t}/${o}`,this.request(s,"DELETE",e,i)}getList(t,e,o={}){const i=`${this.config.baseURL}/v2/object-slim/get-list/${t}`,s=JSON.stringify(e?.data),r=`${i}?data=${encodeURIComponent(s)}&offset=${e.data.offset}&limit=${e.data.limit}`;return this.request(r,"GET",null,o)}async request(t,e,o,i={}){const s={method:e,headers:{authorization:"API-KEY","X-API-KEY":this.config.appId??void 0,"Resource-Id":this.config.resource_id??void 0,"Environment-Id":this.config?.env_id??void 0,...i}};"GET"!==e&&"HEAD"!==e&&(s.body=JSON.stringify(o));const r=await fetch(t,s);return r.ok?{status:"done",data:await r.json()}:{status:"error",data:{description:await r.json(),message:`Error ${e} ${t}`,error:r.statusText}}}}const r=class{constructor(t){if(!t||!t.baseURL)throw new Error("UcodeSdk Error: 'baseURL' is required in the configuration.");this.config=t}Auth(){return new o(this.config)}Items(){return new s(this.config)}Files(){return new i(this.config)}};return e})()));