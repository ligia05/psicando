document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("senha").value;

    try {
      const resposta = await fetch("./frontend/usuarios.json");

      if (!resposta.ok) {
        throw new Error("Não foi possível carregar o arquivo de usuários.");
      }

      const dados = await resposta.json();

      if (usuarioDigitado === dados.usuario && senhaDigitada === dados.senha) {
        window.location.href = "home.html";
      } else {
        document.getElementById("mensagem").textContent =
          "Usuário ou senha incorretos.";
      }
    } catch (erro) {
      console.error(erro);

      document.getElementById("mensagem").textContent =
        "Erro ao realizar o login.";
    }
  });
