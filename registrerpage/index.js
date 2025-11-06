window.addEventListener("load", () => {
    const card = document.querySelector(".card");
    card.style.transition = "all 0.8s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    const fullname = document.querySelector("input[name='fullname']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const password = document.querySelector("input[name='password']").value.trim();
    const confirm = document.querySelector("input[name='confirm']").value.trim();

    if (!fullname || !email || !password || !confirm) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    if (password !== confirm) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }

    btn.textContent = "Inscription...";
    btn.disabled = true;

    setTimeout(() => {
        window.location.href = "../homepage/index.html";
    }, 1000);
});
