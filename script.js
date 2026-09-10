document.addEventListener('DOMContentLoaded', () => {
  const flowers = document.querySelectorAll('.flower');
  const modal = document.getElementById('modal-note');
  const btnOpenModal = document.getElementById('btn-message');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const noteText = document.getElementById('note-text');
  const particlesContainer = document.getElementById('particles-container');

  // Abrir modal con botón principal
  btnOpenModal.addEventListener('click', () => {
    noteText.textContent = "Las flores amarillas simbolizan la alegría, la amistad sincera y los nuevos comienzos. ¡Espero que este ramo te saque una sonrisa hoy!";
    modal.showModal();
  });

  // Cerrar modal con botón de cierre
  btnCloseModal.addEventListener('click', () => {
    modal.close();
  });

  // Cerrar modal al hacer clic en el fondo
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      modal.close();
    }
  });

  // Clic en cada flor individual
  flowers.forEach(flower => {
    flower.addEventListener('click', (e) => {
      const customMessage = flower.getAttribute('data-message');
      noteText.textContent = customMessage;
      modal.showModal();
      createParticles(e.clientX, e.clientY);
    });
  });

  // Generador de partículas flotantes
  function createParticles(x, y) {
    const particleCount = 8;
    const symbols = ['✨', '🌻', '💛', '⭐'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('span');
      particle.className = 'floating-particle';
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      
      const offsetX = (Math.random() - 0.5) * 60;
      const offsetY = (Math.random() - 0.5) * 60;

      particle.style.left = `${x + offsetX}px`;
      particle.style.top = `${y + offsetY}px`;
      particle.style.fontSize = `${Math.random() * 10 + 15}px`;

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 3000);
    }
  }
});