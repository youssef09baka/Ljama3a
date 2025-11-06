window.addEventListener("load", () => {
    const card = document.querySelector(".card");
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("input[name='email']").value.trim();
    if (!email) {
        alert("Veuillez entrer votre adresse e-mail.");
        return;
    }

    btn.textContent = "Envoi du lien...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Un lien de réinitialisation a été envoyé à " + email);
        window.location.href = "../loginpage/index.html";
    }, 1500);
});
