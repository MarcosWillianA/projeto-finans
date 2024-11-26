const botaoMenu = document.querySelector('#botao-menu');
const listaMenu = document.querySelector('#lista-menu');

botaoMenu.addEventListener('click', () => {
  listaMenu.classList.toggle('hidden'); // Alterna a visibilidade do menu
});
