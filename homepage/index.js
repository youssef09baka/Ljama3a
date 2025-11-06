// ==================== PANIER ====================
const panier = document.getElementById('panier');
const openPanier = document.getElementById('openPanier');
const closePanier = document.getElementById('closePanier');
const panierItems = document.getElementById('panierItems');
const viderPanier = document.getElementById('viderPanier');
const payer = document.getElementById('payer');

openPanier && openPanier.addEventListener('click', () => panier.classList.add('active'));
closePanier && closePanier.addEventListener('click', () => panier.classList.remove('active'));

document.querySelectorAll('.btn-louer').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.car-card');
    const nom = card.querySelector('h3')?.innerText || 'Véhicule';
    const imgSrc = card.querySelector('img')?.src || '';

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

viderPanier && viderPanier.addEventListener('click', () => {
  panierItems.innerHTML = '<p class="vide">Aucun véhicule ajouté.</p>';
});

payer && payer.addEventListener('click', () => {
  if (panierItems.querySelector('.panier-item')) {
    alert("💳 Merci pour votre confiance ! Vous allez être redirigé vers la page de paiement.");
  } else {
    alert("⚠️ Votre panier est vide. Ajoutez d'abord une voiture.");
  }
});

// ==================== MENU MOBILE ====================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// (optionnel mais sûr) s'assurer que le menu est cliquable au-dessus de tout
if (navLinks) {
  navLinks.style.zIndex = '9999';
}

menuToggle && navLinks && menuToggle.addEventListener('click', () => {
  // ❌ NE PLUS utiliser body.menu-open (overlay qui bloque)
  navLinks.classList.toggle('active');
});

// Fermer le menu après clic + naviguer
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || '';

    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#top' || href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.querySelector(href);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // ex: /Login/index.html
      window.location.href = href;
    }

    // refermer le menu
    navLinks.classList.remove('active');
  });
});

// Sécurité: si on repasse en desktop, on ferme le menu
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks) {
    navLinks.classList.remove('active');
  }
});
