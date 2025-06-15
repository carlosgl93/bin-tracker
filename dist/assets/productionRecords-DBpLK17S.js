import{b as O,x as Pr,z as Xh,c as ls,j as H,g as se,h as ie,m as st,k as me,n as pe,q as oe,o as te,p as ee,ao as iu,i as Yh,a1 as zi,ac as Ue,w as Ss,A as us,P as Jh,l as he,H as Zh,a6 as td,ab as ou,ap as ed,y as nd}from"./deepmerge-CtfbTrfU.js";import{o as _r,d as au,g as rd,i as Ei,c as ai,e as sd,L as id,m as od,M as ad,u as ld,f as Pa}from"./App--hkNGEiW.js";function Xr(n){return parseInt(n,10)||0}const ud={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function cd(n){for(const t in n)return!1;return!0}function Va(n){return cd(n)||n.outerHeightStyle===0&&!n.overflowing}const hd=O.forwardRef(function(t,e){const{onChange:r,maxRows:s,minRows:o=1,style:a,value:u,...h}=t,{current:d}=O.useRef(u!=null),p=O.useRef(null),_=Pr(e,p),E=O.useRef(null),A=O.useRef(null),C=O.useCallback(()=>{const V=p.current,N=A.current;if(!V||!N)return;const B=_r(V).getComputedStyle(V);if(B.width==="0px")return{outerHeightStyle:0,overflowing:!1};N.style.width=B.width,N.value=V.value||t.placeholder||"x",N.value.slice(-1)===`
`&&(N.value+=" ");const I=B.boxSizing,m=Xr(B.paddingBottom)+Xr(B.paddingTop),y=Xr(B.borderBottomWidth)+Xr(B.borderTopWidth),v=N.scrollHeight;N.value="x";const T=N.scrollHeight;let w=v;o&&(w=Math.max(Number(o)*T,w)),s&&(w=Math.min(Number(s)*T,w)),w=Math.max(w,T);const g=w+(I==="border-box"?m+y:0),lt=Math.abs(w-v)<=1;return{outerHeightStyle:g,overflowing:lt}},[s,o,t.placeholder]),x=Xh(()=>{const V=p.current,N=C();if(!V||!N||Va(N))return!1;const U=N.outerHeightStyle;return E.current!=null&&E.current!==U}),S=O.useCallback(()=>{const V=p.current,N=C();if(!V||!N||Va(N))return;const U=N.outerHeightStyle;E.current!==U&&(E.current=U,V.style.height=`${U}px`),V.style.overflow=N.overflowing?"hidden":""},[C]),k=O.useRef(-1);ls(()=>{const V=au(S),N=p==null?void 0:p.current;if(!N)return;const U=_r(N);U.addEventListener("resize",V);let B;return typeof ResizeObserver<"u"&&(B=new ResizeObserver(()=>{x()&&(B.unobserve(N),cancelAnimationFrame(k.current),S(),k.current=requestAnimationFrame(()=>{B.observe(N)}))}),B.observe(N)),()=>{V.clear(),cancelAnimationFrame(k.current),U.removeEventListener("resize",V),B&&B.disconnect()}},[C,S,x]),ls(()=>{S()});const F=V=>{d||S(),r&&r(V)};return H.jsxs(O.Fragment,{children:[H.jsx("textarea",{value:u,onChange:F,ref:_,rows:o,style:a,...h}),H.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:A,tabIndex:-1,style:{...ud.shadow,...a,paddingTop:0,paddingBottom:0}})]})});function Bn({props:n,states:t,muiFormControl:e}){return t.reduce((r,s)=>(r[s]=n[s],e&&typeof n[s]>"u"&&(r[s]=e[s]),r),{})}const qi=O.createContext(void 0);function Un(){return O.useContext(qi)}function xa(n){return n!=null&&!(Array.isArray(n)&&n.length===0)}function cs(n,t=!1){return n&&(xa(n.value)&&n.value!==""||t&&xa(n.defaultValue)&&n.defaultValue!=="")}function dd(n){return n.startAdornment}function fd(n){return ie("MuiInputBase",n)}const Vn=se("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var Da;const Cs=(n,t)=>{const{ownerState:e}=n;return[t.root,e.formControl&&t.formControl,e.startAdornment&&t.adornedStart,e.endAdornment&&t.adornedEnd,e.error&&t.error,e.size==="small"&&t.sizeSmall,e.multiline&&t.multiline,e.color&&t[`color${te(e.color)}`],e.fullWidth&&t.fullWidth,e.hiddenLabel&&t.hiddenLabel]},Ps=(n,t)=>{const{ownerState:e}=n;return[t.input,e.size==="small"&&t.inputSizeSmall,e.multiline&&t.inputMultiline,e.type==="search"&&t.inputTypeSearch,e.startAdornment&&t.inputAdornedStart,e.endAdornment&&t.inputAdornedEnd,e.hiddenLabel&&t.inputHiddenLabel]},pd=n=>{const{classes:t,color:e,disabled:r,error:s,endAdornment:o,focused:a,formControl:u,fullWidth:h,hiddenLabel:d,multiline:p,readOnly:_,size:E,startAdornment:A,type:C}=n,x={root:["root",`color${te(e)}`,r&&"disabled",s&&"error",h&&"fullWidth",a&&"focused",u&&"formControl",E&&E!=="medium"&&`size${te(E)}`,p&&"multiline",A&&"adornedStart",o&&"adornedEnd",d&&"hiddenLabel",_&&"readOnly"],input:["input",r&&"disabled",C==="search"&&"inputTypeSearch",p&&"inputMultiline",E==="small"&&"inputSizeSmall",d&&"inputHiddenLabel",A&&"inputAdornedStart",o&&"inputAdornedEnd",_&&"readOnly"]};return ee(x,fd,t)},Vs=st("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Cs})(oe(({theme:n})=>({...n.typography.body1,color:(n.vars||n).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Vn.disabled}`]:{color:(n.vars||n).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:t})=>t.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:t,size:e})=>t.multiline&&e==="small",style:{paddingTop:1}},{props:({ownerState:t})=>t.fullWidth,style:{width:"100%"}}]}))),xs=st("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ps})(oe(({theme:n})=>{const t=n.palette.mode==="light",e={color:"currentColor",...n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})},r={opacity:"0 !important"},s=n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":e,"&::-moz-placeholder":e,"&::-ms-input-placeholder":e,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Vn.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus::-ms-input-placeholder":s},[`&.${Vn.disabled}`]:{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled},variants:[{props:({ownerState:o})=>!o.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:o})=>o.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),ka=rd({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),Hi=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiInputBase"}),{"aria-describedby":s,autoComplete:o,autoFocus:a,className:u,color:h,components:d={},componentsProps:p={},defaultValue:_,disabled:E,disableInjectingGlobalStyles:A,endAdornment:C,error:x,fullWidth:S=!1,id:k,inputComponent:F="input",inputProps:V={},inputRef:N,margin:U,maxRows:B,minRows:I,multiline:m=!1,name:y,onBlur:v,onChange:T,onClick:w,onFocus:g,onKeyDown:lt,onKeyUp:ht,placeholder:it,readOnly:yt,renderSuffix:dt,rows:j,size:_t,slotProps:Nt={},slots:Ft={},startAdornment:J,type:Lt="text",value:mt,...ge}=r,Ot=V.value!=null?V.value:mt,{current:ye}=O.useRef(Ot!=null),wt=O.useRef(),Q=O.useCallback(pt=>{},[]),ot=Pr(wt,N,V.ref,Q),[nt,St]=O.useState(!1),Z=Un(),ft=Bn({props:r,muiFormControl:Z,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ft.focused=Z?Z.focused:nt,O.useEffect(()=>{!Z&&E&&nt&&(St(!1),v&&v())},[Z,E,nt,v]);const Xt=Z&&Z.onFilled,ae=Z&&Z.onEmpty,Yt=O.useCallback(pt=>{cs(pt)?Xt&&Xt():ae&&ae()},[Xt,ae]);ls(()=>{ye&&Yt({value:Ot})},[Ot,Yt,ye]);const _e=pt=>{g&&g(pt),V.onFocus&&V.onFocus(pt),Z&&Z.onFocus?Z.onFocus(pt):St(!0)},zt=pt=>{v&&v(pt),V.onBlur&&V.onBlur(pt),Z&&Z.onBlur?Z.onBlur(pt):St(!1)},Ct=(pt,...ce)=>{if(!ye){const $e=pt.target||wt.current;if($e==null)throw new Error(iu(1));Yt({value:$e.value})}V.onChange&&V.onChange(pt,...ce),T&&T(pt,...ce)};O.useEffect(()=>{Yt(wt.current)},[]);const le=pt=>{wt.current&&pt.currentTarget===pt.target&&wt.current.focus(),w&&w(pt)};let ue=F,At=V;m&&ue==="input"&&(j?At={type:void 0,minRows:j,maxRows:j,...At}:At={type:void 0,maxRows:B,minRows:I,...At},ue=hd);const xe=pt=>{Yt(pt.animationName==="mui-auto-fill-cancel"?wt.current:{value:"x"})};O.useEffect(()=>{Z&&Z.setAdornedStart(!!J)},[Z,J]);const Et={...r,color:ft.color||"primary",disabled:ft.disabled,endAdornment:C,error:ft.error,focused:ft.focused,formControl:Z,fullWidth:S,hiddenLabel:ft.hiddenLabel,multiline:m,size:ft.size,startAdornment:J,type:Lt},bt=pd(Et),ve=Ft.root||d.Root||Vs,De=Nt.root||p.root||{},Ie=Ft.input||d.Input||xs;return At={...At,...Nt.input??p.input},H.jsxs(O.Fragment,{children:[!A&&typeof ka=="function"&&(Da||(Da=H.jsx(ka,{}))),H.jsxs(ve,{...De,ref:e,onClick:le,...ge,...!Ei(ve)&&{ownerState:{...Et,...De.ownerState}},className:pe(bt.root,De.className,u,yt&&"MuiInputBase-readOnly"),children:[J,H.jsx(qi.Provider,{value:null,children:H.jsx(Ie,{"aria-invalid":ft.error,"aria-describedby":s,autoComplete:o,autoFocus:a,defaultValue:_,disabled:ft.disabled,id:k,onAnimationStart:xe,name:y,placeholder:it,readOnly:yt,required:ft.required,rows:j,value:Ot,onKeyDown:lt,onKeyUp:ht,type:Lt,...At,...!Ei(Ie)&&{as:ue,ownerState:{...Et,...At.ownerState}},ref:ot,className:pe(bt.input,At.className,yt&&"MuiInputBase-readOnly"),onBlur:zt,onChange:Ct,onFocus:_e})}),C,dt?dt({...ft,startAdornment:J}):null]})]})});function md(n){return ie("MuiInput",n)}const ir={...Vn,...se("MuiInput",["root","underline","input"])};function gd(n){return ie("MuiOutlinedInput",n)}const Ae={...Vn,...se("MuiOutlinedInput",["root","notchedOutline","input"])};function yd(n){return ie("MuiFilledInput",n)}const un={...Vn,...se("MuiFilledInput",["root","underline","input","adornedStart","adornedEnd","sizeSmall","multiline","hiddenLabel"])},_d=Yh(H.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),vd=n=>{const{classes:t,disableUnderline:e,startAdornment:r,endAdornment:s,size:o,hiddenLabel:a,multiline:u}=n,h={root:["root",!e&&"underline",r&&"adornedStart",s&&"adornedEnd",o==="small"&&`size${te(o)}`,a&&"hiddenLabel",u&&"multiline"],input:["input"]},d=ee(h,yd,t);return{...t,...d}},Ed=st(Vs,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[...Cs(n,t),!e.disableUnderline&&t.underline]}})(oe(({theme:n})=>{const t=n.palette.mode==="light",e=t?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=t?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",s=t?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",o=t?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return{position:"relative",backgroundColor:n.vars?n.vars.palette.FilledInput.bg:r,borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),"&:hover":{backgroundColor:n.vars?n.vars.palette.FilledInput.hoverBg:s,"@media (hover: none)":{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:r}},[`&.${un.focused}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:r},[`&.${un.disabled}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.disabledBg:o},variants:[{props:({ownerState:a})=>!a.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${un.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${un.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`:e}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${un.disabled}, .${un.error}):before`]:{borderBottom:`1px solid ${(n.vars||n).palette.text.primary}`},[`&.${un.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(n.palette).filter(Ss()).map(([a])=>{var u;return{props:{disableUnderline:!1,color:a},style:{"&::after":{borderBottom:`2px solid ${(u=(n.vars||n).palette[a])==null?void 0:u.main}`}}}}),{props:({ownerState:a})=>a.startAdornment,style:{paddingLeft:12}},{props:({ownerState:a})=>a.endAdornment,style:{paddingRight:12}},{props:({ownerState:a})=>a.multiline,style:{padding:"25px 12px 8px"}},{props:({ownerState:a,size:u})=>a.multiline&&u==="small",style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:a})=>a.multiline&&a.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:a})=>a.multiline&&a.hiddenLabel&&a.size==="small",style:{paddingTop:8,paddingBottom:9}}]}})),Td=st(xs,{name:"MuiFilledInput",slot:"Input",overridesResolver:Ps})(oe(({theme:n})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,...!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},...n.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:t})=>t.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:t})=>t.startAdornment,style:{paddingLeft:0}},{props:({ownerState:t})=>t.endAdornment,style:{paddingRight:0}},{props:({ownerState:t})=>t.hiddenLabel&&t.size==="small",style:{paddingTop:8,paddingBottom:9}},{props:({ownerState:t})=>t.multiline,style:{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}]}))),Wi=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiFilledInput"}),{disableUnderline:s=!1,components:o={},componentsProps:a,fullWidth:u=!1,hiddenLabel:h,inputComponent:d="input",multiline:p=!1,slotProps:_,slots:E={},type:A="text",...C}=r,x={...r,disableUnderline:s,fullWidth:u,inputComponent:d,multiline:p,type:A},S=vd(r),k={root:{ownerState:x},input:{ownerState:x}},F=_??a?zi(k,_??a):k,V=E.root??o.Root??Ed,N=E.input??o.Input??Td;return H.jsx(Hi,{slots:{root:V,input:N},slotProps:F,fullWidth:u,inputComponent:d,multiline:p,ref:e,type:A,...C,classes:S})});Wi.muiName="Input";function Id(n){return ie("MuiFormControl",n)}se("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const wd=n=>{const{classes:t,margin:e,fullWidth:r}=n,s={root:["root",e!=="none"&&`margin${te(e)}`,r&&"fullWidth"]};return ee(s,Id,t)},Ad=st("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,t[`margin${te(e.margin)}`],e.fullWidth&&t.fullWidth]}})({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",variants:[{props:{margin:"normal"},style:{marginTop:16,marginBottom:8}},{props:{margin:"dense"},style:{marginTop:8,marginBottom:4}},{props:{fullWidth:!0},style:{width:"100%"}}]}),bd=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiFormControl"}),{children:s,className:o,color:a="primary",component:u="div",disabled:h=!1,error:d=!1,focused:p,fullWidth:_=!1,hiddenLabel:E=!1,margin:A="none",required:C=!1,size:x="medium",variant:S="outlined",...k}=r,F={...r,color:a,component:u,disabled:h,error:d,fullWidth:_,hiddenLabel:E,margin:A,required:C,size:x,variant:S},V=wd(F),[N,U]=O.useState(()=>{let ht=!1;return s&&O.Children.forEach(s,it=>{if(!ai(it,["Input","Select"]))return;const yt=ai(it,["Select"])?it.props.input:it;yt&&dd(yt.props)&&(ht=!0)}),ht}),[B,I]=O.useState(()=>{let ht=!1;return s&&O.Children.forEach(s,it=>{ai(it,["Input","Select"])&&(cs(it.props,!0)||cs(it.props.inputProps,!0))&&(ht=!0)}),ht}),[m,y]=O.useState(!1);h&&m&&y(!1);const v=p!==void 0&&!h?p:m;let T;O.useRef(!1);const w=O.useCallback(()=>{I(!0)},[]),g=O.useCallback(()=>{I(!1)},[]),lt=O.useMemo(()=>({adornedStart:N,setAdornedStart:U,color:a,disabled:h,error:d,filled:B,focused:v,fullWidth:_,hiddenLabel:E,size:x,onBlur:()=>{y(!1)},onFocus:()=>{y(!0)},onEmpty:g,onFilled:w,registerEffect:T,required:C,variant:S}),[N,a,h,d,B,v,_,E,T,g,w,C,x,S]);return H.jsx(qi.Provider,{value:lt,children:H.jsx(Ad,{as:u,ownerState:F,className:pe(V.root,o),ref:e,...k,children:s})})});function Rd(n){return ie("MuiFormHelperText",n)}const Na=se("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var Oa;const Sd=n=>{const{classes:t,contained:e,size:r,disabled:s,error:o,filled:a,focused:u,required:h}=n,d={root:["root",s&&"disabled",o&&"error",r&&`size${te(r)}`,e&&"contained",u&&"focused",a&&"filled",h&&"required"]};return ee(d,Rd,t)},Cd=st("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.size&&t[`size${te(e.size)}`],e.contained&&t.contained,e.filled&&t.filled]}})(oe(({theme:n})=>({color:(n.vars||n).palette.text.secondary,...n.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Na.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${Na.error}`]:{color:(n.vars||n).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:t})=>t.contained,style:{marginLeft:14,marginRight:14}}]}))),Pd=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiFormHelperText"}),{children:s,className:o,component:a="p",disabled:u,error:h,filled:d,focused:p,margin:_,required:E,variant:A,...C}=r,x=Un(),S=Bn({props:r,muiFormControl:x,states:["variant","size","disabled","error","filled","focused","required"]}),k={...r,component:a,contained:S.variant==="filled"||S.variant==="outlined",variant:S.variant,size:S.size,disabled:S.disabled,error:S.error,filled:S.filled,focused:S.focused,required:S.required};delete k.ownerState;const F=Sd(k);return H.jsx(Cd,{as:a,className:pe(F.root,o),ref:e,...C,ownerState:k,children:s===" "?Oa||(Oa=H.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):s})});function Vd(n){return ie("MuiFormLabel",n)}const hr=se("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),xd=n=>{const{classes:t,color:e,focused:r,disabled:s,error:o,filled:a,required:u}=n,h={root:["root",`color${te(e)}`,s&&"disabled",o&&"error",a&&"filled",r&&"focused",u&&"required"],asterisk:["asterisk",o&&"error"]};return ee(h,Vd,t)},Dd=st("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled]}})(oe(({theme:n})=>({color:(n.vars||n).palette.text.secondary,...n.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(n.palette).filter(Ss()).map(([t])=>({props:{color:t},style:{[`&.${hr.focused}`]:{color:(n.vars||n).palette[t].main}}})),{props:{},style:{[`&.${hr.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${hr.error}`]:{color:(n.vars||n).palette.error.main}}}]}))),kd=st("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(n,t)=>t.asterisk})(oe(({theme:n})=>({[`&.${hr.error}`]:{color:(n.vars||n).palette.error.main}}))),Nd=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiFormLabel"}),{children:s,className:o,color:a,component:u="label",disabled:h,error:d,filled:p,focused:_,required:E,...A}=r,C=Un(),x=Bn({props:r,muiFormControl:C,states:["color","required","focused","disabled","error","filled"]}),S={...r,color:x.color||"primary",component:u,disabled:x.disabled,error:x.error,filled:x.filled,focused:x.focused,required:x.required},k=xd(S);return H.jsxs(Dd,{as:u,ownerState:S,className:pe(k.root,o),ref:e,...A,children:[s,x.required&&H.jsxs(kd,{ownerState:S,"aria-hidden":!0,className:k.asterisk,children:[" ","*"]})]})}),Od=n=>{const{classes:t,disableUnderline:e}=n,s=ee({root:["root",!e&&"underline"],input:["input"]},md,t);return{...t,...s}},Md=st(Vs,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiInput",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[...Cs(n,t),!e.disableUnderline&&t.underline]}})(oe(({theme:n})=>{let e=n.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(e=`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`),{position:"relative",variants:[{props:({ownerState:r})=>r.formControl,style:{"label + &":{marginTop:16}}},{props:({ownerState:r})=>!r.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ir.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ir.error}`]:{"&::before, &::after":{borderBottomColor:(n.vars||n).palette.error.main}},"&::before":{borderBottom:`1px solid ${e}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ir.disabled}, .${ir.error}):before`]:{borderBottom:`2px solid ${(n.vars||n).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${e}`}},[`&.${ir.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(n.palette).filter(Ss()).map(([r])=>({props:{color:r,disableUnderline:!1},style:{"&::after":{borderBottom:`2px solid ${(n.vars||n).palette[r].main}`}}}))]}})),Fd=st(xs,{name:"MuiInput",slot:"Input",overridesResolver:Ps})({}),Ki=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiInput"}),{disableUnderline:s=!1,components:o={},componentsProps:a,fullWidth:u=!1,inputComponent:h="input",multiline:d=!1,slotProps:p,slots:_={},type:E="text",...A}=r,C=Od(r),S={root:{ownerState:{disableUnderline:s}}},k=p??a?zi(p??a,S):S,F=_.root??o.Root??Md,V=_.input??o.Input??Fd;return H.jsx(Hi,{slots:{root:F,input:V},slotProps:k,fullWidth:u,inputComponent:h,multiline:d,ref:e,type:E,...A,classes:C})});Ki.muiName="Input";function Ld(n){return ie("MuiInputLabel",n)}se("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Bd=n=>{const{classes:t,formControl:e,size:r,shrink:s,disableAnimation:o,variant:a,required:u}=n,h={root:["root",e&&"formControl",!o&&"animated",s&&"shrink",r&&r!=="normal"&&`size${te(r)}`,a],asterisk:[u&&"asterisk"]},d=ee(h,Ld,t);return{...t,...d}},Ud=st(Nd,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[{[`& .${hr.asterisk}`]:t.asterisk},t.root,e.formControl&&t.formControl,e.size==="small"&&t.sizeSmall,e.shrink&&t.shrink,!e.disableAnimation&&t.animated,e.focused&&t.focused,t[e.variant]]}})(oe(({theme:n})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",variants:[{props:({ownerState:t})=>t.formControl,style:{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"}},{props:{size:"small"},style:{transform:"translate(0, 17px) scale(1)"}},{props:({ownerState:t})=>t.shrink,style:{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"}},{props:({ownerState:t})=>!t.disableAnimation,style:{transition:n.transitions.create(["color","transform","max-width"],{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut})}},{props:{variant:"filled"},style:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"filled",size:"small"},style:{transform:"translate(12px, 13px) scale(1)"}},{props:({variant:t,ownerState:e})=>t==="filled"&&e.shrink,style:{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"}},{props:({variant:t,ownerState:e,size:r})=>t==="filled"&&e.shrink&&r==="small",style:{transform:"translate(12px, 4px) scale(0.75)"}},{props:{variant:"outlined"},style:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"outlined",size:"small"},style:{transform:"translate(14px, 9px) scale(1)"}},{props:({variant:t,ownerState:e})=>t==="outlined"&&e.shrink,style:{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}]}))),$d=O.forwardRef(function(t,e){const r=me({name:"MuiInputLabel",props:t}),{disableAnimation:s=!1,margin:o,shrink:a,variant:u,className:h,...d}=r,p=Un();let _=a;typeof _>"u"&&p&&(_=p.filled||p.focused||p.adornedStart);const E=Bn({props:r,muiFormControl:p,states:["size","variant","required","focused"]}),A={...r,disableAnimation:s,formControl:p,shrink:_,size:E.size,variant:E.variant,required:E.required,focused:E.focused},C=Bd(A);return H.jsx(Ud,{"data-shrink":_,ref:e,className:pe(C.root,h),...d,ownerState:A,classes:C})});function li(n,t,e){return n===t?n.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e?null:n.firstChild}function Ma(n,t,e){return n===t?e?n.firstChild:n.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e?null:n.lastChild}function lu(n,t){if(t===void 0)return!0;let e=n.innerText;return e===void 0&&(e=n.textContent),e=e.trim().toLowerCase(),e.length===0?!1:t.repeating?e[0]===t.keys[0]:e.startsWith(t.keys.join(""))}function or(n,t,e,r,s,o){let a=!1,u=s(n,t,t?e:!1);for(;u;){if(u===n.firstChild){if(a)return!1;a=!0}const h=r?!1:u.disabled||u.getAttribute("aria-disabled")==="true";if(!u.hasAttribute("tabindex")||!lu(u,o)||h)u=s(n,u,e);else return u.focus(),!0}return!1}const jd=O.forwardRef(function(t,e){const{actions:r,autoFocus:s=!1,autoFocusItem:o=!1,children:a,className:u,disabledItemsFocusable:h=!1,disableListWrap:d=!1,onKeyDown:p,variant:_="selectedMenu",...E}=t,A=O.useRef(null),C=O.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ls(()=>{s&&A.current.focus()},[s]),O.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(V,{direction:N})=>{const U=!A.current.style.width;if(V.clientHeight<A.current.clientHeight&&U){const B=`${sd(_r(V))}px`;A.current.style[N==="rtl"?"paddingLeft":"paddingRight"]=B,A.current.style.width=`calc(100% + ${B})`}return A.current}}),[]);const x=V=>{const N=A.current,U=V.key;if(V.ctrlKey||V.metaKey||V.altKey){p&&p(V);return}const I=us(N).activeElement;if(U==="ArrowDown")V.preventDefault(),or(N,I,d,h,li);else if(U==="ArrowUp")V.preventDefault(),or(N,I,d,h,Ma);else if(U==="Home")V.preventDefault(),or(N,null,d,h,li);else if(U==="End")V.preventDefault(),or(N,null,d,h,Ma);else if(U.length===1){const m=C.current,y=U.toLowerCase(),v=performance.now();m.keys.length>0&&(v-m.lastTime>500?(m.keys=[],m.repeating=!0,m.previousKeyMatched=!0):m.repeating&&y!==m.keys[0]&&(m.repeating=!1)),m.lastTime=v,m.keys.push(y);const T=I&&!m.repeating&&lu(I,m);m.previousKeyMatched&&(T||or(N,I,!1,h,li,m))?V.preventDefault():m.previousKeyMatched=!1}p&&p(V)},S=Pr(A,e);let k=-1;O.Children.forEach(a,(V,N)=>{if(!O.isValidElement(V)){k===N&&(k+=1,k>=a.length&&(k=-1));return}V.props.disabled||(_==="selectedMenu"&&V.props.selected||k===-1)&&(k=N),k===N&&(V.props.disabled||V.props.muiSkipListHighlight||V.type.muiSkipListHighlight)&&(k+=1,k>=a.length&&(k=-1))});const F=O.Children.map(a,(V,N)=>{if(N===k){const U={};return o&&(U.autoFocus=!0),V.props.tabIndex===void 0&&_==="selectedMenu"&&(U.tabIndex=0),O.cloneElement(V,U)}return V});return H.jsx(id,{role:"menu",ref:S,className:u,onKeyDown:x,tabIndex:s?0:-1,...E,children:F})});function zd(n){return ie("MuiPopover",n)}se("MuiPopover",["root","paper"]);function Fa(n,t){let e=0;return typeof t=="number"?e=t:t==="center"?e=n.height/2:t==="bottom"&&(e=n.height),e}function La(n,t){let e=0;return typeof t=="number"?e=t:t==="center"?e=n.width/2:t==="right"&&(e=n.width),e}function Ba(n){return[n.horizontal,n.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Yr(n){return typeof n=="function"?n():n}const qd=n=>{const{classes:t}=n;return ee({root:["root"],paper:["paper"]},zd,t)},Hd=st(ad,{name:"MuiPopover",slot:"Root",overridesResolver:(n,t)=>t.root})({}),uu=st(Jh,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Wd=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiPopover"}),{action:s,anchorEl:o,anchorOrigin:a={vertical:"top",horizontal:"left"},anchorPosition:u,anchorReference:h="anchorEl",children:d,className:p,container:_,elevation:E=8,marginThreshold:A=16,open:C,PaperProps:x={},slots:S={},slotProps:k={},transformOrigin:F={vertical:"top",horizontal:"left"},TransitionComponent:V,transitionDuration:N="auto",TransitionProps:U={},disableScrollLock:B=!1,...I}=r,m=O.useRef(),y={...r,anchorOrigin:a,anchorReference:h,elevation:E,marginThreshold:A,transformOrigin:F,TransitionComponent:V,transitionDuration:N,TransitionProps:U},v=qd(y),T=O.useCallback(()=>{if(h==="anchorPosition")return u;const Q=Yr(o),nt=(Q&&Q.nodeType===1?Q:us(m.current).body).getBoundingClientRect();return{top:nt.top+Fa(nt,a.vertical),left:nt.left+La(nt,a.horizontal)}},[o,a.horizontal,a.vertical,u,h]),w=O.useCallback(Q=>({vertical:Fa(Q,F.vertical),horizontal:La(Q,F.horizontal)}),[F.horizontal,F.vertical]),g=O.useCallback(Q=>{const ot={width:Q.offsetWidth,height:Q.offsetHeight},nt=w(ot);if(h==="none")return{top:null,left:null,transformOrigin:Ba(nt)};const St=T();let Z=St.top-nt.vertical,ft=St.left-nt.horizontal;const Xt=Z+ot.height,ae=ft+ot.width,Yt=_r(Yr(o)),_e=Yt.innerHeight-A,zt=Yt.innerWidth-A;if(A!==null&&Z<A){const Ct=Z-A;Z-=Ct,nt.vertical+=Ct}else if(A!==null&&Xt>_e){const Ct=Xt-_e;Z-=Ct,nt.vertical+=Ct}if(A!==null&&ft<A){const Ct=ft-A;ft-=Ct,nt.horizontal+=Ct}else if(ae>zt){const Ct=ae-zt;ft-=Ct,nt.horizontal+=Ct}return{top:`${Math.round(Z)}px`,left:`${Math.round(ft)}px`,transformOrigin:Ba(nt)}},[o,h,T,w,A]),[lt,ht]=O.useState(C),it=O.useCallback(()=>{const Q=m.current;if(!Q)return;const ot=g(Q);ot.top!==null&&Q.style.setProperty("top",ot.top),ot.left!==null&&(Q.style.left=ot.left),Q.style.transformOrigin=ot.transformOrigin,ht(!0)},[g]);O.useEffect(()=>(B&&window.addEventListener("scroll",it),()=>window.removeEventListener("scroll",it)),[o,B,it]);const yt=()=>{it()},dt=()=>{ht(!1)};O.useEffect(()=>{C&&it()}),O.useImperativeHandle(s,()=>C?{updatePosition:()=>{it()}}:null,[C,it]),O.useEffect(()=>{if(!C)return;const Q=au(()=>{it()}),ot=_r(Yr(o));return ot.addEventListener("resize",Q),()=>{Q.clear(),ot.removeEventListener("resize",Q)}},[o,C,it]);let j=N;const _t={slots:{transition:V,...S},slotProps:{transition:U,paper:x,...k}},[Nt,Ft]=he("transition",{elementType:Zh,externalForwardedProps:_t,ownerState:y,getSlotProps:Q=>({...Q,onEntering:(ot,nt)=>{var St;(St=Q.onEntering)==null||St.call(Q,ot,nt),yt()},onExited:ot=>{var nt;(nt=Q.onExited)==null||nt.call(Q,ot),dt()}}),additionalProps:{appear:!0,in:C}});N==="auto"&&!Nt.muiSupportAuto&&(j=void 0);const J=_||(o?us(Yr(o)).body:void 0),[Lt,{slots:mt,slotProps:ge,...Ot}]=he("root",{ref:e,elementType:Hd,externalForwardedProps:{..._t,...I},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:S.backdrop},slotProps:{backdrop:od(typeof k.backdrop=="function"?k.backdrop(y):k.backdrop,{invisible:!0})},container:J,open:C},ownerState:y,className:pe(v.root,p)}),[ye,wt]=he("paper",{ref:m,className:v.paper,elementType:uu,externalForwardedProps:_t,shouldForwardComponentProp:!0,additionalProps:{elevation:E,style:lt?void 0:{opacity:0}},ownerState:y});return H.jsx(Lt,{...Ot,...!Ei(Lt)&&{slots:mt,slotProps:ge,disableScrollLock:B},children:H.jsx(Nt,{...Ft,timeout:j,children:H.jsx(ye,{...wt,children:d})})})});function Kd(n){return ie("MuiMenu",n)}se("MuiMenu",["root","paper","list"]);const Gd={vertical:"top",horizontal:"right"},Qd={vertical:"top",horizontal:"left"},Xd=n=>{const{classes:t}=n;return ee({root:["root"],paper:["paper"],list:["list"]},Kd,t)},Yd=st(Wd,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(n,t)=>t.root})({}),Jd=st(uu,{name:"MuiMenu",slot:"Paper",overridesResolver:(n,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Zd=st(jd,{name:"MuiMenu",slot:"List",overridesResolver:(n,t)=>t.list})({outline:0}),tf=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiMenu"}),{autoFocus:s=!0,children:o,className:a,disableAutoFocusItem:u=!1,MenuListProps:h={},onClose:d,open:p,PaperProps:_={},PopoverClasses:E,transitionDuration:A="auto",TransitionProps:{onEntering:C,...x}={},variant:S="selectedMenu",slots:k={},slotProps:F={},...V}=r,N=td(),U={...r,autoFocus:s,disableAutoFocusItem:u,MenuListProps:h,onEntering:C,PaperProps:_,transitionDuration:A,TransitionProps:x,variant:S},B=Xd(U),I=s&&!u&&p,m=O.useRef(null),y=(j,_t)=>{m.current&&m.current.adjustStyleForScrollbar(j,{direction:N?"rtl":"ltr"}),C&&C(j,_t)},v=j=>{j.key==="Tab"&&(j.preventDefault(),d&&d(j,"tabKeyDown"))};let T=-1;O.Children.map(o,(j,_t)=>{O.isValidElement(j)&&(j.props.disabled||(S==="selectedMenu"&&j.props.selected||T===-1)&&(T=_t))});const w={slots:k,slotProps:{list:h,transition:x,paper:_,...F}},g=ld({elementType:k.root,externalSlotProps:F.root,ownerState:U,className:[B.root,a]}),[lt,ht]=he("paper",{className:B.paper,elementType:Jd,externalForwardedProps:w,shouldForwardComponentProp:!0,ownerState:U}),[it,yt]=he("list",{className:pe(B.list,h.className),elementType:Zd,shouldForwardComponentProp:!0,externalForwardedProps:w,getSlotProps:j=>({...j,onKeyDown:_t=>{var Nt;v(_t),(Nt=j.onKeyDown)==null||Nt.call(j,_t)}}),ownerState:U}),dt=typeof w.slotProps.transition=="function"?w.slotProps.transition(U):w.slotProps.transition;return H.jsx(Yd,{onClose:d,anchorOrigin:{vertical:"bottom",horizontal:N?"right":"left"},transformOrigin:N?Gd:Qd,slots:{root:k.root,paper:lt,backdrop:k.backdrop,...k.transition&&{transition:k.transition}},slotProps:{root:g,paper:ht,backdrop:typeof F.backdrop=="function"?F.backdrop(U):F.backdrop,transition:{...dt,onEntering:(...j)=>{var _t;y(...j),(_t=dt==null?void 0:dt.onEntering)==null||_t.call(dt,...j)}}},open:p,ref:e,transitionDuration:A,ownerState:U,...V,classes:E,children:H.jsx(it,{actions:m,autoFocus:s&&(T===-1||u),autoFocusItem:I,variant:S,...yt,children:o})})});function ef(n){return ie("MuiNativeSelect",n)}const Gi=se("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),nf=n=>{const{classes:t,variant:e,disabled:r,multiple:s,open:o,error:a}=n,u={select:["select",e,r&&"disabled",s&&"multiple",a&&"error"],icon:["icon",`icon${te(e)}`,o&&"iconOpen",r&&"disabled"]};return ee(u,ef,t)},cu=st("select")(({theme:n})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{borderRadius:0},[`&.${Gi.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(n.vars||n).palette.background.paper},variants:[{props:({ownerState:t})=>t.variant!=="filled"&&t.variant!=="outlined",style:{"&&&":{paddingRight:24,minWidth:16}}},{props:{variant:"filled"},style:{"&&&":{paddingRight:32}}},{props:{variant:"outlined"},style:{borderRadius:(n.vars||n).shape.borderRadius,"&:focus":{borderRadius:(n.vars||n).shape.borderRadius},"&&&":{paddingRight:32}}}]})),rf=st(cu,{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Ue,overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.select,t[e.variant],e.error&&t.error,{[`&.${Gi.multiple}`]:t.multiple}]}})({}),hu=st("svg")(({theme:n})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(n.vars||n).palette.action.active,[`&.${Gi.disabled}`]:{color:(n.vars||n).palette.action.disabled},variants:[{props:({ownerState:t})=>t.open,style:{transform:"rotate(180deg)"}},{props:{variant:"filled"},style:{right:7}},{props:{variant:"outlined"},style:{right:7}}]})),sf=st(hu,{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.icon,e.variant&&t[`icon${te(e.variant)}`],e.open&&t.iconOpen]}})({}),of=O.forwardRef(function(t,e){const{className:r,disabled:s,error:o,IconComponent:a,inputRef:u,variant:h="standard",...d}=t,p={...t,disabled:s,variant:h,error:o},_=nf(p);return H.jsxs(O.Fragment,{children:[H.jsx(rf,{ownerState:p,className:pe(_.select,r),disabled:s,ref:u||e,...d}),t.multiple?null:H.jsx(sf,{as:a,ownerState:p,className:_.icon})]})});var Ua;const af=st("fieldset",{shouldForwardProp:Ue})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),lf=st("legend",{shouldForwardProp:Ue})(oe(({theme:n})=>({float:"unset",width:"auto",overflow:"hidden",variants:[{props:({ownerState:t})=>!t.withLabel,style:{padding:0,lineHeight:"11px",transition:n.transitions.create("width",{duration:150,easing:n.transitions.easing.easeOut})}},{props:({ownerState:t})=>t.withLabel,style:{display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:n.transitions.create("max-width",{duration:50,easing:n.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}}},{props:({ownerState:t})=>t.withLabel&&t.notched,style:{maxWidth:"100%",transition:n.transitions.create("max-width",{duration:100,easing:n.transitions.easing.easeOut,delay:50})}}]})));function uf(n){const{children:t,classes:e,className:r,label:s,notched:o,...a}=n,u=s!=null&&s!=="",h={...n,notched:o,withLabel:u};return H.jsx(af,{"aria-hidden":!0,className:r,ownerState:h,...a,children:H.jsx(lf,{ownerState:h,children:u?H.jsx("span",{children:s}):Ua||(Ua=H.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"}))})})}const cf=n=>{const{classes:t}=n,r=ee({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},gd,t);return{...t,...r}},hf=st(Vs,{shouldForwardProp:n=>Ue(n)||n==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Cs})(oe(({theme:n})=>{const t=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:(n.vars||n).shape.borderRadius,[`&:hover .${Ae.notchedOutline}`]:{borderColor:(n.vars||n).palette.text.primary},"@media (hover: none)":{[`&:hover .${Ae.notchedOutline}`]:{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:t}},[`&.${Ae.focused} .${Ae.notchedOutline}`]:{borderWidth:2},variants:[...Object.entries(n.palette).filter(Ss()).map(([e])=>({props:{color:e},style:{[`&.${Ae.focused} .${Ae.notchedOutline}`]:{borderColor:(n.vars||n).palette[e].main}}})),{props:{},style:{[`&.${Ae.error} .${Ae.notchedOutline}`]:{borderColor:(n.vars||n).palette.error.main},[`&.${Ae.disabled} .${Ae.notchedOutline}`]:{borderColor:(n.vars||n).palette.action.disabled}}},{props:({ownerState:e})=>e.startAdornment,style:{paddingLeft:14}},{props:({ownerState:e})=>e.endAdornment,style:{paddingRight:14}},{props:({ownerState:e})=>e.multiline,style:{padding:"16.5px 14px"}},{props:({ownerState:e,size:r})=>e.multiline&&r==="small",style:{padding:"8.5px 14px"}}]}})),df=st(uf,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(n,t)=>t.notchedOutline})(oe(({theme:n})=>{const t=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:t}})),ff=st(xs,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Ps})(oe(({theme:n})=>({padding:"16.5px 14px",...!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},...n.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{padding:"8.5px 14px"}},{props:({ownerState:t})=>t.multiline,style:{padding:0}},{props:({ownerState:t})=>t.startAdornment,style:{paddingLeft:0}},{props:({ownerState:t})=>t.endAdornment,style:{paddingRight:0}}]}))),Qi=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiOutlinedInput"}),{components:s={},fullWidth:o=!1,inputComponent:a="input",label:u,multiline:h=!1,notched:d,slots:p={},slotProps:_={},type:E="text",...A}=r,C=cf(r),x=Un(),S=Bn({props:r,muiFormControl:x,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),k={...r,color:S.color||"primary",disabled:S.disabled,error:S.error,focused:S.focused,formControl:x,fullWidth:o,hiddenLabel:S.hiddenLabel,multiline:h,size:S.size,type:E},F=p.root??s.Root??hf,V=p.input??s.Input??ff,[N,U]=he("notchedOutline",{elementType:df,className:C.notchedOutline,shouldForwardComponentProp:!0,ownerState:k,externalForwardedProps:{slots:p,slotProps:_},additionalProps:{label:u!=null&&u!==""&&S.required?H.jsxs(O.Fragment,{children:[u," ","*"]}):u}});return H.jsx(Hi,{slots:{root:F,input:V},slotProps:_,renderSuffix:B=>H.jsx(N,{...U,notched:typeof d<"u"?d:!!(B.startAdornment||B.filled||B.focused)}),fullWidth:o,inputComponent:a,multiline:h,ref:e,type:E,...A,classes:{...C,notchedOutline:null}})});Qi.muiName="Input";function du(n){return ie("MuiSelect",n)}const ar=se("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var $a;const pf=st(cu,{name:"MuiSelect",slot:"Select",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[{[`&.${ar.select}`]:t.select},{[`&.${ar.select}`]:t[e.variant]},{[`&.${ar.error}`]:t.error},{[`&.${ar.multiple}`]:t.multiple}]}})({[`&.${ar.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),mf=st(hu,{name:"MuiSelect",slot:"Icon",overridesResolver:(n,t)=>{const{ownerState:e}=n;return[t.icon,e.variant&&t[`icon${te(e.variant)}`],e.open&&t.iconOpen]}})({}),gf=st("input",{shouldForwardProp:n=>ed(n)&&n!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(n,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function ja(n,t){return typeof t=="object"&&t!==null?n===t:String(n)===String(t)}function yf(n){return n==null||typeof n=="string"&&!n.trim()}const _f=n=>{const{classes:t,variant:e,disabled:r,multiple:s,open:o,error:a}=n,u={select:["select",e,r&&"disabled",s&&"multiple",a&&"error"],icon:["icon",`icon${te(e)}`,o&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return ee(u,du,t)},vf=O.forwardRef(function(t,e){var Hn;const{"aria-describedby":r,"aria-label":s,autoFocus:o,autoWidth:a,children:u,className:h,defaultOpen:d,defaultValue:p,disabled:_,displayEmpty:E,error:A=!1,IconComponent:C,inputRef:x,labelId:S,MenuProps:k={},multiple:F,name:V,onBlur:N,onChange:U,onClose:B,onFocus:I,onOpen:m,open:y,readOnly:v,renderValue:T,required:w,SelectDisplayProps:g={},tabIndex:lt,type:ht,value:it,variant:yt="standard",...dt}=t,[j,_t]=Pa({controlled:it,default:p,name:"Select"}),[Nt,Ft]=Pa({controlled:y,default:d,name:"Select"}),J=O.useRef(null),Lt=O.useRef(null),[mt,ge]=O.useState(null),{current:Ot}=O.useRef(y!=null),[ye,wt]=O.useState(),Q=Pr(e,x),ot=O.useCallback($=>{Lt.current=$,$&&ge($)},[]),nt=mt==null?void 0:mt.parentNode;O.useImperativeHandle(Q,()=>({focus:()=>{Lt.current.focus()},node:J.current,value:j}),[j]),O.useEffect(()=>{d&&Nt&&mt&&!Ot&&(wt(a?null:nt.clientWidth),Lt.current.focus())},[mt,a]),O.useEffect(()=>{o&&Lt.current.focus()},[o]),O.useEffect(()=>{if(!S)return;const $=us(Lt.current).getElementById(S);if($){const ut=()=>{getSelection().isCollapsed&&Lt.current.focus()};return $.addEventListener("click",ut),()=>{$.removeEventListener("click",ut)}}},[S]);const St=($,ut)=>{$?m&&m(ut):B&&B(ut),Ot||(wt(a?null:nt.clientWidth),Ft($))},Z=$=>{$.button===0&&($.preventDefault(),Lt.current.focus(),St(!0,$))},ft=$=>{St(!1,$)},Xt=O.Children.toArray(u),ae=$=>{const ut=Xt.find(Vt=>Vt.props.value===$.target.value);ut!==void 0&&(_t(ut.props.value),U&&U($,ut))},Yt=$=>ut=>{let Vt;if(ut.currentTarget.hasAttribute("tabindex")){if(F){Vt=Array.isArray(j)?j.slice():[];const we=j.indexOf($.props.value);we===-1?Vt.push($.props.value):Vt.splice(we,1)}else Vt=$.props.value;if($.props.onClick&&$.props.onClick(ut),j!==Vt&&(_t(Vt),U)){const we=ut.nativeEvent||ut,Wn=new we.constructor(we.type,we);Object.defineProperty(Wn,"target",{writable:!0,value:{value:Vt,name:V}}),U(Wn,$)}F||St(!1,ut)}},_e=$=>{v||[" ","ArrowUp","ArrowDown","Enter"].includes($.key)&&($.preventDefault(),St(!0,$))},zt=mt!==null&&Nt,Ct=$=>{!zt&&N&&(Object.defineProperty($,"target",{writable:!0,value:{value:j,name:V}}),N($))};delete dt["aria-invalid"];let le,ue;const At=[];let xe=!1;(cs({value:j})||E)&&(T?le=T(j):xe=!0);const Et=Xt.map($=>{if(!O.isValidElement($))return null;let ut;if(F){if(!Array.isArray(j))throw new Error(iu(2));ut=j.some(Vt=>ja(Vt,$.props.value)),ut&&xe&&At.push($.props.children)}else ut=ja(j,$.props.value),ut&&xe&&(ue=$.props.children);return O.cloneElement($,{"aria-selected":ut?"true":"false",onClick:Yt($),onKeyUp:Vt=>{Vt.key===" "&&Vt.preventDefault(),$.props.onKeyUp&&$.props.onKeyUp(Vt)},role:"option",selected:ut,value:void 0,"data-value":$.props.value})});xe&&(F?At.length===0?le=null:le=At.reduce(($,ut,Vt)=>($.push(ut),Vt<At.length-1&&$.push(", "),$),[]):le=ue);let bt=ye;!a&&Ot&&mt&&(bt=nt.clientWidth);let ve;typeof lt<"u"?ve=lt:ve=_?null:0;const De=g.id||(V?`mui-component-select-${V}`:void 0),Ie={...t,variant:yt,value:j,open:zt,error:A},pt=_f(Ie),ce={...k.PaperProps,...(Hn=k.slotProps)==null?void 0:Hn.paper},$e=ou();return H.jsxs(O.Fragment,{children:[H.jsx(pf,{as:"div",ref:ot,tabIndex:ve,role:"combobox","aria-controls":zt?$e:void 0,"aria-disabled":_?"true":void 0,"aria-expanded":zt?"true":"false","aria-haspopup":"listbox","aria-label":s,"aria-labelledby":[S,De].filter(Boolean).join(" ")||void 0,"aria-describedby":r,"aria-required":w?"true":void 0,"aria-invalid":A?"true":void 0,onKeyDown:_e,onMouseDown:_||v?null:Z,onBlur:Ct,onFocus:I,...g,ownerState:Ie,className:pe(g.className,pt.select,h),id:De,children:yf(le)?$a||($a=H.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):le}),H.jsx(gf,{"aria-invalid":A,value:Array.isArray(j)?j.join(","):j,name:V,ref:J,"aria-hidden":!0,onChange:ae,tabIndex:-1,disabled:_,className:pt.nativeInput,autoFocus:o,required:w,...dt,ownerState:Ie}),H.jsx(mf,{as:C,className:pt.icon,ownerState:Ie}),H.jsx(tf,{id:`menu-${V||""}`,anchorEl:nt,open:zt,onClose:ft,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},...k,slotProps:{...k.slotProps,list:{"aria-labelledby":S,role:"listbox","aria-multiselectable":F?"true":void 0,disableListWrap:!0,id:$e,...k.MenuListProps},paper:{...ce,style:{minWidth:bt,...ce!=null?ce.style:null}}},children:Et})]})}),Ef=n=>{const{classes:t}=n,r=ee({root:["root"]},du,t);return{...t,...r}},Xi={name:"MuiSelect",overridesResolver:(n,t)=>t.root,shouldForwardProp:n=>Ue(n)&&n!=="variant",slot:"Root"},Tf=st(Ki,Xi)(""),If=st(Qi,Xi)(""),wf=st(Wi,Xi)(""),fu=O.forwardRef(function(t,e){const r=me({name:"MuiSelect",props:t}),{autoWidth:s=!1,children:o,classes:a={},className:u,defaultOpen:h=!1,displayEmpty:d=!1,IconComponent:p=_d,id:_,input:E,inputProps:A,label:C,labelId:x,MenuProps:S,multiple:k=!1,native:F=!1,onClose:V,onOpen:N,open:U,renderValue:B,SelectDisplayProps:I,variant:m="outlined",...y}=r,v=F?of:vf,T=Un(),w=Bn({props:r,muiFormControl:T,states:["variant","error"]}),g=w.variant||m,lt={...r,variant:g,classes:a},ht=Ef(lt),{root:it,...yt}=ht,dt=E||{standard:H.jsx(Tf,{ownerState:lt}),outlined:H.jsx(If,{label:C,ownerState:lt}),filled:H.jsx(wf,{ownerState:lt})}[g],j=Pr(e,nd(dt));return H.jsx(O.Fragment,{children:O.cloneElement(dt,{inputComponent:v,inputProps:{children:o,error:w.error,IconComponent:p,variant:g,type:void 0,multiple:k,...F?{id:_}:{autoWidth:s,defaultOpen:h,displayEmpty:d,labelId:x,MenuProps:S,onClose:V,onOpen:N,open:U,renderValue:B,SelectDisplayProps:{id:_,...I}},...A,classes:A?zi(yt,A.classes):yt,...E?E.props.inputProps:{}},...(k&&F||d)&&g==="outlined"?{notched:!0}:{},ref:j,className:pe(dt.props.className,u,ht.root),...!E&&{variant:g},...y})})});fu.muiName="Select";function Af(n){return ie("MuiTextField",n)}se("MuiTextField",["root"]);const bf={standard:Ki,filled:Wi,outlined:Qi},Rf=n=>{const{classes:t}=n;return ee({root:["root"]},Af,t)},Sf=st(bd,{name:"MuiTextField",slot:"Root",overridesResolver:(n,t)=>t.root})({}),nE=O.forwardRef(function(t,e){const r=me({props:t,name:"MuiTextField"}),{autoComplete:s,autoFocus:o=!1,children:a,className:u,color:h="primary",defaultValue:d,disabled:p=!1,error:_=!1,FormHelperTextProps:E,fullWidth:A=!1,helperText:C,id:x,InputLabelProps:S,inputProps:k,InputProps:F,inputRef:V,label:N,maxRows:U,minRows:B,multiline:I=!1,name:m,onBlur:y,onChange:v,onFocus:T,placeholder:w,required:g=!1,rows:lt,select:ht=!1,SelectProps:it,slots:yt={},slotProps:dt={},type:j,value:_t,variant:Nt="outlined",...Ft}=r,J={...r,autoFocus:o,color:h,disabled:p,error:_,fullWidth:A,multiline:I,required:g,select:ht,variant:Nt},Lt=Rf(J),mt=ou(x),ge=C&&mt?`${mt}-helper-text`:void 0,Ot=N&&mt?`${mt}-label`:void 0,ye=bf[Nt],wt={slots:yt,slotProps:{input:F,inputLabel:S,htmlInput:k,formHelperText:E,select:it,...dt}},Q={},ot=wt.slotProps.inputLabel;Nt==="outlined"&&(ot&&typeof ot.shrink<"u"&&(Q.notched=ot.shrink),Q.label=N),ht&&((!it||!it.native)&&(Q.id=void 0),Q["aria-describedby"]=void 0);const[nt,St]=he("root",{elementType:Sf,shouldForwardComponentProp:!0,externalForwardedProps:{...wt,...Ft},ownerState:J,className:pe(Lt.root,u),ref:e,additionalProps:{disabled:p,error:_,fullWidth:A,required:g,color:h,variant:Nt}}),[Z,ft]=he("input",{elementType:ye,externalForwardedProps:wt,additionalProps:Q,ownerState:J}),[Xt,ae]=he("inputLabel",{elementType:$d,externalForwardedProps:wt,ownerState:J}),[Yt,_e]=he("htmlInput",{elementType:"input",externalForwardedProps:wt,ownerState:J}),[zt,Ct]=he("formHelperText",{elementType:Pd,externalForwardedProps:wt,ownerState:J}),[le,ue]=he("select",{elementType:fu,externalForwardedProps:wt,ownerState:J}),At=H.jsx(Z,{"aria-describedby":ge,autoComplete:s,autoFocus:o,defaultValue:d,fullWidth:A,multiline:I,name:m,rows:lt,maxRows:U,minRows:B,type:j,value:_t,id:mt,inputRef:V,onBlur:y,onChange:v,onFocus:T,placeholder:w,inputProps:_e,slots:{input:yt.htmlInput?Yt:void 0},...ft});return H.jsxs(nt,{...St,children:[N!=null&&N!==""&&H.jsx(Xt,{htmlFor:mt,id:Ot,...ae,children:N}),ht?H.jsx(le,{"aria-describedby":ge,id:mt,labelId:Ot,value:_t,input:At,...ue,children:a}):At,C&&H.jsx(zt,{id:ge,...Ct,children:C})]})});/**
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
 */const Cf=()=>{};var za={};/**
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
 */const pu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Pf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,_=(o&3)<<4|u>>4;let E=(u&15)<<2|d>>6,A=d&63;h||(A=64,a||(E=64)),r.push(e[p],e[_],e[E],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(pu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const _=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||_==null)throw new Vf;const E=o<<2|u>>4;if(r.push(E),d!==64){const A=u<<4&240|d>>2;if(r.push(A),_!==64){const C=d<<6&192|_;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xf=function(n){const t=pu(n);return mu.encodeByteArray(t,!0)},hs=function(n){return xf(n).replace(/\./g,"")},Df=function(n){try{return mu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nf=()=>kf().__FIREBASE_DEFAULTS__,Of=()=>{if(typeof process>"u"||typeof za>"u")return;const n=za.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Df(n[1]);return t&&JSON.parse(t)},Yi=()=>{try{return Cf()||Nf()||Of()||Mf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ff=n=>{var t,e;return(e=(t=Yi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Lf=n=>{const t=Ff(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},gu=()=>{var n;return(n=Yi())===null||n===void 0?void 0:n.config};/**
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
 */class Bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ji(n){return n.endsWith(".cloudworkstations.dev")}async function Uf(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function $f(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hs(JSON.stringify(e)),hs(JSON.stringify(a)),""].join(".")}const dr={};function jf(){const n={prod:[],emulator:[]};for(const t of Object.keys(dr))dr[t]?n.emulator.push(t):n.prod.push(t);return n}function zf(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let qa=!1;function qf(n,t){if(typeof window>"u"||typeof document>"u"||!Ji(window.location.host)||dr[n]===t||dr[n]||qa)return;dr[n]=t;function e(E){return`__firebase__banner__${E}`}const r="__firebase__banner",o=jf().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function u(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function h(E,A){E.setAttribute("width","24"),E.setAttribute("id",A),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{qa=!0,a()},E}function p(E,A){E.setAttribute("id",A),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function _(){const E=zf(r),A=e("text"),C=document.getElementById(A)||document.createElement("span"),x=e("learnmore"),S=document.getElementById(x)||document.createElement("a"),k=e("preprendIcon"),F=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const V=E.element;u(V),p(S,x);const N=d();h(F,k),V.append(F,C,S,N),document.body.appendChild(V)}o?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function Hf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wf(){var n;const t=(n=Yi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gf(){return!Wf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yu(){try{return typeof indexedDB=="object"}catch{return!1}}function _u(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Qf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Xf="FirebaseError";class rn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Xf,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Yf(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new rn(s,u,r)}}function Yf(n,t){return n.replace(Jf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Jf=/\{\$([^}]+)}/g;function vr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Ha(o)&&Ha(a)){if(!vr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ha(n){return n!==null&&typeof n=="object"}/**
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
 */const Zf=1e3,tp=2,ep=4*60*60*1e3,np=.5;function Wa(n,t=Zf,e=tp){const r=t*Math.pow(e,n),s=Math.round(np*r*(Math.random()-.5)*2);return Math.min(ep,r+s)}/**
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
 */function xn(n){return n&&n._delegate?n._delegate:n}class Me{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class rp{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Bf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ip(t))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=cn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=cn){return this.instances.has(t)}getOptions(t=cn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=cn){return this.component?this.component.multipleInstances?t:cn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sp(n){return n===cn?void 0:n}function ip(n){return n.instantiationMode==="EAGER"}/**
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
 */class op{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rp(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(et||(et={}));const ap={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},lp=et.INFO,up={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},cp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=up[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zi{constructor(t){this.name=t,this._logLevel=lp,this._logHandler=cp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ap[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const hp=(n,t)=>t.some(e=>n instanceof e);let Ka,Ga;function dp(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fp(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vu=new WeakMap,Ti=new WeakMap,Eu=new WeakMap,ui=new WeakMap,to=new WeakMap;function pp(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(We(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&vu.set(e,n)}).catch(()=>{}),to.set(t,n),t}function mp(n){if(Ti.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ti.set(n,t)}let Ii={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ti.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Eu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return We(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function gp(n){Ii=n(Ii)}function yp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ci(this),t,...e);return Eu.set(r,t.sort?t.sort():[t]),We(r)}:fp().includes(n)?function(...t){return n.apply(ci(this),t),We(vu.get(this))}:function(...t){return We(n.apply(ci(this),t))}}function _p(n){return typeof n=="function"?yp(n):(n instanceof IDBTransaction&&mp(n),hp(n,dp())?new Proxy(n,Ii):n)}function We(n){if(n instanceof IDBRequest)return pp(n);if(ui.has(n))return ui.get(n);const t=_p(n);return t!==n&&(ui.set(n,t),to.set(t,n)),t}const ci=n=>to.get(n);function Tu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=We(a);return r&&a.addEventListener("upgradeneeded",h=>{r(We(a.result),h.oldVersion,h.newVersion,We(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const vp=["get","getKey","getAll","getAllKeys","count"],Ep=["put","add","delete","clear"],hi=new Map;function Qa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(hi.get(t))return hi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ep.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vp.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return hi.set(t,o),o}gp(n=>({...n,get:(t,e,r)=>Qa(t,e)||n.get(t,e,r),has:(t,e)=>!!Qa(t,e)||n.has(t,e)}));/**
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
 */class Tp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ip(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ip(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wi="@firebase/app",Xa="0.13.1";/**
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
 */const Fe=new Zi("@firebase/app"),wp="@firebase/app-compat",Ap="@firebase/analytics-compat",bp="@firebase/analytics",Rp="@firebase/app-check-compat",Sp="@firebase/app-check",Cp="@firebase/auth",Pp="@firebase/auth-compat",Vp="@firebase/database",xp="@firebase/data-connect",Dp="@firebase/database-compat",kp="@firebase/functions",Np="@firebase/functions-compat",Op="@firebase/installations",Mp="@firebase/installations-compat",Fp="@firebase/messaging",Lp="@firebase/messaging-compat",Bp="@firebase/performance",Up="@firebase/performance-compat",$p="@firebase/remote-config",jp="@firebase/remote-config-compat",zp="@firebase/storage",qp="@firebase/storage-compat",Hp="@firebase/firestore",Wp="@firebase/ai",Kp="@firebase/firestore-compat",Gp="firebase",Qp="11.9.0";/**
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
 */const Ai="[DEFAULT]",Xp={[wi]:"fire-core",[wp]:"fire-core-compat",[bp]:"fire-analytics",[Ap]:"fire-analytics-compat",[Sp]:"fire-app-check",[Rp]:"fire-app-check-compat",[Cp]:"fire-auth",[Pp]:"fire-auth-compat",[Vp]:"fire-rtdb",[xp]:"fire-data-connect",[Dp]:"fire-rtdb-compat",[kp]:"fire-fn",[Np]:"fire-fn-compat",[Op]:"fire-iid",[Mp]:"fire-iid-compat",[Fp]:"fire-fcm",[Lp]:"fire-fcm-compat",[Bp]:"fire-perf",[Up]:"fire-perf-compat",[$p]:"fire-rc",[jp]:"fire-rc-compat",[zp]:"fire-gcs",[qp]:"fire-gcs-compat",[Hp]:"fire-fst",[Kp]:"fire-fst-compat",[Wp]:"fire-vertex","fire-js":"fire-js",[Gp]:"fire-js-all"};/**
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
 */const ds=new Map,Yp=new Map,bi=new Map;function Ya(n,t){try{n.container.addComponent(t)}catch(e){Fe.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Xe(n){const t=n.name;if(bi.has(t))return Fe.debug(`There were multiple attempts to register component ${t}.`),!1;bi.set(t,n);for(const e of ds.values())Ya(e,n);for(const e of Yp.values())Ya(e,n);return!0}function Vr(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Jp(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new Ds("app","Firebase",Zp);/**
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
 */class tm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const em=Qp;function Iu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(e||(e=gu()),!e)throw Ke.create("no-options");const o=ds.get(s);if(o){if(vr(e,o.options)&&vr(r,o.config))return o;throw Ke.create("duplicate-app",{appName:s})}const a=new op(s);for(const h of bi.values())a.addComponent(h);const u=new tm(e,r,a);return ds.set(s,u),u}function wu(n=Ai){const t=ds.get(n);if(!t&&n===Ai&&gu())return Iu();if(!t)throw Ke.create("no-app",{appName:n});return t}function Re(n,t,e){var r;let s=(r=Xp[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fe.warn(u.join(" "));return}Xe(new Me(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const nm="firebase-heartbeat-database",rm=1,Er="firebase-heartbeat-store";let di=null;function Au(){return di||(di=Tu(nm,rm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Er)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),di}async function sm(n){try{const e=(await Au()).transaction(Er),r=await e.objectStore(Er).get(bu(n));return await e.done,r}catch(t){if(t instanceof rn)Fe.warn(t.message);else{const e=Ke.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Fe.warn(e.message)}}}async function Ja(n,t){try{const r=(await Au()).transaction(Er,"readwrite");await r.objectStore(Er).put(t,bu(n)),await r.done}catch(e){if(e instanceof rn)Fe.warn(e.message);else{const r=Ke.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Fe.warn(r.message)}}}function bu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const im=1024,om=30;class am{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new um(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Za();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>om){const a=cm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fe.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Za(),{heartbeatsToSend:r,unsentEntries:s}=lm(this._heartbeatsCache.heartbeats),o=hs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Fe.warn(e),""}}}function Za(){return new Date().toISOString().substring(0,10)}function lm(n,t=im){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),tl(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),tl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class um{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yu()?_u().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await sm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function tl(n){return hs(JSON.stringify({version:2,heartbeats:n})).length}function cm(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function hm(n){Xe(new Me("platform-logger",t=>new Tp(t),"PRIVATE")),Xe(new Me("heartbeat",t=>new am(t),"PRIVATE")),Re(wi,Xa,n),Re(wi,Xa,"esm2017"),Re("fire-js","")}hm("");var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ge,Ru;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(v,T,w){for(var g=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)g[lt-2]=arguments[lt];return m.prototype[T].apply(v,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var v=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)v[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;16>T;++T)v[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],T=I.g[2];var w=I.g[3],g=m+(w^y&(T^w))+v[0]+3614090360&4294967295;m=y+(g<<7&4294967295|g>>>25),g=w+(T^m&(y^T))+v[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(y^w&(m^y))+v[2]+606105819&4294967295,T=w+(g<<17&4294967295|g>>>15),g=y+(m^T&(w^m))+v[3]+3250441966&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(w^y&(T^w))+v[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=w+(T^m&(y^T))+v[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(y^w&(m^y))+v[6]+2821735955&4294967295,T=w+(g<<17&4294967295|g>>>15),g=y+(m^T&(w^m))+v[7]+4249261313&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(w^y&(T^w))+v[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=w+(T^m&(y^T))+v[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(y^w&(m^y))+v[10]+4294925233&4294967295,T=w+(g<<17&4294967295|g>>>15),g=y+(m^T&(w^m))+v[11]+2304563134&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(w^y&(T^w))+v[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=w+(T^m&(y^T))+v[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(y^w&(m^y))+v[14]+2792965006&4294967295,T=w+(g<<17&4294967295|g>>>15),g=y+(m^T&(w^m))+v[15]+1236535329&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(T^w&(y^T))+v[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^T&(m^y))+v[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(w^m))+v[11]+643717713&4294967295,T=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(T^w))+v[0]+3921069994&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(y^T))+v[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^T&(m^y))+v[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(w^m))+v[15]+3634488961&4294967295,T=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(T^w))+v[4]+3889429448&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(y^T))+v[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^T&(m^y))+v[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(w^m))+v[3]+4107603335&4294967295,T=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(T^w))+v[8]+1163531501&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(y^T))+v[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^T&(m^y))+v[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(w^m))+v[7]+1735328473&4294967295,T=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(T^w))+v[12]+2368359562&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(y^T^w)+v[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^T)+v[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^y)+v[11]+1839030562&4294967295,T=w+(g<<16&4294967295|g>>>16),g=y+(T^w^m)+v[14]+4259657740&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^w)+v[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^T)+v[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^y)+v[7]+4139469664&4294967295,T=w+(g<<16&4294967295|g>>>16),g=y+(T^w^m)+v[10]+3200236656&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^w)+v[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^T)+v[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^y)+v[3]+3572445317&4294967295,T=w+(g<<16&4294967295|g>>>16),g=y+(T^w^m)+v[6]+76029189&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^w)+v[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^T)+v[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^y)+v[15]+530742520&4294967295,T=w+(g<<16&4294967295|g>>>16),g=y+(T^w^m)+v[2]+3299628645&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(T^(y|~w))+v[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~T))+v[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~y))+v[14]+2878612391&4294967295,T=w+(g<<15&4294967295|g>>>17),g=y+(w^(T|~m))+v[5]+4237533241&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~w))+v[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~T))+v[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~y))+v[10]+4293915773&4294967295,T=w+(g<<15&4294967295|g>>>17),g=y+(w^(T|~m))+v[1]+2240044497&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~w))+v[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~T))+v[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~y))+v[6]+2734768916&4294967295,T=w+(g<<15&4294967295|g>>>17),g=y+(w^(T|~m))+v[13]+1309151649&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~w))+v[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~T))+v[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~y))+v[2]+718787259&4294967295,T=w+(g<<15&4294967295|g>>>17),g=y+(w^(T|~m))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+w&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,v=this.B,T=this.h,w=0;w<m;){if(T==0)for(;w<=y;)s(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<m;)if(v[T++]=I.charCodeAt(w++),T==this.blockSize){s(this,v),T=0;break}}else for(;w<m;)if(v[T++]=I[w++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var v=0;32>v;v+=8)I[y++]=this.g[m]>>>v&255;return I};function o(I,m){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],v=!0,T=I.length-1;0<=T;T--){var w=I[T]|0;v&&w==m||(y[T]=w,v=!1)}this.g=y}var u={};function h(I){return-128<=I&&128>I?o(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return _;if(0>I)return S(d(-I));for(var m=[],y=1,v=0;I>=y;v++)m[v]=I/y|0,y*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return S(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),v=_,T=0;T<I.length;T+=8){var w=Math.min(8,I.length-T),g=parseInt(I.substring(T,T+w),m);8>w?(w=d(Math.pow(m,w)),v=v.j(w).add(d(g))):(v=v.j(y),v=v.add(d(g)))}return v}var _=h(0),E=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-S(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var v=this.i(y);I+=(0<=v?v:4294967296+v)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(x(this))return"-"+S(this).toString(I);for(var m=d(Math.pow(I,6)),y=this,v="";;){var T=N(y,m).g;y=k(y,T.j(m));var w=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=T,C(y))return w+v;for(;6>w.length;)w="0"+w;v=w+v}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=k(this,I),x(I)?-1:C(I)?0:1};function S(I){for(var m=I.g.length,y=[],v=0;v<m;v++)y[v]=~I.g[v];return new a(y,~I.h).add(E)}n.abs=function(){return x(this)?S(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0,T=0;T<=m;T++){var w=v+(this.i(T)&65535)+(I.i(T)&65535),g=(w>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=g>>>16,w&=65535,g&=65535,y[T]=g<<16|w}return new a(y,y[y.length-1]&-2147483648?-1:0)};function k(I,m){return I.add(S(m))}n.j=function(I){if(C(this)||C(I))return _;if(x(this))return x(I)?S(this).j(S(I)):S(S(this).j(I));if(x(I))return S(this.j(S(I)));if(0>this.l(A)&&0>I.l(A))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],v=0;v<2*m;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<I.g.length;T++){var w=this.i(v)>>>16,g=this.i(v)&65535,lt=I.i(T)>>>16,ht=I.i(T)&65535;y[2*v+2*T]+=g*ht,F(y,2*v+2*T),y[2*v+2*T+1]+=w*ht,F(y,2*v+2*T+1),y[2*v+2*T+1]+=g*lt,F(y,2*v+2*T+1),y[2*v+2*T+2]+=w*lt,F(y,2*v+2*T+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function F(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function V(I,m){this.g=I,this.h=m}function N(I,m){if(C(m))throw Error("division by zero");if(C(I))return new V(_,_);if(x(I))return m=N(S(I),m),new V(S(m.g),S(m.h));if(x(m))return m=N(I,S(m)),new V(S(m.g),m.h);if(30<I.g.length){if(x(I)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var y=E,v=m;0>=v.l(I);)y=U(y),v=U(v);var T=B(y,1),w=B(v,1);for(v=B(v,2),y=B(y,2);!C(v);){var g=w.add(v);0>=g.l(I)&&(T=T.add(y),w=g),v=B(v,1),y=B(y,1)}return m=k(I,T.j(m)),new V(T,m)}for(T=_;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),w=d(y),g=w.j(m);x(g)||0<g.l(I);)y-=v,w=d(y),g=w.j(m);C(w)&&(w=E),T=T.add(w),I=k(I,g)}return new V(T,I)}n.A=function(I){return N(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)&I.i(v);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)|I.i(v);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)^I.i(v);return new a(y,this.h^I.h)};function U(I){for(var m=I.g.length+1,y=[],v=0;v<m;v++)y[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(y,I.h)}function B(I,m){var y=m>>5;m%=32;for(var v=I.g.length-y,T=[],w=0;w<v;w++)T[w]=0<m?I.i(w+y)>>>m|I.i(w+y+1)<<32-m:I.i(w+y);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ru=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ge=a}).apply(typeof el<"u"?el:typeof self<"u"?self:typeof window<"u"?window:{});var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Su,lr,Cu,rs,Ri,Pu,Vu,xu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jr=="object"&&Jr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in c))break t;c=c[b]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,f=!1,b={next:function(){if(!f&&c<i.length){var R=c++;return{value:l(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,c){return i.call.apply(i.bind,arguments)}function _(i,l,c){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),i.apply(l,b)}}return function(){return i.apply(l,arguments)}}function E(i,l,c){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,E.apply(null,arguments)}function A(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function C(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(f,b,R){for(var M=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)M[ct-2]=arguments[ct];return l.prototype[b].apply(f,M)}}function x(i){const l=i.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function S(i,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const b=i.length||0,R=f.length||0;i.length=b+R;for(let M=0;M<R;M++)i[b+M]=f[M]}else i.push(f)}}class k{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(i){return/^[\s\xa0]*$/.test(i)}function V(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function N(i){return N[" "](i),i}N[" "]=function(){};var U=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function B(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function I(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function m(i){const l={};for(const c in i)l[c]=i[c];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let c,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(c in f)i[c]=f[c];for(let R=0;R<y.length;R++)c=y[R],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function T(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function w(i){u.setTimeout(()=>{throw i},0)}function g(){var i=j;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class lt{constructor(){this.h=this.g=null}add(l,c){const f=ht.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var ht=new k(()=>new it,i=>i.reset());class it{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,dt=!1,j=new lt,_t=()=>{const i=u.Promise.resolve(void 0);yt=()=>{i.then(Nt)}};var Nt=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){w(c)}var l=ht;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}dt=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Lt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function mt(i,l){if(J.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(U){t:{try{N(l.nodeName);var b=!0;break t}catch{}b=!1}b||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ge[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&mt.aa.h.call(this)}}C(mt,J);var ge={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),ye=0;function wt(i,l,c,f,b){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=b,this.key=++ye,this.da=this.fa=!1}function Q(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ot(i){this.src=i,this.g={},this.h=0}ot.prototype.add=function(i,l,c,f,b){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var M=St(i,l,f,b);return-1<M?(l=i[M],c||(l.fa=!1)):(l=new wt(l,this.src,R,!!f,b),l.fa=c,i.push(l)),l};function nt(i,l){var c=l.type;if(c in i.g){var f=i.g[c],b=Array.prototype.indexOf.call(f,l,void 0),R;(R=0<=b)&&Array.prototype.splice.call(f,b,1),R&&(Q(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function St(i,l,c,f){for(var b=0;b<i.length;++b){var R=i[b];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==f)return b}return-1}var Z="closure_lm_"+(1e6*Math.random()|0),ft={};function Xt(i,l,c,f,b){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Xt(i,l[R],c,f,b);return null}return c=xe(c),i&&i[Ot]?i.K(l,c,d(f)?!!f.capture:!1,b):ae(i,l,c,!1,f,b)}function ae(i,l,c,f,b,R){if(!l)throw Error("Invalid event type");var M=d(b)?!!b.capture:!!b,ct=ue(i);if(ct||(i[Z]=ct=new ot(i)),c=ct.add(l,c,f,M,R),c.proxy)return c;if(f=Yt(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)Lt||(b=M),b===void 0&&(b=!1),i.addEventListener(l.toString(),f,b);else if(i.attachEvent)i.attachEvent(Ct(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Yt(){function i(c){return l.call(i.src,i.listener,c)}const l=le;return i}function _e(i,l,c,f,b){if(Array.isArray(l))for(var R=0;R<l.length;R++)_e(i,l[R],c,f,b);else f=d(f)?!!f.capture:!!f,c=xe(c),i&&i[Ot]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],c=St(R,c,f,b),-1<c&&(Q(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=ue(i))&&(l=i.g[l.toString()],i=-1,l&&(i=St(l,c,f,b)),(c=-1<i?l[i]:null)&&zt(c))}function zt(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Ot])nt(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(Ct(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=ue(l))?(nt(c,i),c.h==0&&(c.src=null,l[Z]=null)):Q(i)}}}function Ct(i){return i in ft?ft[i]:ft[i]="on"+i}function le(i,l){if(i.da)i=!0;else{l=new mt(l,this);var c=i.listener,f=i.ha||i.src;i.fa&&zt(i),i=c.call(f,l)}return i}function ue(i){return i=i[Z],i instanceof ot?i:null}var At="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(i){return typeof i=="function"?i:(i[At]||(i[At]=function(l){return i.handleEvent(l)}),i[At])}function Et(){Ft.call(this),this.i=new ot(this),this.M=this,this.F=null}C(Et,Ft),Et.prototype[Ot]=!0,Et.prototype.removeEventListener=function(i,l,c,f){_e(this,i,l,c,f)};function bt(i,l){var c,f=i.F;if(f)for(c=[];f;f=f.F)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new J(l,i);else if(l instanceof J)l.target=l.target||i;else{var b=l;l=new J(f,i),v(l,b)}if(b=!0,c)for(var R=c.length-1;0<=R;R--){var M=l.g=c[R];b=ve(M,f,!0,l)&&b}if(M=l.g=i,b=ve(M,f,!0,l)&&b,b=ve(M,f,!1,l)&&b,c)for(R=0;R<c.length;R++)M=l.g=c[R],b=ve(M,f,!1,l)&&b}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],f=0;f<c.length;f++)Q(c[f]);delete i.g[l],i.h--}}this.F=null},Et.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},Et.prototype.L=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function ve(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,R=0;R<l.length;++R){var M=l[R];if(M&&!M.da&&M.capture==c){var ct=M.listener,Bt=M.ha||M.src;M.fa&&nt(i.i,M),b=ct.call(Bt,f)!==!1&&b}}return b&&!f.defaultPrevented}function De(i,l,c){if(typeof i=="function")c&&(i=E(i,c));else if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Ie(i){i.g=De(()=>{i.g=null,i.i&&(i.i=!1,Ie(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class pt extends Ft{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ie(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(i){Ft.call(this),this.h=i,this.g={}}C(ce,Ft);var $e=[];function Hn(i){B(i.g,function(l,c){this.g.hasOwnProperty(c)&&zt(l)},i),i.g={}}ce.prototype.N=function(){ce.aa.N.call(this),Hn(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $=u.JSON.stringify,ut=u.JSON.parse,Vt=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function we(){}we.prototype.h=null;function Wn(i){return i.h||(i.h=i.i())}function Bo(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ks(){J.call(this,"d")}C(Ks,J);function Gs(){J.call(this,"c")}C(Gs,J);var sn={},Uo=null;function Or(){return Uo=Uo||new Et}sn.La="serverreachability";function $o(i){J.call(this,sn.La,i)}C($o,J);function Gn(i){const l=Or();bt(l,new $o(l))}sn.STAT_EVENT="statevent";function jo(i,l){J.call(this,sn.STAT_EVENT,i),this.stat=l}C(jo,J);function Qt(i){const l=Or();bt(l,new jo(l,i))}sn.Ma="timingevent";function zo(i,l){J.call(this,sn.Ma,i),this.size=l}C(zo,J);function Qn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function Sh(i,l,c,f,b,R){i.info(function(){if(i.g)if(R)for(var M="",ct=R.split("&"),Bt=0;Bt<ct.length;Bt++){var rt=ct[Bt].split("=");if(1<rt.length){var qt=rt[0];rt=rt[1];var Ht=qt.split("_");M=2<=Ht.length&&Ht[1]=="type"?M+(qt+"="+rt+"&"):M+(qt+"=redacted&")}}else M=null;else M=R;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+l+`
`+c+`
`+M})}function Ch(i,l,c,f,b,R,M){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+l+`
`+c+`
`+R+" "+M})}function Tn(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Vh(i,c)+(f?" "+f:"")})}function Ph(i,l){i.info(function(){return"TIMEOUT: "+l})}Xn.prototype.info=function(){};function Vh(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var f=c[i];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var M=1;M<b.length;M++)b[M]=""}}}}return $(c)}catch{return l}}var Mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qs;function Fr(){}C(Fr,we),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},Qs=new Fr;function je(i,l,c,f){this.j=i,this.i=l,this.l=c,this.R=f||1,this.U=new ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ho}function Ho(){this.i=null,this.g="",this.h=!1}var Wo={},Xs={};function Ys(i,l,c){i.L=1,i.v=$r(ke(l)),i.m=c,i.P=!0,Ko(i,null)}function Ko(i,l){i.F=Date.now(),Lr(i),i.A=ke(i.v);var c=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),aa(c.i,"t",f),i.C=0,c=i.j.J,i.h=new Ho,i.g=ba(i.j,c?l:null,!i.m),0<i.O&&(i.M=new pt(E(i.Y,i,i.g),i.O)),l=i.U,c=i.g,f=i.ca;var b="readystatechange";Array.isArray(b)||(b&&($e[0]=b.toString()),b=$e);for(var R=0;R<b.length;R++){var M=Xt(c,b[R],f||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Gn(),Sh(i.i,i.u,i.A,i.l,i.R,i.m)}je.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ne(i)==3?l.j():this.Y(i)},je.prototype.Y=function(i){try{if(i==this.g)t:{const Ht=Ne(this.g);var l=this.g.Ba();const An=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||pa(this.g)))){this.J||Ht!=4||l==7||(l==8||0>=An?Gn(3):Gn(2)),Js(this);var c=this.g.Z();this.X=c;e:if(Go(this)){var f=pa(this.g);i="";var b=f.length,R=Ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Yn(this);var M="";break e}this.h.i=new u.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(R&&l==b-1)});f.length=0,this.h.g+=i,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=c==200,Ch(this.i,this.u,this.A,this.l,this.R,Ht,c),this.o){if(this.T&&!this.K){e:{if(this.g){var ct,Bt=this.g;if((ct=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ct)){var rt=ct;break e}}rt=null}if(c=rt)Tn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zs(this,c);else{this.o=!1,this.s=3,Qt(12),on(this),Yn(this);break t}}if(this.P){c=!0;let Ee;for(;!this.J&&this.C<M.length;)if(Ee=xh(this,M),Ee==Xs){Ht==4&&(this.s=4,Qt(14),c=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==Wo){this.s=4,Qt(15),Tn(this.i,this.l,M,"[Invalid Chunk]"),c=!1;break}else Tn(this.i,this.l,Ee,null),Zs(this,Ee);if(Go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||M.length!=0||this.h.h||(this.s=1,Qt(16),c=!1),this.o=this.o&&c,!c)Tn(this.i,this.l,M,"[Invalid Chunked Response]"),on(this),Yn(this);else if(0<M.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),ii(qt),qt.M=!0,Qt(11))}}else Tn(this.i,this.l,M,null),Zs(this,M);Ht==4&&on(this),this.o&&!this.J&&(Ht==4?Ta(this.j,this):(this.o=!1,Lr(this)))}else Gh(this.g),c==400&&0<M.indexOf("Unknown SID")?(this.s=3,Qt(12)):(this.s=0,Qt(13)),on(this),Yn(this)}}}catch{}finally{}};function Go(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function xh(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?Xs:(c=Number(l.substring(c,f)),isNaN(c)?Wo:(f+=1,f+c>l.length?Xs:(l=l.slice(f,f+c),i.C=f+c,l)))}je.prototype.cancel=function(){this.J=!0,on(this)};function Lr(i){i.S=Date.now()+i.I,Qo(i,i.I)}function Qo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Qn(E(i.ba,i),l)}function Js(i){i.B&&(u.clearTimeout(i.B),i.B=null)}je.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Ph(this.i,this.A),this.L!=2&&(Gn(),Qt(17)),on(this),this.s=2,Yn(this)):Qo(this,this.S-i)};function Yn(i){i.j.G==0||i.J||Ta(i.j,i)}function on(i){Js(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Hn(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Zs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||ti(c.h,i))){if(!i.K&&ti(c.h,i)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Kr(c),Hr(c);else break t;si(c),Qt(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=Qn(E(c.Za,c),6e3));if(1>=Jo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ln(c,11)}else if((i.K||c.g==i)&&Kr(c),!F(l))for(b=c.Da.g.parse(l),l=0;l<b.length;l++){let rt=b[l];if(c.T=rt[0],rt=rt[1],c.G==2)if(rt[0]=="c"){c.K=rt[1],c.ia=rt[2];const qt=rt[3];qt!=null&&(c.la=qt,c.j.info("VER="+c.la));const Ht=rt[4];Ht!=null&&(c.Aa=Ht,c.j.info("SVER="+c.Aa));const An=rt[5];An!=null&&typeof An=="number"&&0<An&&(f=1.5*An,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Ee=i.g;if(Ee){const Qr=Ee.g?Ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var R=f.h;R.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ei(R,R.h),R.h=null))}if(f.D){const oi=Ee.g?Ee.g.getResponseHeader("X-HTTP-Session-Id"):null;oi&&(f.ya=oi,gt(f.I,f.D,oi))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var M=i;if(f.qa=Aa(f,f.J?f.ia:null,f.W),M.K){Zo(f.h,M);var ct=M,Bt=f.L;Bt&&(ct.I=Bt),ct.B&&(Js(ct),Lr(ct)),f.g=M}else va(f);0<c.i.length&&Wr(c)}else rt[0]!="stop"&&rt[0]!="close"||ln(c,7);else c.G==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?ln(c,7):ri(c):rt[0]!="noop"&&c.l&&c.l.ta(rt),c.v=0)}}Gn(4)}catch{}}var Dh=class{constructor(i,l){this.g=i,this.map=l}};function Xo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Jo(i){return i.h?1:i.g?i.g.size:0}function ti(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ei(i,l){i.g?i.g.add(l):i.h=l}function Zo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Xo.prototype.cancel=function(){if(this.i=ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ta(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return x(i.i)}function kh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,f=0;f<c;f++)l.push(i[f]);return l}l=[],c=0;for(f in i)l[c++]=i[f];return l}function Nh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const f in i)l[c++]=f;return l}}}function ea(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=Nh(i),f=kh(i),b=f.length,R=0;R<b;R++)l.call(void 0,f[R],c&&c[R],i)}var na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oh(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var f=i[c].indexOf("="),b=null;if(0<=f){var R=i[c].substring(0,f);b=i[c].substring(f+1)}else R=i[c];l(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function an(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof an){this.h=i.h,Br(this,i.j),this.o=i.o,this.g=i.g,Ur(this,i.s),this.l=i.l;var l=i.i,c=new tr;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),ra(this,c),this.m=i.m}else i&&(l=String(i).match(na))?(this.h=!1,Br(this,l[1]||"",!0),this.o=Jn(l[2]||""),this.g=Jn(l[3]||"",!0),Ur(this,l[4]),this.l=Jn(l[5]||"",!0),ra(this,l[6]||"",!0),this.m=Jn(l[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}an.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Zn(l,sa,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Zn(l,sa,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Zn(c,c.charAt(0)=="/"?Lh:Fh,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Zn(c,Uh)),i.join("")};function ke(i){return new an(i)}function Br(i,l,c){i.j=c?Jn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Ur(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function ra(i,l,c){l instanceof tr?(i.i=l,$h(i.i,i.h)):(c||(l=Zn(l,Bh)),i.i=new tr(l,i.h))}function gt(i,l,c){i.i.set(l,c)}function $r(i){return gt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Jn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Zn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Mh),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Mh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var sa=/[#\/\?@]/g,Fh=/[#\?:]/g,Lh=/[#\?]/g,Bh=/[#\?@]/g,Uh=/#/g;function tr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ze(i){i.g||(i.g=new Map,i.h=0,i.i&&Oh(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=tr.prototype,n.add=function(i,l){ze(this),this.i=null,i=In(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function ia(i,l){ze(i),l=In(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function oa(i,l){return ze(i),l=In(i,l),i.g.has(l)}n.forEach=function(i,l){ze(this),this.g.forEach(function(c,f){c.forEach(function(b){i.call(l,b,f,this)},this)},this)},n.na=function(){ze(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const b=i[f];for(let R=0;R<b.length;R++)c.push(l[f])}return c},n.V=function(i){ze(this);let l=[];if(typeof i=="string")oa(this,i)&&(l=l.concat(this.g.get(In(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return ze(this),this.i=null,i=In(this,i),oa(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function aa(i,l,c){ia(i,l),0<c.length&&(i.i=null,i.g.set(In(i,l),x(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const R=encodeURIComponent(String(f)),M=this.V(f);for(f=0;f<M.length;f++){var b=R;M[f]!==""&&(b+="="+encodeURIComponent(String(M[f]))),i.push(b)}}return this.i=i.join("&")};function In(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function $h(i,l){l&&!i.j&&(ze(i),i.i=null,i.g.forEach(function(c,f){var b=f.toLowerCase();f!=b&&(ia(this,f),aa(this,b,c))},i)),i.j=l}function jh(i,l){const c=new Xn;if(u.Image){const f=new Image;f.onload=A(qe,c,"TestLoadImage: loaded",!0,l,f),f.onerror=A(qe,c,"TestLoadImage: error",!1,l,f),f.onabort=A(qe,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=A(qe,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function zh(i,l){const c=new Xn,f=new AbortController,b=setTimeout(()=>{f.abort(),qe(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(b),R.ok?qe(c,"TestPingServer: ok",!0,l):qe(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),qe(c,"TestPingServer: error",!1,l)})}function qe(i,l,c,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(c)}catch{}}function qh(){this.g=new Vt}function Hh(i,l,c){const f=c||"";try{ea(i,function(b,R){let M=b;d(b)&&(M=$(b)),l.push(f+R+"="+encodeURIComponent(M))})}catch(b){throw l.push(f+"type="+encodeURIComponent("_badmap")),b}}function jr(i){this.l=i.Ub||null,this.j=i.eb||!1}C(jr,we),jr.prototype.g=function(){return new zr(this.l,this.j)},jr.prototype.i=function(i){return function(){return i}}({});function zr(i,l){Et.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zr,Et),n=zr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,nr(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;la(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function la(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?er(this):nr(this),this.readyState==3&&la(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,er(this))},n.Qa=function(i){this.g&&(this.response=i,er(this))},n.ga=function(){this.g&&er(this)};function er(i){i.readyState=4,i.l=null,i.j=null,i.v=null,nr(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function nr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ua(i){let l="";return B(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function ni(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=ua(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):gt(i,l,c))}function Tt(i){Et.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Tt,Et);var Wh=/^https?$/i,Kh=["POST","PUT"];n=Tt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qs.g(),this.v=this.o?Wn(this.o):Wn(Qs),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){ca(this,R);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)c.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),b=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Kh,l,void 0))||f||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of c)this.g.setRequestHeader(R,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fa(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){ca(this,R)}};function ca(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,ha(i),qr(i)}function ha(i){i.A||(i.A=!0,bt(i,"complete"),bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,bt(this,"complete"),bt(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?da(this):this.bb())},n.bb=function(){da(this)};function da(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ne(i)!=4||i.Z()!=2)){if(i.u&&Ne(i)==4)De(i.Ea,0,i);else if(bt(i,"readystatechange"),Ne(i)==4){i.h=!1;try{const M=i.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=M===0){var b=String(i.D).match(na)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),f=!Wh.test(b?b.toLowerCase():"")}c=f}if(c)bt(i,"complete"),bt(i,"success");else{i.m=6;try{var R=2<Ne(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",ha(i)}}finally{qr(i)}}}}function qr(i,l){if(i.g){fa(i);const c=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||bt(i,"ready");try{c.onreadystatechange=f}catch{}}}function fa(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ne(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ne(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),ut(l)}};function pa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Gh(i){const l={};i=(i.g&&2<=Ne(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(F(i[f]))continue;var c=T(i[f]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[b]||[];l[b]=R,R.push(c)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function ma(i){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,i),this.cb=rr("retryDelaySeedMs",1e4,i),this.Wa=rr("forwardChannelMaxRetries",2,i),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Xo(i&&i.concurrentRequestLimit),this.Da=new qh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ma.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,f){Qt(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Aa(this,null,this.W),Wr(this)};function ri(i){if(ga(i),i.G==3){var l=i.U++,c=ke(i.I);if(gt(c,"SID",i.K),gt(c,"RID",l),gt(c,"TYPE","terminate"),sr(i,c),l=new je(i,i.j,l),l.L=2,l.v=$r(ke(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=ba(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Lr(l)}wa(i)}function Hr(i){i.g&&(ii(i),i.g.cancel(),i.g=null)}function ga(i){Hr(i),i.u&&(u.clearTimeout(i.u),i.u=null),Kr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Wr(i){if(!Yo(i.h)&&!i.s){i.s=!0;var l=i.Ga;yt||_t(),dt||(yt(),dt=!0),j.add(l,i),i.B=0}}function Qh(i,l){return Jo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Qn(E(i.Ga,i,l),Ia(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new je(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=_a(this,b,l),c=ke(this.I),gt(c,"RID",i),gt(c,"CVER",22),this.D&&gt(c,"X-HTTP-Session-Id",this.D),sr(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(ua(R)))+"&"+l:this.m&&ni(c,this.m,R)),ei(this.h,b),this.Ua&&gt(c,"TYPE","init"),this.P?(gt(c,"$req",l),gt(c,"SID","null"),b.T=!0,Ys(b,c,null)):Ys(b,c,l),this.G=2}}else this.G==3&&(i?ya(this,i):this.i.length==0||Yo(this.h)||ya(this))};function ya(i,l){var c;l?c=l.l:c=i.U++;const f=ke(i.I);gt(f,"SID",i.K),gt(f,"RID",c),gt(f,"AID",i.T),sr(i,f),i.m&&i.o&&ni(f,i.m,i.o),c=new je(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=_a(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ei(i.h,c),Ys(c,f,l)}function sr(i,l){i.H&&B(i.H,function(c,f){gt(l,f,c)}),i.l&&ea({},function(c,f){gt(l,f,c)})}function _a(i,l,c){c=Math.min(i.i.length,c);var f=i.l?E(i.l.Na,i.l,i):null;t:{var b=i.i;let R=-1;for(;;){const M=["count="+c];R==-1?0<c?(R=b[0].g,M.push("ofs="+R)):R=0:M.push("ofs="+R);let ct=!0;for(let Bt=0;Bt<c;Bt++){let rt=b[Bt].g;const qt=b[Bt].map;if(rt-=R,0>rt)R=Math.max(0,b[Bt].g-100),ct=!1;else try{Hh(qt,M,"req"+rt+"_")}catch{f&&f(qt)}}if(ct){f=M.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,f}function va(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;yt||_t(),dt||(yt(),dt=!0),j.add(l,i),i.v=0}}function si(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Qn(E(i.Fa,i),Ia(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ea(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Qn(E(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qt(10),Hr(this),Ea(this))};function ii(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Ea(i){i.g=new je(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=ke(i.qa);gt(l,"RID","rpc"),gt(l,"SID",i.K),gt(l,"AID",i.T),gt(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&gt(l,"TO",i.ja),gt(l,"TYPE","xmlhttp"),sr(i,l),i.m&&i.o&&ni(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=$r(ke(l)),c.m=null,c.P=!0,Ko(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Hr(this),si(this),Qt(19))};function Kr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Ta(i,l){var c=null;if(i.g==l){Kr(i),ii(i),i.g=null;var f=2}else if(ti(i.h,l))c=l.D,Zo(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var b=i.B;f=Or(),bt(f,new zo(f,c)),Wr(i)}else va(i);else if(b=l.s,b==3||b==0&&0<l.X||!(f==1&&Qh(i,l)||f==2&&si(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),b){case 1:ln(i,5);break;case 4:ln(i,10);break;case 3:ln(i,6);break;default:ln(i,2)}}}function Ia(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function ln(i,l){if(i.j.info("Error code "+l),l==2){var c=E(i.fb,i),f=i.Xa;const b=!f;f=new an(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Br(f,"https"),$r(f),b?jh(f.toString(),c):zh(f.toString(),c)}else Qt(2);i.G=0,i.l&&i.l.sa(l),wa(i),ga(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Qt(2)):(this.j.info("Failed to ping google.com"),Qt(1))};function wa(i){if(i.G=0,i.ka=[],i.l){const l=ta(i.h);(l.length!=0||i.i.length!=0)&&(S(i.ka,l),S(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function Aa(i,l,c){var f=c instanceof an?ke(c):new an(c);if(f.g!="")l&&(f.g=l+"."+f.g),Ur(f,f.s);else{var b=u.location;f=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var R=new an(null);f&&Br(R,f),l&&(R.g=l),b&&Ur(R,b),c&&(R.l=c),f=R}return c=i.D,l=i.ya,c&&l&&gt(f,c,l),gt(f,"VER",i.la),sr(i,f),f}function ba(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Tt(new jr({eb:c})):new Tt(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ra(){}n=Ra.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gr(){}Gr.prototype.g=function(i,l){return new ne(i,l)};function ne(i,l){Et.call(this),this.g=new ma(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!F(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new wn(this)}C(ne,Et),ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ne.prototype.close=function(){ri(this.g)},ne.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=$(i),i=c);l.i.push(new Dh(l.Ya++,i)),l.G==3&&Wr(l)},ne.prototype.N=function(){this.g.l=null,delete this.j,ri(this.g),delete this.g,ne.aa.N.call(this)};function Sa(i){Ks.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}C(Sa,Ks);function Ca(){Gs.call(this),this.status=1}C(Ca,Gs);function wn(i){this.g=i}C(wn,Ra),wn.prototype.ua=function(){bt(this.g,"a")},wn.prototype.ta=function(i){bt(this.g,new Sa(i))},wn.prototype.sa=function(i){bt(this.g,new Ca)},wn.prototype.ra=function(){bt(this.g,"b")},Gr.prototype.createWebChannel=Gr.prototype.g,ne.prototype.send=ne.prototype.o,ne.prototype.open=ne.prototype.m,ne.prototype.close=ne.prototype.close,xu=function(){return new Gr},Vu=function(){return Or()},Pu=sn,Ri={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mr.NO_ERROR=0,Mr.TIMEOUT=8,Mr.HTTP_ERROR=6,rs=Mr,qo.COMPLETE="complete",Cu=qo,Bo.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",Et.prototype.listen=Et.prototype.K,lr=Bo,Tt.prototype.listenOnce=Tt.prototype.L,Tt.prototype.getLastError=Tt.prototype.Ka,Tt.prototype.getLastErrorCode=Tt.prototype.Ba,Tt.prototype.getStatus=Tt.prototype.Z,Tt.prototype.getResponseJson=Tt.prototype.Oa,Tt.prototype.getResponseText=Tt.prototype.oa,Tt.prototype.send=Tt.prototype.ea,Tt.prototype.setWithCredentials=Tt.prototype.Ha,Su=Tt}).apply(typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{});const nl="@firebase/firestore",rl="4.7.17";/**
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
 */class Kt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
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
 */let $n="11.9.0";/**
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
 */const fn=new Zi("@firebase/firestore");function bn(){return fn.logLevel}function L(n,...t){if(fn.logLevel<=et.DEBUG){const e=t.map(eo);fn.debug(`Firestore (${$n}): ${n}`,...e)}}function Le(n,...t){if(fn.logLevel<=et.ERROR){const e=t.map(eo);fn.error(`Firestore (${$n}): ${n}`,...e)}}function Dn(n,...t){if(fn.logLevel<=et.WARN){const e=t.map(eo);fn.warn(`Firestore (${$n}): ${n}`,...e)}}function eo(n){if(typeof n=="string")return n;try{/**
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
 */function W(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Du(n,r,e)}function Du(n,t,e){let r=`FIRESTORE (${$n}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Le(r),new Error(r)}function at(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Du(t,s,r)}function G(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends rn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ku{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Kt.UNAUTHENTICATED))}shutdown(){}}class fm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class pm{constructor(t){this.t=t,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){at(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string",31837,{l:r}),new ku(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string",2055,{h:t}),new Kt(t)}}class mm{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gm{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new mm(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ym{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jp(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){at(this.o===void 0,3512);const r=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new sl(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new sl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _m(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Nu(){return new TextEncoder}/**
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
 */class Ou{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_m(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function X(n,t){return n<t?-1:n>t?1:0}function Si(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return X(r,s);{const o=Nu(),a=vm(o.encode(il(n,e)),o.encode(il(t,e)));return a!==0?a:X(r,s)}}e+=r>65535?2:1}return X(n.length,t.length)}function il(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function vm(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return X(n[e],t[e]);return X(n.length,t.length)}function kn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const ol=-62135596800,al=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(t){return Dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*al);return new Dt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ol)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/al}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ol;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new Dt(0,0))}static max(){return new K(new Dt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ll="__name__";class be{constructor(t,e,r){e===void 0?e=0:e>t.length&&W(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&W(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return be.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof be?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=be.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return X(t.length,e.length)}static compareSegments(t,e){const r=be.isNumericId(t),s=be.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?be.extractNumericId(t).compare(be.extractNumericId(e)):Si(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ge.fromString(t.substring(4,t.length-2))}}class It extends be{construct(t,e,r){return new It(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new It(e)}static emptyPath(){return new It([])}}const Em=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends be{construct(t,e,r){return new $t(t,e,r)}static isValidIdentifier(t){return Em.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ll}static keyField(){return new $t([ll])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $t(e)}static emptyPath(){return new $t([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(It.fromString(t))}static fromName(t){return new q(It.fromString(t).popFirst(5))}static empty(){return new q(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&It.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return It.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new It(t.slice()))}}/**
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
 */const Tr=-1;function Tm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new Dt(e+1,0):new Dt(e,r));return new Ye(s,q.empty(),t)}function Im(n){return new Ye(n.readTime,n.key,Tr)}class Ye{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ye(K.min(),q.empty(),Tr)}static max(){return new Ye(K.max(),q.empty(),Tr)}}function wm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:X(n.largestBatchId,t.largestBatchId))}/**
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
 */const Am="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function jn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Am)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Rm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function zn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ks{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ks.le=-1;/**
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
 */const no=-1;function Ns(n){return n==null}function fs(n){return n===0&&1/n==-1/0}function Sm(n){return typeof n=="number"&&Number.isInteger(n)&&!fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Mu="";function Cm(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ul(t)),t=Pm(n.get(e),t);return ul(t)}function Pm(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Mu:e+="";break;default:e+=o}}return e}function ul(n){return n+Mu+""}/**
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
 */function cl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function yn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Fu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class vt{constructor(t,e){this.comparator=t,this.root=e||Ut.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zr(this.root,t,this.comparator,!0)}}class Zr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Ut.RED,this.left=s??Ut.EMPTY,this.right=o??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw W(27949);return t+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new Ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new hl(this.data.getIterator())}getIteratorFrom(t){return new hl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof kt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new kt(this.comparator);return e.data=t,e}}class hl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Te{constructor(t){this.fields=t,t.sort($t.comparator)}static empty(){return new Te([])}unionWith(t){let e=new kt($t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return kn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Lu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Lu("Invalid base64 string: "+o):o}}(t);return new jt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const Vm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(n){if(at(!!n,39018),typeof n=="string"){let t=0;const e=Vm.exec(n);if(at(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ze(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
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
 */const Bu="server_timestamp",Uu="__type__",$u="__previous_value__",ju="__local_write_time__";function ro(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Uu])===null||e===void 0?void 0:e.stringValue)===Bu}function Os(n){const t=n.mapValue.fields[$u];return ro(t)?Os(t):t}function Ir(n){const t=Je(n.mapValue.fields[ju].timestampValue);return new Dt(t.seconds,t.nanos)}/**
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
 */class xm{constructor(t,e,r,s,o,a,u,h,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const ps="(default)";class wr{constructor(t,e){this.projectId=t,this.database=e||ps}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database===ps}isEqual(t){return t instanceof wr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const zu="__type__",Dm="__max__",ts={mapValue:{}},qu="__vector__",ms="value";function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ro(n)?4:Nm(n)?9007199254740991:km(n)?10:11:W(28295,{value:n})}function Pe(n,t){if(n===t)return!0;const e=tn(n);if(e!==tn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ir(n).isEqual(Ir(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Je(s.timestampValue),u=Je(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ze(s.bytesValue).isEqual(Ze(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Rt(s.geoPointValue.latitude)===Rt(o.geoPointValue.latitude)&&Rt(s.geoPointValue.longitude)===Rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Rt(s.integerValue)===Rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Rt(s.doubleValue),u=Rt(o.doubleValue);return a===u?fs(a)===fs(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return kn(n.arrayValue.values||[],t.arrayValue.values||[],Pe);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(cl(a)!==cl(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Pe(a[h],u[h])))return!1;return!0}(n,t);default:return W(52216,{left:n})}}function Ar(n,t){return(n.values||[]).find(e=>Pe(e,t))!==void 0}function Nn(n,t){if(n===t)return 0;const e=tn(n),r=tn(t);if(e!==r)return X(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=Rt(o.integerValue||o.doubleValue),h=Rt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return dl(n.timestampValue,t.timestampValue);case 4:return dl(Ir(n),Ir(t));case 5:return Si(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Ze(o),h=Ze(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=X(u[d],h[d]);if(p!==0)return p}return X(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=X(Rt(o.latitude),Rt(a.latitude));return u!==0?u:X(Rt(o.longitude),Rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return fl(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,p;const _=o.fields||{},E=a.fields||{},A=(u=_[ms])===null||u===void 0?void 0:u.arrayValue,C=(h=E[ms])===null||h===void 0?void 0:h.arrayValue,x=X(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return x!==0?x:fl(A,C)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===ts.mapValue&&a===ts.mapValue)return 0;if(o===ts.mapValue)return 1;if(a===ts.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let _=0;_<h.length&&_<p.length;++_){const E=Si(h[_],p[_]);if(E!==0)return E;const A=Nn(u[h[_]],d[p[_]]);if(A!==0)return A}return X(h.length,p.length)}(n.mapValue,t.mapValue);default:throw W(23264,{Pe:e})}}function dl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return X(n,t);const e=Je(n),r=Je(t),s=X(e.seconds,r.seconds);return s!==0?s:X(e.nanos,r.nanos)}function fl(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Nn(e[s],r[s]);if(o)return o}return X(e.length,r.length)}function On(n){return Ci(n)}function Ci(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Je(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ze(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ci(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ci(e.fields[a])}`;return s+"}"}(n.mapValue):W(61005,{value:n})}function ss(n){switch(tn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Os(n);return t?16+ss(t):16;case 5:return 2*n.stringValue.length;case 6:return Ze(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+ss(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return yn(r.fields,(o,a)=>{s+=o.length+ss(a)}),s}(n.mapValue);default:throw W(13486,{value:n})}}function Pi(n){return!!n&&"integerValue"in n}function so(n){return!!n&&"arrayValue"in n}function pl(n){return!!n&&"nullValue"in n}function ml(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function is(n){return!!n&&"mapValue"in n}function km(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[zu])===null||e===void 0?void 0:e.stringValue)===qu}function fr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return yn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=fr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=fr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Nm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Dm}/**
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
 */class de{constructor(t){this.value=t}static empty(){return new de({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!is(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fr(e)}setAll(t){let e=$t.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=fr(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());is(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){yn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new de(fr(this.value))}}function Hu(n){const t=[];return yn(n.fields,(e,r)=>{const s=new $t([e]);if(is(r)){const o=Hu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Te(t)}/**
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
 */class Gt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Gt(t,0,K.min(),K.min(),K.min(),de.empty(),0)}static newFoundDocument(t,e,r,s){return new Gt(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new Gt(t,2,e,K.min(),K.min(),de.empty(),0)}static newUnknownDocument(t,e){return new Gt(t,3,e,K.min(),K.min(),de.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gs{constructor(t,e){this.position=t,this.inclusive=e}}function gl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=Nn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function yl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ys{constructor(t,e="asc"){this.field=t,this.dir=e}}function Om(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Wu{}class xt extends Wu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Fm(t,e,r):e==="array-contains"?new Um(t,r):e==="in"?new $m(t,r):e==="not-in"?new jm(t,r):e==="array-contains-any"?new zm(t,r):new xt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Lm(t,r):new Bm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Nn(e,this.value)):e!==null&&tn(this.value)===tn(e)&&this.matchesComparison(Nn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ve extends Wu{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Ve(t,e)}matches(t){return Ku(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ku(n){return n.op==="and"}function Gu(n){return Mm(n)&&Ku(n)}function Mm(n){for(const t of n.filters)if(t instanceof Ve)return!1;return!0}function Vi(n){if(n instanceof xt)return n.field.canonicalString()+n.op.toString()+On(n.value);if(Gu(n))return n.filters.map(t=>Vi(t)).join(",");{const t=n.filters.map(e=>Vi(e)).join(",");return`${n.op}(${t})`}}function Qu(n,t){return n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.field.isEqual(s.field)&&Pe(r.value,s.value)}(n,t):n instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Qu(a,s.filters[u]),!0):!1}(n,t):void W(19439)}function Xu(n){return n instanceof xt?function(e){return`${e.field.canonicalString()} ${e.op} ${On(e.value)}`}(n):n instanceof Ve?function(e){return e.op.toString()+" {"+e.getFilters().map(Xu).join(" ,")+"}"}(n):"Filter"}class Fm extends xt{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Lm extends xt{constructor(t,e){super(t,"in",e),this.keys=Yu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Bm extends xt{constructor(t,e){super(t,"not-in",e),this.keys=Yu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Yu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class Um extends xt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return so(e)&&Ar(e.arrayValue,this.value)}}class $m extends xt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ar(this.value.arrayValue,e)}}class jm extends xt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ar(this.value.arrayValue,e)}}class zm extends xt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!so(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ar(this.value.arrayValue,r))}}/**
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
 */class qm{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function _l(n,t=null,e=[],r=[],s=null,o=null,a=null){return new qm(n,t,e,r,s,o,a)}function io(n){const t=G(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Vi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ns(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>On(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>On(r)).join(",")),t.Ie=e}return t.Ie}function oo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Om(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!yl(n.startAt,t.startAt)&&yl(n.endAt,t.endAt)}function xi(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ms{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Hm(n,t,e,r,s,o,a,u){return new Ms(n,t,e,r,s,o,a,u)}function ao(n){return new Ms(n)}function vl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wm(n){return n.collectionGroup!==null}function pr(n){const t=G(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new kt($t.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new ys(o,r))}),e.has($t.keyField().canonicalString())||t.Ee.push(new ys($t.keyField(),r))}return t.Ee}function Se(n){const t=G(n);return t.de||(t.de=Km(t,pr(n))),t.de}function Km(n,t){if(n.limitType==="F")return _l(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ys(s.field,o)});const e=n.endAt?new gs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gs(n.startAt.position,n.startAt.inclusive):null;return _l(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Di(n,t,e){return new Ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Fs(n,t){return oo(Se(n),Se(t))&&n.limitType===t.limitType}function Ju(n){return`${io(Se(n))}|lt:${n.limitType}`}function Rn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Xu(s)).join(", ")}]`),Ns(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>On(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>On(s)).join(",")),`Target(${r})`}(Se(n))}; limitType=${n.limitType})`}function Ls(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of pr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=gl(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,pr(r),s)||r.endAt&&!function(a,u,h){const d=gl(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,pr(r),s))}(n,t)}function Gm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zu(n){return(t,e)=>{let r=!1;for(const s of pr(n)){const o=Qm(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Qm(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Nn(h,d):W(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
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
 */class _n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){yn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Fu(this.inner)}size(){return this.innerSize}}/**
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
 */const Xm=new vt(q.comparator);function Be(){return Xm}const tc=new vt(q.comparator);function ur(...n){let t=tc;for(const e of n)t=t.insert(e.key,e);return t}function ec(n){let t=tc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function hn(){return mr()}function nc(){return mr()}function mr(){return new _n(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ym=new vt(q.comparator),Jm=new kt(q.comparator);function Y(...n){let t=Jm;for(const e of n)t=t.add(e);return t}const Zm=new kt(X);function tg(){return Zm}/**
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
 */function lo(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(t)?"-0":t}}function rc(n){return{integerValue:""+n}}function eg(n,t){return Sm(t)?rc(t):lo(n,t)}/**
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
 */class Bs{constructor(){this._=void 0}}function ng(n,t,e){return n instanceof _s?function(s,o){const a={fields:{[Uu]:{stringValue:Bu},[ju]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ro(o)&&(o=Os(o)),o&&(a.fields[$u]=o),{mapValue:a}}(e,t):n instanceof br?ic(n,t):n instanceof Rr?oc(n,t):function(s,o){const a=sc(s,o),u=El(a)+El(s.Re);return Pi(a)&&Pi(s.Re)?rc(u):lo(s.serializer,u)}(n,t)}function rg(n,t,e){return n instanceof br?ic(n,t):n instanceof Rr?oc(n,t):e}function sc(n,t){return n instanceof vs?function(r){return Pi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class _s extends Bs{}class br extends Bs{constructor(t){super(),this.elements=t}}function ic(n,t){const e=ac(t);for(const r of n.elements)e.some(s=>Pe(s,r))||e.push(r);return{arrayValue:{values:e}}}class Rr extends Bs{constructor(t){super(),this.elements=t}}function oc(n,t){let e=ac(t);for(const r of n.elements)e=e.filter(s=>!Pe(s,r));return{arrayValue:{values:e}}}class vs extends Bs{constructor(t,e){super(),this.serializer=t,this.Re=e}}function El(n){return Rt(n.integerValue||n.doubleValue)}function ac(n){return so(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function sg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof br&&s instanceof br||r instanceof Rr&&s instanceof Rr?kn(r.elements,s.elements,Pe):r instanceof vs&&s instanceof vs?Pe(r.Re,s.Re):r instanceof _s&&s instanceof _s}(n.transform,t.transform)}class ig{constructor(t,e){this.version=t,this.transformResults=e}}class Oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function os(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Us{}function lc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new cc(n.key,Oe.none()):new xr(n.key,n.data,Oe.none());{const e=n.data,r=de.empty();let s=new kt($t.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new vn(n.key,r,new Te(s.toArray()),Oe.none())}}function og(n,t,e){n instanceof xr?function(s,o,a){const u=s.value.clone(),h=Il(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof vn?function(s,o,a){if(!os(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Il(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(uc(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function gr(n,t,e,r){return n instanceof xr?function(o,a,u,h){if(!os(o.precondition,a))return u;const d=o.value.clone(),p=wl(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof vn?function(o,a,u,h){if(!os(o.precondition,a))return u;const d=wl(o.fieldTransforms,h,a),p=a.data;return p.setAll(uc(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(_=>_.field))}(n,t,e,r):function(o,a,u){return os(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function ag(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=sc(r.transform,s||null);o!=null&&(e===null&&(e=de.empty()),e.set(r.field,o))}return e||null}function Tl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&kn(r,s,(o,a)=>sg(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xr extends Us{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vn extends Us{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function uc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Il(n,t,e){const r=new Map;at(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,rg(a,u,e[s]))}return r}function wl(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,ng(o,a,t))}return r}class cc extends Us{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lg extends Us{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ug{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&og(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=gr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=gr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=nc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=lc(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Y())}isEqual(t){return this.batchId===t.batchId&&kn(this.mutations,t.mutations,(e,r)=>Tl(e,r))&&kn(this.baseMutations,t.baseMutations,(e,r)=>Tl(e,r))}}class uo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){at(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return Ym}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new uo(t,e,r,s)}}/**
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
 */class cg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class hg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Pt,tt;function dg(n){switch(n){case D.OK:return W(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function hc(n){if(n===void 0)return Le("GRPC error has no .code"),D.UNKNOWN;switch(n){case Pt.OK:return D.OK;case Pt.CANCELLED:return D.CANCELLED;case Pt.UNKNOWN:return D.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return D.INTERNAL;case Pt.UNAVAILABLE:return D.UNAVAILABLE;case Pt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Pt.NOT_FOUND:return D.NOT_FOUND;case Pt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Pt.ABORTED:return D.ABORTED;case Pt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Pt.DATA_LOSS:return D.DATA_LOSS;default:return W(39323,{code:n})}}(tt=Pt||(Pt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fg=new Ge([4294967295,4294967295],0);function Al(n){const t=Nu().encode(n),e=new Ru;return e.update(t),new Uint8Array(e.digest())}function bl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ge([e,r],0),new Ge([s,o],0)]}class co{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new cr(`Invalid padding: ${e}`);if(r<0)throw new cr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new cr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new cr(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Ge.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(Ge.fromNumber(r)));return s.compare(fg)===1&&(s=new Ge([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Al(t),[r,s]=bl(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new co(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.pe===0)return;const e=Al(t),[r,s]=bl(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class cr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $s{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Dr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new $s(K.min(),s,new vt(X),Be(),Y())}}class Dr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Dr(r,e,Y(),Y(),Y())}}/**
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
 */class as{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class dc{constructor(t,e){this.targetId=t,this.Ce=e}}class fc{constructor(t,e,r=jt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Rl{constructor(){this.Fe=0,this.Me=Sl(),this.xe=jt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Y(),e=Y(),r=Y();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:W(38017,{changeType:o})}}),new Dr(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Sl()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,at(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class pg{constructor(t){this.ze=t,this.je=new Map,this.He=Be(),this.Je=es(),this.Ye=es(),this.Ze=new vt(X)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:W(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(xi(o))if(r===0){const a=new q(o.path);this.tt(e,a,Gt.newNoDocument(a,K.min()))}else at(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const u=this.ct(t),h=u?this.lt(u,t,a):1;if(h!==0){this.st(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=Ze(r).toUint8Array()}catch(h){if(h instanceof Lu)return Dn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new co(a,s,o)}catch(h){return Dn(h instanceof cr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.pe===0?null:u}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&xi(u.target)){const h=new q(u.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Gt.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=Y();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new $s(t,e,this.Ze,this.He,r);return this.He=Be(),this.Je=es(),this.Ye=es(),this.Ze=new vt(X),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Rl,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new kt(X),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new kt(X),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Rl),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function es(){return new vt(q.comparator)}function Sl(){return new vt(q.comparator)}const mg={asc:"ASCENDING",desc:"DESCENDING"},gg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yg={and:"AND",or:"OR"};class _g{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ki(n,t){return n.useProto3Json||Ns(t)?t:{value:t}}function Es(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function vg(n,t){return Es(n,t.toTimestamp())}function Ce(n){return at(!!n,49232),K.fromTimestamp(function(e){const r=Je(e);return new Dt(r.seconds,r.nanos)}(n))}function ho(n,t){return Ni(n,t).canonicalString()}function Ni(n,t){const e=function(s){return new It(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function mc(n){const t=It.fromString(n);return at(Ec(t),10190,{key:t.toString()}),t}function Oi(n,t){return ho(n.databaseId,t.path)}function fi(n,t){const e=mc(t);if(e.get(1)!==n.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(yc(e))}function gc(n,t){return ho(n.databaseId,t)}function Eg(n){const t=mc(n);return t.length===4?It.emptyPath():yc(t)}function Mi(n){return new It(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yc(n){return at(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Cl(n,t,e){return{name:Oi(n,t),fields:e.value.mapValue.fields}}function Tg(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(at(p===void 0||typeof p=="string",58123),jt.fromBase64String(p||"")):(at(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),jt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const p=d.code===void 0?D.UNKNOWN:hc(d.code);return new z(p,d.message||"")}(a);e=new fc(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=fi(n,r.document.name),o=Ce(r.document.updateTime),a=r.document.createTime?Ce(r.document.createTime):K.min(),u=new de({mapValue:{fields:r.document.fields}}),h=Gt.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];e=new as(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=fi(n,r.document),o=r.readTime?Ce(r.readTime):K.min(),a=Gt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new as([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=fi(n,r.document),o=r.removedTargetIds||[];e=new as([],o,s,null)}else{if(!("filter"in t))return W(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new hg(s,o),u=r.targetId;e=new dc(u,a)}}return e}function Ig(n,t){let e;if(t instanceof xr)e={update:Cl(n,t.key,t.value)};else if(t instanceof cc)e={delete:Oi(n,t.key)};else if(t instanceof vn)e={update:Cl(n,t.key,t.data),updateMask:xg(t.fieldMask)};else{if(!(t instanceof lg))return W(16599,{ft:t.type});e={verify:Oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof _s)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof br)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof vs)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw W(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:vg(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:W(27497)}(n,t.precondition)),e}function wg(n,t){return n&&n.length>0?(at(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Ce(s.updateTime):Ce(o);return a.isEqual(K.min())&&(a=Ce(o)),new ig(a,s.transformResults||[])}(e,t))):[]}function Ag(n,t){return{documents:[gc(n,t.path)]}}function bg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=gc(n,s);const o=function(d){if(d.length!==0)return vc(Ve.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:Sn(E.field),direction:Cg(E.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ki(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:s}}function Rg(n){let t=Eg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){at(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(_){const E=_c(_);return E instanceof Ve&&Gu(E)?E.getFilters():[E]}(e.where));let a=[];e.orderBy&&(a=function(_){return _.map(E=>function(C){return new ys(Cn(C.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(E))}(e.orderBy));let u=null;e.limit&&(u=function(_){let E;return E=typeof _=="object"?_.value:_,Ns(E)?null:E}(e.limit));let h=null;e.startAt&&(h=function(_){const E=!!_.before,A=_.values||[];return new gs(A,E)}(e.startAt));let d=null;return e.endAt&&(d=function(_){const E=!_.before,A=_.values||[];return new gs(A,E)}(e.endAt)),Hm(t,s,a,o,u,"F",h,d)}function Sg(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function _c(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Cn(e.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cn(e.unaryFilter.field);return xt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Cn(e.unaryFilter.field);return xt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Cn(e.unaryFilter.field);return xt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(e){return xt.create(Cn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ve.create(e.compositeFilter.filters.map(r=>_c(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(e.compositeFilter.op))}(n):W(30097,{filter:n})}function Cg(n){return mg[n]}function Pg(n){return gg[n]}function Vg(n){return yg[n]}function Sn(n){return{fieldPath:n.canonicalString()}}function Cn(n){return $t.fromServerFormat(n.fieldPath)}function vc(n){return n instanceof xt?function(e){if(e.op==="=="){if(ml(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NAN"}};if(pl(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ml(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NOT_NAN"}};if(pl(e.value))return{unaryFilter:{field:Sn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sn(e.field),op:Pg(e.op),value:e.value}}}(n):n instanceof Ve?function(e){const r=e.getFilters().map(s=>vc(s));return r.length===1?r[0]:{compositeFilter:{op:Vg(e.op),filters:r}}}(n):W(54877,{filter:n})}function xg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ec(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class He{constructor(t,e,r,s,o=K.min(),a=K.min(),u=jt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new He(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Dg{constructor(t){this.wt=t}}function kg(n){const t=Rg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Di(t,t.limit,"L"):t}/**
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
 */class Ng{constructor(){this.Cn=new Og}addToCollectionParentIndex(t,e){return this.Cn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Ye.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Ye.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Og{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new kt(It.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new kt(It.comparator)).toArray()}}/**
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
 */const Pl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Tc=41943040;class Jt{static withCacheSize(t){return new Jt(t,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(Tc,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class Mn{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Mn(0)}static lr(){return new Mn(-1)}}/**
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
 */const Vl="LruGarbageCollector",Mg=1048576;function xl([n,t],[e,r]){const s=X(n,e);return s===0?X(t,r):s}class Fg{constructor(t){this.Er=t,this.buffer=new kt(xl),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();xl(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Lg{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){L(Vl,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){zn(e)?L(Vl,"Ignoring IndexedDB error during garbage collection: ",e):await jn(e)}await this.mr(3e5)})}}class Bg{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(ks.le);const r=new Fg(e);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Pl)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pl):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,s,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,a=Date.now(),this.nthSequenceNumber(t,s))).next(_=>(r=_,u=Date.now(),this.removeTargets(t,r,e))).next(_=>(o=_,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(_=>(d=Date.now(),bn()<=et.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${_} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:_})))}}function Ug(n,t){return new Bg(n,t)}/**
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
 */class $g{constructor(){this.changes=new _n(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class jg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class zg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&gr(r.mutation,s,Te.empty(),Dt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Y()){const s=hn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=ur();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=hn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Y()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Be();const a=mr(),u=function(){return mr()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof vn)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),gr(p.mutation,d,p.mutation.getFieldMask(),Dt.now())):a.set(d.key,Te.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var _;return u.set(d,new jg(p,(_=a.get(d))!==null&&_!==void 0?_:null))}),u))}recalculateAndSaveOverlays(t,e){const r=mr();let s=new vt((a,u)=>a-u),o=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Te.empty();p=u.applyToLocalView(d,p),r.set(h,p);const _=(s.get(u.batchId)||Y()).add(h);s=s.insert(u.batchId,_)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,_=nc();p.forEach(E=>{if(!o.has(E)){const A=lc(e.get(E),r.get(E));A!==null&&_.set(E,A),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,_))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(hn());let u=Tr,h=o;return a.next(d=>P.forEach(d,(p,_)=>(u<_.largestBatchId&&(u=_.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(E=>{h=h.insert(p,E)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Y())).next(p=>({batchId:u,changes:ec(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=ur();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=ur();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const d=function(_,E){return new Ms(E,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((_,E)=>{a=a.insert(_,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Gt.newInvalidDocument(p)))});let u=ur();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&gr(p.mutation,d,Te.empty(),Dt.now()),Ls(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class qg{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return P.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ce(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:kg(s.bundledQuery),readTime:Ce(s.readTime)}}(e)),P.resolve()}}/**
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
 */class Hg{constructor(){this.overlays=new vt(q.comparator),this.Qr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=hn();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=hn(),o=e.length+1,a=new q(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new vt((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=hn(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=hn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return P.resolve(u)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new cg(e,r));let o=this.Qr.get(e);o===void 0&&(o=Y(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
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
 */class Wg{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class fo{constructor(){this.$r=new kt(Mt.Ur),this.Kr=new kt(Mt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new Mt(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new Mt(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new q(new It([])),r=new Mt(e,t),s=new Mt(e,t+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new q(new It([])),r=new Mt(e,t),s=new Mt(e,t+1);let o=Y();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Mt(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Mt{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return q.comparator(t.key,e.key)||X(t.Zr,e.Zr)}static Wr(t,e){return X(t.Zr,e.Zr)||q.comparator(t.key,e.key)}}/**
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
 */class Kg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new kt(Mt.Ur)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ug(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Xr=this.Xr.add(new Mt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ti(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?no:this.nr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Mt(e,0),s=new Mt(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const u=this.ei(a.Zr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new kt(X);return e.forEach(s=>{const o=new Mt(s,0),a=new Mt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{r=r.add(u.Zr)})}),P.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const a=new Mt(new q(o),0);let u=new kt(X);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Zr)),!0)},a),P.resolve(this.ni(u))}ni(t){const e=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){at(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return P.forEach(e.mutations,s=>{const o=new Mt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new Mt(e,0),s=this.Xr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Gg{constructor(t){this.ii=t,this.docs=function(){return new vt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(e))}getEntries(t,e){let r=Be();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Gt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Be();const a=e.path,u=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||wm(Im(p),r)<=0||(s.has(p.key)||Ls(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){W(9500)}si(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Qg(this)}getSize(t){return P.resolve(this.size)}}class Qg extends $g{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
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
 */class Xg{constructor(t){this.persistence=t,this.oi=new _n(e=>io(e),oo),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this._i=0,this.ai=new fo,this.targetCount=0,this.ui=Mn.cr()}forEachTarget(t,e){return this.oi.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),P.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Mn(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Tr(e),P.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.ai.containsKey(e))}}/**
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
 */class Ic{constructor(t,e){this.ci={},this.overlays={},this.li=new ks(0),this.hi=!1,this.hi=!0,this.Pi=new Wg,this.referenceDelegate=t(this),this.Ti=new Xg(this),this.indexManager=new Ng,this.remoteDocumentCache=function(s){return new Gg(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Dg(e),this.Ei=new qg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Kg(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new Yg(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return P.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class Yg extends bm{constructor(t){super(),this.currentSequenceNumber=t}}class po{constructor(t){this.persistence=t,this.Vi=new fo,this.mi=null}static fi(t){return new po(t)}get gi(){if(this.mi)return this.mi;throw W(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.gi,r=>{const s=q.fromPath(r);return this.pi(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return P.or([()=>P.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Ts{constructor(t,e){this.persistence=t,this.yi=new _n(r=>Cm(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ug(this,e)}static fi(t,e){return new Ts(t,e)}di(){}Ai(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return P.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),P.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ss(t.data.value)),e}Dr(t,e,r){return P.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class mo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ds=r,this.As=s}static Rs(t,e){let r=Y(),s=Y();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new mo(t,e.fromCache,r,s)}}/**
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
 */class Jg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Zg{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Gf()?8:Rm(Hf())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Jg;return this.Ss(t,e,a).next(u=>{if(o.result=u,this.fs)return this.Ds(t,e,a,u.size)})}).next(()=>o.result)}Ds(t,e,r,s){return r.documentReadCount<this.gs?(bn()<=et.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Rn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),P.resolve()):(bn()<=et.DEBUG&&L("QueryEngine","Query:",Rn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(bn()<=et.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Rn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Se(e))):P.resolve())}ws(t,e){if(vl(e))return P.resolve(null);let r=Se(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Di(e,null,"F"),r=Se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Y(...o);return this.ys.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.vs(e,u);return this.Cs(e,d,a,h.readTime)?this.ws(t,Di(e,null,"F")):this.Fs(t,d,e,h)}))})))}bs(t,e,r,s){return vl(e)||s.isEqual(K.min())?P.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,s)?P.resolve(null):(bn()<=et.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rn(e)),this.Fs(t,a,e,Tm(s,Tr)).next(u=>u))})}vs(t,e){let r=new kt(Zu(t));return e.forEach((s,o)=>{Ls(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return bn()<=et.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Rn(e)),this.ys.getDocumentsMatchingQuery(t,e,Ye.min(),r)}Fs(t,e,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const go="LocalStore",ty=3e8;class ey{constructor(t,e,r,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new vt(X),this.Os=new _n(o=>io(o),oo),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zg(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function ny(n,t,e,r){return new ey(n,t,e,r)}async function wc(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Y();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:u}))})})}function ry(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const _=d.batch,E=_.keys();let A=P.resolve();return E.forEach(C=>{A=A.next(()=>p.getEntry(h,C)).next(x=>{const S=d.docVersions.get(C);at(S!==null,48541),x.version.compareTo(S)<0&&(_.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(h,_))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Y();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Ac(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function sy(n,t){const e=G(n),r=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const u=[];t.targetChanges.forEach((p,_)=>{const E=s.get(_);if(!E)return;u.push(e.Ti.removeMatchingKeys(o,p.removedDocuments,_).next(()=>e.Ti.addMatchingKeys(o,p.addedDocuments,_)));let A=E.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(_)!==null?A=A.withResumeToken(jt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(_,A),function(x,S,k){return x.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=ty?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(E,A,p)&&u.push(e.Ti.updateTargetData(o,A))});let h=Be(),d=Y();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(iy(o,a,t.documentUpdates).next(p=>{h=p.qs,d=p.Qs})),!r.isEqual(K.min())){const p=e.Ti.getLastRemoteSnapshotVersion(o).next(_=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.xs=s,o))}function iy(n,t,e){let r=Y(),s=Y();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Be();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(K.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):L(go,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:s}})}function oy(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=no),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ay(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ti.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Ti.allocateTargetId(r).next(a=>(s=new He(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function Fi(n,t,e){const r=G(n),s=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!zn(a))throw a;L(go,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function Dl(n,t,e){const r=G(n);let s=K.min(),o=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const _=G(h),E=_.Os.get(p);return E!==void 0?P.resolve(_.xs.get(E)):_.Ti.getTargetData(d,p)}(r,a,Se(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:Y())).next(u=>(ly(r,Gm(t),u),{documents:u,$s:o})))}function ly(n,t,e){let r=n.Ns.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class kl{constructor(){this.activeTargetIds=tg()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class uy{constructor(){this.xo=new kl,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new kl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class cy{No(t){}shutdown(){}}/**
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
 */const Nl="ConnectivityMonitor";class Ol{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){L(Nl,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){L(Nl,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ns=null;function Li(){return ns===null?ns=function(){return 268435456+Math.round(2147483648*Math.random())}():ns++,"0x"+ns.toString(16)}/**
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
 */const pi="RestConnection",hy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dy{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===ps?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,e,r,s,o){const a=Li(),u=this.jo(t,e.toUriEncodedString());L(pi,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:d}=new URL(u),p=Ji(d);return this.Jo(t,u,h,r,p).then(_=>(L(pi,`Received RPC '${t}' ${a}: `,_),_),_=>{throw Dn(pi,`RPC '${t}' ${a} failed with error: `,_,"url: ",u,"request:",r),_})}Yo(t,e,r,s,o,a){return this.zo(t,e,r,s,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$n}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const r=hy[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
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
 */class fy{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const Wt="WebChannelConnection";class py extends dy{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=Li();return new Promise((u,h)=>{const d=new Su;d.setWithCredentials(!0),d.listenOnce(Cu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case rs.NO_ERROR:const _=d.getResponseJson();L(Wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(_)),u(_);break;case rs.TIMEOUT:L(Wt,`RPC '${t}' ${a} timed out`),h(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case rs.HTTP_ERROR:const E=d.getStatus();if(L(Wt,`RPC '${t}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const x=function(k){const F=k.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(F)>=0?F:D.UNKNOWN}(C.status);h(new z(x,C.message))}else h(new z(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new z(D.UNAVAILABLE,"Connection failed."));break;default:W(9055,{h_:t,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{L(Wt,`RPC '${t}' ${a} completed.`)}});const p=JSON.stringify(s);L(Wt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",p,r,15)})}I_(t,e,r){const s=Li(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=xu(),u=Vu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");L(Wt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const _=a.createWebChannel(p,h);this.E_(_);let E=!1,A=!1;const C=new fy({Zo:S=>{A?L(Wt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(E||(L(Wt,`Opening RPC '${t}' stream ${s} transport.`),_.open(),E=!0),L(Wt,`RPC '${t}' stream ${s} sending:`,S),_.send(S))},Xo:()=>_.close()}),x=(S,k,F)=>{S.listen(k,V=>{try{F(V)}catch(N){setTimeout(()=>{throw N},0)}})};return x(_,lr.EventType.OPEN,()=>{A||(L(Wt,`RPC '${t}' stream ${s} transport opened.`),C.__())}),x(_,lr.EventType.CLOSE,()=>{A||(A=!0,L(Wt,`RPC '${t}' stream ${s} transport closed`),C.u_(),this.d_(_))}),x(_,lr.EventType.ERROR,S=>{A||(A=!0,Dn(Wt,`RPC '${t}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),C.u_(new z(D.UNAVAILABLE,"The operation could not be completed")))}),x(_,lr.EventType.MESSAGE,S=>{var k;if(!A){const F=S.data[0];at(!!F,16349);const V=F,N=(V==null?void 0:V.error)||((k=V[0])===null||k===void 0?void 0:k.error);if(N){L(Wt,`RPC '${t}' stream ${s} received error:`,N);const U=N.status;let B=function(y){const v=Pt[y];if(v!==void 0)return hc(v)}(U),I=N.message;B===void 0&&(B=D.INTERNAL,I="Unknown error status: "+U+" with message "+N.message),A=!0,C.u_(new z(B,I)),_.close()}else L(Wt,`RPC '${t}' stream ${s} received:`,F),C.c_(F)}}),x(u,Pu.STAT_EVENT,S=>{S.stat===Ri.PROXY?L(Wt,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===Ri.NOPROXY&&L(Wt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function mi(){return typeof document<"u"?document:null}/**
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
 */function js(n){return new _g(n,!0)}/**
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
 */class bc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Ml="PersistentStream";class Rc{constructor(t,e,r,s,o,a,u,h){this.xi=t,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new bc(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Le(e.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===e&&this.z_(r,s)},r=>{t(()=>{const s=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return L(Ml,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(L(Ml,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class my extends Rc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=Tg(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?Ce(a.readTime):K.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=Mi(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=xi(h)?{documents:Ag(o,h)}:{query:bg(o,h).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=pc(o,a.resumeToken);const d=ki(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){u.readTime=Es(o,a.snapshotVersion.toTimestamp());const d=ki(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=Sg(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=Mi(this.serializer),e.removeTarget=t,this.Q_(e)}}class gy extends Rc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return at(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){at(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=wg(t.writeResults,t.commitTime),r=Ce(t.commitTime);return this.listener.ra(r,e)}ia(){const t={};t.database=Mi(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ig(this.serializer,r))};this.Q_(e)}}/**
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
 */class yy{}class _y extends yy{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,Ni(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(D.UNKNOWN,o.toString())})}Yo(t,e,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(t,Ni(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(D.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class vy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Le(e),this.ua=!1):L("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const pn="RemoteStore";class Ey{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{En(this)&&(L(pn,"Restarting streams for network reachability change."),await async function(h){const d=G(h);d.da.add(4),await kr(d),d.Va.set("Unknown"),d.da.delete(4),await zs(d)}(this))})}),this.Va=new vy(r,s)}}async function zs(n){if(En(n))for(const t of n.Aa)await t(!0)}async function kr(n){for(const t of n.Aa)await t(!1)}function Sc(n,t){const e=G(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Eo(e)?vo(e):qn(e).N_()&&_o(e,t))}function yo(n,t){const e=G(n),r=qn(e);e.Ea.delete(t),r.N_()&&Cc(e,t),e.Ea.size===0&&(r.N_()?r.k_():En(e)&&e.Va.set("Unknown"))}function _o(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qn(n).Z_(t)}function Cc(n,t){n.ma.Ke(t),qn(n).X_(t)}function vo(n){n.ma=new pg({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.Va.ca()}function Eo(n){return En(n)&&!qn(n).O_()&&n.Ea.size>0}function En(n){return G(n).da.size===0}function Pc(n){n.ma=void 0}async function Ty(n){n.Va.set("Online")}async function Iy(n){n.Ea.forEach((t,e)=>{_o(n,t)})}async function wy(n,t){Pc(n),Eo(n)?(n.Va.Pa(t),vo(n)):n.Va.set("Unknown")}async function Ay(n,t,e){if(n.Va.set("Online"),t instanceof fc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ea.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.ma.removeTarget(u))}(n,t)}catch(r){L(pn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Is(n,r)}else if(t instanceof as?n.ma.Xe(t):t instanceof dc?n.ma.ot(t):n.ma.nt(t),!e.isEqual(K.min()))try{const r=await Ac(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.ma.It(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ea.get(d);p&&o.Ea.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.Ea.get(h);if(!p)return;o.Ea.set(h,p.withResumeToken(jt.EMPTY_BYTE_STRING,p.snapshotVersion)),Cc(o,h);const _=new He(p.target,h,d,p.sequenceNumber);_o(o,_)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){L(pn,"Failed to raise snapshot:",r),await Is(n,r)}}async function Is(n,t,e){if(!zn(t))throw t;n.da.add(1),await kr(n),n.Va.set("Offline"),e||(e=()=>Ac(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(pn,"Retrying IndexedDB access"),await e(),n.da.delete(1),await zs(n)})}function Vc(n,t){return t().catch(e=>Is(n,e,t))}async function qs(n){const t=G(n),e=en(t);let r=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:no;for(;by(t);)try{const s=await oy(t.localStore,r);if(s===null){t.Ia.length===0&&e.k_();break}r=s.batchId,Ry(t,s)}catch(s){await Is(t,s)}xc(t)&&Dc(t)}function by(n){return En(n)&&n.Ia.length<10}function Ry(n,t){n.Ia.push(t);const e=en(n);e.N_()&&e.ea&&e.ta(t.mutations)}function xc(n){return En(n)&&!en(n).O_()&&n.Ia.length>0}function Dc(n){en(n).start()}async function Sy(n){en(n).ia()}async function Cy(n){const t=en(n);for(const e of n.Ia)t.ta(e.mutations)}async function Py(n,t,e){const r=n.Ia.shift(),s=uo.from(r,t,e);await Vc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await qs(n)}async function Vy(n,t){t&&en(n).ea&&await async function(r,s){if(function(a){return dg(a)&&a!==D.ABORTED}(s.code)){const o=r.Ia.shift();en(r).L_(),await Vc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await qs(r)}}(n,t),xc(n)&&Dc(n)}async function Fl(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),L(pn,"RemoteStore received new credentials");const r=En(e);e.da.add(3),await kr(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await zs(e)}async function xy(n,t){const e=G(n);t?(e.da.delete(2),await zs(e)):t||(e.da.add(2),await kr(e),e.Va.set("Unknown"))}function qn(n){return n.fa||(n.fa=function(e,r,s){const o=G(e);return o.oa(),new my(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:Ty.bind(null,n),n_:Iy.bind(null,n),i_:wy.bind(null,n),Y_:Ay.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),Eo(n)?vo(n):n.Va.set("Unknown")):(await n.fa.stop(),Pc(n))})),n.fa}function en(n){return n.ga||(n.ga=function(e,r,s){const o=G(e);return o.oa(),new gy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Sy.bind(null,n),i_:Vy.bind(null,n),na:Cy.bind(null,n),ra:Py.bind(null,n)}),n.Aa.push(async t=>{t?(n.ga.L_(),await qs(n)):(await n.ga.stop(),n.Ia.length>0&&(L(pn,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
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
 */class To{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new To(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Io(n,t){if(Le("AsyncQueue",`${t}: ${n}`),zn(n))return new z(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Pn{static emptySet(t){return new Pn(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=ur(),this.sortedSet=new vt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Pn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Ll{constructor(){this.pa=new vt(q.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):W(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Fn{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Fn(t,e,Pn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Fs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Dy{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class ky{constructor(){this.queries=Bl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=G(e),o=s.queries;s.queries=Bl(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new z(D.ABORTED,"Firestore shutting down"))}}function Bl(){return new _n(n=>Ju(n),Fs)}async function Ny(n,t){const e=G(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Da()&&t.va()&&(r=2):(o=new Dy,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(s,!0);break;case 1:o.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Io(a,`Initialization of query '${Rn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&wo(e)}async function Oy(n,t){const e=G(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.va()?0:1:!o.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function My(n,t){const e=G(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.Sa)u.Ma(s)&&(r=!0);a.ba=s}}r&&wo(e)}function Fy(n,t,e){const r=G(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function wo(n){n.Ca.forEach(t=>{t.next()})}var Bi,Ul;(Ul=Bi||(Bi={})).xa="default",Ul.Cache="cache";class Ly{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Fn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=Fn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Bi.Cache}}/**
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
 */class kc{constructor(t){this.key=t}}class Nc{constructor(t){this.key=t}}class By{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Y(),this.mutatedKeys=Y(),this.Za=Zu(t),this.Xa=new Pn(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new Ll,s=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,_)=>{const E=s.get(p),A=Ls(this.query,_)?_:null,C=!!E&&this.mutatedKeys.has(E.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let S=!1;E&&A?E.data.isEqual(A.data)?C!==x&&(r.track({type:3,doc:A}),S=!0):this.ru(E,A)||(r.track({type:2,doc:A}),S=!0,(h&&this.Za(A,h)>0||d&&this.Za(A,d)<0)&&(u=!0)):!E&&A?(r.track({type:0,doc:A}),S=!0):E&&!A&&(r.track({type:1,doc:E}),S=!0,(h||d)&&(u=!0)),S&&(A?(a=a.add(A),o=x?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Xa:a,nu:r,Cs:u,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((p,_)=>function(A,C){const x=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:S})}};return x(A)-x(C)}(p.type,_.type)||this.Za(p.doc,_.doc)),this.iu(r),s=s!=null&&s;const u=e&&!s?this.su():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new Fn(this.query,t.Xa,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:u}:{ou:u}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ll,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=Y(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new Nc(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new kc(r))}),e}au(t){this.Ha=t.$s,this.Ya=Y();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return Fn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Ao="SyncEngine";class Uy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class $y{constructor(t){this.key=t,this.cu=!1}}class jy{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new _n(u=>Ju(u),Fs),this.Pu=new Map,this.Tu=new Set,this.Iu=new vt(q.comparator),this.Eu=new Map,this.du=new fo,this.Au={},this.Ru=new Map,this.Vu=Mn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function zy(n,t,e=!0){const r=Uc(n);let s;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await Oc(r,t,e,!0),s}async function qy(n,t){const e=Uc(n);await Oc(e,t,!0,!1)}async function Oc(n,t,e,r){const s=await ay(n.localStore,Se(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Hy(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Sc(n.remoteStore,s),u}async function Hy(n,t,e,r,s){n.fu=(_,E,A)=>async function(x,S,k,F){let V=S.view.tu(k);V.Cs&&(V=await Dl(x.localStore,S.query,!1).then(({documents:I})=>S.view.tu(I,V)));const N=F&&F.targetChanges.get(S.targetId),U=F&&F.targetMismatches.get(S.targetId)!=null,B=S.view.applyChanges(V,x.isPrimaryClient,N,U);return jl(x,S.targetId,B.ou),B.snapshot}(n,_,E,A);const o=await Dl(n.localStore,t,!0),a=new By(t,o.$s),u=a.tu(o.documents),h=Dr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);jl(n,e,d.ou);const p=new Uy(t,e,a);return n.hu.set(t,p),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),d.snapshot}async function Wy(n,t,e){const r=G(n),s=r.hu.get(t),o=r.Pu.get(s.targetId);if(o.length>1)return r.Pu.set(s.targetId,o.filter(a=>!Fs(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&yo(r.remoteStore,s.targetId),Ui(r,s.targetId)}).catch(jn)):(Ui(r,s.targetId),await Fi(r.localStore,s.targetId,!0))}async function Ky(n,t){const e=G(n),r=e.hu.get(t),s=e.Pu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),yo(e.remoteStore,r.targetId))}async function Gy(n,t,e){const r=e_(n);try{const s=await function(a,u){const h=G(a),d=Dt.now(),p=u.reduce((A,C)=>A.add(C.key),Y());let _,E;return h.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=Be(),x=Y();return h.Bs.getEntries(A,p).next(S=>{C=S,C.forEach((k,F)=>{F.isValidDocument()||(x=x.add(k))})}).next(()=>h.localDocuments.getOverlayedDocuments(A,C)).next(S=>{_=S;const k=[];for(const F of u){const V=ag(F,_.get(F.key).overlayedDocument);V!=null&&k.push(new vn(F.key,V,Hu(V.value.mapValue),Oe.exists(!0)))}return h.mutationQueue.addMutationBatch(A,d,k,u)}).next(S=>{E=S;const k=S.applyToLocalDocumentSet(_,x);return h.documentOverlayCache.saveOverlays(A,S.batchId,k)})}).then(()=>({batchId:E.batchId,changes:ec(_)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Au[a.currentUser.toKey()];d||(d=new vt(X)),d=d.insert(u,h),a.Au[a.currentUser.toKey()]=d}(r,s.batchId,e),await Nr(r,s.changes),await qs(r.remoteStore)}catch(s){const o=Io(s,"Failed to persist write");e.reject(o)}}async function Mc(n,t){const e=G(n);try{const r=await sy(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?at(a.cu,14607):s.removedDocuments.size>0&&(at(a.cu,42227),a.cu=!1))}),await Nr(e,r,t)}catch(r){await jn(r)}}function $l(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.hu.forEach((o,a)=>{const u=a.view.Fa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=G(a);h.onlineState=u;let d=!1;h.queries.forEach((p,_)=>{for(const E of _.Sa)E.Fa(u)&&(d=!0)}),d&&wo(h)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Qy(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new vt(q.comparator);a=a.insert(o,Gt.newNoDocument(o,K.min()));const u=Y().add(o),h=new $s(K.min(),new Map,new vt(X),a,u);await Mc(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(t),bo(r)}else await Fi(r.localStore,t,!1).then(()=>Ui(r,t,e)).catch(jn)}async function Xy(n,t){const e=G(n),r=t.batch.batchId;try{const s=await ry(e.localStore,t);Lc(e,r,null),Fc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Nr(e,s)}catch(s){await jn(s)}}async function Yy(n,t,e){const r=G(n);try{const s=await function(a,u){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(_=>(at(_!==null,37113),p=_.keys(),h.mutationQueue.removeMutationBatch(d,_))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Lc(r,t,e),Fc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Nr(r,s)}catch(s){await jn(s)}}function Fc(n,t){(n.Ru.get(t)||[]).forEach(e=>{e.resolve()}),n.Ru.delete(t)}function Lc(n,t,e){const r=G(n);let s=r.Au[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Au[r.currentUser.toKey()]=s}}function Ui(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||Bc(n,r)})}function Bc(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(yo(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),bo(n))}function jl(n,t,e){for(const r of e)r instanceof kc?(n.du.addReference(r.key,t),Jy(n,r)):r instanceof Nc?(L(Ao,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||Bc(n,r.key)):W(19791,{pu:r})}function Jy(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(L(Ao,"New document in limbo: "+e),n.Tu.add(r),bo(n))}function bo(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new q(It.fromString(t)),r=n.Vu.next();n.Eu.set(r,new $y(e)),n.Iu=n.Iu.insert(e,r),Sc(n.remoteStore,new He(Se(ao(e.path)),r,"TargetPurposeLimboResolution",ks.le))}}async function Nr(n,t,e){const r=G(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((u,h)=>{a.push(r.fu(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const _=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){s.push(d);const _=mo.Rs(h.targetId,d);o.push(_)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(h,d){const p=G(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>P.forEach(d,E=>P.forEach(E.ds,A=>p.persistence.referenceDelegate.addReference(_,E.targetId,A)).next(()=>P.forEach(E.As,A=>p.persistence.referenceDelegate.removeReference(_,E.targetId,A)))))}catch(_){if(!zn(_))throw _;L(go,"Failed to update sequence numbers: "+_)}for(const _ of d){const E=_.targetId;if(!_.fromCache){const A=p.xs.get(E),C=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(C);p.xs=p.xs.insert(E,x)}}}(r.localStore,o))}async function Zy(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){L(Ao,"User change. New user:",t.toKey());const r=await wc(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(u=>{u.forEach(h=>{h.reject(new z(D.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Nr(e,r.ks)}}function t_(n,t){const e=G(n),r=e.Eu.get(t);if(r&&r.cu)return Y().add(r.key);{let s=Y();const o=e.Pu.get(t);if(!o)return s;for(const a of o){const u=e.hu.get(a);s=s.unionWith(u.view.eu)}return s}}function Uc(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=t_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qy.bind(null,t),t.lu.Y_=My.bind(null,t.eventManager),t.lu.gu=Fy.bind(null,t.eventManager),t}function e_(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yy.bind(null,t),t}class ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=js(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return ny(this.persistence,new Zg,t.initialUser,this.serializer)}Su(t){return new Ic(po.fi,this.serializer)}bu(t){return new uy}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ws.provider={build:()=>new ws};class n_ extends ws{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){at(this.persistence.referenceDelegate instanceof Ts,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Lg(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Ic(r=>Ts.fi(r,e),this.serializer)}}class $i{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$l(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zy.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ky}()}createDatastore(t){const e=js(t.databaseInfo.databaseId),r=function(o){return new py(o)}(t.databaseInfo);return function(o,a,u,h){return new _y(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new Ey(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>$l(this.syncEngine,e,0),function(){return Ol.C()?new Ol:new cy}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,p){const _=new jy(s,o,a,u,h,d);return p&&(_.mu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=G(s);L(pn,"RemoteStore shutting down."),o.da.add(5),await kr(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}$i.provider={build:()=>new $i};/**
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
 *//**
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
 */class r_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Le("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const nn="FirestoreClient";class s_{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=Ou.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{L(nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Io(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function gi(n,t){n.asyncQueue.verifyOperationInProgress(),L(nn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function zl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await i_(n);L(nn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Fl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Fl(t.remoteStore,s)),n._onlineComponents=t}async function i_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(nn,"Using user provided OfflineComponentProvider");try{await gi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Dn("Error using user provided cache. Falling back to memory cache: "+e),await gi(n,new ws)}}else L(nn,"Using default OfflineComponentProvider"),await gi(n,new n_(void 0));return n._offlineComponents}async function $c(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(nn,"Using user provided OnlineComponentProvider"),await zl(n,n._uninitializedComponentsProvider._online)):(L(nn,"Using default OnlineComponentProvider"),await zl(n,new $i))),n._onlineComponents}function o_(n){return $c(n).then(t=>t.syncEngine)}async function a_(n){const t=await $c(n),e=t.eventManager;return e.onListen=zy.bind(null,t.syncEngine),e.onUnlisten=Wy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=qy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ky.bind(null,t.syncEngine),e}function l_(n,t,e={}){const r=new Qe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new r_({next:E=>{p.xu(),a.enqueueAndForget(()=>Oy(o,_));const A=E.docs.has(u);!A&&E.fromCache?d.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&E.fromCache&&h&&h.source==="server"?d.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),_=new Ly(ao(u.path),p,{includeMetadataChanges:!0,Qa:!0});return Ny(o,_)}(await a_(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function jc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ql=new Map;/**
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
 */function u_(n,t,e){if(!e)throw new z(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function c_(n,t,e,r){if(t===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Hl(n){if(!q.isDocumentKey(n))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function Sr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ro(n);throw new z(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const zc="firestore.googleapis.com",Wl=!0;class Kl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zc,this.ssl=Wl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Wl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Tc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Mg)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}c_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class So{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dm;switch(r.type){case"firstParty":return new gm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ql.get(e);r&&(L("ComponentProvider","Removing Datastore"),ql.delete(e),r.terminate())}(this),Promise.resolve()}}function h_(n,t,e,r={}){var s;n=Sr(n,So);const o=Ji(t),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Uf(`https://${h}`),qf("Firestore",!0)),a.host!==zc&&a.host!==h&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!vr(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,_;if(typeof r.mockUserToken=="string")p=r.mockUserToken,_=Kt.MOCK_USER;else{p=$f(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Kt(E)}n._authCredentials=new fm(new ku(p,_))}}/**
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
 */class Co{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Co(this.firestore,t,this._query)}}class fe{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fe(this.firestore,t,this._key)}}class Cr extends Co{constructor(t,e,r){super(t,e,ao(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fe(this.firestore,null,new q(t))}withConverter(t){return new Cr(this.firestore,t,this._path)}}function qc(n,t,...e){if(n=xn(n),arguments.length===1&&(t=Ou.newId()),u_("doc","path",t),n instanceof So){const r=It.fromString(t,...e);return Hl(r),new fe(n,null,new q(r))}{if(!(n instanceof fe||n instanceof Cr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(It.fromString(t,...e));return Hl(r),new fe(n.firestore,n instanceof Cr?n.converter:null,new q(r))}}/**
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
 */const Gl="AsyncQueue";class Ql{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new bc(this,"async_queue_retry"),this.rc=()=>{const r=mi();r&&L(Gl,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=mi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=mi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new Qe;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!zn(t))throw t;L(Gl,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,Le("INTERNAL UNHANDLED ERROR: ",Xl(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=To.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&W(47125,{cc:Xl(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function Xl(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Po extends So{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ql,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ql(t),this._firestoreClient=void 0,await t}}}function d_(n,t){const e=typeof n=="object"?n:wu(),r=typeof n=="string"?n:ps,s=Vr(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Lf("firestore");o&&h_(s,...o)}return s}function Hc(n){if(n._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||f_(n),n._firestoreClient}function f_(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,p){return new xm(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,jc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new s_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ln(jt.fromBase64String(t))}catch(e){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ln(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Vo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Wc{constructor(t){this._methodName=t}}/**
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
 */class xo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
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
 */class Do{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const p_=/^__.*__$/;class m_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new vn(t,this.data,this.fieldMask,e,this.fieldTransforms):new xr(t,this.data,e,this.fieldTransforms)}}function Kc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ic:n})}}class ko{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new ko(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return As(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(Kc(this.Ic)&&p_.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class g_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||js(t)}bc(t,e,r,s=!1){return new ko({Ic:t,methodName:e,wc:r,path:$t.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function y_(n){const t=n._freezeSettings(),e=js(n._databaseId);return new g_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function __(n,t,e,r,s,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,t,e,s);Yc("Data must be an object, but it was:",a,r);const u=Qc(r,a);let h,d;if(o.merge)h=new Te(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const _ of o.mergeFields){const E=v_(t,_,e);if(!a.contains(E))throw new z(D.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);T_(p,E)||p.push(E)}h=new Te(p),d=a.fieldTransforms.filter(_=>h.covers(_.field))}else h=null,d=a.fieldTransforms;return new m_(new de(u),h,d)}function Gc(n,t){if(Xc(n=xn(n)))return Yc("Unsupported field value:",t,n),Qc(n,t);if(n instanceof Wc)return function(r,s){if(!Kc(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Gc(u,s.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=xn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Dt.fromDate(r);return{timestampValue:Es(s.serializer,o)}}if(r instanceof Dt){const o=new Dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Es(s.serializer,o)}}if(r instanceof xo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ln)return{bytesValue:pc(s.serializer,r._byteString)};if(r instanceof fe){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ho(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Do)return function(a,u){return{mapValue:{fields:{[zu]:{stringValue:qu},[ms]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.gc("VectorValues must only contain numeric values.");return lo(u.serializer,d)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${Ro(r)}`)}(n,t)}function Qc(n,t){const e={};return Fu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):yn(n,(r,s)=>{const o=Gc(s,t.Ac(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Xc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Dt||n instanceof xo||n instanceof Ln||n instanceof fe||n instanceof Wc||n instanceof Do)}function Yc(n,t,e){if(!Xc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ro(e);throw r==="an object"?t.gc(n+" a custom object"):t.gc(n+" "+r)}}function v_(n,t,e){if((t=xn(t))instanceof Vo)return t._internalPath;if(typeof t=="string")return Jc(n,t);throw As("Field path arguments must be of type string or ",n,!1,void 0,e)}const E_=new RegExp("[~\\*/\\[\\]]");function Jc(n,t,e){if(t.search(E_)>=0)throw As(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Vo(...t.split("."))._internalPath}catch{throw As(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function As(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new z(D.INVALID_ARGUMENT,u+n+h)}function T_(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Zc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new I_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(th("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class I_ extends Zc{data(){return super.data()}}function th(n,t){return typeof t=="string"?Jc(n,t):t instanceof Vo?t._internalPath:t._delegate._internalPath}class w_{convertValue(t,e="none"){switch(tn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ze(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw W(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return yn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[ms].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Rt(a.doubleValue));return new Do(o)}convertGeoPoint(t){return new xo(Rt(t.latitude),Rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Os(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ir(t));default:return null}}convertTimestamp(t){const e=Je(t);return new Dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=It.fromString(t);at(Ec(r),9688,{name:t});const s=new wr(r.get(1),r.get(3)),o=new q(r.popFirst(5));return s.isEqual(e)||Le(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function A_(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class b_{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class eh extends Zc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new R_(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(th("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class R_ extends eh{data(t={}){return super.data(t)}}/**
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
 */function S_(n){n=Sr(n,fe);const t=Sr(n.firestore,Po);return l_(Hc(t),n._key).then(e=>x_(t,n,e))}class C_ extends w_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ln(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new fe(this.firestore,null,e)}}function P_(n,t,e){n=Sr(n,fe);const r=Sr(n.firestore,Po),s=A_(n.converter,t,e);return V_(r,[__(y_(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Oe.none())])}function V_(n,t){return function(r,s){const o=new Qe;return r.asyncQueue.enqueueAndForget(async()=>Gy(await o_(r),s,o)),o.promise}(Hc(n),t)}function x_(n,t,e){const r=e.docs.get(t._key),s=new C_(n);return new eh(n,s,t._key,r,new b_(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){$n=s})(em),Xe(new Me("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Po(new pm(r.getProvider("auth-internal")),new ym(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Re(nl,rl,t),Re(nl,rl,"esm2017")})();const nh="@firebase/installations",No="0.6.17";/**
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
 */const rh=1e4,sh=`w:${No}`,ih="FIS_v2",D_="https://firebaseinstallations.googleapis.com/v1",k_=60*60*1e3,N_="installations",O_="Installations";/**
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
 */const M_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mn=new Ds(N_,O_,M_);function oh(n){return n instanceof rn&&n.code.includes("request-failed")}/**
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
 */function ah({projectId:n}){return`${D_}/projects/${n}/installations`}function lh(n){return{token:n.token,requestStatus:2,expiresIn:L_(n.expiresIn),creationTime:Date.now()}}async function uh(n,t){const r=(await t.json()).error;return mn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ch({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function F_(n,{refreshToken:t}){const e=ch(n);return e.append("Authorization",B_(t)),e}async function hh(n){const t=await n();return t.status>=500&&t.status<600?n():t}function L_(n){return Number(n.replace("s","000"))}function B_(n){return`${ih} ${n}`}/**
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
 */async function U_({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=ah(n),s=ch(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:ih,appId:n.appId,sdkVersion:sh},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await hh(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:lh(d.authToken)}}else throw await uh("Create Installation",h)}/**
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
 */function dh(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function $_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const j_=/^[cdef][\w-]{21}$/,ji="";function z_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=q_(n);return j_.test(e)?e:ji}catch{return ji}}function q_(n){return $_(n).substr(0,22)}/**
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
 */function Hs(n){return`${n.appName}!${n.appId}`}/**
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
 */const fh=new Map;function ph(n,t){const e=Hs(n);mh(e,t),H_(e,t)}function mh(n,t){const e=fh.get(n);if(e)for(const r of e)r(t)}function H_(n,t){const e=W_();e&&e.postMessage({key:n,fid:t}),K_()}let dn=null;function W_(){return!dn&&"BroadcastChannel"in self&&(dn=new BroadcastChannel("[Firebase] FID Change"),dn.onmessage=n=>{mh(n.data.key,n.data.fid)}),dn}function K_(){fh.size===0&&dn&&(dn.close(),dn=null)}/**
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
 */const G_="firebase-installations-database",Q_=1,gn="firebase-installations-store";let yi=null;function Oo(){return yi||(yi=Tu(G_,Q_,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(gn)}}})),yi}async function bs(n,t){const e=Hs(n),s=(await Oo()).transaction(gn,"readwrite"),o=s.objectStore(gn),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&ph(n,t.fid),t}async function gh(n){const t=Hs(n),r=(await Oo()).transaction(gn,"readwrite");await r.objectStore(gn).delete(t),await r.done}async function Ws(n,t){const e=Hs(n),s=(await Oo()).transaction(gn,"readwrite"),o=s.objectStore(gn),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&ph(n,u.fid),u}/**
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
 */async function Mo(n){let t;const e=await Ws(n.appConfig,r=>{const s=X_(r),o=Y_(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===ji?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function X_(n){const t=n||{fid:z_(),registrationStatus:0};return yh(t)}function Y_(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(mn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=J_(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Z_(n)}:{installationEntry:t}}async function J_(n,t){try{const e=await U_(n,t);return bs(n.appConfig,e)}catch(e){throw oh(e)&&e.customData.serverCode===409?await gh(n.appConfig):await bs(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Z_(n){let t=await Yl(n.appConfig);for(;t.registrationStatus===1;)await dh(100),t=await Yl(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Mo(n);return r||e}return t}function Yl(n){return Ws(n,t=>{if(!t)throw mn.create("installation-not-found");return yh(t)})}function yh(n){return tv(n)?{fid:n.fid,registrationStatus:0}:n}function tv(n){return n.registrationStatus===1&&n.registrationTime+rh<Date.now()}/**
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
 */async function ev({appConfig:n,heartbeatServiceProvider:t},e){const r=nv(n,e),s=F_(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:sh,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await hh(()=>fetch(r,u));if(h.ok){const d=await h.json();return lh(d)}else throw await uh("Generate Auth Token",h)}function nv(n,{fid:t}){return`${ah(n)}/${t}/authTokens:generate`}/**
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
 */async function Fo(n,t=!1){let e;const r=await Ws(n.appConfig,o=>{if(!_h(o))throw mn.create("not-registered");const a=o.authToken;if(!t&&iv(a))return o;if(a.requestStatus===1)return e=rv(n,t),o;{if(!navigator.onLine)throw mn.create("app-offline");const u=av(o);return e=sv(n,u),u}});return e?await e:r.authToken}async function rv(n,t){let e=await Jl(n.appConfig);for(;e.authToken.requestStatus===1;)await dh(100),e=await Jl(n.appConfig);const r=e.authToken;return r.requestStatus===0?Fo(n,t):r}function Jl(n){return Ws(n,t=>{if(!_h(t))throw mn.create("not-registered");const e=t.authToken;return lv(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function sv(n,t){try{const e=await ev(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await bs(n.appConfig,r),e}catch(e){if(oh(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await gh(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await bs(n.appConfig,r)}throw e}}function _h(n){return n!==void 0&&n.registrationStatus===2}function iv(n){return n.requestStatus===2&&!ov(n)}function ov(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+k_}function av(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function lv(n){return n.requestStatus===1&&n.requestTime+rh<Date.now()}/**
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
 */async function uv(n){const t=n,{installationEntry:e,registrationPromise:r}=await Mo(t);return r?r.catch(console.error):Fo(t).catch(console.error),e.fid}/**
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
 */async function cv(n,t=!1){const e=n;return await hv(e),(await Fo(e,t)).token}async function hv(n){const{registrationPromise:t}=await Mo(n);t&&await t}/**
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
 */function dv(n){if(!n||!n.options)throw _i("App Configuration");if(!n.name)throw _i("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw _i(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function _i(n){return mn.create("missing-app-config-values",{valueName:n})}/**
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
 */const vh="installations",fv="installations-internal",pv=n=>{const t=n.getProvider("app").getImmediate(),e=dv(t),r=Vr(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},mv=n=>{const t=n.getProvider("app").getImmediate(),e=Vr(t,vh).getImmediate();return{getId:()=>uv(e),getToken:s=>cv(e,s)}};function gv(){Xe(new Me(vh,pv,"PUBLIC")),Xe(new Me(fv,mv,"PRIVATE"))}gv();Re(nh,No);Re(nh,No,"esm2017");/**
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
 */const Rs="analytics",yv="firebase_id",_v="origin",vv=60*1e3,Ev="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Zt=new Zi("@firebase/analytics");/**
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
 */const Tv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},re=new Ds("analytics","Analytics",Tv);/**
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
 */function Iv(n){if(!n.startsWith(Lo)){const t=re.create("invalid-gtag-resource",{gtagURL:n});return Zt.warn(t.message),""}return n}function Eh(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function wv(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Av(n,t){const e=wv("firebase-js-sdk-policy",{createScriptURL:Iv}),r=document.createElement("script"),s=`${Lo}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function bv(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Rv(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Eh(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){Zt.error(u)}n("config",s,o)}async function Sv(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await Eh(e);for(const h of a){const d=u.find(_=>_.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Zt.error(o)}}function Cv(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await Sv(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await Rv(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){Zt.error(u)}}return s}function Pv(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Cv(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Vv(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Lo)&&e.src.includes(n))return e;return null}/**
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
 */const xv=30,Dv=1e3;class kv{constructor(t={},e=Dv){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Th=new kv;function Nv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ov(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Nv(r)},o=Ev.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw re.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function Mv(n,t=Th,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw re.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw re.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Bv;return setTimeout(async()=>{u.abort()},vv),Ih({appId:r,apiKey:s,measurementId:o},a,u,t)}async function Ih(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=Th){var o;const{appId:a,measurementId:u}=n;try{await Fv(r,t)}catch(h){if(u)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await Ov(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Lv(d)){if(s.deleteThrottleMetadata(a),u)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Wa(e,s.intervalMillis,xv):Wa(e,s.intervalMillis),_={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return s.setThrottleMetadata(a,_),Zt.debug(`Calling attemptFetch again in ${p} millis`),Ih(n,_,r,s)}}function Fv(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(re.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Lv(n){if(!(n instanceof rn)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Bv{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Uv(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
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
 */async function $v(){if(yu())try{await _u()}catch(n){return Zt.warn(re.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Zt.warn(re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jv(n,t,e,r,s,o,a){var u;const h=Mv(n);h.then(A=>{e[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Zt.error(A)),t.push(h);const d=$v().then(A=>{if(A)return r.getId()}),[p,_]=await Promise.all([h,d]);Vv(o)||Av(o,p.measurementId),s("js",new Date);const E=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return E[_v]="firebase",E.update=!0,_!=null&&(E[yv]=_),s("config",p.measurementId,E),p.measurementId}/**
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
 */class zv{constructor(t){this.app=t}_delete(){return delete yr[this.app.options.appId],Promise.resolve()}}let yr={},Zl=[];const tu={};let vi="dataLayer",qv="gtag",eu,wh,nu=!1;function Hv(){const n=[];if(Kf()&&n.push("This is a browser extension environment."),Qf()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=re.create("invalid-analytics-context",{errorInfo:t});Zt.warn(e.message)}}function Wv(n,t,e){Hv();const r=n.options.appId;if(!r)throw re.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw re.create("no-api-key");if(yr[r]!=null)throw re.create("already-exists",{id:r});if(!nu){bv(vi);const{wrappedGtag:o,gtagCore:a}=Pv(yr,Zl,tu,vi,qv);wh=o,eu=a,nu=!0}return yr[r]=jv(n,Zl,tu,t,eu,vi,e),new zv(n)}function Kv(n=wu()){n=xn(n);const t=Vr(n,Rs);return t.isInitialized()?t.getImmediate():Gv(n)}function Gv(n,t={}){const e=Vr(n,Rs);if(e.isInitialized()){const s=e.getImmediate();if(vr(t,e.getOptions()))return s;throw re.create("already-initialized")}return e.initialize({options:t})}function Qv(n,t,e,r){n=xn(n),Uv(wh,yr[n.app.options.appId],t,e,r).catch(s=>Zt.error(s))}const ru="@firebase/analytics",su="0.10.16";function Xv(){Xe(new Me(Rs,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Wv(r,s,e)},"PUBLIC")),Xe(new Me("analytics-internal",n,"PRIVATE")),Re(ru,su),Re(ru,su,"esm2017");function n(t){try{const e=t.getProvider(Rs).getImmediate();return{logEvent:(r,s,o)=>Qv(e,r,s,o)}}catch(e){throw re.create("interop-component-reg-failed",{reason:e})}}}Xv();var Yv="firebase",Jv="11.9.1";/**
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
 */Re(Yv,Jv,"app");const Zv={apiKey:"AIzaSyDadsxLj_lbTkl6w42r3VUORrDCeV7YpKQ",authDomain:"bintracer-fd72d.firebaseapp.com",projectId:"bintracer-fd72d",storageBucket:"bintracer-fd72d.firebasestorage.app",messagingSenderId:"239645620747",appId:"1:239645620747:web:9f37fd2dc98670a9fde50e",measurementId:void 0},Ah=Iu(Zv),bh=d_(Ah);Kv(Ah);const Rh="productionRecords";async function sE(n,t){const e=qc(bh,Rh,n);return await P_(e,t,{merge:!0}),n}async function iE(n){const t=qc(bh,Rh,n),e=await S_(t);return e.exists()?{id:e.id,...e.data()}:null}export{qi as F,nE as T,rn as a,sE as c,iE as g,Un as u};
