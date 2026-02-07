const form = document.querySelector("#form-tarefa");
const input = document.querySelector("#caixaentrada");
const lista = document.querySelector("#lista");

// adicionar tarefa
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const textoTarefa = input.value.trim();
    if (textoTarefa === "") return;

    const li = document.createElement("li");
    li.textContent = textoTarefa;

    const span = document.createElement("span");
    span.textContent = " ❌";
    span.classList.add("apagar");

    li.appendChild(span);
    lista.appendChild(li);

    input.value = "";
});

// marcar como concluída OU apagar
lista.addEventListener("click", function (event) {

    // apagar tarefa
    if (event.target.classList.contains("apagar")) {
        event.target.parentElement.remove();
        return;
    }

    // marcar como concluída
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("concluida");
    }
});
