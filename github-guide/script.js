// Einfaches Skript f&uuml;r die Akkordeon-Elemente

function initAccordion() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(h => {
        h.addEventListener('click', () => {
            h.classList.toggle('active');
            const content = h.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initAccordion);
