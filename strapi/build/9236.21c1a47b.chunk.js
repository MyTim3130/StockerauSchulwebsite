"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[9236],{79236:(y,D,s)=>{s.d(D,{ProtectedSSO:()=>N});var t=s(74081),g=s(27997),R=s(73354),L=s(27875),m=s(48102),h=s(74758),v=s(10701),A=s(32370),M=s(23298),E=s(74577),C=s(2548),I=s(5627),c=s(78955),O=s(97232),o=s(87006),T=s(59082),B=s(71563),S=s(61020),d=s(47853),r=s(88220),j=s(51950),q=s(15816),ss=s(97442),ts=s(13576),as=s(87830),os=s(47184),_s=s(364),ns=s(27279),es=s(59461),ls=s(49204),Es=s(74919),is=s(29206),ds=s(40464),rs=s(98934),Ms=s(43433),Os=s(75719),Ps=s(8175),Ds=s(6078),gs=s(51943),Rs=s(55783),Ls=s(92249),ms=s(41942),hs=s(22919),vs=s(53915),As=s(75041),Cs=s(30200),Is=s(91379),cs=s(33299),Ts=s(33409),Bs=s(63645),Ks=s(7988),Us=s(7055),Ws=s(26757),fs=s(58311),us=s(24840),ys=s(29510),Ss=s(16946),js=s(10124),xs=s(69530),ps=s(86961),Ns=s(51527),zs=s(19764),Fs=s(42982),Vs=s(26126);const x=d.Ry().shape({autoRegister:d.Xg().required(o.I0.required),defaultRole:d.nK().when("autoRegister",(a,_)=>a?_.required(o.I0.required):_.nullable()),ssoLockedRoles:d.IX().nullable().of(d.nK().when("ssoLockedRoles",(a,_)=>a?_.required(o.I0.required):_.nullable()))}),p=()=>{(0,o.go)();const{formatMessage:a}=(0,S.Z)(),_=(0,r.j)(l=>l.admin_app.permissions),{lockApp:z,unlockApp:F}=(0,o.o1)(),K=(0,o.lm)(),{_unstableFormatAPIError:V,_unstableFormatValidationErrors:X}=(0,o.So)(),{isLoading:Z,data:G}=(0,r.W)(),[J,{isLoading:H}]=(0,r.X)(),{isLoading:Q,allowedActions:{canUpdate:U,canReadRoles:Y}}=(0,o.ss)({..._.settings?.sso,readRoles:_.settings?.roles.read??[]}),{roles:f,isLoading:$}=(0,j.u)(void 0,{skip:!Y}),b=async(l,P)=>{z();try{const n=await J(l);if("error"in n){(0,r.x)(n.error)&&n.error.name==="ValidationError"?P.setErrors(X(n.error)):K({type:"warning",message:V(n.error)});return}K({type:"success",message:{id:"notification.success.saved"}})}catch{K({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred, please try again."}})}finally{F()}},u=$||Q||Z;return(0,t.jsxs)(g.A,{children:[(0,t.jsx)(o.SL,{name:"SSO"}),(0,t.jsx)(R.o,{"aria-busy":H||u,tabIndex:-1,children:(0,t.jsx)(B.J9,{onSubmit:b,initialValues:G||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},validationSchema:x,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:l,isSubmitting:P,values:n,setFieldValue:k,dirty:w,errors:i})=>(0,t.jsxs)(o.l0,{children:[(0,t.jsx)(L.T,{primaryAction:(0,t.jsx)(m.z,{disabled:!w,loading:P,startIcon:(0,t.jsx)(T.Z,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(h.D,{children:P||u?(0,t.jsx)(o.dO,{}):(0,t.jsxs)(v.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(A.Z,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(M.r,{gap:4,children:[(0,t.jsx)(E.P,{col:6,s:12,children:(0,t.jsx)(C.s,{disabled:!U,checked:n.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:l})}),(0,t.jsx)(E.P,{col:6,s:12,children:(0,t.jsx)(I.P,{disabled:!U,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole,defaultMessage:i.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:e=>l({target:{name:"defaultRole",value:e}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:n.defaultRole,children:f.map(({id:e,name:W})=>(0,t.jsx)(c.W,{value:e.toString(),children:W},e))})}),(0,t.jsx)(E.P,{col:6,s:12,children:(0,t.jsx)(O.NU,{disabled:!U,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles,defaultMessage:i.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:e=>l({target:{value:e,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>k("ssoLockedRoles",[]),value:n.ssoLockedRoles||[],withTags:!0,children:f.map(({id:e,name:W})=>(0,t.jsx)(O.ML,{value:e.toString(),children:W},e))})})]})]})})]})})})]})},N=()=>{const a=(0,r.j)(_=>_.admin_app.permissions.settings?.sso?.main);return(0,t.jsx)(o.O4,{permissions:a,children:(0,t.jsx)(p,{})})}},51950:(y,D,s)=>{s.d(D,{u:()=>m});var t=s(27279),g=s(87006),R=s(61020),L=s(88220);const m=(h={},v)=>{const{locale:A}=(0,R.Z)(),M=(0,g.Xe)(A,{sensitivity:"base"}),{data:E,error:C,isError:I,isLoading:c,refetch:O}=(0,L.z)(h,v);return{roles:t.useMemo(()=>[...E??[]].sort((T,B)=>M.compare(T.name,B.name)),[E,M]),error:C,isError:I,isLoading:c,refetch:O}}}}]);
