export function loanCalculator() {
    return `
    <section class="container">
      <div>
        <div class="d-flex justify-content-center">
          <p>وام</p>
          <img
            src="./public/loanCalculator/50.png"
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
        <div>
          <p>نمایشگر اقساط</p>
          <p>قبل از درخواست وام , از جزئیات وام و اقساط ماهانه آن مطلع شوید.</p>
        </div>
        <div></div>
        <div>
          <div>
            <p>مدت بازپرداخت:</p>
          </div>
          <div>
            <p>قسط ماهیانه:</p>
          </div>
          <div>
            <p>مجموع بازپرداخت اقساط:</p>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-success">Success</button>
          <p>راهنمای دریافت وام</p>
        </div>
      </div>
    </section>
    `
}