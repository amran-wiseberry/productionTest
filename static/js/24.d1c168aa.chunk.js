(this.webpackJsonpdemo2=this.webpackJsonpdemo2||[]).push([[24],{2782:function(e,t,a){"use strict";var n=a(5),l=a(0),c=a.n(l),r=a(81),i=a(247),o=function(e){var t=e.fields,a=e.type,o=e.data,m=e.title,d=c.a.useState([""]),u=Object(n.a)(d,2),s=u[0],h=u[1],E=Object(l.useState)(null),g=Object(n.a)(E,2),p=g[0];g[1];Object(l.useEffect)((function(){console.log(t),h(Object.keys(o[0]).filter((function(e){return"id"!==e}))),t.removeAll(),o.forEach((function(e){t.push({data:e})}))}),[]);return c.a.createElement(l.Fragment,null,c.a.createElement("div",{style:{height:"30vh"},className:"tableTheme theme-table-striped pb-3 ".concat(a)},c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},c.a.createElement("input",{id:"".concat(t.name,"-checkToggle"),type:"checkbox",onChange:function(e){console.log("calleds");var a=t.getAll(),n=!!document.getElementById("".concat(t.name,"-checkToggle")).checked;t.removeAll(),a.forEach((function(e,l){a[l].selected=n,t.push(e)}))}})),s.map((function(e,t){return c.a.createElement(l.Fragment,null," ",0===t&&m?c.a.createElement("th",{key:t},m):c.a.createElement("th",{key:t},e))})))),c.a.createElement("tbody",null,t.map((function(e,a){var n;return c.a.createElement("tr",{key:a,onClick:function(){var e;return null===(e=t.get(a))||void 0===e||e.data,void console.log("called")},className:(null===(n=t.get(a))||void 0===n?void 0:n.data)===p?"row-selected":""},c.a.createElement("th",{scope:"row",onClick:function(e){return e.stopPropagation()}},c.a.createElement(r.a,{name:"".concat(e,".selected"),component:i.a,type:"checkbox"})),s.map((function(e,a){var n;return c.a.createElement("th",{key:a},null===(n=t.get(a))||void 0===n?void 0:n.data[e])})))}))))))};o.defaultProps={},t.a=o},2786:function(e,t,a){"use strict";var n=a(5),l=a(0),c=a.n(l),r=a(81),i=a(247);t.a=function(e){var t=e.data,a=e.title,o=e.name,m=e.type,d=c.a.useState([""]),u=Object(n.a)(d,2),s=u[0],h=u[1];Object(l.useEffect)((function(){h(Object.keys(t[0]).filter((function(e){return"id"!==e})))}),[]);var E=function(t){var a=t.currentTarget.dataset.id;e.change(o,a)};return c.a.createElement(l.Fragment,null,c.a.createElement("div",{style:{height:"30vh"},className:"tableTheme theme-table-striped pb-3 ".concat(m)},c.a.createElement("table",{class:"table table-hover",id:"job-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,s.map((function(e,t){return c.a.createElement(l.Fragment,null," ",0===t&&a?c.a.createElement("th",{key:t},a):c.a.createElement("th",{key:t},e))})))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement(l.Fragment,null,c.a.createElement("tr",{key:t,"data-id":e.id,onClick:E},console.log(e),s.length>0?s.map((function(t,a){return c.a.createElement("td",{key:a},0===a?c.a.createElement(r.a,{name:o,component:i.a,type:"radio",value:e.id,label:e[t]}):e[t])})):""))}))))))}},3060:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=(a(2782),a(2786));t.default=function(e){var t;return console.log(e),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"appointment-right d-flex flex-column p-2"},l.a.createElement("div",null,l.a.createElement(c.a,{change:e.change,data:[{id:"1",name:"Winston Russel"},{id:"2",name:"Mallory Stokes"},{id:"3",name:"Arvilla Romaguera"},{id:"4",name:"Shanon Cole"},{id:"5",name:"Richard Stehr"},{id:"6",name:"Ralph Herzog"},{id:"7",name:"Rasheed Bogisich"},{id:"8",name:"Tony Frami"},{id:"9",name:"Alvera Cole"},{id:"10",name:"Sheridan Schmitt MD"},{id:"11",name:"Shanon Bode"},{id:"12",name:"Zoie Schultz DVM"},{id:"13",name:"Gerald Swaniawski I"},{id:"14",name:"Gabriel Bauch"},{id:"15",name:"Ellen Fritsch"},{id:"16",name:"Ardella Beer"},{id:"17",name:"Frederique Senger"},{id:"18",name:"Keenan Keeling"},{id:"19",name:"Flo Olson"},{id:"20",name:"Leslie Stracke"},{id:"21",name:"Cary Hickle"},{id:"22",name:"Margaret Olson DDS"},{id:"23",name:"Shakira Boehm"}],title:"Rental",type:null===e||void 0===e||null===(t=e.type)||void 0===t?void 0:t.value,name:"rental"}))))}}}]);
//# sourceMappingURL=24.d1c168aa.chunk.js.map