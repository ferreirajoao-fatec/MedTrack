document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  // Criar mensagem geral do formulário
  const mensagemGeral = document.createElement("div");
  mensagemGeral.style.marginTop = "15px";
  mensagemGeral.style.fontWeight = "bold";
  mensagemGeral.style.textAlign = "center";
  form.appendChild(mensagemGeral);

  const campos = {
    nome: document.getElementById("nome"),
    cpf: document.getElementById("cpf"),
    dataNascimento: document.getElementById("dataNascimento"),
    sexo: document.getElementById("sexo"),
    altura: document.getElementById("altura"),
    peso: document.getElementById("peso"),
    tipoSanguineo: document.getElementById("tipo-sanguineo"),
    sus: document.getElementById("sus"),
    nomeContato: document.getElementById("nomeContato"),
    telefoneContato: document.getElementById("telefoneContato"),
    relacionamento: document.getElementById("relacionamento"),
    medicamento: document.getElementById("medicamento"),
    dosagem: document.getElementById("dosagem"),
    frequencia: document.getElementById("frequencia")
  };

  function mostrarErro(campo, mensagem) {
    campo.style.border = "2px solid red";

    let erro = campo.parentElement.querySelector(".erro-msg");

    if (!erro) {
      erro = document.createElement("div");
      erro.classList.add("erro-msg");
      erro.style.color = "red";
      erro.style.fontSize = "0.85rem";
      erro.style.marginTop = "4px";
      campo.parentElement.appendChild(erro);
    }

    erro.textContent = mensagem;
  }

  function limparErro(campo) {
    campo.style.border = "1px solid #ced4da";

    const erro = campo.parentElement.querySelector(".erro-msg");
    if (erro) erro.remove();
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    return cpf.length === 11;
  }

  function validarTelefone(telefone) {
    const regex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    return regex.test(telefone);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;
    mensagemGeral.textContent = "";

    Object.values(campos).forEach(campo => limparErro(campo));

    if (campos.nome.value.trim().length < 5) {
      mostrarErro(campos.nome, "Digite seu nome completo.");
      valido = false;
    }

    if (!validarCPF(campos.cpf.value)) {
      mostrarErro(campos.cpf, "CPF inválido.");
      valido = false;
    }

    if (!campos.dataNascimento.value) {
      mostrarErro(campos.dataNascimento, "Informe sua data de nascimento.");
      valido = false;
    }

    if (!campos.sexo.value) {
      mostrarErro(campos.sexo, "Selecione uma opção.");
      valido = false;
    }

    if (campos.altura.value.trim().length < 3) {
      mostrarErro(campos.altura, "Digite uma altura válida.");
      valido = false;
    }

    if (!campos.peso.value.toLowerCase().includes("kg")) {
      mostrarErro(campos.peso, "Digite o peso com kg. Ex: 70kg");
      valido = false;
    }

    if (!campos.tipoSanguineo.value) {
      mostrarErro(campos.tipoSanguineo, "Selecione o tipo sanguíneo.");
      valido = false;
    }

    if (campos.sus.value.length < 10) {
      mostrarErro(campos.sus, "Número do SUS inválido.");
      valido = false;
    }

    if (campos.nomeContato.value.trim().length < 3) {
      mostrarErro(campos.nomeContato, "Digite o nome do contato.");
      valido = false;
    }

    if (!validarTelefone(campos.telefoneContato.value)) {
      mostrarErro(campos.telefoneContato, "Telefone inválido. Ex: (11) 99999-9999");
      valido = false;
    }

    if (campos.relacionamento.value.trim().length < 3) {
      mostrarErro(campos.relacionamento, "Informe o relacionamento.");
      valido = false;
    }

    if (campos.medicamento.value.trim().length < 2) {
      mostrarErro(campos.medicamento, "Digite o nome do medicamento.");
      valido = false;
    }

    if (campos.dosagem.value.trim().length < 2) {
      mostrarErro(campos.dosagem, "Informe a dosagem.");
      valido = false;
    }

    if (campos.frequencia.value.trim().length < 3) {
      mostrarErro(campos.frequencia, "Informe a frequência.");
      valido = false;
    }

    if (!valido) {
      mensagemGeral.style.color = "red";
      mensagemGeral.textContent = "Preencha todos os campos obrigatórios.";
      return;
    }

    mensagemGeral.style.color = "green";
    mensagemGeral.textContent = "Dados enviados com sucesso!";
    form.reset();
  });

  Object.values(campos).forEach(campo => {
    campo.addEventListener("input", () => {
      limparErro(campo);
      mensagemGeral.textContent = "";
    });
  });
});