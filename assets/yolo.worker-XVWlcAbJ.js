var ka=Object.defineProperty,Lg=Object.getOwnPropertyDescriptor,Gg=Object.getOwnPropertyNames,Hg=Object.prototype.hasOwnProperty,Fg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),q=(e,t)=>()=>(e&&(t=e(e=0)),t),ur=(e,t)=>{for(var i in t)ka(e,i,{get:t[i],enumerable:!0})},jg=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Gg(t))!Hg.call(e,n)&&n!==i&&ka(e,n,{get:()=>t[n],enumerable:!(r=Lg(t,n))||r.enumerable});return e},Pr=e=>jg(ka({},"__esModule",{value:!0}),e),jt,ct,Mt,oo,Wd,qd=q(()=>{jt=new Map,ct=[],Mt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=jt.get(e);if(r===void 0)jt.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let n=ct.indexOf(e);n!==-1&&ct.splice(n,1);for(let o=0;o<ct.length;o++)if(jt.get(ct[o]).priority<=i){ct.splice(o,0,e);return}ct.push(e)}return}throw new TypeError("not a valid backend")},oo=async e=>{let t=jt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Wd=async e=>{let t=e.executionProviders||[],i=t.map(d=>typeof d=="string"?d:d.name),r=i.length===0?ct:i,n,o=[],s=new Set;for(let d of r){let c=await oo(d);typeof c=="string"?o.push({name:d,err:c}):(n||(n=c),n===c&&s.add(d))}if(!n)throw new Error(`no available backend found. ERR: ${o.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:c}of o)i.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${c}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[n,new Proxy(e,{get:(d,c)=>c==="executionProviders"?l:Reflect.get(d,c)})]}}),Kg=q(()=>{qd()}),Vd,Qg=q(()=>{Vd="1.21.0"}),mi,qe,Ld=q(()=>{Qg(),mi="warning",qe={wasm:{},webgl:{},webgpu:{},versions:{common:Vd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);mi=e}},get logLevel(){return mi}},Object.defineProperty(qe,"logLevel",{enumerable:!0})}),ye,Zg=q(()=>{Ld(),ye=qe}),Gd,Hd,Xg=q(()=>{Gd=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let n,o;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],o=e.dims[3]):(n=e.dims[3],o=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let m=o*n,g=0,y=m,_=m*2,w=-1;s==="RGBA"?(g=0,y=m,_=m*2,w=m*3):s==="RGB"?(g=0,y=m,_=m*2):s==="RBG"&&(g=0,_=m,y=m*2);for(let $=0;$<o;$++)for(let k=0;k<n;k++){let v=(e.data[g++]-c[0])*d[0],b=(e.data[y++]-c[1])*d[1],S=(e.data[_++]-c[2])*d[2],T=w===-1?255:(e.data[w++]-c[3])*d[3];r.fillStyle="rgba("+v+","+b+","+S+","+T+")",r.fillRect(k,$,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Hd=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let n,o,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],o=e.dims[1],s=e.dims[3]):(n=e.dims[3],o=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,c,m;d===void 0||d.mean===void 0?c=[255,255,255,255]:typeof d.mean=="number"?c=[d.mean,d.mean,d.mean,d.mean]:(c=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(c[3]=d.mean[3])),d===void 0||d.bias===void 0?m=[0,0,0,0]:typeof d.bias=="number"?m=[d.bias,d.bias,d.bias,d.bias]:(m=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(m[3]=d.bias[3]));let g=o*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,_=0,w=1,$=2,k=3,v=0,b=g,S=g*2,T=-1;l==="RGBA"?(v=0,b=g,S=g*2,T=g*3):l==="RGB"?(v=0,b=g,S=g*2):l==="RBG"&&(v=0,S=g,b=g*2),r=i.createImageData(n,o);for(let I=0;I<o*n;_+=y,w+=y,$+=y,k+=y,I++)r.data[_]=(e.data[v++]-m[0])*c[0],r.data[w]=(e.data[b++]-m[1])*c[1],r.data[$]=(e.data[S++]-m[2])*c[2],r.data[k]=T===-1?255:(e.data[T++]-m[3])*c[3]}else throw new Error("Can not access image data");return r}}),$r,Fd,jd,Kd,Qd,Zd,Yg=q(()=>{Sa(),$r=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,n=t.norm??{mean:255,bias:0},o,s;typeof n.mean=="number"?o=[n.mean,n.mean,n.mean,n.mean]:o=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=i*r,m=d==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),g=4,y=0,_=1,w=2,$=3,k=0,v=c,b=c*2,S=-1;l==="RGB"&&(g=3,y=0,_=1,w=2,$=-1),d==="RGBA"?S=c*3:d==="RBG"?(k=0,b=c,v=c*2):d==="BGR"&&(b=0,v=c,k=c*2);for(let T=0;T<c;T++,y+=g,w+=g,_+=g,$+=g)m[k++]=(e[y]+s[0])/o[0],m[v++]=(e[_]+s[1])/o[1],m[b++]=(e[w]+s[2])/o[2],S!==-1&&$!==-1&&(m[S++]=(e[$]+s[3])/o[3]);return d==="RGBA"?new Ne("float32",m,[1,4,i,r]):new Ne("float32",m,[1,3,i,r])},Fd=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(i){let m=d();m.width=e.width,m.height=e.height;let g=c(m);if(g!=null){let y=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=_}else l.tensorFormat="RGBA",l.height=y,l.width=_;g.drawImage(e,0,0),s=g.getImageData(0,0,_,y).data}else throw new Error("Can not access image data")}else if(r){let m,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(m=t.resizedHeight,g=t.resizedWidth):(m=e.height,g=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=m,l.width=g,t!==void 0){let y=d();y.width=g,y.height=m;let _=c(y);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,g,m).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=d();m.width=e.width,m.height=e.height;let g=c(m);if(g!=null){let y=e.height,_=e.width;return g.drawImage(e,0,0,_,y),s=g.getImageData(0,0,_,y).data,l.height=y,l.width=_,$r(s,l)}else throw new Error("Can not access image data")}else{if(o)return new Promise((m,g)=>{let y=d(),_=c(y);if(!e||!_)return g();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{y.width=w.width,y.height=w.height,_.drawImage(w,0,0,y.width,y.height);let $=_.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,m($r($.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return $r(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},jd=(e,t)=>{let{width:i,height:r,download:n,dispose:o}=t,s=[1,r,i,4];return new Ne({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:o})},Kd=(e,t)=>{let{dataType:i,dims:r,download:n,dispose:o}=t;return new Ne({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:n,dispose:o})},Qd=(e,t)=>{let{dataType:i,dims:r,download:n,dispose:o}=t;return new Ne({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:n,dispose:o})},Zd=(e,t,i)=>new Ne({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),vt,rr,gi,Xd,Jg=q(()=>{vt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),rr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),gi=!1,Xd=()=>{if(!gi){gi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,r=typeof i<"u"&&i.from;e&&(vt.set("int64",BigInt64Array),rr.set(BigInt64Array,"int64")),t&&(vt.set("uint64",BigUint64Array),rr.set(BigUint64Array,"uint64")),r?(vt.set("float16",i),rr.set(i,"float16")):vt.set("float16",Uint16Array)}}}),Yd,Jd,ey=q(()=>{Sa(),Yd=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},Jd=(e,t)=>{switch(e.location){case"cpu":return new Ne(e.type,e.data,t);case"cpu-pinned":return new Ne({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ne({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ne({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ne({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ne,Sa=q(()=>{Xg(),Yg(),Jg(),ey(),Ne=class{constructor(e,t,i){Xd();let r,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=vt.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(r=e,l=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=vt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")r="string",s=e;else if(d==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let d=rr.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");n=l,this.cpuData=s,this.dataLocation="cpu"}let o=Yd(n);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=n,this.size=o}static async fromImage(e,t){return Fd(e,t)}static fromTexture(e,t){return jd(e,t)}static fromGpuBuffer(e,t){return Kd(e,t)}static fromMLTensor(e,t){return Qd(e,t)}static fromPinnedBuffer(e,t,i){return Zd(e,t,i)}toDataURL(e){return Gd(this,e)}toImageData(e){return Hd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Jd(this,e)}}}),je,ep=q(()=>{Sa(),je=Ne}),Ur,yi,et,Ke,tp=q(()=>{Ld(),Ur=(e,t)=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},yi=(e,t)=>{let i=new Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let n=0;n<i.length;n++){if(r&&!i[n].includes("TRACE_FUNC")){let o=`FUNC_${e}::${i[n].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Ur("CPU",o);return}i[n].includes("TRACE_FUNC")&&(r=!0)}},et=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||yi("BEGIN",e)},Ke=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||yi("END",e)}}),rp,ty=q(()=>{qd(),ep(),tp(),rp=class ip{constructor(t){this.handler=t}async run(t,i,r){et();let n={},o={};if(typeof t!="object"||t===null||t instanceof je||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof je)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let c of i){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);n[c]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,m=Object.getOwnPropertyNames(i);for(let g of this.outputNames)if(m.indexOf(g)!==-1){let y=i[g];(y===null||y instanceof je)&&(c=!0,s=!1,n[g]=y)}if(c){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(s)for(let c of this.outputNames)n[c]=null;let l=await this.handler.run(t,n,o),d={};for(let c in l)if(Object.hasOwnProperty.call(l,c)){let m=l[c];m instanceof je?d[c]=m:d[c]=new je(m.type,m.data,m.dims)}return Ke(),d}async release(){return this.handler.dispose()}static async create(t,i,r,n){et();let o,s={};if(typeof t=="string"){if(o=t,typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let m=t,g=0,y=t.byteLength;if(typeof i=="object"&&i!==null)s=i;else if(typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(y=t.byteLength-g,typeof r=="number"){if(y=r,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||g+y>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-g}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(m,g,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await Wd(s),c=await l.createInferenceSessionHandler(o,d);return Ke(),new ip(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Ta,ry=q(()=>{ty(),Ta=rp}),iy=q(()=>{}),ay=q(()=>{}),ny=q(()=>{}),sy=q(()=>{}),oy={};ur(oy,{InferenceSession:()=>Ta,TRACE:()=>Ur,TRACE_FUNC_BEGIN:()=>et,TRACE_FUNC_END:()=>Ke,Tensor:()=>je,env:()=>ye,registerBackend:()=>Mt});var Qe=q(()=>{Kg(),Zg(),ry(),ep(),iy(),ay(),tp(),ny(),sy()}),Ca=q(()=>{}),ap={};ur(ap,{default:()=>np});var _i,wi,np,uy=q(()=>{lf(),Et(),Ia(),_i="ort-wasm-proxy-worker",wi=globalThis.self?.name===_i,wi&&(self.onmessage=e=>{let{type:t,in:i}=e.data;try{switch(t){case"init-wasm":Ea(i.wasm).then(()=>{ja(i).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:n}=i;Ka(n,r).then(()=>{postMessage({type:t})},o=>{postMessage({type:t,err:o})});break}case"copy-from":{let{buffer:r}=i,n=Hr(r);postMessage({type:t,out:n});break}case"create":{let{model:r,options:n}=i;Qa(r,n).then(o=>{postMessage({type:t,out:o})},o=>{postMessage({type:t,err:o})});break}case"release":Za(i),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:n,inputs:o,outputIndices:s,options:l}=i;Xa(r,n,o,s,new Array(s.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},Ja([...o,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":Ya(i),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}}),np=wi?null:e=>new Worker(e??Me,{type:"module",name:_i})}),sp={};ur(sp,{default:()=>op});var bi,$i,op,uo,ly=q(()=>{$i=(bi=import.meta.url,async function(e={}){var t,i,r=e,n=new Promise((a,u)=>{t=a,i=u}),o=typeof window=="object",s=typeof WorkerGlobalScope<"u",l=s&&self.name?.startsWith("em-pthread");r.mountExternalData=(a,u)=>{a.startsWith("./")&&(a=a.substring(2)),(r.Bd||(r.Bd=new Map)).set(a,u)},r.unmountExternalData=()=>{delete r.Bd};var d=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let c=()=>{let a=(p,h,f)=>(...x)=>{let C=Xe,E=h?.();x=p(...x);let R=h?.();return E!==R&&(p=R,f(E),h=f=null),Xe!=C?new Promise((U,G)=>{oi={resolve:U,reject:G}}):x},u=p=>async(...h)=>{try{if(r.Cd)throw Error("Session already started");let f=r.Cd={be:h[0],errors:[]},x=await p(...h);if(r.Cd!==f)throw Error("Session mismatch");r.Dd?.flush();let C=f.errors;if(0<C.length){let E=await Promise.all(C);if(E=E.filter(R=>R),0<E.length)throw Error(E.join(`
`))}return x}finally{r.Cd=null}};r._OrtCreateSession=a(r._OrtCreateSession,()=>r._OrtCreateSession,p=>r._OrtCreateSession=p),r._OrtRun=u(a(r._OrtRun,()=>r._OrtRun,p=>r._OrtRun=p)),r._OrtRunWithBinding=u(a(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,p=>r._OrtRunWithBinding=p)),r._OrtBindInput=a(r._OrtBindInput,()=>r._OrtBindInput,p=>r._OrtBindInput=p),c=void 0};r.jsepInit=(a,u)=>{if(c?.(),a==="webgpu"){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=u;let p=r.Dd;r.jsepRegisterBuffer=(h,f,x,C)=>p.registerBuffer(h,f,x,C),r.jsepGetBuffer=h=>p.getBuffer(h),r.jsepCreateDownloader=(h,f,x)=>p.createDownloader(h,f,x),r.jsepOnCreateSession=h=>{p.onCreateSession(h)},r.jsepOnReleaseSession=h=>{p.onReleaseSession(h)},r.jsepOnRunStart=h=>p.onRunStart(h),r.$d=(h,f)=>{p.upload(h,f)}}else if(a==="webnn"){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=u,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let p=r.Dd;r.jsepOnRunStart=h=>p.onRunStart(h),r.jsepOnRunEnd=p.onRunEnd.bind(p),r.jsepRegisterMLContext=(h,f)=>{p.registerMLContext(h,f)},r.jsepOnReleaseSession=h=>{p.onReleaseSession(h)},r.jsepCreateMLTensorDownloader=(h,f)=>p.createMLTensorDownloader(h,f),r.jsepRegisterMLTensor=(h,f,x,C)=>p.registerMLTensor(h,f,x,C),r.jsepCreateMLContext=h=>p.createMLContext(h),r.jsepRegisterMLConstant=(h,f,x,C,E)=>p.registerMLConstant(h,f,x,C,E,r.Bd),r.jsepRegisterGraphInput=p.registerGraphInput.bind(p),r.jsepIsGraphInput=p.isGraphInput.bind(p),r.jsepCreateTemporaryTensor=p.createTemporaryTensor.bind(p)}};var m,g,y=Object.assign({},r),_=(a,u)=>{throw u},w="";(o||s)&&(s?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),bi&&(w=bi),w=w.startsWith("blob:")?"":w.slice(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(g=a=>{var u=new XMLHttpRequest;return u.open("GET",a,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),m=async a=>{if(pe(a))return new Promise((p,h)=>{var f=new XMLHttpRequest;f.open("GET",a,!0),f.responseType="arraybuffer",f.onload=()=>{f.status==200||f.status==0&&f.response?p(f.response):h(f.status)},f.onerror=h,f.send(null)});var u=await fetch(a,{credentials:"same-origin"});if(u.ok)return u.arrayBuffer();throw Error(u.status+" : "+u.url)});var $=console.log.bind(console),k=console.error.bind(console),v=$,b=k;Object.assign(r,y),y=null;var S,T,I,A,z,D,V,H,X,te,W,oe,de,F=r.wasmBinary,le=!1,pe=a=>a.startsWith("file://");function j(){return S.buffer!=A.buffer&&Ie(),A}function ce(){return S.buffer!=A.buffer&&Ie(),z}function P(){return S.buffer!=A.buffer&&Ie(),D}function L(){return S.buffer!=A.buffer&&Ie(),V}function B(){return S.buffer!=A.buffer&&Ie(),H}function J(){return S.buffer!=A.buffer&&Ie(),X}function ve(){return S.buffer!=A.buffer&&Ie(),te}function Re(){return S.buffer!=A.buffer&&Ie(),de}if(l){let a=function(u){try{var p=u.data,h=p.yd;if(h==="load"){let f=[];self.onmessage=x=>f.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of f)a(x);self.onmessage=a};for(let x of p.Od)r[x]&&!r[x].proxy||(r[x]=(...C)=>{postMessage({yd:"callHandler",Nd:x,args:C})},x=="print"&&(v=r[x]),x=="printErr"&&(b=r[x]));S=p.he,Ie(),Se(p.ie)}else if(h==="run"){Ef(p.xd),pi(p.xd,0,0,1,0,0),un(),ni(p.xd),xe||(rs(),xe=!0);try{zf(p.de,p.Fd)}catch(f){if(f!="unwind")throw f}}else p.target!=="setimmediate"&&(h==="checkMailbox"?xe&&pr():h&&(b(`worker: received unknown command ${h}`),b(p)))}catch(f){throw is(),f}};var Se,xe=!1;b=function(...u){u=u.join(" "),console.error(u)},self.alert=function(...u){postMessage({yd:"alert",text:u.join(" "),fe:wr()})},self.onunhandledrejection=u=>{throw u.reason||u},self.onmessage=a}function Ie(){var a=S.buffer;r.HEAP8=A=new Int8Array(a),r.HEAP16=D=new Int16Array(a),r.HEAPU8=z=new Uint8Array(a),r.HEAPU16=V=new Uint16Array(a),r.HEAP32=H=new Int32Array(a),r.HEAPU32=X=new Uint32Array(a),r.HEAPF32=te=new Float32Array(a),r.HEAPF64=de=new Float64Array(a),r.HEAP64=W=new BigInt64Array(a),r.HEAPU64=oe=new BigUint64Array(a)}function lr(){l?startWorker(r):N.Bb()}l||(S=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ie());var Ut,Wt=0,qt=null;function en(){if(--Wt==0&&qt){var a=qt;qt=null,a()}}function tt(a){throw b(a="Aborted("+a+")"),le=!0,a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info."),i(a),a}function tn(){return{a:{Ta:If,Va:Cf,W:Af,la:Of,b:Bf,u:Mf,R:Nf,Za:Df,d:Pf,pb:cn,g:Rf,T:mn,Ga:gn,lb:_n,nb:wn,Ha:bn,Ea:$n,wb:vn,Da:xn,pa:kn,mb:Sn,jb:Tn,Fa:Cn,kb:In,Ma:Uf,za:Wf,eb:qf,cb:Lf,ya:Hf,V:Ff,N:jf,db:Kf,ma:tm,fb:rm,zb:im,hb:am,qb:nm,ab:sm,Aa:om,yb:ni,Ja:um,S:lm,Wa:dm,$:hm,G:fm,E:gm,m:ri,H:ym,B:bm,X:$m,J:vm,v:xm,O:km,D:Sm,t:Tm,A:Cm,z:Im,w:Em,r:zm,tb:Am,ub:Om,vb:Rm,rb:Vn,sb:Ln,bb:Gn,Oa:Mm,La:Dm,y:Pm,ja:Um,Ba:Wm,Ka:Nm,qa:qm,Ia:Vm,ib:Lm,U:Bm,fa:Gm,Sa:Hm,gb:Fm,Qa:jm,Pa:Km,Ab:Kn,Ca:Qn,ob:Zr,aa:Zn,oa:Xn,xb:Yn,na:Jn,$a:$g,ia:Bg,sa:Ug,ga:wg,da:Cg,ua:Dg,p:yg,e:tg,c:Jm,ea:Sg,f:rg,n:ag,k:hg,Y:sg,ka:fg,j:_g,wa:kg,Ra:Vg,ca:Og,Ua:qg,P:Tg,K:ug,_:Ag,Q:bg,Z:Mg,x:og,l:eg,va:zg,i:Ym,h:ng,ra:Wg,ta:Pg,o:ig,q:lg,s:pg,I:cg,C:gg,L:mg,xa:xg,_a:vg,F:Rg,Ya:Ig,ba:Ng,M:dg,Xa:Eg,ha:Zm,a:S,Na:Qr}}}var Fr={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(a,u,p,h,f)=>{if(r===void 0||!r.Bd)return 1;if((a=ke(Number(a>>>0))).startsWith("./")&&(a=a.substring(2)),!(a=r.Bd.get(a)))return 2;if(u=Number(u>>>0),p=Number(p>>>0),h=Number(h>>>0),u+p>a.byteLength)return 3;try{let x=a.subarray(u,u+p);switch(f){case 0:ce().set(x,h>>>0);break;case 1:r.$d(h,x);break;default:return 4}return 0}catch{return 4}},1320198:(a,u,p)=>{r.Jd(a,ce().subarray(u>>>0,u+p>>>0))},1320261:()=>r.Yd(),1320302:a=>{r.Id(a)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:a=>r.Rd(a),1320456:a=>r.Vd(a),1320488:(a,u,p)=>{r.Hd(Number(a),Number(u),Number(p),!0)},1320551:(a,u,p)=>{r.Hd(Number(a),Number(u),Number(p))},1320608:a=>{r.hc("Abs",a,void 0)},1320659:a=>{r.hc("Neg",a,void 0)},1320710:a=>{r.hc("Floor",a,void 0)},1320763:a=>{r.hc("Ceil",a,void 0)},1320815:a=>{r.hc("Reciprocal",a,void 0)},1320873:a=>{r.hc("Sqrt",a,void 0)},1320925:a=>{r.hc("Exp",a,void 0)},1320976:a=>{r.hc("Erf",a,void 0)},1321027:a=>{r.hc("Sigmoid",a,void 0)},1321082:(a,u,p)=>{r.hc("HardSigmoid",a,{alpha:u,beta:p})},1321161:a=>{r.hc("Log",a,void 0)},1321212:a=>{r.hc("Sin",a,void 0)},1321263:a=>{r.hc("Cos",a,void 0)},1321314:a=>{r.hc("Tan",a,void 0)},1321365:a=>{r.hc("Asin",a,void 0)},1321417:a=>{r.hc("Acos",a,void 0)},1321469:a=>{r.hc("Atan",a,void 0)},1321521:a=>{r.hc("Sinh",a,void 0)},1321573:a=>{r.hc("Cosh",a,void 0)},1321625:a=>{r.hc("Asinh",a,void 0)},1321678:a=>{r.hc("Acosh",a,void 0)},1321731:a=>{r.hc("Atanh",a,void 0)},1321784:a=>{r.hc("Tanh",a,void 0)},1321836:a=>{r.hc("Not",a,void 0)},1321887:(a,u,p)=>{r.hc("Clip",a,{min:u,max:p})},1321956:a=>{r.hc("Clip",a,void 0)},1322008:(a,u)=>{r.hc("Elu",a,{alpha:u})},1322066:a=>{r.hc("Gelu",a,void 0)},1322118:a=>{r.hc("Relu",a,void 0)},1322170:(a,u)=>{r.hc("LeakyRelu",a,{alpha:u})},1322234:(a,u)=>{r.hc("ThresholdedRelu",a,{alpha:u})},1322304:(a,u)=>{r.hc("Cast",a,{to:u})},1322362:a=>{r.hc("Add",a,void 0)},1322413:a=>{r.hc("Sub",a,void 0)},1322464:a=>{r.hc("Mul",a,void 0)},1322515:a=>{r.hc("Div",a,void 0)},1322566:a=>{r.hc("Pow",a,void 0)},1322617:a=>{r.hc("Equal",a,void 0)},1322670:a=>{r.hc("Greater",a,void 0)},1322725:a=>{r.hc("GreaterOrEqual",a,void 0)},1322787:a=>{r.hc("Less",a,void 0)},1322839:a=>{r.hc("LessOrEqual",a,void 0)},1322898:(a,u,p,h,f)=>{r.hc("ReduceMean",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323073:(a,u,p,h,f)=>{r.hc("ReduceMax",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323247:(a,u,p,h,f)=>{r.hc("ReduceMin",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323421:(a,u,p,h,f)=>{r.hc("ReduceProd",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323596:(a,u,p,h,f)=>{r.hc("ReduceSum",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323770:(a,u,p,h,f)=>{r.hc("ReduceL1",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323943:(a,u,p,h,f)=>{r.hc("ReduceL2",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324116:(a,u,p,h,f)=>{r.hc("ReduceLogSum",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324293:(a,u,p,h,f)=>{r.hc("ReduceSumSquare",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324473:(a,u,p,h,f)=>{r.hc("ReduceLogSumExp",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324653:a=>{r.hc("Where",a,void 0)},1324706:(a,u,p)=>{r.hc("Transpose",a,{perm:u?Array.from(B().subarray(Number(u)>>>0,Number(p)>>>0)):[]})},1324830:(a,u,p,h)=>{r.hc("DepthToSpace",a,{blocksize:u,mode:ke(p),format:h?"NHWC":"NCHW"})},1324963:(a,u,p,h)=>{r.hc("DepthToSpace",a,{blocksize:u,mode:ke(p),format:h?"NHWC":"NCHW"})},1325096:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e,Ue)=>{r.hc("ConvTranspose",a,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[p],group:h,kernelShape:[f],pads:[x,C],strides:[E],wIsConst:()=>!!j()[U>>>0],outputPadding:G?Array.from(B().subarray(Number(G)>>>0,Number(Y)>>>0)):[],outputShape:ne?Array.from(B().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:ke(Ue)})},1325529:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)=>{r.hc("ConvTranspose",a,{format:E?"NHWC":"NCHW",autoPad:u,dilations:Array.from(B().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:h,kernelShape:Array.from(B().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(B().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(B().subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),wIsConst:()=>!!j()[R>>>0],outputPadding:U?Array.from(B().subarray(Number(U)>>>0,Number(G)>>>0)):[],outputShape:Y?Array.from(B().subarray(Number(Y)>>>0,Number(ne)>>>0)):[],activation:ke(_e)})},1326190:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e,Ue)=>{r.hc("ConvTranspose",a,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[p],group:h,kernelShape:[f],pads:[x,C],strides:[E],wIsConst:()=>!!j()[U>>>0],outputPadding:G?Array.from(B().subarray(Number(G)>>>0,Number(Y)>>>0)):[],outputShape:ne?Array.from(B().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:ke(Ue)})},1326623:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)=>{r.hc("ConvTranspose",a,{format:E?"NHWC":"NCHW",autoPad:u,dilations:Array.from(B().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:h,kernelShape:Array.from(B().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(B().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(B().subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),wIsConst:()=>!!j()[R>>>0],outputPadding:U?Array.from(B().subarray(Number(U)>>>0,Number(G)>>>0)):[],outputShape:Y?Array.from(B().subarray(Number(Y)>>>0,Number(ne)>>>0)):[],activation:ke(_e)})},1327284:(a,u)=>{r.hc("GlobalAveragePool",a,{format:u?"NHWC":"NCHW"})},1327375:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)=>{r.hc("AveragePool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:E?Array.from(B().subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:U?Array.from(B().subarray(Number(U)>>>0,Number(G)>>>0)):[],strides:Y?Array.from(B().subarray(Number(Y)>>>0,Number(ne)>>>0)):[]})},1327854:(a,u)=>{r.hc("GlobalAveragePool",a,{format:u?"NHWC":"NCHW"})},1327945:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)=>{r.hc("AveragePool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:E?Array.from(B().subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:U?Array.from(B().subarray(Number(U)>>>0,Number(G)>>>0)):[],strides:Y?Array.from(B().subarray(Number(Y)>>>0,Number(ne)>>>0)):[]})},1328424:(a,u)=>{r.hc("GlobalMaxPool",a,{format:u?"NHWC":"NCHW"})},1328511:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)=>{r.hc("MaxPool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:E?Array.from(B().subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:U?Array.from(B().subarray(Number(U)>>>0,Number(G)>>>0)):[],strides:Y?Array.from(B().subarray(Number(Y)>>>0,Number(ne)>>>0)):[]})},1328986:(a,u)=>{r.hc("GlobalMaxPool",a,{format:u?"NHWC":"NCHW"})},1329073:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)=>{r.hc("MaxPool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(C)>>>0)):[],kernel_shape:E?Array.from(B().subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:U?Array.from(B().subarray(Number(U)>>>0,Number(G)>>>0)):[],strides:Y?Array.from(B().subarray(Number(Y)>>>0,Number(ne)>>>0)):[]})},1329548:(a,u,p,h,f)=>{r.hc("Gemm",a,{alpha:u,beta:p,transA:h,transB:f})},1329652:a=>{r.hc("MatMul",a,void 0)},1329706:(a,u,p,h)=>{r.hc("ArgMax",a,{keepDims:!!u,selectLastIndex:!!p,axis:h})},1329814:(a,u,p,h)=>{r.hc("ArgMin",a,{keepDims:!!u,selectLastIndex:!!p,axis:h})},1329922:(a,u)=>{r.hc("Softmax",a,{axis:u})},1329985:(a,u)=>{r.hc("Concat",a,{axis:u})},1330045:(a,u,p,h,f)=>{r.hc("Split",a,{axis:u,numOutputs:p,splitSizes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1330201:a=>{r.hc("Expand",a,void 0)},1330255:(a,u)=>{r.hc("Gather",a,{axis:Number(u)})},1330326:(a,u)=>{r.hc("GatherElements",a,{axis:Number(u)})},1330405:(a,u)=>{r.hc("GatherND",a,{batch_dims:Number(u)})},1330484:(a,u,p,h,f,x,C,E,R,U,G)=>{r.hc("Resize",a,{antialias:u,axes:p?Array.from(B().subarray(Number(p)>>>0,Number(h)>>>0)):[],coordinateTransformMode:ke(f),cubicCoeffA:x,excludeOutside:C,extrapolationValue:E,keepAspectRatioPolicy:ke(R),mode:ke(U),nearestMode:ke(G)})},1330846:(a,u,p,h,f,x,C)=>{r.hc("Slice",a,{starts:u?Array.from(B().subarray(Number(u)>>>0,Number(p)>>>0)):[],ends:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[],axes:x?Array.from(B().subarray(Number(x)>>>0,Number(C)>>>0)):[]})},1331110:a=>{r.hc("Tile",a,void 0)},1331162:(a,u,p)=>{r.hc("InstanceNormalization",a,{epsilon:u,format:p?"NHWC":"NCHW"})},1331276:(a,u,p)=>{r.hc("InstanceNormalization",a,{epsilon:u,format:p?"NHWC":"NCHW"})},1331390:a=>{r.hc("Range",a,void 0)},1331443:(a,u)=>{r.hc("Einsum",a,{equation:ke(u)})},1331524:(a,u,p,h,f)=>{r.hc("Pad",a,{mode:u,value:p,pads:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1331667:(a,u,p,h,f,x)=>{r.hc("BatchNormalization",a,{epsilon:u,momentum:p,spatial:!!f,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1331836:(a,u,p,h,f,x)=>{r.hc("BatchNormalization",a,{epsilon:u,momentum:p,spatial:!!f,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1332005:(a,u,p)=>{r.hc("CumSum",a,{exclusive:Number(u),reverse:Number(p)})},1332102:(a,u,p)=>{r.hc("DequantizeLinear",a,{axis:u,blockSize:p})},1332192:(a,u,p,h,f)=>{r.hc("GridSample",a,{align_corners:u,mode:ke(p),padding_mode:ke(h),format:f?"NHWC":"NCHW"})},1332362:(a,u,p,h,f)=>{r.hc("GridSample",a,{align_corners:u,mode:ke(p),padding_mode:ke(h),format:f?"NHWC":"NCHW"})},1332532:(a,u)=>{r.hc("ScatterND",a,{reduction:ke(u)})},1332617:(a,u,p,h,f,x,C,E,R)=>{r.hc("Attention",a,{numHeads:u,isUnidirectional:p,maskFilterValue:h,scale:f,doRotary:x,qkvHiddenSizes:C?Array.from(B().subarray(Number(E)>>>0,Number(E)+C>>>0)):[],pastPresentShareBuffer:!!R})},1332889:a=>{r.hc("BiasAdd",a,void 0)},1332944:a=>{r.hc("BiasSplitGelu",a,void 0)},1333005:a=>{r.hc("FastGelu",a,void 0)},1333061:(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e,Ue,Ft)=>{r.hc("Conv",a,{format:Y?"NHWC":"NCHW",auto_pad:u,dilations:p?Array.from(B().subarray(Number(p)>>>0,Number(h)>>>0)):[],group:f,kernel_shape:x?Array.from(B().subarray(Number(x)>>>0,Number(C)>>>0)):[],pads:E?Array.from(B().subarray(Number(E)>>>0,Number(R)>>>0)):[],strides:U?Array.from(B().subarray(Number(U)>>>0,Number(G)>>>0)):[],w_is_const:()=>!!j()[Number(ne)>>>0],activation:ke(_e),activation_params:Ue?Array.from(ve().subarray(Number(Ue)>>>0,Number(Ft)>>>0)):[]})},1333645:a=>{r.hc("Gelu",a,void 0)},1333697:(a,u,p,h,f,x,C,E,R)=>{r.hc("GroupQueryAttention",a,{numHeads:u,kvNumHeads:p,scale:h,softcap:f,doRotary:x,rotaryInterleaved:C,smoothSoftmax:E,localWindowSize:R})},1333914:(a,u,p,h)=>{r.hc("LayerNormalization",a,{axis:u,epsilon:p,simplified:!!h})},1334025:(a,u,p,h)=>{r.hc("LayerNormalization",a,{axis:u,epsilon:p,simplified:!!h})},1334136:(a,u,p,h,f,x)=>{r.hc("MatMulNBits",a,{k:u,n:p,accuracyLevel:h,bits:f,blockSize:x})},1334263:(a,u,p,h,f,x)=>{r.hc("MultiHeadAttention",a,{numHeads:u,isUnidirectional:p,maskFilterValue:h,scale:f,doRotary:x})},1334422:(a,u)=>{r.hc("QuickGelu",a,{alpha:u})},1334486:(a,u,p,h,f)=>{r.hc("RotaryEmbedding",a,{interleaved:!!u,numHeads:p,rotaryEmbeddingDim:h,scale:f})},1334625:(a,u,p)=>{r.hc("SkipLayerNormalization",a,{epsilon:u,simplified:!!p})},1334727:(a,u,p)=>{r.hc("SkipLayerNormalization",a,{epsilon:u,simplified:!!p})},1334829:(a,u,p,h)=>{r.hc("GatherBlockQuantized",a,{gatherAxis:u,quantizeAxis:p,blockSize:h})},1334950:a=>{r.Wd(a)},1334984:(a,u)=>r.Zd(Number(a),Number(u),r.Cd.be,r.Cd.errors)};function Cf(a,u,p){return Nn(async()=>{await r.Ud(Number(a),Number(u),Number(p))})}function If(){return typeof wasmOffsetConverter<"u"}class jr{name="ExitStatus";constructor(u){this.message=`Program terminated with exit(${u})`,this.status=u}}var rn=a=>{a.terminate(),a.onmessage=()=>{}},Kr=[],an=a=>{ut.length==0&&(dn(),ln(ut[0]));var u=ut.pop();if(!u)return 6;Vt.push(u),yt[a.xd]=u,u.xd=a.xd;var p={yd:"run",de:a.ce,Fd:a.Fd,xd:a.xd};return u.postMessage(p,a.Ld),0},ot=0,we=(a,u,...p)=>{for(var h=2*p.length,f=ie(),x=hi(8*h),C=x>>>3,E=0;E<p.length;E++){var R=p[E];typeof R=="bigint"?(W[C+2*E]=1n,W[C+2*E+1]=R):(W[C+2*E]=0n,Re()[C+2*E+1>>>0]=R)}return a=as(a,0,h,x,u),re(f),a};function Qr(a){if(l)return we(0,1,a);if(I=a,!(0<ot)){for(var u of Vt)rn(u);for(u of ut)rn(u);ut=[],Vt=[],yt={},le=!0}_(0,new jr(a))}function nn(a){if(l)return we(1,0,a);Zr(a)}var Zr=a=>{if(I=a,l)throw nn(a),"unwind";Qr(a)},ut=[],Vt=[],sn=[],yt={},on=a=>{var u=a.xd;delete yt[u],ut.push(a),Vt.splice(Vt.indexOf(a),1),a.xd=0,ns(u)};function un(){sn.forEach(a=>a())}var ln=a=>new Promise(u=>{a.onmessage=f=>{var x=(f=f.data).yd;if(f.Ed&&f.Ed!=wr()){var C=yt[f.Ed];C?C.postMessage(f,f.Ld):b(`Internal error! Worker sent a message "${x}" to target pthread ${f.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?pr():x==="spawnThread"?an(f):x==="cleanupThread"?on(yt[f.ee]):x==="loaded"?(a.loaded=!0,u(a)):x==="alert"?alert(`Thread ${f.fe}: ${f.text}`):f.target==="setimmediate"?a.postMessage(f):x==="callHandler"?r[f.Nd](...f.args):x&&b(`worker sent an unknown command ${x}`)},a.onerror=f=>{throw b(`worker sent an error! ${f.filename}:${f.lineno}: ${f.message}`),f};var p,h=[];for(p of[])r.propertyIsEnumerable(p)&&h.push(p);a.postMessage({yd:"load",Od:h,he:S,ie:T})});function dn(){var a=new Worker(import.meta.url.startsWith("file:")?new URL("/static/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ut.push(a)}var Ef=a=>{Ie();var u=J()[a+52>>>2>>>0];a=J()[a+56>>>2>>>0],us(u,u-a),re(u)},zf=(a,u)=>{ot=0,a=fi(a,u),0<ot?I=a:ci(a)},dr=[];function Af(a){var u=new Xr(a>>>=0);if(j()[u.wd+12>>>0]==0){var p=1;j()[u.wd+12>>>0]=p}return p=0,j()[u.wd+13>>>0]=p,dr.push(u),ds(a),cs(a)}var At=0,Of=()=>{ae(0,0);var a=dr.pop();ls(a.Gd),At=0};class Xr{constructor(u){this.Gd=u,this.wd=u-24}}function Rf(a){throw At||=a>>>0,At}var Yr=a=>{var u=At;if(!u)return Ht(0),0;var p=new Xr(u);J()[p.wd+16>>>2>>>0]=u;var h=J()[p.wd+4>>>2>>>0];if(!h)return Ht(0),u;for(var f of a){if(f===0||f===h)break;if(ps(f,h,p.wd+16))return Ht(f),u}return Ht(h),u};function Bf(){return Yr([])}function Mf(a){return Yr([a>>>0])}function Nf(a,u){return Yr([a>>>0,u>>>0])}var Df=()=>{var a=dr.pop();a||tt("no exception to throw");var u=a.Gd;if(j()[a.wd+13>>>0]==0){dr.push(a);var p=1;j()[a.wd+13>>>0]=p,p=0,j()[a.wd+12>>>0]=p}throw At=u};function Pf(a,u,p){var h=new Xr(a>>>=0);throw u>>>=0,p>>>=0,J()[h.wd+16>>>2>>>0]=0,J()[h.wd+4>>>2>>>0]=u,J()[h.wd+8>>>2>>>0]=p,At=a}function pn(a,u,p,h){return l?we(2,1,a,u,p,h):cn(a,u,p,h)}function cn(a,u,p,h){if(a>>>=0,p>>>=0,h>>>=0,d===void 0)return 6;var f=[];return l&&f.length===0?pn(a,u>>>=0,p,h):(a={ce:p,xd:a,Fd:h,Ld:f},l?(a.yd="spawnThread",postMessage(a,f),0):an(a))}var hn=typeof TextDecoder<"u"?new TextDecoder:void 0,fn=(a,u=0,p=NaN)=>{var h=(u>>>=0)+p;for(p=u;a[p]&&!(p>=h);)++p;if(16<p-u&&a.buffer&&hn)return hn.decode(a.buffer instanceof ArrayBuffer?a.subarray(u,p):a.slice(u,p));for(h="";u<p;){var f=a[u++];if(128&f){var x=63&a[u++];if((224&f)==192)h+=String.fromCharCode((31&f)<<6|x);else{var C=63&a[u++];65536>(f=(240&f)==224?(15&f)<<12|x<<6|C:(7&f)<<18|x<<12|C<<6|63&a[u++])?h+=String.fromCharCode(f):(f-=65536,h+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else h+=String.fromCharCode(f)}return h},ke=(a,u)=>(a>>>=0)?fn(ce(),a,u):"";function mn(a,u,p){return l?we(3,1,a,u,p):0}function gn(a,u){if(l)return we(4,1,a,u)}var yn=a=>{for(var u=0,p=0;p<a.length;++p){var h=a.charCodeAt(p);127>=h?u++:2047>=h?u+=2:55296<=h&&57343>=h?(u+=4,++p):u+=3}return u},Ot=(a,u,p)=>{var h=ce();if(u>>>=0,0<p){var f=u;p=u+p-1;for(var x=0;x<a.length;++x){var C=a.charCodeAt(x);if(55296<=C&&57343>=C&&(C=65536+((1023&C)<<10)|1023&a.charCodeAt(++x)),127>=C){if(u>=p)break;h[u++>>>0]=C}else{if(2047>=C){if(u+1>=p)break;h[u++>>>0]=192|C>>6}else{if(65535>=C){if(u+2>=p)break;h[u++>>>0]=224|C>>12}else{if(u+3>=p)break;h[u++>>>0]=240|C>>18,h[u++>>>0]=128|C>>12&63}h[u++>>>0]=128|C>>6&63}h[u++>>>0]=128|63&C}}h[u>>>0]=0,a=u-f}else a=0;return a};function _n(a,u){if(l)return we(5,1,a,u)}function wn(a,u,p){if(l)return we(6,1,a,u,p)}function bn(a,u,p){return l?we(7,1,a,u,p):0}function $n(a,u){if(l)return we(8,1,a,u)}function vn(a,u,p){if(l)return we(9,1,a,u,p)}function xn(a,u,p,h){if(l)return we(10,1,a,u,p,h)}function kn(a,u,p,h){if(l)return we(11,1,a,u,p,h)}function Sn(a,u,p,h){if(l)return we(12,1,a,u,p,h)}function Tn(a){if(l)return we(13,1,a)}function Cn(a,u){if(l)return we(14,1,a,u)}function In(a,u,p){if(l)return we(15,1,a,u,p)}var En,lt,Uf=()=>tt(""),Ze=a=>{for(var u="";ce()[a>>>0];)u+=En[ce()[a++>>>0]];return u},Jr={},ei={};function rt(a,u,p={}){return(function(h,f,x={}){var C=f.name;if(!h)throw new lt(`type "${C}" must have a positive integer typeid pointer`);if(ei.hasOwnProperty(h)){if(x.Pd)return;throw new lt(`Cannot register type '${C}' twice`)}ei[h]=f,Jr.hasOwnProperty(h)&&(f=Jr[h],delete Jr[h],f.forEach(E=>E()))})(a,u,p)}var zn=(a,u,p)=>{switch(u){case 1:return p?h=>j()[h>>>0]:h=>ce()[h>>>0];case 2:return p?h=>P()[h>>>1>>>0]:h=>L()[h>>>1>>>0];case 4:return p?h=>B()[h>>>2>>>0]:h=>J()[h>>>2>>>0];case 8:return p?h=>W[h>>>3]:h=>oe[h>>>3];default:throw new TypeError(`invalid integer width (${u}): ${a}`)}};function Wf(a,u,p){p>>>=0,rt(a>>>=0,{name:u=Ze(u>>>0),fromWireType:h=>h,toWireType:function(h,f){if(typeof f!="bigint"&&typeof f!="number")throw f=f===null?"null":(h=typeof f)=="object"||h==="array"||h==="function"?f.toString():""+f,new TypeError(`Cannot convert "${f}" to ${this.name}`);return typeof f=="number"&&(f=BigInt(f)),f},zd:dt,readValueFromPointer:zn(u,p,u.indexOf("u")==-1),Ad:null})}var dt=8;function qf(a,u,p,h){rt(a>>>=0,{name:u=Ze(u>>>0),fromWireType:function(f){return!!f},toWireType:function(f,x){return x?p:h},zd:dt,readValueFromPointer:function(f){return this.fromWireType(ce()[f>>>0])},Ad:null})}var ti=[],it=[];function ri(a){9<(a>>>=0)&&--it[a+1]==0&&(it[a]=void 0,ti.push(a))}var Be=a=>{if(!a)throw new lt("Cannot use deleted val. handle = "+a);return it[a]},Pe=a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let u=ti.pop()||it.length;return it[u]=a,it[u+1]=1,u}};function ii(a){return this.fromWireType(J()[a>>>2>>>0])}var Vf={name:"emscripten::val",fromWireType:a=>{var u=Be(a);return ri(a),u},toWireType:(a,u)=>Pe(u),zd:dt,readValueFromPointer:ii,Ad:null};function Lf(a){return rt(a>>>0,Vf)}var Gf=(a,u)=>{switch(u){case 4:return function(p){return this.fromWireType(ve()[p>>>2>>>0])};case 8:return function(p){return this.fromWireType(Re()[p>>>3>>>0])};default:throw new TypeError(`invalid float width (${u}): ${a}`)}};function Hf(a,u,p){p>>>=0,rt(a>>>=0,{name:u=Ze(u>>>0),fromWireType:h=>h,toWireType:(h,f)=>f,zd:dt,readValueFromPointer:Gf(u,p),Ad:null})}function Ff(a,u,p,h,f){if(a>>>=0,p>>>=0,u=Ze(u>>>0),f===-1&&(f=4294967295),f=E=>E,h===0){var x=32-8*p;f=E=>E<<x>>>x}var C=u.includes("unsigned")?function(E,R){return R>>>0}:function(E,R){return R};rt(a,{name:u,fromWireType:f,toWireType:C,zd:dt,readValueFromPointer:zn(u,p,h!==0),Ad:null})}function jf(a,u,p){function h(x){var C=J()[x>>>2>>>0];return x=J()[x+4>>>2>>>0],new f(j().buffer,x,C)}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][u];rt(a>>>=0,{name:p=Ze(p>>>0),fromWireType:h,zd:dt,readValueFromPointer:h},{Pd:!0})}function Kf(a,u){rt(a>>>=0,{name:u=Ze(u>>>0),fromWireType:function(p){for(var h,f=J()[p>>>2>>>0],x=p+4,C=x,E=0;E<=f;++E){var R=x+E;E!=f&&ce()[R>>>0]!=0||(C=ke(C,R-C),h===void 0?h=C:(h+="\0",h+=C),C=R+1)}return Ye(p),h},toWireType:function(p,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var f=typeof h=="string";if(!(f||h instanceof Uint8Array||h instanceof Uint8ClampedArray||h instanceof Int8Array))throw new lt("Cannot pass non-string to std::string");var x=f?yn(h):h.length,C=br(4+x+1),E=C+4;if(J()[C>>>2>>>0]=x,f)Ot(h,E,x+1);else if(f)for(f=0;f<x;++f){var R=h.charCodeAt(f);if(255<R)throw Ye(C),new lt("String has UTF-16 code units that do not fit in 8 bits");ce()[E+f>>>0]=R}else for(f=0;f<x;++f)ce()[E+f>>>0]=h[f];return p!==null&&p.push(Ye,C),C},zd:dt,readValueFromPointer:ii,Ad(p){Ye(p)}})}var An=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Qf=(a,u)=>{for(var p=a>>1,h=p+u/2;!(p>=h)&&L()[p>>>0];)++p;if(32<(p<<=1)-a&&An)return An.decode(ce().slice(a,p));for(p="",h=0;!(h>=u/2);++h){var f=P()[a+2*h>>>1>>>0];if(f==0)break;p+=String.fromCharCode(f)}return p},Zf=(a,u,p)=>{if(p??=2147483647,2>p)return 0;var h=u;p=(p-=2)<2*a.length?p/2:a.length;for(var f=0;f<p;++f){var x=a.charCodeAt(f);P()[u>>>1>>>0]=x,u+=2}return P()[u>>>1>>>0]=0,u-h},Xf=a=>2*a.length,Yf=(a,u)=>{for(var p=0,h="";!(p>=u/4);){var f=B()[a+4*p>>>2>>>0];if(f==0)break;++p,65536<=f?(f-=65536,h+=String.fromCharCode(55296|f>>10,56320|1023&f)):h+=String.fromCharCode(f)}return h},Jf=(a,u,p)=>{if(u>>>=0,p??=2147483647,4>p)return 0;var h=u;p=h+p-4;for(var f=0;f<a.length;++f){var x=a.charCodeAt(f);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&a.charCodeAt(++f)),B()[u>>>2>>>0]=x,(u+=4)+4>p)break}return B()[u>>>2>>>0]=0,u-h},em=a=>{for(var u=0,p=0;p<a.length;++p){var h=a.charCodeAt(p);55296<=h&&57343>=h&&++p,u+=4}return u};function tm(a,u,p){if(a>>>=0,u>>>=0,p=Ze(p>>>=0),u===2)var h=Qf,f=Zf,x=Xf,C=E=>L()[E>>>1>>>0];else u===4&&(h=Yf,f=Jf,x=em,C=E=>J()[E>>>2>>>0]);rt(a,{name:p,fromWireType:E=>{for(var R,U=J()[E>>>2>>>0],G=E+4,Y=0;Y<=U;++Y){var ne=E+4+Y*u;Y!=U&&C(ne)!=0||(G=h(G,ne-G),R===void 0?R=G:(R+="\0",R+=G),G=ne+u)}return Ye(E),R},toWireType:(E,R)=>{if(typeof R!="string")throw new lt(`Cannot pass non-string to C++ string type ${p}`);var U=x(R),G=br(4+U+u);return J()[G>>>2>>>0]=U/u,f(R,G+4,U+u),E!==null&&E.push(Ye,G),G},zd:dt,readValueFromPointer:ii,Ad(E){Ye(E)}})}function rm(a,u){rt(a>>>=0,{Qd:!0,name:u=Ze(u>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function im(a){pi(a>>>0,!s,1,!o,131072,!1),un()}var ai=a=>{if(!le)try{if(a(),!(0<ot))try{l?ci(I):Zr(I)}catch(u){u instanceof jr||u=="unwind"||_(0,u)}}catch(u){u instanceof jr||u=="unwind"||_(0,u)}};function ni(a){a>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(B(),a>>>2,a).value.then(pr),a+=128,Atomics.store(B(),a>>>2,1))}var pr=()=>{var a=wr();a&&(ni(a),ai(os))};function am(a,u){(a>>>=0)==u>>>0?setTimeout(pr):l?postMessage({Ed:a,yd:"checkMailbox"}):(a=yt[a])&&a.postMessage({yd:"checkMailbox"})}var si=[];function nm(a,u,p,h,f){for(u>>>=0,h/=2,si.length=h,p=f>>>0>>>3,f=0;f<h;f++)si[f]=W[p+2*f]?W[p+2*f+1]:Re()[p+2*f+1>>>0];return(u?Fr[u]:Xm[a])(...si)}var sm=()=>{ot=0};function om(a){a>>>=0,l?postMessage({yd:"cleanupThread",ee:a}):on(yt[a])}function um(a){}var cr=(a,u)=>{var p=ei[a];if(p===void 0)throw a=ts(a),p=Ze(a),Ye(a),new lt(`${u} has unknown type ${p}`);return p},On=(a,u,p)=>{var h=[];return a=a.toWireType(h,p),h.length&&(J()[u>>>2>>>0]=Pe(h)),a};function lm(a,u,p){return u>>>=0,p>>>=0,a=Be(a>>>0),u=cr(u,"emval::as"),On(u,p,a)}function dm(a,u){return u>>>=0,a=Be(a>>>0),(u=cr(u,"emval::as")).toWireType(null,a)}var hr=a=>{try{a()}catch(u){tt(u)}},pt=0,Xe=null,Rn=0,fr=[],Bn={},Mn={},pm=0,oi=null,cm=[];function Nn(a){return(function(u){if(!le){if(pt===0){var p=!1,h=!1;u((f=0)=>{if(!le&&(Rn=f,p=!0,h)){pt=2,hr(()=>no(Xe)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),f=!1;try{var x=(function(){var R=B()[Xe+8>>>2>>>0];return R=N[Mn[R]],--ot,R()})()}catch(R){x=R,f=!0}var C=!1;if(!Xe){var E=oi;E&&(oi=null,(f?E.reject:E.resolve)(x),C=!0)}if(f&&!C)throw x}}),h=!0,p||(pt=1,Xe=(function(){var f=br(65548),x=f+12;J()[f>>>2>>>0]=x,J()[f+4>>>2>>>0]=x+65536,x=fr[0];var C=Bn[x];return C===void 0&&(C=pm++,Bn[x]=C,Mn[C]=x),x=C,B()[f+8>>>2>>>0]=x,f})(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),hr(()=>io(Xe)))}else pt===2?(pt=0,hr(so),Ye(Xe),Xe=null,cm.forEach(ai)):tt(`invalid state: ${pt}`);return Rn}})(u=>{a().then(u)})}function hm(a){return a>>>=0,Nn(async()=>{var u=await Be(a);return Pe(u)})}var mr=[];function fm(a,u,p,h){return p>>>=0,h>>>=0,(a=mr[a>>>0])(null,u=Be(u>>>0),p,h)}var mm={},gr=a=>{var u=mm[a];return u===void 0?Ze(a):u};function gm(a,u,p,h,f){return p>>>=0,h>>>=0,f>>>=0,(a=mr[a>>>0])(u=Be(u>>>0),u[p=gr(p)],h,f)}var Dn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ym(a){return(a>>>=0)==0?Pe(Dn()):(a=gr(a),Pe(Dn()[a]))}var _m=a=>{var u=mr.length;return mr.push(a),u},wm=(a,u)=>{for(var p=Array(a),h=0;h<a;++h)p[h]=cr(J()[u+4*h>>>2>>>0],"parameter "+h);return p},Pn=(a,u)=>Object.defineProperty(u,"name",{value:a});function bm(a,u,p){var h=(u=wm(a,u>>>0)).shift();a--;var f=`return function (obj, func, destructorsRef, args) {
`,x=0,C=[];p===0&&C.push("obj");for(var E=["retType"],R=[h],U=0;U<a;++U)C.push("arg"+U),E.push("argType"+U),R.push(u[U]),f+=`  var arg${U} = argType${U}.readValueFromPointer(args${x?"+"+x:""});
`,x+=u[U].zd;return f+=`  var rv = ${p===1?"new func":"func.call"}(${C.join(", ")});
`,h.Qd||(E.push("emval_returnValue"),R.push(On),f+=`  return emval_returnValue(retType, destructorsRef, rv);
`),E.push(f+`};
`),a=(function(G){var Y=Function;if(!(Y instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Y} which is not a function`);var ne=Pn(Y.name||"unknownFunctionName",function(){});return ne.prototype=Y.prototype,ne=new ne,(G=Y.apply(ne,G))instanceof Object?G:ne})(E)(...R),p=`methodCaller<(${u.map(G=>G.name).join(", ")}) => ${h.name}>`,_m(Pn(p,a))}function $m(a){return a=gr(a>>>0),Pe(r[a])}function vm(a,u){return u>>>=0,a=Be(a>>>0),u=Be(u),Pe(a[u])}function xm(a){9<(a>>>=0)&&(it[a+1]+=1)}function km(){return Pe([])}function Sm(a){a=Be(a>>>0);for(var u=Array(a.length),p=0;p<a.length;p++)u[p]=a[p];return Pe(u)}function Tm(a){return Pe(gr(a>>>0))}function Cm(){return Pe({})}function Im(a){for(var u=Be(a>>>=0);u.length;){var p=u.pop();u.pop()(p)}ri(a)}function Em(a,u,p){u>>>=0,p>>>=0,a=Be(a>>>0),u=Be(u),p=Be(p),a[u]=p}function zm(a,u){return u>>>=0,a=(a=cr(a>>>0,"_emval_take_value")).readValueFromPointer(u),Pe(a)}function Am(a,u){a=-9007199254740992>a||9007199254740992<a?NaN:Number(a),u>>>=0,a=new Date(1e3*a),B()[u>>>2>>>0]=a.getUTCSeconds(),B()[u+4>>>2>>>0]=a.getUTCMinutes(),B()[u+8>>>2>>>0]=a.getUTCHours(),B()[u+12>>>2>>>0]=a.getUTCDate(),B()[u+16>>>2>>>0]=a.getUTCMonth(),B()[u+20>>>2>>>0]=a.getUTCFullYear()-1900,B()[u+24>>>2>>>0]=a.getUTCDay(),a=(a.getTime()-Date.UTC(a.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,B()[u+28>>>2>>>0]=a}var Un=a=>a%4==0&&(a%100!=0||a%400==0),Wn=[0,31,60,91,121,152,182,213,244,274,305,335],qn=[0,31,59,90,120,151,181,212,243,273,304,334];function Om(a,u){a=-9007199254740992>a||9007199254740992<a?NaN:Number(a),u>>>=0,a=new Date(1e3*a),B()[u>>>2>>>0]=a.getSeconds(),B()[u+4>>>2>>>0]=a.getMinutes(),B()[u+8>>>2>>>0]=a.getHours(),B()[u+12>>>2>>>0]=a.getDate(),B()[u+16>>>2>>>0]=a.getMonth(),B()[u+20>>>2>>>0]=a.getFullYear()-1900,B()[u+24>>>2>>>0]=a.getDay();var p=(Un(a.getFullYear())?Wn:qn)[a.getMonth()]+a.getDate()-1|0;B()[u+28>>>2>>>0]=p,B()[u+36>>>2>>>0]=-60*a.getTimezoneOffset(),p=new Date(a.getFullYear(),6,1).getTimezoneOffset();var h=new Date(a.getFullYear(),0,1).getTimezoneOffset();a=0|(p!=h&&a.getTimezoneOffset()==Math.min(h,p)),B()[u+32>>>2>>>0]=a}function Rm(a){a>>>=0;var u=new Date(B()[a+20>>>2>>>0]+1900,B()[a+16>>>2>>>0],B()[a+12>>>2>>>0],B()[a+8>>>2>>>0],B()[a+4>>>2>>>0],B()[a>>>2>>>0],0),p=B()[a+32>>>2>>>0],h=u.getTimezoneOffset(),f=new Date(u.getFullYear(),6,1).getTimezoneOffset(),x=new Date(u.getFullYear(),0,1).getTimezoneOffset(),C=Math.min(x,f);return 0>p?B()[a+32>>>2>>>0]=+(f!=x&&C==h):0<p!=(C==h)&&(f=Math.max(x,f),u.setTime(u.getTime()+6e4*((0<p?C:f)-h))),B()[a+24>>>2>>>0]=u.getDay(),p=(Un(u.getFullYear())?Wn:qn)[u.getMonth()]+u.getDate()-1|0,B()[a+28>>>2>>>0]=p,B()[a>>>2>>>0]=u.getSeconds(),B()[a+4>>>2>>>0]=u.getMinutes(),B()[a+8>>>2>>>0]=u.getHours(),B()[a+12>>>2>>>0]=u.getDate(),B()[a+16>>>2>>>0]=u.getMonth(),B()[a+20>>>2>>>0]=u.getYear(),a=u.getTime(),BigInt(isNaN(a)?-1:a/1e3)}function Vn(a,u,p,h,f,x,C){return l?we(16,1,a,u,p,h,f,x,C):-52}function Ln(a,u,p,h,f,x){if(l)return we(17,1,a,u,p,h,f,x)}var Lt={},Bm=()=>performance.timeOrigin+performance.now();function Gn(a,u){if(l)return we(18,1,a,u);if(Lt[a]&&(clearTimeout(Lt[a].id),delete Lt[a]),!u)return 0;var p=setTimeout(()=>{delete Lt[a],ai(()=>ss(a,performance.timeOrigin+performance.now()))},u);return Lt[a]={id:p,ke:u},0}function Mm(a,u,p,h){a>>>=0,u>>>=0,p>>>=0,h>>>=0;var f=new Date().getFullYear(),x=new Date(f,0,1).getTimezoneOffset();f=new Date(f,6,1).getTimezoneOffset();var C=Math.max(x,f);J()[a>>>2>>>0]=60*C,B()[u>>>2>>>0]=+(x!=f),a=(u=E=>{var R=Math.abs(E);return`UTC${0<=E?"-":"+"}${String(Math.floor(R/60)).padStart(2,"0")}${String(R%60).padStart(2,"0")}`})(x),u=u(f),f<x?(Ot(a,p,17),Ot(u,h,17)):(Ot(a,h,17),Ot(u,p,17))}var Nm=()=>Date.now();function Dm(a,u,p){return 0<=a&&3>=a?(a===0?a=Date.now():a=performance.timeOrigin+performance.now(),W[p>>>0>>>3]=BigInt(Math.round(1e6*a)),0):28}var ui=[],Hn=(a,u)=>{ui.length=0;for(var p;p=ce()[a++>>>0];){var h=p!=105;u+=(h&=p!=112)&&u%8?4:0,ui.push(p==112?J()[u>>>2>>>0]:p==106?W[u>>>3]:p==105?B()[u>>>2>>>0]:Re()[u>>>3>>>0]),u+=h?8:4}return ui};function Pm(a,u,p){return a>>>=0,u=Hn(u>>>0,p>>>0),Fr[a](...u)}function Um(a,u,p){return a>>>=0,u=Hn(u>>>0,p>>>0),Fr[a](...u)}var Wm=()=>{};function qm(a,u){return b(ke(a>>>0,u>>>0))}var Vm=()=>{throw ot+=1,"unwind"};function Lm(){return 4294901760}var Gm=()=>navigator.hardwareConcurrency;function Hm(){return tt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Fm(a){a>>>=0;var u=ce().length;if(a<=u||4294901760<a)return!1;for(var p=1;4>=p;p*=2){var h=u*(1+.2/p);h=Math.min(h,a+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(a,h)/65536))-S.buffer.byteLength+65535)/65536|0;try{S.grow(h),Ie();var f=1;break e}catch{}f=void 0}if(f)return!0}return!1}var yr=()=>(tt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Gt={},Fn=a=>{a.forEach(u=>{yr()})};function jm(){var a=Error().stack.toString().split(`
`);return a[0]=="Error"&&a.shift(),Fn(a),Gt.Kd=yr(),Gt.ae=a,Gt.Kd}function Km(a,u,p){if(a>>>=0,u>>>=0,Gt.Kd==a)var h=Gt.ae;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),Fn(h);for(var f=3;h[f]&&yr()!=a;)++f;for(a=0;a<p&&h[a+f];++a)B()[u+4*a>>>2>>>0]=yr();return a}var li,di={},jn=()=>{if(!li){var a,u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(a in di)di[a]===void 0?delete u[a]:u[a]=di[a];var p=[];for(a in u)p.push(`${a}=${u[a]}`);li=p}return li};function Kn(a,u){if(l)return we(19,1,a,u);a>>>=0,u>>>=0;var p=0;return jn().forEach((h,f)=>{var x=u+p;for(f=J()[a+4*f>>>2>>>0]=x,x=0;x<h.length;++x)j()[f++>>>0]=h.charCodeAt(x);j()[f>>>0]=0,p+=h.length+1}),0}function Qn(a,u){if(l)return we(20,1,a,u);a>>>=0,u>>>=0;var p=jn();J()[a>>>2>>>0]=p.length;var h=0;return p.forEach(f=>h+=f.length+1),J()[u>>>2>>>0]=h,0}function Zn(a){return l?we(21,1,a):52}function Xn(a,u,p,h){return l?we(22,1,a,u,p,h):52}function Yn(a,u,p,h){return l?we(23,1,a,u,p,h):70}var Qm=[null,[],[]];function Jn(a,u,p,h){if(l)return we(24,1,a,u,p,h);u>>>=0,p>>>=0,h>>>=0;for(var f=0,x=0;x<p;x++){var C=J()[u>>>2>>>0],E=J()[u+4>>>2>>>0];u+=8;for(var R=0;R<E;R++){var U=ce()[C+R>>>0],G=Qm[a];U===0||U===10?((a===1?v:b)(fn(G)),G.length=0):G.push(U)}f+=E}return J()[h>>>2>>>0]=f,0}function Zm(a){return a>>>0}l||(function(){for(var a=r.numThreads-1;a--;)dn();Kr.unshift(()=>{Wt++,(function(u){l?u():Promise.all(ut.map(ln)).then(u)})(()=>en())})})();for(var es=Array(256),_r=0;256>_r;++_r)es[_r]=String.fromCharCode(_r);En=es,lt=r.BindingError=class extends Error{constructor(a){super(a),this.name="BindingError"}},r.InternalError=class extends Error{constructor(a){super(a),this.name="InternalError"}},it.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>it.length/2-5-ti.length;var N,Xm=[Qr,nn,pn,mn,gn,_n,wn,bn,$n,vn,xn,kn,Sn,Tn,Cn,In,Vn,Ln,Gn,Kn,Qn,Zn,Xn,Yn,Jn];(async function(){function a(h,f){return N=h.exports,N=(function(){var x=N,C={};for(let[E,R]of Object.entries(x))C[E]=typeof R=="function"?(...U)=>{fr.push(E);try{return R(...U)}finally{le||(fr.pop(),Xe&&pt===1&&fr.length===0&&(pt=0,ot+=1,hr(ao),typeof Fibers<"u"&&Fibers.le()))}}:R;return C})(),N=(function(){var x=N,C=R=>U=>R(U)>>>0,E=R=>()=>R()>>>0;return(x=Object.assign({},x)).Cb=C(x.Cb),x.fc=E(x.fc),x.ic=C(x.ic),x.vc=C(x.vc),x.wc=E(x.wc),x.Ac=C(x.Ac),x})(),sn.push(N.jc),T=f,en(),N}Wt++;var u=tn();if(r.instantiateWasm)return new Promise(h=>{r.instantiateWasm(u,(f,x)=>{a(f,x),h(f.exports)})});if(l)return new Promise(h=>{Se=f=>{var x=new WebAssembly.Instance(f,tn());h(a(x,f))}});Ut??=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",w):w+"ort-wasm-simd-threaded.jsep.wasm":new URL("/static/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href;try{var p=await(async function(h){var f=Ut;if(!F&&typeof WebAssembly.instantiateStreaming=="function"&&!pe(f))try{var x=fetch(f,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,h)}catch(C){b(`wasm streaming compile failed: ${C}`),b("falling back to ArrayBuffer instantiation")}return(async function(C,E){try{var R=await(async function(U){if(!F)try{var G=await m(U);return new Uint8Array(G)}catch{}if(U==Ut&&F)U=new Uint8Array(F);else{if(!g)throw"both async and sync fetching of the wasm failed";U=g(U)}return U})(C);return await WebAssembly.instantiate(R,E)}catch(U){b(`failed to asynchronously prepare wasm: ${U}`),tt(U)}})(f,h)})(u);return a(p.instance,p.module)}catch(h){return i(h),Promise.reject(h)}})();var ts=a=>(ts=N.Cb)(a),rs=()=>(rs=N.Db)();r._OrtInit=(a,u)=>(r._OrtInit=N.Eb)(a,u),r._OrtGetLastError=(a,u)=>(r._OrtGetLastError=N.Fb)(a,u),r._OrtCreateSessionOptions=(a,u,p,h,f,x,C,E,R,U)=>(r._OrtCreateSessionOptions=N.Gb)(a,u,p,h,f,x,C,E,R,U),r._OrtAppendExecutionProvider=(a,u)=>(r._OrtAppendExecutionProvider=N.Hb)(a,u),r._OrtAddFreeDimensionOverride=(a,u,p)=>(r._OrtAddFreeDimensionOverride=N.Ib)(a,u,p),r._OrtAddSessionConfigEntry=(a,u,p)=>(r._OrtAddSessionConfigEntry=N.Jb)(a,u,p),r._OrtReleaseSessionOptions=a=>(r._OrtReleaseSessionOptions=N.Kb)(a),r._OrtCreateSession=(a,u,p)=>(r._OrtCreateSession=N.Lb)(a,u,p),r._OrtReleaseSession=a=>(r._OrtReleaseSession=N.Mb)(a),r._OrtGetInputOutputCount=(a,u,p)=>(r._OrtGetInputOutputCount=N.Nb)(a,u,p),r._OrtGetInputName=(a,u)=>(r._OrtGetInputName=N.Ob)(a,u),r._OrtGetOutputName=(a,u)=>(r._OrtGetOutputName=N.Pb)(a,u),r._OrtFree=a=>(r._OrtFree=N.Qb)(a),r._OrtCreateTensor=(a,u,p,h,f,x)=>(r._OrtCreateTensor=N.Rb)(a,u,p,h,f,x),r._OrtGetTensorData=(a,u,p,h,f)=>(r._OrtGetTensorData=N.Sb)(a,u,p,h,f),r._OrtReleaseTensor=a=>(r._OrtReleaseTensor=N.Tb)(a),r._OrtCreateRunOptions=(a,u,p,h)=>(r._OrtCreateRunOptions=N.Ub)(a,u,p,h),r._OrtAddRunConfigEntry=(a,u,p)=>(r._OrtAddRunConfigEntry=N.Vb)(a,u,p),r._OrtReleaseRunOptions=a=>(r._OrtReleaseRunOptions=N.Wb)(a),r._OrtCreateBinding=a=>(r._OrtCreateBinding=N.Xb)(a),r._OrtBindInput=(a,u,p)=>(r._OrtBindInput=N.Yb)(a,u,p),r._OrtBindOutput=(a,u,p,h)=>(r._OrtBindOutput=N.Zb)(a,u,p,h),r._OrtClearBoundOutputs=a=>(r._OrtClearBoundOutputs=N._b)(a),r._OrtReleaseBinding=a=>(r._OrtReleaseBinding=N.$b)(a),r._OrtRunWithBinding=(a,u,p,h,f)=>(r._OrtRunWithBinding=N.ac)(a,u,p,h,f),r._OrtRun=(a,u,p,h,f,x,C,E)=>(r._OrtRun=N.bc)(a,u,p,h,f,x,C,E),r._OrtEndProfiling=a=>(r._OrtEndProfiling=N.cc)(a),r._JsepOutput=(a,u,p)=>(r._JsepOutput=N.dc)(a,u,p),r._JsepGetNodeName=a=>(r._JsepGetNodeName=N.ec)(a);var wr=()=>(wr=N.fc)(),Ye=r._free=a=>(Ye=r._free=N.gc)(a),br=r._malloc=a=>(br=r._malloc=N.ic)(a),pi=(a,u,p,h,f,x)=>(pi=N.kc)(a,u,p,h,f,x),is=()=>(is=N.lc)(),as=(a,u,p,h,f)=>(as=N.mc)(a,u,p,h,f),ns=a=>(ns=N.nc)(a),ci=a=>(ci=N.oc)(a),ss=(a,u)=>(ss=N.pc)(a,u),os=()=>(os=N.qc)(),ae=(a,u)=>(ae=N.rc)(a,u),Ht=a=>(Ht=N.sc)(a),us=(a,u)=>(us=N.tc)(a,u),re=a=>(re=N.uc)(a),hi=a=>(hi=N.vc)(a),ie=()=>(ie=N.wc)(),ls=a=>(ls=N.xc)(a),ds=a=>(ds=N.yc)(a),ps=(a,u,p)=>(ps=N.zc)(a,u,p),cs=a=>(cs=N.Ac)(a),hs=r.dynCall_iii=(a,u,p)=>(hs=r.dynCall_iii=N.Bc)(a,u,p),fs=r.dynCall_vi=(a,u)=>(fs=r.dynCall_vi=N.Cc)(a,u),fi=r.dynCall_ii=(a,u)=>(fi=r.dynCall_ii=N.Dc)(a,u),ms=r.dynCall_vii=(a,u,p)=>(ms=r.dynCall_vii=N.Ec)(a,u,p),gs=r.dynCall_iiii=(a,u,p,h)=>(gs=r.dynCall_iiii=N.Fc)(a,u,p,h),ys=r.dynCall_viii=(a,u,p,h)=>(ys=r.dynCall_viii=N.Gc)(a,u,p,h),_s=r.dynCall_iiiii=(a,u,p,h,f)=>(_s=r.dynCall_iiiii=N.Hc)(a,u,p,h,f),ws=r.dynCall_viiii=(a,u,p,h,f)=>(ws=r.dynCall_viiii=N.Ic)(a,u,p,h,f),bs=r.dynCall_viiiiii=(a,u,p,h,f,x,C)=>(bs=r.dynCall_viiiiii=N.Jc)(a,u,p,h,f,x,C),$s=r.dynCall_viiiiiii=(a,u,p,h,f,x,C,E)=>($s=r.dynCall_viiiiiii=N.Kc)(a,u,p,h,f,x,C,E),vs=r.dynCall_ji=(a,u)=>(vs=r.dynCall_ji=N.Lc)(a,u),xs=r.dynCall_v=a=>(xs=r.dynCall_v=N.Mc)(a),ks=r.dynCall_viiiii=(a,u,p,h,f,x)=>(ks=r.dynCall_viiiii=N.Nc)(a,u,p,h,f,x),Ss=r.dynCall_i=a=>(Ss=r.dynCall_i=N.Oc)(a),Ts=r.dynCall_fii=(a,u,p)=>(Ts=r.dynCall_fii=N.Pc)(a,u,p),Cs=r.dynCall_viiiiiiii=(a,u,p,h,f,x,C,E,R)=>(Cs=r.dynCall_viiiiiiii=N.Qc)(a,u,p,h,f,x,C,E,R),Is=r.dynCall_viiiiiiiiii=(a,u,p,h,f,x,C,E,R,U,G)=>(Is=r.dynCall_viiiiiiiiii=N.Rc)(a,u,p,h,f,x,C,E,R,U,G),Es=r.dynCall_jiii=(a,u,p,h)=>(Es=r.dynCall_jiii=N.Sc)(a,u,p,h),zs=r.dynCall_dii=(a,u,p)=>(zs=r.dynCall_dii=N.Tc)(a,u,p),As=r.dynCall_viiiiiiiii=(a,u,p,h,f,x,C,E,R,U)=>(As=r.dynCall_viiiiiiiii=N.Uc)(a,u,p,h,f,x,C,E,R,U),Os=r.dynCall_viiiiiiiiiii=(a,u,p,h,f,x,C,E,R,U,G,Y)=>(Os=r.dynCall_viiiiiiiiiii=N.Vc)(a,u,p,h,f,x,C,E,R,U,G,Y),Rs=r.dynCall_iiiiii=(a,u,p,h,f,x)=>(Rs=r.dynCall_iiiiii=N.Wc)(a,u,p,h,f,x),Bs=r.dynCall_iij=(a,u,p)=>(Bs=r.dynCall_iij=N.Xc)(a,u,p),Ms=r.dynCall_iiiiiiiiii=(a,u,p,h,f,x,C,E,R,U)=>(Ms=r.dynCall_iiiiiiiiii=N.Yc)(a,u,p,h,f,x,C,E,R,U),Ns=r.dynCall_iiiiiiiiiii=(a,u,p,h,f,x,C,E,R,U,G)=>(Ns=r.dynCall_iiiiiiiiiii=N.Zc)(a,u,p,h,f,x,C,E,R,U,G),Ds=r.dynCall_vij=(a,u,p)=>(Ds=r.dynCall_vij=N._c)(a,u,p),Ps=r.dynCall_iiif=(a,u,p,h)=>(Ps=r.dynCall_iiif=N.$c)(a,u,p,h),Us=r.dynCall_iiij=(a,u,p,h)=>(Us=r.dynCall_iiij=N.ad)(a,u,p,h),Ws=r.dynCall_fiii=(a,u,p,h)=>(Ws=r.dynCall_fiii=N.bd)(a,u,p,h),qs=r.dynCall_viiiiiiiiiiiii=(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)=>(qs=r.dynCall_viiiiiiiiiiiii=N.cd)(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e),Vs=r.dynCall_vjiii=(a,u,p,h,f)=>(Vs=r.dynCall_vjiii=N.dd)(a,u,p,h,f),Ls=r.dynCall_vif=(a,u,p)=>(Ls=r.dynCall_vif=N.ed)(a,u,p),Gs=r.dynCall_iiiiiii=(a,u,p,h,f,x,C)=>(Gs=r.dynCall_iiiiiii=N.fd)(a,u,p,h,f,x,C),Hs=r.dynCall_iiiij=(a,u,p,h,f)=>(Hs=r.dynCall_iiiij=N.gd)(a,u,p,h,f),Fs=r.dynCall_iiiiiiii=(a,u,p,h,f,x,C,E)=>(Fs=r.dynCall_iiiiiiii=N.hd)(a,u,p,h,f,x,C,E),js=r.dynCall_viiiiiiiiiiii=(a,u,p,h,f,x,C,E,R,U,G,Y,ne)=>(js=r.dynCall_viiiiiiiiiiii=N.id)(a,u,p,h,f,x,C,E,R,U,G,Y,ne),Ks=r.dynCall_diii=(a,u,p,h)=>(Ks=r.dynCall_diii=N.jd)(a,u,p,h),Qs=r.dynCall_jiiii=(a,u,p,h,f)=>(Qs=r.dynCall_jiiii=N.kd)(a,u,p,h,f),Zs=r.dynCall_viiij=(a,u,p,h,f)=>(Zs=r.dynCall_viiij=N.ld)(a,u,p,h,f),Xs=r.dynCall_fiiii=(a,u,p,h,f)=>(Xs=r.dynCall_fiiii=N.md)(a,u,p,h,f),Ys=r.dynCall_viiif=(a,u,p,h,f)=>(Ys=r.dynCall_viiif=N.nd)(a,u,p,h,f),Js=r.dynCall_diiii=(a,u,p,h,f)=>(Js=r.dynCall_diiii=N.od)(a,u,p,h,f),eo=r.dynCall_viiid=(a,u,p,h,f)=>(eo=r.dynCall_viiid=N.pd)(a,u,p,h,f),to=r.dynCall_iiiijii=(a,u,p,h,f,x,C)=>(to=r.dynCall_iiiijii=N.qd)(a,u,p,h,f,x,C),ro=r.dynCall_iiiiiij=(a,u,p,h,f,x,C)=>(ro=r.dynCall_iiiiiij=N.rd)(a,u,p,h,f,x,C),io=a=>(io=N.sd)(a),ao=()=>(ao=N.td)(),no=a=>(no=N.ud)(a),so=()=>(so=N.vd)();function Ym(a,u,p){var h=ie();try{ms(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function Jm(a,u,p){var h=ie();try{return hs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function eg(a,u){var p=ie();try{fs(a,u)}catch(h){if(re(p),h!==h+0)throw h;ae(1,0)}}function tg(a,u){var p=ie();try{return fi(a,u)}catch(h){if(re(p),h!==h+0)throw h;ae(1,0)}}function rg(a,u,p,h){var f=ie();try{return gs(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function ig(a,u,p,h,f){var x=ie();try{ws(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function ag(a,u,p,h,f){var x=ie();try{return _s(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function ng(a,u,p,h){var f=ie();try{ys(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function sg(a,u,p,h,f,x,C){var E=ie();try{return Gs(a,u,p,h,f,x,C)}catch(R){if(re(E),R!==R+0)throw R;ae(1,0)}}function og(a){var u=ie();try{xs(a)}catch(p){if(re(u),p!==p+0)throw p;ae(1,0)}}function ug(a,u,p){var h=ie();try{return Bs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function lg(a,u,p,h,f,x){var C=ie();try{ks(a,u,p,h,f,x)}catch(E){if(re(C),E!==E+0)throw E;ae(1,0)}}function dg(a,u,p){var h=ie();try{Ds(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function pg(a,u,p,h,f,x,C){var E=ie();try{bs(a,u,p,h,f,x,C)}catch(R){if(re(E),R!==R+0)throw R;ae(1,0)}}function cg(a,u,p,h,f,x,C,E){var R=ie();try{$s(a,u,p,h,f,x,C,E)}catch(U){if(re(R),U!==U+0)throw U;ae(1,0)}}function hg(a,u,p,h,f,x){var C=ie();try{return Rs(a,u,p,h,f,x)}catch(E){if(re(C),E!==E+0)throw E;ae(1,0)}}function fg(a,u,p,h,f,x,C,E){var R=ie();try{return Fs(a,u,p,h,f,x,C,E)}catch(U){if(re(R),U!==U+0)throw U;ae(1,0)}}function mg(a,u,p,h,f,x,C,E,R,U){var G=ie();try{As(a,u,p,h,f,x,C,E,R,U)}catch(Y){if(re(G),Y!==Y+0)throw Y;ae(1,0)}}function gg(a,u,p,h,f,x,C,E,R){var U=ie();try{Cs(a,u,p,h,f,x,C,E,R)}catch(G){if(re(U),G!==G+0)throw G;ae(1,0)}}function yg(a){var u=ie();try{return Ss(a)}catch(p){if(re(u),p!==p+0)throw p;ae(1,0)}}function _g(a,u,p,h,f,x,C,E,R,U){var G=ie();try{return Ms(a,u,p,h,f,x,C,E,R,U)}catch(Y){if(re(G),Y!==Y+0)throw Y;ae(1,0)}}function wg(a,u,p){var h=ie();try{return Ts(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function bg(a,u,p,h){var f=ie();try{return Es(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;return ae(1,0),0n}}function $g(a,u,p){var h=ie();try{return zs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function vg(a,u,p,h,f,x,C,E,R,U,G,Y){var ne=ie();try{Os(a,u,p,h,f,x,C,E,R,U,G,Y)}catch(_e){if(re(ne),_e!==_e+0)throw _e;ae(1,0)}}function xg(a,u,p,h,f,x,C,E,R,U,G){var Y=ie();try{Is(a,u,p,h,f,x,C,E,R,U,G)}catch(ne){if(re(Y),ne!==ne+0)throw ne;ae(1,0)}}function kg(a,u,p,h,f,x,C,E,R,U,G){var Y=ie();try{return Ns(a,u,p,h,f,x,C,E,R,U,G)}catch(ne){if(re(Y),ne!==ne+0)throw ne;ae(1,0)}}function Sg(a,u,p,h){var f=ie();try{return Ps(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Tg(a,u,p,h){var f=ie();try{return Us(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Cg(a,u,p,h){var f=ie();try{return Ws(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Ig(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e){var Ue=ie();try{qs(a,u,p,h,f,x,C,E,R,U,G,Y,ne,_e)}catch(Ft){if(re(Ue),Ft!==Ft+0)throw Ft;ae(1,0)}}function Eg(a,u,p,h,f){var x=ie();try{Vs(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function zg(a,u,p){var h=ie();try{Ls(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function Ag(a,u){var p=ie();try{return vs(a,u)}catch(h){if(re(p),h!==h+0)throw h;return ae(1,0),0n}}function Og(a,u,p,h,f){var x=ie();try{return Hs(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function Rg(a,u,p,h,f,x,C,E,R,U,G,Y,ne){var _e=ie();try{js(a,u,p,h,f,x,C,E,R,U,G,Y,ne)}catch(Ue){if(re(_e),Ue!==Ue+0)throw Ue;ae(1,0)}}function Bg(a,u,p,h){var f=ie();try{return Ks(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Mg(a,u,p,h,f){var x=ie();try{return Qs(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;return ae(1,0),0n}}function Ng(a,u,p,h,f){var x=ie();try{Zs(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function Dg(a,u,p,h,f){var x=ie();try{return Xs(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function Pg(a,u,p,h,f){var x=ie();try{Ys(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function Ug(a,u,p,h,f){var x=ie();try{return Js(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function Wg(a,u,p,h,f){var x=ie();try{eo(a,u,p,h,f)}catch(C){if(re(x),C!==C+0)throw C;ae(1,0)}}function qg(a,u,p,h,f,x,C){var E=ie();try{return to(a,u,p,h,f,x,C)}catch(R){if(re(E),R!==R+0)throw R;ae(1,0)}}function Vg(a,u,p,h,f,x,C){var E=ie();try{return ro(a,u,p,h,f,x,C)}catch(R){if(re(E),R!==R+0)throw R;ae(1,0)}}return r.stackSave=()=>ie(),r.stackRestore=a=>re(a),r.stackAlloc=a=>hi(a),r.setValue=function(a,u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":j()[a>>>0]=u;break;case"i16":P()[a>>>1>>>0]=u;break;case"i32":B()[a>>>2>>>0]=u;break;case"i64":W[a>>>3]=BigInt(u);break;case"float":ve()[a>>>2>>>0]=u;break;case"double":Re()[a>>>3>>>0]=u;break;case"*":J()[a>>>2>>>0]=u;break;default:tt(`invalid type for setValue: ${p}`)}},r.getValue=function(a,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":case"i8":return j()[a>>>0];case"i16":return P()[a>>>1>>>0];case"i32":return B()[a>>>2>>>0];case"i64":return W[a>>>3];case"float":return ve()[a>>>2>>>0];case"double":return Re()[a>>>3>>>0];case"*":return J()[a>>>2>>>0];default:tt(`invalid type for getValue: ${u}`)}},r.UTF8ToString=ke,r.stringToUTF8=Ot,r.lengthBytesUTF8=yn,(function a(){if(0<Wt)qt=a;else if(l)t(r),lr();else{for(;0<Kr.length;)Kr.shift()(r);0<Wt?qt=a:(r.calledRun=!0,le||(lr(),t(r)))}})(),r.PTR_SIZE=4,n}),op=$i,uo=globalThis.self?.name?.startsWith("em-pthread"),uo&&$i()}),vi,lo,Me,up,vr,po,co,xi,ho,ki,lp,Si,dp,Ia=q(()=>{Ca(),vi=typeof location>"u"?void 0:location.origin,lo=()=>import.meta.url?.startsWith("file:")?new URL(new URL("/static/assets/ort.bundle.min-OfoG_cy9.mjs",import.meta.url).href,vi).href:import.meta.url,Me=lo(),up=()=>{if(Me&&!Me.startsWith("blob:"))return Me.substring(0,Me.lastIndexOf("/")+1)},vr=(e,t)=>{try{let i=t??Me;return(i?new URL(e,i):new URL(e)).origin===vi}catch{return!1}},po=(e,t)=>{let i=t??Me;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},co=(e,t)=>`${t??"./"}${e}`,xi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ho=async e=>(await import(e)).default,ki=(uy(),Pr(ap)).default,lp=async()=>{if(!Me)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(vr(Me))return[void 0,ki()];let e=await xi(Me);return[e,ki(e)]},Si=(ly(),Pr(sp)).default,dp=async(e,t,i)=>{if(!e&&!t&&Si&&Me&&vr(Me))return[void 0,Si];{let r="ort-wasm-simd-threaded.jsep.mjs",n=e??po(r,t),o=i&&n&&!vr(n,t),s=o?await xi(n):n??co(r,t);return[o?s:void 0,await ho(s)]}}}),Ti,xr,Kt,Ci,fo,mo,Ea,Te,Et=q(()=>{Ia(),xr=!1,Kt=!1,Ci=!1,fo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},mo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ea=async e=>{if(xr)return Promise.resolve();if(Kt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ci)throw new Error("previous call to 'initializeWebAssembly()' failed.");Kt=!0;let t=e.initTimeout,i=e.numThreads;if(!mo())throw new Error("WebAssembly SIMD is not supported in the current environment.");let r=fo();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let n=e.wasmPaths,o=typeof n=="string"?n:void 0,s=n?.mjs,l=s?.href??s,d=n?.wasm,c=d?.href??d,m=e.wasmBinary,[g,y]=await dp(l,o,i>1),_=!1,w=[];if(t>0&&w.push(new Promise($=>{setTimeout(()=>{_=!0,$()},t)})),w.push(new Promise(($,k)=>{let v={numThreads:i};if(m)v.wasmBinary=m;else if(c||o)v.locateFile=b=>c??o+b;else if(l&&l.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,l).href;else if(g){let b=up();b&&(v.locateFile=S=>b+S)}y(v).then(b=>{Kt=!1,xr=!0,Ti=b,$(),g&&URL.revokeObjectURL(g)},b=>{Kt=!1,Ci=!0,k(b)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Te=()=>{if(xr&&Ti)return Ti;throw new Error("WebAssembly is not initialized yet.")}}),ze,Wr,me,za=q(()=>{Et(),ze=(e,t)=>{let i=Te(),r=i.lengthBytesUTF8(e)+1,n=i._malloc(r);return i.stringToUTF8(e,n,r),t.push(n),n},Wr=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([n,o])=>{let s=t?t+n:n;if(typeof o=="object")Wr(o,s+".",i,r);else if(typeof o=="string"||typeof o=="number")r(s,o.toString());else if(typeof o=="boolean")r(s,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},me=e=>{let t=Te(),i=t.stackSave();try{let r=t.PTR_SIZE,n=t.stackAlloc(2*r);t._OrtGetLastError(n,n+r);let o=Number(t.getValue(n,r===4?"i32":"i64")),s=t.getValue(n+r,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(i)}}}),pp,dy=q(()=>{Et(),za(),pp=e=>{let t=Te(),i=0,r=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let o=0;return e?.tag!==void 0&&(o=ze(e.tag,r)),i=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,o),i===0&&me("Can't create run options."),e?.extra!==void 0&&Wr(e.extra,"",new WeakSet,(s,l)=>{let d=ze(s,r),c=ze(l,r);t._OrtAddRunConfigEntry(i,d,c)!==0&&me(`Can't set a run config entry: ${s} - ${l}.`)}),[i,r]}catch(o){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(s=>t._free(s)),o}}}),go,yo,_o,wo,cp,py=q(()=>{Et(),za(),go=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},yo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},_o=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},wo=(e,t,i)=>{for(let r of t){let n=typeof r=="string"?r:r.name;switch(n){case"webnn":if(n="WEBNN",typeof r!="string"){let s=r?.deviceType;if(s){let l=ze("deviceType",i),d=ze(s,i);Te()._OrtAddSessionConfigEntry(e,l,d)!==0&&me(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(n="JS",typeof r!="string"){let s=r;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=ze("preferredLayout",i),d=ze(s.preferredLayout,i);Te()._OrtAddSessionConfigEntry(e,l,d)!==0&&me(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let o=ze(n,i);Te()._OrtAppendExecutionProvider(e,o)!==0&&me(`Can't append execution provider: ${n}.`)}},cp=e=>{let t=Te(),i=0,r=[],n=e||{};_o(n);try{let o=go(n.graphOptimizationLevel??"all"),s=yo(n.executionMode??"sequential"),l=typeof n.logId=="string"?ze(n.logId,r):0,d=n.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let c=n.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let m=typeof n.optimizedModelFilePath=="string"?ze(n.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(o,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,l,d,c,m),i===0&&me("Can't create session options."),n.executionProviders&&wo(i,n.executionProviders,r),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let g=ze("enableGraphCapture",r),y=ze(n.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(i,g,y)!==0&&me(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[g,y]of Object.entries(n.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let _=ze(g,r);t._OrtAddFreeDimensionOverride(i,_,y)!==0&&me(`Can't set a free dimension override: ${g} - ${y}.`)}return n.extra!==void 0&&Wr(n.extra,"",new WeakSet,(g,y)=>{let _=ze(g,r),w=ze(y,r);t._OrtAddSessionConfigEntry(i,_,w)!==0&&me(`Can't set a session config entry: ${g} - ${y}.`)}),[i,r]}catch(o){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&me("Can't release session options."),r.forEach(s=>t._free(s)),o}}}),Bt,xt,kt,Aa,qr,Oa,Ra,da,ee=q(()=>{Bt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},xt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},kt=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((n,o)=>n*o,1);return i>0?Math.ceil(r*i):void 0},Aa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Oa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ra=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",da=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ba,hp=q(()=>{Ca(),Ba=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(l){if(l instanceof RangeError){let d=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await n.read();if(l)break;let c=d.byteLength;new Uint8Array(o,s,c).set(d),s+=c}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),bo,$o,vo,xo,Ma,ko,he,st=q(()=>{ee(),bo=["V","I","W","E","F"],$o=(e,t)=>{console.log(`[${bo[e]},${new Date().toISOString()}]${t}`)},Ma=(e,t)=>{vo=e,xo=t},ko=(e,t)=>{let i=qr(e),r=qr(vo);i>=r&&$o(i,typeof t=="function"?t():t)},he=(...e)=>{xo&&ko(...e)}}),Na,fp=q(()=>{ee(),Na=(e,t)=>new(Aa(t))(e)}),Da=q(()=>{}),Ii,kr,Sr,So,To,Ei,pa,Co,mp,cy=q(()=>{st(),Da(),Ii=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),kr=[],Sr=e=>Math.ceil(Number(e)/16)*16,So=e=>{for(let t=0;t<kr.length;t++){let i=kr[t];if(e<=i)return i}return Math.ceil(e/16)*16},To=1,Ei=()=>To++,pa=async(e,t,i,r)=>{let n=Sr(i),o=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,o,0,n),e.flush(),await o.mapAsync(GPUMapMode.READ);let l=o.getMappedRange();if(r){let d=r();return d.set(new Uint8Array(l,0,i)),d}else return new Uint8Array(l.slice(0,i))}finally{o.destroy()}},Co=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ii)kr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,r=t.byteOffset,n=t.byteLength,o=Sr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(i,r,n)),l.unmap();let c=this.backend.device.createCommandEncoder();c.copyBufferToBuffer(l,0,s.gpuData.buffer,0,o),this.backend.device.queue.submit([c.finish()]),l.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Sr(i.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(i.gpuData.buffer,0,r.gpuData.buffer,0,n)}registerExternalBuffer(e,t,i){let r;if(i){if(r=i[0],e===i[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Ei();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=So(e),r,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||o){let l=(n?this.freeBuffers:this.freeUniformBuffers).get(i);l?l.length>0?r=l.pop():r=this.backend.device.createBuffer({size:i,usage:t}):r=this.backend.device.createBuffer({size:i,usage:t})}else r=this.backend.device.createBuffer({size:i,usage:t});let s={id:Ei(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await pa(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ii.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},mp=(...e)=>new Co(...e)}),Io,ge,$e=q(()=>{Io=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ge=e=>new Io(e)}),Eo,Dt,O,Vr,gp,yp,_p,se=q(()=>{Eo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Dt=class{static calcShape(e,t,i=!1){let r=e.length,n=t.length;if(r===0)return t;if(n===0)return e;let o=Math.max(e.length,t.length),s=new Array(o);if(i){if(r<2||n<2)return;let l=Eo.calcMatMulShape([e[r-2],e[r-1]],[t[n-2],t[n-1]]);if(l===void 0)return;[s[o-2],s[o-1]]=l}for(let l=i?3:1;l<=o;l++){let d=r-l<0?1:e[r-l],c=n-l<0?1:t[n-l];if(d!==c&&d>1&&c>1)return;let m=Math.max(d,c);if(d&&c)s[o-l]=Math.max(d,c);else{if(m>1)return;s[o-l]=0}}return s}static isValidBroadcast(e,t){let i=e.length,r=t.length;if(i>r)return!1;for(let n=1;n<=i;n++)if(e[i-n]!==1&&e[i-n]!==t[r-n])return!1;return!0}},O=class Nr{static size(t){return Nr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let n=new Array(r),o=r-1;for(;o>=0;){if(t[o]%i===0){n[o]=t[o]/i;break}if(i%t[o]!==0)throw new Error("cannot convert shape");n[o]=1,i/=t[o],o--}for(o--;o>=0;o--)n[o]=t[o];return n}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Nr.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Nr.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let n=1;for(let o=i;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[o])}return n}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let n=i-3;n>=0;--n)r[n]=r[n+1]*t[n+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((n,o)=>n+i[o]+i[o+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,n)=>r===i[n])}},Vr=class ir{static adjustPoolAttributes(t,i,r,n,o,s){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<i.length-2;l++)l>=r.length?r.push(i[l+2]):r[l]=i[l+2];for(let l=0;l<r.length;l++)if(l<n.length){if(n[l]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let l=0;l<r.length;l++)if(l<o.length){if(o[l]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let l=0;l<r.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<r.length;l++){if(r[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=r[l]||s[l+r.length]>=r[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,n,o,s,l){if(l){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)ir.adjustPadAndReturnShape(t[d+(s?1:2)],i[d],r[d],n[d],o,d,d+t.length-2,l)}}static computePoolOutputShape(t,i,r,n,o,s,l){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let d=[i[0],i[1]];return ir.computeShapeHelper(t,i,d,r,n,o,s,l),d}static computeConvOutputShape(t,i,r,n,o,s,l){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],i[0]];return ir.computeShapeHelper(!1,t,d,r,n,o,s,l),d}static computeShapeHelper(t,i,r,n,o,s,l,d){if(t)for(let c=0;c<i.length-2;c++)r.push(1);else for(let c=0;c<i.length-2;c++)r.push(ir.adjustPadAndReturnShape(i[c+2],n[c],o[c],s[c],l,c,c+i.length-2,d))}static adjustPadAndReturnShape(t,i,r,n,o,s,l,d){let c=r*(n-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return o[s]=0,o[l]=0,Math.floor((t-c)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+i-1)/i-1)*i+n-t;return o[s]=Math.floor(d==="SAME_LOWER"?(m+1)/2:m/2),o[l]=m-o[s],Math.floor((t+m-n)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[s]+o[l]-c)/i+1)}},gp=class{static getShapeOfGemmResult(e,t,i,r,n){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let o,s,l;t?(o=e[1],s=e[0]):(o=e[0],s=e[1]);let d=-1;if(r?(l=i[0],d=1):(l=i[1],d=0),i[d]!==s)throw new Error("dimension mismatch");if(o<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Dt.isValidBroadcast(n,[o,l]))throw new Error("gemm: invalid bias shape for broadcast");return[o,l,s]}},yp=-34028234663852886e22,_p=34028234663852886e22}),Pt,Tr,Ce,Ae,Z,be,ca,Nt,mt,Q,Qt,M,K,wp,Pa,zo,bp,ue=q(()=>{ee(),se(),Pt=64,Tr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ce=(e,t=1)=>{let i=Tr(e,t);return typeof i=="string"?i:i[0]},Ae=(e,t=1)=>{let i=Tr(e,t);return typeof i=="string"?i:i[1]},Z=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:O.computeStrides(i)})}),t},be=e=>e%4===0?4:e%2===0?2:1,ca=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,Nt=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,mt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Q=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,Qt=(e,t,i,r,n)=>{let o=typeof i=="number",s=o?i:i.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,c=Tr(t,n),m=typeof c=="string"?c:c[1],g=typeof c=="string"?c:c[0],y={indices:d,value:m,storage:g,tensor:t},_=P=>typeof P=="string"?P:`${P}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=o?"uniforms.":"",k=`${$}${e}_shape`,v=`${$}${e}_strides`,b="";for(let P=0;P<s-1;P++)b+=`
    let dim${P} = current / ${Q(v,P,s)};
    let rest${P} = current % ${Q(v,P,s)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${y.indices} {
    var indices: ${y.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=P=>(w.offsetToIndices=!0,s<2?P:`o2i_${e}(${P})`),I=[];if(s>=2)for(let P=s-1;P>=0;P--)I.push(`${Q(v,P,s)} * (indices[${P}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${y.indices}) -> u32 {
    return ${I.join("+")};
  }`,z=P=>(w.indicesToOffset=!0,s<2?P:`i2o_${e}(${P})`),D=(...P)=>s===0?"0u":`${y.indices}(${P.map(_).join(",")})`,V=(P,L)=>s<2?`${P}`:`${Q(P,L,s)}`,H=(P,L,B)=>s<2?`${P}=${B};`:`${Q(P,L,s)}=${B};`,X={},te=(P,L)=>{w.broadcastedIndicesToOffset=!0;let B=`${L.name}broadcastedIndicesTo${e}Offset`;if(B in X)return`${B}(${P})`;let J=[];for(let ve=s-1;ve>=0;ve--){let Re=L.indicesGet("outputIndices",ve+L.rank-s);J.push(`${V(v,ve)} * (${Re} % ${V(k,ve)})`)}return X[B]=`fn ${B}(outputIndices: ${L.type.indices}) -> u32 {
             return ${J.length>0?J.join("+"):"0u"};
           }`,`${B}(${P})`},W=(P,L)=>(()=>{if(y.storage===y.value)return`${e}[${P}]=${L};`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${L}), 0u);`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),oe=P=>(()=>{if(y.storage===y.value)return`${e}[${P}]`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`i32(${e}[${P}].x)`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`u32(${e}[${P}].x)`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),de=s<2?"":`
  fn get_${e}ByIndices(indices: ${y.indices}) -> ${m} {
    return ${oe(`i2o_${e}(indices)`)};
  }`,F=s<2?"":(()=>{let P=l.map(B=>`d${B}: u32`).join(", "),L=l.map(B=>`d${B}`).join(", ");return`
  fn get_${e}(${P}) -> ${m} {
    return get_${e}ByIndices(${D(L)});
  }`})(),le=(...P)=>{if(P.length!==s)throw new Error(`indices length must be ${s}`);let L=P.map(_).join(",");return s===0?oe("0u"):s===1?oe(L[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${L})`)},pe=P=>s<2?oe(P):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${P})`),j=s<2?"":`
  fn set_${e}ByIndices(indices: ${y.indices}, value: ${m}) {
    ${W(`i2o_${e}(indices)`,"value")}
  }`,ce=s<2?"":(()=>{let P=l.map(B=>`d${B}: u32`).join(", "),L=l.map(B=>`d${B}`).join(", ");return`
  fn set_${e}(${P}, value: ${m}) {
    set_${e}ByIndices(${D(L)}, value);
  }`})();return{impl:()=>{let P=[],L=!1;return w.offsetToIndices&&(P.push(S),L=!0),w.indicesToOffset&&(P.push(A),L=!0),w.broadcastedIndicesToOffset&&(Object.values(X).forEach(B=>P.push(B)),L=!0),w.set&&(P.push(ce),L=!0),w.setByIndices&&(P.push(j),L=!0),w.get&&(P.push(F),L=!0),w.getByIndices&&(P.push(de),L=!0),!o&&L&&P.unshift(`const ${k} = ${y.indices}(${i.join(",")});`,`const ${v} = ${y.indices}(${O.computeStrides(i).join(",")});`),P.join(`
`)},type:y,offsetToIndices:T,indicesToOffset:z,broadcastedIndicesToOffset:te,indices:D,indicesGet:V,indicesSet:H,set:(...P)=>{if(P.length!==s+1)throw new Error(`indices length must be ${s}`);let L=P[s];if(typeof L!="string")throw new Error("value must be string");let B=P.slice(0,s).map(_).join(",");return s===0?W("0u",L):s===1?W(B[0],L):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${B}, ${L})`)},setByOffset:W,setByIndices:(P,L)=>s<2?W(P,L):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${L});`),get:le,getByOffset:oe,getByIndices:pe,usage:r,name:e,strides:v,shape:k,rank:s}},M=(e,t,i,r=1)=>Qt(e,t,i,"input",r),K=(e,t,i,r=1)=>Qt(e,t,i,"output",r),wp=(e,t,i)=>Qt(e,t,i,"atomicOutput",1),Pa=(e,t,i,r=1)=>Qt(e,t,i,"internal",r),zo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pt){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${r})
  fn main(${o}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:r}of this.uniforms)if(r&&r>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(r/4)}>`);else{let n=r==null||r===1?i:`vec${r}<${i}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},bp=(e,t)=>new zo(e,t)}),Ao,zi,Oo,Ro,Bo,Mo,De,$p,vp,gt=q(()=>{ee(),se(),$e(),ue(),Ao=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},zi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Oo=(e,t)=>O.sortBasedOnPerm(e,zi(e.length,t)),Ro=(e,t,i,r)=>{let n=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let o=0;o<t;++o)n+=`a[${e[o]}]=i[${o}];`;return n+="return a;}"},Bo=(e,t)=>{let i=[],r=[];for(let n=0;n<e.length;++n)e[n]!==1&&i.push(e[n]),e[t[n]]!==1&&r.push(t[n]);return{newShape:i,newPerm:r}},Mo=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},De=(e,t)=>{let i=e.dataType,r=e.dims.length,n=zi(r,t),o=Oo(e.dims,n),s=e.dims,l=o,d=r<2||Mo(n,e.dims),c;if(d)return c=w=>{let $=M("input",i,s,4),k=K("output",i,l,4);return`
  ${w.registerUniform("output_size","u32").declareVariables($,k)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:c};let{newShape:m,newPerm:g}=Bo(e.dims,n),y=O.areEqual(g,[2,3,1]),_=O.areEqual(g,[3,1,2]);if(m.length===2||y||_){s=y?[m[0],m[1]*m[2]]:_?[m[0]*m[1],m[2]]:m,l=[s[1],s[0]];let w=16;return c=$=>{let k=M("a",i,s.length),v=K("output",i,l.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(k,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${w+1}>, ${w}>;
  ${$.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/w),y:Math.ceil(l[0]/w)},programUniforms:[{type:12,data:$},...Z(s,l)]}},getShaderSource:c}}return c=w=>{let $=M("a",i,s.length),k=K("output",i,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables($,k)}

  ${Ro(n,r,$,k)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...Z(s,l)]}},getShaderSource:c}},$p=(e,t)=>{Ao(e.inputs,t.perm),e.compute(De(e.inputs[0],t.perm))},vp=e=>ge({perm:e.perm})}),No,Do,Po,Uo,Wo,qo,Vo,Lo,Go,Ho,Ve,xp,kp,Sp,Tp,Cp,Ip,Ep,zp,Ap,Op,hy=q(()=>{ee(),se(),ue(),Ua(),gt(),No={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Do={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Po={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Uo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Wo=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},qo=(e,t)=>{let i=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&i.push(e[o]);let n=t.map(o=>e[o]);return[i,n]},Vo=(e,t)=>{let i=e.length+t.length,r=[],n=0;for(let o=0;o<i;o++)t.indexOf(o)===-1?r.push(e[n++]):r.push(1);return r},Lo=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},Go=(e,t)=>{let i=[];if(!Lo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},Ho=(e,t,i,r,n,o,s)=>{let l=i[0].dims,d=O.size(o),c=O.size(s),m=M("_A",i[0].dataType,l),g=K("output",n,o),y=64;d===1&&(y=256);let _=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,w=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(m,g)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Po[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${No[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Do[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${r==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${Uo[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${y}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:d},programUniforms:[{type:12,data:c}]})}},Ve=(e,t,i,r)=>{let n=e.inputs.length===1?i:ha(e.inputs,i),o=n.axes;o.length===0&&!n.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((_,w)=>w));let s=O.normalizeAxes(o,e.inputs[0].dims.length),l=s,d=e.inputs[0],c=Go(l,e.inputs[0].dims.length);c.length>0&&(d=e.compute(De(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],l=Wo(l.length,d.dims.length));let[m,g]=qo(d.dims,l),y=m;n.keepDims&&(y=Vo(m,s)),e.compute(Ho(t,n.cacheKey,[d],r,e.inputs[0].dataType,y,g),{inputs:[d]})},xp=(e,t)=>{Ve(e,"ReduceMeanShared",t,"mean")},kp=(e,t)=>{Ve(e,"ReduceL1Shared",t,"l1")},Sp=(e,t)=>{Ve(e,"ReduceL2Shared",t,"l2")},Tp=(e,t)=>{Ve(e,"ReduceLogSumExpShared",t,"logSumExp")},Cp=(e,t)=>{Ve(e,"ReduceMaxShared",t,"max")},Ip=(e,t)=>{Ve(e,"ReduceMinShared",t,"min")},Ep=(e,t)=>{Ve(e,"ReduceProdShared",t,"prod")},zp=(e,t)=>{Ve(e,"ReduceSumShared",t,"sum")},Ap=(e,t)=>{Ve(e,"ReduceSumSquareShared",t,"sumSquare")},Op=(e,t)=>{Ve(e,"ReduceLogSumShared",t,"logSum")}}),Le,Fo,Lr,ha,Ge,jo,Ko,Qo,Zo,Xo,Yo,Jo,eu,tu,ru,He,Rp,Bp,Mp,Np,Dp,Pp,Up,Wp,qp,Vp,Ua=q(()=>{ee(),se(),$e(),ue(),hy(),Le=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Fo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Lr=(e,t,i,r,n,o,s=!1,l=!1)=>{let d=[],c=i[0].dims,m=c.length,g=O.normalizeAxes(n,m),y=!l&&g.length===0;c.forEach(($,k)=>{y||g.indexOf(k)>=0?s&&d.push(1):d.push($)});let _=d.length,w=O.size(d);return{name:e,shaderCache:t,getShaderSource:$=>{let k=[],v=M("_A",i[0].dataType,m),b=K("output",o,_),S=r(v,b,g),T=S[2];for(let I=0,A=0;I<m;I++)y||g.indexOf(I)>=0?(s&&A++,T=`for(var j${I}: u32 = 0; j${I} < ${c[I]}; j${I}++) {
                  ${S[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${T}
                }`):(k.push(`${v.indicesSet("input_indices",I,b.indicesGet("output_indices",A))};`),A++);return`

        ${$.registerUniform("output_size","u32").declareVariables(v,b)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${T}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...Z(c,d)]})}},ha=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),ge({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ge=(e,t,i,r)=>{let n=e.inputs,o=n.length===1?i:ha(n,i);e.compute(Lr(t,{hint:o.cacheKey,inputDependencies:["rank"]},[n[0]],o.noopWithEmptyAxes&&o.axes.length===0?Fo:r,o.axes,n[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},jo=(e,t)=>{Le(e.inputs),Ge(e,"ReduceLogSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Ko=(e,t)=>{Le(e.inputs),Ge(e,"ReduceL1",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},Qo=(e,t)=>{Le(e.inputs),Ge(e,"ReduceL2",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Zo=(e,t)=>{Le(e.inputs),Ge(e,"ReduceLogSumExp",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},Xo=(e,t)=>{Le(e.inputs),Ge(e,"ReduceMax",t,(i,r,n)=>{let o=[];for(let s=0;s<i.rank;s++)(n.indexOf(s)>=0||n.length===0)&&o.push(i.indicesSet("input_indices",s,0));return[`${o.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},Yo=(e,t)=>{Le(e.inputs),Ge(e,"ReduceMean",t,(i,r,n)=>{let o=1;for(let s=0;s<i.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(o*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},Jo=(e,t)=>{Le(e.inputs),Ge(e,"ReduceMin",t,(i,r,n)=>{let o=[];for(let s=0;s<i.rank;s++)(n.indexOf(s)>=0||n.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},eu=(e,t)=>{Le(e.inputs),Ge(e,"ReduceProd",t,(i,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},tu=(e,t)=>{Le(e.inputs),Ge(e,"ReduceSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},ru=(e,t)=>{Le(e.inputs),Ge(e,"ReduceSumSquare",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,i)=>{if(t.length===0)return i;let r=1,n=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:n*=e[o];return n<32&&r>1024},Rp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yo(e,t):xp(e,t)},Bp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ko(e,t):kp(e,t)},Mp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qo(e,t):Sp(e,t)},Np=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zo(e,t):Tp(e,t)},Dp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xo(e,t):Cp(e,t)},Pp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):Ip(e,t)},Up=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eu(e,t):Ep(e,t)},Wp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tu(e,t):zp(e,t)},qp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ru(e,t):Ap(e,t)},Vp=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jo(e,t):Op(e,t)}}),Ai,Lp,Gp,fa,fy=q(()=>{ee(),$e(),Ua(),Ai=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Lp=(e,t)=>{Ai(e.inputs);let i=(r,n,o)=>{let s=[];for(let l=0;l<r.rank;l++)(o.indexOf(l)>=0||o.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Lr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Gp=(e,t)=>{Ai(e.inputs);let i=(r,n,o)=>{let s=[];for(let l=0;l<r.rank;l++)(o.indexOf(l)>=0||o.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Lr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},fa=e=>ge(e)}),iu,Cr,au,nu,su,or,ou,Hp,Wa=q(()=>{ee(),se(),Da(),ue(),iu=(e,t)=>{let i=e[0],r=e[1],n=e[2],o=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=i.dims[0],c=i.dims[1],m=i.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=n.dims[0]/3,y=g,_=y;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],y=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=c;if(g!==y)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==g+y+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(y!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==y/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let k=w+$,v=-1,b=0;if(o)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==c||l.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:k,maxSequenceLength:v,inputHiddenSize:m,hiddenSize:g,vHiddenSize:_,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Cr=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,au=(e,t,i,r,n,o,s,l)=>{let d=be(s?1:o),c=64,m=o/d;m<c&&(c=32);let g=Math.ceil(o/d/c),y=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:n},{type:12,data:m},{type:12,data:g}],_=Ce(e.dataType,d),w=Ae(1,d),$=["type"];s&&$.push("type"),l&&$.push("type");let k=v=>{let b=K("x",e.dataType,e.dims,d),S=[b],T=s?M("seq_lens",s.dataType,s.dims):void 0;T&&S.push(T);let I=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;I&&S.push(I);let A=Ae(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${c}>;
  var<workgroup> thread_sum: array<f32, ${c}>;
  ${v.registerUniforms(z).declareVariables(...S)}
  ${v.mainStart([c,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Cr(T,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${c}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${c}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${c}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${c};${_};${d}`,inputDependencies:$},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(o/c),y:n,z:t*i},programUniforms:y})}},nu=(e,t,i,r,n,o,s,l,d)=>{let c=s+o.kvSequenceLength,m=[o.batchSize,o.numHeads,o.sequenceLength,c],g=e>1&&r,y=o.kvNumHeads?o.kvNumHeads:o.numHeads,_=g?[o.batchSize,y,c,o.headSize]:void 0,w=o.nReps?o.nReps:1,$=o.scale===0?1/Math.sqrt(o.headSize):o.scale,k=be(o.headSize),v=o.headSize/k,b=12,S={x:Math.ceil(c/b),y:Math.ceil(o.sequenceLength/b),z:o.batchSize*o.numHeads},T=[{type:12,data:o.sequenceLength},{type:12,data:v},{type:12,data:c},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:o.kvSequenceLength},{type:12,data:w}],I=g&&r&&O.size(r.dims)>0,A=["type","type"];I&&A.push("type"),n&&A.push("type"),l&&A.push("type"),d&&A.push("type");let z=[{dims:m,dataType:t.dataType,gpuDataType:0}];g&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let D=V=>{let H=M("q",t.dataType,t.dims,k),X=M("key",i.dataType,i.dims,k),te=[H,X];if(I){let j=M("past_key",r.dataType,r.dims,k);te.push(j)}n&&te.push(M("attention_bias",n.dataType,n.dims));let W=l?M("seq_lens",l.dataType,l.dims):void 0;W&&te.push(W);let oe=d?M("total_sequence_length_input",d.dataType,d.dims):void 0;oe&&te.push(oe);let de=K("output",t.dataType,m),F=[de];g&&F.push(K("present_key",t.dataType,_,k));let le=Ae(1,k),pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${H.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${H.type.storage}, ${b*b}>;
  ${V.registerUniforms(pe).declareVariables(...te,...F)}
  ${V.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Cr(W,oe,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${le}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${le}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${de.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${n!==void 0};${r!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:z,dispatchGroup:S,programUniforms:T}),getShaderSource:D}},su=(e,t,i,r,n,o,s=void 0,l=void 0)=>{let d=o+n.kvSequenceLength,c=n.nReps?n.nReps:1,m=n.vHiddenSize*c,g=e>1&&r,y=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=g?[n.batchSize,y,d,n.headSize]:void 0,w=[n.batchSize,n.sequenceLength,m],$=12,k={x:Math.ceil(n.vHeadSize/$),y:Math.ceil(n.sequenceLength/$),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:d},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:m},{type:12,data:o},{type:12,data:n.kvSequenceLength},{type:12,data:c}],b=g&&r&&O.size(r.dims)>0,S=["type","type"];b&&S.push("type"),s&&S.push("type"),l&&S.push("type");let T=[{dims:w,dataType:t.dataType,gpuDataType:0}];g&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=A=>{let z=M("probs",t.dataType,t.dims),D=M("v",i.dataType,i.dims),V=[z,D];b&&V.push(M("past_value",r.dataType,r.dims));let H=s?M("seq_lens",s.dataType,s.dims):void 0;s&&V.push(H);let X=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;l&&V.push(X);let te=[K("output",t.dataType,w)];g&&te.push(K("present_value",t.dataType,_));let W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${z.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${z.type.value}, ${$*$}>;
  ${A.registerUniforms(W).declareVariables(...V,...te)}
  ${A.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${c===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${c===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Cr(H,X,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:T,dispatchGroup:k,programUniforms:v}),getShaderSource:I}},or=(e,t,i,r,n,o,s,l,d,c,m=void 0,g=void 0)=>{let y=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),_=y>1?c.pastSequenceLength:0,w=_+c.kvSequenceLength,$=d&&O.size(d.dims)>0?d:void 0,k=[t,i];y>1&&s&&O.size(s.dims)>0&&k.push(s),$&&k.push($),m&&k.push(m),g&&k.push(g);let v=e.compute(nu(y,t,i,s,$,c,_,m,g),{inputs:k,outputs:y>1?[-1,1]:[-1]})[0];e.compute(au(v,c.batchSize,c.numHeads,_,c.sequenceLength,w,m,g),{inputs:m&&g?[v,m,g]:[v],outputs:[]});let b=[v,r];y>1&&l&&O.size(l.dims)>0&&b.push(l),m&&b.push(m),g&&b.push(g),e.compute(su(y,v,r,l,c,_,m,g),{inputs:b,outputs:y>1?[0,2]:[0]})},ou=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,n=t.inputHiddenSize,o=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:n},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],m=g=>{let y=K("output_q",d[0].dataType,i),_=K("output_k",d[0].dataType,i),w=K("output_v",d[0].dataType,i),$=M("input",d[0].dataType,d[0].dims),k=M("weight",d[1].dataType,d[1].dims),v=M("bias",d[2].dataType,d[2].dims),b=$.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${g.registerUniforms(S).declareVariables($,k,v,y,_,w)}
  ${g.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:c}),getShaderSource:m},{inputs:d,outputs:[-1,-1,-1]})},Hp=(e,t)=>{let i=iu(e.inputs,t),[r,n,o]=ou(e,i);return or(e,r,n,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),uu,lu,du,Fp,my=q(()=>{Qe(),ee(),se(),$e(),ue(),uu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,n,o)=>{let s=n.length;if(s!==r.length)throw new Error(`${o}: num dimensions != ${s}`);n.forEach((l,d)=>{if(l!==r[d])throw new Error(`${o}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},lu=(e,t)=>{let{epsilon:i,spatial:r,format:n}=t,o=e[0].dims,s=r?be(o[o.length-1]):1,l=n==="NHWC"&&o.length>1?s:1,d=O.size(o)/s,c=r,m=c?o.length:o,g=M("x",e[0].dataType,e[0].dims,s),y=M("scale",e[1].dataType,e[1].dims,l),_=M("bias",e[2].dataType,e[2].dims,l),w=M("inputMean",e[3].dataType,e[3].dims,l),$=M("inputVar",e[4].dataType,e[4].dims,l),k=K("y",e[0].dataType,m,s),v=()=>{let S="";if(r)S=`let cOffset = ${o.length===1?"0u":n==="NHWC"?`outputIndices[${o.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")S=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${y.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let T=1;T<y.rank;T++)S+=`cIndices[${T}] = outputIndices[${T}];`;S+=`let cOffset = ${y.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${i};
  ${S.registerUniform("outputSize","u32").declareVariables(g,y,_,w,$,k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${y.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c?[{type:12,data:d},...Z(o)]:[{type:12,data:d}]})}},du=e=>ge(e),Fp=(e,t)=>{let{inputs:i,outputCount:r}=e,n=du({...t,outputCount:r});if(ye.webgpu.validateInputContent&&uu(i,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(lu(i,n))}}),pu,cu,jp,gy=q(()=>{se(),ue(),pu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},cu=e=>{let t=e[0].dims,i=e[0].dims[2],r=O.size(t)/4,n=e[0].dataType,o=M("input",n,t,4),s=M("bias",n,[i],4),l=M("residual",n,t,4),d=K("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:c=>`
  const channels = ${i}u / 4;
  ${c.declareVariables(o,s,l,d)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},jp=e=>{pu(e.inputs),e.compute(cu(e.inputs))}}),hu,fe,Kp,Qp,Zp,Xp,Yp,Jp,ec,tc,rc,fu,ic,ac,nc,sc,ar,oc,Dr,uc,lc,dc,pc,cc,hc,fc,mc,gc,yc,_c,wc,bc,$c,vc,xc,Oi,kc,ma,ga,Sc,Tc,Cc,mu,gu,Ic,qa=q(()=>{ee(),se(),$e(),ue(),hu=(e,t,i,r,n,o,s)=>{let l=Math.ceil(t/4),d="";typeof n=="string"?d=`${n}(a)`:d=n("a");let c=M("inputData",i,[l],4),m=K("outputData",r,[l],4),g=[{name:"vec_size",type:"u32"}];return s&&g.push(...s),`
      ${e.registerUniforms(g).declareVariables(c,m)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",d)}
  }`},fe=(e,t,i,r,n,o=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:c=>hu(c,O.size(e.dims),e.dataType,o,i,r,l),getRunData:c=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(O.size(c[0].dims)/64/4)},programUniforms:d})}},Kp=e=>{e.compute(fe(e.inputs[0],"Abs","abs"))},Qp=e=>{e.compute(fe(e.inputs[0],"Acos","acos"))},Zp=e=>{e.compute(fe(e.inputs[0],"Acosh","acosh"))},Xp=e=>{e.compute(fe(e.inputs[0],"Asin","asin"))},Yp=e=>{e.compute(fe(e.inputs[0],"Asinh","asinh"))},Jp=e=>{e.compute(fe(e.inputs[0],"Atan","atan"))},ec=e=>{e.compute(fe(e.inputs[0],"Atanh","atanh"))},tc=e=>ge(e),rc=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fe(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},fu=e=>{let t,i,r=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ge({min:t,max:i})},ic=(e,t)=>{let i=t||fu(e.inputs),r=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},ac=e=>{e.compute(fe(e.inputs[0],"Ceil","ceil"))},nc=e=>{e.compute(fe(e.inputs[0],"Cos","cos"))},sc=e=>{e.compute(fe(e.inputs[0],"Cosh","cosh"))},ar=e=>ge(e),oc=(e,t)=>{let i=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Dr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,uc=e=>{let t=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Dr(t)))},lc=e=>{e.compute(fe(e.inputs[0],"Exp","exp"))},dc=e=>{e.compute(fe(e.inputs[0],"Floor","floor"))},pc=e=>{let t=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Dr(t)))},cc=(e,t)=>{let i=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},hc=e=>{e.compute(fe(e.inputs[0],"Not",t=>`!${t}`))},fc=e=>{e.compute(fe(e.inputs[0],"Neg",t=>`-${t}`))},mc=e=>{e.compute(fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},gc=e=>{let t=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},yc=e=>{e.compute(fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},_c=e=>ge(e),wc=(e,t)=>{let i=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},bc=e=>{e.compute(fe(e.inputs[0],"Sin","sin"))},$c=e=>{e.compute(fe(e.inputs[0],"Sinh","sinh"))},vc=e=>{e.compute(fe(e.inputs[0],"Sqrt","sqrt"))},xc=e=>{e.compute(fe(e.inputs[0],"Tan","tan"))},Oi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,kc=e=>{e.compute(fe(e.inputs[0],"Tanh",Oi))},ma=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Oi("v")};
}
`,ga=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Sc=e=>{let t=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"FastGelu",ga,ma(t),void 0,e.inputs[0].dataType))},Tc=(e,t)=>{let i=Ae(e.inputs[0].dataType);return e.compute(fe(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},Cc=e=>{e.compute(fe(e.inputs[0],"Log","log"))},mu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,gu=e=>`quick_gelu_impl(${e})`,Ic=(e,t)=>{let i=Ae(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"QuickGelu",gu,mu(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),yu,_u,Ec,yy=q(()=>{se(),ue(),qa(),yu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_u=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=M("input",e[0].dataType,e[0].dims,4),r=M("bias",e[0].dataType,[e[0].dims[2]],4),n=K("output",e[0].dataType,t,4),o=O.size(t)/4,s=Ce(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(i,r,n)}

  ${Dr(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ec=e=>{yu(e.inputs),e.compute(_u(e.inputs))}}),wu,bu,Fe,zc,Ac,Oc,Rc,Bc,Mc,Nc,Dc,Pc,Uc,_y=q(()=>{ee(),se(),ue(),wu=(e,t,i,r,n,o,s,l,d,c,m,g)=>{let y,_;typeof l=="string"?y=_=(b,S)=>`${l}((${b}),(${S}))`:typeof l=="function"?y=_=l:(y=l.scalar,_=l.vector);let w=K("outputData",m,r.length,4),$=M("aData",d,t.length,4),k=M("bData",c,i.length,4),v;if(n)if(o){let b=O.size(t)===1,S=O.size(i)===1,T=t.length>0&&t[t.length-1]%4===0,I=i.length>0&&i[i.length-1]%4===0;b||S?v=w.setByOffset("global_idx",_(b?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),S?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):v=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(s||T?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=w.setByOffset("global_idx",_($.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,T,I="")=>{let A=`aData[indexA${T}][componentA${T}]`,z=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${w.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${$.broadcastedIndicesToOffset(`outputIndices${T}`,w)};
            let offsetB${T} = ${k.broadcastedIndicesToOffset(`outputIndices${T}`,w)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${S}[${T}] = ${I}(${y(A,z)});
          `};m===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,k,w)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},bu=(e,t,i,r,n,o,s=i.dataType)=>{let l=i.dims.map($=>Number($)??1),d=r.dims.map($=>Number($)??1),c=!O.areEqual(l,d),m=l,g=O.size(l),y=!1,_=!1,w=[c];if(c){let $=Dt.calcShape(l,d,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");m=$.slice(),g=O.size(m);let k=O.size(l)===1,v=O.size(d)===1,b=l.length>0&&l[l.length-1]%4===0,S=d.length>0&&d[d.length-1]%4===0;w.push(k),w.push(v),w.push(b),w.push(S);let T=1;for(let I=1;I<m.length;I++){let A=l[l.length-I],z=d[d.length-I];if(A===z)T*=A;else break}T%4===0?(_=!0,y=!0):(k||v||b||S)&&(y=!0)}else y=!0;return w.push(y),{name:e,shaderCache:{hint:t+w.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>wu($,l,d,m,y,c,_,n,i.dataType,r.dataType,s,o),getRunData:()=>({outputs:[{dims:m,dataType:s}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(m)/4)},...Z(l,d,m)]})}},Fe=(e,t,i,r,n,o)=>{e.compute(bu(t,n??"",e.inputs[0],e.inputs[1],i,r,o))},zc=e=>{Fe(e,"Add",(t,i)=>`${t}+${i}`)},Ac=e=>{Fe(e,"Div",(t,i)=>`${t}/${i}`)},Oc=e=>{Fe(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},Rc=e=>{Fe(e,"Mul",(t,i)=>`${t}*${i}`)},Bc=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Fe(e,"Pow",{scalar:(i,r)=>`pow_custom(${i},${r})`,vector:(i,r)=>`pow_vector_custom(${i},${r})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Mc=e=>{Fe(e,"Sub",(t,i)=>`${t}-${i}`)},Nc=e=>{Fe(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},Dc=e=>{Fe(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},Pc=e=>{Fe(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},Uc=e=>{Fe(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),$u,vu,xu,ku,Wc,qc,wy=q(()=>{ee(),se(),$e(),ue(),$u=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],n=r.dataType,o=r.dims.length;e.forEach((s,l)=>{if(l!==i){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==o)throw new Error("input tensors should have the same shape");s.dims.forEach((d,c)=>{if(c!==t&&d!==r.dims[c])throw new Error("non concat dimensions must match")})}})},vu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,xu=(e,t)=>{let i=e.length,r=[];for(let n=0;n<i;++n){let o=t.setByOffset("global_idx",e[n].getByIndices("indices"));i===1?r.push(o):n===0?r.push(`if (inputIndex == ${n}u) { ${o} }`):n===i-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${n}) { ${o} }`)}return r.join(`
`)},ku=(e,t,i,r)=>{let n=O.size(i),o=new Array(e.length),s=new Array(e.length),l=0,d=[],c=[],m=[{type:12,data:n}];for(let $=0;$<e.length;++$)l+=e[$].dims[t],o[$]=l,c.push(e[$].dims.length),s[$]=M(`input${$}`,r,c[$]),d.push("rank"),m.push({type:12,data:o[$]});for(let $=0;$<e.length;++$)m.push(...Z(e[$].dims));m.push(...Z(i));let g=K("output",r,i.length),y=g.indicesGet("indices",t),_=Array.from(Array(o.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),w=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)$.registerUniform(`sizeInConcatAxis${k}`,"u32");return $.declareVariables(...s,g)})()}

  ${vu(o.length,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${y});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${_});
      ${y} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${xu(s,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m}),getShaderSource:w}},Wc=(e,t)=>{let i=e.inputs,r=i[0].dims,n=O.normalizeAxis(t.axis,r.length);$u(i,n);let o=r.slice();o[n]=i.reduce((l,d)=>l+(d.dims.length>n?d.dims[n]:0),0);let s=i.filter(l=>O.size(l.dims)>0);e.compute(ku(s,n,o,i[0].dataType),{inputs:s})},qc=e=>ge({axis:e.axis})}),Tt,Ct,It,Va,zt=q(()=>{ee(),se(),Tt=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ct=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},It=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Va=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[i,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=e?.activation_params||[yp,_p];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=e?.activation_params||[.01];return{activation:t,alpha:i}}return{activation:t}}}),Ee,Vc,La=q(()=>{Ee=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Vc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Lc,by=q(()=>{Lc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),sr,Ga,Ha=q(()=>{ee(),se(),ue(),zt(),sr=(e,t,i,r,n)=>{let o=r-i;return`
      ${Array.from({length:i}).map((s,l)=>`
      if (${Q(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,Q(n,l+o,r))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Ga=(e,t,i,r,n=!1,o)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],c=l[l.length-1],m=s[s.length-1],g=be(c),y=be(m),_=be(d),w=O.size(i)/g/_,$=e.length>2,k=r?r.slice(0,-2):i.slice(0,-2),v=[O.size(k),d,c],b=[{type:12,data:w},{type:12,data:d},{type:12,data:c},{type:12,data:m}];Ct(t,b),b.push(...Z(k,s,l)),$&&b.push(...Z(e[2].dims)),b.push(...Z(v));let S=T=>{let I=Pa("batch_dims",e[0].dataType,k.length),A=M("a",e[0].dataType,s.length,y),z=M("b",e[1].dataType,l.length,g),D=K("output",e[0].dataType,v.length,g),V=Ce(D.type.tensor),H=Tt(t,D.type.value,V),X=[A,z],te="";if($){let de=n?g:1;X.push(M("bias",e[2].dataType,e[2].dims.length,de)),te=`${n?`value += bias[col / ${de}];`:`value += ${D.type.value}(bias[row + i]);`}`}let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];It(t,W);let oe=()=>{let de=`var a_data: ${A.type.value};`;for(let F=0;F<y;F++)de+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${g}];`;for(let F=0;F<_;F++){de+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${y}];`;for(let le=0;le<y;le++)de+=`
            values[${F}] = fma(${z.type.value}(a_data${y===1?"":`[${le}]`}), b_data${le}, values[${F}]);
`}return de};return`
  ${T.registerUniforms(W).registerInternalVariables(I).declareVariables(...X,D)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${sr("a_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${sr("b_indices",z,z.rank-2,I.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${D.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${y}) {
      ${oe()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${te}
      ${H}
      let cur_indices = ${D.type.indices}(batch, row + i, col);
      let offset = ${D.indicesToOffset("cur_indices")};
      ${D.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${y};${_};${n}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:b}),getShaderSource:S}}}),Su,Tu,ya,Ri,Cu,_a,Iu,Gr,Fa=q(()=>{ee(),se(),ue(),zt(),Ha(),La(),Su=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Tu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ya=(e,t,i="f32",r,n=!1,o=32,s=!1,l=32)=>{let d=t[1]*e[1],c=t[0]*e[0],m=n?d:o,g=n?o:d,y=m/t[0],_=o/t[1];if(!((n&&y===4&&e[1]===4||!n&&(y===3||y===4))&&m%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${y} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${i}>, ${m/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${c/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${y};
const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Su(n,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${y===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Tu(n,y)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ri=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Cu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",_a=(e,t,i="f32",r,n=!1,o=32,s=!1,l=32,d=!1)=>{let c=e[1]*t[1],m=e[0]*t[0],g=n?c:o,y=n?o:c;if(!(y%t[1]===0&&g%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${y} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let _=y/t[1],w=g/t[0],$=o/t[1],k=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${y}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${Ri(n,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${c};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ri(n,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Cu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${g}>, ${y}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${m}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${k}
  }
`},Iu=(e,t,i,r,n=!1)=>{let[o,s,l,d]=r,c=Ce(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Ee(e,c)} {
      var value = ${Ee(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${sr("aIndices",s,s.rank-2,o.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Ee(e,c)} {
      var value = ${Ee(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${sr("bIndices",l,l.rank-2,o.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ee(e,c)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ee(e,c)}(bias[row])`};`:""}
        ${i}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Gr=(e,t,i,r,n=!1,o)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),c=l.slice(0,-2),m=r?r.slice(0,-2):i.slice(0,-2),g=O.size(m),y=s[s.length-2],_=s[s.length-1],w=l[l.length-1],$=_%4===0&&w%4===0,k=y<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(w/v[0]/k[0]),Math.ceil(y/v[1]/k[1]),Math.ceil(g/v[2]/k[2])],S=$?4:1,T=[...d,y,_/S],I=T.length,A=[...c,_,w/S],z=A.length,D=[g,y,w/S],V=[{type:6,data:y},{type:6,data:w},{type:6,data:_}];Ct(t,V),V.push(...Z(m,T,A));let H=["rank","rank"],X=e.length>2;X&&(V.push(...Z(e[2].dims)),H.push("rank")),V.push(...Z(D));let te=W=>{let oe=m.length,de=Pa("batchDims",e[0].dataType,oe,1),F=Ce(e[0].dataType),le=M("a",e[0].dataType,I,S),pe=M("b",e[1].dataType,z,S),j=K("result",e[0].dataType,D.length,S),ce=[le,pe];if(X){let ve=n?S:1;ce.push(M("bias",e[2].dataType,e[2].dims.length,ve))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];It(t,P);let L=Ce(j.type.tensor),B=Tt(t,j.type.value,L),J=Iu(S,X,B,[de,le,pe,j],n);return`
  ${W.registerUniforms(P).registerInternalVariables(de).declareVariables(...ce,j)}
  ${J}
  ${$?ya(k,v,F,de):_a(k,v,F,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${$};${n}`,inputDependencies:H},getRunData:()=>({outputs:[{dims:o?o(i):i,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:V}),getShaderSource:te}}}),Eu,Gc,$y=q(()=>{ee(),st(),ue(),zt(),La(),by(),Fa(),Eu=(e,t,i,r,n=!1,o,s=4,l=4,d=4,c="f32")=>{let m=V=>{switch(V){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},g=V=>{switch(V){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},y=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ee(s,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${$}) {
      ${y}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(s)}
    }
    return resData;`,S=e?t&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ee(s,c)}(0.0);`:r&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ee(s,c)}(0.0);`,T=e?r&&i?g(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(l)}
    }
    return ${Ee(l,c)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(l)}
    }
    return ${Ee(l,c)}(0.0);`,I=Ee(d,c),A=Ee(e?s:l,c),z=Ee(e?l:s,c),D=Tt(o,I,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?S:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Vc(n)}
      ${D}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Gc=(e,t,i,r,n,o,s,l,d)=>{let c=t.format==="NHWC",m=c?e[0].dims[3]:e[0].dims[1],g=i[0],y=c?i[2]:i[3],_=c?i[1]:i[2],w=c?i[3]:i[1],$=c&&(m%4===0||m%3===0)&&w%4===0,k=c?w:y*_,v=c?y*_:w,b=[8,8,1],S=r<=8?[4,1,1]:[4,4,1],T=[Math.ceil(k/b[0]/S[0]),Math.ceil(v/b[1]/S[1]),Math.ceil(g/b[2]/S[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let I=$?c&&m%4!==0?3:4:1,A=b[1]*S[1],z=b[0]*S[0],D=Math.max(b[0]*I,b[1]),V=r%A===0,H=n%z===0,X=o%D===0,te=$?[I,4,4]:[1,1,1],W=[{type:6,data:r},{type:6,data:n},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ct(t,W),W.push(...Z(e[0].dims,e[1].dims));let oe=["rank","rank"];s&&(W.push(...Z(e[2].dims)),oe.push("rank")),W.push(...Z(i));let de=F=>{let le=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];It(t,le);let pe=$?4:1,j=Ce(e[0].dataType),ce=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${j}>`:j}) {
        result[flatIndex] = ${$?`vec4<${j}>`:j}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${j}>`:j}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,P=M("x",e[0].dataType,e[0].dims.length,I===3?1:I),L=M("w",e[1].dataType,e[1].dims.length,pe),B=[P,L],J=K("result",e[0].dataType,i.length,pe);if(s){let ve=M("bias",e[2].dataType,e[2].dims.length,pe);B.push(ve),ce+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${j}>`:j} {
          return bias[coords.${c?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${Lc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(le).declareVariables(...B,J)}
        ${ce}
        ${Eu(c,V,H,X,s,t,te[0],te[1],te[2],j)}
        ${$?ya(S,b,j,void 0,!c,D):_a(S,b,j,void 0,!c,D,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${$};${V};${H};${X};${A};${z};${D}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:W}),getShaderSource:de}}}),zu,Bi,Zt,Au,Mi,Ou,Hc,Fc,vy=q(()=>{ee(),st(),se(),ue(),zt(),La(),zu=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},Bi=e=>typeof e=="number"?[e,e,e]:e,Zt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Au=(e,t,i,r=1)=>{let n=Zt(t,r);return Math.floor((e[0]*(i-1)-i+n)/2)},Mi=(e,t,i,r,n)=>{n==null&&(n=Au(e,t[0],r[0]));let o=[0,0,0,i];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(o[s]=Math.trunc((e[s]-t[s]+2*n)/r[s]+1));return o},Ou=(e,t,i,r,n,o,s,l,d,c)=>{let m,g,y,_;if(e==="VALID"&&(e=0),typeof e=="number"){m={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Mi([t,i,r,1],[l,d,c],1,[n,o,s],e);g=w[0],y=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every(($,k,v)=>$===v[0]))throw Error(`Unsupported padding parameter: ${e}`);m={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Mi([t,i,r,1],[l,d,c],1,[n,o,s],e[0]);g=w[0],y=w[1],_=w[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/n),y=Math.ceil(i/o),_=Math.ceil(r/s);let w=(g-1)*n+l-t,$=(y-1)*o+d-i,k=(_-1)*s+c-r,v=Math.floor(w/2),b=w-v,S=Math.floor($/2),T=$-S,I=Math.floor(k/2),A=k-I;m={top:S,bottom:T,left:I,right:A,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:m,outDepth:g,outHeight:y,outWidth:_}},Hc=(e,t,i,r,n,o=!1,s="channelsLast")=>{let l,d,c,m,g;if(s==="channelsLast")[l,d,c,m,g]=e;else if(s==="channelsFirst")[l,g,d,c,m]=e;else throw new Error(`Unknown dataFormat ${s}`);let[y,,_,w,$]=t,[k,v,b]=Bi(i),[S,T,I]=Bi(r),A=Zt(_,S),z=Zt(w,T),D=Zt($,I),{padInfo:V,outDepth:H,outHeight:X,outWidth:te}=Ou(n,d,c,m,k,v,b,A,z,D),W=o?y*g:y,oe=[0,0,0,0,0];return s==="channelsFirst"?oe=[l,W,H,X,te]:s==="channelsLast"&&(oe=[l,H,X,te,W]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:c,inWidth:m,inChannels:g,outDepth:H,outHeight:X,outWidth:te,outChannels:W,padInfo:V,strideDepth:k,strideHeight:v,strideWidth:b,filterDepth:_,filterHeight:w,filterWidth:$,effectiveFilterDepth:A,effectiveFilterHeight:z,effectiveFilterWidth:D,dilationDepth:S,dilationHeight:T,dilationWidth:I,inShape:e,outShape:oe,filterShape:t}},Fc=(e,t,i,r,n,o)=>{let s=o==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:i.map((k,v)=>v)},c=[Math.ceil(zu(d.x.map(k=>i[k]))/l[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let m=1,g=O.size(i),y=[{type:12,data:g},{type:12,data:r},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Ct(t,y),y.push(...Z(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(y.push(...Z(e[2].dims)),_.push("rank")),y.push(...Z(i));let $=k=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];It(t,v);let b=1,S=Ce(e[0].dataType),T=M("x",e[0].dataType,e[0].dims.length,m),I=M("W",e[1].dataType,e[1].dims.length,b),A=[T,I],z=K("result",e[0].dataType,i.length,b),D="";if(w){let X=M("bias",e[2].dataType,e[2].dims.length,b);A.push(X),D+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?Q("coords",4,5):Q("coords",1,5)}];
        }`}let V=Ee(m,S),H=Tt(t,V,S);return`
            ${D}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${k.registerUniforms(v).declareVariables(...A,z)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${Q("coords",0,T.rank)};
              let d2 = ${s?Q("coords",T.rank-1,T.rank):Q("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?Q("coords",1,T.rank):Q("coords",2,T.rank)},
              ${s?Q("coords",2,T.rank):Q("coords",3,T.rank)},
              ${s?Q("coords",3,T.rank):Q("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Q("uniforms.x_shape",1,T.rank):Q("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?Q("uniforms.x_shape",2,T.rank):Q("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?Q("uniforms.x_shape",3,T.rank):Q("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?Q("uniforms.x_shape",4,T.rank):Q("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${H}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${m};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:y}),getShaderSource:$}}}),jc,Kc,xy=q(()=>{ee(),se(),ue(),zt(),jc=(e,t,i,r)=>{let n=e.length>2,o=n?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",c=d?i[3]:i[1],m=c/t.group,g=d&&m>=4?be(c):1,y=O.size(i)/g,_=[{type:12,data:y},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:m}];Ct(t,_),_.push(...Z(s,[l[0],l[1],l[2],l[3]/g]));let w=n?["rank","rank","rank"]:["rank","rank"];_.push(...Z([i[0],i[1],i[2],i[3]/g]));let $=k=>{let v=K("output",e[0].dataType,i.length,g),b=Ce(v.type.tensor),S=Tt(t,v.type.value,b),T=M("x",e[0].dataType,s.length),I=M("w",e[1].dataType,l.length,g),A=[T,I];n&&A.push(M("b",e[2].dataType,e[2].dims,g));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];It(t,z);let D=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(z).declareVariables(...A,v)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${D}
    ${o}
    ${S}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:$}},Kc=(e,t,i,r)=>{let n=e.length>2,o=be(i[3]),s=be(i[2]),l=O.size(i)/o/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],m=[i[0],i[1],i[2],i[3]/o],g=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ct(t,g),g.push(...Z(d,c,m));let y=(s-1)*t.strides[1]+c[1],_=w=>{let $=K("output",e[0].dataType,m.length,o),k=Ce($.type.tensor),v=Tt(t,$.type.value,k),b=M("x",e[0].dataType,d.length,o),S=M("w",e[1].dataType,c.length,o),T=[b,S];n&&T.push(M("b",e[2].dataType,e[2].dims,o));let I=n?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return It(t,A),`
  ${w.registerUniforms(A).declareVariables(...T,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${y}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${c[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${y}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${c[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${v}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${s};${y};${c[0]};${c[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:_}}}),Ru,Ir,Bu,Er,wa,Ni,Mu,Nu,ba,ky=q(()=>{se(),$y(),vy(),Fa(),xy(),zt(),Ha(),gt(),Ru=(e,t,i,r,n,o)=>{let s=e[0],l=e.slice(o?1:2,o?3:4),d=l.length,c=t[0],m=t.slice(2).map((y,_)=>y+(y-1)*(i[_]-1)),g=l.map((y,_)=>y+r[_]+r[_+d]).map((y,_)=>Math.floor((y-m[_]+n[_])/n[_]));return g.splice(0,0,s),g.splice(o?3:1,0,c),g},Ir=[2,3,1,0],Bu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Er=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let o=2;o<t[1].dims.length;++o)i[o-2]===0&&(i[o-2]=t[1].dims[o]);let r=e.pads.slice();Vr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:i,pads:r}),n},wa=e=>{let t=Va(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,o=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,c=e.w_is_const();return{autoPad:r,format:i,dilations:n,group:o,kernelShape:s,pads:l,strides:d,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Ni=(e,t,i,r)=>{let n=i.format==="NHWC",o=Ru(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,n);if(i.group!==1){let A=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(De(t[1],Ir),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),A.push(z)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Kc(A,i,o,r),{inputs:A}):e.compute(jc(A,i,o,r),{inputs:A});return}let s=t.length===3,l=t[0].dims[n?1:2],d=t[0].dims[n?2:3],c=t[0].dims[n?3:1],m=t[1].dims[2],g=t[1].dims[3],y=o[n?1:2],_=o[n?2:3],w=o[n?3:1],$=n&&m===l&&g===d&&i.pads[0]===0&&i.pads[1]===0;if($||m===1&&g===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let A=o[0],z,D,V,H=[];if(n){let W=e.kernelCustomData.wT??e.compute(De(t[1],Ir),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=W),$){let oe=l*d*c;z=t[0].reshape([1,A,oe]),D=W.reshape([1,oe,w]),V=[1,A,w]}else z=t[0].reshape([A,l*d,c]),D=W.reshape([1,c,w]),V=[A,y*_,w];H.push(z),H.push(D)}else z=t[0].reshape([A,c,l*d]),D=t[1].reshape([1,w,c]),V=[A,w,y*_],H.push(D),H.push(z);s&&H.push(t[2]);let X=V[2],te=H[0].dims[H[0].dims.length-1];X<8&&te<8?e.compute(Ga(H,i,o,V,n,r),{inputs:H}):e.compute(Gr(H,i,o,V,n,r),{inputs:H});return}let k=!0,v=e.kernelCustomData.wT??e.compute(De(t[1],Ir),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];s&&b.push(t[2]);let S=n?y*_:w,T=n?w:y*_,I=m*g*c;e.compute(Gc(b,i,o,S,T,I,s,k,r),{inputs:b})},Mu=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=Er({...t,pads:n,strides:o,dilations:s,kernelShape:l},r);Ni(e,r,d,c=>i?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Nu=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",n=Er(i,t),o=i.autoPad==="NOTSET"?i.pads:i.autoPad,s=Hc(t[0].dims,t[1].dims,i.strides,i.dilations,o,!1,r);e.compute(Fc(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},ba=(e,t)=>{if(Bu(e.inputs,t),e.inputs[0].dims.length===3)Mu(e,t);else if(e.inputs[0].dims.length===5)Nu(e,e.inputs,t);else{let i=Er(t,e.inputs);Ni(e,e.inputs,i)}}}),Qc,Sy=q(()=>{ee(),st(),se(),ue(),Qc=(e,t,i)=>{let r=e.length>2,n=t.outputShape,o=t.format==="NHWC",s=t.group,l=e[1].dims,d=l[2]/s,c=l[3],m=o?be(d):1,g=o?be(c):1,y=o?c===1?m:g:1,_=O.size(n)/g,w=[Math.ceil(_/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let $=["rank","rank"],k=[t.strides[0],t.strides[1]],v=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],b=[t.dilations[0],t.dilations[1]],S=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],T=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:_},{type:12,data:k},{type:12,data:v},{type:12,data:b},{type:12,data:S},{type:6,data:T},{type:12,data:d},{type:12,data:c},...Z(e[0].dims,e[1].dims)];r&&(I.push(...Z(e[2].dims)),$.push("rank")),I.push(...Z(n));let A=z=>{let D=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:k.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:S.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Ce(e[0].dataType),H=o?1:2,X=o?2:3,te=o?3:1,W=M("W",e[1].dataType,e[1].dims.length,y),oe=M("Dy",e[0].dataType,e[0].dims.length,m),de=[oe,W];r&&de.push(M("bias",e[2].dataType,[n[te]].length,g));let F=K("result",e[0].dataType,n.length,g),le=()=>{let j="";if(m===1)j+=`
        let w_offset = ${W.indicesToOffset(`${W.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${W.getByOffset(`w_offset / ${y}`)};
        dotProd = dotProd + xValue * wValue;`;else if(c===1)j+=`
          let wValue = ${W.getByOffset(`${W.indicesToOffset(`${W.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${y}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ce=0;ce<m;ce++)j+=`
            let wValue${ce} = ${W.getByOffset(`${W.indicesToOffset(`${W.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ce}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${ce}] * wValue${ce};`;return j},pe=`
            let outputIndices = ${F.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${F.indicesGet("outputIndices",0)};
            let d1 = ${F.indicesGet("outputIndices",te)};
            let r = ${F.indicesGet("outputIndices",H)};
            let c = ${F.indicesGet("outputIndices",X)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${F.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${V}(dyRCorner) + ${V}(wR)) / ${V}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${V}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${V}(dyCCorner) + ${V}(wC)) / ${V}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${V}(uniforms.Dy_shape[${X}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${m}) {
                  let xValue = ${o?oe.getByOffset(`${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):oe.get("batch","inputChannel","idyR","idyC")};
                  ${le()}
                  inputChannel = inputChannel + ${m};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${F.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(D).declareVariables(...de,F)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${pe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${m}${y}${g}${c===1}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:i?i(n):n,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:A}}}),Du,Pu,Uu,Di,Zc,Wu,Pi,qu,Xc,Ty=q(()=>{Sy(),zt(),gt(),Du=(e,t,i,r,n,o)=>(e-1)*t+i+(r-1)*n+1-o,Pu=(e,t,i,r,n)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=o,i[n]=e-o):t==="SAME_LOWER"&&(i[r]=e-o,i[n]=o)},Uu=(e,t,i,r,n,o,s,l,d,c)=>{let m=e.length-2,g=c.length===0;d.length<m&&d.push(...Array(m-d.length).fill(0));let y=e[0],_=t[l?3:1]*n;for(let w=0,$=e.length-m-(l?1:0);w<m;++w,++$){let k=e[$],v=g?k*s[w]:c[w],b=Du(k,s[w],o[w],t[$],i[w],v);Pu(b,r,o,w,w+m),g&&c.push(s[w]*(k-1)+d[w]+(t[$]-1)*i[w]+1-o[w]-o[w+m])}c.splice(0,0,y),c.splice(l?3:1,0,_)},Di=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,y)=>g*y,1)===0){i.length=0;for(let g=2;g<t[1].dims.length;++g)i.push(t[1].dims[g])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let n=e.pads.slice(),o=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;d=new Array(g).fill(1)}let c=e.strides.slice();if(c.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;c=new Array(g).fill(1)}Uu(l,i,d,e.autoPad,e.group,n,c,r,s,o);let m=Object.assign({},e);return Object.assign(m,{kernelShape:i,pads:n,outputPadding:s,outputShape:o,dilations:d,strides:c}),m},Zc=e=>{let t=Va(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,o=e.group,s=e.kernelShape,l=e.pads,d=e.strides,c=e.wIsConst(),m=e.outputPadding,g=e.outputShape;return{autoPad:r,format:i,dilations:n,group:o,kernelShape:s,outputPadding:m,outputShape:g,pads:l,strides:d,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Wu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Pi=(e,t,i,r)=>{let n=e.kernelCustomData.wT??e.compute(De(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let o=[t[0],n];t.length===3&&o.push(t[2]),e.compute(Qc(o,i,r),{inputs:o})},qu=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),o=[1].concat(o),n=[1].concat(n);let d=t.outputPadding;d=[0].concat(d);let c=Di({...t,pads:l,strides:s,dilations:o,kernelShape:n,outputPadding:d},r);Pi(e,r,c,m=>i?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},Xc=(e,t)=>{if(Wu(e.inputs,t),e.inputs[0].dims.length===3)qu(e,t);else{let i=Di(t,e.inputs);Pi(e,e.inputs,i)}}}),Vu,Yc,Jc,Cy=q(()=>{ee(),se(),$e(),ue(),Vu=(e,t,i,r)=>{let n=O.size(t),o=t.length,s=M("input",e,o),l=K("output",e,o),d=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),c=O.normalizeAxis(d,o),m=g=>{let y=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=Q("uniforms.input_shape","uniforms.axis",o),w=r.reverse?y+(r.exclusive?" + 1":""):"0",$=r.reverse?_:y+(r.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:c},...Z(t,t)]}),getShaderSource:m}},Yc=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,n=e.inputs[1];e.compute(Vu(r,i,n,t),{inputs:[0]})},Jc=e=>{let t=e.exclusive===1,i=e.reverse===1;return ge({exclusive:t,reverse:i})}}),Lu,Gu,Hu,eh,th,Iy=q(()=>{ee(),se(),$e(),ue(),Lu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Gu=(e,t,i,r)=>{let n=[];n.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let o=0;o<t;++o)n.push(i.indicesSet("a",e[o],`i[${o}]`));return n.push("return a;}"),n.join(`
`)},Hu=(e,t)=>{let i,r,n,o,s,l,d=t.format==="NHWC",c=t.blocksize,m=t.mode==="DCR";d?([i,r,n,o]=e.dims,s=m?[i,r,n,c,c,o/c**2]:[i,r,n,o/c**2,c,c],l=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,n,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=m?[i,c,c,o/c**2,r,n]:[i,o/c**2,c,c,r,n],l=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(s),y=g.dims.length,_=e.dataType,w=M("a",_,y),$=K("output",_,y),k=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(w,$)}

  ${Gu(l,y,w,$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=d?[i,r*c,n*c,o/c**2]:[i,o/c**2,r*c,n*c],S=O.size(b),T=g.dims,I=O.sortBasedOnPerm(T,l);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...Z(T,I)]}},getShaderSource:k}},eh=(e,t)=>{Lu(e.inputs),e.compute(Hu(e.inputs[0],t))},th=e=>ge({blocksize:e.blocksize,mode:e.mode,format:e.format})}),zr,Xt,Ui,Fu,ju,Ku,Qu,Wi,Zu,rh,ih,Ey=q(()=>{ee(),se(),$e(),ue(),zr="[a-zA-Z]|\\.\\.\\.",Xt="("+zr+")+",Ui="^"+Xt+"$",Fu="("+Xt+",)*"+Xt,ju="^"+Fu+"$",Ku=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},Qu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,r]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(ju)))throw new Error("Invalid LHS term");if(i.split(",").forEach((n,o)=>{let s=e[o].dims.slice();if(!n.match(RegExp(Ui)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,s,o);this.lhs.push(l)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([n,o])=>o.count===1||n==="...").map(([n])=>n).join("");else if(!r.match(RegExp(Xt)))throw new Error("Invalid RHS");r.match(RegExp(zr,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(n);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,i){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(i)}else r={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,r)}processTerm(e,t,i,r=-1){let n=i.length,o=!1,s=[],l=0;if(!e.match(RegExp(Ui))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(zr,"g")),c=new Ku(r);return d?.forEach((m,g)=>{if(m==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let y=n-d.length+1;if(y<0)throw new Error("Ellipsis out of bounds");if(s=i.slice(l,l+y),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let w=String.fromCharCode(48+_);c.addSymbol(w,g+_),this.addSymbol(w,i[l++],r)}}else c.addSymbol(m,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(m,i[l++],r)}),c}},Wi=e=>e+"_max",Zu=(e,t,i,r)=>{let n=e.map(c=>c.length).map((c,m)=>M(`input${m}`,t,c)),o=O.size(r),s=K("output",t,r.length),l=[...i.symbolToInfo.keys()].filter(c=>!i.rhs.symbolToIndices.has(c)),d=c=>{let m=[],g="var prod = 1.0;",y="var sum = 0.0;",_="sum += prod;",w=[],$=[],k=[],v=[],b=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((T,I)=>{if(i.rhs.symbolToIndices.has(I)){let A=i.rhs.symbolToIndices.get(I)?.[0];A!==void 0&&i.lhs.forEach((z,D)=>{if(T.inputIndices.includes(D)){let V=z.symbolToIndices.get(I);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(H=>{m.push(`${n[D].indicesSet(`input${D}Indices`,H,s.indicesGet("outputIndices",A))}`)})}})}else i.lhs.forEach((A,z)=>{if(T.inputIndices.includes(z)){let D=A.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(V=>{w.push(`${n[z].indicesSet(`input${z}Indices`,V,`${I}`)}`)}),v.push(`prod *= ${n[z].getByIndices(`input${z}Indices`)};`)}}),$.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Wi(I)}; ${I}++) {`),k.push("}")});let S=b?[...m,`let sum = ${n.map((T,I)=>T.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...m,y,...$,...w,g,...v,_,...k];return`
            ${c.registerUniforms(l.map(T=>({name:`${Wi(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((T,I)=>`var input${I}Indices: ${n[I].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let c=l.filter(g=>i.symbolToInfo.has(g)).map(g=>({type:12,data:i.symbolToInfo.get(g)?.dimValue||0}));c.push({type:12,data:o});let m=e.map((g,y)=>[...Z(g)]).reduce((g,y)=>g.concat(y),c);return m.push(...Z(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:m}},getShaderSource:d}},rh=(e,t)=>{let i=new Qu(e.inputs,t.equation),r=i.outputDims,n=e.inputs.map((o,s)=>o.dims);e.compute(Zu(n,e.inputs[0].dataType,i,r))},ih=e=>{let t=e.equation.replace(/\s+/g,"");return ge({equation:t})}}),Xu,qi,Yu,Ju,ah,zy=q(()=>{ee(),se(),ue(),Xu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,n=t.length<i.length?0:t.length-i.length;for(;r<i.length&&n<t.length;++r,++n)if(i[r]!==t[n]&&i[r]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},qi=(e,t)=>{let i=e.length-t.length,r=[];for(let n=0;n<i;++n)r.push(e[n]);for(let n=0;n<t.length;++n)r.push(t[n]===1?e[n+i]:t[n]);return r},Yu=(e,t)=>e.length>t.length?qi(e,t):qi(t,e),Ju=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=Yu(t,i),n=e[0].dataType,o=n===9||O.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,l=o||r.length>0&&r[r.length-1]%4===0?4:1,d=Math.ceil(O.size(r)/l),c=g=>{let y=M("input",n,t.length,s),_=K("output",n,r.length,l),w;if(n===9){let $=(k,v,b="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${k}[${v}] = ${b}(${y.getByOffset(`index${v}`)}[component${v}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${y.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${y.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(y,_)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},m=[{type:12,data:d},...Z(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m})}},ah=e=>{Xu(e.inputs),e.compute(Ju(e.inputs),{inputs:[0]})}}),el,nh,Ay=q(()=>{ee(),se(),ue(),qa(),el=e=>{let t=e[0].dataType,i=O.size(e[0].dims),r=O.size(e[1].dims),n=r%4===0,o=s=>{let l=M("x",t,[1],4),d=M("bias",t,[1],4),c=K("y",t,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${d.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,y=n?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(m).declareVariables(l,d,c)}

    ${ma(Ae(t))}

    ${s.mainStart(Pt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${y}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",ga("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/Pt/4)}})}},nh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Sc(e):e.compute(el(e.inputs))}}),tl,rl,sh,oh,Oy=q(()=>{ee(),se(),$e(),ue(),tl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},rl=(e,t)=>{let i=e[0].dims,r=e[1].dims,n=i.length,o=O.normalizeAxis(t.axis,n),s=i.slice(0);s.splice(o,1,...r);let l=i[o],d=e[0].dataType===9?4:1,c=Math.ceil(O.size(s)/d),m=[{type:12,data:c},{type:6,data:l},{type:12,data:o},...Z(e[0].dims,e[1].dims,s)],g=y=>{let _=M("data",e[0].dataType,e[0].dims.length,d),w=M("inputIndices",e[1].dataType,e[1].dims.length),$=K("output",e[0].dataType,s.length,d),k=b=>{let S=r.length,T=`var indicesIndices${b}  = ${w.type.indices}(0);`;for(let I=0;I<S;I++)T+=`${S>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;T+=`
          var idx${b} = ${w.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let I=0,A=0;I<n;I++)I===o?(T+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,A+=S):(T+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${A}]`:`outputIndices${b}`};`,A++);return T},v;if(e[0].dataType===9){let b=(S,T,I="")=>`
          let outputIndices${T} = ${$.offsetToIndices(`outputOffset + ${T}u`)};
          ${k(T)};
          let offset${T} = ${_.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${S}[${T}] = ${I}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${_.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,$)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:g}},sh=e=>ge({axis:e.axis}),oh=(e,t)=>{let i=e.inputs;tl(i),e.compute(rl(e.inputs,t))}}),il,uh,lh,Ry=q(()=>{ee(),se(),ue(),il=(e,t,i,r,n,o,s,l,d)=>{let c=[{type:12,data:o},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:l},{type:12,data:d}],m=[o];c.push(...Z(t.dims,m));let g=y=>{let _=M("indices_data",t.dataType,t.dims.length),w=K("input_slice_offsets_data",12,1,1),$=[_,w],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${y.registerUniforms(k).declareVariables(...$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:g},{inputs:[t],outputs:[-1]})[0]},uh=(e,t)=>{let i=e.inputs,r=i[0].dims,n=i[0].dataType,o=i[1].dims,s=o[o.length-1],l=O.sizeToDimension(o,o.length-1),d=O.sizeFromDimension(r,t.batchDims+s),c=O.sizeToDimension(r,t.batchDims),m=O.sizeFromDimension(r,t.batchDims),g=l/c,y=new Array(s),_=d;for(let T=0;T<s;++T)y[s-1-T]=_,_*=r[t.batchDims+s-1-T];let w=il(e,i[1],y,t.batchDims,r,l,g,m,s),$=t.batchDims+s;if($>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=o.slice(0,-1).concat(r.slice($)),v=O.size(k),b=[{type:12,data:v},{type:12,data:d},...Z(i[0].dims,w.dims,k)],S=T=>{let I=M("data",i[0].dataType,i[0].dims.length),A=M("slice_offsets",12,w.dims.length),z=K("output",i[0].dataType,k.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,A,z)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:S},{inputs:[i[0],w]})},lh=e=>({batchDims:e.batch_dims,cacheKey:""})}),al,nl,dh,ph,By=q(()=>{ee(),se(),$e(),ue(),al=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,n=e[0],o=e[2],s=e.length===4?e[3]:void 0;if(o.dims.length!==n.dims.length||!n.dims.map((l,d)=>d===i?Math.ceil(l/r)===o.dims[d]:l===o.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==o.dims.length||!s.dims.map((l,d)=>l===o.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},nl=(e,t)=>{let i=e[0].dims,r=e[1].dims,n=i.length,o=O.normalizeAxis(t.gatherAxis,n),s=O.normalizeAxis(t.quantizeAxis,n),l=i.slice(0);l.splice(o,1,...r);let d=O.size(l),c=e[2].dataType,m=e[0].dataType===22,g=[{type:12,data:d},{type:12,data:s},{type:12,data:o},{type:12,data:t.blockSize},...Z(...e.map((_,w)=>_.dims),l)],y=_=>{let w=M("data",e[0].dataType,e[0].dims.length),$=M("inputIndices",e[1].dataType,e[1].dims.length),k=M("scales",e[2].dataType,e[2].dims.length),v=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=K("output",c,l.length),S=[w,$,k];v&&S.push(v);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(T).declareVariables(...S,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[o]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ae(c)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:c}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:y}},dh=(e,t)=>{let i=e.inputs;al(i,t),e.compute(nl(e.inputs,t))},ph=e=>ge({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),sl,ol,ch,hh,My=q(()=>{ee(),se(),$e(),ue(),sl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ol=(e,t)=>{let i=e[0].dims,r=e[0].dataType,n=i.length,o=e[1].dims,s=e[1].dataType,l=O.normalizeAxis(t.axis,n),d=i[l],c=o.slice(0),m=O.size(c),g=M("input",r,n),y=M("indicesInput",s,o.length),_=K("output",r,c.length),w=[{type:12,data:m},{type:6,data:d},{type:12,data:l}];return w.push(...Z(i,o,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:w}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,_)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${y.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},ch=e=>ge({axis:e.axis}),hh=(e,t)=>{let i=e.inputs;sl(i),e.compute(ol(e.inputs,t))}}),ul,ll,fh,mh,Ny=q(()=>{ee(),se(),ue(),ul=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ll=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[n,o,s]=gp.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),l=[n,o];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,c=Math.ceil(o/d),m=Math.ceil(n/d),g=!0,y=O.size(l),_=[{type:12,data:g?c:y},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...Z(e[2].dims)),w.push("rank")),_.push(...Z(l));let $=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",T=M("a",e[0].dataType,e[0].dims),I=M("b",e[1].dataType,e[1].dims),A=T.type.value,z=null,D=[T,I];e.length===3&&(z=M("c",e[2].dataType,e[2].dims.length),D.push(z));let V=K("output",e[0].dataType,l.length);D.push(V);let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(H).declareVariables(...D)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",V)}; value += ${A}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=v=>{let b=M("a",e[0].dataType,e[0].dims),S=M("b",e[1].dataType,e[1].dims),T=null,I=[b,S];e.length===3&&(T=M("c",e[2].dataType,e[2].dims.length),I.push(T));let A=K("output",e[0].dataType,l.length);I.push(A);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],D="",V="";t.transA&&t.transB?(V=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(V=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(V=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(V=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let H=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${d}>, ${d}>;
  ${v.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${V}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${D}
      }
      workgroupBarrier();
    }

    ${H}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:c*m},programUniforms:_}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:$}},fh=e=>{let t=e.transA,i=e.transB,r=e.alpha,n=e.beta;return{transA:t,transB:i,alpha:r,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},mh=(e,t)=>{ul(e.inputs),e.compute(ll(e.inputs,t))}}),Je,at,_t,wt,dl,pl,cl,hl,fl,ml,gl,yl,gh,yh,Dy=q(()=>{ee(),se(),$e(),ue(),[Je,at,_t,wt]=[0,1,2,3],dl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},pl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,cl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,hl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,fl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,ml=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Je}] = batch;
     indices[${at}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${_t}] = u32(r);
            indices[${wt}] = u32(c);
          }
        `;case"border":return`
          indices[${_t}] = u32(clamp(r, 0, H - 1));
          indices[${wt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${_t}] = gs_reflect(r, border[1], border[3]);
          indices[${wt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,gl=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Je}], indices[${at}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Je}], indices[${at}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Je}], indices[${at}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Je}], indices[${at}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Je}], indices[${at}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Je}], indices[${at}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,yl=(e,t)=>{let i=M("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=M("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Je,at,_t,wt]=[0,3,1,2]);let s=K("output",e[0].dataType,o.length),l=i.type.value,d=O.size(o),c=[{type:12,data:d},...Z(e[0].dims,r,o)],m=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(i,n,s)}
  ${pl}
  ${cl(l)}
  ${hl(t)}
  ${fl(t)}
  ${ml(i,l,t)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${_t}]);
      let W_in = i32(uniforms.x_shape[${wt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Je}], indices[${_t}], indices[${wt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${gl(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let y=O.size(o);return{outputs:[{dims:o,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:c}},getShaderSource:m}},gh=(e,t)=>{dl(e.inputs),e.compute(yl(e.inputs,t))},yh=e=>ge({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Oe,_l,_h,Vi,wl,nr,wh,bh=q(()=>{ee(),se(),$e(),Da(),Wa(),ue(),gt(),Oe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,_l=(e,t)=>{let i=e[0],r=Oe(e,1),n=Oe(e,2),o=Oe(e,3),s=Oe(e,4),l=Oe(e,5),d=Oe(e,6),c=Oe(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=i.dims[0],g=i.dims[1],y=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],_=g,w=0,$=0,k=Math.floor(y/t.numHeads);if(d&&c&&O.size(d.dims)&&O.size(c.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==m||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==m||c.dims[1]!==t.numHeads||c.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=d.dims[2],$=d.dims[2]}else if(d&&O.size(d.dims)||c&&O.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(r&&O.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(o&&O.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=w+_,S=0;if(s&&O.size(s.dims)>0){S=8;let z=s.dims;throw z.length===1?z[0]===m?S=1:z[0]===3*m+2&&(S=3):z.length===2&&z[0]===m&&z[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,I=y;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(_!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(_!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],T=!0}}let A=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==m||l.dims[1]!==t.numHeads||l.dims[2]!==g||l.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:y,vHiddenSize:I,headSize:k,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:A,passPastInKv:T,qkvFormat:v}},_h=e=>ge({...e}),Vi=ge({perm:[0,2,1,3]}),wl=(e,t,i,r,n,o,s)=>{let l=[r,n,o],d=O.size(l),c=[{type:12,data:d},{type:12,data:s},{type:12,data:o}],m=g=>{let y=K("qkv_with_bias",t.dataType,l),_=M("qkv",t.dataType,l),w=M("bias",i.dataType,l),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms($).declareVariables(_,w,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:m},{inputs:[t,i],outputs:[-1]})[0]},nr=(e,t,i,r,n,o,s,l)=>{let d=o;if(s&&O.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=wl(e,o,s,t,r,i*n,l),d=d.reshape([t,r,i,n]),i===1||r===1?d:e.compute(De(d,Vi.perm),{inputs:[d],outputs:[-1]})[0]}else return o.dims.length===3&&(d=o.reshape([t,r,i,n])),i===1||r===1?d:e.compute(De(d,Vi.perm),{inputs:[d],outputs:[-1]})[0]},wh=(e,t)=>{let i=_l(e.inputs,t),r=e.inputs[0],n=Oe(e.inputs,1),o=Oe(e.inputs,2),s=Oe(e.inputs,3),l=Oe(e.inputs,4),d=Oe(e.inputs,5),c=Oe(e.inputs,6),m=Oe(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let g=n&&o&&n.dims.length===4&&o.dims.length===4,y=nr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,s,0);if(g)return or(e,y,n,o,l,void 0,c,m,d,i);if(!n||!o)throw new Error("key and value must be provided");let _=nr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,n,s,i.hiddenSize),w=nr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,o,s,2*i.hiddenSize);or(e,y,_,w,l,void 0,c,m,d,i)}}),bl,$l,vl,xl,$a,$h,vh,xh=q(()=>{ee(),se(),$e(),ue(),bl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},$l=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>i.push(Number(n))),r=i.length),ge({numOutputs:r,axis:t.axis,splitSizes:i})},vl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Q("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,xl=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let n=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(n):r===0?i.push(`if (output_number == ${r}u) { ${n} }`):r===t-1?i.push(`else { ${n} }`):i.push(`else if (output_number == ${r}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},$a=(e,t)=>{let i=e[0].dims,r=O.size(i),n=e[0].dataType,o=O.normalizeAxis(t.axis,i.length),s=new Array(t.numOutputs),l=M("input",n,i.length),d=new Array(t.numOutputs),c=[],m=[],g=0,y=[{type:12,data:r}];for(let w=0;w<t.numOutputs;w++){g+=t.splitSizes[w],d[w]=g;let $=i.slice();$[o]=t.splitSizes[w],m.push($),s[w]=K(`output${w}`,n,$.length),c.push({dims:m[w],dataType:e[0].dataType})}y.push({type:12,data:d},...Z(i,...m));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${vl(d.length)}
  ${xl(s)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Q("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},$h=(e,t)=>{bl(e.inputs);let i=e.inputs.length===1?t:$l(e.inputs,t);e.compute($a(e.inputs,i),{inputs:[0]})},vh=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ge({axis:t,numOutputs:r,splitSizes:i})}}),kl,Sl,Li,kh,Py=q(()=>{$e(),Wa(),bh(),xh(),gt(),kl=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],n=e[2],o=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=i.dims[0],c=i.dims[1],m=i.dims.length===3?l?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],g=c,y=0,_=!r||r.dims.length===0,w=Math.floor(_?m/(t.numHeads+2*t.kvNumHeads):m/t.numHeads);_&&(m=w*t.numHeads);let $=o&&o.dims.length!==0,k=s&&s.dims.length!==0;if($&&o.dims.length===4&&o.dims[0]===d&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if($&&k){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=o.dims[2]}else if($||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');g=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,S=!1,T=t.kvNumHeads?w*t.kvNumHeads:m;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],S=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:c,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:T,headSize:w,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:v}},Sl=ge({perm:[0,2,1,3]}),Li=(e,t,i)=>{let r=t,n=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,n,i.headSize]),r=e.compute(De(r,Sl.perm),{inputs:[r],outputs:[-1]})[0]),r},kh=(e,t)=>{let i=kl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,c=e.inputs.length>5?e.inputs[6]:void 0,m=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=ge({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,m*i.headSize,m*i.headSize]}),[y,_,w]=!n&&!o?e.compute($a([r],g),{inputs:[r],outputs:[-1,-1,-1]}):[r,n,o],$=nr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,y,void 0,0);or(e,$,Li(e,_,i),Li(e,w,i),void 0,void 0,s,l,void 0,i,d,c)}}),Gi,Tl,Cl,Sh,Uy=q(()=>{ee(),se(),gt(),ue(),Gi=(e,t,i,r,n,o,s,l)=>{let d=be(o),c=d===1?"f32":`vec${d}f`,m=d===1?"vec2f":`mat2x${d}f`,g=n*s,y=64;g===1&&(y=256);let _=[n,s,o/d],w=[n,s,2],$=["rank","type","type"],k=[];k.push(...Z(_,w));let v=b=>{let S=M("x",t.dataType,3,d),T=M("scale",i.dataType,i.dims),I=M("bias",r.dataType,r.dims),A=K("output",1,3,2),z=[S,T,I,A];return`
  var<workgroup> workgroup_shared : array<${m}, ${y}>;
  const workgroup_size = ${y}u;
  ${b.declareVariables(...z)}
  ${b.mainStart(y)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${c}(0);
    var squared_sum = ${c}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${c}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${mt("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${mt("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:g},programUniforms:k}),getShaderSource:v},{inputs:[t,i,r],outputs:[-1]})[0]},Tl=(e,t,i)=>{let r=t[0].dims,n=r,o=2,s=r[0],l=r[1],d=O.sizeFromDimension(r,o),c=be(d),m=O.size(n)/c,g=Gi(e,t[0],t[1],t[2],s,d,l,i.epsilon),y=[s,l,d/c],_=[s,l],w=["type","none"],$=k=>{let v=M("x",t[0].dataType,y.length,c),b=M("scale_shift",1,_.length,2),S=K("output",t[0].dataType,y.length,c),T=[v,b,S];return`
  ${k.registerUniform("output_size","u32").declareVariables(...T)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Z(y,_,y)]}),getShaderSource:$},{inputs:[t[0],g]})},Cl=(e,t,i)=>{let r=t[0].dims,n=r,o=r[0],s=r[r.length-1],l=O.sizeFromDimension(r,1)/s,d=be(s),c=O.size(n)/d,m=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],g=["type","type"],y=!1,_=[0,r.length-1];for(let v=0;v<r.length-2;v++)y=y||r[v+1]!==1,_.push(v+1);y=y&&r[r.length-1]!==1;let w=y?e.compute(De(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(v,b)=>r[_[b]])),$=Gi(e,w,t[1],t[2],o,l,s,i.epsilon),k=v=>{let b=Ce(t[0].dataType),S=d===1?"vec2f":`mat${d}x2f`,T=z=>{let D=z===0?"x":"y",V=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${b}(${V}(scale.${D}))`;case 2:return`vec2<${b}>(${V}(scale[0].${D}, scale[1].${D}))`;case 4:return`vec4<${b}>(${V}(scale[0].${D}, scale[1].${D}, scale[2].${D}, scale[3].${D}))`;default:throw new Error(`Not supported compoents ${d}`)}},I=M("input",t[0].dataType,t[0].dims,d),A=K("output",t[0].dataType,n,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:k},{inputs:[t[0],$]})},Sh=(e,t)=>{t.format==="NHWC"?Cl(e,e.inputs,t):Tl(e,e.inputs,t)}}),Il,El,Th,Wy=q(()=>{ee(),se(),ue(),Il=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},El=(e,t,i)=>{let r=t.simplified,n=e[0].dims,o=e[1],s=!r&&e[2],l=n,d=O.normalizeAxis(t.axis,n.length),c=O.sizeToDimension(n,d),m=O.sizeFromDimension(n,d),g=O.size(o.dims),y=s?O.size(s.dims):0;if(g!==m||s&&y!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${y}`);let _=[];for(let I=0;I<n.length;++I)I<d?_.push(n[I]):_.push(1);let w=be(m),$=["type","type"],k=[{type:12,data:c},{type:1,data:m},{type:12,data:Math.floor(m/w)},{type:1,data:t.epsilon}];s&&$.push("type");let v=i>1,b=i>2,S=I=>{let A=Ce(e[0].dataType),z=[M("x",e[0].dataType,e[0].dims,w),M("scale",o.dataType,o.dims,w)];s&&z.push(M("bias",s.dataType,s.dims,w)),z.push(K("output",e[0].dataType,l,w)),v&&z.push(K("mean_data_output",1,_)),b&&z.push(K("inv_std_output",1,_));let D=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(D).declareVariables(...z)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ca("f32",w)};
    var mean_square_vector = ${ca("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Nt(A,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${mt("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${mt("mean_square_vector",w)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Nt(A,w,"x[j + offset]")};
      let f32scale = ${Nt(A,w,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Nt(A,w,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return v&&T.push({dims:_,dataType:1}),b&&T.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${i};${r}`,inputDependencies:$},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:k}),getShaderSource:S}},Th=(e,t)=>{Il(e.inputs),e.compute(El(e.inputs,t,e.outputCount))}}),zl,Ch,qy=q(()=>{se(),Ha(),Fa(),zl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Ch=e=>{zl(e.inputs);let t=Dt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(Ga(e.inputs,{activation:""},t));else{let n=t[t.length-2],o=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&n===1&&s===1){let l=e.inputs[0].reshape([1,o,r]),d=e.inputs[1].reshape([1,r,i]),c=[1,o,i],m=[l,d];e.compute(Gr(m,{activation:""},t,c),{inputs:m})}else e.compute(Gr(e.inputs,{activation:""},t))}}}),Al,Ol,Rl,Ih,Eh,Vy=q(()=>{ee(),se(),$e(),ue(),Al=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,n,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,c=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(O.size(d)!==c)throw new Error("zeroPoints input size error.")}},Ol=(e,t)=>{let i=e[0].dims,r=i.length,n=i[r-2],o=t.k,s=t.n,l=i.slice(0,r-2),d=O.size(l),c=e[1].dims[2]/4,m=e[0].dataType,g=be(t.k),y=be(c),_=be(s),w=l.concat([n,s]),$=n>1&&s/_%2===0?2:1,k=O.size(w)/_/$,v=64,b=[],S=[d,n,o/g],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,c/y),b.push(...Z(S)),b.push(...Z(T)),b.push(...Z(e[2].dims)),e.length===4&&b.push(...Z(O.convertShape(e[3].dims)));let I=[d,n,s/_];b.push(...Z(I));let A=z=>{let D=S.length,V=M("a",e[0].dataType,D,g),H=M("b",12,T.length,y),X=M("scales",e[2].dataType,e[2].dims.length),te=[V,H,X],W=e.length===4?M("zero_points",12,e[3].dims.length):void 0;W&&te.push(W);let oe=I.length,de=K("output",e[0].dataType,oe,_),F=Ce(e[0].dataType),le=(()=>{switch(g){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${g}-component is not supported.`)}})(),pe=()=>{let P=`
          // reuse a data
            var input_offset = ${V.indicesToOffset(`${V.type.indices}(batch, row, word_offset)`)};
            var a_data: ${le};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${V.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<_*$;L++)P+=`
            b_value = ${y===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${le}(${Array.from({length:4},(B,J)=>`${F}(b_value_lower[${J}]), ${F}(b_value_upper[${J}])`).join(", ")});
            b_dequantized_values = ${g===1?`${le}(${Array.from({length:8},(B,J)=>`(b_quantized_values[${J}] - ${W?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${le}(${Array(8).fill(`${W?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(L/_)}]${_>1?`[${L%_}]`:""} += ${Array.from({length:8/g},(B,J)=>`${g===1?`a_data[${J}] * b_dequantized_values[${J}]`:`dot(a_data[${J}], b_dequantized_values[${J}])`}`).join(" + ")};
          `;return P},j=()=>{let P=`
            var col_index = col * ${_};
            ${W?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            `;for(let L=0;L<_*$;L++)P+=`
            let scale${L} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${W?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${F}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return P},ce=()=>{let P=`col_index = col * ${_};`;for(let L=0;L<_*$;L++)P+=`
            let b${L}_data = ${H.getByIndices(`${H.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return P+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${le};
            var b_dequantized_values: ${le};`,P};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${$*v}>;
        ${z.declareVariables(...te,de)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${v}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${j()}
            for (var word: u32 = 0; word < ${c}; word += ${y}) {
              ${ce()}
              for (var i: u32 = 0; i < ${y}; i++) {
                ${pe()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${y};${_};${$};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:m}],dispatchGroup:{x:k},programUniforms:b}),getShaderSource:A}},Rl=(e,t)=>{let i=e[0].dims,r=i.length,n=i[r-2],o=t.k,s=t.n,l=i.slice(0,r-2),d=O.size(l),c=e[1].dims[2]/4,m=e[0].dataType,g=be(t.k),y=be(c),_=l.concat([n,s]),w=128,$=s%8===0?8:s%4===0?4:1,k=w/$,v=k*y*8,b=v/g,S=v/t.blockSize,T=O.size(_)/$,I=[],A=[d,n,o/g],z=O.convertShape(e[1].dims).slice();z.splice(-1,1,c/y),I.push(...Z(A)),I.push(...Z(z)),I.push(...Z(e[2].dims)),e.length===4&&I.push(...Z(O.convertShape(e[3].dims)));let D=[d,n,s];I.push(...Z(D));let V=H=>{let X=A.length,te=M("a",e[0].dataType,X,g),W=M("b",12,z.length,y),oe=M("scales",e[2].dataType,e[2].dims.length),de=[te,W,oe],F=e.length===4?M("zero_points",12,e[3].dims.length):void 0;F&&de.push(F);let le=D.length,pe=K("output",e[0].dataType,le),j=Ce(e[0].dataType),ce=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${te.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${pe.type.value}, ${k}>, ${$}>;
        ${H.declareVariables(...de,pe)}
        ${H.mainStart([k,$,1])}
          let output_indices = ${pe.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${te.getByIndices(`${te.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${te.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${F?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${j}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${j}(8);`}
            let scale = ${oe.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${W.getByIndices(`${W.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${ce()}
              let b_value = ${y===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${j}>(${Array.from({length:4},(P,L)=>`${j}(b_value_lower[${L}]), ${j}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${j}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(P,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${y};${k};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:m}],dispatchGroup:{x:T},programUniforms:I}),getShaderSource:V}},Ih=(e,t)=>{Al(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Rl(e.inputs,t)):e.compute(Ol(e.inputs,t))},Eh=e=>ge(e)}),Bl,Ml,Nl,Dl,Pl,Ul,Wl,ql,zh,Ly=q(()=>{ee(),se(),ue(),Bl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ml=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Q("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Nl=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Q("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Q("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Dl=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k = i32(${Q("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Pl=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
                if (k < 0)  {
                  k += i32(${Q("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k -= i32(${Q("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Ul=(e,t,i)=>{switch(i.mode){case 0:return Ml(e,t,i.pads.length);case 1:return Nl(e,t,i.pads.length);case 2:return Dl(e,t,i.pads.length);case 3:return Pl(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Wl=(e,t)=>{let i=O.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,n=O.size(i),o=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&o.push({type:s?e[2].dataType:1,data:t.value}),o.push(...Z(e[0].dims,i));let l=["rank"],d=c=>{let m=K("output",e[0].dataType,i.length),g=M("x",e[0].dataType,r.length),y=g.type.value,_=Ul(m,r.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:s?y:"f32"}),`
            ${c.registerUniforms(w).declareVariables(g,m)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${y}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(i)/64)},programUniforms:o}),getShaderSource:d}},ql=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,o=new Int32Array(2*n).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)o[Number(l[d])]=Number(i[d]),o[Number(l[d])+n]=Number(i[d+l.length])}else i.forEach((l,d)=>o[Number(d)]=Number(l));let s=[];return o.forEach(l=>s.push(l)),{mode:t.mode,value:r,pads:s}}else return t},zh=(e,t)=>{Bl(e.inputs);let i=ql(e.inputs,t);e.compute(Wl(e.inputs,i),{inputs:[0]})}}),Yt,Hi,Fi,ji,Ki,Vl,Ll,Qi,Zi,Ah,Oh,Xi,Rh,Bh,Yi,Mh,Nh,Dh,Ph,Gy=q(()=>{Qe(),ee(),se(),ue(),Yt=e=>{if(ye.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Hi=(e,t,i)=>{let r=t.format==="NHWC",n=e.dims.slice();r&&n.splice(1,0,n.pop());let o=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=o?t.dilations.slice():[],c=t.pads.slice();Vr.adjustPoolAttributes(i,n,s,l,d,c);let m=Vr.computePoolOutputShape(i,n,l,d,s,c,t.autoPad),g=Object.assign({},t);o?Object.assign(g,{kernelShape:s,strides:l,pads:c,dilations:d,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:s,strides:l,pads:c,cacheKey:t.cacheKey});let y=m.slice();return y.push(y.splice(1,1)[0]),[g,r?y:m]},Fi=(e,t)=>{let i=t.format==="NHWC",r=O.size(e),n=O.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],m=t.pads[t.pads.length-1],g=!!(c+m);o.push({type:12,data:l},{type:12,data:d},{type:12,data:c},{type:12,data:m}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let y=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];y=!!($+k),o.push({type:12,data:_},{type:12,data:w},{type:12,data:$},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,s,!0,g,y]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);o.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((c,m)=>c+m);return[o,s,!!d,!1,!1]}},ji=(e,t,i,r,n,o,s,l,d,c,m,g)=>{let y=n.format==="NHWC",_=t.type.value,w=K("output",t.type.tensor,r);if(n.kernelShape.length<=2){let $="",k="",v="",b=i-(y?2:1);if(m?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`,n.kernelShape.length===2){let S=i-(y?3:2);g?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${k}
              ${$}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(y)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=n.kernelShape.length,k=n.pads.length,v="";return c?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${o}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${e.registerUniforms(d).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${Q("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Q("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${i-$}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${Q("uniforms.strides",`j - ${i-$}u`,$)}
                    + offsets[j - ${i-$}u] - ${Q("uniforms.pads","j - 2u",k)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ki=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Vl=e=>`${Ki(e)};${e.countIncludePad}`,Ll=e=>`${Ki(e)};${e.storageOrder};${e.dilations}`,Qi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Zi=(e,t,i,r)=>{let[n,o]=Hi(t,r,i),s=M("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",c="";n.countIncludePad?c+=`value /= ${l}(uniforms.kernelSize);`:c+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[m,g,y,_,w]=Fi(o,n);m.push(...Z(t.dims,o));let $=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${y};${_};${w}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:m}),getShaderSource:k=>ji(k,s,t.dims.length,o.length,n,d,c,0,g,y,_,w)}},Ah=e=>{let t=e.count_include_pad!==0,i=Qi(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:Vl(r)}},Oh=(e,t)=>{Yt(e.inputs),e.compute(Zi("AveragePool",e.inputs[0],!1,t))},Xi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Rh=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},Bh=(e,t)=>{Yt(e.inputs),e.compute(Zi("GlobalAveragePool",e.inputs[0],!0,t))},Yi=(e,t,i,r)=>{let[n,o]=Hi(t,r,i),s=`
      value = max(x_val, value);
    `,l="",d=M("x",t.dataType,t.dims.length),c=["rank"],[m,g,y,_,w]=Fi(o,n);return m.push(...Z(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${y};${_};${w}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:m}),getShaderSource:$=>ji($,d,t.dims.length,o.length,n,s,l,t.dataType===10?-65504:-1e5,g,y,_,w)}},Mh=(e,t)=>{Yt(e.inputs),e.compute(Yi("MaxPool",e.inputs[0],!1,t))},Nh=e=>{let t=e.storage_order,i=e.dilations,r=Qi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:i,...r,cacheKey:""};return{...n,cacheKey:Ll(n)}},Dh=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},Ph=(e,t)=>{Yt(e.inputs),e.compute(Yi("GlobalMaxPool",e.inputs[0],!0,t))}}),Gl,Hl,Uh,Wh,Hy=q(()=>{ee(),se(),$e(),ue(),Gl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,o)=>o===t.axis||n===e[0].dims[o]).reduce((n,o)=>n&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Hl=(e,t)=>{let i=O.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,n=r===3,o=e[0].dims,s=e[1].dataType,l=O.size(o),d=r===3||r===2,c=d?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,m=e[1].dims,g=e.length>2?e[2]:void 0,y=g?d?[Math.ceil(O.size(g.dims)/4)]:g.dims:void 0,_=m.length===0||m.length===1&&m[0]===1,w=_===!1&&m.length===1,$=be(l),k=_&&(!d||$===4),v=k?$:1,b=k&&!d?$:1,S=M("input",d?12:r,c.length,b),T=M("scale",s,m.length),I=g?M("zero_point",d?12:r,y.length):void 0,A=K("output",s,o.length,v),z=[S,T];I&&z.push(I);let D=[c,m];g&&D.push(y);let V=[{type:12,data:l/v},{type:12,data:i},{type:12,data:t.blockSize},...Z(...D,o)],H=X=>{let te=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(te).declareVariables(...z,A)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${T.getByOffset("0")}`:w?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?_?d?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:w?d?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${d?n?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:H,getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:V})}},Uh=(e,t)=>{Gl(e.inputs,t),e.compute(Hl(e.inputs,t))},Wh=e=>ge({axis:e.axis,blockSize:e.blockSize})}),Fl,jl,qh,Fy=q(()=>{Qe(),ee(),ue(),Fl=(e,t,i)=>{let r=e===t,n=e<t&&i<0,o=e>t&&i>0;if(r||n||o)throw new Error("Range these inputs' contents are invalid.")},jl=(e,t,i,r)=>{let n=Math.abs(Math.ceil((t-e)/i)),o=[n],s=n,l=[{type:12,data:s},{type:r,data:e},{type:r,data:i},...Z(o)],d=c=>{let m=K("output",r,o.length),g=m.type.value,y=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${c.registerUniforms(y).declareVariables(m)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},qh=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ye.webgpu.validateInputContent&&Fl(t,i,r),e.compute(jl(t,i,r,e.inputs[0].dataType),{inputs:[]})}}),Kl,Ql,Vh,Lh,jy=q(()=>{ee(),se(),$e(),ue(),Kl=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${i}));`:`
              ${n}bitcast<${r}>(oldValue) + (${i})${o}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${n}max(bitcast<f32>(oldValue), (${i}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${n}min(bitcast<${r}>(oldValue), (${i}))${o}`;case"mul":return`${n}(bitcast<${r}>(oldValue) * (${i}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ql=(e,t)=>{let i=e[0].dims,r=e[1].dims,n=i,o=1,s=Math.ceil(O.size(r)/o),l=r[r.length-1],d=O.sizeFromDimension(i,l),c=[{type:12,data:s},{type:12,data:l},{type:12,data:d},...Z(e[1].dims,e[2].dims,n)],m=g=>{let y=M("indices",e[1].dataType,e[1].dims.length),_=M("updates",e[2].dataType,e[2].dims.length,o),w=t.reduction!=="none"&&t.reduction!==""?wp("output",e[0].dataType,n.length):K("output",e[0].dataType,n.length,o);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,_,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${O.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Kl(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:m}},Vh=e=>ge({reduction:e.reduction}),Lh=(e,t)=>{e.compute(Ql(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Zl,Xl,Yl,Ji,Jl,ed,td,rd,id,ad,nd,sd,ea,od,ud,ld,dd,pd,Gh,Hh,Ky=q(()=>{ee(),se(),$e(),ue(),Zl=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Xl=(e,t,i)=>{t.every(n=>n>=0&&n<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((n,o)=>r[n]=e[o]),r},Yl=(e,t,i,r,n,o)=>{let[s,l,d]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(m=>o.push(m));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(m=>r.push(m)),r.length!==0&&r.length!==c&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Zl(r,t),t.axes.length>0&&Xl(r,t.axes,c).forEach((m,g)=>r[g]=m)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(m=>n.push(Number(m))),n.length!==0&&n.length!==c&&i>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof n<"u"&&r.length>0&&n.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},Ji=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,Jl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ji("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ji("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ed=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",td=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),n=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,s)=>{r[o]=n[s],r[s+i]=n[t.length+s]}),r):n},rd=(e,t,i,r)=>{let n=[];if(i.length>0)if(r.length>0){if(e.forEach(o=>n.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,s)=>n[o]=i[s])}else i.forEach(o=>n.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((o,s)=>Math.round(o*t[s]))}return n},id=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return i.axes.length>0?(i.axes.forEach(o=>t[o]=r),i.axes.forEach(o=>n[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),n.forEach((o,s)=>n[s]=Math.round(o*t[s]))),n},ad=(e,t,i,r,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Q("uniforms.scales","i",r)};
        var roi_low = ${Q("uniforms.roi","i",n)};
        var roi_hi = ${Q("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Q("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,nd=(e,t,i,r,n,o,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Q("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Q("uniforms.roi","i",o)};
          var roi_hi = ${Q("uniforms.roi",`i + ${i.length}`,o)};
          var input_shape_i = ${Q("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,sd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Q("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ea=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",od=(e,t,i,r,n)=>{let[o,s,l,d]=i.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${i[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${i[l]} - 1))`)};
      ${ea(e,d,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${c} = originalIndices[${s}];
      var col:${c} = originalIndices[${l}];
      ${r?`if (row < 0 || row > (${i[s]} - 1) || col < 0 || col > (${i[l]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${i[s]} - 1));
      col = max(0, min(col, ${i[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${o}])`:"0"};
      var x11: ${c} = getInputValue(batch, channel, row1, col1);
      var x12: ${c} = getInputValue(batch, channel, row1, col2);
      var x21: ${c} = getInputValue(batch, channel, row2, col1);
      var x22: ${c} = getInputValue(batch, channel, row2, col2);
      var dx1: ${c} = abs(row - ${c}(row1));
      var dx2: ${c} = abs(${c}(row2) - row);
      var dy1: ${c} = abs(col - ${c}(col1));
      var dy2: ${c} = abs(${c}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ud=(e,t,i,r,n,o,s,l,d,c)=>{let m=i.length===2,[g,y]=m?[0,1]:[2,3],_=e.type.value,w=$=>{let k=$===g?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[$]},
        ${r[$]}, ${i[$]}, ${o[$]}, ${o[$]} + ${i.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${i[$]} - 1))) {
          return ${d};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${_} = originalIdx + ${_}(i);
          if (${k} < 0 || ${k} >= ${i[$]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${k} = max(0, min(${k}, ${i[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${k})`)};
          data[i + 1] = ${$===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(g)};
    ${w(y)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ld=(e,t,i,r,n)=>{let[o,s,l,d,c]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${i[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${i[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${i[d]} - 1))`)};
      ${ea(e,c,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${m} = originalIndices[${s}];
      var height:${m} = originalIndices[${l}];
      var width:${m} = originalIndices[${d}];
      ${r?`if (depth < 0 || depth > (${i[s]} - 1) || height < 0 || height > (${i[l]} - 1) || width < 0 || (width > ${i[d]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${i[s]} - 1));
      height = max(0, min(height, ${i[l]} - 1));
      width = max(0, min(width, ${i[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${c}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${m} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${m} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${m} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${m} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${m} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${m} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${m} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${m} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${m} = abs(depth - ${m}(depth1));
      var dx2: ${m} = abs(${m}(depth2) - depth);
      var dy1: ${m} = abs(height - ${m}(height1));
      var dy2: ${m} = abs(${m}(height2) - height);
      var dz1: ${m} = abs(width - ${m}(width1));
      var dz2: ${m} = abs(${m}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},dd=(e,t,i,r,n,o)=>{let s=e.dims,l=td(o,t.axes,s.length),d=rd(s,r,n,t.axes),c=r.slice();r.length===0&&(c=s.map((b,S)=>b===0?1:d[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(d=id(s,c,t)));let m=K("output",e.dataType,d.length),g=M("input",e.dataType,s.length),y=O.size(d),_=s.length===d.length&&s.every((b,S)=>b===d[S]),w=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,k=g.type.value,v=b=>`
      ${_?"":`
      ${Jl(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${sd(g,s)};
              ${ed(t.nearestMode,i,k)};
              ${nd(g,m,s,d,c.length,l.length,w)};
              `;case"linear":return`
              ${ad(m,s,d,c.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${od(g,m,s,w,$)}`;if(s.length===3||s.length===5)return`${ld(g,m,s,w,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${ud(g,m,s,d,c,l,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",l.length).declareVariables(g,m)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${c.length>0?t.mode==="cubic"?c:c.length:""}|${n.length>0?n:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},{type:1,data:c},{type:1,data:l},...Z(s,d)]})}},pd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Gh=(e,t)=>{let i=[],r=[],n=[],o=pd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Yl(e.inputs,t,o,i,r,n),e.compute(dd(e.inputs[0],t,o,i,r,n),{inputs:[0]})},Hh=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,n=e.cubicCoeffA,o=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return ge({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:n,excludeOutside:o,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:c})}}),cd,hd,Fh,Qy=q(()=>{ee(),se(),$e(),ue(),cd=(e,t)=>{let[i,r,n,o]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!O.areEqual(r.dims,[])&&!O.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!O.areEqual(n.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=i.dims[0],c=i.dims[i.dims.length-2],m=n.dims[0],g=O.sizeFromDimension(i.dims,1)/c,y=l===0?n.dims[1]*2:g/s;if(l>y)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(d!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(c!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(y/2!==n.dims[1]&&l/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(c>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},hd=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:n,scale:o}=t,s=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],c=l/d,m=e[2].dims[1],g=n===0?m*2:c/r,y=new Array(s,d,c/g,g-m),_=O.computeStrides(y),w=[{type:1,data:o},{type:12,data:y},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,c,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,g,d*g,1]}):[],...Z(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=k=>{let v=M("input",e[0].dataType,e[0].dims.length),b=M("position_ids",e[1].dataType,e[1].dims.length),S=M("cos_cache",e[2].dataType,e[2].dims.length),T=M("sin_cache",e[3].dataType,e[3].dims.length),I=K("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:y.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${k.declareVariables(v,b,S,T,I)}

        ${k.mainStart(Pt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",K("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ge({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(y)/Pt)},programUniforms:w})}},Fh=(e,t)=>{cd(e.inputs,t),e.compute(hd(e.inputs,t))}}),fd,md,jh,Zy=q(()=>{ee(),se(),ue(),fd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},md=(e,t,i,r)=>{let n=t.simplified,o=e[0].dims,s=O.size(o),l=o,d=s,c=o.slice(-1)[0],m=r?o.slice(0,-1).concat(1):[],g=!n&&e.length>3,y=e.length>4,_=r&&i>1,w=r&&i>2,$=i>3,k=64,v=be(c),b=[{type:12,data:d},{type:12,data:v},{type:12,data:c},{type:1,data:t.epsilon}],S=I=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[M("x",e[0].dataType,e[0].dims,v),M("skip",e[1].dataType,e[1].dims,v),M("gamma",e[2].dataType,e[2].dims,v)];g&&z.push(M("beta",e[3].dataType,e[3].dims,v)),y&&z.push(M("bias",e[4].dataType,e[4].dims,v)),z.push(K("output",e[0].dataType,l,v)),_&&z.push(K("mean_output",1,m)),w&&z.push(K("inv_std_output",1,m)),$&&z.push(K("input_skip_bias_sum",e[0].dataType,l,v));let D=Ce(e[0].dataType),V=Ce(1,v);return`

      ${I.registerUniforms(A).declareVariables(...z)}
      var<workgroup> sum_shared : array<${V}, ${k}>;
      var<workgroup> sum_squared_shared : array<${V}, ${k}>;

      ${I.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${y?"bias[offset1d + i]":D+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Nt(D,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${mt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${mt("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${D}(mean)`}) *
            ${D}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return i>1&&T.push({dims:m,dataType:1}),i>2&&T.push({dims:m,dataType:1}),i>3&&T.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${w};${$}`,inputDependencies:e.map((I,A)=>"type")},getShaderSource:S,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/c)},programUniforms:b})}},jh=(e,t)=>{fd(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(md(e.inputs,t,e.outputCount,!1),{outputs:i})}}),gd,Jt,yd,ta,_d,wd,Kh,Qh,Xy=q(()=>{ee(),se(),$e(),ue(),gd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Jt=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},yd=(e,t)=>{if(e.length>1){let i=Jt(e,1),r=Jt(e,2),n=Jt(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),ge({starts:i,ends:r,axes:n})}else return t},ta=(e,t,i,r,n)=>{let o=e;return e<0&&(o+=i[r[t]]),n[t]<0?Math.max(0,Math.min(o,i[r[t]]-1)):Math.max(0,Math.min(o,i[r[t]]))},_d=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${Q("uniforms.input_shape","i",i.length)};
            let steps_i = ${Q("uniforms.steps","i",i.length)};
            let signs_i = ${Q("uniforms.signs","i",i.length)};
            let starts_i = ${Q("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,wd=(e,t)=>{let i=e[0].dims,r=O.size(i),n=t.axes.length>0?O.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],o=Jt(e,4);o.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(n.length).fill(1));let s=t.starts.map((v,b)=>ta(v,b,i,n,o)),l=t.ends.map((v,b)=>ta(v,b,i,n,o));if(n.length!==s.length||n.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==i.length)for(let v=0;v<i.length;++v)n.includes(v)||(s.splice(v,0,0),l.splice(v,0,i[v]),o.splice(v,0,1));let d=o.map(v=>Math.sign(v));o.forEach((v,b,S)=>{if(v<0){let T=(l[b]-s[b])/v,I=s[b],A=I+T*o[b];s[b]=A,l[b]=I,S[b]=-v}});let c=i.slice(0);n.forEach((v,b)=>{c[v]=Math.ceil((l[v]-s[v])/o[v])});let m={dims:c,dataType:e[0].dataType},g=K("output",e[0].dataType,c.length),y=M("input",e[0].dataType,e[0].dims.length),_=O.size(c),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:o.length}],$=[{type:12,data:_},{type:12,data:s},{type:6,data:d},{type:12,data:o},...Z(e[0].dims,c)],k=v=>`
      ${v.registerUniforms(w).declareVariables(y,g)}
        ${_d(y,g,i)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",y.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:$})}},Kh=(e,t)=>{gd(e.inputs,t);let i=yd(e.inputs,t);e.compute(wd(e.inputs,i),{inputs:[0]})},Qh=e=>{let t=e.starts,i=e.ends,r=e.axes;return ge({starts:t,ends:i,axes:r})}}),bd,$d,Zh,Xh,Yy=q(()=>{ee(),se(),$e(),gt(),ue(),bd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},$d=(e,t)=>{let i=e.inputs[0],r=i.dims,n=O.size(r),o=r.length,s=O.normalizeAxis(t.axis,o),l=s<r.length-1,d,c=[];l?(c=Array.from({length:o},(z,D)=>D),c[s]=o-1,c[o-1]=s,d=e.compute(De(i,c),{inputs:[i],outputs:[-1]})[0]):d=i;let m=d.dims,g=m[o-1],y=n/g,_=be(g),w=g/_,$=64;y===1&&($=256);let k=(z,D)=>D===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:D===2?`max(${z}.x, ${z}.y)`:D===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=M("x",d.dataType,d.dims,_),b=K("result",d.dataType,d.dims,_),S=v.type.value,T=Ce(d.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,I=z=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${z.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${k("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${mt("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${_};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:d.dataType}],dispatchGroup:{x:y},programUniforms:[{type:6,data:w}]}),getShaderSource:I},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(De(A,c),{inputs:[A]})},Zh=(e,t)=>{bd(e.inputs),$d(e,t)},Xh=e=>ge({axis:e.axis})}),ra,vd,xd,kd,Yh,Jy=q(()=>{ee(),se(),ue(),ra=e=>Array.from(e.getBigInt64Array(),Number),vd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ra(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},xd=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},kd=(e,t)=>{let i=e[0].dims,r=t??ra(e[1]),n=xd(i,r),o=O.size(n),s=e[0].dataType,l=M("input",s,i.length),d=K("output",s,n.length),c=m=>`
      const inputShape = ${l.indices(...i)};
      ${m.registerUniform("output_size","u32").declareVariables(l,d)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...Z(e[0].dims,n)]}),getShaderSource:c}},Yh=e=>{vd(e.inputs),e.compute(kd(e.inputs),{inputs:[0]})}}),Sd,Td,Jh,e0=q(()=>{ee(),se(),ue(),Sd=(e,t,i,r,n)=>{let o=K("output_data",n,i.length,4),s=M("a_data",t[1].dataType,t[1].dims.length,4),l=M("b_data",t[2].dataType,t[2].dims.length,4),d=M("c_data",t[0].dataType,t[0].dims.length,4),c,m=(g,y,_)=>`select(${y}, ${g}, ${_})`;if(!r)c=o.setByOffset("global_idx",m(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let g=(y,_,w="")=>{let $=`a_data[index_a${_}][component_a${_}]`,k=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${o.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,o)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,o)};
            let offset_c${_} = ${d.broadcastedIndicesToOffset(`output_indices${_}`,o)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${y}[${_}] = ${w}(${m($,k,v)});
          `};n===9?c=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:c=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${c}
      }`},Td=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,n=e[1].dataType,o=!(O.areEqual(t,i)&&O.areEqual(i,r)),s=t,l=O.size(t);if(o){let c=Dt.calcShape(Dt.calcShape(t,i,!1),r,!1);if(!c)throw new Error("Can't perform where op on the given tensors");s=c,l=O.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>Sd(c,e,s,o,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...Z(r,t,i,s)]})}},Jh=e=>{e.compute(Td(e.inputs))}}),ef,t0=q(()=>{fy(),Wa(),my(),gy(),yy(),_y(),wy(),ky(),Ty(),Cy(),Iy(),Ey(),zy(),Ay(),Oy(),Ry(),By(),My(),Ny(),Dy(),Py(),Uy(),Wy(),qy(),Vy(),bh(),Ly(),Gy(),Hy(),Fy(),jy(),Ua(),Ky(),Qy(),Zy(),Xy(),Yy(),xh(),Jy(),gt(),qa(),e0(),ef=new Map([["Abs",[Kp]],["Acos",[Qp]],["Acosh",[Zp]],["Add",[zc]],["ArgMax",[Gp,fa]],["ArgMin",[Lp,fa]],["Asin",[Xp]],["Asinh",[Yp]],["Atan",[Jp]],["Atanh",[ec]],["Attention",[Hp]],["AveragePool",[Oh,Ah]],["BatchNormalization",[Fp]],["BiasAdd",[jp]],["BiasSplitGelu",[Ec]],["Cast",[rc,tc]],["Ceil",[ac]],["Clip",[ic]],["Concat",[Wc,qc]],["Conv",[ba,wa]],["ConvTranspose",[Xc,Zc]],["Cos",[nc]],["Cosh",[sc]],["CumSum",[Yc,Jc]],["DepthToSpace",[eh,th]],["DequantizeLinear",[Uh,Wh]],["Div",[Ac]],["Einsum",[rh,ih]],["Elu",[oc,ar]],["Equal",[Oc]],["Erf",[uc]],["Exp",[lc]],["Expand",[ah]],["FastGelu",[nh]],["Floor",[dc]],["FusedConv",[ba,wa]],["Gather",[oh,sh]],["GatherElements",[hh,ch]],["GatherBlockQuantized",[dh,ph]],["GatherND",[uh,lh]],["Gelu",[pc]],["Gemm",[mh,fh]],["GlobalAveragePool",[Bh,Rh]],["GlobalMaxPool",[Ph,Dh]],["Greater",[Nc]],["GreaterOrEqual",[Pc]],["GridSample",[gh,yh]],["GroupQueryAttention",[kh]],["HardSigmoid",[wc,_c]],["InstanceNormalization",[Sh]],["LayerNormalization",[Th]],["LeakyRelu",[cc,ar]],["Less",[Dc]],["LessOrEqual",[Uc]],["Log",[Cc]],["MatMul",[Ch]],["MatMulNBits",[Ih,Eh]],["MaxPool",[Mh,Nh]],["Mul",[Rc]],["MultiHeadAttention",[wh,_h]],["Neg",[fc]],["Not",[hc]],["Pad",[zh]],["Pow",[Bc]],["QuickGelu",[Ic,ar]],["Range",[qh]],["Reciprocal",[mc]],["ReduceMin",[Pp]],["ReduceMean",[Rp]],["ReduceMax",[Dp]],["ReduceSum",[Wp]],["ReduceProd",[Up]],["ReduceL1",[Bp]],["ReduceL2",[Mp]],["ReduceLogSum",[Vp]],["ReduceLogSumExp",[Np]],["ReduceSumSquare",[qp]],["Relu",[gc]],["Resize",[Gh,Hh]],["RotaryEmbedding",[Fh]],["ScatterND",[Lh,Vh]],["Sigmoid",[yc]],["Sin",[bc]],["Sinh",[$c]],["Slice",[Kh,Qh]],["SkipLayerNormalization",[jh]],["Split",[$h,vh]],["Sqrt",[vc]],["Softmax",[Zh,Xh]],["Sub",[Mc]],["Tan",[xc]],["Tanh",[kc]],["ThresholdedRelu",[Tc,ar]],["Tile",[Yh]],["Transpose",[$p,vp]],["Where",[Jh]]])}),tf,r0=q(()=>{Qe(),st(),ue(),tf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,r,n){et(e.programInfo.name);let o=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let c of t)l.push({binding:l.length,resource:{buffer:c.buffer}});for(let c of i)l.push({binding:l.length,resource:{buffer:c.buffer}});n&&l.push({binding:l.length,resource:n});let d=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ke(e.programInfo.name)}dispose(){}build(e,t){et(e.name);let i=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(c=>{i.features.has(c.feature)&&r.push(`enable ${c.extension};`)});let n=bp(t,this.backend.device.limits),o=e.getShaderSource(n),s=`${r.join(`
`)}
${n.additionalImplementations}
${o}`,l=i.createShaderModule({code:s,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=i.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Ke(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&i<=n&&r<=n)return[t,i,r];let o=t*i*r,s=Math.ceil(Math.sqrt(o));if(s>n){if(s=Math.ceil(Math.cbrt(o)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Cd,Id,Ed,zd,rf,i0=q(()=>{Qe(),ee(),st(),fp(),cy(),t0(),r0(),Cd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let n=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${n}`);break}case"rank":{let o=e[r].dims.length;i.push(`${n};${o}`);break}case"dims":{let o=e[r].dims.join(",");i.push(`${n};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},Id=(e,t,i)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${Cd(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},Ed=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},zd=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},rf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},n=o=>t.features.has(o)&&i.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await t.requestDevice(r),this.deviceInfo=new zd(this.device),this.adapterInfo=new Ed(t.info||await t.requestAdapterInfo()),this.gpuDataManager=mp(this),this.programManager=new tf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ma(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;et(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let r=0;r<t.length/2;r++){let n=i[r],o=n.kernelId,s=this.kernels.get(o),l=s.kernelType,d=s.kernelName,c=n.programName,m=n.inputTensorViews,g=n.outputTensorViews,y=t[r*2],_=t[r*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let w=Number(y-this.queryTimeBase),$=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:m.map(k=>({dims:k.dims,dataType:xt(k.dataType)})),outputsMetadata:g.map(k=>({dims:k.dims,dataType:xt(k.dataType)})),kernelId:o,kernelType:l,kernelName:d,programName:c,startTime:w,endTime:$});else{let k="";m.forEach((b,S)=>{k+=`input[${S}]: [${b.dims}] | ${xt(b.dataType)}, `});let v="";g.forEach((b,S)=>{v+=`output[${S}]: [${b.dims}] | ${xt(b.dataType)}, `}),console.log(`[profiling] kernel "${o}|${l}|${d}|${c}" ${k}${v}execution time: ${$-w} ns`)}Ur("GPU",`${c}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Ke()}run(e,t,i,r,n,o){et(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let T=this.gpuDataManager.get(S);if(!T)throw new Error(`no GPU data for input: ${S}`);s.push(T)}let{outputs:l,dispatchGroup:d,programUniforms:c}=e.getRunData(t),m=i.length===0?l.map((b,S)=>S):i;if(m.length!==l.length)throw new Error(`Output size ${m.length} must be equal to ${l.length}.`);let g=[],y=[];for(let b=0;b<l.length;++b){if(!Number.isInteger(m[b])||m[b]<-3||m[b]>=o)throw new Error(`Invalid output index: ${m[b]}`);if(m[b]===-3)continue;let S=m[b]===-1,T=m[b]===-2,I=S||T?n(l[b].dataType,l[b].dims):r(m[b],l[b].dataType,l[b].dims);if(g.push(I),I.data===0)continue;let A=this.gpuDataManager.get(I.data);if(!A)throw new Error(`no GPU data for output: ${I.data}`);if(S&&this.temporaryData.push(A),T){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(A)}y.push(A)}if(s.length!==t.length||y.length!==g.length){if(y.length===0)return Ke(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(c){let b=0,S=[];c.forEach(z=>{let D=typeof z.data=="number"?[z.data]:z.data;if(D.length===0)return;let V=z.type===10?2:4,H,X;z.type===10?(X=D.length>4?16:D.length>2?8:D.length*V,H=D.length>4?16:V*D.length):(X=D.length<=2?D.length*V:16,H=16),b=Math.ceil(b/X)*X,S.push(b);let te=z.type===10?8:4;b+=D.length>4?Math.ceil(D.length/te)*H:D.length*V});let T=16;b=Math.ceil(b/T)*T;let I=new ArrayBuffer(b);c.forEach((z,D)=>{let V=S[D],H=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(I,V,H.length).set(H);else if(z.type===12)new Uint32Array(I,V,H.length).set(H);else if(z.type===10)new Uint16Array(I,V,H.length).set(H);else if(z.type===1)new Float32Array(I,V,H.length).set(H);else throw new Error(`Unsupported uniform type: ${xt(z.type)}`)});let A=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,I,0,b),this.gpuDataManager.release(A.id),_={offset:0,size:b,buffer:A.buffer}}let w=this.programManager.normalizeDispatchGroupSize(d),$=w[1]===1&&w[2]===1,k=Id(e,t,$),v=this.programManager.getArtifact(k);if(v||(v=this.programManager.build(e,w),this.programManager.setArtifact(k,v),he("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),c&&v.uniformVariablesInfo){if(c.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${c.length} in program "${v.programInfo.name}".`);for(let b=0;b<c.length;b++){let S=c[b],T=S.type,I=typeof S.data=="number"?1:S.data.length,[A,z]=v.uniformVariablesInfo[b];if(T!==A||I!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${A} with size ${z}, got type ${T} with size ${I} in program "${v.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,s,y,w,_),Ke(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,r){let n=ef.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:n[0],attributes:[n[1],i]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let n=r.kernelType,o=r.kernelName,s=r.kernelEntry,l=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${n}] ${o}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(c){return i.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${o}" failed. ${c}`)),1}finally{d&&i.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${n}] ${o}": ${c.message}`:null));for(let c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,r){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let o=n.get(t),s=this.gpuDataManager.registerExternalBuffer(i,r,o);return n.set(t,[s,i]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let r=await pa(this,e,t);return Na(r.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let r=0;r<i;r++){let n=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(o.computePipeline),n.setBindGroup(0,o.bindGroup),n.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ad,ia,Od,aa,na,sa,Rd,af,a0=q(()=>{st(),Ad=1,ia=()=>Ad++,Od=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),aa=(e,t)=>{let i=Od.get(e);if(!i)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((r,n)=>r*n)*i/8):0},na=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return aa(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((r,n)=>r===i[n])}},sa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,r){let n=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,i))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==aa(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,i,o,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Rd=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=ia();return this.tensorTrackersById.set(e,new sa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,r,n){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${i}, shape: ${r}, copyOld: ${n}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,i,r,n)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,r){let n=this.getMLContext(e),o=ia(),s=new na({sessionId:e,context:n,tensor:t,dataType:i,shape:r});return this.tensorTrackersById.set(o,new sa(this,s)),this.externalTensors.add(s),o}async getCachedTensor(e,t,i,r,n,o){let s=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,i)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${i}}`);let m=this.freeTensors.splice(d,1)[0];return m.sessionId=e,m}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${i}}`);let l=await s.createTensor({dataType:t,shape:i,dimensions:i,usage:r,writable:n,readable:o});return new na({sessionId:e,context:s,tensor:l,dataType:t,shape:i})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},af=(...e)=>new Rd(...e)}),Ar,Bd,nf,n0=q(()=>{ee(),Et(),fp(),a0(),st(),Ar=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Bd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((n,o)=>n===r[o]&&e[n]===t[n])},nf=class{constructor(e){this.tensorManager=af(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Ma(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){he("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){he("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let i of t)he("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let i=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(i=>Bd(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(n=>n.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,r,n){let o=Ar.get(i);if(!o)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,n)}async createTemporaryTensor(e,t,i){he("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${i}}`);let r=Ar.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,r,i,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Te().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return Na(i,t)}}registerMLTensor(e,t,i,r){let n=Ar.get(i);if(!n)throw new Error(`Unsupported ONNX data type: ${i}`);let o=this.tensorManager.registerTensor(e,t,n,r);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,i,r,n,o){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let l=o.get(s);if(!l)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+i>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+i).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),r.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let i=this.sessionGraphInputs.get(e);return i?i.includes(t):!1}flush(){}}}),sf={};ur(sf,{init:()=>of});var Or,Md,of,s0=q(()=>{ee(),i0(),st(),se(),n0(),Or=class uf{constructor(t,i,r,n){this.module=t,this.dataType=i,this.data=r,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new uf(this.module,this.dataType,this.data,t)}},Md=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,n=i/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*n++,o));let s=Number(e.getValue(r*n++,o));this.outputCount=Number(e.getValue(r*n++,o)),this.customDataOffset=Number(e.getValue(r*n++,"*")),this.customDataSize=Number(e.getValue(r*n++,o));let l=[];for(let d=0;d<s;d++){let c=Number(e.getValue(r*n++,o)),m=Number(e.getValue(r*n++,"*")),g=Number(e.getValue(r*n++,o)),y=[];for(let _=0;_<g;_++)y.push(Number(e.getValue(r*n++,o)));l.push(new Or(e,c,m,y))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let i=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,r=t?.outputs??[],n=(s,l,d)=>new Or(this.module,l,this.output(s,d),d),o=(s,l)=>{let d=kt(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Or(this.module,s,c,l)};return this.backend.run(e,i,r,n,o,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let r=this.module.PTR_SIZE,n=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(o+r*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(i)}}},of=async(e,t,i,r)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=new rf;await o.initialize(i,r),n("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,l,d,c=!1)=>{if(c)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(l)}, size=${Number(d)}`),o.memcpy(Number(s),Number(l));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let m=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(d));o.upload(Number(l),m)}},async(s,l,d)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(s,l,d)=>o.createKernel(s,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),s=>o.releaseKernel(s),(s,l,d,c)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let m=new Md(t,o,Number(l));return o.computeKernel(Number(s),m,c)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let o=new nf(i);n("webnn",[o,()=>o.reserveTensorId(),s=>o.releaseTensorId(s),async(s,l,d,c,m)=>o.ensureTensor(s,l,d,c,m),(s,l)=>{o.uploadTensor(s,l)},async(s,l)=>o.downloadTensor(s,l)])}}}),Nd,ja,Ka,ht,Dd,Hr,Qa,Za,oa,Xa,Ya,Ja,lf=q(()=>{dy(),py(),ee(),Et(),za(),hp(),Nd=(e,t)=>{Te()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},ja=async e=>{Nd(e.wasm.numThreads,qr(e.logLevel))},Ka=async(e,t)=>{{let i=(s0(),Pr(sf)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let r=e.webgpu.adapter;if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:o}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",Te(),e,r)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",Te(),e)}}},ht=new Map,Dd=e=>{let t=Te(),i=t.stackSave();try{let r=t.PTR_SIZE,n=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,n,n+r)!==0&&me("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(n,o)),Number(t.getValue(n+r,o))]}finally{t.stackRestore(i)}},Hr=e=>{let t=Te(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},Qa=async(e,t)=>{let i,r,n=Te();Array.isArray(e)?[i,r]=e:e.buffer===n.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=Hr(e);let o=0,s=0,l=0,d=[],c=[],m=[];try{if([s,d]=cp(t),t?.externalData&&n.mountExternalData){let b=[];for(let S of t.externalData){let T=typeof S=="string"?S:S.path;b.push(Ba(typeof S=="string"?S:S.data).then(I=>{n.mountExternalData(T,I)}))}await Promise.all(b)}for(let b of t?.executionProviders??[])if((typeof b=="string"?b:b.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof b!="string"){let S=b,T=S?.context,I=S?.gpuDevice,A=S?.deviceType,z=S?.powerPreference;T?n.currentContext=T:I?n.currentContext=await n.jsepCreateMLContext(I):n.currentContext=await n.jsepCreateMLContext({deviceType:A,powerPreference:z})}else n.currentContext=await n.jsepCreateMLContext();break}o=await n._OrtCreateSession(i,r,s),o===0&&me("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.jsepRegisterMLContext(o,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[g,y]=Dd(o),_=!!t?.enableGraphCapture,w=[],$=[],k=[];for(let b=0;b<g;b++){let S=n._OrtGetInputName(o,b);S===0&&me("Can't get an input name."),c.push(S),w.push(n.UTF8ToString(S))}for(let b=0;b<y;b++){let S=n._OrtGetOutputName(o,b);S===0&&me("Can't get an output name."),m.push(S);let T=n.UTF8ToString(S);$.push(T);{if(_&&t?.preferredOutputLocation===void 0){k.push("gpu-buffer");continue}let I=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[T]??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer"&&I!=="ml-tensor")throw new Error(`Not supported preferred output location: ${I}.`);if(_&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(I)}}let v=null;return k.some(b=>b==="gpu-buffer"||b==="ml-tensor")&&(l=n._OrtCreateBinding(o),l===0&&me("Can't create IO binding."),v={handle:l,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(b=>da(b))}),ht.set(o,[o,c,m,v,_,!1]),[o,w,$]}catch(g){throw c.forEach(y=>n._OrtFree(y)),m.forEach(y=>n._OrtFree(y)),l!==0&&n._OrtReleaseBinding(l)!==0&&me("Can't release IO binding."),o!==0&&n._OrtReleaseSession(o)!==0&&me("Can't release session."),g}finally{n._free(i),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&me("Can't release session options."),d.forEach(g=>n._free(g)),n.unmountExternalData?.()}},Za=e=>{let t=Te(),i=ht.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,n,o,s,l]=i;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&me("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&me("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),n.forEach(d=>t._OrtFree(d)),o.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&me("Can't release session."),ht.delete(e)},oa=async(e,t,i,r,n,o=!1)=>{if(!e){t.push(0);return}let s=Te(),l=s.PTR_SIZE,d=e[0],c=e[1],m=e[3],g=m,y,_;if(d==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let k=e[2].gpuBuffer;_=kt(Bt(d),c);let v=s.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(r,n,k,_)}else if(m==="ml-tensor"){let k=e[2].mlTensor;_=kt(Bt(d),c);let v=s.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(r,k,Bt(d),c)}else{let k=e[2];if(Array.isArray(k)){_=l*k.length,y=s._malloc(_),i.push(y);for(let v=0;v<k.length;v++){if(typeof k[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);s.setValue(y+v*l,ze(k[v],i),"*")}}else{let v=s.jsepIsGraphInput;if(d!=="string"&&v){let b=s._OrtGetInputName(r,n),S=s.UTF8ToString(b);if(v(r,S)){let T=Bt(d);_=kt(T,c),g="ml-tensor";let I=s.jsepCreateTemporaryTensor,A=s.jsepUploadTensor;if(!I||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await I(r,T,c);A(z,new Uint8Array(k.buffer,k.byteOffset,k.byteLength)),y=z}else _=k.byteLength,y=s._malloc(_),i.push(y),s.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,_),y)}else _=k.byteLength,y=s._malloc(_),i.push(y),s.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,_),y)}}let w=s.stackSave(),$=s.stackAlloc(4*c.length);try{c.forEach((v,b)=>s.setValue($+b*l,v,l===4?"i32":"i64"));let k=s._OrtCreateTensor(Bt(d),y,_,$,c.length,da(g));k===0&&me(`Can't create tensor for input/output. session=${r}, index=${n}.`),t.push(k)}finally{s.stackRestore(w)}},Xa=async(e,t,i,r,n,o)=>{let s=Te(),l=s.PTR_SIZE,d=ht.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=d[0],m=d[1],g=d[2],y=d[3],_=d[4],w=d[5],$=t.length,k=r.length,v=0,b=[],S=[],T=[],I=[],A=s.stackSave(),z=s.stackAlloc($*l),D=s.stackAlloc($*l),V=s.stackAlloc(k*l),H=s.stackAlloc(k*l);try{[v,b]=pp(o);for(let W=0;W<$;W++)await oa(i[W],S,I,e,t[W],_);for(let W=0;W<k;W++)await oa(n[W],T,I,e,$+r[W],_);for(let W=0;W<$;W++)s.setValue(z+W*l,S[W],"*"),s.setValue(D+W*l,m[t[W]],"*");for(let W=0;W<k;W++)s.setValue(V+W*l,T[W],"*"),s.setValue(H+W*l,g[r[W]],"*");if(y&&!w){let{handle:W,outputPreferredLocations:oe,outputPreferredLocationsEncoded:de}=y;if(m.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${m.length}).`);for(let F=0;F<$;F++){let le=t[F];await s._OrtBindInput(W,m[le],S[F])!==0&&me(`Can't bind input[${F}] for session=${e}.`)}for(let F=0;F<k;F++){let le=r[F];n[F]?.[3]?s._OrtBindOutput(W,g[le],T[F],0)!==0&&me(`Can't bind pre-allocated output[${F}] for session=${e}.`):s._OrtBindOutput(W,g[le],0,de[le])!==0&&me(`Can't bind output[${F}] to ${oe[F]} for session=${e}.`)}ht.set(e,[c,m,g,y,_,!0])}s.jsepOnRunStart?.(c);let X;y?X=await s._OrtRunWithBinding(c,y.handle,k,V,v):X=await s._OrtRun(c,D,z,$,H,k,V,v),X!==0&&me("failed to call OrtRun().");let te=[];for(let W=0;W<k;W++){let oe=Number(s.getValue(V+W*l,"*"));if(oe===T[W]){te.push(n[W]);continue}let de=s.stackSave(),F=s.stackAlloc(4*l),le=!1,pe,j=0;try{s._OrtGetTensorData(oe,F,F+l,F+2*l,F+3*l)!==0&&me(`Can't access output tensor data on index ${W}.`);let ce=l===4?"i32":"i64",P=Number(s.getValue(F,ce));j=s.getValue(F+l,"*");let L=s.getValue(F+l*2,"*"),B=Number(s.getValue(F+l*3,ce)),J=[];for(let Se=0;Se<B;Se++)J.push(Number(s.getValue(L+Se*l,ce)));s._OrtFree(L)!==0&&me("Can't free memory for tensor dims.");let ve=J.reduce((Se,xe)=>Se*xe,1);pe=xt(P);let Re=y?.outputPreferredLocations[r[W]];if(pe==="string"){if(Re==="gpu-buffer"||Re==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Se=[];for(let xe=0;xe<ve;xe++){let Ie=s.getValue(j+xe*l,"*"),lr=s.getValue(j+(xe+1)*l,"*"),Ut=xe===ve-1?void 0:lr-Ie;Se.push(s.UTF8ToString(Ie,Ut))}te.push([pe,J,Se,"cpu"])}else if(Re==="gpu-buffer"&&ve>0){let Se=s.jsepGetBuffer;if(!Se)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let xe=Se(j),Ie=kt(P,ve);if(Ie===void 0||!Oa(pe))throw new Error(`Unsupported data type: ${pe}`);le=!0,te.push([pe,J,{gpuBuffer:xe,download:s.jsepCreateDownloader(xe,Ie,pe),dispose:()=>{s._OrtReleaseTensor(oe)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(Re==="ml-tensor"&&ve>0){let Se=s.jsepEnsureTensor;if(!Se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(kt(P,ve)===void 0||!Ra(pe))throw new Error(`Unsupported data type: ${pe}`);let xe=await Se(e,j,P,J,!1);le=!0,te.push([pe,J,{mlTensor:xe,download:s.jsepCreateMLTensorDownloader(j,pe),dispose:()=>{s.jsepReleaseTensorId(j),s._OrtReleaseTensor(oe)}},"ml-tensor"])}else{let Se=Aa(pe),xe=new Se(ve);new Uint8Array(xe.buffer,xe.byteOffset,xe.byteLength).set(s.HEAPU8.subarray(j,j+xe.byteLength)),te.push([pe,J,xe,"cpu"])}}finally{s.stackRestore(de),pe==="string"&&j&&s._free(j),le||s._OrtReleaseTensor(oe),s.jsepOnRunEnd?.(c)}}return y&&!_&&(s._OrtClearBoundOutputs(y.handle)!==0&&me("Can't clear bound outputs."),ht.set(e,[c,m,g,y,_,!1])),te}finally{s.stackRestore(A),S.forEach(X=>s._OrtReleaseTensor(X)),T.forEach(X=>s._OrtReleaseTensor(X)),I.forEach(X=>s._free(X)),v!==0&&s._OrtReleaseRunOptions(v),b.forEach(X=>s._free(X))}},Ya=e=>{let t=Te(),i=ht.get(e);if(!i)throw new Error("invalid session id");let r=i[0],n=t._OrtEndProfiling(r);n===0&&me("Can't get an profile file name."),t._OrtFree(n)},Ja=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),ft,We,Rt,er,tr,Rr,ua,Br,bt,$t,Pd,df,pf,cf,hf,ff,mf,gf,yf=q(()=>{Qe(),lf(),Et(),Ia(),ft=()=>!!ye.wasm.proxy&&typeof document<"u",Rt=!1,er=!1,tr=!1,Br=new Map,bt=(e,t)=>{let i=Br.get(e);i?i.push(t):Br.set(e,[t])},$t=()=>{if(Rt||!er||tr||!We)throw new Error("worker not ready")},Pd=e=>{switch(e.data.type){case"init-wasm":Rt=!1,e.data.err?(tr=!0,ua[1](e.data.err)):(er=!0,ua[0]()),Rr&&(URL.revokeObjectURL(Rr),Rr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Br.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},df=async()=>{if(!er){if(Rt)throw new Error("multiple calls to 'initWasm()' detected.");if(tr)throw new Error("previous call to 'initWasm()' failed.");if(Rt=!0,ft())return new Promise((e,t)=>{We?.terminate(),lp().then(([i,r])=>{try{We=r,We.onerror=o=>t(o),We.onmessage=Pd,ua=[e,t];let n={type:"init-wasm",in:ye};!n.in.wasm.wasmPaths&&(i||import.meta.url?.startsWith("file:"))&&(n.in.wasm.wasmPaths={wasm:new URL("/static/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href}),We.postMessage(n),Rr=i}catch(n){t(n)}},t)});try{await Ea(ye.wasm),await ja(ye),er=!0}catch(e){throw tr=!0,e}finally{Rt=!1}}},pf=async e=>{if(ft())return $t(),new Promise((t,i)=>{bt("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:ye}};We.postMessage(r)});await Ka(ye,e)},cf=async e=>ft()?($t(),new Promise((t,i)=>{bt("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};We.postMessage(r,[e.buffer])})):Hr(e),hf=async(e,t)=>{if(ft()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return $t(),new Promise((i,r)=>{bt("create",[i,r]);let n={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),We.postMessage(n,o)})}else return Qa(e,t)},ff=async e=>{if(ft())return $t(),new Promise((t,i)=>{bt("release",[t,i]);let r={type:"release",in:e};We.postMessage(r)});Za(e)},mf=async(e,t,i,r,n,o)=>{if(ft()){if(i.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return $t(),new Promise((s,l)=>{bt("run",[s,l]);let d=i,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:r,options:o}};We.postMessage(c,Ja(d))})}else return Xa(e,t,i,r,n,o)},gf=async e=>{if(ft())return $t(),new Promise((t,i)=>{bt("end-profiling",[t,i]);let r={type:"end-profiling",in:e};We.postMessage(r)});Ya(e)}}),la,Ud,_f,o0=q(()=>{Qe(),yf(),ee(),Ca(),hp(),la=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ud=e=>{switch(e[3]){case"cpu":return new je(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Oa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:n}=e[2];return je.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:n})}case"ml-tensor":{let t=e[0];if(!Ra(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:n}=e[2];return je.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},_f=class{async fetchModelAndCopyToWasmMemory(e){return cf(await Ba(e))}async loadModel(e,t){et();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames]=await hf(i,t),Ke()}async dispose(){return ff(this.sessionId)}async run(e,t,i){et();let r=[],n=[];Object.entries(e).forEach(g=>{let y=g[0],_=g[1],w=this.inputNames.indexOf(y);if(w===-1)throw new Error(`invalid input '${y}'`);r.push(_),n.push(w)});let o=[],s=[];Object.entries(t).forEach(g=>{let y=g[0],_=g[1],w=this.outputNames.indexOf(y);if(w===-1)throw new Error(`invalid output '${y}'`);o.push(_),s.push(w)});let l=r.map((g,y)=>la(g,()=>`input "${this.inputNames[n[y]]}"`)),d=o.map((g,y)=>g?la(g,()=>`output "${this.outputNames[s[y]]}"`):null),c=await mf(this.sessionId,n,l,s,d,i),m={};for(let g=0;g<c.length;g++)m[this.outputNames[s[g]]]=o[g]??Ud(c[g]);return Ke(),m}startProfiling(){}endProfiling(){gf(this.sessionId)}}}),wf={};ur(wf,{OnnxruntimeWebAssemblyBackend:()=>xa,initializeFlags:()=>va,wasmBackend:()=>bf});var va,xa,bf,u0=q(()=>{Qe(),yf(),o0(),va=()=>{if((typeof ye.wasm.initTimeout!="number"||ye.wasm.initTimeout<0)&&(ye.wasm.initTimeout=0),ye.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ye.wasm.proxy!="boolean"&&(ye.wasm.proxy=!1),typeof ye.wasm.trace!="boolean"&&(ye.wasm.trace=!1),typeof ye.wasm.numThreads!="number"||!Number.isInteger(ye.wasm.numThreads)||ye.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ye.wasm.numThreads=1;else{let e=typeof navigator>"u"?Fg("node:os").cpus().length:navigator.hardwareConcurrency;ye.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},xa=class{async init(e){va(),await df(),await pf(e)}async createInferenceSessionHandler(e,t){let i=new _f;return await i.loadModel(e,t),Promise.resolve(i)}},bf=new xa});Qe();Qe();Qe();var l0="1.21.0";{let e=(u0(),Pr(wf)).wasmBackend;Mt("webgpu",e,5),Mt("webnn",e,5),Mt("cpu",e,10),Mt("wasm",e,10)}Object.defineProperty(ye.versions,"web",{value:l0,enumerable:!0});const d0=20*1024*1024,$f=640,p0=.25,vf=.45,c0=["person","bicycle","car","motorcycle","airplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","couch","potted plant","bed","dining table","toilet","tv","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush"];function h0(e,t,i=$f){const r=Math.min(i/e,i/t),n=Math.round(e*r),o=Math.round(t*r),s=Math.floor((i-n)/2),l=Math.floor((i-o)/2);return{scale:r,padX:s,padY:l,newWidth:n,newHeight:o,targetSize:i,srcWidth:e,srcHeight:t}}function f0(e,t){const i=(e.x1-t.padX)/t.scale,r=(e.y1-t.padY)/t.scale,n=(e.x2-t.padX)/t.scale,o=(e.y2-t.padY)/t.scale;return{x1:Mr(Math.round(i),0,t.srcWidth),y1:Mr(Math.round(r),0,t.srcHeight),x2:Mr(Math.round(n),0,t.srcWidth),y2:Mr(Math.round(o),0,t.srcHeight)}}function Mr(e,t,i){return Math.min(Math.max(e,t),i)}function m0(e,t){const i=Math.max(e.x1,t.x1),r=Math.max(e.y1,t.y1),n=Math.min(e.x2,t.x2),o=Math.min(e.y2,t.y2),s=Math.max(0,n-i)*Math.max(0,o-r),l=Math.max(0,e.x2-e.x1)*Math.max(0,e.y2-e.y1),d=Math.max(0,t.x2-t.x1)*Math.max(0,t.y2-t.y1),c=l+d-s;return c>0?s/c:0}function g0(e,t=vf){const i=[...e].sort((n,o)=>o.score-n.score),r=[];for(const n of i)r.some(o=>o.classId===n.classId&&m0(o,n)>t)||r.push(n);return r}function y0(e,t,i={}){const r=i.confThreshold??p0,n=i.iouThreshold??vf,o=i.meta,s=t[1]-4,l=t[2],d=[];for(let c=0;c<l;c+=1){let m=0,g=0;for(let I=0;I<s;I+=1){const A=e[(4+I)*l+c];A>m&&(m=A,g=I)}if(m<r)continue;const y=e[0*l+c],_=e[1*l+c],w=e[2*l+c],$=e[3*l+c],k=y-w/2,v=_-$/2,b=y+w/2,S=_+$/2,T=o?f0({x1:k,y1:v,x2:b,y2:S},o):{x1:k,y1:v,x2:b,y2:S};d.push({...T,width:Math.max(0,T.x2-T.x1),height:Math.max(0,T.y2-T.y1),score:m,confidence:Math.round(m*1e3)/10,classId:g,className:c0[g]||`class-${g}`})}return g0(d,n)}var _0="/static/assets/ort-wasm-simd-threaded.jsep-C9FfgNCC.mjs",w0="/static/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm";const b0={wasm:w0,mjs:_0};function $0(e,t=$f){const{width:i,height:r}=e,n=h0(i,r,t),o=new OffscreenCanvas(i,r),s=o.getContext("2d",{willReadFrequently:!0});if(!s)throw new Error("当前环境无法创建离屏画布。");s.putImageData(e,0,0);const d=new OffscreenCanvas(t,t).getContext("2d",{willReadFrequently:!0});if(!d)throw new Error("当前环境无法创建离屏画布。");d.fillStyle="#727272",d.fillRect(0,0,t,t),d.drawImage(o,n.padX,n.padY,n.newWidth,n.newHeight);const c=d.getImageData(0,0,t,t),m=t*t,g=new Float32Array(3*m);for(let y=0;y<t;y+=1)for(let _=0;_<t;_+=1){const w=(y*t+_)*4,$=c.data[w]/255,k=c.data[w+1]/255,v=c.data[w+2]/255,b=y*t+_;g[b]=$,g[m+b]=k,g[2*m+b]=v}return{tensor:g,meta:n}}let St=null,xf="images",kf="output0",nt={confThreshold:.25,iouThreshold:.45};ye.wasm.numThreads=1;ye.logLevel="error";ye.wasm.wasmPaths=b0;function Sf(e,t){const i=e instanceof Error&&e.message?e.message:t;self.postMessage({type:"error",message:i})}async function Tf(e){if(St)return;self.postMessage({type:"progress",message:"正在下载检测模型…"});const t=await fetch(e);if(!t.ok)throw new Error("检测模型下载失败，请检查网络后刷新页面。");const i=await t.arrayBuffer();if(i.byteLength>d0)throw new Error("检测模型超过 20 MB 限制，无法加载。");self.postMessage({type:"progress",message:"正在初始化推理引擎…"}),St=await Ta.create(i,{executionProviders:["wasm"]});const r=St.inputNames,n=St.outputNames;r?.length&&(xf=r[0]),n?.length&&(kf=n[0])}async function v0(e){if(!e?.data?.length)throw new Error("缺少检测图像数据。");await Tf(nt.modelUrl),self.postMessage({type:"progress",message:"正在检测目标…"});const{tensor:t,meta:i}=$0(e),r=new je("float32",t,[1,3,i.targetSize,i.targetSize]),n={[xf]:r},s=(await St.run(n))[kf];return y0(s.data,s.dims,{confThreshold:nt.confThreshold,iouThreshold:nt.iouThreshold,meta:i})}self.addEventListener("unhandledrejection",e=>{Sf(e.reason,"检测线程执行失败，请刷新页面后重试。")});self.onmessage=async({data:e})=>{const{type:t,imageData:i,file:r,modelUrl:n,confThreshold:o,iouThreshold:s}=e;try{if(t==="load"){nt.modelUrl=n,o!=null&&(nt.confThreshold=o),s!=null&&(nt.iouThreshold=s),await Tf(n),self.postMessage({type:"ready"});return}if(t==="detect"){o!=null&&(nt.confThreshold=o),s!=null&&(nt.iouThreshold=s),n&&(nt.modelUrl=n);let l=i;if(!l&&r){const{fileToImageData:c}=await import("./imageData-DYdLlAkE.js");l=await c(r)}const d=await v0(l);self.postMessage({type:"result",objects:d});return}t==="dispose"&&(St?.release?.(),St=null)}catch(l){Sf(l,"目标检测失败，请换一张图片或稍后重试。")}};
