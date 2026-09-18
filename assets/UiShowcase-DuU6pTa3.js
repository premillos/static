import{D as Ce,u as oe,A as _,w as le,o as be,C as ge,e as v,f as S,h as o,z as Z,n as F,j as l,B as ce,c as R,k as t,p as a,q as c,i as T,s as B,x as te,E as ke,F as $,l as K,r as Te}from"./app-DzxaYu3R.js";import{B as Ae,H as Ie}from"./HighlightText-Bq_bYHbk.js";import{_ as Pe}from"./ToolCopyActions-BSkUx5rd.js";import{_ as Ve}from"./ClaimList-PyOa6ZJK.js";import{_ as re}from"./KvResultPanel-1EN6vlLH.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as Fe}from"./useCopyFeedback-QgI6L3jm.js";import{_ as ue}from"./UiActions-7qWbFGQM.js";import{_ as Re}from"./UiCheckbox-BS34Npai.js";import{U as Le}from"./UiCheckboxGroup-D_XHgy3y.js";import{U as Be}from"./UiColorInput-C4Eus96Y.js";import{U as de}from"./UiConfigOutput-BHeqtjzN.js";import{U as V}from"./UiField-BfxXcOil.js";import{U as G}from"./UiNotice-B9asBkm5.js";import{U as Ee}from"./UiRangeInput-DWTyPhD1.js";import{U as $e}from"./UiSelect-ChYXs7sG.js";import{U as he}from"./UiSegmentedControl-CPyqNCLI.js";import{U as De}from"./UiTextInput-mOaUSb49.js";import{U as pe}from"./UiTextarea-D_XQ11Qr.js";import{N as ne}from"./NumberInput-Qv88HAyg.js";import{U as ee}from"./UploadZone-CGXGM_ZO.js";import"./ToolIcon-D_nG9lcr.js";function He(r,e,s,i,{onEnd:n,easing:h}={}){const p=h||(b=>b),d=performance.now();function y(b){const g=Math.min(1,(b-d)/s);i(r+(e-r)*p(g)),g<1?requestAnimationFrame(y):n?.()}requestAnimationFrame(y)}function me(r,e,s,i,n){r.save(),r.globalCompositeOperation="destination-out",r.fillStyle="white",r.shadowBlur=i/3.5*n*e,r.shadowColor="white",r.beginPath(),r.arc(s.x,s.y,i*e,0,2*Math.PI),r.fill(),r.globalCompositeOperation="source-over",r.restore()}const ze=`#version 300 es

precision highp float;

layout(location = 0) in vec2 inPosition;
layout(location = 1) in vec2 inVelocity;
layout(location = 2) in float inTime;
layout(location = 3) in float inDuration;

out vec2 outPosition;
out vec2 outVelocity;
out float outTime;
out float outDuration;

out float alpha;

uniform float reset;
uniform float time;
uniform float deltaTime;
uniform vec2 size;
uniform float r;
uniform float seed;
uniform float noiseScale;
uniform float noiseSpeed;
uniform float noiseMovement;
uniform float dampingMult;
uniform float forceMult;
uniform float velocityMult;
uniform float longevity;
uniform float maxVelocity;

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414 - seed * .42))) * 43758.5453);
}
vec4 loop(vec4 p) {
  p.xy = fract(p.xy / noiseScale) * noiseScale;
  p.zw = fract(p.zw / noiseScale) * noiseScale;
  return p;
}
vec3 loop(vec3 p) {
  p.xy = fract(p.xy / noiseScale) * noiseScale;
  return p;
}
float mod289(float x) { return x - floor(x * (1. / (289. + seed))) * (289. + seed); }
vec4 mod289(vec4 x) { return x - floor(x * (1. / (289. + seed))) * (289.0 + seed); }
vec4 perm(vec4 x) { return mod289(((x * 34.) + 1.) * x); }
float noise(vec3 p) {
  vec3 a = floor(p);
  vec3 d = p - a;
  d = d * d * (3. - 2. * d);

  vec4 b = a.xxyy + vec4(0., 1., 0., 1.);
  vec4 k1 = perm(loop(b.xyxy));
  vec4 k2 = perm(loop(k1.xyxy + b.zzww));

  vec4 c = k2 + a.zzzz;
  vec4 k3 = perm(c);
  vec4 k4 = perm(c + 1.0);

  vec4 o3 = fract(k4 / 41.0) * d.z + fract(k3 / 41.0) * (1.0 - d.z);
  vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

  return o4.y * d.y + o4.x * (1.0 - d.y);
}
vec3 grad(vec3 p) {
  const vec2 e = vec2(.1, .0);
  return vec3(
    noise(loop(p + e.xyy)) - noise(loop(p - e.xyy)),
    noise(loop(p + e.yxy)) - noise(loop(p - e.yxy)),
    noise(loop(p + e.yyx)) - noise(loop(p - e.yyx))
  ) / (2.0 * e.x);
}
vec3 curlNoise(vec3 p) {
  p.xy /= size;
  p.x *= (size.x / size.y);
  p.xy = fract(p.xy);
  p.xy *= noiseScale;

  const vec2 e = vec2(.01, .0);
  return grad(loop(p)).yzx - vec3(
    grad(loop(p + e.yxy)).z,
    grad(loop(p + e.yyx)).x,
    grad(loop(p + e.xyy)).y
  );
}

void main() {
  vec2 position = inPosition;
  vec2 velocity = inVelocity;
  float particleDuration = inDuration;
  float particleTime = inTime + deltaTime * particleDuration / longevity;

  if (reset > 0.) {
    particleTime = rand(vec2(-94.3, 83.9) * vec2(gl_VertexID, gl_VertexID));
    particleDuration = .5 + 2. * rand(vec2(gl_VertexID) + seed * 32.4);
    position = size * vec2(
      rand(vec2(42., -3.) * vec2(cos(float(gl_VertexID) - seed), gl_VertexID)),
      rand(vec2(-3., 42.) * vec2(time * time, sin(float(gl_VertexID) + seed)))
    );
    velocity = vec2(0.);
  } else if (particleTime >= 1.) {
    particleTime = 0.0;
    particleDuration = .5 + 2. * rand(vec2(gl_VertexID) + position);
    velocity = vec2(0.);
  }

  float msz = min(size.x, size.y);
  vec2 force = normalize(curlNoise(
    vec3(
      position + time * (noiseMovement / 100. * msz),
      time * noiseSpeed + rand(position) * 2.5
    )
  ).xy);

  velocity += force * forceMult * deltaTime * msz * .1;
  velocity *= dampingMult;
  float vlen = length(velocity);
  float maxVelocityPx = maxVelocity / 100. * msz;
  if (vlen > maxVelocityPx) {
    velocity = velocity / vlen * maxVelocityPx;
  }

  position += velocity * velocityMult * deltaTime;
  position = fract(position / size) * size;

  outPosition = position;
  outVelocity = velocity;
  outTime = particleTime;
  outDuration = particleDuration;

  gl_PointSize = r;
  gl_Position = vec4((position / size * 2.0 - vec2(1.0)), 0.0, 1.0);
  alpha = min(1.0, sin(particleTime * 3.14) * (.65 + .45 * rand(vec2(gl_VertexID))) * 1.2);
}
`,Me=`#version 300 es

