(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="169",Zc=0,Co=1,Jc=2,$l=1,Qc=2,un=3,In=0,At=1,fn=2,Pn=0,bi=1,ea=2,Lo=3,Po=4,ed=5,Xn=100,td=101,nd=102,id=103,sd=104,rd=200,ad=201,od=202,ld=203,ta=204,na=205,cd=206,dd=207,hd=208,ud=209,fd=210,pd=211,md=212,gd=213,_d=214,ia=0,sa=1,ra=2,Ci=3,aa=4,oa=5,la=6,ca=7,eo=0,vd=1,xd=2,Dn=0,Md=1,yd=2,Sd=3,Ed=4,bd=5,Td=6,Ad=7,ql=300,Li=301,Pi=302,da=303,ha=304,lr=306,ua=1e3,qn=1001,fa=1002,Tt=1003,wd=1004,ms=1005,$t=1006,vr=1007,Yn=1008,gn=1009,Yl=1010,Kl=1011,rs=1012,to=1013,Jn=1014,nn=1015,os=1016,no=1017,io=1018,Di=1020,jl=35902,Zl=1021,Jl=1022,Yt=1023,Ql=1024,ec=1025,Ti=1026,Ii=1027,so=1028,ro=1029,tc=1030,ao=1031,oo=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,Ma=37496,ya=37808,Sa=37809,Ea=37810,ba=37811,Ta=37812,Aa=37813,wa=37814,Ra=37815,Ca=37816,La=37817,Pa=37818,Da=37819,Ia=37820,Ua=37821,$s=36492,Na=36494,Fa=36495,nc=36283,Oa=36284,Ba=36285,ka=36286,Rd=3200,Cd=3201,ic=0,Ld=1,Ln="",Qt="srgb",Fn="srgb-linear",lo="display-p3",cr="display-p3-linear",Js="linear",et="srgb",Qs="rec709",er="p3",ni=7680,Do=519,Pd=512,Dd=513,Id=514,sc=515,Ud=516,Nd=517,Fd=518,Od=519,Io=35044,Uo="300 es",pn=2e3,tr=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xr=Math.PI/180,za=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Bd(n,e){return(n%e+e)%e}function Mr(n,e,t){return(1-t)*n+t*e}function zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,i,s,r,o,a,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],m=i[5],v=i[8],M=s[0],f=s[3],h=s[6],T=s[1],S=s[4],E=s[7],N=s[2],w=s[5],A=s[8];return r[0]=o*M+a*T+l*N,r[3]=o*f+a*S+l*w,r[6]=o*h+a*E+l*A,r[1]=c*M+d*T+p*N,r[4]=c*f+d*S+p*w,r[7]=c*h+d*E+p*A,r[2]=u*M+m*T+v*N,r[5]=u*f+m*S+v*w,r[8]=u*h+m*E+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*o-a*c,u=a*l-d*r,m=c*r-o*l,v=t*p+i*u+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(s*c-d*i)*M,e[2]=(a*i-s*o)*M,e[3]=u*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=m*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yr.makeScale(e,t)),this}rotate(e){return this.premultiply(yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new Pe;function rc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){const n=nr("canvas");return n.style.display="block",n}const No={};function qs(n){n in No||(No[n]=!0,console.warn(n))}function zd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Hd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fo=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oo=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[Fn]:{transfer:Js,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Qt]:{transfer:et,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cr]:{transfer:Js,primaries:er,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Oo),fromReference:n=>n.applyMatrix3(Fo)},[lo]:{transfer:et,primaries:er,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Oo),fromReference:n=>n.applyMatrix3(Fo).convertLinearToSRGB()}},Vd=new Set([Fn,cr]),qe={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Vd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hi[e].toReference,s=Hi[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hi[n].primaries},getTransfer:function(n){return n===Ln?Js:Hi[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Hi[e].luminanceCoefficients)}};function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ii;class Wd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=nr("canvas")),ii.width=e.width,ii.height=e.height;const i=ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xd=0;class ac{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Er(s[o].image)):r.push(Er(s[o]))}else r=Er(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Er(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $d=0;class xt extends Fi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,i=qn,s=qn,r=$t,o=Yn,a=Yt,l=gn,c=xt.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ls(),this.name="",this.source=new ac(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=ql;xt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],m=l[5],v=l[9],M=l[2],f=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(m+1)/2,N=(h+1)/2,w=(d+u)/4,A=(p+M)/4,k=(v+f)/4;return S>E&&S>N?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=A/i):E>N?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=k/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=A/r,s=k/r),this.set(i,s,r,t),this}let T=Math.sqrt((f-v)*(f-v)+(p-M)*(p-M)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(f-v)/T,this.y=(p-M)/T,this.z=(u-d)/T,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends Fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ac(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends qd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oc extends xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yd extends xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],p=i[s+3];const u=r[o+0],m=r[o+1],v=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(p!==M||l!==u||c!==m||d!==v){let f=1-a;const h=l*u+c*m+d*v+p*M,T=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const N=Math.sqrt(S),w=Math.atan2(N,h*T);f=Math.sin(f*w)/N,a=Math.sin(a*w)/N}const E=a*T;if(l=l*f+u*E,c=c*f+m*E,d=d*f+v*E,p=p*f+M*E,f===1-a){const N=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=N,c*=N,d*=N,p*=N}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],p=r[o],u=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+d*p+l*m-c*u,e[t+1]=l*v+d*u+c*p-a*m,e[t+2]=c*v+d*m+a*u-l*p,e[t+3]=d*v-a*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),p=a(r/2),u=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=u*d*p+c*m*v,this._y=c*m*p-u*d*v,this._z=c*d*v+u*m*p,this._w=c*d*p-u*m*v;break;case"YXZ":this._x=u*d*p+c*m*v,this._y=c*m*p-u*d*v,this._z=c*d*v-u*m*p,this._w=c*d*p+u*m*v;break;case"ZXY":this._x=u*d*p-c*m*v,this._y=c*m*p+u*d*v,this._z=c*d*v+u*m*p,this._w=c*d*p-u*m*v;break;case"ZYX":this._x=u*d*p-c*m*v,this._y=c*m*p+u*d*v,this._z=c*d*v-u*m*p,this._w=c*d*p+u*m*v;break;case"YZX":this._x=u*d*p+c*m*v,this._y=c*m*p+u*d*v,this._z=c*d*v-u*m*p,this._w=c*d*p-u*m*v;break;case"XZY":this._x=u*d*p-c*m*v,this._y=c*m*p-u*d*v,this._z=c*d*v+u*m*p,this._w=c*d*p+u*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=i+a+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*p+this._w*u,this._x=i*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),p=2*(r*i-o*t);return this.x=t+l*c+o*p-a*d,this.y=i+l*d+a*c-r*p,this.z=s+l*p+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new F,Bo=new cs;class ei{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vt):Vt.fromBufferAttribute(r,o),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),_s.subVectors(this.max,Gi),si.subVectors(e.a,Gi),ri.subVectors(e.b,Gi),ai.subVectors(e.c,Gi),xn.subVectors(ri,si),Mn.subVectors(ai,ri),Bn.subVectors(si,ai);let t=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Bn.z,Bn.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Bn.z,0,-Bn.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Bn.y,Bn.x,0];return!Tr(t,si,ri,ai,_s)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,si,ri,ai,_s))?!1:(vs.crossVectors(xn,Mn),t=[vs.x,vs.y,vs.z],Tr(t,si,ri,ai,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new F,new F,new F,new F,new F,new F,new F,new F],Vt=new F,gs=new ei,si=new F,ri=new F,ai=new F,xn=new F,Mn=new F,Bn=new F,Gi=new F,_s=new F,vs=new F,kn=new F;function Tr(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){kn.fromArray(n,r);const a=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),d=i.dot(kn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Kd=new ei,Vi=new F,Ar=new F;class Oi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Ar)),this.expandByPoint(Vi.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new F,wr=new F,xs=new F,yn=new F,Rr=new F,Ms=new F,Cr=new F;class co{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wr.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(wr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(xs),a=yn.dot(this.direction),l=-yn.dot(xs),c=yn.lengthSq(),d=Math.abs(1-o*o);let p,u,m,v;if(d>0)if(p=o*l-a,u=o*a-l,v=r*d,p>=0)if(u>=-v)if(u<=v){const M=1/d;p*=M,u*=M,m=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(wr).addScaledVector(xs,u),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),s=ln.dot(ln)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,s,r){Rr.subVectors(t,e),Ms.subVectors(i,e),Cr.crossVectors(Rr,Ms);let o=this.direction.dot(Cr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=a*this.direction.dot(Ms.crossVectors(yn,Ms));if(l<0)return null;const c=a*this.direction.dot(Rr.cross(yn));if(c<0||l+c>o)return null;const d=-a*yn.dot(Cr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,o,a,l,c,d,p,u,m,v,M,f){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,p,u,m,v,M,f)}set(e,t,i,s,r,o,a,l,c,d,p,u,m,v,M,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=m,h[7]=v,h[11]=M,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=o*d,m=o*p,v=a*d,M=a*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+v*c,t[5]=u-M*c,t[9]=-a*l,t[2]=M-u*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,m=l*p,v=c*d,M=c*p;t[0]=u+M*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*d,t[9]=-a,t[2]=m*a-v,t[6]=M+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,m=l*p,v=c*d,M=c*p;t[0]=u-M*a,t[4]=-o*p,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*d,t[9]=M-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,m=o*p,v=a*d,M=a*p;t[0]=l*d,t[4]=v*c-m,t[8]=u*c+M,t[1]=l*p,t[5]=M*c+u,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*d,t[4]=M-u*p,t[8]=v*p+m,t[1]=p,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*p+v,t[10]=u-M*p}else if(e.order==="XZY"){const u=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+M,t[5]=o*d,t[9]=m*p-v,t[2]=v*p-m,t[6]=a*d,t[10]=M*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Zd)}lookAt(e,t,i){const s=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Sn.crossVectors(i,Lt),Sn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Sn.crossVectors(i,Lt)),Sn.normalize(),ys.crossVectors(Lt,Sn),s[0]=Sn.x,s[4]=ys.x,s[8]=Lt.x,s[1]=Sn.y,s[5]=ys.y,s[9]=Lt.y,s[2]=Sn.z,s[6]=ys.z,s[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],m=i[13],v=i[2],M=i[6],f=i[10],h=i[14],T=i[3],S=i[7],E=i[11],N=i[15],w=s[0],A=s[4],k=s[8],D=s[12],g=s[1],_=s[5],C=s[9],O=s[13],V=s[2],j=s[6],G=s[10],J=s[14],W=s[3],se=s[7],re=s[11],ce=s[15];return r[0]=o*w+a*g+l*V+c*W,r[4]=o*A+a*_+l*j+c*se,r[8]=o*k+a*C+l*G+c*re,r[12]=o*D+a*O+l*J+c*ce,r[1]=d*w+p*g+u*V+m*W,r[5]=d*A+p*_+u*j+m*se,r[9]=d*k+p*C+u*G+m*re,r[13]=d*D+p*O+u*J+m*ce,r[2]=v*w+M*g+f*V+h*W,r[6]=v*A+M*_+f*j+h*se,r[10]=v*k+M*C+f*G+h*re,r[14]=v*D+M*O+f*J+h*ce,r[3]=T*w+S*g+E*V+N*W,r[7]=T*A+S*_+E*j+N*se,r[11]=T*k+S*C+E*G+N*re,r[15]=T*D+S*O+E*J+N*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],m=e[14],v=e[3],M=e[7],f=e[11],h=e[15];return v*(+r*l*p-s*c*p-r*a*u+i*c*u+s*a*m-i*l*m)+M*(+t*l*m-t*c*u+r*o*u-s*o*m+s*c*d-r*l*d)+f*(+t*c*p-t*a*m-r*o*p+i*o*m+r*a*d-i*c*d)+h*(-s*a*d-t*l*p+t*a*u+s*o*p-i*o*u+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],m=e[11],v=e[12],M=e[13],f=e[14],h=e[15],T=p*f*c-M*u*c+M*l*m-a*f*m-p*l*h+a*u*h,S=v*u*c-d*f*c-v*l*m+o*f*m+d*l*h-o*u*h,E=d*M*c-v*p*c+v*a*m-o*M*m-d*a*h+o*p*h,N=v*p*l-d*M*l-v*a*u+o*M*u+d*a*f-o*p*f,w=t*T+i*S+s*E+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=T*A,e[1]=(M*u*r-p*f*r-M*s*m+i*f*m+p*s*h-i*u*h)*A,e[2]=(a*f*r-M*l*r+M*s*c-i*f*c-a*s*h+i*l*h)*A,e[3]=(p*l*r-a*u*r-p*s*c+i*u*c+a*s*m-i*l*m)*A,e[4]=S*A,e[5]=(d*f*r-v*u*r+v*s*m-t*f*m-d*s*h+t*u*h)*A,e[6]=(v*l*r-o*f*r-v*s*c+t*f*c+o*s*h-t*l*h)*A,e[7]=(o*u*r-d*l*r+d*s*c-t*u*c-o*s*m+t*l*m)*A,e[8]=E*A,e[9]=(v*p*r-d*M*r-v*i*m+t*M*m+d*i*h-t*p*h)*A,e[10]=(o*M*r-v*a*r+v*i*c-t*M*c-o*i*h+t*a*h)*A,e[11]=(d*a*r-o*p*r-d*i*c+t*p*c+o*i*m-t*a*m)*A,e[12]=N*A,e[13]=(d*M*s-v*p*s+v*i*u-t*M*u-d*i*f+t*p*f)*A,e[14]=(v*a*s-o*M*s-v*i*l+t*M*l+o*i*f-t*a*f)*A,e[15]=(o*p*s-d*a*s+d*i*l-t*p*l-o*i*u+t*a*u)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,p=a+a,u=r*c,m=r*d,v=r*p,M=o*d,f=o*p,h=a*p,T=l*c,S=l*d,E=l*p,N=i.x,w=i.y,A=i.z;return s[0]=(1-(M+h))*N,s[1]=(m+E)*N,s[2]=(v-S)*N,s[3]=0,s[4]=(m-E)*w,s[5]=(1-(u+h))*w,s[6]=(f+T)*w,s[7]=0,s[8]=(v+S)*A,s[9]=(f-T)*A,s[10]=(1-(u+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wt.copy(this);const c=1/r,d=1/o,p=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=d,Wt.elements[5]*=d,Wt.elements[6]*=d,Wt.elements[8]*=p,Wt.elements[9]*=p,Wt.elements[10]*=p,t.setFromRotationMatrix(Wt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=pn){const l=this.elements,c=2*r/(t-e),d=2*r/(i-s),p=(t+e)/(t-e),u=(i+s)/(i-s);let m,v;if(a===pn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===tr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=pn){const l=this.elements,c=1/(t-e),d=1/(i-s),p=1/(o-r),u=(t+e)*c,m=(i+s)*d;let v,M;if(a===pn)v=(o+r)*p,M=-2*p;else if(a===tr)v=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oi=new F,Wt=new je,jd=new F(0,0,0),Zd=new F(1,1,1),Sn=new F,ys=new F,Lt=new F,ko=new je,zo=new cs;class sn{constructor(e=0,t=0,i=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jd=0;const Ho=new F,li=new cs,cn=new je,Ss=new F,Wi=new F,Qd=new F,eh=new cs,Go=new F(1,0,0),Vo=new F(0,1,0),Wo=new F(0,0,1),Xo={type:"added"},th={type:"removed"},ci={type:"childadded",child:null},Lr={type:"childremoved",child:null};class ht extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new F,t=new sn,i=new cs,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Pe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Go,e)}rotateY(e){return this.rotateOnAxis(Vo,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return Ho.copy(e).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Go,e)}translateY(e){return this.translateOnAxis(Vo,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ss.copy(e):Ss.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Wi,Ss,this.up):cn.lookAt(Ss,Wi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(cn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(th),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,Qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),u=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ht.DEFAULT_UP=new F(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new F,dn=new F,Pr=new F,hn=new F,di=new F,hi=new F,$o=new F,Dr=new F,Ir=new F,Ur=new F,Nr=new it,Fr=new it,Or=new it;class qt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xt.subVectors(e,t),s.cross(Xt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xt.subVectors(s,t),dn.subVectors(i,t),Pr.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(dn),l=Xt.dot(Pr),c=dn.dot(dn),d=dn.dot(Pr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(c*l-a*d)*u,v=(o*d-a*l)*u;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Nr.setScalar(0),Fr.setScalar(0),Or.setScalar(0),Nr.fromBufferAttribute(e,t),Fr.fromBufferAttribute(e,i),Or.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nr,r.x),o.addScaledVector(Fr,r.y),o.addScaledVector(Or,r.z),o}static isFrontFacing(e,t,i,s){return Xt.subVectors(i,t),dn.subVectors(e,t),Xt.cross(dn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Xt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;di.subVectors(s,i),hi.subVectors(r,i),Dr.subVectors(e,i);const l=di.dot(Dr),c=hi.dot(Dr);if(l<=0&&c<=0)return t.copy(i);Ir.subVectors(e,s);const d=di.dot(Ir),p=hi.dot(Ir);if(d>=0&&p<=d)return t.copy(s);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(di,o);Ur.subVectors(e,r);const m=di.dot(Ur),v=hi.dot(Ur);if(v>=0&&m<=v)return t.copy(r);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(hi,a);const f=d*v-m*p;if(f<=0&&p-d>=0&&m-v>=0)return $o.subVectors(r,s),a=(p-d)/(p-d+(m-v)),t.copy(s).addScaledVector($o,a);const h=1/(f+M+u);return o=M*h,a=u*h,t.copy(i).addScaledVector(di,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Br(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=qe.workingColorSpace){if(e=Bd(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Br(o,r,e+1/3),this.g=Br(o,r,e),this.b=Br(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=lc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return qe.fromWorkingColorSpace(mt.copy(this),e),Math.round(bt(mt.r*255,0,255))*65536+Math.round(bt(mt.g*255,0,255))*256+Math.round(bt(mt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(mt.copy(this),t);const i=mt.r,s=mt.g,r=mt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Qt){qe.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,i=mt.g,s=mt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Es);const i=Mr(En.h,Es.h,t),s=Mr(En.s,Es.s,t),r=Mr(En.l,Es.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ne;Ne.NAMES=lc;let nh=0;class Bi extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=bi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==na&&(i.blendDst=this.blendDst),this.blendEquation!==Xn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cc extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new F,bs=new We;class It{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Io,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Io&&(e.usage=this.usage),e}}class dc extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hc extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ih=0;const Nt=new je,kr=new ht,ui=new F,Pt=new ei,Xi=new ei,dt=new F;class rn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rc(e)?hc:dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Pe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Pt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Pt.min,Xi.min),Pt.expandByPoint(dt),dt.addVectors(Pt.max,Xi.max),Pt.expandByPoint(dt)):(Pt.expandByPoint(Xi.min),Pt.expandByPoint(Xi.max))}Pt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)dt.fromBufferAttribute(a,c),l&&(ui.fromBufferAttribute(e,c),dt.add(ui)),s=Math.max(s,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new F,l[k]=new F;const c=new F,d=new F,p=new F,u=new We,m=new We,v=new We,M=new F,f=new F;function h(k,D,g){c.fromBufferAttribute(i,k),d.fromBufferAttribute(i,D),p.fromBufferAttribute(i,g),u.fromBufferAttribute(r,k),m.fromBufferAttribute(r,D),v.fromBufferAttribute(r,g),d.sub(c),p.sub(c),m.sub(u),v.sub(u);const _=1/(m.x*v.y-v.x*m.y);isFinite(_)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(_),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(_),a[k].add(M),a[D].add(M),a[g].add(M),l[k].add(f),l[D].add(f),l[g].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let k=0,D=T.length;k<D;++k){const g=T[k],_=g.start,C=g.count;for(let O=_,V=_+C;O<V;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new F,E=new F,N=new F,w=new F;function A(k){N.fromBufferAttribute(s,k),w.copy(N);const D=a[k];S.copy(D),S.sub(N.multiplyScalar(N.dot(D))).normalize(),E.crossVectors(w,D);const _=E.dot(l[k])<0?-1:1;o.setXYZW(k,S.x,S.y,S.z,_)}for(let k=0,D=T.length;k<D;++k){const g=T[k],_=g.start,C=g.count;for(let O=_,V=_+C;O<V;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,p=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),M=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,f),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,f),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,p=a.normalized,u=new c.constructor(l.length*d);let m=0,v=0;for(let M=0,f=l.length;M<f;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*d;for(let h=0;h<d;h++)u[v++]=c[m++]}return new It(u,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,p=c.length;d<p;d++){const u=c[d],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],p=r[c];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new je,zn=new co,Ts=new Oi,Yo=new F,As=new F,ws=new F,Rs=new F,zr=new F,Cs=new F,Ko=new F,Ls=new F;class Kt extends ht{constructor(e=new rn,t=new cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],p=r[l];d!==0&&(zr.fromBufferAttribute(p,e),o?Cs.addScaledVector(zr,d):Cs.addScaledVector(zr.sub(t),d))}t.add(Cs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(Ts.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ts,Yo)===null||zn.origin.distanceToSquared(Yo)>(e.far-e.near)**2))&&(qo.copy(r).invert(),zn.copy(e.ray).applyMatrix4(qo),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=u.length;v<M;v++){const f=u[v],h=o[f.materialIndex],T=Math.max(f.start,m.start),S=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let E=T,N=S;E<N;E+=3){const w=a.getX(E),A=a.getX(E+1),k=a.getX(E+2);s=Ps(this,h,e,i,c,d,p,w,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let f=v,h=M;f<h;f+=3){const T=a.getX(f),S=a.getX(f+1),E=a.getX(f+2);s=Ps(this,o,e,i,c,d,p,T,S,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=u.length;v<M;v++){const f=u[v],h=o[f.materialIndex],T=Math.max(f.start,m.start),S=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let E=T,N=S;E<N;E+=3){const w=E,A=E+1,k=E+2;s=Ps(this,h,e,i,c,d,p,w,A,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let f=v,h=M;f<h;f+=3){const T=f,S=f+1,E=f+2;s=Ps(this,o,e,i,c,d,p,T,S,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function sh(n,e,t,i,s,r,o,a){let l;if(e.side===At?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===In,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:n}}function Ps(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,As),n.getVertexPosition(l,ws),n.getVertexPosition(c,Rs);const d=sh(n,e,t,i,As,ws,Rs,Ko);if(d){const p=new F;qt.getBarycoord(Ko,As,ws,Rs,p),s&&(d.uv=qt.getInterpolatedAttribute(s,a,l,c,p,new We)),r&&(d.uv1=qt.getInterpolatedAttribute(r,a,l,c,p,new We)),o&&(d.normal=qt.getInterpolatedAttribute(o,a,l,c,p,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};qt.getNormal(As,ws,Rs,u.normal),d.face=u,d.barycoord=p}return d}class ds extends rn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],p=[];let u=0,m=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(p,2));function v(M,f,h,T,S,E,N,w,A,k,D){const g=E/A,_=N/k,C=E/2,O=N/2,V=w/2,j=A+1,G=k+1;let J=0,W=0;const se=new F;for(let re=0;re<G;re++){const ce=re*_-O;for(let De=0;De<j;De++){const He=De*g-C;se[M]=He*T,se[f]=ce*S,se[h]=V,c.push(se.x,se.y,se.z),se[M]=0,se[f]=0,se[h]=w>0?1:-1,d.push(se.x,se.y,se.z),p.push(De/A),p.push(1-re/k),J+=1}}for(let re=0;re<k;re++)for(let ce=0;ce<A;ce++){const De=u+ce+j*re,He=u+ce+j*(re+1),U=u+(ce+1)+j*(re+1),$=u+(ce+1)+j*re;l.push(De,He,$),l.push(He,U,$),W+=6}a.addGroup(m,W,D),m+=W,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vt(n){const e={};for(let t=0;t<n.length;t++){const i=Ui(n[t]);for(const s in i)e[s]=i[s]}return e}function rh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const ah={clone:Ui,merge:vt};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fc extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new F,jo=new We,Zo=new We;class Bt extends fc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,jo,Zo),t.subVectors(Zo,jo)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class ch extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(fi,pi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(fi,pi,e,t);r.layers=this.layers,this.add(r);const o=new Bt(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new Bt(fi,pi,e,t);a.layers=this.layers,this.add(a);const l=new Bt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new Bt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(p,u,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class pc extends xt{constructor(e,t,i,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dh extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ds(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:Pn});r.uniforms.tEquirect.value=t;const o=new Kt(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=$t),new ch(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Hr=new F,hh=new F,uh=new Pe;class An{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Hr.subVectors(i,t).cross(hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uh.getNormalMatrix(e),s=this.coplanarPoint(Hr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Oi,Ds=new F;class uo{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,o=new An){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],p=s[6],u=s[7],m=s[8],v=s[9],M=s[10],f=s[11],h=s[12],T=s[13],S=s[14],E=s[15];if(i[0].setComponents(l-r,u-c,f-m,E-h).normalize(),i[1].setComponents(l+r,u+c,f+m,E+h).normalize(),i[2].setComponents(l+o,u+d,f+v,E+T).normalize(),i[3].setComponents(l-o,u-d,f-v,E-T).normalize(),i[4].setComponents(l-a,u-p,f-M,E-S).normalize(),t===pn)i[5].setComponents(l+a,u+p,f+M,E+S).normalize();else if(t===tr)i[5].setComponents(a,p,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ds.x=s.normal.x>0?e.max.x:e.min.x,Ds.y=s.normal.y>0?e.max.y:e.min.y,Ds.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fh(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const d=l.array,p=l.updateRanges;if(n.bindBuffer(c,a),p.length===0)n.bufferSubData(c,0,d);else{p.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<p.length;m++){const v=p[u],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class dr extends rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,p=e/a,u=t/l,m=[],v=[],M=[],f=[];for(let h=0;h<d;h++){const T=h*u-o;for(let S=0;S<c;S++){const E=S*p-r;v.push(E,-T,0),M.push(0,0,1),f.push(S/a),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const S=T+c*h,E=T+c*(h+1),N=T+1+c*(h+1),w=T+1+c*h;m.push(S,E,w),m.push(E,N,w)}this.setIndex(m),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ef=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,If=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:vh,alphatest_pars_fragment:xh,aomap_fragment:Mh,aomap_pars_fragment:yh,batching_pars_vertex:Sh,batching_vertex:Eh,begin_vertex:bh,beginnormal_vertex:Th,bsdfs:Ah,iridescence_fragment:wh,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Dh,color_fragment:Ih,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:kh,displacementmap_pars_vertex:zh,displacementmap_vertex:Hh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Vh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:$h,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:au,envmap_vertex:jh,fog_vertex:Zh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:eu,gradientmap_pars_fragment:tu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:ru,lights_toon_fragment:ou,lights_toon_pars_fragment:lu,lights_phong_fragment:cu,lights_phong_pars_fragment:du,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:xu,map_fragment:Mu,map_pars_fragment:yu,map_particle_fragment:Su,map_particle_pars_fragment:Eu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:Au,morphcolor_vertex:wu,morphnormal_vertex:Ru,morphtarget_pars_vertex:Cu,morphtarget_vertex:Lu,normal_fragment_begin:Pu,normal_fragment_maps:Du,normal_pars_fragment:Iu,normal_pars_vertex:Uu,normal_vertex:Nu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:ku,iridescence_pars_fragment:zu,opaque_fragment:Hu,packing:Gu,premultiplied_alpha_fragment:Vu,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:$u,roughnessmap_fragment:qu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:ju,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:ef,skinning_vertex:tf,skinnormal_vertex:nf,specularmap_fragment:sf,specularmap_pars_fragment:rf,tonemapping_fragment:af,tonemapping_pars_fragment:of,transmission_fragment:lf,transmission_pars_fragment:cf,uv_pars_fragment:df,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:ff,background_vert:pf,background_frag:mf,backgroundCube_vert:gf,backgroundCube_frag:_f,cube_vert:vf,cube_frag:xf,depth_vert:Mf,depth_frag:yf,distanceRGBA_vert:Sf,distanceRGBA_frag:Ef,equirect_vert:bf,equirect_frag:Tf,linedashed_vert:Af,linedashed_frag:wf,meshbasic_vert:Rf,meshbasic_frag:Cf,meshlambert_vert:Lf,meshlambert_frag:Pf,meshmatcap_vert:Df,meshmatcap_frag:If,meshnormal_vert:Uf,meshnormal_frag:Nf,meshphong_vert:Ff,meshphong_frag:Of,meshphysical_vert:Bf,meshphysical_frag:kf,meshtoon_vert:zf,meshtoon_frag:Hf,points_vert:Gf,points_frag:Vf,shadow_vert:Wf,shadow_frag:Xf,sprite_vert:$f,sprite_frag:qf},ne={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},en={basic:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:vt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:vt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:vt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:vt([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:vt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:vt([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:vt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:vt([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:vt([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:vt([ne.lights,ne.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};en.physical={uniforms:vt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Is={r:0,b:0,g:0},Gn=new sn,Yf=new je;function Kf(n,e,t,i,s,r,o){const a=new Ne(0);let l=r===!0?0:1,c,d,p=null,u=0,m=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function M(T){let S=!1;const E=v(T);E===null?h(a,l):E&&E.isColor&&(h(E,1),S=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(T,S){const E=v(S);E&&(E.isCubeTexture||E.mapping===lr)?(d===void 0&&(d=new Kt(new ds(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ui(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Gn.copy(S.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(Gn)),d.material.toneMapped=qe.getTransfer(E.colorSpace)!==et,(p!==E||u!==E.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=E,u=E.version,m=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Kt(new dr(2,2),new Un({name:"BackgroundMaterial",uniforms:Ui(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qe.getTransfer(E.colorSpace)!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||u!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=E,u=E.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,S){T.getRGB(Is,uc(n)),i.buffers.color.setClear(Is.r,Is.g,Is.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(a,l)},render:M,addToRenderList:f}}function jf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(g,_,C,O,V){let j=!1;const G=p(O,C,_);r!==G&&(r=G,c(r.object)),j=m(g,O,C,V),j&&v(g,O,C,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,E(g,_,C,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(g){return n.bindVertexArray(g)}function d(g){return n.deleteVertexArray(g)}function p(g,_,C){const O=C.wireframe===!0;let V=i[g.id];V===void 0&&(V={},i[g.id]=V);let j=V[_.id];j===void 0&&(j={},V[_.id]=j);let G=j[O];return G===void 0&&(G=u(l()),j[O]=G),G}function u(g){const _=[],C=[],O=[];for(let V=0;V<t;V++)_[V]=0,C[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:C,attributeDivisors:O,object:g,attributes:{},index:null}}function m(g,_,C,O){const V=r.attributes,j=_.attributes;let G=0;const J=C.getAttributes();for(const W in J)if(J[W].location>=0){const re=V[W];let ce=j[W];if(ce===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(ce=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(ce=g.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function v(g,_,C,O){const V={},j=_.attributes;let G=0;const J=C.getAttributes();for(const W in J)if(J[W].location>=0){let re=j[W];re===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(re=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(re=g.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),V[W]=ce,G++}r.attributes=V,r.attributesNum=G,r.index=O}function M(){const g=r.newAttributes;for(let _=0,C=g.length;_<C;_++)g[_]=0}function f(g){h(g,0)}function h(g,_){const C=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;C[g]=1,O[g]===0&&(n.enableVertexAttribArray(g),O[g]=1),V[g]!==_&&(n.vertexAttribDivisor(g,_),V[g]=_)}function T(){const g=r.newAttributes,_=r.enabledAttributes;for(let C=0,O=_.length;C<O;C++)_[C]!==g[C]&&(n.disableVertexAttribArray(C),_[C]=0)}function S(g,_,C,O,V,j,G){G===!0?n.vertexAttribIPointer(g,_,C,V,j):n.vertexAttribPointer(g,_,C,O,V,j)}function E(g,_,C,O){M();const V=O.attributes,j=C.getAttributes(),G=_.defaultAttributeValues;for(const J in j){const W=j[J];if(W.location>=0){let se=V[J];if(se===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(se=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(se=g.instanceColor)),se!==void 0){const re=se.normalized,ce=se.itemSize,De=e.get(se);if(De===void 0)continue;const He=De.buffer,U=De.type,$=De.bytesPerElement,te=U===n.INT||U===n.UNSIGNED_INT||se.gpuType===to;if(se.isInterleavedBufferAttribute){const le=se.data,Me=le.stride,ye=se.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<W.locationSize;Ie++)h(W.location+Ie,le.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<W.locationSize;Ie++)f(W.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ie=0;Ie<W.locationSize;Ie++)S(W.location+Ie,ce/W.locationSize,U,re,Me*$,(ye+ce/W.locationSize*Ie)*$,te)}else{if(se.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)h(W.location+le,se.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<W.locationSize;le++)f(W.location+le);n.bindBuffer(n.ARRAY_BUFFER,He);for(let le=0;le<W.locationSize;le++)S(W.location+le,ce/W.locationSize,U,re,ce*$,ce/W.locationSize*le*$,te)}}else if(G!==void 0){const re=G[J];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(W.location,re);break;case 3:n.vertexAttrib3fv(W.location,re);break;case 4:n.vertexAttrib4fv(W.location,re);break;default:n.vertexAttrib1fv(W.location,re)}}}}T()}function N(){k();for(const g in i){const _=i[g];for(const C in _){const O=_[C];for(const V in O)d(O[V].object),delete O[V];delete _[C]}delete i[g]}}function w(g){if(i[g.id]===void 0)return;const _=i[g.id];for(const C in _){const O=_[C];for(const V in O)d(O[V].object),delete O[V];delete _[C]}delete i[g.id]}function A(g){for(const _ in i){const C=i[_];if(C[g.id]===void 0)continue;const O=C[g.id];for(const V in O)d(O[V].object),delete O[V];delete C[g.id]}}function k(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:D,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:f,disableUnusedAttributes:T}}function Zf(n,e,t){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,p){p!==0&&(n.drawArraysInstanced(i,c,d,p),t.update(d,i,p))}function a(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v];t.update(m,i,1)}function l(c,d,p,u){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],d[v],u[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,p);let v=0;for(let M=0;M<p;M++)v+=d[M];for(let M=0;M<u.length;M++)t.update(v,i,u[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Yt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const k=A===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==nn&&!k)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:N,maxSamples:w}}function Qf(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new An,a=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||s;return s=u,i=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,m){const v=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,h=n.get(p);if(!s||v===null||v.length===0||r&&!f)r?d(null):c();else{const T=r?0:i,S=T*4;let E=h.clippingState||null;l.value=E,E=d(v,u,S,m);for(let N=0;N!==S;++N)E[N]=t[N];h.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,m,v){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,v!==!0||f===null){const h=m+M*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<h)&&(f=new Float32Array(h));for(let S=0,E=m;S!==M;++S,E+=4)o.copy(p[S]).applyMatrix4(T,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}function ep(n){let e=new WeakMap;function t(o,a){return a===da?o.mapping=Li:a===ha&&(o.mapping=Pi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===da||a===ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class gc extends fc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,Jo=[.125,.215,.35,.446,.526,.582],$n=20,Gr=new gc,Qo=new Ne;let Vr=null,Wr=0,Xr=0,$r=!1;const Wn=(1+Math.sqrt(5))/2,mi=1/Wn,el=[new F(-Wn,mi,0),new F(Wn,mi,0),new F(-mi,0,Wn),new F(mi,0,Wn),new F(0,Wn,-mi),new F(0,Wn,mi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vr,Wr,Xr),this._renderer.xr.enabled=$r,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:os,format:Yt,colorSpace:Fn,depthBuffer:!1},s=nl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(r)),this._blurMaterial=np(r,e,t)}return s}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,i,s){const a=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,u=d.toneMapping;d.getClearColor(Qo),d.toneMapping=Dn,d.autoClear=!1;const m=new cc({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),v=new Kt(new ds,m);let M=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,M=!0):(m.color.copy(Qo),M=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):T===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const S=this._cubeSize;Us(s,T*S,h>2?S:0,S,S),d.setRenderTarget(s),M&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=u,d.autoClear=p,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Li||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=el[(s-r-1)%el.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Kt(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*$n-1),M=r/v,f=isFinite(r)?1+Math.floor(d*M):$n;f>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${$n}`);const h=[];let T=0;for(let A=0;A<$n;++A){const k=A/M,D=Math.exp(-k*k/2);h.push(D),A===0?T+=D:A<f&&(T+=2*D)}for(let A=0;A<h.length;A++)h[A]=h[A]/T;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=v,u.mipInt.value=S-i;const E=this._sizeLods[s],N=3*E*(s>S-Mi?s-S+Mi:0),w=4*(this._cubeSize-E);Us(t,N,w,3*E,2*E),l.setRenderTarget(t),l.render(p,Gr)}}function tp(n){const e=[],t=[],i=[];let s=n;const r=n-Mi+1+Jo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Mi?l=Jo[o-n+Mi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,v=6,M=3,f=2,h=1,T=new Float32Array(M*v*m),S=new Float32Array(f*v*m),E=new Float32Array(h*v*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,k=w>2?0:-1,D=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];T.set(D,M*v*w),S.set(u,f*v*w);const g=[w,w,w,w,w,w];E.set(g,h*v*w)}const N=new rn;N.setAttribute("position",new It(T,M)),N.setAttribute("uv",new It(S,f)),N.setAttribute("faceIndex",new It(E,h)),e.push(N),s>Mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nl(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function np(n,e,t){const i=new Float32Array($n),s=new F(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function il(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function sl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function fo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ip(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===da||l===ha,d=l===Li||l===Pi;if(c||d){let p=e.get(a);const u=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new tl(n)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new tl(n)),p=c?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&qs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rp(n,e,t,i){const s={},r=new WeakMap;function o(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);for(const v in u.morphAttributes){const M=u.morphAttributes[v];for(let f=0,h=M.length;f<h;f++)e.remove(M[f])}u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const v in u)e.update(u[v],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const M=m[v];for(let f=0,h=M.length;f<h;f++)e.update(M[f],n.ARRAY_BUFFER)}}function c(p){const u=[],m=p.index,v=p.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let S=0,E=T.length;S<E;S+=3){const N=T[S+0],w=T[S+1],A=T[S+2];u.push(N,w,w,A,A,N)}}else if(v!==void 0){const T=v.array;M=v.version;for(let S=0,E=T.length/3-1;S<E;S+=3){const N=S+0,w=S+1,A=S+2;u.push(N,w,w,A,A,N)}}else return;const f=new(rc(u)?hc:dc)(u,1);f.version=M;const h=r.get(p);h&&e.remove(h),r.set(p,f)}function d(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function ap(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){n.drawElements(i,m,r,u*o),t.update(m,i,1)}function c(u,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,u*o,v),t.update(m,i,v))}function d(u,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,u,0,v);let f=0;for(let h=0;h<v;h++)f+=m[h];t.update(f,i,1)}function p(u,m,v,M){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u.length;h++)c(u[h]/o,m[h],M[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,u,0,M,0,v);let h=0;for(let T=0;T<v;T++)h+=m[T];for(let T=0;T<M.length;T++)t.update(h,i,M[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function op(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lp(n,e,t){const i=new WeakMap,s=new it;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==p){let D=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),M===!0&&(S=3);let E=a.attributes.position.count*S,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*N*4*p),A=new oc(w,E,N,p);A.type=nn,A.needsUpdate=!0;const k=S*4;for(let g=0;g<p;g++){const _=f[g],C=h[g],O=T[g],V=E*N*4*g;for(let j=0;j<_.count;j++){const G=j*k;m===!0&&(s.fromBufferAttribute(_,j),w[V+G+0]=s.x,w[V+G+1]=s.y,w[V+G+2]=s.z,w[V+G+3]=0),v===!0&&(s.fromBufferAttribute(C,j),w[V+G+4]=s.x,w[V+G+5]=s.y,w[V+G+6]=s.z,w[V+G+7]=0),M===!0&&(s.fromBufferAttribute(O,j),w[V+G+8]=s.x,w[V+G+9]=s.y,w[V+G+10]=s.z,w[V+G+11]=O.itemSize===4?s.w:1)}}u={count:p,texture:A,size:new We(E,N)},i.set(a,u),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function cp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,p=e.get(l,d);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return p}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class _c extends xt{constructor(e,t,i,s,r,o,a,l,c,d=Ti){if(d!==Ti&&d!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ti&&(i=Jn),i===void 0&&d===Ii&&(i=Di),super(null,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vc=new xt,rl=new _c(1,1),xc=new oc,Mc=new Yd,yc=new pc,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),dl=new Float32Array(4);function ki(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hr(n,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function pp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;dl.set(i),n.uniformMatrix2fv(this.addr,!1,dl),ct(t,i)}}function mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;cl.set(i),n.uniformMatrix3fv(this.addr,!1,cl),ct(t,i)}}function gp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;ll.set(i),n.uniformMatrix4fv(this.addr,!1,ll),ct(t,i)}}function _p(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2iv(this.addr,e),ct(t,e)}}function xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3iv(this.addr,e),ct(t,e)}}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4iv(this.addr,e),ct(t,e)}}function yp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2uiv(this.addr,e),ct(t,e)}}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3uiv(this.addr,e),ct(t,e)}}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4uiv(this.addr,e),ct(t,e)}}function Tp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rl.compareFunction=sc,r=rl):r=vc,t.setTexture2D(e||r,s)}function Ap(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mc,s)}function wp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yc,s)}function Rp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xc,s)}function Cp(n){switch(n){case 5126:return dp;case 35664:return hp;case 35665:return up;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return Mp;case 5125:return yp;case 36294:return Sp;case 36295:return Ep;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Rp}}function Lp(n,e){n.uniform1fv(this.addr,e)}function Pp(n,e){const t=ki(e,this.size,2);n.uniform2fv(this.addr,t)}function Dp(n,e){const t=ki(e,this.size,3);n.uniform3fv(this.addr,t)}function Ip(n,e){const t=ki(e,this.size,4);n.uniform4fv(this.addr,t)}function Up(n,e){const t=ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Np(n,e){const t=ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fp(n,e){const t=ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Op(n,e){n.uniform1iv(this.addr,e)}function Bp(n,e){n.uniform2iv(this.addr,e)}function kp(n,e){n.uniform3iv(this.addr,e)}function zp(n,e){n.uniform4iv(this.addr,e)}function Hp(n,e){n.uniform1uiv(this.addr,e)}function Gp(n,e){n.uniform2uiv(this.addr,e)}function Vp(n,e){n.uniform3uiv(this.addr,e)}function Wp(n,e){n.uniform4uiv(this.addr,e)}function Xp(n,e,t){const i=this.cache,s=e.length,r=hr(t,s);lt(i,r)||(n.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vc,r[o])}function $p(n,e,t){const i=this.cache,s=e.length,r=hr(t,s);lt(i,r)||(n.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mc,r[o])}function qp(n,e,t){const i=this.cache,s=e.length,r=hr(t,s);lt(i,r)||(n.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yc,r[o])}function Yp(n,e,t){const i=this.cache,s=e.length,r=hr(t,s);lt(i,r)||(n.uniform1iv(this.addr,r),ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xc,r[o])}function Kp(n){switch(n){case 5126:return Lp;case 35664:return Pp;case 35665:return Dp;case 35666:return Ip;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return kp;case 35669:case 35673:return zp;case 5125:return Hp;case 36294:return Gp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}class jp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cp(t.type)}}class Zp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}}class Jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function hl(n,e){n.seq.push(e),n.map[e.id]=e}function Qp(n,e,t){const i=n.name,s=i.length;for(qr.lastIndex=0;;){const r=qr.exec(i),o=qr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hl(t,c===void 0?new jp(a,n,e):new Zp(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new Jp(a),hl(t,p)),t=p}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Qp(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ul(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const em=37297;let tm=0;function nm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function im(n){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(n);let i;switch(e===t?i="":e===er&&t===Qs?i="LinearDisplayP3ToLinearSRGB":e===Qs&&t===er&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case cr:return[i,"LinearTransferOETF"];case Qt:case lo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function fl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+nm(n.getShaderSource(e),o)}else return s}function sm(n,e){const t=im(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rm(n,e){let t;switch(e){case Md:t="Linear";break;case yd:t="Reinhard";break;case Sd:t="Cineon";break;case Ed:t="ACESFilmic";break;case Td:t="AgX";break;case Ad:t="Neutral";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new F;function am(){qe.getLuminanceCoefficients(Ns);const n=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function lm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zi(n){return n!==""}function pl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(dm,um)}const hm=new Map;function um(n,e){let t=Le[e];if(t===void 0){const i=hm.get(e);if(i!==void 0)t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ha(t)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(n){return n.replace(fm,pm)}function pm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function gm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Li:case Pi:e="ENVMAP_TYPE_CUBE";break;case lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _m(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function vm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case eo:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function xm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mm(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mm(t),c=gm(t),d=_m(t),p=vm(t),u=xm(t),m=om(t),v=lm(r),M=s.createProgram();let f,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),h.length>0&&(h+=`
`)):(f=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),h=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Le.tonemapping_pars_fragment:"",t.toneMapping!==Dn?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,sm("linearToOutputTexel",t.outputColorSpace),am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Ha(o),o=pl(o,t),o=ml(o,t),a=Ha(a),a=pl(a,t),a=ml(a,t),o=gl(o),a=gl(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=T+f+o,E=T+h+a,N=ul(s,s.VERTEX_SHADER,S),w=ul(s,s.FRAGMENT_SHADER,E);s.attachShader(M,N),s.attachShader(M,w),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(_){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(M).trim(),O=s.getShaderInfoLog(N).trim(),V=s.getShaderInfoLog(w).trim();let j=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,N,w);else{const J=fl(s,N,"vertex"),W=fl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+C+`
`+J+`
`+W)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||V==="")&&(G=!1);G&&(_.diagnostics={runnable:j,programLog:C,vertexShader:{log:O,prefix:f},fragmentShader:{log:V,prefix:h}})}s.deleteShader(N),s.deleteShader(w),k=new Ys(s,M),D=cm(s,M)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let D;this.getAttributes=function(){return D===void 0&&A(this),D};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(M,em)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=w,this}let ym=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Em(e),t.set(e,i)),i}}class Em{constructor(e){this.id=ym++,this.code=e,this.usedTimes=0}}function bm(n,e,t,i,s,r,o){const a=new ho,l=new Sm,c=new Set,d=[],p=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return c.add(g),g===0?"uv":`uv${g}`}function h(g,_,C,O,V){const j=O.fog,G=V.geometry,J=g.isMeshStandardMaterial?O.environment:null,W=(g.isMeshStandardMaterial?t:e).get(g.envMap||J),se=W&&W.mapping===lr?W.image.height:null,re=M[g.type];g.precision!==null&&(v=s.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,De=ce!==void 0?ce.length:0;let He=0;G.morphAttributes.position!==void 0&&(He=1),G.morphAttributes.normal!==void 0&&(He=2),G.morphAttributes.color!==void 0&&(He=3);let U,$,te,le;if(re){const yt=en[re];U=yt.vertexShader,$=yt.fragmentShader}else U=g.vertexShader,$=g.fragmentShader,l.update(g),te=l.getVertexShaderID(g),le=l.getFragmentShaderID(g);const Me=n.getRenderTarget(),ye=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,Ge=!!g.map,Ue=!!g.matcap,R=!!W,wt=!!g.aoMap,Fe=!!g.lightMap,ke=!!g.bumpMap,Te=!!g.normalMap,Je=!!g.displacementMap,Re=!!g.emissiveMap,b=!!g.metalnessMap,x=!!g.roughnessMap,B=g.anisotropy>0,Y=g.clearcoat>0,Z=g.dispersion>0,q=g.iridescence>0,_e=g.sheen>0,ie=g.transmission>0,ue=B&&!!g.anisotropyMap,ze=Y&&!!g.clearcoatMap,Q=Y&&!!g.clearcoatNormalMap,fe=Y&&!!g.clearcoatRoughnessMap,Ae=q&&!!g.iridescenceMap,we=q&&!!g.iridescenceThicknessMap,pe=_e&&!!g.sheenColorMap,Oe=_e&&!!g.sheenRoughnessMap,Ce=!!g.specularMap,Ze=!!g.specularColorMap,L=!!g.specularIntensityMap,de=ie&&!!g.transmissionMap,X=ie&&!!g.thicknessMap,K=!!g.gradientMap,ae=!!g.alphaMap,he=g.alphaTest>0,Be=!!g.alphaHash,rt=!!g.extensions;let Mt=Dn;g.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Mt=n.toneMapping);const Ve={shaderID:re,shaderType:g.type,shaderName:g.name,vertexShader:U,fragmentShader:$,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:le,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:ye,instancingColor:ye&&V.instanceColor!==null,instancingMorph:ye&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Fn,alphaToCoverage:!!g.alphaToCoverage,map:Ge,matcap:Ue,envMap:R,envMapMode:R&&W.mapping,envMapCubeUVHeight:se,aoMap:wt,lightMap:Fe,bumpMap:ke,normalMap:Te,displacementMap:m&&Je,emissiveMap:Re,normalMapObjectSpace:Te&&g.normalMapType===Ld,normalMapTangentSpace:Te&&g.normalMapType===ic,metalnessMap:b,roughnessMap:x,anisotropy:B,anisotropyMap:ue,clearcoat:Y,clearcoatMap:ze,clearcoatNormalMap:Q,clearcoatRoughnessMap:fe,dispersion:Z,iridescence:q,iridescenceMap:Ae,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:pe,sheenRoughnessMap:Oe,specularMap:Ce,specularColorMap:Ze,specularIntensityMap:L,transmission:ie,transmissionMap:de,thicknessMap:X,gradientMap:K,opaque:g.transparent===!1&&g.blending===bi&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Be,combine:g.combine,mapUv:Ge&&f(g.map.channel),aoMapUv:wt&&f(g.aoMap.channel),lightMapUv:Fe&&f(g.lightMap.channel),bumpMapUv:ke&&f(g.bumpMap.channel),normalMapUv:Te&&f(g.normalMap.channel),displacementMapUv:Je&&f(g.displacementMap.channel),emissiveMapUv:Re&&f(g.emissiveMap.channel),metalnessMapUv:b&&f(g.metalnessMap.channel),roughnessMapUv:x&&f(g.roughnessMap.channel),anisotropyMapUv:ue&&f(g.anisotropyMap.channel),clearcoatMapUv:ze&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:Q&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&f(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:we&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&f(g.sheenRoughnessMap.channel),specularMapUv:Ce&&f(g.specularMap.channel),specularColorMapUv:Ze&&f(g.specularColorMap.channel),specularIntensityMapUv:L&&f(g.specularIntensityMap.channel),transmissionMapUv:de&&f(g.transmissionMap.channel),thicknessMapUv:X&&f(g.thicknessMap.channel),alphaMapUv:ae&&f(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||B),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ge||ae),fog:!!j,useFog:g.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:He,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ge&&g.map.isVideoTexture===!0&&qe.getTransfer(g.map.colorSpace)===et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===fn,flipSided:g.side===At,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:rt&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&g.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function T(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(const C in g.defines)_.push(C),_.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(S(_,g),E(_,g),_.push(n.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function S(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function E(g,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),g.push(a.mask)}function N(g){const _=M[g.type];let C;if(_){const O=en[_];C=ah.clone(O.uniforms)}else C=g.uniforms;return C}function w(g,_){let C;for(let O=0,V=d.length;O<V;O++){const j=d[O];if(j.cacheKey===_){C=j,++C.usedTimes;break}}return C===void 0&&(C=new Mm(n,_,g,r),d.push(C)),C}function A(g){if(--g.usedTimes===0){const _=d.indexOf(g);d[_]=d[d.length-1],d.pop(),g.destroy()}}function k(g){l.remove(g)}function D(){l.dispose()}return{getParameters:h,getProgramCacheKey:T,getUniforms:N,acquireProgram:w,releaseProgram:A,releaseShaderCache:k,programs:d,dispose:D}}function Tm(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Am(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(p,u,m,v,M,f){let h=n[e];return h===void 0?(h={id:p.id,object:p,geometry:u,material:m,groupOrder:v,renderOrder:p.renderOrder,z:M,group:f},n[e]=h):(h.id=p.id,h.object=p,h.geometry=u,h.material=m,h.groupOrder=v,h.renderOrder=p.renderOrder,h.z=M,h.group=f),e++,h}function a(p,u,m,v,M,f){const h=o(p,u,m,v,M,f);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(p,u,m,v,M,f){const h=o(p,u,m,v,M,f);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(p,u){t.length>1&&t.sort(p||Am),i.length>1&&i.sort(u||vl),s.length>1&&s.sort(u||vl)}function d(){for(let p=e,u=n.length;p<u;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function wm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new xl,n.set(i,[o])):s>=r.length?(o=new xl,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ne};break;case"SpotLight":t={position:new F,direction:new F,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Cm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lm=0;function Pm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dm(n){const e=new Rm,t=Cm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new je,o=new je;function a(c){let d=0,p=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,v=0,M=0,f=0,h=0,T=0,S=0,E=0,N=0,w=0,A=0;c.sort(Pm);for(let D=0,g=c.length;D<g;D++){const _=c[D],C=_.color,O=_.intensity,V=_.distance,j=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)d+=C.r*O,p+=C.g*O,u+=C.b*O;else if(_.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(_.sh.coefficients[G],O);A++}else if(_.isDirectionalLight){const G=e.get(_);if(G.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){const J=_.shadow,W=t.get(_);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=_.shadow.matrix,T++}i.directional[m]=G,m++}else if(_.isSpotLight){const G=e.get(_);G.position.setFromMatrixPosition(_.matrixWorld),G.color.copy(C).multiplyScalar(O),G.distance=V,G.coneCos=Math.cos(_.angle),G.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),G.decay=_.decay,i.spot[M]=G;const J=_.shadow;if(_.map&&(i.spotLightMap[N]=_.map,N++,J.updateMatrices(_),_.castShadow&&w++),i.spotLightMatrix[M]=J.matrix,_.castShadow){const W=t.get(_);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=j,E++}M++}else if(_.isRectAreaLight){const G=e.get(_);G.color.copy(C).multiplyScalar(O),G.halfWidth.set(_.width*.5,0,0),G.halfHeight.set(0,_.height*.5,0),i.rectArea[f]=G,f++}else if(_.isPointLight){const G=e.get(_);if(G.color.copy(_.color).multiplyScalar(_.intensity),G.distance=_.distance,G.decay=_.decay,_.castShadow){const J=_.shadow,W=t.get(_);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=_.shadow.matrix,S++}i.point[v]=G,v++}else if(_.isHemisphereLight){const G=e.get(_);G.skyColor.copy(_.color).multiplyScalar(O),G.groundColor.copy(_.groundColor).multiplyScalar(O),i.hemi[h]=G,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const k=i.hash;(k.directionalLength!==m||k.pointLength!==v||k.spotLength!==M||k.rectAreaLength!==f||k.hemiLength!==h||k.numDirectionalShadows!==T||k.numPointShadows!==S||k.numSpotShadows!==E||k.numSpotMaps!==N||k.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=f,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+N-w,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,k.directionalLength=m,k.pointLength=v,k.spotLength=M,k.rectAreaLength=f,k.hemiLength=h,k.numDirectionalShadows=T,k.numPointShadows=S,k.numSpotShadows=E,k.numSpotMaps=N,k.numLightProbes=A,i.version=Lm++)}function l(c,d){let p=0,u=0,m=0,v=0,M=0;const f=d.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const S=c[h];if(S.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(S.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),m++}else if(S.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),u++}else if(S.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),M++}}}return{setup:a,setupView:l,state:i}}function Ml(n){const e=new Dm(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Im(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ml(n),e.set(s,[a])):r>=o.length?(a=new Ml(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Um extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nm extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bm(n,e,t){let i=new uo;const s=new We,r=new We,o=new it,a=new Um({depthPacking:Cd}),l=new Nm,c={},d=t.maxTextureSize,p={[In]:At,[At]:In,[fn]:fn},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Fm,fragmentShader:Om}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new rn;v.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Kt(v,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let h=this.type;this.render=function(w,A,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const D=n.getRenderTarget(),g=n.getActiveCubeFace(),_=n.getActiveMipmapLevel(),C=n.state;C.setBlending(Pn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const O=h!==un&&this.type===un,V=h===un&&this.type!==un;for(let j=0,G=w.length;j<G;j++){const J=w[j],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const se=W.getFrameExtents();if(s.multiply(se),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/se.y),s.y=r.y*se.y,W.mapSize.y=r.y)),W.map===null||O===!0||V===!0){const ce=this.type!==un?{minFilter:Tt,magFilter:Tt}:{};W.map!==null&&W.map.dispose(),W.map=new Qn(s.x,s.y,ce),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const re=W.getViewportCount();for(let ce=0;ce<re;ce++){const De=W.getViewport(ce);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),C.viewport(o),W.updateMatrices(J,ce),i=W.getFrustum(),E(A,k,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===un&&T(W,k),W.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(D,g,_)};function T(w,A){const k=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,k,u,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,k,m,M,null)}function S(w,A,k,D){let g=null;const _=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(_!==void 0)g=_;else if(g=k.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=g.uuid,O=A.uuid;let V=c[C];V===void 0&&(V={},c[C]=V);let j=V[O];j===void 0&&(j=g.clone(),V[O]=j,A.addEventListener("dispose",N)),g=j}if(g.visible=A.visible,g.wireframe=A.wireframe,D===un?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:p[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,k.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const C=n.properties.get(g);C.light=k}return g}function E(w,A,k,D,g){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===un)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const O=e.update(w),V=w.material;if(Array.isArray(V)){const j=O.groups;for(let G=0,J=j.length;G<J;G++){const W=j[G],se=V[W.materialIndex];if(se&&se.visible){const re=S(w,se,D,g);w.onBeforeShadow(n,w,A,k,O,re,W),n.renderBufferDirect(k,null,O,re,w,W),w.onAfterShadow(n,w,A,k,O,re,W)}}}else if(V.visible){const j=S(w,V,D,g);w.onBeforeShadow(n,w,A,k,O,j,null),n.renderBufferDirect(k,null,O,j,w,null),w.onAfterShadow(n,w,A,k,O,j,null)}}const C=w.children;for(let O=0,V=C.length;O<V;O++)E(C[O],A,k,D,g)}function N(w){w.target.removeEventListener("dispose",N);for(const k in c){const D=c[k],g=w.target.uuid;g in D&&(D[g].dispose(),delete D[g])}}}const km={[ia]:sa,[ra]:la,[aa]:ca,[Ci]:oa,[sa]:ia,[la]:ra,[ca]:aa,[oa]:Ci};function zm(n){function e(){let L=!1;const de=new it;let X=null;const K=new it(0,0,0,0);return{setMask:function(ae){X!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){L=ae},setClear:function(ae,he,Be,rt,Mt){Mt===!0&&(ae*=rt,he*=rt,Be*=rt),de.set(ae,he,Be,rt),K.equals(de)===!1&&(n.clearColor(ae,he,Be,rt),K.copy(de))},reset:function(){L=!1,X=null,K.set(-1,0,0,0)}}}function t(){let L=!1,de=!1,X=null,K=null,ae=null;return{setReversed:function(he){de=he},setTest:function(he){he?te(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(he){X!==he&&!L&&(n.depthMask(he),X=he)},setFunc:function(he){if(de&&(he=km[he]),K!==he){switch(he){case ia:n.depthFunc(n.NEVER);break;case sa:n.depthFunc(n.ALWAYS);break;case ra:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case oa:n.depthFunc(n.GEQUAL);break;case la:n.depthFunc(n.GREATER);break;case ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=he}},setLocked:function(he){L=he},setClear:function(he){ae!==he&&(n.clearDepth(he),ae=he)},reset:function(){L=!1,X=null,K=null,ae=null}}}function i(){let L=!1,de=null,X=null,K=null,ae=null,he=null,Be=null,rt=null,Mt=null;return{setTest:function(Ve){L||(Ve?te(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Ve){de!==Ve&&!L&&(n.stencilMask(Ve),de=Ve)},setFunc:function(Ve,yt,an){(X!==Ve||K!==yt||ae!==an)&&(n.stencilFunc(Ve,yt,an),X=Ve,K=yt,ae=an)},setOp:function(Ve,yt,an){(he!==Ve||Be!==yt||rt!==an)&&(n.stencilOp(Ve,yt,an),he=Ve,Be=yt,rt=an)},setLocked:function(Ve){L=Ve},setClear:function(Ve){Mt!==Ve&&(n.clearStencil(Ve),Mt=Ve)},reset:function(){L=!1,de=null,X=null,K=null,ae=null,he=null,Be=null,rt=null,Mt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},p=new WeakMap,u=[],m=null,v=!1,M=null,f=null,h=null,T=null,S=null,E=null,N=null,w=new Ne(0,0,0),A=0,k=!1,D=null,g=null,_=null,C=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=G>=2);let W=null,se={};const re=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),De=new it().fromArray(re),He=new it().fromArray(ce);function U(L,de,X,K){const ae=new Uint8Array(4),he=n.createTexture();n.bindTexture(L,he),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<X;Be++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(de+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return he}const $={};$[n.TEXTURE_2D]=U(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=U(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=U(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=U(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(n.DEPTH_TEST),r.setFunc(Ci),Fe(!1),ke(Co),te(n.CULL_FACE),R(Pn);function te(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function le(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Me(L,de){return d[L]!==de?(n.bindFramebuffer(L,de),d[L]=de,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=de),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(L,de){let X=u,K=!1;if(L){X=p.get(de),X===void 0&&(X=[],p.set(de,X));const ae=L.textures;if(X.length!==ae.length||X[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Be=ae.length;he<Be;he++)X[he]=n.COLOR_ATTACHMENT0+he;X.length=ae.length,K=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,K=!0);K&&n.drawBuffers(X)}function Ie(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Ge={[Xn]:n.FUNC_ADD,[td]:n.FUNC_SUBTRACT,[nd]:n.FUNC_REVERSE_SUBTRACT};Ge[id]=n.MIN,Ge[sd]=n.MAX;const Ue={[rd]:n.ZERO,[ad]:n.ONE,[od]:n.SRC_COLOR,[ta]:n.SRC_ALPHA,[fd]:n.SRC_ALPHA_SATURATE,[hd]:n.DST_COLOR,[cd]:n.DST_ALPHA,[ld]:n.ONE_MINUS_SRC_COLOR,[na]:n.ONE_MINUS_SRC_ALPHA,[ud]:n.ONE_MINUS_DST_COLOR,[dd]:n.ONE_MINUS_DST_ALPHA,[pd]:n.CONSTANT_COLOR,[md]:n.ONE_MINUS_CONSTANT_COLOR,[gd]:n.CONSTANT_ALPHA,[_d]:n.ONE_MINUS_CONSTANT_ALPHA};function R(L,de,X,K,ae,he,Be,rt,Mt,Ve){if(L===Pn){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(te(n.BLEND),v=!0),L!==ed){if(L!==M||Ve!==k){if((f!==Xn||S!==Xn)&&(n.blendEquation(n.FUNC_ADD),f=Xn,S=Xn),Ve)switch(L){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.ONE,n.ONE);break;case Lo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Po:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Po:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}h=null,T=null,E=null,N=null,w.set(0,0,0),A=0,M=L,k=Ve}return}ae=ae||de,he=he||X,Be=Be||K,(de!==f||ae!==S)&&(n.blendEquationSeparate(Ge[de],Ge[ae]),f=de,S=ae),(X!==h||K!==T||he!==E||Be!==N)&&(n.blendFuncSeparate(Ue[X],Ue[K],Ue[he],Ue[Be]),h=X,T=K,E=he,N=Be),(rt.equals(w)===!1||Mt!==A)&&(n.blendColor(rt.r,rt.g,rt.b,Mt),w.copy(rt),A=Mt),M=L,k=!1}function wt(L,de){L.side===fn?le(n.CULL_FACE):te(n.CULL_FACE);let X=L.side===At;de&&(X=!X),Fe(X),L.blending===bi&&L.transparent===!1?R(Pn):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){D!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),D=L)}function ke(L){L!==Zc?(te(n.CULL_FACE),L!==g&&(L===Co?n.cullFace(n.BACK):L===Jc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),g=L}function Te(L){L!==_&&(j&&n.lineWidth(L),_=L)}function Je(L,de,X){L?(te(n.POLYGON_OFFSET_FILL),(C!==de||O!==X)&&(n.polygonOffset(de,X),C=de,O=X)):le(n.POLYGON_OFFSET_FILL)}function Re(L){L?te(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function b(L){L===void 0&&(L=n.TEXTURE0+V-1),W!==L&&(n.activeTexture(L),W=L)}function x(L,de,X){X===void 0&&(W===null?X=n.TEXTURE0+V-1:X=W);let K=se[X];K===void 0&&(K={type:void 0,texture:void 0},se[X]=K),(K.type!==L||K.texture!==de)&&(W!==X&&(n.activeTexture(X),W=X),n.bindTexture(L,de||$[L]),K.type=L,K.texture=de)}function B(){const L=se[W];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){De.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function pe(L){He.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function Oe(L,de){let X=l.get(de);X===void 0&&(X=new WeakMap,l.set(de,X));let K=X.get(L);K===void 0&&(K=n.getUniformBlockIndex(de,L.name),X.set(L,K))}function Ce(L,de){const K=l.get(de).get(L);a.get(de)!==K&&(n.uniformBlockBinding(de,K,L.__bindingPointIndex),a.set(de,K))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,se={},d={},p=new WeakMap,u=[],m=null,v=!1,M=null,f=null,h=null,T=null,S=null,E=null,N=null,w=new Ne(0,0,0),A=0,k=!1,D=null,g=null,_=null,C=null,O=null,De.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:te,disable:le,bindFramebuffer:Me,drawBuffers:ye,useProgram:Ie,setBlending:R,setMaterial:wt,setFlipSided:Fe,setCullFace:ke,setLineWidth:Te,setPolygonOffset:Je,setScissorTest:Re,activeTexture:b,bindTexture:x,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Ae,updateUBOMapping:Oe,uniformBlockBinding:Ce,texStorage2D:ze,texStorage3D:Q,texSubImage2D:q,texSubImage3D:_e,compressedTexSubImage2D:ie,compressedTexSubImage3D:ue,scissor:we,viewport:pe,reset:Ze}}function yl(n,e,t,i){const s=Hm(i);switch(t){case Zl:return n*e;case Ql:return n*e;case ec:return n*e*2;case so:return n*e/s.components*s.byteLength;case ro:return n*e/s.components*s.byteLength;case tc:return n*e*2/s.components*s.byteLength;case ao:return n*e*2/s.components*s.byteLength;case Jl:return n*e*3/s.components*s.byteLength;case Yt:return n*e*4/s.components*s.byteLength;case oo:return n*e*4/s.components*s.byteLength;case Gs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ma:case _a:return Math.max(n,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(n,8)*Math.max(e,8)/2;case va:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $s:case Na:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nc:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ba:case ka:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(n){switch(n){case gn:case Yl:return{byteLength:1,components:1};case rs:case Kl:case os:return{byteLength:2,components:1};case no:case io:return{byteLength:2,components:4};case Jn:case to:case nn:return{byteLength:4,components:1};case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Gm(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,x){return m?new OffscreenCanvas(b,x):nr("canvas")}function M(b,x,B){let Y=1;const Z=Re(b);if((Z.width>B||Z.height>B)&&(Y=B/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(Y*Z.width),_e=Math.floor(Y*Z.height);p===void 0&&(p=v(q,_e));const ie=x?v(q,_e):p;return ie.width=q,ie.height=_e,ie.getContext("2d").drawImage(b,0,0,q,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+_e+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function f(b){return b.generateMipmaps&&b.minFilter!==Tt&&b.minFilter!==$t}function h(b){n.generateMipmap(b)}function T(b,x,B,Y,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=x;if(x===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),x===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),x===n.RGBA){const _e=Z?Js:qe.getTransfer(Y);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=_e===et?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(b,x){let B;return b?x===null||x===Jn||x===Di?B=n.DEPTH24_STENCIL8:x===nn?B=n.DEPTH32F_STENCIL8:x===rs&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Di?B=n.DEPTH_COMPONENT24:x===nn?B=n.DEPTH_COMPONENT32F:x===rs&&(B=n.DEPTH_COMPONENT16),B}function E(b,x){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tt&&b.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function N(b){const x=b.target;x.removeEventListener("dispose",N),A(x),x.isVideoTexture&&d.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),D(x)}function A(b){const x=i.get(b);if(x.__webglInit===void 0)return;const B=b.source,Y=u.get(B);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&k(b),Object.keys(Y).length===0&&u.delete(B)}i.remove(b)}function k(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const B=b.source,Y=u.get(B);delete Y[x.__cacheKey],o.memory.textures--}function D(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=b.textures;for(let Y=0,Z=B.length;Y<Z;Y++){const q=i.get(B[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(b)}let g=0;function _(){g=0}function C(){const b=g;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),g+=1,b}function O(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function V(b,x){const B=i.get(b);if(b.isVideoTexture&&Te(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(B,b,x);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function j(b,x){const B=i.get(b);if(b.version>0&&B.__version!==b.version){He(B,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function G(b,x){const B=i.get(b);if(b.version>0&&B.__version!==b.version){He(B,b,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function J(b,x){const B=i.get(b);if(b.version>0&&B.__version!==b.version){U(B,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const W={[ua]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},se={[Tt]:n.NEAREST,[wd]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[vr]:n.LINEAR_MIPMAP_NEAREST,[Yn]:n.LINEAR_MIPMAP_LINEAR},re={[Pd]:n.NEVER,[Od]:n.ALWAYS,[Dd]:n.LESS,[sc]:n.LEQUAL,[Id]:n.EQUAL,[Fd]:n.GEQUAL,[Ud]:n.GREATER,[Nd]:n.NOTEQUAL};function ce(b,x){if(x.type===nn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===vr||x.magFilter===ms||x.magFilter===Yn||x.minFilter===$t||x.minFilter===vr||x.minFilter===ms||x.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,W[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,W[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,W[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,se[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,se[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tt||x.minFilter!==ms&&x.minFilter!==Yn||x.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function De(b,x){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",N));const Y=x.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const q=O(x);if(q!==b.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[q].usedTimes++;const _e=Z[b.__cacheKey];_e!==void 0&&(Z[b.__cacheKey].usedTimes--,_e.usedTimes===0&&k(x)),b.__cacheKey=q,b.__webglTexture=Z[q].texture}return B}function He(b,x,B){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const Z=De(b,x),q=x.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+B);const _e=i.get(q);if(q.version!==_e.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const ie=qe.getPrimaries(qe.workingColorSpace),ue=x.colorSpace===Ln?null:qe.getPrimaries(x.colorSpace),ze=x.colorSpace===Ln||ie===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Q=M(x.image,!1,s.maxTextureSize);Q=Je(x,Q);const fe=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type);let we=T(x.internalFormat,fe,Ae,x.colorSpace,x.isVideoTexture);ce(Y,x);let pe;const Oe=x.mipmaps,Ce=x.isVideoTexture!==!0,Ze=_e.__version===void 0||Z===!0,L=q.dataReady,de=E(x,Q);if(x.isDepthTexture)we=S(x.format===Ii,x.type),Ze&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,fe,Ae,null));else if(x.isDataTexture)if(Oe.length>0){Ce&&Ze&&t.texStorage2D(n.TEXTURE_2D,de,we,Oe[0].width,Oe[0].height);for(let X=0,K=Oe.length;X<K;X++)pe=Oe[X],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,X,we,pe.width,pe.height,0,fe,Ae,pe.data);x.generateMipmaps=!1}else Ce?(Ze&&t.texStorage2D(n.TEXTURE_2D,de,we,Q.width,Q.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,Ae,Q.data)):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,fe,Ae,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ce&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,we,Oe[0].width,Oe[0].height,Q.depth);for(let X=0,K=Oe.length;X<K;X++)if(pe=Oe[X],x.format!==Yt)if(fe!==null)if(Ce){if(L)if(x.layerUpdates.size>0){const ae=yl(pe.width,pe.height,x.format,x.type);for(const he of x.layerUpdates){const Be=pe.data.subarray(he*ae/pe.data.BYTES_PER_ELEMENT,(he+1)*ae/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,he,pe.width,pe.height,1,fe,Be,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,Q.depth,fe,pe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,we,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,Q.depth,fe,Ae,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,we,pe.width,pe.height,Q.depth,0,fe,Ae,pe.data)}else{Ce&&Ze&&t.texStorage2D(n.TEXTURE_2D,de,we,Oe[0].width,Oe[0].height);for(let X=0,K=Oe.length;X<K;X++)pe=Oe[X],x.format!==Yt?fe!==null?Ce?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe.width,pe.height,fe,Ae,pe.data):t.texImage2D(n.TEXTURE_2D,X,we,pe.width,pe.height,0,fe,Ae,pe.data)}else if(x.isDataArrayTexture)if(Ce){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,we,Q.width,Q.height,Q.depth),L)if(x.layerUpdates.size>0){const X=yl(Q.width,Q.height,x.format,x.type);for(const K of x.layerUpdates){const ae=Q.data.subarray(K*X/Q.data.BYTES_PER_ELEMENT,(K+1)*X/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,fe,Ae,ae)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Ae,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,fe,Ae,Q.data);else if(x.isData3DTexture)Ce?(Ze&&t.texStorage3D(n.TEXTURE_3D,de,we,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Ae,Q.data)):t.texImage3D(n.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,fe,Ae,Q.data);else if(x.isFramebufferTexture){if(Ze)if(Ce)t.texStorage2D(n.TEXTURE_2D,de,we,Q.width,Q.height);else{let X=Q.width,K=Q.height;for(let ae=0;ae<de;ae++)t.texImage2D(n.TEXTURE_2D,ae,we,X,K,0,fe,Ae,null),X>>=1,K>>=1}}else if(Oe.length>0){if(Ce&&Ze){const X=Re(Oe[0]);t.texStorage2D(n.TEXTURE_2D,de,we,X.width,X.height)}for(let X=0,K=Oe.length;X<K;X++)pe=Oe[X],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,fe,Ae,pe):t.texImage2D(n.TEXTURE_2D,X,we,fe,Ae,pe);x.generateMipmaps=!1}else if(Ce){if(Ze){const X=Re(Q);t.texStorage2D(n.TEXTURE_2D,de,we,X.width,X.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ae,Q)}else t.texImage2D(n.TEXTURE_2D,0,we,fe,Ae,Q);f(x)&&h(Y),_e.__version=q.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function U(b,x,B){if(x.image.length!==6)return;const Y=De(b,x),Z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);const q=i.get(Z);if(Z.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+B);const _e=qe.getPrimaries(qe.workingColorSpace),ie=x.colorSpace===Ln?null:qe.getPrimaries(x.colorSpace),ue=x.colorSpace===Ln||_e===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!ze&&!Q?fe[K]=M(x.image[K],!0,s.maxCubemapSize):fe[K]=Q?x.image[K].image:x.image[K],fe[K]=Je(x,fe[K]);const Ae=fe[0],we=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),Oe=T(x.internalFormat,we,pe,x.colorSpace),Ce=x.isVideoTexture!==!0,Ze=q.__version===void 0||Y===!0,L=Z.dataReady;let de=E(x,Ae);ce(n.TEXTURE_CUBE_MAP,x);let X;if(ze){Ce&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Oe,Ae.width,Ae.height);for(let K=0;K<6;K++){X=fe[K].mipmaps;for(let ae=0;ae<X.length;ae++){const he=X[ae];x.format!==Yt?we!==null?Ce?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,he.width,he.height,we,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Oe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,he.width,he.height,we,pe,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,Oe,he.width,he.height,0,we,pe,he.data)}}}else{if(X=x.mipmaps,Ce&&Ze){X.length>0&&de++;const K=Re(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ce?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,we,pe,fe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,fe[K].width,fe[K].height,0,we,pe,fe[K].data);for(let ae=0;ae<X.length;ae++){const Be=X[ae].image[K].image;Ce?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Be.width,Be.height,we,pe,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Oe,Be.width,Be.height,0,we,pe,Be.data)}}else{Ce?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we,pe,fe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,we,pe,fe[K]);for(let ae=0;ae<X.length;ae++){const he=X[ae];Ce?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,we,pe,he.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,Oe,we,pe,he.image[K])}}}f(x)&&h(n.TEXTURE_CUBE_MAP),q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function $(b,x,B,Y,Z,q){const _e=r.convert(B.format,B.colorSpace),ie=r.convert(B.type),ue=T(B.internalFormat,_e,ie,B.colorSpace);if(!i.get(x).__hasExternalTextures){const Q=Math.max(1,x.width>>q),fe=Math.max(1,x.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,ue,Q,fe,x.depth,0,_e,ie,null):t.texImage2D(Z,q,ue,Q,fe,0,_e,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ke(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,i.get(B).__webglTexture,0,Fe(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,i.get(B).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(b,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=S(x.stencilBuffer,Z),_e=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Fe(x);ke(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,q,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,b)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],_e=r.convert(q.format,q.colorSpace),ie=r.convert(q.type),ue=T(q.internalFormat,_e,ie,q.colorSpace),ze=Fe(x);B&&ke(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ue,x.width,x.height):ke(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,ue,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ue,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const Y=i.get(x.depthTexture).__webglTexture,Z=Fe(x);if(x.depthTexture.format===Ti)ke(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(x.depthTexture.format===Ii)ke(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Me(b){const x=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,b)}else if(B){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),te(x.__webglDepthbuffer[Y],b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),te(x.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(b,x,B){const Y=i.get(b);x!==void 0&&$(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Me(b)}function Ie(b){const x=b.texture,B=i.get(b),Y=i.get(x);b.addEventListener("dispose",w);const Z=b.textures,q=b.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ie]=[];for(let ue=0;ue<x.mipmaps.length;ue++)B.__webglFramebuffer[ie][ue]=n.createFramebuffer()}else B.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)B.__webglFramebuffer[ie]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ie=0,ue=Z.length;ie<ue;ie++){const ze=i.get(Z[ie]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&ke(b)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const ue=Z[ie];B.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ie]);const ze=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),fe=T(ue.internalFormat,ze,Q,ue.colorSpace,b.isXRRenderTarget===!0),Ae=Fe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,fe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,B.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),te(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ce(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)$(B.__webglFramebuffer[ie][ue],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue);else $(B.__webglFramebuffer[ie],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);f(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ie=0,ue=Z.length;ie<ue;ie++){const ze=Z[ie],Q=i.get(ze);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ce(n.TEXTURE_2D,ze),$(B.__webglFramebuffer,b,ze,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),f(ze)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),ce(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)$(B.__webglFramebuffer[ue],b,x,n.COLOR_ATTACHMENT0,ie,ue);else $(B.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ie,0);f(x)&&h(ie),t.unbindTexture()}b.depthBuffer&&Me(b)}function Ge(b){const x=b.textures;for(let B=0,Y=x.length;B<Y;B++){const Z=x[B];if(f(Z)){const q=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(Z).__webglTexture;t.bindTexture(q,_e),h(q),t.unbindTexture()}}}const Ue=[],R=[];function wt(b){if(b.samples>0){if(ke(b)===!1){const x=b.textures,B=b.width,Y=b.height;let Z=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(b),ie=x.length>1;if(ie)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const ze=i.get(x[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,Z,n.NEAREST),l===!0&&(Ue.length=0,R.length=0,Ue.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push(q),R.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const ze=i.get(x[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Fe(b){return Math.min(s.maxSamples,b.samples)}function ke(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(b){const x=o.render.frame;d.get(b)!==x&&(d.set(b,x),b.update())}function Je(b,x){const B=b.colorSpace,Y=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Fn&&B!==Ln&&(qe.getTransfer(B)===et?(Y!==Yt||Z!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=_,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=ye,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ke}function Vm(n,e){function t(i,s=Ln){let r;const o=qe.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===no)return n.UNSIGNED_SHORT_4_4_4_4;if(i===io)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yl)return n.BYTE;if(i===Kl)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===to)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===nn)return n.FLOAT;if(i===os)return n.HALF_FLOAT;if(i===Zl)return n.ALPHA;if(i===Jl)return n.RGB;if(i===Yt)return n.RGBA;if(i===Ql)return n.LUMINANCE;if(i===ec)return n.LUMINANCE_ALPHA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===so)return n.RED;if(i===ro)return n.RED_INTEGER;if(i===tc)return n.RG;if(i===ao)return n.RG_INTEGER;if(i===oo)return n.RGBA_INTEGER;if(i===Gs||i===Vs||i===Ws||i===Xs)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pa||i===ma||i===ga||i===_a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===xa||i===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===va||i===xa)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ma)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ya||i===Sa||i===Ea||i===ba||i===Ta||i===Aa||i===wa||i===Ra||i===Ca||i===La||i===Pa||i===Da||i===Ia||i===Ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ya)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ta)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Aa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ca)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$s||i===Na||i===Fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$s)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===Oa||i===Ba||i===ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$s)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Di?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Wm extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xm={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,i),h=this._getHandJoint(c,M);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:$m,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new dr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends Fi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,p=null,u=null,m=null,v=null;const M=new Ym,f=t.getContextAttributes();let h=null,T=null;const S=[],E=[],N=new We;let w=null;const A=new Bt;A.layers.enable(1),A.viewport=new it;const k=new Bt;k.layers.enable(2),k.viewport=new it;const D=[A,k],g=new Wm;g.layers.enable(1),g.layers.enable(2);let _=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let $=S[U];return $===void 0&&($=new Yr,S[U]=$),$.getTargetRaySpace()},this.getControllerGrip=function(U){let $=S[U];return $===void 0&&($=new Yr,S[U]=$),$.getGripSpace()},this.getHand=function(U){let $=S[U];return $===void 0&&($=new Yr,S[U]=$),$.getHandSpace()};function O(U){const $=E.indexOf(U.inputSource);if($===-1)return;const te=S[$];te!==void 0&&(te.update(U.inputSource,U.frame,c||o),te.dispatchEvent({type:U.type,data:U.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let U=0;U<S.length;U++){const $=E[U];$!==null&&(E[U]=null,S[U].disconnect($))}_=null,C=null,M.reset(),e.setRenderTarget(h),m=null,u=null,p=null,s=null,T=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const $={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Qn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let $=null,te=null,le=null;f.depth&&(le=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=f.stencil?Ii:Ti,te=f.stencil?Di:Jn);const Me={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};p=new XRWebGLBinding(s,t),u=p.createProjectionLayer(Me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new Qn(u.textureWidth,u.textureHeight,{format:Yt,type:gn,depthTexture:new _c(u.textureWidth,u.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(U){for(let $=0;$<U.removed.length;$++){const te=U.removed[$],le=E.indexOf(te);le>=0&&(E[le]=null,S[le].disconnect(te))}for(let $=0;$<U.added.length;$++){const te=U.added[$];let le=E.indexOf(te);if(le===-1){for(let ye=0;ye<S.length;ye++)if(ye>=E.length){E.push(te),le=ye;break}else if(E[ye]===null){E[ye]=te,le=ye;break}if(le===-1)break}const Me=S[le];Me&&Me.connect(te)}}const G=new F,J=new F;function W(U,$,te){G.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(te.matrixWorld);const le=G.distanceTo(J),Me=$.projectionMatrix.elements,ye=te.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),Ge=Me[14]/(Me[10]+1),Ue=(Me[9]+1)/Me[5],R=(Me[9]-1)/Me[5],wt=(Me[8]-1)/Me[0],Fe=(ye[8]+1)/ye[0],ke=Ie*wt,Te=Ie*Fe,Je=le/(-wt+Fe),Re=Je*-wt;if($.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Re),U.translateZ(Je),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Me[10]===-1)U.projectionMatrix.copy($.projectionMatrix),U.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const b=Ie+Je,x=Ge+Je,B=ke-Re,Y=Te+(le-Re),Z=Ue*Ge/x*b,q=R*Ge/x*b;U.projectionMatrix.makePerspective(B,Y,Z,q,b,x),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function se(U,$){$===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices($.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let $=U.near,te=U.far;M.texture!==null&&(M.depthNear>0&&($=M.depthNear),M.depthFar>0&&(te=M.depthFar)),g.near=k.near=A.near=$,g.far=k.far=A.far=te,(_!==g.near||C!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),_=g.near,C=g.far);const le=U.parent,Me=g.cameras;se(g,le);for(let ye=0;ye<Me.length;ye++)se(Me[ye],le);Me.length===2?W(g,A,k):g.projectionMatrix.copy(A.projectionMatrix),re(U,g,le)};function re(U,$,te){te===null?U.matrix.copy($.matrixWorld):(U.matrix.copy(te.matrixWorld),U.matrix.invert(),U.matrix.multiply($.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy($.projectionMatrix),U.projectionMatrixInverse.copy($.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=za*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(g)};let ce=null;function De(U,$){if(d=$.getViewerPose(c||o),v=$,d!==null){const te=d.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let le=!1;te.length!==g.cameras.length&&(g.cameras.length=0,le=!0);for(let ye=0;ye<te.length;ye++){const Ie=te[ye];let Ge=null;if(m!==null)Ge=m.getViewport(Ie);else{const R=p.getViewSubImage(u,Ie);Ge=R.viewport,ye===0&&(e.setRenderTargetTextures(T,R.colorTexture,u.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(T))}let Ue=D[ye];Ue===void 0&&(Ue=new Bt,Ue.layers.enable(ye),Ue.viewport=new it,D[ye]=Ue),Ue.matrix.fromArray(Ie.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ie.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),ye===0&&(g.matrix.copy(Ue.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),le===!0&&g.cameras.push(Ue)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const ye=p.getDepthInformation(te[0]);ye&&ye.isValid&&ye.texture&&M.init(e,ye,s.renderState)}}for(let te=0;te<S.length;te++){const le=E[te],Me=S[te];le!==null&&Me!==void 0&&Me.update(le,$,c||o)}ce&&ce(U,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const He=new mc;He.setAnimationLoop(De),this.setAnimationLoop=function(U){ce=U},this.dispose=function(){}}}const Vn=new sn,jm=new je;function Zm(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,uc(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,T,S,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),p(f,h)):h.isMeshPhongMaterial?(r(f,h),d(f,h)):h.isMeshStandardMaterial?(r(f,h),u(f,h),h.isMeshPhysicalMaterial&&m(f,h,E)):h.isMeshMatcapMaterial?(r(f,h),v(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),M(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?l(f,h,T,S):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===At&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===At&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const T=e.get(h),S=T.envMap,E=T.envMapRotation;S&&(f.envMap.value=S,Vn.copy(E),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),f.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(Vn)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,T,S){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*T,f.scale.value=S*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function u(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,T){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===At&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function M(f,h){const T=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jm(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const E=S.program;i.uniformBlockBinding(T,E)}function c(T,S){let E=s[T.id];E===void 0&&(v(T),E=d(T),s[T.id]=E,T.addEventListener("dispose",f));const N=S.program;i.updateUBOMapping(T,N);const w=e.render.frame;r[T.id]!==w&&(u(T),r[T.id]=w)}function d(T){const S=p();T.__bindingPointIndex=S;const E=n.createBuffer(),N=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,N,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function p(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const S=s[T.id],E=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,A=E.length;w<A;w++){const k=Array.isArray(E[w])?E[w]:[E[w]];for(let D=0,g=k.length;D<g;D++){const _=k[D];if(m(_,w,D,N)===!0){const C=_.__offset,O=Array.isArray(_.value)?_.value:[_.value];let V=0;for(let j=0;j<O.length;j++){const G=O[j],J=M(G);typeof G=="number"||typeof G=="boolean"?(_.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,C+V,_.__data)):G.isMatrix3?(_.__data[0]=G.elements[0],_.__data[1]=G.elements[1],_.__data[2]=G.elements[2],_.__data[3]=0,_.__data[4]=G.elements[3],_.__data[5]=G.elements[4],_.__data[6]=G.elements[5],_.__data[7]=0,_.__data[8]=G.elements[6],_.__data[9]=G.elements[7],_.__data[10]=G.elements[8],_.__data[11]=0):(G.toArray(_.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,_.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,S,E,N){const w=T.value,A=S+"_"+E;if(N[A]===void 0)return typeof w=="number"||typeof w=="boolean"?N[A]=w:N[A]=w.clone(),!0;{const k=N[A];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return N[A]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function v(T){const S=T.uniforms;let E=0;const N=16;for(let A=0,k=S.length;A<k;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let g=0,_=D.length;g<_;g++){const C=D[g],O=Array.isArray(C.value)?C.value:[C.value];for(let V=0,j=O.length;V<j;V++){const G=O[V],J=M(G),W=E%N,se=W%J.boundary,re=W+se;E+=se,re!==0&&N-re<J.storage&&(E+=N-re),C.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=J.storage}}}const w=E%N;return w>0&&(E+=N-w),T.__size=E,T.__cache={},this}function M(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function f(T){const S=T.target;S.removeEventListener("dispose",f);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Qm{constructor(e={}){const{canvas:t=kd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,f=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Dn,this.toneMappingExposure=1;const S=this;let E=!1,N=0,w=0,A=null,k=-1,D=null;const g=new it,_=new it;let C=null;const O=new Ne(0);let V=0,j=t.width,G=t.height,J=1,W=null,se=null;const re=new it(0,0,j,G),ce=new it(0,0,j,G);let De=!1;const He=new uo;let U=!1,$=!1;const te=new je,le=new je,Me=new F,ye=new it,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Ue(){return A===null?J:1}let R=i;function wt(y,P){return t.getContext(y,P)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",he,!1),R===null){const P="webgl2";if(R=wt(P,y),R===null)throw wt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Fe,ke,Te,Je,Re,b,x,B,Y,Z,q,_e,ie,ue,ze,Q,fe,Ae,we,pe,Oe,Ce,Ze,L;function de(){Fe=new sp(R),Fe.init(),Ce=new Vm(R,Fe),ke=new Jf(R,Fe,e,Ce),Te=new zm(R),ke.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),Je=new op(R),Re=new Tm,b=new Gm(R,Fe,Te,Re,ke,Ce,Je),x=new ep(S),B=new ip(S),Y=new fh(R),Ze=new jf(R,Y),Z=new rp(R,Y,Je,Ze),q=new cp(R,Z,Y,Je),we=new lp(R,ke,b),Q=new Qf(Re),_e=new bm(S,x,B,Fe,ke,Ze,Q),ie=new Zm(S,Re),ue=new wm,ze=new Im(Fe),Ae=new Kf(S,x,B,Te,q,u,l),fe=new Bm(S,q,ke),L=new Jm(R,Je,ke,Te),pe=new Zf(R,Fe,Je),Oe=new ap(R,Fe,Je),Je.programs=_e.programs,S.capabilities=ke,S.extensions=Fe,S.properties=Re,S.renderLists=ue,S.shadowMap=fe,S.state=Te,S.info=Je}de();const X=new Km(S,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(j,G,!1))},this.getSize=function(y){return y.set(j,G)},this.setSize=function(y,P,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,G=P,t.width=Math.floor(y*J),t.height=Math.floor(P*J),z===!0&&(t.style.width=y+"px",t.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(j*J,G*J).floor()},this.setDrawingBufferSize=function(y,P,z){j=y,G=P,J=z,t.width=Math.floor(y*z),t.height=Math.floor(P*z),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(g)},this.getViewport=function(y){return y.copy(re)},this.setViewport=function(y,P,z,H){y.isVector4?re.set(y.x,y.y,y.z,y.w):re.set(y,P,z,H),Te.viewport(g.copy(re).multiplyScalar(J).round())},this.getScissor=function(y){return y.copy(ce)},this.setScissor=function(y,P,z,H){y.isVector4?ce.set(y.x,y.y,y.z,y.w):ce.set(y,P,z,H),Te.scissor(_.copy(ce).multiplyScalar(J).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(y){Te.setScissorTest(De=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){se=y},this.getClearColor=function(y){return y.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(y=!0,P=!0,z=!0){let H=0;if(y){let I=!1;if(A!==null){const ee=A.texture.format;I=ee===oo||ee===ao||ee===ro}if(I){const ee=A.texture.type,oe=ee===gn||ee===Jn||ee===rs||ee===Di||ee===no||ee===io,me=Ae.getClearColor(),ge=Ae.getClearAlpha(),Se=me.r,be=me.g,ve=me.b;oe?(m[0]=Se,m[1]=be,m[2]=ve,m[3]=ge,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=Se,v[1]=be,v[2]=ve,v[3]=ge,R.clearBufferiv(R.COLOR,0,v))}else H|=R.COLOR_BUFFER_BIT}P&&(H|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ue.dispose(),ze.dispose(),Re.dispose(),x.dispose(),B.dispose(),q.dispose(),Ze.dispose(),L.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",yo),X.removeEventListener("sessionend",So),On.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=Je.autoReset,P=fe.enabled,z=fe.autoUpdate,H=fe.needsUpdate,I=fe.type;de(),Je.autoReset=y,fe.enabled=P,fe.autoUpdate=z,fe.needsUpdate=H,fe.type=I}function he(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const P=y.target;P.removeEventListener("dispose",Be),rt(P)}function rt(y){Mt(y),Re.remove(y)}function Mt(y){const P=Re.get(y).programs;P!==void 0&&(P.forEach(function(z){_e.releaseProgram(z)}),y.isShaderMaterial&&_e.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,z,H,I,ee){P===null&&(P=Ie);const oe=I.isMesh&&I.matrixWorld.determinant()<0,me=qc(y,P,z,H,I);Te.setMaterial(H,oe);let ge=z.index,Se=1;if(H.wireframe===!0){if(ge=Z.getWireframeAttribute(z),ge===void 0)return;Se=2}const be=z.drawRange,ve=z.attributes.position;let Ye=be.start*Se,Qe=(be.start+be.count)*Se;ee!==null&&(Ye=Math.max(Ye,ee.start*Se),Qe=Math.min(Qe,(ee.start+ee.count)*Se)),ge!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,ge.count)):ve!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,ve.count));const nt=Qe-Ye;if(nt<0||nt===1/0)return;Ze.setup(I,H,me,z,ge);let Rt,Xe=pe;if(ge!==null&&(Rt=Y.get(ge),Xe=Oe,Xe.setIndex(Rt)),I.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Ue()),Xe.setMode(R.LINES)):Xe.setMode(R.TRIANGLES);else if(I.isLine){let xe=H.linewidth;xe===void 0&&(xe=1),Te.setLineWidth(xe*Ue()),I.isLineSegments?Xe.setMode(R.LINES):I.isLineLoop?Xe.setMode(R.LINE_LOOP):Xe.setMode(R.LINE_STRIP)}else I.isPoints?Xe.setMode(R.POINTS):I.isSprite&&Xe.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const xe=I._multiDrawStarts,ft=I._multiDrawCounts,$e=I._multiDrawCount,Gt=ge?Y.get(ge).bytesPerElement:1,ti=Re.get(H).currentProgram.getUniforms();for(let Ct=0;Ct<$e;Ct++)ti.setValue(R,"_gl_DrawID",Ct),Xe.render(xe[Ct]/Gt,ft[Ct])}else if(I.isInstancedMesh)Xe.renderInstances(Ye,nt,I.count);else if(z.isInstancedBufferGeometry){const xe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ft=Math.min(z.instanceCount,xe);Xe.renderInstances(Ye,nt,ft)}else Xe.render(Ye,nt)};function Ve(y,P,z){y.transparent===!0&&y.side===fn&&y.forceSinglePass===!1?(y.side=At,y.needsUpdate=!0,ps(y,P,z),y.side=In,y.needsUpdate=!0,ps(y,P,z),y.side=fn):ps(y,P,z)}this.compile=function(y,P,z=null){z===null&&(z=y),f=ze.get(z),f.init(P),T.push(f),z.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),y!==z&&y.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const H=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ee=I.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const me=ee[oe];Ve(me,z,I),H.add(me)}else Ve(ee,z,I),H.add(ee)}),T.pop(),f=null,H},this.compileAsync=function(y,P,z=null){const H=this.compile(y,P,z);return new Promise(I=>{function ee(){if(H.forEach(function(oe){Re.get(oe).currentProgram.isReady()&&H.delete(oe)}),H.size===0){I(y);return}setTimeout(ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let yt=null;function an(y){yt&&yt(y)}function yo(){On.stop()}function So(){On.start()}const On=new mc;On.setAnimationLoop(an),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(y){yt=y,X.setAnimationLoop(y),y===null?On.stop():On.start()},X.addEventListener("sessionstart",yo),X.addEventListener("sessionend",So),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(P),P=X.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,P,A),f=ze.get(y,T.length),f.init(P),T.push(f),le.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),He.setFromProjectionMatrix(le),$=this.localClippingEnabled,U=Q.init(this.clippingPlanes,$),M=ue.get(y,h.length),M.init(),h.push(M),X.enabled===!0&&X.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&pr(ee,P,-1/0,S.sortObjects)}pr(y,P,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(W,se),Ge=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(M,y),this.info.render.frame++,U===!0&&Q.beginShadows();const z=f.state.shadowsArray;fe.render(z,y,P),U===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=M.opaque,I=M.transmissive;if(f.setupLights(),P.isArrayCamera){const ee=P.cameras;if(I.length>0)for(let oe=0,me=ee.length;oe<me;oe++){const ge=ee[oe];bo(H,I,y,ge)}Ge&&Ae.render(y);for(let oe=0,me=ee.length;oe<me;oe++){const ge=ee[oe];Eo(M,y,ge,ge.viewport)}}else I.length>0&&bo(H,I,y,P),Ge&&Ae.render(y),Eo(M,y,P);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(S,y,P),Ze.resetDefaultState(),k=-1,D=null,T.pop(),T.length>0?(f=T[T.length-1],U===!0&&Q.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function pr(y,P,z,H){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||He.intersectsSprite(y)){H&&ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);const oe=q.update(y),me=y.material;me.visible&&M.push(y,oe,me,z,ye.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||He.intersectsObject(y))){const oe=q.update(y),me=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ye.copy(y.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),ye.copy(oe.boundingSphere.center)),ye.applyMatrix4(y.matrixWorld).applyMatrix4(le)),Array.isArray(me)){const ge=oe.groups;for(let Se=0,be=ge.length;Se<be;Se++){const ve=ge[Se],Ye=me[ve.materialIndex];Ye&&Ye.visible&&M.push(y,oe,Ye,z,ye.z,ve)}}else me.visible&&M.push(y,oe,me,z,ye.z,null)}}const ee=y.children;for(let oe=0,me=ee.length;oe<me;oe++)pr(ee[oe],P,z,H)}function Eo(y,P,z,H){const I=y.opaque,ee=y.transmissive,oe=y.transparent;f.setupLightsView(z),U===!0&&Q.setGlobalState(S.clippingPlanes,z),H&&Te.viewport(g.copy(H)),I.length>0&&fs(I,P,z),ee.length>0&&fs(ee,P,z),oe.length>0&&fs(oe,P,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function bo(y,P,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Qn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?os:gn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ee=f.state.transmissionRenderTarget[H.id],oe=H.viewport||g;ee.setSize(oe.z,oe.w);const me=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(O),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),Ge&&Ae.render(z);const ge=S.toneMapping;S.toneMapping=Dn;const Se=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),U===!0&&Q.setGlobalState(S.clippingPlanes,H),fs(y,z,H),b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ve=0,Ye=P.length;ve<Ye;ve++){const Qe=P[ve],nt=Qe.object,Rt=Qe.geometry,Xe=Qe.material,xe=Qe.group;if(Xe.side===fn&&nt.layers.test(H.layers)){const ft=Xe.side;Xe.side=At,Xe.needsUpdate=!0,To(nt,z,H,Rt,Xe,xe),Xe.side=ft,Xe.needsUpdate=!0,be=!0}}be===!0&&(b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee))}S.setRenderTarget(me),S.setClearColor(O,V),Se!==void 0&&(H.viewport=Se),S.toneMapping=ge}function fs(y,P,z){const H=P.isScene===!0?P.overrideMaterial:null;for(let I=0,ee=y.length;I<ee;I++){const oe=y[I],me=oe.object,ge=oe.geometry,Se=H===null?oe.material:H,be=oe.group;me.layers.test(z.layers)&&To(me,P,z,ge,Se,be)}}function To(y,P,z,H,I,ee){y.onBeforeRender(S,P,z,H,I,ee),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(S,P,z,H,y,ee),I.transparent===!0&&I.side===fn&&I.forceSinglePass===!1?(I.side=At,I.needsUpdate=!0,S.renderBufferDirect(z,P,H,I,y,ee),I.side=In,I.needsUpdate=!0,S.renderBufferDirect(z,P,H,I,y,ee),I.side=fn):S.renderBufferDirect(z,P,H,I,y,ee),y.onAfterRender(S,P,z,H,I,ee)}function ps(y,P,z){P.isScene!==!0&&(P=Ie);const H=Re.get(y),I=f.state.lights,ee=f.state.shadowsArray,oe=I.state.version,me=_e.getParameters(y,I.state,ee,P,z),ge=_e.getProgramCacheKey(me);let Se=H.programs;H.environment=y.isMeshStandardMaterial?P.environment:null,H.fog=P.fog,H.envMap=(y.isMeshStandardMaterial?B:x).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Se===void 0&&(y.addEventListener("dispose",Be),Se=new Map,H.programs=Se);let be=Se.get(ge);if(be!==void 0){if(H.currentProgram===be&&H.lightsStateVersion===oe)return wo(y,me),be}else me.uniforms=_e.getUniforms(y),y.onBeforeCompile(me,S),be=_e.acquireProgram(me,ge),Se.set(ge,be),H.uniforms=me.uniforms;const ve=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ve.clippingPlanes=Q.uniform),wo(y,me),H.needsLights=Kc(y),H.lightsStateVersion=oe,H.needsLights&&(ve.ambientLightColor.value=I.state.ambient,ve.lightProbe.value=I.state.probe,ve.directionalLights.value=I.state.directional,ve.directionalLightShadows.value=I.state.directionalShadow,ve.spotLights.value=I.state.spot,ve.spotLightShadows.value=I.state.spotShadow,ve.rectAreaLights.value=I.state.rectArea,ve.ltc_1.value=I.state.rectAreaLTC1,ve.ltc_2.value=I.state.rectAreaLTC2,ve.pointLights.value=I.state.point,ve.pointLightShadows.value=I.state.pointShadow,ve.hemisphereLights.value=I.state.hemi,ve.directionalShadowMap.value=I.state.directionalShadowMap,ve.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ve.spotShadowMap.value=I.state.spotShadowMap,ve.spotLightMatrix.value=I.state.spotLightMatrix,ve.spotLightMap.value=I.state.spotLightMap,ve.pointShadowMap.value=I.state.pointShadowMap,ve.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=be,H.uniformsList=null,be}function Ao(y){if(y.uniformsList===null){const P=y.currentProgram.getUniforms();y.uniformsList=Ys.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function wo(y,P){const z=Re.get(y);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function qc(y,P,z,H,I){P.isScene!==!0&&(P=Ie),b.resetTextureUnits();const ee=P.fog,oe=H.isMeshStandardMaterial?P.environment:null,me=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fn,ge=(H.isMeshStandardMaterial?B:x).get(H.envMap||oe),Se=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,be=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ve=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let nt=Dn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(nt=S.toneMapping);const Rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Xe=Rt!==void 0?Rt.length:0,xe=Re.get(H),ft=f.state.lights;if(U===!0&&($===!0||y!==D)){const Ut=y===D&&H.id===k;Q.setState(H,y,Ut)}let $e=!1;H.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ft.state.version||xe.outputColorSpace!==me||I.isBatchedMesh&&xe.batching===!1||!I.isBatchedMesh&&xe.batching===!0||I.isBatchedMesh&&xe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&xe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&xe.instancing===!1||!I.isInstancedMesh&&xe.instancing===!0||I.isSkinnedMesh&&xe.skinning===!1||!I.isSkinnedMesh&&xe.skinning===!0||I.isInstancedMesh&&xe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&xe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&xe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&xe.instancingMorph===!1&&I.morphTexture!==null||xe.envMap!==ge||H.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Se||xe.vertexTangents!==be||xe.morphTargets!==ve||xe.morphNormals!==Ye||xe.morphColors!==Qe||xe.toneMapping!==nt||xe.morphTargetsCount!==Xe)&&($e=!0):($e=!0,xe.__version=H.version);let Gt=xe.currentProgram;$e===!0&&(Gt=ps(H,P,I));let ti=!1,Ct=!1,mr=!1;const st=Gt.getUniforms(),vn=xe.uniforms;if(Te.useProgram(Gt.program)&&(ti=!0,Ct=!0,mr=!0),H.id!==k&&(k=H.id,Ct=!0),ti||D!==y){ke.reverseDepthBuffer?(te.copy(y.projectionMatrix),Hd(te),Gd(te),st.setValue(R,"projectionMatrix",te)):st.setValue(R,"projectionMatrix",y.projectionMatrix),st.setValue(R,"viewMatrix",y.matrixWorldInverse);const Ut=st.map.cameraPosition;Ut!==void 0&&Ut.setValue(R,Me.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&st.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),D!==y&&(D=y,Ct=!0,mr=!0)}if(I.isSkinnedMesh){st.setOptional(R,I,"bindMatrix"),st.setOptional(R,I,"bindMatrixInverse");const Ut=I.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),st.setValue(R,"boneTexture",Ut.boneTexture,b))}I.isBatchedMesh&&(st.setOptional(R,I,"batchingTexture"),st.setValue(R,"batchingTexture",I._matricesTexture,b),st.setOptional(R,I,"batchingIdTexture"),st.setValue(R,"batchingIdTexture",I._indirectTexture,b),st.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(R,"batchingColorTexture",I._colorsTexture,b));const gr=z.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&we.update(I,z,Gt),(Ct||xe.receiveShadow!==I.receiveShadow)&&(xe.receiveShadow=I.receiveShadow,st.setValue(R,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(vn.envMap.value=ge,vn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&P.environment!==null&&(vn.envMapIntensity.value=P.environmentIntensity),Ct&&(st.setValue(R,"toneMappingExposure",S.toneMappingExposure),xe.needsLights&&Yc(vn,mr),ee&&H.fog===!0&&ie.refreshFogUniforms(vn,ee),ie.refreshMaterialUniforms(vn,H,J,G,f.state.transmissionRenderTarget[y.id]),Ys.upload(R,Ao(xe),vn,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ys.upload(R,Ao(xe),vn,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(R,"center",I.center),st.setValue(R,"modelViewMatrix",I.modelViewMatrix),st.setValue(R,"normalMatrix",I.normalMatrix),st.setValue(R,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ut=H.uniformsGroups;for(let _r=0,jc=Ut.length;_r<jc;_r++){const Ro=Ut[_r];L.update(Ro,Gt),L.bind(Ro,Gt)}}return Gt}function Yc(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Kc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,P,z){Re.get(y.texture).__webglTexture=P,Re.get(y.depthTexture).__webglTexture=z;const H=Re.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,P){const z=Re.get(y);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,z=0){A=y,N=P,w=z;let H=!0,I=null,ee=!1,oe=!1;if(y){const ge=Re.get(y);if(ge.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(ge.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(ge.__hasExternalTextures)b.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ve=y.depthTexture;if(ge.__boundDepthTexture!==ve){if(ve!==null&&Re.has(ve)&&(y.width!==ve.image.width||y.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(oe=!0);const be=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[P])?I=be[P][z]:I=be[P],ee=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?I=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?I=be[z]:I=be,g.copy(y.viewport),_.copy(y.scissor),C=y.scissorTest}else g.copy(re).multiplyScalar(J).floor(),_.copy(ce).multiplyScalar(J).floor(),C=De;if(Te.bindFramebuffer(R.FRAMEBUFFER,I)&&H&&Te.drawBuffers(y,I),Te.viewport(g),Te.scissor(_),Te.setScissorTest(C),ee){const ge=Re.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge.__webglTexture,z)}else if(oe){const ge=Re.get(y.texture),Se=P||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.__webglTexture,z||0,Se)}k=-1},this.readRenderTargetPixels=function(y,P,z,H,I,ee,oe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me){Te.bindFramebuffer(R.FRAMEBUFFER,me);try{const ge=y.texture,Se=ge.format,be=ge.type;if(!ke.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-H&&z>=0&&z<=y.height-I&&R.readPixels(P,z,H,I,Ce.convert(Se),Ce.convert(be),ee)}finally{const ge=A!==null?Re.get(A).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(y,P,z,H,I,ee,oe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(me=me[oe]),me){const ge=y.texture,Se=ge.format,be=ge.type;if(!ke.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=y.width-H&&z>=0&&z<=y.height-I){Te.bindFramebuffer(R.FRAMEBUFFER,me);const ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(P,z,H,I,Ce.convert(Se),Ce.convert(be),0);const Ye=A!==null?Re.get(A).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,Ye);const Qe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await zd(R,Qe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(ve),R.deleteSync(Qe),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,P=null,z=0){y.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-z),I=Math.floor(y.image.width*H),ee=Math.floor(y.image.height*H),oe=P!==null?P.x:0,me=P!==null?P.y:0;b.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,oe,me,I,ee),Te.unbindTexture()},this.copyTextureToTexture=function(y,P,z=null,H=null,I=0){y.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],P=arguments[2],I=arguments[3]||0,z=null);let ee,oe,me,ge,Se,be;z!==null?(ee=z.max.x-z.min.x,oe=z.max.y-z.min.y,me=z.min.x,ge=z.min.y):(ee=y.image.width,oe=y.image.height,me=0,ge=0),H!==null?(Se=H.x,be=H.y):(Se=0,be=0);const ve=Ce.convert(P.format),Ye=Ce.convert(P.type);b.setTexture2D(P,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Rt=R.getParameter(R.UNPACK_SKIP_PIXELS),Xe=R.getParameter(R.UNPACK_SKIP_ROWS),xe=R.getParameter(R.UNPACK_SKIP_IMAGES),ft=y.isCompressedTexture?y.mipmaps[I]:y.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,me),R.pixelStorei(R.UNPACK_SKIP_ROWS,ge),y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,I,Se,be,ee,oe,ve,Ye,ft.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,I,Se,be,ft.width,ft.height,ve,ft.data):R.texSubImage2D(R.TEXTURE_2D,I,Se,be,ee,oe,ve,Ye,ft),R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xe),I===0&&P.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(y,P,z=null,H=null,I=0){y.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,y=arguments[2],P=arguments[3],I=arguments[4]||0);let ee,oe,me,ge,Se,be,ve,Ye,Qe;const nt=y.isCompressedTexture?y.mipmaps[I]:y.image;z!==null?(ee=z.max.x-z.min.x,oe=z.max.y-z.min.y,me=z.max.z-z.min.z,ge=z.min.x,Se=z.min.y,be=z.min.z):(ee=nt.width,oe=nt.height,me=nt.depth,ge=0,Se=0,be=0),H!==null?(ve=H.x,Ye=H.y,Qe=H.z):(ve=0,Ye=0,Qe=0);const Rt=Ce.convert(P.format),Xe=Ce.convert(P.type);let xe;if(P.isData3DTexture)b.setTexture3D(P,0),xe=R.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)b.setTexture2DArray(P,0),xe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const ft=R.getParameter(R.UNPACK_ROW_LENGTH),$e=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Gt=R.getParameter(R.UNPACK_SKIP_PIXELS),ti=R.getParameter(R.UNPACK_SKIP_ROWS),Ct=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,Se),R.pixelStorei(R.UNPACK_SKIP_IMAGES,be),y.isDataTexture||y.isData3DTexture?R.texSubImage3D(xe,I,ve,Ye,Qe,ee,oe,me,Rt,Xe,nt.data):P.isCompressedArrayTexture?R.compressedTexSubImage3D(xe,I,ve,Ye,Qe,ee,oe,me,Rt,nt.data):R.texSubImage3D(xe,I,ve,Ye,Qe,ee,oe,me,Rt,Xe,nt),R.pixelStorei(R.UNPACK_ROW_LENGTH,ft),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$e),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ti),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ct),I===0&&P.generateMipmaps&&R.generateMipmap(xe),Te.unbindTexture()},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),Te.unbindTexture()},this.resetState=function(){N=0,w=0,A=null,Te.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lo?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===cr?"display-p3":"srgb"}}class eg extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tg extends xt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Tt,d=Tt,p,u){super(null,o,a,l,c,d,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga extends It{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new je,Sl=new je,Os=[],El=new ei,ng=new je,$i=new Kt,qi=new Oi;class ig extends Kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ng)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),El.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(El)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gi),qi.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(i),e.ray.intersectsSphere(qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gi),Sl.multiplyMatrices(i,gi),$i.matrixWorld=Sl,$i.raycast(e,Os);for(let o=0,a=Os.length;o<a;o++){const l=Os[o];l.instanceId=r,l.object=this,t.push(l)}Os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new tg(new Float32Array(s*this.count),s,this.count,so,nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Sc extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ir=new F,sr=new F,bl=new je,Yi=new co,Bs=new Oi,Kr=new F,Tl=new F;class sg extends ht{constructor(e=new rn,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ir.fromBufferAttribute(t,s-1),sr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ir.distanceTo(sr);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=r,e.ray.intersectsSphere(Bs)===!1)return;bl.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let M=m,f=v-1;M<f;M+=c){const h=d.getX(M),T=d.getX(M+1),S=ks(this,e,Yi,l,h,T);S&&t.push(S)}if(this.isLineLoop){const M=d.getX(v-1),f=d.getX(m),h=ks(this,e,Yi,l,M,f);h&&t.push(h)}}else{const m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let M=m,f=v-1;M<f;M+=c){const h=ks(this,e,Yi,l,M,M+1);h&&t.push(h)}if(this.isLineLoop){const M=ks(this,e,Yi,l,v-1,m);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ks(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(ir.fromBufferAttribute(o,s),sr.fromBufferAttribute(o,r),t.distanceSqToSegment(ir,sr,Kr,Tl)>i)return;Kr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Kr);if(!(l<e.near||l>e.far))return{distance:l,point:Tl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Al=new F,wl=new F;class rg extends sg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Al.fromBufferAttribute(t,s),wl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Al.distanceTo(wl);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class po extends rn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],p=new F,u=new F,m=[],v=[],M=[],f=[];for(let h=0;h<=i;h++){const T=[],S=h/i;let E=0;h===0&&o===0?E=.5/t:h===i&&l===Math.PI&&(E=-.5/t);for(let N=0;N<=t;N++){const w=N/t;p.x=-e*Math.cos(s+w*r)*Math.sin(o+S*a),p.y=e*Math.cos(o+S*a),p.z=e*Math.sin(s+w*r)*Math.sin(o+S*a),v.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),f.push(w+E,1-S),T.push(c++)}d.push(T)}for(let h=0;h<i;h++)for(let T=0;T<t;T++){const S=d[h][T+1],E=d[h][T],N=d[h+1][T],w=d[h+1][T+1];(h!==0||o>0)&&m.push(S,E,w),(h!==i-1||l<Math.PI)&&m.push(E,N,w)}this.setIndex(m),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ag extends Bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ec extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jr=new je,Rl=new F,Cl=new F;class og{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lg extends og{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cg extends Ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dg extends Ec{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ll=new je;class hg{constructor(e,t,i=0,s=1/0){this.ray=new co(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ll.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ll),this}intersectObject(e,t=!0,i=[]){return Va(e,this,i,t),i.sort(Pl),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Va(e[s],this,i,t);return i.sort(Pl),i}}function Pl(n,e){return n.distance-e.distance}function Va(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Va(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const Dl=n=>n&&n.size?[...n].sort((e,t)=>t[1]-e[1]||String(e[0]).localeCompare(String(t[0])))[0][0]:null,ug=(n,e,t)=>{const i=n.get(e)??new Map;i.set(t,(i.get(t)??0)+1),n.set(e,i)};function bc(n,e){const t=new Map,i=new Map,s=n.filter(l=>l.kind==="function"),r=new Map;for(const l of n)l.kind==="table"&&r.set(l.id,l.system??null);for(const l of s)l.system&&(t.set(l.id,l.system),i.set(l.id,"named explicitly in SYSTEM_BOUNDARIES"));const o=new Map;for(const l of e){if(l.type!=="touches")continue;const c=r.get(l.target);c&&ug(o,l.source,c)}for(const[l,c]of o)t.has(l)||(t.set(l,Dl(c)),i.set(l,"writes/reads a table this system owns"));const a=e.filter(l=>l.type==="calls");for(let l=0;l<4;l++){const c=new Map;for(const d of s){if(t.has(d.id))continue;const p=new Map;for(const m of a){const v=m.source===d.id?m.target:m.target===d.id?m.source:null;if(!v)continue;const M=t.get(v);M&&p.set(M,(p.get(M)??0)+1)}const u=Dl(p);u&&c.set(d.id,u)}if(!c.size)break;for(const[d,p]of c)t.set(d,p),i.set(d,"inferred — it calls functions owned by this system")}for(const l of s)t.has(l.id)||t.set(l.id,null);return{system:t,how:i}}const fg=Math.PI*(3-Math.sqrt(5));function Il(n,e){const t=e===1?0:1-2*(n+.5)/e,i=Math.sqrt(Math.max(0,1-t*t)),s=n*fg;return[i*Math.cos(s),t,i*Math.sin(s)]}const es=null,pg=n=>n&&n.size?[...n].sort((e,t)=>t[1]-e[1]||String(e[0]).localeCompare(String(t[0])))[0][0]:void 0,mg=(n,e,t)=>{const i=n.get(e)??new Map;i.set(t,(i.get(t)??0)+1),n.set(e,i)};function gg(n,e){const t=new Map;for(const r of n)r.kind==="table"&&t.set(r.id,r.system??es);const{system:i}=bc(n,e),s=new Map;for(const r of n)r.kind==="function"&&s.set(r.id,i.get(r.id)??es);return{tableSystem:t,fnSystem:s}}function _g(n,e){const t=new Map,i=(_,C,O,V)=>t.set(_,{x:C,y:O,z:V}),s=_=>n.filter(C=>C.kind===_),r=(_,C)=>String(_.label).localeCompare(String(C.label)),{tableSystem:o,fnSystem:a}=gg(n,e),l=new Map,c=_=>(l.has(_)||l.set(_,{node:null,tables:[],fns:[]}),l.get(_));for(const _ of s("system"))c(_.label).node=_;for(const _ of s("table"))c(o.get(_.id)).tables.push(_);for(const _ of s("function"))c(a.get(_.id)).fns.push(_);const d=[...l.keys()].sort((_,C)=>(_===es)-(C===es)||String(_).localeCompare(String(C))),p=_=>12+3.1*Math.sqrt(_.tables.length),u=_=>p(_)+8+2.5*Math.sqrt(_.fns.length),m=d.map(_=>2*u(l.get(_))+15),v=m.reduce((_,C)=>_+C,0),M=Math.max(250,v/(2*Math.PI)),f=new Map;let h=0;d.forEach((_,C)=>{f.set(_,(h+m[C]/2)/v*2*Math.PI),h+=m[C]});for(const _ of d){const C=l.get(_),O=f.get(_),V=M*Math.cos(O),j=M*Math.sin(O);C.node&&i(C.node.id,V,0,j);const G=p(C),J=u(C);C.tables.sort(r).forEach((W,se)=>{const[re,ce,De]=Il(se,C.tables.length);i(W.id,V+re*G,ce*G,j+De*G)}),C.fns.sort(r).forEach((W,se)=>{const[re,ce,De]=Il(se,C.fns.length);i(W.id,V+re*J,ce*J,j+De*J)})}const T=s("migration").sort((_,C)=>String(_.stamp).localeCompare(String(C.stamp))),S=Math.min(760,Math.max(300,T.length*4));T.forEach((_,C)=>{const O=T.length===1?.5:C/(T.length-1);i(_.id,-S/2+S*O,-190,0)});const E=new Map;for(const _ of e)(_.type==="creates"||_.type==="alters")&&o.has(_.target)&&(E.has(_.source)||E.set(_.source,[]),E.get(_.source).push(_.target));const N=new Map;for(const _ of e)if(!(_.type!=="seeds"&&_.type!=="gated-by"))for(const C of E.get(_.source)??[]){const O=o.get(C);O!==es&&O!==void 0&&mg(N,_.target,O)}const w=new Map,A=[];for(const _ of s("flag").sort(r)){const C=pg(N.get(_.id));C!==void 0&&f.has(C)?(w.has(C)||w.set(C,[]),w.get(C).push(_)):A.push(_)}for(const[_,C]of w){const O=f.get(_);C.forEach((V,j)=>{const G=O+(j-(C.length-1)/2)*.055;i(V.id,.74*M*Math.cos(G),95,.74*M*Math.sin(G))})}A.forEach((_,C)=>{const O=C/Math.max(1,A.length)*2*Math.PI;i(_.id,42*Math.cos(O),95,42*Math.sin(O))});const k=s("rung").sort((_,C)=>(_.order??0)-(C.order??0)||r(_,C));k.forEach((_,C)=>i(_.id,(C-(k.length-1)/2)*46,205+C*8,0));const D=s("phase").sort((_,C)=>!!_.planned-!!C.planned||r(_,C)),g=8;return D.forEach((_,C)=>{const O=Math.floor(C/g),V=C%g,j=Math.min(g,D.length-O*g);i(_.id,(V-(j-1)/2)*54,300+O*30,0)}),n.filter(_=>!t.has(_.id)).forEach((_,C)=>i(_.id,C*20,-95,0)),n.map(_=>({..._,...t.get(_.id)}))}const Ee={LIVE:{key:"LIVE",label:"Live in production",color:4054148,hex:"#3ddc84",desc:"Deployed AND its gate is on. Players are touching this right now."},DARK:{key:"DARK",label:"Dark (built, gated off)",color:10906879,hex:"#a66cff",desc:"Deployed to prod but its flag is false. Code is live, behaviour is not."},MIGRATED:{key:"MIGRATED",label:"Merged, not deployed",color:16756794,hex:"#ffb03a",desc:"On main but NOT in the production database yet. Waiting on the deploy gate."},ALWAYS_ON:{key:"ALWAYS_ON",label:"Live, ungated",color:3523040,hex:"#35c1e0",desc:"In prod with no feature flag — additive data or always-on infrastructure."},PLANNED:{key:"PLANNED",label:"Planned, not built",color:9345464,hex:"#8e99b8",desc:"Written down in the plan, with no migration behind it yet. This is the future."},NEEDS_CHECK:{key:"NEEDS_CHECK",label:"Needs checking",color:16733296,hex:"#ff5470",desc:"Production state could not be proven from the repo or the live read."}},mo=["LIVE","ALWAYS_ON","DARK","MIGRATED","PLANNED","NEEDS_CHECK"];function vg(n,e){const t=e?.sources?.gameConfig?.ok===!0,i=e?.flags??{};if(!t)return{flagsKnown:!1,deployedThrough:null,missingFrom:null,confirmedDeployed:[],confirmedMissing:[]};const s=[],r=[];for(const o of n.nodes){if(o.kind!=="migration"||!o.seedsFlag?.length)continue;const a=o.seedsFlag.filter(c=>c in i),l=o.seedsFlag.filter(c=>!(c in i));a.length&&!l.length&&s.push(o.stamp),l.length&&r.push(o.stamp)}return s.sort(),r.sort(),{flagsKnown:t,deployedThrough:s.length?s[s.length-1]:null,missingFrom:r.length?r[0]:null,confirmedDeployed:s,confirmedMissing:r}}function xg(n,e,t){return t.flagsKnown?n.seedsFlag?.length?n.seedsFlag.filter(r=>!(r in e)).length?Ee.MIGRATED:n.seedsFlag.some(r=>e[r]===!0)?Ee.LIVE:Ee.DARK:t.missingFrom&&n.stamp>=t.missingFrom?Ee.MIGRATED:t.deployedThrough&&n.stamp<=t.deployedThrough?Ee.ALWAYS_ON:Ee.NEEDS_CHECK:Ee.NEEDS_CHECK}function Mg(n,e){const t=e?.flags??{},i=vg(n,e),s=new Map,r=new Map,o=new Map(n.nodes.map(d=>[d.id,d]));for(const d of n.nodes)if(d.kind==="flag"){if(!i.flagsKnown){s.set(d.id,Ee.NEEDS_CHECK),r.set(d.id,"no live read available");continue}d.label in t?t[d.label]===!0?(s.set(d.id,Ee.LIVE),r.set(d.id,"game_config row is true in production")):(s.set(d.id,Ee.DARK),r.set(d.id,"game_config row is false in production")):(s.set(d.id,Ee.MIGRATED),r.set(d.id,"seeded in a migration, but no such row in production — its migration has not been applied"))}for(const d of n.nodes){if(d.kind!=="migration")continue;const p=xg(d,t,i);s.set(d.id,p),r.set(d.id,p===Ee.MIGRATED?"not present in production (proven by a missing flag row, or sits after the deploy frontier)":p===Ee.NEEDS_CHECK?"seeds no flag and falls in the unproven band between the deploy frontier and the first missing migration":"reached production")}const a=new Map;for(const d of n.edges){if(d.type!=="creates")continue;const p=a.get(d.target)??[];p.push(o.get(d.source)),a.set(d.target,p)}const l=new Map;for(const d of n.edges){if(d.type!=="gated-by")continue;const p=l.get(d.source)??[];p.push(d.target),l.set(d.source,p)}for(const d of n.nodes){if(d.kind!=="function"&&d.kind!=="table")continue;const p=(a.get(d.id)??[]).filter(Boolean).sort((f,h)=>f.stamp.localeCompare(h.stamp)),u=p[p.length-1];if(!u){s.set(d.id,Ee.NEEDS_CHECK),r.set(d.id,"no creating migration found");continue}const m=s.get(u.id)??Ee.NEEDS_CHECK;if(m===Ee.MIGRATED||m===Ee.NEEDS_CHECK){s.set(d.id,m),r.set(d.id,`its newest definition is ${u.label}, which is ${m.label.toLowerCase()}`);continue}const M=(l.get(u.id)??[]).map(f=>o.get(f)?.label).filter(Boolean).filter(f=>f in t);M.length&&M.every(f=>t[f]===!1)?(s.set(d.id,Ee.DARK),r.set(d.id,`in prod, gated off by ${M.join(", ")}`)):M.some(f=>t[f]===!0)?(s.set(d.id,Ee.LIVE),r.set(d.id,`in prod, gate ${M.filter(f=>t[f]).join(", ")} is on`)):(s.set(d.id,Ee.ALWAYS_ON),r.set(d.id,"in prod, no feature gate found"))}const c=(d,p)=>n.edges.filter(u=>u.source===d&&u.type===p).map(u=>u.target);for(const d of n.nodes){if(d.kind!=="phase"&&d.kind!=="rung")continue;const u=[...c(d.id,"delivers"),...c(d.id,"flips")].map(h=>o.get(h)?.label).filter(Boolean),m=c(d.id,"delivered-by");if(d.kind==="phase"&&d.planned){s.set(d.id,Ee.PLANNED),r.set(d.id,"named in FULL_CAPACITY_PLAN with no migration behind it — not built yet");continue}if(!i.flagsKnown){s.set(d.id,Ee.NEEDS_CHECK),r.set(d.id,"no live read available");continue}if(!u.length&&!m.length){s.set(d.id,Ee.NEEDS_CHECK),r.set(d.id,"the plan names no flag, script, or migration for this — nothing to check it against");continue}const v=u.filter(h=>h in t),M=u.filter(h=>!(h in t)),f=m.map(h=>s.get(h)).filter(Boolean);if(M.length||f.some(h=>h===Ee.MIGRATED))s.set(d.id,Ee.MIGRATED),r.set(d.id,d.kind==="rung"?`blocked — ${M.length?`${M.join(", ")} is not in production`:"a migration behind it has not deployed"}`:"a migration or flag behind this has not reached production");else if(v.length&&v.every(h=>t[h]===!0))s.set(d.id,Ee.LIVE),r.set(d.id,d.kind==="rung"?"done — every flag this rung flips is already on":"shipped and live");else if(v.some(h=>t[h]===!0)){const h=v.filter(S=>t[S]),T=v.filter(S=>!t[S]);s.set(d.id,d.kind==="rung"?Ee.DARK:Ee.LIVE),r.set(d.id,d.kind==="rung"?`still owed — ${T.join(", ")} is off (${h.join(", ")} already on)`:`partly on — ${h.join(", ")} live, ${T.join(", ")} still off`)}else v.length?(s.set(d.id,Ee.DARK),r.set(d.id,d.kind==="rung"?`ready to flip — everything is deployed, ${v.join(", ")} is just off`:`built and deployed, gated off by ${v.join(", ")}`)):(s.set(d.id,Ee.ALWAYS_ON),r.set(d.id,"its migrations are in production and it has no gate"))}for(const d of n.nodes){if(d.kind!=="system")continue;const p=n.edges.filter(m=>m.type==="owned-by"&&m.target===d.id).map(m=>s.get(m.source));if(!p.length){s.set(d.id,Ee.NEEDS_CHECK),r.set(d.id,"owns no scanned table");continue}const u=["LIVE","ALWAYS_ON","DARK","MIGRATED","NEEDS_CHECK"].find(m=>p.some(v=>v?.key===m));s.set(d.id,Ee[u]),r.set(d.id,`rolled up from ${p.length} owned table(s)`)}for(const d of n.nodes)s.has(d.id)||s.set(d.id,Ee.NEEDS_CHECK);return{status:s,why:r,frontier:i}}const Ul=24,yg=250,zs=214,Ki=19;function Sg(n){const{system:e,how:t}=bc(n.nodes,n.edges),i=new Map;for(const[s,r]of e)r&&i.set(s,`system:${r}`);return{assign:i,how:t}}const Wa=["LIVE","ALWAYS_ON","DARK","MIGRATED","NEEDS_CHECK"];function Eg(n){const e=n.map(i=>i.status?.key).filter(Boolean),t=Wa.find(i=>e.includes(i));return Ee[t??"NEEDS_CHECK"]}function Xa(n){if(!n.children?.length)return n.nodeId?1:0;let e=n.nodeId?1:0;for(const t of n.children)e+=Xa(t);return e}function bg(n,e){const t=new Map(n.nodes.map(u=>[u.id,u])),{assign:i,how:s}=Sg(n),r=new Map;for(const u of n.edges.filter(m=>m.type==="owned-by"))r.has(u.target)||r.set(u.target,[]),r.get(u.target).push(u.source);const o=new Map;for(const[u,m]of i)o.has(m)||o.set(m,[]),o.get(m).push(u);const a=(u,m)=>({id:`t:${u}`,nodeId:u,label:t.get(u).label,kind:t.get(u).kind,status:e.get(u),note:m,children:[]}),l=n.nodes.filter(u=>u.kind==="system").sort((u,m)=>u.label.localeCompare(m.label)).map(u=>{const m=[],v=(r.get(u.id)??[]).sort((f,h)=>t.get(f).label.localeCompare(t.get(h).label)),M=(o.get(u.id)??[]).sort((f,h)=>t.get(f).label.localeCompare(t.get(h).label));return v.length&&m.push({id:`g:${u.id}:t`,label:`tables (${v.length})`,kind:"group",children:v.map(f=>a(f))}),M.length&&m.push({id:`g:${u.id}:f`,label:`functions (${M.length})`,kind:"group",children:M.map(f=>a(f,s.get(f)))}),{id:`t:${u.id}`,nodeId:u.id,label:u.label,kind:"system",status:e.get(u.id),children:m}}).filter(u=>u.children.length),c=[],d=n.nodes.filter(u=>u.kind==="table"&&!n.edges.some(m=>m.type==="owned-by"&&m.source===u.id));d.length&&c.push({id:"g:unowned-tables",kind:"group",label:`tables with no sole-writer entry (${d.length})`,note:"not listed in the SYSTEM_BOUNDARIES ownership matrix",children:d.sort((u,m)=>u.label.localeCompare(m.label)).map(u=>a(u.id))});const p=n.nodes.filter(u=>u.kind==="function"&&!i.has(u.id));return p.length&&c.push({id:"g:unclassified",kind:"group",label:`unclassified functions (${p.length})`,note:"touches no owned table and calls nothing already placed — could not be attributed to a system",children:p.sort((u,m)=>u.label.localeCompare(m.label)).map(u=>a(u.id))}),{id:"root",label:"Byeharu",kind:"root",children:[...l,...c]}}function Tg(n,e){const t=new Map(n.nodes.map(a=>[a.id,a])),i=new Map;for(const a of n.edges.filter(l=>l.type==="creates"||l.type==="seeds"))i.has(a.source)||i.set(a.source,[]),i.get(a.source).push(a.target);const s=n.nodes.filter(a=>a.kind==="migration").sort((a,l)=>a.stamp.localeCompare(l.stamp)),r=new Map;for(const a of s){const l=a.addedAt?a.addedAt.slice(0,10):"not yet committed";r.has(l)||r.set(l,[]),r.get(l).push(a)}return{id:"root",label:"Byeharu — in the order we built it",kind:"root",children:[...r].sort((a,l)=>a[0].localeCompare(l[0])).map(([a,l])=>({id:`g:${a}`,kind:"group",label:`${a} — ${l.length} migration${l.length>1?"s":""}`,note:"grouped by the day git first recorded these files, not the synthetic filename stamp",children:l.map(c=>({id:`t:${c.id}`,nodeId:c.id,label:c.label,kind:"migration",status:e.get(c.id),children:(i.get(c.id)??[]).map(d=>({id:`t:${c.id}:${d}`,nodeId:d,label:t.get(d).label,kind:t.get(d).kind,status:e.get(d),children:[]}))}))}))}}function Ag(n,e){const t=new Map(n.nodes.map(r=>[r.id,r])),i=new Map;for(const r of n.edges.filter(o=>o.type==="seeds"||o.type==="gated-by"))i.has(r.target)||i.set(r.target,new Set),i.get(r.target).add(r.source);return{id:"root",label:"Byeharu — by feature gate",kind:"root",children:n.nodes.filter(r=>r.kind==="flag").sort((r,o)=>Wa.indexOf(e.get(r.id).key)-Wa.indexOf(e.get(o.id).key)||r.label.localeCompare(o.label)).map(r=>({id:`t:${r.id}`,nodeId:r.id,label:r.label,kind:"flag",status:e.get(r.id),children:[...i.get(r.id)??[]].sort().map(o=>({id:`t:${r.id}:${o}`,nodeId:o,label:t.get(o).label,kind:"migration",status:e.get(o),children:[]}))}))}}function wg(n,e){const t=new Map(n.nodes.map(a=>[a.id,a])),i=a=>n.edges.filter(l=>l.source===a&&["flips","delivers","delivered-by"].includes(l.type)).map(l=>({id:`t:${a}:${l.target}`,nodeId:l.target,label:t.get(l.target).label,kind:t.get(l.target).kind,status:e.get(l.target),note:l.type,children:[]})),s=n.nodes.filter(a=>a.kind==="rung").sort((a,l)=>a.order-l.order),r=n.nodes.filter(a=>a.kind==="phase").sort((a,l)=>{const c=parseInt(a.label.match(/^P(\d+)/)?.[1]??"99",10),d=parseInt(l.label.match(/^P(\d+)/)?.[1]??"99",10);return c-d||a.label.localeCompare(l.label)}),o=a=>({id:`t:${a.id}`,nodeId:a.id,label:a.label,kind:a.kind,status:e.get(a.id),children:i(a.id)});return{id:"root",label:"Byeharu — what is next",kind:"root",children:[{id:"g:ladder",kind:"group",label:`activation ladder (${s.length} rungs, in order)`,note:"The flips still owed, from FULL_CAPACITY_PLAN §B. Green = already on. Violet = everything is deployed and it is just waiting for a human to flip it. Amber = blocked, something has not reached prod.",children:s.map(o)},{id:"g:queue",kind:"group",label:`development queue (${r.length} slices)`,note:"From FULL_CAPACITY_PLAN §C. Grey = planned, nothing built behind it yet.",children:r.map(o)}]}}const Rg={system:bg,build:Tg,feature:Ag,roadmap:wg};function Cg({graph:n,status:e,svg:t,onSelect:i}){let s="system",r="",o=null,a=new Set,l=null,c=new Map;function d(){o=Rg[s](n,e),function f(h){h.children?.forEach(f),!h.status&&h.children?.length&&(h.status=Eg(h.children)),h.total=Xa(h)}(o),a=new Set,function f(h,T){T>=1&&h.children?.length&&a.add(h.id),h.children?.forEach(S=>f(S,T+1))}(o,0)}const p=f=>!r||f.label.toLowerCase().includes(r);function u(f){return p(f)?!0:(f.children??[]).some(u)}function m(){const f=[];let h=0;return function T(S,E){if(r&&!u(S))return null;const N=a.has(S.id)&&!r?[]:(S.children??[]).map(A=>T(A,E+1)).filter(Boolean),w={n:S,depth:E,kids:N,x:E*yg};return w.y=N.length?(N[0].y+N[N.length-1].y)/2:h+=Ul,f.push(w),w}(o,0),f}function v(){const f=m(),h=Math.max(...f.map(E=>E.y))+Ul,T=Math.max(...f.map(E=>E.x))+zs+40;t.setAttribute("viewBox",`0 0 ${T} ${h+20}`),t.setAttribute("width",T),t.setAttribute("height",h+20);const S=[];for(const E of f)for(const N of E.kids){const w=E.x+zs,A=E.y,k=N.x,D=N.y,g=(w+k)/2;S.push(`<path d="M${w} ${A} C${g} ${A} ${g} ${D} ${k} ${D}" fill="none" stroke="${(N.n.status??Ee.NEEDS_CHECK).hex}" stroke-opacity=".33" stroke-width="1.2"/>`)}for(const E of f){const N=E.n.status??Ee.NEEDS_CHECK,w=E.n.kind==="group"||E.n.kind==="root",A=(E.n.children??[]).length>0,k=a.has(E.n.id)&&!r,D=r&&!p(E.n)?.42:1,g=l===E.n.id,_=E.n.label.length>30?`${E.n.label.slice(0,29)}…`:E.n.label,C=E.n.nodeId?c.get(E.n.nodeId):null;S.push(`<g class="tn${C?" wip":""}" data-id="${E.n.id}" data-node="${E.n.nodeId??""}"${C?` style="--wc:${C}"`:""} transform="translate(${E.x},${E.y-Ki/2})" opacity="${D}">
        <rect width="${zs}" height="${Ki}" rx="4"
          fill="${w?"rgba(255,255,255,.045)":`${N.hex}1c`}"
          stroke="${g?"#fff":N.hex}" stroke-opacity="${g?1:w?.3:.62}" stroke-width="${g?1.6:1}"/>
        ${w?"":`<circle cx="9" cy="${Ki/2}" r="3" fill="${N.hex}"/>`}
        <text x="${w?8:18}" y="${Ki/2+3.6}" font-size="10.5"
          fill="${w?"#c3ccdf":"#e8ecf5"}">${M(_)}</text>
        ${A?`<text x="${zs-8}" y="${Ki/2+3.6}" font-size="9" text-anchor="end" fill="#8792ab">${k?`+${E.n.total}`:"–"}</text>`:""}
      </g>`)}t.innerHTML=S.join(""),t.querySelectorAll(".tn").forEach(E=>{E.style.cursor="pointer",E.addEventListener("click",()=>{const N=E.dataset.id,w=f.find(A=>A.n.id===N);w?.n.children?.length&&!r&&(a.has(N)?a.delete(N):a.add(N)),l=N,i?.(E.dataset.node||null,w?.n??null),v()})})}const M=f=>f.replace(/[<>&]/g,h=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[h]);return d(),v(),{setMode(f){s=f,l=null,d(),v()},setQuery(f){r=f.trim().toLowerCase(),v()},setWip(f){c=f??new Map,v()},expandAll(){a=new Set,v()},collapseAll(){d(),v()},counts(){return{nodes:Xa(o)}}}}const Lg=["LIVE","ALWAYS_ON","DARK","MIGRATED","NEEDS_CHECK"],Nl=["system","rung","phase","flag","table","function","migration"],gt=n=>String(n).replace(/[<>&"]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[e]);function Pg({graph:n,status:e,mount:t,onSelect:i}){let s="",r=null,o=new Map;const a=new Map(n.nodes.map(D=>[D.id,D])),l=n.jobs??[],c=D=>e.get(D)??Ee.NEEDS_CHECK,d=D=>{const g=D.map(_=>c(_).key);return Ee[Lg.find(_=>g.includes(_))??"NEEDS_CHECK"]},p=n.nodes.filter(D=>D.kind==="migration").sort((D,g)=>D.addedAt&&g.addedAt?D.addedAt.localeCompare(g.addedAt)||D.stamp.localeCompare(g.stamp):D.addedAt!==g.addedAt?D.addedAt?-1:1:(D.seq??0)-(g.seq??0)||D.stamp.localeCompare(g.stamp)),u=[];for(const D of p){const g=D.addedAt?D.addedAt.slice(0,10):"not yet committed";u.at(-1)?.day===g?u.at(-1).migs.push(D):u.push({day:g,migs:[D]})}const m=new Map;for(const D of n.edges)D.type==="delivered-by"&&(m.has(D.source)||m.set(D.source,[]),m.get(D.source).push(D.target));const v=n.nodes.filter(D=>D.kind==="phase"&&!D.planned).map(D=>{const g=(m.get(D.id)??[]).map(C=>a.get(C)).filter(Boolean),_=g.map(C=>C.addedAt).filter(Boolean).sort();return{p:D,migCount:g.length,first:_[0]?.slice(0,10)??null}}).sort((D,g)=>D.first&&g.first?D.first.localeCompare(g.first)||D.p.label.localeCompare(g.p.label):D.first!==g.first?D.first?-1:1:D.p.label.localeCompare(g.p.label)),M=Nl.map(D=>{const g=n.nodes.filter(_=>_.kind===D);return{kind:D,live:g.filter(_=>c(_.id).key==="LIVE").length,on:g.filter(_=>c(_.id).key==="ALWAYS_ON").length}}).filter(D=>D.live||D.on),f=n.nodes.filter(D=>D.kind==="flag"&&c(D.id).key==="LIVE").sort((D,g)=>D.label.localeCompare(g.label)),h=n.nodes.filter(D=>c(D.id).key==="MIGRATED"),T=n.nodes.filter(D=>c(D.id).key==="NEEDS_CHECK").length,S=n.nodes.some(D=>["LIVE","ALWAYS_ON","DARK","MIGRATED"].includes(c(D.id).key)),E=new Map;for(const D of n.edges)D.type==="flips"&&(E.has(D.source)||E.set(D.source,[]),E.get(D.source).push(D.target));const N=n.nodes.filter(D=>D.kind==="rung").sort((D,g)=>D.order-g.order),w=D=>{const g=D.label.match(/—\s*S(\d+)/);if(g)return+g[1];const _=D.label.match(/^P(\d+)/);return _?100+ +_[1]:50},A=n.nodes.filter(D=>D.kind==="phase"&&D.planned).sort((D,g)=>w(D)-w(g)||D.label.localeCompare(g.label));function k(){const D=U=>s&&!U.toLowerCase().includes(s)?" dm":"",g=U=>U===r?" sel":"",_=U=>`<span class="tl-chip" style="background:${U.hex}22;color:${U.hex}">
      <span class="swatch" style="background:${U.hex}"></span><span class="ct">${gt(U.label)}</span></span>`,C=U=>{const $=a.get(U),te=c(U);return`<span class="tl-fchip${g(U)}${D($.label)}" data-goto="${gt(U)}"
        style="background:${te.hex}22;color:${te.hex}">
        <span class="swatch" style="background:${te.hex}"></span>${gt($.label)}</span>`},O=(U,{date:$="—",count:te=""}={})=>`
      <div class="tl-row${g(U.id)}${D(U.label)}" data-goto="${gt(U.id)}">
        <span class="tl-date">${gt($)}</span>
        <span class="tl-label">${gt(U.label)}</span>
        ${_(c(U.id))}
        <span class="tl-count">${gt(te)}</span>
      </div>`;let V="";if(u.length){const U=Math.max(...u.map(Me=>Me.migs.length)),$=11,te=u.length*$+14,le=u.map((Me,ye)=>{const Ie=d(Me.migs.map(Ue=>Ue.id)),Ge=5+30*(Me.migs.length/U);return`<rect x="${7+ye*$}" y="${41-Ge}" width="4" height="${Ge.toFixed(1)}" rx="1"
          fill="${Ie.hex}" fill-opacity=".85"><title>${gt(Me.day)} — ${Me.migs.length} migration${Me.migs.length>1?"s":""}</title></rect>`}).join("");V=`<div class="tl-spine"><svg width="${Math.max(te,220)}" height="58" viewBox="0 0 ${Math.max(te,220)} 58">
        <line x1="4" y1="42" x2="${te-4}" y2="42" stroke="rgba(255,255,255,.14)"/>
        ${le}
        <text x="6" y="55" font-size="9" fill="#8792ab">${gt(u[0].day)}</text>
        <text x="${te-4}" y="55" font-size="9" fill="#8792ab" text-anchor="end">${gt(u.at(-1).day)}</text>
      </svg></div>`}const j=v.map(({p:U,migCount:$,first:te})=>O(U,{date:te??"—",count:$?`${$} mig${$>1?"s":""}`:""})).join(""),G=l.map(U=>{const $=(U.migs??[]).filter(te=>a.has(`mig:${te}`)).map(te=>C(`mig:${te}`)).join("");return`<div class="tl-row static${D(U.title)}">
          <span class="tl-date">${gt(U.date)}</span>
          <span class="tl-label" title="${gt(U.title)}">${gt(U.title)}</span>
          <span></span><span class="tl-count"></span>
        </div>
        ${$?`<div class="tl-flips">${$}</div>`:""}`}).join(""),J=M.reduce((U,$)=>U+$.live,0),W=M.reduce((U,$)=>U+$.on,0),se=`<table class="tl-table">
      <thead><tr><th></th>
        <th style="color:${Ee.LIVE.hex}">${gt(Ee.LIVE.label)}</th>
        <th style="color:${Ee.ALWAYS_ON.hex}">${gt(Ee.ALWAYS_ON.label)}</th></tr></thead>
      <tbody>
        ${M.map(U=>`<tr><td>${U.kind}</td><td>${U.live||"·"}</td><td>${U.on||"·"}</td></tr>`).join("")}
        <tr class="tot"><td>total</td><td>${J}</td><td>${W}</td></tr>
      </tbody></table>`,re=f.length?`<div class="tl-subhead">gates on in prod (${f.length})</div>
         <div class="tl-chips">${f.map(U=>C(U.id)).join("")}</div>`:"";let ce;S?h.length?ce=Nl.map(U=>{const $=h.filter(te=>te.kind===U).sort((te,le)=>te.label.localeCompare(le.label));return $.length?`<div class="tl-note">${U} (${$.length})</div>
          <div class="tl-chips">${$.slice(0,40).map(te=>C(te.id)).join("")}
          ${$.length>40?`<span class="tl-note">…${$.length-40} more</span>`:""}</div>`:""}).join(""):ce='<div class="tl-note">all merged work is deployed — nothing is waiting at the deploy gate</div>':ce=`<div class="tl-note" style="color:${Ee.NEEDS_CHECK.hex}">no live read — the deploy frontier cannot be proven</div>`;const De=N.map(U=>{const $=(E.get(U.id)??[]).map(C).join("");return`<div class="tl-rung">
        ${O(U,{date:`R${U.order}`})}
        ${$?`<div class="tl-flips">${$}</div>`:""}
      </div>`}).join(""),He=A.map((U,$)=>O(U,{date:`${$+1}.`,count:(U.size??"").split("—")[0].trim()})).join("");if(t.innerHTML=`
      <section class="tl-sec">
        <div class="tl-era">과거 · past</div>
        <h2>What has been built</h2>
        <div class="tl-desc">${p.length} migrations across ${u.length} days of history —
          each tick is a day, its height how much landed, its colour rolled up from what that day is today.
          Below, every shipped arc in the order it began; the chip is its proven production state.
          Then the complete build log from docs/DEV_LOG.md — every job, database or not.</div>
        ${V}
        <div class="tl-subhead">shipped arcs (${v.length})</div>
        ${j}
        ${l.length?`
          <div class="tl-subhead">build log — every job in docs/DEV_LOG.md (${l.length})</div>
          ${G}`:""}
      </section>
      <section class="tl-sec">
        <div class="tl-era">현재 · present</div>
        <h2>Where we are now</h2>
        <div class="tl-desc">What production proves is live right now, and the deploy frontier —
          work merged to main that has not reached the production database.</div>
        ${se}
        ${re}
        <div class="tl-subhead">deploy frontier</div>
        ${ce}
        ${T?`<div class="tl-note">…and <span style="color:${Ee.NEEDS_CHECK.hex}">${T}</span> node(s) whose production state could not be proven.</div>`:""}
      </section>
      <section class="tl-sec">
        <div class="tl-era">미래 · future</div>
        <h2>What comes next</h2>
        <div class="tl-desc">The activation ladder — the flips still owed, in order — and the development
          queue of planned slices. ${gt(Ee.PLANNED.label)} (grey) means nothing is built behind it yet.</div>
        <div class="tl-subhead">activation ladder (${N.length} rungs)</div>
        ${De}
        <div class="tl-subhead">development queue (${A.length} planned slices)</div>
        ${He}
      </section>`,o.size)for(const U of t.querySelectorAll("[data-goto]")){const $=o.get(U.dataset.goto);$&&(U.classList.add("wip"),U.style.setProperty("--wc",$))}}return t.addEventListener("click",D=>{const g=D.target.closest("[data-goto]");!g||!t.contains(g)||(r=g.dataset.goto,i?.(r),k())}),k(),{setQuery(D){s=D.trim().toLowerCase(),k()},setWip(D){o=D??new Map,k()}}}const Zr=n=>String(n).replace(/[<>&"]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[e]);function Dg({graph:n,status:e,mount:t,onSelect:i}){let s="",r=null;const o=new Map(n.nodes.map(p=>[p.id,p])),a=p=>e.get(p)??Ee.NEEDS_CHECK,l=p=>o.has(p);function c(p,u){if(!l(p))return`<span class="mth-missing" title="not found in the scanned graph">${Zr(u??p)}</span>`;const m=o.get(p),v=a(p),M=u??m.label,f=p===r?" sel":"",h=s&&!M.toLowerCase().includes(s)&&!m.label.toLowerCase().includes(s)?" dm":"";return`<span class="tl-fchip${f}${h}" data-goto="${Zr(p)}"
      style="background:${v.hex}22;color:${v.hex}">
      <span class="swatch" style="background:${v.hex}"></span>${Zr(M)}</span>`}function d(){const p=u=>s&&!u.toLowerCase().includes(s)?" dm":"";t.innerHTML=`
      <section class="tl-sec${p("no spaghetti law authority compose fork dark retire")}">
        <div class="tl-era">the law</div>
        <h2>The no-spaghetti law</h2>
        <div class="tl-desc">Recorded verbatim in <code>docs/MOVEMENT_UNIFICATION_CHARTER.md</code>,
          written after the owner called the movement system spaghetti: <em>if work is or becomes
          spaghetti, rip it out and redo it clean.</em> Four rules, each with a real example below —
          click any chip to jump to that node on the 3D map.</div>

        <div class="tl-subhead">1 — one authority per concept</div>
        <p class="mth-p">Every table has exactly one function that writes it — the sole-writer matrix
          in ${c("system:Movement","SYSTEM_BOUNDARIES.md")} names it explicitly, down to which
          function owns which column when two features share a table. The clearest case: a ship's
          location used to be readable three or four independently-drifted ways; the berth model
          collapsed it to one column (${c("table:main_ship_instances")}) and one CHECK constraint
          making FLEETED-xor-BERTHED true at the schema level — a ghost dock became structurally
          impossible, not just discouraged.</p>

        <div class="tl-subhead">2 — compose, don't fork</div>
        <p class="mth-p">${c("fn:command_ship_group_go","command_ship_group_go")} (the unified
          fleet mover) needed to release a fleet to <code>idle</code> before redirecting it. CI caught
          a hand-rolled first draft that skipped straight past the existing state-transition primitive
          — the fix was composing that primitive, not patching around it.</p>

        <div class="tl-subhead">3 — dark-first: ship behind a flag, byte-identical until lit</div>
        <p class="mth-p">Migrations ${c("mig:20260618000207")}–<code>0215</code> built the whole
          unified fleet mover, CI-proven and merged to <code>main</code>, then sat inert in production
          behind ${c("flag:fleet_movement_unified_enabled")} for days before the owner ran the flip
          script. Nothing player-visible changed between merged and flipped — that gap is the point.</p>

        <div class="tl-subhead">4 — retire the old, once the new one is proven</div>
        <p class="mth-p">Dark-first only works if the old path is actually deleted afterward. The
          charter's own case study (§0) is a session that patched the existing tangle instead of
          building the plan — recorded as the mistake the whole document exists to stop repeating.
          The post-flip plan schedules concrete deletions of the legacy per-ship movers under a
          drain-assert, not a permanent second path kept "just in case."</p>
      </section>

      <section class="tl-sec${p("build loop architect implementer reviewer proof deploy")}">
        <div class="tl-era">the loop</div>
        <h2>The per-slice build loop</h2>
        <div class="tl-desc">Every change of consequence goes through the same five stages, used
          slice after slice across the whole dev log.</div>

        <div class="tl-subhead">architect → implementer → adversarial reviewer → real-Postgres proof → owner-gated deploy</div>
        <p class="mth-p"><b>Architect</b> — read-only, re-derives the inventory by grep rather than
          trusting the last person's count. The movement charter records being wrong about its own
          numbers eight times over its life, including a "fifth copy" of dock-read logic
          (<code>commission_first_main_ship</code>) that survived two prior slices because it used no
          table alias and so matched no one's grep. <b>Lesson kept on the wall:</b> "a charter inventory
          is a CLAIM, not evidence."</p>
        <p class="mth-p"><b>Implementer</b> — its own git worktree per slice (never a shared working
          tree for concurrent changes), and byte-parity for any live function it re-creates.</p>
        <p class="mth-p"><b>Adversarial reviewer</b> — job is to break it, not approve it. A 5-agent
          recon on this same fleet-mover work found two real bugs that thirteen green CI markers had
          missed: a "ghost-dock" leak where a departing fleet's members stayed docked and trading at
          the origin port while the fleet was recorded as flying — the exact duality the mover exists
          to kill, reintroduced by the migration meant to kill it — and a move that could be issued
          into a fleet mid-hunt, silently destroying it on arrival. The charter's own words: "a proof
          pins the property you thought of; it says nothing about the one you didn't."</p>
        <p class="mth-p"><b>Real-Postgres CI apply-proof</b> — every DB-touching migration ships with
          a paired <code>.sql</code>/<code>.sh</code> proof run against a disposable, real Postgres
          instance, never a mock. ${c("mig:20260618000207","The fleet-mover proof")} alone found
          three bugs a local selftest could not: SQL's <code>AND</code> not guaranteeing left-to-right
          evaluation, a null-speed guard silently absorbing a plumbing mistake, and a redirect call that
          violated a live function's <code>status='idle'</code> precondition.</p>
        <p class="mth-p"><b>Owner-gated deploy</b> — CI green never deploys anything by itself. The
          assistant is deliberately blocked from approving a production gate; the human runs
          <code>scripts/approve-deploy.sh</code>, which shows exactly which migrations are in the exact
          commit about to ship before anything is approved. <code>docs/PROD_GATE_APPROVAL_POLICY.md</code>
          exists because this boundary was tested for real once, and the harness held.</p>
      </section>

      <section class="tl-sec${p("verification verify first self assert raise dual safe transaction cron guard")}">
        <div class="tl-era">the discipline</div>
        <h2>Verification</h2>
        <div class="tl-desc">Never assume; verify against the live system, not memory — and never let
          a bad write land quietly.</div>

        <div class="tl-subhead">verify-first, against prod, not a stale note</div>
        <p class="mth-p">A prior session's notes claimed prod SQL access was blocked. The next session
          tested it directly instead of repeating the claim, found it wasn't, and recorded the lesson:
          "a handoff note claiming 'the assistant lacks X' is a point-in-time guess and <em>decays</em>."
          The same discipline found a real reconciliation mismatch live in production: four ships stuck
          at <code>status='traveling'</code> with nothing holding them. Live queries — not a synthetic
          fixture — showed every one of their fleets was already <code>present</code> at a real port;
          the ship's own status field was lying, and the fleet layer already knew the truth. No seeded
          test reproduces that shape; only the real accumulated data does.</p>

        <div class="tl-subhead">self-asserting migrations abort rather than corrupt</div>
        <p class="mth-p">Migrations and activation scripts check their own preconditions and
          <code>RAISE</code> rather than half-apply. ${c("flag:shipyard_enabled","activate-shipyard")}
          runs a per-ingredient reachability check that raises if any recipe ingredient has no live
          faucet; ${c("flag:repair_economy_enabled")}, ${c("flag:launch_from_dock_enabled")}, and
          every other <code>activate-*</code> script are precondition-guarded the same way.</p>

        <div class="tl-subhead">dual-safe irreversible changes: repoint → soak → drop</div>
        <p class="mth-p">Dropping a live column or function is a one-way door, so retirement is
          sequenced to make the door safe before it's used: repoint every reader onto the new authority
          first (each repoint its own small, byte-parity-checked migration), let production run on the
          new path through a real soak so a missed caller surfaces as a live error, then drop the old
          schema behind its own drain-assert.</p>

        <div class="tl-subhead">all-or-nothing guarded transactions</div>
        <p class="mth-p">${c("fn:process_fleet_movements")} and ${c("fn:process_combat_ticks")}
          are the two hottest crons in the game. A 7-agent audit found they ran every row in one
          transaction with no per-row isolation, so a single failing row aborted the whole tick, for
          every player, forever. ${c("mig:20260618000206","CRON-GUARD")} fixed it by composing the
          per-row exception-isolation pattern the build-queue engine already used — no flag needed,
          because a strictly-safer error path with a byte-identical success path is simply correct.</p>
      </section>

      <section class="tl-sec${p("server authoritative data driven client mirror")}">
        <div class="tl-era">the stance</div>
        <h2>Server-authoritative, data-driven</h2>
        <div class="tl-desc">"The client only displays what the server says." No table holding game
          state has a client write path; every mutation is a validated <code>SECURITY DEFINER</code>
          RPC. New capability is new data — rows and flags — not a new engine.</div>
        <p class="mth-p">Mk-II modules are two new rows against the fitting adapter built once. The
          shipyard's hull builds reuse the same build-order queue engine originally built for unit
          training — "never a second timer system." Ship traits, command buffs, and captain trait rolls
          all reuse one deterministic hash-of-id technique instead of each inventing its own randomness.
          The rule for the stat adapter itself: "don't replace the engine — replace the source."</p>
      </section>

      <section class="tl-sec${p("world editor owner authoring rpc audit idempotency concurrency lifecycle revert coordinates dev world")}">
        <div class="tl-era">the editor</div>
        <h2>The World Editor: authoring the world the same way the game mutates it</h2>
        <div class="tl-desc">${c("phase:WORLDEDIT","WORLDEDIT")} is the one place the world's static
          content is authored — locations, mining fields, exploration sites, danger zones. It is worth
          reading as architecture rather than as a feature: it is the stance above applied to the one
          actor who could legitimately have been trusted to bypass it.</div>

        <div class="tl-subhead">why owner-only, and why that is not the authorization</div>
        <p class="mth-p">The editor edits live content in a live multiplayer world, so its blast radius
          is every player at once. Only the owner may author — but "owner" is a fact the server
          establishes, never a claim the client makes. ${c("fn:is_owner")} is the single
          authorization authority, backed by an owner table, and it is checked <em>inside</em> every
          command body. The client route flag only decides whether the editor UI is worth rendering; it
          decides nothing about permission. That separation is the point: a UX gate that fails open
          costs nothing, an authorization gate that fails open costs the world.</p>

        <div class="tl-subhead">why writes go through RPCs, not tables</div>
        <p class="mth-p">The editor writes tables it does not own: ${c("table:locations")},
          ${c("table:zones")}, ${c("table:sectors")} belong to Map, the mining and exploration
          content to Reference/Config. Under one-authority-per-concept, an authoring surface with direct
          table access would be a second writer — exactly the fork the law forbids. So every edit is a
          <code>SECURITY DEFINER</code> RPC with <code>search_path=''</code> and EXECUTE granted to
          authenticated callers only, and the client's own INSERT/UPDATE/DELETE grants on those tables
          are revoked. The editor is not privileged; it is narrow.</p>

        <div class="tl-subhead">one fixed sequence, in one transaction</div>
        <p class="mth-p">Every command runs the same order, and the order is the design: <b>authorize</b>
          (${c("fn:is_owner")} in-body, before anything is disclosed — a non-owner cannot even learn
          whether a request was a replay), <b>validate</b> server-side against one shared validator so
          six commands cannot drift into six coordinate rules, <b>deduplicate</b> on a caller-supplied
          request ID recorded in the audit ledger so a retried publish is not a second publish,
          <b>mutate</b>, then <b>audit</b> — the before/after snapshot inserted in the same transaction
          as the change, so an unaudited edit is not a thing that can exist.</p>

        <div class="tl-subhead">optimistic concurrency instead of locks</div>
        <p class="mth-p">Editing is a long human activity; holding a lock across it would be a lie about
          how the work happens. Instead each edit carries the snapshot it was forked from, and
          ${c("fn:location_update")} (and its siblings) refuse the write if the row has moved since —
          the UI answers with an explicit "reload the live version" rather than silently winning. A lost
          update is turned into a visible conflict.</p>

        <div class="tl-subhead">lifecycle, not deletion — and everything reversible</div>
        <p class="mth-p">Nothing is destroyed. ${c("fn:zone_unpublish")} moves a zone to inactive and
          ${c("fn:zone_set_active")} brings it back; ${c("fn:location_update")} carries the same
          transition for locations. The row survives as its own evidence, which is what makes
          ${c("fn:world_editor_revert")} possible: the ONE revert replays an audit record's <em>before</em>
          state back through that domain's own update command. A revert is therefore an ordinary edit —
          same authorization, same validation, same new audit row — never a privileged direct write, and
          never a second recovery path to keep in sync. Reading that history is its own owner-only,
          sanitized, paginated command (${c("fn:world_editor_audit_list")} over
          ${c("table:world_editor_audit")}), and because every gameplay read is active-only by
          construction, seeing inactive content needs deliberate owner-only reads
          (${c("fn:world_editor_entity_catalog")}, ${c("fn:world_editor_entity_detail")}) rather
          than a relaxed filter on the player's.</p>

        <div class="tl-subhead">physical coordinates vs. what the editor draws</div>
        <p class="mth-p">A world too sparse to edit comfortably is a display problem, and the tempting
          fix — rescaling the stored coordinates — would silently rewrite every distance, travel time and
          proximity rule in the game. So the physical frame is frozen and the adapter moved: stored
          gameplay coordinates are untouched, and the editor view is controlled by typed display adapters
          plus the camera. ${c("fn:location_create")} and ${c("fn:location_update")} write the
          anchor authority, and one canonical bounds validator is the only place the legal coordinate
          range is written down.</p>

        <div class="tl-subhead">four domains, one surface</div>
        <p class="mth-p">The four domains share the map, the draft model, the concurrency contract, the
          audit panel and the revert button, because they share the command shape underneath — zone
          authoring (${c("fn:zone_create")}, ${c("fn:zone_update")}) differs from point authoring
          only in its geometry, not in its rules. A per-domain editor would have been four drafts, four
          audits and four reverts to keep honest; instead the parity is structural.</p>

        <div class="tl-subhead">how it was verified without touching the live world</div>
        <p class="mth-p">Every mutation path — create, update, unpublish, reactivate, revert,
          concurrency, idempotency, audit — is proven end-to-end by the disposable-PostgreSQL apply-proof
          CI, which applies the whole migration chain to a real database and asserts the gameplay readers
          stay byte-identical. The production check was deliberately the other half: a READ-ONLY closure
          smoke on ${c("fn:world_editor_ping")} and the owner-gated read surface — no production write
          RPC was invoked. That asymmetry is honest and intentional. Live writes are proven by CI, not by
          mutating a world thirty people are playing in.</p>
      </section>

      <section class="tl-sec${p("narrative arc core loop economy movement berth activation combat grew")}">
        <div class="tl-era">the arc</div>
        <h2>How the game grew</h2>
        <div class="tl-desc">Read <code>docs/DEV_LOG.md</code> in build order and one method applies
          across a widening set of systems. See the <b>연혁 Timeline</b> tab for the full chronological
          build log this traces.</div>
        <ol class="mth-arc">
          <li><b>Core loop first.</b> ${c("system:Movement")} → ${c("system:Presence")} →
            ${c("system:Combat")}, nothing else, before anything is layered on.</li>
          <li><b>Economy, layered on the proven loop.</b> Trade, haul contracts, salvage — each its own
            flag, wired onto ${c("system:Wallet")} / ${c("system:Inventory")} that already
            existed, never a second currency.</li>
          <li><b>Movement + berth unification</b> — the project's own case study: four overlapping
            movement paths called spaghetti by the owner, replaced by one fleet-level mover
            (${c("fn:command_ship_group_go")}) that writes nothing to the per-ship table, soaked
            dark, then flipped live.</li>
          <li><b>Activation of the dark systems</b> — exploration, mining, ${c("flag:shipyard_enabled","shipyard")},
            shields, all built and proven, waiting on a human decision and a dependency order before
            they're lit.</li>
          <li><b>Fleet-control and combat overhaul</b> — ${c("flag:fleet_control_enabled")} and
            ${c("flag:command_buffs_enabled")}, the pattern at its most mature: related changes,
            each its own migration, each byte-identical while dark.</li>
        </ol>
        <div class="mth-src">Grounded in <code>docs/HOW_ITS_BUILT.md</code>,
          <code>docs/MOVEMENT_UNIFICATION_CHARTER.md</code>, <code>docs/SYSTEM_BOUNDARIES.md</code>,
          <code>docs/FULL_CAPACITY_PLAN.md</code>, <code>docs/ACTIVATION_GUIDE.md</code>,
          <code>docs/ARCHITECTURE.md</code>, <code>docs/PROD_GATE_APPROVAL_POLICY.md</code>,
          <code>docs/WORLD_EDITOR_V1_CLOSURE.md</code>,
          <code>docs/WORLD_EDITOR_ROADMAP_CLOSURE.md</code>, and the
          <code>scripts/*-proof.{sh,sql}</code> + <code>.github/workflows/*proof*.yml</code> family.</div>
      </section>`}return t.addEventListener("click",p=>{const u=p.target.closest("[data-goto]");!u||!t.contains(u)||(r=u.dataset.goto,i?.(r),d())}),d(),{setQuery(p){s=p.trim().toLowerCase(),d()}}}const Fl=(n,e,t)=>{const i=n.get(e)??[];i.push(t),n.set(e,i)},Jr=n=>n&&n.length?n.slice().sort()[0]:null;function Ig(n){const e=new Map(n.nodes.map(l=>[l.id,l])),t=l=>l?.addedAt?l.addedAt.slice(0,10):null,i=new Map;for(const l of n.nodes)l.kind==="migration"&&i.set(l.id,t(l));const s=new Map,r=new Map;for(const l of n.edges){const c=t(e.get(l.source));c&&(l.type==="creates"?Fl(s,l.target,c):l.type==="seeds"&&Fl(r,l.target,c))}for(const l of n.nodes)i.get(l.id)||(l.kind==="function"||l.kind==="table"?i.set(l.id,Jr(s.get(l.id))):l.kind==="flag"&&i.set(l.id,Jr(r.get(l.id))));for(const l of n.nodes){if(l.kind!=="system")continue;const c=n.edges.filter(d=>d.type==="owned-by"&&d.target===l.id).map(d=>i.get(d.source)).filter(Boolean);i.set(l.id,Jr(c))}const o=[...new Set([...i.values()].filter(Boolean))].sort(),a=o[o.length-1]??null;for(const l of n.nodes)i.get(l.id)||i.set(l.id,a);return{birth:i,days:o}}const $a={system:5.2,rung:4.6,phase:4.2,flag:3.4,table:2.4,migration:1.7,function:1.3},Tc=["creates","supersedes","extends","alters","drops","seeds","gated-by","calls","touches","owned-by","owned-by-fn","delivers","delivered-by","flips","waits-on"],Ug={creates:"migration defines a function/table",supersedes:"migration re-creates a function an earlier one defined",extends:"migration alters a table an earlier one created",alters:"migration changes a table",drops:"migration removes a function",seeds:"migration inserts a game_config flag","gated-by":"migration reads a flag to gate behaviour",calls:"function calls another function",touches:"function reads/writes a table","owned-by":"table belongs to a system (sole writer)","owned-by-fn":"function belongs to a system (named in SYSTEM_BOUNDARIES)",delivers:"a plan slice delivers this feature gate","delivered-by":"a plan slice was delivered by this migration",flips:"an activation rung flips this flag","waits-on":"this rung waits on the one before it"},Ji="./",[ut,Tn,Ac,Ng]=await Promise.all([fetch(`${Ji}graph.json`).then(n=>n.json()),fetch(`${Ji}live.json`).then(n=>n.json()).catch(()=>null),fetch(`${Ji}wip.json`).then(n=>n.json()).catch(()=>null),fetch(`${Ji}purpose.json`).then(n=>n.json()).catch(()=>null)]),Fg=Ng?.purpose??{},wc=n=>Fg[n]||"",{status:jt,why:Og,frontier:Ol}=Mg(ut,Tn),{birth:rr,days:Bg}=Ig(ut),go=new Map(ut.nodes.map(n=>[n.id,n])),qa=new Map;for(const n of ut.edges){if(n.type!=="creates"&&n.type!=="seeds")continue;const e=go.get(n.source)?.stamp;if(!e)continue;const t=qa.get(n.target);(!t||e<t)&&qa.set(n.target,e)}const Bl={migration:0,flag:1,table:2,function:3,system:4,phase:5,rung:6},kl=n=>(n.kind==="migration"?n.stamp:qa.get(n.id))??"99999999999999",Kn=ut.nodes.slice().sort((n,e)=>{const t=rr.get(n.id),i=rr.get(e.id);if(t!==i)return t<i?-1:1;const s=kl(n),r=kl(e);if(s!==r)return s<r?-1:1;const o=Bl[n.kind]??9,a=Bl[e.kind]??9;return o!==a?o-a:n.id<e.id?-1:1}).map(n=>n.id),kg=new Map(Kn.map((n,e)=>[n,e])),hs=Kn.length-1,Ht=_g(ut.nodes,ut.edges),Nn=new Map(Ht.map(n=>[n.id,n])),Rc=new Map(Ht.map((n,e)=>[n.id,e])),wn=new Map;for(const n of ut.edges)wn.has(n.source)||wn.set(n.source,[]),wn.has(n.target)||wn.set(n.target,[]),wn.get(n.source).push({...n,dir:"out",other:n.target}),wn.get(n.target).push({...n,dir:"in",other:n.source});const Ni=document.getElementById("scene"),_o=new Qm({canvas:Ni,antialias:!0});_o.setPixelRatio(Math.min(devicePixelRatio,2));const us=new eg,mn=new Bt(58,1,1,6e3);us.add(new dg(16777215,1.5));const Cc=new cg(16777215,1.1);Cc.position.set(1,1,1);us.add(Cc);const zg=new po(1,14,10),Hg=new ag({transparent:!0}),ot=new ig(zg,Hg,Ht.length);ot.instanceColor=new Ga(new Float32Array(Ht.length*3),3);us.add(ot);const Ft=new ht,kt=new Float32Array(Ht.length*3);Ht.forEach((n,e)=>{const t=new Ne(jt.get(n.id).color);kt[e*3]=t.r,kt[e*3+1]=t.g,kt[e*3+2]=t.b});const as=new rn,Rn=new Float32Array(ut.edges.length*6),Ks=new Float32Array(ut.edges.length*6);ut.edges.forEach((n,e)=>{const t=Nn.get(n.source),i=Nn.get(n.target);Rn.set([t.x,t.y,t.z,i.x,i.y,i.z],e*6)});as.setAttribute("position",new It(Rn,3));as.setAttribute("color",new It(Ks,3));const Gg=new rg(as,new Sc({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1,blending:ea}));us.add(Gg);const tt={status:new Set(mo),kind:new Set(["system","rung","phase","flag","table","migration","function"]),edge:new Set(["creates","supersedes","extends","seeds","gated-by","owned-by","owned-by-fn","delivers","flips","waits-on"]),query:"",selected:null};let ts=[],Lc=new Set;const ar=new Map;let Ya=[];const yi=new Map;let jn="map",tn=null,ns=null,Ka=null;const Ke={on:!1,playing:!1,i:Bg.length-1,last:0},Vg=200,zl=560,Wg=n=>!tt.query||n.label.toLowerCase().includes(tt.query)||(n.detail??"").toLowerCase().includes(tt.query);function Zn(n){return Ke.on&&kg.get(n.id)>Ke.i?!1:tt.status.has(jt.get(n.id).key)&&tt.kind.has(n.kind)&&Wg(n)}function _n(){const n=tt.selected,e=n?new Set([n,...(wn.get(n)??[]).map(s=>s.other)]):null;let t=0;Ht.forEach((s,r)=>{const o=Zn(s);o&&t++;const a=e&&!e.has(s.id),l=o?$a[s.kind]*(s.id===n?2.1:1)*(Lc.has(s.id)?1.7:1):0;Ft.position.set(s.x,s.y,s.z),Ft.scale.setScalar(o?a?l*.55:l:0),Ft.updateMatrix(),ot.setMatrixAt(r,Ft.matrix);const c=a?.22:1;ot.instanceColor.array[r*3]=kt[r*3]*c,ot.instanceColor.array[r*3+1]=kt[r*3+1]*c,ot.instanceColor.array[r*3+2]=kt[r*3+2]*c}),ot.instanceMatrix.needsUpdate=!0,ot.instanceColor.needsUpdate=!0;let i=0;ut.edges.forEach((s,r)=>{const o=Nn.get(s.source),a=Nn.get(s.target),l=tt.edge.has(s.type)&&Zn(o)&&Zn(a)&&(!e||e.has(s.source)&&e.has(s.target));l&&i++;const c=l?new Ne(jt.get(s.source).color):null;for(let d=0;d<2;d++){const p=r*6+d*3;if(Ks[p]=c?c.r:0,Ks[p+1]=c?c.g:0,Ks[p+2]=c?c.b:0,!l)Rn[p]=0,Rn[p+1]=0,Rn[p+2]=0;else{const u=d===0?o:a;Rn[p]=u.x,Rn[p+1]=u.y,Rn[p+2]=u.z}}}),as.attributes.position.needsUpdate=!0,as.attributes.color.needsUpdate=!0,Jg(t,i)}const Pc=n=>Ht.reduce((e,t)=>(e[n(t)]=(e[n(t)]??0)+1,e),{}),Xg=Pc(n=>jt.get(n.id).key),$g=Pc(n=>n.kind),qg=ut.edges.reduce((n,e)=>(n[e.type]=(n[e.type]??0)+1,n),{});function ur({id:n,label:e,color:t,count:i,checked:s,title:r,onChange:o}){const a=document.createElement("label");return a.className="row",r&&(a.title=r),a.innerHTML=`<input type="checkbox" ${s?"checked":""}/>
    ${t?`<span class="swatch" style="background:${t}"></span>`:""}
    <span>${e}</span><span class="count">${i}</span>`,a.querySelector("input").addEventListener("change",l=>{o(l.target.checked),_n()}),a}const Yg=document.getElementById("statusFilters");for(const n of mo){const e=Ee[n];Yg.append(ur({label:e.label,color:e.hex,count:Xg[n]??0,checked:!0,title:e.desc,onChange:t=>t?tt.status.add(n):tt.status.delete(n)}))}const Kg=document.getElementById("kindFilters");for(const n of["rung","phase","system","flag","table","migration","function"])Kg.append(ur({label:n,count:$g[n]??0,checked:!0,onChange:e=>e?tt.kind.add(n):tt.kind.delete(n)}));const jg=document.getElementById("edgeFilters");for(const n of Tc)jg.append(ur({label:n,count:qg[n]??0,checked:tt.edge.has(n),title:Ug[n],onChange:e=>e?tt.edge.add(n):tt.edge.delete(n)}));let ja=!1;document.getElementById("cameraOptions").append(ur({label:"Auto-rotate",count:"",checked:ja,title:"Slowly orbit the map on its own while you are not dragging or flying",onChange:n=>{ja=n}}));document.getElementById("search").addEventListener("input",n=>{const e=n.target.value;if(jn==="tree"){tn?.setQuery(e);return}if(jn==="timeline"){ns?.setQuery(e);return}if(jn==="method"){Ka?.setQuery(e);return}tt.query=e.trim().toLowerCase(),_n()});document.getElementById("reset").addEventListener("click",()=>{tt.status=new Set(mo),tt.kind=new Set(["rung","phase","system","flag","table","migration","function"]),tt.edge=new Set(["creates","supersedes","extends","seeds","gated-by","owned-by","owned-by-fn","delivers","flips","waits-on"]),tt.query="",tt.selected=null,document.getElementById("search").value="",document.querySelectorAll("#statusFilters input, #kindFilters input").forEach(n=>{n.checked=!0}),document.querySelectorAll("#edgeFilters input").forEach((n,e)=>{n.checked=tt.edge.has(Tc[e])}),document.getElementById("inspect").classList.remove("on"),Ot.set(0,0,0),Zt=520,Cn=.7,or=.35,_n()});const Zg=document.getElementById("subtitle");Zg.textContent=`${ut.counts.nodes} nodes · ${ut.counts.edges} connections`;function Jg(n,e){const t=document.getElementById("hud"),i=Tn?.sources?.gameConfig?.ok,s=Tn?.fetchedAt?new Date(Tn.fetchedAt).toLocaleString():"—",r=Tn?.deploy?.state??"unknown",o=r!=="success";t.innerHTML=`
    <b>${n}</b> nodes · <b>${e}</b> connections shown &nbsp;|&nbsp;
    prod: ${i?`<b>${Tn.sources.gameConfig.host}</b> · ${Object.values(Tn.flags).filter(Boolean).length}/${Object.keys(Tn.flags).length} flags on`:'<span class="warn">no live read — colours are unproven</span>'} &nbsp;|&nbsp;
    deploy: <b class="${o?"warn":""}">${r}</b>
    ${Ol.missingFrom?`&nbsp;|&nbsp; <span class="warn">prod is behind main from ${Ol.missingFrom} onward</span>`:""}
    &nbsp;|&nbsp; read ${s}
    <br><b>drag</b> rotate · <b>WASD / arrows</b> fly · <b>Q / E</b> down·up · <b>scroll</b> zoom · <b>shift- or right-drag</b> pan`}function Qg(n){const e=document.getElementById("inspect");if(!n){e.classList.remove("on");return}const t=Nn.get(n),i=jt.get(n),s=wn.get(n)??[],r={};for(const a of s){const l=`${a.dir==="out"?"":"← "}${a.type}`;(r[l]??=[]).push(a)}e.classList.add("on");const o=wc(n);e.innerHTML=`
    <div class="kind">${t.kind}</div>
    <h3>${t.label}</h3>
    <div class="pill" style="background:${i.hex}22;color:${i.hex}">
      <span class="swatch" style="background:${i.hex}"></span>${i.label}</div>
    ${o?`<div class="ingame"><span class="ingame-tag">In the game</span>${o}</div>`:""}
    <div class="why">${Og.get(n)??""}</div>
    ${t.file?`<div class="file">${t.file}</div>`:""}
    ${t.detail?`<div class="det">${t.detail}</div>`:""}
    <div class="rel">
      ${Object.entries(r).map(([a,l])=>`
        <h4>${a} (${l.length})</h4>
        ${l.slice(0,22).map(c=>{const d=Nn.get(c.other),p=jt.get(c.other);return`<div data-goto="${c.other}">
            <span class="swatch" style="background:${p.hex}"></span>
            <span>${d.label}</span>${c.note?`<span class="t">${c.note}</span>`:""}</div>`}).join("")}
        ${l.length>22?`<div class="t">…${l.length-22} more</div>`:""}
      `).join("")}
    </div>`,e.querySelectorAll("[data-goto]").forEach(a=>{a.addEventListener("click",()=>wi(a.dataset.goto))})}function wi(n){if(tt.selected=n,Qg(n),n){const e=Nn.get(n);Ot.set(e.x,e.y,e.z),Zt=Math.min(Zt,340)}_n()}const Jt=document.getElementById("workingNow");function Dc(n){ts=n?.items??[],Lc=new Set(ts.flatMap(e=>e.nodes)),ar.clear(),yi.clear(),Ya=[];for(const e of ts){const t=e.color||"#ff2d95",i=new Ne(t);for(const s of e.nodes){yi.set(s,t);const r=Rc.get(s);r!=null&&(ar.set(r,i),Ya.push({i:r,n:Ht[r],col:i}))}}e_(n),tn?.setWip?.(yi),ns?.setWip?.(yi),_n()}function e_(n){if(!ts.length){Jt.innerHTML='<div class="wn-head"><span>Working now</span></div><div class="wn-empty">No open pull requests — nothing in flight.</div>',Jt.classList.add("on");return}const e=n?.generatedAt?new Date(n.generatedAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",t=ts.map(i=>{const s=i.nodes[0],r=(i.touches?.functions?.length??0)+(i.touches?.tables?.length??0),o=[i.stamp?i.stamp.slice(8):null,`#${i.pr}`,r?`${r} symbol${r===1?"":"s"}`:`${i.nodes.length} node${i.nodes.length===1?"":"s"}`].filter(Boolean).join(" · ");return`<div class="wn-item" data-node="${s}" title="Fly to it">
      <span class="wn-dot" style="background:${i.color}"></span>
      <span class="wn-body"><span class="wn-title">${i.title.replace(/</g,"&lt;")}</span>
      <span class="wn-meta">${o}</span></span></div>`}).join("");Jt.innerHTML=`<div class="wn-head"><span class="wn-live"></span><span>Working now</span><span class="wn-when">${e}</span><button class="wn-fold" title="Collapse" aria-label="Collapse">${Jt.classList.contains("folded")?"+":"–"}</button></div>${t}`,Jt.classList.add("on"),Jt.querySelector(".wn-fold")?.addEventListener("click",()=>{Jt.classList.toggle("folded"),Jt.querySelector(".wn-fold").textContent=Jt.classList.contains("folded")?"+":"–"}),Jt.querySelectorAll(".wn-item").forEach(i=>i.addEventListener("click",()=>{const s=i.getAttribute("data-node");Nn.has(s)&&wi(s)}))}let Hl=Ac?.generatedAt??null;Dc(Ac);setInterval(async()=>{if(!document.hidden)try{const n=await fetch(`${Ji}wip.json?t=${Math.floor(performance.now())}`).then(t=>t.json()),e=n?.generatedAt??null;if(e===Hl)return;Hl=e,Dc(n)}catch{}},2e4);document.querySelectorAll(".fold[data-fold]").forEach(n=>{n.addEventListener("click",()=>{const e=document.getElementById(n.dataset.fold);e?.classList.toggle("folded"),n.textContent=e?.classList.contains("folded")?"+":"–"})});const Za=document.getElementById("declutter"),Ic=()=>{const n=document.body.classList.toggle("clean");Za.setAttribute("aria-pressed",String(n)),Za.title=n?"Show panels (H)":"Hide all panels (H)"};Za.addEventListener("click",Ic);addEventListener("keydown",n=>{n.key.toLowerCase()==="h"&&jn==="map"&&!Mo()&&Ic()});const Uc=document.getElementById("historyBtn"),t_=document.getElementById("playback"),Nc=document.getElementById("pbPlay"),Ja=document.getElementById("pbSlider"),n_=document.getElementById("pbLabel"),Qr=document.getElementById("pbCaption"),i_=document.getElementById("pbSpeed");let Fc=1;i_.addEventListener("change",n=>{Fc=parseFloat(n.target.value)||1});let Si=[];const s_=n=>{try{return new Date(n+"T00:00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return n}},Oc=n=>n.kind==="flag"?n.label.replace(/_enabled$/,"").replace(/_/g," "):n.kind==="migration"?n.label.replace(/^(init|add|create|new|seed|make)_/i,"").replace(/_/g," "):n.label,r_=n=>wc(n).replace(/\s*\([^)]*\)\s*$/,"");function Bc(){if(!Ke.on){Qr.classList.remove("on");return}const n=Kn[Ke.i],e=go.get(n),t=r_(n);Qr.classList.add("on"),Qr.innerHTML=`<div class="cap-date">${s_(rr.get(n))}</div><div class="cap-head"><span class="cap-dot" style="background:${jt.get(n).hex}"></span><b>${Oc(e)}</b> <span class="cap-kind">${e.kind}</span></div>`+(t?`<div class="cap-row">${t}</div>`:'<div class="cap-quiet">Under-the-hood plumbing — no direct player effect.</div>')}function fr(){Ja.max=String(hs),Ja.value=String(Ke.i);const n=go.get(Kn[Ke.i]);n_.innerHTML=`<b>${Oc(n)}</b><span class="pb-sub">${Ke.i+1} / ${Kn.length} · ${rr.get(Kn[Ke.i])}</span>`,Nc.textContent=Ke.playing?"⏸":"▶"}function vo(n,e=!1){const t=Math.max(0,Math.min(hs,n));if(e&&t!==Ke.i){const i=Rc.get(Kn[t]);i!=null&&Si.push({i,t:performance.now()})}Ke.i=t,_n(),fr(),Bc()}function kc(n){Ke.on=n,Ke.playing=!1,Si=[],document.body.classList.toggle("history",n),Uc.setAttribute("aria-pressed",String(n)),t_.classList.toggle("on",n),Ke.i=n?0:hs,_n(),n&&fr(),Bc()}function a_(){Ke.on&&(Ke.i>=hs&&vo(0),Ke.playing=!Ke.playing,Ke.last=performance.now(),fr())}Uc.addEventListener("click",()=>kc(!Ke.on));Nc.addEventListener("click",a_);Ja.addEventListener("input",n=>{Ke.playing=!1,vo(+n.target.value)});addEventListener("keydown",n=>{jn!=="map"||Mo()||n.key.toLowerCase()==="p"&&kc(!Ke.on)});const zc=document.getElementById("menuBtn"),Hc=document.getElementById("scrim");function xo(n){document.getElementById("controls").classList.toggle("open",n),Hc.classList.toggle("on",n),zc.setAttribute("aria-expanded",String(n))}zc.addEventListener("click",()=>xo(!document.getElementById("controls").classList.contains("open")));Hc.addEventListener("click",()=>xo(!1));addEventListener("keydown",n=>{n.key==="Escape"&&xo(!1)});const _i=new F(0,0,0),Ot=new F(0,0,0);let vi=520,Qi=.7,xi=.35,Et=null,Zt=520,Cn=.7,or=.35;const Hs=.22,_t=new Set,o_=new Set(["w","a","s","d","q","e"," ","arrowup","arrowdown","arrowleft","arrowright"]),Mo=()=>{const n=document.activeElement;return!!n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.tagName==="SELECT")};addEventListener("keydown",n=>{if(jn!=="map"||Mo())return;const e=n.key.toLowerCase();o_.has(e)&&(_t.add(e),e===" "&&n.preventDefault())});addEventListener("keyup",n=>_t.delete(n.key.toLowerCase()));addEventListener("blur",()=>_t.clear());Ni.addEventListener("contextmenu",n=>n.preventDefault());const is=new F,Gl=new F,js=new F;function Gc(){const n=innerWidth,e=innerHeight;_o.setSize(n,e),mn.aspect=n/e,mn.updateProjectionMatrix()}addEventListener("resize",Gc);Gc();const Dt=new Map;let Ei=null;const Vc=()=>{const[n,e]=[...Dt.values()];return Math.hypot(n.x-e.x,n.y-e.y)};Ni.addEventListener("pointerdown",n=>{Ni.setPointerCapture?.(n.pointerId),Dt.set(n.pointerId,{x:n.clientX,y:n.clientY}),Dt.size===2?(Ei={d:Vc(),dist:Zt},Et=null):Dt.size===1&&(Et={x:n.clientX,y:n.clientY,moved:!1,pan:n.button===2||n.shiftKey})});function Wc(n){const e=Dt.size;if(Dt.delete(n.pointerId),e===1&&Et&&!Et.moved&&c_(n),Dt.size<2&&(Ei=null),Dt.size===0)Et=null;else if(Dt.size===1){const[t]=[...Dt.values()];Et={x:t.x,y:t.y,moved:!0}}}addEventListener("pointerup",Wc);addEventListener("pointercancel",Wc);addEventListener("pointermove",n=>{if(Dt.has(n.pointerId)&&Dt.set(n.pointerId,{x:n.clientX,y:n.clientY}),Dt.size===2&&Ei){const e=Vc();e>0&&Ei.d>0&&(Zt=Math.max(40,Math.min(2200,Ei.dist*(Ei.d/e))));return}if(Et){const e=n.clientX-Et.x,t=n.clientY-Et.y;if(Math.abs(e)+Math.abs(t)>4&&(Et.moved=!0),Et.pan){mn.matrixWorld.extractBasis(is,Gl,js);const i=Zt*.0016;Ot.addScaledVector(is,-e*i),Ot.addScaledVector(Gl,t*i)}else Cn-=e*.0034,or=Math.max(-1.45,Math.min(1.45,or-t*.0034));Et.x=n.clientX,Et.y=n.clientY}else n.pointerType==="mouse"&&l_(n)});const Vl=new F,Wl=new F,Xl=new An;Ni.addEventListener("wheel",n=>{n.preventDefault();let e=n.deltaY;n.deltaMode===1?e*=16:n.deltaMode===2&&(e*=400);const t=Math.max(-.2,Math.min(.2,e*.0022)),i=Math.max(40,Math.min(2200,Zt*(1+t))),s=i/Zt;if(s!==1){Ri.x=n.clientX/innerWidth*2-1,Ri.y=-(n.clientY/innerHeight)*2+1,ss.setFromCamera(Ri,mn);let r=null;for(const o of ss.intersectObject(ot))if(Zn(Ht[o.instanceId])){r=Vl.copy(o.point);break}r||(mn.getWorldDirection(Wl),Xl.setFromNormalAndCoplanarPoint(Wl,_i),r=ss.ray.intersectPlane(Xl,Vl)),r&&Ot.lerp(r,1-s)}Zt=i},{passive:!1});const ss=new hg,Ri=new We;function Xc(n){Ri.x=n.clientX/innerWidth*2-1,Ri.y=-(n.clientY/innerHeight)*2+1,ss.setFromCamera(Ri,mn);const e=ss.intersectObject(ot);for(const t of e){const i=Ht[t.instanceId];if(Zn(i))return i}return null}const ji=document.getElementById("tip");function l_(n){const e=Xc(n);if(Ni.style.cursor=e?"pointer":"default",!e){ji.style.display="none";return}const t=jt.get(e.id);ji.style.display="block",ji.style.left=`${n.clientX+13}px`,ji.style.top=`${n.clientY+13}px`,ji.innerHTML=`<span class="swatch" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t.hex};margin-right:6px"></span>${e.label} <span style="color:#8792ab">· ${e.kind}</span>`}function c_(n){const e=Xc(n);wi(e?e.id:null)}const Zs={roadmap:"The only view that looks forward. Both lists come from FULL_CAPACITY_PLAN.md: the activation ladder (§B) is the ordered flips still owed — violet means everything is deployed and it is only waiting on a human. The development queue (§C) is the slices; grey means planned with nothing built behind it.",system:"Who owns what. Systems come from the sole-writer matrix in SYSTEM_BOUNDARIES. Tables sit under their owner; a function sits under the system whose tables it touches, or — failing that — under the system whose functions it calls. Anything that fits neither is left unclassified rather than forced.",build:"Every migration in the order it landed, grouped by the day git first recorded it — the filename stamps are synthetic and would pile all 205 into one bucket. Each migration lists what it created.",feature:"Every feature gate, and the migrations that seed or read it. Sorted live first, unproven last.",timeline:"The whole arc in one view. Past — every shipped arc, the migration history behind it, and the complete build log from the dev log. Present — what production proves is live, plus the deploy frontier (merged, not yet deployed). Future — the activation ladder still owed and the planned queue.",method:"How this codebase is actually built — the no-spaghetti law, the per-slice build loop (architect → implementer → adversarial reviewer → real-Postgres proof → owner-gated deploy), the verification discipline, and the server-authoritative stance. Every citation is a real node — click one to jump to it on the map. Grounded in docs/HOW_ITS_BUILT.md."};function $c(n){jn=n,document.body.className=n,document.getElementById("treeWrap").classList.toggle("on",n==="tree"),document.getElementById("timelineWrap").classList.toggle("on",n==="timeline"),document.getElementById("methodWrap").classList.toggle("on",n==="method"),document.getElementById("scene").style.display=n==="map"?"block":"none",document.querySelectorAll("#tabs button").forEach(t=>t.classList.toggle("on",t.dataset.tab===n));const e=document.getElementById("search");if(e.value="",e.placeholder=n==="tree"?"Search the tree…":n==="timeline"?"Search the timeline…":n==="method"?"Search the method…":"Search nodes…",n==="tree"){const t=!tn;tn??=Cg({graph:ut,status:jt,svg:document.getElementById("tree"),onSelect:(i,s)=>{if(i)return wi(i);const r=document.getElementById("inspect");r.classList.add("on"),r.innerHTML=`<div class="kind">${s?.kind??"group"}</div>
          <h3>${s?.label??""}</h3>
          ${s?.status?`<div class="pill" style="background:${s.status.hex}22;color:${s.status.hex}">
            <span class="swatch" style="background:${s.status.hex}"></span>${s.status.label}</div>`:""}
          <div class="why">${s?.note??"A grouping, not a thing in the codebase. Its colour is rolled up from what is underneath it."}</div>
          <div class="det">${s?.total??0} item(s) beneath this.</div>`}}),t?(tn.setMode(document.getElementById("treeMode").value),tn.setWip(yi)):tn.setQuery("")}else n==="timeline"?(ns??=Pg({graph:ut,status:jt,mount:document.getElementById("timeline"),onSelect:t=>wi(t)}),ns.setWip(yi),ns.setQuery("")):n==="method"?(Ka??=Dg({graph:ut,status:jt,mount:document.getElementById("method"),onSelect:t=>wi(t)}),Ka.setQuery("")):(tt.query="",_n());document.getElementById("treeHint").textContent=Zs[document.getElementById("treeMode").value],document.getElementById("timelineHint").textContent=Zs.timeline,document.getElementById("methodHint").textContent=Zs.method}document.querySelectorAll("#tabs button").forEach(n=>{n.addEventListener("click",()=>$c(n.dataset.tab))});document.getElementById("treeMode").addEventListener("change",n=>{tn?.setMode(n.target.value),document.getElementById("treeHint").textContent=Zs[n.target.value]});document.getElementById("expandAll").addEventListener("click",()=>tn?.expandAll());document.getElementById("collapseAll").addEventListener("click",()=>tn?.collapseAll());window.__cam=()=>({dist:vi,yaw:Qi,pitch:xi});document.getElementById("loading").remove();$c("map");_n();(function n(){if(requestAnimationFrame(n),_t.size){const e=Zt*.012;js.set(-Math.sin(Cn),0,-Math.cos(Cn)),is.set(Math.cos(Cn),0,-Math.sin(Cn)),(_t.has("w")||_t.has("arrowup"))&&Ot.addScaledVector(js,e),(_t.has("s")||_t.has("arrowdown"))&&Ot.addScaledVector(js,-e),(_t.has("d")||_t.has("arrowright"))&&Ot.addScaledVector(is,e),(_t.has("a")||_t.has("arrowleft"))&&Ot.addScaledVector(is,-e),(_t.has("e")||_t.has(" "))&&(Ot.y+=e),_t.has("q")&&(Ot.y-=e)}if(ja&&!Et&&!_t.size&&(Cn+=4e-4),Qi+=(Cn-Qi)*Hs,xi+=(or-xi)*Hs,vi+=(Zt-vi)*Hs,_i.lerp(Ot,Hs),mn.position.set(_i.x+vi*Math.cos(xi)*Math.sin(Qi),_i.y+vi*Math.sin(xi),_i.z+vi*Math.cos(xi)*Math.cos(Qi)),mn.lookAt(_i),ar.size){const e=.5+.5*Math.sin(performance.now()*.0075),t=e*e,i=.25+.75*t,s=ot.instanceColor.array;for(const[o,a]of ar){const l=o*3;s[l]=kt[l]*(1-i)+Math.min(1,a.r*2+.15)*i,s[l+1]=kt[l+1]*(1-i)+Math.min(1,a.g*2+.15)*i,s[l+2]=kt[l+2]*(1-i)+Math.min(1,a.b*2+.15)*i}ot.instanceColor.needsUpdate=!0;const r=1+1.1*t;for(const{i:o,n:a}of Ya){if(!Zn(a))continue;const l=$a[a.kind]*1.7*r;Ft.position.set(a.x,a.y,a.z),Ft.scale.setScalar(l),Ft.updateMatrix(),ot.setMatrixAt(o,Ft.matrix)}ot.instanceMatrix.needsUpdate=!0}if(Ke.on&&Ke.playing){const e=performance.now();e-Ke.last>=Vg/Fc&&(Ke.last=e,Ke.i>=hs?(Ke.playing=!1,fr()):vo(Ke.i+1,!0))}if(Si.length){const e=performance.now();Si=Si.filter(t=>e-t.t<zl);for(const t of Si){const i=Ht[t.i];if(!Zn(i))continue;const s=(e-t.t)/zl,r=1+1.6*(1-s);Ft.position.set(i.x,i.y,i.z),Ft.scale.setScalar($a[i.kind]*r),Ft.updateMatrix(),ot.setMatrixAt(t.i,Ft.matrix);const o=t.i*3,a=1-s;ot.instanceColor.array[o]=kt[o]*(1-a)+a,ot.instanceColor.array[o+1]=kt[o+1]*(1-a)+a,ot.instanceColor.array[o+2]=kt[o+2]*(1-a)+a}ot.instanceMatrix.needsUpdate=!0,ot.instanceColor.needsUpdate=!0}_o.render(us,mn)})();
