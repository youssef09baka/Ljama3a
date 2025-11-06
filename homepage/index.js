// Message d'accueil
window.onload = function() {
  console.log("Bienvenue sur AutoRent 🚗 !");
};

// Bouton “Commencer maintenant”
document.getElementById("btnStart").addEventListener("click", () => {
  alert("Bienvenue sur AutoRent ! Explorez nos voitures disponibles.");
});

// Boutons “Louer”
const boutonsLouer = document.querySelectorAll(".btn-louer");
boutonsLouer.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Merci ! Notre agent vous contactera pour finaliser la réservation.");
  });

  
});
