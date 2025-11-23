import "./footer.scss"

export function footer() {
  return `
    <div class="gray-bg p-1 pb-4">
      <footer class="mt-4 container">
        <!-- banner -->
        <div
          class="bg-primary-bg p-3 rounded-4 d-md-flex justify-content-between align-items-center"
        >
          <div class="d-flex gap-2 mb-2 mb-md-0">
            <!-- logo -->
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium lendo-css-6niobc"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 32 32"
              height="32"
              width="32"
              fill="none"
            >
              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.5964 6.14242V0H19.1973V12.285H31.9955V6.14242H25.5964Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 18.427V24.5694H6.39904V30.7117H12.7981V18.427H0Z"
                  fill="#0AC974"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.2012 18.427V30.7117H25.6002V24.5694H31.9991V18.427H19.2012Z"
                  fill="#0AC974"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.39911 6.14242H0V12.285H12.7982V0H6.39911V6.14242Z"
                  fill="#0AC974"
                ></path>
              </svg>
            </svg>

            <!-- download links -->
            <p class="text-white fw-bold">دانلود اپلیکیشن لندو</p>
          </div>
          <div>
            <div class="d-md-flex gap-2">
              <a><img src="footer/myket.svg" alt="myket" /></a>
              <a>
                <img src="footer/coffe-bazzar.svg" alt="coffe-bazzar" />
              </a>
              <a>
                <img src="footer/apple.svg" class="mt-1 mt-md-0" alt="apple" />
              </a>
            </div>
          </div>
        </div>

        <!-- accordions -->
        <!-- Mobile Accordion -->
        <div
          class="accordion accordion-flush mt-4 d-md-none"
          id="accordionExample"
        >
          <!-- 1st accordion -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed custom-accordion-btn d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#acc1"
              >
                <span class="footer-text text-primary">راهنمای مشتریان</span>
                <i class="bi bi-chevron-down"></i>
              </button>
            </h2>
            <div id="acc1" class="accordion-collapse collapse">
              <div class="accordion-body">
                <div class="d-flex flex-column gap-3">
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >آموزش تصویری دریافت وام</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >راهنما</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >مدارک لازم</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >محاسبه اقساط</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >راهنمای امضای الکترونیکی</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >راهنمای سفته الکترونیکی</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 2nd accordion -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed custom-accordion-btn d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#acc2"
              >
                <span class="footer-text text-primary">لندو</span>
                <i class="bi bi-chevron-down"></i>
              </button>
            </h2>
            <div id="acc2" class="accordion-collapse collapse">
              <div class="accordion-body">
                <div class="d-flex flex-column gap-3">
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >درباره ما</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >داستان لندو!</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >از ایران رنتز تا لندو</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >فرهنگ ما</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >مزایای شغلی ما</a
                  >
                  <a class="d-block text-decoration-none text-primary" href="#"
                    >بلاگ</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Grid -->
        <div class="row d-none d-md-flex mt-4">
          <!-- 1st col -->
          <div class="col-md-6">
            <p class="footer-text text-primary fw-bold mb-4">راهنمای مشتریان</p>
            <div class="d-flex flex-column gap-3">
              <a class="d-block text-decoration-none text-primary" href="#"
                >آموزش تصویری دریافت وام</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >راهنما</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >مدارک لازم</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >محاسبه اقساط</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >راهنمای امضای الکترونیکی</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >راهنمای سفته الکترونیکی</a
              >
            </div>
          </div>

          <!-- 2nd col -->
          <div class="col-md-6">
            <p class="footer-text text-primary fw-bold mb-4">لندو</p>
            <div class="d-flex flex-column gap-3">
              <a class="d-block text-decoration-none text-primary" href="#"
                >درباره ما</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >داستان لندو!</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >از ایران رنتز تا لندو</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >فرهنگ ما</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >مزایای شغلی ما</a
              >
              <a class="d-block text-decoration-none text-primary" href="#"
                >بلاگ</a
              >
            </div>
          </div>
        </div>
      </footer>
    </div>

    <!-- links -->
    <div class="mt-4 footer-links-copyrights">
      <div
        class="container d-md-flex justify-content-between align-items-center"
      >
        <!-- icons -->
        <div
          class="d-flex justify-content-center justify-content-md-start gap-4 mb-3 mb-md-0"
        >
          <a href="#"><i class="bi bi-instagram text-primary p-2"></i></a>
          <a href="#"><i class="bi bi-twitter text-primary p-2"></i></a>
          <a href="#"><i class="bi bi-telegram text-primary p-2"></i></a>
          <a href="#"><i class="bi bi-linkedin text-primary p-2"></i></a>
        </div>

        <!-- copyrights -->
        <div class="text-center text-md-start">
          <p class="footer-copyright">
            کلیه حقوق این سایت متعلق به شرکت هوشمند آرمان گستر آریا (لندو) |
            Copyrights - Lendo Co. - 1401
          </p>
        </div>
      </div>
    </div>
    `;
}