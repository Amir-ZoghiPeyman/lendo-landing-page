// mock data
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

// main function
export function section01Logic() {
    const stepTitle = document.getElementById("step-title");
    const stepText = document.getElementById("step-text");
    const stepLink = document.getElementById("step-link");
    const stepImage = document.getElementById("step-image");
    const stepEls = document.querySelectorAll(".step");
    const pagination = document.querySelector(".pagination");


    function showStep(id) {
        // sets datas
        const data = stepsData[id];
        stepTitle.textContent = data.title;
        stepText.textContent = data.text;
        stepLink.textContent = data.link;
        stepImage.src = data.image;

        // shows the current step
        stepEls.forEach(s => s.classList.remove("active"));
        document.querySelector(`.step[data-step="${id}"]`).classList.add("active");

        pagination.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        const pagBtn = pagination.querySelector(`button[data-step="${id}"]`);
        if (pagBtn) pagBtn.classList.add("active");
    }

    // shows current step's data
    stepEls.forEach(step => {
        step.addEventListener("click", () => showStep(step.dataset.step));
    });

    // pagination logic
    pagination.innerHTML = Object.keys(stepsData)
        .map(id => `<button data-step="${id}"></button>`)
        .join('');

    pagination.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => showStep(btn.dataset.step));
    });

    showStep(1);
}