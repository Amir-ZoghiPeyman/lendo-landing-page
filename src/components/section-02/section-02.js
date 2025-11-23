export function section02() {
  return `
    <section class="my-5">
      <div
        class="container d-md-flex justify-content-between align-items-center"
      >
        <div class="section-02-width">
          <!-- main text -->
          <div class="mb-3">
            <h2 class="fs-3 fw-bolder text-primary">
              باشگاه لندولند
              <span class="fw-semibold text-primary d-none d-md-inline"
                >، امتیازت رو به وام تبدیل کن!</span
              >
            </h2>
            <p class="fw-semibold text-primary d-md-none">
              امتیازت رو به وام تبدیل کن!
            </p>
          </div>

          <p class="section-02-text text-primary">
            با عضویت در باشگاه مشتریان لندو (لندولند)، می‌تونی با انجام کارهای
            ساده مثل خرید، ثبت‌نام و شرکت در مأموریت‌های روزانه، امتیاز جمع کنی.
            این امتیازها قابل استفاده برای دریافت وام، شرکت در قرعه‌کشی‌ها، یا
            دریافت جوایز و تخفیف‌های متنوع هستن.
          </p>

          <div>
            <a href="#" class="fw-bolder text-decoration-none section-02-link">
              <span class="d-inline d-md-none">اطلاعات بیشتر</span>
              <span class="d-none d-md-inline">ورود به لندولند</span>
              <i class="fs-2 bi bi-arrow-left-short"></i>
            </a>
          </div>
        </div>

        <!-- image -->
        <img src="section-02/lendoland.png" class="img-fluid" alt="lendoland" />
      </div>

      <!-- banner-mobile -->
      <div class="bg-gray-bg py-1 d-md-block d-lg-none">
        <div class="container">
          <a href="#">
            <img
              src="section-02/banner-mobile.jpeg"
              class="img-fluid my-3 rounded-4 d-block d-md-none"
              alt="lendo-shop"
            />
          </a>
        </div>
      </div>

      <!-- banner-desktop -->
      <div class="py-1 d-none d-md-block">
        <div class="container">
          <a href="#">
            <img
              src="section-02/banner-desktop.jpeg"
              class="img-fluid my-3 rounded-4 d-none d-md-block"
              alt="lendo-shop"
            />
          </a>
        </div>
      </div>
    </section>
  `;
}