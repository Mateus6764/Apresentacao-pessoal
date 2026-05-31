const themeButton = document.getElementById("theme-toggle");
const body = document.getElementById("page-body");

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    if (themeButton) themeButton.innerHTML = "☀️";
}

if (themeButton) {
    themeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.innerHTML = "🌙";
        }
    });
}

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", () => {
        alert("Mensagem enviada com sucesso!");
    });
}