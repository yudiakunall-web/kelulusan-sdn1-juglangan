const target=new Date("2026-06-13T10:00:00");

function cekNISN(){
let nisn=document.getElementById("nisn").value.trim();
let hasil=document.getElementById("hasil");

let found=siswa.find(s=>s.nisn===nisn);

if(!found){
hasil.innerHTML="NISN tidak ditemukan";
return;
}

localStorage.setItem("siswa",JSON.stringify(found));

if(new Date()<target){
document.getElementById("popupBelumBuka").style.display="flex";
return;
}

hasil.innerHTML="<b>"+found.nama+"</b><br><button onclick='location.href="hasil.html"'>Lihat Hasil</button>";
}

function tutupPopup(){
document.getElementById("popupBelumBuka").style.display="none";
}
