document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Tipos de daltonismo
  const tipos = ["", "daltonismo-red-verde", "daltonismo-azul-amarelo", "daltonismo-todo"];

  // Função para aplicar o estado salvo
  function aplicarDaltonismo() {
    // Pega o tipo salvo no localStorage
    const tipoSalvo = localStorage.getItem("daltonismo") || "";
    body.classList.remove(...tipos.filter(t => t !== ""));
    if (tipoSalvo !== "") body.classList.add(tipoSalvo);
  }

  // Aplica o daltonismo ao carregar a página
  aplicarDaltonismo();

  // Opcional: se ainda quiser botão para mudar dinamicamente
  const daltonismoBtn = document.getElementById("daltonismo-toggle");
  if (daltonismoBtn) {
    // Inicializa o botão
    const icones = ["OFF", "🔴", "🔵", "🟡"];
    let current = tipos.indexOf(localStorage.getItem("daltonismo") || "");

    daltonismoBtn.textContent = `Daltonismo: ${icones[current]}`;

    daltonismoBtn.addEventListener("click", () => {
      current = (current + 1) % tipos.length;
      localStorage.setItem("daltonismo", tipos[current]);
      aplicarDaltonismo();
      daltonismoBtn.textContent = `Daltonismo: ${icones[current]}`;
    });
  }
});