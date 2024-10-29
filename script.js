// Obtém o botão de toggle do dark mode
const toggleSwitch = document.getElementById('dark-mode-toggle');

// Função para habilitar o dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
    toggleSwitch.checked = true;
}

// Função para desabilitar o dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
    toggleSwitch.checked = false;
}

// Verifica a preferência salva ao carregar a página
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Alterna o dark mode e salva a preferência
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Oculta o botão de scroll
window.addEventListener("scroll", function() {
    const scrollButton = document.querySelector(".btn");
    
    // Se o usuário rolar mais de 300px, o botão desaparece
    if (window.scrollY > 300) {
        scrollButton.classList.add("hidden");
    } else {
        scrollButton.classList.remove("hidden");
    }
});

// Menu mobile

// Seleciona o checkbox do botão do menu e o menu mobile
let btnMenuMob = document.querySelector('#btn-menu-mob input[type="checkbox"]');
let menuMobile = document.querySelector('#menu-mobile');
let body = document.querySelector('body');

// Função para alternar o menu
btnMenuMob.addEventListener("change", () => { 
    menuMobile.classList.toggle('abrir', btnMenuMob.checked);
    body.classList.toggle('no-scroll', btnMenuMob.checked); // Aplica no-scroll ao invés de no-overflow
});

// Seleciona todos os links dentro do menu mobile
const menuLinks = document.querySelectorAll("#menu-mobile nav a");

// Adiciona um evento de clique em cada link
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Desmarca o checkbox para fechar o menu
        btnMenuMob.checked = false;
        
        // Remove as classes 'abrir' e 'no-scroll' do body
        menuMobile.classList.remove('abrir');
        body.classList.remove('no-scroll');
    });
});

// Adiciona evento de clique ao toggle dentro do menu mobile
const toggleInMenu = menuMobile.querySelector('#dark-mode-toggle');

toggleInMenu.addEventListener('change', () => {
    if (toggleInMenu.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});