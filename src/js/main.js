/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup('.service-container', {
    selectors: {
        target: '.service-content'
    },
    load: {
        filter: '.asistensi'
    },
    animation: {
        duration: 300
    },
});

/* Link Active Service */
const linkService = document.querySelectorAll('.service-item')

function activeService() {
    linkService.forEach(l => l.classList.remove('active-service-item'))
    this.classList.add('active-service-item')
}

linkService.forEach(l => l.addEventListener('click', activeService))

/* Swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
});