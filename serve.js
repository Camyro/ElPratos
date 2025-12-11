import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = window.firebaseDb;

// Lista global para armazenar os dados dos itens com as chaves originais
let dadosItens = {};
let listaChaves = []; // Array com todas as chaves para iterar

// Função para buscar e criar a tabela
async function carregarTabelaItens(idTabela) {
    try {
        const docSnap = await getDoc(doc(db, "principal", "itens"));

        if (!docSnap.exists()) {
            console.log("Documento não encontrado!");
            return null;
        }

        const dados = docSnap.data();
        const tabela = document.querySelector(`#${idTabela}`);

        let type1 = document.getElementById("type1");
        let type1p = document.getElementById("type1p");
        let type1d = document.getElementById("type1d");

        let type2 = document.getElementById("type2");
        let type2p = document.getElementById("type2p");
        let type2d = document.getElementById("type2d");

        let type3 = document.getElementById("type3");
        let type3p = document.getElementById("type3p");
        let type3d = document.getElementById("type3d");

        let type4 = document.getElementById("type4");
        let type4p = document.getElementById("type4p");
        let type4d = document.getElementById("type4d");

        if (!tabela) {
            console.error(`Tabela com id "${idTabela}" não encontrada!`);
            return null;
        }

        // Limpa os dados anteriores
        dadosItens = {};
        listaChaves = [];

        // Limpa a tabela
        tabela.innerHTML = `
            <tr>
                <th class="nome">Nome</th>
                <th class="center">Quant</th>
                <th class="center">R$</th>
            </tr>
        `;

        // Percorre todos os itens do Firestore
        Object.keys(dados).forEach(chave => {
            const item = dados[chave];

            // Usa a chave ORIGINAL do servidor como ID
            const id = chave;

            // Adiciona à lista de chaves
            listaChaves.push(id);

            // Armazena os dados usando a chave original
            dadosItens[id] = {
                chave: chave,
                name: item.name,
                valor: Number(item.valor) || 0,
                desconto: Number(item.desconto) || 0,
                itensDesconto: Number(item.itensDesconto) || 0,
                total: Number(item.total) || 0,
                type: item.type || 0
            };

            // Cria a linha da tabela usando a chave original como ID
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="nome">${item.name}</td>
                <td class="center quant"><input type="number" id="inp-${id}" class="quant" min="0" max="${item.total || 999999}" value="0"></td>
                <td class="center" id="text-${id}">0.00</td>
                <td style="display:none;" id="total-${id}">${item.total || 0}</td>
            `;
            
            tabela.appendChild(tr);

            verificar(document.getElementById(`type${item.type}`), document.getElementById(`type${item.type}p`), document.getElementById(`type${item.type}d`), item.type);

            type1p = document.getElementById("type1p");
            type1d = document.getElementById("type1d");

            type2p = document.getElementById("type2p");
            type2d = document.getElementById("type2d");

            type3p = document.getElementById("type3p");
            type3d = document.getElementById("type3d");

            type4p = document.getElementById("type4p");
            type4d = document.getElementById("type4d");

            const trP = document.createElement('tr');
            trP.innerHTML = `
                <td>${item.name}</td>
                <td>1</td>
                <td>${item.valor.toString().replace('.', ',')}</td>
            `;

            const trD = document.createElement('tr');
            trD.innerHTML = `
                <td>${item.name}</td>
                <td>${item.itensDesconto} ou mais</td>
                <td>${item.desconto.toString().replace('.', ',')}</td>
            `;

            function verificar(type, typep, typed, number) {
                if (!typep) {
                    typep = document.createElement('table');
                    typep.id = `type${number}p`;
                    typep.innerHTML = `
                        <tr>
                            <th class="nome">Nome</th>
                            <th class="center">Quant</th>
                            <th class="center">R$</th>
                        </tr>
                    `;
                    type.appendChild(typep);
                }
                if (!typed) {
                    if (item.desconto != 0) {
                        type.insertAdjacentHTML('beforeend', `<h1>Descontos</h1>`);
                        typed = document.createElement('table');
                        typed.id = `type${number}d`;
                        typed.innerHTML = `
                            <tr>
                                <th class="nome">Nome</th>
                                <th class="center">Quant</th>
                                <th class="center">R$</th>
                            </tr>
                        `;
                        type.appendChild(typed);
                    }
                }
            }

            // if (!type1p) {
            //     type1p = document.createElement('table');
            //     type1p.id = 'type1p';
            //     type1p.innerHTML = `
            //         <tr>
            //             <th class="nome">Nome</th>
            //             <th class="center">Quant</th>
            //             <th class="center">R$</th>
            //         </tr>
            //     `;
            //     type1.appendChild(type1p);
            // }
            // if (!type1d) {
            //     if (item.desconto != 0) {
            //         type1.insertAdjacentHTML('beforeend', `<h1>Descontos</h1>`);
            //         type1d = document.createElement('table');
            //         type1d.id = 'type1d';
            //         type1d.innerHTML = `
            //             <tr>
            //                 <th class="nome">Nome</th>
            //                 <th class="center">Quant</th>
            //                 <th class="center">R$</th>
            //             </tr>
            //         `;
            //         type1.appendChild(type1d);
            //     }
            // }

            if (item.desconto != 0) {  
                if (item.type == 1) {
                    type1d.appendChild(trD);
                }
                if (item.type == 2) {
                    type2d.appendChild(trD);
                }
                if (item.type == 3) {
                    type3d.appendChild(trD);
                }
                if (item.type == 4) {
                    type4d.appendChild(trD);
                }
            }

            if (item.type == 1) {
                type1p.appendChild(trP);
            }

            if (item.type == 2) {
                type2p.appendChild(trP);
            }

            if (item.type == 3) {
                type3p.appendChild(trP);
            }

            if (item.type == 4) {
                type4p.appendChild(trP);
            }
        });

        // Adiciona linha de totais
        const trTotais = document.createElement('tr');
        trTotais.innerHTML = `
            <td class="nome">Totais</td>
            <td class="center quant" id="ttl-quant">0</td>
            <td class="center" id="ttl-var">0.00</td>
            <td style="display:none;"></td>
        `;
        tabela.appendChild(trTotais);

        console.log("✅ Tabela carregada!");
        console.log("📦 Dados dos itens:", dadosItens);
        console.log("🔑 Lista de chaves:", listaChaves);

        // Adiciona event listeners
        adicionarCalculoAutomatico();
        adicionarValidacoes();

        return true;

    } catch (error) {
        console.error("❌ Erro ao carregar tabela:", error);
        return null;
    }
}

