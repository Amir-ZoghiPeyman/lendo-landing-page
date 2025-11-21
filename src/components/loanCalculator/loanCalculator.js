export function loanCalculator() {
  return `
    <section class="bg-gray-bg p-4 my-4" id="loan-container">
      <div class="container loan-calc-bg rounded-4 p-4">
        <!-- header text -->
        <div>
          <div class="d-flex justify-content-center align-content-center">
            <p class="loan-text">وام</p>
            <img
              src="loanCalculator/50.png"
              class="img-fluid"
              alt=""
              style="width: 40px"
            />
            <p class="loan-text">میلیون تومانی</p>
          </div>
          <di v>
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
          </di>
        </div>

        <!-- calculator -->
        <div class="bg-white p-4 rounded-4">
          <div class="d-md-flex justify-content-between">
            <div>
              <p class="text-primary loan-text">نمایشگر اقساط</p>
              <p class="text-primary">
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
              <button class="btn btn-outline-secondary" id="loan-plus">
                +
              </button>

              <p id="loan-amount" class="fw-bold fs-4 m-0 ltr">۲۰ میلیون</p>

              <button class="btn btn-outline-secondary" id="loan-minus">
                -
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
            <p class="text-secondary">50 میلیون تومان</p>
            <p class="text-secondary">20 میلیون تومان</p>
          </div>

          <div class="mt-3 d-md-flex justify-content-between">
            <div class="w-50">
              <div class="d-flex justify-content-between">
                <p>مدت بازپرداخت:</p>
                <p>12 ماه</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>قسط ماهیانه:</p>
                <div class="d-flex">
                  <p id="monthly-pay" class="d-none">0</p>
                  <span>میلیون</span>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <p>مجموع بازپرداخت:</p>
                <div class="d-flex">
                  <p id="total-pay">0</p>
                  <span>میلیون</span>
                </div>
              </div>
            </div>

            <a href="" class="text-decoration-none">
              <button type="button" class="btn btn-success p-2 w-100 mb-2">
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