import { faq } from "../components/faq/faq.js";
import { footer } from "../components/footer/footer.js";
import { hero } from "../components/hero/hero.js";
import { heroLogic } from "../components/hero/heroLogic.js";
import { loanCalculator } from "../components/loanCalculator/loanCalculator.js";
import { loanCalculatorLogic } from "../components/loanCalculator/loanCalculatorLogic.js";
import { navbar } from "../components/navbar/navbar.js";
import { section01Logic } from "../components/section-01/section-01-logic.js";
import { section01 } from "../components/section-01/section-01.js";
import { section02 } from "../components/section-02/section-02.js";

export function home(app) {
    if (!app) return;

    const components = [
        { fn: navbar },
        { fn: hero, logic: heroLogic },
        { fn: section01, logic: section01Logic },
        { fn: loanCalculator, logic: loanCalculatorLogic },
        { fn: section02 },
        { fn: faq },
        { fn: footer },
    ];

    components.forEach(({ fn, logic }) => {
        const container = document.createElement("div");
        container.innerHTML = fn();
        app.appendChild(container);
        if (logic) logic();
    });
}