// Função para adicionar listeners
function adicionarCalculoAutomatico() {
    const inputs = document.querySelectorAll('input.quant');

    console.log(`🔗 Adicionando listeners a ${inputs.length} inputs`);

    inputs.forEach(input => {
        input.addEventListener('input', calcularTotais);
        input.addEventListener('change', calcularTotais);
    });
}

// Função para adicionar validações nos inputs
function adicionarValidacoes() {
    const inputs = document.querySelectorAll('input.quant');

    inputs.forEach(input => {
        // Bloqueia caracteres inválidos durante a digitação
        input.addEventListener('keydown', function(e) {
            // Permite: Backspace, Delete, Tab, Escape, Enter, setas
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                // Permite: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Permite: home, end, setas esquerda/direita
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                return;
            }

            // Bloqueia tudo que não for número
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && 
                (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

        // Valida após digitação
        input.addEventListener('input', function(e) {
            let valor = this.value;

            // Remove caracteres não numéricos
            valor = valor.replace(/[^0-9]/g, '');

            // Remove zeros à esquerda
            valor = valor.replace(/^0+/, '');

            // Se ficou vazio, coloca 0
            if (valor === '') {
                valor = '0';
            }

            // Atualiza o valor
            this.value = valor;
        });

        // Valida ao sair do campo
        input.addEventListener('blur', function(e) {
            let valor = parseInt(this.value) || 0;

            // Garante que não seja negativo
            if (valor < 0) {
                valor = 0;
            }

            // Atualiza o valor
            this.value = valor;
        });

        // Bloqueia colar texto inválido
        input.addEventListener('paste', function(e) {
            e.preventDefault();

            // Pega o texto colado
            let texto = (e.clipboardData || window.clipboardData).getData('text');

            // Remove tudo que não for número
            texto = texto.replace(/[^0-9]/g, '');

            // Remove zeros à esquerda
            texto = texto.replace(/^0+/, '');

            // Se ficou vazio, coloca 0
            if (texto === '') {
                texto = '0';
            }

            // Insere o texto limpo
            this.value = texto;

            // Dispara o evento de input para recalcular
            this.dispatchEvent(new Event('input'));
        });
    });
}

// Função para calcular o valor de um item
function calcularValorItem(chave, quantidade) {
    const item = dadosItens[chave];

    if (!item) {
        console.error(`❌ Item ${chave} não encontrado!`);
        return 0;
    }

    if (quantidade === 0 || isNaN(quantidade)) {
        return 0;
    }

    let resultado;

    // Se itensDesconto for 0, significa que NÃO tem desconto progressivo
    if (item.itensDesconto === 0) {
        // Usa sempre o valor normal
        resultado = quantidade * item.valor;
        console.log(`💵 ${item.name}: ${quantidade} × ${item.valor} (sem desconto progressivo) = ${resultado.toFixed(2)}`);
    } 
    // Se quantidade MAIOR que itensDesconto, usa desconto
    else if (quantidade >= item.itensDesconto) {
        resultado = quantidade * item.desconto;
        console.log(`💰 ${item.name}: ${quantidade} × ${item.desconto} (desconto) = ${resultado.toFixed(2)}`);
    } 
    // Senão, usa valor normal
    else {
        resultado = quantidade * item.valor;
        console.log(`💵 ${item.name}: ${quantidade} × ${item.valor} (normal) = ${resultado.toFixed(2)}`);
    }

    return resultado;
}

// Função para calcular os totais
function calcularTotais() {
    console.log("🧮 ===== CALCULANDO TOTAIS =====");

    let totalQuantidade = 0;
    let totalValor = 0;
    let link = "";

    // Percorre todas as chaves armazenadas
    listaChaves.forEach(chave => {
        const input = document.querySelector(`#inp-${chave}`);

        if (!input) {
            console.error(`❌ Input não encontrado: inp-${chave}`);
            return;
        }

        let quantidade = parseInt(input.value) || 0;
        const item = dadosItens[chave];

        if (item) {
            // Verifica o total disponível e corrige se necessário
            const totalElement = document.querySelector(`#total-${chave}`);

            if (totalElement) {
                const totalDisponivel = parseInt(totalElement.textContent) || 0;

                if (totalDisponivel > 0 && quantidade > totalDisponivel) {
                    quantidade = totalDisponivel;
                    input.value = quantidade;
                    console.log(`⚠️ ${item.name}: Quantidade ajustada para o máximo disponível (${totalDisponivel})`);
                }
            }

            // Calcula o valor
            const valorItem = calcularValorItem(chave, quantidade);

            // Atualiza o campo de texto
            const textElement = document.querySelector(`#text-${chave}`);

            if (textElement) {
                textElement.textContent = valorItem.toFixed(2);
                console.log(`✅ ${item.name}: ${quantidade} unidades = R$ ${valorItem.toFixed(2)}`);
            } else {
                console.error(`❌ Elemento text-${chave} não encontrado!`);
            }

            // Soma aos totais
            totalQuantidade += quantidade;
            totalValor += valorItem;

            // Gera link
            if (quantidade > 0) {
                if (link === "") {
                    link = `?${chave}=${quantidade}`;
                } else {
                    link += `&${chave}=${quantidade}`;
                }
                // Adiciona o nome do item com prefixo N_ e o valor com prefixo V_
                link += `&N_${chave}=${encodeURIComponent(item.name)}`;
                link += `&V_${chave}=${valorItem.toFixed(2)}`;
            }
        }
    });

    // Atualiza totais
    const ttlQuant = document.querySelector('#ttl-quant');
    const ttlVar = document.querySelector('#ttl-var');

    if (ttlQuant) {
        ttlQuant.textContent = totalQuantidade;
    }

    if (ttlVar) {
        ttlVar.textContent = totalValor.toFixed(2);
    }

    window.linkCalculado = link;

    console.log(`📊 TOTAL: ${totalQuantidade} itens = R$ ${totalValor.toFixed(2)}`);
    console.log("🔗 Link:", link);
    console.log("🧮 ===== FIM =====\n");
}

// Função para enviar o link
function enviar() {
    const link = window.linkCalculado || "";

    if (link !== "") {
        const linkCompleto = "mensagem/" + link;
        window.location.href = linkCompleto;
    } else {
        const elementoInvalido = document.getElementById("invalido");
        if (elementoInvalido) {
            elementoInvalido.innerHTML = "Nenhum item foi adicionado";
        } else {
            alert("Nenhum item foi adicionado");
        }
    }
}

// Torna a função global para ser acessada pelo HTML
window.enviar = enviar;

// Carrega automaticamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        carregarTabelaItens('minhaTabela');
    });
} else {
    carregarTabelaItens('minhaTabela');
}