"use strict";(self.webpackChunktanis_cms=self.webpackChunktanis_cms||[]).push([[7535],{94379:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(63891),i=t(21412),o=t(73725),c=(s=>s&&s.__esModule?s:{default:s})(n).default(o.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:s})=>s}, 1fr);
  ${({theme:s,gap:E})=>i("gap",E,s)}
`,d=s=>{const{gap:E="0",gridCols:v=12,...p}=s;return e.jsx(c,{gap:E,gridCols:v,...p})};a.Grid=d},65e3:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(63891),n=t(73725),r=(l=>l&&l.__esModule?l:{default:l})(e).default(n.Box)`
  grid-column: span ${({col:l})=>l};
  max-width: 100%;

  ${({theme:l})=>l.mediaQueries.tablet} {
    grid-column: span ${({s:l})=>l};
  }

  ${({theme:l})=>l.mediaQueries.mobile} {
    grid-column: span ${({xs:l})=>l};
  }
`;a.GridItem=r},79605:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(69909),i=({startActions:o,endActions:r})=>!o&&!r?null:e.jsxs(n.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[e.jsx(n.Flex,{gap:2,wrap:"wrap",children:o}),e.jsx(n.Flex,{gap:2,shrink:0,wrap:"wrap",children:r})]});a.ActionLayout=i},75022:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(73725),i=({children:o})=>e.jsx(n.Box,{paddingLeft:10,paddingRight:10,children:o});a.ContentLayout=i},59711:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(63891),o=(r=>r&&r.__esModule?r:{default:r})(e).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:r})=>r.spaces[4]};
`;a.GridLayout=o},27998:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(21272),i=t(63891),o=t(85065),r=t(40912),l=t(73725),c=t(69909),d=t(48941),s=u=>u&&u.__esModule?u:{default:u},E=s(n),v=s(i),p=u=>{const b=n.useRef(null),[h,w]=n.useState(null),[S,C]=o.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return r.useResizeObserver(S,()=>{S.current&&w(S.current.getBoundingClientRect())}),n.useEffect(()=>{b.current&&w(b.current.getBoundingClientRect())},[b]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:h?.height},ref:S,children:C&&e.jsx(B,{ref:b,...u})}),!C&&e.jsx(B,{...u,sticky:!0,width:h?.width})]})};p.displayName="HeaderLayout";const x=v.default(l.Box)`
  width: ${({width:u})=>u?`${u/16}rem`:void 0};
  z-index: ${({theme:u})=>u.zIndices[1]};
`,B=E.default.forwardRef(({navigationAction:u,primaryAction:b,secondaryAction:h,subtitle:w,title:S,sticky:C,width:y,...g},f)=>{const L=typeof w=="string";return C?e.jsx(x,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:y,"data-strapi-header-sticky":!0,children:e.jsxs(c.Flex,{justifyContent:"space-between",children:[e.jsxs(c.Flex,{children:[u&&e.jsx(l.Box,{paddingRight:3,children:u}),e.jsxs(l.Box,{children:[e.jsx(d.Typography,{variant:"beta",as:"h1",...g,children:S}),L?e.jsx(d.Typography,{variant:"pi",textColor:"neutral600",children:w}):w]}),h?e.jsx(l.Box,{paddingLeft:4,children:h}):null]}),e.jsx(c.Flex,{children:b?e.jsx(l.Box,{paddingLeft:2,children:b}):void 0})]})}):e.jsxs(l.Box,{ref:f,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0,children:[u?e.jsx(l.Box,{paddingBottom:2,children:u}):null,e.jsxs(c.Flex,{justifyContent:"space-between",children:[e.jsxs(c.Flex,{minWidth:0,children:[e.jsx(d.Typography,{as:"h1",variant:"alpha",...g,children:S}),h?e.jsx(l.Box,{paddingLeft:4,children:h}):null]}),b]}),L?e.jsx(d.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:w}):w]})});a.BaseHeaderLayout=B,a.HeaderLayout=p},32647:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(63891),i=t(73725),r=(s=>s&&s.__esModule?s:{default:s})(n),l=r.default(i.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,c=r.default(i.Box)`
  overflow-x: hidden;
`,d=({sideNav:s,children:E})=>e.jsxs(l,{hasSideNav:Boolean(s),children:[s,e.jsx(c,{paddingBottom:10,children:E})]});a.Layout=d},54446:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(94379),i=t(65e3),o=t(73725),r=({startCol:l,endCol:c})=>e.jsxs(n.Grid,{gap:4,children:[e.jsx(i.GridItem,{col:9,s:12,children:e.jsx(o.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:l})}),e.jsx(i.GridItem,{col:3,s:12,children:e.jsx(o.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:c})})]});a.TwoColsLayout=r},98133:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(32647),n=t(79605),i=t(75022),o=t(27998),r=t(54446),l=t(59711);a.Layout=e.Layout,a.ActionLayout=n.ActionLayout,a.ContentLayout=i.ContentLayout,a.BaseHeaderLayout=o.BaseHeaderLayout,a.HeaderLayout=o.HeaderLayout,a.TwoColsLayout=r.TwoColsLayout,a.GridLayout=l.GridLayout},44575:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(21272),i=t(14096),o=t(11193),r=t(54191),l=t(73725),c=s=>e.jsx(d,{...s,as:"th"}),d=({coords:s={col:0,row:0},as:E="td",...v})=>{const p=n.useRef(null),{rowIndex:x,colIndex:B,setTableValues:u}=i.useTable(),[b,h]=n.useState(!1),w=y=>{const g=o.getFocusableNodes(p.current,!0);if(g.length===0||g.length===1&&o.getFocusableNodesWithKeyboardNav(g).length===0)return;if(g.length>1&&!g.find(L=>L.tagName!=="BUTTON")){y.preventDefault();const L=g.findIndex(D=>D===document.activeElement);if(y.key===r.KeyboardKeys.RIGHT){const D=g[L+1];D&&(y.stopPropagation(),D.focus())}else if(y.key===r.KeyboardKeys.LEFT){const D=g[L-1];D&&(y.stopPropagation(),D.focus())}return}const f=y.key===r.KeyboardKeys.ENTER;if(f&&!b)h(!0);else if((y.key===r.KeyboardKeys.ESCAPE||f)&&b){if(f&&document.activeElement?.tagName==="A")return;h(!1),p.current.focus()}else b&&y.stopPropagation()},S=x===s.row-1&&B===s.col-1;n.useLayoutEffect(()=>{const y=o.getFocusableNodes(p.current,!0);y.length===0||y.length===1&&o.getFocusableNodesWithKeyboardNav(y).length!==0||y.length>1&&Boolean(y.find(g=>g.tagName!=="BUTTON"))?(p.current.setAttribute("tabIndex",!b&&S?"0":"-1"),y.forEach((g,f)=>{g.setAttribute("tabIndex",b?"0":"-1"),b&&f===0&&g.focus()})):y.forEach(g=>{g.setAttribute("tabIndex",S?"0":"-1")})},[b,S]);const C=n.useCallback(()=>{const y=o.getFocusableNodes(p.current,!0);y.length>=1&&(o.getFocusableNodesWithKeyboardNav(y).length!==0||!y.find(g=>g.tagName!=="BUTTON"))&&h(!0),u({rowIndex:s.row-1,colIndex:s.col-1})},[s,u]);return n.useLayoutEffect(()=>{const y=p.current;return o.getFocusableNodes(y,!0).forEach(f=>{f.addEventListener("focus",C)}),()=>{o.getFocusableNodes(y,!0).forEach(L=>{L.removeEventListener("focus",C)})}},[C]),e.jsx(l.Box,{role:"gridcell",as:E,ref:p,onKeyDown:w,...v})};a.RawTd=d,a.RawTh=c},38807:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(21272),i=t(55985),o=t(14096),r=t(54191),l=({colCount:c,rowCount:d,jumpStep:s=3,initialCol:E=0,initialRow:v=0,...p})=>{const x=n.useRef(null),B=n.useRef(!1),[u,b]=n.useState(v),[h,w]=n.useState(E),S=n.useCallback(({colIndex:g,rowIndex:f})=>{w(g),b(f)},[]);n.useEffect(()=>{B.current&&i.focusFocusable(x.current),B.current||(B.current=!0)},[h,u]);const C=g=>{switch(g.key){case r.KeyboardKeys.RIGHT:{g.preventDefault(),w(f=>f<c-1?f+1:f);break}case r.KeyboardKeys.LEFT:{g.preventDefault(),w(f=>f>0?f-1:f);break}case r.KeyboardKeys.UP:{g.preventDefault(),b(f=>f>0?f-1:f);break}case r.KeyboardKeys.DOWN:{g.preventDefault(),b(f=>f<d-1?f+1:f);break}case r.KeyboardKeys.HOME:{g.preventDefault(),g.ctrlKey&&b(0),w(0);break}case r.KeyboardKeys.END:{g.preventDefault(),g.ctrlKey&&b(d-1),w(c-1);break}case r.KeyboardKeys.PAGE_DOWN:{g.preventDefault(),b(f=>f+s<d?f+s:d-1);break}case r.KeyboardKeys.PAGE_UP:{g.preventDefault(),b(f=>f-s>0?f-s:0);break}}},y=n.useMemo(()=>({rowIndex:u,colIndex:h,setTableValues:S}),[h,u,S]);return e.jsx(o.RawTableContext.Provider,{value:y,children:e.jsx("table",{role:"grid",ref:x,"aria-rowcount":d,"aria-colcount":c,onKeyDown:C,...p})})};a.RawTable=l},14096:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(21272),n=e.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),i=()=>e.useContext(n);a.RawTableContext=n,a.useTable=i},13555:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(21272),i=({children:o,...r})=>{const l=n.Children.toArray(o).map((c,d)=>n.isValidElement(c)?n.cloneElement(c,{"aria-rowindex":d+2}):c);return e.jsx("tbody",{...r,children:l})};a.RawTbody=i},33333:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(21272),i=({children:o,...r})=>{const l=n.Children.toArray(o).map(c=>n.isValidElement(c)?n.cloneElement(c,{"aria-rowindex":1}):c);return e.jsx("thead",{...r,children:l})};a.RawThead=i},22265:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(21272),i=t(73725),o=({children:r,...l})=>{const c=n.Children.toArray(r).map((d,s)=>n.isValidElement(d)?n.cloneElement(d,{"aria-colindex":s+1,coords:{col:s+1,row:l["aria-rowindex"]}}):d);return e.jsx(i.Box,{as:"tr",...l,children:c})};a.RawTr=o},55985:(j,a)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=e=>{const n=e.querySelector('[tabindex="0"]');n&&n.focus()};a.focusFocusable=t},59957:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(63891),i=t(44575),o=t(69909),l=(v=>v&&v.__esModule?v:{default:v})(n),c=l.default(i.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:v})=>v.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,d=l.default.span`
  svg {
    height: ${4/16}rem;
  }
`,s=({children:v,action:p,...x})=>e.jsx(c,{as:i.RawTh,...x,children:e.jsxs(o.Flex,{children:[v,e.jsx(d,{children:p})]})}),E=({children:v,...p})=>e.jsx(c,{...p,children:v});a.Td=E,a.Th=s},84198:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(63891),i=t(73725),o=t(31781),r=t(69909),l=t(48941),d=(p=>p&&p.__esModule?p:{default:p})(n),s=d.default(i.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:p})=>p.colors.primary600};
  }
