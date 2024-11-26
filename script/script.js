const botaoMenu = document.querySelector('#botao-menu');
const listaMenu = document.querySelector('#lista-menu');

function exibirMenu() {
    botaoMenu.addEventListener('click', () => {
        if (listaMenu.classList.contains('hidden')) {
            listaMenu.classList.remove('hidden');
            requestAnimationFrame(() => {
                listaMenu.classList.add('opacity-100');
            });
        } else {
            listaMenu.classList.remove('opacity-100');
            listaMenu.addEventListener('transitionend', () => listaMenu.classList.add('hidden'), { once: true });
        }
    });
}

exibirMenu();
