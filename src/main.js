import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { hero } from "./components/hero.js";
import { navbar } from "./components/navbar.js";
import './styles/custom.scss';

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (app) {
        const navContainer = document.createElement("div");
        navContainer.innerHTML = navbar();
        app.prepend(navContainer);

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
