(this.webpackJsonpdemo2=this.webpackJsonpdemo2||[]).push([[25],{2779:function(e,a,n){"use strict";var t=n(0),l=n.n(t),r=(n(2781),n(1)),o=n(13),c=n(53),m=n.n(c),i=n(124),s=n(205),u=n(248),d=n(2699),p=n(2700),E=l.a.forwardRef((function(e,a){var n=Object(i.b)(e,{value:"onChange"}),t=n.children,c=n.type,p=n.name,E=n.value,f=n.onChange,h=Object(o.a)(n,["children","type","name","value","onChange"]),v=function(){return null==E?[]:[].concat(E)};return"radio"!==c||p||m()(!1),l.a.createElement(d.a,Object(r.a)({},h,{ref:a,toggle:!0}),Object(u.b)(t,(function(e){var a=v(),n=e.props,t=n.value,r=n.onChange;return l.a.cloneElement(e,{type:c,name:e.name||p,checked:-1!==a.indexOf(t),onChange:Object(s.a)(r,(function(e){return function(e,a){var n=v(),t=-1!==n.indexOf(e);"radio"!==c?f(t?n.filter((function(a){return a!==e})):[].concat(n,[e]),a):t||f(e,a)}(t,e)}))})})))}));E.defaultProps={type:"radio"},E.Button=p.a;var f=E;function h(e){var a=e.input,n=e.options,r=e.toggleColor;console.log(a.value);return console.log(a),l.a.createElement(t.Fragment,null,l.a.createElement(f,{className:"themeButton-toggle-group "+r,onChange:function(e){a.onChange(e),console.log(e)},type:"radio",defaultValue:null===a||void 0===a?void 0:a.value,name:"options"},n.map((function(e,a){return l.a.createElement(p.a,{value:e.value},e.label)}))))}n.d(a,"a",(function(){return h}))},2785:function(e,a,n){"use strict";var t=n(0),l=n.n(t),r=n(166),o=n(202),c=n(104),m=n(112),i=n(81),s=n(18),u=n(9),d=n(47);a.a=function(e){var a=e.fields,n=e.meta,p=(n.error,n.submitFailed,e.label,[{label:"Erika",value:"1"},{label:"Julia",value:"2"},{label:"Sarah",value:"3"}]);return l.a.createElement(t.Fragment,null,l.a.createElement(u.a,{isRow:!0,right:l.a.createElement(t.Fragment,null,a.map((function(e,n){return l.a.createElement(r.a.Group,{key:n,as:o.a,className:"mb-0"},l.a.createElement(c.a,null,l.a.createElement(o.a,{className:"pb-2"},l.a.createElement(c.a,{md:6},l.a.createElement(i.a,{name:"passions",component:d.a,showBottom:!1,options:p,placeholder:"Select relationship"})),l.a.createElement(c.a,{md:6},l.a.createElement("p",null,l.a.createElement(m.a,{onClick:function(){return a.remove(n)},size:"small",className:"brand-icon-button"},l.a.createElement("i",{className:"fas fa-minus-circle"})),"Remove Additional Contact"))),l.a.createElement(o.a,{className:"pb-2"}," ",l.a.createElement(c.a,{md:6},l.a.createElement(i.a,{name:"first_name",component:s.a,placeholder:"First Name"})),l.a.createElement(c.a,{md:6},l.a.createElement(i.a,{name:"last_name",component:s.a,placeholder:"First Name"}))),l.a.createElement(o.a,{className:"pb-2"},l.a.createElement(c.a,{md:6},l.a.createElement(i.a,{name:"mobile",component:s.a,placeholder:"Mobile"})),l.a.createElement(c.a,{md:6},l.a.createElement(i.a,{name:"email",component:s.a,placeholder:"Email"})))))})),l.a.createElement(o.a,null,l.a.createElement(c.a,null,l.a.createElement("p",null,l.a.createElement(m.a,{onClick:function(){return a.push({})},size:"small",className:"brand-icon-button"},l.a.createElement("i",{className:"fas fa-plus-circle"})),"Add Additional Contact"))))}))}},3059:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(104),o=n(81),c=n(786),m=(n(247),n(9)),i=(n(2778),n(2779)),s=n(272),u=n(18),d=n(2785);a.default=function(e){var a;console.log(e);return l.a.createElement(t.Fragment,null,l.a.createElement("div",{className:"appointment-right d-flex flex-column p-2"},l.a.createElement(m.a,{left:"Address",right:l.a.createElement(o.a,{isTwoRow:!0,name:"address",component:s.a})}),l.a.createElement(m.a,{left:"Landlord",right:l.a.createElement(t.Fragment,null,l.a.createElement("div",{className:"row pb-2"},l.a.createElement(r.a,null,l.a.createElement(o.a,{name:"first_name",component:u.a,placeholder:"First Name"})),l.a.createElement(r.a,null,l.a.createElement(o.a,{name:"last_name",component:u.a,placeholder:"First Name"}))),l.a.createElement("div",{className:"row pb-2"},l.a.createElement(r.a,null,l.a.createElement(o.a,{name:"mobile",component:u.a,placeholder:"Mobile"})),l.a.createElement(r.a,null,l.a.createElement(o.a,{name:"email",component:u.a,placeholder:"Email"}))))}),l.a.createElement(c.a,{name:"members",component:d.a}),l.a.createElement(m.a,{left:"Location",right:l.a.createElement(o.a,{name:"location",component:i.a,options:[{label:"Above Address",value:"same"},{label:"Another Address",value:"anotherAddress"}],toggleColor:null===e||void 0===e||null===(a=e.type)||void 0===a?void 0:a.value})}),"anotherAddress"===e.location?l.a.createElement(m.a,{left:"Address",right:l.a.createElement(o.a,{isTwoRow:!0,name:"anotherAddress",component:s.a})}):""))}}}]);
//# sourceMappingURL=25.bacca41f.chunk.js.map