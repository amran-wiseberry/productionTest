(this.webpackJsonpdemo2=this.webpackJsonpdemo2||[]).push([[17],{2779:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=(a(2781),a(1)),r=a(13),c=a(53),o=a.n(c),u=a(124),s=a(205),d=a(248),m=a(2699),g=a(2700),p=l.a.forwardRef((function(e,t){var a=Object(u.b)(e,{value:"onChange"}),n=a.children,c=a.type,g=a.name,p=a.value,h=a.onChange,f=Object(r.a)(a,["children","type","name","value","onChange"]),v=function(){return null==p?[]:[].concat(p)};return"radio"!==c||g||o()(!1),l.a.createElement(m.a,Object(i.a)({},f,{ref:t,toggle:!0}),Object(d.b)(n,(function(e){var t=v(),a=e.props,n=a.value,i=a.onChange;return l.a.cloneElement(e,{type:c,name:e.name||g,checked:-1!==t.indexOf(n),onChange:Object(s.a)(i,(function(e){return function(e,t){var a=v(),n=-1!==a.indexOf(e);"radio"!==c?h(n?a.filter((function(t){return t!==e})):[].concat(a,[e]),t):n||h(e,t)}(n,e)}))})})))}));p.defaultProps={type:"radio"},p.Button=g.a;var h=p;function f(e){var t=e.input,a=e.options,i=e.toggleColor;console.log(t.value);return console.log(t),l.a.createElement(n.Fragment,null,l.a.createElement(h,{className:"themeButton-toggle-group "+i,onChange:function(e){t.onChange(e),console.log(e)},type:"radio",defaultValue:null===t||void 0===t?void 0:t.value,name:"options"},a.map((function(e,t){return l.a.createElement(g.a,{value:e.value},e.label)}))))}a.d(t,"a",(function(){return f}))},2782:function(e,t,a){"use strict";var n=a(5),l=a(0),i=a.n(l),r=a(81),c=a(247),o=function(e){var t=e.fields,a=e.type,o=e.data,u=e.title,s=i.a.useState([""]),d=Object(n.a)(s,2),m=d[0],g=d[1],p=Object(l.useState)(null),h=Object(n.a)(p,2),f=h[0];h[1];Object(l.useEffect)((function(){console.log(t),g(Object.keys(o[0]).filter((function(e){return"id"!==e}))),t.removeAll(),o.forEach((function(e){t.push({data:e})}))}),[]);return i.a.createElement(l.Fragment,null,i.a.createElement("div",{style:{height:"30vh"},className:"tableTheme theme-table-striped pb-3 ".concat(a)},i.a.createElement("table",{class:"table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},i.a.createElement("input",{id:"".concat(t.name,"-checkToggle"),type:"checkbox",onChange:function(e){console.log("calleds");var a=t.getAll(),n=!!document.getElementById("".concat(t.name,"-checkToggle")).checked;t.removeAll(),a.forEach((function(e,l){a[l].selected=n,t.push(e)}))}})),m.map((function(e,t){return i.a.createElement(l.Fragment,null," ",0===t&&u?i.a.createElement("th",{key:t},u):i.a.createElement("th",{key:t},e))})))),i.a.createElement("tbody",null,t.map((function(e,a){var n;return i.a.createElement("tr",{key:a,onClick:function(){var e;return null===(e=t.get(a))||void 0===e||e.data,void console.log("called")},className:(null===(n=t.get(a))||void 0===n?void 0:n.data)===f?"row-selected":""},i.a.createElement("th",{scope:"row",onClick:function(e){return e.stopPropagation()}},i.a.createElement(r.a,{name:"".concat(e,".selected"),component:c.a,type:"checkbox"})),m.map((function(e,a){var n;return i.a.createElement("th",{key:a},null===(n=t.get(a))||void 0===n?void 0:n.data[e])})))}))))))};o.defaultProps={},t.a=o},2786:function(e,t,a){"use strict";var n=a(5),l=a(0),i=a.n(l),r=a(81),c=a(247);t.a=function(e){var t=e.data,a=e.title,o=e.name,u=e.type,s=i.a.useState([""]),d=Object(n.a)(s,2),m=d[0],g=d[1];Object(l.useEffect)((function(){g(Object.keys(t[0]).filter((function(e){return"id"!==e})))}),[]);var p=function(t){var a=t.currentTarget.dataset.id;e.change(o,a)};return i.a.createElement(l.Fragment,null,i.a.createElement("div",{style:{height:"30vh"},className:"tableTheme theme-table-striped pb-3 ".concat(u)},i.a.createElement("table",{class:"table table-hover",id:"job-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,m.map((function(e,t){return i.a.createElement(l.Fragment,null," ",0===t&&a?i.a.createElement("th",{key:t},a):i.a.createElement("th",{key:t},e))})))),i.a.createElement("tbody",null,t.map((function(e,t){return i.a.createElement(l.Fragment,null,i.a.createElement("tr",{key:t,"data-id":e.id,onClick:p},console.log(e),m.length>0?m.map((function(t,a){return i.a.createElement("td",{key:a},0===a?i.a.createElement(r.a,{name:o,component:c.a,type:"radio",value:e.id,label:e[t]}):e[t])})):""))}))))))}},3061:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a(81),c=(a(2782),a(2779)),o=a(272),u=a(2786);t.default=function(e){var t,a;return console.log(e),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"appointment-right d-flex flex-column p-2"},l.a.createElement("div",{className:"pb-3"},l.a.createElement(u.a,{change:e.change,data:[{id:"1",listing:"7246 Jacobson Trafficway",price:"93073478"},{id:"2",listing:"26180 Eric Gardens",price:"98215921"},{id:"3",listing:"445 Neha Knoll",price:"61436183"},{id:"4",listing:"8934 Jamison Wall",price:"45511490"},{id:"5",listing:"01428 Chyna Land",price:"22406971"},{id:"6",listing:"9822 Mara Prairie",price:"71194137"},{id:"7",listing:"20631 Cartwright Meadows",price:"87782618"},{id:"8",listing:"4219 Kulas Harbors",price:"07177832"},{id:"9",listing:"9709 Mitchell Trafficway",price:"88185456"},{id:"10",listing:"47442 Hickle Green",price:"82470616"},{id:"11",listing:"677 Cory Summit",price:"09365916"},{id:"12",listing:"4696 Greenholt Shore",price:"70314644"},{id:"13",listing:"2176 Jeanne Springs",price:"81389538"},{id:"14",listing:"58173 Gottlieb Motorway",price:"30738327"},{id:"15",listing:"00647 Bayer Manors",price:"54972369"},{id:"16",listing:"40116 Kiehn Camp",price:"34032202"},{id:"17",listing:"389 Russel Crossroad",price:"92098963"},{id:"18",listing:"3078 Shanahan Branch",price:"91860172"},{id:"19",listing:"0139 Vada Villages",price:"74280622"},{id:"20",listing:"17856 Padberg Spur",price:"67569519"},{id:"21",listing:"71077 Schuppe Village",price:"73998858"},{id:"22",listing:"024 Shea Locks",price:"26495479"},{id:"23",listing:"549 Jamal Valley",price:"97112736"}],title:"Listing",type:null===e||void 0===e||null===(t=e.type)||void 0===t?void 0:t.value,name:"listing"})),l.a.createElement(i.a,{left:"Location",right:l.a.createElement(r.a,{name:"location",component:c.a,options:[{label:"Above Address",value:"same"},{label:"Another Address",value:"anotherAddress"}],toggleColor:null===e||void 0===e||null===(a=e.type)||void 0===a?void 0:a.value})}),"anotherAddress"===e.location?l.a.createElement(i.a,{left:"Address",right:l.a.createElement(r.a,{isTwoRow:!0,name:"anotherAddress",component:o.a})}):""))}}}]);
//# sourceMappingURL=17.81eccfeb.chunk.js.map