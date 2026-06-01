const target=new Date("2026-06-13T10:00:00").getTime();

setInterval(()=>{
let now=new Date().getTime();
let diff=target-now;

if(diff<0) diff=0;

document.getElementById("hari").innerText=Math.floor(diff/(1000*60*60*24));
document.getElementById("jam").innerText=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
document.getElementById("menit").innerText=Math.floor((diff%(1000*60*60))/(1000*60));
document.getElementById("detik").innerText=Math.floor((diff%(1000*60))/1000);
},1000);
