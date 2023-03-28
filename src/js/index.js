const botoesCarossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");


botoesCarossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();

    selecionaroBotaoCarossel(botao);

    esconderImagemAtiva();

    mostrarImagemDeFundo(indice);
  });
});

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function selecionaroBotaoCarossel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
