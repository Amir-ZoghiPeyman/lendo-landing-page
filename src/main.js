import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { faq } from "./components/faq/faq.js";
import { footer } from "./components/footer/footer.js";
import { hero } from "./components/hero/hero.js";
import { loanCalculator } from "./components/loanCalculator/loanCalculator.js";
import { navbar } from "./components/navbar/navbar.js";
import { section01 } from "./components/section-01/section-01.js";
import { section02 } from "./components/section-02/section-02.js";
import './styles/scss/main.scss';

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

    const range = document.getElementById("loan-range");
    const amountText = document.getElementById("loan-amount");
    const minus = document.getElementById("loan-minus");
    const plus = document.getElementById("loan-plus");
    const monthlyEl = document.getElementById("monthly-pay");
    const totalEl = document.getElementById("total-pay");


    function toFarsi(num) {
      const formatted = num.toLocaleString("fa-IR");
      return formatted;
    }

    function showSkeleton() {
      const skeletonHTML = `<div style="width:80px; height:20px; background-color:#e0e0e0; border-radius:4px;"></div>`;

      monthlyEl.innerHTML = skeletonHTML;
      totalEl.innerHTML = skeletonHTML;
    }

    function calculate(value) {
      const loan = Number(value);
      const loanTomans = loan * 1_000_000;


      showSkeleton();

      setTimeout(() => {
        const total = loanTomans * 1.13;
        const monthly = total / 12;

        totalEl.textContent = toFarsi(Math.round(total));
        monthlyEl.textContent = toFarsi(Math.round(monthly));
      }, 1000)

      amountText.textContent = toFarsi(loanTomans) + " تومان";
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
      updateFill();
    });

    plus.addEventListener("click", () => {
      let val = Number(range.value);
      if (val < 50) {
        val += 5;
        range.value = val;
        calculate(val);
      }
      updateFill();
    });

    const progressBar = document.getElementById("loan-range");

    function updateFill() {
      const min = +progressBar.min;
      const max = +progressBar.max;
      const val = +progressBar.value;
      const percent = ((val - min) / (max - min)) * 100;

      progressBar.style.background = `linear-gradient(to right,
    #28a745 0%,
    #28a745 ${percent}%,
    #e5e5e5 ${percent}%,
    #e5e5e5 100%)`;
    }

    progressBar.addEventListener("input", updateFill);
    updateFill();

    const section01Container = document.createElement("div");
    section01Container.innerHTML = section01();
    app.prepend(section01Container);

    const stepsData = {
      1: {
        title: "اعتبارسنجی",
        text: "ابتدا لازم است با انجام اعتبارسنجی بانکی، رتبه اعتباری خود را بررسی کنید. این رتبه به شما نشان می‌دهد که شرایط دریافت وام لندو را دارید و با توجه به آن، مشخص می‌شود که کدام وام‌ها برای شما قابل دریافت هستند.",
        image: "section-01/step-1.png",
        link: "اعتبارسنجی"
      },
      2: {
        title: "درخواست وام",
        text: "مبلغ وام و مدت بازپرداخت را انتخاب و درخواست وام خود را ثبت کنید.",
        image: "section-01/step-2.png",
        link: "ثبت درخواست"
      },
      3: {
        title: "بارگذاری مدارک",
        text: "این مرحله باید وارد حساب کاربری‌ خود شوید و مدارک‌ لازم را بارگذاری کنید. بعد از بارگذاری مدارک، وارد مرحله اعتبارسنجی اولیه بانک می‌شوید.",
        image: "section-01/step-3.png",
        link: "بارگزاری مدارک"
      },
      4: {
        title: "ثبت امضای الکترونیکی",
        text: "از طریق نرم‌افزار آینده ساین، امضای الکترونیکی خود را ثبت کنید. با این امضا می‌توانید سفته الکترونیکی و قراردادهای لندو و بانک را به‌صورت آنلاین امضا کنید.",
        image: "section-01/step-4.png",
        link: "آموزش ثبت امضا"
      },
      5: {
        title: "صدور سفته الکترونیکی",
        text: "حالا باید از لندو سفته الکترونیکی تهیه کرده و آن را امضا کنید. پس از تهیه سفته از لندو، آن را در آینده ساین امضا کنید.",
        image: "section-01/step-5.png",
        link: "آموزش خرید سفته"
      },
      6: {
        title: "امضای قراردادها",
        text: "بعد از اینکه سفته شما توسط لندو بررسی و تأیید شد، نوبت به مرحله امضای قرارداد می‌رسد. شما باید با امضای الکترونیکی خود، قراردادهای لندو و بانک را به‌شکل آنلاین امضا کنید.",
        image: "section-01/step-6.png",
        link: "آموزش امضای قرارداد"
      },
      7: {
        title: "تایید نهایی بانک و دریافت وام",
        text: "در این مرحله درخواست وام شما توسط بانک نهایی می‌شود و وام لندو در قالب «وام کارت» در اختیارتان قرار می‌گیرد. حالا می‌توانید با وام خود خرید انواع کالا را از فروشگاه‌های طرف قرارداد انجام دهید و سپس اقساط آن را به لندو پرداخت کنید.",
        image: "section-01/step-7.png",
        link: "ورود به حساب کاربری"
      }
    };

    const stepTitle = document.getElementById("step-title");
    const stepText = document.getElementById("step-text");
    const stepLink = document.getElementById("step-link");
    const stepImage = document.getElementById("step-image");
    const stepEls = document.querySelectorAll(".step");
    const pagination = document.querySelector(".pagination");

    function showStep(id) {
      const data = stepsData[id];
      stepTitle.textContent = data.title;
      stepText.textContent = data.text;
      stepLink.textContent = data.link;
      stepImage.src = data.image;

      stepEls.forEach(s => s.classList.remove("active"));
      document.querySelector(`.step[data-step="${id}"]`).classList.add("active");

      pagination.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      const pagBtn = pagination.querySelector(`button[data-step="${id}"]`);
      if (pagBtn) pagBtn.classList.add("active");
    }

    stepEls.forEach(step => {
      step.addEventListener("click", () => showStep(step.dataset.step));
    });

    pagination.innerHTML = Object.keys(stepsData)
      .map(id => `<button data-step="${id}"></button>`)
      .join('');

    pagination.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => showStep(btn.dataset.step));
    });


    showStep(1);


    const heroContainer = document.createElement("div");
    heroContainer.innerHTML = hero();
    app.prepend(heroContainer);

    const heroSwiperMobile = new Swiper('.hero-swiper-mobile', {
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    const heroSwiperDesktop = new Swiper('.hero-swiper-desktop', {
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
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

  }
});
