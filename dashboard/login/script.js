// If it it works, don't fix it

import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Função para fazer login
export function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = window.firebaseAuth;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login realizado!");
        })
        .catch(error => {
            console.error("Client inputs: email=", email, "; password=", password);
            console.error("Erro ao fazer login:", error);
            alert("Erro ao fazer o login! O servidor reportou isso: " + error.message + " Verifique o console para mais detalhes.");
        });
}

// Função para sair da página de login
function exit() {
    window.location.href = "../../";
}

// Tornar as funções acessíveis globalmente
window.login = login;
window.exit = exit;

// Agora o redirecionamento acontece aqui quando o Firebase confirmar a auth
onAuthStateChanged(window.firebaseAuth, (user) => {
    if (user) {
        window.location.href = "../";
    }
});