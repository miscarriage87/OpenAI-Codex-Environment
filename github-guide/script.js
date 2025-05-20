document.querySelectorAll('.accordion .title').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});
console.log('GitHub-Guide geladen');
