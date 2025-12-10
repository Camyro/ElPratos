import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = window.firebaseAuth;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login realizado!");
            // NÃO redireciona aqui - deixa o onAuthStateChanged fazer isso
        })
        .catch(error => {
            alert("Erro: " + error.message);
        });
}

window.login = login;

// Agora o redirecionamento acontece aqui quando o Firebase confirmar a auth
onAuthStateChanged(window.firebaseAuth, (user) => {
    if (user) {
        console.log("Usuário autenticado, redirecionando...");
        window.location.href = "../";
    }
});