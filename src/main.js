document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        const triggerPoint = window.innerHeight*0.8;

        if (window.scrollY > triggerPoint) {
            header.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            header.classList.add('opacity-0', 'pointer-events-none');
        }
    });
});
