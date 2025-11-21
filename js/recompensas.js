// localstorage 

if (!localStorage.getItem("pontos")) {
    localStorage.setItem("pontos", "800");
}

let pontos = parseInt(localStorage.getItem("pontos"));

//Modal

const modal = document.getElementById("modal-resgate");
const modalTitulo = document.getElementById("modal-titulo");
const btnConfirmar = document.getElementById("btn-confirmar");
const btnCancelar = document.getElementById("btn-cancelar");

let recompensaSelecionada = null;
let custoSelecionado = 0;

// Toast/pop-up

function mostrarToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

// Abrir o modal

document.querySelectorAll(".btn-resgatar").forEach(btn => {
    btn.addEventListener("click", () => {
        recompensaSelecionada = btn.parentElement.querySelector("h3").textContent;
        custoSelecionado = parseInt(btn.dataset.custo);

        modalTitulo.textContent = `Resgatar "${recompensaSelecionada}"?`;

        modal.style.display = "flex";
    });
});


//Btn: Cancelar e Confirmar

btnCancelar.addEventListener("click", () => {
    modal.style.display = "none";
});

btnConfirmar.addEventListener("click", () => {

    if (pontos < custoSelecionado) {
        mostrarToast("Pontos insuficientes!");
        modal.style.display = "none";
        return;
    }

    // Descontar pontos

    pontos -= custoSelecionado;
    localStorage.setItem("pontos", pontos.toString());

    mostrarToast("Recompensa resgatada!");

    // Animar botão de resgatado

    const botaoOriginal = [...document.querySelectorAll(".btn-resgatar")]
        .find(b => b.parentElement.querySelector("h3").textContent === recompensaSelecionada);

    botaoOriginal.textContent = "Resgatado ✔";
    botaoOriginal.disabled = true;
    botaoOriginal.style.background = "gray";

    modal.style.display = "none";
});
