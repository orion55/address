(function(t){function e(e){for(var s,r,o=e[0],d=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],a[r]&&f.push(a[r][0]),a[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var d=n[o];0!==a[d]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11e9":function(t,e,n){"use strict";var s=n("88f0"),a=n.n(s);a.a},1616:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ListAddress")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-adds"},[t.loading?n("div",[t._v("\n        loading...\n    ")]):n("div",{staticClass:"list-adds__box"},[n("div",{staticClass:"list-adds__title"},[t._v("Адресная программа")]),n("div",{staticClass:"list-adds__wrap"},[t._m(0),n("div",{staticClass:"list-adds__body"},[n("ul",t._l(t.adds,function(e){return n("li",[n("h1",[t._v("\n                            "+t._s(e.city)+"\n                        ")]),n("p",[t._v("\n                            "+t._s(e.street)),n("br"),t._v("\n                            "+t._s(e.size)+"\n                        ")])])}),0)]),n("FooterAddress")],1)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-adds__header"},[n("div",{staticClass:"list-adds__col list-adds__col--1"}),n("div",{staticClass:"list-adds__col list-adds__col--2"},[t._v("Город")]),n("div",{staticClass:"list-adds__col list-adds__col--3"},[t._v("Адрес, направление")]),n("div",{staticClass:"list-adds__col list-adds__col--4"},[t._v("Сторона")])])}],d=n("2f62"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-adds"},[n("div",{staticClass:"footer-adds--sides"},[t._v("Выбрано сторон"),n("br"),n("span",{staticClass:"footer-adds--count"},[t._v("13")])]),n("button",{staticClass:"btn"},[t._v("Далее")])])}],u={name:"FooterAddress"},f=u,_=(n("11e9"),n("2877")),p=Object(_["a"])(f,c,l,!1,null,null,null),v=p.exports,h={name:"ListAddress",components:{FooterAddress:v},mounted:function(){this.$store.dispatch("loadData")},computed:Object(d["b"])(["adds","loading"])},b=h,m=(n("ec79"),Object(_["a"])(b,r,o,!1,null,null,null)),g=m.exports,y={name:"app",components:{ListAddress:g}},C=y,O=(n("5c0b"),Object(_["a"])(C,a,i,!1,null,null,null)),j=O.exports,w=(n("ac6a"),n("bc3a")),x=n.n(w);s["a"].use(d["a"],x.a);var A="https://randomuser.me/api/?results=20&nat=us",S=new d["a"].Store({state:{adds:[],loading:!0},actions:{loadData:function(t){var e=t.commit;x.a.get(A).then(function(t){e("updateAddress",t.data.results),e("changeLoadingState",!1)})}},mutations:{updateAddress:function(t,e){e.forEach(function(e){var n=e.location,s={check:!1,city:n.city,street:n.street,coordinates:Object.assign(n.coordinates),sides:[{name:"A",status:!1,img:"",lighting:!1},{name:"B",status:!1,img:"",lighting:!1}],code:e.phone,size:n.state};t.adds.push(s)})},changeLoadingState:function(t,e){t.loading=e}}});n("6ad3");s["a"].config.productionTip=!1,new s["a"]({store:S,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("5e27"),a=n.n(s);a.a},"5e27":function(t,e,n){},"88f0":function(t,e,n){},ec79:function(t,e,n){"use strict";var s=n("1616"),a=n.n(s);a.a}});
//# sourceMappingURL=app.cfdb9c08.js.map