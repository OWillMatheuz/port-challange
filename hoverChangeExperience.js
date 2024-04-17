// Função para que qundo clicar em cada assunto, mostra suas descrições
document.addEventListener("DOMContentLoaded", function () {
  // Função para mostrar descrição ao clicar nas empresas
  function mostrarDescricaoFormacao(selector, descricao, titulo, data) {
    const elementos = document.querySelectorAll(selector);
    if (!elementos.length) return;

    const textoFormacao = document.querySelector(".texto-formacao");
    const tituloFormacao = textoFormacao.querySelector(".tituloFormacao");
    const dataFormacao = textoFormacao.querySelector(".dataFormacao");
    const mudarDescricao = textoFormacao.querySelector(".mudarDescricao");

    elementos.forEach((elemento) => {
      elemento.addEventListener("click", () => {
        tituloFormacao.textContent = titulo;
        dataFormacao.textContent = data;
        mudarDescricao.textContent = descricao;
      });
    });
  }

  // Inicialização das funções
  mostrarDescricaoFormacao(
    ".Curso-em-Video",
    `Comecei em 2018 e parei. Voltei em 2022 os cursos da plataforma
    curso em vídeo com html / css / javascript / java / php`,
    "Curso em Vídeo - Gustavo Guanabara",
    "Em andamento - 2022"
  );

  mostrarDescricaoFormacao(
    ".Generation-Brasil",
    `Formação em um bootcamp. Desenvolvedor Web Java Full-Stack Junior.
    Skills: Java / Springboot / MySql e básico em frontend.`,
    "Generation Brasil",
    "Dez 2022 - Mar 2023 (3 meses)"
  );

  mostrarDescricaoFormacao(
    ".One-Oracle-Next-Education",
    `Projeto One - Oracle Next Education e Alura. Curso de Frontend. 
    Html / Css / Javascript.`,
    "Programa One - Oracle Next Education e Alura",
    "Em andamento"
  );

  mostrarDescricaoFormacao(
    ".DevMedia",
    `Projeto Potencia Tech by Ifood, curso em parceria com a Devmedia. Aprendizagem com Html / Css / Javascript / React`,
    "DevMedia",
    "Em andamento"
  );
});