`,E=d.default(i.Box)`
  border-radius: 0 0 ${({theme:p})=>p.borderRadius} ${({theme:p})=>p.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,v=({children:p,icon:x,...B})=>e.jsxs("div",{children:[e.jsx(o.Divider,{}),e.jsx(E,{as:"button",background:"primary100",padding:5,...B,children:e.jsxs(r.Flex,{children:[e.jsx(s,{"aria-hidden":!0,background:"primary200",children:x}),e.jsx(i.Box,{paddingLeft:3,children:e.jsx(l.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:p})})]})})]});a.TFooter=v},90281:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(21272),i=t(63891),o=t(38807),r=t(73725),c=(x=>x&&x.__esModule?x:{default:x})(i),d=c.default(r.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:x})=>x.colors.neutral150};
`,s=c.default(o.RawTable)`
  width: 100%;
  white-space: nowrap;
`,E=c.default(r.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:x})=>x==="both"||x==="left"?"''":void 0};
    box-shadow: ${({theme:x})=>x.shadows.tableShadow};
    width: ${({theme:x})=>x.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:x})=>x==="both"||x==="right"?"''":void 0};
    box-shadow: ${({theme:x})=>x.shadows.tableShadow};
    width: ${({theme:x})=>x.spaces[2]};
    right: 0;
    top: 0;
  }
`,v=c.default(r.Box)`
  overflow-x: auto;
`,p=({footer:x,...B})=>{const u=n.useRef(null),[b,h]=n.useState(),w=S=>{const C=S.target.scrollWidth-S.target.clientWidth;if(S.target.scrollLeft===0){h("right");return}if(S.target.scrollLeft===C){h("left");return}S.target.scrollLeft>0&&h("both")};return n.useEffect(()=>{u.current.scrollWidth>u.current.clientWidth&&h("right")},[]),e.jsxs(d,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(E,{overflowing:b,position:"relative",children:e.jsx(v,{ref:u,onScroll:w,paddingLeft:6,paddingRight:6,children:e.jsx(s,{...B})})}),x]})};a.Table=p},58425:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(63891),i=t(13555),l=(d=>d&&d.__esModule?d:{default:d})(n).default(i.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,c=({children:d,...s})=>e.jsx(l,{...s,children:d});a.Tbody=c},91387:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(63891),i=t(33333),l=(d=>d&&d.__esModule?d:{default:d})(n).default(i.RawThead)`
  border-bottom: 1px solid ${({theme:d})=>d.colors.neutral150};
`,c=({children:d,...s})=>e.jsx(l,{...s,children:d});a.Thead=c},36735:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(92132),n=t(63891),i=t(22265),l=(d=>d&&d.__esModule?d:{default:d})(n).default(i.RawTr)`
  border-bottom: 1px solid ${({theme:d})=>d.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:d})=>d.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:d})=>d.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,c=d=>e.jsx(l,{...d});a.Tr=c},90265:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(90281),n=t(58425),i=t(91387),o=t(36735),r=t(59957),l=t(84198);a.Table=e.Table,a.Tbody=n.Tbody,a.Thead=i.Thead,a.Tr=o.Tr,a.Td=r.Td,a.Th=r.Th,a.TFooter=l.TFooter},85065:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(21272),n=i=>{const o=e.useRef(null),[r,l]=e.useState(!0),c=([d])=>{l(d.isIntersecting)};return e.useEffect(()=>{const d=o.current,s=new IntersectionObserver(c,i);return d&&s.observe(o.current),()=>{d&&s.disconnect()}},[o,i]),[o,r]};a.useElementOnScreen=n},40912:(j,a,t)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(21272),n=t(20294),i=(o,r)=>{const l=n.useCallbackRef(r);e.useLayoutEffect(()=>{const c=new ResizeObserver(l);return Array.isArray(o)?o.forEach(d=>{d.current&&c.observe(d.current)}):o.current&&c.observe(o.current),()=>{c.disconnect()}},[o,l])};a.useResizeObserver=i},33616:(j,a,t)=>{const e=t(92132),n=o=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:e.jsx("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),i=n;j.exports=i},55493:(j,a,t)=>{const e=t(92132),n=o=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...o,children:[e.jsx("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),e.jsx("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),i=n;j.exports=i},84394:(j,a,t)=>{const e=t(92132),n=o=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:e.jsx("path",{fill:"#212134",d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z"})}),i=n;j.exports=i},57535:(j,a,t)=>{t.r(a),t.d(a,{default:()=>Se});var e=t(92132),n=t(21272),i=t(17703),o=t(34372),r=t(31407),l=t.n(r),c=t(19016),d=t(54894),s=t(80266);const E=async()=>{try{return await(0,o.l1)(`/${l()}/component`,{method:"GET"})}catch{return null}},v=async()=>{try{return await(0,o.l1)(`/${l()}/content-types`,{method:"GET"})}catch{return null}},p=async()=>{try{return(await(0,o.l1)(`/${l()}/component`,{method:"POST"},!0)).json()}catch{return null}};var x=t(55080),B=t(49654),u=t(58494),b=t(30519),h=t(90265),w=t(84394),S=t.n(w),C=t(77958),y=t(94061),g=t(37133),f=t(68147),L=t(93995),D=t(81035),ie=t(61485),re=t(99248),ce=t(6239),ue=t(67030),ge=t(33616),he=t.n(ge),fe=t(55493),Q=t.n(fe);const Y=t(10058).A,W=({item:m})=>{const R=(0,o.hN)(),[M,$]=(0,n.useState)(!0),[H,K]=(0,n.useState)(!0),[A,I]=(0,n.useState)(!0),[N,U]=(0,n.useState)(!0),[z,J]=(0,n.useState)(!0),[X,q]=(0,n.useState)(!0),[_,ee]=(0,n.useState)(!0),[te,ne]=(0,n.useState)(!0),[ae,se]=(0,n.useState)(!0),[oe,de]=(0,n.useState)(!0),[k,le]=(0,n.useState)(null),[ve,G]=(0,n.useState)(!1),{formatMessage:O}=(0,d.A)();(0,n.useEffect)(()=>{(async()=>{const P=await Y.get();le(P)})()},[]);const Re=T=>{const P=k[m?.uid];$(P?.seoChecks?.metaTitle),K(P?.seoChecks?.metaDescription),I(P?.seoChecks?.metaRobots),U(P?.seoChecks?.metaSocial),J(P?.seoChecks?.wordCount),q(P?.seoChecks?.canonicalUrl),ee(P?.seoChecks?.keywordDensity),ne(P?.seoChecks?.structuredData),se(P?.seoChecks?.alternativeText),de(P?.seoChecks?.lastUpdatedAt),G(Z=>!Z)},Me=T=>{const P={...k,[m?.uid]:{collectionName:k[m?.uid]?.collectionName,seoChecks:{metaTitle:M,metaDescription:H,metaRobots:A,metaSocial:N,wordCount:z,canonicalUrl:X,keywordDensity:_,structuredData:te,alternativeText:ae,lastUpdatedAt:oe}}};Y.set(P).then(async()=>{le(P),G(Z=>!Z)}),R({type:"success",message:{id:"notification.success.settings",defaultMessage:`Settings saved for ${k[m?.uid]?.collectionName} content-type.`}})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.Button,{variant:"tertiary",startIcon:(0,e.jsx)(he(),{}),onClick:T=>Re(T),children:O({id:(0,s.g)("SEOPage.info.config"),defaultMessage:"Settings"})}),ve&&(0,e.jsxs)(ie.k,{onClose:()=>G(T=>!T),labelledBy:"title",children:[(0,e.jsx)(re.r,{children:(0,e.jsx)(u.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:O({id:(0,s.g)("SEOPage.info.settings"),defaultMessage:"Settings"})})}),(0,e.jsxs)(ce.c,{children:[(0,e.jsx)(y.a,{paddingBottom:8,paddingTop:4,children:(0,e.jsx)(o.bQ,{title:O({id:"Information",defaultMessage:"Information"}),subtitle:O({id:(0,s.g)("HomePage.info.settings.information"),defaultMessage:"Disable SEO checks for this specific content-type."}),icon:(0,e.jsx)(Q(),{}),iconBackground:"primary100"})}),(0,e.jsxs)(D.J,{children:[(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:M,onChange:()=>$(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.meta-title-check"),defaultMessage:"Meta Title"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:H,onChange:()=>K(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.meta-description-check"),defaultMessage:"Meta Description"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:A,onChange:()=>I(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.meta-robots-check"),defaultMessage:"Meta Robots"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:N,onChange:()=>U(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.meta-social-check"),defaultMessage:"Meta Social"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:z,onChange:()=>J(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.word-count-check"),defaultMessage:"Word Count"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:X,onChange:()=>q(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.canonical-url-check"),defaultMessage:"Canonical URL"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:_,onChange:()=>ee(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.keyword-density-check"),defaultMessage:"Keyword Density"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:te,onChange:()=>ne(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.structured-data-check"),defaultMessage:"Structured Data"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:ae,onChange:()=>se(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.alternative-text-check"),defaultMessage:"Alt Text"})})]})}),(0,e.jsx)(y.a,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,e.jsxs)(g.B,{horizontal:!0,spacing:4,padding:3,children:[(0,e.jsx)(f.Switch,{label:"Switch",selected:oe,onChange:()=>de(T=>!T)}),(0,e.jsx)(u.Typography,{variant:"delta",children:O({id:(0,s.g)("SEOPage.info.settings.last-updated-at-check"),defaultMessage:"Last Updated At"})})]})})]})]}),(0,e.jsx)(ue.j,{startActions:(0,e.jsx)(L.Button,{onClick:()=>G(T=>!T),variant:"tertiary",children:O({id:(0,s.g)("SEOPage.info.settings.cancel.button"),defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(L.Button,{onClick:T=>Me(T),children:O({id:(0,s.g)("SEOPage.info.settings.save.button"),defaultMessage:"Save"})})})})]})]})};var F=t(87371),ye=t(50707),V=t.n(ye);const xe=({contentTypes:m})=>{const{formatMessage:R}=(0,d.A)();return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Box,{padding:8,children:(0,e.jsxs)(F.TabGroup,{label:"label",id:"tabs",variant:"simple",children:[(0,e.jsxs)(F.Tabs,{children:[(0,e.jsx)(F.Tab,{children:(0,e.jsx)(u.Typography,{children:R({id:(0,s.g)("SEOPage.tab.collection-type-title"),defaultMessage:"Collection Types"})})}),(0,e.jsx)(F.Tab,{children:(0,e.jsx)(u.Typography,{variant:"omega",children:R({id:(0,s.g)("SEOPage.tab.single-type-title"),defaultMessage:"Single Types"})})}),(0,e.jsx)(F.Tab,{children:(0,e.jsx)(u.Typography,{variant:"omega",children:R({id:(0,s.g)("SEOPage.tab.plugin-title"),defaultMessage:"Plugins"})})})]}),(0,e.jsxs)(F.TabPanels,{children:[(0,e.jsx)(F.TabPanel,{children:(0,e.jsxs)(h.Table,{colCount:2,rowCount:m.collectionTypes.length,children:[(0,e.jsx)(h.Thead,{children:(0,e.jsx)(h.Tr,{children:(0,e.jsx)(h.Th,{children:(0,e.jsx)(u.Typography,{variant:"sigma",children:R({id:(0,s.g)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"})})})})}),(0,e.jsx)(h.Tbody,{children:m&&m.collectionTypes&&!V().isEmpty(m.collectionTypes)?m.collectionTypes.map(M=>(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Td,{children:(0,e.jsx)(u.Typography,{textColor:"neutral800",children:M.globalId})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(x.Flex,{justifyContent:"right",alignItems:"right",children:M.seo?(0,e.jsx)(W,{item:M}):(0,e.jsx)(B.z,{startIcon:(0,e.jsx)(S(),{}),variant:"secondary",href:`/plugins/content-type-builder/content-types/${M.uid}`,children:R({id:(0,s.g)("SEOPage.info.add"),defaultMessage:"Add component"})})})})]},M.uid)):(0,e.jsx)(c.Box,{padding:8,background:"neutral0",children:(0,e.jsx)(b.EmptyStateLayout,{icon:(0,e.jsx)(C.r,{}),content:R({id:(0,s.g)("SEOPage.info.no-collection-types"),defaultMessage:"You don't have any collection-types yet..."}),action:(0,e.jsx)(B.z,{to:"/plugins/content-type-builder",variant:"secondary",startIcon:(0,e.jsx)(S(),{}),children:R({id:(0,s.g)("SEOPage.info.create-collection-type"),defaultMessage:"Create your first collection-type"})})})})})]})}),(0,e.jsx)(F.TabPanel,{children:(0,e.jsxs)(h.Table,{colCount:2,rowCount:m.singleTypes.length,children:[(0,e.jsx)(h.Thead,{children:(0,e.jsx)(h.Tr,{children:(0,e.jsx)(h.Th,{children:(0,e.jsx)(u.Typography,{variant:"sigma",children:R({id:(0,s.g)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"})})})})}),(0,e.jsx)(h.Tbody,{children:m&&m.singleTypes&&!V().isEmpty(m.singleTypes)?m.singleTypes.map(M=>(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Td,{children:(0,e.jsx)(u.Typography,{textColor:"neutral800",children:M.globalId})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(x.Flex,{justifyContent:"right",alignItems:"right",children:M.seo?(0,e.jsx)(W,{item:M}):(0,e.jsx)(B.z,{startIcon:(0,e.jsx)(S(),{}),variant:"secondary",href:`/admin/plugins/content-type-builder/content-types/${M.uid}`,children:R({id:(0,s.g)("SEOPage.info.add"),defaultMessage:"Add component"})})})})]},M.uid)):(0,e.jsx)(c.Box,{padding:8,background:"neutral0",children:(0,e.jsx)(b.EmptyStateLayout,{icon:(0,e.jsx)(C.r,{}),content:R({id:(0,s.g)("SEOPage.info.no-single-types"),defaultMessage:"You don't have any single-types yet..."}),action:(0,e.jsx)(B.z,{to:"/admin/plugins/content-type-builder",variant:"secondary",startIcon:(0,e.jsx)(S(),{}),children:R({id:(0,s.g)("SEOPage.info.create-single-type"),defaultMessage:"Create your first single-type"})})})})})]})}),(0,e.jsx)(F.TabPanel,{children:(0,e.jsxs)(h.Table,{colCount:2,rowCount:m.plugins.length,children:[(0,e.jsx)(h.Thead,{children:(0,e.jsx)(h.Tr,{children:(0,e.jsx)(h.Th,{children:(0,e.jsx)(u.Typography,{variant:"sigma",children:R({id:(0,s.g)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"})})})})}),(0,e.jsx)(h.Tbody,{children:m&&m.plugins&&!V().isEmpty(m.plugins)?m.plugins.map(M=>(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Td,{children:(0,e.jsx)(u.Typography,{textColor:"neutral800",children:M.globalId})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(x.Flex,{justifyContent:"right",alignItems:"right",children:M.seo?(0,e.jsx)(W,{item:M}):(0,e.jsx)(B.z,{startIcon:(0,e.jsx)(S(),{}),variant:"secondary",href:`/admin/plugins/content-type-builder/content-types/${M.uid}`,children:R({id:(0,s.g)("SEOPage.info.add"),defaultMessage:"Add component"})})})})]},M.uid)):(0,e.jsx)(c.Box,{padding:8,background:"neutral0",children:(0,e.jsx)(b.EmptyStateLayout,{icon:(0,e.jsx)(C.r,{}),content:R({id:(0,s.g)("SEOPage.info.no-plugin-content-type"),defaultMessage:"You don't have any plugin content-type yet..."})})})})]})})]})]})})})};var pe=t(98133);const je=m=>{const{formatMessage:R}=(0,d.A)();return(0,e.jsx)(c.Box,{background:"neutral100",children:(0,e.jsx)(pe.BaseHeaderLayout,{secondaryAction:m?null:(0,e.jsx)(LinkButton,{variant:"tertiary",to:"/admin/plugins/content-type-builder/component-categories/shared/shared.seo",startIcon:(0,e.jsx)(Pencil,{}),children:R({id:(0,s.g)("SEOPage.header.button.edit-component"),defaultMessage:"Edit SEO component"})}),title:R({id:(0,s.g)("SEOPage.header.title"),defaultMessage:"SEO"}),subtitle:R({id:(0,s.g)("SEOPage.header.subtitle"),defaultMessage:"Optimize your content to be SEO friendly"}),as:"h2"})})},me=()=>{const{formatMessage:m}=(0,d.A)(),{lockAppWithAutoreload:R,unlockAppWithAutoreload:M}=(0,o.Ip)(),[$,H]=(0,n.useState)(!0),[K,A]=(0,n.useState)(!1),I=(0,n.useRef)({}),N=(0,n.useRef)({});return(0,n.useEffect)(()=>{(async()=>{if(I.current=await E(),N.current=await v(),!I.current)try{R(),await p()}catch(z){console.log(z)}finally{M(),A(!0)}})().then(()=>{H(!1)})},[K]),$?(0,e.jsx)(o.Bl,{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(je,{seoComponent:I.current}),(0,e.jsx)(c.Box,{paddingLeft:8,paddingRight:8,children:(0,e.jsx)(o.bQ,{title:m({id:"Information",defaultMessage:"Information"}),subtitle:m({id:(0,s.g)("HomePage.info.information"),defaultMessage:"When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."}),icon:(0,e.jsx)(Q(),{}),iconBackground:"primary100"})}),(0,e.jsx)(xe,{contentTypes:N.current})]})},be=(0,n.memo)(me);var Te=t(30797);const Se=()=>(0,e.jsx)(o.kz,{permissions:Te.A.main,children:(0,e.jsx)("div",{children:(0,e.jsx)(i.dO,{children:(0,e.jsx)(i.qh,{path:`/plugins/${l()}`,component:be,exact:!0})})})})},81035:(j,a,t)=>{t.d(a,{J:()=>n});var e=t(63891);const n=e.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:i})=>i.spaces[4]};
`}}]);