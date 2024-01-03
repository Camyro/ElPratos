const URL = new URLSearchParams(window.location.search);
var Mensagem = "";

const Prato = URL.get("Prato");
const Faca = URL.get("Faca");
const Garfo = URL.get("Garfo");
const Colher = URL.get("Colher");
const TaçaDeVidro = URL.get("TaçaDeVidro");
const TravessaDeVidro = URL.get("TravessaDeVidro");
const TravessaDePorcelanato = URL.get("TravessaDePorcelanato");
const Rechaud = URL.get("Rechaud");
const ColherDeServi = URL.get("ColherDeServi");
const XicaraEPires = URL.get("XicaraEPires");

if (Prato >= 1){
  mensagemW = "1";
}

if (Faca >= 1){
  Mensagem = "1";
}

if (Garfo >= 1){
  Mensagem = "1";
}

if (Colher >= 1){
  Mensagem = "1";
}

if (TaçaDeVidro >= 1){
  Mensagem = "1";
}

if (TravessaDeVidro >= 1){
  Mensagem = "1";
}

if (TravessaDePorcelanato >= 1){
  Mensagem = "1";
}

if (Rechaud >= 1){
  Mensagem = "1";
}

if (ColherDeServi >= 1){
  Mensagem = "1";
}

if (XicaraEPires >= 1){
  Mensagem = "1";
}

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

if(Mensagem == ""){
  p1.classList.toggle("sem");
  p2.classList.toggle("sem");
}