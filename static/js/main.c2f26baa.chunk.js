(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},19:function(e,t,n){},2:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),u=n.n(o),c=(n(19),n(5)),l=n(6),i=n(10),s=n(7),f=n(11),m=(n(2),function(e){var t=[];return e.map(function(n,r){if(null===n){var a=r+1,o=a%4;t=o<2?1===o?a<2?[e[a],e[a+3]]:a>12?[e[a],e[a-5]]:[e[a],e[a-5],e[a+3]]:a<5?[e[a-2],e[a+3]]:a>12?[e[a-2],e[a-5]]:[e[a-2],e[a-5],e[a+3]]:a>13?[e[a-2],e[a-5],e[a]]:a<4?[e[a],e[a-2],e[a+3]]:[e[a+3],e[a-5],e[a-2],e[a]]}}),t}),h=function(e){var t=e.nr,n=e.indexVal,r=e.onClick;return a.a.createElement("div",{className:"cell",style:{backgroundColor:null===t?"#f3d7ca":"#393e46",color:n.length>0?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.5)"},onClick:r},t)},d=function(e){var t=e.onClick,n=e.children;return a.a.createElement("h4",{className:"shuffle",onClick:t},n)},b=n(26),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={correctNumbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null],currentNumbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null],possibleNumbersToClick:[],shuffle:!1,shuffleDone:!1},n.startShuffle=function(e){var t=n.state.currentNumbers.map(function(e){return{sort:Math.random(),value:e}}).sort(function(e,t){return e.sort-t.sort}).map(function(e){return e.value});n.setState({shuffle:e&&!0,currentNumbers:e?n.state.currentNumbers:t})},n.setNewPossibleNumbersToClick=function(e,t){var r=n.state.currentNumbers,a=t.filter(function(t){return r[e]===t});if(a.length>0){var o=r.map(function(e){return null===e?a[0]:a[0]===e?null:e});n.setState({currentNumbers:o})}},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.startShuffle()}},{key:"componentDidUpdate",value:function(){this.state.shuffleDone&&(this.startShuffle(),this.setState({shuffleDone:!1}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentNumbers,r=t.shuffle,o=t.shuffleDone,u=t.correctNumbers,c=n.filter(function(e,t){return e===u[t]});return a.a.createElement("div",null,a.a.createElement(b.a,{in:r,classNames:"main-container",timeout:200,onEntered:function(){return e.setState({shuffleDone:!o})}},a.a.createElement("div",{className:"main-container",style:{transform:r?"rotateY(180deg)":"rotateY(0deg)"}},n.map(function(t,r){var o=m(n).filter(function(e){return t===e});return a.a.createElement(h,{nr:t,indexVal:o,key:r,onClick:function(){return e.setNewPossibleNumbersToClick(r,m(n))}})}))),a.a.createElement("div",{className:"shuffle-container"},a.a.createElement(d,{onClick:function(){return e.startShuffle(!0)}},"Shuffle"),16===c.length&&a.a.createElement("h4",{className:"finished"},"Congratulations you made it!")))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.c2f26baa.chunk.js.map