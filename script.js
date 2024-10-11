const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");
let currentSectionIndex = 0;

// Atualiza o indicador durante a rolagem
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            // Atualiza o indicador
            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
            currentSectionIndex = index; // Atualiza o índice atual
        }
    });
});

// Oculta o botão de scroll
window.addEventListener("scroll", function() {
    const scrollButton = document.querySelector(".btn");
    
    // Se o usuário rolar mais de 50px, o botão desaparece
    if (window.scrollY > 50) {
        scrollButton.classList.add("hidden");
    } else {
        scrollButton.classList.remove("hidden");
    }
});

// Função para rolar até a seção
function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        const headerOffset = document.querySelector('.header').offsetHeight; // Altura do cabeçalho
        const sectionPosition = sections[index].offsetTop; // Posição da seção
        const targetPosition = sectionPosition - headerOffset; // Ajusta para o topo

        // Rolagem suave
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        // Atualiza o índice atual e o indicador
        currentSectionIndex = index;
        updateIndicator(index);
    }
}

// Função para atualizar o indicador
function updateIndicator(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Adiciona o evento de clique no botão de scroll
document.querySelector('.btn').addEventListener('click', () => {
    scrollToSection(currentSectionIndex + 1); // Rola para a próxima seção
});

// Adiciona o evento de clique nas seções para rolagem suave ao clicar nos links de navegação
document.querySelectorAll('.nav a').forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        scrollToSection(index); // Rola para a seção correspondente
    });
});

// Adiciona evento de rolagem suave ao clicar nas seções
sections.forEach((section, index) => {
    section.addEventListener('wheel', (event) => {
        if (event.deltaY > 0 && index < sections.length - 1) { // Rolar para baixo
            scrollToSection(index + 1);
        } else if (event.deltaY < 0 && index > 0) { // Rolar para cima
            scrollToSection(index - 1);
        }
        event.preventDefault(); // Evita o comportamento de rolagem padrão
    });
});

// Adiciona um evento para detectar quando a rolagem atinge o topo
window.addEventListener('scroll', () => {
    if (window.scrollY <= 0) {
        currentSectionIndex = 0; // Reseta o índice para a primeira seção
        updateIndicator(currentSectionIndex); // Atualiza o indicador
    } else if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        currentSectionIndex = sections.length - 1; // Reseta para a última seção
        updateIndicator(currentSectionIndex); // Atualiza o indicador
    }
});