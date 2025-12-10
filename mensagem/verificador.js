// Verificador de links com prefixos válidos

function verificarLinkValido() {
    var URL = new URLSearchParams(window.location.search);
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

// Função para executar a verificação
function executarVerificacao() {
    var linkValido = verificarLinkValido();

    // Se não encontrou itens válidos, esconde os elementos
    if (!linkValido) {
        console.log("❌ Nenhum item válido encontrado no link");

        var p1 = document.querySelector(".p1");
        var p2 = document.querySelector(".p2");

        if (p1 && p2) {
            p1.classList.add("sem");
            p2.classList.add("sem");
        }
    } else {
        console.log("✅ Link válido com itens encontrados");
    }
}

// Executa quando a página carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', executarVerificacao);
} else {
    executarVerificacao();
}

// Exporta a função para uso externo
window.verificarLinkValido = verificarLinkValido;