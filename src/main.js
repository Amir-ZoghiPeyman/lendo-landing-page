import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { faq } from "./components/faq/faq.js";
import { footer } from "./components/footer/footer.js";
import { hero } from "./components/hero/hero.js";
import { heroLogic } from "./components/hero/heroLogic.js";
import { loanCalculator } from "./components/loanCalculator/loanCalculator.js";
import { loanCalculatorLogic } from "./components/loanCalculator/loanCalculatorLogic.js";
import { navbar } from "./components/navbar/navbar.js";
import { section01Logic } from "./components/section-01/section-01-logic.js";
import { section01 } from "./components/section-01/section-01.js";
import { section02 } from "./components/section-02/section-02.js";
import './styles/scss/main.scss';

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {

    // navbar
    const navContainer = document.createElement("div");
    navContainer.innerHTML = navbar();
    app.prepend(navContainer);

    // footer
    const footerContainer = document.createElement("div");
    footerContainer.innerHTML = footer();
    app.prepend(footerContainer);

    // faq
    const faqContainer = document.createElement("div");
    faqContainer.innerHTML = faq();
    app.prepend(faqContainer);

    // section 02
    const section02Container = document.createElement("div");
    section02Container.innerHTML = section02();
    app.prepend(section02Container);

    // loan calculator
    const loanCalculatorContainer = document.createElement("div");
    loanCalculatorContainer.innerHTML = loanCalculator();
    app.prepend(loanCalculatorContainer);
    loanCalculatorLogic();

    // section 01
    const section01Container = document.createElement("div");
    section01Container.innerHTML = section01();
    app.prepend(section01Container);
    section01Logic();

    // hero
    const heroContainer = document.createElement("div");
    heroContainer.innerHTML = hero();
    app.prepend(heroContainer);
    heroLogic();
  }
});
