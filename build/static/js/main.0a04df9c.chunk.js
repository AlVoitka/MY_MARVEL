(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),s=a.n(c),i=a(2),o=a(3),l=a(5),h=a(4),u=(a(14),a(0)),d=function(){return Object(u.jsxs)("header",{className:"app__header",children:[Object(u.jsx)("h1",{className:"app__title",children:Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(u.jsx)("nav",{className:"app__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=a(6),m=a.n(j),p=a(7),b=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=e6c1cc43ea00c95d07fd7c241e3d012e",this.getResource=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=210&").concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(p.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url}}},f=a.p+"static/media/mjolnir.61f31e18.png",O=a.p+"static/media/spinner_2.73231f1f.gif",x=function(){return Object(u.jsx)("img",{src:O,style:{margin:"0 auto",background:"none",display:"block",width:"150px"},alt:"spinner"})},_=a.p+"static/media/error.62898c88.gif",v=function(){return Object(u.jsx)("img",{src:_,style:{margin:"0 auto",background:"none",paddingTop:"30px",alignItems:"center",display:"block",width:"350px"},alt:"spinner"})},g=(a(17),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:{},loading:!0,error:!1},e.marvelService=new b,e.onError=function(){e.setState({loading:!1,error:!0})},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=e.loading,o=e.error?Object(u.jsx)(v,{}):null,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(l={objectFit:"contain"}),i?Object(u.jsx)(x,{}):Object(u.jsxs)("div",{className:"randomchar",children:[o,Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:l}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:a}),Object(u.jsx)("p",{className:"randomchar__descr",children:n}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{className:"button button__main",children:Object(u.jsx)("div",{onClick:this.updateChar,className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:f,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component)),y=(a(18),n.Component,a(19),a.p+"static/media/thor.533e3a5e.jpeg"),C=(a(20),n.Component,a.p,function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{}),Object(u.jsx)("main",{children:Object(u.jsx)(g,{})})]})}}]),a}(n.Component));a(21),a(22);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.0a04df9c.chunk.js.map