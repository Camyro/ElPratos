var mensagemW = "";
var nome = "";
var mensagemFinal = "";

var URL = new URLSearchParams(window.location.search);

console.log(URL);

// Função para verificar se o link é válido
function verificarLinkValido() {
    var temItensValidos = false;

    // Converte para array para evitar problemas com iteradores
    var parametros = [];
    URL.forEach(function(valor, chave) {
        parametros.push({ chave: chave, valor: valor });
    });

    // Percorre todos os parâmetros da URL
    for (var i = 0; i < parametros.length; i++) {
        var chave = parametros[i].chave;
        var valor = parametros[i].valor;

        // Ignora parâmetros com prefixos especiais
        if (chave.indexOf("N_") === 0 || chave.indexOf("V_") === 0) {
            continue;
        }

        var quantidade = parseInt(valor);

        // Verifica se tem quantidade válida
        if (quantidade >= 1) {
            // Verifica se existe o nome correspondente com prefixo N_
            var nomeItem = URL.get("N_" + chave);

            if (nomeItem) {
                // Item válido encontrado
                temItensValidos = true;
                console.log("✅ Item válido: " + chave + " - " + nomeItem + " (" + quantidade + ")");
            } else {
                // Item sem nome (prefixo N_ não encontrado)
                console.warn("⚠️ Item sem nome: " + chave + " não possui N_" + chave);
            }
        }
    }

    return temItensValidos;
}

// Função para processar os itens da URL dinamicamente
function processarItens() {
    mensagemW = "";
    var htmlItens = ""; // Para mostrar no HTML
    var valorTotal = 0; // Para somar o total

    // Converte para array
    var parametros = [];
    URL.forEach(function(valor, chave) {
        parametros.push({ chave: chave, valor: valor });
    });

    // Percorre todos os parâmetros da URL
    for (var i = 0; i < parametros.length; i++) {
        var chave = parametros[i].chave;
        var valor = parametros[i].valor;

        // Ignora parâmetros que começam com "N_" (nomes) ou "V_" (valores em reais)
        if (chave.indexOf("N_") === 0 || chave.indexOf("V_") === 0) {
            continue;
        }

        var quantidade = parseInt(valor);

        if (quantidade >= 1) {
            // Busca o nome do item com prefixo N_
            var nomeItem = URL.get("N_" + chave) || chave;

            // Busca o valor em reais com prefixo V_
            var valorItemStr = URL.get("V_" + chave);
            var valorItem = valorItemStr ? parseFloat(valorItemStr) : 0;
            valorTotal += valorItem;

            var textoItem = nomeItem + ": " + quantidade + " (R$ " + valorItem.toFixed(2) + ")";
            mensagemW += "%0A" + textoItem.replace(/\s/g, "%20");

            // Adiciona ao HTML com o valor
            htmlItens += "<p>" + textoItem + "</p>";

            // Atualiza o elemento HTML individual se existir
            var elemento = document.getElementById(chave);
            if (elemento) {
                elemento.innerHTML = textoItem;
            }
        }
    }

    // Adiciona o total à mensagem do WhatsApp
    if (valorTotal > 0) {
        var textoTotal = "%0A%0ATotal:%20R$%20" + valorTotal.toFixed(2);
        mensagemW += textoTotal;

        // Adiciona o total ao HTML
        htmlItens += "<p><strong>Total: R$ " + valorTotal.toFixed(2) + "</strong></p>";
    }

    // Atualiza o elemento com id "Pratos" com todos os itens
    var pratosElement = document.getElementById("Prato");
    console.log("🔍 Elemento #Pratos encontrado:", pratosElement);
    console.log("📋 HTML a ser inserido:", htmlItens);

    if (pratosElement) {
        pratosElement.innerHTML = htmlItens;
        console.log("✅ HTML inserido com sucesso!");
    } else {
        console.error("❌ Elemento #Pratos não encontrado no DOM!");
    }

    console.log("📋 Itens processados:", htmlItens);
}

// Função de inicialização
function inicializar() {
    // Verifica se o link é válido
    var linkValido = verificarLinkValido();

    if (!linkValido) {
        console.log("❌ Nenhum item válido encontrado no link");

        var p1 = document.querySelector(".p1");
        var p2 = document.querySelector(".p2");

        if (p1 && p2) {
            p1.classList.add("sem");
            p2.classList.add("sem");
        }

        return; // Para por aqui se não houver itens válidos
    }

    console.log("✅ Link válido com itens encontrados");

    // Processa os itens
    processarItens();

    // Atualiza a mensagem inicial
    var nomeElement = document.getElementById("nome");
    if (nomeElement) {
        nome = nomeElement.value || "";
    }

    var mensagem = "Olá, meu nome é " + nome.trim() + ", gostaria de alugar os seguintes itens:";
    var txtElement = document.getElementById("txt");
    if (txtElement) {
        txtElement.innerHTML = mensagem;
    }

    // Verifica se há itens
    var p1 = document.querySelector(".p1");
    var p2 = document.querySelector(".p2");

    if (mensagemW === "" && p1 && p2) {
        p1.classList.toggle("n");
        p2.classList.toggle("n");
    }
}

// Executa a inicialização
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

// Atualiza a mensagem a cada intervalo
setInterval(function() {
    var nomeElement = document.getElementById("nome");
    if (nomeElement) {
        nome = nomeElement.value;
        var mensagem = "Olá, meu nome é " + nome.trim() + ", gostaria de alugar os seguintes itens:";

        var txtElement = document.getElementById("txt");
        if (txtElement) {
            txtElement.innerHTML = mensagem;
        }

        mensagemFinal = mensagem.replace(/\s/g, "%20") + "%0A" + mensagemW;
    }
}, 1);

// Função para enviar
function enviar() {
    var nomeElement = document.getElementById("nome");
    var invalidoElement = document.getElementById("invalido");

    if (!nomeElement) {
        console.error("Elemento 'nome' não encontrado");
        return;
    }

    nome = nomeElement.value;
    var nomeLimpo = nome.replace(/\s/g, "").toLowerCase();

    if (nomeLimpo === "" || nomeLimpo === "seunome" || nomeLimpo === "nome") {
        if (invalidoElement) {
            invalidoElement.innerHTML = "Nome não informado";
        }
    } else {
        var link = "https://api.whatsapp.com/send?phone=5595991275451&text=" + mensagemFinal;

        if (invalidoElement) {
            invalidoElement.innerHTML = "";
        }

        window.location.href = link;
    }
}

// Torna a função global
window.enviar = enviar;
window.verificarLinkValido = verificarLinkValido;