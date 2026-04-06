document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector(".login-form");

  if (!formulario) return;

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;

    const campos = formulario.querySelectorAll("input");

    campos.forEach((campo) => {
      const mensagemExistente = campo.parentElement.querySelector(".mensagem-erro");
      if (mensagemExistente) mensagemExistente.remove();

      campo.classList.remove("input-erro", "input-sucesso");

      if (campo.value.trim() === "") {
        mostrarErro(campo, "Preencha este campo.");
        valido = false;
      } else {
        campo.classList.add("input-sucesso");
      }
    });

    /* Validação especial para cadastro */
    const email = document.getElementById("email");
    const confirmarEmail = document.getElementById("confirmar-email");

    if (email && confirmarEmail) {
      if (email.value !== confirmarEmail.value) {
        mostrarErro(confirmarEmail, "Os e-mails não coincidem.");
        valido = false;
      }
    }

    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmar-senha");

    if (senha && confirmarSenha) {
      if (senha.value !== confirmarSenha.value) {
        mostrarErro(confirmarSenha, "As senhas não coincidem.");
        valido = false;
      }
    }

    if (valido) {
      mostrarSucesso(formulario);
      formulario.reset();

      const inputs = formulario.querySelectorAll("input");
      inputs.forEach((input) => {
        input.classList.remove("input-sucesso");
      });
    }
  });

  function mostrarErro(campo, mensagem) {
    campo.classList.add("input-erro");

    const erro = document.createElement("div");
    erro.classList.add("mensagem-erro");
    erro.innerText = mensagem;

    campo.parentElement.appendChild(erro);
  }

  function mostrarSucesso(form) {
    let msg = form.querySelector(".mensagem-sucesso");
    if (msg) msg.remove();

    msg = document.createElement("div");
    msg.classList.add("mensagem-sucesso");
    msg.innerText = "Dados enviados com sucesso!";

    form.appendChild(msg);
  }
});