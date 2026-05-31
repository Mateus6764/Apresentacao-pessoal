// MODO ESCURO

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "☀️";
    } else {
        themeButton.innerHTML = "🌙";
    }
});


// FORMULÁRIO

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
    alert("Mensagem enviada com sucesso!");

    form.reset();
});