precision highp float;

in float alpha;
out vec4 fragColor;

uniform vec3 color;

void main() {
  vec2 c = 2.0 * gl_PointCoord - 1.0;
  if (dot(c, c) > 1.0) {
    discard;
  }
  fragColor = vec4(color, min(1.0, alpha * 1.1));
}
`;class Oe{constructor(e){this.canvas=e,this.time=0,this.bufferIndex=0,this.inited=!1,this.lastDrawTime=0,this.reset=!0,this.context=e.getContext("webgl2")}resize(e,s,i,n){this.dpr=i,this.canvas.width=e*i,this.canvas.height=s*i,this.config=n,this.inited&&this.draw()}genBuffer(){const e=this.context;this.buffer&&(e.deleteBuffer(this.buffer[0]),e.deleteBuffer(this.buffer[1])),this.buffer=[];for(let s=0;s<2;s+=1)this.buffer[s]=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer[s]),this.bufferParticlesCount=Math.ceil(this.config.particlesCount),e.bufferData(e.ARRAY_BUFFER,this.bufferParticlesCount*6*4,e.DYNAMIC_DRAW)}compileShader(e,s){const i=this.context,n=i.createShader(e);if(i.shaderSource(n,s),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw new Error(`compile shader error:
${i.getShaderInfoLog(n)}`);return n}init(){return this.initPromise?this.initPromise:this.context?(this.initPromise=Promise.resolve().then(()=>{const e=this.compileShader(this.context.VERTEX_SHADER,ze),s=this.compileShader(this.context.FRAGMENT_SHADER,Me);return this._init(e,s),!0}),this.initPromise.catch(()=>{this.initPromise=void 0}),this.initPromise):Promise.reject(new Error("WebGL2 不可用"))}_init(e,s){this.genBuffer();const i=this.context,n=this.program=i.createProgram();if(i.attachShader(n,e),i.attachShader(n,s),i.transformFeedbackVaryings(n,["outPosition","outVelocity","outTime","outDuration"],i.INTERLEAVED_ATTRIBS),i.linkProgram(n),!i.getProgramParameter(n,i.LINK_STATUS))throw new Error(`program link error:
${i.getProgramInfoLog(n)}`);i.deleteShader(e),i.deleteShader(s),this.timeHandle=i.getUniformLocation(n,"time"),this.deltaTimeHandle=i.getUniformLocation(n,"deltaTime"),this.sizeHandle=i.getUniformLocation(n,"size"),this.resetHandle=i.getUniformLocation(n,"reset"),this.radiusHandle=i.getUniformLocation(n,"r"),this.seedHandle=i.getUniformLocation(n,"seed"),this.noiseScaleHandle=i.getUniformLocation(n,"noiseScale"),this.noiseSpeedHandle=i.getUniformLocation(n,"noiseSpeed"),this.dampingMultHandle=i.getUniformLocation(n,"dampingMult"),this.velocityMultHandle=i.getUniformLocation(n,"velocityMult"),this.forceMultHandle=i.getUniformLocation(n,"forceMult"),this.longevityHandle=i.getUniformLocation(n,"longevity"),this.maxVelocityHandle=i.getUniformLocation(n,"maxVelocity"),this.noiseMovementHandle=i.getUniformLocation(n,"noiseMovement"),this.colorHandle=i.getUniformLocation(n,"color"),i.clearColor(0,0,0,0),i.viewport(0,0,this.canvas.width,this.canvas.height),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),this.inited=!0,this.lastDrawTime=Date.now()}requestReset(){this.reset=!0}draw(){if(!this.inited)return;const e=this.context,s=this.config,i=Date.now(),n=Math.min((i-this.lastDrawTime)/1e3,1)*s.timeScale;this.lastDrawTime=i,this.time+=n,this.bufferParticlesCount<s.particlesCount&&(this.genBuffer(),this.reset=!0),e.viewport(0,0,this.canvas.width,this.canvas.height),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(this.program),e.uniform1f(this.resetHandle,this.reset?1:0),this.reset&&(this.time=0,this.reset=!1),e.uniform1f(this.timeHandle,this.time),e.uniform1f(this.deltaTimeHandle,n),e.uniform2f(this.sizeHandle,this.canvas.width,this.canvas.height),e.uniform1f(this.seedHandle,s.seed),e.uniform1f(this.radiusHandle,s.radius),e.uniform1f(this.noiseScaleHandle,s.noiseScale),e.uniform1f(this.noiseSpeedHandle,s.noiseSpeed),e.uniform1f(this.dampingMultHandle,s.dampingMult),e.uniform1f(this.velocityMultHandle,s.velocityMult),e.uniform1f(this.forceMultHandle,s.forceMult),e.uniform1f(this.longevityHandle,s.longevity),e.uniform1f(this.maxVelocityHandle,s.maxVelocity),e.uniform1f(this.noiseMovementHandle,s.noiseMovement),e.uniform3f(this.colorHandle,(s.color>>16&255)/255,(s.color>>8&255)/255,(s.color&255)/255),e.bindBuffer(e.ARRAY_BUFFER,this.buffer[this.bufferIndex]),e.vertexAttribPointer(0,2,e.FLOAT,!1,24,0),e.enableVertexAttribArray(0),e.vertexAttribPointer(1,2,e.FLOAT,!1,24,8),e.enableVertexAttribArray(1),e.vertexAttribPointer(2,1,e.FLOAT,!1,24,16),e.enableVertexAttribArray(2),e.vertexAttribPointer(3,1,e.FLOAT,!1,24,20),e.enableVertexAttribArray(3),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,0,this.buffer[1-this.bufferIndex]),e.vertexAttribPointer(0,2,e.FLOAT,!1,24,0),e.enableVertexAttribArray(0),e.vertexAttribPointer(1,2,e.FLOAT,!1,24,8),e.enableVertexAttribArray(1),e.vertexAttribPointer(2,1,e.FLOAT,!1,24,16),e.enableVertexAttribArray(2),e.vertexAttribPointer(3,1,e.FLOAT,!1,24,20),e.enableVertexAttribArray(3),e.beginTransformFeedback(e.POINTS),e.drawArrays(e.POINTS,0,s.particlesCount),e.endTransformFeedback(),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,0,null),this.bufferIndex=1-this.bufferIndex}destroy(){this.context&&(this.buffer&&(this.context.deleteBuffer(this.buffer[0]),this.context.deleteBuffer(this.buffer[1])),this.program&&this.context.deleteProgram(this.program),this.buffer=null,this.program=null,this.inited=!1)}}const Ne=1.2,We=12;function _e(r,e,s,i,{overscan:n=1,fill:h="#1a1a1a",fit:p="cover"}={}){const y=(p==="contain"?Math.min(s/e.naturalWidth,i/e.naturalHeight):Math.max(s/e.naturalWidth,i/e.naturalHeight))*n,b=e.naturalWidth,g=e.naturalHeight,f=b*y,A=g*y,w=(s-f)/2,D=(i-A)/2;r.clearRect(0,0,s,i),h&&(r.fillStyle=h,r.fillRect(0,0,s,i)),r.drawImage(e,0,0,b,g,w,D,f,A)}function fe(r,e,s,i,n="cover"){r.save(),r.filter="blur(32px) brightness(0.8) saturate(0.9)",_e(r,e,s,i,{overscan:Ne,fill:"#1a1a1a",fit:n}),r.restore(),r.fillStyle="rgba(255, 255, 255, 0.08)",r.fillRect(0,0,s,i)}class qe{constructor({rootEl:e,sharpCanvas:s,blurCanvas:i,particleCanvas:n,onShowComplete:h}){this.rootEl=e,this.sharpCanvas=s,this.blurCanvas=i,this.particleCanvas=n,this.onShowComplete=h,this.dpr=Math.min(window.devicePixelRatio||1,2),this.displayWidth=0,this.displayHeight=0,this.isPlaying=!1,this.rafId=0,this.showAnimation=null,this.loadedImage=null,this.simCanvas=document.createElement("canvas"),this.simCore=new Oe(this.simCanvas),this.fit="cover",this.lastLayoutKey="",this.particleSeed=Math.random()*10}setFit(e){this.fit=e==="contain"?"contain":"cover"}async loadImage(e){const s=await new Promise((i,n)=>{const h=new Image;h.decoding="async",h.onload=()=>i(h),h.onerror=()=>n(new Error("图片加载失败")),h.src=e});return this.loadedImage=s,this.lastLayoutKey="",this.resize(),s}measureLayout(){if(!this.loadedImage||!this.rootEl)return null;this.loadedImage.naturalWidth&&(this.rootEl.style.aspectRatio=`${this.loadedImage.naturalWidth} / ${this.loadedImage.naturalHeight}`);const e=this.rootEl.clientWidth,s=this.rootEl.clientHeight||e*(this.loadedImage.naturalHeight/this.loadedImage.naturalWidth);return e<=0||s<=0?null:{layoutWidth:e,layoutHeight:s}}redrawSharp(e,s){const i=Math.round(e*this.dpr),n=Math.round(s*this.dpr);for(const p of[this.sharpCanvas,this.blurCanvas,this.particleCanvas])p.width=i,p.height=n;const h=this.sharpCanvas.getContext("2d");h&&(h.setTransform(this.dpr,0,0,this.dpr,0,0),_e(h,this.loadedImage,e,s,{fill:null,fit:this.fit}))}resize({visible:e=!1}={}){const s=this.measureLayout();if(!s)return!1;const{layoutWidth:i,layoutHeight:n}=s,h=`${i}x${n}@${this.dpr}:${this.fit}`;if(h===this.lastLayoutKey)return!1;if(this.displayWidth=i,this.displayHeight=n,this.redrawSharp(i,n),e||this.showAnimation?.progress>=1)return this.lastLayoutKey=h,!0;const p=this.blurCanvas.getContext("2d");return p?(p.setTransform(this.dpr,0,0,this.dpr,0,0),fe(p,this.loadedImage,i,n,this.fit),this.simCore.resize(i,n,this.dpr,Ce(i,n,this.dpr,this.particleSeed)),this.simCore.requestReset(),this.lastLayoutKey=h,this.drawParticles(),!0):!1}async init(){if(!this.simCore.context)throw new Error("WebGL2 不可用");await this.simCore.init(),this.play()}play(){this.isPlaying||this.showAnimation?.progress>=1||(this.isPlaying=!0,this.simCore.lastDrawTime=Date.now(),this.tick())}pause(){this.isPlaying=!1,cancelAnimationFrame(this.rafId),this.rafId=0}tick(){this.isPlaying&&(this.simCore.draw(),this.drawParticles(),this.rafId=requestAnimationFrame(()=>this.tick()))}drawParticles(){const e=this.particleCanvas?.getContext("2d");if(!e||!this.displayWidth)return;const{width:s,height:i}=this.particleCanvas;if(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,s,i),this.showAnimation?.progress>=1)return;const n=Math.round(We*this.dpr);if(!this.showAnimation){e.drawImage(this.simCanvas,0,0,s,i,-n,-n,s+n*2,i+n*2);return}const{progress:h,transformedCoords:p,maxDist:d}=this.showAnimation,y=h**2*.5;e.drawImage(this.simCanvas,p.x*y,p.y*y,s*(1-y),i*(1-y),-n,-n,s+n*2,i+n*2),me(e,h,p,d,this.dpr)}showFromEvent(e){if(this.showAnimation?.progress>=1)return Promise.resolve();const s=this.particleCanvas.getBoundingClientRect(),i=e.clientX-s.left,n=e.clientY-s.top,h=Math.max(Math.hypot(i,n),Math.hypot(s.width-i,n),Math.hypot(i,s.height-n),Math.hypot(s.width-i,s.height-n)),p=h*this.dpr+50,d=this.blurCanvas.getContext("2d");this.showAnimation={progress:0,transformedCoords:{x:i*this.dpr,y:n*this.dpr},underlyingCoords:{x:i*this.blurCanvas.width/s.width,y:n*this.blurCanvas.height/s.height},maxDist:p,maxDistUnderlying:p/this.particleCanvas.width*this.blurCanvas.width,blurCtx:d};const y=800+(400-h);return new Promise(b=>{He(0,1,y,g=>{this.showAnimation.progress=g,this.drawParticles(),d&&(d.save(),d.setTransform(1,0,0,1,0,0),me(d,g,this.showAnimation.underlyingCoords,this.showAnimation.maxDistUnderlying,this.dpr),d.restore())},{onEnd:()=>{this.pause(),this.onShowComplete?.(),b()}})})}rehide(){this.showAnimation=null;const e=this.blurCanvas?.getContext("2d");e&&this.displayWidth&&(e.setTransform(this.dpr,0,0,this.dpr,0,0),fe(e,this.loadedImage,this.displayWidth,this.displayHeight,this.fit)),this.drawParticles(),this.play()}destroy(){this.pause(),this.simCore.destroy(),this.loadedImage=null}}const Ke=["aria-label"],Ye=["src","alt"],je=["aria-label","disabled"],Ge={key:0,class:"ui-spoiler-image__hint"},Ze={__name:"UiSpoilerImage",props:{src:{type:String,required:!0},alt:{type:String,default:""},visible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fit:{type:String,default:"cover",validator:r=>["cover","contain"].includes(r)},showLabel:{type:String,default:""},showHint:{type:Boolean,default:!1}},emits:["update:visible","show","hide"],setup(r,{expose:e,emit:s}){const i=r,n=s,{t:h}=oe(),p=_(null),d=_(null),y=_(null),b=_(null),g=_(i.visible),f=_(!1),A=_(!1);let w=null,D=null,M=null,N=0;const H=R(()=>!g.value),W=R(()=>i.showLabel||h("spoilerImage.show"));le(()=>i.visible,k=>{k!==g.value&&(g.value=k,k?L():X())}),le(()=>i.src,()=>{Y()}),le(()=>i.fit,k=>{w?.setFit(k),q()});function E(k){g.value=k,n("update:visible",k)}function L(){w?.pause(),f.value=!1}async function Y(){if(j(),A.value=!1,f.value=!1,!i.src)return;await ce();const k=d.value,I=y.value,O=b.value;if(!(!k||!I||!O)){w=new qe({rootEl:p.value,sharpCanvas:k,blurCanvas:I,particleCanvas:O,onShowComplete:()=>{E(!0),n("show")}}),w.setFit(i.fit);try{if(await w.loadImage(i.src),await ce(),w.resize(),g.value){L();return}await w.init(),f.value=!0}catch{A.value=!0,f.value=!0}}}function X(){!w||A.value||(w.resize(),w.rehide(),w.play(),f.value=!0)}async function se(k){await J(k)}async function J(k){if(i.disabled||M||g.value)return;if(A.value||!w){E(!0),n("show");return}const I=p.value,O=k||I&&{clientX:I.getBoundingClientRect().left+I.clientWidth/2,clientY:I.getBoundingClientRect().top+I.clientHeight/2};M=w.showFromEvent(O).finally(()=>{M=null}),await M}function ae(){g.value&&(E(!1),n("hide"),!A.value&&X())}e({show:J,hide:ae});function j(){w?.destroy(),w=null}function q(){cancelAnimationFrame(N),N=requestAnimationFrame(()=>{w&&w.resize({visible:g.value})})}return be(()=>{Y(),p.value&&typeof ResizeObserver<"u"&&(D=new ResizeObserver(()=>{q()}),D.observe(p.value)),window.addEventListener("resize",q,{passive:!0})}),ge(()=>{cancelAnimationFrame(N),window.removeEventListener("resize",q),D?.disconnect(),j()}),(k,I)=>(v(),S("div",{ref_key:"rootRef",ref:p,class:Z(["ui-spoiler-image",{"ui-spoiler-image--visible":g.value,"ui-spoiler-image--disabled":r.disabled,"ui-spoiler-image--fallback":A.value,[`ui-spoiler-image--${r.fit}`]:!0}])},[o("canvas",{ref_key:"sharpCanvasRef",ref:d,class:"ui-spoiler-image__sharp","aria-label":r.alt,role:"img"},null,8,Ke),o("canvas",{ref_key:"blurCanvasRef",ref:y,class:Z(["ui-spoiler-image__blur",{"ui-spoiler-image__layer--hidden":!H.value||!f.value||A.value}]),"aria-hidden":"true"},null,2),o("canvas",{ref_key:"particleCanvasRef",ref:b,class:Z(["ui-spoiler-image__particles",{"ui-spoiler-image__layer--hidden":!H.value||!f.value||A.value}]),"aria-hidden":"true"},null,2),A.value&&H.value?(v(),S("img",{key:0,class:"ui-spoiler-image__fallback-img",src:r.src,alt:r.alt,draggable:"false"},null,8,Ye)):F("",!0),H.value?(v(),S("button",{key:1,type:"button",class:"ui-spoiler-image__veil","aria-label":W.value,disabled:r.disabled||!f.value,onClick:se},[r.showHint?(v(),S("span",Ge,l(W.value),1)):F("",!0)],8,je)):F("",!0)],2))}},ve=ie(Ze,[["__scopeId","data-v-f6318f84"]]),Xe={class:"ui-showcase-demo-block"},Je={class:"ui-showcase-demo-head"},Qe={class:"ui-showcase-demo-title"},et={class:"ui-showcase-demo-actions"},tt={key:0,class:"ui-showcase-demo-code"},ot={class:"ui-showcase-code-pre"},it={__name:"UiShowcaseDemo",props:{code:{type:String,required:!0},previewClass:{type:String,default:""}},setup(r){const{t:e}=oe(),s=_(!1),{copyStatus:i,copyText:n}=Fe();async function h(p){await n(p)}return(p,d)=>(v(),S("div",Xe,[o("div",Je,[o("h3",Qe,l(t(e)("uiShowcase.demo.previewTitle")),1),o("div",et,[a(t(B),{variant:"text",type:"button",onClick:d[0]||(d[0]=y=>s.value=!s.value)},{default:c(()=>[T(l(s.value?t(e)("uiShowcase.demo.hideCode"):t(e)("uiShowcase.demo.showCode")),1)]),_:1}),s.value?(v(),te(t(B),{key:0,variant:"text",type:"button",onClick:d[1]||(d[1]=y=>h(r.code))},{default:c(()=>[T(l(t(i)||t(e)("uiShowcase.demo.copyCode")),1)]),_:1})):F("",!0)])]),o("div",{class:Z(["ui-showcase-demo-preview",r.previewClass])},[ke(p.$slots,"default",{},void 0,!0)],2),s.value?(v(),S("div",tt,[o("pre",ot,[o("code",null,l(r.code),1)])])):F("",!0)]))}},U=ie(it,[["__scopeId","data-v-b3d5bc89"]]),st={key:0,class:"ui-prop-docs"},at={class:"ui-prop-docs-heading"},lt={key:0,class:"ui-prop-docs-subtitle"},nt={class:"ui-prop-docs-label"},ct={class:"ui-prop-table-wrap"},rt={class:"ui-prop-table"},ut={scope:"col"},dt={scope:"col"},ht={scope:"col"},pt={scope:"col"},mt={class:"ui-prop-docs-label"},ft={class:"ui-prop-table-wrap"},vt={class:"ui-prop-table"},wt={scope:"col"},bt={scope:"col"},gt={scope:"col"},_t={class:"ui-prop-docs-label"},yt={class:"ui-prop-table-wrap"},St={class:"ui-prop-table"},xt={scope:"col"},Ut={scope:"col"},Ct={scope:"col"},kt={__name:"UiShowcasePropTable",props:{sectionId:{type:String,required:!0}},setup(r){const e=r,{t:s,tm:i}=oe(),n=R(()=>i(`uiShowcase.sections.${e.sectionId}`)||{}),h=R(()=>{const d=n.value;return Array.isArray(d.tables)&&d.tables.length?d.tables:d.props?.length||d.events?.length||d.slots?.length?[{title:d.componentTitle||"",props:d.props||[],events:d.events||[],slots:d.slots||[]}]:[]});function p(d){return d==null||d===""?"—":String(d)}return(d,y)=>h.value.length?(v(),S("div",st,[o("h3",at,l(t(s)("uiShowcase.propTable.apiTitle")),1),(v(!0),S($,null,K(h.value,(b,g)=>(v(),S("div",{key:`${r.sectionId}-${g}`,class:"ui-prop-docs-group"},[b.title?(v(),S("h3",lt,l(b.title),1)):F("",!0),b.props?.length?(v(),S($,{key:1},[o("h4",nt,l(t(s)("uiShowcase.propTable.propsTitle")),1),o("div",ct,[o("table",rt,[o("thead",null,[o("tr",null,[o("th",ut,l(t(s)("uiShowcase.propTable.colName")),1),o("th",dt,l(t(s)("uiShowcase.propTable.colType")),1),o("th",ht,l(t(s)("uiShowcase.propTable.colDefault")),1),o("th",pt,l(t(s)("uiShowcase.propTable.colDesc")),1)])]),o("tbody",null,[(v(!0),S($,null,K(b.props,f=>(v(),S("tr",{key:f.name},[o("td",null,[o("code",null,l(f.name),1)]),o("td",null,[o("code",null,l(f.type),1)]),o("td",null,[o("code",null,l(p(f.default)),1)]),o("td",null,l(f.desc),1)]))),128))])])])],64)):F("",!0),b.events?.length?(v(),S($,{key:2},[o("h4",mt,l(t(s)("uiShowcase.propTable.eventsTitle")),1),o("div",ft,[o("table",vt,[o("thead",null,[o("tr",null,[o("th",wt,l(t(s)("uiShowcase.propTable.colName")),1),o("th",bt,l(t(s)("uiShowcase.propTable.colPayload")),1),o("th",gt,l(t(s)("uiShowcase.propTable.colDesc")),1)])]),o("tbody",null,[(v(!0),S($,null,K(b.events,f=>(v(),S("tr",{key:f.name},[o("td",null,[o("code",null,l(f.name),1)]),o("td",null,[o("code",null,l(p(f.payload)),1)]),o("td",null,l(f.desc),1)]))),128))])])])],64)):F("",!0),b.slots?.length?(v(),S($,{key:3},[o("h4",_t,l(t(s)("uiShowcase.propTable.slotsTitle")),1),o("div",yt,[o("table",St,[o("thead",null,[o("tr",null,[o("th",xt,l(t(s)("uiShowcase.propTable.colName")),1),o("th",Ut,l(t(s)("uiShowcase.propTable.colScope")),1),o("th",Ct,l(t(s)("uiShowcase.propTable.colDesc")),1)])]),o("tbody",null,[(v(!0),S($,null,K(b.slots,f=>(v(),S("tr",{key:f.name},[o("td",null,[o("code",null,l(f.name),1)]),o("td",null,[o("code",null,l(p(f.scope)),1)]),o("td",null,l(f.desc),1)]))),128))])])])],64)):F("",!0)]))),128))])):F("",!0)}},C=ie(kt,[["__scopeId","data-v-9392fd8b"]]);function we(r){return`/static/${String(r).replace(/^\//,"")}`}const Tt={button:`<UiButton>Default</UiButton>
<UiButton variant="primary">Primary</UiButton>
<UiButton variant="text">Text</UiButton>
<UiButton disabled>Disabled</UiButton>`,field:`<UiField label="数量" description="范围 1–10">
  <NumberInput v-model="count" :min="1" :max="10" />
</UiField>`,actions:`<UiActions>
  <UiField label="数量" compact>
    <NumberInput v-model="count" :min="1" :max="10" />
  </UiField>
  <UiButton variant="primary" @click="generate">生成</UiButton>
  <UiButton @click="reset">重置</UiButton>
</UiActions>
<UiConfigOutput v-if="result" :summary="summary" :content="result" />`,textInput:`<UiField label="单行输入">
  <UiTextInput v-model="text" placeholder="输入内容…" />
</UiField>`,textarea:`<UiField label="多行输入">
  <UiTextarea v-model="text" placeholder="多行文本…" :rows="3" />
</UiField>
<UiField label="只读输出">
  <UiTextarea :model-value="output" output readonly :rows="2" />
</UiField>`,numberInput:`<UiField label="数量">
  <NumberInput v-model="count" :min="1" :max="10" />
</UiField>`,select:`<UiField label="选项">
  <UiSelect
    v-model="value"
    :options="[
      { label: '选项 A', value: 'a' },
      { label: '选项 B', value: 'b' },
    ]"
    placeholder="请选择"
  />
</UiField>`,segmented:`<UiField label="md 默认">
  <UiSegmentedControl v-model="mode" size="md" :options="options" />
</UiField>
<UiField label="sm 紧凑" compact>
  <UiSegmentedControl v-model="mode" :options="options" />
</UiField>`,checkbox:`<UiCheckbox v-model="notify">接收通知</UiCheckbox>
<UiCheckboxGroup
  v-model="sources"
  :options="[
    { label: '脚本', value: '\\'self\\'' },
    { label: '无', value: '\\'none\\'', exclusive: true },
  ]"
  aria-label="CSP 来源"
