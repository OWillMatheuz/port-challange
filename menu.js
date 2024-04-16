// Seleciona o botão do menu hamburger, a lista do menu e o menu dropdown
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu__list');
const menuDropdown = document.querySelector('.menu__dropdown');

// Adiciona um evento de clique ao botão do menu hamburger
menuToggle.addEventListener('click', () => {
  // Alterna a classe 'active' no botão e na lista do menu
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menuList.classList.toggle('active');
  menuDropdown.classList.toggle('active');
});

// Adiciona um evento de redimensionamento da janela
window.addEventListener('resize', () => {
  // Verifica a largura da janela
  if (window.innerWidth >= 770) {
    // Oculta o botão do menu toggle
    menuToggle.style.display = 'none';
    
    // Exibe a lista do menu e o menu dropdown
    menuList.style.display = 'flex';
    menuDropdown.style.display = 'block';

    // Remove a classe 'active' da lista do menu e do menu dropdown
    menuList.classList.remove('active');
    menuDropdown.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    // Exibe o botão do menu toggle
    menuToggle.style.display = 'block';
    // Seleciona o botão do menu hamburger, a lista do menu e o menu dropdown
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu__list');
const menuDropdown = document.querySelector('.menu__dropdown');

// Adiciona um evento de clique ao botão do menu hamburger
menuToggle.addEventListener('click', () => {
  // Alterna a classe 'active' no botão e na lista do menu
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menuList.classList.toggle('active');
  menuDropdown.classList.toggle('active');
});

// Adiciona um evento de redimensionamento da janela
window.addEventListener('resize', () => {
  // Verifica a largura da janela
  if (window.innerWidth >= 770) {
    // Oculta o botão do menu toggle
    menuToggle.style.display = 'none';
    
    // Exibe a lista do menu e o menu dropdown
    menuList.style.display = 'flex';
    menuDropdown.style.display = 'block';

    // Remove a classe 'active' da lista do menu e do menu dropdown
    menuList.classList.remove('active');
    menuDropdown.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    // Exibe o botão do menu toggle
    menuToggle.style.display = 'block';
    
    // Oculta a lista do menu e o menu dropdown
    menuList.style.display = 'none';
    menuDropdown.style.display = 'none';
  }
});

// Dispara o evento de redimensionamento para verificar o tamanho da tela inicialmente
window.dispatchEvent(new Event('resize'));

    // Oculta a lista do menu e o menu dropdown
    menuList.style.display = 'none';
    menuDropdown.style.display = 'none';
  }
});

// Dispara o evento de redimensionamento para verificar o tamanho da tela inicialmente
window.dispatchEvent(new Event('resize'));
