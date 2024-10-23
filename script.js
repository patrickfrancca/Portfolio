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

// Função para rolar suavemente até uma seção específica
function scrollToSection(index) {
    const section = sections[index];
    const headerOffset = 30; // Ajuste para o tamanho do cabeçalho fixo
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

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