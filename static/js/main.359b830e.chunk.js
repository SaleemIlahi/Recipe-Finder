(this["webpackJsonprecipe-finder"]=this["webpackJsonprecipe-finder"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),i=c.n(a),s=(c(11),c(3)),o=c.n(s),l=c(6),p=c(4),u=c.p+"static/media/logo.637d1a73.svg",j=c(0),d=function(e){return e.recipe.map((function(e,t){return Object(j.jsxs)("div",{className:"recipe-card",children:[Object(j.jsx)("img",{src:e.recipe.image,loading:"lazy",alt:"food-img"}),Object(j.jsx)("h3",{children:e.recipe.label}),Object(j.jsx)("div",{className:"btn",children:Object(j.jsx)("a",{href:e.recipe.url,target:"_blank",rel:"noopener noreferrer",children:"more details"})})]},t)}))},b=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(p.a)(a,2),s=i[0],b=i[1],h="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(c,"&app_id=").concat("a6946f91","&app_key=").concat("d23590bce39cd28e2c569f253b237bc8"),f=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,b(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:u,alt:"logo"}),Object(j.jsxs)("div",{className:"search-box",children:[Object(j.jsx)("input",{type:"text",placeholder:"Search your Recipe",value:c,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){f(),r("")},children:"Search"})]}),Object(j.jsx)("div",{className:"recipe-container",children:Object(j.jsx)(d,{recipe:s})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.359b830e.chunk.js.map