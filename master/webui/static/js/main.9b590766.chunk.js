(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{392:function(e,a,t){e.exports=t(488)},488:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(16),o=t.n(i),l=t(525),c=t(524),s=t(65),m=t(141),d=t(342),p=t(181),u=t(5),h=t(339),f=t(382),g=t(3),b=t(105),E=t(520),v=t(66),y=t(492),w=t(493),x=t(519),k=t(307),j=t(343),O=t.n(j),N=t(344),S=t.n(N),I=t(355),C=t.n(I),B=t(354),z=t.n(B),T=t(356),D=t.n(T),P=t(352),M=t.n(P),R=t(350),W=t.n(R),U=t(353),F=t.n(U),L=t(345),H=t.n(L),A=t(351),J=t.n(A),V=t(347),q=t.n(V),G=t(348),K=t.n(G),Q=t(346),X=t.n(Q),Y=t(349),Z=t.n(Y),$=[{id:"Sources",children:[{id:"Upload",icon:r.a.createElement(O.a,null),active:!0},{id:"Configure",icon:r.a.createElement(S.a,null)},{id:"Explore",icon:r.a.createElement(H.a,null)}]},{id:"Models",children:[{id:"Configure",icon:r.a.createElement(X.a,null)},{id:"Train",icon:r.a.createElement(q.a,null)},{id:"Predict",icon:r.a.createElement(K.a,null)}]},{id:"Operations",children:[{id:"View",icon:r.a.createElement(Z.a,null)},{id:"Create",icon:r.a.createElement(W.a,null)},{id:"Run",icon:r.a.createElement(J.a,null)}]},{id:"Dataflows",children:[{id:"View",icon:r.a.createElement(M.a,null)},{id:"Create",icon:r.a.createElement(F.a,null)},{id:"Run",icon:r.a.createElement(z.a,null)},{id:"Deploy",icon:r.a.createElement(C.a,null)}]},{id:"Settings",children:[{id:"Backend",icon:r.a.createElement(D.a,null)}]}];var _=Object(u.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(f.a)(e,["classes"]);return r.a.createElement(v.a,Object.assign({variant:"permanent"},t),r.a.createElement(y.a,{disablePadding:!0},r.a.createElement(w.a,{className:Object(g.a)(a.firebase,a.item,a.itemCategory)},"DFFML"),$.map((function(e){var t=e.id,n=e.children;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(w.a,{className:a.categoryHeader},r.a.createElement(k.a,{classes:{primary:a.categoryHeaderPrimary}},t)),n.map((function(e){var n=e.id,i=e.icon,o=e.active;return r.a.createElement(b.b,{key:n,style:{textDecoration:"none"},to:"/"+t.toLowerCase()+"/"+n.toLowerCase()},r.a.createElement(w.a,{button:!0,className:Object(g.a)(a.item,o&&a.itemActiveItem)},r.a.createElement(x.a,{className:a.itemIcon},i),r.a.createElement(k.a,{classes:{primary:a.itemPrimary}},n)))})),r.a.createElement(E.a,{className:a.divider}))}))))})),ee=t(521),ae=t(308),te=t(86),ne=t(108),re=t(258),ie=t(192),oe=t(309),le=t(310),ce=t(193),se=t(243),me=t.n(se),de=t(194),pe=t.n(de);Object(u.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return r.a.createElement(ne.a,{className:a.paper},r.a.createElement(ee.a,{className:a.searchBar,position:"static",color:"default",elevation:0},r.a.createElement(ae.a,null,r.a.createElement(re.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(re.a,{item:!0},r.a.createElement(me.a,{className:a.block,color:"inherit"})),r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(oe.a,{fullWidth:!0,placeholder:"Search by email address, phone number, or user UID",InputProps:{disableUnderline:!0,className:a.searchInput}})),r.a.createElement(re.a,{item:!0},r.a.createElement(ie.a,{variant:"contained",color:"primary",className:a.addUser},"Add user"),r.a.createElement(le.a,{title:"Reload"},r.a.createElement(ce.a,null,r.a.createElement(pe.a,{className:a.block,color:"inherit"}))))))),r.a.createElement("div",{className:a.contentWrapper},r.a.createElement(te.a,{color:"textSecondary",align:"center"},"No users for this project yet")))}));var ue=t(360),he=t.n(ue),fe=t(98),ge={"/sources/upload":{title:"Files and Uploads",help:"https://intel.github.io/dffml/webui/help/for/sources"},"/sources/configure":{title:"Configure Data Sources",help:"https://intel.github.io/dffml/webui/help/for/sources"},"/sources/explore":{title:"Explore Data Sources",help:"https://intel.github.io/dffml/webui/help/for/sources"}};var be=Object(u.a)((function(e){return{secondaryBar:{zIndex:0},toolbar:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{borderColor:"rgba(255, 255, 255, 0.7)"}}}))((function(e){var a=e.classes,t=(e.onDrawerToggle,Object(fe.h)());return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0},r.a.createElement(ae.a,{className:a.toolbar},r.a.createElement(re.a,{container:!0,alignItems:"center",spacing:1},r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(te.a,{color:"inherit",variant:"h5",component:"h1"},ge[t.path].title)),r.a.createElement(re.a,{item:!0},r.a.createElement(le.a,{title:"Help"},r.a.createElement(ce.a,{color:"inherit"},r.a.createElement(he.a,null))))))))})),Ee=t(361),ve=t(362),ye=t(381),we=t(363),xe=t(383),ke=t(33),je=t.n(ke),Oe=t(364),Ne=t.n(Oe),Se=t(369),Ie=t(379);function Ce(){var e=r.a.useState([]),a=Object(s.a)(e,2),t=a[0],n=a[1],i=Object(Ie.a)("/api/service/files",fetch),o=i.data;return i.error?r.a.createElement("div",null,"failed to load"):o?(function(e,a){var t,n,r,i,o,l;je.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!e.bodyUsed){c.next=2;break}return c.abrupt("return");case 2:return c.next=4,je.a.awrap(e.json());case 4:for(r in t=c.sent,n={},t)t[r].id=Number(r),(i=t[r].filename.split("/")).pop(),n[i.join("/")+"/"]=!0;for(n.hasOwnProperty("/")&&delete n["/"],r=0;r<Object.keys(n).length;r++)n[Object.keys(n)[r]]=t.length+r;for(r in n)(i=r.split("/")).pop(),o={id:n[r],filename:i[i.length-1]+"/"},i.pop(),l=i.join("/")+"/",n.hasOwnProperty(l)&&(o.parentId=n[l]),t.push(o);c.t0=je.a.keys(t);case 11:if((c.t1=c.t0()).done){c.next=22;break}if(r=c.t1.value,!t[r].filename.endsWith("/")){c.next=15;break}return c.abrupt("continue",11);case 15:i=t[r].filename.split("/"),t[r].filename=i[i.length-1],i.pop(),l=i.join("/")+"/",n.hasOwnProperty(l)&&(t[r].parentId=n[l]),c.next=11;break;case 22:console.log(t),a(t);case 24:case"end":return c.stop()}}))}(o,n),r.a.createElement(Ne.a,{title:"Files",data:t,columns:[{title:"Filename",field:"filename",removable:!1},{title:"Size (MB)",field:"size",type:"numeric"}],parentChildData:function(e,a){return a.find((function(a){return a.id===e.parentId}))},options:{selection:!0}})):r.a.createElement("div",null,"loading...")}var Be=function(e){function a(e){var t;return Object(Ee.a)(this,a),(t=Object(ye.a)(this,Object(we.a)(a).call(this,e))).state={files:[]},t}return Object(xe.a)(a,e),Object(ve.a)(a,[{key:"handleChange",value:function(e){this.setState({files:e})}},{key:"render",value:function(){return r.a.createElement(Se.a,{dropzoneText:"Drag and drop a file here or click",showFileNames:!0,acceptedFiles:[],onChange:this.handleChange.bind(this)})}}]),a}(r.a.Component);var ze=Object(u.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{className:a.paper},r.a.createElement(Be,null),r.a.createElement(ee.a,{className:a.searchBar,position:"static",color:"default",elevation:0},r.a.createElement(ae.a,null,r.a.createElement(re.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(oe.a,{fullWidth:!0,placeholder:"Path to place file at",InputProps:{disableUnderline:!0,className:a.searchInput}})),r.a.createElement(re.a,{item:!0},r.a.createElement(ie.a,{disabled:!0,variant:"contained",color:"primary",className:a.addUser},"Upload File"),r.a.createElement(le.a,{title:"Reload"},r.a.createElement(ce.a,null,r.a.createElement(pe.a,{className:a.block,color:"inherit"})))))))),r.a.createElement("br",null),r.a.createElement(ne.a,{className:a.paper},r.a.createElement(Ce,null)))})),Te=Object(p.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});Te=Object(d.a)({},Te,{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:Te.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:Te.palette.common.white}},MuiTab:{root:Object(m.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},Te.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:Te.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:Te.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var De={root:{display:"flex",minHeight:"100vh"},drawer:Object(m.a)({},Te.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:Te.spacing(6,4),background:"#eaeff1"},footer:{padding:Te.spacing(2),background:"#eaeff1"}};var Pe=Object(u.a)(De)((function(e){var a=e.classes,t=r.a.useState(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],m=function(){o(!i)};return r.a.createElement(c.a,{theme:Te},r.a.createElement(b.a,null,r.a.createElement("div",{className:a.root},r.a.createElement(l.a,null),r.a.createElement("nav",{className:a.drawer},r.a.createElement(h.a,{smUp:!0,implementation:"js"},r.a.createElement(_,{PaperProps:{style:{width:256}},variant:"temporary",open:i,onClose:m})),r.a.createElement(h.a,{xsDown:!0,implementation:"css"},r.a.createElement(_,{PaperProps:{style:{width:256}}}))),r.a.createElement("div",{className:a.app},r.a.createElement(fe.d,null,"// Begin the views",r.a.createElement(fe.b,{path:"/sources/upload"},r.a.createElement(be,{onDrawerToggle:m}),r.a.createElement("main",{className:a.main},r.a.createElement(ze,null))),"// When URL path is / redirect to the default route",r.a.createElement(fe.b,{path:"/",render:function(e){var a=e.location;return r.a.createElement(fe.a,{to:{pathname:"/sources/upload",state:{from:a}}})}})),r.a.createElement("footer",{className:a.footer})))))}));var Me=t(120),Re=Object(p.a)({"@global":{div:{"-ms-overflow-style":"none","scrollbar-width":"none"},"*::-webkit-scrollbar":{display:"none"}},palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:Me.a.A400},background:{default:"#fff"}}}),We=new(t(380).a)({routes:function(){this.namespace="/api",this.get("/service/files",(function(){return[{filename:"file.csv",size:3271},{filename:"there.csv",size:2310},{filename:"down1/other.csv",size:7157},{filename:"down1/down2/another.csv",size:56190},{filename:"down1/down2/also.csv",size:4654},{filename:"down1/down3/here.csv",size:12716}]}))}});console.log("Using fake server",We),o.a.render(r.a.createElement(c.a,{theme:Re},r.a.createElement(l.a,null),r.a.createElement(Pe,null)),document.querySelector("#root"))}},[[392,1,2]]]);
//# sourceMappingURL=main.9b590766.chunk.js.map