import{u as v,r as f,m as w,n as x,p as g,c as s,a as n,q as a,F as c,d as r,t as F,s as N,o as u}from"./iRSXFNZ-.js";function R(l=v()){var t;return(t=l.ssrContext)==null?void 0:t.event}const T=window.setInterval,k={class:"error-container"},y={class:"main"},_={__name:"[...slug]",setup(l){const t=f(-1);let o=null;R(),w(()=>{d()}),x(()=>{i()});function d(){t.value=5;const e=Date.now();o=T(()=>{const p=((Date.now()-e)/1e3).toFixed(0);t.value=5-p,t.value<=0&&(i(),setTimeout(async()=>await g("/"),1e3))},1e3)}function i(){o&&(clearInterval(o),o=null)}return(m,e)=>(u(),s("div",k,[n("div",y,[e[2]||(e[2]=n("h1",null,"404 Not Found!!",-1)),e[3]||(e[3]=n("h2",null,"歐買尬！這裡什麼都沒有 😨😨😨",-1)),n("p",null,[a(t)>0?(u(),s(c,{key:0},[e[0]||(e[0]=r(" 返回首頁剩餘時間：")),n("strong",null,F(a(t)),1),e[1]||(e[1]=r(" 秒 "))],64)):a(t)!==-1?(u(),s(c,{key:1},[r(" 準備起飛！ ")],64)):N("",!0)])])]))}};export{_ as default};