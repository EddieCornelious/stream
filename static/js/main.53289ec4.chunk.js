(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},19:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),s=a.n(i),o=(a(19),a(7)),l=a(1),c=a(2),m=a(4),u=a(3),d=a(5),h=(a(20),a(21),a(22),a(23),a(24),function(e){return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"Sort By"),r.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},r.a.createElement("li",{onClick:function(){return e.sortData("desc")}},r.a.createElement("a",{href:"#"},"Most Viewed")),r.a.createElement("li",{onClick:function(){return e.sortData("asc")}},r.a.createElement("a",{href:"#"},"Least Viewed"))))}),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.filterData(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{onChange:this.handleChange.bind(this),className:"header__search",type:"text",placeholder:"Search Games"})}}]),t}(r.a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"brand"},r.a.createElement("em",null,"Dashboard Box")),r.a.createElement("form",{className:"search__form"},r.a.createElement(f,{filterData:this.props.filterData}),r.a.createElement("button",{className:"search__btn",type:"submit"},r.a.createElement("i",{className:"fa fa-search"},"\xa0"))),r.a.createElement(h,{sortData:this.props.sortData})))}}]),t}(r.a.Component),v=(a(25),a(6)),g=a.n(v);function _(e){if(e<1e3)return e;var t=e.toString();return e>=1e3&&e<1e4?t.substring(0,1)+"."+t[1]+"K":e>=1e4&&e<1e5?t.substring(0,2)+"."+t[2]+"K":e>=1e5?t.substring(0,3)+"."+t[3]+"K":"100K+"}function y(e,t){var a=e.length;if(1===a)return e;var n=Math.floor(a/2);return function(e,t,a){var n=[];for(;e.length>0&&t.length>0;)1===a(e[0],t[0])?n.push(t.shift()):n.push(e.shift());for(;e.length>0;)n.push(e.shift());for(;t.length>0;)n.push(t.shift());return n}(y(e.slice(0,n),t),y(e.slice(n),t),t)}function S(){var e=0;return{gen:function(){return++e<=4?Math.floor(56e3+7e4*Math.random()):e<=25?Math.floor(25e3+47e3*Math.random()):e<=50?Math.floor(15e3+28e3*Math.random()):Math.floor(1+12e3*Math.random())},cancel:function(){1e5}}}var b=function(e){var t=e.data,a=e.displayStreams,n=e.mode,i=e.displayCertainStreams,s=e.toggleStreamVideo;return"topGames"!==n?r.a.createElement(r.a.Fragment,null,t.map(function(e,t){var a=e.thumbnail_url;return r.a.createElement("div",{key:t,className:"col-xs-12 col-sm-6 col-md-4 col-lg-4"},r.a.createElement(w,{toggleStreamVideo:s,key:e.stream_id,bg:a.replace("{width}x{height}","500x300"),userName:e.user_name,type:e.type,gameId:e.game_id,streamId:e.id,viewers:e.viewer_count,game:e.game_played,banner:e.banner}))})):r.a.createElement(r.a.Fragment,null,t.map(function(e,t){var n=e.box_art_url;return r.a.createElement("div",{key:t,className:"col-xs-6 col-sm-4 col-md-3 col-lg-3"},r.a.createElement(E,{id:e.id,displayStreams:a,bg:n.replace("{width}x{height}","300x400"),key:e.id,game:e.name,viewers:e.viewers,displayCertainStreams:i}))}))},E=function(e){return r.a.createElement("div",{className:"game__card"},r.a.createElement("div",{onClick:function(){return e.displayCertainStreams(e.id)},className:"game__card__top"},r.a.createElement(g.a,null,r.a.createElement("img",{alt:"GAME__PHOTO",src:e.bg}))),r.a.createElement("div",{className:"game__card__bottom"},r.a.createElement("em",null,e.game),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-eye"}),_(e.viewers))))},w=function(e){return r.a.createElement("div",{onClick:function(){return e.toggleStreamVideo(e.userName)},className:"stream__card"},r.a.createElement("div",{className:"stream__card__top"},r.a.createElement(g.a,null,r.a.createElement("img",{src:e.bg,alt:"streamer banner"})),r.a.createElement("button",{className:"stream__status"},e.type),r.a.createElement("button",{className:"stream__viewers"},_(e.viewers)+" viewers")),r.a.createElement("div",{className:"stream__card__bottom"},r.a.createElement("div",{className:"stream__card__left"},r.a.createElement("img",{src:e.banner,alt:"stream banner"})),r.a.createElement("div",{className:"stream__card__right"},r.a.createElement("em",null,e.userName),r.a.createElement("p",null,e.game))))};var D=function(e){var t=e.data,a=e.displayStreams,n=e.mode,i=e.displayGames,s=e.displayCertainStreams,o=e.toggleStreamVideo,l=e.loadingData,c=e.loadMore;return r.a.createElement("div",{className:"container-fluid main"},r.a.createElement("div",{className:"main__sidebar"},r.a.createElement("a",{onClick:function(){return i()},className:"sidebar__link",href:"#"},"Top Games"),r.a.createElement("a",{onClick:function(){return a()},className:"sidebar__link",href:"#"},"Top Streams")),r.a.createElement("div",{className:"main__video__container"},r.a.createElement("div",{className:"loader__small container"},l?null:function(e,t,a,n,i){for(var s=[],o=0;o<e.length;o+=4)s.push(r.a.createElement(b,{key:o,mode:t,toggleStreamVideo:i,displayStreams:a,data:e.slice(o,o+4),displayCertainStreams:n}));return s}(t,n,a,s,o)),"topGames"===n?r.a.createElement("a",{onClick:function(){return c()},href:"#",className:"load__more"},"load more"):null))},k=(a(30),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.liveStreamer,a=this.props.shouldShow?"video__overlay__container":"video__overlay__container hidden";return r.a.createElement("div",{className:a},r.a.createElement("iframe",{className:"stream__video",src:"https://player.twitch.tv/?channel="+t,frameBorder:"0",allowFullScreen:!0,scrolling:"no"}),r.a.createElement("button",{onClick:function(){return e.props.closeStream()},className:"exit__stream"},"X"))}}]),t}(r.a.Component)),N=a(13),C=a.n(N),j=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).cursor=null,a.gameIdMap={},a.state={topGames:null,topStreams:null,mode:"topGames",activeData:null,shouldShowPlayer:!1,liveStreamer:null,loadingApp:!0,loadingData:!1};var n=C()(function(){window.innerHeight+window.scrollY>=document.querySelector(".main__video__container").offsetHeight&&a.loadMore()},100);return window.addEventListener("scroll",n,!1),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"removeDuplicates",value:function(e){for(var t={},a=[],n=0;n<e.length;n++){var r=e[n];t[r.name]||(a.push(r),t[r.name]=!0)}return a}},{key:"loadMore",value:function(){var e=this;if("topGames"===this.state.mode){var t=S();this.fetchGames("https://api.twitch.tv/helix/games/top?first=20&after="+this.cursor).then(function(a){e.cursor=a.pagination.cursor,a.data.forEach(function(a){e.gameIdMap[a.id]=a.name,a.viewers=t.gen()}),e.setState({activeData:[].concat(Object(o.a)(e.state.activeData),Object(o.a)(a.data))})})}}},{key:"fetchGames",value:function(e){return fetch(e||"https://api.twitch.tv/helix/games/top?first=50",{headers:{"Client-ID":"etc4by2ti074ihuwet11y9kvbdyh7d"}}).then(function(e){return e.json()})}},{key:"fetchStreams",value:function(e){return fetch(e?"https://api.twitch.tv/helix/streams?first=50&game_id="+e:"https://api.twitch.tv/helix/streams?first=50",{headers:{"Client-ID":"etc4by2ti074ihuwet11y9kvbdyh7d"}}).then(function(e){return e.json()})}},{key:"getChannelBanners",value:function(e){var t="id="+e.join("&id=");return fetch("https://api.twitch.tv/helix/users?"+t,{headers:{"Client-ID":"etc4by2ti074ihuwet11y9kvbdyh7d"}}).then(function(e){return e.json()})}},{key:"componentDidMount",value:function(){var e=this,t=[],a=S();this.fetchGames().then(function(t){e.cursor=t.pagination.cursor,t.data.forEach(function(t){e.gameIdMap[t.id]=t.name,t.viewers=a.gen()}),e.setState({topGames:t.data,activeData:t.data})}).then(function(){e.fetchStreams().then(function(a){return a.data.forEach(function(a){a.game_played=e.gameIdMap[a.game_id],t.push(a.user_id)}),Promise.resolve(a)}).then(function(a){e.getBannerAndUpdateStreams(a,t).then(function(t){e.setState({topStreams:t.data,loadingApp:!1})})})}),a.cancel()}},{key:"getBannerAndUpdateStreams",value:function(e,t){return this.getChannelBanners(t).then(function(t){return e.data.forEach(function(e,a){e.banner=t.data[a].profile_image_url}),Promise.resolve(e)})}},{key:"displayCertainStreams",value:function(e){var t=this,a=[];this.setState({loadingData:!0}),this.fetchStreams(e).then(function(e){return e.data.forEach(function(e){e.game_played=t.gameIdMap[e.game_id],a.push(e.user_id)}),Promise.resolve(e)}).then(function(e){t.getBannerAndUpdateStreams(e,a).then(function(e){t.setState({mode:"certainStreams",activeData:e.data,loadingData:!1})})}),window.scrollTo({top:0,behavior:"smooth"})}},{key:"displayStreams",value:function(){var e=this.state.topStreams,t=this;this.setState({mode:"topStreams",activeData:e,loadingData:!0}),setTimeout(function(){t.setState({loadingData:!1})},100)}},{key:"displayGames",value:function(){var e=this.state.topGames,t=this;this.setState({mode:"topGames",activeData:e,loadingData:!0}),setTimeout(function(){t.setState({loadingData:!1})},100)}},{key:"showStream",value:function(e){this.setState({shouldShowPlayer:!0,liveStreamer:e})}},{key:"closeStream",value:function(){this.setState({shouldShowPlayer:!1,liveStreamer:null})}},{key:"filterData",value:function(e){if("certainStreams"!==this.state.mode){var t=e.toLowerCase();if(""!==t){var a="topGames"===this.state.mode?"activeData":"topStreams",n=this.state[a.toString()],r="topGames"===this.state.mode?"name":"game_played",i=n.filter(function(e){if(e[r])return e[r].toLowerCase().startsWith(t)});this.setState({activeData:i})}else"topGames"===this.state.mode?this.displayGames():this.displayStreams()}}},{key:"sortData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc",t="topStreams"===this.state.mode||"certainStreams"===this.state.mode?"viewer_count":"viewers";this.setState({activeData:y(this.state.activeData,function(a,n){return a[t]<n[t]?"desc"===e?1:-1:a[t]>n[t]?"desc"===e?-1:1:0})})}},{key:"render",value:function(){return this.state.loadingApp?null:("topGames"===this.state.mode&&(e=this.removeDuplicates(this.state.activeData)),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{sortData:this.sortData.bind(this),filterData:this.filterData.bind(this)}),r.a.createElement(k,{liveStreamer:this.state.liveStreamer,shouldShow:this.state.shouldShowPlayer,closeStream:this.closeStream.bind(this)}),r.a.createElement(D,{loadMore:this.loadMore.bind(this),toggleStreamVideo:this.showStream.bind(this),currentPage:this.state.currentPage,data:e||this.state.activeData,displayStreams:this.displayStreams.bind(this),mode:this.state.mode,displayGames:this.displayGames.bind(this),displayCertainStreams:this.displayCertainStreams.bind(this),loadingData:this.state.loadingData})));var e}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.53289ec4.chunk.js.map