import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'

export function heroLogic() {
    // swiper logic
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
}