(this["webpackJsonpvinny-schedule"]=this["webpackJsonpvinny-schedule"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),s=a.n(o),r=(a(15),a(6),a(7),a(1)),i=a(2),c=a(3),u=a(5),d=a(4);a(17);var m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={lastSunday:null,logs:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"schedule",style:{position:"relative"}},l.a.createElement(p,null),l.a.createElement(g,{logs:this.state.logs}))}}]),a}(l.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[74,178,282,388,496,602,708],t=this.props.logs,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e;null===t&&(t=new Date);var a=t.getDate(),n=t.toDateString().substr(0,3);for(;"Sun"!==n;)t.setDate(--a),n=t.toDateString().substr(0,3);return t.setMilliseconds(0),t.setSeconds(0),t.setMinutes(0),t.setHours(3),t}(),n=null;return null!==t&&(n=t.map((function(t){return l.a.createElement(h,{key:"slot"+t.timestamp,dayPx:e,sunday:new Date(a),event:t})}))),l.a.createElement("div",null,n||"loading")}}]),a}(l.a.Component);function h(e){for(var t=new Date(e.event.timestamp),a=e.sunday,n=a.getDate(),o=0;t.toLocaleDateString()!==a.toLocaleDateString();)a.setDate(++n),o++;var s=31+4*(t.getHours()-4)*31+t.getMinutes()/60*4*29+"px",r=e.dayPx[o],i="true"==e.event.ate,c="true"==e.event.peed,u="true"==e.event.pooped,d="true"==e.event.slept,m="true"==e.event.walked,g="true"==e.event.woke;return l.a.createElement("div",{className:"scheduleSlot",style:{left:r,top:s}},i?"\ud83c\udf56":"\xa0",c?"\ud83d\udd2b":"\xa0",u?"\ud83d\udca9":"\xa0",d?"\ud83d\udeb6\ud83c\udffb\u200d\u2642\ufe0f":"\xa0",m?"\u2600\ufe0f":"\xa0",g?"\ud83c\udf19":"\xa0")}var p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={times:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e={width:"10%",fontSize:"calc(2vmin)"},t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(t){return l.a.createElement(b,{key:t,day:t,style:e})})),a=function(){var e=new Date;e.setHours(4),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0);var t=new Date(e);t.setHours(24);for(var a=[],n=t.valueOf()-e.valueOf(),l=0;l<=n;l+=9e5)a.push(new Date(e)),e.setMilliseconds(9e5);return a}().map((function(t){return l.a.createElement(v,{key:t.toLocaleTimeString(),time:t,style:e})}));return l.a.createElement("div",{className:"scheduleSkeleton"},l.a.createElement("table",{style:{width:"800px"}},l.a.createElement("thead",null,l.a.createElement("tr",{className:"headerRow"},l.a.createElement("td",{style:{width:"5%"}}),t)),l.a.createElement("tbody",null,a)))}}]),a}(l.a.Component);function v(e){return l.a.createElement("tr",{className:"baseRow"},l.a.createElement("td",{className:"baseCell"},(e.time.getHours()<10?"0"+e.time.getHours():e.time.getHours())+":"+(e.time.getMinutes()<10?"0"+e.time.getMinutes():e.time.getMinutes())))}function b(e){return l.a.createElement("th",{style:e.style},e.day)}var k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(r.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(e){this.props.action(),e.preventDefault()}},{key:"render",value:function(){var e={backgroundColor:this.props.toggledOn?"yellow":"white"};return l.a.createElement("button",{onClick:this.handleClick,className:"main-button",style:e},this.props.name)}}]),a}(l.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={ate:!1,peed:!1,pooped:!1,walked:!1,woke:!1,slept:!1},n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n.toggleAte=n.toggleAte.bind(Object(r.a)(n)),n.togglePeed=n.togglePeed.bind(Object(r.a)(n)),n.togglePooped=n.togglePooped.bind(Object(r.a)(n)),n.toggleWalked=n.toggleWalked.bind(Object(r.a)(n)),n.toggleWoke=n.toggleWoke.bind(Object(r.a)(n)),n.toggleSlept=n.toggleSlept.bind(Object(r.a)(n)),n}return Object(c.a)(a,[{key:"toggleAte",value:function(){var e=this.state.ate;this.setState({ate:!e})}},{key:"togglePeed",value:function(){var e=this.state.peed;this.setState({peed:!e})}},{key:"togglePooped",value:function(){var e=this.state.pooped;this.setState({pooped:!e})}},{key:"toggleWalked",value:function(){var e=this.state.walked;this.setState({walked:!e})}},{key:"toggleWoke",value:function(){var e=this.state.woke;this.setState({woke:!e})}},{key:"toggleSlept",value:function(){var e=this.state.slept;this.setState({slept:!e})}},{key:"handleSubmit",value:function(e){var t=new FormData(e.target),a=new Date,n=t.get("timestamp");if(n){var l=n.substring(0,2),o=n.substring(3,5);a.setHours(l),a.setMinutes(o)}this.state.ate,this.state.peed,this.state.pooped,this.state.walked,this.state.woke,this.state.slept,a.toLocaleString();this.setState({ate:!1,peed:!1,pooped:!1,walked:!1,woke:!1,slept:!1}),e.target.reset(),window.location.reload(),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{className:"options-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"time",id:"timestamp",name:"timestamp",pattern:"[0-9]{2}:[0-9]{2}"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(k,{id:"eat",name:"\ud83c\udf56",action:this.toggleAte,toggledOn:this.state.ate}),l.a.createElement(k,{id:"pee",name:"\ud83d\udd2b",action:this.togglePeed,toggledOn:this.state.peed}),l.a.createElement(k,{id:"poop",name:"\ud83d\udca9",action:this.togglePooped,toggledOn:this.state.pooped}),l.a.createElement(k,{id:"walk",name:"\ud83d\udeb6\ud83c\udffb\u200d\u2642\ufe0f",action:this.toggleWalked,toggledOn:this.state.walked}),l.a.createElement(k,{id:"woke",name:"\u2600\ufe0f",action:this.toggleWoke,toggledOn:this.state.woke}),l.a.createElement(k,{id:"slept",name:"\ud83c\udf19",action:this.toggleSlept,toggledOn:this.state.slept}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"}))}}]),a}(l.a.Component);var y=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Vinny Scheduler"),l.a.createElement(f,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.674b453a.chunk.js.map