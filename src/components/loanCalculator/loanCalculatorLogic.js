import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'

export function toFarsi(num) {
    return num.toLocaleString("fa-IR");
}

export function loanCalculatorLogic() {
    const range = document.getElementById("loan-range");
    const minus = document.getElementById("loan-minus");
    const plus = document.getElementById("loan-plus");
    const amountText = document.getElementById("loan-amount");
    const monthlyEl = document.getElementById("monthly-pay");
    const totalEl = document.getElementById("total-pay");
    const progressBar = range;

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
        }, 1000);

        amountText.textContent = toFarsi(loanTomans) + " تومان";
    }

    function updateFill() {
        const min = +progressBar.min;
        const max = +progressBar.max;
        const val = +progressBar.value;
        const percent = ((val - min) / (max - min)) * 100;
        progressBar.style.background = `linear-gradient(to right, #28a745 0%, #28a745 ${percent}%, #e5e5e5 ${percent}%, #e5e5e5 100%)`;
    }

    calculate(range.value);
    range.addEventListener("input", e => { calculate(e.target.value); updateFill(); });
    minus.addEventListener("click", () => {
        let val = Number(range.value);
        if (val > 20) { val -= 5; range.value = val; calculate(val); }
        updateFill();
    });
    plus.addEventListener("click", () => {
        let val = Number(range.value);
        if (val < 50) { val += 5; range.value = val; calculate(val); }
        updateFill();
    });
    updateFill();

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
