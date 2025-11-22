// PAGINA DE LOGIN 

document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msgErro = document.getElementById("erro");

    msgErro.textContent = "";

    // EMAIL COM REGEX (6 CARCTERES MIN)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        msgErro.textContent = "Digite um email válido.";
        return;
    }

    // SENHA 
    if (senha.length < 6) {
        msgErro.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    document.getElementById("formContato").reset();
    alert("Login realizado com sucesso!");
});
