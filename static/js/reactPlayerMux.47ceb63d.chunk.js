(self.webpackChunkalkarama=self.webpackChunkalkarama||[]).push([[258],{4599:(e,t,n)=>{var r,i=Object.create,a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,n,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let i of o(t))u.call(e,i)||i===n||a(e,i,{get:()=>t[i],enumerable:!(r=s(t,i))||r.enumerable});return e},h=(e,t,n)=>(((e,t,n)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n),c={};((e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})})(c,{default:()=>m}),e.exports=(r=c,p(a({},"__esModule",{value:!0}),r));var d=((e,t,n)=>(n=null!=e?i(l(e)):{},p(!t&&e&&e.__esModule?n:a(n,"default",{value:e,enumerable:!0}),e)))(n(2791)),y=n(365);class m extends d.Component{constructor(){var e;super(...arguments),e=this,h(this,"onReady",(function(){return e.props.onReady(...arguments)})),h(this,"onPlay",(function(){return e.props.onPlay(...arguments)})),h(this,"onBuffer",(function(){return e.props.onBuffer(...arguments)})),h(this,"onBufferEnd",(function(){return e.props.onBufferEnd(...arguments)})),h(this,"onPause",(function(){return e.props.onPause(...arguments)})),h(this,"onEnded",(function(){return e.props.onEnded(...arguments)})),h(this,"onError",(function(){return e.props.onError(...arguments)})),h(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),h(this,"onEnablePIP",(function(){return e.props.onEnablePIP(...arguments)})),h(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),h(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),h(this,"mute",(()=>{this.player.muted=!0})),h(this,"unmute",(()=>{this.player.muted=!1})),h(this,"ref",(e=>{this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(e){const{playsinline:t}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}removeListeners(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}async load(e){var t;const{onError:n,config:r}=this.props;if(!(null==(t=globalThis.customElements)?void 0:t.get("mux-player")))try{const e="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs".replace("VERSION",r.version);await import("".concat(e)),this.props.onLoaded()}catch(a){n(a)}const[,i]=e.match(y.MATCH_URL_MUX);this.player.playbackId=i}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),n=this.getDuration();return t>n?n:t}getPlaybackId(e){const[,t]=e.match(y.MATCH_URL_MUX);return t}render(){const{url:e,playing:t,loop:n,controls:r,muted:i,config:a,width:s,height:o}=this.props,l={width:"auto"===s?s:"100%",height:"auto"===o?o:"100%"};return!1===r&&(l["--controls"]="none"),d.default.createElement("mux-player",{ref:this.ref,"playback-id":this.getPlaybackId(e),style:l,preload:"auto",autoPlay:t||void 0,muted:i?"":void 0,loop:n?"":void 0,...a.attributes})}}h(m,"displayName","Mux"),h(m,"canPlay",y.canPlay.mux)}}]);
//# sourceMappingURL=reactPlayerMux.47ceb63d.chunk.js.map