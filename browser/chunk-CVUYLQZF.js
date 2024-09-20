import{K as w,M as a,N as A,P as D,R as l,S as f,V as S,W as g,fb as v,ga as b,ua as h,va as p,ya as m}from"./chunk-M4SCUJIQ.js";var O=null;function C(){return O}function ze(n){O??=n}var _=class{};var T=new D(""),P=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a({token:t,factory:()=>f(U),providedIn:"platform"});let n=t;return n})();var U=(()=>{let t=class t extends P{constructor(){super(),this._doc=f(T),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return C().getBaseHref(this._doc)}onPopState(e){let i=C().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=C().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a({token:t,factory:()=>new t,providedIn:"platform"});let n=t;return n})();function k(n,t){if(n.length==0)return t;if(t.length==0)return n;let s=0;return n.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?n+t.substring(1):s==1?n+t:n+"/"+t}function I(n){let t=n.match(/#|\?|$/),s=t&&t.index||n.length,e=s-(n[s-1]==="/"?1:0);return n.slice(0,e)+n.slice(s)}function c(n){return n&&n[0]!=="?"?"?"+n:n}var y=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a({token:t,factory:()=>f(V),providedIn:"root"});let n=t;return n})(),z=new D(""),V=(()=>{let t=class t extends y{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??f(T).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return k(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.pushState(e,i,u)}replaceState(e,i,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.replaceState(e,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(i){return new(i||t)(l(P),l(z,8))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var j=(()=>{let t=class t{constructor(e){this._subject=new b,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=Y(I(M(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+c(i))}normalize(e){return t.stripTrailingSlash(H(this._basePath,M(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i,complete:r})}};t.normalizeQueryParams=c,t.joinWithSlash=k,t.stripTrailingSlash=I,t.\u0275fac=function(i){return new(i||t)(l(y))},t.\u0275prov=a({token:t,factory:()=>G(),providedIn:"root"});let n=t;return n})();function G(){return new j(l(y))}function H(n,t){if(!n||!t.startsWith(n))return t;let s=t.substring(n.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function M(n){return n.replace(/\/index.html$/,"")}function Y(n){if(new RegExp("^(https?:)?//").test(n)){let[,s]=n.split(/\/\/[^\/]+/);return s}return n}function Ve(n,t){t=encodeURIComponent(t);for(let s of n.split(";")){let e=s.indexOf("="),[i,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var F=class{constructor(t,s,e,i){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},je=(()=>{let t=class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,i,r){this._viewContainer=e,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let i=this._viewContainer;e.forEachOperation((r,o,u)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new F(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)i.remove(o===null?void 0:o);else if(o!==null){let d=i.get(o);i.move(d,u),B(d,r)}});for(let r=0,o=i.length;r<o;r++){let d=i.get(r).context;d.index=r,d.count=o,d.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);B(o,r)})}static ngTemplateContextGuard(e,i){return!0}};t.\u0275fac=function(i){return new(i||t)(h(m),h(p),h(v))},t.\u0275dir=g({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let n=t;return n})();function B(n,t){n.context.$implicit=t.item}var Ge=(()=>{let t=class t{constructor(e,i){this._viewContainer=e,this._context=new E,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){L("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){L("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,i){return!0}};t.\u0275fac=function(i){return new(i||t)(h(m),h(p))},t.\u0275dir=g({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let n=t;return n})(),E=class{constructor(){this.$implicit=null,this.ngIf=null}};function L(n,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${w(t)}'.`)}var He=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=S({type:t}),t.\u0275inj=A({});let n=t;return n})(),Ye="browser",Z="server";function Ze(n){return n===Z}var R=class{};export{C as a,ze as b,_ as c,T as d,y as e,j as f,Ve as g,je as h,Ge as i,He as j,Ye as k,Ze as l,R as m};
