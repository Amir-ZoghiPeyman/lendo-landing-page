export function loanCalculator() {
  return `
    <section class="bg-gray-bg p-4 my-4" id="loan-container">
      <div class="container loan-calc-bg rounded-4 p-2">
        <!-- header text -->
        <div class="mt-4">
          <div class="d-flex justify-content-center align-content-center">
            <p class="loan-text">وام</p>
            <img
              src="loanCalculator/50.png"
              class="img-fluid"
              alt=""
              style="width: 50px"
            />
            <p class="loan-text">میلیون تومانی</p>
          </div>
          <div>
            <div class="swiper loan-swiper">
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div
                  class="loan-text swiper-slide d-flex justify-content-center"
                >
                  خرید از تمامی فروشگاه ها
                </div>
                <div
                  class="loan-text swiper-slide d-flex justify-content-center"
                >
                  بدون چک و ضامن
                </div>
                <div
                  class="loan-text swiper-slide d-flex justify-content-center"
                >
                  بدون مدرک سکونتی و شغلی
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- calculator -->
        <div class="bg-white p-4 rounded-4">
          <div class="d-md-flex justify-content-between">
            <div>
              <p class="text-primary loan-text">نمایشگر اقساط</p>
              <p class="text-primary loan-text-secondary">
                قبل از درخواست وام , از جزئیات وام و اقساط ماهانه آن مطلع شوید.
              </p>
            </div>
            <a href="" class="text-decoration-none">
              <button
                type="button"
                class="btn btn-light bg-white p-2 w-100 d-none d-md-inline"
              >
                راهنمای دریافت وام
              </button>
            </a>
          </div>
          <div class="text-center">
            <div
              class="d-flex justify-content-between align-items-center gap-2"
            >
              <button
                class="btn btn-outline-secondary text-primary bg-gray-bg"
                id="loan-plus"
              >
                <i class="bi bi-plus-lg"></i>
              </button>

              <p id="loan-amount" class="fw-bold fs-4 m-0 ltr text-primary">
                ۲۰
              </p>

              <button
                class="btn btn-outline-secondary text-primary bg-gray-bg"
                id="loan-minus"
              >
                <i class="bi bi-dash-lg"></i>
              </button>
            </div>

            <input
              type="range"
              id="loan-range"
              min="20"
              max="50"
              step="5"
              value="20"
              class="form-range mt-3"
            />
          </div>

          <div class="d-flex justify-content-between">
            <p class="text-secondary loan-text-secondary">۵۰ میلیون تومان</p>
            <p class="text-secondary loan-text-secondary">۲۰ میلیون تومان</p>
          </div>

          <div class="mt-4 d-md-flex justify-content-between">
            <div class="w-md-50 loan-text-secondary text-primary">
              <div class="d-flex justify-content-between">
                <p>مدت بازپرداخت:</p>
                <p>۱۲ ماه</p>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <p>قسط ماهیانه:</p>
                <div class="d-flex">
                  <p id="monthly-pay">0</p>
                  <span>تومان</span>
                </div>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <p>مجموع بازپرداخت:</p>
                <div class="d-flex">
                  <p id="total-pay">0</p>
                  <span>تومان</span>
                </div>
              </div>
            </div>

            <a href="" class="text-decoration-none">
              <button type="button" class="btn btn-success p-2 w-100 my-4">
                درخواست وام
              </button>
            </a>
          </div>
          <a href="">
            <button
              type="button"
              class="btn btn-light bg-white p-2 w-100 d-md-none"
            >
              راهنمای دریافت وام
            </button>
          </a>
        </div>
      </div>
    </section>
    `;
}