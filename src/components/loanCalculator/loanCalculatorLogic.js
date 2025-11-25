import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import $ from 'jquery';

// produce persian numbers
export function toFarsi(num) {
    return num.toLocaleString("fa-IR");
}

// main function
export function loanCalculatorLogic() {

    const $range = $("#loan-range");
    const $minus = $("#loan-minus");
    const $plus = $("#loan-plus");
    const $amountText = $("#loan-amount");
    const $monthlyEl = $("#monthly-pay");
    const $totalEl = $("#total-pay");

    // numbers skeleton
    function showSkeleton() {
        const skeletonHTML = `<div style="width:80px; height:20px; background-color:#e0e0e0; border-radius:4px;"></div>`;
        $monthlyEl.html(skeletonHTML);
        $totalEl.html(skeletonHTML);
    }

    // calculator
    function calculate(value) {
        const loan = Number(value);
        const loanTomans = loan * 1_000_000;

        showSkeleton();

        setTimeout(() => {
            const total = loanTomans * 1.13;
            const monthly = total / 12;

            $totalEl.text(toFarsi(Math.round(total)));
            $monthlyEl.text(toFarsi(Math.round(monthly)));
        }, 1000);

        $amountText.text(toFarsi(loanTomans) + " تومان");
    }

    // update progress background
    function updateFill() {
        const min = Number($range.attr("min"));
        const max = Number($range.attr("max"));
        const val = Number($range.val());
        const percent = ((val - min) / (max - min)) * 100;

        $range.css("background", `linear-gradient(to right, #28a745 0%, #28a745 ${percent}%, #e5e5e5 ${percent}%, #e5e5e5 100%)`);
    }

    // initial calculate
    calculate($range.val());
    updateFill();

    // range change
    $range.on("input", function () {
        calculate($(this).val());
        updateFill();
    });

    // minus
    $minus.on("click", function () {
        let val = Number($range.val());
        if (val > 20) {
            val -= 5;
            $range.val(val);
            calculate(val);
        }
        updateFill();
    });

    // plus
    $plus.on("click", function () {
        let val = Number($range.val());
        if (val < 50) {
            val += 5;
            $range.val(val);
            calculate(val);
        }
        updateFill();
    });

    // swiper logic
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
