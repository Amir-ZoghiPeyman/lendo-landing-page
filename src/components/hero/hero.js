export function hero() {
  return `
    <section
      class="hero text-white rounded-3 shadow-sm p-1 mt-1 mx-3 mx-lg-0"
    >
      <div class="container-fluid">
        <div class="swiper hero-swiper">
          <div class="swiper-wrapper">
            <!-- Slide 1 -->
            <div class="swiper-slide">
              <div class="row d-flex align-items-center flex-lg-row-reverse p-4">
                <div class="d-flex col-lg-6 mb-3 mb-lg-0 text-lg-end">
                  <h1 class="display-5 display-lg-4">تا۱۰ میلیون تومان</h1>
                  <p class="lead">طرح پلکانی حامی کمک هزینه نقدی</p>
                </div>
                <div class="col-lg-6 text-center">
                  <img
                    src="hero/slider-1.png"
                    alt="Slide 1"
                    class="img-fluid rounded hero-img w-50"
                  />
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide">
              <div class="row align-items-center flex-lg-row-reverse p-4">
                <div class="col-lg-6 mb-3 mb-lg-0 text-lg-end">
                  <h1 class="display-5 display-lg-4">باشگاه مشتریان لندولند</h1>
                  <p class="lead">
                    امتیاز بگیر, به وام و جوایز ویژه تبدیلش کن!
                  </p>
                  <button class="btn btn-light btn-lg">ورود به لندولند</button>
                </div>
                <div class="col-lg-6 text-center">
                  <img
                    src="hero/slider-2.png"
                    alt="Slide 2"
                    class="img-fluid rounded hero-img w-50"
                  />
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide">
              <div class="row align-items-center flex-lg-row-reverse p-4">
                <div class="col-lg-6 mb-3 mb-lg-0 text-lg-end">
                  <h1 class="display-5 display-lg-4">
                    با دعوت از دوستان خود هدیه نقدی دریافت کنید
                  </h1>
                  <p class="lead">۲۰ هزار تومان برای هر دعوت موفق</p>
                  <button class="btn btn-light btn-lg">مشاهده</button>
                </div>
                <div class="col-lg-6 text-center">
                  <img
                    src="hero/slider-3.png"
                    alt="Slide 3"
                    class="img-fluid rounded hero-img w-50"
                  />
                </div>
              </div>
            </div>

            <!-- Slide 4 -->
            <div class="swiper-slide">
              <div class="row align-items-center flex-lg-row-reverse p-4">
                <div class="col-lg-6 mb-3 mb-lg-0 text-lg-end">
                  <h1 class="display-5 display-lg-4">
                    وام بدون نیاز به چک و ضامن
                  </h1>
                  <p class="lead">از لندو وام بگیر و خرید کن!</p>
                  <button class="btn btn-light btn-lg">درخواست وام</button>
                </div>
                <div class="col-lg-6 text-center">
                  <img
                    src="hero/slider-4.png"
                    alt="Slide 4"
                    class="img-fluid rounded hero-img w-50"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Navigation -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </section>

    <div class="hero-icons-wrapper bg-lg-white">
      <div class="hero-icons container text-center mt-4">
        <div class="row g-3 justify-content-center">
          <div
            class="bg-white col-6 col-md-3 d-flex flex-column align-items-center"
          >
            <img src="hero/icon-2.svg" alt="" class="hero-icon-img" />
            <p class="mt-2">بدون چک و ضامن</p>
          </div>

          <div
            class="bg-white col-6 col-md-3 d-flex flex-column align-items-center"
          >
            <img src="hero/icon-1.svg" alt="" class="hero-icon-img" />
            <p class="mt-2">فرایند کاملا آنلاین</p>
          </div>

          <div
            class="bg-white col-6 col-md-3 d-flex flex-column align-items-center"
          >
            <img src="hero/icon-4.svg" alt="" class="hero-icon-img" />
            <p class="mt-2">ارائه وام در کارت خرید</p>
          </div>

          <div
            class="bg-white col-6 col-md-3 d-flex flex-column align-items-center"
          >
            <img src="hero/icon-3.svg" alt="" class="hero-icon-img" />
            <p class="mt-2">پوشش کل کشور</p>
          </div>
        </div>
      </div>
    </div>
    `;
}
