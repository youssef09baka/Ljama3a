const panier = document.getElementById('panier');
const openPanier = document.getElementById('openPanier');
const closePanier = document.getElementById('closePanier');
const panierItems = document.getElementById('panierItems');
const viderPanier = document.getElementById('viderPanier');
const payer = document.getElementById('payer');

// Ouvrir / Fermer panier
openPanier.addEventListener('click', () => panier.classList.add('active'));
closePanier.addEventListener('click', () => panier.classList.remove('active'));

// Ajouter au panier
document.querySelectorAll('.btn-louer').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.car-card');
    const nom = card.querySelector('h3').innerText;
    const imgSrc = card.querySelector('img').src;

    alert(`✅ La voiture "${nom}" a été ajoutée à votre panier avec succès.`);

    const emptyMsg = panierItems.querySelector('.vide');
    if (emptyMsg) emptyMsg.remove();

    const item = document.createElement('div');
    item.classList.add('panier-item');
    item.innerHTML = `
      <div class="panier-item-info">
        <img src="${imgSrc}" alt="${nom}">
        <span>${nom}</span>
      </div>
      <button class="btn-delete">Supprimer</button>
    `;
    panierItems.appendChild(item);

    item.querySelector('.btn-delete').addEventListener('click', () => {
      item.remove();
      if (!panierItems.children.length) {
        panierItems.innerHTML = '<p class="vide">Aucun véhicule ajouté.</p>';
      }
    });
  });

  
});

// Vider le panier
viderPanier.addEventListener('click', () => {
  panierItems.innerHTML = '<p class="vide">Aucun véhicule ajouté.</p>';
});

// Paiement
payer.addEventListener('click', () => {
  if (panierItems.querySelector('.panier-item')) {
    alert("💳 Merci pour votre confiance ! Vous allez être redirigé vers la page de paiement.");
  } else {
    alert("⚠️ Votre panier est vide. Ajoutez d'abord une voiture.");
  }
});

// ✅ Menu Burger (mobile)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
