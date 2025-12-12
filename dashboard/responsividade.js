function gerenciarRolagemModal() {
    const modalContent = document.getElementById('modal-content');
    const modalPai = document.getElementById('modal-edicao'); // Ou a ID do seu container modal (div pai)
    const bodyElement = document.body;
    const alturaViewport = window.innerHeight;
    const alturaModalConteudo = modalContent.offsetHeight;

    if (!modalContent || !modalPai) {
        console.error("Erro: Elementos da modal não encontrados.");
        return;
    }

    if (alturaModalConteudo > alturaViewport) {
        // 1. TRAVAR O FUNDO (BODY)
        // Isso garante que apenas a modal, e não a página de fundo, role.
        bodyElement.classList.add('modal-open');
        console.log("Rolagem do fundo (body) BLOQUEADA.");
        
        // 2. GARANTIR ROLAGEM NA MODAL PAI
        // Isso é crucial para que o usuário possa ver todo o conteúdo do modal.
        modalPai.style.overflowY = 'auto'; 

    } else {
        modalPai.style.overflowY = 'hidden';
        console.log("Modal não precisa de rolagem, fundo (body) permanece no estado atual (bloqueado se modal estiver aberta).");
    }
}

window.addEventListener('resize', gerenciarRolagemModal);
