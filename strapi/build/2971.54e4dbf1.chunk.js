"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2971,7230],{52971:(V,R,e)=>{e.d(R,{ProtectedCreatePage:()=>k});var s=e(74081),u=e(87006),M=e(88220),L=e(13067),U=e(7230),B=e(15816),K=e(97442),D=e(13576),g=e(87830),o=e(47184),_=e(364),O=e(27279),W=e(59461),S=e(71563),v=e(49204),b=e(47853),T=e(74919),N=e(29206),se=e(40464),te=e(98934),ne=e(43433),ae=e(75719),G=e(8175),oe=e(6078),re=e(51943),p=e(55783),ie=e(92249),z=e(41942),$=e(22919),X=e(53915),de=e(75041),le=e(30200),_e=e(91379),Q=e(33299),Ee=e(33409),J=e(63645),ce=e(7988),he=e(7055),y=e(26757),I=e(58311),j=e(24840),ge=e(29510),F=e(16946),Me=e(10124),Pe=e(69530),Y=e(86961),me=e(51527),ue=e(19764),Oe=e(42982),De=e(26126),ve=e(64797),fe=e(85811),w=e(5769),Ce=e(1350);const k=()=>{const q=(0,M.j)(L.s);return(0,s.jsx)(u.O4,{permissions:q.settings?.webhooks.create,children:(0,s.jsx)(U.E,{})})}},7230:(V,R,e)=>{e.r(R),e.d(R,{E:()=>ee,a:()=>k,b:()=>Ke});var s=e(74081),u=e(27279),M=e(10701),L=e(2878),U=e(77970),B=e(96226),K=e(25191),D=e(4540),g=e(51094),o=e(10989),_=e(32370),O=e(67472),W=e(22572),S=e(73411),v=e(93415),b=e(23298),T=e(74577),N=e(12881),se=e(1782),te=e(8295),ne=e(61121),ae=e(27875),G=e(48102),oe=e(74758),re=e(73354),p=e(87006),ie=e(47533),z=e(51447),$=e(88220),X=e(5769),de=e(13067),le=e(79213),_e=e(36938),Q=e(95066),Ee=e(34547),J=e(59082),ce=e(64820),he=e(76827),y=e(71563),I=e(61020),j=e(47853),ge=e(76873),F=e(72450),Me=e(1350);const[Pe,Y]=(0,ge.k)("WebhookEvent"),me=({children:t})=>{const{formatMessage:n}=(0,I.Z)(),{collectionTypes:a,isLoading:c}=(0,X.u)(),r=u.useMemo(()=>a.some(i=>i.options?.draftAndPublish===!0),[a]),E=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,s.jsx)(Pe,{isDraftAndPublish:r,children:(0,s.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.Q,{"aria-hidden":!0,children:E}),c&&(0,s.jsx)(U.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,s.jsx)(ue,{"aria-label":E,children:t})]})})},ue=(0,F.ZP)(B.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,Oe=t=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return t&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},De=({getHeaders:t=Oe})=>{const{isDraftAndPublish:n}=Y("Headers"),{formatMessage:a}=(0,I.Z)(),c=t(n);return(0,s.jsx)(K.S,{children:(0,s.jsxs)(D.Z,{children:[(0,s.jsx)(g.g,{children:(0,s.jsx)(o.T,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),c.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,s.jsx)(g.g,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,s.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,s.jsx)(g.g,{children:(0,s.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},ve=({providedEvents:t})=>{const{isDraftAndPublish:n}=Y("Body"),a=t||fe(n),{values:c,handleChange:r}=(0,y.u6)(),E="events",i=c.events,m=[],f=i.reduce((d,l)=>{const P=l.split(".")[0];return d[P]||(d[P]=[]),d[P].push(l),d},{}),h=({target:{name:d,value:l}})=>{const P=new Set(i);l?P.add(d):P.delete(d),r({target:{name:E,value:Array.from(P)}})},A=({target:{name:d,value:l}})=>{const P=new Set(i);l?a[d].forEach(x=>{m.includes(x)||P.add(x)}):a[d].forEach(x=>P.delete(x)),r({target:{name:E,value:Array.from(P)}})};return(0,s.jsx)(O.X,{children:Object.entries(a).map(([d,l])=>(0,s.jsx)(w,{disabledEvents:m,name:d,events:l,inputValue:f[d],handleSelect:h,handleSelectAll:A},d))})},fe=t=>{const n=["entry.create","entry.update","entry.delete"];return t&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},w=({disabledEvents:t=[],name:n,events:a=[],inputValue:c=[],handleSelect:r,handleSelectAll:E})=>{const{formatMessage:i}=(0,I.Z)(),m=a.filter(l=>!t.includes(l)),f=c.length>0,h=c.length===m.length,A=({target:{name:l}})=>{E({target:{name:l,value:!h}})},d=5;return(0,s.jsxs)(D.Z,{children:[(0,s.jsx)(g.f,{children:(0,s.jsx)(W.X,{indeterminate:f&&!h,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:A,value:h,children:Ce(n)})}),a.map(l=>(0,s.jsx)(g.f,{children:(0,s.jsx)(S.C,{disabled:t.includes(l),"aria-label":l,name:l,value:c.includes(l),onValueChange:P=>r({target:{name:l,value:P}})})},l)),a.length<d&&(0,s.jsx)(g.f,{colSpan:d-a.length})]})},Ce=t=>t.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),k={Root:me,Headers:De,Body:ve,Row:w},q=()=>(0,s.jsxs)(k.Root,{children:[(0,s.jsx)(k.Headers,{}),(0,s.jsx)(k.Body,{})]}),We=()=>{const{formatMessage:t}=(0,I.Z)(),{values:n,errors:a}=(0,y.u6)();return(0,s.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.Q,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,s.jsx)(v.x,{padding:8,background:"neutral100",hasRadius:!0,children:(0,s.jsx)(y.F2,{validateOnChange:!1,name:"headers",render:({push:c,remove:r})=>(0,s.jsxs)(b.r,{gap:4,children:[n.headers.map((E,i)=>{const m=a.headers?.[i],f=typeof m=="object"?m.key:void 0,h=typeof m=="object"?m.value:void 0;return(0,s.jsxs)(u.Fragment,{children:[(0,s.jsx)(T.P,{col:6,children:(0,s.jsx)(y.gN,{as:je,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:f})}),(0,s.jsx)(T.P,{col:6,children:(0,s.jsxs)(M.k,{alignItems:"flex-end",children:[(0,s.jsx)(v.x,{style:{flex:1},children:(0,s.jsx)(y.gN,{as:N.o,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:h})}),(0,s.jsx)(M.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:h?0:5,children:(0,s.jsx)(p.fG,{disabled:n.headers.length===1,onClick:()=>r(i),label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${E.key}`)}),(0,s.jsx)(T.P,{col:12,children:(0,s.jsx)(se.A,{type:"button",onClick:()=>{c({key:"",value:""})},startIcon:(0,s.jsx)(_e.Z,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},je=({name:t,onChange:n,value:a,...c})=>{const{values:{headers:r}}=(0,y.u6)(),[E,i]=u.useState([...Te]);u.useEffect(()=>{const h=Te.filter(A=>!r?.some(d=>d.key!==a&&d.key===A));i(h)},[r,a]);const m=h=>{n({target:{name:t,value:h}})},f=h=>{i(A=>[...A,h]),m(h)};return(0,s.jsx)(te.XU,{...c,onClear:()=>m(""),onChange:m,onCreateOption:f,placeholder:"",value:a,children:E.map(h=>(0,s.jsx)(ne.O,{value:h,children:h},h))})},Te=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],xe=({isPending:t,onCancel:n,response:a})=>{const{statusCode:c,message:r}=a??{},{formatMessage:E}=(0,I.Z)();return(0,s.jsx)(v.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(b.r,{gap:4,style:{alignItems:"center"},children:[(0,s.jsx)(T.P,{col:3,children:(0,s.jsx)(_.Z,{children:E({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,s.jsx)(T.P,{col:3,children:(0,s.jsx)(pe,{isPending:t,statusCode:c})}),(0,s.jsx)(T.P,{col:6,children:t?(0,s.jsx)(M.k,{justifyContent:"flex-end",children:(0,s.jsx)("button",{onClick:n,type:"button",children:(0,s.jsxs)(M.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(_.Z,{textColor:"neutral400",children:E({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,s.jsx)(H,{as:Q.Z,color:"neutral400"})]})})}):(0,s.jsx)(Ie,{statusCode:c,message:r})})]})})},H=F.ZP.svg(({theme:t,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,F.iv)`
          path {
            fill: ${t.colors[n]};
          }
        `:""}
`),pe=({isPending:t,statusCode:n})=>{const{formatMessage:a}=(0,I.Z)();return t||!n?(0,s.jsxs)(M.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(H,{as:Ee.Z}),(0,s.jsx)(_.Z,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,s.jsxs)(M.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(H,{as:J.Z,color:"success700"}),(0,s.jsx)(_.Z,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,s.jsxs)(M.k,{gap:2,alignItems:"center",children:[(0,s.jsx)(H,{as:Q.Z,color:"danger700"}),(0,s.jsxs)(_.Z,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},Ie=({statusCode:t,message:n})=>{const{formatMessage:a}=(0,I.Z)();return t?t>=200&&t<300?(0,s.jsx)(M.k,{justifyContent:"flex-end",children:(0,s.jsx)(_.Z,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?(0,s.jsx)(M.k,{justifyContent:"flex-end",children:(0,s.jsx)(M.k,{maxWidth:(0,p.Q1)(250),justifyContent:"flex-end",title:n,children:(0,s.jsx)(_.Z,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Re=({handleSubmit:t,triggerWebhook:n,isCreating:a,isTriggering:c,triggerResponse:r,data:E})=>{const{formatMessage:i}=(0,I.Z)(),[m,f]=u.useState(!1),h=(0,$.p)(q,async()=>(await e.e(1301).then(e.bind(e,11301))).EventsTableEE),A=l=>Object.keys(l).length?Object.entries(l).map(([P,x])=>({key:P,value:x})):[{key:"",value:""}],d=(0,y.TA)({initialValues:{name:E?.name||"",url:E?.url||"",headers:A(E?.headers||{}),events:E?.events||[]},async onSubmit(l,P){await t(l,P),P.resetForm({values:l})},validationSchema:Be({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return h?(0,s.jsx)(y.Hy,{value:d,children:(0,s.jsxs)(p.l0,{children:[(0,s.jsx)(ae.T,{primaryAction:(0,s.jsxs)(M.k,{gap:2,children:[(0,s.jsx)(G.z,{onClick:()=>{n(),f(!0)},variant:"tertiary",startIcon:(0,s.jsx)(ce.Z,{}),disabled:a||c,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,s.jsx)(G.z,{startIcon:(0,s.jsx)(J.Z,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:a?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):E?.name,navigationAction:(0,s.jsx)(le.r,{as:ie.OL,startIcon:(0,s.jsx)(he.Z,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,s.jsx)(oe.D,{children:(0,s.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:4,children:[m&&(0,s.jsx)(xe,{isPending:c,response:r,onCancel:()=>f(!1)}),(0,s.jsx)(v.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(M.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(b.r,{gap:6,children:[(0,s.jsx)(T.P,{col:6,children:(0,s.jsx)(y.gN,{as:N.o,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,s.jsx)(T.P,{col:12,children:(0,s.jsx)(y.gN,{as:N.o,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,s.jsx)(We,{}),(0,s.jsx)(h,{})]})})]})})]})}):null},Le=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ue=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Be=({formatMessage:t})=>j.Ry().shape({name:j.Z_().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Le,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:j.Z_().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ue,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:j.Vo(n=>{const a=j.IX();if(n.length===1){const{key:c,value:r}=n[0];if(!c&&!r)return a}return a.of(j.Ry().shape({key:j.Z_().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:j.Z_().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:j.IX()}),ye=t=>({...t,headers:t.headers.reduce((n,{key:a,value:c})=>(a!==""&&(n[a]=c),n),{})}),ee=()=>{const n=(0,z.$B)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:c}=(0,z.k6)(),r=(0,p.lm)(),{_unstableFormatAPIError:E,_unstableFormatValidationErrors:i}=(0,p.So)(),{isLoading:m}=(0,X.u)(),[f,h]=u.useState(!1),[A,d]=u.useState(),{isLoading:l,webhooks:P,error:x,createWebhook:Se,updateWebhook:be,triggerWebhook:ke}=(0,Me.u)({id:n},{skip:a});u.useEffect(()=>{x&&r({type:"warning",message:E(x)})},[x,r,E]);const Ze=async()=>{try{h(!0);const Z=await ke(n);if("error"in Z){r({type:"warning",message:E(Z.error)});return}d(Z.data)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{h(!1)}},$e=async(Z,Ae)=>{try{if(a){const C=await Se(ye(Z));if("error"in C){(0,$.x)(C.error)&&C.error.name==="ValidationError"?Ae.setErrors(i(C.error)):r({type:"warning",message:E(C.error)});return}r({type:"success",message:{id:"Settings.webhooks.created"}}),c(`/settings/webhooks/${C.data.id}`)}else{const C=await be({id:n,...ye(Z)});if("error"in C){(0,$.x)(C.error)&&C.error.name==="ValidationError"?Ae.setErrors(i(C.error)):r({type:"warning",message:E(C.error)});return}r({type:"success",message:{id:"notification.form.success.fields"}})}}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(l||m)return(0,s.jsx)(p.dO,{});const[Ne]=P??[];return(0,s.jsxs)(re.o,{children:[(0,s.jsx)(p.SL,{name:"Webhooks"}),(0,s.jsx)(Re,{data:Ne,handleSubmit:$e,triggerWebhook:Ze,isCreating:a,isTriggering:f,triggerResponse:A})]})},Ke=Object.freeze(Object.defineProperty({__proto__:null,EditPage:ee,ProtectedEditPage:()=>{const t=(0,$.j)(de.s);return(0,s.jsx)(p.O4,{permissions:t.settings?.webhooks.update,children:(0,s.jsx)(ee,{})})}},Symbol.toStringTag,{value:"Module"}))},5769:(V,R,e)=>{e.d(R,{u:()=>K});var s=e(27279),u=e(87006),M=e(88220);const L=M.m.injectEndpoints({endpoints:D=>({getComponents:D.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:g=>g.data}),getContentTypes:D.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:g=>g.data})}),overrideExisting:!1}),{useGetComponentsQuery:U,useGetContentTypesQuery:B}=L;function K(){const{_unstableFormatAPIError:D}=(0,u.So)(),g=(0,u.lm)(),o=U(),_=B();s.useEffect(()=>{_.error&&g({type:"warning",message:D(_.error)})},[_.error,D,g]),s.useEffect(()=>{o.error&&g({type:"warning",message:D(o.error)})},[o.error,D,g]);const O=o.isLoading||_.isLoading,W=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind==="collectionType"&&v.isDisplayed),[_?.data]),S=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind!=="collectionType"&&v.isDisplayed),[_?.data]);return{isLoading:O,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:W,singleTypes:S}}},1350:(V,R,e)=>{e.d(R,{u:()=>D});var s=e(88220);const u=s.m.injectEndpoints({endpoints:g=>({getWebhooks:g.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,_,O)=>typeof O=="object"&&"id"in O?[{type:"Webhook",id:O.id}]:[...o?.map(({id:W})=>({type:"Webhook",id:W}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:g.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:g.mutation({query:({id:o,..._})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:_}),transformResponse:o=>o.data,invalidatesTags:(o,_,{id:O})=>[{type:"Webhook",id:O}]}),triggerWebhook:g.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:g.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,_,{ids:O})=>O.map(W=>({type:"Webhook",id:W}))})}),overrideExisting:!1}),{useGetWebhooksQuery:M,useCreateWebhookMutation:L,useUpdateWebhookMutation:U,useTriggerWebhookMutation:B,useDeleteManyWebhooksMutation:K}=u,D=(g=void 0,o)=>{const{data:_,isLoading:O,error:W}=M(g,o),[S]=L(),[v]=U(),[b]=B(),[T]=K();return{webhooks:_,isLoading:O,error:W,createWebhook:S,updateWebhook:v,triggerWebhook:b,deleteManyWebhooks:T}}}}]);
