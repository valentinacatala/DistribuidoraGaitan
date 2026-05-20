function sendWhatsApp() {
  const nombre = document.querySelector('input[type="text"]').value || "Sin nombre";
  const tel = document.querySelector('input[type="tel"]').value || "Sin teléfono";
  const negocio = document.querySelector('select').value || "No especificado";
  const productos = document.querySelector('textarea').value || "Sin detalle";
  const msg = encodeURIComponent(
    `Hola Distribuidora Gaitan! Les escribo desde la web.\n\n👤 Nombre: ${nombre}\n📱 Teléfono: ${tel}\n🏪 Negocio: ${negocio}\n📦 Productos de interés: ${productos}`
  );
  window.open(`https://wa.me/5493515000000?text=${msg}`, '_blank');
}

// Puedes agregar más funciones JavaScript aquí si las necesitas en el futuro.

// Lógica del menú responsive
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll'); // Opcional: evita el scroll cuando el menú está abierto
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    });
  });
});