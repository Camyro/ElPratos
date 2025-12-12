// If it it works, don't fix it

const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
  button.addEventListener('click', () => {
    // Remover a classe "active" de todos os botões
    buttons.forEach(btn => btn.classList.remove('active'));

    // Adicionar a classe "active" ao botão clicado
    button.classList.add('active');
  });
}
