(()=>{"use strict";var e,a,f,t,r,d={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=d,b.c=c,e=[],b.O=(a,f,t,r)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,r<d&&(d=r));if(c){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,f({}),f([]),f(f)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",188:"a30447cd",285:"85beea7a",749:"0a2d6954",842:"677631d7",948:"8717b14a",1175:"e76baf7a",1418:"84644ffd",1677:"df59ef19",1914:"d9f32620",1932:"2604f07c",2084:"d38f5d2d",2267:"59362658",2362:"e273c56f",2535:"814f3328",3085:"1f391b9e",3089:"a6aa9e1f",3190:"2d4d02d4",3514:"73664a40",3608:"9e4087bc",4013:"01a85c17",4120:"b841ecd6",4195:"c4f5d8e4",4692:"9abed4f8",5267:"de3af8e2",5725:"ba2ccc33",6055:"3863f2f9",6103:"ccc49370",6282:"c83d44eb",6517:"bf92473b",6778:"bf8a20f9",6836:"fea1970e",6898:"31059e22",6971:"c377a04b",7223:"0af68dd9",7414:"393be207",7918:"17896441",8610:"6875c492",8636:"f4f34a3a",8787:"ebb168e3",8793:"a0463835",9003:"925b3f96",9368:"68882368",9412:"0f4e174a",9462:"6223cea7",9484:"87e64f78",9488:"f7b315dc",9514:"1be78505",9642:"7661071f",9817:"14eb3368",9915:"27aaba3e"}[e]||e)+"."+{53:"ed32689a",188:"cd883cd7",210:"142cd7d2",285:"04d34c1a",749:"77a3f3f4",842:"5dd01490",948:"ed7ecd19",1175:"345a5582",1418:"08cb27f1",1677:"7feb2bf1",1914:"0f94b239",1932:"ce4e604f",2084:"0ead9382",2267:"e000f717",2362:"5db95a58",2529:"131daa5b",2535:"3855a187",3085:"0b389e4f",3089:"3a9869d0",3190:"25eb0d82",3514:"4714e43e",3608:"2fd80820",4013:"90822575",4120:"d9542193",4195:"0b0de623",4692:"b8dc6510",4972:"d9ee4b58",5267:"bb449485",5725:"91531769",6055:"2dd78526",6103:"8eb3f77a",6282:"cb3cdf11",6517:"bfbe49bf",6778:"e126a137",6836:"8198cec1",6898:"883d7319",6971:"b6ba6ea4",7223:"f9e23d10",7414:"6a5f3d27",7918:"8fad736f",8610:"0bee00f0",8636:"746af906",8787:"c9388c9b",8793:"74dd8964",9003:"7d014c52",9368:"7852a1f0",9412:"7b2c3649",9462:"b9eae74b",9484:"40ddb0f3",9488:"77e3c02f",9514:"758997d5",9642:"8e6a3f93",9817:"2cdeaf7d",9915:"5f1fab9f"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="doku:",b.l=(e,a,f,d)=>{if(t[e])t[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",r+f),c.src=e),t[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/doku/",b.gca=function(e){return e={17896441:"7918",59362658:"2267",68882368:"9368","935f2afb":"53",a30447cd:"188","85beea7a":"285","0a2d6954":"749","677631d7":"842","8717b14a":"948",e76baf7a:"1175","84644ffd":"1418",df59ef19:"1677",d9f32620:"1914","2604f07c":"1932",d38f5d2d:"2084",e273c56f:"2362","814f3328":"2535","1f391b9e":"3085",a6aa9e1f:"3089","2d4d02d4":"3190","73664a40":"3514","9e4087bc":"3608","01a85c17":"4013",b841ecd6:"4120",c4f5d8e4:"4195","9abed4f8":"4692",de3af8e2:"5267",ba2ccc33:"5725","3863f2f9":"6055",ccc49370:"6103",c83d44eb:"6282",bf92473b:"6517",bf8a20f9:"6778",fea1970e:"6836","31059e22":"6898",c377a04b:"6971","0af68dd9":"7223","393be207":"7414","6875c492":"8610",f4f34a3a:"8636",ebb168e3:"8787",a0463835:"8793","925b3f96":"9003","0f4e174a":"9412","6223cea7":"9462","87e64f78":"9484",f7b315dc:"9488","1be78505":"9514","7661071f":"9642","14eb3368":"9817","27aaba3e":"9915"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var d=b.p+b.u(a),c=new Error;b.l(d,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",c.name="ChunkLoadError",c.type=r,c.request=d,t[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,d=f[0],c=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(t in c)b.o(c,t)&&(b.m[t]=c[t]);if(o)var i=o(b)}for(a&&a(f);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunkdoku=self.webpackChunkdoku||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();