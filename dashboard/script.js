import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc, updateDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const auth = window.firebaseAuth;
const db = window.firebaseDb;

export function logout() {
    signOut(auth)
        .then(() => window.location.href = "login/")
        .catch(error => alert("Erro ao sair: " + error.message));
}

// Função para mostrar confirmação customizada
function mostrarConfirmacao(mensagem, onConfirmar) {
    const modal = document.createElement('div');
    modal.className = 'modal-confirmacao';
    modal.innerHTML = `
        <div class="confirmacao-content">
            <h3>⚠️ Confirmação</h3>
            <p>${mensagem}</p>
            <div style="margin-top: 20px;">
                <button onclick="confirmarAcao()" style="background: #28a745;">Sim</button>
                <button onclick="cancelarAcao()" style="background: #6c757d;">Não</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Define as funções de confirmação
    window.confirmarAcao = () => {
        modal.remove();
        onConfirmar();
        delete window.confirmarAcao;
        delete window.cancelarAcao;
    };

    window.cancelarAcao = () => {
        modal.remove();
        delete window.confirmarAcao;
        delete window.cancelarAcao;
    };
}

// Função para validar desconto e itens desconto
function validarDesconto(desconto, itensDesconto) {
    const desc = parseFloat(desconto) || 0;
    const itens = parseInt(itensDesconto) || 0;

    // Ambos devem ser 0 OU ambos devem ser maior que 0
    if ((desc === 0 && itens === 0) || (desc > 0 && itens > 0)) {
        return true;
    }
    return false;
}

// Função para abrir modal de criação de novo item
function abrirCriacaoItem() {
    const modal = document.createElement('div');
    modal.className = 'modal-edicao';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Criar Novo Item</h2>
            <button class="fechar" onclick="this.parentElement.parentElement.remove()">✕</button>

            <label>Nome:</label>
            <input type="text" id="new-name" placeholder="Nome do item">

            <label>Valor:</label>
            <input type="number" id="new-valor" value="0" step="0.01">

            <label>Desconto:</label>
            <input type="number" id="new-desconto" value="0" step="0.01">

            <label>Itens Desconto:</label>
            <input type="number" id="new-itensDesconto" value="0" step="1">

            <label>Total Disponível:</label>
            <input type="number" id="new-total" value="0" step="1">

            <label>Tipo:</label>
            <input type="number" id="new-type" value="0">

            <div style="margin-top: 20px;">
                <button onclick="confirmarCriarItem()">Criar</button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #6c757d;">Cancelar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Função para confirmar criação do item
function confirmarCriarItem() {
    const nome = document.getElementById('new-name').value.trim();

    if (!nome) {
        mostrarMensagem("❌ O nome do item é obrigatório!", "erro");
        return;
    }

    mostrarConfirmacao(
        `Tem certeza que deseja criar o item "<strong>${nome}</strong>"?`,
        () => criarNovoItem()
    );
}

// Função para criar novo item no Firestore
async function criarNovoItem() {
    try {
        const nome = document.getElementById('new-name').value.trim();
        const desconto = document.getElementById('new-desconto').value;
        const itensDesconto = document.getElementById('new-itensDesconto').value;

        // Validação antes de criar
        if (!validarDesconto(desconto, itensDesconto)) {
            mostrarMensagem("❌ Desconto e Itens Desconto devem ser ambos 0 ou ambos maior que 0!", "erro");
            return;
        }

        const novoItem = {
            name: nome,
            valor: parseFloat(document.getElementById('new-valor').value),
            desconto: parseFloat(desconto),
            itensDesconto: parseInt(itensDesconto),
            total: parseInt(document.getElementById('new-total').value) || 0,
            type: parseInt(document.getElementById('new-type').value)
        };

        // Gera uma chave única baseada no nome e timestamp
        const chave = nome.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now();

        const docRef = doc(db, "principal", "itens");
        await updateDoc(docRef, {
            [chave]: novoItem
        });

        console.log("Item criado com sucesso:", chave, novoItem);

        mostrarMensagem("✅ Item criado com sucesso!", "sucesso");

        document.querySelector('.modal-edicao').remove();
        buscarTodosItens();

    } catch (error) {
        console.error("Erro ao criar item:", error);
        mostrarMensagem("❌ Erro ao criar: " + error.message, "erro");
    }
}

// Função para abrir a aba de edição
function abrirEdicao(chave, item) {
    console.log("Editando:", chave, item);

    const modal = document.createElement('div');
    modal.className = 'modal-edicao';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Editar ${item.name}</h2>
            <button class="fechar" onclick="this.parentElement.parentElement.remove()">✕</button>

            <label>Nome:</label>
            <input type="text" id="edit-name" value="${item.name}">

            <label>Valor:</label>
            <input type="number" id="edit-valor" value="${item.valor}" step="0.01">

            <label>Desconto:</label>
            <input type="number" id="edit-desconto" value="${item.desconto}" step="0.01">

            <label>Itens Desconto:</label>
            <input type="number" id="edit-itensDesconto" value="${item.itensDesconto}" step="1">

            <label>Total Disponível:</label>
            <input type="number" id="edit-total" value="${item.total || 0}" step="1">

            <label>Tipo:</label>
            <input type="number" id="edit-type" value="${item.type}">

            <div style="margin-top: 20px;">
                <button onclick="confirmarSalvar('${chave}', '${item.name}')">Salvar</button>
                <button onclick="confirmarExcluir('${chave}', '${item.name}')" style="background: #dc3545;">Excluir</button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #6c757d;">Cancelar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Função para confirmar antes de salvar
function confirmarSalvar(chave, nome) {
    mostrarConfirmacao(
        `Tem certeza que deseja salvar as alterações em "<strong>${nome}</strong>"?`,
        () => salvarEdicao(chave)
    );
}

// Função para confirmar antes de excluir
function confirmarExcluir(chave, nome) {
    mostrarConfirmacao(
        `Tem certeza que deseja EXCLUIR "<strong>${nome}</strong>"? Esta ação não pode ser desfeita!`,
        () => excluirItem(chave)
    );
}

// Função para salvar a edição no Firestore
async function salvarEdicao(chave) {
    try {
        const desconto = document.getElementById('edit-desconto').value;
        const itensDesconto = document.getElementById('edit-itensDesconto').value;

        // Validação antes de salvar
        if (!validarDesconto(desconto, itensDesconto)) {
            mostrarMensagem("❌ Desconto e Itens Desconto devem ser ambos 0 ou ambos maior que 0!", "erro");
            return;
        }

        const novosDados = {
            name: document.getElementById('edit-name').value,
            valor: parseFloat(document.getElementById('edit-valor').value),
            desconto: parseFloat(desconto),
            itensDesconto: parseInt(itensDesconto),
            total: parseInt(document.getElementById('edit-total').value) || 0,
            type: parseInt(document.getElementById('edit-type').value)
        };

        const docRef = doc(db, "principal", "itens");
        await updateDoc(docRef, {
            [chave]: novosDados
        });

        console.log("Salvo com sucesso:", chave, novosDados);

        // Mostra mensagem de sucesso
        mostrarMensagem("✅ Item atualizado com sucesso!", "sucesso");

        document.querySelector('.modal-edicao').remove();
        buscarTodosItens();

    } catch (error) {
        console.error("Erro ao salvar:", error);
        mostrarMensagem("❌ Erro ao salvar: " + error.message, "erro");
    }
}

// Função para excluir item do Firestore
async function excluirItem(chave) {
    try {
        const docRef = doc(db, "principal", "itens");

        await updateDoc(docRef, {
            [chave]: deleteField()
        });

        console.log("Excluído com sucesso:", chave);

        mostrarMensagem("✅ Item excluído com sucesso!", "sucesso");

        document.querySelector('.modal-edicao').remove();
        buscarTodosItens();

    } catch (error) {
        console.error("Erro ao excluir:", error);
        mostrarMensagem("❌ Erro ao excluir: " + error.message, "erro");
    }
}

// Função para mostrar mensagens de sucesso/erro
function mostrarMensagem(mensagem, tipo) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

async function buscarTodosItens() {
    try {
        const docSnap = await getDoc(doc(db, "principal", "itens"));

        if (!docSnap.exists()) {
            console.log("Documento não encontrado!");
            return null;
        }

        const dados = docSnap.data();
        const itens = {};
        const element = document.getElementById('element');
        let htmlContent = '';

        Object.keys(dados).forEach(chave => {
            itens[chave] = {
                name: dados[chave].name || "",
                valor: dados[chave].valor || 0,
                desconto: dados[chave].desconto || 0,
                itensDesconto: dados[chave].itensDesconto || 0,
                total: dados[chave].total || 0,
                type: dados[chave].type || 0
            };

            htmlContent += `
                <div class="div-base" onclick='abrirEdicao("${chave}", ${JSON.stringify(itens[chave])})' style="cursor: pointer;">
                    <h3>${itens[chave].name}</h3>
                    <p>Valor: R$ ${itens[chave].valor.toFixed(2)}</p>
                    <p>Desconto: R$ ${itens[chave].desconto.toFixed(2)}</p>
                    <p>Itens Desconto: ${itens[chave].itensDesconto}</p>
                    <p>Total Disponível: ${itens[chave].total}</p>
                    <p>Tipo: ${itens[chave].type}</p>
                </div>
            `;
        });

        element.innerHTML = htmlContent;
        console.log("Todos os itens:", itens);
        return itens;

    } catch (error) {
        console.error("Erro ao buscar itens:", error);
        return null;
    }
}

window.logout = logout;
window.abrirEdicao = abrirEdicao;
window.confirmarSalvar = confirmarSalvar;
window.confirmarExcluir = confirmarExcluir;
window.abrirCriacaoItem = abrirCriacaoItem;
window.confirmarCriarItem = confirmarCriarItem;

onAuthStateChanged(auth, user => {
    if (!user) {
        window.location.href = "login/";
    } else {
        buscarTodosItens().then(itens => {
            if (itens) window.itensCarregados = itens;
        });
    }
});