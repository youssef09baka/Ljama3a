window.addEventListener("load", () => {
    const card = document.querySelector(".card");
    card.style.transition = "all 0.8s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault(); // empêche la soumission du formulaire

    const email = document.querySelector("input[name='email']").value.trim();
    const password = document.querySelector("input[name='password']").value.trim();

    

    btn.textContent = "Connexion...";
    btn.disabled = true;

    setTimeout(() => {
        window.location.href = "../homepage/index.html";
    }, 1000); // délai pour effet “Connexion...”
});
