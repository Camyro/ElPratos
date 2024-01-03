document.getElementById("inp-Prato").value = "0";
document.getElementById("inp-Faca").value = "0";
document.getElementById("inp-Garfo").value = "0";
document.getElementById("inp-Colher").value = "0";
document.getElementById("inp-TaçaDeVidro").value = "0";
document.getElementById("inp-TravessaDeVidro").value = "0";
document.getElementById("inp-TravessaDePorcelanato").value = "0";
document.getElementById("inp-Rechaud").value = "0";
document.getElementById("inp-ColherDeServi").value = "0";
document.getElementById("inp-XicaraEPires").value = "0";

var link;

setInterval(function() {
  //Informações essenciais
  var inpPrato = document.getElementById("inp-Prato").value;
  var inpFaca = document.getElementById("inp-Faca").value;
  var inpGarfo = document.getElementById("inp-Garfo").value;
  var inpColher = document.getElementById("inp-Colher").value;
  var inpTaçaDeVidro = document.getElementById("inp-TaçaDeVidro").value;
  var inpTravessaDeVidro = document.getElementById("inp-TravessaDeVidro").value;
  var inpTravessaDePorcelanato = document.getElementById("inp-TravessaDePorcelanato").value;
  var inpRechaud = document.getElementById("inp-Rechaud").value;
  var inpColherDeServi = document.getElementById("inp-ColherDeServi").value;
  var inpXicaraEPires = document.getElementById("inp-XicaraEPires").value;

  //Mudar para numero
  var inpPrato = parseInt(inpPrato);
  var inpFaca = parseInt(inpFaca);
  var inpGarfo = parseInt(inpGarfo);
  var inpColher = parseInt(inpColher);
  var inpTaçaDeVidro = parseInt(inpTaçaDeVidro);
  var inpTravessaDeVidro = parseInt(inpTravessaDeVidro);
  var inpTravessaDePorcelanato = parseInt(inpTravessaDePorcelanato);
  var inpRechaud = parseInt(inpRechaud);
  var inpColherDeServi = parseInt(inpColherDeServi);
  var inpXicaraEPires = parseInt(inpXicaraEPires);

  //Zerando variaveis
  var ttlPrato = 0;
  var ttlFaca = 0;
  var ttlGarfo = 0;
  var ttlColher = 0;
  var ttlTaçaDeVidro = 0;
  var ttlTravessaDeVidro = 0;
  var ttlTravessaDePorcelanato = 0;
  var ttlRechaud = 0;
  var ttlColherDeServi = 0;
  var ttlXicaraEPires = 0;

  link = "";

  //Fazendo os calculos
  var inpPrato = inpPrato > 150 ? 150 : inpPrato;
  var inpPrato = inpPrato < 0 ? 0 : inpPrato;
  document.getElementById("inp-Prato").value = inpPrato;
  
  var inpFaca = inpFaca > 150 ? 150 : inpFaca;
  var inpFaca = inpFaca < 0 ? 0 : inpFaca;
  document.getElementById("inp-Faca").value = inpFaca;

  var inpGarfo = inpGarfo > 150 ? 150 : inpGarfo;
  var inpGarfo = inpGarfo < 0 ? 0 : inpGarfo;
  document.getElementById("inp-Garfo").value = inpGarfo;

  var inpColher = inpColher > 150 ? 150 : inpColher;
  var inpColher = inpColher < 0 ? 0 : inpColher;
  document.getElementById("inp-Colher").value = inpColher;

  var inpTaçaDeVidro = inpTaçaDeVidro > 100 ? 100 : inpTaçaDeVidro;
  var inpTaçaDeVidro = inpTaçaDeVidro < 0 ? 0 : inpTaçaDeVidro;
  document.getElementById("inp-TaçaDeVidro").value = inpTaçaDeVidro;

  var inpTravessaDeVidro = inpTravessaDeVidro > 6 ? 6 : inpTravessaDeVidro;
  var inpTravessaDeVidro = inpTravessaDeVidro < 0 ? 0 : inpTravessaDeVidro;
  document.getElementById("inp-TravessaDeVidro").value = inpTravessaDeVidro;

  var inpTravessaDePorcelanato = inpTravessaDePorcelanato > 4 ? 4 : inpTravessaDePorcelanato;
  var inpTravessaDePorcelanato = inpTravessaDePorcelanato < 0 ? 0 : inpTravessaDePorcelanato;
  document.getElementById("inp-TravessaDePorcelanato").value = inpTravessaDePorcelanato;

  var inpRechaud = inpRechaud > 6 ? 6 : inpRechaud;
  var inpRechaud = inpRechaud < 0 ? 0 : inpRechaud;
  document.getElementById("inp-Rechaud").value = inpRechaud;

  var inpColherDeServi = inpColherDeServi > 6 ? 6 : inpColherDeServi;
  var inpColherDeServi = inpColherDeServi < 0 ? 0 : inpColherDeServi;
  document.getElementById("inp-ColherDeServi").value = inpColherDeServi;

  var inpXicaraEPires = inpXicaraEPires > 50 ? 50 : inpXicaraEPires;
  var inpXicaraEPires = inpXicaraEPires < 0 ? 0 : inpXicaraEPires;
  document.getElementById("inp-XicaraEPires").value = inpXicaraEPires;

  //Fazendo os calculos
  var ttlFaca = inpFaca > 99 ? inpFaca * 0.75 : inpFaca * 0.90;
  var ttlGarfo = inpGarfo > 99 ? inpGarfo * 0.75 : inpGarfo * 0.90;
  
  var ttlPrato = inpPrato > 99 ? inpPrato * 1.50 : inpPrato * 1.80;
  var ttlColher = inpColher > 99 ? inpColher * 1.50 : inpColher * 1.80;
  var ttlTaçaDeVidro = inpTaçaDeVidro > 99 ? inpTaçaDeVidro * 1.50 : inpTaçaDeVidro * 1.80;

  var ttlTravessaDeVidro = inpTravessaDeVidro * 10;
  var ttlTravessaDePorcelanato = inpTravessaDePorcelanato * 15;
  var ttlRechaud = inpRechaud * 20;
  var ttlColherDeServi = inpColherDeServi * 3;
  var ttlXicaraEPires = inpXicaraEPires * 5;

  var ttlQuant = inpFaca + inpGarfo + inpPrato + inpColher + inpTaçaDeVidro + inpTravessaDeVidro + inpTravessaDePorcelanato + inpRechaud + inpColherDeServi + inpXicaraEPires;
  var ttlVar = ttlFaca + ttlGarfo + ttlPrato + ttlColher + ttlTaçaDeVidro + ttlTravessaDeVidro + ttlTravessaDePorcelanato + ttlRechaud + ttlColherDeServi + ttlXicaraEPires;

  document.getElementById("text-Prato").innerHTML = ttlPrato.toFixed(2);
  document.getElementById("text-Faca").innerHTML = ttlFaca.toFixed(2);
  document.getElementById("text-Garfo").innerHTML = ttlGarfo.toFixed(2);
  document.getElementById("text-Colher").innerHTML = ttlColher.toFixed(2);
  document.getElementById("text-TaçaDeVidro").innerHTML = ttlTaçaDeVidro.toFixed(2);
  document.getElementById("text-TravessaDeVidro").innerHTML = ttlTravessaDeVidro.toFixed(2);
  document.getElementById("text-TravessaDePorcelanato").innerHTML = ttlTravessaDePorcelanato.toFixed(2);
  document.getElementById("text-Rechaud").innerHTML = ttlRechaud.toFixed(2);
  document.getElementById("text-ColherDeServi").innerHTML = ttlColherDeServi.toFixed(2);
  document.getElementById("text-XicaraEPires").innerHTML = ttlXicaraEPires.toFixed(2);

  document.getElementById("ttl-quant").innerHTML = ttlQuant;
  document.getElementById("ttl-var").innerHTML = ttlVar.toFixed(2);

  if(inpPrato > 0){
    link = link == "" ?  link + "?Prato=" + inpPrato : link + "&Prato=" + inpPrato;
    link = link + "&VPrato=" + ttlPrato;
  }

  if(inpFaca > 0){
    link = link == "" ?  link + "?Faca=" + inpFaca : link + "&Faca=" + inpFaca;
    link = link + "&VFaca=" + ttlFaca;
  }

  if(inpGarfo > 0){
    link = link == "" ?  link + "?Garfo=" + inpGarfo : link + "&Garfo=" + inpGarfo;
    link = link + "&VGarfo=" + ttlGarfo;
  }

  if(inpColher > 0){
    link = link == "" ?  link + "?Colher=" + inpColher : link + "&Colher=" + inpColher;
    link = link + "&VColher=" + ttlColher;
  }

  if(inpTaçaDeVidro > 0){
    link = link == "" ?  link + "?TaçaDeVidro=" + inpTaçaDeVidro : link + "&TaçaDeVidro=" + inpTaçaDeVidro;
    link = link + "&VTaçaDeVidro=" + ttlTaçaDeVidro;
  }

  if(inpTravessaDeVidro > 0){
    link = link == "" ?  link + "?TravessaDeVidro=" + inpTravessaDeVidro : link + "&TravessaDeVidro=" + inpTravessaDeVidro;
    link = link + "&VTravessaDeVidro=" + ttlTravessaDeVidro;
  }

  if(inpTravessaDePorcelanato > 0){
    link = link == "" ?  link + "?TravessaDePorcelanato=" + inpTravessaDePorcelanato : link + "&TravessaDePorcelanato=" + inpTravessaDePorcelanato;
    link = link + "&VTravessaDePorcelanato=" + ttlTravessaDePorcelanato;
  }

  if(inpRechaud > 0){
    link = link == "" ?  link + "?Rechaud=" + inpRechaud : link + "&Rechaud=" + inpRechaud;
    link = link + "&VRechaud=" + ttlRechaud;
  }

  if(inpColherDeServi > 0){
    link = link == "" ?  link + "?ColherDeServi=" + inpColherDeServi : link + "&ColherDeServi=" + inpColherDeServi;
    link = link + "&ColherDeServi=" + ttlColherDeServi;
  }

  if(inpXicaraEPires > 0){
    link = link == "" ?  link + "?XicaraEPires=" + inpXicaraEPires : link + "&XicaraEPires=" + inpXicaraEPires;
    link = link + "&VXicaraEPires=" + ttlXicaraEPires;
  }

  if(ttlQuant > 0){
    link = link + "&Quant=" + ttlQuant;
  }

  if(ttlVar > 0){
    link = link + "&Var=" + ttlVar;
  }
  
}, 1); // 1000 milissegundos = 1 segundo

function enviar(){
  if(link != ""){
    link = "https://elpratos.camyrocamyro.repl.co/mensagem/" + link
    window.location.href = link;
  } else{
    document.getElementById("invalido").innerHTML = "Nenhum item foi adicionado";
  }
}
