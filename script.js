const girisNesnesi=document.getElementById("txtYapilacakIs");
const eklemeNesnesi=document.getElementById("btnEkle");
const listeNesnesi=document.getElementById("yapilacaklarListesi");
let secilen;

function listeyeEkle(){
  let yapilacak=girisNesnesi.value;
  let yeniIs=document.createElement("li");
  listeNesnesi.appendChild(yeniIs);
  yeniIs.innerHTML=yapilacak;

  let silmeNesnesi=document.createElement("span");
  yeniIs.appendChild(silmeNesnesi);
  silmeNesnesi.innerHTML="X";
  silmeNesnesi.setAttribute("class","close");
  silmeNesnesi.addEventListener("click",listedenSil);

  let tamamlamaNesnesi=document.createElement("span");
  yeniIs.appendChild(tamamlamaNesnesi);
  tamamlamaNesnesi.innerHTML="✔";
  tamamlamaNesnesi.setAttribute("class","finish");
  tamamlamaNesnesi.addEventListener("click",()=>{
    secilen=event.currentTarget.parentNode;
    secilen.style.textDecoration="line-through";
  });
}
function listedenSil(){
  secilen=event.currentTarget.parentNode;
  secilen.remove();
}