(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{640:function(e,t,r){"use strict";var n=r(1742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,i,l,u,s,c,d,p=!1;t||(t={}),i=t.debug||!1;try{if(u=n(),s=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=a[t.format]||a.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(d),s.selectNodeContents(d),c.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(n){i&&console.error("unable to copy using execCommand: ",n),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(n){i&&console.error("unable to copy using clipboardData: ",n),i&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=r.replace(/#{\s*key\s*}/g,o),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),d&&document.body.removeChild(d),u()}return p}},9008:function(e,t,r){e.exports=r(5443)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function u(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,a=e.attr,o=e.size,u=e.title,s=l(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(a)}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},5370:function(e,t,r){"use strict";r.d(t,{l:function(){return c}});var n=r(8267),a=r(5059),o=r(4662),i=r(3179),l=r(6384),u=r(5432),s=r(5893),c=(0,a.G)(function(e,t){var r;let a=(0,o.mq)("FormLabel",e),c=(0,i.Lr)(e),{className:p,children:m,requiredIndicator:f=(0,s.jsx)(d,{}),optionalIndicator:g=null,...v}=c,h=(0,n.NJ)(),y=null!=(r=null==h?void 0:h.getLabelProps(v,t))?r:{ref:t,...v};return(0,s.jsxs)(l.m.label,{...y,className:(0,u.cx)("chakra-form__label",c.className),__css:{display:"block",textAlign:"start",...a},children:[m,(null==h?void 0:h.isRequired)?f:g]})});c.displayName="FormLabel";var d=(0,a.G)(function(e,t){let r=(0,n.NJ)(),a=(0,n.e)();if(!(null==r?void 0:r.isRequired))return null;let o=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,s.jsx)(l.m.span,{...null==r?void 0:r.getRequiredIndicatorProps(e,t),__css:a.requiredIndicator,className:o})});d.displayName="RequiredIndicator"},9690:function(e,t,r){"use strict";r.d(t,{Y:function(){return o}});var n=r(8267),a=r(5432);function o(e){let{isDisabled:t,isInvalid:r,isReadOnly:o,isRequired:i,...l}=function(e){var t,r,o;let i=(0,n.NJ)(),{id:l,disabled:u,readOnly:s,required:c,isRequired:d,isInvalid:p,isReadOnly:m,isDisabled:f,onFocus:g,onBlur:v,...h}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&y.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&y.push(i.helpTextId),{...h,"aria-describedby":y.join(" ")||void 0,id:null!=l?l:null==i?void 0:i.id,isDisabled:null!=(t=null!=u?u:f)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(r=null!=s?s:m)?r:null==i?void 0:i.isReadOnly,isRequired:null!=(o=null!=c?c:d)?o:null==i?void 0:i.isRequired,isInvalid:null!=p?p:null==i?void 0:i.isInvalid,onFocus:(0,a.v0)(null==i?void 0:i.onFocus,g),onBlur:(0,a.v0)(null==i?void 0:i.onBlur,v)}}(e);return{...l,disabled:t,readOnly:o,required:i,"aria-invalid":(0,a.Qm)(r),"aria-required":(0,a.Qm)(i),"aria-readonly":(0,a.Qm)(o)}}},8267:function(e,t,r){"use strict";r.d(t,{NI:function(){return v},NJ:function(){return g},e:function(){return m}});var n=r(5227),a=r(1103),o=r(5059),i=r(4662),l=r(3179),u=r(6384),s=r(5432),c=r(7294),d=r(5893),[p,m]=(0,n.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,g]=(0,n.k)({strict:!1,name:"FormControlContext"}),v=(0,o.G)(function(e,t){let r=(0,i.jC)("Form",e),n=(0,l.Lr)(e),{getRootProps:o,htmlProps:m,...g}=function(e){let{id:t,isRequired:r,isInvalid:n,isDisabled:o,isReadOnly:i,...l}=e,u=(0,c.useId)(),d=t||`field-${u}`,p=`${d}-label`,m=`${d}-feedback`,f=`${d}-helptext`,[g,v]=(0,c.useState)(!1),[h,y]=(0,c.useState)(!1),[b,x]=(0,c.useState)(!1),C=(0,c.useCallback)((e={},t=null)=>({id:f,...e,ref:(0,a.lq)(t,e=>{e&&y(!0)})}),[f]),w=(0,c.useCallback)((e={},t=null)=>{var r,a;return{...e,ref:t,"data-focus":(0,s.PB)(b),"data-disabled":(0,s.PB)(o),"data-invalid":(0,s.PB)(n),"data-readonly":(0,s.PB)(i),id:null!=(r=e.id)?r:p,htmlFor:null!=(a=e.htmlFor)?a:d}},[d,o,b,n,i,p]),N=(0,c.useCallback)((e={},t=null)=>({id:m,...e,ref:(0,a.lq)(t,e=>{e&&v(!0)}),"aria-live":"polite"}),[m]),k=(0,c.useCallback)((e={},t=null)=>({...e,...l,ref:t,role:"group"}),[l]),_=(0,c.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!n,isReadOnly:!!i,isDisabled:!!o,isFocused:!!b,onFocus:()=>x(!0),onBlur:()=>x(!1),hasFeedbackText:g,setHasFeedbackText:v,hasHelpText:h,setHasHelpText:y,id:d,labelId:p,feedbackId:m,helpTextId:f,htmlProps:l,getHelpTextProps:C,getErrorMessageProps:N,getRootProps:k,getLabelProps:w,getRequiredIndicatorProps:_}}(n),v=(0,s.cx)("chakra-form-control",e.className);return(0,d.jsx)(f,{value:g,children:(0,d.jsx)(p,{value:r,children:(0,d.jsx)(u.m.div,{...o({},t),className:v,__css:r.container})})})});v.displayName="FormControl",(0,o.G)(function(e,t){let r=g(),n=m(),a=(0,s.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(u.m.div,{...null==r?void 0:r.getHelpTextProps(e,t),__css:n.helperText,className:a})}).displayName="FormHelperText"},156:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var n=r(7294),a=r(640);function o(e,t={}){let[r,o]=(0,n.useState)(!1),[i,l]=(0,n.useState)(e);(0,n.useEffect)(()=>l(e),[e]);let{timeout:u=1500,...s}="number"==typeof t?{timeout:t}:t,c=(0,n.useCallback)(()=>{let e=a(i,s);o(e)},[i,s]);return(0,n.useEffect)(()=>{let e=null;return r&&(e=window.setTimeout(()=>{o(!1)},u)),()=>{e&&window.clearTimeout(e)}},[u,r]),{value:i,setValue:l,onCopy:c,hasCopied:r}}},6367:function(e,t,r){"use strict";r.d(t,{E:function(){return c}});var n=r(5059),a=r(5893),o=(0,n.G)(function(e,t){let{htmlWidth:r,htmlHeight:n,alt:o,...i}=e;return(0,a.jsx)("img",{width:r,height:n,ref:t,alt:o,...i})});o.displayName="NativeImage";var i=r(6245),l=r(7294),u=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,s=r(6384),c=(0,n.G)(function(e,t){let{fallbackSrc:r,fallback:n,src:c,srcSet:d,align:p,fit:m,loading:f,ignoreFallback:g,crossOrigin:v,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:y,...b}=e,x=null!=f||g||!(void 0!==r||void 0!==n),C=function(e){let{loading:t,src:r,srcSet:n,onLoad:a,onError:o,crossOrigin:u,sizes:s,ignoreFallback:c}=e,[d,p]=(0,l.useState)("pending");(0,l.useEffect)(()=>{p(r?"loading":"pending")},[r]);let m=(0,l.useRef)(),f=(0,l.useCallback)(()=>{if(!r)return;g();let e=new Image;e.src=r,u&&(e.crossOrigin=u),n&&(e.srcset=n),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{g(),p("loaded"),null==a||a(e)},e.onerror=e=>{g(),p("failed"),null==o||o(e)},m.current=e},[r,u,n,s,a,o,t]),g=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,i.G)(()=>{if(!c)return"loading"===d&&f(),()=>{g()}},[d,f,c]),c?"loaded":d}({...e,ignoreFallback:x}),w=u(C,h),N={ref:t,objectFit:m,objectPosition:p,...x?b:function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(b,["onError","onLoad"])};return w?n||(0,a.jsx)(s.m.img,{as:o,className:"chakra-image__placeholder",src:r,...N}):(0,a.jsx)(s.m.img,{as:o,src:c,srcSet:d,crossOrigin:v,loading:f,referrerPolicy:y,className:"chakra-image",...N})});c.displayName="Image"},3863:function(e,t,r){"use strict";r.d(t,{B:function(){return g}});var n=r(5227),a=r(2495),o=r(5059),i=r(4662),l=r(3179),u=r(6384),s=r(5432),c=r(888),d=r(7294),p=r(5893),[m,f]=(0,n.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),g=(0,o.G)(function(e,t){let r=(0,i.jC)("Input",e),{children:n,className:o,...f}=(0,l.Lr)(e),g=(0,s.cx)("chakra-input__group",o),v={},h=(0,a.W)(n),y=r.field;h.forEach(e=>{var t,n;r&&(y&&"InputLeftElement"===e.type.id&&(v.paddingStart=null!=(t=y.height)?t:y.h),y&&"InputRightElement"===e.type.id&&(v.paddingEnd=null!=(n=y.height)?n:y.h),"InputRightAddon"===e.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(v.borderStartRadius=0))});let b=h.map(t=>{var r,n;let a=(0,c.oA)({size:(null==(r=t.props)?void 0:r.size)||e.size,variant:(null==(n=t.props)?void 0:n.variant)||e.variant});return"Input"!==t.type.id?(0,d.cloneElement)(t,a):(0,d.cloneElement)(t,Object.assign(a,v,t.props))});return(0,p.jsx)(u.m.div,{className:g,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0,...f,children:(0,p.jsx)(m,{value:r,children:b})})});g.displayName="InputGroup"},8129:function(e,t,r){"use strict";r.d(t,{I:function(){return c}});var n=r(9690),a=r(5059),o=r(4662),i=r(3179),l=r(6384),u=r(5432),s=r(5893),c=(0,a.G)(function(e,t){let{htmlSize:r,...a}=e,c=(0,o.jC)("Input",a),d=(0,i.Lr)(a),p=(0,n.Y)(d),m=(0,u.cx)("chakra-input",e.className);return(0,s.jsx)(l.m.input,{size:r,...p,__css:c.field,ref:t,className:m})});c.displayName="Input",c.id="Input"},1708:function(e,t,r){"use strict";r.d(t,{r:function(){return i}});var n=r(5059),a=r(6384),o=r(5893),i=(0,n.G)(function(e,t){let{templateAreas:r,gap:n,rowGap:i,columnGap:l,column:u,row:s,autoFlow:c,autoRows:d,templateRows:p,autoColumns:m,templateColumns:f,...g}=e;return(0,o.jsx)(a.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:i,gridColumnGap:l,gridAutoColumns:m,gridColumn:u,gridRow:s,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:p,gridTemplateColumns:f},...g})});i.displayName="Grid"},4418:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var n=r(5059),a=r(4662),o=r(3179),i=r(6384),l=r(5432),u=r(5893),s=(0,n.G)(function(e,t){let r=(0,a.mq)("Heading",e),{className:n,...s}=(0,o.Lr)(e);return(0,u.jsx)(i.m.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...s,__css:r})});s.displayName="Heading"},776:function(e,t,r){"use strict";r.d(t,{P:function(){return s}});var n=r(5059),a=r(6384),o=r(888),i=r(3951),l=r(5893);function u(e){return(0,i.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var s=(0,n.G)(function(e,t){let{area:r,colSpan:n,colStart:i,colEnd:s,rowEnd:c,rowSpan:d,rowStart:p,...m}=e,f=(0,o.oA)({gridArea:r,gridColumn:u(n),gridRow:u(d),gridColumnStart:i,gridColumnEnd:s,gridRowStart:p,gridRowEnd:c});return(0,l.jsx)(a.m.div,{ref:t,__css:f,...m})});s.displayName="GridItem"},1669:function(e,t,r){"use strict";r.d(t,{g:function(){return i}});var n=r(6684),a=r(5059),o=r(5893),i=(0,a.G)((e,t)=>(0,o.jsx)(n.K,{align:"center",...e,direction:"column",ref:t}));i.displayName="VStack"},7822:function(e,t,r){"use strict";r.d(t,{i:function(){return s}});var n=r(5059),a=r(4662),o=r(3179),i=r(6384),l=r(5432),u=r(5893),s=(0,n.G)(function(e,t){let{borderLeftWidth:r,borderBottomWidth:n,borderTopWidth:s,borderRightWidth:c,borderWidth:d,borderStyle:p,borderColor:m,...f}=(0,a.mq)("Divider",e),{className:g,orientation:v="horizontal",__css:h,...y}=(0,o.Lr)(e);return(0,u.jsx)(i.m.hr,{ref:t,"aria-orientation":v,...y,__css:{...f,border:"0",borderColor:m,borderStyle:p,...{vertical:{borderLeftWidth:r||c||d||"1px",height:"100%"},horizontal:{borderBottomWidth:n||s||d||"1px",width:"100%"}}[v],...h},className:(0,l.cx)("chakra-divider",g)})});s.displayName="Divider"},1753:function(e,t,r){"use strict";r.d(t,{g:function(){return d}});var n=r(9690),a=r(5059),o=r(4662),i=r(3179),l=r(6384),u=r(5432),s=r(5893),c=["h","minH","height","minHeight"],d=(0,a.G)((e,t)=>{let r=(0,o.mq)("Textarea",e),{className:a,rows:d,...p}=(0,i.Lr)(e),m=(0,n.Y)(p),f=d?function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(r,c):r;return(0,s.jsx)(l.m.textarea,{ref:t,rows:d,...m,className:(0,u.cx)("chakra-textarea",a),__css:f})});d.displayName="Textarea"}}]);