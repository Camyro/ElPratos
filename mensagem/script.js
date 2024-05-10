var mensagemW;
var nome;

const URL = new URLSearchParams(window.location.search);

console.log(URL);

const Prato = URL.get("Prato");
const PratoDeSobremesas = URL.get("PratoDeSobremesas");
const Faca = URL.get("Faca");
const Garfo = URL.get("Garfo");
const Colher = URL.get("Colher");
const TaçaDeVidro = URL.get("TaçaDeVidro");
const CopoDeVidro = URL.get("CopoDeVidro");
const XicaraEPires = URL.get("XicaraEPires");
const JarraEColherDeSuco = URL.get("JarraEColherDeSuco");
const TravessaDeVidro = URL.get("TravessaDeVidro");
const TravessaDePorcelanato = URL.get("TravessaDePorcelanato");
const Rechaud = URL.get("Rechaud");
const ColherDeServi = URL.get("ColherDeServi");
const PegadorParaAlimentacao = URL.get("PegadorParaAlimentacao");
mensagemW = "";

nome = document.getElementById("nome").value;

var mensagem = "Olá, meu nome é " + nome.trim() + ", gostaria de alugar os seguintes itens:"
document.getElementById("txt").innerHTML = mensagem;

if (Prato >= 1){
  var TPrato = "Prato: " + Prato;
  mensagemW = mensagemW + "%0A" + TPrato.replace(/\s/g, "%20");
  document.getElementById("Prato").innerHTML = TPrato;
}

if (PratoDeSobremesas >= 1){
  var TPratoDeSobremesas = "Prato de sobremesas: " + PratoDeSobremesas;
  mensagemW = mensagemW + "%0A" + TPratoDeSobremesas.replace(/\s/g, "%20");
  document.getElementById("PratoDeSobremesas").innerHTML = TPratoDeSobremesas;
}

if (Faca >= 1){
  var TFaca = "Faca: " + Faca;
  mensagemW = mensagemW + "%0A" + TFaca.replace(/\s/g, "%20");
  document.getElementById("Faca").innerHTML = TFaca;
}

if (Garfo >= 1){
  var TGarfo = "Garfo: " + Garfo;
  mensagemW = mensagemW + "%0A" + TGarfo.replace(/\s/g, "%20");
  document.getElementById("Garfo").innerHTML = TGarfo;
}

if (Colher >= 1){
  var TColher = "Colher: " + Colher;
  mensagemW = mensagemW + "%0A" + TColher.replace(/\s/g, "%20");
  document.getElementById("Colher").innerHTML = TColher;
}

if (TaçaDeVidro >= 1){
  var TTaçaDeVidro = "Taça de vidro: " + TaçaDeVidro;
  mensagemW = mensagemW + "%0A" + TTaçaDeVidro.replace(/\s/g, "%20");
  document.getElementById("TaçaDeVidro").innerHTML = TTaçaDeVidro;
}

if (CopoDeVidro >= 1){
  var TCopoDeVidro = "Copo de vidro: " + CopoDeVidro;
  mensagemW = mensagemW + "%0A" + TCopoDeVidro.replace(/\s/g, "%20");
  document.getElementById("CopoDeVidro").innerHTML = TCopoDeVidro;
}

if (XicaraEPires >= 1){
  var TXicaraEPires = "Xicara e pires: " + XicaraEPires;
  mensagemW = mensagemW + "%0A" + TXicaraEPires.replace(/\s/g, "%20");
  document.getElementById("XicaraEPires").innerHTML = TXicaraEPires;
}

if (JarraEColherDeSuco >= 1){
  var TJarraEColherDeSuco = "Jarra e colher de suco: " + JarraEColherDeSuco;
  mensagemW = mensagemW + "%0A" + TJarraEColherDeSuco.replace(/\s/g, "%20");
  document.getElementById("JarraEColherDeSuco").innerHTML = TJarraEColherDeSuco;
}

if (TravessaDeVidro >= 1){
  var TTravessaDeVidro = "Travessa de vidro: " + TravessaDeVidro;
  mensagemW = mensagemW + "%0A" + TTravessaDeVidro.replace(/\s/g, "%20");
  document.getElementById("TravessaDeVidro").innerHTML = TTravessaDeVidro;
}

if (TravessaDePorcelanato >= 1){
  var TTravessaDePorcelanato = "Travessa de porcelanato: " + TravessaDePorcelanato;
  mensagemW = mensagemW + "%0A" + TTravessaDePorcelanato.replace(/\s/g, "%20");
  document.getElementById("TravessaDePorcelanato").innerHTML = TTravessaDePorcelanato;
}

if (Rechaud >= 1){
  var TRechaud = "Rechaud: " + Rechaud;
  mensagemW = mensagemW + "%0A" + TRechaud.replace(/\s/g, "%20");
  document.getElementById("Rechaud").innerHTML = TRechaud;
}

if (ColherDeServi >= 1){
  var TColherDeServi = "Colher de servir: " + ColherDeServi;
  mensagemW = mensagemW + "%0A" + TColherDeServi.replace(/\s/g, "%20");
  document.getElementById("ColherDeServi").innerHTML = TColherDeServi;
}

if (PegadorParaAlimentacao >= 1){
  var TPegadorParaAlimentacao = "Pegador para alimentação: " + PegadorParaAlimentacao;
  mensagemW = mensagemW + "%0A" + TPegadorParaAlimentacao.replace(/\s/g, "%20");
  document.getElementById("PegadorParaAlimentacao").innerHTML = TPegadorParaAlimentacao;
}

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

if(mensagemW == ""){
  p1.classList.toggle("n");
  p2.classList.toggle("n");
}

setInterval(function() {
  nome = document.getElementById("nome").value;

  var mensagem = "Olá, meu nome é " + nome.trim() + ", gostaria de alugar os seguintes itens:"
  document.getElementById("txt").innerHTML = mensagem;
}, 1); // 1000 milissegundos = 1 segundo

function enviar(){
  if(nome.replace(/\s/g, "") == "" || nome.replace(/\s/g, "").toLowerCase() == "seu nome".replace(/\s/g, "") || nome.replace(/\s/g, "").toLowerCase() == "nome".replace(/\s/g, "")){
    document.getElementById("invalido").innerHTML = "Nome não informado";
  } else{
    mensagemW = mensagem.replace(/\s/g, "%20") + "%0A" + mensagemW;
    mensagemW = "https://api.whatsapp.com/send?phone=5595991275451&text=" + mensagemW;
    document.getElementById("invalido").innerHTML = "";
    window.location.href = mensagemW;
  }
}
  