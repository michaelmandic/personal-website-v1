document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('header');
    const scrollArrow = document.getElementById('scroll-arrow');

    window.addEventListener('scroll', () => {
        const triggerPointHeader = window.innerHeight*0.8;
        const triggerPointScrollArrow = window.innerHeight*0.2;

        if (window.scrollY > triggerPointHeader) {
            header.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            header.classList.add('opacity-0', 'pointer-events-none');
        }

        if (window.scrollY > triggerPointScrollArrow) {
            scrollArrow.classList.add('opacity-0', 'pointer-events-none');
        } else {
            scrollArrow.classList.remove('opacity-0', 'pointer-events-none');
        }
    });
});
