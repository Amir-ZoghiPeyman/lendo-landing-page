export function loanCalculator() {
  return `
    <section class="container my-4" id="loan-container">
      <div>
        <div class="d-flex justify-content-center">
          <p>وام</p>
          <img
            src="loanCalculator/50.png"
            class="img-fluid"
            alt=""
            style="width: 50px"
          />
          <p>میلیون تومانی</p>
        </div>
        <div>
          <div class="swiper loan-swiper">
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide d-flex justify-content-center">
                خرید از تمامی فروشگاه ها
              </div>
              <div class="swiper-slide d-flex justify-content-center">
                بدون چک و ضامن
              </div>
              <div class="swiper-slide d-flex justify-content-center">
                بدون مدرک سکونتی و شغلی
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>نمایشگر اقساط</p>
        <p>قبل از درخواست وام , از جزئیات وام و اقساط ماهانه آن مطلع شوید.</p>
      </div>

      <div class="text-center">
        <div class="d-flex justify-content-center align-items-center gap-2">
          <button class="btn btn-outline-secondary" id="loan-minus">-</button>

          <p id="loan-amount" class="fw-bold fs-4 m-0">۲۰ میلیون</p>

          <button class="btn btn-outline-secondary" id="loan-plus">+</button>
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

      <div class="mt-4">
        <p class="fw-bold">نمایشگر اقساط</p>
        <p>هر بار مبلغ را تغییر دهید، اقساط جدید محاسبه می‌شود.</p>
      </div>

      <div class="mt-3">
        <p>قسط ماهیانه: <span id="monthly-pay">0</span> میلیون</p>
        <p>مجموع بازپرداخت: <span id="total-pay">0</span> میلیون</p>
      </div>
    </section>`;
}