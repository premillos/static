import{D as Re,u as re,A as w,w as ve,o as Ae,E as Ie,C as Fe,e as y,f as x,h as i,G as Le,z as O,j as l,n as B,c as I,B as we,k as t,p as a,q as u,i as T,s as M,x as ne,F as z,l as Y,r as Be}from"./app-B0M0IDBm.js";import{B as Ee,H as Me}from"./HighlightText-rnlM6dCX.js";import{_ as He}from"./ToolCopyActions-D1JWtlBh.js";import{_ as ze}from"./ClaimList-BqZmEU4G.js";import{_ as be}from"./KvResultPanel-DlHvKf3O.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as De}from"./useCopyFeedback-v4-v1O2T.js";import{_ as ye}from"./UiActions-ZZuCWikz.js";import{U as Se}from"./UiCheckbox-symbgLUk.js";import{U as _e}from"./UiCheckboxGroup-TFnhiSw8.js";import{U as $e}from"./UiColorInput-D27GIF92.js";import{U as ge}from"./UiConfigOutput-YNDZGoof.js";import{U as C}from"./UiField-pdXbitl-.js";import{U as ee}from"./UiNotice-CTG7GMna.js";import{U as Ne}from"./UiRangeInput-Dk8fsSQ_.js";import{U as Oe}from"./UiSelect-BHP0e1Rz.js";import{U as xe}from"./UiSegmentedControl-9rD20AP9.js";import{U as We}from"./UiTextInput-BtsY1VaG.js";import{U as Ue}from"./UiTextarea-Db5RkE5P.js";import{N as pe}from"./NumberInput-CAwncpz-.js";import{U as le}from"./UploadZone-Dgzqpbp_.js";import"./ToolIcon-DTj9E2EW.js";function Ge(d,e,s,o,{onEnd:n,easing:m}={}){const f=m||(_=>_),h=performance.now();function b(_){const V=Math.min(1,(_-h)/s);o(d+(e-d)*f(V)),V<1?requestAnimationFrame(b):n?.()}requestAnimationFrame(b)}function ke(d,e,s,o,n){d.save(),d.globalCompositeOperation="destination-out",d.fillStyle="white",d.shadowBlur=o/3.5*n*e,d.shadowColor="white",d.beginPath(),d.arc(s.x,s.y,o*e,0,2*Math.PI),d.fill(),d.globalCompositeOperation="source-over",d.restore()}const Ke=`#version 300 es

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
`,qe=`#version 300 es

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
`;class Ye{constructor(e){this.canvas=e,this.time=0,this.bufferIndex=0,this.inited=!1,this.lastDrawTime=0,this.reset=!0,this.context=e.getContext("webgl2")}resize(e,s,o,n){this.dpr=o,this.canvas.width=e*o,this.canvas.height=s*o,this.config=n,this.inited&&this.draw()}genBuffer(){const e=this.context;this.buffer&&(e.deleteBuffer(this.buffer[0]),e.deleteBuffer(this.buffer[1])),this.buffer=[];for(let s=0;s<2;s+=1)this.buffer[s]=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer[s]),this.bufferParticlesCount=Math.ceil(this.config.particlesCount),e.bufferData(e.ARRAY_BUFFER,this.bufferParticlesCount*6*4,e.DYNAMIC_DRAW)}compileShader(e,s){const o=this.context,n=o.createShader(e);if(o.shaderSource(n,s),o.compileShader(n),!o.getShaderParameter(n,o.COMPILE_STATUS))throw new Error(`compile shader error:
${o.getShaderInfoLog(n)}`);return n}init(){return this.initPromise?this.initPromise:this.context?(this.initPromise=Promise.resolve().then(()=>{const e=this.compileShader(this.context.VERTEX_SHADER,Ke),s=this.compileShader(this.context.FRAGMENT_SHADER,qe);return this._init(e,s),!0}),this.initPromise.catch(()=>{this.initPromise=void 0}),this.initPromise):Promise.reject(new Error("WebGL2 不可用"))}_init(e,s){this.genBuffer();const o=this.context,n=this.program=o.createProgram();if(o.attachShader(n,e),o.attachShader(n,s),o.transformFeedbackVaryings(n,["outPosition","outVelocity","outTime","outDuration"],o.INTERLEAVED_ATTRIBS),o.linkProgram(n),!o.getProgramParameter(n,o.LINK_STATUS))throw new Error(`program link error:
${o.getProgramInfoLog(n)}`);o.deleteShader(e),o.deleteShader(s),this.timeHandle=o.getUniformLocation(n,"time"),this.deltaTimeHandle=o.getUniformLocation(n,"deltaTime"),this.sizeHandle=o.getUniformLocation(n,"size"),this.resetHandle=o.getUniformLocation(n,"reset"),this.radiusHandle=o.getUniformLocation(n,"r"),this.seedHandle=o.getUniformLocation(n,"seed"),this.noiseScaleHandle=o.getUniformLocation(n,"noiseScale"),this.noiseSpeedHandle=o.getUniformLocation(n,"noiseSpeed"),this.dampingMultHandle=o.getUniformLocation(n,"dampingMult"),this.velocityMultHandle=o.getUniformLocation(n,"velocityMult"),this.forceMultHandle=o.getUniformLocation(n,"forceMult"),this.longevityHandle=o.getUniformLocation(n,"longevity"),this.maxVelocityHandle=o.getUniformLocation(n,"maxVelocity"),this.noiseMovementHandle=o.getUniformLocation(n,"noiseMovement"),this.colorHandle=o.getUniformLocation(n,"color"),o.clearColor(0,0,0,0),o.viewport(0,0,this.canvas.width,this.canvas.height),o.enable(o.BLEND),o.blendFunc(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA),this.inited=!0,this.lastDrawTime=Date.now()}requestReset(){this.reset=!0}draw(){if(!this.inited)return;const e=this.context,s=this.config,o=Date.now(),n=Math.min((o-this.lastDrawTime)/1e3,1)*s.timeScale;this.lastDrawTime=o,this.time+=n,this.bufferParticlesCount<s.particlesCount&&(this.genBuffer(),this.reset=!0),e.viewport(0,0,this.canvas.width,this.canvas.height),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(this.program),e.uniform1f(this.resetHandle,this.reset?1:0),this.reset&&(this.time=0,this.reset=!1),e.uniform1f(this.timeHandle,this.time),e.uniform1f(this.deltaTimeHandle,n),e.uniform2f(this.sizeHandle,this.canvas.width,this.canvas.height),e.uniform1f(this.seedHandle,s.seed),e.uniform1f(this.radiusHandle,s.radius),e.uniform1f(this.noiseScaleHandle,s.noiseScale),e.uniform1f(this.noiseSpeedHandle,s.noiseSpeed),e.uniform1f(this.dampingMultHandle,s.dampingMult),e.uniform1f(this.velocityMultHandle,s.velocityMult),e.uniform1f(this.forceMultHandle,s.forceMult),e.uniform1f(this.longevityHandle,s.longevity),e.uniform1f(this.maxVelocityHandle,s.maxVelocity),e.uniform1f(this.noiseMovementHandle,s.noiseMovement),e.uniform3f(this.colorHandle,(s.color>>16&255)/255,(s.color>>8&255)/255,(s.color&255)/255),e.bindBuffer(e.ARRAY_BUFFER,this.buffer[this.bufferIndex]),e.vertexAttribPointer(0,2,e.FLOAT,!1,24,0),e.enableVertexAttribArray(0),e.vertexAttribPointer(1,2,e.FLOAT,!1,24,8),e.enableVertexAttribArray(1),e.vertexAttribPointer(2,1,e.FLOAT,!1,24,16),e.enableVertexAttribArray(2),e.vertexAttribPointer(3,1,e.FLOAT,!1,24,20),e.enableVertexAttribArray(3),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,0,this.buffer[1-this.bufferIndex]),e.vertexAttribPointer(0,2,e.FLOAT,!1,24,0),e.enableVertexAttribArray(0),e.vertexAttribPointer(1,2,e.FLOAT,!1,24,8),e.enableVertexAttribArray(1),e.vertexAttribPointer(2,1,e.FLOAT,!1,24,16),e.enableVertexAttribArray(2),e.vertexAttribPointer(3,1,e.FLOAT,!1,24,20),e.enableVertexAttribArray(3),e.beginTransformFeedback(e.POINTS),e.drawArrays(e.POINTS,0,s.particlesCount),e.endTransformFeedback(),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER,0,null),this.bufferIndex=1-this.bufferIndex}destroy(){this.context&&(this.buffer&&(this.context.deleteBuffer(this.buffer[0]),this.context.deleteBuffer(this.buffer[1])),this.program&&this.context.deleteProgram(this.program),this.buffer=null,this.program=null,this.inited=!1)}}function Pe(d){return d?d instanceof HTMLVideoElement?{width:d.videoWidth,height:d.videoHeight}:{width:d.naturalWidth,height:d.naturalHeight}:{width:0,height:0}}function je(d){return d.readyState>=1?Promise.resolve():new Promise((e,s)=>{d.addEventListener("loadedmetadata",e,{once:!0}),d.addEventListener("error",()=>s(new Error("视频加载失败")),{once:!0})})}function Ce(d){return d.readyState>=2?Promise.resolve():new Promise(e=>{d.addEventListener("seeked",e,{once:!0}),d.addEventListener("loadeddata",e,{once:!0})})}const Ze=1.2,Xe=12,Je=24;function fe(d,e,s,o,{overscan:n=1,fill:m="#1a1a1a",fit:f="cover"}={}){const{width:h,height:b}=Pe(e);if(!h||!b)return;const V=(f==="contain"?Math.min(s/h,o/b):Math.max(s/h,o/b))*n,v=h*V,A=b*V,L=(s-v)/2,P=(o-A)/2;d.clearRect(0,0,s,o),m&&(d.fillStyle=m,d.fillRect(0,0,s,o)),d.drawImage(e,0,0,h,b,L,P,v,A)}function Te(d,e,s,o,n="cover"){d.save(),d.filter="blur(32px) brightness(0.8) saturate(0.9)",fe(d,e,s,o,{overscan:Ze,fill:"#1a1a1a",fit:n}),d.restore(),d.fillStyle="rgba(255, 255, 255, 0.08)",d.fillRect(0,0,s,o)}class Qe{constructor({rootEl:e,sharpCanvas:s,blurCanvas:o,particleCanvas:n,onShowComplete:m}){this.rootEl=e,this.sharpCanvas=s,this.blurCanvas=o,this.particleCanvas=n,this.onShowComplete=m,this.dpr=Math.min(window.devicePixelRatio||1,2),this.displayWidth=0,this.displayHeight=0,this.isPlaying=!1,this.rafId=0,this.showAnimation=null,this.mediaSource=null,this.simCanvas=document.createElement("canvas"),this.simCore=new Ye(this.simCanvas),this.fit="cover",this.lastLayoutKey="",this.particleSeed=Math.random()*10,this.lastBlurRedrawTime=0,this.blurRedrawInterval=1e3/Je}setFit(e){this.fit=e==="contain"?"contain":"cover"}async loadImage(e){const s=await new Promise((o,n)=>{const m=new Image;m.decoding="async",m.onload=()=>o(m),m.onerror=()=>n(new Error("图片加载失败")),m.src=e});return this.mediaSource=s,this.lastLayoutKey="",this.resize(),s}async loadImageElement(e){if(!e)throw new Error("图片元素缺失");return(!e.complete||!e.naturalWidth)&&await new Promise((s,o)=>{e.addEventListener("load",s,{once:!0}),e.addEventListener("error",()=>o(new Error("图片加载失败")),{once:!0})}),this.mediaSource=e,this.lastLayoutKey="",this.resize(),e}isVideoMedia(){return this.mediaSource instanceof HTMLVideoElement}shouldVideoAutoplay(e){return!!(e?.autoplay||e?.hasAttribute("autoplay"))}ensureVideoPlaying(){const e=this.mediaSource;e instanceof HTMLVideoElement&&this.shouldVideoAutoplay(e)&&e.paused&&e.play().catch(()=>{})}redrawSharpFrame(){if(!this.mediaSource||!this.displayWidth||this.showAnimation)return;const e=this.sharpCanvas.getContext("2d");e&&(e.setTransform(this.dpr,0,0,this.dpr,0,0),fe(e,this.mediaSource,this.displayWidth,this.displayHeight,{fill:null,fit:this.fit}))}redrawBlurFrame(){if(!this.mediaSource||!this.displayWidth||this.showAnimation)return;const e=this.blurCanvas.getContext("2d");e&&(e.setTransform(this.dpr,0,0,this.dpr,0,0),Te(e,this.mediaSource,this.displayWidth,this.displayHeight,this.fit))}maybeRedrawBlurFrame(e=performance.now()){e-this.lastBlurRedrawTime<this.blurRedrawInterval||(this.lastBlurRedrawTime=e,this.redrawBlurFrame())}redrawMediaFrame(){this.redrawSharpFrame(),this.lastBlurRedrawTime=performance.now(),this.redrawBlurFrame()}async loadVideo(e){if(!e)throw new Error("视频元素缺失");if(e.getAttribute("crossorigin")==="anonymous"&&(e.crossOrigin="anonymous"),await je(e),this.shouldVideoAutoplay(e))e.paused&&e.play().catch(()=>{});else{e.pause();try{e.currentTime=0,await Ce(e)}catch{}}return e.readyState<2&&await Ce(e),this.mediaSource=e,this.lastLayoutKey="",this.resize(),e}measureLayout(){if(!this.mediaSource||!this.rootEl)return null;const{width:e,height:s}=Pe(this.mediaSource);e&&s&&(this.rootEl.style.aspectRatio=`${e} / ${s}`);const o=this.rootEl.clientWidth,n=this.rootEl.clientHeight||o*(s/e);return o<=0||n<=0?null:{layoutWidth:o,layoutHeight:n}}redrawSharp(e,s){const o=Math.round(e*this.dpr),n=Math.round(s*this.dpr);for(const f of[this.sharpCanvas,this.blurCanvas,this.particleCanvas])f.width=o,f.height=n;const m=this.sharpCanvas.getContext("2d");m&&(m.setTransform(this.dpr,0,0,this.dpr,0,0),fe(m,this.mediaSource,e,s,{fill:null,fit:this.fit}))}resize({visible:e=!1}={}){const s=this.measureLayout();if(!s)return!1;const{layoutWidth:o,layoutHeight:n}=s,m=`${o}x${n}@${this.dpr}:${this.fit}`;if(m===this.lastLayoutKey)return!1;if(this.displayWidth=o,this.displayHeight=n,this.redrawSharp(o,n),e||this.showAnimation?.progress>=1)return this.lastLayoutKey=m,!0;const f=this.blurCanvas.getContext("2d");return f?(f.setTransform(this.dpr,0,0,this.dpr,0,0),Te(f,this.mediaSource,o,n,this.fit),this.simCore.resize(o,n,this.dpr,Re(o,n,this.dpr,this.particleSeed)),this.simCore.requestReset(),this.lastLayoutKey=m,this.drawParticles(),!0):!1}async init(){if(!this.simCore.context)throw new Error("WebGL2 不可用");await this.simCore.init(),this.ensureVideoPlaying(),this.play()}play(){this.isPlaying||this.showAnimation?.progress>=1||(this.isPlaying=!0,this.simCore.lastDrawTime=Date.now(),this.tick())}pause(){this.isPlaying=!1,cancelAnimationFrame(this.rafId),this.rafId=0}tick(){if(this.isPlaying){if(this.simCore.draw(),this.isVideoMedia()){const e=this.mediaSource;!e.paused&&!e.ended?(this.redrawSharpFrame(),this.maybeRedrawBlurFrame()):this.ensureVideoPlaying()}this.drawParticles(),this.rafId=requestAnimationFrame(()=>this.tick())}}drawParticles(){const e=this.particleCanvas?.getContext("2d");if(!e||!this.displayWidth)return;const{width:s,height:o}=this.particleCanvas;if(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,s,o),this.showAnimation?.progress>=1)return;const n=Math.round(Xe*this.dpr);if(!this.showAnimation){e.drawImage(this.simCanvas,0,0,s,o,-n,-n,s+n*2,o+n*2);return}const{progress:m,transformedCoords:f,maxDist:h}=this.showAnimation,b=m**2*.5;e.drawImage(this.simCanvas,f.x*b,f.y*b,s*(1-b),o*(1-b),-n,-n,s+n*2,o+n*2),ke(e,m,f,h,this.dpr)}showFromEvent(e){if(this.showAnimation?.progress>=1)return Promise.resolve();const s=this.particleCanvas.getBoundingClientRect(),o=e.clientX-s.left,n=e.clientY-s.top,m=Math.max(Math.hypot(o,n),Math.hypot(s.width-o,n),Math.hypot(o,s.height-n),Math.hypot(s.width-o,s.height-n)),f=m*this.dpr+50,h=this.blurCanvas.getContext("2d");this.showAnimation={progress:0,transformedCoords:{x:o*this.dpr,y:n*this.dpr},underlyingCoords:{x:o*this.blurCanvas.width/s.width,y:n*this.blurCanvas.height/s.height},maxDist:f,maxDistUnderlying:f/this.particleCanvas.width*this.blurCanvas.width,blurCtx:h};const b=800+(400-m);return new Promise(_=>{Ge(0,1,b,V=>{this.showAnimation.progress=V,this.drawParticles(),h&&(h.save(),h.setTransform(1,0,0,1,0,0),ke(h,V,this.showAnimation.underlyingCoords,this.showAnimation.maxDistUnderlying,this.dpr),h.restore())},{onEnd:()=>{this.pause(),this.onShowComplete?.(),_()}})})}rehide(){this.showAnimation=null,this.redrawMediaFrame(),this.drawParticles(),this.ensureVideoPlaying(),this.play()}destroy(){this.pause(),this.simCore.destroy(),this.mediaSource=null}}const et=["aria-label","disabled"],tt={key:0,class:"ui-spoiler__hint"},it={__name:"UiSpoiler",props:{visible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fit:{type:String,default:"cover",validator:d=>["cover","contain"].includes(d)},showLabel:{type:String,default:""},showHint:{type:Boolean,default:!1}},emits:["update:visible","show","hide"],setup(d,{expose:e,emit:s}){const o=d,n=s,{t:m}=re(),f=w(null),h=w(null),b=w(null),_=w(null),V=w(null),v=w(null),A=w(o.visible),L=w(!1),P=w(!1);let g=null,W=null,$=null,G=0,N=null,D=null;const E=I(()=>v.value instanceof HTMLVideoElement),R=I(()=>!A.value),j=I(()=>o.showLabel?o.showLabel:E.value?m("spoiler.showVideo"):m("spoiler.showImage"));ve(()=>o.visible,r=>{r!==A.value&&(A.value=r,r?ie():oe())}),ve(()=>o.fit,r=>{g?.setFit(r),H()});function te(){const r=h.value;if(!r)return v.value=null,null;const c=r.querySelector("video, img");return v.value=c,c}function Z(r){A.value=r,n("update:visible",r)}function ie(){g?.pause(),L.value=!1,J()}function X(r){return!!(r?.autoplay||r?.hasAttribute("autoplay"))}function J(){const r=v.value;r instanceof HTMLVideoElement&&r.paused&&r.play().catch(()=>{})}function K(){const r=v.value;r instanceof HTMLVideoElement&&X(r)&&(A.value||r.paused&&r.play().catch(()=>{}))}function ue(r){if(D?.(),D=null,!(r instanceof HTMLVideoElement)||!X(r))return;const c=()=>{K()};r.addEventListener("loadeddata",c),r.addEventListener("canplay",c),c(),D=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("canplay",c)}}async function q(){const r=v.value;if(!(r instanceof HTMLVideoElement))return;const c=X(r);r.pause();try{r.currentTime=0,await new Promise(F=>{r.addEventListener("seeked",F,{once:!0}),r.addEventListener("loadeddata",F,{once:!0})})}catch{}c&&r.play().catch(()=>{})}async function Q(){ae(),P.value=!1,L.value=!1;const r=te();if(!r)return;await we();const c=b.value,F=_.value,p=V.value;if(!(!c||!F||!p)){g=new Qe({rootEl:f.value,sharpCanvas:c,blurCanvas:F,particleCanvas:p,onShowComplete:()=>{Z(!0),n("show")}}),g.setFit(o.fit);try{if(r instanceof HTMLVideoElement)await g.loadVideo(r);else if(r instanceof HTMLImageElement)await g.loadImageElement(r);else return;if(await we(),g.resize(),A.value){ie();return}await g.init(),L.value=!0,K()}catch{P.value=!0,L.value=!0,K()}}}async function oe(){E.value&&await q(),!(!g||P.value)&&(g.resize(),g.rehide(),g.play(),L.value=!0)}async function de(r){await se(r)}async function se(r){if(o.disabled||$||A.value)return;if(P.value||!g){Z(!0),n("show"),J();return}const c=f.value,F=r||c&&{clientX:c.getBoundingClientRect().left+c.clientWidth/2,clientY:c.getBoundingClientRect().top+c.clientHeight/2};$=g.showFromEvent(F).finally(()=>{$=null}),await $}async function he(){if(A.value){if(Z(!1),n("hide"),P.value){E.value&&await q();return}await oe()}}e({show:se,hide:he});function ae(){g?.destroy(),g=null}function H(){cancelAnimationFrame(G),G=requestAnimationFrame(()=>{g&&g.resize({visible:A.value})})}function S(){const r=te();if(r&&r!==N){if(N=r,ue(r),r instanceof HTMLImageElement&&!r.complete){r.addEventListener("load",()=>{r===N&&Q()},{once:!0});return}Q()}}return Ae(()=>{S(),f.value&&typeof ResizeObserver<"u"&&(W=new ResizeObserver(()=>{H()}),W.observe(f.value)),window.addEventListener("resize",H,{passive:!0})}),Ie(()=>{S()}),Fe(()=>{cancelAnimationFrame(G),window.removeEventListener("resize",H),W?.disconnect(),D?.(),ae()}),(r,c)=>(y(),x("div",{ref_key:"rootRef",ref:f,class:O(["ui-spoiler",{"ui-spoiler--visible":A.value,"ui-spoiler--disabled":d.disabled,"ui-spoiler--fallback":P.value,"ui-spoiler--video":E.value,[`ui-spoiler--${d.fit}`]:!0}])},[i("div",{ref_key:"mediaRef",ref:h,class:O(["ui-spoiler__media",{"ui-spoiler__media--visible":!R.value,"ui-spoiler__media--fallback-blur":P.value&&R.value}])},[Le(r.$slots,"default")],2),i("canvas",{ref_key:"sharpCanvasRef",ref:b,class:O(["ui-spoiler__sharp",{"ui-spoiler__layer--hidden":!R.value}]),"aria-hidden":"true"},null,2),i("canvas",{ref_key:"blurCanvasRef",ref:_,class:O(["ui-spoiler__blur",{"ui-spoiler__layer--hidden":!R.value||!L.value||P.value}]),"aria-hidden":"true"},null,2),i("canvas",{ref_key:"particleCanvasRef",ref:V,class:O(["ui-spoiler__particles",{"ui-spoiler__layer--hidden":!R.value||!L.value||P.value}]),"aria-hidden":"true"},null,2),R.value?(y(),x("button",{key:0,type:"button",class:"ui-spoiler__veil","aria-label":j.value,disabled:d.disabled||!L.value,onClick:de},[d.showHint?(y(),x("span",tt,l(j.value),1)):B("",!0)],8,et)):B("",!0)],2))}},me=ce(it,[["__scopeId","data-v-5066c26d"]]),ot={class:"ui-showcase-demo-block"},st={class:"ui-showcase-demo-head"},at={class:"ui-showcase-demo-title"},lt={class:"ui-showcase-demo-actions"},nt={key:0,class:"ui-showcase-demo-code"},rt={class:"ui-showcase-code-pre"},ct={__name:"UiShowcaseDemo",props:{code:{type:String,required:!0},previewClass:{type:String,default:""}},setup(d){const{t:e}=re(),s=w(!1),{copyStatus:o,copyText:n}=De();async function m(f){await n(f)}return(f,h)=>(y(),x("div",ot,[i("div",st,[i("h3",at,l(t(e)("uiShowcase.demo.previewTitle")),1),i("div",lt,[a(t(M),{type:"text",onClick:h[0]||(h[0]=b=>s.value=!s.value)},{default:u(()=>[T(l(s.value?t(e)("uiShowcase.demo.hideCode"):t(e)("uiShowcase.demo.showCode")),1)]),_:1}),s.value?(y(),ne(t(M),{key:0,type:"text",onClick:h[1]||(h[1]=b=>m(d.code))},{default:u(()=>[T(l(t(o)||t(e)("uiShowcase.demo.copyCode")),1)]),_:1})):B("",!0)])]),i("div",{class:O(["ui-showcase-demo-preview",d.previewClass])},[Le(f.$slots,"default",{},void 0,!0)],2),s.value?(y(),x("div",nt,[i("pre",rt,[i("code",null,l(d.code),1)])])):B("",!0)]))}},U=ce(ct,[["__scopeId","data-v-8f875d1e"]]),ut={key:0,class:"ui-prop-docs"},dt={class:"ui-prop-docs-heading"},ht={key:0,class:"ui-prop-docs-subtitle"},pt={class:"ui-prop-docs-label"},mt={class:"ui-prop-table-wrap"},ft={class:"ui-prop-table"},vt={scope:"col"},wt={scope:"col"},bt={scope:"col"},yt={scope:"col"},St={class:"ui-prop-docs-label"},_t={class:"ui-prop-table-wrap"},gt={class:"ui-prop-table"},xt={scope:"col"},Ut={scope:"col"},kt={scope:"col"},Ct={class:"ui-prop-docs-label"},Tt={class:"ui-prop-table-wrap"},Vt={class:"ui-prop-table"},At={scope:"col"},Ft={scope:"col"},Lt={scope:"col"},Pt={__name:"UiShowcasePropTable",props:{sectionId:{type:String,required:!0}},setup(d){const e=d,{t:s,tm:o}=re(),n=I(()=>o(`uiShowcase.sections.${e.sectionId}`)||{}),m=I(()=>{const h=n.value;return Array.isArray(h.tables)&&h.tables.length?h.tables:h.props?.length||h.events?.length||h.slots?.length?[{title:h.componentTitle||"",props:h.props||[],events:h.events||[],slots:h.slots||[]}]:[]});function f(h){return h==null||h===""?"—":String(h)}return(h,b)=>m.value.length?(y(),x("div",ut,[i("h3",dt,l(t(s)("uiShowcase.propTable.apiTitle")),1),(y(!0),x(z,null,Y(m.value,(_,V)=>(y(),x("div",{key:`${d.sectionId}-${V}`,class:"ui-prop-docs-group"},[_.title?(y(),x("h3",ht,l(_.title),1)):B("",!0),_.props?.length?(y(),x(z,{key:1},[i("h4",pt,l(t(s)("uiShowcase.propTable.propsTitle")),1),i("div",mt,[i("table",ft,[i("thead",null,[i("tr",null,[i("th",vt,l(t(s)("uiShowcase.propTable.colName")),1),i("th",wt,l(t(s)("uiShowcase.propTable.colType")),1),i("th",bt,l(t(s)("uiShowcase.propTable.colDefault")),1),i("th",yt,l(t(s)("uiShowcase.propTable.colDesc")),1)])]),i("tbody",null,[(y(!0),x(z,null,Y(_.props,v=>(y(),x("tr",{key:v.name},[i("td",null,[i("code",null,l(v.name),1)]),i("td",null,[i("code",null,l(v.type),1)]),i("td",null,[i("code",null,l(f(v.default)),1)]),i("td",null,l(v.desc),1)]))),128))])])])],64)):B("",!0),_.events?.length?(y(),x(z,{key:2},[i("h4",St,l(t(s)("uiShowcase.propTable.eventsTitle")),1),i("div",_t,[i("table",gt,[i("thead",null,[i("tr",null,[i("th",xt,l(t(s)("uiShowcase.propTable.colName")),1),i("th",Ut,l(t(s)("uiShowcase.propTable.colPayload")),1),i("th",kt,l(t(s)("uiShowcase.propTable.colDesc")),1)])]),i("tbody",null,[(y(!0),x(z,null,Y(_.events,v=>(y(),x("tr",{key:v.name},[i("td",null,[i("code",null,l(v.name),1)]),i("td",null,[i("code",null,l(f(v.payload)),1)]),i("td",null,l(v.desc),1)]))),128))])])])],64)):B("",!0),_.slots?.length?(y(),x(z,{key:3},[i("h4",Ct,l(t(s)("uiShowcase.propTable.slotsTitle")),1),i("div",Tt,[i("table",Vt,[i("thead",null,[i("tr",null,[i("th",At,l(t(s)("uiShowcase.propTable.colName")),1),i("th",Ft,l(t(s)("uiShowcase.propTable.colScope")),1),i("th",Lt,l(t(s)("uiShowcase.propTable.colDesc")),1)])]),i("tbody",null,[(y(!0),x(z,null,Y(_.slots,v=>(y(),x("tr",{key:v.name},[i("td",null,[i("code",null,l(v.name),1)]),i("td",null,[i("code",null,l(f(v.scope)),1)]),i("td",null,l(v.desc),1)]))),128))])])])],64)):B("",!0)]))),128))])):B("",!0)}},k=ce(Pt,[["__scopeId","data-v-9392fd8b"]]);function Ve(d){return`/static/${String(d).replace(/^\//,"")}`}const Rt="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",It={button:`<UiButton>Default</UiButton>
<UiButton type="primary">Primary</UiButton>
<UiButton type="text">Text</UiButton>
<UiButton disabled>Disabled</UiButton>`,field:`<UiField label="数量" description="范围 1–10">
  <NumberInput v-model="count" :min="1" :max="10" />
</UiField>`,actions:`<UiActions>
  <UiField label="数量" compact>
    <NumberInput v-model="count" :min="1" :max="10" />
  </UiField>
  <UiButton type="primary" @click="generate">生成</UiButton>
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
</UiField>`,segmented:`<UiField label="normal 默认">
  <UiSegmentedControl v-model="mode" size="normal" :options="options" />
</UiField>
<UiField label="small 紧凑" compact>
  <UiSegmentedControl v-model="mode" :options="options" />
</UiField>`,checkbox:`<UiField label="normal（默认尺寸）">
  <UiCheckbox v-model="notifyNormal">接收通知</UiCheckbox>
</UiField>
<UiField label="small（compact / 操作栏）" compact>
  <UiCheckbox v-model="notifySmall" size="small">邮件提醒</UiCheckbox>
</UiField>
<UiField label="normal 多选组">
  <UiCheckboxGroup
    v-model="sourcesNormal"
    :options="options"
    aria-label="normal 多选组"
  />
</UiField>
<UiField label="small 多选组" compact>
  <UiCheckboxGroup
    v-model="sourcesSmall"
    size="small"
    :options="options"
    aria-label="small 多选组"
  />
</UiField>`,color:`<UiField label="颜色">
  <UiColorInput v-model="color" />
</UiField>`,range:'<UiField :label="`${opacity}%`">\n  <UiRangeInput v-model="opacity" :min="0" :max="100" />\n</UiField>',upload:`<UploadZone variant="zone" title="点击或拖入文件" subtitle="支持拖拽" @select="onFiles" />
<UploadZone variant="compact" title="紧凑区" subtitle="侧栏/嵌套" @select="onFiles" />
<UploadZone variant="inline" title="inline 单行" @select="onFiles" />
<UploadZone variant="button" title="选择文件" @select="onFiles" />
<UiNotice v-if="hint">{{ hint }}</UiNotice>`,spoiler:`<UiSpoiler>
  <img :src="publicAsset('ui-showcase/spoiler-demo-1.jpg')" alt="山丘小径风景" />
</UiSpoiler>

<UiSpoiler>
  <video
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    crossorigin="anonymous"
    autoplay
    loop
    muted
    playsinline
    controls
    aria-label="花朵视频（MDN 公共示例）"
  />
</UiSpoiler>

<UiSpoiler ref="spoilerRef" v-model:visible="visible">
  <img :src="publicAsset('ui-showcase/spoiler-demo-2.jpg')" alt="阶梯上行" />
</UiSpoiler>
<UiButton @click="spoilerRef?.hide()">重新遮挡</UiButton>
<UiButton @click="spoilerRef?.show()">显示清晰内容</UiButton>`,notice:`<UiNotice>处理中，请稍候…</UiNotice>
<UiNotice type="error">格式不正确。</UiNotice>
<UiNotice type="success">生成完成。</UiNotice>`,configOutput:`<UiConfigOutput
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
/>`},Bt={class:"ui-showcase","aria-labelledby":"ui-showcase-title"},Et={class:"ui-showcase-hero"},Mt={class:"eyebrow"},Ht={id:"ui-showcase-title"},zt={class:"legal-lead"},Dt={class:"ui-showcase-layout"},$t=["aria-label"],Nt=["href","aria-current"],Ot={class:"ui-showcase-sections"},Wt={id:"ui-button",class:"ui-showcase-section panel"},Gt={class:"ui-showcase-desc"},Kt={id:"ui-field",class:"ui-showcase-section panel"},qt={class:"ui-showcase-desc"},Yt={id:"ui-actions",class:"ui-showcase-section panel"},jt={class:"ui-showcase-desc"},Zt={id:"ui-textInput",class:"ui-showcase-section panel"},Xt={class:"ui-showcase-desc"},Jt={id:"ui-textarea",class:"ui-showcase-section panel"},Qt={class:"ui-showcase-desc"},ei={id:"ui-numberInput",class:"ui-showcase-section panel"},ti={class:"ui-showcase-desc"},ii={id:"ui-select",class:"ui-showcase-section panel"},oi={class:"ui-showcase-desc"},si={id:"ui-segmented",class:"ui-showcase-section panel"},ai={class:"ui-showcase-desc"},li={id:"ui-checkbox",class:"ui-showcase-section panel"},ni={class:"ui-showcase-desc"},ri={id:"ui-color",class:"ui-showcase-section panel"},ci={class:"ui-showcase-desc"},ui={id:"ui-range",class:"ui-showcase-section panel"},di={class:"ui-showcase-desc"},hi={id:"ui-upload",class:"ui-showcase-section panel"},pi={class:"ui-showcase-desc"},mi={id:"ui-spoiler",class:"ui-showcase-section panel"},fi={class:"ui-showcase-desc"},vi=["src","alt"],wi=["src","aria-label"],bi=["src","alt"],yi={id:"ui-notice",class:"ui-showcase-section panel"},Si={class:"ui-showcase-desc"},_i={id:"ui-configOutput",class:"ui-showcase-section panel"},gi={class:"ui-showcase-desc"},xi={id:"ui-kvResultPanel",class:"ui-showcase-section panel"},Ui={class:"ui-showcase-desc"},ki={class:"config-output"},Ci={id:"ui-claimList",class:"ui-showcase-section panel"},Ti={class:"ui-showcase-desc"},Vi={id:"ui-copyActions",class:"ui-showcase-section panel"},Ai={class:"ui-showcase-desc"},Fi={id:"ui-backToTop",class:"ui-showcase-section panel"},Li={class:"ui-showcase-desc"},Pi={class:"ui-showcase-back-to-top-demo","data-back-to-top-host":""},Ri={class:"ui-showcase-back-to-top-scroll","data-back-to-top-scroll":""},Ii={id:"ui-highlight",class:"ui-showcase-section panel"},Bi={class:"ui-showcase-desc"},Ei={class:"ui-showcase-highlight-demo"},Mi=120,Hi=`server {
  listen 80;
  root /var/www;
}`,zi={__name:"UiShowcase",setup(d){const{t:e}=re(),s=["button","field","actions","textInput","textarea","numberInput","select","segmented","checkbox","color","range","upload","spoiler","notice","configOutput","kvResultPanel","claimList","copyActions","backToTop","highlight"],o=w(s[0]);let n=0;function m(r){return`ui-${r}`}function f(){const r=window.location.hash.slice(1);if(!r.startsWith("ui-"))return;const c=r.slice(3);s.includes(c)&&(o.value=c)}function h(){let r=s[0];for(const c of s){const F=document.getElementById(m(c));F&&F.getBoundingClientRect().top<=Mi&&(r=c)}o.value=r}function b(){cancelAnimationFrame(n),n=requestAnimationFrame(h)}Ae(()=>{f(),h(),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("hashchange",f)}),Fe(()=>{cancelAnimationFrame(n),window.removeEventListener("scroll",b),window.removeEventListener("hashchange",f)});const _=w("Hello"),V=w(""),v=w(6),A=w("a"),L=w("preview"),P=w(!0),g=w(!1),W=w(["'self'"]),$=w(["'none'"]),G=w("#2563eb"),N=w(40),D=w(""),E=w(3),R=w(null),j=I(()=>{if(R.value==null)return"";const r=Math.max(1,Number(R.value)||1);return Array.from({length:r},(c,F)=>`demo-row-${F+1}`).join(`
`)}),te=I(()=>R.value!=null&&E.value!==R.value);function Z(){R.value=E.value}function ie(){E.value=3,R.value=null}const X=I(()=>[{label:e("uiShowcase.demos.selectA"),value:"a"},{label:e("uiShowcase.demos.selectB"),value:"b"},{label:e("uiShowcase.demos.selectC"),value:"c"}]),J=I(()=>[{label:e("uiShowcase.demos.segmentLeft"),value:"preview"},{label:e("uiShowcase.demos.segmentRight"),value:"source"}]),K=I(()=>[{label:e("uiShowcase.demos.checkboxA"),value:"'self'"},{label:e("uiShowcase.demos.checkboxB"),value:"'none'",exclusive:!0},{label:e("uiShowcase.demos.checkboxC"),value:"*"}]),ue=I(()=>[e("uiShowcase.demos.highlightToken").toLocaleLowerCase()]),q=w(null),Q=w(!1),oe=Ve("ui-showcase/spoiler-demo-1.jpg"),de=Rt,se=Ve("ui-showcase/spoiler-demo-2.jpg"),he=I(()=>[{label:e("uiShowcase.demos.copyExtra"),text:'{"ok":true}'}]),ae=[{label:"Browser",value:"Chrome 120"},{label:"Engine",value:"Blink 120"},{label:"Platform",value:"macOS"}];function H(r){const c=r.map(F=>F.name).join(", ");D.value=e("uiShowcase.uploadSelected",{count:r.length,names:c})}const S=It;return(r,c)=>{const F=Be("RouterLink");return y(),x("article",Bt,[i("header",Et,[a(F,{to:"/",class:"legal-back"},{default:u(()=>[T(l(t(e)("uiShowcase.backHome")),1)]),_:1}),i("div",Mt,l(t(e)("uiShowcase.eyebrow")),1),i("h1",Ht,l(t(e)("uiShowcase.pageTitle")),1),i("p",zt,l(t(e)("uiShowcase.lead")),1)]),i("div",Dt,[i("nav",{class:"ui-showcase-toc","aria-label":t(e)("uiShowcase.tocLabel")},[(y(),x(z,null,Y(s,p=>i("a",{key:p,href:`#ui-${p}`,class:O({"is-active":o.value===p}),"aria-current":o.value===p?"location":void 0},l(t(e)(`uiShowcase.sections.${p}.title`)),11,Nt)),64))],8,$t),i("div",Ot,[i("section",Wt,[i("h2",null,l(t(e)("uiShowcase.sections.button.title")),1),i("p",Gt,l(t(e)("uiShowcase.sections.button.desc")),1),a(k,{"section-id":"button"}),a(U,{code:t(S).button,"preview-class":"ui-showcase-row"},{default:u(()=>[a(t(M),null,{default:u(()=>[...c[17]||(c[17]=[T("Default",-1)])]),_:1}),a(t(M),{type:"primary"},{default:u(()=>[...c[18]||(c[18]=[T("Primary",-1)])]),_:1}),a(t(M),{type:"text"},{default:u(()=>[...c[19]||(c[19]=[T("Text",-1)])]),_:1}),a(t(M),{disabled:""},{default:u(()=>[...c[20]||(c[20]=[T("Disabled",-1)])]),_:1})]),_:1},8,["code"])]),i("section",Kt,[i("h2",null,l(t(e)("uiShowcase.sections.field.title")),1),i("p",qt,l(t(e)("uiShowcase.sections.field.desc")),1),a(k,{"section-id":"field"}),a(U,{code:t(S).field},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.demos.fieldLabel"),description:t(e)("uiShowcase.demos.fieldDesc")},{default:u(()=>[a(t(pe),{modelValue:v.value,"onUpdate:modelValue":c[0]||(c[0]=p=>v.value=p),min:1,max:10},null,8,["modelValue"])]),_:1},8,["label","description"])]),_:1},8,["code"])]),i("section",Yt,[i("h2",null,l(t(e)("uiShowcase.sections.actions.title")),1),i("p",jt,l(t(e)("uiShowcase.sections.actions.desc")),1),a(k,{"section-id":"actions"}),a(U,{code:t(S).actions,"preview-class":"ui-showcase-actions"},{default:u(()=>[a(t(ye),null,{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.demos.fieldLabel"),compact:""},{default:u(()=>[a(t(pe),{modelValue:E.value,"onUpdate:modelValue":c[1]||(c[1]=p=>E.value=p),min:1,max:10},null,8,["modelValue"])]),_:1},8,["label"]),a(t(M),{type:"primary",onClick:Z},{default:u(()=>[T(l(t(e)("actions.generate")),1)]),_:1}),a(t(M),{onClick:ie},{default:u(()=>[T(l(t(e)("actions.reset")),1)]),_:1})]),_:1}),te.value?(y(),ne(t(ee),{key:0},{default:u(()=>[T(l(t(e)("uiShowcase.demos.actionsStale")),1)]),_:1})):B("",!0),j.value?(y(),ne(t(ge),{key:1,summary:t(e)("uiShowcase.demos.actionsSummary",{n:R.value}),content:j.value},null,8,["summary","content"])):B("",!0)]),_:1},8,["code"])]),i("section",Zt,[i("h2",null,l(t(e)("uiShowcase.sections.textInput.title")),1),i("p",Xt,l(t(e)("uiShowcase.sections.textInput.desc")),1),a(k,{"section-id":"textInput"}),a(U,{code:t(S).textInput},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.sections.textInput.title")},{default:u(()=>[a(t(We),{modelValue:_.value,"onUpdate:modelValue":c[2]||(c[2]=p=>_.value=p),placeholder:t(e)("uiShowcase.demos.textPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",Jt,[i("h2",null,l(t(e)("uiShowcase.sections.textarea.title")),1),i("p",Qt,l(t(e)("uiShowcase.sections.textarea.desc")),1),a(k,{"section-id":"textarea"}),a(U,{code:t(S).textarea,"preview-class":"ui-showcase-stack"},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.sections.textarea.title")},{default:u(()=>[a(t(Ue),{modelValue:V.value,"onUpdate:modelValue":c[3]||(c[3]=p=>V.value=p),placeholder:t(e)("uiShowcase.demos.textareaPlaceholder"),rows:3},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(t(C),{label:"output"},{default:u(()=>[a(t(Ue),{"model-value":t(e)("uiShowcase.demos.textareaOutput"),output:"",readonly:"",rows:2},null,8,["model-value"])]),_:1})]),_:1},8,["code"])]),i("section",ei,[i("h2",null,l(t(e)("uiShowcase.sections.numberInput.title")),1),i("p",ti,l(t(e)("uiShowcase.sections.numberInput.desc")),1),a(k,{"section-id":"numberInput"}),a(U,{code:t(S).numberInput},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.demos.fieldLabel")},{default:u(()=>[a(t(pe),{modelValue:v.value,"onUpdate:modelValue":c[4]||(c[4]=p=>v.value=p),min:1,max:10},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",ii,[i("h2",null,l(t(e)("uiShowcase.sections.select.title")),1),i("p",oi,l(t(e)("uiShowcase.sections.select.desc")),1),a(k,{"section-id":"select"}),a(U,{code:t(S).select},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.sections.select.title")},{default:u(()=>[a(t(Oe),{modelValue:A.value,"onUpdate:modelValue":c[5]||(c[5]=p=>A.value=p),options:X.value,placeholder:t(e)("uiShowcase.demos.selectPlaceholder")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",si,[i("h2",null,l(t(e)("uiShowcase.sections.segmented.title")),1),i("p",ai,l(t(e)("uiShowcase.sections.segmented.desc")),1),a(k,{"section-id":"segmented"}),a(U,{code:t(S).segmented,"preview-class":"ui-showcase-segment-sizes"},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.demos.segmentSizeNormal")},{default:u(()=>[a(t(xe),{modelValue:L.value,"onUpdate:modelValue":c[6]||(c[6]=p=>L.value=p),size:"normal",options:J.value,"aria-label":t(e)("uiShowcase.sections.segmented.title")},null,8,["modelValue","options","aria-label"])]),_:1},8,["label"]),a(t(C),{label:t(e)("uiShowcase.demos.segmentSizeSmall"),compact:""},{default:u(()=>[a(t(xe),{modelValue:L.value,"onUpdate:modelValue":c[7]||(c[7]=p=>L.value=p),options:J.value,"aria-label":t(e)("uiShowcase.sections.segmented.title")},null,8,["modelValue","options","aria-label"])]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",li,[i("h2",null,l(t(e)("uiShowcase.sections.checkbox.title")),1),i("p",ni,l(t(e)("uiShowcase.sections.checkbox.desc")),1),a(k,{"section-id":"checkbox"}),a(U,{code:t(S).checkbox,"preview-class":"ui-showcase-checkbox-sizes"},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.demos.checkboxSizeNormal")},{default:u(()=>[a(t(Se),{modelValue:P.value,"onUpdate:modelValue":c[8]||(c[8]=p=>P.value=p)},{default:u(()=>[T(l(t(e)("uiShowcase.demos.checkboxSingle")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(t(C),{label:t(e)("uiShowcase.demos.checkboxSizeSmall"),compact:""},{default:u(()=>[a(t(Se),{modelValue:g.value,"onUpdate:modelValue":c[9]||(c[9]=p=>g.value=p),size:"small"},{default:u(()=>[T(l(t(e)("uiShowcase.demos.checkboxSingleAlt")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(t(C),{label:t(e)("uiShowcase.demos.checkboxGroupNormal")},{default:u(()=>[a(t(_e),{modelValue:W.value,"onUpdate:modelValue":c[10]||(c[10]=p=>W.value=p),options:K.value,"aria-label":t(e)("uiShowcase.demos.checkboxGroupNormal")},null,8,["modelValue","options","aria-label"])]),_:1},8,["label"]),a(t(C),{label:t(e)("uiShowcase.demos.checkboxGroupSmall"),compact:""},{default:u(()=>[a(t(_e),{modelValue:$.value,"onUpdate:modelValue":c[11]||(c[11]=p=>$.value=p),size:"small",options:K.value,"aria-label":t(e)("uiShowcase.demos.checkboxGroupSmall")},null,8,["modelValue","options","aria-label"])]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",ri,[i("h2",null,l(t(e)("uiShowcase.sections.color.title")),1),i("p",ci,l(t(e)("uiShowcase.sections.color.desc")),1),a(k,{"section-id":"color"}),a(U,{code:t(S).color},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.sections.color.title")},{default:u(()=>[a(t($e),{modelValue:G.value,"onUpdate:modelValue":c[12]||(c[12]=p=>G.value=p)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",ui,[i("h2",null,l(t(e)("uiShowcase.sections.range.title")),1),i("p",di,l(t(e)("uiShowcase.sections.range.desc")),1),a(k,{"section-id":"range"}),a(U,{code:t(S).range},{default:u(()=>[a(t(C),{label:`${N.value}%`},{default:u(()=>[a(t(Ne),{modelValue:N.value,"onUpdate:modelValue":c[13]||(c[13]=p=>N.value=p),min:0,max:100},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",hi,[i("h2",null,l(t(e)("uiShowcase.sections.upload.title")),1),i("p",pi,l(t(e)("uiShowcase.sections.upload.desc")),1),a(k,{"section-id":"upload"}),a(U,{code:t(S).upload,"preview-class":"ui-showcase-stack"},{default:u(()=>[a(t(le),{variant:"zone",title:t(e)("uiShowcase.demos.uploadTitle"),subtitle:t(e)("uiShowcase.demos.uploadSubtitle"),onSelect:H},null,8,["title","subtitle"]),a(t(le),{variant:"compact",title:t(e)("uiShowcase.demos.uploadCompactTitle"),subtitle:t(e)("uiShowcase.demos.uploadSubtitle"),onSelect:H},null,8,["title","subtitle"]),a(t(le),{variant:"inline",title:t(e)("uiShowcase.demos.uploadInlineTitle"),onSelect:H},null,8,["title"]),a(t(le),{variant:"button",title:t(e)("uiShowcase.demos.uploadButtonTitle"),onSelect:H},null,8,["title"]),D.value?(y(),ne(t(ee),{key:0},{default:u(()=>[T(l(D.value),1)]),_:1})):B("",!0)]),_:1},8,["code"])]),i("section",mi,[i("h2",null,l(t(e)("uiShowcase.sections.spoiler.title")),1),i("p",fi,l(t(e)("uiShowcase.sections.spoiler.desc")),1),a(k,{"section-id":"spoiler"}),a(U,{code:t(S).spoiler,"preview-class":"ui-showcase-spoiler-grid"},{default:u(()=>[a(t(C),{label:t(e)("uiShowcase.demos.spoilerOnce")},{default:u(()=>[a(t(me),null,{default:u(()=>[i("img",{src:t(oe),alt:t(e)("uiShowcase.demos.spoilerAltOnce")},null,8,vi)]),_:1})]),_:1},8,["label"]),a(t(C),{label:t(e)("uiShowcase.demos.spoilerVideo")},{default:u(()=>[a(t(me),null,{default:u(()=>[i("video",{src:t(de),crossorigin:"anonymous",autoplay:"",loop:"",muted:"",playsinline:"",controls:"","aria-label":t(e)("uiShowcase.demos.spoilerAltVideo")},null,8,wi)]),_:1})]),_:1},8,["label"]),a(t(C),{label:t(e)("uiShowcase.demos.spoilerExternal")},{default:u(()=>[a(t(me),{ref_key:"spoilerExternalRef",ref:q,visible:Q.value,"onUpdate:visible":c[14]||(c[14]=p=>Q.value=p)},{default:u(()=>[i("img",{src:t(se),alt:t(e)("uiShowcase.demos.spoilerAltToggle")},null,8,bi)]),_:1},8,["visible"]),a(t(ye),null,{default:u(()=>[a(t(M),{onClick:c[15]||(c[15]=p=>q.value?.hide())},{default:u(()=>[T(l(t(e)("uiShowcase.demos.spoilerHide")),1)]),_:1}),a(t(M),{type:"primary",onClick:c[16]||(c[16]=p=>q.value?.show())},{default:u(()=>[T(l(t(e)("uiShowcase.demos.spoilerShow")),1)]),_:1})]),_:1})]),_:1},8,["label"])]),_:1},8,["code"])]),i("section",yi,[i("h2",null,l(t(e)("uiShowcase.sections.notice.title")),1),i("p",Si,l(t(e)("uiShowcase.sections.notice.desc")),1),a(k,{"section-id":"notice"}),a(U,{code:t(S).notice,"preview-class":"ui-showcase-stack"},{default:u(()=>[a(t(ee),null,{default:u(()=>[T(l(t(e)("uiShowcase.demos.noticeInfo")),1)]),_:1}),a(t(ee),{type:"error"},{default:u(()=>[T(l(t(e)("uiShowcase.demos.noticeError")),1)]),_:1}),a(t(ee),{type:"success"},{default:u(()=>[T(l(t(e)("uiShowcase.demos.noticeSuccess")),1)]),_:1})]),_:1},8,["code"])]),i("section",_i,[i("h2",null,l(t(e)("uiShowcase.sections.configOutput.title")),1),i("p",gi,l(t(e)("uiShowcase.sections.configOutput.desc")),1),a(k,{"section-id":"configOutput"}),a(U,{code:t(S).configOutput},{default:u(()=>[a(t(ge),{summary:t(e)("uiShowcase.demos.configSummary"),content:Hi},null,8,["summary"])]),_:1},8,["code"])]),i("section",xi,[i("h2",null,l(t(e)("uiShowcase.sections.kvResultPanel.title")),1),i("p",Ui,l(t(e)("uiShowcase.sections.kvResultPanel.desc")),1),a(k,{"section-id":"kvResultPanel"}),a(U,{code:t(S).kvResultPanel},{default:u(()=>[a(be,{title:t(e)("uiShowcase.demos.kvPanelTitle")},{default:u(()=>[i("pre",ki,l(t(e)("uiShowcase.demos.kvPanelPre")),1)]),_:1},8,["title"])]),_:1},8,["code"])]),i("section",Ci,[i("h2",null,l(t(e)("uiShowcase.sections.claimList.title")),1),i("p",Ti,l(t(e)("uiShowcase.sections.claimList.desc")),1),a(k,{"section-id":"claimList"}),a(U,{code:t(S).claimList},{default:u(()=>[a(be,null,{default:u(()=>[a(ze,{items:ae})]),_:1})]),_:1},8,["code"])]),i("section",Vi,[i("h2",null,l(t(e)("uiShowcase.sections.copyActions.title")),1),i("p",Ai,l(t(e)("uiShowcase.sections.copyActions.desc")),1),a(k,{"section-id":"copyActions"}),a(U,{code:t(S).copyActions},{default:u(()=>[a(He,{text:"demo-copy-text",label:t(e)("uiShowcase.demos.copyMain"),extras:he.value},null,8,["label","extras"])]),_:1},8,["code"])]),i("section",Fi,[i("h2",null,l(t(e)("uiShowcase.sections.backToTop.title")),1),i("p",Li,l(t(e)("uiShowcase.sections.backToTop.desc")),1),a(k,{"section-id":"backToTop"}),a(U,{code:t(S).backToTop},{default:u(()=>[i("div",Pi,[i("div",Ri,[(y(),x(z,null,Y(10,p=>i("p",{key:p},l(t(e)("uiShowcase.demos.backToTopParagraph")),1)),64))]),a(Ee,{variant:"embedded",threshold:80})])]),_:1},8,["code"])]),i("section",Ii,[i("h2",null,l(t(e)("uiShowcase.sections.highlight.title")),1),i("p",Bi,l(t(e)("uiShowcase.sections.highlight.desc")),1),a(k,{"section-id":"highlight"}),a(U,{code:t(S).highlight},{default:u(()=>[i("p",Ei,[a(Me,{text:t(e)("uiShowcase.demos.highlightSample"),tokens:ue.value},null,8,["text","tokens"])])]),_:1},8,["code"])])])])])}}},ro=ce(zi,[["__scopeId","data-v-80f41e80"]]);export{ro as default};
