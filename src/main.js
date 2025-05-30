document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector('#header');
    const scrollArrow = document.querySelector('#scroll-arrow');

    console.log(document.querySelector('.header'));
    console.log(document.querySelector('.scroll-arrow'));

    if (header) {
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1) {
                header.classList.add('outline-[1px]', 'outline-(--transparent-white)', 'h-[4rem]');
                header.classList.remove('h-[5rem]')
            } else {
                header.classList.remove('outline-[1px]', 'outline-(--transparent-white)', 'h-[4rem]');
                header.classList.add('h-[5rem]')
            };
        });
    };

    if (scrollArrow) {
        
        const triggerPointScrollArrow = window.innerHeight*0.2;
        if (window.scrollY > triggerPointScrollArrow) {
            scrollArrow.classList.add('opacity-0');
        } else {
            scrollArrow.classList.remove('opacity-0');
        };
    };

});
