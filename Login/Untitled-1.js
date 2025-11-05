// Animation sur le bouton "En savoir plus"
document.getElementById('learnMoreBtn').addEventListener('click', () => {
    alert('Merci de votre intérêt ! 🌟 Nous travaillons chaque jour pour innover et inspirer.');
});

// Animation légère au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = '#000';
        header.style.transition = '0.5s';
    } else {
        header.style.background = '#111';
    }
});