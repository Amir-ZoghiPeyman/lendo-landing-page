import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { footer } from "./components/footer.js";
import { hero } from "./components/hero.js";
import { navbar } from "./components/navbar.js";
import { section01 } from "./components/section-01.js";
import './styles/custom.scss';
import { faq } from "./components/faq.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (app) {
        const navContainer = document.createElement("div");
        navContainer.innerHTML = navbar();
        app.prepend(navContainer);

        const footerContainer = document.createElement("div");
        footerContainer.innerHTML = footer();
        app.prepend(footerContainer);

        const faqContainer = document.createElement("div");
        faqContainer.innerHTML = faq();
        app.prepend(faqContainer);

        const section01Container = document.createElement("div");
        section01Container.innerHTML = section01();
        app.prepend(section01Container);

        const heroContainer = document.createElement("div");
        heroContainer.innerHTML = hero();
        app.prepend(heroContainer);



        const swiper = new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
