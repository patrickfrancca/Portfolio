const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");
let currentSectionIndex = 0;

// Função para atualizar o indicador
function updateIndicator(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Atualiza o indicador durante a rolagem
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            // Atualiza o indicador
            currentSectionIndex = index; // Atualiza o índice atual
            updateIndicator(currentSectionIndex);
        }
    });
});

// Atualiza o indicador na inicialização
updateIndicator(currentSectionIndex);

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

// Função para rolar suavemente até o meio exato de uma seção
function scrollToSection(index) {
    const section = sections[index];
    const headerOffset = 30; // Ajuste para o tamanho do cabeçalho fixo

    // Calcula a posição central da seção e da janela
    const sectionCenterPosition = section.getBoundingClientRect().top + window.pageYOffset + (section.getBoundingClientRect().height / 2);
    const offsetPosition = sectionCenterPosition - (window.innerHeight / 2) - headerOffset;

    // Executa a rolagem para a posição calculada
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Adiciona evento de rolagem suave ao clicar nas seções
sections.forEach((section, index) => {
    section.addEventListener('click', () => {
        scrollToSection(index);
    });
});



// Obtém o botão de toggle
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