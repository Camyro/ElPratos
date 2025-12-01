document.getElementById("inp-Prato").value = "0";
document.getElementById("inp-PratoDeSobremesas").value = "0";
document.getElementById("inp-Faca").value = "0";
document.getElementById("inp-Garfo").value = "0";
document.getElementById("inp-Colher").value = "0";
document.getElementById("inp-TaçaDeVidro").value = "0";
document.getElementById("inp-CopoDeVidro").value = "0";
document.getElementById("inp-XicaraEPires").value = "0";
document.getElementById("inp-JarraEColherDeSuco").value = "0";
document.getElementById("inp-TravessaDeVidro").value = "0";
document.getElementById("inp-TravessaDePorcelanato").value = "0";
document.getElementById("inp-Rechaud").value = "0";
document.getElementById("inp-ColherDeServi").value = "0";
document.getElementById("inp-PegadorParaAlimentacao").value = "0";

var link;

setInterval(function() {
  limparEntrada("inp-Prato");
  limparEntrada("inp-PratoDeSobremesas");
  limparEntrada("inp-Faca");
  limparEntrada("inp-Garfo");
  limparEntrada("inp-Colher");
  limparEntrada("inp-TaçaDeVidro");
  limparEntrada("inp-CopoDeVidro");
  limparEntrada("inp-XicaraEPires");
  limparEntrada("inp-JarraEColherDeSuco");
  limparEntrada("inp-TravessaDeVidro");
  limparEntrada("inp-TravessaDePorcelanato");
  limparEntrada("inp-Rechaud");
  limparEntrada("inp-ColherDeServi");
  limparEntrada("inp-PegadorParaAlimentacao");
  
  //Informações essenciais
  var inpPrato = document.getElementById("inp-Prato").value;
  var inpPratoDeSobremesas = document.getElementById("inp-PratoDeSobremesas").value;
  var inpFaca = document.getElementById("inp-Faca").value;
  var inpGarfo = document.getElementById("inp-Garfo").value;
  var inpColher = document.getElementById("inp-Colher").value;
  var inpTaçaDeVidro = document.getElementById("inp-TaçaDeVidro").value;
  var inpCopoDeVidro = document.getElementById("inp-CopoDeVidro").value;
  var inpXicaraEPires = document.getElementById("inp-XicaraEPires").value;
  var inpJarraEColherDeSuco = document.getElementById("inp-JarraEColherDeSuco").value;
  var inpTravessaDeVidro = document.getElementById("inp-TravessaDeVidro").value;
  var inpTravessaDePorcelanato = document.getElementById("inp-TravessaDePorcelanato").value;
  var inpRechaud = document.getElementById("inp-Rechaud").value;
  var inpColherDeServi = document.getElementById("inp-ColherDeServi").value;
  var inpPegadorParaAlimentacao = document.getElementById("inp-PegadorParaAlimentacao").value;

  //Mudar para numero
  var inpPrato = parseInt(inpPrato);
  var inpPratoDeSobremesas = parseInt(inpPratoDeSobremesas);
  var inpFaca = parseInt(inpFaca);
  var inpGarfo = parseInt(inpGarfo);
  var inpColher = parseInt(inpColher);
  var inpTaçaDeVidro = parseInt(inpTaçaDeVidro);
  var inpCopoDeVidro = parseInt(inpCopoDeVidro);
  var inpXicaraEPires = parseInt(inpXicaraEPires);
  var inpJarraEColherDeSuco = parseInt(inpJarraEColherDeSuco);
  var inpTravessaDeVidro = parseInt(inpTravessaDeVidro);
  var inpTravessaDePorcelanato = parseInt(inpTravessaDePorcelanato);
  var inpRechaud = parseInt(inpRechaud);
  var inpColherDeServi = parseInt(inpColherDeServi);
  var inpPegadorParaAlimentacao = parseInt(inpPegadorParaAlimentacao);

  //Zerando variaveis
  var ttlPrato = 0;
  var ttlPratoDeSobremesas = 0;
  var ttlFaca = 0;
  var ttlGarfo = 0;
  var ttlColher = 0;
  var ttlTaçaDeVidro = 0;
  var ttlCopoDeVidro = 0;
  var ttlXicaraEPires = 0;
  var ttlJarraEColherDeSuco = 0;
  var ttlTravessaDeVidro = 0;
  var ttlTravessaDePorcelanato = 0;
  var ttlRechaud = 0;
  var ttlColherDeServi = 0;
  var ttlPegadorParaAlimentacao = 0;

  link = "";

  //Fazendo a verificação
  var inpPrato = inpPrato > 200 ? 200 : inpPrato;
  var inpPrato = inpPrato < 0 ? 0 : inpPrato;
  document.getElementById("inp-Prato").value = inpPrato;

  var inpPratoDeSobremesas = inpPratoDeSobremesas > 100 ? 100 : inpPratoDeSobremesas;
  var inpPratoDeSobremesas = inpPratoDeSobremesas < 0 ? 0 : inpPratoDeSobremesas;
  document.getElementById("inp-PratoDeSobremesas").value = inpPratoDeSobremesas;
  
  var inpFaca = inpFaca > 200 ? 200 : inpFaca;
  var inpFaca = inpFaca < 0 ? 0 : inpFaca;
  document.getElementById("inp-Faca").value = inpFaca;

  var inpGarfo = inpGarfo > 200 ? 200 : inpGarfo;
  var inpGarfo = inpGarfo < 0 ? 0 : inpGarfo;
  document.getElementById("inp-Garfo").value = inpGarfo;

  var inpColher = inpColher > 150 ? 150 : inpColher;
  var inpColher = inpColher < 0 ? 0 : inpColher;
  document.getElementById("inp-Colher").value = inpColher;

  var inpTaçaDeVidro = inpTaçaDeVidro > 100 ? 100 : inpTaçaDeVidro;
  var inpTaçaDeVidro = inpTaçaDeVidro < 0 ? 0 : inpTaçaDeVidro;
  document.getElementById("inp-TaçaDeVidro").value = inpTaçaDeVidro;

  var inpCopoDeVidro = inpCopoDeVidro > 200 ? 200 : inpCopoDeVidro;
  var inpCopoDeVidro = inpCopoDeVidro < 0 ? 0 : inpCopoDeVidro;
  document.getElementById("inp-CopoDeVidro").value = inpCopoDeVidro;

  var inpXicaraEPires = inpXicaraEPires > 50 ? 50 : inpXicaraEPires;
  var inpXicaraEPires = inpXicaraEPires < 0 ? 0 : inpXicaraEPires;
  document.getElementById("inp-XicaraEPires").value = inpXicaraEPires;

  var inpJarraEColherDeSuco = inpJarraEColherDeSuco > 12 ? 12 : inpJarraEColherDeSuco;
  var inpJarraEColherDeSuco = inpJarraEColherDeSuco < 0 ? 0 : inpJarraEColherDeSuco;
  document.getElementById("inp-JarraEColherDeSuco").value = inpJarraEColherDeSuco;

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

  var inpPegadorParaAlimentacao = inpPegadorParaAlimentacao > 1 ? 1 : inpPegadorParaAlimentacao;
  var inpPegadorParaAlimentacao = inpPegadorParaAlimentacao < 0 ? 0 : inpPegadorParaAlimentacao;
  document.getElementById("inp-PegadorParaAlimentacao").value = inpPegadorParaAlimentacao;

  //Fazendo os calculos
  var ttlFaca = inpFaca > 99 ? inpFaca * 0.75 : inpFaca * 0.90;
  var ttlGarfo = inpGarfo > 99 ? inpGarfo * 0.75 : inpGarfo * 0.90;
  
  var ttlPrato = inpPrato > 99 ? inpPrato * 1.50 : inpPrato * 1.80;
  var ttlColher = inpColher > 99 ? inpColher * 0.75 : inpColher * 0.90;
  var ttlTaçaDeVidro = inpTaçaDeVidro > 99 ? inpTaçaDeVidro * 1.50 : inpTaçaDeVidro * 1.80;

  var ttlCopoDeVidro = inpCopoDeVidro > 99 ? inpCopoDeVidro * 1.20 : inpCopoDeVidro * 1.40;

  var ttlPratoDeSobremesas = inpPratoDeSobremesas * 1.20;
  var ttlXicaraEPires = inpXicaraEPires * 5;
  var ttlJarraEColherDeSuco = inpJarraEColherDeSuco * 4;
  var ttlTravessaDeVidro = inpTravessaDeVidro * 10;
  var ttlTravessaDePorcelanato = inpTravessaDePorcelanato * 15;
  var ttlRechaud = inpRechaud * 20;
  var ttlColherDeServi = inpColherDeServi * 3;
  var ttlPegadorParaAlimentacao = inpPegadorParaAlimentacao * 3;

  var ttlQuant = inpFaca + inpGarfo + inpPrato + inpColher + inpTaçaDeVidro + inpCopoDeVidro + inpPratoDeSobremesas + inpXicaraEPires + inpJarraEColherDeSuco + inpTravessaDeVidro + inpTravessaDePorcelanato + inpRechaud + inpColherDeServi + inpPegadorParaAlimentacao;
  var ttlVar = ttlFaca + ttlGarfo + ttlPrato + ttlColher + ttlTaçaDeVidro + ttlCopoDeVidro + ttlPratoDeSobremesas + ttlXicaraEPires + ttlJarraEColherDeSuco + ttlTravessaDeVidro + ttlTravessaDePorcelanato + ttlRechaud + ttlColherDeServi + ttlPegadorParaAlimentacao;

  document.getElementById("text-Prato").innerHTML = ttlPrato.toFixed(2);
  document.getElementById("text-PratoDeSobremesas").innerHTML = ttlPratoDeSobremesas.toFixed(2);
  document.getElementById("text-Faca").innerHTML = ttlFaca.toFixed(2);
  document.getElementById("text-Garfo").innerHTML = ttlGarfo.toFixed(2);
  document.getElementById("text-Colher").innerHTML = ttlColher.toFixed(2);
  document.getElementById("text-TaçaDeVidro").innerHTML = ttlTaçaDeVidro.toFixed(2);
  document.getElementById("text-CopoDeVidro").innerHTML = ttlCopoDeVidro.toFixed(2);
  document.getElementById("text-XicaraEPires").innerHTML = ttlXicaraEPires.toFixed(2);
  document.getElementById("text-JarraEColherDeSuco").innerHTML = ttlJarraEColherDeSuco.toFixed(2);
  document.getElementById("text-TravessaDeVidro").innerHTML = ttlTravessaDeVidro.toFixed(2);
  document.getElementById("text-TravessaDePorcelanato").innerHTML = ttlTravessaDePorcelanato.toFixed(2);
  document.getElementById("text-Rechaud").innerHTML = ttlRechaud.toFixed(2);
  document.getElementById("text-ColherDeServi").innerHTML = ttlColherDeServi.toFixed(2);
  document.getElementById("text-PegadorParaAlimentacao").innerHTML = ttlPegadorParaAlimentacao.toFixed(2);

  document.getElementById("ttl-quant").innerHTML = ttlQuant;
  document.getElementById("ttl-var").innerHTML = ttlVar.toFixed(2);

  if(inpPrato > 0){
    link = link == "" ?  link + "?Prato=" + inpPrato : link + "&Prato=" + inpPrato;
    link = link + "&VPrato=" + ttlPrato;
  }

  if(inpPratoDeSobremesas > 0){
    link = link == "" ?  link + "?PratoDeSobremesas=" + inpPratoDeSobremesas : link + "&PratoDeSobremesas=" + inpPratoDeSobremesas;
    link = link + "&VPratoDeSobremesas=" + ttlPratoDeSobremesas;
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

  if(inpCopoDeVidro > 0){
    link = link == "" ?  link + "?CopoDeVidro=" + inpCopoDeVidro : link + "&CopoDeVidro=" + inpCopoDeVidro;
    link = link + "&VCopoDeVidro=" + ttlCopoDeVidro;
  }

  if(inpXicaraEPires > 0){
    link = link == "" ?  link + "?XicaraEPires=" + inpXicaraEPires : link + "&XicaraEPires=" + inpXicaraEPires;
    link = link + "&VXicaraEPires=" + ttlXicaraEPires;
  }

  if(inpJarraEColherDeSuco > 0){
    link = link == "" ?  link + "?JarraEColherDeSuco=" + inpJarraEColherDeSuco : link + "&JarraEColherDeSuco=" + inpJarraEColherDeSuco;
    link = link + "&VJarraEColherDeSucos=" + ttlJarraEColherDeSuco;
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
    link = link + "&VColherDeServi=" + ttlColherDeServi;
  }

  if(inpPegadorParaAlimentacao > 0){
    link = link == "" ?  link + "?PegadorParaAlimentacao=" + inpPegadorParaAlimentacao : link + "&PegadorParaAlimentacao=" + inpPegadorParaAlimentacao;
    link = link + "&VPegadorParaAlimentacao=" + ttlPegadorParaAlimentacao;
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
    link = "https://elpratos.vercel.app/mensagem/" + link
    window.location.href = link;
  } else{
    document.getElementById("invalido").innerHTML = "Nenhum item foi adicionado";
  }
}

function limparEntrada(id) {
    let el = document.getElementById(id);
    let valor = el.value;

    // Se estiver vazio, vira 0
    if (valor.trim() === "") {
        el.value = 0;
        return;
    }

    // Remove zeros à esquerda
    valor = valor.replace(/^0+(?!$)/, "");

    // Se após remover zeros a pessoa apagou tudo, volta para 0
    if (valor === "") valor = "0";

    el.value = valor;
}
