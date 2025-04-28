document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");

    const items = document.querySelectorAll('.bolo-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.2
    });

    items.forEach(item => observer.observe(item));
});

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Modo Claro';
    } else {
        themeToggleButton.textContent = 'Modo Escuro';
    }
});