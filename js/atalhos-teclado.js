// ===============================
// ATALHOS DE TECLADO
// ===============================
document.addEventListener("keydown", function (e) {

  const tag = document.activeElement.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  switch (e.key.toLowerCase()) {

    case "h":
      window.location.href = "../pages/home.html";
      break;

    case "f":
      window.location.href = "../pages/formulario.html";
      break;

    case "l":
      window.location.href = "../pages/login.html";
      break;

    case "c":
      window.location.href = "../pages/cadastro.html";
      break;

    case "p":
      window.location.href = "../pages/perfil.html";
      break;
  }
});


// ===============================
// CAIXA DE ATALHOS (USABILIDADE)
// ===============================
window.addEventListener("load", () => {
const caixa = document.createElement("div");
caixa.classList.add("caixa-atalhos");

 

  caixa.innerHTML = `
    <strong>Atalhos do site</strong><br><br>
    H → Home<br>
    F → Formulário<br>
    L → Login<br>
    C → Cadastro<br>
    P → Perfil<br><br>
    <button id="fecharAtalhos">Fechar</button>
  `;

  document.body.appendChild(caixa);

  document.getElementById("fecharAtalhos").onclick = () => {
    caixa.remove();
  };

});