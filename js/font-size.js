document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os elementos do body
  const allTextElements = document.querySelectorAll('body, body *');

  // Armazena o tamanho original de cada elemento
  const originalSizes = [];
  allTextElements.forEach(el => {
      const style = window.getComputedStyle(el);
      originalSizes.push({ el, size: parseFloat(style.fontSize) });
  });

  // Recupera a escala salva do localStorage (default = 1)
  let scale = parseFloat(localStorage.getItem('fontScale')) || 1;

  // Função para aplicar a escala
  function applyScale() {
      allTextElements.forEach((el, i) => {
          el.style.fontSize = (originalSizes[i].size * scale) + 'px';
      });
  }

  // Aplica a escala ao carregar a página
  applyScale();

  // Botões
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');
  const resetBtn = document.getElementById('reset');

  decreaseBtn?.addEventListener('click', () => {
      scale *= 0.9;
      localStorage.setItem('fontScale', scale);
      applyScale();
  });

  increaseBtn?.addEventListener('click', () => {
      scale *= 1.1;
      localStorage.setItem('fontScale', scale);
      applyScale();
  });

  resetBtn?.addEventListener('click', () => {
      scale = 1;
      localStorage.setItem('fontScale', scale);
      applyScale();
  });
});