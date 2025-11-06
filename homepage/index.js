
document.querySelectorAll('.btn-louer').forEach(button => {
  button.addEventListener('click', () => {
    alert("✅ Merci pour votre intérêt ! Un agent AutoRent vous contactera sous peu pour finaliser votre réservation.");
  });
});


document.querySelector('a[href="#cars"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#cars').scrollIntoView({ behavior: 'smooth' });
});
