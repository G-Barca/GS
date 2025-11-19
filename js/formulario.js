//Página Contato //


document.getElementById("formContato").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const msgErro = document.getElementById("erro");

    msgErro.textContent = "";

    // NOME
    if (nome.length < 3) {
        msgErro.textContent = "O nome deve ter pelo menos 3 caracteres.";
        event.preventDefault();
        return;
    }

    // CPF 
    const cpfLimpo = cpf.replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
        msgErro.textContent = "Digite um CPF válido com 11 dígitos.";
        event.preventDefault();
        return;
    }

    // EMAIL
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        msgErro.textContent = "Digite um email válido.";
        event.preventDefault();
        return;
    }

    event.preventDefault();
    document.getElementById("formContato").reset();
    alert("Informações enviadas com sucesso!");
});
