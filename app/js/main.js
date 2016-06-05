(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var appElement = (0, _jquery2['default'])('.app');

var config = {
  apiKey: "AIzaSyCWfPHBoLxrwJewP95yJ0VdysfDLTiOK-k",
  authDomain: "reactcontactbook.firebaseapp.com",
  databaseURL: "https://reactcontactbook.firebaseio.com",
  storageBucket: "reactcontactbook.appspot.com"
};
_firebase2['default'].initializeApp(config);

function writeUserData(userId, firstName, lastName, email, telephone) {
  _firebase2['default'].database().ref('users/' + userId).set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    telephone: telephone
  });
}

writeUserData('01', 'Joe', 'Rivers', 'joelab@hotmail.com', '515-324-6756');

// function writeUserData(userId, name, email) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email
//   });
//   }
//   writeUserData('03', 'Joe', 'joelab@hotmail.com');

},{"firebase":2,"jquery":4}],2:[function(require,module,exports){
/**
 *  Firebase libraries for browser - npm package.
 *
 * Usage:
 *
 *   firebase = require('firebase');
 */
require('./firebase');
module.exports = firebase;

},{"./firebase":3}],3:[function(require,module,exports){
(function (global){
/*! @license Firebase v3.0.3
    Build: 3.0.3-rc.1
    Terms: https://developers.google.com/terms */
(function() { var h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,l=function(){h.Symbol||(h.Symbol=aa);l=function(){}},ba=0,aa=function(a){return"jscomp_symbol_"+a+ba++},m=function(){l();h.Symbol.iterator||(h.Symbol.iterator=h.Symbol("iterator"));m=function(){}},ca=function(){var a=["next","error","complete"];m();if(a[h.Symbol.iterator])return a[h.Symbol.iterator]();var b=0;return{next:function(){return b==a.length?{done:!0}:{done:!1,value:a[b++]}}}},p=function(){return{done:!0,
value:void 0}},q=function(a,b){a instanceof String&&(a=String(a));var c=0;l();m();var d={},e=(d.next=function(){if(c<a.length){var d=c++;return{value:b(d,a[d]),done:!1}}e.next=p;return p()},d[Symbol.iterator]=function(){return e},d);return e},r=function(a,b){!Array.prototype[a]&&Object.defineProperties&&Object.defineProperty&&Object.defineProperty(Array.prototype,a,{configurable:!0,enumerable:!1,writable:!0,value:b})},t=function(a,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+
b+" must not be null or undefined");},u=function(a,b){if(a instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");},da=function(a){t(this,"repeat");var b=String(this);if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c},ea=function(a){t(this,"codePointAt");var b=String(this),c=b.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var d=b.charCodeAt(a);if(55296>d||56319<d||a+1===c)return d;
a=b.charCodeAt(a+1);return 56320>a||57343<a?d:1024*(d-55296)+a+9216}},fa=function(a,b){b=void 0===b?0:b;u(a,"includes");t(this,"includes");return-1!==String(this).indexOf(a,b)},ga=function(a,b){b=void 0===b?0:b;u(a,"startsWith");t(this,"startsWith");var c=String(this);a+="";var d=c.length,e=a.length;b=Math.max(0,Math.min(b|0,c.length));for(var f=0;f<e&&b<d;)if(c[b++]!=a[f++])return!1;return f>=e},ha=function(a,b){u(a,"endsWith");t(this,"endsWith");var c=String(this);a+="";void 0===b&&(b=c.length);
b=Math.max(0,Math.min(b|0,c.length));for(var d=a.length;0<d&&0<b;)if(c[--b]!=a[--d])return!1;return 0>=d};String.prototype.endsWith||(String.prototype.endsWith=ha);String.prototype.startsWith||(String.prototype.startsWith=ga);String.prototype.includes||(String.prototype.includes=fa);String.prototype.codePointAt||(String.prototype.codePointAt=ea);String.prototype.repeat||(String.prototype.repeat=da);r("values",function(){return q(this,function(a,b){return b})});r("keys",function(){return q(this,function(a){return a})});
r("entries",function(){return q(this,function(a,b){return[a,b]})});
var v=this,w=function(){},x=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},y=function(a){return"function"==x(a)},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},z=function(a,b,c){z=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ia:ja;return z.apply(null,arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,f){for(var k=Array(arguments.length-2),g=2;g<arguments.length;g++)k[g-2]=arguments[g];return b.prototype[c].apply(a,k)}};function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
function __decorate(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,k;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(a,b,c,d);else for(var g=a.length-1;0<=g;g--)if(k=a[g])f=(3>e?k(f):3<e?k(b,c,f):k(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function __metadata(a,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,b)}
var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function k(a){try{n(d.next(a))}catch(b){f(b)}}function g(a){try{n(d.throw(a))}catch(b){f(b)}}function n(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(k,g)}n((d=d.apply(a,b)).next())})};var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};la(A,Error);A.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var B=function(a,b){b.unshift(a);A.call(this,ma.apply(null,b));b.shift()};la(B,A);B.prototype.name="AssertionError";var na=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new B(""+e,f||[]);},C=function(a,b,c){a||na("",null,b,Array.prototype.slice.call(arguments,2))},D=function(a,b,c){y(a)||na("Expected function but got %s: %s.",[x(a),a],b,Array.prototype.slice.call(arguments,2))};var E=function(a,b,c){this.S=c;this.L=a;this.U=b;this.s=0;this.o=null};E.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.L();return a};E.prototype.put=function(a){this.U(a);this.s<this.S&&(this.s++,a.next=this.o,this.o=a)};var F;a:{var oa=v.navigator;if(oa){var pa=oa.userAgent;if(pa){F=pa;break a}}F=""};var qa=function(a){v.setTimeout(function(){throw a;},0)},G,ra=function(){var a=v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==F.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host,a=z(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==F.indexOf("Trident")&&-1==F.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.F;c.F=null;a()}};return function(a){d.next={F:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){v.setTimeout(a,0)}};var H=function(){this.v=this.f=null},sa=new E(function(){return new I},function(a){a.reset()},100);H.prototype.add=function(a,b){var c=sa.get();c.set(a,b);this.v?this.v.next=c:(C(!this.f),this.f=c);this.v=c};H.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var I=function(){this.next=this.scope=this.B=null};I.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
I.prototype.reset=function(){this.next=this.scope=this.B=null};var L=function(a,b){J||ta();K||(J(),K=!0);ua.add(a,b)},J,ta=function(){if(v.Promise&&v.Promise.resolve){var a=v.Promise.resolve(void 0);J=function(){a.then(va)}}else J=function(){var a=va,c;!(c=!y(v.setImmediate))&&(c=v.Window&&v.Window.prototype)&&(c=-1==F.indexOf("Edge")&&v.Window.prototype.setImmediate==v.setImmediate);c?(G||(G=ra()),G(a)):v.setImmediate(a)}},K=!1,ua=new H,va=function(){for(var a;a=ua.remove();){try{a.B.call(a.scope)}catch(b){qa(b)}sa.put(a)}K=!1};var O=function(a,b){this.b=0;this.K=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=w)try{var c=this;a.call(b,function(a){M(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}M(c,3,a)})}catch(d){M(this,3,d)}},wa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};wa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
var xa=new E(function(){return new wa},function(a){a.reset()},100),ya=function(a,b,c){var d=xa.get();d.c=a;d.h=b;d.context=c;return d},Aa=function(a,b,c){za(a,b,c,null)||L(ka(b,a))};O.prototype.then=function(a,b,c){null!=a&&D(a,"opt_onFulfilled should be a function.");null!=b&&D(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ba(this,y(a)?a:null,y(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
O.prototype.X=function(a,b){return Ba(this,null,a,b)};var Da=function(a,b){a.g||2!=a.b&&3!=a.b||Ca(a);C(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},Ba=function(a,b,c,d){var e=ya(null,null,null);e.child=new O(function(a,k){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(N){k(N)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(N){k(N)}}:k});e.child.u=a;Da(a,e);return e.child};O.prototype.Y=function(a){C(1==this.b);this.b=0;M(this,2,a)};O.prototype.Z=function(a){C(1==this.b);this.b=0;M(this,3,a)};
var M=function(a,b,c){0==a.b&&(a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,za(c,a.Y,a.Z,a)||(a.K=c,a.b=b,a.u=null,Ca(a),3!=b||Ea(a,c)))},za=function(a,b,c,d){if(a instanceof O)return null!=b&&D(b,"opt_onFulfilled should be a function."),null!=c&&D(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Da(a,ya(b||w,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(k){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;
e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(y(f))return Fa(a,f,b,c,d),!0}catch(k){return c.call(d,k),!0}return!1},Fa=function(a,b,c,d,e){var f=!1,k=function(a){f||(f=!0,c.call(e,a))},g=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,k,g)}catch(n){g(n)}},Ca=function(a){a.A||(a.A=!0,L(a.N,a))},Ga=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&C(null!=b.c);return b};
O.prototype.N=function(){for(var a;a=Ga(this);){var b=this.b,c=this.K;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ha(a,b,c);else try{a.w?a.c.call(a.context):Ha(a,b,c)}catch(e){Ia.call(null,e)}xa.put(a)}this.A=!1};var Ha=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},Ea=function(a,b){a.m=!0;L(function(){a.m&&Ia.call(null,b)})},Ia=qa;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};var Ja=Error.captureStackTrace,R=function(a,b){this.code=a;this.message=b;if(Ja)Ja(this,Q.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};R.prototype=Object.create(Error.prototype);R.prototype.constructor=R;R.prototype.name="FirebaseError";var Q=function(a,b,c){this.V=a;this.W=b;this.M=c;this.pattern=/\{\$([^}]+)}/g};
Q.prototype.create=function(a,b){void 0===b&&(b={});var c=this.M[a],c=void 0===c?"Error":c.replace(this.pattern,function(a,c){return void 0!==b[c]?b[c].toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+this.V+"/"+a+").";a=new R(a,c);for(var d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(a[d]=b[d]);return a};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},g=0,n;g<a.length;g++)n=a[g],Aa(n,ka(f,g),k);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(w);M(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.X;var S=O;"undefined"!==typeof Promise&&(S=Promise);var Ka=S;function La(a,b){a=new T(a,b);return a.subscribe.bind(a)}var T=function(a,b){var c=this;this.a=[];this.J=0;this.task=Ka.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};T.prototype.next=function(a){U(this,function(b){b.next(a)})};T.prototype.error=function(a){U(this,function(b){b.error(a)});this.close(a)};T.prototype.complete=function(){U(this,function(a){a.complete()});this.close()};
T.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Ma(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=V);void 0===e.error&&(e.error=V);void 0===e.complete&&(e.complete=V);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.G?e.error(d.G):e.complete()}catch(a){}});this.a.push(e);return a};
T.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(this.a[a]=void 0,--this.J,0===this.J&&void 0!==this.D&&this.D(this))};var U=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Na(a,c,b)},Na=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){}})};T.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.G=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
function Ma(a){if("object"!==typeof a||null===a)return!1;for(var b=ca(),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function V(){};var W=S,X=function(a,b,c){var d=this;this.H=c;this.I=!1;this.i={};this.P={};this.C=b;this.T=P(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){d[a]=d.R.bind(d,a)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.H.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.I=!0;a.i=null;a.P=null})};
X.prototype.R=function(a){Y(this);void 0===this.i[a]&&(this.i[a]=this.H.INTERNAL.factories[a](this,this.O.bind(this)));return this.i[a]};X.prototype.O=function(a){P(this,a)};var Y=function(a){a.I&&Z(Oa("deleted",{name:a.C}))};Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.T}}});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
function Pa(){function a(a){a=a||"[DEFAULT]";var c=b[a];void 0===c&&Z("noApp",{name:a});return c}var b={},c={},d=[],e={initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",{name:c+""});void 0!==b[c]&&Z("dupApp",{name:c});var g=new X(a,c,e);b[c]=g;d.forEach(function(a){return a("create",g)});void 0!=g.INTERNAL&&void 0!=g.INTERNAL.getToken||P(g,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});
return g},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,d,g){c[b]&&Z("dupService",{name:b});c[b]=d;d=function(c){void 0===c&&(c=a());return c[b]()};void 0!==g&&P(d,g);return e[b]=d},createFirebaseNamespace:Pa,extendNamespace:function(a){P(e,a)},createSubscribe:La,ErrorFactory:Q,registerAppHook:function(a){d.push(a)},removeApp:function(a){d.forEach(function(c){return c("delete",b[a])});delete b[a]},factories:c,Promise:O,deepExtend:P}};Object.defineProperty(e,"apps",
{get:function(){return Object.keys(b).map(function(a){return b[a]})}});a.App=X;return e}function Z(a,b){throw Error(Oa(a,b));}
function Oa(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered."}[a];return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof window&&(window.firebase=Pa()); })();
firebase.SDK_VERSION = "3.0.3";
(function(){var k,aa=aa||{},l=this,ba=function(){},ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){return null===a},ea=function(a){return"array"==ca(a)},fa=function(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},ga=function(a){return"number"==typeof a},p=function(a){return"function"==ca(a)},ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,
b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.yc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ae=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,u=function(a,b){return-1!=a.indexOf(b)},va=function(a,b){return a<b?-1:a>b?1:0};var wa=function(a,b){b.unshift(a);t.call(this,ma.apply(null,b));b.shift()};r(wa,t);wa.prototype.name="AssertionError";
var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},v=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){ga(a)||xa("Expected number but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){n(a)||xa("Expected string but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,
2));return a},Ba=function(a,b,c){p(a)||xa("Expected function but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2))};var Ca=Array.prototype.indexOf?function(a,b,c){v(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){v(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=function(a,b){for(var c=n(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ea=Array.prototype.map?function(a,b,c){v(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Fa=Array.prototype.some?function(a,b,c){v(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]},Ia=function(a,b){return 0<=Ca(a,b)},Ka=function(a,b){var c=Ca(a,b),d;(d=0<=c)&&Ja(a,c);return d},Ja=function(a,b){v(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++})},Ma=function(a){return Array.prototype.concat.apply(Array.prototype,
arguments)},Na=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Pa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};var Qa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ta=function(a){return null!==a&&"withCredentials"in a},Ua=function(a){for(var b in a)return!1;return!0},Va=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Ya=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
$a=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Za.length;f++)c=Za[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ab;a:{var bb=l.navigator;if(bb){var cb=bb.userAgent;if(cb){ab=cb;break a}}ab=""}var x=function(a){return u(ab,a)};var db=x("Opera"),y=x("Trident")||x("MSIE"),eb=x("Edge"),fb=eb||y,gb=x("Gecko")&&!(u(ab.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),hb=u(ab.toLowerCase(),"webkit")&&!x("Edge"),ib=function(){var a=l.document;return a?a.documentMode:void 0},jb;
a:{var kb="",lb=function(){var a=ab;if(gb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hb)return/WebKit\/(\S+)/.exec(a);if(db)return/(?:Version)[ \/]?(\S+)/.exec(a)}();lb&&(kb=lb?lb[1]:"");if(y){var mb=ib();if(null!=mb&&mb>parseFloat(kb)){jb=String(mb);break a}}jb=kb}
var nb=jb,ob={},z=function(a){var b;if(!(b=ob[a])){b=0;for(var c=na(String(nb)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),S=RegExp("(\\d*)(\\D*)","g");do{var Wa=m.exec(g)||["","",""],Xa=S.exec(h)||["","",""];if(0==Wa[0].length&&0==Xa[0].length)break;b=va(0==Wa[1].length?0:parseInt(Wa[1],10),0==Xa[1].length?0:parseInt(Xa[1],10))||va(0==Wa[2].length,0==Xa[2].length)||va(Wa[2],Xa[2])}while(0==b)}b=ob[a]=
0<=b}return b},pb=l.document,qb=pb&&y?ib()||("CSS1Compat"==pb.compatMode?parseInt(nb,10):5):void 0;var rb=null,sb=null,ub=function(a){var b="";tb(a,function(a){b+=String.fromCharCode(a)});return b},tb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=sb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}vb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}},vb=function(){if(!rb){rb={};sb={};for(var a=0;65>a;a++)rb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
sb[rb[a]]=a,62<=a&&(sb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var xb=function(){this.Pb="";this.wd=wb};xb.prototype.ic=!0;xb.prototype.gc=function(){return this.Pb};xb.prototype.toString=function(){return"Const{"+this.Pb+"}"};var yb=function(a){if(a instanceof xb&&a.constructor===xb&&a.wd===wb)return a.Pb;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"},wb={};var A=function(){this.aa="";this.vd=zb};A.prototype.ic=!0;A.prototype.gc=function(){return this.aa};A.prototype.toString=function(){return"SafeUrl{"+this.aa+"}"};
var Ab=function(a){if(a instanceof A&&a.constructor===A&&a.vd===zb)return a.aa;ya("expected object of type SafeUrl, got '"+a+"' of type "+ca(a));return"type_error:SafeUrl"},Bb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Db=function(a){if(a instanceof A)return a;a=a.ic?a.gc():String(a);Bb.test(a)||(a="about:invalid#zClosurez");return Cb(a)},zb={},Cb=function(a){var b=new A;b.aa=a;return b};Cb("about:blank");var Fb=function(){this.aa="";this.ud=Eb};Fb.prototype.ic=!0;Fb.prototype.gc=function(){return this.aa};Fb.prototype.toString=function(){return"SafeHtml{"+this.aa+"}"};var Gb=function(a){if(a instanceof Fb&&a.constructor===Fb&&a.ud===Eb)return a.aa;ya("expected object of type SafeHtml, got '"+a+"' of type "+ca(a));return"type_error:SafeHtml"},Eb={};Fb.prototype.Zd=function(a){this.aa=a;return this};var Hb=function(a,b){var c;c=b instanceof A?b:Db(b);a.href=Ab(c)};var Ib=function(a){Ib[" "](a);return a};Ib[" "]=ba;var Jb=!y||9<=Number(qb),Kb=y&&!z("9");!hb||z("528");gb&&z("1.9b")||y&&z("8")||db&&z("9.5")||hb&&z("528");gb&&!z("8")||y&&z("9");var Lb=function(){this.ra=this.ra;this.Gb=this.Gb};Lb.prototype.ra=!1;Lb.prototype.isDisposed=function(){return this.ra};Lb.prototype.Ga=function(){if(this.Gb)for(;this.Gb.length;)this.Gb.shift()()};var Mb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Na=!1;this.gd=!0};Mb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.gd=!1};var Nb=function(a,b){Mb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.ub=this.state=null;a&&this.init(a,b)};r(Nb,Mb);
Nb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(gb){var f;a:{try{Ib(e.nodeName);f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=hb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=hb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.ub=a;a.defaultPrevented&&
this.preventDefault()};Nb.prototype.preventDefault=function(){Nb.yc.preventDefault.call(this);var a=this.ub;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Kb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ob="closure_listenable_"+(1E6*Math.random()|0),Pb=0;var Qb=function(a,b,c,d,e){this.listener=a;this.Ib=null;this.src=b;this.type=c;this.rb=!!d;this.zb=e;this.key=++Pb;this.Pa=this.qb=!1},Rb=function(a){a.Pa=!0;a.listener=null;a.Ib=null;a.src=null;a.zb=null};var Sb=function(a){this.src=a;this.v={};this.pb=0};Sb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.v[f];a||(a=this.v[f]=[],this.pb++);var g=Tb(a,b,d,e);-1<g?(b=a[g],c||(b.qb=!1)):(b=new Qb(b,this.src,f,!!d,e),b.qb=c,a.push(b));return b};Sb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.v))return!1;var e=this.v[a];b=Tb(e,b,c,d);return-1<b?(Rb(e[b]),Ja(e,b),0==e.length&&(delete this.v[a],this.pb--),!0):!1};
var Ub=function(a,b){var c=b.type;c in a.v&&Ka(a.v[c],b)&&(Rb(b),0==a.v[c].length&&(delete a.v[c],a.pb--))};Sb.prototype.ec=function(a,b,c,d){a=this.v[a.toString()];var e=-1;a&&(e=Tb(a,b,c,d));return-1<e?a[e]:null};var Tb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Pa&&f.listener==b&&f.rb==!!c&&f.zb==d)return e}return-1};var Vb="closure_lm_"+(1E6*Math.random()|0),Wb={},Xb=0,Yb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Yb(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?$b(a,b,c,d,e):ac(a,b,c,!1,d,e)},ac=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=bc(a);h||(a[Vb]=h=new Sb(a));c=h.add(b,c,d,e,f);if(!c.Ib){d=cc();c.Ib=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(dc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Xb++}},cc=function(){var a=ec,b=Jb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},fc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)fc(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?gc(a,b,c,d,e):ac(a,b,c,!0,d,e)},hc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)hc(a,b[f],c,d,e);else c=Zb(c),a&&a[Ob]?a.O.remove(String(b),c,d,e):a&&(a=bc(a))&&(b=a.ec(b,c,!!d,e))&&ic(b)},ic=function(a){if(!ga(a)&&a&&!a.Pa){var b=a.src;if(b&&
b[Ob])Ub(b.O,a);else{var c=a.type,d=a.Ib;b.removeEventListener?b.removeEventListener(c,d,a.rb):b.detachEvent&&b.detachEvent(dc(c),d);Xb--;(c=bc(b))?(Ub(c,a),0==c.pb&&(c.src=null,b[Vb]=null)):Rb(a)}}},dc=function(a){return a in Wb?Wb[a]:Wb[a]="on"+a},kc=function(a,b,c,d){var e=!0;if(a=bc(a))if(b=a.v[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.rb==c&&!f.Pa&&(f=jc(f,d),e=e&&!1!==f)}return e},jc=function(a,b){var c=a.listener,d=a.zb||a.src;a.qb&&ic(a);return c.call(d,b)},ec=function(a,
b){if(a.Pa)return!0;if(!Jb){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new Nb(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.Na&&0<=g;g--){c.currentTarget=e[g];var h=kc(e[g],f,!0,c),d=d&&h}for(g=0;!c.Na&&g<e.length;g++)c.currentTarget=
e[g],h=kc(e[g],f,!1,c),d=d&&h}return d}return jc(a,new Nb(b,this))},bc=function(a){a=a[Vb];return a instanceof Sb?a:null},lc="__closure_events_fn_"+(1E9*Math.random()>>>0),Zb=function(a){v(a,"Listener can not be null.");if(p(a))return a;v(a.handleEvent,"An object listener must have handleEvent method.");a[lc]||(a[lc]=function(b){return a.handleEvent(b)});return a[lc]};var mc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var nc=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},qc=function(a){var b=[];oc(new pc,a,b);return b.join("")},pc=function(){this.Lb=void 0},oc=function(a,b,c){if(null==
b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],oc(a,a.Lb?a.Lb.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),rc(d,c),c.push(":"),oc(a,a.Lb?a.Lb.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":rc(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},sc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},tc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,rc=function(a,b){b.push('"',a.replace(tc,function(a){var b=sc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
sc[a]=b);return b}),'"')};var uc=function(){};uc.prototype.Bc=null;var vc=function(a){return a.Bc||(a.Bc=a.Uc())};var wc,xc=function(){};r(xc,uc);xc.prototype.$b=function(){var a=yc(this);return a?new ActiveXObject(a):new XMLHttpRequest};xc.prototype.Uc=function(){var a={};yc(this)&&(a[0]=!0,a[1]=!0);return a};
var yc=function(a){if(!a.Qc&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Qc=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Qc};wc=new xc;var zc=function(){};r(zc,uc);zc.prototype.$b=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Ac;throw Error("Unsupported browser");};zc.prototype.Uc=function(){return{}};
var Ac=function(){this.fa=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.fa.onload=q(this.Nd,this);this.fa.onerror=q(this.Oc,this);this.fa.onprogress=q(this.Od,this);this.fa.ontimeout=q(this.Pd,this)};k=Ac.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.fa.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.fa.send(a);else throw Error("Only string data is supported");else this.fa.send()};k.abort=function(){this.fa.abort()};k.setRequestHeader=function(){};k.Nd=function(){this.status=200;this.responseText=this.fa.responseText;Bc(this,4)};k.Oc=function(){this.status=500;this.responseText=null;Bc(this,4)};k.Pd=function(){this.Oc()};k.Od=function(){this.status=200;Bc(this,1)};var Bc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var B=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.h[d]=e,c=!1)}},Cc={},Dc=function(a){if(-128<=a&&128>a){var b=Cc[a];if(b)return b}b=new B([a|0],0>a?-1:0);-128<=a&&128>a&&(Cc[a]=b);return b},E=function(a){if(isNaN(a)||!isFinite(a))return C;if(0>a)return D(E(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=4294967296;return new B(b,0)},Ec=function(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+
c);if("-"==a.charAt(0))return D(Ec(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=E(Math.pow(c,8)),e=C,f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),h=parseInt(a.substring(f,f+g),c);8>g?(g=E(Math.pow(c,g)),e=e.multiply(g).add(E(h))):(e=e.multiply(d),e=e.add(E(h)))}return e},C=Dc(0),Fc=Dc(1),Gc=Dc(16777216),Hc=function(a){if(-1==a.g)return-Hc(D(a));for(var b=0,c=1,d=0;d<a.h.length;d++)b+=Ic(a,d)*c,c*=4294967296;return b};
B.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(F(this))return"0";if(-1==this.g)return"-"+D(this).toString(a);for(var b=E(Math.pow(a,6)),c=this,d="";;){var e=Jc(c,b),c=Kc(c,e.multiply(b)),f=((0<c.h.length?c.h[0]:c.g)>>>0).toString(a),c=e;if(F(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
var G=function(a,b){return 0>b?0:b<a.h.length?a.h[b]:a.g},Ic=function(a,b){var c=G(a,b);return 0<=c?c:4294967296+c},F=function(a){if(0!=a.g)return!1;for(var b=0;b<a.h.length;b++)if(0!=a.h[b])return!1;return!0};B.prototype.tb=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c<b;c++)if(G(this,c)!=G(a,c))return!1;return!0};B.prototype.compare=function(a){a=Kc(this,a);return-1==a.g?-1:F(a)?0:1};
var D=function(a){for(var b=a.h.length,c=[],d=0;d<b;d++)c[d]=~a.h[d];return(new B(c,~a.g)).add(Fc)};B.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e<=b;e++){var f=d+(G(this,e)&65535)+(G(a,e)&65535),g=(f>>>16)+(G(this,e)>>>16)+(G(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;c[e]=g<<16|f}return new B(c,c[c.length-1]&-2147483648?-1:0)};var Kc=function(a,b){return a.add(D(b))};
B.prototype.multiply=function(a){if(F(this)||F(a))return C;if(-1==this.g)return-1==a.g?D(this).multiply(D(a)):D(D(this).multiply(a));if(-1==a.g)return D(this.multiply(D(a)));if(0>this.compare(Gc)&&0>a.compare(Gc))return E(Hc(this)*Hc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.h.length;d++)for(var e=0;e<a.h.length;e++){var f=G(this,d)>>>16,g=G(this,d)&65535,h=G(a,e)>>>16,m=G(a,e)&65535;c[2*d+2*e]+=g*m;Lc(c,2*d+2*e);c[2*d+2*e+1]+=f*m;Lc(c,2*d+2*e+1);c[2*d+2*e+1]+=
g*h;Lc(c,2*d+2*e+1);c[2*d+2*e+2]+=f*h;Lc(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new B(c,0)};
var Lc=function(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535},Jc=function(a,b){if(F(b))throw Error("division by zero");if(F(a))return C;if(-1==a.g)return-1==b.g?Jc(D(a),D(b)):D(Jc(D(a),b));if(-1==b.g)return D(Jc(a,D(b)));if(30<a.h.length){if(-1==a.g||-1==b.g)throw Error("slowDivide_ only works with positive integers.");for(var c=Fc,d=b;0>=d.compare(a);)c=c.shiftLeft(1),d=d.shiftLeft(1);for(var e=Mc(c,1),f=Mc(d,1),g,d=Mc(d,2),c=Mc(c,2);!F(d);)g=f.add(d),0>=g.compare(a)&&(e=e.add(c),
f=g),d=Mc(d,1),c=Mc(c,1);return e}c=C;for(d=a;0<=d.compare(b);){e=Math.max(1,Math.floor(Hc(d)/Hc(b)));f=Math.ceil(Math.log(e)/Math.LN2);f=48>=f?1:Math.pow(2,f-48);g=E(e);for(var h=g.multiply(b);-1==h.g||0<h.compare(d);)e-=f,g=E(e),h=g.multiply(b);F(g)&&(g=Fc);c=c.add(g);d=Kc(d,h)}return c},Nc=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e<c;e++)d[e]=G(a,e)|G(b,e);return new B(d,a.g|b.g)};
B.prototype.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.h.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?G(this,e-b)<<a|G(this,e-b-1)>>>32-a:G(this,e-b);return new B(d,this.g)};var Mc=function(a,b){for(var c=b>>5,d=b%32,e=a.h.length-c,f=[],g=0;g<e;g++)f[g]=0<d?G(a,g+c)>>>d|G(a,g+c+1)<<32-d:G(a,g+c);return new B(f,a.g)};var Oc=function(a,b){this.cb=a;this.ea=b};Oc.prototype.tb=function(a){return this.ea==a.ea&&this.cb.tb(Ya(a.cb))};
var Rc=function(a){try{var b;if(b=0==a.lastIndexOf("[",0)){var c=a.length-1;b=0<=c&&a.indexOf("]",c)==c}return b?new Pc(a.substring(1,a.length-1)):new Qc(a)}catch(d){return null}},Qc=function(a){var b=C;if(a instanceof B){if(0!=a.g||0>a.compare(C)||0<a.compare(Sc))throw Error("The address does not look like an IPv4.");b=Ya(a)}else{if(!Tc.test(a))throw Error(a+" does not look like an IPv4 address.");var c=a.split(".");if(4!=c.length)throw Error(a+" does not look like an IPv4 address.");for(var d=0;d<
c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&&/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0>e||255<e||1!=c[d].length&&0==c[d].lastIndexOf("0",0))throw Error("In "+a+", octet "+d+" is not valid");e=E(e);b=Nc(b.shiftLeft(8),e)}}Oc.call(this,b,4)};r(Qc,Oc);var Tc=/^[0-9.]*$/,Sc=Kc(Fc.shiftLeft(32),Fc);Qc.prototype.toString=function(){if(this.va)return this.va;for(var a=Ic(this.cb,0),b=[],c=3;0<=c;c--)b[c]=String(a&255),a>>>=8;return this.va=b.join(".")};
var Pc=function(a){var b=C;if(a instanceof B){if(0!=a.g||0>a.compare(C)||0<a.compare(Uc))throw Error("The address does not look like a valid IPv6.");b=Ya(a)}else{if(!Vc.test(a))throw Error(a+" is not a valid IPv6 address.");var c=a.split(":");if(-1!=c[c.length-1].indexOf(".")){a=Ic(Ya((new Qc(c[c.length-1])).cb),0);var d=[];d.push((a>>>16&65535).toString(16));d.push((a&65535).toString(16));Ja(c,c.length-1);Pa(c,d);a=c.join(":")}d=a.split("::");if(2<d.length||1==d.length&&8!=c.length)throw Error(a+
" is not a valid IPv6 address.");if(1<d.length){c=d[0].split(":");d=d[1].split(":");1==c.length&&""==c[0]&&(c=[]);1==d.length&&""==d[0]&&(d=[]);var e=8-(c.length+d.length);if(1>e)c=[];else{for(var f=[],g=0;g<e;g++)f[g]="0";c=Na(c,f,d)}}if(8!=c.length)throw Error(a+" is not a valid IPv6 address");for(d=0;d<c.length;d++){e=Ec(c[d],16);if(0>e.compare(C)||0<e.compare(Wc))throw Error(c[d]+" in "+a+" is not a valid hextet.");b=Nc(b.shiftLeft(16),e)}}Oc.call(this,b,6)};r(Pc,Oc);
var Vc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Wc=Dc(65535),Uc=Kc(Fc.shiftLeft(128),Fc);Pc.prototype.toString=function(){if(this.va)return this.va;for(var a=[],b=3;0<=b;b--){var c=Ic(this.cb,b),d=c&65535;a.push((c>>>16).toString(16));a.push(d.toString(16))}for(var c=b=-1,e=d=0,f=0;f<a.length;f++)"0"==a[f]?(e++,-1==c&&(c=f),e>d&&(d=e,b=c)):(c=-1,e=0);0<d&&(b+d==a.length&&a.push(""),a.splice(b,d,""),0==b&&(a=[""].concat(a)));return this.va=a.join(":")};!gb&&!y||y&&9<=Number(qb)||gb&&z("1.9.1");y&&z("9");var Yc=function(a,b){Qa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Xc.hasOwnProperty(d)?a.setAttribute(Xc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Xc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Zc=function(a,b,c){this.ae=c;this.Cd=a;this.le=b;this.Fb=0;this.Ab=null};Zc.prototype.get=function(){var a;0<this.Fb?(this.Fb--,a=this.Ab,this.Ab=a.next,a.next=null):a=this.Cd();return a};Zc.prototype.put=function(a){this.le(a);this.Fb<this.ae&&(this.Fb++,a.next=this.Ab,this.Ab=a)};var $c=function(a){l.setTimeout(function(){throw a;},0)},ad,bd=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Fc;c.Fc=null;a()}};return function(a){d.next={Fc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var cd=function(){this.Tb=this.Da=null},ed=new Zc(function(){return new dd},function(a){a.reset()},100);cd.prototype.add=function(a,b){var c=ed.get();c.set(a,b);this.Tb?this.Tb.next=c:(v(!this.Da),this.Da=c);this.Tb=c};cd.prototype.remove=function(){var a=null;this.Da&&(a=this.Da,this.Da=this.Da.next,this.Da||(this.Tb=null),a.next=null);return a};var dd=function(){this.next=this.scope=this.dc=null};dd.prototype.set=function(a,b){this.dc=a;this.scope=b;this.next=null};
dd.prototype.reset=function(){this.next=this.scope=this.dc=null};var jd=function(a,b){fd||gd();hd||(fd(),hd=!0);id.add(a,b)},fd,gd=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);fd=function(){a.then(kd)}}else fd=function(){var a=kd;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!x("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(ad||(ad=bd()),ad(a)):l.setImmediate(a)}},hd=!1,id=new cd,kd=function(){for(var a;a=id.remove();){try{a.dc.call(a.scope)}catch(b){$c(b)}ed.put(a)}hd=!1};var ld=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},md=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var H=function(a,b){this.A=0;this.ca=void 0;this.Fa=this.X=this.l=null;this.yb=this.cc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){nd(c,2,a)},function(a){if(!(a instanceof od))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}nd(c,3,a)})}catch(d){nd(this,3,d)}},pd=function(){this.next=this.context=this.La=this.wa=this.child=null;this.Wa=!1};pd.prototype.reset=function(){this.context=this.La=this.wa=this.child=null;this.Wa=!1};
var qd=new Zc(function(){return new pd},function(a){a.reset()},100),rd=function(a,b,c){var d=qd.get();d.wa=a;d.La=b;d.context=c;return d},I=function(a){if(a instanceof H)return a;var b=new H(ba);nd(b,2,a);return b},sd=function(a){return new H(function(b,c){c(a)})},ud=function(a,b,c){td(a,b,c,null)||jd(ka(b,a))},vd=function(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Ld:!0,value:f}:{Ld:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],ud(g,ka(e,f,!0),
ka(e,f,!1));else b(d)})};H.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return wd(this,p(a)?a:null,p(b)?b:null,c)};ld(H);var yd=function(a,b){var c=rd(b,b,void 0);c.Wa=!0;xd(a,c);return a};H.prototype.I=function(a,b){return wd(this,null,a,b)};H.prototype.cancel=function(a){0==this.A&&jd(function(){var b=new od(a);zd(this,b)},this)};
var zd=function(a,b){if(0==a.A)if(a.l){var c=a.l;if(c.X){for(var d=0,e=null,f=null,g=c.X;g&&(g.Wa||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.A&&1==d?zd(c,b):(f?(d=f,v(c.X),v(null!=d),d.next==c.Fa&&(c.Fa=d),d.next=d.next.next):Ad(c),Bd(c,e,3,b)))}a.l=null}else nd(a,3,b)},xd=function(a,b){a.X||2!=a.A&&3!=a.A||Cd(a);v(null!=b.wa);a.Fa?a.Fa.next=b:a.X=b;a.Fa=b},wd=function(a,b,c,d){var e=rd(null,null,null);e.child=new H(function(a,g){e.wa=b?function(c){try{var e=b.call(d,c);a(e)}catch(S){g(S)}}:
a;e.La=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof od?g(b):a(e)}catch(S){g(S)}}:g});e.child.l=a;xd(a,e);return e.child};H.prototype.ve=function(a){v(1==this.A);this.A=0;nd(this,2,a)};H.prototype.we=function(a){v(1==this.A);this.A=0;nd(this,3,a)};
var nd=function(a,b,c){0==a.A&&(a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.A=1,td(c,a.ve,a.we,a)||(a.ca=c,a.A=b,a.l=null,Cd(a),3!=b||c instanceof od||Dd(a,c)))},td=function(a,b,c,d){if(a instanceof H)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xd(a,rd(b||ba,c||null,d)),!0;if(md(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(p(e))return Ed(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Ed=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(m){h(m)}},Cd=function(a){a.cc||(a.cc=!0,jd(a.Gd,a))},Ad=function(a){var b=null;a.X&&(b=a.X,a.X=b.next,b.next=null);a.X||(a.Fa=null);null!=b&&v(null!=b.wa);return b};H.prototype.Gd=function(){for(var a;a=Ad(this);)Bd(this,a,this.A,this.ca);this.cc=!1};
var Bd=function(a,b,c,d){if(3==c&&b.La&&!b.Wa)for(;a&&a.yb;a=a.l)a.yb=!1;if(b.child)b.child.l=null,Fd(b,c,d);else try{b.Wa?b.wa.call(b.context):Fd(b,c,d)}catch(e){Gd.call(null,e)}qd.put(b)},Fd=function(a,b,c){2==b?a.wa.call(a.context,c):a.La&&a.La.call(a.context,c)},Dd=function(a,b){a.yb=!0;jd(function(){a.yb&&Gd.call(null,b)})},Gd=$c,od=function(a){t.call(this,a)};r(od,t);od.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Hd=function(a,b){this.Mb=[];this.Zc=a;this.Hc=b||null;this.$a=this.Ia=!1;this.ca=void 0;this.wc=this.Ac=this.Xb=!1;this.Rb=0;this.l=null;this.Yb=0};Hd.prototype.cancel=function(a){if(this.Ia)this.ca instanceof Hd&&this.ca.cancel();else{if(this.l){var b=this.l;delete this.l;a?b.cancel(a):(b.Yb--,0>=b.Yb&&b.cancel())}this.Zc?this.Zc.call(this.Hc,this):this.wc=!0;this.Ia||Id(this,new Jd)}};Hd.prototype.Gc=function(a,b){this.Xb=!1;Kd(this,a,b)};
var Kd=function(a,b,c){a.Ia=!0;a.ca=c;a.$a=!b;Ld(a)},Nd=function(a){if(a.Ia){if(!a.wc)throw new Md;a.wc=!1}};Hd.prototype.callback=function(a){Nd(this);Od(a);Kd(this,!0,a)};var Id=function(a,b){Nd(a);Od(b);Kd(a,!1,b)},Od=function(a){v(!(a instanceof Hd),"An execution sequence may not be initiated with a blocking Deferred.")},Qd=function(a,b){Pd(a,null,b,void 0)},Pd=function(a,b,c,d){v(!a.Ac,"Blocking Deferreds can not be re-used");a.Mb.push([b,c,d]);a.Ia&&Ld(a)};
Hd.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});Pd(this,d,function(a){a instanceof Jd?f.cancel():e(a)});return f.then(a,b,c)};ld(Hd);
var Rd=function(a){return Fa(a.Mb,function(a){return p(a[1])})},Ld=function(a){if(a.Rb&&a.Ia&&Rd(a)){var b=a.Rb,c=Sd[b];c&&(l.clearTimeout(c.ab),delete Sd[b]);a.Rb=0}a.l&&(a.l.Yb--,delete a.l);for(var b=a.ca,d=c=!1;a.Mb.length&&!a.Xb;){var e=a.Mb.shift(),f=e[0],g=e[1],e=e[2];if(f=a.$a?g:f)try{var h=f.call(e||a.Hc,b);void 0!==h&&(a.$a=a.$a&&(h==b||h instanceof Error),a.ca=b=h);if(md(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.Xb=!0}catch(m){b=m,a.$a=!0,Rd(a)||(c=!0)}}a.ca=b;d&&
(h=q(a.Gc,a,!0),d=q(a.Gc,a,!1),b instanceof Hd?(Pd(b,h,d),b.Ac=!0):b.then(h,d));c&&(b=new Td(b),Sd[b.ab]=b,a.Rb=b.ab)},Md=function(){t.call(this)};r(Md,t);Md.prototype.message="Deferred has already fired";Md.prototype.name="AlreadyCalledError";var Jd=function(){t.call(this)};r(Jd,t);Jd.prototype.message="Deferred was canceled";Jd.prototype.name="CanceledError";var Td=function(a){this.ab=l.setTimeout(q(this.ue,this),0);this.D=a};
Td.prototype.ue=function(){v(Sd[this.ab],"Cannot throw an error that is not scheduled.");delete Sd[this.ab];throw this.D;};var Sd={};var Yd=function(a){var b={},c=b.document||document,d=document.createElement("SCRIPT"),e={hd:d,ob:void 0},f=new Hd(Ud,e),g=null,h=null!=b.timeout?b.timeout:5E3;0<h&&(g=window.setTimeout(function(){Vd(d,!0);Id(f,new Wd(1,"Timeout reached for loading script "+a))},h),e.ob=g);d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(Vd(d,b.Be||!1,g),f.callback(null))};d.onerror=function(){Vd(d,!0,g);Id(f,new Wd(0,"Error while loading script "+a))};e=b.attributes||
{};$a(e,{type:"text/javascript",charset:"UTF-8",src:a});Yc(d,e);Xd(c).appendChild(d);return f},Xd=function(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement},Ud=function(){if(this&&this.hd){var a=this.hd;a&&"SCRIPT"==a.tagName&&Vd(a,!0,this.ob)}},Vd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Wd=function(a,b){var c="Jsloader error (code #"+
a+")";b&&(c+=": "+b);t.call(this,c);this.code=a};r(Wd,t);var J=function(){Lb.call(this);this.O=new Sb(this);this.yd=this;this.lc=null};r(J,Lb);J.prototype[Ob]=!0;J.prototype.addEventListener=function(a,b,c,d){Yb(this,a,b,c,d)};J.prototype.removeEventListener=function(a,b,c,d){hc(this,a,b,c,d)};
J.prototype.dispatchEvent=function(a){Zd(this);var b,c=this.lc;if(c){b=[];for(var d=1;c;c=c.lc)b.push(c),v(1E3>++d,"infinite loop")}c=this.yd;d=a.type||a;if(n(a))a=new Mb(a,c);else if(a instanceof Mb)a.target=a.target||c;else{var e=a;a=new Mb(d,c);$a(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Na&&0<=g;g--)f=a.currentTarget=b[g],e=$d(f,d,!0,a)&&e;a.Na||(f=a.currentTarget=c,e=$d(f,d,!0,a)&&e,a.Na||(e=$d(f,d,!1,a)&&e));if(b)for(g=0;!a.Na&&g<b.length;g++)f=a.currentTarget=b[g],e=$d(f,d,!1,a)&&e;return e};
J.prototype.Ga=function(){J.yc.Ga.call(this);if(this.O){var a=this.O,b=0,c;for(c in a.v){for(var d=a.v[c],e=0;e<d.length;e++)++b,Rb(d[e]);delete a.v[c];a.pb--}}this.lc=null};
var $b=function(a,b,c,d,e){Zd(a);a.O.add(String(b),c,!1,d,e)},gc=function(a,b,c,d,e){a.O.add(String(b),c,!0,d,e)},$d=function(a,b,c,d){b=a.O.v[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Pa&&g.rb==c){var h=g.listener,m=g.zb||g.src;g.qb&&Ub(a.O,g);e=!1!==h.call(m,d)&&e}}return e&&0!=d.gd};J.prototype.ec=function(a,b,c,d){return this.O.ec(String(a),b,c,d)};var Zd=function(a){v(a.O,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var ae="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},be=function(){};be.prototype.next=function(){throw ae;};be.prototype.Va=function(){return this};
var ce=function(a){if(a instanceof be)return a;if("function"==typeof a.Va)return a.Va(!1);if(fa(a)){var b=0,c=new be;c.next=function(){for(;;){if(b>=a.length)throw ae;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");},de=function(a,b){if(fa(a))try{w(a,b,void 0)}catch(c){if(c!==ae)throw c;}else{a=ce(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ae)throw c;}}};var ee=function(a,b){this.P={};this.m=[];this.ea=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};k=ee.prototype;k.wb=function(){return this.i};k.J=function(){fe(this);for(var a=[],b=0;b<this.m.length;b++)a.push(this.P[this.m[b]]);return a};k.Y=function(){fe(this);return this.m.concat()};k.Ya=function(a){return ge(this.P,a)};
k.tb=function(a,b){if(this===a)return!0;if(this.i!=a.wb())return!1;var c=b||he;fe(this);for(var d,e=0;d=this.m[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};var he=function(a,b){return a===b};ee.prototype.remove=function(a){return ge(this.P,a)?(delete this.P[a],this.i--,this.ea++,this.m.length>2*this.i&&fe(this),!0):!1};
var fe=function(a){if(a.i!=a.m.length){for(var b=0,c=0;b<a.m.length;){var d=a.m[b];ge(a.P,d)&&(a.m[c++]=d);b++}a.m.length=c}if(a.i!=a.m.length){for(var e={},c=b=0;b<a.m.length;)d=a.m[b],ge(e,d)||(a.m[c++]=d,e[d]=1),b++;a.m.length=c}};k=ee.prototype;k.get=function(a,b){return ge(this.P,a)?this.P[a]:b};k.set=function(a,b){ge(this.P,a)||(this.i++,this.m.push(a),this.ea++);this.P[a]=b};
k.addAll=function(a){var b;a instanceof ee?(b=a.Y(),a=a.J()):(b=Sa(a),a=Ra(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};k.forEach=function(a,b){for(var c=this.Y(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new ee(this)};k.Va=function(a){fe(this);var b=0,c=this.ea,d=this,e=new be;e.next=function(){if(c!=d.ea)throw Error("The map has changed since the iterator was created");if(b>=d.m.length)throw ae;var e=d.m[b++];return a?e:d.P[e]};return e};
var ge=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ie=function(a){if(a.J&&"function"==typeof a.J)return a.J();if(n(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ra(a)},je=function(a){if(a.Y&&"function"==typeof a.Y)return a.Y();if(!a.J||"function"!=typeof a.J){if(fa(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Sa(a)}},ke=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||n(a))w(a,b,void 0);else for(var c=je(a),d=ie(a),e=d.length,
f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var le=function(a,b,c,d,e){this.reset(a,b,c,d,e)};le.prototype.Jc=null;var me=0;le.prototype.reset=function(a,b,c,d,e){"number"==typeof e||me++;d||la();this.gb=a;this.de=b;delete this.Jc};le.prototype.kd=function(a){this.gb=a};var ne=function(a){this.ee=a;this.Pc=this.Zb=this.gb=this.l=null},oe=function(a,b){this.name=a;this.value=b};oe.prototype.toString=function(){return this.name};var pe=new oe("SEVERE",1E3),qe=new oe("CONFIG",700),re=new oe("FINE",500);ne.prototype.getParent=function(){return this.l};ne.prototype.kd=function(a){this.gb=a};var se=function(a){if(a.gb)return a.gb;if(a.l)return se(a.l);ya("Root logger has no level set.");return null};
ne.prototype.log=function(a,b,c){if(a.value>=se(this).value)for(p(b)&&(b=b()),a=new le(a,String(b),this.ee),c&&(a.Jc=c),c="log:"+a.de,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Pc)for(var e=0,f;f=b.Pc[e];e++)f(d);c=c.getParent()}};
var te={},ue=null,ve=function(a){ue||(ue=new ne(""),te[""]=ue,ue.kd(qe));var b;if(!(b=te[a])){b=new ne(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ve(a.substr(0,c));c.Zb||(c.Zb={});c.Zb[d]=b;b.l=c;te[a]=b}return b};var K=function(a,b){a&&a.log(re,b,void 0)};var we=function(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},xe=function(a){var b=null;return(new H(function(c,d){b=we(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).I(function(a){l.clearTimeout(b);throw a;})};var ye=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,ze=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};var L=function(a){J.call(this);this.headers=new ee;this.Vb=a||null;this.ga=!1;this.Ub=this.a=null;this.fb=this.Wc=this.Cb="";this.ua=this.jc=this.Bb=this.bc=!1;this.Sa=0;this.Qb=null;this.fd="";this.Sb=this.ke=this.ye=!1};r(L,J);var Ae=L.prototype,Be=ve("goog.net.XhrIo");Ae.L=Be;var Ce=/^https?$/i,De=["POST","PUT"];
L.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Cb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Cb=a;this.fb="";this.Wc=b;this.bc=!1;this.ga=!0;this.a=this.Vb?this.Vb.$b():wc.$b();this.Ub=this.Vb?vc(this.Vb):vc(wc);this.a.onreadystatechange=q(this.ad,this);this.ke&&"onprogress"in this.a&&(this.a.onprogress=q(function(a){this.$c(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=q(this.$c,this)));try{K(this.L,Ee(this,"Opening Xhr")),
this.jc=!0,this.a.open(b,String(a),!0),this.jc=!1}catch(f){K(this.L,Ee(this,"Error opening Xhr: "+f.message));this.D(5,f);return}a=c||"";var e=this.headers.clone();d&&ke(d,function(a,b){e.set(b,a)});d=Ha(e.Y());c=l.FormData&&a instanceof l.FormData;!Ia(De,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.fd&&(this.a.responseType=this.fd);Ta(this.a)&&(this.a.withCredentials=this.ye);try{Fe(this),0<this.Sa&&
(this.Sb=Ge(this.a),K(this.L,Ee(this,"Will abort after "+this.Sa+"ms if incomplete, xhr2 "+this.Sb)),this.Sb?(this.a.timeout=this.Sa,this.a.ontimeout=q(this.ob,this)):this.Qb=we(this.ob,this.Sa,this)),K(this.L,Ee(this,"Sending request")),this.Bb=!0,this.a.send(a),this.Bb=!1}catch(f){K(this.L,Ee(this,"Send error: "+f.message)),this.D(5,f)}};var Ge=function(a){return y&&z(9)&&ga(a.timeout)&&void 0!==a.ontimeout},Ga=function(a){return"content-type"==a.toLowerCase()};
L.prototype.ob=function(){"undefined"!=typeof aa&&this.a&&(this.fb="Timed out after "+this.Sa+"ms, aborting",K(this.L,Ee(this,this.fb)),this.dispatchEvent("timeout"),this.abort(8))};L.prototype.D=function(a,b){this.ga=!1;this.a&&(this.ua=!0,this.a.abort(),this.ua=!1);this.fb=b;He(this);Ie(this)};var He=function(a){a.bc||(a.bc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
L.prototype.abort=function(){this.a&&this.ga&&(K(this.L,Ee(this,"Aborting")),this.ga=!1,this.ua=!0,this.a.abort(),this.ua=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ie(this))};L.prototype.Ga=function(){this.a&&(this.ga&&(this.ga=!1,this.ua=!0,this.a.abort(),this.ua=!1),Ie(this,!0));L.yc.Ga.call(this)};L.prototype.ad=function(){this.isDisposed()||(this.jc||this.Bb||this.ua?Je(this):this.ie())};L.prototype.ie=function(){Je(this)};
var Je=function(a){if(a.ga&&"undefined"!=typeof aa)if(a.Ub[1]&&4==Ke(a)&&2==Le(a))K(a.L,Ee(a,"Local request error detected and ignored"));else if(a.Bb&&4==Ke(a))we(a.ad,0,a);else if(a.dispatchEvent("readystatechange"),4==Ke(a)){K(a.L,Ee(a,"Request complete"));a.ga=!1;try{var b=Le(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Cb).match(ye)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
f=g.substr(0,g.length-1);e=!Ce.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var h;try{h=2<Ke(a)?a.a.statusText:""}catch(m){K(a.L,"Can not get status: "+m.message),h=""}a.fb=h+" ["+Le(a)+"]";He(a)}}finally{Ie(a)}}};L.prototype.$c=function(a,b){v("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Me(a,"progress"));this.dispatchEvent(Me(a,b?"downloadprogress":"uploadprogress"))};
var Me=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ie=function(a,b){if(a.a){Fe(a);var c=a.a,d=a.Ub[0]?ba:null;a.a=null;a.Ub=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(c=a.L)&&c.log(pe,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Fe=function(a){a.a&&a.Sb&&(a.a.ontimeout=null);ga(a.Qb)&&(l.clearTimeout(a.Qb),a.Qb=null)},Ke=function(a){return a.a?a.a.readyState:0},Le=function(a){try{return 2<Ke(a)?
a.a.status:-1}catch(b){return-1}},Ee=function(a,b){return b+" ["+a.Wc+" "+a.Cb+" "+Le(a)+"]"};var Ne=function(a,b){this.ia=this.Ca=this.na="";this.Ma=null;this.ta=this.ka="";this.F=this.$d=!1;var c;if(a instanceof Ne)this.F=void 0!==b?b:a.F,Oe(this,a.na),c=a.Ca,M(this),this.Ca=c,Pe(this,a.ia),Qe(this,a.Ma),Re(this,a.ka),Se(this,a.S.clone()),c=a.ta,M(this),this.ta=c;else if(a&&(c=String(a).match(ye))){this.F=!!b;Oe(this,c[1]||"",!0);var d=c[2]||"";M(this);this.Ca=Te(d);Pe(this,c[3]||"",!0);Qe(this,c[4]);Re(this,c[5]||"",!0);Se(this,c[6]||"",!0);c=c[7]||"";M(this);this.ta=Te(c)}else this.F=
!!b,this.S=new N(null,0,this.F)};Ne.prototype.toString=function(){var a=[],b=this.na;b&&a.push(Ue(b,Ve,!0),":");var c=this.ia;if(c||"file"==b)a.push("//"),(b=this.Ca)&&a.push(Ue(b,Ve,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Ma,null!=c&&a.push(":",String(c));if(c=this.ka)this.ia&&"/"!=c.charAt(0)&&a.push("/"),a.push(Ue(c,"/"==c.charAt(0)?We:Xe,!0));(c=this.S.toString())&&a.push("?",c);(c=this.ta)&&a.push("#",Ue(c,Ye));return a.join("")};
Ne.prototype.resolve=function(a){var b=this.clone(),c=!!a.na;c?Oe(b,a.na):c=!!a.Ca;if(c){var d=a.Ca;M(b);b.Ca=d}else c=!!a.ia;c?Pe(b,a.ia):c=null!=a.Ma;d=a.ka;if(c)Qe(b,a.Ma);else if(c=!!a.ka){if("/"!=d.charAt(0))if(this.ia&&!this.ka)d="/"+d;else{var e=b.ka.lastIndexOf("/");-1!=e&&(d=b.ka.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(u(e,"./")||u(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?Re(b,d):c=""!==a.S.toString();c?Se(b,Te(a.S.toString())):c=!!a.ta;c&&(a=a.ta,M(b),b.ta=a);return b};Ne.prototype.clone=function(){return new Ne(this)};
var Oe=function(a,b,c){M(a);a.na=c?Te(b,!0):b;a.na&&(a.na=a.na.replace(/:$/,""))},Pe=function(a,b,c){M(a);a.ia=c?Te(b,!0):b},Qe=function(a,b){M(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ma=b}else a.Ma=null},Re=function(a,b,c){M(a);a.ka=c?Te(b,!0):b},Se=function(a,b,c){M(a);b instanceof N?(a.S=b,a.S.vc(a.F)):(c||(b=Ue(b,Ze)),a.S=new N(b,0,a.F))},O=function(a,b,c){M(a);a.S.set(b,c)},M=function(a){if(a.$d)throw Error("Tried to modify a read-only Uri");};
Ne.prototype.vc=function(a){this.F=a;this.S&&this.S.vc(a);return this};
var $e=function(a,b){var c=new Ne(null,void 0);Oe(c,"https");a&&Pe(c,a);b&&Re(c,b);return c},Te=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Ue=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,af),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},af=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ve=/[#\/\?@]/g,Xe=/[\#\?:]/g,We=/[\#\?]/g,Ze=/[\#\?@]/g,Ye=/#/g,N=function(a,b,c){this.i=this.j=null;this.C=a||null;
this.F=!!c},bf=function(a){a.j||(a.j=new ee,a.i=0,a.C&&ze(a.C,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},df=function(a){var b=je(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new N(null,0,void 0);a=ie(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ea(f)?cf(c,e,f):c.add(e,f)}return c};k=N.prototype;k.wb=function(){bf(this);return this.i};
k.add=function(a,b){bf(this);this.C=null;a=this.s(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=za(this.i)+1;return this};k.remove=function(a){bf(this);a=this.s(a);return this.j.Ya(a)?(this.C=null,this.i=za(this.i)-this.j.get(a).length,this.j.remove(a)):!1};k.Ya=function(a){bf(this);a=this.s(a);return this.j.Ya(a)};k.Y=function(){bf(this);for(var a=this.j.J(),b=this.j.Y(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
k.J=function(a){bf(this);var b=[];if(n(a))this.Ya(a)&&(b=Ma(b,this.j.get(this.s(a))));else{a=this.j.J();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};k.set=function(a,b){bf(this);this.C=null;a=this.s(a);this.Ya(a)&&(this.i=za(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=za(this.i)+1;return this};k.get=function(a,b){var c=a?this.J(a):[];return 0<c.length?String(c[0]):b};var cf=function(a,b,c){a.remove(b);0<c.length&&(a.C=null,a.j.set(a.s(b),Oa(c)),a.i=za(a.i)+c.length)};
N.prototype.toString=function(){if(this.C)return this.C;if(!this.j)return"";for(var a=[],b=this.j.Y(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.J(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.C=a.join("&")};N.prototype.clone=function(){var a=new N;a.C=this.C;this.j&&(a.j=this.j.clone(),a.i=this.i);return a};N.prototype.s=function(a){a=String(a);this.F&&(a=a.toLowerCase());return a};
N.prototype.vc=function(a){a&&!this.F&&(bf(this),this.C=null,this.j.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),cf(this,d,a))},this));this.F=a};var ef=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Va(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<ef(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},ff=function(a,b){var c=null,d=Math.floor(1E9*Math.random()).toString(),e=a||500,f=b||600,g=(window.screen.availHeight-f)/2,h=(window.screen.availWidth-e)/2,e={width:e,height:f,top:0<g?g:0,left:0<h?h:0,location:!0,resizable:!0,statusbar:!0,
toolbar:!1};d&&(e.target=d);navigator.userAgent&&-1!=navigator.userAgent.indexOf("Firefox/")&&(c=c||"http://localhost");var m,f=c||"about:blank";(d=e)||(d={});c=window;e=f instanceof A?f:Db("undefined"!=typeof f.href?f.href:String(f));f=d.target||f.target;g=[];for(m in d)switch(m){case "width":case "height":case "top":case "left":g.push(m+"="+d[m]);break;case "target":case "noreferrer":break;default:g.push(m+"="+(d[m]?1:0))}m=g.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&
c.navigator&&c.navigator.standalone&&f&&"_self"!=f?(m=c.document.createElement("A"),e=e instanceof A?e:Db(e),m.href=Ab(e),m.setAttribute("target",f),d.noreferrer&&m.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,c,1),m.dispatchEvent(d),m={}):d.noreferrer?(m=c.open("",f,m),d=Ab(e),m&&(fb&&u(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),m.opener=null,c=new xb,c.Pb="b/12014412, meta tag with sanitized URL",ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(oa,
"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(pa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(qa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ra,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(yb(c),"must provide justification"),v(!/^[\s\xa0]*$/.test(yb(c)),"must provide non-empty justification"),m.document.write(Gb((new Fb).Zd(d))),m.document.close())):m=c.open(Ab(e),f,m);if(m)try{m.focus()}catch(S){}return m},
gf=function(a){return new H(function(b){var c=function(){xe(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},hf=function(){var a=null;return(new H(function(b){"complete"==l.document.readyState?b():(a=function(){b()},fc(window,"load",a))})).I(function(b){hc(window,"load",a);throw b;})},jf=function(){var a=navigator.userAgent,b=a.toLowerCase();if(u(b,"opera/")||u(b,"opr/")||u(b,"opios/"))return"Opera";if(u(b,"msie")||u(b,"trident/"))return"IE";if(u(b,"edge/"))return"Edge";if(u(b,
"firefox/"))return"Firefox";if(u(b,"silk/"))return"Silk";if(u(b,"safari/")&&!u(b,"chrome/"))return"Safari";if(!u(b,"chrome/")&&!u(b,"crios/")||u(b,"edge/")){if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";return"Other"},kf=function(a){return jf()+"/JsCore/"+a},lf=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b};var mf;try{var nf={};Object.defineProperty(nf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(nf,"abcd",{configurable:!0,enumerable:!0,value:2});mf=2==nf.abcd}catch(a){mf=!1}
var P=function(a,b,c){mf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},of=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&P(a,c,b[c])},pf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},qf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0};var rf={rd:{kb:985,jb:735,providerId:"facebook.com"},sd:{kb:1040,jb:620,providerId:"github.com"},td:{kb:485,jb:640,providerId:"google.com"},xd:{kb:485,jb:705,providerId:"twitter.com"}},sf=function(a){for(var b in rf)if(rf[b].providerId==a)return rf[b];return null};var Q=function(a,b){this.code="auth/"+a;this.message=b||tf[a]||""};r(Q,Error);Q.prototype.N=function(){return{name:this.code,code:this.code,message:this.message}};
var tf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"This operation is not allowed. You must enable this service in the console.","popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.",
"provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.",
"user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported."};var uf=function(a,b,c,d,e){this.pa=a;this.sa=b||null;this.Ua=c||null;this.uc=d||null;this.D=e||null;if(this.Ua||this.D){if(this.Ua&&this.D)throw new Q("invalid-auth-event");if(this.Ua&&!this.uc)throw new Q("invalid-auth-event");}else throw new Q("invalid-auth-event");};uf.prototype.fc=function(){return this.uc};uf.prototype.getError=function(){return this.D};uf.prototype.N=function(){return{type:this.pa,eventId:this.sa,urlResponse:this.Ua,sessionId:this.uc,error:this.D&&this.D.N()}};var vf=function(a){this.be=a.sub;la();this.sb=a.email||null};var wf=function(a,b,c,d){var e={};ha(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)P(this,"accessToken",e.oauthToken),P(this,"secret",e.oauthTokenSecret);else{if(b)throw new Q("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new Q("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&P(this,
"idToken",e.idToken),e.accessToken&&P(this,"accessToken",e.accessToken);P(this,"provider",a)};wf.prototype.xb=function(a){return xf(a,yf(this))};wf.prototype.Xc=function(a,b){var c=yf(this);c.idToken=b;return R(a,zf,c)};var yf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:df(b).toString(),requestUri:window.location.href}};
wf.prototype.N=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var Af=function(a,b){var c=!!b,d=function(){of(this,{providerId:a,isOAuthProvider:!0});this.tc=[]};c||(d.prototype.addScope=function(a){Ia(this.tc,a)||this.tc.push(a)});d.prototype.Mc=function(){return Oa(this.tc)};d.credential=function(b,d){return new wf(a,c,b,d)};of(d,{PROVIDER_ID:a});return d},Bf=Af("facebook.com");Bf.prototype.addScope=Bf.prototype.addScope||void 0;var Cf=Af("github.com");Cf.prototype.addScope=Cf.prototype.addScope||void 0;var Df=Af("google.com");
Df.prototype.addScope=Df.prototype.addScope||void 0;Df.credential=function(a,b){if(!a&&!b)throw new Q("argument-error","credential failed: must provide the ID token and/or the access token.");return new wf("google.com",!1,ha(a)?a:{idToken:a||null,accessToken:b||null})};var Ef=Af("twitter.com",!0),Ff=function(a,b){this.sb=a;this.mc=b;P(this,"provider","password")};Ff.prototype.xb=function(a){return R(a,Gf,{email:this.sb,password:this.mc})};
Ff.prototype.Xc=function(a,b){return R(a,Hf,{idToken:b,email:this.sb,password:this.mc})};Ff.prototype.N=function(){return{email:this.sb,password:this.mc}};var If=function(){of(this,{providerId:"password",isOAuthProvider:!1})};of(If,{PROVIDER_ID:"password"});
var Jf={ze:If,rd:Bf,td:Df,sd:Cf,xd:Ef},Kf=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Jf)if(Jf[e].PROVIDER_ID==b)try{return Jf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var Lf=function(a,b,c){Q.call(this,"account-exists-with-different-credential",c);P(this,"email",a);P(this,"credential",b)};r(Lf,Q);Lf.prototype.N=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.N();b&&($a(a,b),a.providerId=b.provider,delete a.provider);return a};var T=function(a,b,c){this.u=a;a=b||{};this.ne=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.pe=a.secureTokenTimeout||1E4;this.oe=Ya(a.secureTokenHeaders||Mf);this.Jd=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Kd=a.firebaseTimeout||1E4;this.Lc=Ya(a.firebaseHeaders||Nf);c&&(this.Lc["X-Client-Version"]=c);this.Bd=new zc},Of,Mf={"Content-Type":"application/x-www-form-urlencoded"},Nf={"Content-Type":"application/json"},Qf=function(a,
b,c,d,e,f,g){!y||!qb||9<qb?a=q(a.re,a):(Of||(Of=new H(function(a,b){Pf(a,b)})),a=q(a.qe,a));a(b,c,d,e,f,g)};
T.prototype.re=function(a,b,c,d,e,f){var g=new L(this.Bd),h;f&&(g.Sa=Math.max(0,f),h=setTimeout(function(){g.dispatchEvent("timeout")},f));$b(g,"complete",function(){h&&clearTimeout(h);var a=null;try{var c;c=this.a?nc(this.a.responseText):void 0;a=c||null}catch(d){a=null}b&&b(a)});gc(g,"ready",function(){h&&clearTimeout(h);this.ra||(this.ra=!0,this.Ga())});gc(g,"timeout",function(){h&&clearTimeout(h);this.ra||(this.ra=!0,this.Ga());b&&b(null)});g.send(a,c,d,e)};
var Rf="__fcb"+Math.floor(1E6*Math.random()).toString(),Pf=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Rf]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Qd(Yd("//apis.google.com/js/client.js?onload="+Rf),function(){b(Error("CORS_UNSUPPORTED"))}))};
T.prototype.qe=function(a,b,c,d,e){var f=this;Of.then(function(){window.gapi.client.setApiKey(f.u);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).I(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var Tf=function(a,b){return new H(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Qf(a,a.ne+"?key="+encodeURIComponent(a.u),function(a){a?a.error?d(Sf(a)):a.access_token&&a.refresh_token?c(a):d(new Q("internal-error")):d(new Q("network-request-failed"))},"POST",df(b).toString(),a.oe,a.pe):d(new Q("internal-error"))})},Uf=function(a){var b={},c;for(c in a)null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return qc(b)},Vf=function(a,b,c,d,e){var f=a.Jd+
b+"?key="+encodeURIComponent(a.u);e&&(f+="&cb="+la().toString());return new H(function(b,e){Qf(a,f,function(a){a?a.error?e(Sf(a)):b(a):e(new Q("network-request-failed"))},c,Uf(d),a.Lc,a.Kd)})},Wf=function(a){if(!mc.test(a.email))throw new Q("invalid-email");},Xf=function(a){"email"in a&&Wf(a)},Zf=function(a,b){return R(a,Yf,{identifier:b,continueUri:window.location.href}).then(function(a){return a.allProviders||[]})},ag=function(a){return R(a,$f,{}).then(function(a){return a.authorizedDomains||[]})},
bg=function(a){if(!a.idToken)throw new Q("internal-error");};T.prototype.signInAnonymously=function(){return R(this,cg,{})};T.prototype.updateEmail=function(a,b){return R(this,dg,{idToken:a,email:b})};T.prototype.updatePassword=function(a,b){return R(this,Hf,{idToken:a,password:b})};var eg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
T.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Qa(eg,function(a,f){var g=b[f];null===g?d.push(a):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return R(this,dg,c)};T.prototype.sendPasswordResetEmail=function(a){return R(this,fg,{requestType:"PASSWORD_RESET",email:a})};T.prototype.sendEmailVerification=function(a){return R(this,gg,{requestType:"VERIFY_EMAIL",idToken:a})};
var ig=function(a,b,c){return R(a,hg,{idToken:b,deleteProvider:c})},jg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new Q("internal-error");},kg=function(a){if(a.needConfirmation)throw(a&&a.email?new Lf(a.email,Kf(a),a.message):null)||new Q("account-exists-with-different-credential");if(!a.idToken)throw new Q("internal-error");},xf=function(a,b){return R(a,lg,b)},mg=function(a){if(!a.oobCode)throw new Q("invalid-action-code");};
T.prototype.confirmPasswordReset=function(a,b){return R(this,ng,{oobCode:a,newPassword:b})};T.prototype.checkActionCode=function(a){return R(this,og,{oobCode:a})};T.prototype.applyActionCode=function(a){return R(this,pg,{oobCode:a})};
var pg={endpoint:"setAccountInfo",w:mg,Ra:"email"},og={endpoint:"resetPassword",w:mg,la:function(a){if(!mc.test(a.email))throw new Q("internal-error");}},qg={endpoint:"signupNewUser",w:function(a){Wf(a);if(!a.password)throw new Q("weak-password");},la:bg,ma:!0},Yf={endpoint:"createAuthUri"},rg={endpoint:"deleteAccount",Qa:["idToken"]},hg={endpoint:"setAccountInfo",Qa:["idToken","deleteProvider"],w:function(a){if(!ea(a.deleteProvider))throw new Q("internal-error");}},sg={endpoint:"getAccountInfo"},
gg={endpoint:"getOobConfirmationCode",Qa:["idToken","requestType"],w:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new Q("internal-error");},Ra:"email"},fg={endpoint:"getOobConfirmationCode",Qa:["requestType"],w:function(a){if("PASSWORD_RESET"!=a.requestType)throw new Q("internal-error");Wf(a)},Ra:"email"},$f={Ad:!0,endpoint:"getProjectConfig",Sd:"GET"},ng={endpoint:"resetPassword",w:mg,Ra:"email"},dg={endpoint:"setAccountInfo",Qa:["idToken"],w:Xf,ma:!0},Hf={endpoint:"setAccountInfo",Qa:["idToken"],
w:function(a){Xf(a);if(!a.password)throw new Q("weak-password");},la:bg,ma:!0},cg={endpoint:"signupNewUser",la:bg,ma:!0},lg={endpoint:"verifyAssertion",w:jg,la:kg,ma:!0},zf={endpoint:"verifyAssertion",w:function(a){jg(a);if(!a.idToken)throw new Q("internal-error");},la:kg,ma:!0},tg={endpoint:"verifyCustomToken",w:function(a){if(!a.token)throw new Q("invalid-custom-token");},la:bg,ma:!0},Gf={endpoint:"verifyPassword",w:function(a){Wf(a);if(!a.password)throw new Q("wrong-password");},la:bg,ma:!0},R=
function(a,b,c){if(!qf(c,b.Qa))return sd(new Q("internal-error"));var d=b.Sd||"POST",e;return I(c).then(b.w).then(function(){b.ma&&(c.returnSecureToken=!0);return Vf(a,b.endpoint,d,c,b.Ad||!1)}).then(function(a){return e=a}).then(b.la).then(function(){if(!b.Ra)return e;if(!(b.Ra in e))throw new Q("internal-error");return e[b.Ra]})},Sf=function(a){var b;b=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var c={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(b=c[b]?
new Q(c[b]):null)return b;a=a.error&&a.error.message||"";b={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported"};if(b[a])return new Q(b[a]);b={TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed"};for(var d in b)if(0===a.indexOf(d))return new Q(b[d]);return new Q("internal-error")};var ug=function(a){this.G=a};ug.prototype.value=function(){return this.G};ug.prototype.ld=function(a){this.G.style=a;return this};var vg=function(a){this.G=a||{}};vg.prototype.value=function(){return this.G};vg.prototype.ld=function(a){this.G.style=a;return this};var xg=function(a){this.xe=a;this.hc=null;this.he=wg(this)},yg,zg=function(a){var b=new vg;b.G.where=document.body;b.G.url=a.xe;b.G.messageHandlersFilter=lf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.G.attributes=b.G.attributes||{};(new ug(b.G.attributes)).ld({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.G.dontclear=!0;return b},wg=function(a){return Ag().then(function(){return new H(function(b){lf("gapi.iframes.getContext")().open(zg(a).value(),function(c){a.hc=c;a.hc.restyle({setHideOnLeave:!1});
b()})})})},Bg=function(a,b){a.he.then(function(){a.hc.register("authEvent",b,lf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Cg="__iframefcb"+Math.floor(1E6*Math.random()).toString(),Ag=function(){return yg?yg:yg=new H(function(a,b){var c=function(){lf("gapi.load")("gapi.iframes",function(){a()})};lf("gapi.iframes.Iframe")?a():lf("gapi.load")?c():(l[Cg]=function(){lf("gapi.load")?c():b()},Qd(Yd("//apis.google.com/js/api.js?onload="+Cg),function(){b()}))})};var Eg=function(a,b,c,d){this.ha=a;this.u=b;this.W=c;d=this.qa=d||null;a=$e(a,"/__/auth/iframe");O(a,"apiKey",b);O(a,"appName",c);d&&O(a,"v",d);this.Ud=a.toString();this.Vd=new xg(this.Ud);this.Wb=[];Dg(this)},Fg=function(a,b,c,d,e,f,g,h,m){a=$e(a,"/__/auth/handler");O(a,"apiKey",b);O(a,"appName",c);O(a,"authType",d);O(a,"providerId",e);f&&f.length&&O(a,"scopes",f.join(","));g&&O(a,"redirectUrl",g);h&&O(a,"eventId",h);m&&O(a,"v",m);return a.toString()},Dg=function(a){Bg(a.Vd,function(b){var c={};
if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new Q(e.substring(5),c.message):null;b=new uf(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=null;for(c=0;c<a.Wb.length;c++)d=a.Wb[c](b)||d;c={};c.status=d?"ACK":"ERROR";return I(c)}c.status="ERROR";return I(c)})};Eg.prototype.zc=function(a){this.Wb.push(a)};var Gg=function(a){this.Eb=a};Gg.prototype.set=function(a,b){void 0!==b?this.Eb.set(a,qc(b)):this.Eb.remove(a)};Gg.prototype.get=function(a){var b;try{b=this.Eb.get(a)}catch(c){return}if(null!==b)try{return nc(b)}catch(c){throw"Storage: Invalid value was encountered";}};Gg.prototype.remove=function(a){this.Eb.remove(a)};var Hg=function(){};var Ig=function(){};r(Ig,Hg);Ig.prototype.wb=function(){var a=0;de(this.Va(!0),function(b){Aa(b);a++});return a};var Jg=function(a){this.H=a};r(Jg,Ig);var Kg=function(a){if(!a.H)return!1;try{return a.H.setItem("__sak","1"),a.H.removeItem("__sak"),!0}catch(b){return!1}};k=Jg.prototype;k.set=function(a,b){try{this.H.setItem(a,b)}catch(c){if(0==this.H.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};k.get=function(a){a=this.H.getItem(a);if(!n(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};k.remove=function(a){this.H.removeItem(a)};
k.wb=function(){return this.H.length};k.Va=function(a){var b=0,c=this.H,d=new be;d.next=function(){if(b>=c.length)throw ae;var d=Aa(c.key(b++));if(a)return d;d=c.getItem(d);if(!n(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};k.key=function(a){return this.H.key(a)};var Lg=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.H=a};r(Lg,Jg);var Mg=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.H=a};r(Mg,Jg);var Ng="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),U=function(a,b){return{name:a||"",U:"a valid string",optional:!!b,V:n}},Og=function(a){return{name:a||"",U:"a valid object",optional:!1,V:ha}},Pg=function(a,b){return{name:a||"",U:"a function",optional:!!b,V:p}},Qg=function(){return{name:"",U:"null",optional:!1,V:da}},Rg=function(){return{name:"credential",U:"a valid credential",optional:!1,V:function(a){return!(!a||!a.xb)}}},Sg=function(){return{name:"authProvider",U:"a valid Auth provider",
optional:!1,V:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Tg=function(a,b,c,d){return{name:c||"",U:a.U+" or "+b.U,optional:!!d,V:function(c){return a.V(c)||b.V(c)}}};var Vg=function(a,b){for(var c in b){var d=b[c].name;a[d]=Ug(d,a[c],b[c].b)}},V=function(a,b,c,d){a[b]=Ug(b,c,d)},Ug=function(a,b,c){if(!c)return b;var d=Wg(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var h;h=0;for(var m=!1,S=0;S<c.length;S++)if(c[S].optional)m=!0;else{if(m)throw new Q("internal-error","Argument validator encountered a required argument after an optional argument.");h++}m=c.length;if(e.length<h||m<e.length)e="Expected "+(h==m?1==
h?"1 argument":h+" arguments":h+"-"+m+" arguments")+" but got "+e.length+".";else{for(h=0;h<e.length;h++)if(m=c[h].optional&&void 0===e[h],!c[h].V(e[h])&&!m){e=c[h];if(0>h||h>=Ng.length)throw new Q("internal-error","Argument validator received an unsupported number of arguments.");e=Ng[h]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.U+".";break a}e=null}}if(e)throw new Q("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},Wg=function(a){a=a.split(".");return a[a.length-1]};var $g=function(a,b,c){var d=(this.qa=firebase.SDK_VERSION||null)?kf(this.qa):null;this.c=new T(b,null,d);this.bd=Xg(this.c);this.ha=a;this.u=b;this.W=c;this.nb=[];this.Tc=!1;this.zd=q(this.Md,this);this.lb=new Yg;this.dd=new Zg;this.Ta={};this.Ta.unknown=this.lb;this.Ta.signInViaRedirect=this.lb;this.Ta.linkViaRedirect=this.lb;this.Ta.signInViaPopup=this.dd;this.Ta.linkViaPopup=this.dd},Xg=function(a){var b=window.location.href;return ag(a).then(function(a){a:{for(var d=(b instanceof Ne?b.clone():
new Ne(b,void 0)).ia,e=0;e<a.length;e++){var f;var g=a[e];f=d;var h=Rc(g);h?f=(f=Rc(f))?h.tb(f):!1:(h=g.split(".").join("\\."),f=(new RegExp("^(.+."+h+"|"+h+")$","i")).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new Q("unauthorized-domain");})},ah=function(a){a.Tc=!0;hf().then(function(){a.Td=new Eg(a.ha,a.u,a.W,a.qa);a.Td.zc(a.zd)})};$g.prototype.subscribe=function(a){Ia(this.nb,a)||this.nb.push(a);this.Tc||ah(this)};$g.prototype.unsubscribe=function(a){La(this.nb,function(b){return b==a})};
$g.prototype.Md=function(a){if(!a)throw new Q("invalid-auth-event");for(var b=!1,c=0;c<this.nb.length;c++){var d=this.nb[c];if(d.Ec(a.pa,a.sa)){(b=this.Ta[a.pa])&&b.ed(a,d);b=!0;break}}a=this.lb;a.qc||(a.qc=!0,bh(a,!1,null,null));return b};$g.prototype.getRedirectResult=function(){return this.lb.getRedirectResult()};
var dh=function(a,b,c,d,e){return b?a.bd.then(function(){ch(d);var f=Fg(a.ha,a.u,a.W,c,d.providerId,d.Mc(),null,e,a.qa);Hb((b||window).location,f);return b}):sd(new Q("popup-blocked"))},eh=function(a,b,c,d){return a.bd.then(function(){ch(c);var e=Fg(a.ha,a.u,a.W,b,c.providerId,c.Mc(),window.location.href,d,a.qa);Hb(window.location,e)})},fh=function(a,b,c,d){var e=new Q("popup-closed-by-user");return gf(c).then(function(){return xe(3E4).then(function(){a.Ba(b,null,e,d)})})},ch=function(a){if(!a.isOAuthProvider)throw new Q("invalid-oauth-provider");
},gh={},hh=function(a,b,c){var d=b+":"+c;gh[d]||(gh[d]=new $g(a,b,c));return gh[d]},Yg=function(){this.rc=this.Kb=this.Oa=this.T=null;this.qc=!1};Yg.prototype.ed=function(a,b){if(!a)return sd(new Q("invalid-auth-event"));this.qc=!0;var c=a.pa,d=a.sa;"unknown"==c?(this.T||bh(this,!1,null,null),c=I()):c=a.D?this.oc(a,b):b.Za(c,d)?this.pc(a,b):sd(new Q("invalid-auth-event"));return c};Yg.prototype.oc=function(a){this.T||bh(this,!0,null,a.getError());return I()};
Yg.prototype.pc=function(a,b){var c=this,d=a.pa,e=b.Za(d,a.sa),f=a.Ua,g=a.fc(),h="signInViaRedirect"==d||"linkViaRedirect"==d;return e(f,g).then(function(a){c.T||bh(c,h,a,null)}).I(function(a){c.T||bh(c,h,null,a)})};var bh=function(a,b,c,d){b?d?(a.T=function(){return sd(d)},a.Kb&&a.Kb(d)):(a.T=function(){return I(c)},a.Oa&&a.Oa(c)):(a.T=function(){return I({user:null})},a.Oa&&a.Oa({user:null}));a.Oa=null;a.Kb=null};
Yg.prototype.getRedirectResult=function(){var a=this;this.Cc||(this.Cc=new H(function(b,c){a.T?a.T().then(b,c):(a.Oa=b,a.Kb=c,ih(a))}));return this.Cc};var ih=function(a){var b=new Q("timeout");a.rc&&a.rc.cancel();a.rc=xe(3E4).then(function(){a.T||bh(a,!0,null,b)})},Zg=function(){};Zg.prototype.ed=function(a,b){if(!a)return sd(new Q("invalid-auth-event"));var c=a.pa,d=a.sa;return a.D?this.oc(a,b):b.Za(c,d)?this.pc(a,b):sd(new Q("invalid-auth-event"))};
Zg.prototype.oc=function(a,b){b.Ba(a.pa,null,a.getError(),a.sa);return I()};Zg.prototype.pc=function(a,b){var c=a.sa,d=a.pa,e=b.Za(d,c),f=a.Ua,g=a.fc();return e(f,g).then(function(a){b.Ba(d,a,null,c)}).I(function(a){b.Ba(d,null,a,c)})};var jh=function(a){this.c=a;this.Ea=this.ba=null;this.Ha=0};jh.prototype.N=function(){return{apiKey:this.c.u,refreshToken:this.ba,accessToken:this.Ea,expirationTime:this.Ha}};var lh=function(a,b){var c=b.idToken,d=b.refreshToken,e=kh(b.expiresIn);a.Ea=c;a.Ha=e;a.ba=d},kh=function(a){return la()+1E3*parseInt(a,10)},mh=function(a,b){return Tf(a.c,b).then(function(b){a.Ea=b.access_token;a.Ha=kh(b.expires_in);a.ba=b.refresh_token;return{accessToken:a.Ea,expirationTime:a.Ha,refreshToken:a.ba}})};
jh.prototype.getToken=function(a){return a||!this.Ea||la()>this.Ha-3E4?this.ba?mh(this,{grant_type:"refresh_token",refresh_token:this.ba}):I(null):I({accessToken:this.Ea,expirationTime:this.Ha,refreshToken:this.ba})};var nh=function(a,b,c,d,e){of(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},oh=function(a,b){Mb.call(this,a);for(var c in b)this[c]=b[c]};r(oh,Mb);
var W=function(a,b,c){this.M=[];this.u=a.apiKey;this.W=a.appName;this.ha=a.authDomain||null;a=firebase.SDK_VERSION?kf(firebase.SDK_VERSION):null;this.c=new T(this.u,null,a);this.oa=new jh(this.c);ph(this,b.idToken);lh(this.oa,b);P(this,"refreshToken",this.oa.ba);qh(this,c||{});J.call(this);this.Hb=!1;this.ha&&(this.o=hh(this.ha,this.u,this.W));this.Nb=[]};r(W,J);
var ph=function(a,b){a.Vc=b;P(a,"_lat",b)},rh=function(a,b){La(a.Nb,function(a){return a==b})},sh=function(a){for(var b=[],c=0;c<a.Nb.length;c++)b.push(a.Nb[c](a));return vd(b).then(function(){return a})},th=function(a){a.o&&!a.Hb&&(a.Hb=!0,a.o.subscribe(a))},qh=function(a,b){of(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};P(W.prototype,"providerId","firebase");
var uh=function(){},vh=function(a){return I().then(function(){if(a.Ed)throw new Q("app-deleted");})},wh=function(a){return Ea(a.providerData,function(a){return a.providerId})},yh=function(a,b){b&&(xh(a,b.providerId),a.providerData.push(b))},xh=function(a,b){La(a.providerData,function(a){return a.providerId==b})},zh=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&P(a,b,c)};
W.prototype.copy=function(a){var b=this;b!=a&&(of(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),w(a.providerData,function(a){yh(b,a)}),this.oa=a.oa,P(this,"refreshToken",this.oa.ba))};W.prototype.reload=function(){var a=this;return vh(this).then(function(){return Ah(a).then(function(){return sh(a)}).then(uh)})};
var Ah=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return Bh(a,b).then(function(){c||zh(a,"isAnonymous",!1);return b}).I(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new oh("userDeleted")),Ch(a));throw b;})})};W.prototype.getToken=function(a){var b=this;return vh(this).then(function(){return b.oa.getToken(a)}).then(function(a){if(!a)throw new Q("internal-error");a.accessToken!=b.Vc&&(ph(b,a.accessToken),b.ja());zh(b,"refreshToken",a.refreshToken);return a.accessToken})};
var Dh=function(a,b){b.idToken&&a.Vc!=b.idToken&&(lh(a.oa,b),a.ja(),ph(a,b.idToken))};W.prototype.ja=function(){this.dispatchEvent(new oh("tokenChanged"))};var Bh=function(a,b){return R(a.c,sg,{idToken:b}).then(q(a.je,a))};
W.prototype.je=function(a){a=a.users;if(!a||!a.length)throw new Q("internal-error");a=a[0];qh(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=Eh(a),c=0;c<b.length;c++)yh(this,b[c]);zh(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var Eh=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new nh(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.f(a.xb(this.c).then(function(a){var d;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var h=nc(ub(e));if(h.sub&&h.iss&&h.aud&&h.exp){d=new vf(h);break a}}catch(m){}}d=null}if(!d||b.uid!=d.be)throw new Q("user-mismatch");Dh(b,a);return b.reload()}))};
var Fh=function(a,b){return Ah(a).then(function(){if(Ia(wh(a),b))return sh(a).then(function(){throw new Q("provider-already-linked");})})};k=W.prototype;k.link=function(a){var b=this;return this.f(Fh(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.Xc(b.c,c)}).then(q(this.Kc,this)))};k.Kc=function(a){Dh(this,a);var b=this;return this.reload().then(function(){return b})};
k.updateEmail=function(a){var b=this;return this.f(this.getToken().then(function(c){return b.c.updateEmail(c,a)}).then(function(a){Dh(b,a);return b.reload()}))};k.updatePassword=function(a){var b=this;return this.f(this.getToken().then(function(c){return b.c.updatePassword(c,a)}).then(function(a){Dh(b,a);return b.reload()}))};
k.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return vh(this);var b=this;return this.f(this.getToken().then(function(c){return b.c.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Dh(b,a);zh(b,"displayName",a.displayName||null);zh(b,"photoURL",a.photoUrl||null);return sh(b)}).then(uh))};
k.unlink=function(a){var b=this;return this.f(Ah(this).then(function(c){return Ia(wh(b),a)?ig(b.c,c,[a]).then(function(a){var c={};w(a.providerUserInfo||[],function(a){c[a.providerId]=!0});w(wh(b),function(a){c[a]||xh(b,a)});return sh(b)}):sh(b).then(function(){throw new Q("no-such-provider");})}))};k["delete"]=function(){var a=this;return this.f(this.getToken().then(function(b){return R(a.c,rg,{idToken:b})}).then(function(){a.dispatchEvent(new oh("userDeleted"))})).then(function(){Ch(a)})};
k.Ec=function(a,b){return"linkViaPopup"==a&&(this.$||null)==b&&this.R||"linkViaRedirect"==a&&(this.Jb||null)==b?!0:!1};k.Ba=function(a,b,c,d){"linkViaPopup"==a&&d==(this.$||null)&&(c&&this.xa?this.xa(c):b&&!c&&this.R&&this.R(b),this.ya&&(this.ya.cancel(),this.ya=null),delete this.R,delete this.xa)};k.Za=function(a,b){return"linkViaPopup"==a&&b==(this.$||null)||"linkViaRedirect"==a&&(this.Jb||null)==b?q(this.Hd,this):null};k.vb=function(){return this.uid+":::"+Math.floor(1E9*Math.random()).toString()};
k.linkWithPopup=function(a){var b=this,c=sf(a.providerId),d=ff(c&&c.kb,c&&c.jb),e=this.vb(),c=Fh(this,a.providerId).then(function(){return sh(b)}).then(function(){b.Ja();return b.getToken()}).then(function(){return dh(b.o,d,"linkViaPopup",a,e)}).then(function(a){return new H(function(c,d){b.Ba("linkViaPopup",null,new Q("cancelled-popup-request"),b.$||null);b.R=c;b.xa=d;b.$=e;b.ya=fh(b,"linkViaPopup",a,e)})}).then(function(a){d&&(d||window).close();return a}).I(function(a){d&&(d||window).close();throw a;
});return this.f(c)};k.linkWithRedirect=function(a){var b=this,c=null,d=this.vb(),e=Fh(this,a.providerId).then(function(){b.Ja();return b.getToken()}).then(function(){b.Jb=d;return sh(b)}).then(function(a){b.za&&(a=b.u+":"+b.W,a=Gh(b.za,Hh,b.N(),a));return a}).then(function(){return eh(b.o,"linkViaRedirect",a,d)}).I(function(a){c=a;if(b.za)return Ih(b.za,Hh,b.u+":"+b.W);throw c;}).then(function(){if(c)throw c;});return this.f(e)};
k.Ja=function(){if(this.o&&this.Hb)return this.o;if(this.o&&!this.Hb)throw new Q("internal-error");throw new Q("auth-domain-config-required");};k.Hd=function(a,b){var c=this,d=null,e=this.getToken().then(function(d){return R(c.c,zf,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Kf(a);return c.Kc(a)}).then(function(a){return{user:a,credential:d}});return this.f(e)};
k.sendEmailVerification=function(){var a=this;return this.f(this.getToken().then(function(b){return a.c.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var Ch=function(a){for(var b=0;b<a.M.length;b++)a.M[b].cancel("app-deleted");a.M=[];a.Ed=!0;P(a,"refreshToken",null);a.o&&a.o.unsubscribe(a)};W.prototype.f=function(a){var b=this;this.M.push(a);yd(a,function(){Ka(b.M,a)});return a};
W.prototype.N=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.u,appName:this.W,authDomain:this.ha,stsTokenManager:this.oa.N(),redirectEventId:this.Jb||null};w(this.providerData,function(b){a.providerData.push(pf(b))});return a};
var Jh=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.refreshToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new W(b,c,a);a.providerData&&w(a.providerData,function(a){if(a){var b={};of(b,a);yh(d,b)}});a.redirectEventId&&
(d.Jb=a.redirectEventId);return d},Kh=function(a,b,c){var d=new W(a,b);c&&(d.za=c);return d.reload().then(function(){return d})};var Lh,Mh=function(a,b,c,d,e,f){this.Dd=a;this.kc=b;this.ac=c;this.qd=d;this.ea=e;this.Db={};this.mb=[];this.ib=0;this.Wd=f||l.indexedDB},Nh=function(a){return new H(function(b,c){var d=a.Wd.open(a.Dd,a.ea);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.kc,{keyPath:a.ac})}catch(d){c(d)}};d.onsuccess=function(a){b(a.target.result)}})},Oh=function(a){a.Sc||(a.Sc=Nh(a));return a.Sc},Ph=function(a,b){return b.objectStore(a.kc)},
Qh=function(a,b,c){return b.transaction([a.kc],c?"readwrite":"readonly")},Rh=function(a){return new H(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};
Mh.prototype.set=function(a,b){var c=!1,d,e=this;return yd(Oh(this).then(function(b){d=b;b=Ph(e,Qh(e,d,!0));return Rh(b.get(a))}).then(function(f){var g=Ph(e,Qh(e,d,!0));if(f)return f.value=b,Rh(g.put(f));e.ib++;c=!0;f={};f[e.ac]=a;f[e.qd]=b;return Rh(g.add(f))}).then(function(){e.Db[a]=b}),function(){c&&e.ib--})};Mh.prototype.get=function(a){var b=this;return Oh(this).then(function(c){return Rh(Ph(b,Qh(b,c,!1)).get(a))})};
Mh.prototype.remove=function(a){var b=!1,c=this;return yd(Oh(this).then(function(d){b=!0;c.ib++;return Rh(Ph(c,Qh(c,d,!0))["delete"](a))}).then(function(){delete c.Db[a]}),function(){b&&c.ib--})};
Mh.prototype.te=function(){var a=this;return Oh(this).then(function(b){var c=Ph(a,Qh(a,b,!1));return c.getAll?Rh(c.getAll()):new H(function(a,b){var f=[],g=c.openCursor();g.onsuccess=function(b){(b=b.target.result)?(f.push(b.value),b["continue"]()):a(f)};g.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.ib){for(d=0;d<b.length;d++)c[b[d][a.ac]]=b[d][a.qd];d=ef(a.Db,c);a.Db=c}return d})};
var Sh=function(a,b){La(a.mb,function(a){return a==b});0==a.mb.length&&a.Ob()};Mh.prototype.xc=function(){var a=this;this.Ob();var b=function(){a.nc=xe(1E3).then(q(a.te,a)).then(function(b){0<b.length&&w(a.mb,function(a){a(b)})}).then(b).I(function(a){"STOP_EVENT"!=a.message&&b()});return a.nc};b()};Mh.prototype.Ob=function(){this.nc&&this.nc.cancel("STOP_EVENT")};var Hh={name:"redirectUser",Z:!1},Th={name:"sessionId",Z:!1},Uh={name:"authEvent",Z:!0},Vh={name:"authUser",Z:!0},Wh=function(a,b,c,d,e){this.fe=a;this.jd=b;this.hb=d;this.me=e;if(!Kg(new Lg)||!Kg(new Mg))throw new Q("web-storage-unsupported");this.K={};this.bb=c;this.Yc=q(this.ce,this);this.Rc=q(this.Xd,this)},Xh,Yh=function(){if(!Xh){Lh||(Lh=new Mh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1));var a=navigator.userAgent.toLowerCase();Xh=new Wh("firebase",":",Lh,y&&!!qb&&
11==qb||/Edge\/\d+/.test(ab),-1!=a.indexOf("safari")&&-1==a.indexOf("chrome")&&window!=window.top?!0:!1)}return Xh},Zh=function(a,b){var c;b?(a.cd||(c=new Lg,c=Kg(c)?c:null,a.cd=new Gg(c)),c=a.cd):(a.md||(c=new Mg,c=Kg(c)?c:null,a.md=new Gg(c)),c=a.md);return c};Wh.prototype.s=function(a,b){return this.fe+this.jd+a.name+(b?this.jd+b:"")};
var $h=function(a,b,c){return a.hb&&b.Z?a.bb.get(a.s(b,c)).then(function(a){return a&&a.value}):I(Zh(a,b.Z).get(a.s(b,c)))},Ih=function(a,b,c){if(a.hb&&b.Z)return a.bb.remove(a.s(b,c));Zh(a,b.Z).remove(a.s(b,c));return I()},Gh=function(a,b,c,d){if(a.hb&&b.Z)return a.bb.set(a.s(b,d),c);Zh(a,b.Z).set(a.s(b,d),c);return I()};Wh.prototype.fc=function(a){return $h(this,Th,a)};Wh.prototype.zc=function(a,b){ai(this,this.s(Uh,a),b)};
var bi=function(a,b,c){return $h(a,Vh,b).then(function(a){a&&c&&(a.authDomain=c);return Jh(a||{})})},ci=function(a,b,c){return $h(a,Hh,b).then(function(a){a&&c&&(a.authDomain=c);return Jh(a||{})})},ai=function(a,b,c){Ua(a.K)&&a.xc();a.K[b]||(a.K[b]=[]);a.K[b].push(c)},di=function(a,b,c){a.K[b]&&(La(a.K[b],function(a){return a==c}),0==a.K[b].length&&delete a.K[b]);Ua(a.K)&&a.Ob()};k=Wh.prototype;
k.xc=function(){if(this.hb){var a=this.bb,b=this.Rc;0==a.mb.length&&a.xc();a.mb.push(b)}else Yb(window,"storage",this.Yc)};k.Ob=function(){this.hb?Sh(this.bb,this.Rc):hc(window,"storage",this.Yc)};k.ce=function(a){var b=a.ub.key;if(this.me){var c=window.localStorage.getItem(b);a=a.ub.newValue;a!=c&&(a?window.localStorage.setItem(b,a):a||window.localStorage.removeItem(b))}this.Dc(b)};k.Xd=function(a){w(a,q(this.Dc,this))};k.Dc=function(a){this.K[a]&&w(this.K[a],function(a){a()})};var Y=function(a){this.Ic=!1;P(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?kf(firebase.SDK_VERSION):null,this.c=new T(X(this).options&&X(this).options.apiKey,null,a);else throw new Q("invalid-api-key");this.M=[];this.Xa=[];this.ge=firebase.INTERNAL.createSubscribe(q(this.Yd,this));ei(this,null);this.Aa=this.da=null;try{this.da=Yh(),this.Aa=Yh(),this.B=fi(this)}catch(b){this.B=sd(b)}this.eb=!1;this.Nc=q(this.se,this);this.od=q(this.Ka,this);this.pd=q(this.Rd,this);
this.nd=q(this.Qd,this);gi(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this["delete"],this)};Y.prototype.Ja=function(){return this.Fd||sd(new Q("auth-domain-config-required"))};var gi=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&(a.Fd=a.B.then(function(){a.o=hh(b,c,X(a).name);a.o.subscribe(a);Z(a)&&th(Z(a));a.sc&&(th(a.sc),a.sc=null);return a.o}))};k=Y.prototype;
k.Ec=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.$==b&&!!this.R;default:return!1}};k.Ba=function(a,b,c,d){"signInViaPopup"==a&&this.$==d&&(c&&this.xa?this.xa(c):b&&!c&&this.R&&this.R(b),this.ya&&(this.ya.cancel(),this.ya=null),delete this.R,delete this.xa)};k.Za=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.$==b&&this.R?q(this.Id,this):null};
k.Id=function(a,b){var c=this,d=null,e=xf(c.c,{requestUri:a,sessionId:b}).then(function(a){d=Kf(a);return a}),f=c.B.then(function(){return e}).then(function(a){return hi(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.f(f)};k.vb=function(){return Math.floor(1E9*Math.random()).toString()};
k.signInWithPopup=function(a){var b=this,c=sf(a.providerId),d=ff(c&&c.kb,c&&c.jb),e=this.vb(),c=this.Ja().then(function(b){return dh(b,d,"signInViaPopup",a,e)}).then(function(a){return new H(function(c,d){b.Ba("signInViaPopup",null,new Q("cancelled-popup-request"),b.$);b.R=c;b.xa=d;b.$=e;b.ya=fh(b,"signInViaPopup",a,e)})}).then(function(a){d&&(d||window).close();return a}).I(function(a){d&&(d||window).close();throw a;});return this.f(c)};
k.signInWithRedirect=function(a){var b=this,c=this.Ja().then(function(){return eh(b.o,"signInViaRedirect",a)});return this.f(c)};k.getRedirectResult=function(){var a=this,b=this.Ja().then(function(){return a.o.getRedirectResult()});return this.f(b)};
var hi=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.B.then(function(){return Kh(c,b,a.Aa)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ka(b);ei(a,b);th(b);return a.Ka(b)}).then(function(){a.ja()})},ei=function(a,b){Z(a)&&(rh(Z(a),a.od),hc(Z(a),"tokenChanged",a.pd),hc(Z(a),"userDeleted",a.nd));b&&(b.Nb.push(a.od),Yb(b,"tokenChanged",a.pd),Yb(b,"userDeleted",a.nd));P(a,"currentUser",b)};
Y.prototype.signOut=function(){var a=this,b=this.B.then(function(){if(!Z(a))return I();ei(a,null);return Ih(a.da,Vh,ii(a)).then(function(){a.ja()})});return this.f(b)};
var ji=function(a){var b=ii(a),c=ci(a.Aa,b,X(a).options.authDomain).then(function(c){if(a.sc=c)c.za=a.Aa;return Ih(a.Aa,Hh,b)});return a.f(c)},fi=function(a){var b=ii(a),c=X(a).options.authDomain,d=yd(ji(a).then(function(){return bi(a.da,b,c)}).then(function(c){return c?(c.za=a.Aa,c.reload().then(function(){return c}).I(function(d){return"auth/network-request-failed"==d.code?c:Ih(a.da,Vh,b)})):null}).then(function(b){ei(a,b||null);a.eb=!0;a.ja()}),function(){if(!a.Ic){a.eb=!0;var c=a.da;ai(c,c.s(Vh,
b),a.Nc)}});return a.f(d)};Y.prototype.se=function(){var a=this;return bi(this.da,ii(this),X(this).options.authDomain).then(function(b){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();ei(a,b);b&&(th(b),b.za=a.Aa);a.o.subscribe(a);a.ja()})};Y.prototype.Ka=function(a){var b=ii(this);return Gh(this.da,Vh,a.N(),b)};Y.prototype.Rd=function(){this.eb=!0;this.ja();this.Ka(Z(this))};Y.prototype.Qd=function(){this.signOut()};
var ki=function(a,b){return a.f(b.then(function(b){return hi(a,b)}).then(function(){return Z(a)}))};k=Y.prototype;k.Yd=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};k.onAuthStateChanged=function(a,b,c){var d=this;this.eb&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.ge(a,b,c)};k.getToken=function(a){var b=this,c=this.B.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.f(c)};
k.signInWithCustomToken=function(a){var b=this;return this.B.then(function(){return ki(b,R(b.c,tg,{token:a}))}).then(function(a){zh(a,"isAnonymous",!1);return b.Ka(a)}).then(function(){return Z(b)})};k.signInWithEmailAndPassword=function(a,b){var c=this;return this.B.then(function(){return ki(c,R(c.c,Gf,{email:a,password:b}))})};k.createUserWithEmailAndPassword=function(a,b){var c=this;return this.B.then(function(){return ki(c,R(c.c,qg,{email:a,password:b}))})};
k.signInWithCredential=function(a){var b=this;return this.B.then(function(){return ki(b,a.xb(b.c))})};k.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?I(a):this.B.then(function(){return ki(b,b.c.signInAnonymously())}).then(function(a){zh(a,"isAnonymous",!0);return b.Ka(a)}).then(function(){return Z(b)})};var ii=function(a){return X(a).options.apiKey+":"+X(a).name},X=function(a){return a.app},Z=function(a){return a.currentUser};k=Y.prototype;
k.ja=function(){for(var a=0;a<this.Xa.length;a++)if(this.Xa[a])this.Xa[a](Z(this)&&Z(this)._lat||null)};k.addAuthTokenListener=function(a){this.Xa.push(a);var b=this;this.eb&&this.B.then(function(){a(Z(b)&&Z(b)._lat||null)})};k.removeAuthTokenListener=function(a){La(this.Xa,function(b){return b==a})};k["delete"]=function(){this.Ic=!0;for(var a=0;a<this.M.length;a++)this.M[a].cancel("app-deleted");this.M=[];this.da&&(a=this.da,di(a,a.s(Vh,ii(this)),this.Nc));this.o&&this.o.unsubscribe(this)};
k.f=function(a){var b=this;this.M.push(a);yd(a,function(){Ka(b.M,a)});return a};k.fetchProvidersForEmail=function(a){return this.f(Zf(this.c,a))};k.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};k.confirmPasswordReset=function(a,b){return this.f(this.c.confirmPasswordReset(a,b).then(function(){}))};k.checkActionCode=function(a){return this.f(this.c.checkActionCode(a).then(function(a){return{data:{email:a.email}}}))};k.applyActionCode=function(a){return this.f(this.c.applyActionCode(a).then(function(){}))};
k.sendPasswordResetEmail=function(a){return this.f(this.c.sendPasswordResetEmail(a).then(function(){}))};Vg(Y.prototype,{applyActionCode:{name:"applyActionCode",b:[U("code")]},checkActionCode:{name:"checkActionCode",b:[U("code")]},confirmPasswordReset:{name:"confirmPasswordReset",b:[U("code"),U("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",b:[U("email"),U("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",b:[U("email")]},getRedirectResult:{name:"getRedirectResult",b:[]},onAuthStateChanged:{name:"onAuthStateChanged",b:[Tg(Og(),Pg(),"nextOrObserver"),
Pg("opt_error",!0),Pg("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",b:[U("email")]},signInAnonymously:{name:"signInAnonymously",b:[]},signInWithCredential:{name:"signInWithCredential",b:[Rg()]},signInWithCustomToken:{name:"signInWithCustomToken",b:[U("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",b:[U("email"),U("password")]},signInWithPopup:{name:"signInWithPopup",b:[Sg()]},signInWithRedirect:{name:"signInWithRedirect",b:[Sg()]},signOut:{name:"signOut",
b:[]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",b:[U("code")]}});
Vg(W.prototype,{"delete":{name:"delete",b:[]},getToken:{name:"getToken",b:[{name:"opt_forceRefresh",U:"a boolean",optional:!0,V:function(a){return"boolean"==typeof a}}]},link:{name:"link",b:[Rg()]},linkWithPopup:{name:"linkWithPopup",b:[Sg()]},linkWithRedirect:{name:"linkWithRedirect",b:[Sg()]},reauthenticate:{name:"reauthenticate",b:[Rg()]},reload:{name:"reload",b:[]},sendEmailVerification:{name:"sendEmailVerification",b:[]},unlink:{name:"unlink",b:[U("provider")]},updateEmail:{name:"updateEmail",
b:[U("email")]},updatePassword:{name:"updatePassword",b:[U("password")]},updateProfile:{name:"updateProfile",b:[Og("profile")]}});Vg(H.prototype,{I:{name:"catch"},then:{name:"then"}});V(If,"credential",function(a,b){return new Ff(a,b)},[U("email"),U("password")]);Vg(Bf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Bf,"credential",Bf.credential,[Tg(U(),Og(),"token")]);Vg(Cf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Cf,"credential",Cf.credential,[Tg(U(),Og(),"token")]);
Vg(Df.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Df,"credential",Df.credential,[Tg(U(),Tg(Og(),Qg()),"idToken"),Tg(U(),Qg(),"accessToken",!0)]);V(Ef,"credential",Ef.credential,[Tg(U(),Og(),"token"),U("secret",!0)]);
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:Q};V(a,"EmailAuthProvider",If,[]);V(a,"FacebookAuthProvider",Bf,[]);V(a,"GithubAuthProvider",Cf,[]);V(a,"GoogleAuthProvider",Df,[]);V(a,"TwitterAuthProvider",Ef,[]);firebase.INTERNAL.registerService("auth",function(a,c){var d=new Y(a);c({INTERNAL:{getToken:q(d.getToken,d),addAuthTokenListener:q(d.addAuthTokenListener,d),removeAuthTokenListener:q(d.removeAuthTokenListener,d)}});return d},
a);firebase.INTERNAL.registerAppHook(function(a,c){"create"===a&&c.auth()});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
(function() {var g,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Wb=function(){return a.$e?a.$e:a.$e=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){return"function"==ca(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments)}
function ka(a,b){function c(){}c.prototype=b.prototype;a.Eg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Bg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function la(){this.Ya=-1};function ma(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.Hf=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset()}ka(ma,la);ma.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0};
function na(a,b,c){c||(c=0);var d=a.Hf;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var h=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+h&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+m&4294967295}
ma.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d<b;){if(0==f)for(;d<=c;)na(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){na(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){na(this,e);f=0;break}}this.ac=f;this.Pd+=b}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function oa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function pa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function qa(a){var b=0,c;for(c in a)b++;return b}function ra(a){for(var b in a)return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ua(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function va(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function wa(a,b){var c=va(a,b,void 0);return c&&a[c]}function xa(a){for(var b in a)return!1;return!0}function ya(a){var b={},c;for(c in a)b[c]=a[c];return b};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Fd=void 0}
function Ba(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),
c.push(":"),Ba(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16)}),'"')};var v;a:{var Fa=n.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){v=Ga;break a}}v=""};function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(Ha,Error);Ha.prototype.name="CustomError";var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=q(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},La=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ma=w.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=r(b,d));return w.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Na=w.every?function(a,b,
c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&w.splice.call(a,c,1)}function Ra(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a>b?1:a<b?-1:0};var Ua=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),Va=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Wa=-1!=v.indexOf("Gecko")&&-1==v.toLowerCase().indexOf("webkit")&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE")),Xa=-1!=v.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&n.opera)return a=n.opera.version,ga(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(v))?a[1]:"");return Va&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a){n.setTimeout(function(){throw a;},0)}var db;
function eb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Ke;c.Ke=null;a()}};return function(a){d.next={Ke:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);jb.push(new kb(a,b))}var gb;function hb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();gb=function(){a.then(lb)}}else gb=function(){var a=lb;!ga(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(db||(db=eb()),db(a)):n.setImmediate(a)}}var ib=!1,jb=[];[].push(function(){ib=!1;jb=[]});
function lb(){for(;jb.length;){var a=jb;jb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.Uf.call(c.scope)}catch(d){cb(d)}}}ib=!1}function kb(a,b){this.Uf=a;this.scope=b};function mb(a,b){this.L=nb;this.sf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==ob)pb(this,qb,b);else try{var c=this;a.call(b,function(a){pb(c,qb,a)},function(a){if(!(a instanceof rb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}pb(c,sb,a)})}catch(d){pb(this,sb,d)}}var nb=0,qb=2,sb=3;function ob(){}mb.prototype.then=function(a,b,c){return tb(this,ga(a)?a:null,ga(b)?b:null,c)};mb.prototype.then=mb.prototype.then;mb.prototype.$goog_Thenable=!0;g=mb.prototype;
g.xg=function(a,b){return tb(this,null,a,b)};g.cancel=function(a){this.L==nb&&fb(function(){var b=new rb(a);ub(this,b)},this)};function ub(a,b){if(a.L==nb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,h;h=c.Ca[f];f++)if(h=h.m)if(d++,h==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.L==nb&&1==d?ub(c,b):(d=c.Ca.splice(e,1)[0],vb(c,d,sb,b)))}a.Ha=null}else pb(a,sb,b)}function wb(a,b){a.Ca&&a.Ca.length||a.L!=qb&&a.L!=sb||xb(a);a.Ca||(a.Ca=[]);a.Ca.push(b)}
function tb(a,b,c,d){var e={m:null,ff:null,hf:null};e.m=new mb(function(a,h){e.ff=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){h(l)}}:a;e.hf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof rb?h(b):a(e)}catch(l){h(l)}}:h});e.m.Ha=a;wb(a,e);return e.m}g.Af=function(a){this.L=nb;pb(this,qb,a)};g.Bf=function(a){this.L=nb;pb(this,sb,a)};
function pb(a,b,c){if(a.L==nb){if(a==c)b=sb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.L=1;c.then(a.Af,a.Bf,a);return}if(ha(c))try{var f=c.then;if(ga(f)){yb(a,c,f);return}}catch(h){b=sb,c=h}}a.sf=c;a.L=b;a.Ha=null;xb(a);b!=sb||c instanceof rb||zb(a,c)}}function yb(a,b,c){function d(b){f||(f=!0,a.Bf(b))}function e(b){f||(f=!0,a.Af(b))}a.L=1;var f=!1;try{c.call(b,e,d)}catch(h){d(h)}}
function xb(a){a.be||(a.be=!0,fb(a.Sf,a))}g.Sf=function(){for(;this.Ca&&this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b<a.length;b++)vb(this,a[b],this.L,this.sf)}this.be=!1};function vb(a,b,c,d){if(c==qb)b.ff(d);else{if(b.m)for(;a&&a.jd;a=a.Ha)a.jd=!1;b.hf(d)}}function zb(a,b){a.jd=!0;fb(function(){a.jd&&Ab.call(null,b)})}var Ab=cb;function rb(a){Ha.call(this,a)}ka(rb,Ha);rb.prototype.name="cancel";function Bb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function x(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Cb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function Db(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||p(c))&&!ga(c))throw Error(Db(a,b,d)+"must be a valid function.");}function Eb(a,b,c){if(p(c)&&(!ha(c)||null===c))throw Error(Db(a,b,!0)+"must be a valid context object.");};function Fb(a){var b=[];Cb(a,function(a,d){da(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var Gb=n.Promise||mb;mb.prototype["catch"]=mb.prototype.xg;function Hb(){var a=this;this.reject=this.resolve=null;this.ra=new Gb(function(b,c){a.resolve=b;a.reject=c})}function Ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&&(Jb(a.ra),1===b.length?b(c):b(c,d))}}function Jb(a){a.then(void 0,aa)};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function Ob(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a)}function B(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join("")}return a};function Pb(a,b){this.committed=a;this.snapshot=b};function Qb(a){this.se=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null}function Rb(a,b,c){a.Yd=b;a.Gb=c;a.Yd<a.Rb&&(a.Gb(),a.Gb=null)}function Sb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Tb(function(){f.se(d[e])})}if(a.Rb===a.Yd){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Rb++}};function Ub(){this.qc={}}Ub.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b};Ub.prototype.get=function(a){return Bb(this.qc,a)?this.qc[a]:null};Ub.prototype.remove=function(a){delete this.qc[a]};Ub.prototype.af=!0;function Vb(a){this.vc=a;this.Cd="firebase:"}g=Vb.prototype;g.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b))};g.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Ob(a)};g.remove=function(a){this.vc.removeItem(this.Cd+a)};g.af=!1;g.toString=function(){return this.vc.toString()};function Wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Vb(b)}}catch(c){}return new Ub}var Xb=Wb("localStorage"),Yb=Wb("sessionStorage");function Zb(a,b,c){this.type=$b;this.source=a;this.path=b;this.Ja=c}Zb.prototype.Nc=function(a){return this.path.e()?new Zb(this.source,C,this.Ja.R(a)):new Zb(this.source,D(this.path),this.Ja)};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function ac(a,b){this.type=bc;this.source=a;this.path=b}ac.prototype.Nc=function(){return this.path.e()?new ac(this.source,C):new ac(this.source,D(this.path))};ac.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function cc(a){this.Ge=a}cc.prototype.getToken=function(a){return this.Ge.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function dc(a,b){a.Ge.INTERNAL.addAuthTokenListener(b)};function ec(){this.Jd=F}ec.prototype.j=function(a){return this.Jd.Q(a)};ec.prototype.toString=function(){return this.Jd.toString()};function fc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.oe=c;this.zg=d;this.lf=e||"";this.bb=Xb.get("host:"+a)||this.host}function gc(a,b){b!==a.bb&&(a.bb=b,"s-"===a.bb.substr(0,2)&&Xb.set("host:"+a.host,a.bb))}
function hc(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.bb+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.bb+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.bb&&(c.ns=a.oe);var d=[];t(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
fc.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.lf&&(a+="<"+this.lf+">");return a};function ic(a,b){this.xf={};this.Vc=new jc(a);this.va=b;var c=1E4+2E4*Math.random();setTimeout(r(this.pf,this),Math.floor(c))}ic.prototype.pf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&Bb(this.xf,d)&&(b[d]=a[d],c=!0);c&&this.va.xe(b);setTimeout(r(this.pf,this),Math.floor(6E5*Math.random()))};function kc(){this.uc={}}function lc(a,b,c){p(c)||(c=1);Bb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}kc.prototype.get=function(){return ya(this.uc)};function jc(a){this.Lf=a;this.rd=null}jc.prototype.get=function(){var a=this.Lf.get(),b=ya(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var mc={},nc={};function oc(a){a=a.toString();mc[a]||(mc[a]=new kc);return mc[a]}function pc(a,b){var c=a.toString();nc[c]||(nc[c]=b());return nc[c]};function qc(){this.wb=[]}function rc(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.wb.push(c),c=null);null===c&&(c=new sc(f));c.add(e)}c&&a.wb.push(c)}function tc(a,b,c){rc(a,c);uc(a,function(a){return a.ca(b)})}function vc(a,b,c){rc(a,c);uc(a,function(a){return a.contains(b)||b.contains(a)})}
function uc(a,b){for(var c=!0,d=0;d<a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f<e.hd.length;f++){var h=e.hd[f];if(null!==h){e.hd[f]=null;var k=h.Ub();wc&&E("event: "+h.toString());Tb(k)}}a.wb[d]=null}else c=!1}c&&(a.wb=[])}function sc(a){this.qa=a;this.hd=[]}sc.prototype.add=function(a){this.hd.push(a)};sc.prototype.Zb=function(){return this.qa};function xc(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a}xc.prototype.Zb=function(){var a=this.Md.xb();return"value"===this.gd?a.path:a.getParent().path};xc.prototype.ge=function(){return this.gd};xc.prototype.Ub=function(){return this.ae.Ub(this)};xc.prototype.toString=function(){return this.Zb().toString()+":"+this.gd+":"+B(this.Md.Se())};function yc(a,b,c){this.ae=a;this.error=b;this.path=c}yc.prototype.Zb=function(){return this.path};yc.prototype.ge=function(){return"cancel"};
yc.prototype.Ub=function(){return this.ae.Ub(this)};yc.prototype.toString=function(){return this.path.toString()+":cancel"};function zc(){}zc.prototype.Ve=function(){return null};zc.prototype.fe=function(){return null};var Ac=new zc;function Bc(a,b,c){this.Ef=a;this.Na=b;this.yd=c}Bc.prototype.Ve=function(a){var b=this.Na.O;if(Cc(b,a))return b.j().R(a);b=null!=this.yd?new Dc(this.yd,!0,!1):this.Na.u();return this.Ef.rc(a,b)};Bc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:Ec(this.Na);a=this.Ef.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.pe=d;this.Dd=void 0}function Fc(a){return new I(Gc,a)}var Gc="value";function Dc(a,b,c){this.A=a;this.ea=b;this.Tb=c}function Hc(a){return a.ea}function Ic(a){return a.Tb}function Jc(a,b){return b.e()?a.ea&&!a.Tb:Cc(a,J(b))}function Cc(a,b){return a.ea&&!a.Tb||a.A.Fa(b)}Dc.prototype.j=function(){return this.A};function Kc(a,b){return Lc(a.name,b.name)}function Mc(a,b){return Lc(a,b)};function K(a,b){this.name=a;this.S=b}function Nc(a,b){return new K(a,b)};function Oc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Pc(a,b){var c=new Qc;Rc(a,new L(""),function(a,e){Sc(c,a,Tc(e,b))});return c}function Tc(a,b){var c=a.C().H(),c=Oc(c,b),d;if(a.J()){var e=Oc(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Uc(e,M(c)):a}d=a;c!==a.C().H()&&(d=d.ga(new Uc(c)));a.P(N,function(a,c){var e=Tc(c,b);e!==c&&(d=d.U(a,e))});return d};var Vc=function(){var a=1;return function(){return a++}}(),H=Kb,Wc=Lb;
function Xc(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,
c+8192));b=a}}return b}catch(l){E("base64Decode failed: ",l)}return null}function Yc(a){var b=Mb(a);a=new ma;a.update(b);var b=[],c=8*a.Pd;56>a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56<=d;d--)a.Wd[d]=c&255,c/=256;na(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return ab(b)}
function Zc(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+Zc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var wc=null,$c=!0;
function ad(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?wc=r(console.log,console):"object"===typeof console.log&&(wc=function(a){console.log(a)})),b&&Yb.set("logging_enabled",!0)):ga(a)?wc=a:(wc=null,Yb.remove("logging_enabled"))}function E(a){!0===$c&&($c=!1,null===wc&&!0===Yb.get("logging_enabled")&&ad(!0));if(wc){var b=Zc.apply(null,arguments);wc(b)}}
function bd(a){return function(){E(a,arguments)}}function cd(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Zc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function dd(a){var b=Zc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Zc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function ed(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(q(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&dd(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||dd("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{kc:new fc(b,d,c,"ws"===e||"wss"===e),path:new L(f)}}function fd(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function gd(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Lc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=hd(a),d=hd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function id(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function jd(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=jd(a[b[d]]);return c+"}"}function kd(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function ld(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else t(a,b)}
function md(a){H(!fd(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var nd=/^-?\d{1,10}$/;function hd(a){return nd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Tb(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function od(a,b,c){Object.defineProperty(a,b,{get:c})};function pd(a){var b={};try{var c=a.split(".");Ob(Xc(c[0])||"");b=Ob(Xc(c[1])||"");delete b.d}catch(d){}a=b;return"object"===typeof a&&!0===x(a,"admin")};var qd=null;"undefined"!==typeof MozWebSocket?qd=MozWebSocket:"undefined"!==typeof WebSocket&&(qd=WebSocket);function rd(a,b,c,d){this.Zd=a;this.f=bd(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Ee=0;this.Xa=oc(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Le=hc(b,"websocket",a)}var td;
rd.prototype.open=function(a,b){this.kb=b;this.fg=a;this.f("Websocket connecting to "+this.Le);this.xc=!1;Xb.set("previous_websocket_failure",!0);try{this.La=new qd(this.Le)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.fb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.xc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.fb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=
a.length,lc(e.Xa,"bytes_received",a.length),ud(e),null!==e.frames)vd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Ee=b;e.frames=[];a=null;break a}}e.Ee=1;e.frames=[]}null!==a&&vd(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.fb()}};rd.prototype.start=function(){};
rd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==qd&&!td};rd.responsesRequiredToBeHealthy=2;rd.healthyTimeout=3E4;g=rd.prototype;g.sd=function(){Xb.remove("previous_websocket_failure")};function vd(a,b){a.frames.push(b);if(a.frames.length==a.Ee){var c=a.frames.join("");a.frames=null;c=Ob(c);a.fg(c)}}
g.send=function(a){ud(this);a=B(a);this.rb+=a.length;lc(this.Xa,"bytes_sent",a.length);a=kd(a,16384);1<a.length&&wd(this,String(a.length));for(var b=0;b<a.length;b++)wd(this,a[b])};g.Tc=function(){this.Bb=!0;this.Ac&&(clearInterval(this.Ac),this.Ac=null);this.La&&(this.La.close(),this.La=null)};g.fb=function(){this.Bb||(this.f("WebSocket is closing itself"),this.Tc(),this.kb&&(this.kb(this.xc),this.kb=null))};g.close=function(){this.Bb||(this.f("WebSocket is being closed"),this.Tc())};
function ud(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&&wd(a,"0");ud(a)},Math.floor(45E3))}function wd(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(r(a.fb,a),0)}};function xd(a,b,c){this.f=bd("p:rest:");this.M=a;this.Hb=b;this.Vd=c;this.$={}}function yd(a,b){if(p(b))return"tag$"+b;H(zd(a.n),"should have a tag if it's not a default query.");return a.path.toString()}g=xd.prototype;
g.bf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ya());var f=yd(a,c),h={};this.$[f]=h;a=Ad(a.n);var k=this;Bd(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Hb(e,u,!1,c);x(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.Cf=function(a,b){var c=yd(a,b);delete this.$[c]};g.of=function(){};g.qe=function(){};g.ef=function(){};g.xd=function(){};g.put=function(){};g.cf=function(){};g.xe=function(){};
function Bd(a,b,c,d){c=c||{};c.format="export";a.Vd.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.M.Sc?"https://":"http://")+a.M.host+b+"?"+Fb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=Ob(h.responseText)}catch(c){O("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&O("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Cd(a,b,c){this.type=Dd;this.source=a;this.path=b;this.children=c}Cd.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new Zb(this.source,C,a.value):new Cd(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Cd(this.source,D(this.path),this.children)};Cd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Ed(){this.hb={}}
function Fd(a,b){var c=b.type,d=b.Za;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=x(a.hb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.Ma);else if("child_removed"==c&&"child_added"==f)delete a.hb[d];else if("child_removed"==c&&"child_changed"==f)a.hb[d]=new I("child_removed",e.pe,d);else if("child_changed"==c&&
"child_added"==f)a.hb[d]=new I("child_added",b.Ma,d);else if("child_changed"==c&&"child_changed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.pe);else throw Wc("Illegal combination of changes: "+b+" occurred after "+e);}else a.hb[d]=b};function Gd(a){this.W=a;this.g=a.n.g}function Hd(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.nd(b.pe,b.Ma)&&f.push(new I("child_moved",b.Ma,b.Za))});Id(a,e,"child_removed",b,d,c);Id(a,e,"child_added",b,d,c);Id(a,e,"child_moved",f,d,c);Id(a,e,"child_changed",b,d,c);Id(a,e,Gc,b,d,c);return e}function Id(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,r(a.Mf,a));Ja(d,function(c){var d=Jd(a,c,f);Ja(e,function(e){e.rf(c.type)&&b.push(e.createEvent(d,a.W))})})}
function Jd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Xe(b.Za,b.Ma,a.g));return b}Gd.prototype.Mf=function(a,b){if(null==a.Za||null==b.Za)throw Wc("Should only compare child_ events.");return this.g.compare(new K(a.Za,a.Ma),new K(b.Za,b.Ma))};function Kd(a,b){this.Sd=a;this.Kf=b}function Ld(a){this.V=a}
Ld.prototype.gb=function(a,b,c,d){var e=new Ed,f;if(b.type===$b)b.source.ee?c=Md(this,a,b.path,b.Ja,c,d,e):(H(b.source.Ue,"Unknown source."),f=b.source.De||Ic(a.u())&&!b.path.e(),c=Nd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===Dd)b.source.ee?c=Od(this,a,b.path,b.children,c,d,e):(H(b.source.Ue,"Unknown source."),f=b.source.De||Ic(a.u()),c=Pd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Qd)if(b.Id)if(b=b.path,null!=c.mc(b))c=a;else{f=new Bc(c,a,d);d=a.O.j();if(b.e()||".priority"===J(b))Hc(a.u())?
b=c.Ba(Ec(a)):(b=a.u().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.sc(b)),b=this.V.za(d,b,e);else{var h=J(b),k=c.rc(h,a.u());null==k&&Cc(a.u(),h)&&(k=d.R(h));b=null!=k?this.V.F(d,h,k,D(b),f,e):a.O.j().Fa(h)?this.V.F(d,h,F,D(b),f,e):d;b.e()&&Hc(a.u())&&(d=c.Ba(Ec(a)),d.J()&&(b=this.V.za(b,d,e)))}d=Hc(a.u())||null!=c.mc(C);c=Rd(a,b,d,this.V.Qa())}else c=Sd(this,a,b.path,b.Pb,c,d,e);else if(b.type===bc)d=b.path,b=a.u(),f=b.j(),h=b.ea||d.e(),c=Td(this,new Ud(a.O,new Dc(f,
h,b.Tb)),d,c,Ac,e);else throw Wc("Unknown operation type: "+b.type);e=sa(e.hb);d=c;b=d.O;b.ea&&(f=b.j().J()||b.j().e(),h=Vd(a),(0<e.length||!a.O.ea||f&&!b.j().ca(h)||!b.j().C().ca(h.C()))&&e.push(Fc(Vd(d))));return new Kd(c,e)};
function Td(a,b,c,d,e,f){var h=b.O;if(null!=d.mc(c))return b;var k;if(c.e())H(Hc(b.u()),"If change path is empty, we must have complete server data"),Ic(b.u())?(e=Ec(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(Ec(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(".priority"==m)H(1==Wd(c),"Can't have a priority with additional path components"),f=h.j(),k=b.u().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):h.j();else{var l=D(c);Cc(h,m)?(k=b.u().j(),d=d.$c(c,h.j(),k),d=null!=d?h.j().R(m).F(l,d):h.j().R(m)):d=d.rc(m,
b.u());f=null!=d?a.V.F(h.j(),m,d,l,e,f):h.j()}}return Rd(b,f,h.ea||c.e(),a.V.Qa())}function Nd(a,b,c,d,e,f,h,k){var m=b.u();h=h?a.V:a.V.Vb();if(c.e())d=h.za(m.j(),d,null);else if(h.Qa()&&!m.Tb)d=m.j().F(c,d),d=h.za(m.j(),d,null);else{var l=J(c);if(!Jc(m,c)&&1<Wd(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=".priority"==l?h.ga(m.j(),d):h.F(m.j(),l,d,u,Ac,null)}m=m.ea||c.e();b=new Ud(b.O,new Dc(d,m,h.Qa()));return Td(a,b,c,e,new Bc(e,b,f),k)}
function Md(a,b,c,d,e,f,h){var k=b.O;e=new Bc(e,b,f);if(c.e())h=a.V.za(b.O.j(),d,h),a=Rd(b,h,!0,a.V.Qa());else if(f=J(c),".priority"===f)h=a.V.ga(b.O.j(),d),a=Rd(b,h,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.Ve(f);d=null!=l?".priority"===Xd(c)&&l.Q(c.parent()).e()?l:l.F(c,d):F}m.ca(d)?a=b:(h=a.V.F(k.j(),f,d,c,e,h),a=Rd(b,h,k.ea,a.V.Qa()))}return a}
function Od(a,b,c,d,e,f,h){var k=b;Yd(d,function(d,l){var u=c.m(d);Cc(b.O,J(u))&&(k=Md(a,k,u,l,e,f,h))});Yd(d,function(d,l){var u=c.m(d);Cc(b.O,J(u))||(k=Md(a,k,u,l,e,f,h))});return k}function Zd(a,b){Yd(b,function(b,d){a=a.F(b,d)});return a}
function Pd(a,b,c,d,e,f,h,k){if(b.u().j().e()&&!Hc(b.u()))return b;var m=b;c=c.e()?d:$d(Q,c,d);var l=b.u().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.u().j().R(c),G=Zd(G,d);m=Nd(a,m,new L(c),G,e,f,h,k)}});c.children.ia(function(c,d){var G=!Cc(b.u(),c)&&null==d.value;l.Fa(c)||G||(G=b.u().j().R(c),G=Zd(G,d),m=Nd(a,m,new L(c),G,e,f,h,k))});return m}
function Sd(a,b,c,d,e,f,h){if(null!=e.mc(c))return b;var k=Ic(b.u()),m=b.u();if(null!=d.value){if(c.e()&&m.ea||Jc(m,c))return Nd(a,b,c,m.j().Q(c),e,f,k,h);if(c.e()){var l=Q;m.j().P(ae,function(a,b){l=l.set(new L(a),b)});return Pd(a,b,c,l,e,f,k,h)}return b}l=Q;Yd(d,function(a){var b=c.m(a);Jc(m,b)&&(l=l.set(a,m.j().Q(b)))});return Pd(a,b,c,l,e,f,k,h)};function be(a){this.g=a}g=be.prototype;g.F=function(a,b,c,d,e,f){H(a.zc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).ca(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Fd(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Fd(f,new I("child_added",c,b)):Fd(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.U(b,c).ob(this.g)};
g.za=function(a,b,c){null!=c&&(a.J()||a.P(N,function(a,e){b.Fa(a)||Fd(c,new I("child_removed",e,a))}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.ca(e)||Fd(c,new I("child_changed",e,b,f))}else Fd(c,new I("child_added",e,b))}));return b.ob(this.g)};g.ga=function(a,b){return a.e()?F:a.ga(b)};g.Qa=function(){return!1};g.Vb=function(){return this};function ce(a){this.he=new be(a.g);this.g=a.g;var b;a.ka?(b=de(a),b=a.g.Fc(ee(a),b)):b=a.g.Ic();this.Uc=b;a.na?(b=fe(a),a=a.g.Fc(ge(a),b)):a=a.g.Gc();this.wc=a}g=ce.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.wc)};g.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=F);return this.he.F(a,b,c,d,e,f)};
g.za=function(a,b,c){b.J()&&(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new K(a,b))||(d=d.U(a,F))});return this.he.za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.he};function he(a){this.sa=new ce(a);this.g=a.g;H(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Jb=!ie(a)}g=he.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new K(b,c))||(c=F);return a.R(b).ca(c)?a:a.Fb()<this.oa?this.sa.Vb().F(a,b,c,d,e,f):je(this,a,b,c,e,f)};
g.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.oa<b.Fb()&&b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.sa.wc,this.g):b.Yb(this.sa.Uc,this.g);for(var e=0;0<b.Sa.length&&e<this.oa;){var f=R(b),h;if(h=this.Jb?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.wc))d=d.U(f.name,f.S),e++;else break}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.Ye(this.g);k=this.sa.wc;m=this.sa.Uc;var u=ke(this.g);l=function(a,b){return u(b,a)}}else b=d.Xb(this.g),k=this.sa.Uc,
m=this.sa.wc,l=ke(this.g);for(var e=0,z=!1;0<b.Sa.length;)f=R(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=l(f,m))?e++:d=d.U(f.name,F)}return this.sa.Vb().za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.sa.Vb()};
function je(a,b,c,d,e,f){var h;if(a.Jb){var k=ke(a.g);h=function(a,b){return k(b,a)}}else h=ke(a.g);H(b.Fb()==a.oa,"");var m=new K(c,d),l=a.Jb?le(b,a.g):me(b,a.g),u=a.sa.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&Fd(f,new I("child_changed",d,c,z)),b.U(c,d);null!=f&&Fd(f,new I("child_removed",z,c));b=b.U(c,F);return null!=l&&a.sa.matches(l)?(null!=f&&Fd(f,new I("child_added",
l.S,l.name)),b.U(l.name,l.S)):b}return d.e()?b:u&&0<=h(l,m)?(null!=f&&(Fd(f,new I("child_removed",l.S,l.name)),Fd(f,new I("child_added",d,c))),b.U(c,d).U(l.name,F)):b};function Uc(a,b){this.B=a;H(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||F;ne(this.aa);this.Eb=null}var oe=["object","boolean","number","string"];g=Uc.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.ga=function(a){return new Uc(this.B,a)};g.R=function(a){return".priority"===a?this.aa:F};g.Q=function(a){return a.e()?this:".priority"===J(a)?this.aa:F};g.Fa=function(){return!1};g.Xe=function(){return null};
g.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:F.U(a,b).ga(this.aa)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===Wd(a),".priority must be the last token in a path");return this.U(c,F.F(D(a),b))};g.e=function(){return!1};g.Fb=function(){return 0};g.P=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().H()}:this.Ea()};
g.hash=function(){if(null===this.Eb){var a="";this.aa.e()||(a+="priority:"+pe(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+md(this.B):a+this.B;this.Eb=Yc(a)}return this.Eb};g.Ea=function(){return this.B};g.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(oe,b),e=Ia(oe,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.ob=function(){return this};g.zc=function(){return!0};g.ca=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.ca(a.aa):!1};g.toString=function(){return B(this.H(!0))};function qe(){}var re={};function ke(a){return r(a.compare,a)}qe.prototype.nd=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b))};qe.prototype.Ic=function(){return se};function te(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ka(te,qe);g=te.prototype;g.yc=function(a){return!a.Q(this.cc).e()};g.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?Lc(a.name,b.name):c};
g.Fc=function(a,b){var c=M(a),c=F.F(this.cc,c);return new K(b,c)};g.Gc=function(){var a=F.F(this.cc,ue);return new K("[MAX_NAME]",a)};g.toString=function(){return this.cc.slice().join("/")};function ve(){}ka(ve,qe);g=ve.prototype;g.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?Lc(a.name,b.name):c};g.yc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().ca(b.C())};g.Ic=function(){return se};g.Gc=function(){return new K("[MAX_NAME]",new Uc("[PRIORITY-POST]",ue))};
g.Fc=function(a,b){var c=M(a);return new K(b,new Uc("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new ve;function we(){}ka(we,qe);g=we.prototype;g.compare=function(a,b){return Lc(a.name,b.name)};g.yc=function(){throw Wc("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Ic=function(){return se};g.Gc=function(){return new K("[MAX_NAME]",F)};g.Fc=function(a){H(q(a),"KeyIndex indexValue must always be a string.");return new K(a,F)};g.toString=function(){return".key"};
var ae=new we;function xe(){}ka(xe,qe);g=xe.prototype;g.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?Lc(a.name,b.name):c};g.yc=function(){return!0};g.nd=function(a,b){return!a.ca(b)};g.Ic=function(){return se};g.Gc=function(){return ye};g.Fc=function(a,b){var c=M(a);return new K(b,c)};g.toString=function(){return".value"};var ze=new xe;function Ae(){this.Sb=this.na=this.Lb=this.ka=this.xa=!1;this.oa=0;this.oc="";this.ec=null;this.Ab="";this.bc=null;this.yb="";this.g=N}var Be=new Ae;function ie(a){return""===a.oc?a.ka:"l"===a.oc}function ee(a){H(a.ka,"Only valid if start has been set");return a.ec}function de(a){H(a.ka,"Only valid if start has been set");return a.Lb?a.Ab:"[MIN_NAME]"}function ge(a){H(a.na,"Only valid if end has been set");return a.bc}
function fe(a){H(a.na,"Only valid if end has been set");return a.Sb?a.yb:"[MAX_NAME]"}function Ce(a){var b=new Ae;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.na=a.na;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b}g=Ae.prototype;g.me=function(a){var b=Ce(this);b.xa=!0;b.oa=a;b.oc="l";return b};g.ne=function(a){var b=Ce(this);b.xa=!0;b.oa=a;b.oc="r";return b};g.Nd=function(a,b){var c=Ce(this);c.ka=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab="");return c};
g.fd=function(a,b){var c=Ce(this);c.na=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Dg=!1,c.yb="");return c};function De(a,b){var c=Ce(a);c.g=b;return c}function Ee(a){var b={};a.ka&&(b.sp=a.ec,a.Lb&&(b.sn=a.Ab));a.na&&(b.ep=a.bc,a.Sb&&(b.en=a.yb));if(a.xa){b.l=a.oa;var c=a.oc;""===c&&(c=ie(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function S(a){return!(a.ka||a.na||a.xa)}function zd(a){return S(a)&&a.g==N}
function Ad(a){var b={};if(zd(a))return b;var c;a.g===N?c="$priority":a.g===ze?c="$value":a.g===ae?c="$key":(H(a.g instanceof te,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.Ab)));a.na&&(b.endAt=B(a.bc),a.Sb&&(b.endAt+=","+B(a.yb)));a.xa&&(ie(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return B(Ee(this))};function Fe(a,b){this.od=a;this.dc=b}Fe.prototype.get=function(a){var b=x(this.od,a);if(!b)throw Error("No index defined for "+a);return b===re?null:b};function Ge(a,b,c){var d=oa(a.od,function(d,f){var h=x(a.dc,f);H(h,"Missing index implementation for "+f);if(d===re){if(h.yc(b.S)){for(var k=[],m=c.Xb(Nc),l=R(m);l;)l.name!=b.name&&k.push(l),l=R(m);k.push(b);return He(k,ke(h))}return re}h=c.get(b.name);k=d;h&&(k=k.remove(new K(b.name,h)));return k.Ra(b,b.S)});return new Fe(d,a.dc)}
function Ie(a,b,c){var d=oa(a.od,function(a){if(a===re)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new Fe(d,a.dc)}var Je=new Fe({".priority":re},{".priority":N});function Ke(){this.set={}}g=Ke.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return Bb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return xa(this.set)};g.count=function(){return qa(this.set)};function Le(a,b){t(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];t(this.set,function(b,c){a.push(c)});return a};function Me(a,b,c,d){this.Zd=a;this.f=bd(a);this.kc=b;this.qb=this.rb=0;this.Xa=oc(b);this.zf=c;this.xc=!1;this.Db=d;this.Yc=function(a){return hc(b,"long_polling",a)}}var Ne,Oe;
Me.prototype.open=function(a,b){this.Oe=0;this.ja=b;this.df=new Qb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f("Timed out trying to connect.");c.fb();c.tb=null},Math.floor(3E4));gd(function(){if(!c.Bb){c.Wa=new Pe(function(a,b,d,k,m){Qe(c,arguments);if(c.Wa)if(c.tb&&(clearTimeout(c.tb),c.tb=null),c.xc=!0,"start"==a)c.id=b,c.kf=d;else if("close"===a)b?(c.Wa.Kd=!1,Rb(c.df,b,function(){c.fb()})):c.fb();else throw Error("Unrecognized command received: "+a);},function(a,b){Qe(c,arguments);
Sb(c.df,a,b)},function(){c.fb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&&(a.cb=c.Wa.Qd);a.v="5";c.zf&&(a.s=c.zf);c.Db&&(a.ls=c.Db);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);Re(c.Wa,a,function(){})}})};
Me.prototype.start=function(){var a=this.Wa,b=this.kf;a.dg=this.id;a.eg=b;for(a.Ud=!0;Se(a););a=this.id;b=this.kf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
Me.isAvailable=function(){return Ne||!Oe&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Ag)&&!0};g=Me.prototype;g.sd=function(){};g.Tc=function(){this.Bb=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.tb&&(clearTimeout(this.tb),this.tb=null)};
g.fb=function(){this.Bb||(this.f("Longpoll is closing itself"),this.Tc(),this.ja&&(this.ja(this.xc),this.ja=null))};g.close=function(){this.Bb||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=B(a);this.rb+=a.length;lc(this.Xa,"bytes_sent",a.length);a=Mb(a);a=ab(a,!0);a=kd(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.Qc.push({sg:this.Oe,yg:a.length,Qe:a[b]});c.Ud&&Se(c);this.Oe++}};function Qe(a,b){var c=B(b).length;a.qb+=c;lc(a.Xa,"bytes_received",c)}
function Pe(a,b,c,d){this.Yc=d;this.kb=c;this.ue=new Ke;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Vc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&&(a.ib=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close()}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f)}}
Pe.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.kb;b&&(this.kb=null,b())};
function Se(a){if(a.Ud&&a.Kd&&a.ue.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.dg;b.pw=a.eg;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Qe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.sg+"&ts"+d+"="+e.yg+"&d"+d+"="+e.Qe;d++}else break;Te(a,b+c,a.$d);return!0}return!1}function Te(a,b,c){function d(){a.ue.remove(c);Se(a)}a.ue.add(c,1);var e=setTimeout(d,Math.floor(25E3));Re(a,b,function(){clearTimeout(e);d()})}
function Re(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ga.ib.body.appendChild(d)}}catch(e){}},Math.floor(1))};function Ue(a){Ve(this,a)}var We=[Me,rd];function Ve(a,b){var c=rd&&rd.isAvailable(),d=c&&!(Xb.af||!0===Xb.get("previous_websocket_failure"));b.zg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[rd];else{var e=a.Wc=[];ld(We,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Xe(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function Ye(a,b,c,d,e,f,h){this.id=a;this.f=bd("c:"+this.id+":");this.se=c;this.Mc=d;this.ja=e;this.re=f;this.M=b;this.Ad=[];this.Me=0;this.yf=new Ue(b);this.L=0;this.Db=h;this.f("Connection created");Ze(this)}
function Ze(a){var b=Xe(a.yf);a.I=new b("c:"+a.id+":"+a.Me++,a.M,void 0,a.Db);a.we=b.responsesRequiredToBeHealthy||0;var c=$e(a,a.I),d=af(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=setTimeout(function(){a.md=null;a.Cb||(a.I&&102400<a.I.qb?(a.f("Connection exceeded healthy timeout but has received "+a.I.qb+" bytes.  Marking connection healthy."),a.Cb=!0,a.I.sd()):a.I&&10240<a.I.rb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.rb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function af(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.M.bb.substr(0,2)&&(Xb.remove("host:"+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function $e(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=id("t",c);c=id("d",c);if("c"==d){if(d=id("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.wf=c.s;gc(a.M,f);0==a.L&&(a.I.start(),bf(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.yf,(c=1<c.Wc.length?c.Wc[1]:null)&&cf(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];df(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.re&&(a.re(c),a.re=null),a.ja=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),gc(a.M,c),1===a.L?a.close():(ef(a),Ze(a))):"e"===d?cd("Server Error: "+c):"o"===d?(a.f("got pong on primary."),ff(a),gf(a)):cd("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=id("t",c),c=id("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?hf(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.uf--,hf(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}Ye.prototype.ua=function(a){jf(this,{t:"d",d:a})};function df(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
function hf(a){0>=a.uf?(a.f("Secondary connection is healthy."),a.Cb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,df(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}Ye.prototype.wd=function(a){ff(this);this.se(a)};function ff(a){a.Cb||(a.we--,0>=a.we&&(a.f("Primary connection is healthy."),a.Cb=!0,a.I.sd()))}
function cf(a,b){a.D=new b("c:"+a.id+":"+a.Me++,a.M,a.wf);a.uf=b.responsesRequiredToBeHealthy||0;a.D.open($e(a,a.D),af(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function bf(a,b,c){a.f("Realtime connection established.");a.I=b;a.L=1;a.Mc&&(a.Mc(c,a.wf),a.Mc=null);0===a.we?(a.f("Primary connection is healthy."),a.Cb=!0):setTimeout(function(){gf(a)},Math.floor(5E3))}
function gf(a){a.Cb||1!==a.L||(a.f("sending ping on primary."),jf(a,{t:"c",d:{t:"p",d:{}}}))}function jf(a,b){if(1!==a.L)throw"Connection is not connected";a.Xc.send(b)}Ye.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,ef(this),this.ja&&(this.ja(),this.ja=null))};function ef(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function kf(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=Lc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Z>=a.o.length?null:a.o[a.Z]}function Wd(a){return a.o.length-a.Z}function D(a){var b=a.Z;b<a.o.length&&b++;return new L(a.o,b)}function Xd(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}g=L.prototype;
g.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Z+(a||0))};g.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
g.m=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Z>=this.o.length};g.ca=function(a){if(Wd(this)!==Wd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Z,c=a.Z;if(Wd(this)>Wd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L("");function lf(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Re=b;for(var c=0;c<this.Ta.length;c++)this.Ka+=Nb(this.Ta[c]);mf(this)}lf.prototype.push=function(a){0<this.Ta.length&&(this.Ka+=1);this.Ta.push(a);this.Ka+=Nb(a);mf(this)};lf.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Nb(a);0<this.Ta.length&&--this.Ka};
function mf(a){if(768<a.Ka)throw Error(a.Re+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ta.length)throw Error(a.Re+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+nf(a));}function nf(a){return 0==a.Ta.length?"":"in property '"+a.Ta.join(".")+"'"};function of(a){a instanceof pf||dd("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,C);this.INTERNAL=new qf(this)}var rf={TIMESTAMP:{".sv":"timestamp"}};g=of.prototype;g.app=null;g.nf=function(a){sf(this,"ref");y("database.ref",0,1,arguments.length);return p(a)?this.ba.m(a):this.ba};
g.pg=function(a){sf(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=ed(a);tf("database.refFromURL",b);var c=b.kc;c.host!==this.ta.M.host&&dd("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.M.host+")");return this.nf(b.path.toString())};function sf(a,b){null===a.ta&&dd("Cannot call "+b+" on a deleted database.")}g.Yf=function(){y("database.goOffline",0,0,arguments.length);sf(this,"goOffline");this.ta.eb()};
g.Zf=function(){y("database.goOnline",0,0,arguments.length);sf(this,"goOnline");this.ta.lc()};Object.defineProperty(of.prototype,"app",{get:function(){return this.ta.app}});function qf(a){this.$a=a}qf.prototype.delete=function(){sf(this.$a,"delete");var a=uf.Wb(),b=this.$a.ta;x(a.nb,b.app.name)!==b&&dd("Database "+b.app.name+" has already been deleted.");b.eb();delete a.nb[b.app.name];this.$a.ta=null;this.$a.ba=null;this.$a=this.$a.INTERNAL=null;return Promise.resolve()};of.prototype.ref=of.prototype.nf;
of.prototype.refFromURL=of.prototype.pg;of.prototype.goOnline=of.prototype.Zf;of.prototype.goOffline=of.prototype.Yf;qf.prototype["delete"]=qf.prototype.delete;function Qc(){this.k=this.B=null}Qc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Sc(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Ke);var d=J(b);a.k.contains(d)||a.k.add(d,new Qc);a=a.k.get(d);b=D(b);Sc(a,b,c)}}
function vf(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Sc(a,new L(b),c)});return vf(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&vf(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Rc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+"/"+a);Rc(e,f,c)})}Qc.prototype.P=function(a){null!==this.k&&Le(this.k,function(b,c){a(b,c)})};var wf=/[\[\].#$\/\u0000-\u001F\u007F]/,xf=/[\[\].#$\u0000-\u001F\u007F]/;function yf(a){return q(a)&&0!==a.length&&!wf.test(a)}function zf(a){return null===a||q(a)||fa(a)&&!fd(a)||ha(a)&&Bb(a,".sv")}function Af(a,b,c,d){d&&!p(b)||Bf(Db(a,1,d),b,c)}
function Bf(a,b,c){c instanceof L&&(c=new lf(c,a));if(!p(b))throw Error(a+"contains undefined "+nf(c));if(ga(b))throw Error(a+"contains a function "+nf(c)+" with contents: "+b.toString());if(fd(b))throw Error(a+"contains "+b.toString()+" "+nf(c));if(q(b)&&b.length>10485760/3&&10485760<Nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+nf(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;Cb(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!yf(b)))throw Error(a+" contains an invalid key ("+b+") "+nf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Bf(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+nf(c)+" in addition to actual children.");}}
function Cf(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!yf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(kf);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function Df(a,b,c){var d=Db(a,1,!1);if(!ha(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Cb(b,function(a,b){var k=new L(a);Bf(d,b,c.m(k));if(".priority"===Xd(k)&&!zf(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Cf(d,e)}
function Ef(a,b,c){if(fd(c))throw Error(Db(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!zf(c))throw Error(Db(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Ff(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(Db(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Gf(a,b){if(p(b)&&!yf(b))throw Error(Db(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Hf(a,b){if(!q(b)||0===b.length||xf.test(b))throw Error(Db(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function If(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
function tf(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!yf(b.kc.oe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(q(c)&&0!==c.length&&!xf.test(c)));if(d)throw Error(Db(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ta=a;this.qa=b}V.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new Hb;this.ta.xd(this.qa,Ib(b,a));return b.ra};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);If("Firebase.onDisconnect().remove",this.qa);A("Firebase.onDisconnect().remove",1,a,!0);var b=new Hb;Jf(this.ta,this.qa,null,Ib(b,a));return b.ra};
V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);If("Firebase.onDisconnect().set",this.qa);Af("Firebase.onDisconnect().set",a,this.qa,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new Hb;Jf(this.ta,this.qa,a,Ib(c,b));return c.ra};V.prototype.set=V.prototype.set;
V.prototype.Kb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);If("Firebase.onDisconnect().setWithPriority",this.qa);Af("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Ef("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new Hb;Kf(this.ta,this.qa,a,b,Ib(d,c));return d.ra};V.prototype.setWithPriority=V.prototype.Kb;
V.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);If("Firebase.onDisconnect().update",this.qa);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Df("Firebase.onDisconnect().update",a,this.qa);A("Firebase.onDisconnect().update",2,b,!0);
c=new Hb;Lf(this.ta,this.qa,a,Ib(c,b));return c.ra};V.prototype.update=V.prototype.update;function Mf(a){H(da(a)&&0<a.length,"Requires a non-empty array");this.If=a;this.Ec={}}Mf.prototype.Fe=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Je.apply(c[d].Pa,Array.prototype.slice.call(arguments,1))};Mf.prototype.hc=function(a,b,c){Nf(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Je:b,Pa:c});(a=this.We(a))&&b.apply(c,a)};
Mf.prototype.Jc=function(a,b,c){Nf(this,a);a=this.Ec[a]||[];for(var d=0;d<a.length;d++)if(a[d].Je===b&&(!c||c===a[d].Pa)){a.splice(d,1);break}};function Nf(a,b){H(Oa(a.If,function(a){return a===b}),"Unknown event: "+b)};function Of(){Mf.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.Fe("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.Fe("online",!1))},!1)}}ka(Of,Mf);Of.prototype.We=function(a){H("online"===a,"Unknown event type: "+a);return[this.ic]};ba(Of);function Pf(){Mf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Nb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Nb&&(c.Nb=b,c.Fe("visible",b))},!1)}}ka(Pf,Mf);Pf.prototype.We=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Nb]};ba(Pf);var Qf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Rf(a,b){this.Oa=a;this.ba=b?b:Sf}g=Rf.prototype;g.Ra=function(a,b){return new Rf(this.Oa,this.ba.Ra(a,b,this.Oa).Y(null,null,!1,null,null))};g.remove=function(a){return new Rf(this.Oa,this.ba.remove(a,this.Oa).Y(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function Tf(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Hc=function(){return this.ba.Hc()};g.fc=function(){return this.ba.fc()};g.ia=function(a){return this.ba.ia(a)};
g.Xb=function(a){return new Uf(this.ba,null,this.Oa,!1,a)};g.Yb=function(a,b){return new Uf(this.ba,a,this.Oa,!1,b)};g.$b=function(a,b){return new Uf(this.ba,a,this.Oa,!0,b)};g.Ye=function(a){return new Uf(this.ba,null,this.Oa,!0,a)};function Uf(a,b,c,d,e){this.Hd=e||null;this.ke=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.ke?a.left:a.right;else if(0===e){this.Sa.push(a);break}else this.Sa.push(a),a=this.ke?a.right:a.left}
function R(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.ke)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c}function Vf(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function Wf(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Sf;this.right=null!=e?e:Sf}g=Wf.prototype;
g.Y=function(a,b,c,d,e){return new Wf(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function Xf(a){return a.left.e()?a:Xf(a.left)}g.Hc=function(){return Xf(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};
g.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return Yf(e)};function Zf(a){if(a.left.e())return Sf;a.left.fa()||a.left.left.fa()||(a=$f(a));a=a.Y(null,null,null,Zf(a.left),null);return Yf(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=$f(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=ag(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=bg(c),c.left.left.fa()&&(c=ag(c),c=bg(c)));if(0===b(a,c.key)){if(c.right.e())return Sf;d=Xf(c.right);c=c.Y(d.key,d.value,null,null,Zf(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return Yf(c)};g.fa=function(){return this.color};
function Yf(a){a.right.fa()&&!a.left.fa()&&(a=cg(a));a.left.fa()&&a.left.left.fa()&&(a=ag(a));a.left.fa()&&a.right.fa()&&(a=bg(a));return a}function $f(a){a=bg(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,ag(a.right)),a=cg(a),a=bg(a));return a}function cg(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function ag(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
function bg(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function dg(){}g=dg.prototype;g.Y=function(){return this};g.Ra=function(a,b){return new Wf(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Hc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var Sf=new dg;function P(a,b,c){this.k=a;(this.aa=b)&&ne(this.aa);a.e()&&H(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.zb=c;this.Eb=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.aa||F};g.ga=function(a){return this.k.e()?this:new P(this.k,a,this.zb)};g.R=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?F:a};g.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a))};g.Fa=function(a){return null!==this.k.get(a)};
g.U=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new K(a,b),d,e;b.e()?(d=this.k.remove(a),c=Ie(this.zb,c,this.k)):(d=this.k.Ra(a,b),c=Ge(this.zb,c,this.k));e=d.e()?F:this.aa;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===Wd(a),".priority must be the last token in a path");var d=this.R(c).F(D(a),b);return this.U(c,d)};g.e=function(){return this.k.e()};g.Fb=function(){return this.k.count()};
var eg=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,h){b[f]=h.H(a);c++;e&&eg.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Eb){var a="";this.C().e()||(a+="priority:"+pe(this.C().H())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Eb=""===a?"":Yc(a)}return this.Eb};
g.Xe=function(a,b,c){return(c=fg(this,c))?(a=Tf(c,new K(a,b)))?a.name:null:Tf(this.k,a)};function le(a,b){var c;c=(c=fg(a,b))?(c=c.Hc())&&c.name:a.k.Hc();return c?new K(c,a.k.get(c)):null}function me(a,b){var c;c=(c=fg(a,b))?(c=c.fc())&&c.name:a.k.fc();return c?new K(c,a.k.get(c)):null}g.P=function(a,b){var c=fg(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.k.ia(b)};g.Xb=function(a){return this.Yb(a.Ic(),a)};
g.Yb=function(a,b){var c=fg(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.k.Yb(a.name,Nc),d=Vf(c);null!=d&&0>b.compare(d,a);)R(c),d=Vf(c);return c};g.Ye=function(a){return this.$b(a.Gc(),a)};g.$b=function(a,b){var c=fg(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.k.$b(a.name,Nc),d=Vf(c);null!=d&&0<b.compare(d,a);)R(c),d=Vf(c);return c};g.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===ue?-1:0};
g.ob=function(a){if(a===ae||ua(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.k;H(a!==ae,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Nc),f=R(c);f;)e=e||a.yc(f.S),d.push(f),f=R(c);d=e?He(d,ke(a)):re;e=a.toString();c=ya(b.dc);c[e]=a;a=ya(b.od);a[e]=d;return new P(this.k,this.aa,new Fe(a,c))};g.zc=function(a){return a===ae||ua(this.zb.dc,a.toString())};
g.ca=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().ca(a.C())&&this.k.count()===a.k.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=R(b);d=R(a)}return null===c&&null===d}return!1};function fg(a,b){return b===ae?null:a.zb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return F;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Uc(a,M(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Bb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=
d.U(b,c)}});return d.ga(M(c))}var f=[],h=!1,k=a;Cb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return F;var m=He(f,Kc,function(a){return a.name},Mc);if(h){var l=He(f,ke(N));return new P(m,M(c),new Fe({".priority":l},{".priority":N}))}return new P(m,M(c),Je)}var gg=Math.log(2);
function hg(a){this.count=parseInt(Math.log(a+1)/gg,10);this.Pe=this.count-1;this.Jf=a+1&parseInt(Array(this.count+1).join("1"),2)}function ig(a){var b=!(a.Jf&1<<a.Pe);a.Pe--;return b}
function He(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new Wf(u,l.S,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new Wf(u,l.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new Wf(G,k.S,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var G=ig(b),sd=Math.pow(2,b.count-(z+1));G?d(sd,!1):(d(sd,!1),d(sd,!0))}return l}(new hg(a.length));
return null!==f?new Rf(d||b,f):new Rf(d||b)}function pe(a){return"number"===typeof a?"number:"+md(a):"string:"+a}function ne(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&Bb(b,".sv"),"Priority must be a string or number.")}else H(a===ue||a.e(),"priority of unexpected type.");H(a===ue||a.C().e(),"Priority nodes can't have a priority of their own.")}var F=new P(new Rf(Mc),null,Je);function jg(){P.call(this,new Rf(Mc),F,Je)}ka(jg,P);g=jg.prototype;
g.tc=function(a){return a===this?0:1};g.ca=function(a){return a===this};g.C=function(){return this};g.R=function(){return F};g.e=function(){return!1};var ue=new jg,se=new K("[MIN_NAME]",F),ye=new K("[MAX_NAME]",ue);function W(a,b,c){this.A=a;this.W=b;this.g=c}W.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Se=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Se;W.prototype.Tf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Tf;
W.prototype.m=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));Hf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.W.m(b);return new W(this.A.Q(b),c,N)};W.prototype.child=W.prototype.m;W.prototype.Fa=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Hf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.Q(b).e()};W.prototype.hasChild=W.prototype.Fa;
W.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new W(d,b.W.m(c),N))})};W.prototype.forEach=W.prototype.forEach;
W.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.getKey()};od(W.prototype,"key",W.prototype.getKey);W.prototype.Fb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Fb()};W.prototype.numChildren=W.prototype.Fb;
W.prototype.xb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};od(W.prototype,"ref",W.prototype.xb);function Ud(a,b){this.O=a;this.Ld=b}function Rd(a,b,c,d){return new Ud(new Dc(b,c,d),a.Ld)}function Vd(a){return a.O.ea?a.O.j():null}Ud.prototype.u=function(){return this.Ld};function Ec(a){return a.Ld.ea?a.Ld.j():null};function kg(a,b){this.W=a;var c=a.n,d=new be(c.g),c=S(c)?new be(c.g):c.xa?new he(c):new ce(c);this.mf=new Ld(c);var e=b.u(),f=b.O,h=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Ud(new Dc(k,f.ea,c.Qa()),new Dc(h,e.ea,d.Qa()));this.ab=[];this.Qf=new Gd(a)}function lg(a){return a.W}g=kg.prototype;g.u=function(){return this.Na.u().j()};g.jb=function(a){var b=Ec(this.Na);return b&&(S(this.W.n)||!a.e()&&!b.R(J(a)).e())?b.Q(a):null};g.e=function(){return 0===this.ab.length};g.Ob=function(a){this.ab.push(a)};
g.mb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ja(this.ab,function(a){(a=a.Ne(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ab.length;++f){var h=this.ab[f];if(!h.matches(a))e.push(h);else if(a.Ze()){e=e.concat(this.ab.slice(f+1));break}}this.ab=e}else this.ab=[];return c};
g.gb=function(a,b,c){a.type===Dd&&null!==a.source.Ib&&(H(Ec(this.Na),"We should always have a full cache before handling merges"),H(Vd(this.Na),"Missing event cache, even though we have a server cache"));var d=this.Na;a=this.mf.gb(d,a,b,c);b=this.mf;c=a.Sd;H(c.O.j().zc(b.V.g),"Event snap not indexed");H(c.u().j().zc(b.V.g),"Server snap not indexed");H(Hc(a.Sd.u())||!Hc(d.u()),"Once a server snap is complete, it should never go back");this.Na=a.Sd;return mg(this,a.Kf,a.Sd.O.j(),null)};
function ng(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new I("child_added",b,a))});c.ea&&d.push(Fc(c.j()));return mg(a,d,c.j(),b)}function mg(a,b,c,d){return Hd(a.Qf,b,c,d?[d]:a.ab)};function og(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null}g=og.prototype;g.rf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.n.g;return new xc("value",this,new W(a.Ma,b.xb(),c))};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.Qb;return function(){d.call(b,a.Md)}};g.Ne=function(a,b){return this.sb?new yc(this,a,b):null};
g.matches=function(a){return a instanceof og?a.Qb&&this.Qb?a.Qb===this.Qb&&a.ub===this.ub:!0:!1};g.Ze=function(){return null!==this.Qb};function pg(a,b,c){this.ha=a;this.sb=b;this.ub=c}g=pg.prototype;g.rf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};g.Ne=function(a,b){return this.sb?new yc(this,a,b):null};
g.createEvent=function(a,b){H(null!=a.Za,"Child events should have a childName.");var c=b.xb().m(a.Za);return new xc(a.type,this,new W(a.Ma,c,b.n.g),a.Dd)};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof pg){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=qa(a.ha);if(b===qa(this.ha)){if(1===b){var b=ra(a.ha),c=ra(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return pa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.Ze=function(){return null!==this.ha};function X(a,b,c,d){this.w=a;this.path=b;this.n=c;this.Oc=d}
function qg(a){var b=null,c=null;a.ka&&(b=ee(a));a.na&&(c=ge(a));if(a.g===ae){if(a.ka){if("[MIN_NAME]"!=de(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=fe(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!zf(b)||null!=c&&!zf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof te||a.g===ze,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function rg(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function sg(a,b){if(!0===a.Oc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.xb=function(){y("Query.ref",0,0,arguments.length);return new U(this.w,this.path)};
g.hc=function(a,b,c,d){y("Query.on",2,4,arguments.length);Ff("Query.on",a,!1);A("Query.on",2,b,!1);var e=tg("Query.on",c,d);if("value"===a)ug(this.w,this,new og(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;ug(this.w,this,new pg(f,e.cancel,e.Pa))}return b};
g.Jc=function(a,b,c){y("Query.off",0,3,arguments.length);Ff("Query.off",a,!0);A("Query.off",2,b,!0);Eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new og(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new pg(e,null,c||null));e=this.w;d=".info"===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);tc(e.da,this.path,d)};
g.ig=function(a,b){function c(k){f&&(f=!1,e.Jc(a,c),b&&b.call(d.Pa,k),h.resolve(k))}y("Query.once",1,4,arguments.length);Ff("Query.once",a,!1);A("Query.once",2,b,!0);var d=tg("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new Hb;Jb(h.ra);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&&d.cancel.call(d.Pa,b);h.reject(b)});return h.ra};
g.me=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.me(a),this.Oc)};
g.ne=function(a){y("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.ne(a),this.Oc)};
g.jg=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Hf("Query.orderByChild",a);sg(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new te(b);b=De(this.n,b);qg(b);return new X(this.w,this.path,b,!0)};g.kg=function(){y("Query.orderByKey",0,0,arguments.length);sg(this,"Query.orderByKey");var a=De(this.n,ae);qg(a);return new X(this.w,this.path,a,!0)};g.lg=function(){y("Query.orderByPriority",0,0,arguments.length);sg(this,"Query.orderByPriority");var a=De(this.n,N);qg(a);return new X(this.w,this.path,a,!0)};
g.mg=function(){y("Query.orderByValue",0,0,arguments.length);sg(this,"Query.orderByValue");var a=De(this.n,ze);qg(a);return new X(this.w,this.path,a,!0)};g.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Af("Query.startAt",a,this.path,!0);Gf("Query.startAt",b);var c=this.n.Nd(a,b);rg(c);qg(c);if(this.n.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new X(this.w,this.path,c,this.Oc)};
g.fd=function(a,b){y("Query.endAt",0,2,arguments.length);Af("Query.endAt",a,this.path,!0);Gf("Query.endAt",b);var c=this.n.fd(a,b);rg(c);qg(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.w,this.path,c,this.Oc)};
g.Pf=function(a,b){y("Query.equalTo",1,2,arguments.length);Af("Query.equalTo",a,this.path,!1);Gf("Query.equalTo",b);if(this.n.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).fd(a,b)};
g.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.w.toString()+(b||"/")};g.ya=function(){var a=jd(Ee(this.n));return"{}"===a?"default":a};
function tg(a,b,c){var d={cancel:null,Pa:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Pa=c,Eb(a,4,d.Pa);else if(b)if("object"===typeof b&&null!==b)d.Pa=b;else if("function"===typeof b)d.cancel=b;else throw Error(Db(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.ig;X.prototype.limitToFirst=X.prototype.me;X.prototype.limitToLast=X.prototype.ne;X.prototype.orderByChild=X.prototype.jg;
X.prototype.orderByKey=X.prototype.kg;X.prototype.orderByPriority=X.prototype.lg;X.prototype.orderByValue=X.prototype.mg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Pf;X.prototype.toString=X.prototype.toString;od(X.prototype,"ref",X.prototype.xb);function vg(a,b){this.value=a;this.children=b||wg}var wg=new Rf(function(a,b){return a===b?0:a<b?-1:1});function xg(a){var b=Q;t(a,function(a,d){b=b.set(new L(d),a)});return b}g=vg.prototype;g.e=function(){return null===this.value&&this.children.e()};function yg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=yg(a,D(b),c),null!=b?{path:(new L(d)).m(b.path),value:b.value}:null):null}
function zg(a,b){return yg(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new vg(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new vg(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?Q:new vg(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&&b.e()?Q:new vg(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
function $d(a,b,c){if(b.e())return c;var d=J(b);b=$d(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new vg(a.value,d)}function Ag(a,b){return Bg(a,C,b)}function Bg(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Bg(f,b.m(a),c)});return c(b,a.value,d)}function Cg(a,b,c){return Dg(a,b,C,c)}function Dg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?Dg(a,D(b),c.m(e),d):null}
function Eg(a,b,c){Fg(a,b,C,c)}function Fg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?Fg(a,D(b),c.m(e),d):Q}function Yd(a,b){Gg(a,C,b)}function Gg(a,b,c){a.children.ia(function(a,e){Gg(e,b.m(a),c)});a.value&&c(b,a.value)}function Hg(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Q=new vg(null);vg.prototype.toString=function(){var a={};Yd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Ig(a,b,c){this.type=Qd;this.source=Jg;this.path=a;this.Pb=b;this.Id=c}Ig.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return H(this.Pb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Pb.subtree(new L(a));return new Ig(C,a,this.Id)}H(J(this.path)===a,"operationForChild called for unrelated child.");return new Ig(D(this.path),this.Pb,this.Id)};
Ig.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Pb+")"};var $b=0,Dd=1,Qd=2,bc=3;function Kg(a,b,c,d){this.ee=a;this.Ue=b;this.Ib=c;this.De=d;H(!d||b,"Tagged queries must be from server.")}var Jg=new Kg(!0,!1,null,!1),Lg=new Kg(!1,!0,null,!1);Kg.prototype.toString=function(){return this.ee?"user":this.De?"server(queryID="+this.Ib+")":"server"};function Mg(a){this.X=a}var Ng=new Mg(new vg(null));function Og(a,b,c){if(b.e())return new Mg(new vg(c));var d=zg(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new Mg(a.X.set(e,d))}a=$d(a.X,b,new vg(c));return new Mg(a)}function Pg(a,b,c){var d=a;Cb(c,function(a,c){d=Og(d,b.m(a),c)});return d}Mg.prototype.Ed=function(a){if(a.e())return Ng;a=$d(this.X,a,Q);return new Mg(a)};function Qg(a,b){var c=zg(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null}
function Rg(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new K(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new K(a,c.value))});return b}function Sg(a,b){if(b.e())return a;var c=Qg(a,b);return null!=c?new Mg(new vg(c)):new Mg(a.X.subtree(b))}Mg.prototype.e=function(){return this.X.e()};Mg.prototype.apply=function(a){return Tg(C,this.X,a)};
function Tg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Tg(a.m(b),f,c)});c.Q(a).e()||null===d||(c=c.F(a.m(".priority"),d));return c};function Ug(){this.Aa={}}g=Ug.prototype;g.e=function(){return xa(this.Aa)};g.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=x(this.Aa,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c))});return e};g.Ob=function(a,b,c,d,e){var f=a.ya(),h=x(this.Aa,f);if(!h){var h=c.Ba(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.sc(d):F,k=!1);h=new kg(a,new Ud(new Dc(h,k,!1),new Dc(d,e,!1)));this.Aa[f]=h}h.Ob(b);return ng(h,b)};
g.mb=function(a,b,c){var d=a.ya(),e=[],f=[],h=null!=Vg(this);if("default"===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&&(delete k.Aa[d],S(a.W.n)||e.push(a.W))})}else{var m=x(this.Aa,d);m&&(f=f.concat(m.mb(b,c)),m.e()&&(delete this.Aa[d],S(m.W.n)||e.push(m.W)))}h&&null==Vg(this)&&e.push(new U(a.w,a.path));return{qg:e,Rf:f}};function Wg(a){return Ka(sa(a.Aa),function(a){return!S(a.W.n)})}g.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a)});return b};
function Xg(a,b){if(S(b.n))return Vg(a);var c=b.ya();return x(a.Aa,c)}function Vg(a){return wa(a.Aa,function(a){return S(a.W.n)})||null};function Yg(){this.T=Ng;this.la=[];this.Cc=-1}function Zg(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Yg.prototype;
g.Ed=function(a){var b=Pa(this.la,function(b){return b.Zc===a});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&$g(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.T=ah(this.la,bh,C),this.Cc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.m(b))})}return!0}return!1};
g.Ba=function(a,b,c,d){if(c||d){var e=Sg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Qg(e,C)?(e=ah(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||F,e.apply(b)):null}e=Qg(this.T,a);if(null!=e)return e;e=Sg(this.T,a);return e.e()?b:null!=b||null!=Qg(e,C)?(b=b||F,e.apply(b)):null};
g.sc=function(a,b){var c=F,d=Qg(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=Sg(this.T,a);b.P(N,function(a,b){var d=Sg(e,new L(a)).apply(b);c=c.U(a,d)});Ja(Rg(e),function(a){c=c.U(a.name,a.S)})}else e=Sg(this.T,a),Ja(Rg(e),function(a){c=c.U(a.name,a.S)});return c};g.$c=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.m(b);if(null!=Qg(this.T,a))return null;a=Sg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
g.rc=function(a,b,c){a=a.m(b);var d=Qg(this.T,a);return null!=d?d:Cc(c,b)?Sg(this.T,a).apply(c.j().R(b)):null};g.mc=function(a){return Qg(this.T,a)};g.Xd=function(a,b,c,d,e,f){var h;a=Sg(this.T,a);h=Qg(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.ob(f);if(h.e()||h.J())return[];b=[];a=ke(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b};
function $g(a,b){return a.Ja?a.path.contains(b):!!va(a.children,function(c,d){return a.path.m(d).contains(b)})}function bh(a){return a.visible}
function ah(a,b,c){for(var d=Ng,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ja)c.contains(h)?(h=T(c,h),d=Og(d,h,f.Ja)):h.contains(c)&&(h=T(h,c),d=Og(d,C,f.Ja.Q(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=Pg(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=Pg(d,C,f.children);else if(f=x(f.children,J(h)))f=f.Q(D(h)),d=Og(d,C,f)}else throw Wc("WriteRecord should have .snap or .children");}}return d}function ch(a,b){this.Mb=a;this.X=b}g=ch.prototype;
g.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c)};g.sc=function(a){return this.X.sc(this.Mb,a)};g.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c)};g.mc=function(a){return this.X.mc(this.Mb.m(a))};g.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e)};g.rc=function(a,b){return this.X.rc(this.Mb,a,b)};g.m=function(a){return new ch(this.Mb.m(a),this.X)};function dh(){this.children={};this.ad=0;this.value=null}function eh(a,b,c){this.ud=a?a:"";this.Ha=b?b:null;this.A=c?c:new dh}function fh(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new eh(e,d,x(d.A.children,e)||new dh),c=D(c);return d}g=eh.prototype;g.Ea=function(){return this.A.value};function gh(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;hh(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;hh(this)};
g.kd=function(){return 0<this.A.ad};g.e=function(){return null===this.Ea()&&!this.kd()};g.P=function(a){var b=this;t(this.A.children,function(c,d){a(new eh(d,b,c))})};function ih(a,b,c,d){c&&!d&&b(a);a.P(function(a){ih(a,b,!0,d)});c&&d&&b(a)}function jh(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Ha?this.ud:this.Ha.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Ha};
function hh(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Bb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.ad--,hh(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,hh(b))}};function kh(a,b,c,d,e,f){this.id=lh++;this.f=bd("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Pc=0;this.Lc=[];this.ma=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.te=d;this.M=a;this.pb=this.Ia=this.Db=this.ye=null;this.Vd=e;this.de=!1;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Ie=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.rg=0;this.Te=!0;this.Bc=this.le=null;mh(this,0);Pf.Wb().hc("visible",this.hg,this);-1===a.host.indexOf("fblocal")&&
Of.Wb().hc("online",this.gg,this)}var lh=0,nh=0;g=kh.prototype;g.ua=function(a,b,c){var d=++this.rg;a={r:d,a:a,b:b};this.f(B(a));H(this.ma,"sendRequest call when we're not connected not allowed.");this.Ia.ua(a);c&&(this.Gd[d]=c)};
g.bf=function(a,b,c,d){var e=a.ya(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};H(zd(a.n)||!S(a.n),"listen() called for non-default but complete query");H(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,ng:a,tag:c};this.$[f][e]=a;this.ma&&oh(this,a)};
function oh(a,b){var c=b.ng,d=c.path.toString(),e=c.ya();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=Ee(c.n),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&Bb(k,"w")){var l=x(k,"w");da(l)&&0<=Ia(l,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&ph(a,d,e),b.G&&b.G(m,
k))})}g.of=function(a){this.pb=a;this.f("Auth token refreshed");this.pb?qh(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||pd(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function qh(a){if(a.ma&&a.pb){var b=a.pb,c={cred:b};a.Ie&&(c.authvar=a.Ie);a.ua("auth",c,function(c){var e=c.s;c=c.d||"error";"ok"!==e&&a.pb===b&&rh(a,e,c)})}}
g.Cf=function(a,b){var c=a.path.toString(),d=a.ya();this.f("Unlisten called for "+c+" "+d);H(zd(a.n)||!S(a.n),"unlisten() called for non-default but complete query");if(ph(this,c,d)&&this.ma){var e=Ee(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.qe=function(a,b,c){this.ma?sh(this,"o",a,b,c):this.Lc.push({ve:a,action:"o",data:b,G:c})};g.ef=function(a,b,c){this.ma?sh(this,"om",a,b,c):this.Lc.push({ve:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.ma?sh(this,"oc",a,null,b):this.Lc.push({ve:a,action:"oc",data:null,G:b})};function sh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){th(this,"p",a,b,c,d)};g.cf=function(a,b,c,d){th(this,"m",a,b,c,d)};function th(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.pa.push({action:b,qf:d,G:e});a.Pc++;b=a.pa.length-1;a.ma?uh(a,b):a.f("Buffering put: "+c)}
function uh(a,b){var c=a.pa[b].action,d=a.pa[b].qf,e=a.pa[b].G;a.pa[b].og=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Pc--;0===a.Pc&&(a.pa=[]);e&&e(d.s,d.d)})}g.xe=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Hb(a.p,a.d,!1,a.t):"m"===b?this.Hb(a.p,a.d,!0,a.t):"c"===b?vh(this,a.p,a.q):"ac"===b?rh(this,a.s,a.d):"sd"===b?this.ye?this.ye(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):cd("Unrecognized action received from server: "+
B(b)+"\nAre you using the latest client?"))}};
g.Mc=function(a,b){this.f("connection ready");this.ma=!0;this.Bc=(new Date).getTime();this.te({serverTimeOffset:a-(new Date).getTime()});this.Db=b;if(this.Te){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;"undefined"!==typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")?c["framework.cordova"]=1:"object"===typeof navigator&&
"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.xe(c)}wh(this);this.Te=!1;this.Kc(!0)};function mh(a,b){H(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.vb&&clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;xh(a)},Math.floor(b))}g.hg=function(a){a&&!this.Nb&&this.Va===this.td&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.Ia||mh(this,0));this.Nb=a};
g.gg=function(a){a?(this.f("Browser went online."),this.Va=1E3,this.Ia||mh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
g.gf=function(){this.f("data client disconnected");this.ma=!1;this.Ia=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.qf&&b.og&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Pc--)}0===this.Pc&&(this.pa=[]);this.Gd={};yh(this)&&(this.Nb?this.Bc&&(3E4<(new Date).getTime()-this.Bc&&(this.Va=1E3),this.Bc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.td,this.le=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.le)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),mh(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1)};
function xh(a){if(yh(a)){a.f("Making a connection attempt");a.le=(new Date).getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.gf,a),e=a.id+":"+nh++,f=a.Db,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Ia={close:m,ua:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){h?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.pb=l&&l.accessToken,k=new Ye(e,a.M,b,c,d,function(b){O(b+
" ("+a.M.toString()+")");a.eb("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.eb=function(a){E("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&&(clearTimeout(this.vb),this.vb=null),this.ma&&this.gf())};g.lc=function(a){E("Resuming connection for reason: "+a);delete this.qd[a];xa(this.qd)&&(this.Va=1E3,this.Ia||mh(this,0))};
function vh(a,b,c){c=c?La(c,function(a){return jd(a)}).join("$"):"default";(a=ph(a,b,c))&&a.G&&a.G("permission_denied")}function ph(a,b,c){b=(new L(b)).toString();var d;p(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===qa(a.$[b])&&delete a.$[b]):d=void 0;return d}
function rh(a,b,c){E("Auth token revoked: "+b+"/"+c);a.pb=null;a.de=!0;a.Ia.close();"invalid_token"===b&&(a.Va=3E4,O("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project."))}
function wh(a){qh(a);t(a.$,function(b){t(b,function(b){oh(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&uh(a,b);for(;a.Lc.length;)b=a.Lc.shift(),sh(a,b.action,b.ve,b.data,b.G)}function yh(a){var b;b=Of.Wb().ic;return xa(a.qd)&&b};var Y={Vf:function(){Ne=td=!0}};Y.forceLongPolling=Y.Vf;Y.Wf=function(){Oe=!0};Y.forceWebSockets=Y.Wf;Y.bg=function(){return rd.isAvailable()};Y.isWebSocketsAvailable=Y.bg;Y.ug=function(a,b){a.w.Ua.ye=b};Y.setSecurityDebugCallback=Y.ug;Y.Ae=function(a,b){a.w.Ae(b)};Y.stats=Y.Ae;Y.Be=function(a,b){a.w.Be(b)};Y.statsIncrementCounter=Y.Be;Y.ed=function(a){return a.w.ed};Y.dataUpdateCount=Y.ed;Y.ag=function(a,b){a.w.je=b};Y.interceptServerData=Y.ag;function zh(a){this.wa=Q;this.lb=new Yg;this.Ce={};this.jc={};this.Dc=a}function Ah(a,b,c,d,e){var f=a.lb,h=e;H(d>f.Cc,"Stacking an older write on top of newer ones");p(h)||(h=!0);f.la.push({path:b,Ja:c,Zc:d,visible:h});h&&(f.T=Og(f.T,b,c));f.Cc=d;return e?Bh(a,new Zb(Jg,b,c)):[]}function Ch(a,b,c,d){var e=a.lb;H(d>e.Cc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.T=Pg(e.T,b,c);e.Cc=d;c=xg(c);return Bh(a,new Cd(Jg,b,c))}
function Dh(a,b,c){c=c||!1;var d=Zg(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Cb(d.children,function(a,b){e=e.set(new L(a),b)});return Bh(a,new Ig(d.path,e,c))}return[]}function Eh(a,b,c){c=xg(c);return Bh(a,new Cd(Lg,b,c))}function Fh(a,b,c,d){d=Gh(a,d);if(null!=d){var e=Hh(d);d=e.path;e=e.Ib;b=T(d,b);c=new Zb(new Kg(!1,!0,e,!0),b,c);return Ih(a,d,c)}return[]}
function Jh(a,b,c,d){if(d=Gh(a,d)){var e=Hh(d);d=e.path;e=e.Ib;b=T(d,b);c=xg(c);c=new Cd(new Kg(!1,!0,e,!0),b,c);return Ih(a,d,c)}return[]}
zh.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Eg(this.wa,c,function(a,b){var f=T(a,c);d=d||b.jb(f);e=e||null!=Vg(b)});var f=this.wa.get(c);f?(e=e||null!=Vg(f),d=d||f.jb(C)):(f=new Ug,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=F,Hg(this.wa.subtree(c),function(a,b){var c=b.jb(C);c&&(d=d.U(a,c))}));var k=null!=Xg(f,a);if(!k&&!S(a.n)){var m=Kh(a);H(!(m in this.jc),"View does not exist, but we have a tag");var l=Lh++;this.jc[m]=l;this.Ce["_"+l]=m}h=f.Ob(a,b,new ch(c,this.lb),d,h);k||
e||(f=Xg(f,a),h=h.concat(Mh(this,a,f)));return h};
zh.prototype.mb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ya()||null!=Xg(e,a))){f=e.mb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.qg;f=f.Rf;b=-1!==Pa(e,function(a){return S(a.n)});var h=Cg(this.wa,d,function(a,b){return null!=Vg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=Nh(d),k=0;k<d.length;++k){var m=d[k],l=m.W,m=Oh(this,m);this.Dc.ze(Ph(l),Qh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Dc.Od(Ph(a),null);else{var u=this;Ja(e,function(a){a.ya();
var b=u.jc[Kh(a)];u.Dc.Od(Ph(a),b)})}Rh(this,e)}return f};zh.prototype.Ba=function(a,b){var c=this.lb,d=Cg(this.wa,a,function(b,c){var d=T(b,a);if(d=c.jb(d))return d});return c.Ba(a,d,b,!0)};function Nh(a){return Ag(a,function(a,c,d){if(c&&null!=Vg(c))return[Vg(c)];var e=[];c&&(e=Wg(c));t(d,function(a){e=e.concat(a)});return e})}function Rh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.n)){var d=Kh(d),e=a.jc[d];delete a.jc[d];delete a.Ce["_"+e]}}}
function Ph(a){return S(a.n)&&!zd(a.n)?a.xb():a}function Mh(a,b,c){var d=b.path,e=Qh(a,b);c=Oh(a,c);b=a.Dc.ze(Ph(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)H(null==Vg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Ag(d,function(a,b,c){if(!a.e()&&b&&null!=Vg(b))return[lg(Vg(b))];var d=[];b&&(d=d.concat(La(Wg(b),function(a){return a.W})));t(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Dc.Od(Ph(c),Qh(a,c));return b}
function Oh(a,b){var c=b.W,d=Qh(a,c);return{ld:function(){return(b.u()||F).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=Gh(a,d)){var h=Hh(b);b=h.path;h=h.Ib;f=T(b,f);f=new ac(new Kg(!1,!0,h,!0),f);b=Ih(a,b,f)}else b=[]}else b=Bh(a,new ac(Lg,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.mb(c,null,f)}}}function Kh(a){return a.path.toString()+"$"+a.ya()}function Hh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new L(a.substr(0,b))}}function Gh(a,b){var c=a.Ce,d="_"+b;return d in c?c[d]:void 0}function Qh(a,b){var c=Kh(b);return x(a.jc,c)}var Lh=1;
function Ih(a,b,c){var d=a.wa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new ch(b,a.lb),null)}function Bh(a,b){return Sh(a,b,a.wa,null,new ch(C,a.lb))}function Sh(a,b,c,d,e){if(b.path.e())return Th(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&&m)var l=d?d.R(k):null,k=e.m(k),h=h.concat(Sh(a,m,c,l,k));f&&(h=h.concat(f.gb(b,e,d)));return h}
function Th(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.m(c),z=b.Nc(c);z&&(h=h.concat(Th(a,z,f,l,u)))});f&&(h=h.concat(f.gb(b,e,d)));return h};function pf(a,b,c){this.app=c;var d=new cc(c);this.M=a;this.Xa=oc(a);this.Vc=null;this.da=new qc;this.vd=1;this.Ua=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new xd(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ua=new kh(this.M,r(this.Hb,this),r(this.Kc,this),r(this.te,this),d,b)}var f=this;dc(d,function(a){f.va.of(a)});this.wg=pc(a,r(function(){return new ic(this.Xa,this.va)},this));this.nc=new eh;this.ie=new ec;this.pd=new zh({ze:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=Bh(f.pd,new Zb(Lg,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:aa});Uh(this,"connected",!1);this.ja=new Qc;this.$a=new of(this);this.ed=
0;this.je=null;this.K=new zh({ze:function(a,b,c,d){f.va.bf(a,c,b,function(b,c){var e=d(b,c);vc(f.da,a.path,e)});return[]},Od:function(a,b){f.va.Cf(a,b)}})}g=pf.prototype;g.toString=function(){return(this.M.Sc?"https://":"http://")+this.M.host};g.name=function(){return this.M.oe};function Vh(a){a=a.ie.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Wh(a){a=a={timestamp:Vh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Hb=function(a,b,c,d){this.ed++;var e=new L(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=oa(b,function(a){return M(a)}),a=Jh(this.K,e,b,d)):(b=M(b),a=Fh(this.K,e,b,d)):c?(d=oa(b,function(a){return M(a)}),a=Eh(this.K,e,d)):(d=M(b),a=Bh(this.K,new Zb(Lg,e,d)));d=e;0<a.length&&(d=Xh(this,e));vc(this.da,d,a)};g.Kc=function(a){Uh(this,"connected",a);!1===a&&Yh(this)};g.te=function(a){var b=this;ld(a,function(a,d){Uh(b,d,a)})};
function Uh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=Bh(a.pd,new Zb(Lg,b,c));vc(a.da,b,c)}g.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Cg:c});var e=Wh(this);b=M(b,c);var e=Tc(b,e),f=this.vd++,e=Ah(this.K,a,e,f,!0);rc(this.da,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=Dh(h.K,f,!e);vc(h.da,a,e);Zh(d,b,c)});e=$h(this,a);Xh(this,e);vc(this.da,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Wh(this),f={};t(b,function(a,b){d=!1;var c=M(a);f[b]=Tc(c,e)});if(d)E("update() called with empty data.  Don't do anything."),Zh(c,"ok");else{var h=this.vd++,k=Ch(this.K,a,f,h);rc(this.da,k);var m=this;this.va.cf(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=Dh(m.K,h,!e),f=a;0<e.length&&(f=Xh(m,a));vc(m.da,f,e);Zh(c,b,d)});b=$h(this,a);Xh(this,b);vc(this.da,a,[])}};
function Yh(a){a.f("onDisconnectEvents");var b=Wh(a),c=[];Rc(Pc(a.ja,b),C,function(b,e){c=c.concat(Bh(a.K,new Zb(Lg,b,e)));var f=$h(a,b);Xh(a,f)});a.ja=new Qc;vc(a.da,C,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&vf(c.ja,a);Zh(b,d,e)})};function Jf(a,b,c,d){var e=M(c);a.va.qe(b.toString(),e.H(!0),function(c,h){"ok"===c&&Sc(a.ja,b,e);Zh(d,c,h)})}function Kf(a,b,c,d,e){var f=M(c,d);a.va.qe(b.toString(),f.H(!0),function(c,d){"ok"===c&&Sc(a.ja,b,f);Zh(e,c,d)})}
function Lf(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),Zh(d,"ok")):a.va.ef(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=M(c[m]);Sc(a.ja,b.m(m),l)}Zh(d,e,f)})}function ug(a,b,c){c=".info"===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);tc(a.da,b.path,c)}g.eb=function(){this.Ua&&this.Ua.eb("repo_interrupt")};g.lc=function(){this.Ua&&this.Ua.lc("repo_interrupt")};
g.Ae=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new jc(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ma(ta(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Be=function(a){lc(this.Xa,a);this.wg.xf[a]=!0};g.f=function(a){var b="";this.Ua&&(b=this.Ua.id+":");E(b,arguments)};
function Zh(a,b,c){a&&Tb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function ai(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.hc("value",f);c={path:b,update:c,G:d,status:null,jf:Vc(),He:e,tf:0,Rd:function(){h.Jc("value",f)},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Bf("transaction failed: Data returned ",d,c.path);c.status=1;e=fh(a.nc,b);var k=e.Ea()||[];k.push(c);gh(e,k);"object"===typeof d&&null!==d&&Bb(d,".priority")?(k=x(d,".priority"),H(zf(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Ba(b)||F).C().H();e=Wh(a);d=M(d,k);e=Tc(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=Ah(a.K,b,e,c.Da,c.He);vc(a.da,b,c);bi(a)}else c.Rd(),c.cd=null,c.dd=null,c.G&&(a=new W(c.bd,new U(a,c.path),N),c.G(null,!1,a))}function bi(a,b){var c=b||a.nc;b||ci(a,c);if(null!==c.Ea()){var d=di(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&ei(a,c.path(),d)}else c.kd()&&c.P(function(b){bi(a,b)})}
function ei(a,b,c){for(var d=La(c,function(a){return a.Da}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];H(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.tf++;var k=T(b,h.path),d=d.F(k,h.cd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(Dh(a.K,c[f].Da));if(c[f].G){var h=c[f].dd,k=new U(a,c[f].path);d.push(r(c[f].G,
null,null,!0,new W(h,k,N)))}c[f].Rd()}ci(a,fh(a.nc,b));bi(a);vc(a.da,b,e);for(f=0;f<d.length;f++)Tb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;Xh(a,b)}},e)}function Xh(a,b){var c=fi(a,b),d=c.path(),c=di(a,c);gi(a,c,d);return d}
function gi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=La(b,function(a){return a.Da}),h=0;h<b.length;h++){var k=b[h],m=T(c,k.path),l=!1,u;H(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(Dh(a.K,k.Da,!0));else if(1===k.status)if(25<=k.tf)l=!0,u="maxretry",e=e.concat(Dh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[h].update(z.H());p(G)?(Bf("transaction failed: Data returned ",G,k.path),m=M(G),"object"===typeof G&&null!=
G&&Bb(G,".priority")||(m=m.ga(z.C())),z=k.Da,G=Wh(a),G=Tc(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Qa(f,z),e=e.concat(Ah(a.K,k.path,G,k.Da,k.He)),e=e.concat(Dh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(Dh(a.K,k.Da,!0)))}vc(a.da,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(r(b[h].G,null,null,!1,new W(b[h].bd,k,N)))):d.push(r(b[h].G,null,Error(u),!1,null))))}ci(a,a.nc);for(h=0;h<d.length;h++)Tb(d[h]);bi(a)}}
function fi(a,b){for(var c,d=a.nc;null!==(c=J(b))&&null===d.Ea();)d=fh(d,c),b=D(b);return d}function di(a,b){var c=[];hi(a,b,c);c.sort(function(a,b){return a.jf-b.jf});return c}function hi(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){hi(a,b,c)})}function ci(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;gh(b,0<c.length?c:null)}b.P(function(b){ci(a,b)})}
function $h(a,b){var c=fi(a,b).path(),d=fh(a.nc,b);jh(d,function(b){ii(a,b)});ii(a,d);ih(d,function(b){ii(a,b)});return c}
function ii(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(H(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(H(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(Dh(a.K,c[h].Da,!0)),c[h].G&&d.push(r(c[h].G,null,Error("set"),!1,null))));-1===f?gh(b,null):c.length=f+1;vc(a.da,b.path(),e);for(h=0;h<d.length;h++)Tb(d[h])}};function uf(){this.nb={};this.Df=!1}uf.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb()};uf.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc()};uf.prototype.ce=function(a){this.Df=a};ba(uf);uf.prototype.interrupt=uf.prototype.eb;uf.prototype.resume=uf.prototype.lc;var Z={};Z.pc=kh;Z.DataConnection=Z.pc;kh.prototype.vg=function(a,b){this.ua("q",{p:a},b)};Z.pc.prototype.simpleListen=Z.pc.prototype.vg;kh.prototype.Of=function(a,b){this.ua("echo",{d:a},b)};Z.pc.prototype.echo=Z.pc.prototype.Of;kh.prototype.interrupt=kh.prototype.eb;Z.Gf=Ye;Z.RealTimeConnection=Z.Gf;Ye.prototype.sendRequest=Ye.prototype.ua;Ye.prototype.close=Ye.prototype.close;
Z.$f=function(a){var b=kh.prototype.put;kh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){kh.prototype.put=b}};Z.hijackHash=Z.$f;Z.Ff=fc;Z.ConnectionTarget=Z.Ff;Z.ya=function(a){return a.ya()};Z.queryIdentifier=Z.ya;Z.cg=function(a){return a.w.Ua.$};Z.listens=Z.cg;Z.ce=function(a){uf.Wb().ce(a)};Z.forceRestClient=Z.ce;Z.Context=uf;function U(a,b){if(!(a instanceof pf))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,Be,!1);this.then=void 0;this["catch"]=void 0}ka(U,X);g=U.prototype;g.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:Xd(this.path)};
g.m=function(a){y("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Hf("Firebase.child",b)}else Hf("Firebase.child",a);return new U(this.w,this.path.m(a))};g.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.w,a)};
g.Xf=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Nf=function(){return this.w.$a};g.set=function(a,b){y("Firebase.set",1,2,arguments.length);If("Firebase.set",this.path);Af("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new Hb;this.w.Kb(this.path,a,null,Ib(c,b));return c.ra};
g.update=function(a,b){y("Firebase.update",1,2,arguments.length);If("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Df("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new Hb;this.w.update(this.path,a,Ib(c,b));return c.ra};
g.Kb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);If("Firebase.setWithPriority",this.path);Af("Firebase.setWithPriority",a,this.path,!1);Ef("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new Hb;this.w.Kb(this.path,a,b,Ib(d,c));return d.ra};
g.remove=function(a){y("Firebase.remove",0,1,arguments.length);If("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);If("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(Db("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Hb;ga(b)&&Jb(d.ra);ai(this.w,this.path,a,function(a,c,
h){a?d.reject(a):d.resolve(new Pb(c,h));ga(b)&&b(a,c,h)},c);return d.ra};g.tg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);If("Firebase.setPriority",this.path);Ef("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new Hb;this.w.Kb(this.path.m(".priority"),a,null,Ib(c,b));return c.ra};
g.push=function(a,b){y("Firebase.push",0,2,arguments.length);If("Firebase.push",this.path);Af("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Vh(this.w),d=Qf(c),c=this.m(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.m(d)});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);ga(b)&&Jb(f)}return c};g.kb=function(){If("Firebase.onDisconnect",this.path);return new V(this.w,this.path)};U.prototype.child=U.prototype.m;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;
U.prototype.setWithPriority=U.prototype.Kb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.tg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.kb;od(U.prototype,"database",U.prototype.Nf);od(U.prototype,"key",U.prototype.getKey);od(U.prototype,"parent",U.prototype.getParent);od(U.prototype,"root",U.prototype.Xf);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=uf.Wb(),c=a.options.databaseURL;p(c)||dd("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=ed(c),c=d.kc;tf("Invalid Firebase Database URL",d);d.path.e()||dd("Database URL must point to the root of a Firebase Database (not including a child path).");(d=x(b.nb,a.name))&&dd("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new pf(c,b.Df,a);b.nb[a.name]=
d;return d.$a},{Reference:U,Query:X,Database:of,enableLogging:ad,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:rf})}catch(ji){dd("Failed to register the Firebase Database Service ("+ji+")")};})();

(function() {var k,aa=aa||{},m=this,n=function(a){return void 0!==a},ba=function(){},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){return"string"==typeof a},r=function(a){return"function"==p(a)},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ga=function(a,b,c){return a.call.apply(a.bind,
arguments)},ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return t.apply(null,arguments)},ia=Date.now||function(){return+new Date},u=function(a,b){function c(){}
c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.Ma=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ja=function(a,b,c){function d(){O||(O=!0,b.apply(null,arguments))}function e(b){l=setTimeout(function(){l=null;a(f,2===v)},b)}function f(a,b){if(!O)if(a)d.apply(null,arguments);else if(2===v||B)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===v?(v=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){Sb||(Sb=!0,O||(null!==l?(a||(v=2),clearTimeout(l),e(0)):a||(v=1)))}var h=1,l=null,B=!1,v=0,O=!1,Sb=!1;e(0);setTimeout(function(){B=!0;g(!0)},c);return g};var ka="https://firebasestorage.googleapis.com";var w=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};u(w,Error);
var la=function(){return new w("unknown","An unknown error occurred, please check the error payload for server response.")},ma=function(){return new w("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again.")},na=function(a){return new w("unauthorized","User does not have permission to access '"+a+"'.")},oa=function(){return new w("canceled","User canceled the upload/download.")},pa=function(a,b,c){return new w("invalid-argument","Invalid argument in `"+
b+"` at index "+a+": "+c)},qa=function(){return new w("app-deleted","The Firebase app was deleted.")};var ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){var b={};ra(a,function(a,d){b[a]=d});return b};var x=function(a,b,c,d){this.l=a;this.f={};this.i=b;this.b={};this.c="";this.N=c;this.g=this.a=null;this.h=[200];this.j=d};var ta={STATE_CHANGED:"state_changed"},ua={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},va=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var y=function(a){return n(a)&&null!==a},wa=function(a){return"string"===typeof a||a instanceof String};var xa=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};xa.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var ya=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var za=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,za);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(za,Error);za.prototype.name="CustomError";var Aa=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Aa.prototype.a=null;var Ba=0;Aa.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Ba++;d||ia();this.b=b;delete this.a};var Ca=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Da=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ea=function(a){return null!==a&&"withCredentials"in a},Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ga=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ha=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Ia=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Ja=function(a){Ja[" "](a);return a};Ja[" "]=ba;var Ka=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},La=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ma=function(a,b){return a<b?-1:a>b?1:0};var Na=function(a,b){this.a=a;this.b=b};Na.prototype.clone=function(){return new Na(this.a,this.b)};var z=function(a,b){this.bucket=a;this.path=b},Oa=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Pa=function(a){for(var b=null,c=[{ja:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,aa:{bucket:1,path:3},ia:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{ja:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,aa:{bucket:1,path:3},ia:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
c[d],f=e.ja.exec(a);if(f){b=f[e.aa.bucket];(f=f[e.aa.path])||(f="");b=new z(b,f);e.ia(b);break}}if(null==b)throw new w("invalid-url","Invalid URL '"+a+"'.");return b};var Qa=function(a,b,c){r(a)||y(b)||y(c)?(this.next=a,this.error=b||null,this.a=c||null):(this.next=a.next||null,this.error=a.error||null,this.a=a.complete||null)};var Ra=function(a){var b=encodeURIComponent,c="?";ra(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var A=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=A.prototype;k.qa=function(){return this.b};k.La=function(){return this.h};k.Ia=function(){return this.f};k.Da=function(){return this.a};k.sa=function(){if(y(this.a)){var a=this.a.downloadURLs;return y(a)&&y(a[0])?a[0]:null}return null};k.Ka=function(){return this.g};k.Ga=function(){return this.c};var Sa=function(a,b){b.unshift(a);za.call(this,Ka.apply(null,b));b.shift()};u(Sa,za);Sa.prototype.name="AssertionError";
var Ta=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new Sa(""+e,f||[]);},C=function(a,b,c){a||Ta("",null,b,Array.prototype.slice.call(arguments,2))},Ua=function(a,b){throw new Sa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Wa=function(a,b,c){r(a)||Ta("Expected function but got %s: %s.",[p(a),a],b,Array.prototype.slice.call(arguments,2))};var D=function(){this.g=this.g;this.s=this.s};D.prototype.g=!1;D.prototype.fa=function(){this.g||(this.g=!0,this.A())};D.prototype.A=function(){if(this.s)for(;this.s.length;)this.s.shift()()};var Xa="closure_listenable_"+(1E6*Math.random()|0),Ya=0;var Za;a:{var $a=m.navigator;if($a){var ab=$a.userAgent;if(ab){Za=ab;break a}}Za=""}var E=function(a){return-1!=Za.indexOf(a)};var bb=function(){};bb.prototype.a=null;var db=function(a){var b;(b=a.a)||(b={},cb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var eb=Array.prototype.indexOf?function(a,b,c){C(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){C(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,
b,c){C(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(e[f++]=l)}return e},hb=Array.prototype.map?function(a,b,c){C(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},ib=Array.prototype.some?function(a,b,c){C(null!=a.length);return Array.prototype.some.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},kb=function(a){var b;a:{b=jb;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]},lb=function(a){if("array"!=p(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},mb=function(a,b){b=eb(a,b);var c;if(c=0<=b)C(null!=a.length),Array.prototype.splice.call(a,b,1);return c},nb=function(a){var b=
a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var pb=new xa(function(){return new ob},function(a){a.reset()},100),rb=function(){var a=qb,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},ob=function(){this.next=this.b=this.a=null};ob.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};ob.prototype.reset=function(){this.next=this.b=this.a=null};var sb=function(a,b){this.type=a;this.a=this.target=b;this.ka=!0};sb.prototype.b=function(){this.ka=!1};var tb=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.U=!!d;this.N=e;++Ya;this.O=this.T=!1},ub=function(a){a.O=!0;a.listener=null;a.a=null;a.src=null;a.N=null};var vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;var wb=function(a,b){b=gb(b.split("/"),function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},xb=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var yb=function(a){this.src=a;this.a={};this.b=0},Ab=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=zb(b,c,e,f);-1<h?(a=b[h],d||(a.T=!1)):(a=new tb(c,a.src,g,!!e,f),a.T=d,b.push(a));return a},Bb=function(a,b){var c=b.type;c in a.a&&mb(a.a[c],b)&&(ub(b),0==a.a[c].length&&(delete a.a[c],a.b--))},zb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.O&&f.listener==b&&f.U==!!c&&f.N==d)return e}return-1};var Cb,Db=function(){};u(Db,bb);var Eb=function(a){return(a=cb(a))?new ActiveXObject(a):new XMLHttpRequest},cb=function(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b};Cb=new Db;var Fb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Fb){if(b=a.D(),a=a.w(),0>=this.o()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Na(b[d],a[d]));break a}}else b=Da(a),a=Ca(a);for(d=0;d<b.length;d++)Gb(this,b[d],a[d])}},Gb=function(a,b,c){var d=a.a;d.push(new Na(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c};k=Fb.prototype;k.w=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
k.D=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};k.clone=function(){return new Fb(this)};k.o=function(){return this.a.length};k.F=function(){return 0==this.a.length};k.clear=function(){lb(this.a)};var Hb=function(){this.b=[];this.a=[]},Ib=function(a){0==a.b.length&&(a.b=a.a,a.b.reverse(),a.a=[]);return a.b.pop()};Hb.prototype.o=function(){return this.b.length+this.a.length};Hb.prototype.F=function(){return 0==this.b.length&&0==this.a.length};Hb.prototype.clear=function(){this.b=[];this.a=[]};Hb.prototype.w=function(){for(var a=[],b=this.b.length-1;0<=b;--b)a.push(this.b[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a};var Jb=function(a){if(a.w&&"function"==typeof a.w)return a.w();if(q(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ca(a)},Kb=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||q(a))fb(a,b,void 0);else{var c;if(a.D&&"function"==typeof a.D)c=a.D();else if(a.w&&"function"==typeof a.w)c=void 0;else if(ca(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Da(a);for(var d=Jb(a),e=d.length,f=0;f<e;f++)b.call(void 0,
d[f],c&&c[f],a)}};var Lb=function(a){m.setTimeout(function(){throw a;},0)},Mb,Nb=function(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.ea;c.ea=null;a()}};return function(a){d.next={ea:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}};var Ob="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},Pb=function(){};Pb.prototype.next=function(){throw Ob;};Pb.prototype.X=function(){return this};var Qb=function(){Fb.call(this)};u(Qb,Fb);var Rb=E("Opera"),F=E("Trident")||E("MSIE"),Tb=E("Edge"),Ub=E("Gecko")&&!(-1!=Za.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Vb=-1!=Za.toLowerCase().indexOf("webkit")&&!E("Edge"),Wb=function(){var a=m.document;return a?a.documentMode:void 0},Xb;
a:{var Yb="",Zb=function(){var a=Za;if(Ub)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Tb)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Vb)return/WebKit\/(\S+)/.exec(a);if(Rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Zb&&(Yb=Zb?Zb[1]:"");if(F){var $b=Wb();if(null!=$b&&$b>parseFloat(Yb)){Xb=String($b);break a}}Xb=Yb}
var ac=Xb,bc={},G=function(a){var b;if(!(b=bc[a])){b=0;for(var c=La(String(ac)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=/(\d*)(\D*)/g,B=/(\d*)(\D*)/g;do{var v=l.exec(g)||["","",""],O=B.exec(h)||["","",""];if(0==v[0].length&&0==O[0].length)break;b=Ma(0==v[1].length?0:parseInt(v[1],10),0==O[1].length?0:parseInt(O[1],10))||Ma(0==v[2].length,0==O[2].length)||Ma(v[2],O[2])}while(0==b)}b=bc[a]=0<=b}return b},cc=m.document,dc=cc&&
F?Wb()||("CSS1Compat"==cc.compatMode?parseInt(ac,10):5):void 0;var hc=function(a,b){ec||fc();gc||(ec(),gc=!0);var c=qb,d=pb.get();d.set(a,b);c.b?c.b.next=d:(C(!c.a),c.a=d);c.b=d},ec,fc=function(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);ec=function(){a.then(ic)}}else ec=function(){var a=ic;!r(m.setImmediate)||m.Window&&m.Window.prototype&&!E("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Mb||(Mb=Nb()),Mb(a)):m.setImmediate(a)}},gc=!1,qb=new function(){this.b=this.a=null},ic=function(){for(var a;a=rb();){try{a.a.call(a.b)}catch(b){Lb(b)}ya(pb,
a)}gc=!1};var jc;(jc=!F)||(jc=9<=Number(dc));var kc=jc,lc=F&&!G("9");!Vb||G("528");Ub&&G("1.9b")||F&&G("8")||Rb&&G("9.5")||Vb&&G("528");Ub&&!G("8")||F&&G("9");var mc=function(a,b){this.b={};this.a=[];this.f=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof mc?(c=a.D(),d=a.w()):(c=Da(a),d=Ca(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};k=mc.prototype;k.o=function(){return this.c};k.w=function(){nc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.D=function(){nc(this);return this.a.concat()};
k.F=function(){return 0==this.c};k.clear=function(){this.b={};this.f=this.c=this.a.length=0};
var oc=function(a,b){return Object.prototype.hasOwnProperty.call(a.b,b)?(delete a.b[b],a.c--,a.f++,a.a.length>2*a.c&&nc(a),!0):!1},nc=function(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};k=mc.prototype;
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.b,a)||(this.c++,this.a.push(a),this.f++);this.b[a]=b};k.forEach=function(a,b){for(var c=this.D(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new mc(this)};
k.X=function(a){nc(this);var b=0,c=this.f,d=this,e=new Pb;e.next=function(){if(c!=d.f)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Ob;var e=d.a[b++];return a?e:d.b[e]};return e};var pc=function(a,b){sb.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&&Ub)try{Ja(b.nodeName)}catch(c){}this.c=a;a.defaultPrevented&&this.b()}};u(pc,sb);pc.prototype.b=function(){pc.G.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,lc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var H=function(a,b){this.a=0;this.i=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){qc(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}qc(c,3,a)})}catch(d){qc(this,3,d)}},rc=function(){this.next=this.f=this.c=this.a=this.b=null;this.g=!1};rc.prototype.reset=function(){this.f=this.c=this.a=this.b=null;this.g=!1};
var sc=new xa(function(){return new rc},function(a){a.reset()},100),tc=function(a,b,c){var d=sc.get();d.a=a;d.c=b;d.f=c;return d},uc=function(a){if(a instanceof H)return a;var b=new H(ba);qc(b,2,a);return b},vc=function(a){return new H(function(b,c){c(a)})};
H.prototype.then=function(a,b,c){null!=a&&Wa(a,"opt_onFulfilled should be a function.");null!=b&&Wa(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return wc(this,r(a)?a:null,r(b)?b:null,c)};Ha(H);H.prototype.l=function(a,b){return wc(this,null,a,b)};
var yc=function(a,b){a.b||2!=a.a&&3!=a.a||xc(a);C(null!=b.a);a.c?a.c.next=b:a.b=b;a.c=b},wc=function(a,b,c,d){var e=tc(null,null,null);e.b=new H(function(a,g){e.a=b?function(c){try{var e=b.call(d,c);a(e)}catch(B){g(B)}}:a;e.c=c?function(b){try{var e=c.call(d,b);a(e)}catch(B){g(B)}}:g});e.b.f=a;yc(a,e);return e.b};H.prototype.s=function(a){C(1==this.a);this.a=0;qc(this,2,a)};H.prototype.m=function(a){C(1==this.a);this.a=0;qc(this,3,a)};
var qc=function(a,b,c){if(0==a.a){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.s,g=a.m;if(e instanceof H)null!=f&&Wa(f,"opt_onFulfilled should be a function."),null!=g&&Wa(g,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),yc(e,tc(f||ba,g||null,a)),d=!0;else if(Ia(e))e.then(f,g,a),d=!0;else{if(da(e))try{var h=e.then;if(r(h)){zc(e,h,f,g,a);d=!0;break a}}catch(l){g.call(a,l);d=!0;break a}d=!1}}d||
(a.i=c,a.a=b,a.f=null,xc(a),3!=b||Ac(a,c))}},zc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(l){h(l)}},xc=function(a){a.h||(a.h=!0,hc(a.j,a))},Bc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);null!=b&&C(null!=b.a);return b};
H.prototype.j=function(){for(var a;a=Bc(this);){var b=this.a,c=this.i;if(3==b&&a.c&&!a.g){var d;for(d=this;d&&d.g;d=d.f)d.g=!1}if(a.b)a.b.f=null,Cc(a,b,c);else try{a.g?a.a.call(a.f):Cc(a,b,c)}catch(e){Dc.call(null,e)}ya(sc,a)}this.h=!1};var Cc=function(a,b,c){2==b?a.a.call(a.f,c):a.c&&a.c.call(a.f,c)},Ac=function(a,b){a.g=!0;hc(function(){a.g&&Dc.call(null,b)})},Dc=Lb;var Fc=function(a){this.a=new mc;if(a){a=Jb(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(Ec(d),d)}}},Ec=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[ea]||(a[ea]=++fa)):b.substr(0,1)+a};k=Fc.prototype;k.o=function(){return this.a.o()};k.clear=function(){this.a.clear()};k.F=function(){return this.a.F()};k.w=function(){return this.a.w()};k.clone=function(){return new Fc(this)};k.X=function(){return this.a.X(!1)};var Gc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);uc(!0).then(function(){a.apply(null,b)})}};var Hc="closure_lm_"+(1E6*Math.random()|0),Ic={},Jc=0,Kc=function(a,b,c,d,e){if("array"==p(b)){for(var f=0;f<b.length;f++)Kc(a,b[f],c,d,e);return null}c=Lc(c);a&&a[Xa]?(Mc(a),a=Ab(a.b,String(b),c,!1,d,e)):a=Nc(a,b,c,!1,d,e);return a},Nc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Oc(a);h||(a[Hc]=h=new yb(a));c=Ab(h,b,c,d,e,f);if(c.a)return c;d=Pc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Qc(b.toString()),
d);else throw Error("addEventListener and attachEvent are unavailable.");Jc++;return c},Pc=function(){var a=Rc,b=kc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Sc=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Sc(a,b[f],c,d,e);else c=Lc(c),a&&a[Xa]?Ab(a.b,String(b),c,!0,d,e):Nc(a,b,c,!0,d,e)},Tc=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Tc(a,b[f],c,d,e);else(c=Lc(c),a&&a[Xa])?(a=a.b,b=String(b).toString(),
b in a.a&&(f=a.a[b],c=zb(f,c,d,e),-1<c&&(ub(f[c]),C(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Oc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=zb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Uc(c))},Uc=function(a){if("number"!=typeof a&&a&&!a.O){var b=a.src;if(b&&b[Xa])Bb(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.U):b.detachEvent&&b.detachEvent(Qc(c),d);Jc--;(c=Oc(b))?(Bb(c,a),0==c.b&&(c.src=null,b[Hc]=null)):ub(a)}}},Qc=function(a){return a in
Ic?Ic[a]:Ic[a]="on"+a},Wc=function(a,b,c,d){var e=!0;if(a=Oc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.U==c&&!f.O&&(f=Vc(f,d),e=e&&!1!==f)}return e},Vc=function(a,b){var c=a.listener,d=a.N||a.src;a.T&&Uc(a);return c.call(d,b)},Rc=function(a,b){if(a.O)return!0;if(!kc){if(!b)a:{b=["window","event"];for(var c=m,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new pc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=
-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=Wc(d[e],a,!0,b),c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=Wc(d[e],a,!1,b),c=c&&f}return c}return Vc(a,new pc(b,this))},Oc=function(a){a=a[Hc];return a instanceof yb?a:null},Xc="__closure_events_fn_"+(1E9*Math.random()>>>0),Lc=function(a){C(a,"Listener can not be null.");if(r(a))return a;C(a.handleEvent,"An object listener must have handleEvent method.");
a[Xc]||(a[Xc]=function(b){return a.handleEvent(b)});return a[Xc]};var I=function(a,b){D.call(this);this.l=a||0;this.c=b||10;if(this.l>this.c)throw Error("[goog.structs.Pool] Min can not be greater than max");this.a=new Hb;this.b=new Fc;this.i=null;this.S()};u(I,D);I.prototype.W=function(){var a=ia();if(!(null!=this.i&&0>a-this.i)){for(var b;0<this.a.o()&&(b=Ib(this.a),!this.j(b));)this.S();!b&&this.o()<this.c&&(b=this.h());b&&(this.i=a,this.b.a.set(Ec(b),b));return b}};var Zc=function(a){var b=Yc;oc(b.b.a,Ec(a))&&b.Y(a)};
I.prototype.Y=function(a){oc(this.b.a,Ec(a));this.j(a)&&this.o()<this.c?this.a.a.push(a):$c(a)};I.prototype.S=function(){for(var a=this.a;this.o()<this.l;){var b=this.h();a.a.push(b)}for(;this.o()>this.c&&0<this.a.o();)$c(Ib(a))};I.prototype.h=function(){return{}};var $c=function(a){if("function"==typeof a.fa)a.fa();else for(var b in a)a[b]=null};I.prototype.j=function(a){return"function"==typeof a.ra?a.ra():!0};I.prototype.o=function(){return this.a.o()+this.b.o()};
I.prototype.F=function(){return this.a.F()&&this.b.F()};I.prototype.A=function(){I.G.A.call(this);if(0<this.b.o())throw Error("[goog.structs.Pool] Objects not released");delete this.b;for(var a=this.a;!a.F();)$c(Ib(a));delete this.a};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var ad=function(a,b){this.c=[];this.m=b||null;this.a=this.h=!1;this.b=void 0;this.j=this.g=!1;this.f=0;this.i=null;this.s=0};ad.prototype.l=function(a,b){this.g=!1;this.h=!0;this.b=b;this.a=!a;bd(this)};var cd=function(a,b,c){C(!a.j,"Blocking Deferreds can not be re-used");a.c.push([b,c,void 0]);a.h&&bd(a)};ad.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});cd(this,d,function(a){e(a)});return f.then(a,b,c)};Ha(ad);
var dd=function(a){return ib(a.c,function(a){return r(a[1])})},bd=function(a){if(a.f&&a.h&&dd(a)){var b=a.f,c=ed[b];c&&(m.clearTimeout(c.a),delete ed[b]);a.f=0}a.i&&(a.i.s--,delete a.i);for(var b=a.b,d=c=!1;a.c.length&&!a.g;){var e=a.c.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.m,b);n(h)&&(a.a=a.a&&(h==b||h instanceof Error),a.b=b=h);if(Ia(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.g=!0}catch(l){b=l,a.a=!0,dd(a)||(c=!0)}}a.b=b;d&&(h=t(a.l,a,!0),d=t(a.l,a,
!1),b instanceof ad?(cd(b,h,d),b.j=!0):b.then(h,d));c&&(b=new fd(b),ed[b.a]=b,a.f=b.a)},fd=function(a){this.a=m.setTimeout(t(this.c,this),0);this.b=a};fd.prototype.c=function(){C(ed[this.a],"Cannot throw an error that is not scheduled.");delete ed[this.a];throw this.b;};var ed={};var gd=function(a){this.f=a;this.b=this.c=this.a=null},hd=function(a,b){this.name=a;this.value=b};hd.prototype.toString=function(){return this.name};var id=new hd("SEVERE",1E3),jd=new hd("CONFIG",700),kd=new hd("FINE",500),ld=function(a){if(a.c)return a.c;if(a.a)return ld(a.a);Ua("Root logger has no level set.");return null};
gd.prototype.log=function(a,b,c){if(a.value>=ld(this).value)for(r(b)&&(b=b()),a=new Aa(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;)c=c.a};
var md={},nd=null,od=function(a){nd||(nd=new gd(""),md[""]=nd,nd.c=jd);var b;if(!(b=md[a])){b=new gd(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=od(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;md[a]=b}return b};var J=function(){D.call(this);this.b=new yb(this);this.ma=this;this.I=null};u(J,D);J.prototype[Xa]=!0;J.prototype.removeEventListener=function(a,b,c,d){Tc(this,a,b,c,d)};
var K=function(a,b){Mc(a);var c,d=a.I;if(d){c=[];for(var e=1;d;d=d.I)c.push(d),C(1E3>++e,"infinite loop")}a=a.ma;d=b.type||b;q(b)?b=new sb(b,a):b instanceof sb?b.target=b.target||a:(e=b,b=new sb(d,a),Ga(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.a=c[g],e=pd(f,d,!0,b)&&e;f=b.a=a;e=pd(f,d,!0,b)&&e;e=pd(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.a=c[g],e=pd(f,d,!1,b)&&e};
J.prototype.A=function(){J.G.A.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,ub(d[e]);delete a.a[c];a.b--}}this.I=null};var pd=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.O&&g.U==c){var h=g.listener,l=g.N||g.src;g.T&&Bb(a.b,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.ka},Mc=function(a){C(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var L=function(a,b){this.f=new Qb;I.call(this,a,b)};u(L,I);k=L.prototype;k.W=function(a,b){if(!a)return L.G.W.call(this);Gb(this.f,n(b)?b:100,a);this.$()};k.$=function(){for(var a=this.f;0<a.o();){var b=this.W();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)lb(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e<f>>1;){var h=2*e+1,l=2*e+2,h=l<f&&d[l].a<d[h].a?l:h;if(d[h].a>g.a)break;d[e]=d[h];e=h}d[e]=g}c=c.b}c.apply(this,[b])}else break}};
k.Y=function(a){L.G.Y.call(this,a);this.$()};k.S=function(){L.G.S.call(this);this.$()};k.A=function(){L.G.A.call(this);m.clearTimeout(void 0);this.f.clear();this.f=null};var M=function(a,b){a&&a.log(kd,b,void 0)};var qd=function(a,b,c){if(r(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)};var N=function(a){J.call(this);this.L=new mc;this.C=a||null;this.c=!1;this.B=this.a=null;this.P=this.l="";this.J=0;this.h="";this.f=this.H=this.j=this.K=!1;this.i=0;this.m=null;this.da="";this.v=this.ba=this.Z=!1};u(N,J);var rd=N.prototype,sd=od("goog.net.XhrIo");rd.u=sd;var td=/^https?$/i,ud=["POST","PUT"];
N.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+a);b=b?b.toUpperCase():"GET";this.l=a;this.h="";this.J=0;this.P=b;this.K=!1;this.c=!0;this.a=this.C?Eb(this.C):Eb(Cb);this.B=this.C?db(this.C):db(Cb);this.a.onreadystatechange=t(this.ca,this);this.ba&&"onprogress"in this.a&&(this.a.onprogress=t(function(a){this.R(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=t(this.R,this)));try{M(this.u,P(this,"Opening Xhr")),
this.H=!0,this.a.open(b,String(a),!0),this.H=!1}catch(f){M(this.u,P(this,"Error opening Xhr: "+f.message));vd(this,f);return}a=c||"";var e=this.L.clone();d&&Kb(d,function(a,b){e.set(b,a)});d=kb(e.D());c=m.FormData&&a instanceof m.FormData;!(0<=eb(ud,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.da&&(this.a.responseType=this.da);Ea(this.a)&&(this.a.withCredentials=this.Z);try{wd(this),0<this.i&&(this.v=
xd(this.a),M(this.u,P(this,"Will abort after "+this.i+"ms if incomplete, xhr2 "+this.v)),this.v?(this.a.timeout=this.i,this.a.ontimeout=t(this.M,this)):this.m=qd(this.M,this.i,this)),M(this.u,P(this,"Sending request")),this.j=!0,this.a.send(a),this.j=!1}catch(f){M(this.u,P(this,"Send error: "+f.message)),vd(this,f)}};var xd=function(a){return F&&G(9)&&"number"==typeof a.timeout&&n(a.ontimeout)},jb=function(a){return"content-type"==a.toLowerCase()};
N.prototype.M=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.i+"ms, aborting",this.J=8,M(this.u,P(this,this.h)),K(this,"timeout"),yd(this,8))};var vd=function(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.J=5;zd(a);Ad(a)},zd=function(a){a.K||(a.K=!0,K(a,"complete"),K(a,"error"))},yd=function(a,b){a.a&&a.c&&(M(a.u,P(a,"Aborting")),a.c=!1,a.f=!0,a.a.abort(),a.f=!1,a.J=b||7,K(a,"complete"),K(a,"abort"),Ad(a))};
N.prototype.A=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Ad(this,!0));N.G.A.call(this)};N.prototype.ca=function(){this.g||(this.H||this.j||this.f?Bd(this):this.na())};N.prototype.na=function(){Bd(this)};
var Bd=function(a){if(a.c&&"undefined"!=typeof aa)if(a.B[1]&&4==Dd(a)&&2==Q(a))M(a.u,P(a,"Local request error detected and ignored"));else if(a.j&&4==Dd(a))qd(a.ca,0,a);else if(K(a,"readystatechange"),4==Dd(a)){M(a.u,P(a,"Request complete"));a.c=!1;try{if(Ed(a))K(a,"complete"),K(a,"success");else{a.J=6;var b;try{b=2<Dd(a)?a.a.statusText:""}catch(c){M(a.u,"Can not get status: "+c.message),b=""}a.h=b+" ["+Q(a)+"]";zd(a)}}finally{Ad(a)}}};
N.prototype.R=function(a,b){C("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");K(this,Fd(a,"progress"));K(this,Fd(a,b?"downloadprogress":"uploadprogress"))};
var Fd=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ad=function(a,b){if(a.a){wd(a);var c=a.a,d=a.B[0]?ba:null;a.a=null;a.B=null;b||K(a,"ready");try{c.onreadystatechange=d}catch(e){(a=a.u)&&a.log(id,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},wd=function(a){a.a&&a.v&&(a.a.ontimeout=null);"number"==typeof a.m&&(m.clearTimeout(a.m),a.m=null)},Ed=function(a){var b=Q(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=
!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(vb)[1]||null,!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1)),b=!td.test(a?a.toLowerCase():"");c=b}return c},Dd=function(a){return a.a?a.a.readyState:0},Q=function(a){try{return 2<Dd(a)?a.a.status:-1}catch(b){return-1}},Gd=function(a){try{return a.a?a.a.responseText:""}catch(b){return M(a.u,"Can not get responseText: "+b.message),""}},Hd=function(a,b){return a.a&&4==Dd(a)?a.a.getResponseHeader(b):void 0},
P=function(a,b){return b+" ["+a.P+" "+a.l+" "+Q(a)+"]"};var Id=function(a,b,c,d){this.m=a;this.v=!!d;L.call(this,b,c)};u(Id,L);Id.prototype.h=function(){var a=new N,b=this.m;b&&b.forEach(function(b,d){a.L.set(d,b)});this.v&&(a.Z=!0);return a};Id.prototype.j=function(a){return!a.g&&!a.a};var Yc=new Id;var Kd=function(a,b,c,d,e,f,g,h,l,B){this.L=a;this.H=b;this.B=c;this.m=d;this.I=e.slice();this.s=this.l=this.f=this.c=null;this.h=this.i=!1;this.v=f;this.j=g;this.g=l;this.M=B;this.K=h;var v=this;this.C=new H(function(a,b){v.l=a;v.s=b;Jd(v)})},Ld=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Jd=function(a){function b(a,b){b?a(!1,new Ld(!1,null,!0)):Yc.W(function(b){b.Z=d.M;d.c=b;var c=null;null!==d.g&&(b.ba=!0,c=Kc(b,"uploadprogress",function(a){d.g(a.loaded,a.lengthComputable?a.total:-1)}),b.ba=
null!==d.g);b.send(d.L,d.H,d.m,d.B);Sc(b,"complete",function(b){null!==c&&Uc(c);d.c=null;b=b.target;var f=6===b.J&&100<=Q(b),f=Ed(b)||f,g=Q(b);!f||500<=g&&600>g||429===g?(f=7===b.J,Zc(b),a(!1,new Ld(!1,null,f))):(f=0<=eb(d.I,g),a(!0,new Ld(f,b)))})})}function c(a,b){var c=d.l;a=d.s;var h=b.c;if(b.b)try{var l=d.v(h,Gd(h));n(l)?c(l):c()}catch(B){a(B)}else null!==h?(b=la(),l=Gd(h),b.serverResponse=l,d.j?a(d.j(h,b)):a(b)):(b=b.a?d.h?qa():oa():new w("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),
a(b));Zc(h)}var d=a;a.i?c(0,new Ld(!1,null,!0)):a.f=ja(b,c,a.K)};Kd.prototype.a=function(){return this.C};Kd.prototype.b=function(a){this.i=!0;this.h=a||!1;null!==this.f&&(0,this.f)(!1);null!==this.c&&yd(this.c)};var Md=function(a,b,c){var d=Ra(a.f),d=a.l+d,e=a.b?sa(a.b):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/1.0.0";return new Kd(d,a.i,e,a.c,a.h,a.N,a.a,a.j,a.g,c)};var Nd=function(a){var b=m.BlobBuilder||m.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=nb(arguments);c=m.BlobBuilder||m.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(m.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},Od=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,
c):a.slice?Ub&&!G("13.0")||Vb&&!G("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var Pd=function(a){this.c=vc(a)};Pd.prototype.a=function(){return this.c};Pd.prototype.b=function(){};var Qd=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},Rd=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)};Qd.prototype.clear=function(){ra(this.a,function(a,b){b&&b.b(!0)});this.a={}};var Sd=function(a,b,c,d){this.a=a;this.f=null;null!==this.a&&(a=this.a.options,y(a)?this.f=a.storageBucket||null:this.f=null);this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new Qd;this.g=!1},Td=function(a){return null!==a.a&&y(a.a.INTERNAL)&&y(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return y(a)?a.accessToken:null},function(){return null}):uc(null)};Sd.prototype.bucket=function(){if(this.g)throw qa();return this.f};
var R=function(a,b,c){if(a.g)return new Pd(qa());b=a.j(b,c,null===a.a);Rd(a.h,b);return b};var Ud=function(a,b){return b},S=function(a,b,c,d){this.c=a;this.b=b||a;this.f=!!c;this.a=d||Ud},Vd=null,Wd=function(){if(Vd)return Vd;var a=[];a.push(new S("bucket"));a.push(new S("generation"));a.push(new S("metageneration"));a.push(new S("name","fullPath",!0));var b=new S("name");b.a=function(a,b){return!wa(b)||2>b.length?b:xb(b)};a.push(b);b=new S("size");b.a=function(a,b){return y(b)?+b:b};a.push(b);a.push(new S("timeCreated"));a.push(new S("updated"));a.push(new S("md5Hash",null,!0));a.push(new S("cacheControl",
null,!0));a.push(new S("contentDisposition",null,!0));a.push(new S("contentEncoding",null,!0));a.push(new S("contentLanguage",null,!0));a.push(new S("contentType",null,!0));a.push(new S("metadata","customMetadata",!0));a.push(new S("downloadTokens","downloadURLs",!1,function(a,b){if(!(wa(b)&&0<b.length))return[];var e=encodeURIComponent;return hb(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+e(a.bucket)+"/o/"+e(d));b=Ra({alt:"media",token:b});return d+
b})}));return Vd=a},Xd=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.l(b,new z(a.bucket,a.fullPath))}})},Yd=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.f&&(c[f.c]=a[f.b])}return JSON.stringify(c)},Zd=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new w("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw pa(f,a,g.message);throw pa(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b)};
this.b=!!b},$d=function(a,b){return function(c){a(c);b(c)}},ae=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=$d(c,a):d=c;return new U(d,b)},be=function(){return new U(function(a){if(!(a instanceof Blob))throw"Expected Blob or File.";})},ce=function(){return new U(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},de=function(a,b){return new U(function(b){if(!(null===b||y(b)&&
b instanceof Object))throw"Expected an Object.";y(a)&&a(b)},b)},ee=function(){return new U(function(a){if(null!==a&&!r(a))throw"Expected a Function.";},!0)};var fe=function(a){if(!a)throw la();},ge=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d)}catch(h){c=null;break a}c=da(e)?e:null}if(null===c)c=null;else{d={type:"file"};e=b.length;for(var f=0;f<e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c])}Xd(d,a);c=d}fe(null!==c);return c}},he=function(a){return function(b,c){b=404===Q(b)?new w("object-not-found","Object '"+a.path+"' does not exist."):401===Q(b)?ma():403===Q(b)?na(a.path):c;b.serverResponse=c.serverResponse;return b}},ie=function(a){return function(b,
c){b=401===Q(b)?ma():403===Q(b)?na(a.path):c;b.serverResponse=c.serverResponse;return b}},je=function(a,b,c){var d=Oa(b);a=new x(ka+"/v0"+d,"GET",ge(a,c),a.c);a.a=he(b);return a},ke=function(a,b){var c=Oa(b);a=new x(ka+"/v0"+c,"DELETE",function(){},a.c);a.h=[200,204];a.a=he(b);return a},le=function(a,b,c){c=c?sa(c):{};c.fullPath=a.path;c.size=b.size;c.contentType||(c.contentType=b&&b.type||"application/octet-stream");return c},me=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=
{"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var l=0;2>l;l++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+h;e=le(b,d,e);l=Yd(e,c);d=Nd("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");a=new x(ka+"/v0"+f,"POST",ge(a,c),a.b);a.f={name:e.fullPath};a.b=g;a.c=d;a.a=ie(b);return a},ne=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null},oe=function(a,
b){var c;try{c=Hd(a,"X-Goog-Upload-Status")}catch(d){fe(!1)}a=0<=eb(b||["active"],c);fe(a);return c},pe=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=le(b,d,e);e={name:g.fullPath};f=ka+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.size,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=Yd(g,c);a=new x(f,"POST",function(a){oe(a);var b;try{b=Hd(a,"X-Goog-Upload-URL")}catch(c){fe(!1)}fe(wa(b));
return b},a.b);a.f=e;a.b=d;a.c=c;a.a=ie(b);return a},qe=function(a,b,c,d){a=new x(c,"POST",function(a){var b=oe(a,["active","final"]),c;try{c=Hd(a,"X-Goog-Upload-Size-Received")}catch(h){fe(!1)}a=c;isFinite(a)&&(a=String(a));a=q(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;fe(!isNaN(a));return new ne(a,d.size,"final"===b)},a.b);a.b={"X-Goog-Upload-Command":"query"};a.a=ie(b);return a},re=function(a,b,c,d,e,f){var g=new ne(0,0);f?(g.a=f.a,g.total=f.total):(g.a=0,g.total=d.size);if(d.size!==
g.total)throw new w("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var h=f=g.total-g.a,h=Math.min(h,262144),l=g.a;f={"X-Goog-Upload-Command":h===f?"upload, finalize":"upload","X-Goog-Upload-Offset":g.a};l=Od(d,l,l+h);if(null===l)throw new w("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");c=new x(c,"POST",function(a,c){var f=oe(a,["active","final"]),l=g.a+h,Cd=d.size,Va;"final"===f?Va=ge(b,e)(a,c):Va=null;return new ne(l,
Cd,"final"===f,Va)},b.b);c.b=f;c.c=l;c.g=null;c.a=ie(a);return c};var W=function(a,b,c,d,e,f){this.K=a;this.c=b;this.i=c;this.f=e;this.h=f||null;this.l=d;this.j=0;this.B=this.s=!1;this.v=[];this.R=262144<this.f.size;this.b="running";this.a=this.m=this.g=null;var g=this;this.V=function(a){g.a=null;"storage/canceled"===a.code?(g.s=!0,se(g)):(g.g=a,V(g,"error"))};this.P=function(a){g.a=null;"storage/canceled"===a.code?se(g):(g.g=a,V(g,"error"))};te(this)},te=function(a){"running"===a.b&&null===a.a&&(a.R?null===a.m?ue(a):a.s?ve(a):a.B?we(a):xe(a):ye(a))},ze=function(a,
b){Td(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":V(a,"canceled");break;case "pausing":V(a,"paused")}})},ue=function(a){ze(a,function(b){var c=pe(a.c,a.i,a.l,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.m=b;a.s=!1;se(a)},this.V)})},ve=function(a){var b=a.m;ze(a,function(c){var d=qe(a.c,a.i,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;Ae(a,b.a);a.s=!1;b.b&&(a.B=!0);se(a)},a.V)})},xe=function(a){var b=new ne(a.j,a.f.size),c=a.m;ze(a,function(d){var e;
try{e=re(a.i,a.c,c,a.f,a.l,b)}catch(f){a.g=f;V(a,"error");return}a.a=R(a.c,e,d);a.a.a().then(function(b){a.a=null;Ae(a,b.a);b.b?(a.h=b.c,V(a,"success")):se(a)},a.V)})},we=function(a){ze(a,function(b){var c=je(a.c,a.i,a.l);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,"success")},a.P)})},ye=function(a){ze(a,function(b){var c=me(a.c,a.i,a.l,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;Ae(a,a.f.size);V(a,"success")},a.V)})},Ae=function(a,b){var c=a.j;a.j=b;a.j>c&&Be(a)},
V=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.b();break;case "pausing":a.b=b;null!==a.a&&a.a.b();break;case "running":var c="paused"===a.b;a.b=b;c&&(Be(a),te(a));break;case "paused":a.b=b;Be(a);break;case "canceled":a.g=oa();a.b=b;Be(a);break;case "error":a.b=b;Be(a);break;case "success":a.b=b,Be(a)}},se=function(a){switch(a.b){case "pausing":V(a,"paused");break;case "canceling":V(a,"canceled");break;case "running":te(a)}};
W.prototype.C=function(){return new A(this.j,this.f.size,va(this.b),this.h,this,this.K)};
W.prototype.I=function(a,b,c,d){function e(a){try{g(a);return}catch(b){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(b){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&T("on",a,arguments);var e=new Qa(b,c,d);Ce(l,e);return function(){mb(l.v,e)}}}var g=ee().a,h=de(null,!0).a;T("on",[ae(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";}),de(e,!0),
ee(),ee()],arguments);var l=this,B=[de(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),ee(),ee()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(B)};
var Ce=function(a,b){a.v.push(b);De(a,b)},Be=function(a){var b=nb(a.v);fb(b,function(b){De(a,b)})},De=function(a,b){switch(va(a.b)){case "running":case "paused":null!==b.next&&Gc(b.next.bind(b,a.C()))();break;case "success":null!==b.a&&Gc(b.a.bind(b))();break;case "canceled":case "error":null!==b.error&&Gc(b.error.bind(b,a.g))();break;default:null!==b.error&&Gc(b.error.bind(b,a.g))()}};
W.prototype.M=function(){T("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&V(this,"running");return a};W.prototype.L=function(){T("pause",[],arguments);var a="running"===this.b;a&&V(this,"pausing");return a};W.prototype.H=function(){T("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&V(this,"canceling");return a};var X=function(a,b){this.b=a;if(b)this.a=b instanceof z?b:Pa(b);else if(a=a.bucket(),null!==a)this.a=new z(a,"");else throw new w("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};X.prototype.toString=function(){T("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Ee=function(a,b){return new X(a,b)};k=X.prototype;
k.ga=function(a){T("child",[ae()],arguments);var b=wb(this.a.path,a);return Ee(this.b,new z(this.a.bucket,b))};k.Fa=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Ee(this.b,new z(this.a.bucket,a))};k.Ha=function(){return Ee(this.b,new z(this.a.bucket,""))};k.pa=function(){return this.a.bucket};k.Aa=function(){return this.a.path};k.Ea=function(){return xb(this.a.path)};k.Ja=function(){return this.b.i};
k.ua=function(a,b){T("put",[be(),new U(Zd,!0)],arguments);Fe(this,"put");return new W(this,this.b,this.a,Wd(),a,b)};k.delete=function(){T("delete",[],arguments);Fe(this,"delete");var a=this;return Td(this.b).then(function(b){var c=ke(a.b,a.a);return R(a.b,c,b).a()})};k.ha=function(){T("getMetadata",[],arguments);Fe(this,"getMetadata");var a=this;return Td(this.b).then(function(b){var c=je(a.b,a.a,Wd());return R(a.b,c,b).a()})};
k.va=function(a){T("updateMetadata",[new U(Zd,void 0)],arguments);Fe(this,"updateMetadata");var b=this;return Td(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=Wd(),h=Oa(e),h=ka+"/v0"+h,f=Yd(f,g),d=new x(h,"PATCH",ge(d,g),d.c);d.b={"Content-Type":"application/json; charset=utf-8"};d.c=f;d.a=he(e);return R(b.b,d,c).a()})};
k.ta=function(){T("getDownloadURL",[],arguments);Fe(this,"getDownloadURL");return this.ha().then(function(a){a=a.downloadURLs[0];if(y(a))return a;throw new w("no-download-url","The given file does not have any download URLs.");})};var Fe=function(a,b){if(""===a.a.path)throw new w("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a){this.a=new Sd(a,function(a,c){return new X(a,c)},Md,this);this.b=a;this.c=new Ge(this)};k=Y.prototype;k.wa=function(a){T("ref",[ae(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new X(this.a);return n(a)?b.ga(a):b};
k.xa=function(a){T("refFromURL",[ae(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Pa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new X(this.a,a)};k.Ca=function(){return this.a.b};k.za=function(a){T("setMaxUploadRetryTime",[ce()],arguments);this.a.b=a};k.Ba=function(){return this.a.c};k.ya=function(a){T("setMaxOperationRetryTime",[ce()],arguments);this.a.c=a};k.oa=function(){return this.b};
k.la=function(){return this.c};var Ge=function(a){this.a=a};Ge.prototype.delete=function(){var a=this.a.a;a.g=!0;a.a=null;a.h.clear()};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.ga;X.prototype.put=X.prototype.ua;X.prototype["delete"]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ha;X.prototype.updateMetadata=X.prototype.va;X.prototype.getDownloadURL=X.prototype.ta;Z(X.prototype,"parent",X.prototype.Fa);Z(X.prototype,"root",X.prototype.Ha);Z(X.prototype,"bucket",X.prototype.pa);Z(X.prototype,"fullPath",X.prototype.Aa);
Z(X.prototype,"name",X.prototype.Ea);Z(X.prototype,"storage",X.prototype.Ja);Y.prototype.ref=Y.prototype.wa;Y.prototype.refFromURL=Y.prototype.xa;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.Ba);Y.prototype.setMaxOperationRetryTime=Y.prototype.ya;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.Ca);Y.prototype.setMaxUploadRetryTime=Y.prototype.za;Z(Y.prototype,"app",Y.prototype.oa);Z(Y.prototype,"INTERNAL",Y.prototype.la);Ge.prototype["delete"]=Ge.prototype.delete;
Y.prototype.capi_=function(a){ka=a};W.prototype.on=W.prototype.I;W.prototype.resume=W.prototype.M;W.prototype.pause=W.prototype.L;W.prototype.cancel=W.prototype.H;Z(W.prototype,"snapshot",W.prototype.C);Z(A.prototype,"bytesTransferred",A.prototype.qa);Z(A.prototype,"totalBytes",A.prototype.La);Z(A.prototype,"state",A.prototype.Ia);Z(A.prototype,"metadata",A.prototype.Da);Z(A.prototype,"downloadURL",A.prototype.sa);Z(A.prototype,"task",A.prototype.Ka);Z(A.prototype,"ref",A.prototype.Ga);
ta.STATE_CHANGED="state_changed";ua.RUNNING="running";ua.PAUSED="paused";ua.SUCCESS="success";ua.CANCELED="canceled";ua.ERROR="error";H.prototype["catch"]=H.prototype.l;H.prototype.then=H.prototype.then;
(function(){function a(a){return new Y(a)}var b={TaskState:ua,TaskEvent:ta,Storage:Y,Reference:X};if(window.firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

},{}]},{},[1])


//# sourceMappingURL=main.js.map
