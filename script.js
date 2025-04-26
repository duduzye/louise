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