/>`,color:`<UiField label="颜色">
  <UiColorInput v-model="color" />
</UiField>`,range:'<UiField :label="`${opacity}%`">\n  <UiRangeInput v-model="opacity" :min="0" :max="100" />\n</UiField>',upload:`<UploadZone variant="zone" title="点击或拖入文件" subtitle="支持拖拽" @select="onFiles" />
<UploadZone variant="compact" title="紧凑区" subtitle="侧栏/嵌套" @select="onFiles" />
<UploadZone variant="inline" title="inline 单行" @select="onFiles" />
<UploadZone variant="button" title="选择文件" @select="onFiles" />
<UiNotice v-if="hint">{{ hint }}</UiNotice>`,spoilerImage:`<UiSpoilerImage :src="publicAsset('ui-showcase/spoiler-demo-1.jpg')" alt="山丘小径风景" />

<UiSpoilerImage
  ref="spoilerRef"
  v-model:visible="visible"
  :src="publicAsset('ui-showcase/spoiler-demo-2.jpg')"
  alt="阶梯上行"
/>
<UiButton @click="spoilerRef?.hide()">重新遮挡</UiButton>
<UiButton @click="spoilerRef?.show()">显示清晰图</UiButton>`,notice:`<UiNotice>处理中，请稍候…</UiNotice>
<UiNotice variant="error">格式不正确。</UiNotice>
<UiNotice variant="success">生成完成。</UiNotice>`,configOutput:`<UiConfigOutput
  summary="已生成 3 条规则"
  :content="nginxConfig"
