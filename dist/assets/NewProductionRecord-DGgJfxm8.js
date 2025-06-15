var ma=n=>{throw TypeError(n)};var is=(n,t,e)=>t.has(n)||ma("Cannot "+e);var yt=(n,t,e)=>(is(n,t,"read from private field"),e?e.call(n):t.get(n)),Cn=(n,t,e)=>t.has(n)?ma("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Pn=(n,t,e,r)=>(is(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e),xn=(n,t,e)=>(is(n,t,"access private method"),e);import{b as D,x as Sr,z as gh,c as ai,j as C,g as Yt,h as Jt,m as K,k as re,n as ne,q as Zt,o as zt,p as qt,an as Kl,i as yh,ae as vh,a1 as Bs,ac as Ue,w as Ri,F as _h,$ as Si,_ as js,A as li,P as Ge,l as ge,H as Eh,a6 as Ih,ab as Ql,ao as bh,y as wh,J as ga}from"./deepmerge-xm9zYRhm.js";import{S as Th,v as Ah,q as ya,w as Rh,d as Xl,x as Sh,n as Ch,y as Ph}from"./QueryClientProvider-NCoK249Z.js";import{o as yr,d as Yl,g as xh,i as ys,b as ss,e as Vh,T as ee,c as Dh,L as kh,m as Nh,M as Oh,u as Mh,f as va,B as _a,S as Fh}from"./App-BTHfv-zW.js";import"./index-C0H0XfXX.js";var Ke,Qe,oe,Me,Be,ni,vs,Gl,Lh=(Gl=class extends Th{constructor(t,e){super();Cn(this,Be);Cn(this,Ke);Cn(this,Qe);Cn(this,oe);Cn(this,Me);Pn(this,Ke,t),this.setOptions(e),this.bindMethods(),xn(this,Be,ni).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const e=this.options;this.options=yt(this,Ke).defaultMutationOptions(t),Ah(this.options,e)||yt(this,Ke).getMutationCache().notify({type:"observerOptionsUpdated",mutation:yt(this,oe),observer:this}),e!=null&&e.mutationKey&&this.options.mutationKey&&ya(e.mutationKey)!==ya(this.options.mutationKey)?this.reset():((r=yt(this,oe))==null?void 0:r.state.status)==="pending"&&yt(this,oe).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=yt(this,oe))==null||t.removeObserver(this)}onMutationUpdate(t){xn(this,Be,ni).call(this),xn(this,Be,vs).call(this,t)}getCurrentResult(){return yt(this,Qe)}reset(){var t;(t=yt(this,oe))==null||t.removeObserver(this),Pn(this,oe,void 0),xn(this,Be,ni).call(this),xn(this,Be,vs).call(this)}mutate(t,e){var r;return Pn(this,Me,e),(r=yt(this,oe))==null||r.removeObserver(this),Pn(this,oe,yt(this,Ke).getMutationCache().build(yt(this,Ke),this.options)),yt(this,oe).addObserver(this),yt(this,oe).execute(t)}},Ke=new WeakMap,Qe=new WeakMap,oe=new WeakMap,Me=new WeakMap,Be=new WeakSet,ni=function(){var e;const t=((e=yt(this,oe))==null?void 0:e.state)??Rh();Pn(this,Qe,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},vs=function(t){Xl.batch(()=>{var e,r,s,o,a,u,h,d;if(yt(this,Me)&&this.hasListeners()){const g=yt(this,Qe).variables,_=yt(this,Qe).context;(t==null?void 0:t.type)==="success"?((r=(e=yt(this,Me)).onSuccess)==null||r.call(e,t.data,g,_),(o=(s=yt(this,Me)).onSettled)==null||o.call(s,t.data,null,g,_)):(t==null?void 0:t.type)==="error"&&((u=(a=yt(this,Me)).onError)==null||u.call(a,t.error,g,_),(d=(h=yt(this,Me)).onSettled)==null||d.call(h,void 0,t.error,g,_))}this.listeners.forEach(g=>{g(yt(this,Qe))})})},Gl);function Bh(n,t){const e=Sh(),[r]=D.useState(()=>new Lh(e,n));D.useEffect(()=>{r.setOptions(n)},[r,n]);const s=D.useSyncExternalStore(D.useCallback(a=>r.subscribe(Xl.batchCalls(a)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),o=D.useCallback((a,u)=>{r.mutate(a,u).catch(Ch)},[r]);if(s.error&&Ph(r.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:o,mutateAsync:s.mutate}}function Qr(n){return parseInt(n,10)||0}const jh={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function $h(n){for(const t in n)return!1;return!0}function Ea(n){return $h(n)||n.outerHeightStyle===0&&!n.overflowing}const Uh=D.forwardRef(function(t,e){const{onChange:r,maxRows:s,minRows:o=1,style:a,value:u,...h}=t,{current:d}=D.useRef(u!=null),g=D.useRef(null),_=Sr(e,g),b=D.useRef(null),T=D.useRef(null),S=D.useCallback(()=>{const x=g.current,O=T.current;if(!x||!O)return;const N=yr(x).getComputedStyle(x);if(N.width==="0px")return{outerHeightStyle:0,overflowing:!1};O.style.width=N.width,O.value=x.value||t.placeholder||"x",O.value.slice(-1)===`
`&&(O.value+=" ");const v=N.boxSizing,p=Qr(N.paddingBottom)+Qr(N.paddingTop),m=Qr(N.borderBottomWidth)+Qr(N.borderTopWidth),E=O.scrollHeight;O.value="x";const I=O.scrollHeight;let w=E;o&&(w=Math.max(Number(o)*I,w)),s&&(w=Math.min(Number(s)*I,w)),w=Math.max(w,I);const y=w+(v==="border-box"?p+m:0),it=Math.abs(w-E)<=1;return{outerHeightStyle:y,overflowing:it}},[s,o,t.placeholder]),k=gh(()=>{const x=g.current,O=S();if(!x||!O||Ea(O))return!1;const $=O.outerHeightStyle;return b.current!=null&&b.current!==$}),P=D.useCallback(()=>{const x=g.current,O=S();if(!x||!O||Ea(O))return;const $=O.outerHeightStyle;b.current!==$&&(b.current=$,x.style.height=`${$}px`),x.style.overflow=O.overflowing?"hidden":""},[S]),F=D.useRef(-1);ai(()=>{const x=Yl(P),O=g==null?void 0:g.current;if(!O)return;const $=yr(O);$.addEventListener("resize",x);let N;return typeof ResizeObserver<"u"&&(N=new ResizeObserver(()=>{k()&&(N.unobserve(O),cancelAnimationFrame(F.current),P(),F.current=requestAnimationFrame(()=>{N.observe(O)}))}),N.observe(O)),()=>{x.clear(),cancelAnimationFrame(F.current),$.removeEventListener("resize",x),N&&N.disconnect()}},[S,P,k]),ai(()=>{P()});const B=x=>{d||P(),r&&r(x)};return C.jsxs(D.Fragment,{children:[C.jsx("textarea",{value:u,onChange:B,ref:_,rows:o,style:a,...h}),C.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:T,tabIndex:-1,style:{...jh.shadow,...a,paddingTop:0,paddingBottom:0}})]})});function $n({props:n,states:t,muiFormControl:e}){return t.reduce((r,s)=>(r[s]=n[s],e&&typeof n[s]>"u"&&(r[s]=e[s]),r),{})}const Ci=D.createContext(void 0);function In(){return D.useContext(Ci)}function Ia(n){return n!=null&&!(Array.isArray(n)&&n.length===0)}function ui(n,t=!1){return n&&(Ia(n.value)&&n.value!==""||t&&Ia(n.defaultValue)&&n.defaultValue!=="")}function zh(n){return n.startAdornment}function qh(n){return Jt("MuiInputBase",n)}const Nn=Yt("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var ba;const Pi=(n,t)=>{const{ownerState:e}=n;return[t.root,e.formControl&&t.formControl,e.startAdornment&&t.adornedStart,e.endAdornment&&t.adornedEnd,e.error&&t.error,e.size==="small"&&t.sizeSmall,e.multiline&&t.multiline,e.color&&t[`color${zt(e.color)}`],e.fullWidth&&t.fullWidth,e.hiddenLabel&&t.hiddenLabel]},xi=(n,t)=>{const{ownerState:e}=n;return[t.input,e.size==="small"&&t.inputSizeSmall,e.multiline&&t.inputMultiline,e.type==="search"&&t.inputTypeSearch,e.startAdornment&&t.inputAdornedStart,e.endAdornment&&t.inputAdornedEnd,e.hiddenLabel&&t.inputHiddenLabel]},Hh=n=>{const{classes:t,color:e,disabled:r,error:s,endAdornment:o,focused:a,formControl:u,fullWidth:h,hiddenLabel:d,multiline:g,readOnly:_,size:b,startAdornment:T,type:S}=n,k={root:["root",`color${zt(e)}`,r&&"disabled",s&&"error",h&&"fullWidth",a&&"focused",u&&"formControl",b&&b!=="medium"&&`size${zt(b)}`,g&&"multiline",T&&"adornedStart",o&&"adornedEnd",d&&"hiddenLabel",_&&"readOnly"],input:["input",r&&"disabled",S==="search"&&"inputTypeSearch",g&&"inputMultiline",b==="small"&&"inputSizeSmall",d&&"inputHiddenLabel",T&&"inputAdornedStart",o&&"inputAdornedEnd",_&&"readOnly"]};return qt(k,qh,t)},Vi=K("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Pi})(Zt(({theme:n})=>({...n.typography.body1,color:(n.vars||n).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Nn.disabled}`]:{color:(n.vars||n).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:t})=>t.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:t,size:e})=>t.multiline&&e==="small",style:{paddingTop:1}},{props:({ownerState:t})=>t.fullWidth,style:{width:"100%"}}]}))),Di=K("input",{name:"MuiInputBase",slot:"Input",overridesResolver:xi})(Zt(({theme:n})=>{const t=n.palette.mode==="light",e={color:"currentColor",...n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})},r={opacity:"0 !important"},s=n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":e,"&::-moz-placeholder":e,"&::-ms-input-placeholder":e,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Nn.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus::-ms-input-placeholder":s},[`&.${Nn.disabled}`]:{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled},variants:[{props:({ownerState:o})=>!o.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:o})=>o.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),wa=xh({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),$s=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiInputBase"}),{"aria-describedby":s,autoComplete:o,autoFocus:a,className:u,color:h,components:d={},componentsProps:g={},defaultValue:_,disabled:b,disableInjectingGlobalStyles:T,endAdornment:S,error:k,fullWidth:P=!1,id:F,inputComponent:B="input",inputProps:x={},inputRef:O,margin:$,maxRows:N,minRows:v,multiline:p=!1,name:m,onBlur:E,onChange:I,onClick:w,onFocus:y,onKeyDown:it,onKeyUp:at,placeholder:nt,readOnly:pt,renderSuffix:lt,rows:z,size:mt,slotProps:xt={},slots:Mt={},startAdornment:Q,type:Ft="text",value:dt,...ye}=r,Vt=x.value!=null?x.value:dt,{current:ve}=D.useRef(Vt!=null),bt=D.useRef(),H=D.useCallback(ct=>{},[]),rt=Sr(bt,O,x.ref,H),[Z,At]=D.useState(!1),X=In(),ut=$n({props:r,muiFormControl:X,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ut.focused=X?X.focused:Z,D.useEffect(()=>{!X&&b&&Z&&(At(!1),E&&E())},[X,b,Z,E]);const ie=X&&X.onFilled,de=X&&X.onEmpty,se=D.useCallback(ct=>{ui(ct)?ie&&ie():de&&de()},[ie,de]);ai(()=>{ve&&se({value:Vt})},[Vt,se,ve]);const _e=ct=>{y&&y(ct),x.onFocus&&x.onFocus(ct),X&&X.onFocus?X.onFocus(ct):At(!0)},Ht=ct=>{E&&E(ct),x.onBlur&&x.onBlur(ct),X&&X.onBlur?X.onBlur(ct):At(!1)},Rt=(ct,...me)=>{if(!ve){const ze=ct.target||bt.current;if(ze==null)throw new Error(Kl(1));se({value:ze.value})}x.onChange&&x.onChange(ct,...me),I&&I(ct,...me)};D.useEffect(()=>{se(bt.current)},[]);const fe=ct=>{bt.current&&ct.currentTarget===ct.target&&bt.current.focus(),w&&w(ct)};let pe=B,wt=x;p&&pe==="input"&&(z?wt={type:void 0,minRows:z,maxRows:z,...wt}:wt={type:void 0,maxRows:N,minRows:v,...wt},pe=Uh);const De=ct=>{se(ct.animationName==="mui-auto-fill-cancel"?bt.current:{value:"x"})};D.useEffect(()=>{X&&X.setAdornedStart(!!Q)},[X,Q]);const _t={...r,color:ut.color||"primary",disabled:ut.disabled,endAdornment:S,error:ut.error,focused:ut.focused,formControl:X,fullWidth:P,hiddenLabel:ut.hiddenLabel,multiline:p,size:ut.size,startAdornment:Q,type:Ft},Tt=Hh(_t),Ee=Mt.root||d.Root||Vi,ke=xt.root||g.root||{},Ae=Mt.input||d.Input||Di;return wt={...wt,...xt.input??g.input},C.jsxs(D.Fragment,{children:[!T&&typeof wa=="function"&&(ba||(ba=C.jsx(wa,{}))),C.jsxs(Ee,{...ke,ref:e,onClick:fe,...ye,...!ys(Ee)&&{ownerState:{..._t,...ke.ownerState}},className:ne(Tt.root,ke.className,u,pt&&"MuiInputBase-readOnly"),children:[Q,C.jsx(Ci.Provider,{value:null,children:C.jsx(Ae,{"aria-invalid":ut.error,"aria-describedby":s,autoComplete:o,autoFocus:a,defaultValue:_,disabled:ut.disabled,id:F,onAnimationStart:De,name:m,placeholder:nt,readOnly:pt,required:ut.required,rows:z,value:Vt,onKeyDown:it,onKeyUp:at,type:Ft,...wt,...!ys(Ae)&&{as:pe,ownerState:{..._t,...wt.ownerState}},ref:rt,className:ne(Tt.input,wt.className,pt&&"MuiInputBase-readOnly"),onBlur:Ht,onChange:Rt,onFocus:_e})}),S,lt?lt({...ut,startAdornment:Q}):null]})]})});function Wh(n){return Jt("MuiInput",n)}const ir={...Nn,...Yt("MuiInput",["root","underline","input"])};function Gh(n){return Jt("MuiOutlinedInput",n)}const Se={...Nn,...Yt("MuiOutlinedInput",["root","notchedOutline","input"])};function Kh(n){return Jt("MuiFilledInput",n)}const un={...Nn,...Yt("MuiFilledInput",["root","underline","input","adornedStart","adornedEnd","sizeSmall","multiline","hiddenLabel"])},Qh=yh(C.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");function Xh(n){return Jt("MuiDivider",n)}Yt("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Yh=n=>{const{absolute:t,children:e,classes:r,flexItem:s,light:o,orientation:a,textAlign:u,variant:h}=n;return qt({root:["root",t&&"absolute",h,o&&"light",a==="vertical"&&"vertical",s&&"flexItem",e&&"withChildren",e&&a==="vertical"&&"withChildrenVertical",u==="right"&&a!=="vertical"&&"textAlignRight",u==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},Xh,r)},Jh=K("div",{name:"MuiDivider",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(Zt(({theme:n})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(n.vars||n).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:n.vars?`rgba(${n.vars.palette.dividerChannel} / 0.08)`:vh(n.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:n.spacing(2),marginRight:n.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:n.spacing(1),marginBottom:n.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(n.vars||n).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(n.vars||n).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),Zh=K("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(Zt(({theme:n})=>({display:"inline-block",paddingLeft:`calc(${n.spacing(1)} * 1.2)`,paddingRight:`calc(${n.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${n.spacing(1)} * 1.2)`,paddingBottom:`calc(${n.spacing(1)} * 1.2)`}}]}))),_s=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiDivider"}),{absolute:s=!1,children:o,className:a,orientation:u="horizontal",component:h=o||u==="vertical"?"div":"hr",flexItem:d=!1,light:g=!1,role:_=h!=="hr"?"separator":void 0,textAlign:b="center",variant:T="fullWidth",...S}=r,k={...r,absolute:s,component:h,flexItem:d,light:g,orientation:u,role:_,textAlign:b,variant:T},P=Yh(k);return C.jsx(Jh,{as:h,className:ne(P.root,a),role:_,ref:e,ownerState:k,"aria-orientation":_==="separator"&&(h!=="hr"||u==="vertical")?u:void 0,...S,children:o?C.jsx(Zh,{className:P.wrapper,ownerState:k,children:o}):null})});_s&&(_s.muiSkipListHighlight=!0);const td=n=>{const{classes:t,disableUnderline:e,startAdornment:r,endAdornment:s,size:o,hiddenLabel:a,multiline:u}=n,h={root:["root",!e&&"underline",r&&"adornedStart",s&&"adornedEnd",o==="small"&&`size${zt(o)}`,a&&"hiddenLabel",u&&"multiline"],input:["input"]},d=qt(h,Kh,t);return{...t,...d}},ed=K(Vi,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[...Pi(n,t),!e.disableUnderline&&t.underline]}})(Zt(({theme:n})=>{const t=n.palette.mode==="light",e=t?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=t?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",s=t?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",o=t?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return{position:"relative",backgroundColor:n.vars?n.vars.palette.FilledInput.bg:r,borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),"&:hover":{backgroundColor:n.vars?n.vars.palette.FilledInput.hoverBg:s,"@media (hover: none)":{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:r}},[`&.${un.focused}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:r},[`&.${un.disabled}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.disabledBg:o},variants:[{props:({ownerState:a})=>!a.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${un.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${un.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`:e}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${un.disabled}, .${un.error}):before`]:{borderBottom:`1px solid ${(n.vars||n).palette.text.primary}`},[`&.${un.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(n.palette).filter(Ri()).map(([a])=>{var u;return{props:{disableUnderline:!1,color:a},style:{"&::after":{borderBottom:`2px solid ${(u=(n.vars||n).palette[a])==null?void 0:u.main}`}}}}),{props:({ownerState:a})=>a.startAdornment,style:{paddingLeft:12}},{props:({ownerState:a})=>a.endAdornment,style:{paddingRight:12}},{props:({ownerState:a})=>a.multiline,style:{padding:"25px 12px 8px"}},{props:({ownerState:a,size:u})=>a.multiline&&u==="small",style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:a})=>a.multiline&&a.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:a})=>a.multiline&&a.hiddenLabel&&a.size==="small",style:{paddingTop:8,paddingBottom:9}}]}})),nd=K(Di,{name:"MuiFilledInput",slot:"Input",overridesResolver:xi})(Zt(({theme:n})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,...!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},...n.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:t})=>t.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:t})=>t.startAdornment,style:{paddingLeft:0}},{props:({ownerState:t})=>t.endAdornment,style:{paddingRight:0}},{props:({ownerState:t})=>t.hiddenLabel&&t.size==="small",style:{paddingTop:8,paddingBottom:9}},{props:({ownerState:t})=>t.multiline,style:{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}]}))),Us=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiFilledInput"}),{disableUnderline:s=!1,components:o={},componentsProps:a,fullWidth:u=!1,hiddenLabel:h,inputComponent:d="input",multiline:g=!1,slotProps:_,slots:b={},type:T="text",...S}=r,k={...r,disableUnderline:s,fullWidth:u,inputComponent:d,multiline:g,type:T},P=td(r),F={root:{ownerState:k},input:{ownerState:k}},B=_??a?Bs(F,_??a):F,x=b.root??o.Root??ed,O=b.input??o.Input??nd;return C.jsx($s,{slots:{root:x,input:O},slotProps:B,fullWidth:u,inputComponent:d,multiline:g,ref:e,type:T,...S,classes:P})});Us.muiName="Input";function rd(n){return Jt("MuiFormControl",n)}Yt("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const id=n=>{const{classes:t,margin:e,fullWidth:r}=n,s={root:["root",e!=="none"&&`margin${zt(e)}`,r&&"fullWidth"]};return qt(s,rd,t)},sd=K("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[`margin${zt(e.margin)}`],e.fullWidth&&t.fullWidth]}})({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",variants:[{props:{margin:"normal"},style:{marginTop:16,marginBottom:8}},{props:{margin:"dense"},style:{marginTop:8,marginBottom:4}},{props:{fullWidth:!0},style:{width:"100%"}}]}),od=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiFormControl"}),{children:s,className:o,color:a="primary",component:u="div",disabled:h=!1,error:d=!1,focused:g,fullWidth:_=!1,hiddenLabel:b=!1,margin:T="none",required:S=!1,size:k="medium",variant:P="outlined",...F}=r,B={...r,color:a,component:u,disabled:h,error:d,fullWidth:_,hiddenLabel:b,margin:T,required:S,size:k,variant:P},x=id(B),[O,$]=D.useState(()=>{let at=!1;return s&&D.Children.forEach(s,nt=>{if(!ss(nt,["Input","Select"]))return;const pt=ss(nt,["Select"])?nt.props.input:nt;pt&&zh(pt.props)&&(at=!0)}),at}),[N,v]=D.useState(()=>{let at=!1;return s&&D.Children.forEach(s,nt=>{ss(nt,["Input","Select"])&&(ui(nt.props,!0)||ui(nt.props.inputProps,!0))&&(at=!0)}),at}),[p,m]=D.useState(!1);h&&p&&m(!1);const E=g!==void 0&&!h?g:p;let I;D.useRef(!1);const w=D.useCallback(()=>{v(!0)},[]),y=D.useCallback(()=>{v(!1)},[]),it=D.useMemo(()=>({adornedStart:O,setAdornedStart:$,color:a,disabled:h,error:d,filled:N,focused:E,fullWidth:_,hiddenLabel:b,size:k,onBlur:()=>{m(!1)},onFocus:()=>{m(!0)},onEmpty:y,onFilled:w,registerEffect:I,required:S,variant:P}),[O,a,h,d,N,E,_,b,I,y,w,S,k,P]);return C.jsx(Ci.Provider,{value:it,children:C.jsx(sd,{as:u,ownerState:B,className:ne(x.root,o),ref:e,...F,children:s})})});function ad(n){return Jt("MuiFormHelperText",n)}const Ta=Yt("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var Aa;const ld=n=>{const{classes:t,contained:e,size:r,disabled:s,error:o,filled:a,focused:u,required:h}=n,d={root:["root",s&&"disabled",o&&"error",r&&`size${zt(r)}`,e&&"contained",u&&"focused",a&&"filled",h&&"required"]};return qt(d,ad,t)},ud=K("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.size&&t[`size${zt(e.size)}`],e.contained&&t.contained,e.filled&&t.filled]}})(Zt(({theme:n})=>({color:(n.vars||n).palette.text.secondary,...n.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Ta.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${Ta.error}`]:{color:(n.vars||n).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:t})=>t.contained,style:{marginLeft:14,marginRight:14}}]}))),cd=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiFormHelperText"}),{children:s,className:o,component:a="p",disabled:u,error:h,filled:d,focused:g,margin:_,required:b,variant:T,...S}=r,k=In(),P=$n({props:r,muiFormControl:k,states:["variant","size","disabled","error","filled","focused","required"]}),F={...r,component:a,contained:P.variant==="filled"||P.variant==="outlined",variant:P.variant,size:P.size,disabled:P.disabled,error:P.error,filled:P.filled,focused:P.focused,required:P.required};delete F.ownerState;const B=ld(F);return C.jsx(ud,{as:a,className:ne(B.root,o),ref:e,...S,ownerState:F,children:s===" "?Aa||(Aa=C.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):s})});function hd(n){return Jt("MuiFormLabel",n)}const cr=Yt("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),dd=n=>{const{classes:t,color:e,focused:r,disabled:s,error:o,filled:a,required:u}=n,h={root:["root",`color${zt(e)}`,s&&"disabled",o&&"error",a&&"filled",r&&"focused",u&&"required"],asterisk:["asterisk",o&&"error"]};return qt(h,hd,t)},fd=K("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled]}})(Zt(({theme:n})=>({color:(n.vars||n).palette.text.secondary,...n.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(n.palette).filter(Ri()).map(([t])=>({props:{color:t},style:{[`&.${cr.focused}`]:{color:(n.vars||n).palette[t].main}}})),{props:{},style:{[`&.${cr.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${cr.error}`]:{color:(n.vars||n).palette.error.main}}}]}))),pd=K("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(n,t)=>t.asterisk})(Zt(({theme:n})=>({[`&.${cr.error}`]:{color:(n.vars||n).palette.error.main}}))),md=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiFormLabel"}),{children:s,className:o,color:a,component:u="label",disabled:h,error:d,filled:g,focused:_,required:b,...T}=r,S=In(),k=$n({props:r,muiFormControl:S,states:["color","required","focused","disabled","error","filled"]}),P={...r,color:k.color||"primary",component:u,disabled:k.disabled,error:k.error,filled:k.filled,focused:k.focused,required:k.required},F=dd(P);return C.jsxs(fd,{as:u,ownerState:P,className:ne(F.root,o),ref:e,...T,children:[s,k.required&&C.jsxs(pd,{ownerState:P,"aria-hidden":!0,className:F.asterisk,children:[" ","*"]})]})}),Ra=D.createContext();function gd(n){return Jt("MuiGrid",n)}const yd=[0,1,2,3,4,5,6,7,8,9,10],vd=["column-reverse","column","row-reverse","row"],_d=["nowrap","wrap-reverse","wrap"],sr=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],vr=Yt("MuiGrid",["root","container","item","zeroMinWidth",...yd.map(n=>`spacing-xs-${n}`),...vd.map(n=>`direction-xs-${n}`),..._d.map(n=>`wrap-xs-${n}`),...sr.map(n=>`grid-xs-${n}`),...sr.map(n=>`grid-sm-${n}`),...sr.map(n=>`grid-md-${n}`),...sr.map(n=>`grid-lg-${n}`),...sr.map(n=>`grid-xl-${n}`)]);function Ed({theme:n,ownerState:t}){let e;return n.breakpoints.keys.reduce((r,s)=>{let o={};if(t[s]&&(e=t[s]),!e)return r;if(e===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(e==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=Si({values:t.columns,breakpoints:n.breakpoints.values}),u=typeof a=="object"?a[s]:a;if(u==null)return r;const h=`${Math.round(e/u*1e8)/1e6}%`;let d={};if(t.container&&t.item&&t.columnSpacing!==0){const g=n.spacing(t.columnSpacing);if(g!=="0px"){const _=`calc(${h} + ${g})`;d={flexBasis:_,maxWidth:_}}}o={flexBasis:h,flexGrow:0,maxWidth:h,...d}}return n.breakpoints.values[s]===0?Object.assign(r,o):r[n.breakpoints.up(s)]=o,r},{})}function Id({theme:n,ownerState:t}){const e=Si({values:t.direction,breakpoints:n.breakpoints.values});return js({theme:n},e,r=>{const s={flexDirection:r};return r.startsWith("column")&&(s[`& > .${vr.item}`]={maxWidth:"none"}),s})}function Jl({breakpoints:n,values:t}){let e="";Object.keys(t).forEach(s=>{e===""&&t[s]!==0&&(e=s)});const r=Object.keys(n).sort((s,o)=>n[s]-n[o]);return r.slice(0,r.indexOf(e))}function bd({theme:n,ownerState:t}){const{container:e,rowSpacing:r}=t;let s={};if(e&&r!==0){const o=Si({values:r,breakpoints:n.breakpoints.values});let a;typeof o=="object"&&(a=Jl({breakpoints:n.breakpoints.values,values:o})),s=js({theme:n},o,(u,h)=>{const d=n.spacing(u);return d!=="0px"?{marginTop:`calc(-1 * ${d})`,[`& > .${vr.item}`]:{paddingTop:d}}:a!=null&&a.includes(h)?{}:{marginTop:0,[`& > .${vr.item}`]:{paddingTop:0}}})}return s}function wd({theme:n,ownerState:t}){const{container:e,columnSpacing:r}=t;let s={};if(e&&r!==0){const o=Si({values:r,breakpoints:n.breakpoints.values});let a;typeof o=="object"&&(a=Jl({breakpoints:n.breakpoints.values,values:o})),s=js({theme:n},o,(u,h)=>{const d=n.spacing(u);if(d!=="0px"){const g=`calc(-1 * ${d})`;return{width:`calc(100% + ${d})`,marginLeft:g,[`& > .${vr.item}`]:{paddingLeft:d}}}return a!=null&&a.includes(h)?{}:{width:"100%",marginLeft:0,[`& > .${vr.item}`]:{paddingLeft:0}}})}return s}function Td(n,t,e={}){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[e[`spacing-xs-${String(n)}`]];const r=[];return t.forEach(s=>{const o=n[s];Number(o)>0&&r.push(e[`spacing-${s}-${String(o)}`])}),r}const Ad=K("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n,{container:r,direction:s,item:o,spacing:a,wrap:u,zeroMinWidth:h,breakpoints:d}=e;let g=[];r&&(g=Td(a,d,t));const _=[];return d.forEach(b=>{const T=e[b];T&&_.push(t[`grid-${b}-${String(T)}`])}),[t.root,r&&t.container,o&&t.item,h&&t.zeroMinWidth,...g,s!=="row"&&t[`direction-xs-${String(s)}`],u!=="wrap"&&t[`wrap-xs-${String(u)}`],..._]}})(({ownerState:n})=>({boxSizing:"border-box",...n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...n.item&&{margin:0},...n.zeroMinWidth&&{minWidth:0},...n.wrap!=="wrap"&&{flexWrap:n.wrap}}),Id,bd,wd,Ed);function Rd(n,t){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[`spacing-xs-${String(n)}`];const e=[];return t.forEach(r=>{const s=n[r];if(Number(s)>0){const o=`spacing-${r}-${String(s)}`;e.push(o)}}),e}const Sd=n=>{const{classes:t,container:e,direction:r,item:s,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:h}=n;let d=[];e&&(d=Rd(o,h));const g=[];h.forEach(b=>{const T=n[b];T&&g.push(`grid-${b}-${String(T)}`)});const _={root:["root",e&&"container",s&&"item",u&&"zeroMinWidth",...d,r!=="row"&&`direction-xs-${String(r)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...g]};return qt(_,gd,t)},vt=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiGrid"}),{breakpoints:s}=_h(),o=Vh(r),{className:a,columns:u,columnSpacing:h,component:d="div",container:g=!1,direction:_="row",item:b=!1,rowSpacing:T,spacing:S=0,wrap:k="wrap",zeroMinWidth:P=!1,...F}=o,B=T||S,x=h||S,O=D.useContext(Ra),$=g?u||12:O,N={},v={...F};s.keys.forEach(E=>{F[E]!=null&&(N[E]=F[E],delete v[E])});const p={...o,columns:$,container:g,direction:_,item:b,rowSpacing:B,columnSpacing:x,wrap:k,zeroMinWidth:P,spacing:S,...N,breakpoints:s.keys},m=Sd(p);return C.jsx(Ra.Provider,{value:$,children:C.jsx(Ad,{ownerState:p,className:ne(m.root,a),as:d,ref:e,...v})})}),Cd=n=>{const{classes:t,disableUnderline:e}=n,s=qt({root:["root",!e&&"underline"],input:["input"]},Wh,t);return{...t,...s}},Pd=K(Vi,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiInput",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[...Pi(n,t),!e.disableUnderline&&t.underline]}})(Zt(({theme:n})=>{let e=n.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(e=`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`),{position:"relative",variants:[{props:({ownerState:r})=>r.formControl,style:{"label + &":{marginTop:16}}},{props:({ownerState:r})=>!r.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ir.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ir.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${e}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ir.disabled}, .${ir.error}):before`]:{borderBottom:`2px solid ${(n.vars||n).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${e}`}},[`&.${ir.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(n.palette).filter(Ri()).map(([r])=>({props:{color:r,disableUnderline:!1},style:{"&::after":{borderBottom:`2px solid ${(n.vars||n).palette[r].main}`}}}))]}})),xd=K(Di,{name:"MuiInput",slot:"Input",overridesResolver:xi})({}),zs=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiInput"}),{disableUnderline:s=!1,components:o={},componentsProps:a,fullWidth:u=!1,inputComponent:h="input",multiline:d=!1,slotProps:g,slots:_={},type:b="text",...T}=r,S=Cd(r),P={root:{ownerState:{disableUnderline:s}}},F=g??a?Bs(g??a,P):P,B=_.root??o.Root??Pd,x=_.input??o.Input??xd;return C.jsx($s,{slots:{root:B,input:x},slotProps:F,fullWidth:u,inputComponent:h,multiline:d,ref:e,type:b,...T,classes:S})});zs.muiName="Input";function Vd(n){return Jt("MuiInputAdornment",n)}const Sa=Yt("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var Ca;const Dd=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${zt(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},kd=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:r,position:s,size:o,variant:a}=n,u={root:["root",e&&"disablePointerEvents",s&&`position${zt(s)}`,a,r&&"hiddenLabel",o&&`size${zt(o)}`]};return qt(u,Vd,t)},Nd=K("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Dd})(Zt(({theme:n})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${Sa.positionStart}&:not(.${Sa.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),Od=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiInputAdornment"}),{children:s,className:o,component:a="div",disablePointerEvents:u=!1,disableTypography:h=!1,position:d,variant:g,..._}=r,b=In()||{};let T=g;g&&b.variant,b&&!T&&(T=b.variant);const S={...r,hiddenLabel:b.hiddenLabel,size:b.size,disablePointerEvents:u,position:d,variant:T},k=kd(S);return C.jsx(Ci.Provider,{value:null,children:C.jsx(Nd,{as:a,ownerState:S,className:ne(k.root,o),ref:e,..._,children:typeof s=="string"&&!h?C.jsx(ee,{color:"textSecondary",children:s}):C.jsxs(D.Fragment,{children:[d==="start"?Ca||(Ca=C.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,s]})})})});function Md(n){return Jt("MuiInputLabel",n)}Yt("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Fd=n=>{const{classes:t,formControl:e,size:r,shrink:s,disableAnimation:o,variant:a,required:u}=n,h={root:["root",e&&"formControl",!o&&"animated",s&&"shrink",r&&r!=="normal"&&`size${zt(r)}`,a],asterisk:[u&&"asterisk"]},d=qt(h,Md,t);return{...t,...d}},Ld=K(md,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[{[`& .${cr.asterisk}`]:t.asterisk},t.root,e.formControl&&t.formControl,e.size==="small"&&t.sizeSmall,e.shrink&&t.shrink,!e.disableAnimation&&t.animated,e.focused&&t.focused,t[e.variant]]}})(Zt(({theme:n})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",variants:[{props:({ownerState:t})=>t.formControl,style:{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"}},{props:{size:"small"},style:{transform:"translate(0, 17px) scale(1)"}},{props:({ownerState:t})=>t.shrink,style:{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"}},{props:({ownerState:t})=>!t.disableAnimation,style:{transition:n.transitions.create(["color","transform","max-width"],{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut})}},{props:{variant:"filled"},style:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"filled",size:"small"},style:{transform:"translate(12px, 13px) scale(1)"}},{props:({variant:t,ownerState:e})=>t==="filled"&&e.shrink,style:{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"}},{props:({variant:t,ownerState:e,size:r})=>t==="filled"&&e.shrink&&r==="small",style:{transform:"translate(12px, 4px) scale(0.75)"}},{props:{variant:"outlined"},style:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"outlined",size:"small"},style:{transform:"translate(14px, 9px) scale(1)"}},{props:({variant:t,ownerState:e})=>t==="outlined"&&e.shrink,style:{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}]}))),Bd=D.forwardRef(function(t,e){const r=re({name:"MuiInputLabel",props:t}),{disableAnimation:s=!1,margin:o,shrink:a,variant:u,className:h,...d}=r,g=In();let _=a;typeof _>"u"&&g&&(_=g.filled||g.focused||g.adornedStart);const b=$n({props:r,muiFormControl:g,states:["size","variant","required","focused"]}),T={...r,disableAnimation:s,formControl:g,shrink:_,size:b.size,variant:b.variant,required:b.required,focused:b.focused},S=Fd(T);return C.jsx(Ld,{"data-shrink":_,ref:e,className:ne(S.root,h),...d,ownerState:T,classes:S})});function os(n,t,e){return n===t?n.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e?null:n.firstChild}function Pa(n,t,e){return n===t?e?n.firstChild:n.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e?null:n.lastChild}function Zl(n,t){if(t===void 0)return!0;let e=n.innerText;return e===void 0&&(e=n.textContent),e=e.trim().toLowerCase(),e.length===0?!1:t.repeating?e[0]===t.keys[0]:e.startsWith(t.keys.join(""))}function or(n,t,e,r,s,o){let a=!1,u=s(n,t,t?e:!1);for(;u;){if(u===n.firstChild){if(a)return!1;a=!0}const h=r?!1:u.disabled||u.getAttribute("aria-disabled")==="true";if(!u.hasAttribute("tabindex")||!Zl(u,o)||h)u=s(n,u,e);else return u.focus(),!0}return!1}const jd=D.forwardRef(function(t,e){const{actions:r,autoFocus:s=!1,autoFocusItem:o=!1,children:a,className:u,disabledItemsFocusable:h=!1,disableListWrap:d=!1,onKeyDown:g,variant:_="selectedMenu",...b}=t,T=D.useRef(null),S=D.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ai(()=>{s&&T.current.focus()},[s]),D.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(x,{direction:O})=>{const $=!T.current.style.width;if(x.clientHeight<T.current.clientHeight&&$){const N=`${Dh(yr(x))}px`;T.current.style[O==="rtl"?"paddingLeft":"paddingRight"]=N,T.current.style.width=`calc(100% + ${N})`}return T.current}}),[]);const k=x=>{const O=T.current,$=x.key;if(x.ctrlKey||x.metaKey||x.altKey){g&&g(x);return}const v=li(O).activeElement;if($==="ArrowDown")x.preventDefault(),or(O,v,d,h,os);else if($==="ArrowUp")x.preventDefault(),or(O,v,d,h,Pa);else if($==="Home")x.preventDefault(),or(O,null,d,h,os);else if($==="End")x.preventDefault(),or(O,null,d,h,Pa);else if($.length===1){const p=S.current,m=$.toLowerCase(),E=performance.now();p.keys.length>0&&(E-p.lastTime>500?(p.keys=[],p.repeating=!0,p.previousKeyMatched=!0):p.repeating&&m!==p.keys[0]&&(p.repeating=!1)),p.lastTime=E,p.keys.push(m);const I=v&&!p.repeating&&Zl(v,p);p.previousKeyMatched&&(I||or(O,v,!1,h,os,p))?x.preventDefault():p.previousKeyMatched=!1}g&&g(x)},P=Sr(T,e);let F=-1;D.Children.forEach(a,(x,O)=>{if(!D.isValidElement(x)){F===O&&(F+=1,F>=a.length&&(F=-1));return}x.props.disabled||(_==="selectedMenu"&&x.props.selected||F===-1)&&(F=O),F===O&&(x.props.disabled||x.props.muiSkipListHighlight||x.type.muiSkipListHighlight)&&(F+=1,F>=a.length&&(F=-1))});const B=D.Children.map(a,(x,O)=>{if(O===F){const $={};return o&&($.autoFocus=!0),x.props.tabIndex===void 0&&_==="selectedMenu"&&($.tabIndex=0),D.cloneElement(x,$)}return x});return C.jsx(kh,{role:"menu",ref:P,className:u,onKeyDown:k,tabIndex:s?0:-1,...b,children:B})});function $d(n){return Jt("MuiPopover",n)}Yt("MuiPopover",["root","paper"]);function xa(n,t){let e=0;return typeof t=="number"?e=t:t==="center"?e=n.height/2:t==="bottom"&&(e=n.height),e}function Va(n,t){let e=0;return typeof t=="number"?e=t:t==="center"?e=n.width/2:t==="right"&&(e=n.width),e}function Da(n){return[n.horizontal,n.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Xr(n){return typeof n=="function"?n():n}const Ud=n=>{const{classes:t}=n;return qt({root:["root"],paper:["paper"]},$d,t)},zd=K(Oh,{name:"MuiPopover",slot:"Root",overridesResolver:(n,t)=>t.root})({}),tu=K(Ge,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),qd=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiPopover"}),{action:s,anchorEl:o,anchorOrigin:a={vertical:"top",horizontal:"left"},anchorPosition:u,anchorReference:h="anchorEl",children:d,className:g,container:_,elevation:b=8,marginThreshold:T=16,open:S,PaperProps:k={},slots:P={},slotProps:F={},transformOrigin:B={vertical:"top",horizontal:"left"},TransitionComponent:x,transitionDuration:O="auto",TransitionProps:$={},disableScrollLock:N=!1,...v}=r,p=D.useRef(),m={...r,anchorOrigin:a,anchorReference:h,elevation:b,marginThreshold:T,transformOrigin:B,TransitionComponent:x,transitionDuration:O,TransitionProps:$},E=Ud(m),I=D.useCallback(()=>{if(h==="anchorPosition")return u;const H=Xr(o),Z=(H&&H.nodeType===1?H:li(p.current).body).getBoundingClientRect();return{top:Z.top+xa(Z,a.vertical),left:Z.left+Va(Z,a.horizontal)}},[o,a.horizontal,a.vertical,u,h]),w=D.useCallback(H=>({vertical:xa(H,B.vertical),horizontal:Va(H,B.horizontal)}),[B.horizontal,B.vertical]),y=D.useCallback(H=>{const rt={width:H.offsetWidth,height:H.offsetHeight},Z=w(rt);if(h==="none")return{top:null,left:null,transformOrigin:Da(Z)};const At=I();let X=At.top-Z.vertical,ut=At.left-Z.horizontal;const ie=X+rt.height,de=ut+rt.width,se=yr(Xr(o)),_e=se.innerHeight-T,Ht=se.innerWidth-T;if(T!==null&&X<T){const Rt=X-T;X-=Rt,Z.vertical+=Rt}else if(T!==null&&ie>_e){const Rt=ie-_e;X-=Rt,Z.vertical+=Rt}if(T!==null&&ut<T){const Rt=ut-T;ut-=Rt,Z.horizontal+=Rt}else if(de>Ht){const Rt=de-Ht;ut-=Rt,Z.horizontal+=Rt}return{top:`${Math.round(X)}px`,left:`${Math.round(ut)}px`,transformOrigin:Da(Z)}},[o,h,I,w,T]),[it,at]=D.useState(S),nt=D.useCallback(()=>{const H=p.current;if(!H)return;const rt=y(H);rt.top!==null&&H.style.setProperty("top",rt.top),rt.left!==null&&(H.style.left=rt.left),H.style.transformOrigin=rt.transformOrigin,at(!0)},[y]);D.useEffect(()=>(N&&window.addEventListener("scroll",nt),()=>window.removeEventListener("scroll",nt)),[o,N,nt]);const pt=()=>{nt()},lt=()=>{at(!1)};D.useEffect(()=>{S&&nt()}),D.useImperativeHandle(s,()=>S?{updatePosition:()=>{nt()}}:null,[S,nt]),D.useEffect(()=>{if(!S)return;const H=Yl(()=>{nt()}),rt=yr(Xr(o));return rt.addEventListener("resize",H),()=>{H.clear(),rt.removeEventListener("resize",H)}},[o,S,nt]);let z=O;const mt={slots:{transition:x,...P},slotProps:{transition:$,paper:k,...F}},[xt,Mt]=ge("transition",{elementType:Eh,externalForwardedProps:mt,ownerState:m,getSlotProps:H=>({...H,onEntering:(rt,Z)=>{var At;(At=H.onEntering)==null||At.call(H,rt,Z),pt()},onExited:rt=>{var Z;(Z=H.onExited)==null||Z.call(H,rt),lt()}}),additionalProps:{appear:!0,in:S}});O==="auto"&&!xt.muiSupportAuto&&(z=void 0);const Q=_||(o?li(Xr(o)).body:void 0),[Ft,{slots:dt,slotProps:ye,...Vt}]=ge("root",{ref:e,elementType:zd,externalForwardedProps:{...mt,...v},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:P.backdrop},slotProps:{backdrop:Nh(typeof F.backdrop=="function"?F.backdrop(m):F.backdrop,{invisible:!0})},container:Q,open:S},ownerState:m,className:ne(E.root,g)}),[ve,bt]=ge("paper",{ref:p,className:E.paper,elementType:tu,externalForwardedProps:mt,shouldForwardComponentProp:!0,additionalProps:{elevation:b,style:it?void 0:{opacity:0}},ownerState:m});return C.jsx(Ft,{...Vt,...!ys(Ft)&&{slots:dt,slotProps:ye,disableScrollLock:N},children:C.jsx(xt,{...Mt,timeout:z,children:C.jsx(ve,{...bt,children:d})})})});function Hd(n){return Jt("MuiMenu",n)}Yt("MuiMenu",["root","paper","list"]);const Wd={vertical:"top",horizontal:"right"},Gd={vertical:"top",horizontal:"left"},Kd=n=>{const{classes:t}=n;return qt({root:["root"],paper:["paper"],list:["list"]},Hd,t)},Qd=K(qd,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(n,t)=>t.root})({}),Xd=K(tu,{name:"MuiMenu",slot:"Paper",overridesResolver:(n,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Yd=K(jd,{name:"MuiMenu",slot:"List",overridesResolver:(n,t)=>t.list})({outline:0}),Jd=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiMenu"}),{autoFocus:s=!0,children:o,className:a,disableAutoFocusItem:u=!1,MenuListProps:h={},onClose:d,open:g,PaperProps:_={},PopoverClasses:b,transitionDuration:T="auto",TransitionProps:{onEntering:S,...k}={},variant:P="selectedMenu",slots:F={},slotProps:B={},...x}=r,O=Ih(),$={...r,autoFocus:s,disableAutoFocusItem:u,MenuListProps:h,onEntering:S,PaperProps:_,transitionDuration:T,TransitionProps:k,variant:P},N=Kd($),v=s&&!u&&g,p=D.useRef(null),m=(z,mt)=>{p.current&&p.current.adjustStyleForScrollbar(z,{direction:O?"rtl":"ltr"}),S&&S(z,mt)},E=z=>{z.key==="Tab"&&(z.preventDefault(),d&&d(z,"tabKeyDown"))};let I=-1;D.Children.map(o,(z,mt)=>{D.isValidElement(z)&&(z.props.disabled||(P==="selectedMenu"&&z.props.selected||I===-1)&&(I=mt))});const w={slots:F,slotProps:{list:h,transition:k,paper:_,...B}},y=Mh({elementType:F.root,externalSlotProps:B.root,ownerState:$,className:[N.root,a]}),[it,at]=ge("paper",{className:N.paper,elementType:Xd,externalForwardedProps:w,shouldForwardComponentProp:!0,ownerState:$}),[nt,pt]=ge("list",{className:ne(N.list,h.className),elementType:Yd,shouldForwardComponentProp:!0,externalForwardedProps:w,getSlotProps:z=>({...z,onKeyDown:mt=>{var xt;E(mt),(xt=z.onKeyDown)==null||xt.call(z,mt)}}),ownerState:$}),lt=typeof w.slotProps.transition=="function"?w.slotProps.transition($):w.slotProps.transition;return C.jsx(Qd,{onClose:d,anchorOrigin:{vertical:"bottom",horizontal:O?"right":"left"},transformOrigin:O?Wd:Gd,slots:{root:F.root,paper:it,backdrop:F.backdrop,...F.transition&&{transition:F.transition}},slotProps:{root:y,paper:at,backdrop:typeof B.backdrop=="function"?B.backdrop($):B.backdrop,transition:{...lt,onEntering:(...z)=>{var mt;m(...z),(mt=lt==null?void 0:lt.onEntering)==null||mt.call(lt,...z)}}},open:g,ref:e,transitionDuration:T,ownerState:$,...x,classes:b,children:C.jsx(nt,{actions:p,autoFocus:s&&(I===-1||u),autoFocusItem:v,variant:P,...pt,children:o})})});function Zd(n){return Jt("MuiNativeSelect",n)}const qs=Yt("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),tf=n=>{const{classes:t,variant:e,disabled:r,multiple:s,open:o,error:a}=n,u={select:["select",e,r&&"disabled",s&&"multiple",a&&"error"],icon:["icon",`icon${zt(e)}`,o&&"iconOpen",r&&"disabled"]};return qt(u,Zd,t)},eu=K("select")(({theme:n})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{borderRadius:0},[`&.${qs.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(n.vars||n).palette.background.paper},variants:[{props:({ownerState:t})=>t.variant!=="filled"&&t.variant!=="outlined",style:{"&&&":{paddingRight:24,minWidth:16}}},{props:{variant:"filled"},style:{"&&&":{paddingRight:32}}},{props:{variant:"outlined"},style:{borderRadius:(n.vars||n).shape.borderRadius,"&:focus":{borderRadius:(n.vars||n).shape.borderRadius},"&&&":{paddingRight:32}}}]})),ef=K(eu,{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Ue,overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.select,t[e.variant],e.error&&t.error,{[`&.${qs.multiple}`]:t.multiple}]}})({}),nu=K("svg")(({theme:n})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(n.vars||n).palette.action.active,[`&.${qs.disabled}`]:{color:(n.vars||n).palette.action.disabled},variants:[{props:({ownerState:t})=>t.open,style:{transform:"rotate(180deg)"}},{props:{variant:"filled"},style:{right:7}},{props:{variant:"outlined"},style:{right:7}}]})),nf=K(nu,{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.icon,e.variant&&t[`icon${zt(e.variant)}`],e.open&&t.iconOpen]}})({}),rf=D.forwardRef(function(t,e){const{className:r,disabled:s,error:o,IconComponent:a,inputRef:u,variant:h="standard",...d}=t,g={...t,disabled:s,variant:h,error:o},_=tf(g);return C.jsxs(D.Fragment,{children:[C.jsx(ef,{ownerState:g,className:ne(_.select,r),disabled:s,ref:u||e,...d}),t.multiple?null:C.jsx(nf,{as:a,ownerState:g,className:_.icon})]})});var ka;const sf=K("fieldset",{shouldForwardProp:Ue})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),of=K("legend",{shouldForwardProp:Ue})(Zt(({theme:n})=>({float:"unset",width:"auto",overflow:"hidden",variants:[{props:({ownerState:t})=>!t.withLabel,style:{padding:0,lineHeight:"11px",transition:n.transitions.create("width",{duration:150,easing:n.transitions.easing.easeOut})}},{props:({ownerState:t})=>t.withLabel,style:{display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:n.transitions.create("max-width",{duration:50,easing:n.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}}},{props:({ownerState:t})=>t.withLabel&&t.notched,style:{maxWidth:"100%",transition:n.transitions.create("max-width",{duration:100,easing:n.transitions.easing.easeOut,delay:50})}}]})));function af(n){const{children:t,classes:e,className:r,label:s,notched:o,...a}=n,u=s!=null&&s!=="",h={...n,notched:o,withLabel:u};return C.jsx(sf,{"aria-hidden":!0,className:r,ownerState:h,...a,children:C.jsx(of,{ownerState:h,children:u?C.jsx("span",{children:s}):ka||(ka=C.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"}))})})}const lf=n=>{const{classes:t}=n,r=qt({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},Gh,t);return{...t,...r}},uf=K(Vi,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Pi})(Zt(({theme:n})=>{const t=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:(n.vars||n).shape.borderRadius,[`&:hover .${Se.notchedOutline}`]:{borderColor:(n.vars||n).palette.text.primary},"@media (hover: none)":{[`&:hover .${Se.notchedOutline}`]:{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:t}},[`&.${Se.focused} .${Se.notchedOutline}`]:{borderWidth:2},variants:[...Object.entries(n.palette).filter(Ri()).map(([e])=>({props:{color:e},style:{[`&.${Se.focused} .${Se.notchedOutline}`]:{borderColor:(n.vars||n).palette[e].main}}})),{props:{},style:{[`&.${Se.error} .${Se.notchedOutline}`]:{borderColor:(n.vars||n).palette.error.main},[`&.${Se.disabled} .${Se.notchedOutline}`]:{borderColor:(n.vars||n).palette.action.disabled}}},{props:({ownerState:e})=>e.startAdornment,style:{paddingLeft:14}},{props:({ownerState:e})=>e.endAdornment,style:{paddingRight:14}},{props:({ownerState:e})=>e.multiline,style:{padding:"16.5px 14px"}},{props:({ownerState:e,size:r})=>e.multiline&&r==="small",style:{padding:"8.5px 14px"}}]}})),cf=K(af,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(n,t)=>t.notchedOutline})(Zt(({theme:n})=>{const t=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:t}})),hf=K(Di,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:xi})(Zt(({theme:n})=>({padding:"16.5px 14px",...!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},...n.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{padding:"8.5px 14px"}},{props:({ownerState:t})=>t.multiline,style:{padding:0}},{props:({ownerState:t})=>t.startAdornment,style:{paddingLeft:0}},{props:({ownerState:t})=>t.endAdornment,style:{paddingRight:0}}]}))),Hs=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiOutlinedInput"}),{components:s={},fullWidth:o=!1,inputComponent:a="input",label:u,multiline:h=!1,notched:d,slots:g={},slotProps:_={},type:b="text",...T}=r,S=lf(r),k=In(),P=$n({props:r,muiFormControl:k,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),F={...r,color:P.color||"primary",disabled:P.disabled,error:P.error,focused:P.focused,formControl:k,fullWidth:o,hiddenLabel:P.hiddenLabel,multiline:h,size:P.size,type:b},B=g.root??s.Root??uf,x=g.input??s.Input??hf,[O,$]=ge("notchedOutline",{elementType:cf,className:S.notchedOutline,shouldForwardComponentProp:!0,ownerState:F,externalForwardedProps:{slots:g,slotProps:_},additionalProps:{label:u!=null&&u!==""&&P.required?C.jsxs(D.Fragment,{children:[u," ","*"]}):u}});return C.jsx($s,{slots:{root:B,input:x},slotProps:_,renderSuffix:N=>C.jsx(O,{...$,notched:typeof d<"u"?d:!!(N.startAdornment||N.filled||N.focused)}),fullWidth:o,inputComponent:a,multiline:h,ref:e,type:b,...T,classes:{...S,notchedOutline:null}})});Hs.muiName="Input";function ru(n){return Jt("MuiSelect",n)}const ar=Yt("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var Na;const df=K(eu,{name:"MuiSelect",slot:"Select",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[{[`&.${ar.select}`]:t.select},{[`&.${ar.select}`]:t[e.variant]},{[`&.${ar.error}`]:t.error},{[`&.${ar.multiple}`]:t.multiple}]}})({[`&.${ar.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),ff=K(nu,{name:"MuiSelect",slot:"Icon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.icon,e.variant&&t[`icon${zt(e.variant)}`],e.open&&t.iconOpen]}})({}),pf=K("input",{shouldForwardProp:n=>bh(n)&&n!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(n,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Oa(n,t){return typeof t=="object"&&t!==null?n===t:String(n)===String(t)}function mf(n){return n==null||typeof n=="string"&&!n.trim()}const gf=n=>{const{classes:t,variant:e,disabled:r,multiple:s,open:o,error:a}=n,u={select:["select",e,r&&"disabled",s&&"multiple",a&&"error"],icon:["icon",`icon${zt(e)}`,o&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return qt(u,ru,t)},yf=D.forwardRef(function(t,e){var qn;const{"aria-describedby":r,"aria-label":s,autoFocus:o,autoWidth:a,children:u,className:h,defaultOpen:d,defaultValue:g,disabled:_,displayEmpty:b,error:T=!1,IconComponent:S,inputRef:k,labelId:P,MenuProps:F={},multiple:B,name:x,onBlur:O,onChange:$,onClose:N,onFocus:v,onOpen:p,open:m,readOnly:E,renderValue:I,required:w,SelectDisplayProps:y={},tabIndex:it,type:at,value:nt,variant:pt="standard",...lt}=t,[z,mt]=va({controlled:nt,default:g,name:"Select"}),[xt,Mt]=va({controlled:m,default:d,name:"Select"}),Q=D.useRef(null),Ft=D.useRef(null),[dt,ye]=D.useState(null),{current:Vt}=D.useRef(m!=null),[ve,bt]=D.useState(),H=Sr(e,k),rt=D.useCallback(U=>{Ft.current=U,U&&ye(U)},[]),Z=dt==null?void 0:dt.parentNode;D.useImperativeHandle(H,()=>({focus:()=>{Ft.current.focus()},node:Q.current,value:z}),[z]),D.useEffect(()=>{d&&xt&&dt&&!Vt&&(bt(a?null:Z.clientWidth),Ft.current.focus())},[dt,a]),D.useEffect(()=>{o&&Ft.current.focus()},[o]),D.useEffect(()=>{if(!P)return;const U=li(Ft.current).getElementById(P);if(U){const st=()=>{getSelection().isCollapsed&&Ft.current.focus()};return U.addEventListener("click",st),()=>{U.removeEventListener("click",st)}}},[P]);const At=(U,st)=>{U?p&&p(st):N&&N(st),Vt||(bt(a?null:Z.clientWidth),Mt(U))},X=U=>{U.button===0&&(U.preventDefault(),Ft.current.focus(),At(!0,U))},ut=U=>{At(!1,U)},ie=D.Children.toArray(u),de=U=>{const st=ie.find(Pt=>Pt.props.value===U.target.value);st!==void 0&&(mt(st.props.value),$&&$(U,st))},se=U=>st=>{let Pt;if(st.currentTarget.hasAttribute("tabindex")){if(B){Pt=Array.isArray(z)?z.slice():[];const Re=z.indexOf(U.props.value);Re===-1?Pt.push(U.props.value):Pt.splice(Re,1)}else Pt=U.props.value;if(U.props.onClick&&U.props.onClick(st),z!==Pt&&(mt(Pt),$)){const Re=st.nativeEvent||st,Hn=new Re.constructor(Re.type,Re);Object.defineProperty(Hn,"target",{writable:!0,value:{value:Pt,name:x}}),$(Hn,U)}B||At(!1,st)}},_e=U=>{E||[" ","ArrowUp","ArrowDown","Enter"].includes(U.key)&&(U.preventDefault(),At(!0,U))},Ht=dt!==null&&xt,Rt=U=>{!Ht&&O&&(Object.defineProperty(U,"target",{writable:!0,value:{value:z,name:x}}),O(U))};delete lt["aria-invalid"];let fe,pe;const wt=[];let De=!1;(ui({value:z})||b)&&(I?fe=I(z):De=!0);const _t=ie.map(U=>{if(!D.isValidElement(U))return null;let st;if(B){if(!Array.isArray(z))throw new Error(Kl(2));st=z.some(Pt=>Oa(Pt,U.props.value)),st&&De&&wt.push(U.props.children)}else st=Oa(z,U.props.value),st&&De&&(pe=U.props.children);return D.cloneElement(U,{"aria-selected":st?"true":"false",onClick:se(U),onKeyUp:Pt=>{Pt.key===" "&&Pt.preventDefault(),U.props.onKeyUp&&U.props.onKeyUp(Pt)},role:"option",selected:st,value:void 0,"data-value":U.props.value})});De&&(B?wt.length===0?fe=null:fe=wt.reduce((U,st,Pt)=>(U.push(st),Pt<wt.length-1&&U.push(", "),U),[]):fe=pe);let Tt=ve;!a&&Vt&&dt&&(Tt=Z.clientWidth);let Ee;typeof it<"u"?Ee=it:Ee=_?null:0;const ke=y.id||(x?`mui-component-select-${x}`:void 0),Ae={...t,variant:pt,value:z,open:Ht,error:T},ct=gf(Ae),me={...F.PaperProps,...(qn=F.slotProps)==null?void 0:qn.paper},ze=Ql();return C.jsxs(D.Fragment,{children:[C.jsx(df,{as:"div",ref:rt,tabIndex:Ee,role:"combobox","aria-controls":Ht?ze:void 0,"aria-disabled":_?"true":void 0,"aria-expanded":Ht?"true":"false","aria-haspopup":"listbox","aria-label":s,"aria-labelledby":[P,ke].filter(Boolean).join(" ")||void 0,"aria-describedby":r,"aria-required":w?"true":void 0,"aria-invalid":T?"true":void 0,onKeyDown:_e,onMouseDown:_||E?null:X,onBlur:Rt,onFocus:v,...y,ownerState:Ae,className:ne(y.className,ct.select,h),id:ke,children:mf(fe)?Na||(Na=C.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):fe}),C.jsx(pf,{"aria-invalid":T,value:Array.isArray(z)?z.join(","):z,name:x,ref:Q,"aria-hidden":!0,onChange:de,tabIndex:-1,disabled:_,className:ct.nativeInput,autoFocus:o,required:w,...lt,ownerState:Ae}),C.jsx(ff,{as:S,className:ct.icon,ownerState:Ae}),C.jsx(Jd,{id:`menu-${x||""}`,anchorEl:Z,open:Ht,onClose:ut,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},...F,slotProps:{...F.slotProps,list:{"aria-labelledby":P,role:"listbox","aria-multiselectable":B?"true":void 0,disableListWrap:!0,id:ze,...F.MenuListProps},paper:{...me,style:{minWidth:Tt,...me!=null?me.style:null}}},children:_t})]})}),vf=n=>{const{classes:t}=n,r=qt({root:["root"]},ru,t);return{...t,...r}},Ws={name:"MuiSelect",overridesResolver:(n,t)=>t.root,shouldForwardProp:n=>Ue(n)&&n!=="variant",slot:"Root"},_f=K(zs,Ws)(""),Ef=K(Hs,Ws)(""),If=K(Us,Ws)(""),iu=D.forwardRef(function(t,e){const r=re({name:"MuiSelect",props:t}),{autoWidth:s=!1,children:o,classes:a={},className:u,defaultOpen:h=!1,displayEmpty:d=!1,IconComponent:g=Qh,id:_,input:b,inputProps:T,label:S,labelId:k,MenuProps:P,multiple:F=!1,native:B=!1,onClose:x,onOpen:O,open:$,renderValue:N,SelectDisplayProps:v,variant:p="outlined",...m}=r,E=B?rf:yf,I=In(),w=$n({props:r,muiFormControl:I,states:["variant","error"]}),y=w.variant||p,it={...r,variant:y,classes:a},at=vf(it),{root:nt,...pt}=at,lt=b||{standard:C.jsx(_f,{ownerState:it}),outlined:C.jsx(Ef,{label:S,ownerState:it}),filled:C.jsx(If,{ownerState:it})}[y],z=Sr(e,wh(lt));return C.jsx(D.Fragment,{children:D.cloneElement(lt,{inputComponent:E,inputProps:{children:o,error:w.error,IconComponent:g,variant:y,type:void 0,multiple:F,...B?{id:_}:{autoWidth:s,defaultOpen:h,displayEmpty:d,labelId:k,MenuProps:P,onClose:x,onOpen:O,open:$,renderValue:N,SelectDisplayProps:{id:_,...v}},...T,classes:T?Bs(pt,T.classes):pt,...b?b.props.inputProps:{}},...(F&&B||d)&&y==="outlined"?{notched:!0}:{},ref:z,className:ne(lt.props.className,u,at.root),...!b&&{variant:y},...m})})});iu.muiName="Select";function bf(n){return Jt("MuiTextField",n)}Yt("MuiTextField",["root"]);const wf={standard:zs,filled:Us,outlined:Hs},Tf=n=>{const{classes:t}=n;return qt({root:["root"]},bf,t)},Af=K(od,{name:"MuiTextField",slot:"Root",overridesResolver:(n,t)=>t.root})({}),Dt=D.forwardRef(function(t,e){const r=re({props:t,name:"MuiTextField"}),{autoComplete:s,autoFocus:o=!1,children:a,className:u,color:h="primary",defaultValue:d,disabled:g=!1,error:_=!1,FormHelperTextProps:b,fullWidth:T=!1,helperText:S,id:k,InputLabelProps:P,inputProps:F,InputProps:B,inputRef:x,label:O,maxRows:$,minRows:N,multiline:v=!1,name:p,onBlur:m,onChange:E,onFocus:I,placeholder:w,required:y=!1,rows:it,select:at=!1,SelectProps:nt,slots:pt={},slotProps:lt={},type:z,value:mt,variant:xt="outlined",...Mt}=r,Q={...r,autoFocus:o,color:h,disabled:g,error:_,fullWidth:T,multiline:v,required:y,select:at,variant:xt},Ft=Tf(Q),dt=Ql(k),ye=S&&dt?`${dt}-helper-text`:void 0,Vt=O&&dt?`${dt}-label`:void 0,ve=wf[xt],bt={slots:pt,slotProps:{input:B,inputLabel:P,htmlInput:F,formHelperText:b,select:nt,...lt}},H={},rt=bt.slotProps.inputLabel;xt==="outlined"&&(rt&&typeof rt.shrink<"u"&&(H.notched=rt.shrink),H.label=O),at&&((!nt||!nt.native)&&(H.id=void 0),H["aria-describedby"]=void 0);const[Z,At]=ge("root",{elementType:Af,shouldForwardComponentProp:!0,externalForwardedProps:{...bt,...Mt},ownerState:Q,className:ne(Ft.root,u),ref:e,additionalProps:{disabled:g,error:_,fullWidth:T,required:y,color:h,variant:xt}}),[X,ut]=ge("input",{elementType:ve,externalForwardedProps:bt,additionalProps:H,ownerState:Q}),[ie,de]=ge("inputLabel",{elementType:Bd,externalForwardedProps:bt,ownerState:Q}),[se,_e]=ge("htmlInput",{elementType:"input",externalForwardedProps:bt,ownerState:Q}),[Ht,Rt]=ge("formHelperText",{elementType:cd,externalForwardedProps:bt,ownerState:Q}),[fe,pe]=ge("select",{elementType:iu,externalForwardedProps:bt,ownerState:Q}),wt=C.jsx(X,{"aria-describedby":ye,autoComplete:s,autoFocus:o,defaultValue:d,fullWidth:T,multiline:v,name:p,rows:it,maxRows:$,minRows:N,type:z,value:mt,id:dt,inputRef:x,onBlur:m,onChange:E,onFocus:I,placeholder:w,inputProps:_e,slots:{input:pt.htmlInput?se:void 0},...ut});return C.jsxs(Z,{...At,children:[O!=null&&O!==""&&C.jsx(ie,{htmlFor:dt,id:Vt,...de,children:O}),at?C.jsx(fe,{"aria-describedby":ye,id:dt,labelId:Vt,value:mt,input:wt,...pe,children:a}):wt,S&&C.jsx(Ht,{id:ye,...Rt,children:S})]})});/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=()=>{};var Ma={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Sf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,g=o>>2,_=(o&3)<<4|u>>4;let b=(u&15)<<2|d>>6,T=d&63;h||(T=64,a||(b=64)),r.push(e[g],e[_],e[b],e[T])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(su(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Sf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const _=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||_==null)throw new Cf;const b=o<<2|u>>4;if(r.push(b),d!==64){const T=u<<4&240|d>>2;if(r.push(T),_!==64){const S=d<<6&192|_;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pf=function(n){const t=su(n);return ou.encodeByteArray(t,!0)},ci=function(n){return Pf(n).replace(/\./g,"")},xf=function(n){try{return ou.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=()=>Vf().__FIREBASE_DEFAULTS__,kf=()=>{if(typeof process>"u"||typeof Ma>"u")return;const n=Ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&xf(n[1]);return t&&JSON.parse(t)},Gs=()=>{try{return Rf()||Df()||kf()||Nf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Of=n=>{var t,e;return(e=(t=Gs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Mf=n=>{const t=Of(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},au=()=>{var n;return(n=Gs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){return n.endsWith(".cloudworkstations.dev")}async function Lf(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ci(JSON.stringify(e)),ci(JSON.stringify(a)),""].join(".")}const hr={};function jf(){const n={prod:[],emulator:[]};for(const t of Object.keys(hr))hr[t]?n.emulator.push(t):n.prod.push(t);return n}function $f(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Fa=!1;function Uf(n,t){if(typeof window>"u"||typeof document>"u"||!Ks(window.location.host)||hr[n]===t||hr[n]||Fa)return;hr[n]=t;function e(b){return`__firebase__banner__${b}`}const r="__firebase__banner",o=jf().prod.length>0;function a(){const b=document.getElementById(r);b&&b.remove()}function u(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function h(b,T){b.setAttribute("width","24"),b.setAttribute("id",T),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function d(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Fa=!0,a()},b}function g(b,T){b.setAttribute("id",T),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function _(){const b=$f(r),T=e("text"),S=document.getElementById(T)||document.createElement("span"),k=e("learnmore"),P=document.getElementById(k)||document.createElement("a"),F=e("preprendIcon"),B=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const x=b.element;u(x),g(P,k);const O=d();h(B,F),x.append(B,S,P,O),document.body.appendChild(x)}o?(S.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qf(){var n;const t=(n=Gs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wf(){return!qf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lu(){try{return typeof indexedDB=="object"}catch{return!1}}function uu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Gf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="FirebaseError";class rn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Kf,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Qf(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new rn(s,u,r)}}function Qf(n,t){return n.replace(Xf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xf=/\{\$([^}]+)}/g;function _r(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(La(o)&&La(a)){if(!_r(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function La(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=1e3,Jf=2,Zf=4*60*60*1e3,tp=.5;function Ba(n,t=Yf,e=Jf){const r=t*Math.pow(e,n),s=Math.round(tp*r*(Math.random()-.5)*2);return Math.min(Zf,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n){return n&&n._delegate?n._delegate:n}class je{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ff;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rp(t))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=cn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=cn){return this.instances.has(t)}getOptions(t=cn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:np(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=cn){return this.component?this.component.multipleInstances?t:cn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function np(n){return n===cn?void 0:n}function rp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ep(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const sp={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},op=J.INFO,ap={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},lp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ap[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qs{constructor(t){this.name=t,this._logLevel=op,this._logHandler=lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const up=(n,t)=>t.some(e=>n instanceof e);let ja,$a;function cp(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hp(){return $a||($a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,Es=new WeakMap,hu=new WeakMap,as=new WeakMap,Xs=new WeakMap;function dp(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Xe(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&cu.set(e,n)}).catch(()=>{}),Xs.set(t,n),t}function fp(n){if(Es.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Es.set(n,t)}let Is={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Es.get(n);if(t==="objectStoreNames")return n.objectStoreNames||hu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Xe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function pp(n){Is=n(Is)}function mp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ls(this),t,...e);return hu.set(r,t.sort?t.sort():[t]),Xe(r)}:hp().includes(n)?function(...t){return n.apply(ls(this),t),Xe(cu.get(this))}:function(...t){return Xe(n.apply(ls(this),t))}}function gp(n){return typeof n=="function"?mp(n):(n instanceof IDBTransaction&&fp(n),up(n,cp())?new Proxy(n,Is):n)}function Xe(n){if(n instanceof IDBRequest)return dp(n);if(as.has(n))return as.get(n);const t=gp(n);return t!==n&&(as.set(n,t),Xs.set(t,n)),t}const ls=n=>Xs.get(n);function du(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Xe(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Xe(a.result),h.oldVersion,h.newVersion,Xe(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const yp=["get","getKey","getAll","getAllKeys","count"],vp=["put","add","delete","clear"],us=new Map;function Ua(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(us.get(t))return us.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=vp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yp.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return us.set(t,o),o}pp(n=>({...n,get:(t,e,r)=>Ua(t,e)||n.get(t,e,r),has:(t,e)=>!!Ua(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ep(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ep(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bs="@firebase/app",za="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Qs("@firebase/app"),Ip="@firebase/app-compat",bp="@firebase/analytics-compat",wp="@firebase/analytics",Tp="@firebase/app-check-compat",Ap="@firebase/app-check",Rp="@firebase/auth",Sp="@firebase/auth-compat",Cp="@firebase/database",Pp="@firebase/data-connect",xp="@firebase/database-compat",Vp="@firebase/functions",Dp="@firebase/functions-compat",kp="@firebase/installations",Np="@firebase/installations-compat",Op="@firebase/messaging",Mp="@firebase/messaging-compat",Fp="@firebase/performance",Lp="@firebase/performance-compat",Bp="@firebase/remote-config",jp="@firebase/remote-config-compat",$p="@firebase/storage",Up="@firebase/storage-compat",zp="@firebase/firestore",qp="@firebase/ai",Hp="@firebase/firestore-compat",Wp="firebase",Gp="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]",Kp={[bs]:"fire-core",[Ip]:"fire-core-compat",[wp]:"fire-analytics",[bp]:"fire-analytics-compat",[Ap]:"fire-app-check",[Tp]:"fire-app-check-compat",[Rp]:"fire-auth",[Sp]:"fire-auth-compat",[Cp]:"fire-rtdb",[Pp]:"fire-data-connect",[xp]:"fire-rtdb-compat",[Vp]:"fire-fn",[Dp]:"fire-fn-compat",[kp]:"fire-iid",[Np]:"fire-iid-compat",[Op]:"fire-fcm",[Mp]:"fire-fcm-compat",[Fp]:"fire-perf",[Lp]:"fire-perf-compat",[Bp]:"fire-rc",[jp]:"fire-rc-compat",[$p]:"fire-gcs",[Up]:"fire-gcs-compat",[zp]:"fire-fst",[Hp]:"fire-fst-compat",[qp]:"fire-vertex","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map,Qp=new Map,Ts=new Map;function qa(n,t){try{n.container.addComponent(t)}catch(e){$e.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Je(n){const t=n.name;if(Ts.has(t))return $e.debug(`There were multiple attempts to register component ${t}.`),!1;Ts.set(t,n);for(const e of hi.values())qa(e,n);for(const e of Qp.values())qa(e,n);return!0}function Cr(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Xp(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ye=new ki("app","Firebase",Yp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=Gp;function fu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ws,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Ye.create("bad-app-name",{appName:String(s)});if(e||(e=au()),!e)throw Ye.create("no-options");const o=hi.get(s);if(o){if(_r(e,o.options)&&_r(r,o.config))return o;throw Ye.create("duplicate-app",{appName:s})}const a=new ip(s);for(const h of Ts.values())a.addComponent(h);const u=new Jp(e,r,a);return hi.set(s,u),u}function pu(n=ws){const t=hi.get(n);if(!t&&n===ws&&au())return fu();if(!t)throw Ye.create("no-app",{appName:n});return t}function Pe(n,t,e){var r;let s=(r=Kp[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$e.warn(u.join(" "));return}Je(new je(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="firebase-heartbeat-database",em=1,Er="firebase-heartbeat-store";let cs=null;function mu(){return cs||(cs=du(tm,em,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Er)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ye.create("idb-open",{originalErrorMessage:n.message})})),cs}async function nm(n){try{const e=(await mu()).transaction(Er),r=await e.objectStore(Er).get(gu(n));return await e.done,r}catch(t){if(t instanceof rn)$e.warn(t.message);else{const e=Ye.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$e.warn(e.message)}}}async function Ha(n,t){try{const r=(await mu()).transaction(Er,"readwrite");await r.objectStore(Er).put(t,gu(n)),await r.done}catch(e){if(e instanceof rn)$e.warn(e.message);else{const r=Ye.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$e.warn(r.message)}}}function gu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=1024,im=30;class sm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new am(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wa();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>im){const a=lm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$e.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wa(),{heartbeatsToSend:r,unsentEntries:s}=om(this._heartbeatsCache.heartbeats),o=ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $e.warn(e),""}}}function Wa(){return new Date().toISOString().substring(0,10)}function om(n,t=rm){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ga(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ga(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class am{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lu()?uu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await nm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ga(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function lm(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){Je(new je("platform-logger",t=>new _p(t),"PRIVATE")),Je(new je("heartbeat",t=>new sm(t),"PRIVATE")),Pe(bs,za,n),Pe(bs,za,"esm2017"),Pe("fire-js","")}um("");var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ys;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(E,I,w){for(var y=Array(arguments.length-2),it=2;it<arguments.length;it++)y[it-2]=arguments[it];return p.prototype[I].apply(E,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,m){m||(m=0);var E=Array(16);if(typeof p=="string")for(var I=0;16>I;++I)E[I]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(I=0;16>I;++I)E[I]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],I=v.g[2];var w=v.g[3],y=p+(w^m&(I^w))+E[0]+3614090360&4294967295;p=m+(y<<7&4294967295|y>>>25),y=w+(I^p&(m^I))+E[1]+3905402710&4294967295,w=p+(y<<12&4294967295|y>>>20),y=I+(m^w&(p^m))+E[2]+606105819&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(p^I&(w^p))+E[3]+3250441966&4294967295,m=I+(y<<22&4294967295|y>>>10),y=p+(w^m&(I^w))+E[4]+4118548399&4294967295,p=m+(y<<7&4294967295|y>>>25),y=w+(I^p&(m^I))+E[5]+1200080426&4294967295,w=p+(y<<12&4294967295|y>>>20),y=I+(m^w&(p^m))+E[6]+2821735955&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(p^I&(w^p))+E[7]+4249261313&4294967295,m=I+(y<<22&4294967295|y>>>10),y=p+(w^m&(I^w))+E[8]+1770035416&4294967295,p=m+(y<<7&4294967295|y>>>25),y=w+(I^p&(m^I))+E[9]+2336552879&4294967295,w=p+(y<<12&4294967295|y>>>20),y=I+(m^w&(p^m))+E[10]+4294925233&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(p^I&(w^p))+E[11]+2304563134&4294967295,m=I+(y<<22&4294967295|y>>>10),y=p+(w^m&(I^w))+E[12]+1804603682&4294967295,p=m+(y<<7&4294967295|y>>>25),y=w+(I^p&(m^I))+E[13]+4254626195&4294967295,w=p+(y<<12&4294967295|y>>>20),y=I+(m^w&(p^m))+E[14]+2792965006&4294967295,I=w+(y<<17&4294967295|y>>>15),y=m+(p^I&(w^p))+E[15]+1236535329&4294967295,m=I+(y<<22&4294967295|y>>>10),y=p+(I^w&(m^I))+E[1]+4129170786&4294967295,p=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(p^m))+E[6]+3225465664&4294967295,w=p+(y<<9&4294967295|y>>>23),y=I+(p^m&(w^p))+E[11]+643717713&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^p&(I^w))+E[0]+3921069994&4294967295,m=I+(y<<20&4294967295|y>>>12),y=p+(I^w&(m^I))+E[5]+3593408605&4294967295,p=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(p^m))+E[10]+38016083&4294967295,w=p+(y<<9&4294967295|y>>>23),y=I+(p^m&(w^p))+E[15]+3634488961&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^p&(I^w))+E[4]+3889429448&4294967295,m=I+(y<<20&4294967295|y>>>12),y=p+(I^w&(m^I))+E[9]+568446438&4294967295,p=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(p^m))+E[14]+3275163606&4294967295,w=p+(y<<9&4294967295|y>>>23),y=I+(p^m&(w^p))+E[3]+4107603335&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^p&(I^w))+E[8]+1163531501&4294967295,m=I+(y<<20&4294967295|y>>>12),y=p+(I^w&(m^I))+E[13]+2850285829&4294967295,p=m+(y<<5&4294967295|y>>>27),y=w+(m^I&(p^m))+E[2]+4243563512&4294967295,w=p+(y<<9&4294967295|y>>>23),y=I+(p^m&(w^p))+E[7]+1735328473&4294967295,I=w+(y<<14&4294967295|y>>>18),y=m+(w^p&(I^w))+E[12]+2368359562&4294967295,m=I+(y<<20&4294967295|y>>>12),y=p+(m^I^w)+E[5]+4294588738&4294967295,p=m+(y<<4&4294967295|y>>>28),y=w+(p^m^I)+E[8]+2272392833&4294967295,w=p+(y<<11&4294967295|y>>>21),y=I+(w^p^m)+E[11]+1839030562&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^p)+E[14]+4259657740&4294967295,m=I+(y<<23&4294967295|y>>>9),y=p+(m^I^w)+E[1]+2763975236&4294967295,p=m+(y<<4&4294967295|y>>>28),y=w+(p^m^I)+E[4]+1272893353&4294967295,w=p+(y<<11&4294967295|y>>>21),y=I+(w^p^m)+E[7]+4139469664&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^p)+E[10]+3200236656&4294967295,m=I+(y<<23&4294967295|y>>>9),y=p+(m^I^w)+E[13]+681279174&4294967295,p=m+(y<<4&4294967295|y>>>28),y=w+(p^m^I)+E[0]+3936430074&4294967295,w=p+(y<<11&4294967295|y>>>21),y=I+(w^p^m)+E[3]+3572445317&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^p)+E[6]+76029189&4294967295,m=I+(y<<23&4294967295|y>>>9),y=p+(m^I^w)+E[9]+3654602809&4294967295,p=m+(y<<4&4294967295|y>>>28),y=w+(p^m^I)+E[12]+3873151461&4294967295,w=p+(y<<11&4294967295|y>>>21),y=I+(w^p^m)+E[15]+530742520&4294967295,I=w+(y<<16&4294967295|y>>>16),y=m+(I^w^p)+E[2]+3299628645&4294967295,m=I+(y<<23&4294967295|y>>>9),y=p+(I^(m|~w))+E[0]+4096336452&4294967295,p=m+(y<<6&4294967295|y>>>26),y=w+(m^(p|~I))+E[7]+1126891415&4294967295,w=p+(y<<10&4294967295|y>>>22),y=I+(p^(w|~m))+E[14]+2878612391&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~p))+E[5]+4237533241&4294967295,m=I+(y<<21&4294967295|y>>>11),y=p+(I^(m|~w))+E[12]+1700485571&4294967295,p=m+(y<<6&4294967295|y>>>26),y=w+(m^(p|~I))+E[3]+2399980690&4294967295,w=p+(y<<10&4294967295|y>>>22),y=I+(p^(w|~m))+E[10]+4293915773&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~p))+E[1]+2240044497&4294967295,m=I+(y<<21&4294967295|y>>>11),y=p+(I^(m|~w))+E[8]+1873313359&4294967295,p=m+(y<<6&4294967295|y>>>26),y=w+(m^(p|~I))+E[15]+4264355552&4294967295,w=p+(y<<10&4294967295|y>>>22),y=I+(p^(w|~m))+E[6]+2734768916&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~p))+E[13]+1309151649&4294967295,m=I+(y<<21&4294967295|y>>>11),y=p+(I^(m|~w))+E[4]+4149444226&4294967295,p=m+(y<<6&4294967295|y>>>26),y=w+(m^(p|~I))+E[11]+3174756917&4294967295,w=p+(y<<10&4294967295|y>>>22),y=I+(p^(w|~m))+E[2]+718787259&4294967295,I=w+(y<<15&4294967295|y>>>17),y=m+(w^(I|~p))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,E=this.B,I=this.h,w=0;w<p;){if(I==0)for(;w<=m;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<p;)if(E[I++]=v.charCodeAt(w++),I==this.blockSize){s(this,E),I=0;break}}else for(;w<p;)if(E[I++]=v[w++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var E=0;32>E;E+=8)v[m++]=this.g[p]>>>E&255;return v};function o(v,p){var m=u;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function a(v,p){this.h=p;for(var m=[],E=!0,I=v.length-1;0<=I;I--){var w=v[I]|0;E&&w==p||(m[I]=w,E=!1)}this.g=m}var u={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return _;if(0>v)return P(d(-v));for(var p=[],m=1,E=0;v>=m;E++)p[E]=v/m|0,m*=4294967296;return new a(p,0)}function g(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return P(g(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(p,8)),E=_,I=0;I<v.length;I+=8){var w=Math.min(8,v.length-I),y=parseInt(v.substring(I,I+w),p);8>w?(w=d(Math.pow(p,w)),E=E.j(w).add(d(y))):(E=E.j(m),E=E.add(d(y)))}return E}var _=h(0),b=h(1),T=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var E=this.i(m);v+=(0<=E?E:4294967296+E)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(k(this))return"-"+P(this).toString(v);for(var p=d(Math.pow(v,6)),m=this,E="";;){var I=O(m,p).g;m=F(m,I.j(p));var w=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=I,S(m))return w+E;for(;6>w.length;)w="0"+w;E=w+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=F(this,v),k(v)?-1:S(v)?0:1};function P(v){for(var p=v.g.length,m=[],E=0;E<p;E++)m[E]=~v.g[E];return new a(m,~v.h).add(b)}n.abs=function(){return k(this)?P(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],E=0,I=0;I<=p;I++){var w=E+(this.i(I)&65535)+(v.i(I)&65535),y=(w>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);E=y>>>16,w&=65535,y&=65535,m[I]=y<<16|w}return new a(m,m[m.length-1]&-2147483648?-1:0)};function F(v,p){return v.add(P(p))}n.j=function(v){if(S(this)||S(v))return _;if(k(this))return k(v)?P(this).j(P(v)):P(P(this).j(v));if(k(v))return P(this.j(P(v)));if(0>this.l(T)&&0>v.l(T))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],E=0;E<2*p;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<v.g.length;I++){var w=this.i(E)>>>16,y=this.i(E)&65535,it=v.i(I)>>>16,at=v.i(I)&65535;m[2*E+2*I]+=y*at,B(m,2*E+2*I),m[2*E+2*I+1]+=w*at,B(m,2*E+2*I+1),m[2*E+2*I+1]+=y*it,B(m,2*E+2*I+1),m[2*E+2*I+2]+=w*it,B(m,2*E+2*I+2)}for(E=0;E<p;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=p;E<2*p;E++)m[E]=0;return new a(m,0)};function B(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function x(v,p){this.g=v,this.h=p}function O(v,p){if(S(p))throw Error("division by zero");if(S(v))return new x(_,_);if(k(v))return p=O(P(v),p),new x(P(p.g),P(p.h));if(k(p))return p=O(v,P(p)),new x(P(p.g),p.h);if(30<v.g.length){if(k(v)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var m=b,E=p;0>=E.l(v);)m=$(m),E=$(E);var I=N(m,1),w=N(E,1);for(E=N(E,2),m=N(m,2);!S(E);){var y=w.add(E);0>=y.l(v)&&(I=I.add(m),w=y),E=N(E,1),m=N(m,1)}return p=F(v,I.j(p)),new x(I,p)}for(I=_;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),w=d(m),y=w.j(p);k(y)||0<y.l(v);)m-=E,w=d(m),y=w.j(p);S(w)&&(w=b),I=I.add(w),v=F(v,y)}return new x(I,v)}n.A=function(v){return O(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],E=0;E<p;E++)m[E]=this.i(E)&v.i(E);return new a(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],E=0;E<p;E++)m[E]=this.i(E)|v.i(E);return new a(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],E=0;E<p;E++)m[E]=this.i(E)^v.i(E);return new a(m,this.h^v.h)};function $(v){for(var p=v.g.length+1,m=[],E=0;E<p;E++)m[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(m,v.h)}function N(v,p){var m=p>>5;p%=32;for(var E=v.g.length-m,I=[],w=0;w<E;w++)I[w]=0<p?v.i(w+m)>>>p|v.i(w+m+1)<<32-p:v.i(w+m);return new a(I,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Ys=a}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});var Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yu,ur,vu,ri,As,_u,Eu,Iu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yr=="object"&&Yr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in c))break t;c=c[A]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,A={next:function(){if(!f&&c<i.length){var R=c++;return{value:l(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function g(i,l,c){return i.call.apply(i.bind,arguments)}function _(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(l,A)}}return function(){return i.apply(l,arguments)}}function b(i,l,c){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:_,b.apply(null,arguments)}function T(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,A,R){for(var L=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)L[ot-2]=arguments[ot];return l.prototype[A].apply(f,L)}}function k(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function P(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=i.length||0,R=f.length||0;i.length=A+R;for(let L=0;L<R;L++)i[A+L]=f[L]}else i.push(f)}}class F{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(i){return/^[\s\xa0]*$/.test(i)}function x(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function O(i){return O[" "](i),i}O[" "]=function(){};var $=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function N(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function v(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function p(i){const l={};for(const c in i)l[c]=i[c];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)i[c]=f[c];for(let R=0;R<m.length;R++)c=m[R],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function I(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function w(i){u.setTimeout(()=>{throw i},0)}function y(){var i=z;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,c){const f=at.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var at=new F(()=>new nt,i=>i.reset());class nt{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,lt=!1,z=new it,mt=()=>{const i=u.Promise.resolve(void 0);pt=()=>{i.then(xt)}};var xt=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(c){w(c)}var l=at;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}lt=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function dt(i,l){if(Q.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if($){t:{try{O(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ye[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&dt.aa.h.call(this)}}S(dt,Q);var ye={2:"touch",3:"pen",4:"mouse"};dt.prototype.h=function(){dt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),ve=0;function bt(i,l,c,f,A){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++ve,this.da=this.fa=!1}function H(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function rt(i){this.src=i,this.g={},this.h=0}rt.prototype.add=function(i,l,c,f,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var L=At(i,l,f,A);return-1<L?(l=i[L],c||(l.fa=!1)):(l=new bt(l,this.src,R,!!f,A),l.fa=c,i.push(l)),l};function Z(i,l){var c=l.type;if(c in i.g){var f=i.g[c],A=Array.prototype.indexOf.call(f,l,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(H(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function At(i,l,c,f){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==f)return A}return-1}var X="closure_lm_"+(1e6*Math.random()|0),ut={};function ie(i,l,c,f,A){if(Array.isArray(l)){for(var R=0;R<l.length;R++)ie(i,l[R],c,f,A);return null}return c=De(c),i&&i[Vt]?i.K(l,c,d(f)?!!f.capture:!1,A):de(i,l,c,!1,f,A)}function de(i,l,c,f,A,R){if(!l)throw Error("Invalid event type");var L=d(A)?!!A.capture:!!A,ot=pe(i);if(ot||(i[X]=ot=new rt(i)),c=ot.add(l,c,f,L,R),c.proxy)return c;if(f=se(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Ft||(A=L),A===void 0&&(A=!1),i.addEventListener(l.toString(),f,A);else if(i.attachEvent)i.attachEvent(Rt(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function se(){function i(c){return l.call(i.src,i.listener,c)}const l=fe;return i}function _e(i,l,c,f,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)_e(i,l[R],c,f,A);else f=d(f)?!!f.capture:!!f,c=De(c),i&&i[Vt]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],c=At(R,c,f,A),-1<c&&(H(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=pe(i))&&(l=i.g[l.toString()],i=-1,l&&(i=At(l,c,f,A)),(c=-1<i?l[i]:null)&&Ht(c))}function Ht(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Vt])Z(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(Rt(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=pe(l))?(Z(c,i),c.h==0&&(c.src=null,l[X]=null)):H(i)}}}function Rt(i){return i in ut?ut[i]:ut[i]="on"+i}function fe(i,l){if(i.da)i=!0;else{l=new dt(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&Ht(i),i=c.call(f,l)}return i}function pe(i){return i=i[X],i instanceof rt?i:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function De(i){return typeof i=="function"?i:(i[wt]||(i[wt]=function(l){return i.handleEvent(l)}),i[wt])}function _t(){Mt.call(this),this.i=new rt(this),this.M=this,this.F=null}S(_t,Mt),_t.prototype[Vt]=!0,_t.prototype.removeEventListener=function(i,l,c,f){_e(this,i,l,c,f)};function Tt(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new Q(l,i);else if(l instanceof Q)l.target=l.target||i;else{var A=l;l=new Q(f,i),E(l,A)}if(A=!0,c)for(var R=c.length-1;0<=R;R--){var L=l.g=c[R];A=Ee(L,f,!0,l)&&A}if(L=l.g=i,A=Ee(L,f,!0,l)&&A,A=Ee(L,f,!1,l)&&A,c)for(R=0;R<c.length;R++)L=l.g=c[R],A=Ee(L,f,!1,l)&&A}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)H(c[f]);delete i.g[l],i.h--}}this.F=null},_t.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},_t.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function Ee(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,R=0;R<l.length;++R){var L=l[R];if(L&&!L.da&&L.capture==c){var ot=L.listener,Lt=L.ha||L.src;L.fa&&Z(i.i,L),A=ot.call(Lt,f)!==!1&&A}}return A&&!f.defaultPrevented}function ke(i,l,c){if(typeof i=="function")c&&(i=b(i,c));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Ae(i){i.g=ke(()=>{i.g=null,i.i&&(i.i=!1,Ae(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ct extends Mt{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ae(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(i){Mt.call(this),this.h=i,this.g={}}S(me,Mt);var ze=[];function qn(i){N(i.g,function(l,c){this.g.hasOwnProperty(c)&&Ht(l)},i),i.g={}}me.prototype.N=function(){me.aa.N.call(this),qn(this)},me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var U=u.JSON.stringify,st=u.JSON.parse,Pt=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Re(){}Re.prototype.h=null;function Hn(i){return i.h||(i.h=i.i())}function Ao(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qi(){Q.call(this,"d")}S(qi,Q);function Hi(){Q.call(this,"c")}S(Hi,Q);var sn={},Ro=null;function Nr(){return Ro=Ro||new _t}sn.La="serverreachability";function So(i){Q.call(this,sn.La,i)}S(So,Q);function Gn(i){const l=Nr();Tt(l,new So(l))}sn.STAT_EVENT="statevent";function Co(i,l){Q.call(this,sn.STAT_EVENT,i),this.stat=l}S(Co,Q);function te(i){const l=Nr();Tt(l,new Co(l,i))}sn.Ma="timingevent";function Po(i,l){Q.call(this,sn.Ma,i),this.size=l}S(Po,Q);function Kn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function Qn(){this.g=!0}Qn.prototype.xa=function(){this.g=!1};function Gc(i,l,c,f,A,R){i.info(function(){if(i.g)if(R)for(var L="",ot=R.split("&"),Lt=0;Lt<ot.length;Lt++){var et=ot[Lt].split("=");if(1<et.length){var Wt=et[0];et=et[1];var Gt=Wt.split("_");L=2<=Gt.length&&Gt[1]=="type"?L+(Wt+"="+et+"&"):L+(Wt+"=redacted&")}}else L=null;else L=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+L})}function Kc(i,l,c,f,A,R,L){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+R+" "+L})}function Tn(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Xc(i,c)+(f?" "+f:"")})}function Qc(i,l){i.info(function(){return"TIMEOUT: "+l})}Qn.prototype.info=function(){};function Xc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var L=1;L<A.length;L++)A[L]=""}}}}return U(c)}catch{return l}}var Or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wi;function Mr(){}S(Mr,Re),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},Wi=new Mr;function qe(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new me(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vo}function Vo(){this.i=null,this.g="",this.h=!1}var Do={},Gi={};function Ki(i,l,c){i.L=1,i.v=jr(Ne(l)),i.m=c,i.P=!0,ko(i,null)}function ko(i,l){i.F=Date.now(),Fr(i),i.A=Ne(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Go(c.i,"t",f),i.C=0,c=i.j.J,i.h=new Vo,i.g=ha(i.j,c?l:null,!i.m),0<i.O&&(i.M=new ct(b(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(ze[0]=A.toString()),A=ze);for(var R=0;R<A.length;R++){var L=ie(c,A[R],f||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Gn(),Gc(i.i,i.u,i.A,i.l,i.R,i.m)}qe.prototype.ca=function(i){i=i.target;const l=this.M;l&&Oe(i)==3?l.j():this.Y(i)},qe.prototype.Y=function(i){try{if(i==this.g)t:{const Gt=Oe(this.g);var l=this.g.Ba();const Sn=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||Gt!=4||l==7||(l==8||0>=Sn?Gn(3):Gn(2)),Qi(this);var c=this.g.Z();this.X=c;e:if(No(this)){var f=ta(this.g);i="";var A=f.length,R=Oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Xn(this);var L="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(R&&l==A-1)});f.length=0,this.h.g+=i,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=c==200,Kc(this.i,this.u,this.A,this.l,this.R,Gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var ot,Lt=this.g;if((ot=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ot)){var et=ot;break e}}et=null}if(c=et)Tn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xi(this,c);else{this.o=!1,this.s=3,te(12),on(this),Xn(this);break t}}if(this.P){c=!0;let Ie;for(;!this.J&&this.C<L.length;)if(Ie=Yc(this,L),Ie==Gi){Gt==4&&(this.s=4,te(14),c=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==Do){this.s=4,te(15),Tn(this.i,this.l,L,"[Invalid Chunk]"),c=!1;break}else Tn(this.i,this.l,Ie,null),Xi(this,Ie);if(No(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||L.length!=0||this.h.h||(this.s=1,te(16),c=!1),this.o=this.o&&c,!c)Tn(this.i,this.l,L,"[Invalid Chunked Response]"),on(this),Xn(this);else if(0<L.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),ns(Wt),Wt.M=!0,te(11))}}else Tn(this.i,this.l,L,null),Xi(this,L);Gt==4&&on(this),this.o&&!this.J&&(Gt==4?aa(this.j,this):(this.o=!1,Fr(this)))}else ph(this.g),c==400&&0<L.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),on(this),Xn(this)}}}catch{}finally{}};function No(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Yc(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?Gi:(c=Number(l.substring(c,f)),isNaN(c)?Do:(f+=1,f+c>l.length?Gi:(l=l.slice(f,f+c),i.C=f+c,l)))}qe.prototype.cancel=function(){this.J=!0,on(this)};function Fr(i){i.S=Date.now()+i.I,Oo(i,i.I)}function Oo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Kn(b(i.ba,i),l)}function Qi(i){i.B&&(u.clearTimeout(i.B),i.B=null)}qe.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Qc(this.i,this.A),this.L!=2&&(Gn(),te(17)),on(this),this.s=2,Xn(this)):Oo(this,this.S-i)};function Xn(i){i.j.G==0||i.J||aa(i.j,i)}function on(i){Qi(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,qn(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Xi(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||Yi(c.h,i))){if(!i.K&&Yi(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Wr(c),qr(c);else break t;es(c),te(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=Kn(b(c.Za,c),6e3));if(1>=Lo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ln(c,11)}else if((i.K||c.g==i)&&Wr(c),!B(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let et=A[l];if(c.T=et[0],et=et[1],c.G==2)if(et[0]=="c"){c.K=et[1],c.ia=et[2];const Wt=et[3];Wt!=null&&(c.la=Wt,c.j.info("VER="+c.la));const Gt=et[4];Gt!=null&&(c.Aa=Gt,c.j.info("SVER="+c.Aa));const Sn=et[5];Sn!=null&&typeof Sn=="number"&&0<Sn&&(f=1.5*Sn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Ie=i.g;if(Ie){const Kr=Ie.g?Ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kr){var R=f.h;R.g||Kr.indexOf("spdy")==-1&&Kr.indexOf("quic")==-1&&Kr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ji(R,R.h),R.h=null))}if(f.D){const rs=Ie.g?Ie.g.getResponseHeader("X-HTTP-Session-Id"):null;rs&&(f.ya=rs,ft(f.I,f.D,rs))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var L=i;if(f.qa=ca(f,f.J?f.ia:null,f.W),L.K){Bo(f.h,L);var ot=L,Lt=f.L;Lt&&(ot.I=Lt),ot.B&&(Qi(ot),Fr(ot)),f.g=L}else sa(f);0<c.i.length&&Hr(c)}else et[0]!="stop"&&et[0]!="close"||ln(c,7);else c.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?ln(c,7):ts(c):et[0]!="noop"&&c.l&&c.l.ta(et),c.v=0)}}Gn(4)}catch{}}var Jc=class{constructor(i,l){this.g=i,this.map=l}};function Mo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Lo(i){return i.h?1:i.g?i.g.size:0}function Yi(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Ji(i,l){i.g?i.g.add(l):i.h=l}function Bo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Mo.prototype.cancel=function(){if(this.i=jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function jo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return k(i.i)}function Zc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function th(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function $o(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=th(i),f=Zc(i),A=f.length,R=0;R<A;R++)l.call(void 0,f[R],c&&c[R],i)}var Uo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eh(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),A=null;if(0<=f){var R=i[c].substring(0,f);A=i[c].substring(f+1)}else R=i[c];l(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function an(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof an){this.h=i.h,Lr(this,i.j),this.o=i.o,this.g=i.g,Br(this,i.s),this.l=i.l;var l=i.i,c=new Zn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),zo(this,c),this.m=i.m}else i&&(l=String(i).match(Uo))?(this.h=!1,Lr(this,l[1]||"",!0),this.o=Yn(l[2]||""),this.g=Yn(l[3]||"",!0),Br(this,l[4]),this.l=Yn(l[5]||"",!0),zo(this,l[6]||"",!0),this.m=Yn(l[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}an.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Jn(l,qo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Jn(l,qo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Jn(c,c.charAt(0)=="/"?ih:rh,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Jn(c,oh)),i.join("")};function Ne(i){return new an(i)}function Lr(i,l,c){i.j=c?Yn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Br(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function zo(i,l,c){l instanceof Zn?(i.i=l,ah(i.i,i.h)):(c||(l=Jn(l,sh)),i.i=new Zn(l,i.h))}function ft(i,l,c){i.i.set(l,c)}function jr(i){return ft(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Yn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Jn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,nh),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var qo=/[#\/\?@]/g,rh=/[#\?:]/g,ih=/[#\?]/g,sh=/[#\?@]/g,oh=/#/g;function Zn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function He(i){i.g||(i.g=new Map,i.h=0,i.i&&eh(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Zn.prototype,n.add=function(i,l){He(this),this.i=null,i=An(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Ho(i,l){He(i),l=An(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Wo(i,l){return He(i),l=An(i,l),i.g.has(l)}n.forEach=function(i,l){He(this),this.g.forEach(function(c,f){c.forEach(function(A){i.call(l,A,f,this)},this)},this)},n.na=function(){He(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=i[f];for(let R=0;R<A.length;R++)c.push(l[f])}return c},n.V=function(i){He(this);let l=[];if(typeof i=="string")Wo(this,i)&&(l=l.concat(this.g.get(An(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return He(this),this.i=null,i=An(this,i),Wo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Go(i,l,c){Ho(i,l),0<c.length&&(i.i=null,i.g.set(An(i,l),k(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const R=encodeURIComponent(String(f)),L=this.V(f);for(f=0;f<L.length;f++){var A=R;L[f]!==""&&(A+="="+encodeURIComponent(String(L[f]))),i.push(A)}}return this.i=i.join("&")};function An(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function ah(i,l){l&&!i.j&&(He(i),i.i=null,i.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Ho(this,f),Go(this,A,c))},i)),i.j=l}function lh(i,l){const c=new Qn;if(u.Image){const f=new Image;f.onload=T(We,c,"TestLoadImage: loaded",!0,l,f),f.onerror=T(We,c,"TestLoadImage: error",!1,l,f),f.onabort=T(We,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=T(We,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function uh(i,l){const c=new Qn,f=new AbortController,A=setTimeout(()=>{f.abort(),We(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?We(c,"TestPingServer: ok",!0,l):We(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),We(c,"TestPingServer: error",!1,l)})}function We(i,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function ch(){this.g=new Pt}function hh(i,l,c){const f=c||"";try{$o(i,function(A,R){let L=A;d(A)&&(L=U(A)),l.push(f+R+"="+encodeURIComponent(L))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function $r(i){this.l=i.Ub||null,this.j=i.eb||!1}S($r,Re),$r.prototype.g=function(){return new Ur(this.l,this.j)},$r.prototype.i=function(i){return function(){return i}}({});function Ur(i,l){_t.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ur,_t),n=Ur.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,er(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ko(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ko(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?tr(this):er(this),this.readyState==3&&Ko(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,tr(this))},n.Qa=function(i){this.g&&(this.response=i,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,er(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function er(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Qo(i){let l="";return N(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Zi(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Qo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):ft(i,l,c))}function Et(i){_t.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Et,_t);var dh=/^https?$/i,fh=["POST","PUT"];n=Et.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wi.g(),this.v=this.o?Hn(this.o):Hn(Wi),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){Xo(this,R);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(fh,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of c)this.g.setRequestHeader(R,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Xo(this,R)}};function Xo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Yo(i),zr(i)}function Yo(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Tt(this,"complete"),Tt(this,"abort"),zr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zr(this,!0)),Et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Jo(this):this.bb())},n.bb=function(){Jo(this)};function Jo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Oe(i)!=4||i.Z()!=2)){if(i.u&&Oe(i)==4)ke(i.Ea,0,i);else if(Tt(i,"readystatechange"),Oe(i)==4){i.h=!1;try{const L=i.Z();t:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=L===0){var A=String(i.D).match(Uo)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!dh.test(A?A.toLowerCase():"")}c=f}if(c)Tt(i,"complete"),Tt(i,"success");else{i.m=6;try{var R=2<Oe(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Yo(i)}}finally{zr(i)}}}}function zr(i,l){if(i.g){Zo(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Tt(i,"ready");try{c.onreadystatechange=f}catch{}}}function Zo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Oe(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Oe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),st(l)}};function ta(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ph(i){const l={};i=(i.g&&2<=Oe(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(B(i[f]))continue;var c=I(i[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[A]||[];l[A]=R,R.push(c)}v(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function ea(i){this.Aa=0,this.i=[],this.j=new Qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,i),this.cb=nr("retryDelaySeedMs",1e4,i),this.Wa=nr("forwardChannelMaxRetries",2,i),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Mo(i&&i.concurrentRequestLimit),this.Da=new ch,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ea.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){te(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=ca(this,null,this.W),Hr(this)};function ts(i){if(na(i),i.G==3){var l=i.U++,c=Ne(i.I);if(ft(c,"SID",i.K),ft(c,"RID",l),ft(c,"TYPE","terminate"),rr(i,c),l=new qe(i,i.j,l),l.L=2,l.v=jr(Ne(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=ha(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Fr(l)}ua(i)}function qr(i){i.g&&(ns(i),i.g.cancel(),i.g=null)}function na(i){qr(i),i.u&&(u.clearTimeout(i.u),i.u=null),Wr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Hr(i){if(!Fo(i.h)&&!i.s){i.s=!0;var l=i.Ga;pt||mt(),lt||(pt(),lt=!0),z.add(l,i),i.B=0}}function mh(i,l){return Lo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Kn(b(i.Ga,i,l),la(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new qe(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=ia(this,A,l),c=Ne(this.I),ft(c,"RID",i),ft(c,"CVER",22),this.D&&ft(c,"X-HTTP-Session-Id",this.D),rr(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(Qo(R)))+"&"+l:this.m&&Zi(c,this.m,R)),Ji(this.h,A),this.Ua&&ft(c,"TYPE","init"),this.P?(ft(c,"$req",l),ft(c,"SID","null"),A.T=!0,Ki(A,c,null)):Ki(A,c,l),this.G=2}}else this.G==3&&(i?ra(this,i):this.i.length==0||Fo(this.h)||ra(this))};function ra(i,l){var c;l?c=l.l:c=i.U++;const f=Ne(i.I);ft(f,"SID",i.K),ft(f,"RID",c),ft(f,"AID",i.T),rr(i,f),i.m&&i.o&&Zi(f,i.m,i.o),c=new qe(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ia(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ji(i.h,c),Ki(c,f,l)}function rr(i,l){i.H&&N(i.H,function(c,f){ft(l,f,c)}),i.l&&$o({},function(c,f){ft(l,f,c)})}function ia(i,l,c){c=Math.min(i.i.length,c);var f=i.l?b(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const L=["count="+c];R==-1?0<c?(R=A[0].g,L.push("ofs="+R)):R=0:L.push("ofs="+R);let ot=!0;for(let Lt=0;Lt<c;Lt++){let et=A[Lt].g;const Wt=A[Lt].map;if(et-=R,0>et)R=Math.max(0,A[Lt].g-100),ot=!1;else try{hh(Wt,L,"req"+et+"_")}catch{f&&f(Wt)}}if(ot){f=L.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function sa(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;pt||mt(),lt||(pt(),lt=!0),z.add(l,i),i.v=0}}function es(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Kn(b(i.Fa,i),la(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,oa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Kn(b(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),qr(this),oa(this))};function ns(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function oa(i){i.g=new qe(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ne(i.qa);ft(l,"RID","rpc"),ft(l,"SID",i.K),ft(l,"AID",i.T),ft(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ft(l,"TO",i.ja),ft(l,"TYPE","xmlhttp"),rr(i,l),i.m&&i.o&&Zi(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=jr(Ne(l)),c.m=null,c.P=!0,ko(c,i)}n.Za=function(){this.C!=null&&(this.C=null,qr(this),es(this),te(19))};function Wr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function aa(i,l){var c=null;if(i.g==l){Wr(i),ns(i),i.g=null;var f=2}else if(Yi(i.h,l))c=l.D,Bo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=i.B;f=Nr(),Tt(f,new Po(f,c)),Hr(i)}else sa(i);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&mh(i,l)||f==2&&es(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),A){case 1:ln(i,5);break;case 4:ln(i,10);break;case 3:ln(i,6);break;default:ln(i,2)}}}function la(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function ln(i,l){if(i.j.info("Error code "+l),l==2){var c=b(i.fb,i),f=i.Xa;const A=!f;f=new an(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Lr(f,"https"),jr(f),A?lh(f.toString(),c):uh(f.toString(),c)}else te(2);i.G=0,i.l&&i.l.sa(l),ua(i),na(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function ua(i){if(i.G=0,i.ka=[],i.l){const l=jo(i.h);(l.length!=0||i.i.length!=0)&&(P(i.ka,l),P(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function ca(i,l,c){var f=c instanceof an?Ne(c):new an(c);if(f.g!="")l&&(f.g=l+"."+f.g),Br(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var R=new an(null);f&&Lr(R,f),l&&(R.g=l),A&&Br(R,A),c&&(R.l=c),f=R}return c=i.D,l=i.ya,c&&l&&ft(f,c,l),ft(f,"VER",i.la),rr(i,f),f}function ha(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Et(new $r({eb:c})):new Et(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function da(){}n=da.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gr(){}Gr.prototype.g=function(i,l){return new ce(i,l)};function ce(i,l){_t.call(this),this.g=new ea(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!B(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Rn(this)}S(ce,_t),ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ce.prototype.close=function(){ts(this.g)},ce.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=U(i),i=c);l.i.push(new Jc(l.Ya++,i)),l.G==3&&Hr(l)},ce.prototype.N=function(){this.g.l=null,delete this.j,ts(this.g),delete this.g,ce.aa.N.call(this)};function fa(i){qi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}S(fa,qi);function pa(){Hi.call(this),this.status=1}S(pa,Hi);function Rn(i){this.g=i}S(Rn,da),Rn.prototype.ua=function(){Tt(this.g,"a")},Rn.prototype.ta=function(i){Tt(this.g,new fa(i))},Rn.prototype.sa=function(i){Tt(this.g,new pa)},Rn.prototype.ra=function(){Tt(this.g,"b")},Gr.prototype.createWebChannel=Gr.prototype.g,ce.prototype.send=ce.prototype.o,ce.prototype.open=ce.prototype.m,ce.prototype.close=ce.prototype.close,Iu=function(){return new Gr},Eu=function(){return Nr()},_u=sn,As={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,ri=Or,xo.COMPLETE="complete",vu=xo,Ao.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",_t.prototype.listen=_t.prototype.K,ur=Ao,Et.prototype.listenOnce=Et.prototype.L,Et.prototype.getLastError=Et.prototype.Ka,Et.prototype.getLastErrorCode=Et.prototype.Ba,Et.prototype.getStatus=Et.prototype.Z,Et.prototype.getResponseJson=Et.prototype.Oa,Et.prototype.getResponseText=Et.prototype.oa,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Ha,yu=Et}).apply(typeof Yr<"u"?Yr:typeof self<"u"?self:typeof window<"u"?window:{});const Qa="@firebase/firestore",Xa="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Qs("@firebase/firestore");function Vn(){return mn.logLevel}function j(n,...t){if(mn.logLevel<=J.DEBUG){const e=t.map(Js);mn.debug(`Firestore (${Un}): ${n}`,...e)}}function gn(n,...t){if(mn.logLevel<=J.ERROR){const e=t.map(Js);mn.error(`Firestore (${Un}): ${n}`,...e)}}function Ni(n,...t){if(mn.logLevel<=J.WARN){const e=t.map(Js);mn.warn(`Firestore (${Un}): ${n}`,...e)}}function Js(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,bu(n,r,e)}function bu(n,t,e){let r=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw gn(r),new Error(r)}function It(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||bu(t,s,r)}function ht(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends rn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class cm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Qt.UNAUTHENTICATED))}shutdown(){}}class hm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class dm{constructor(t){this.t=t,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){It(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fn)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(It(typeof r.accessToken=="string",31837,{l:r}),new wu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return It(t===null||typeof t=="string",2055,{h:t}),new Qt(t)}}class fm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pm{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new fm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ya{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mm{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xp(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){It(this.o===void 0,3512);const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ya(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(It(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ya(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function tt(n,t){return n<t?-1:n>t?1:0}function Rs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return tt(r,s);{const o=ym(),a=vm(o.encode(Ja(n,e)),o.encode(Ja(t,e)));return a!==0?a:tt(r,s)}}e+=r>65535?2:1}return tt(n.length,t.length)}function Ja(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function vm(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return tt(n[e],t[e]);return tt(n.length,t.length)}function Mn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=-62135596800,tl=1e6;class Ot{static now(){return Ot.fromMillis(Date.now())}static fromDate(t){return Ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*tl);return new Ot(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Za)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tl}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Za;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{static fromTimestamp(t){return new gt(t)}static min(){return new gt(new Ot(0,0))}static max(){return new gt(new Ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="__name__";class Ce{constructor(t,e,r){e===void 0?e=0:e>t.length&&G(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&G(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ce.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ce?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ce.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return tt(t.length,e.length)}static compareSegments(t,e){const r=Ce.isNumericId(t),s=Ce.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ce.extractNumericId(t).compare(Ce.extractNumericId(e)):Rs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ys.fromString(t.substring(4,t.length-2))}}class Ct extends Ce{construct(t,e,r){return new Ct(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Ct(e)}static emptyPath(){return new Ct([])}}const _m=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends Ce{construct(t,e,r){return new $t(t,e,r)}static isValidIdentifier(t){return _m.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===el}static keyField(){return new $t([el])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $t(e)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(Ct.fromString(t))}static fromName(t){return new W(Ct.fromString(t).popFirst(5))}static empty(){return new W(Ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new Ct(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=-1;function Em(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=gt.fromTimestamp(r===1e9?new Ot(e+1,0):new Ot(e,r));return new Ze(s,W.empty(),t)}function Im(n){return new Ze(n.readTime,n.key,Ir)}class Ze{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ze(gt.min(),W.empty(),Ir)}static max(){return new Ze(gt.max(),W.empty(),Ir)}}function bm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==wm)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(g=>{a[d]=g,++u,u===o&&r(a)},g=>s(g))}})}static doWhile(t,e){return new V((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Am(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Pr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}to.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=-1;function no(n){return n==null}function di(n){return n===0&&1/n==-1/0}function Rm(n){return typeof n=="number"&&Number.isInteger(n)&&!di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="";function Sm(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=nl(t)),t=Cm(n.get(e),t);return nl(t)}function Cm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Au:e+="";break;default:e+=o}}return e}function nl(n){return n+Au+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function zn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ru(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.comparator=t,this.root=e||Bt.EMPTY}insert(t,e){return new ue(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new ue(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jr(this.root,t,this.comparator,!0)}}class Jr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Bt.RED,this.left=s??Bt.EMPTY,this.right=o??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Bt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw G(27949);return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.comparator=t,this.data=new ue(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new il(this.data.getIterator())}getIteratorFrom(t){return new il(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ut(this.comparator);return e.data=t,e}}class il{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.fields=t,t.sort($t.comparator)}static empty(){return new Te([])}unionWith(t){let e=new Ut($t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Mn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pm("Invalid base64 string: "+o):o}}(t);return new xe(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new xe(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const xm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(n){if(It(!!n,39018),typeof n=="string"){let t=0;const e=xm.exec(n);if(It(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:jt(n.seconds),nanos:jt(n.nanos)}}function jt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fn(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="server_timestamp",Cu="__type__",Pu="__previous_value__",xu="__local_write_time__";function ro(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Cu])===null||e===void 0?void 0:e.stringValue)===Su}function io(n){const t=n.mapValue.fields[Pu];return ro(t)?io(t):t}function fi(n){const t=yn(n.mapValue.fields[xu].timestampValue);return new Ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,e,r,s,o,a,u,h,d,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=g}}const pi="(default)";class mi{constructor(t,e){this.projectId=t,this.database=e||pi}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database===pi}isEqual(t){return t instanceof mi&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="__type__",Dm="__max__",Zr={mapValue:{}},Du="__vector__",Ss="value";function vn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ro(n)?4:Nm(n)?9007199254740991:km(n)?10:11:G(28295,{value:n})}function Ve(n,t){if(n===t)return!0;const e=vn(n);if(e!==vn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return fi(n).isEqual(fi(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=yn(s.timestampValue),u=yn(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Fn(s.bytesValue).isEqual(Fn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return jt(s.geoPointValue.latitude)===jt(o.geoPointValue.latitude)&&jt(s.geoPointValue.longitude)===jt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return jt(s.integerValue)===jt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=jt(s.doubleValue),u=jt(o.doubleValue);return a===u?di(a)===di(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Mn(n.arrayValue.values||[],t.arrayValue.values||[],Ve);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(rl(a)!==rl(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ve(a[h],u[h])))return!1;return!0}(n,t);default:return G(52216,{left:n})}}function br(n,t){return(n.values||[]).find(e=>Ve(e,t))!==void 0}function Ln(n,t){if(n===t)return 0;const e=vn(n),r=vn(t);if(e!==r)return tt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=jt(o.integerValue||o.doubleValue),h=jt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return sl(n.timestampValue,t.timestampValue);case 4:return sl(fi(n),fi(t));case 5:return Rs(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Fn(o),h=Fn(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const g=tt(u[d],h[d]);if(g!==0)return g}return tt(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=tt(jt(o.latitude),jt(a.latitude));return u!==0?u:tt(jt(o.longitude),jt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ol(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,g;const _=o.fields||{},b=a.fields||{},T=(u=_[Ss])===null||u===void 0?void 0:u.arrayValue,S=(h=b[Ss])===null||h===void 0?void 0:h.arrayValue,k=tt(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((g=S==null?void 0:S.values)===null||g===void 0?void 0:g.length)||0);return k!==0?k:ol(T,S)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Zr.mapValue&&a===Zr.mapValue)return 0;if(o===Zr.mapValue)return 1;if(a===Zr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let _=0;_<h.length&&_<g.length;++_){const b=Rs(h[_],g[_]);if(b!==0)return b;const T=Ln(u[h[_]],d[g[_]]);if(T!==0)return T}return tt(h.length,g.length)}(n.mapValue,t.mapValue);default:throw G(23264,{Pe:e})}}function sl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=yn(n),r=yn(t),s=tt(e.seconds,r.seconds);return s!==0?s:tt(e.nanos,r.nanos)}function ol(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ln(e[s],r[s]);if(o)return o}return tt(e.length,r.length)}function Bn(n){return Cs(n)}function Cs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=yn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Fn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return W.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Cs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Cs(e.fields[a])}`;return s+"}"}(n.mapValue):G(61005,{value:n})}function ii(n){switch(vn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=io(n);return t?16+ii(t):16;case 5:return 2*n.stringValue.length;case 6:return Fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+ii(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return zn(r.fields,(o,a)=>{s+=o.length+ii(a)}),s}(n.mapValue);default:throw G(13486,{value:n})}}function Ps(n){return!!n&&"integerValue"in n}function so(n){return!!n&&"arrayValue"in n}function si(n){return!!n&&"mapValue"in n}function km(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Vu])===null||e===void 0?void 0:e.stringValue)===Du}function dr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return zn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=dr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Nm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Dm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.value=t}static empty(){return new we({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!si(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dr(e)}setAll(t){let e=$t.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=dr(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());si(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ve(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];si(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){zn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new we(dr(this.value))}}function ku(n){const t=[];return zn(n.fields,(e,r)=>{const s=new $t([e]);if(si(r)){const o=ku(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Te(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new be(t,0,gt.min(),gt.min(),gt.min(),we.empty(),0)}static newFoundDocument(t,e,r,s){return new be(t,1,e,gt.min(),r,s,0)}static newNoDocument(t,e){return new be(t,2,e,gt.min(),gt.min(),we.empty(),0)}static newUnknownDocument(t,e){return new be(t,3,e,gt.min(),gt.min(),we.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(gt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=gt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof be&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e){this.position=t,this.inclusive=e}}function al(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),e.key):r=Ln(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ll(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ve(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Om(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{}class Nt extends Nu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Fm(t,e,r):e==="array-contains"?new jm(t,r):e==="in"?new $m(t,r):e==="not-in"?new Um(t,r):e==="array-contains-any"?new zm(t,r):new Nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Lm(t,r):new Bm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ln(e,this.value)):e!==null&&vn(this.value)===vn(e)&&this.matchesComparison(Ln(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Nu{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new tn(t,e)}matches(t){return Ou(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ou(n){return n.op==="and"}function Mu(n){return Mm(n)&&Ou(n)}function Mm(n){for(const t of n.filters)if(t instanceof tn)return!1;return!0}function xs(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+Bn(n.value);if(Mu(n))return n.filters.map(t=>xs(t)).join(",");{const t=n.filters.map(e=>xs(e)).join(",");return`${n.op}(${t})`}}function Fu(n,t){return n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.field.isEqual(s.field)&&Ve(r.value,s.value)}(n,t):n instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Fu(a,s.filters[u]),!0):!1}(n,t):void G(19439)}function Lu(n){return n instanceof Nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Bn(e.value)}`}(n):n instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(Lu).join(" ,")+"}"}(n):"Filter"}class Fm extends Nt{constructor(t,e,r){super(t,e,r),this.key=W.fromName(r.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class Lm extends Nt{constructor(t,e){super(t,"in",e),this.keys=Bu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Bm extends Nt{constructor(t,e){super(t,"not-in",e),this.keys=Bu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Bu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>W.fromName(r.referenceValue))}class jm extends Nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return so(e)&&br(e.arrayValue,this.value)}}class $m extends Nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&br(this.value.arrayValue,e)}}class Um extends Nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!br(this.value.arrayValue,e)}}class zm extends Nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!so(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>br(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function ul(n,t=null,e=[],r=[],s=null,o=null,a=null){return new qm(n,t,e,r,s,o,a)}function oo(n){const t=ht(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>xs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),no(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Bn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Bn(r)).join(",")),t.Ie=e}return t.Ie}function ao(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Om(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Fu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ll(n.startAt,t.startAt)&&ll(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Hm(n,t,e,r,s,o,a,u){return new Oi(n,t,e,r,s,o,a,u)}function Wm(n){return new Oi(n)}function cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gm(n){return n.collectionGroup!==null}function fr(n){const t=ht(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ut($t.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new yi(o,r))}),e.has($t.keyField().canonicalString())||t.Ee.push(new yi($t.keyField(),r))}return t.Ee}function pn(n){const t=ht(n);return t.de||(t.de=Km(t,fr(n))),t.de}function Km(n,t){if(n.limitType==="F")return ul(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new yi(s.field,o)});const e=n.endAt?new gi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gi(n.startAt.position,n.startAt.inclusive):null;return ul(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Vs(n,t,e){return new Oi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ju(n,t){return ao(pn(n),pn(t))&&n.limitType===t.limitType}function $u(n){return`${oo(pn(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Lu(s)).join(", ")}]`),no(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Bn(s)).join(",")),`Target(${r})`}(pn(n))}; limitType=${n.limitType})`}function lo(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of fr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=al(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,fr(r),s)||r.endAt&&!function(a,u,h){const d=al(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,fr(r),s))}(n,t)}function Qm(n){return(t,e)=>{let r=!1;for(const s of fr(n)){const o=Xm(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Xm(n,t,e){const r=n.field.isKeyField()?W.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Ln(h,d):G(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){zn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Ru(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new ue(W.comparator);function vi(){return Ym}const Uu=new ue(W.comparator);function ti(...n){let t=Uu;for(const e of n)t=t.insert(e.key,e);return t}function zu(n){let t=Uu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function hn(){return pr()}function qu(){return pr()}function pr(){return new bn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Jm=new ue(W.comparator),Zm=new Ut(W.comparator);function Xt(...n){let t=Zm;for(const e of n)t=t.add(e);return t}const tg=new Ut(tt);function eg(){return tg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(t)?"-0":t}}function Hu(n){return{integerValue:""+n}}function ng(n,t){return Rm(t)?Hu(t):uo(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this._=void 0}}function rg(n,t,e){return n instanceof _i?function(s,o){const a={fields:{[Cu]:{stringValue:Su},[xu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ro(o)&&(o=io(o)),o&&(a.fields[Pu]=o),{mapValue:a}}(e,t):n instanceof wr?Gu(n,t):n instanceof Tr?Ku(n,t):function(s,o){const a=Wu(s,o),u=hl(a)+hl(s.Re);return Ps(a)&&Ps(s.Re)?Hu(u):uo(s.serializer,u)}(n,t)}function ig(n,t,e){return n instanceof wr?Gu(n,t):n instanceof Tr?Ku(n,t):e}function Wu(n,t){return n instanceof Ei?function(r){return Ps(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class _i extends Mi{}class wr extends Mi{constructor(t){super(),this.elements=t}}function Gu(n,t){const e=Qu(t);for(const r of n.elements)e.some(s=>Ve(s,r))||e.push(r);return{arrayValue:{values:e}}}class Tr extends Mi{constructor(t){super(),this.elements=t}}function Ku(n,t){let e=Qu(t);for(const r of n.elements)e=e.filter(s=>!Ve(s,r));return{arrayValue:{values:e}}}class Ei extends Mi{constructor(t,e){super(),this.serializer=t,this.Re=e}}function hl(n){return jt(n.integerValue||n.doubleValue)}function Qu(n){return so(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof wr&&s instanceof wr||r instanceof Tr&&s instanceof Tr?Mn(r.elements,s.elements,Ve):r instanceof Ei&&s instanceof Ei?Ve(r.Re,s.Re):r instanceof _i&&s instanceof _i}(n.transform,t.transform)}class og{constructor(t,e){this.version=t,this.transformResults=e}}class Fe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Fe}static exists(t){return new Fe(void 0,t)}static updateTime(t){return new Fe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function oi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Fi{}function Xu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ju(n.key,Fe.none()):new xr(n.key,n.data,Fe.none());{const e=n.data,r=we.empty();let s=new Ut($t.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new wn(n.key,r,new Te(s.toArray()),Fe.none())}}function ag(n,t,e){n instanceof xr?function(s,o,a){const u=s.value.clone(),h=fl(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof wn?function(s,o,a){if(!oi(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=fl(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Yu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mr(n,t,e,r){return n instanceof xr?function(o,a,u,h){if(!oi(o.precondition,a))return u;const d=o.value.clone(),g=pl(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof wn?function(o,a,u,h){if(!oi(o.precondition,a))return u;const d=pl(o.fieldTransforms,h,a),g=a.data;return g.setAll(Yu(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,t,e,r):function(o,a,u){return oi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function lg(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Wu(r.transform,s||null);o!=null&&(e===null&&(e=we.empty()),e.set(r.field,o))}return e||null}function dl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Mn(r,s,(o,a)=>sg(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xr extends Fi{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wn extends Fi{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Yu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function fl(n,t,e){const r=new Map;It(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,ig(a,u,e[s]))}return r}function pl(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,rg(o,a,t))}return r}class Ju extends Fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ug extends Fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&ag(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=qu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Xu(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(gt.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Xt())}isEqual(t){return this.batchId===t.batchId&&Mn(this.mutations,t.mutations,(e,r)=>dl(e,r))&&Mn(this.baseMutations,t.baseMutations,(e,r)=>dl(e,r))}}class co{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){It(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return Jm}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new co(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,Y;function dg(n){switch(n){case M.OK:return G(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function fg(n){if(n===void 0)return gn("GRPC error has no .code"),M.UNKNOWN;switch(n){case St.OK:return M.OK;case St.CANCELLED:return M.CANCELLED;case St.UNKNOWN:return M.UNKNOWN;case St.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case St.INTERNAL:return M.INTERNAL;case St.UNAVAILABLE:return M.UNAVAILABLE;case St.UNAUTHENTICATED:return M.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case St.NOT_FOUND:return M.NOT_FOUND;case St.ALREADY_EXISTS:return M.ALREADY_EXISTS;case St.PERMISSION_DENIED:return M.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case St.ABORTED:return M.ABORTED;case St.OUT_OF_RANGE:return M.OUT_OF_RANGE;case St.UNIMPLEMENTED:return M.UNIMPLEMENTED;case St.DATA_LOSS:return M.DATA_LOSS;default:return G(39323,{code:n})}}(Y=St||(St={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ys([4294967295,4294967295],0);class pg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ds(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function gg(n,t){return Ds(n,t.toTimestamp())}function kn(n){return It(!!n,49232),gt.fromTimestamp(function(e){const r=yn(e);return new Ot(r.seconds,r.nanos)}(n))}function Zu(n,t){return ks(n,t).canonicalString()}function ks(n,t){const e=function(s){return new Ct(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function yg(n){const t=Ct.fromString(n);return It(Ag(t),10190,{key:t.toString()}),t}function Ns(n,t){return Zu(n.databaseId,t.path)}function vg(n){const t=yg(n);return t.length===4?Ct.emptyPath():Eg(t)}function _g(n){return new Ct(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Eg(n){return It(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ml(n,t,e){return{name:Ns(n,t),fields:e.value.mapValue.fields}}function Ig(n,t){let e;if(t instanceof xr)e={update:ml(n,t.key,t.value)};else if(t instanceof Ju)e={delete:Ns(n,t.key)};else if(t instanceof wn)e={update:ml(n,t.key,t.data),updateMask:Tg(t.fieldMask)};else{if(!(t instanceof ug))return G(16599,{ft:t.type});e={verify:Ns(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof _i)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof wr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Tr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ei)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw G(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:gg(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G(27497)}(n,t.precondition)),e}function bg(n,t){return n&&n.length>0?(It(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?kn(s.updateTime):kn(o);return a.isEqual(gt.min())&&(a=kn(o)),new og(a,s.transformResults||[])}(e,t))):[]}function wg(n){let t=vg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){It(r===1,65062);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(_){const b=tc(_);return b instanceof tn&&Mu(b)?b.getFilters():[b]}(e.where));let a=[];e.orderBy&&(a=function(_){return _.map(b=>function(S){return new yi(Dn(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(b))}(e.orderBy));let u=null;e.limit&&(u=function(_){let b;return b=typeof _=="object"?_.value:_,no(b)?null:b}(e.limit));let h=null;e.startAt&&(h=function(_){const b=!!_.before,T=_.values||[];return new gi(T,b)}(e.startAt));let d=null;return e.endAt&&(d=function(_){const b=!_.before,T=_.values||[];return new gi(T,b)}(e.endAt)),Hm(t,s,a,o,u,"F",h,d)}function tc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Dn(e.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dn(e.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Dn(e.unaryFilter.field);return Nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dn(e.unaryFilter.field);return Nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(n):n.fieldFilter!==void 0?function(e){return Nt.create(Dn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(r=>tc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(e.compositeFilter.op))}(n):G(30097,{filter:n})}function Dn(n){return $t.fromServerFormat(n.fieldPath)}function Tg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ag(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t){this.wt=t}}function Sg(n){const t=wg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.Cn=new Pg}addToCollectionParentIndex(t,e){return this.Cn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Ze.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Ze.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Pg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ut(Ct.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(Ct.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ec=41943040;class ae{static withCacheSize(t){return new ae(t,ae.DEFAULT_COLLECTION_PERCENTILE,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ae.DEFAULT_COLLECTION_PERCENTILE=10,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ae.DEFAULT=new ae(ec,ae.DEFAULT_COLLECTION_PERCENTILE,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ae.DISABLED=new ae(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new jn(0)}static lr(){return new jn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="LruGarbageCollector",xg=1048576;function vl([n,t],[e,r]){const s=tt(n,e);return s===0?tt(t,r):s}class Vg{constructor(t){this.Er=t,this.buffer=new Ut(vl),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();vl(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Dg{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){j(yl,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Pr(e)?j(yl,"Ignoring IndexedDB error during garbage collection: ",e):await Zs(e)}await this.mr(3e5)})}}class kg{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return V.resolve(to.le);const r=new Vg(e);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(gl)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,s,o,a,u,h,d;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,a=Date.now(),this.nthSequenceNumber(t,s))).next(_=>(r=_,u=Date.now(),this.removeTargets(t,r,e))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(_=>(d=Date.now(),Vn()<=J.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-g}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:_})))}}function Ng(n,t){return new kg(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.changes=new bn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,be.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&mr(r.mutation,s,Te.empty(),Ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Xt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Xt()){const s=hn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=ti();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=hn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Xt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=vi();const a=pr(),u=function(){return pr()}();return e.forEach((h,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof wn)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),mr(g.mutation,d,g.mutation.getFieldMask(),Ot.now())):a.set(d.key,Te.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,g)=>a.set(d,g)),e.forEach((d,g)=>{var _;return u.set(d,new Mg(g,(_=a.get(d))!==null&&_!==void 0?_:null))}),u))}recalculateAndSaveOverlays(t,e){const r=pr();let s=new ue((a,u)=>a-u),o=Xt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let g=r.get(h)||Te.empty();g=u.applyToLocalView(d,g),r.set(h,g);const _=(s.get(u.batchId)||Xt()).add(h);s=s.insert(u.batchId,_)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,g=h.value,_=qu();g.forEach(b=>{if(!o.has(b)){const T=Xu(e.get(b),r.get(b));T!==null&&_.set(b,T),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,_))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Gm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):V.resolve(hn());let u=Ir,h=o;return a.next(d=>V.forEach(d,(g,_)=>(u<_.largestBatchId&&(u=_.largestBatchId),o.get(g)?V.resolve():this.remoteDocumentCache.getEntry(t,g).next(b=>{h=h.insert(g,b)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Xt())).next(g=>({batchId:u,changes:zu(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next(r=>{let s=ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=ti();return this.indexManager.getCollectionParents(t,o).next(u=>V.forEach(u,h=>{const d=function(_,b){return new Oi(b,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(g=>{g.forEach((_,b)=>{a=a.insert(_,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,be.newInvalidDocument(g)))});let u=ti();return a.forEach((h,d)=>{const g=o.get(h);g!==void 0&&mr(g.mutation,d,Te.empty(),Ot.now()),lo(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return V.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:kn(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:Sg(s.bundledQuery),readTime:kn(s.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.overlays=new ue(W.comparator),this.Qr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=hn();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=hn(),o=e.length+1,a=new W(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ue((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=hn(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const u=hn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>u.set(d,g)),!(u.size()>=s)););return V.resolve(u)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hg(e,r));let o=this.Qr.get(e);o===void 0&&(o=Xt(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.$r=new Ut(kt.Ur),this.Kr=new Ut(kt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new kt(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new kt(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new W(new Ct([])),r=new kt(e,t),s=new kt(e,t+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new W(new Ct([])),r=new kt(e,t),s=new kt(e,t+1);let o=Xt();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new kt(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return W.comparator(t.key,e.key)||tt(t.Zr,e.Zr)}static Wr(t,e){return tt(t.Zr,e.Zr)||W.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new Ut(kt.Ur)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cg(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Xr=this.Xr.add(new kt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ti(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?eo:this.nr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),s=new kt(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const u=this.ei(a.Zr);o.push(u)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ut(tt);return e.forEach(s=>{const o=new kt(s,0),a=new kt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{r=r.add(u.Zr)})}),V.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const a=new kt(new W(o),0);let u=new Ut(tt);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Zr)),!0)},a),V.resolve(this.ni(u))}ni(t){const e=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){It(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return V.forEach(e.mutations,s=>{const o=new kt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new kt(e,0),s=this.Xr.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t){this.ii=t,this.docs=function(){return new ue(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():be.newInvalidDocument(e))}getEntries(t,e){let r=vi();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():be.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=vi();const a=e.path,u=new W(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||bm(Im(g),r)<=0||(s.has(g.key)||lo(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,s){G(9500)}si(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new zg(this)}getSize(t){return V.resolve(this.size)}}class zg extends Og{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t){this.persistence=t,this.oi=new bn(e=>oo(e),ao),this.lastRemoteSnapshotVersion=gt.min(),this.highestTargetId=0,this._i=0,this.ai=new ho,this.targetCount=0,this.ui=jn.cr()}forEachTarget(t,e){return this.oi.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),V.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new jn(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Tr(e),V.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.ci={},this.overlays={},this.li=new to(0),this.hi=!1,this.hi=!0,this.Pi=new jg,this.referenceDelegate=t(this),this.Ti=new qg(this),this.indexManager=new Cg,this.remoteDocumentCache=function(s){return new Ug(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Rg(e),this.Ei=new Lg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Bg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new $g(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){j("MemoryPersistence","Starting transaction:",t);const s=new Hg(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return V.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class Hg extends Tm{constructor(t){super(),this.currentSequenceNumber=t}}class fo{constructor(t){this.persistence=t,this.Vi=new ho,this.mi=null}static fi(t){return new fo(t)}get gi(){if(this.mi)return this.mi;throw G(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,r=>{const s=W.fromPath(r);return this.pi(t,s).next(o=>{o||e.removeEntry(s,gt.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return V.or([()=>V.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Ii{constructor(t,e){this.persistence=t,this.yi=new bn(r=>Sm(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ng(this,e)}static fi(t,e){return new Ii(t,e)}di(){}Ai(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return V.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(o=>o?V.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,gt.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),V.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ii(t.data.value)),e}Dr(t,e,r){return V.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ds=r,this.As=s}static Rs(t,e){let r=Xt(),s=Xt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new po(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Wf()?8:Am(zf())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Wg;return this.Ss(t,e,a).next(u=>{if(o.result=u,this.fs)return this.Ds(t,e,a,u.size)})}).next(()=>o.result)}Ds(t,e,r,s){return r.documentReadCount<this.gs?(Vn()<=J.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",lr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(Vn()<=J.DEBUG&&j("QueryEngine","Query:",lr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Vn()<=J.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",lr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pn(e))):V.resolve())}ws(t,e){if(cl(e))return V.resolve(null);let r=pn(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Vs(e,null,"F"),r=pn(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Xt(...o);return this.ys.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.vs(e,u);return this.Cs(e,d,a,h.readTime)?this.ws(t,Vs(e,null,"F")):this.Fs(t,d,e,h)}))})))}bs(t,e,r,s){return cl(e)||s.isEqual(gt.min())?V.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,s)?V.resolve(null):(Vn()<=J.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),lr(e)),this.Fs(t,a,e,Em(s,Ir)).next(u=>u))})}vs(t,e){let r=new Ut(Qm(t));return e.forEach((s,o)=>{lo(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return Vn()<=J.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",lr(e)),this.ys.getDocumentsMatchingQuery(t,e,Ze.min(),r)}Fs(t,e,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="LocalStore";class Qg{constructor(t,e,r,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new ue(tt),this.Os=new bn(o=>oo(o),ao),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fg(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Xg(n,t,e,r){return new Qg(n,t,e,r)}async function rc(n,t){const e=ht(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Xt();for(const d of s){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){u.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:u}))})})}function Yg(n,t){const e=ht(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,g){const _=d.batch,b=_.keys();let T=V.resolve();return b.forEach(S=>{T=T.next(()=>g.getEntry(h,S)).next(k=>{const P=d.docVersions.get(S);It(P!==null,48541),k.version.compareTo(P)<0&&(_.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),g.addEntry(k)))})}),T.next(()=>u.mutationQueue.removeMutationBatch(h,_))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Xt();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Jg(n){const t=ht(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Zg(n,t){const e=ht(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=eo),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class _l{constructor(){this.activeTargetIds=eg()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ty{constructor(){this.xo=new _l,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new _l,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="ConnectivityMonitor";class Il{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){j(El,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){j(El,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=null;function Os(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="RestConnection",ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ry{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===pi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,e,r,s,o){const a=Os(),u=this.jo(t,e.toUriEncodedString());j(hs,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:d}=new URL(u),g=Ks(d);return this.Jo(t,u,h,r,g).then(_=>(j(hs,`Received RPC '${t}' ${a}: `,_),_),_=>{throw Ni(hs,`RPC '${t}' ${a} failed with error: `,_,"url: ",u,"request:",r),_})}Yo(t,e,r,s,o,a){return this.zo(t,e,r,s,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const r=ny[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class sy extends ry{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=Os();return new Promise((u,h)=>{const d=new yu;d.setWithCredentials(!0),d.listenOnce(vu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ri.NO_ERROR:const _=d.getResponseJson();j(Kt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(_)),u(_);break;case ri.TIMEOUT:j(Kt,`RPC '${t}' ${a} timed out`),h(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case ri.HTTP_ERROR:const b=d.getStatus();if(j(Kt,`RPC '${t}' ${a} failed with status:`,b,"response text:",d.getResponseText()),b>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const S=T==null?void 0:T.error;if(S&&S.status&&S.message){const k=function(F){const B=F.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(B)>=0?B:M.UNKNOWN}(S.status);h(new q(k,S.message))}else h(new q(M.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new q(M.UNAVAILABLE,"Connection failed."));break;default:G(9055,{h_:t,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{j(Kt,`RPC '${t}' ${a} completed.`)}});const g=JSON.stringify(s);j(Kt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",g,r,15)})}I_(t,e,r){const s=Os(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Iu(),u=Eu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");j(Kt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const _=a.createWebChannel(g,h);this.E_(_);let b=!1,T=!1;const S=new iy({Zo:P=>{T?j(Kt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(b||(j(Kt,`Opening RPC '${t}' stream ${s} transport.`),_.open(),b=!0),j(Kt,`RPC '${t}' stream ${s} sending:`,P),_.send(P))},Xo:()=>_.close()}),k=(P,F,B)=>{P.listen(F,x=>{try{B(x)}catch(O){setTimeout(()=>{throw O},0)}})};return k(_,ur.EventType.OPEN,()=>{T||(j(Kt,`RPC '${t}' stream ${s} transport opened.`),S.__())}),k(_,ur.EventType.CLOSE,()=>{T||(T=!0,j(Kt,`RPC '${t}' stream ${s} transport closed`),S.u_(),this.d_(_))}),k(_,ur.EventType.ERROR,P=>{T||(T=!0,Ni(Kt,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),S.u_(new q(M.UNAVAILABLE,"The operation could not be completed")))}),k(_,ur.EventType.MESSAGE,P=>{var F;if(!T){const B=P.data[0];It(!!B,16349);const x=B,O=(x==null?void 0:x.error)||((F=x[0])===null||F===void 0?void 0:F.error);if(O){j(Kt,`RPC '${t}' stream ${s} received error:`,O);const $=O.status;let N=function(m){const E=St[m];if(E!==void 0)return fg(E)}($),v=O.message;N===void 0&&(N=M.INTERNAL,v="Unknown error status: "+$+" with message "+O.message),T=!0,S.u_(new q(N,v)),_.close()}else j(Kt,`RPC '${t}' stream ${s} received:`,B),S.c_(B)}}),k(u,_u.STAT_EVENT,P=>{P.stat===As.PROXY?j(Kt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===As.NOPROXY&&j(Kt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function ds(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n){return new pg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,r=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="PersistentStream";class oy{constructor(t,e,r,s,o,a,u,h){this.xi=t,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new ic(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===M.RESOURCE_EXHAUSTED?(gn(e.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===e&&this.z_(r,s)},r=>{t(()=>{const s=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return j(bl,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(j(bl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ay extends oy{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return It(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,It(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){It(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=bg(t.writeResults,t.commitTime),r=kn(t.commitTime);return this.listener.ra(r,e)}ia(){const t={};t.database=_g(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ig(this.serializer,r))};this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{}class uy extends ly{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,ks(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}Yo(t,e,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(t,ks(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(M.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class cy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(gn(e),this.ua=!1):j("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="RemoteStore";class hy{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{kr(this)&&(j(Vr,"Restarting streams for network reachability change."),await async function(h){const d=ht(h);d.da.add(4),await Dr(d),d.Va.set("Unknown"),d.da.delete(4),await Bi(d)}(this))})}),this.Va=new cy(r,s)}}async function Bi(n){if(kr(n))for(const t of n.Aa)await t(!0)}async function Dr(n){for(const t of n.Aa)await t(!1)}function kr(n){return ht(n).da.size===0}async function sc(n,t,e){if(!Pr(t))throw t;n.da.add(1),await Dr(n),n.Va.set("Offline"),e||(e=()=>Jg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(Vr,"Retrying IndexedDB access"),await e(),n.da.delete(1),await Bi(n)})}function oc(n,t){return t().catch(e=>sc(n,e,t))}async function ji(n){const t=ht(n),e=en(t);let r=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:eo;for(;dy(t);)try{const s=await Zg(t.localStore,r);if(s===null){t.Ia.length===0&&e.k_();break}r=s.batchId,fy(t,s)}catch(s){await sc(t,s)}ac(t)&&lc(t)}function dy(n){return kr(n)&&n.Ia.length<10}function fy(n,t){n.Ia.push(t);const e=en(n);e.N_()&&e.ea&&e.ta(t.mutations)}function ac(n){return kr(n)&&!en(n).O_()&&n.Ia.length>0}function lc(n){en(n).start()}async function py(n){en(n).ia()}async function my(n){const t=en(n);for(const e of n.Ia)t.ta(e.mutations)}async function gy(n,t,e){const r=n.Ia.shift(),s=co.from(r,t,e);await oc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ji(n)}async function yy(n,t){t&&en(n).ea&&await async function(r,s){if(function(a){return dg(a)&&a!==M.ABORTED}(s.code)){const o=r.Ia.shift();en(r).L_(),await oc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ji(r)}}(n,t),ac(n)&&lc(n)}async function wl(n,t){const e=ht(n);e.asyncQueue.verifyOperationInProgress(),j(Vr,"RemoteStore received new credentials");const r=kr(e);e.da.add(3),await Dr(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await Bi(e)}async function vy(n,t){const e=ht(n);t?(e.da.delete(2),await Bi(e)):t||(e.da.add(2),await Dr(e),e.Va.set("Unknown"))}function en(n){return n.ga||(n.ga=function(e,r,s){const o=ht(e);return o.oa(),new ay(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:py.bind(null,n),i_:yy.bind(null,n),na:my.bind(null,n),ra:gy.bind(null,n)}),n.Aa.push(async t=>{t?(n.ga.L_(),await ji(n)):(await n.ga.stop(),n.Ia.length>0&&(j(Vr,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new mo(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uc(n,t){if(gn("AsyncQueue",`${t}: ${n}`),Pr(n))return new q(M.UNAVAILABLE,`${t}: ${n}`);throw n}class _y{constructor(){this.queries=Tl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=ht(e),o=s.queries;s.queries=Tl(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function Tl(){return new bn(n=>$u(n),ju)}function Ey(n){n.Ca.forEach(t=>{t.next()})}var Al,Rl;(Rl=Al||(Al={})).xa="default",Rl.Cache="cache";const Iy="SyncEngine";class by{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new bn(u=>$u(u),ju),this.Pu=new Map,this.Tu=new Set,this.Iu=new ue(W.comparator),this.Eu=new Map,this.du=new ho,this.Au={},this.Ru=new Map,this.Vu=jn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function wy(n,t,e){const r=Sy(n);try{const s=await function(a,u){const h=ht(a),d=Ot.now(),g=u.reduce((T,S)=>T.add(S.key),Xt());let _,b;return h.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=vi(),k=Xt();return h.Bs.getEntries(T,g).next(P=>{S=P,S.forEach((F,B)=>{B.isValidDocument()||(k=k.add(F))})}).next(()=>h.localDocuments.getOverlayedDocuments(T,S)).next(P=>{_=P;const F=[];for(const B of u){const x=lg(B,_.get(B.key).overlayedDocument);x!=null&&F.push(new wn(B.key,x,ku(x.value.mapValue),Fe.exists(!0)))}return h.mutationQueue.addMutationBatch(T,d,F,u)}).next(P=>{b=P;const F=P.applyToLocalDocumentSet(_,k);return h.documentOverlayCache.saveOverlays(T,P.batchId,F)})}).then(()=>({batchId:b.batchId,changes:zu(_)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Au[a.currentUser.toKey()];d||(d=new ue(tt)),d=d.insert(u,h),a.Au[a.currentUser.toKey()]=d}(r,s.batchId,e),await $i(r,s.changes),await ji(r.remoteStore)}catch(s){const o=uc(s,"Failed to persist write");e.reject(o)}}function Sl(n,t,e){const r=ht(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.hu.forEach((o,a)=>{const u=a.view.Fa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=ht(a);h.onlineState=u;let d=!1;h.queries.forEach((g,_)=>{for(const b of _.Sa)b.Fa(u)&&(d=!0)}),d&&Ey(h)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ty(n,t){const e=ht(n),r=t.batch.batchId;try{const s=await Yg(e.localStore,t);hc(e,r,null),cc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await $i(e,s)}catch(s){await Zs(s)}}async function Ay(n,t,e){const r=ht(n);try{const s=await function(a,u){const h=ht(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return h.mutationQueue.lookupMutationBatch(d,u).next(_=>(It(_!==null,37113),g=_.keys(),h.mutationQueue.removeMutationBatch(d,_))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>h.localDocuments.getDocuments(d,g))})}(r.localStore,t);hc(r,t,e),cc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await $i(r,s)}catch(s){await Zs(s)}}function cc(n,t){(n.Ru.get(t)||[]).forEach(e=>{e.resolve()}),n.Ru.delete(t)}function hc(n,t,e){const r=ht(n);let s=r.Au[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Au[r.currentUser.toKey()]=s}}async function $i(n,t,e){const r=ht(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((u,h)=>{a.push(r.fu(h,t,e).then(d=>{var g;if((d||e)&&r.isPrimaryClient){const _=d?!d.fromCache:(g=void 0)===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){s.push(d);const _=po.Rs(h.targetId,d);o.push(_)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(h,d){const g=ht(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>V.forEach(d,b=>V.forEach(b.ds,T=>g.persistence.referenceDelegate.addReference(_,b.targetId,T)).next(()=>V.forEach(b.As,T=>g.persistence.referenceDelegate.removeReference(_,b.targetId,T)))))}catch(_){if(!Pr(_))throw _;j(Kg,"Failed to update sequence numbers: "+_)}for(const _ of d){const b=_.targetId;if(!_.fromCache){const T=g.xs.get(b),S=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(S);g.xs=g.xs.insert(b,k)}}}(r.localStore,o))}async function Ry(n,t){const e=ht(n);if(!e.currentUser.isEqual(t)){j(Iy,"User change. New user:",t.toKey());const r=await rc(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(u=>{u.forEach(h=>{h.reject(new q(M.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await $i(e,r.ks)}}function Sy(n){const t=ht(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ty.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ay.bind(null,t),t}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Li(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Xg(this.persistence,new Gg,t.initialUser,this.serializer)}Su(t){return new nc(fo.fi,this.serializer)}bu(t){return new ty}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class Cy extends bi{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){It(this.persistence.referenceDelegate instanceof Ii,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Dg(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?ae.withCacheSize(this.cacheSizeBytes):ae.DEFAULT;return new nc(r=>Ii.fi(r,e),this.serializer)}}class Ms{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ry.bind(null,this.syncEngine),await vy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _y}()}createDatastore(t){const e=Li(t.databaseInfo.databaseId),r=function(o){return new sy(o)}(t.databaseInfo);return function(o,a,u,h){return new uy(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new hy(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Sl(this.syncEngine,e,0),function(){return Il.C()?new Il:new ey}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,g){const _=new by(s,o,a,u,h,d);return g&&(_.mu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=ht(s);j(Vr,"RemoteStore shutting down."),o.da.add(5),await Dr(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ms.provider={build:()=>new Ms};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="FirestoreClient";class Py{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Qt.UNAUTHENTICATED,this.clientId=Tu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{j(nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j(nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=uc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function fs(n,t){n.asyncQueue.verifyOperationInProgress(),j(nn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Cl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xy(n);j(nn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>wl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>wl(t.remoteStore,s)),n._onlineComponents=t}async function xy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(nn,"Using user provided OfflineComponentProvider");try{await fs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ni("Error using user provided cache. Falling back to memory cache: "+e),await fs(n,new bi)}}else j(nn,"Using default OfflineComponentProvider"),await fs(n,new Cy(void 0));return n._offlineComponents}async function Vy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(nn,"Using user provided OnlineComponentProvider"),await Cl(n,n._uninitializedComponentsProvider._online)):(j(nn,"Using default OnlineComponentProvider"),await Cl(n,new Ms))),n._onlineComponents}function Dy(n){return Vy(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n,t,e){if(!e)throw new q(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ny(n,t,e,r){if(t===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function xl(n){if(!W.isDocumentKey(n))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function go(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function Fs(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=go(n);throw new q(M.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="firestore.googleapis.com",Vl=!0;class Dl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fc,this.ssl=Vl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Vl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ec;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<xg)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ny("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yo{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cm;switch(r.type){case"firstParty":return new pm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Pl.get(e);r&&(j("ComponentProvider","Removing Datastore"),Pl.delete(e),r.terminate())}(this),Promise.resolve()}}function Oy(n,t,e,r={}){var s;n=Fs(n,yo);const o=Ks(t),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Lf(`https://${h}`),Uf("Firestore",!0)),a.host!==fc&&a.host!==h&&Ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!_r(d,u)&&(n._setSettings(d),r.mockUserToken)){let g,_;if(typeof r.mockUserToken=="string")g=r.mockUserToken,_=Qt.MOCK_USER;else{g=Bf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Qt(b)}n._authCredentials=new hm(new wu(g,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new vo(this.firestore,t,this._query)}}class Le{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}}class Ar extends vo{constructor(t,e,r){super(t,e,Wm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new W(t))}withConverter(t){return new Ar(this.firestore,t,this._path)}}function My(n,t,...e){if(n=On(n),arguments.length===1&&(t=Tu.newId()),ky("doc","path",t),n instanceof yo){const r=Ct.fromString(t,...e);return xl(r),new Le(n,null,new W(r))}{if(!(n instanceof Le||n instanceof Ar))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ct.fromString(t,...e));return xl(r),new Le(n.firestore,n instanceof Ar?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="AsyncQueue";class Nl{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new ic(this,"async_queue_retry"),this.rc=()=>{const r=ds();r&&j(kl,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=ds();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new fn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!Pr(t))throw t;j(kl,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,gn("INTERNAL UNHANDLED ERROR: ",Ol(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=mo.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&G(47125,{cc:Ol(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function Ol(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class pc extends yo{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Nl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Nl(t),this._firestoreClient=void 0,await t}}}function Fy(n,t){const e=typeof n=="object"?n:pu(),r=typeof n=="string"?n:pi,s=Cr(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Mf("firestore");o&&Oy(s,...o)}return s}function Ly(n){if(n._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||By(n),n._firestoreClient}function By(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,g){return new Vm(u,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,dc(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Py(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rr(xe.fromBase64String(t))}catch(e){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rr(xe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=/^__.*__$/;class $y{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new wn(t,this.data,this.fieldMask,e,this.fieldTransforms):new xr(t,this.data,e,this.fieldTransforms)}}function _c(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ic:n})}}class _o{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new _o(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return wi(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(_c(this.Ic)&&jy.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class Uy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Li(t)}bc(t,e,r,s=!1){return new _o({Ic:t,methodName:e,wc:r,path:$t.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zy(n){const t=n._freezeSettings(),e=Li(n._databaseId);return new Uy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function qy(n,t,e,r,s,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,t,e,s);wc("Data must be an object, but it was:",a,r);const u=Ic(r,a);let h,d;if(o.merge)h=new Te(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const _ of o.mergeFields){const b=Hy(t,_,e);if(!a.contains(b))throw new q(M.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Ky(g,b)||g.push(b)}h=new Te(g),d=a.fieldTransforms.filter(_=>h.covers(_.field))}else h=null,d=a.fieldTransforms;return new $y(new we(u),h,d)}function Ec(n,t){if(bc(n=On(n)))return wc("Unsupported field value:",t,n),Ic(n,t);if(n instanceof gc)return function(r,s){if(!_c(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Ec(u,s.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=On(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ng(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ot.fromDate(r);return{timestampValue:Ds(s.serializer,o)}}if(r instanceof Ot){const o=new Ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ds(s.serializer,o)}}if(r instanceof yc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rr)return{bytesValue:mg(s.serializer,r._byteString)};if(r instanceof Le){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Zu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vc)return function(a,u){return{mapValue:{fields:{[Vu]:{stringValue:Du},[Ss]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.gc("VectorValues must only contain numeric values.");return uo(u.serializer,d)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${go(r)}`)}(n,t)}function Ic(n,t){const e={};return Ru(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zn(n,(r,s)=>{const o=Ec(s,t.Ac(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function bc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ot||n instanceof yc||n instanceof Rr||n instanceof Le||n instanceof gc||n instanceof vc)}function wc(n,t,e){if(!bc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=go(e);throw r==="an object"?t.gc(n+" a custom object"):t.gc(n+" "+r)}}function Hy(n,t,e){if((t=On(t))instanceof mc)return t._internalPath;if(typeof t=="string")return Gy(n,t);throw wi("Field path arguments must be of type string or ",n,!1,void 0,e)}const Wy=new RegExp("[~\\*/\\[\\]]");function Gy(n,t,e){if(t.search(Wy)>=0)throw wi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new mc(...t.split("."))._internalPath}catch{throw wi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function wi(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new q(M.INVALID_ARGUMENT,u+n+h)}function Ky(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}function Xy(n,t,e){n=Fs(n,Le);const r=Fs(n.firestore,pc),s=Qy(n.converter,t,e);return Yy(r,[qy(zy(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Fe.none())])}function Yy(n,t){return function(r,s){const o=new fn;return r.asyncQueue.enqueueAndForget(async()=>wy(await Dy(r),s,o)),o.promise}(Ly(n),t)}(function(t,e=!0){(function(s){Un=s})(Zp),Je(new je("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new pc(new dm(r.getProvider("auth-internal")),new mm(a,r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(d.options.projectId,g)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Pe(Qa,Xa,t),Pe(Qa,Xa,"esm2017")})();const Tc="@firebase/installations",Eo="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=1e4,Rc=`w:${Eo}`,Sc="FIS_v2",Jy="https://firebaseinstallations.googleapis.com/v1",Zy=60*60*1e3,tv="installations",ev="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_n=new ki(tv,ev,nv);function Cc(n){return n instanceof rn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc({projectId:n}){return`${Jy}/projects/${n}/installations`}function xc(n){return{token:n.token,requestStatus:2,expiresIn:iv(n.expiresIn),creationTime:Date.now()}}async function Vc(n,t){const r=(await t.json()).error;return _n.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Dc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function rv(n,{refreshToken:t}){const e=Dc(n);return e.append("Authorization",sv(t)),e}async function kc(n){const t=await n();return t.status>=500&&t.status<600?n():t}function iv(n){return Number(n.replace("s","000"))}function sv(n){return`${Sc} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Pc(n),s=Dc(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Sc,appId:n.appId,sdkVersion:Rc},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await kc(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:xc(d.authToken)}}else throw await Vc("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=/^[cdef][\w-]{21}$/,Ls="";function uv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=cv(n);return lv.test(e)?e:Ls}catch{return Ls}}function cv(n){return av(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Map;function Mc(n,t){const e=Ui(n);Fc(e,t),hv(e,t)}function Fc(n,t){const e=Oc.get(n);if(e)for(const r of e)r(t)}function hv(n,t){const e=dv();e&&e.postMessage({key:n,fid:t}),fv()}let dn=null;function dv(){return!dn&&"BroadcastChannel"in self&&(dn=new BroadcastChannel("[Firebase] FID Change"),dn.onmessage=n=>{Fc(n.data.key,n.data.fid)}),dn}function fv(){Oc.size===0&&dn&&(dn.close(),dn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="firebase-installations-database",mv=1,En="firebase-installations-store";let ps=null;function Io(){return ps||(ps=du(pv,mv,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(En)}}})),ps}async function Ti(n,t){const e=Ui(n),s=(await Io()).transaction(En,"readwrite"),o=s.objectStore(En),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&Mc(n,t.fid),t}async function Lc(n){const t=Ui(n),r=(await Io()).transaction(En,"readwrite");await r.objectStore(En).delete(t),await r.done}async function zi(n,t){const e=Ui(n),s=(await Io()).transaction(En,"readwrite"),o=s.objectStore(En),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&Mc(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(n){let t;const e=await zi(n.appConfig,r=>{const s=gv(r),o=yv(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ls?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function gv(n){const t=n||{fid:uv(),registrationStatus:0};return Bc(t)}function yv(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(_n.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vv(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_v(n)}:{installationEntry:t}}async function vv(n,t){try{const e=await ov(n,t);return Ti(n.appConfig,e)}catch(e){throw Cc(e)&&e.customData.serverCode===409?await Lc(n.appConfig):await Ti(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function _v(n){let t=await Ml(n.appConfig);for(;t.registrationStatus===1;)await Nc(100),t=await Ml(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await bo(n);return r||e}return t}function Ml(n){return zi(n,t=>{if(!t)throw _n.create("installation-not-found");return Bc(t)})}function Bc(n){return Ev(n)?{fid:n.fid,registrationStatus:0}:n}function Ev(n){return n.registrationStatus===1&&n.registrationTime+Ac<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv({appConfig:n,heartbeatServiceProvider:t},e){const r=bv(n,e),s=rv(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Rc,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await kc(()=>fetch(r,u));if(h.ok){const d=await h.json();return xc(d)}else throw await Vc("Generate Auth Token",h)}function bv(n,{fid:t}){return`${Pc(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(n,t=!1){let e;const r=await zi(n.appConfig,o=>{if(!jc(o))throw _n.create("not-registered");const a=o.authToken;if(!t&&Av(a))return o;if(a.requestStatus===1)return e=wv(n,t),o;{if(!navigator.onLine)throw _n.create("app-offline");const u=Sv(o);return e=Tv(n,u),u}});return e?await e:r.authToken}async function wv(n,t){let e=await Fl(n.appConfig);for(;e.authToken.requestStatus===1;)await Nc(100),e=await Fl(n.appConfig);const r=e.authToken;return r.requestStatus===0?wo(n,t):r}function Fl(n){return zi(n,t=>{if(!jc(t))throw _n.create("not-registered");const e=t.authToken;return Cv(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tv(n,t){try{const e=await Iv(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Ti(n.appConfig,r),e}catch(e){if(Cc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Lc(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ti(n.appConfig,r)}throw e}}function jc(n){return n!==void 0&&n.registrationStatus===2}function Av(n){return n.requestStatus===2&&!Rv(n)}function Rv(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Zy}function Sv(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Cv(n){return n.requestStatus===1&&n.requestTime+Ac<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n){const t=n,{installationEntry:e,registrationPromise:r}=await bo(t);return r?r.catch(console.error):wo(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(n,t=!1){const e=n;return await Vv(e),(await wo(e,t)).token}async function Vv(n){const{registrationPromise:t}=await bo(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){if(!n||!n.options)throw ms("App Configuration");if(!n.name)throw ms("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw ms(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ms(n){return _n.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="installations",kv="installations-internal",Nv=n=>{const t=n.getProvider("app").getImmediate(),e=Dv(t),r=Cr(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ov=n=>{const t=n.getProvider("app").getImmediate(),e=Cr(t,$c).getImmediate();return{getId:()=>Pv(e),getToken:s=>xv(e,s)}};function Mv(){Je(new je($c,Nv,"PUBLIC")),Je(new je(kv,Ov,"PRIVATE"))}Mv();Pe(Tc,Eo);Pe(Tc,Eo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="analytics",Fv="firebase_id",Lv="origin",Bv=60*1e3,jv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",To="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Qs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},he=new ki("analytics","Analytics",$v);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(n){if(!n.startsWith(To)){const t=he.create("invalid-gtag-resource",{gtagURL:n});return le.warn(t.message),""}return n}function Uc(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function zv(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function qv(n,t){const e=zv("firebase-js-sdk-policy",{createScriptURL:Uv}),r=document.createElement("script"),s=`${To}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Hv(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Wv(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Uc(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){le.error(u)}n("config",s,o)}async function Gv(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await Uc(e);for(const h of a){const d=u.find(_=>_.measurementId===h),g=d&&t[d.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){le.error(o)}}function Kv(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await Gv(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await Wv(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){le.error(u)}}return s}function Qv(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Kv(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Xv(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(To)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=30,Jv=1e3;class Zv{constructor(t={},e=Jv){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zc=new Zv;function t_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function e_(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:t_(r)},o=jv.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw he.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function n_(n,t=zc,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw he.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw he.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new s_;return setTimeout(async()=>{u.abort()},Bv),qc({appId:r,apiKey:s,measurementId:o},a,u,t)}async function qc(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=zc){var o;const{appId:a,measurementId:u}=n;try{await r_(r,t)}catch(h){if(u)return le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await e_(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!i_(d)){if(s.deleteThrottleMetadata(a),u)return le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw h}const g=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ba(e,s.intervalMillis,Yv):Ba(e,s.intervalMillis),_={throttleEndTimeMillis:Date.now()+g,backoffCount:e+1};return s.setThrottleMetadata(a,_),le.debug(`Calling attemptFetch again in ${g} millis`),qc(n,_,r,s)}}function r_(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(he.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function i_(n){if(!(n instanceof rn)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class s_{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function o_(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(){if(lu())try{await uu()}catch(n){return le.warn(he.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return le.warn(he.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function l_(n,t,e,r,s,o,a){var u;const h=n_(n);h.then(T=>{e[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&le.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>le.error(T)),t.push(h);const d=a_().then(T=>{if(T)return r.getId()}),[g,_]=await Promise.all([h,d]);Xv(o)||qv(o,g.measurementId),s("js",new Date);const b=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return b[Lv]="firebase",b.update=!0,_!=null&&(b[Fv]=_),s("config",g.measurementId,b),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t){this.app=t}_delete(){return delete gr[this.app.options.appId],Promise.resolve()}}let gr={},Ll=[];const Bl={};let gs="dataLayer",c_="gtag",jl,Hc,$l=!1;function h_(){const n=[];if(Hf()&&n.push("This is a browser extension environment."),Gf()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=he.create("invalid-analytics-context",{errorInfo:t});le.warn(e.message)}}function d_(n,t,e){h_();const r=n.options.appId;if(!r)throw he.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw he.create("no-api-key");if(gr[r]!=null)throw he.create("already-exists",{id:r});if(!$l){Hv(gs);const{wrappedGtag:o,gtagCore:a}=Qv(gr,Ll,Bl,gs,c_);Hc=o,jl=a,$l=!0}return gr[r]=l_(n,Ll,Bl,t,jl,gs,e),new u_(n)}function f_(n=pu()){n=On(n);const t=Cr(n,Ai);return t.isInitialized()?t.getImmediate():p_(n)}function p_(n,t={}){const e=Cr(n,Ai);if(e.isInitialized()){const s=e.getImmediate();if(_r(t,e.getOptions()))return s;throw he.create("already-initialized")}return e.initialize({options:t})}function m_(n,t,e,r){n=On(n),o_(Hc,gr[n.app.options.appId],t,e,r).catch(s=>le.error(s))}const Ul="@firebase/analytics",zl="0.10.16";function g_(){Je(new je(Ai,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return d_(r,s,e)},"PUBLIC")),Je(new je("analytics-internal",n,"PRIVATE")),Pe(Ul,zl),Pe(Ul,zl,"esm2017");function n(t){try{const e=t.getProvider(Ai).getImmediate();return{logEvent:(r,s,o)=>m_(e,r,s,o)}}catch(e){throw he.create("interop-component-reg-failed",{reason:e})}}}g_();var y_="firebase",v_="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(y_,v_,"app");const __={apiKey:"AIzaSyAqxTVwztAlxjAugJD0sHhZqs0pW8eq2i8",authDomain:"solaris-inovations.firebaseapp.com",projectId:"solaris-inovations",storageBucket:"solaris-inovations.firebasestorage.app",messagingSenderId:"394208388835",appId:"1:394208388835:web:a38bc7515acf26c32907d6",measurementId:"G-DPHHYG36GS"},Wc=fu(__),E_=Fy(Wc);f_(Wc);const I_="productionRecords";async function b_(n,t){const e=My(E_,I_,n);return await Xy(e,t,{merge:!0}),n}const ql=[{label:"Lunes",key:"lunes"},{label:"Martes",key:"martes"},{label:"Miércoles",key:"miercoles"},{label:"Jueves",key:"jueves"},{label:"Viernes",key:"viernes"}],Hl=["09:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00"],Wl=[{label:"Inicio",key:"inicio"},{label:"Chechito",key:"chechito"},{label:"Don Luis",key:"donluis"},{label:"Otros",key:"otros"}];function P_(){const[n,t]=D.useState(()=>new Date().toISOString().split("T")[0]),[e,r]=D.useState("09:20"),[s,o]=D.useState("19:00"),[a,u]=D.useState([{porcentaje:"",valor:""},{porcentaje:"",valor:""},{porcentaje:"",valor:""},{porcentaje:"",valor:""},{porcentaje:"",valor:""}]),[h,d]=D.useState(Array(10).fill("")),g=h.reduce((N,v)=>N+(v===""?0:Number(v)),0),[_,b]=D.useState({inicial:"",usados:""}),[T,S]=D.useState({inicial:"",usadas:"",malas:""}),[k,P]=D.useState({inicio:"",chechito:"",donluis:"",otros:"",malos:""}),F=["inicio","chechito","donluis","otros"].reduce((N,v)=>N+(k[v]===""?0:Number(k[v])),0),B=g,x=0,O=Bh({mutationFn:async N=>{await b_(N.date,N)}}),$=N=>{N.preventDefault();const v={date:n,startTime:e,endTime:s,gasControl:ql.map((p,m)=>({day:p.label,percentage:a[m].porcentaje===""?0:Number(a[m].porcentaje),value:a[m].valor===""?0:Number(a[m].valor)})),drumProductionByHour:Hl.map((p,m)=>({range:p,count:h[m]===""?0:Number(h[m])})),drumStock:{initial:_.inicial===""?0:Number(_.inicial),used:_.usados===""?0:Number(_.usados),total:(_.inicial===""?0:Number(_.inicial))-(_.usados===""?0:Number(_.usados))},bagStock:{initial:T.inicial===""?0:Number(T.inicial),used:T.usadas===""?0:Number(T.usadas),damaged:T.malas===""?0:Number(T.malas),total:(T.inicial===""?0:Number(T.inicial))-(T.usadas===""?0:Number(T.usadas))-(T.malas===""?0:Number(T.malas))},binsStatus:Wl.map(p=>({source:p.label,quantity:k[p.key]===""?0:Number(k[p.key])})),binsMalfunction:k.malos===""?0:Number(k.malos),totalExistence:F,totalProcessed:B,totalFinal:x};O.mutate(v)};return C.jsx(_a,{p:2,maxWidth:700,mx:"auto",children:C.jsxs("form",{onSubmit:$,autoComplete:"off",children:[C.jsx(ee,{variant:"h5",gutterBottom:!0,children:"Nuevo Registro de Producción"}),C.jsx(ee,{variant:"body1",gutterBottom:!0,children:"Ingresa los datos de producción para el día seleccionado"}),C.jsxs(Ge,{variant:"outlined",sx:{p:2,mb:2},children:[C.jsx(ee,{variant:"subtitle2",children:"Fecha del Registro"}),C.jsx(Dt,{type:"date",label:"Fecha",value:n,onChange:N=>t(N.target.value),fullWidth:!0,InputLabelProps:{shrink:!0}})]}),C.jsxs(Ge,{variant:"outlined",sx:{p:2,mb:2},children:[C.jsx(ee,{variant:"subtitle2",children:"Horarios del Proceso"}),C.jsxs(vt,{container:!0,spacing:2,mt:1,children:[C.jsx(vt,{item:!0,xs:6,children:C.jsx(Dt,{label:"Hora de Inicio",type:"time",value:e,onChange:N=>r(N.target.value),fullWidth:!0,InputLabelProps:{shrink:!0}})}),C.jsx(vt,{item:!0,xs:6,children:C.jsx(Dt,{label:"Hora de Término",type:"time",value:s,onChange:N=>o(N.target.value),fullWidth:!0,InputLabelProps:{shrink:!0}})})]})]}),C.jsxs(Ge,{variant:"outlined",sx:{p:2,mb:2},children:[C.jsx(ee,{variant:"subtitle2",children:"Tambores y Horarios"}),C.jsx(ee,{variant:"body2",mb:1,children:"Ingresa la cantidad por cada hora (09:00 - 19:00)"}),C.jsx(vt,{container:!0,spacing:2,children:Hl.map((N,v)=>C.jsxs(vt,{item:!0,xs:6,md:2.4,children:[C.jsx(ee,{children:N}),C.jsx(Dt,{type:"number",value:h[v],onChange:p=>{const m=[...h],E=p.target.value;(E===""||Number(E)>=0)&&(m[v]=E),d(m)},fullWidth:!0,size:"small",inputProps:{min:0}})]},N))}),C.jsxs(Fh,{direction:"row",justifyContent:"space-between",alignContent:"center",mt:2,children:[C.jsxs(ee,{fontWeight:"bold",children:[g*240," Kgs"]}),C.jsxs(ee,{fontWeight:"bold",children:["Total: ",g]})]})]}),C.jsxs(Ge,{variant:"outlined",sx:{p:2,mb:2},children:[C.jsx(ee,{variant:"subtitle2",children:"Stock de Tambores"}),C.jsxs(vt,{container:!0,spacing:2,children:[C.jsx(vt,{item:!0,xs:4,children:C.jsx(Dt,{label:"Stock Inicial",type:"number",value:_.inicial,onChange:N=>{const v=N.target.value;(v===""||Number(v)>=0)&&b(p=>({...p,inicial:v}))},fullWidth:!0,size:"small",inputProps:{min:0}})}),C.jsx(vt,{item:!0,xs:4,children:C.jsx(Dt,{label:"Tambores Usados",type:"number",value:_.usados,onChange:N=>{const v=N.target.value;(v===""||Number(v)>=0)&&b(p=>({...p,usados:v}))},fullWidth:!0,size:"small",inputProps:{min:0}})}),C.jsx(vt,{item:!0,xs:4,children:C.jsx(Dt,{label:"Total",value:(_.inicial===""?0:Number(_.inicial))-(_.usados===""?0:Number(_.usados)),fullWidth:!0,size:"small",InputProps:{readOnly:!0}})})]})]}),C.jsxs(Ge,{variant:"outlined",sx:{p:2,mb:2},children:[C.jsx(ee,{variant:"subtitle2",children:"Stock de Bolsas"}),C.jsxs(vt,{container:!0,spacing:2,children:[C.jsx(vt,{item:!0,xs:3,children:C.jsx(Dt,{label:"Stock Inicial",type:"number",value:T.inicial,onChange:N=>{const v=N.target.value;(v===""||Number(v)>=0)&&S(p=>({...p,inicial:v}))},fullWidth:!0,size:"small",inputProps:{min:0}})}),C.jsx(vt,{item:!0,xs:3,children:C.jsx(Dt,{label:"Bolsas Usadas",type:"number",value:T.usadas,onChange:N=>{const v=N.target.value;(v===""||Number(v)>=0)&&S(p=>({...p,usadas:v}))},fullWidth:!0,size:"small",inputProps:{min:0}})}),C.jsx(vt,{item:!0,xs:3,children:C.jsx(Dt,{label:"Bolsas Malas",type:"number",value:T.malas,onChange:N=>{const v=N.target.value;(v===""||Number(v)>=0)&&S(p=>({...p,malas:v}))},fullWidth:!0,size:"small",inputProps:{min:0}})}),C.jsx(vt,{item:!0,xs:3,children:C.jsx(Dt,{label:"Total",value:(T.inicial===""?0:Number(T.inicial))-(T.usadas===""?0:Number(T.usadas))-(T.malas===""?0:Number(T.malas)),fullWidth:!0,size:"small",InputProps:{readOnly:!0}})})]})]}),C.jsxs(Ge,{variant:"outlined",sx:{p:2,mb:2},children:[C.jsx(ee,{variant:"subtitle2",children:"Estado de Bins"}),C.jsxs(vt,{container:!0,spacing:2,children:[Wl.map(N=>C.jsx(vt,{item:!0,xs:6,md:2.4,children:C.jsx(Dt,{label:N.label,type:"number",value:k[N.key],onChange:v=>{const p=v.target.value;(p===""||Number(p)>=0)&&P(m=>({...m,[N.key]:p}))},fullWidth:!0,size:"small",inputProps:{min:0}})},N.key)),C.jsx(vt,{item:!0,xs:6,md:2.4,children:C.jsx(Dt,{label:"Bins Malos",type:"number",value:k.malos,onChange:N=>{const v=N.target.value;(v===""||Number(v)>=0)&&P(p=>({...p,malos:v}))},fullWidth:!0,size:"small",inputProps:{min:0}})})]}),C.jsx(_s,{sx:{my:2}}),C.jsxs(vt,{container:!0,spacing:2,children:[C.jsx(vt,{item:!0,xs:4,children:C.jsx(Dt,{type:"number",label:"Total Existencia",value:F,fullWidth:!0,size:"small",InputProps:{readOnly:!0}})}),C.jsx(vt,{item:!0,xs:4,children:C.jsx(Dt,{label:"Total Procesados",value:B,fullWidth:!0,size:"small",InputProps:{readOnly:!0}})}),C.jsx(vt,{item:!0,xs:4,children:C.jsx(Dt,{label:"Total Final Proceso",value:x,fullWidth:!0,size:"small",InputProps:{readOnly:!0}})})]})]}),C.jsxs(Ge,{variant:"outlined",sx:{p:2,mb:2},children:[C.jsx(ee,{variant:"subtitle2",children:"Control de Gas Diario"}),C.jsx(vt,{container:!0,spacing:2,mt:1,children:ql.map((N,v)=>C.jsxs(vt,{item:!0,xs:12,md:2.4,children:[C.jsx(ee,{fontWeight:"bold",children:N.label}),C.jsx(Dt,{label:"Porcentaje",type:"number",value:a[v].porcentaje,onChange:p=>{const m=[...a],E=p.target.value;(E===""||Number(E)>=0)&&(m[v].porcentaje=E),u(m)},fullWidth:!0,InputProps:{endAdornment:C.jsx(Od,{position:"end",children:"%"}),inputProps:{min:0}},size:"small",sx:{mb:1},placeholder:""}),C.jsx(Dt,{label:"Valor",type:"number",value:a[v].valor,onChange:p=>{const m=[...a],E=p.target.value;(E===""||Number(E)>=0)&&(m[v].valor=E),u(m)},fullWidth:!0,size:"small",inputProps:{min:0}})]},N.key))})]}),C.jsxs(_a,{display:"flex",justifyContent:"space-between",mt:3,children:[C.jsx(ga,{variant:"outlined",color:"secondary",href:"/daily",children:"Cancelar"}),C.jsx(ga,{variant:"contained",color:"primary",type:"submit",children:"Guardar Registro"})]})]})})}export{P_ as default};
