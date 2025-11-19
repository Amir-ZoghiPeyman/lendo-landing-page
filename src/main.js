import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { faq } from "./components/faq.js";
import { footer } from "./components/footer.js";
import { hero } from "./components/hero.js";
import { loanCalculator } from "./components/loanCalculator.js";
import { navbar } from "./components/navbar.js";
import { section01 } from "./components/section-01.js";
import { section02 } from "./components/section-02.js";
import './styles/custom.scss';

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

        /* ---------------------------------------------------
           📌 اسکریپت اسلایدر و دکمه‌های محاسبه اقساط – همینجاست
        --------------------------------------------------- */
        const range = document.getElementById("loan-range");
        const amountText = document.getElementById("loan-amount");
        const minus = document.getElementById("loan-minus");
        const plus = document.getElementById("loan-plus");
        const monthlyEl = document.getElementById("monthly-pay");
        const totalEl = document.getElementById("total-pay");

        function calculate(value) {
            const loan = Number(value);
            const total = loan * 1.13;
            const monthly = total / 12;

            totalEl.textContent = total.toFixed(1);
            monthlyEl.textContent = monthly.toFixed(1);
            amountText.textContent = loan + " میلیون";
        }

        calculate(range.value);

        range.addEventListener("input", e => calculate(e.target.value));
        minus.addEventListener("click", () => {
            let val = Number(range.value);
            if (val > 20) {
                val -= 5;
                range.value = val;
                calculate(val);
            }
        });

        plus.addEventListener("click", () => {
            let val = Number(range.value);
            if (val < 50) {
                val += 5;
                range.value = val;
                calculate(val);
            }
        });
        /* --------------------------------------------------- */


        const section01Container = document.createElement("div");
        section01Container.innerHTML = section01();
        app.prepend(section01Container);

        const heroContainer = document.createElement("div");
        heroContainer.innerHTML = hero();
        app.prepend(heroContainer);

        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });

        const section01Swiper = new Swiper('.section-swiper', {
            loop: true,
            autoplay: { delay: 10000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });

        const loanCalculatorSwiper = new Swiper('.loan-swiper', {
            direction: 'vertical',
            loop: true,
            speed: 600,
            autoplay: { delay: 3000, disableOnInteraction: false },
            allowTouchMove: false,
            draggable: false,
            navigation: false,
            pagination: false,
            scrollbar: false,
        });

    } // end if
});