/>`,kvResultPanel:`<KvResultPanel title="Header">
  <pre>{{ JSON.stringify(header, null, 2) }}</pre>
</KvResultPanel>`,claimList:`<ClaimList :items="[
  { label: 'Browser', value: 'Chrome 120' },
  { label: 'Engine', value: 'Blink 120' },
]" />`,copyActions:`<ToolCopyActions
  text="demo-copy-text"
  label="复制结果"
  :extras="[{ label: '复制 JSON', text: '{\\"ok\\":true}' }]"
/>`,backToTop:`<!-- 首页等页面：fixed 贴视口右下角 -->
<BackToTop />

<!-- embedded：按钮固定在外层右下角，监听内层滚动 -->
<div data-back-to-top-host style="position:relative">
  <div data-back-to-top-scroll style="max-height:220px;overflow:auto">
    <p>向下滚动…</p>
  </div>
  <BackToTop variant="embedded" :threshold="80" />
</div>`,highlight:`<HighlightText
  text="二维码生成工具"
  :tokens="['二维码']"
/>`},At={class:"ui-showcase","aria-labelledby":"ui-showcase-title"},It={class:"ui-showcase-hero"},Pt={class:"eyebrow"},Vt={id:"ui-showcase-title"},Ft={class:"legal-lead"},Rt={class:"ui-showcase-layout"},Lt=["aria-label"],Bt=["href","aria-current"],Et={class:"ui-showcase-sections"},$t={id:"ui-button",class:"ui-showcase-section panel"},Dt={class:"ui-showcase-desc"},Ht={id:"ui-field",class:"ui-showcase-section panel"},zt={class:"ui-showcase-desc"},Mt={id:"ui-actions",class:"ui-showcase-section panel"},Ot={class:"ui-showcase-desc"},Nt={id:"ui-textInput",class:"ui-showcase-section panel"},Wt={class:"ui-showcase-desc"},qt={id:"ui-textarea",class:"ui-showcase-section panel"},Kt={class:"ui-showcase-desc"},Yt={id:"ui-numberInput",class:"ui-showcase-section panel"},jt={class:"ui-showcase-desc"},Gt={id:"ui-select",class:"ui-showcase-section panel"},Zt={class:"ui-showcase-desc"},Xt={id:"ui-segmented",class:"ui-showcase-section panel"},Jt={class:"ui-showcase-desc"},Qt={id:"ui-checkbox",class:"ui-showcase-section panel"},eo={class:"ui-showcase-desc"},to={id:"ui-color",class:"ui-showcase-section panel"},oo={class:"ui-showcase-desc"},io={id:"ui-range",class:"ui-showcase-section panel"},so={class:"ui-showcase-desc"},ao={id:"ui-upload",class:"ui-showcase-section panel"},lo={class:"ui-showcase-desc"},no={id:"ui-spoilerImage",class:"ui-showcase-section panel"},co={class:"ui-showcase-desc"},ro={id:"ui-notice",class:"ui-showcase-section panel"},uo={class:"ui-showcase-desc"},ho={id:"ui-configOutput",class:"ui-showcase-section panel"},po={class:"ui-showcase-desc"},mo={id:"ui-kvResultPanel",class:"ui-showcase-section panel"},fo={class:"ui-showcase-desc"},vo={class:"config-output"},wo={id:"ui-claimList",class:"ui-showcase-section panel"},bo={class:"ui-showcase-desc"},go={id:"ui-copyActions",class:"ui-showcase-section panel"},_o={class:"ui-showcase-desc"},yo={id:"ui-backToTop",class:"ui-showcase-section panel"},So={class:"ui-showcase-desc"},xo={class:"ui-showcase-back-to-top-demo","data-back-to-top-host":""},Uo={class:"ui-showcase-back-to-top-scroll","data-back-to-top-scroll":""},Co={id:"ui-highlight",class:"ui-showcase-section panel"},ko={class:"ui-showcase-desc"},To={class:"ui-showcase-highlight-demo"},Ao=120,Io=`server {
  listen 80;
  root /var/www;
}`,Po={__name:"UiShowcase",setup(r){const{t:e}=oe(),s=["button","field","actions","textInput","textarea","numberInput","select","segmented","checkbox","color","range","upload","spoilerImage","notice","configOutput","kvResultPanel","claimList","copyActions","backToTop","highlight"],i=_(s[0]);let n=0;function h(P){return`ui-${P}`}function p(){const P=window.location.hash.slice(1);if(!P.startsWith("ui-"))return;const u=P.slice(3);s.includes(u)&&(i.value=u)}function d(){let P=s[0];for(const u of s){const z=document.getElementById(h(u));z&&z.getBoundingClientRect().top<=Ao&&(P=u)}i.value=P}function y(){cancelAnimationFrame(n),n=requestAnimationFrame(d)}be(()=>{p(),d(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("hashchange",p)}),ge(()=>{cancelAnimationFrame(n),window.removeEventListener("scroll",y),window.removeEventListener("hashchange",p)});const b=_("Hello"),g=_(""),f=_(6),A=_("a"),w=_("preview"),D=_(!1),M=_(["'self'"]),N=_("#2563eb"),H=_(40),W=_(""),E=_(3),L=_(null),Y=R(()=>{if(L.value==null)return"";const P=Math.max(1,Number(L.value)||1);return Array.from({length:P},(u,z)=>`demo-row-${z+1}`).join(`
`)}),X=R(()=>L.value!=null&&E.value!==L.value);function se(){L.value=E.value}function J(){E.value=3,L.value=null}const ae=R(()=>[{label:e("uiShowcase.demos.selectA"),value:"a"},{label:e("uiShowcase.demos.selectB"),value:"b"},{label:e("uiShowcase.demos.selectC"),value:"c"}]),j=R(()=>[{label:e("uiShowcase.demos.segmentLeft"),value:"preview"},{label:e("uiShowcase.demos.segmentRight"),value:"source"}]),q=R(()=>[{label:e("uiShowcase.demos.checkboxA"),value:"'self'"},{label:e("uiShowcase.demos.checkboxB"),value:"'none'",exclusive:!0},{label:e("uiShowcase.demos.checkboxC"),value:"*"}]),k=R(()=>[e("uiShowcase.demos.highlightToken").toLocaleLowerCase()]),I=_(null),O=_(!1),ye=we("ui-showcase/spoiler-demo-1.jpg"),Se=we("ui-showcase/spoiler-demo-2.jpg"),xe=R(()=>[{label:e("uiShowcase.demos.copyExtra"),text:'{"ok":true}'}]),Ue=[{label:"Browser",value:"Chrome 120"},{label:"Engine",value:"Blink 120"},{label:"Platform",value:"macOS"}];function Q(P){const u=P.map(z=>z.name).join(", ");W.value=e("uiShowcase.uploadSelected",{count:P.length,names:u})}const x=Tt;return(P,u)=>{const z=Te("RouterLink");return v(),S("article",At,[o("header",It,[a(z,{to:"/",class:"legal-back"},{default:c(()=>[T(l(t(e)("uiShowcase.backHome")),1)]),_:1}),o("div",Pt,l(t(e)("uiShowcase.eyebrow")),1),o("h1",Vt,l(t(e)("uiShowcase.pageTitle")),1),o("p",Ft,l(t(e)("uiShowcase.lead")),1)]),o("div",Rt,[o("nav",{class:"ui-showcase-toc","aria-label":t(e)("uiShowcase.tocLabel")},[(v(),S($,null,K(s,m=>o("a",{key:m,href:`#ui-${m}`,class:Z({"is-active":i.value===m}),"aria-current":i.value===m?"location":void 0},l(t(e)(`uiShowcase.sections.${m}.title`)),11,Bt)),64))],8,Lt),o("div",Et,[o("section",$t,[o("h2",null,l(t(e)("uiShowcase.sections.button.title")),1),o("p",Dt,l(t(e)("uiShowcase.sections.button.desc")),1),a(C,{"section-id":"button"}),a(U,{code:t(x).button,"preview-class":"ui-showcase-row"},{default:c(()=>[a(t(B),null,{default:c(()=>[...u[15]||(u[15]=[T("Default",-1)])]),_:1}),a(t(B),{variant:"primary"},{default:c(()=>[...u[16]||(u[16]=[T("Primary",-1)])]),_:1}),a(t(B),{variant:"text"},{default:c(()=>[...u[17]||(u[17]=[T("Text",-1)])]),_:1}),a(t(B),{disabled:""},{default:c(()=>[...u[18]||(u[18]=[T("Disabled",-1)])]),_:1})]),_:1},8,["code"])]),o("section",Ht,[o("h2",null,l(t(e)("uiShowcase.sections.field.title")),1),o("p",zt,l(t(e)("uiShowcase.sections.field.desc")),1),a(C,{"section-id":"field"}),a(U,{code:t(x).field},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.demos.fieldLabel"),description:t(e)("uiShowcase.demos.fieldDesc")},{default:c(()=>[a(t(ne),{modelValue:f.value,"onUpdate:modelValue":u[0]||(u[0]=m=>f.value=m),min:1,max:10},null,8,["modelValue"])]),_:1},8,["label","description"])]),_:1},8,["code"])]),o("section",Mt,[o("h2",null,l(t(e)("uiShowcase.sections.actions.title")),1),o("p",Ot,l(t(e)("uiShowcase.sections.actions.desc")),1),a(C,{"section-id":"actions"}),a(U,{code:t(x).actions,"preview-class":"ui-showcase-actions"},{default:c(()=>[a(t(ue),null,{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.demos.fieldLabel"),compact:""},{default:c(()=>[a(t(ne),{modelValue:E.value,"onUpdate:modelValue":u[1]||(u[1]=m=>E.value=m),min:1,max:10},null,8,["modelValue"])]),_:1},8,["label"]),a(t(B),{variant:"primary",onClick:se},{default:c(()=>[T(l(t(e)("actions.generate")),1)]),_:1}),a(t(B),{onClick:J},{default:c(()=>[T(l(t(e)("actions.reset")),1)]),_:1})]),_:1}),X.value?(v(),te(t(G),{key:0},{default:c(()=>[T(l(t(e)("uiShowcase.demos.actionsStale")),1)]),_:1})):F("",!0),Y.value?(v(),te(t(de),{key:1,summary:t(e)("uiShowcase.demos.actionsSummary",{n:L.value}),content:Y.value},null,8,["summary","content"])):F("",!0)]),_:1},8,["code"])]),o("section",Nt,[o("h2",null,l(t(e)("uiShowcase.sections.textInput.title")),1),o("p",Wt,l(t(e)("uiShowcase.sections.textInput.desc")),1),a(C,{"section-id":"textInput"}),a(U,{code:t(x).textInput},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.sections.textInput.title")},{default:c(()=>[a(t(De),{modelValue:b.value,"onUpdate:modelValue":u[2]||(u[2]=m=>b.value=m),placeholder:t(e)("uiShowcase.demos.textPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["code"])]),o("section",qt,[o("h2",null,l(t(e)("uiShowcase.sections.textarea.title")),1),o("p",Kt,l(t(e)("uiShowcase.sections.textarea.desc")),1),a(C,{"section-id":"textarea"}),a(U,{code:t(x).textarea,"preview-class":"ui-showcase-stack"},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.sections.textarea.title")},{default:c(()=>[a(t(pe),{modelValue:g.value,"onUpdate:modelValue":u[3]||(u[3]=m=>g.value=m),placeholder:t(e)("uiShowcase.demos.textareaPlaceholder"),rows:3},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(t(V),{label:"output"},{default:c(()=>[a(t(pe),{"model-value":t(e)("uiShowcase.demos.textareaOutput"),output:"",readonly:"",rows:2},null,8,["model-value"])]),_:1})]),_:1},8,["code"])]),o("section",Yt,[o("h2",null,l(t(e)("uiShowcase.sections.numberInput.title")),1),o("p",jt,l(t(e)("uiShowcase.sections.numberInput.desc")),1),a(C,{"section-id":"numberInput"}),a(U,{code:t(x).numberInput},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.demos.fieldLabel")},{default:c(()=>[a(t(ne),{modelValue:f.value,"onUpdate:modelValue":u[4]||(u[4]=m=>f.value=m),min:1,max:10},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["code"])]),o("section",Gt,[o("h2",null,l(t(e)("uiShowcase.sections.select.title")),1),o("p",Zt,l(t(e)("uiShowcase.sections.select.desc")),1),a(C,{"section-id":"select"}),a(U,{code:t(x).select},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.sections.select.title")},{default:c(()=>[a(t($e),{modelValue:A.value,"onUpdate:modelValue":u[5]||(u[5]=m=>A.value=m),options:ae.value,placeholder:t(e)("uiShowcase.demos.selectPlaceholder")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1},8,["code"])]),o("section",Xt,[o("h2",null,l(t(e)("uiShowcase.sections.segmented.title")),1),o("p",Jt,l(t(e)("uiShowcase.sections.segmented.desc")),1),a(C,{"section-id":"segmented"}),a(U,{code:t(x).segmented,"preview-class":"ui-showcase-segment-sizes"},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.demos.segmentSizeMd")},{default:c(()=>[a(t(he),{modelValue:w.value,"onUpdate:modelValue":u[6]||(u[6]=m=>w.value=m),size:"md",options:j.value,"aria-label":t(e)("uiShowcase.sections.segmented.title")},null,8,["modelValue","options","aria-label"])]),_:1},8,["label"]),a(t(V),{label:t(e)("uiShowcase.demos.segmentSizeSm"),compact:""},{default:c(()=>[a(t(he),{modelValue:w.value,"onUpdate:modelValue":u[7]||(u[7]=m=>w.value=m),options:j.value,"aria-label":t(e)("uiShowcase.sections.segmented.title")},null,8,["modelValue","options","aria-label"])]),_:1},8,["label"])]),_:1},8,["code"])]),o("section",Qt,[o("h2",null,l(t(e)("uiShowcase.sections.checkbox.title")),1),o("p",eo,l(t(e)("uiShowcase.sections.checkbox.desc")),1),a(C,{"section-id":"checkbox"}),a(U,{code:t(x).checkbox,"preview-class":"ui-showcase-stack"},{default:c(()=>[a(t(Re),{modelValue:D.value,"onUpdate:modelValue":u[8]||(u[8]=m=>D.value=m)},{default:c(()=>[T(l(t(e)("uiShowcase.demos.checkboxSingle")),1)]),_:1},8,["modelValue"]),a(t(Le),{modelValue:M.value,"onUpdate:modelValue":u[9]||(u[9]=m=>M.value=m),options:q.value,"aria-label":t(e)("uiShowcase.sections.checkbox.title")},null,8,["modelValue","options","aria-label"])]),_:1},8,["code"])]),o("section",to,[o("h2",null,l(t(e)("uiShowcase.sections.color.title")),1),o("p",oo,l(t(e)("uiShowcase.sections.color.desc")),1),a(C,{"section-id":"color"}),a(U,{code:t(x).color},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.sections.color.title")},{default:c(()=>[a(t(Be),{modelValue:N.value,"onUpdate:modelValue":u[10]||(u[10]=m=>N.value=m)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["code"])]),o("section",io,[o("h2",null,l(t(e)("uiShowcase.sections.range.title")),1),o("p",so,l(t(e)("uiShowcase.sections.range.desc")),1),a(C,{"section-id":"range"}),a(U,{code:t(x).range},{default:c(()=>[a(t(V),{label:`${H.value}%`},{default:c(()=>[a(t(Ee),{modelValue:H.value,"onUpdate:modelValue":u[11]||(u[11]=m=>H.value=m),min:0,max:100},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["code"])]),o("section",ao,[o("h2",null,l(t(e)("uiShowcase.sections.upload.title")),1),o("p",lo,l(t(e)("uiShowcase.sections.upload.desc")),1),a(C,{"section-id":"upload"}),a(U,{code:t(x).upload,"preview-class":"ui-showcase-stack"},{default:c(()=>[a(t(ee),{variant:"zone",title:t(e)("uiShowcase.demos.uploadTitle"),subtitle:t(e)("uiShowcase.demos.uploadSubtitle"),onSelect:Q},null,8,["title","subtitle"]),a(t(ee),{variant:"compact",title:t(e)("uiShowcase.demos.uploadCompactTitle"),subtitle:t(e)("uiShowcase.demos.uploadSubtitle"),onSelect:Q},null,8,["title","subtitle"]),a(t(ee),{variant:"inline",title:t(e)("uiShowcase.demos.uploadInlineTitle"),onSelect:Q},null,8,["title"]),a(t(ee),{variant:"button",title:t(e)("uiShowcase.demos.uploadButtonTitle"),onSelect:Q},null,8,["title"]),W.value?(v(),te(t(G),{key:0},{default:c(()=>[T(l(W.value),1)]),_:1})):F("",!0)]),_:1},8,["code"])]),o("section",no,[o("h2",null,l(t(e)("uiShowcase.sections.spoilerImage.title")),1),o("p",co,l(t(e)("uiShowcase.sections.spoilerImage.desc")),1),a(C,{"section-id":"spoilerImage"}),a(U,{code:t(x).spoilerImage,"preview-class":"ui-showcase-spoiler-grid"},{default:c(()=>[a(t(V),{label:t(e)("uiShowcase.demos.spoilerOnce")},{default:c(()=>[a(t(ve),{src:t(ye),alt:t(e)("uiShowcase.demos.spoilerAltOnce")},null,8,["src","alt"])]),_:1},8,["label"]),a(t(V),{label:t(e)("uiShowcase.demos.spoilerExternal")},{default:c(()=>[a(t(ve),{ref_key:"spoilerExternalRef",ref:I,visible:O.value,"onUpdate:visible":u[12]||(u[12]=m=>O.value=m),src:t(Se),alt:t(e)("uiShowcase.demos.spoilerAltToggle")},null,8,["visible","src","alt"]),a(t(ue),null,{default:c(()=>[a(t(B),{onClick:u[13]||(u[13]=m=>I.value?.hide())},{default:c(()=>[T(l(t(e)("uiShowcase.demos.spoilerHide")),1)]),_:1}),a(t(B),{variant:"primary",onClick:u[14]||(u[14]=m=>I.value?.show())},{default:c(()=>[T(l(t(e)("uiShowcase.demos.spoilerShow")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1},8,["code"])]),o("section",ro,[o("h2",null,l(t(e)("uiShowcase.sections.notice.title")),1),o("p",uo,l(t(e)("uiShowcase.sections.notice.desc")),1),a(C,{"section-id":"notice"}),a(U,{code:t(x).notice,"preview-class":"ui-showcase-stack"},{default:c(()=>[a(t(G),null,{default:c(()=>[T(l(t(e)("uiShowcase.demos.noticeInfo")),1)]),_:1}),a(t(G),{variant:"error"},{default:c(()=>[T(l(t(e)("uiShowcase.demos.noticeError")),1)]),_:1}),a(t(G),{variant:"success"},{default:c(()=>[T(l(t(e)("uiShowcase.demos.noticeSuccess")),1)]),_:1})]),_:1},8,["code"])]),o("section",ho,[o("h2",null,l(t(e)("uiShowcase.sections.configOutput.title")),1),o("p",po,l(t(e)("uiShowcase.sections.configOutput.desc")),1),a(C,{"section-id":"configOutput"}),a(U,{code:t(x).configOutput},{default:c(()=>[a(t(de),{summary:t(e)("uiShowcase.demos.configSummary"),content:Io},null,8,["summary"])]),_:1},8,["code"])]),o("section",mo,[o("h2",null,l(t(e)("uiShowcase.sections.kvResultPanel.title")),1),o("p",fo,l(t(e)("uiShowcase.sections.kvResultPanel.desc")),1),a(C,{"section-id":"kvResultPanel"}),a(U,{code:t(x).kvResultPanel},{default:c(()=>[a(re,{title:t(e)("uiShowcase.demos.kvPanelTitle")},{default:c(()=>[o("pre",vo,l(t(e)("uiShowcase.demos.kvPanelPre")),1)]),_:1},8,["title"])]),_:1},8,["code"])]),o("section",wo,[o("h2",null,l(t(e)("uiShowcase.sections.claimList.title")),1),o("p",bo,l(t(e)("uiShowcase.sections.claimList.desc")),1),a(C,{"section-id":"claimList"}),a(U,{code:t(x).claimList},{default:c(()=>[a(re,null,{default:c(()=>[a(Ve,{items:Ue})]),_:1})]),_:1},8,["code"])]),o("section",go,[o("h2",null,l(t(e)("uiShowcase.sections.copyActions.title")),1),o("p",_o,l(t(e)("uiShowcase.sections.copyActions.desc")),1),a(C,{"section-id":"copyActions"}),a(U,{code:t(x).copyActions},{default:c(()=>[a(Pe,{text:"demo-copy-text",label:t(e)("uiShowcase.demos.copyMain"),extras:xe.value},null,8,["label","extras"])]),_:1},8,["code"])]),o("section",yo,[o("h2",null,l(t(e)("uiShowcase.sections.backToTop.title")),1),o("p",So,l(t(e)("uiShowcase.sections.backToTop.desc")),1),a(C,{"section-id":"backToTop"}),a(U,{code:t(x).backToTop},{default:c(()=>[o("div",xo,[o("div",Uo,[(v(),S($,null,K(10,m=>o("p",{key:m},l(t(e)("uiShowcase.demos.backToTopParagraph")),1)),64))]),a(Ae,{variant:"embedded",threshold:80})])]),_:1},8,["code"])]),o("section",Co,[o("h2",null,l(t(e)("uiShowcase.sections.highlight.title")),1),o("p",ko,l(t(e)("uiShowcase.sections.highlight.desc")),1),a(C,{"section-id":"highlight"}),a(U,{code:t(x).highlight},{default:c(()=>[o("p",To,[a(Ie,{text:t(e)("uiShowcase.demos.highlightSample"),tokens:k.value},null,8,["text","tokens"])])]),_:1},8,["code"])])])])])}}},Qo=ie(Po,[["__scopeId","data-v-06d8690e"]]);export{Qo as default};
