(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a(4),r=a(6),s=a(1),u=a.n(s),o=a(5),l=a.n(o),h=(a(12),a(0));function p(t,e){return 0===e.length?[[t]]:e.map((function(e){return[t].concat(Object(h.a)(e))}))}function i(t){var e=function(t){return 0===t.length?[]:1===t.length?[[t]]:2===t.length?[[t[0],t[1]],[t]]:3===t.length?[[t.substr(0,1),t.substr(1,1),t.substr(2,1)],[t.substr(0,1),t.substr(1,2)],[t.substr(0,2),t.substr(2,1)],[t]]:[].concat(Object(h.a)(p(t.substr(0,1),i(t.substr(1)))),Object(h.a)(p(t.substr(0,2),i(t.substr(2)))),Object(h.a)(p(t.substr(0,3),i(t.substr(3)))),Object(h.a)(p(t.substr(0,4),i(t.substr(4)))))}(t);for(var a in e)e[a]=e[a].map((function(t){return t.replace(/0+(.+)/,"$1")}));return e}function b(t){for(var e=[],a=[],n=[],c=0;c<t.length-1;c++)for(var r=c+1;r<t.length;r++){var s=1*t[c]+1*t[r];e.push("".concat(s)),a.push([c,r]),n.push("(".concat(t[c]," + ").concat(t[r]," = ").concat(s,")"));var u=Math.abs(1*t[c]-1*t[r]);e.push("".concat(u)),a.push([c,r]),n.push("(".concat(t[c]," - ").concat(t[r]," = ").concat(u,")"))}for(var o=e.length,l=0;l<o-1;l++)for(var p=Math.max.apply(Math,Object(h.a)(a[l]))+1;p<t.length;p++){var i=1*e[l]+1*t[p];e.push("".concat(i)),a.push([].concat(Object(h.a)(a[l]),[p])),n.push("".concat(n[l]," (").concat(e[l]," + ").concat(t[p]," = ").concat(i,")"));var b=Math.abs(1*e[l]-1*t[p]);e.push("".concat(b)),a.push([].concat(Object(h.a)(a[l]),[p])),n.push("".concat(n[l]," (").concat(e[l]," - ").concat(t[p]," = ").concat(b,")"))}for(var v=0;v<o-1;v++)for(var f=v+1;f<o;f++)if(Math.max.apply(Math,Object(h.a)(a[v]))<Math.min.apply(Math,Object(h.a)(a[f]))){var m=1*e[v]+1*e[f];e.push("".concat(m)),a.push([].concat(Object(h.a)(a[v]),Object(h.a)(a[f]))),n.push("".concat(n[v]," ").concat(n[f]," (").concat(e[v]," + ").concat(e[f]," = ").concat(m,")"));var g=Math.abs(1*e[v]-1*e[f]);e.push("".concat(g)),a.push([].concat(Object(h.a)(a[v]),Object(h.a)(a[f]))),n.push("".concat(n[v]," ").concat(n[f]," (").concat(t[v]," - ").concat(t[f]," = ").concat(g,")"))}return{results:e,indexesUsedForResult:a,operations:n}}function v(t,e){var a="",n=!0,c=!1,r=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){a+=t[s.value]}}catch(l){c=!0,r=l}finally{try{n||null==u.return||u.return()}finally{if(c)throw r}}for(var o=e[e.length-1]+1;o<t.length;o++)a+=t[o];return a}function f(t,e){var a=e.substr(0,t.length)===t,n="";return a&&(n=e.substr(t.length)),{answer:a,newTarget:n}}var m=!1,g=!1;l.a.render(u.a.createElement((function(){var t=Object(s.useState)({target:"",host:""}),e=Object(r.a)(t,2),a=e[0],o=e[1],l=function(t){var e=t.target,r=e.name,s=e.value;o(Object(c.a)({},a,Object(n.a)({},r,s)))},p=a.target&&a.host&&function t(e,a){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&(m=!1,g=!1);var c=i(a),r=!0,s=!1,u=void 0;try{for(var o,l=function(){var a=o.value,n=b(a),c=n.results,r=n.indexesUsedForResult,s=n.operations;for(var u in m||r.filter((function(t,e){var a=t.indexOf(0)>=0;return a||c.splice(e),a})),m=!0,c){var l=f(c[u],e),p=l.answer,i=l.newTarget;if(p){if(g||(g=r[u][r[u].length-1]===a.length-1),""===i&&g)return{v:{success:!0,steps:[s[u]]}};var j=t(i,v(a,r[u])),y=j.success,O=j.steps;if(y)return{v:{success:y,steps:[s[u]].concat(Object(h.a)(O))}}}}},p=c[Symbol.iterator]();!(r=(o=p.next()).done);r=!0){var j=l();if("object"===typeof j)return j.v}}catch(y){s=!0,u=y}finally{try{r||null==p.return||p.return()}finally{if(s)throw u}}return{success:!1,steps:[]}}(a.target,a.host,!0);return u.a.createElement("div",null,u.a.createElement("h1",null,"Find the target"),u.a.createElement("div",null,u.a.createElement("label",null,u.a.createElement("span",null,"Target:"),u.a.createElement("input",{type:"number",name:"target",value:a.target,onChange:l,autoFocus:!0})),u.a.createElement("label",null,u.a.createElement("span",null,"Host:"),u.a.createElement("input",{type:"number",name:"host",value:a.host,onChange:l})),p&&u.a.createElement("div",{className:"result ".concat(p.success&&"SUCCESS")},u.a.createElement("span",null,p.success?"SUCCESS":"FAIL"),p.success&&u.a.createElement("ol",null,p.steps.map((function(t,e){return u.a.createElement("li",{key:e},u.a.createElement("pre",null,t))}))))))}),null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c368fd30.chunk.js.map