import{_ as se,R as ae,H as ne,r as l,f as le,J as oe,a as ie,o,c,d as m,w as ce,T as re,b as e,k as H,j as f,h as T,v as C,F as J,C as Q,I,S as U,U as ue,Q as G,P as q,D as de,t as M,p as fe,e as ve,V as _e}from"./index.4ac2831b.js";import{T as ge}from"./Toast.bc2025d1.js";const v=y=>(fe("data-v-93f0ddf9"),y=y(),ve(),y),me={id:"remodelacion"},pe={key:0,class:"fixed z-5 w-full h-full pt-5",style:{background:"#00000077",top:"0"}},he={class:"edit-dialog"},xe=v(()=>e("div",{class:"title flex"}," Editar Tip ",-1)),ye={class:"flex align-items-center justify-content-between w-full"},we={class:"agregador2 flex align-items-center justify-content-center"},be={class:"preview flex align-items-center justify-content-center"},ke=["src"],je={class:"flex justify-content-end"},Te={key:1,class:"loading flex align-items-center justify-content-center mt-3"},Ce={class:"field"},Ie=v(()=>e("label",{for:"title"},"Titulo del tip",-1)),Ue={class:"field"},Ve=v(()=>e("label",{for:"description"},"Texto del tip",-1)),Re={class:"flex justify-content-end"},$e={key:1,class:"loading flex align-items-center justify-content-center mt-3"},De=v(()=>e("div",{class:"main-title flex align-items-center justify-content-center"},"Remodelaci\xF3n de departamento ",-1)),Ee={class:"container grid"},Le={class:"col-12 lg:col-4"},qe={class:"login-form"},Me=v(()=>e("div",{class:"title flex"}," Crear un Tip ",-1)),Se=v(()=>e("div",{class:"form-text"}," Los tips creados apareceran en la seccion tips del sitio ",-1)),ze={class:"field"},Ae={class:"flex align-items-center justify-content-between w-full"},Ne={class:"agregador flex align-items-center justify-content-center"},Pe={class:"preview flex align-items-center justify-content-center"},Be=["src"],Fe={class:"field"},He=v(()=>e("label",{for:"title"},"T\xEDtulo del tip",-1)),Je={class:"field"},Qe=v(()=>e("label",{for:"description"},"Texto del tip",-1)),Ge={class:"flex justify-content-end"},Ke={key:1,class:"loading flex align-items-center justify-content-center"},Oe={class:"col-12 lg:col-8 pr-3"},We={class:"w-full"},Xe=v(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Im\xE1genes"),e("th",{class:"col text-center hidden md:flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"T\xEDtulo"),e("th",{class:"col text-center hidden md:flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Texto"),e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Acciones")])],-1)),Ye={class:"col text-center flex justify-content-center align-items-center"},Ze=["src","alt"],et={class:"col text-center hidden md:flex justify-content-center align-items-center"},tt={class:"outer-wrap"},st={class:"col text-center hidden md:flex justify-content-center align-items-center"},at={class:"outer-wrap"},nt={class:"col text-center flex justify-content-center align-items-center"},lt=["onClick"],ot=["onClick"],it={class:"flex flex-wrap justify-content-center"},ct=["onClick"],rt={__name:"Tips",setup(y){ae(a=>({"50c74014":$.value,"3a90454e":R.value,"1bef9efc":E.value,"177864a4":D.value}));const S=ne(I,"tips"),d=l(),w=l(),_=l(),V=l(),z=l([]),A=l(0),N=l(1),g=new FileReader,R=l("#8c623900"),$=l("#ffffff"),D=l("#8c623900"),E=l("#ffffff"),p=l(!1),u=l(!1);l(!1);const h=l(""),x=l(""),b=l(!1),i=l(),P=l(""),k=l(""),L=l(!1),K=a=>{const t=a.target;d.value=t.files[0],g.onload=()=>{const n=new Image;n.onload=()=>{w.value=g.result,d.value=a.target.files[0]},n.src=g.result},d.value&&g.readAsDataURL(d.value)},O=a=>{const t=a.target;_.value=t.files[0],g.onload=()=>{const n=new Image;n.onload=()=>{V.value=g.result,_.value=a.target.files[0]},n.src=g.result},_.value&&g.readAsDataURL(_.value)};le(async()=>{oe(S,a=>{let t=[],n=[];a.forEach(s=>{let j={id:s.id,name:s.data().name,title:s.data().title,texto:s.data().texto,url:s.data().url,created:s.data().created};t.length>=4&&(n.push(t),t=[]),t.push(j)}),t.length!=0&&(n.push(t),t=[]),N.value=n.length,z.value=n})});const W=()=>{if(!d.value||x.value==""||h.value==""){r("Por favor carge una imagen y relleno los textos antes.","warning");return}p.value=!0,U.child("tips/"+d.value.name).put(d.value).then(t=>{t.task.snapshot.ref.getDownloadURL().then(async n=>{await ue(S,{name:"tips/"+d.value.name,title:h.value,texto:x.value,url:n}),d.value=null,w.value=null,x.value="",h.value="",r("Tip creado con \xE9xito","success"),p.value=!1}).catch(n=>{console.log(n),r("Error en crear el tip","error"),p.value=!1})}).catch(t=>{console.log(t),r("Error en crear el tip","error"),p.value=!1})},X=a=>{U.child(a.name).delete().then(()=>{_e(q(I,"tips",a.id)),r("Tip eliminado con \xE9xito","success")}).catch(n=>{r("Error "+n.code+" al eliminar tip: "+n.message,"error")})},Y=a=>{A.value=a-1},B=a=>{if(a){R.value="#ffffff",$.value="#0031af";return}R.value="#ffffff00",$.value="#ffffff"},F=a=>{if(a){D.value="#ffffff",E.value="#0031af";return}D.value="#ffffff00",E.value="#ffffff"},r=(a,t)=>{P.value=a,t=="success"?k.value="#1f702c":t=="warning"?k.value="#86700d":k.value="#b14646",L.value=!0,setTimeout(function(){L.value=!1},2e3)},Z=async()=>{u.value=!0;let a=U.child(i.value.name);try{await a.delete()}catch(n){console.error("Se produjo un error: ",n)}a=U.child("tips/"+_.value.name),await a.put(_.value);const t=await a.getDownloadURL();G(q(I,"tips",i.value.id),{name:"tips/"+_.value.name,url:t}).then(()=>{r("Imagen cambiada con \xE9xito","success"),_.value=null,u.value=!1}).catch(n=>{r("Error "+n.code+" al cambiar la Imagen: "+n.message,"error"),u.value=!1})},ee=()=>{if(u.value=!0,i.value.title==""||i.value.texto==""){r("No pueden estar los Textos en blanco.","warning");return}G(q(I,"tips",i.value.id),{title:i.value.title,texto:i.value.texto}).then(()=>{r("Textos editado con \xE9xito","success"),u.value=!1}).catch(a=>{r("Error "+a.code+" al editar texto: "+a.message,"error"),u.value=!1})},te=a=>{i.value=a,b.value=!0};return(a,t)=>{const n=ie("font-awesome-icon");return o(),c("div",me,[m(re,{name:"fade"},{default:ce(()=>[L.value?(o(),de(ge,{key:0,message:P.value,type:k.value},null,8,["message","type"])):f("",!0)]),_:1}),b.value?(o(),c("div",pe,[e("div",{onClick:t[0]||(t[0]=s=>b.value=!1),style:{width:"100%",height:"100%",position:"fixed"}}),e("div",he,[e("div",{class:"boton-close select-none cursor-pointer flex justify-content-center align-items-center",onClick:t[1]||(t[1]=s=>b.value=!1)},[m(n,{icon:"fa-solid fa-xmark"})]),xe,e("div",ye,[e("div",we,[H(" A\xF1adir imagen "),e("input",{onMouseover:t[2]||(t[2]=s=>F(!0)),onMouseleave:t[3]||(t[3]=s=>F(!1)),onChange:O,type:"file",required:"true",accept:"image/*",class:"cursor-pointer"},null,32)]),e("div",be,[e("img",{src:V.value?V.value:i.value.url,alt:"preview"},null,8,ke)])]),e("div",je,[u.value?f("",!0):(o(),c("div",{key:0,class:"boton-mail select-none cursor-pointer mt-3",onClick:Z},"Cambiar Imagen")),u.value?(o(),c("div",Te,[m(n,{icon:"fa-solid fa-spinner","spin-pulse":""})])):f("",!0)]),e("div",Ce,[Ie,T(e("input",{type:"text",id:"title","onUpdate:modelValue":t[4]||(t[4]=s=>i.value.title=s),class:"outline-none",placeholder:"Titulo",required:"true",autofocus:""},null,512),[[C,i.value.title]])]),e("div",Ue,[Ve,T(e("textarea",{id:"description","onUpdate:modelValue":t[5]||(t[5]=s=>i.value.texto=s),class:"outline-none texto-imagen",rows:"4",placeholder:"Texto",required:"true",autofocus:""}," ",512),[[C,i.value.texto]])]),e("div",Re,[u.value?f("",!0):(o(),c("div",{key:0,class:"boton-mail select-none cursor-pointer mt-3",onClick:ee},"Cambiar textos")),u.value?(o(),c("div",$e,[m(n,{icon:"fa-solid fa-spinner","spin-pulse":""})])):f("",!0)])])])):f("",!0),De,e("div",Ee,[e("div",Le,[e("div",qe,[Me,Se,e("div",ze,[e("div",Ae,[e("div",Ne,[H(" A\xF1adir imagen "),e("input",{onMouseover:t[6]||(t[6]=s=>B(!0)),onMouseleave:t[7]||(t[7]=s=>B(!1)),onChange:K,type:"file",required:"true",accept:"image/*",class:"cursor-pointer"},null,32)]),e("div",Pe,[w.value?(o(),c("img",{key:0,src:w.value,alt:"preview"},null,8,Be)):f("",!0)])])]),e("div",Fe,[He,T(e("input",{type:"text",id:"title","onUpdate:modelValue":t[8]||(t[8]=s=>h.value=s),class:"outline-none",placeholder:"Titulo",required:"true",autofocus:""},null,512),[[C,h.value]])]),e("div",Je,[Qe,T(e("textarea",{id:"description","onUpdate:modelValue":t[9]||(t[9]=s=>x.value=s),class:"outline-none texto-imagen",rows:"4",placeholder:"Texto",required:"true",autofocus:""}," ",512),[[C,x.value]])]),e("div",Ge,[p.value?f("",!0):(o(),c("div",{key:0,class:"boton-mail select-none cursor-pointer",onClick:W},"Crear")),p.value?(o(),c("div",Ke,[m(n,{icon:"fa-solid fa-spinner","spin-pulse":""})])):f("",!0)])])]),e("div",Oe,[e("table",We,[Xe,e("tbody",null,[(o(!0),c(J,null,Q(z.value[A.value],s=>(o(),c("tr",{key:s.id,class:"grid py-2"},[e("td",Ye,[e("img",{src:s.url,alt:s.name,class:"galery-image"},null,8,Ze)]),e("td",et,[e("div",tt,M(s.title),1)]),e("td",st,[e("div",at,M(s.texto),1)]),e("td",nt,[e("div",{onClick:j=>te(s),class:"boton-action mx-2 select-none cursor-pointer flex justify-content-center align-items-center"},[m(n,{icon:"fa-solid fa-pencil"})],8,lt),e("div",{class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center",onClick:j=>X(s)},[m(n,{icon:"fa-solid fa-trash-can"})],8,ot)])]))),128))]),e("tfoot",null,[e("div",it,[(o(!0),c(J,null,Q(N.value,s=>(o(),c("div",{class:"indices-tabla select-none cursor-pointer",onClick:j=>Y(s),key:s},M(s),9,ct))),128))])])])])])])}}},ft=se(rt,[["__scopeId","data-v-93f0ddf9"]]);export{ft as default};