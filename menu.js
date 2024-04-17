// Funções para criação de botao hamburguer quando a tela fca pequena, responsivo para mobile. Clicando no botão, ele abre uma lista e tambem fecha a lista
// Seleciona o botão do menu hamburger, a lista do menu e o menu dropdown
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".menu__list");
const menuDropdown = document.querySelector(".menu__dropdown");

// Função para fechar o menu hamburguer e dropdown
const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuList.classList.remove("active");
  menuDropdown.classList.remove("active");
  menuDropdown.style.display = "none";
};

// Adiciona um evento de clique ao botão do menu hamburger
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
  menuToggle.setAttribute("aria-expanded", !expanded);
  menuList.classList.toggle("active");
  menuDropdown.classList.toggle("active");

  // Exibe ou oculta o dropdown com base no estado atual
  menuDropdown.style.display = expanded ? "none" : "block";
});

// Adiciona um evento de clique ao documento para fechar o menu quando clicar fora
document.addEventListener("click", (event) => {
  if (
    !menuToggle.contains(event.target) &&
    !menuDropdown.contains(event.target)
  ) {
    closeMenu();
  }
});

// Adiciona um evento de redimensionamento da janela
window.addEventListener("resize", () => {
  if (window.innerWidth >= 770) {
    menuToggle.style.display = "none";
    menuList.style.display = "flex";
    menuDropdown.style.display = "none";
    closeMenu();
  } else {
    menuToggle.style.display = "block";
    menuList.style.display = "none";
    menuDropdown.style.display = "none";
  }
});

// Dispara o evento de redimensionamento para verificar o tamanho da tela inicialmente
window.dispatchEvent(new Event("resize"));
