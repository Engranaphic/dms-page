import{_ as f,r as c,L as v,a as h,o as g,c as x,b as e,d as w,h as d,v as r,g as b,p as y,e as I,M as S}from"./index.df2f093c.js";const s=t=>(y("data-v-5399c4f5"),t=t(),I(),t),k={id:"login"},B=s(()=>e("div",{class:"form-malla"},null,-1)),C=s(()=>e("div",{class:"gradient"},null,-1)),E=["onSubmit"],L=s(()=>e("div",{class:"title flex"}," Bienvenido administrador ",-1)),V=s(()=>e("div",{class:"form-text"}," Ingresa tu cuenta de administrador para poder ingresar. ",-1)),M={class:"field"},j=s(()=>e("label",{for:"name"},"Email",-1)),q={class:"field"},N=s(()=>e("label",{for:"password"},"Contrase\xF1a",-1)),U=s(()=>e("div",{class:"flex justify-content-end"},[e("input",{class:"boton-mail select-none cursor-pointer",type:"submit",value:"Ingresar"})],-1)),A={__name:"Login",setup(t){const n=c(""),a=c(""),l=v(),u=p=>{S.signInWithEmailAndPassword(n.value,a.value).then(()=>{l.push({name:"admin"})}).catch(o=>{console.log(o.code),alert(o.message)})},_=()=>{l.push({name:"home"})};return(p,o)=>{const m=h("font-awesome-icon");return g(),x("div",k,[B,C,e("form",{class:"login-form",onSubmit:b(u,["prevent"])},[e("div",{class:"boton-close select-none cursor-pointer flex justify-content-center align-items-center",onClick:_},[w(m,{icon:"fa-solid fa-xmark"})]),L,V,e("div",M,[j,d(e("input",{id:"email",type:"text",class:"outline-none",placeholder:"Email","onUpdate:modelValue":o[0]||(o[0]=i=>n.value=i),required:"true",autofocus:""},null,512),[[r,n.value]])]),e("div",q,[N,d(e("input",{id:"password",type:"password",class:"outline-none",placeholder:"Contrase\xF1a","onUpdate:modelValue":o[1]||(o[1]=i=>a.value=i),required:"true",autofocus:""},null,512),[[r,a.value]])]),U],40,E)])}}},P=f(A,[["__scopeId","data-v-5399c4f5"]]);export{P as default};
