function calculerTotal() {
  const prixJour = 120; // tarif fixe
  const debut = new Date(document.getElementById("dateDebut").value);
  const fin = new Date(document.getElementById("dateFin").value);

  if (isNaN(debut) || isNaN(fin)) {
    alert("Veuillez entrer les deux dates !");
    return;
  }

  const diffTemps = fin - debut;
  const jours = Math.ceil(diffTemps / (1000 * 60 * 60 * 24));
  if (jours <= 0) {
    alert("La date de fin doit être après la date de début !");
    return;
  }

  const total = jours * prixJour;
  document.getElementById("total").textContent = "Total : " + total + " €";
}

function payer() {
  const nom = document.getElementById("nom").value;
  const carte = document.getElementById("carte").value;

  if (nom === "" || carte === "") {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  document.getElementById("message").style.display = "block";
}

// Boutons
document.getElementById("btnTotal").addEventListener("click", calculerTotal);
document.getElementById("btnPayer").addEventListener("click", payer);
