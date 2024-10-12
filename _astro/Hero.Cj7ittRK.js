import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";import{H as E}from"./HypeBridgeLogo.CcIiEw4v.js";import{u as D,f as U,M as F,a as H,P as J,L as K,m as f}from"./motion.DIEilGlj.js";import{C as I}from"./CheckArrowIcon.CxGWFn1k.js";function T(){const t=n.useRef(!1);return D(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function $(){const t=T(),[r,s]=n.useState(0),i=n.useCallback(()=>{t.current&&s(r+1)},[r]);return[n.useCallback(()=>U.postRender(i),[i]),r]}class A extends n.Component{getSnapshotBeforeUpdate(r){const s=this.props.childRef.current;if(s&&r.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=s.offsetHeight||0,i.width=s.offsetWidth||0,i.top=s.offsetTop,i.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function W({children:t,isPresent:r}){const s=n.useId(),i=n.useRef(null),h=n.useRef({width:0,height:0,top:0,left:0}),{nonce:m}=n.useContext(F);return n.useInsertionEffect(()=>{const{width:x,height:c,top:g,left:u}=h.current;if(r||!i.current||!x||!c)return;i.current.dataset.motionPopId=s;const l=document.createElement("style");return m&&(l.nonce=m),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${c}px !important;
            top: ${g}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[r]),e.jsx(A,{isPresent:r,childRef:i,sizeRef:h,children:n.cloneElement(t,{ref:i})})}const R=({children:t,initial:r,isPresent:s,onExitComplete:i,custom:h,presenceAffectsLayout:m,mode:x})=>{const c=H(Y),g=n.useId(),u=n.useMemo(()=>({id:g,initial:r,isPresent:s,custom:h,onExitComplete:l=>{c.set(l,!0);for(const o of c.values())if(!o)return;i&&i()},register:l=>(c.set(l,!1),()=>c.delete(l))}),m?[Math.random()]:[s]);return n.useMemo(()=>{c.forEach((l,o)=>c.set(o,!1))},[s]),n.useEffect(()=>{!s&&!c.size&&i&&i()},[s]),x==="popLayout"&&(t=e.jsx(W,{isPresent:s,children:t})),e.jsx(J.Provider,{value:u,children:t})};function Y(){return new Map}function G(t){return n.useEffect(()=>()=>t(),[])}const p=t=>t.key||"";function _(t,r){t.forEach(s=>{const i=p(s);r.set(i,s)})}function q(t){const r=[];return n.Children.forEach(t,s=>{n.isValidElement(s)&&r.push(s)}),r}const L=({children:t,custom:r,initial:s=!0,onExitComplete:i,exitBeforeEnter:h,presenceAffectsLayout:m=!0,mode:x="sync"})=>{const c=n.useContext(K).forceRender||$()[0],g=T(),u=q(t);let l=u;const o=n.useRef(new Map).current,j=n.useRef(l),b=n.useRef(new Map).current,v=n.useRef(!0);if(D(()=>{v.current=!1,_(u,b),j.current=l}),G(()=>{v.current=!0,b.clear(),o.clear()}),v.current)return e.jsx(e.Fragment,{children:l.map(a=>e.jsx(R,{isPresent:!0,initial:s?void 0:!1,presenceAffectsLayout:m,mode:x,children:a},p(a)))});l=[...l];const N=j.current.map(p),C=u.map(p),O=N.length;for(let a=0;a<O;a++){const d=N[a];C.indexOf(d)===-1&&!o.has(d)&&o.set(d,void 0)}return x==="wait"&&o.size&&(l=[]),o.forEach((a,d)=>{if(C.indexOf(d)!==-1)return;const k=b.get(d);if(!k)return;const B=N.indexOf(d);let w=a;if(!w){const S=()=>{o.delete(d);const z=Array.from(b.keys()).filter(y=>!C.includes(y));if(z.forEach(y=>b.delete(y)),j.current=u.filter(y=>{const M=p(y);return M===d||z.includes(M)}),!o.size){if(g.current===!1)return;c(),i&&i()}};w=e.jsx(R,{isPresent:!1,onExitComplete:S,custom:r,presenceAffectsLayout:m,mode:x,children:k},p(k)),o.set(d,w)}l.splice(B,0,w)}),l=l.map(a=>{const d=a.key;return o.has(d)?a:e.jsx(R,{isPresent:!0,presenceAffectsLayout:m,mode:x,children:a},p(a))}),e.jsx(e.Fragment,{children:o.size?l:l.map(a=>n.cloneElement(a))})},V={src:"/_astro/dashboard.yCAivEGq.jpg",width:2886,height:1604,format:"png"},P=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",children:e.jsx("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})}),Q=({setIsOpen:t})=>e.jsx(L,{children:e.jsx(f.div,{initial:{opacity:0,zIndex:50},animate:{opacity:1,zIndex:50},transition:{duration:.1},exit:{opacity:0},children:e.jsx("div",{className:"w-full h-full  bg-bgDarkTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center",onClick:()=>t(!1),children:e.jsx("div",{className:"w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50",onClick:r=>r.stopPropagation(),children:e.jsxs("div",{className:"flex relative",children:[e.jsx("div",{className:"w-1/2 hidden lg:inline",children:e.jsx("iframe",{className:"video w-full h-full items-center justify-center rounded-lg",title:"Youtube player",sandbox:"allow-same-origin allow-forms allow-popups allow-scripts allow-presentation",src:"https://youtube.com/embed/i7b40NSj62s?autoplay=0"})}),e.jsxs("div",{className:"w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0",children:[e.jsxs("div",{className:"flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6",children:[e.jsx("div",{className:"text-white mr-2 text-8xl",children:e.jsx(E,{})}),e.jsx("div",{className:"text-white font-['Inter'] font-bold text-3xl"})]}),e.jsx("h3",{className:"mb-7 text-2xl text-primaryText font-bold leading-snug text-center",children:"Join the community and get access to exclusive content"}),e.jsxs("div",{className:"flex flex-wrap -m-2",children:[e.jsx("div",{className:"w-full sm:w-4/5 p-2 mx-auto",children:e.jsx("input",{className:"px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300",id:"newsletterInput3-1",type:"text",placeholder:"Your email address"})}),e.jsx("div",{className:"w-full sm:w-4/5 p-2 mt-4 mx-auto",children:e.jsx("button",{className:"py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200",onClick:()=>window.location="mailto:akhil@thehypebridge.com",type:"button","aria-label":"Join now",children:"Join Now"})})]})]}),e.jsx("div",{className:"fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition",onClick:()=>t(!1),children:e.jsx(P,{})})]})})})})}),X=({setIsOpen:t})=>e.jsx(L,{children:e.jsx(f.div,{initial:{opacity:0,zIndex:50},animate:{opacity:1,zIndex:50},transition:{duration:.1},exit:{opacity:0},children:e.jsx("div",{className:"w-full h-full  bg-bgDarkTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center",onClick:()=>t(!1),children:e.jsx("div",{className:"w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50",onClick:r=>r.stopPropagation(),children:e.jsxs("div",{className:"flex relative",children:[e.jsxs("div",{className:"w-1/2 hidden lg:inline",children:[e.jsx("h2",{className:"mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText",children:"Subscribe Now"}),e.jsx("h2",{className:"text-5xl font-bold tracking-normal text-secondaryColor",children:"Launch is coming!"}),e.jsxs("ul",{className:"mb-6 text-primaryText mt-12",children:[e.jsxs("li",{className:"mb-4 flex",children:[e.jsx(I,{}),e.jsx("span",{children:"Be in the know"})]}),e.jsxs("li",{className:"mb-4 flex",children:[e.jsx(I,{}),e.jsx("span",{children:"Exclusive Updates"})]}),e.jsxs("li",{className:"mb-4 flex",children:[e.jsx(I,{}),e.jsx("span",{children:"Potential Beta Tester"})]})]})]}),e.jsxs("div",{className:"w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0",children:[e.jsxs("div",{className:"flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6",children:[e.jsx("div",{className:"text-white mr-2 text-8xl",children:e.jsx(E,{})}),e.jsx("div",{className:"text-white font-['Inter'] font-bold text-3xl",children:"HypeBridge"})]}),e.jsx("h3",{className:"mb-7 text-2xl text-primaryText font-bold leading-snug text-center",children:"Join the community and get access to exclusive content"}),e.jsxs("div",{className:"flex flex-wrap -m-2",children:[e.jsx("div",{className:"w-full sm:w-4/5 p-2 mx-auto",children:e.jsx("input",{className:"px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300",id:"newsletterInput3-1",type:"text",placeholder:"Your email address"})}),e.jsx("div",{className:"w-full sm:w-4/5 p-2 mt-4 mx-auto",children:e.jsx("button",{className:"py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200",type:"button",onClick:()=>window.location="mailto:akhil@thehypebridge.com","aria-label":"Join now",children:"Join Now"})})]})]}),e.jsx("div",{className:"fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition",onClick:()=>t(!1),children:e.jsx(P,{})})]})})})})}),re=()=>{const[t,r]=n.useState(!1),[s,i]=n.useState(!1);return e.jsxs("section",{className:"w-screen  flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0",id:"home",children:[e.jsxs("div",{className:"w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center",children:[e.jsx(f.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:e.jsx("h3",{className:"text-secondaryColor text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold",children:"Influencer marketing like never before"})}),e.jsxs(f.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.05},children:[e.jsxs("div",{className:"text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4",children:[e.jsx("h1",{className:"inline md:hidden",children:"Unleash your"}),e.jsx("h1",{className:"hidden md:inline",children:"Unleash your"})]}),e.jsx("h1",{className:"mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-20 md:px-24 lg:px-24",children:"brands potential"})]}),e.jsx(f.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:e.jsx("h2",{className:"text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-50 ",children:"HypeBridge eliminates the inefficiencies in influencer marketing by leveraging AI-driven matching and a bid-based platform"})}),e.jsx(f.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},children:e.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center",children:[e.jsx("button",{className:"contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0",onClick:()=>r(!0),"aria-label":"Start Exploring",children:"Start Exploring"}),e.jsx("button",{className:"w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition",onClick:()=>i(!0),"aria-label":"Watch demo",children:"Watch demo"})]})}),e.jsx(f.div,{initial:{opacity:0,y:10,zIndex:20},animate:{opacity:1,y:0,zIndex:20},transition:{duration:.5,delay:.15},children:e.jsx("div",{className:"relative w-screen flex justify-center ",children:e.jsx("img",{src:V.src,alt:"Dashboard image",className:"w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl  hero-dashboard-border-gradient lg:top-6 xl:top-0 shadow-xl"})})}),e.jsx("div",{className:"relative w-screen flex justify-center ",children:e.jsx("div",{className:"shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block",children:e.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",className:"bg-bgDark2",children:e.jsx("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"shape-fill bg-bgDark1  fill-bgDark1"})})})})]}),t&&e.jsx(X,{isOpen:t,setIsOpen:r}),",",s&&e.jsx(Q,{isOpen:s,setIsOpen:i}),","]})};export{re as Hero};