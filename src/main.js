document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('header');
    const scrollArrow = document.getElementById('scroll-arrow');

    window.addEventListener('scroll', () => {
        const triggerPointHeader = 1;
        const triggerPointScrollArrow = window.innerHeight*0.2;

        if (window.scrollY > triggerPointHeader) {
            header.classList.add('outline-[1px]', 'bg-linear-[180deg,#1e1e1e,50%,rgba(30,30,30,0.75)]', 'backdrop-blur-sm', 'outline-(--transparent-white)');
        } else {
            header.classList.remove('outline-[1px]', 'bg-linear-[180deg,#1e1e1e,50%,rgba(30,30,30,0.75)]', 'backdrop-blur-sm', 'outline-(--transparent-white)');
        }

        if (window.scrollY > triggerPointScrollArrow) {
            scrollArrow.classList.add('opacity-0');
        } else {
            scrollArrow.classList.remove('opacity-0');
        }
    });
});
