import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { faq } from "./components/faq.js";
import { footer } from "./components/footer.js";
import { hero } from "./components/hero.js";
import { loanCalculator } from "./components/loanCalculator.js";
import { navbar } from "./components/navbar/navbar.js";
import { section01 } from "./components/section-01.js";
import { section02 } from "./components/section-02.js";
import './styles/scss/custom.scss';

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

        const section02Container = document.createElement("div");
        section02Container.innerHTML = section02();
        app.prepend(section02Container);

        const loanCalculatorContainer = document.createElement("div");
        loanCalculatorContainer.innerHTML = loanCalculator();
        app.prepend(loanCalculatorContainer);

        const section01Container = document.createElement("div");
        section01Container.innerHTML = section01();
        app.prepend(section01Container);

        const heroContainer = document.createElement("div");
        heroContainer.innerHTML = hero();
        app.prepend(heroContainer);

        const heroSwiper = new Swiper('.hero-swiper', {
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

        const section01Swiper = new Swiper('.section-swiper', {
            loop: true,

            autoplay: {
                delay: 10000,
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
        const loanCalculatorSwiper = new Swiper('.loan-swiper', {
            direction: 'vertical',
            loop: true,
            speed: 600,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            allowTouchMove: false,
            draggable: false,
            navigation: false,
            pagination: false,
            scrollbar: false,
        });

    }


});
