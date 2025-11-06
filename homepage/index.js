const panier = document.getElementById('panier');
const openPanier = document.getElementById('openPanier');
const closePanier = document.getElementById('closePanier');
const panierItems = document.getElementById('panierItems');
const viderPanier = document.getElementById('viderPanier');
const payer = document.getElementById('payer');

// 🛒 Ouvrir / Fermer le panier
openPanier.addEventListener('click', () => panier.classList.add('active'));
closePanier.addEventListener('click', () => panier.classList.remove('active'));

// 🧾 Ajouter au panier
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

// 🗑️ Vider le panier
viderPanier.addEventListener('click', () => {
  panierItems.innerHTML = '<p class="vide">Aucun véhicule ajouté.</p>';
});

// 💳 Paiement
payer.addEventListener('click', () => {
  if (panierItems.querySelector('.panier-item')) {
    alert("💳 Merci pour votre confiance ! Vous allez être redirigé vers la page de paiement.");
  } else {
    alert("⚠️ Votre panier est vide. Ajoutez d'abord une voiture.");
  }
});

// 📱 Menu latéral coulissant
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// ✅ Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    // Si le lien est interne (ex: #cars), on défile vers la section
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    // Fermer le menu après le clic
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});
