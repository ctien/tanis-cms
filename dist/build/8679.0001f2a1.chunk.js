"use strict";(self.webpackChunktanis_cms=self.webpackChunktanis_cms||[]).push([[8679],{48679:(H,L,s)=>{s.d(L,{ProtectedEditPage:()=>X});var t=s(92132),I=s(21272),i=s(94061),M=s(83997),m=s(30893),h=s(85963),B=s(90151),A=s(68074),R=s(7537),g=s(5287),U=s(38413),c=s(55356),T=s(4198),W=s(21610),o=s(34372),K=s(46270),f=s(76885),p=s(54894),j=s(17703),Q=s(71389),x=s(12083),l=s(58896),Y=s(96110),$=s(9454),ns=s(15126),Es=s(63299),is=s(67014),rs=s(59080),ds=s(79275),ls=s(14718),es=s(82437),Ms=s(5790),Ps=s(35223),Os=s(5409),Ds=s(74930),ms=s(2600),hs=s(48940),As=s(41286),Rs=s(56336),gs=s(13426),vs=s(84624),Cs=s(77965),Ls=s(54257),Is=s(71210),Bs=s(51187),Us=s(39404),cs=s(58692),Ts=s(501),Ws=s(57646),Ks=s(23120),fs=s(44414),js=s(25962),xs=s(14664),us=s(42588),ys=s(90325),ps=s(62785),Ss=s(87443),Ns=s(41032),Fs=s(22957),Vs=s(93179),zs=s(73055),Hs=s(15747),Qs=s(85306),Ys=s(26509),$s=s(32058),Gs=s(81185),Js=s(82261),Zs=s(412),Xs=s(94710);const G=({disabled:n,role:a,values:O,errors:_,onChange:r,onBlur:v})=>{const{formatMessage:E}=(0,p.A)();return(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(i.a,{children:[(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:a?a.name:E({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:a?a.description:E({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:E({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(B.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.k,{disabled:n,name:"name",error:_.name&&E({id:_.name}),label:E({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:v,required:!0,value:O.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.T,{disabled:n,label:E({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&E({id:_.name}),onChange:r,onBlur:v,children:O.description||""})})]})]})})},J=x.Ik().shape({name:x.Yj().required(o.iW.required),description:x.Yj().optional()}),Z=()=>{const n=(0,o.hN)(),{formatMessage:a}=(0,p.A)(),_=(0,j.W5)("/settings/roles/:id")?.params.id,r=I.useRef(null),{lockApp:v,unlockApp:E}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:N}=(0,o.wq)(),{isLoading:w,data:F}=(0,l.A)({role:_??""}),{roles:k,isLoading:V,refetch:q}=(0,Y.u)({id:_},{refetchOnMountOrArgChange:!0}),P=k[0]??{},{data:ss,isLoading:ts}=(0,l.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,l.G)(),[as]=(0,l.E)();if(!_)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(u,C)=>{try{v();const{permissionsToSend:D,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await _s({id:_,...u});if("error"in d){(0,l.x)(d.error)&&d.error.name==="ValidationError"?C.setErrors(N(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&D){const e=await as({id:d.data.id,permissions:D});if("error"in e){(0,l.x)(e.error)&&e.error.name==="ValidationError"?C.setErrors(N(e.error)):n({type:"warning",message:S(e.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{E()}},z=!V&&P.code==="strapi-super-admin";return(0,t.jsxs)(U.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:J,validateOnChange:!1,children:({handleSubmit:u,values:C,errors:D,handleChange:y,handleBlur:d,isSubmitting:e})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(c.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:e,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.N,{as:Q.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(G,{disabled:z,errors:D,values:C,onChange:y,onBlur:d,role:P}),!w&&!V&&!ts&&F?(0,t.jsx)(i.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)($.P,{isFormDisabled:z,permissions:ss,ref:r,layout:F})}):(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},X=()=>{const n=(0,l.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:O,canUpdate:_}}=(0,o.ec)(n);return a?(0,t.jsx)(o.Bl,{}):!O&&!_?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(Z,{})}},96110:(H,L,s)=>{s.d(L,{u:()=>m});var t=s(21272),I=s(34372),i=s(54894),M=s(58896);const m=(h={},B)=>{const{locale:A}=(0,i.A)(),R=(0,I.QM)(A,{sensitivity:"base"}),{data:g,error:U,isError:c,isLoading:T,refetch:W}=(0,M.z)(h,B);return{roles:t.useMemo(()=>[...g??[]].sort((K,f)=>R.compare(K.name,f.name)),[g,R]),error:U,isError:c,isLoading:T,refetch:W}}}}]);
