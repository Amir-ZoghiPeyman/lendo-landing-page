export function footer() {
  return `
    <div class="bg-gray-bg p-1">
      <footer class="mt-4 container">
        <!-- banner -->
        <div
          class="bg-primary-bg p-3 rounded-4 d-md-flex justify-content-between align-items-center"
        >
          <div class="d-flex gap-2 mb-2 mb-md-0">
            <!-- svg -->
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
            <div>
              <p class="text-white fw-bold">دانلود اپلیکیشن لندو</p>
            </div>
          </div>
          <div>
            <div class="d-md-flex gap-2">
              <div class=""><img src="footer/myket.svg" alt="" /></div>
              <div class="">
                <img src="footer/coffe-bazzar.svg" alt="" />
              </div>
              <div class="mt-2 mt-md-0">
                <img src="footer/apple.svg" alt="" />
              </div>
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
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#acc1"
              >
                <span class="footer-text text-primary">راهنمای مشتریان</span>
              </button>
            </h2>
            <div id="acc1" class="accordion-collapse collapse">
              <div class="accordion-body">
                <div class="footer-text text-primary">
                  <a class="d-block text-decoration-none"
                    >آموزش تصویری دریافت وام</a
                  >
                  <a class="d-block text-decoration-none">راهنما</a>
                  <a class="d-block text-decoration-none">مدارک لازم</a>
                  <a class="d-block text-decoration-none">محاسبه اقساط</a>
                  <a class="d-block text-decoration-none"
                    >راهنمای امضای الکترونیکی</a
                  >
                  <a class="d-block text-decoration-none"
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
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#acc2"
              >
                <span class="footer-text text-primary">لندو</span>
              </button>
            </h2>
            <div id="acc2" class="accordion-collapse collapse">
              <div class="accordion-body">
                <div class="footer-text text-primary">
                  <a class="d-block text-decoration-none">درباره ما</a>
                  <a class="d-block text-decoration-none">داستان لندو!</a>
                  <a class="d-block text-decoration-none"
                    >از ایران رنتز تا لندو</a
                  >
                  <a class="d-block text-decoration-none">فرهنگ ما</a>
                  <a class="d-block text-decoration-none">مزایای شغلی ما</a>
                  <a class="d-block text-decoration-none">بلاگ</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Grid -->
        <div class="row d-none d-md-flex mt-4">
          <!-- 1st col -->
          <div class="col-md-6">
            <p class="footer-text text-primary fw-bold mb-2">راهنمای مشتریان</p>
            <div class="footer-text text-primary">
              <a class="d-block text-decoration-none"
                >آموزش تصویری دریافت وام</a
              >
              <a class="d-block text-decoration-none">راهنما</a>
              <a class="d-block text-decoration-none">مدارک لازم</a>
              <a class="d-block text-decoration-none">محاسبه اقساط</a>
              <a class="d-block text-decoration-none"
                >راهنمای امضای الکترونیکی</a
              >
              <a class="d-block text-decoration-none"
                >راهنمای سفته الکترونیکی</a
              >
            </div>
          </div>

          <!-- 2nd col -->
          <div class="col-md-6">
            <p class="footer-text text-primary fw-bold mb-2">لندو</p>
            <div class="footer-text text-primary">
              <a class="d-block text-decoration-none">درباره ما</a>
              <a class="d-block text-decoration-none">داستان لندو!</a>
              <a class="d-block text-decoration-none">از ایران رنتز تا لندو</a>
              <a class="d-block text-decoration-none">فرهنگ ما</a>
              <a class="d-block text-decoration-none">مزایای شغلی ما</a>
              <a class="d-block text-decoration-none">بلاگ</a>
            </div>
          </div>
        </div>

        <!-- links -->
        <div class="mt-4 d-md-flex justify-content-between align-items-center">
          <div class="d-flex gap-4">
            <a href="">
              <i class="bi bi-instagram text-primary p-2"></i>
            </a>
            <a href="">
              <i class="bi bi-twitter text-primary p-2"></i>
            </a>
            <a href="">
              <i class="bi bi-telegram text-primary p-2"></i>
            </a>
            <a href="">
              <i class="bi bi-linkedin text-primary p-2"></i>
            </a>
          </div>

          <!-- copyrights -->
          <p class="mt-4 footer-copyright">
            کلیه حقوق این سایت متعلق به شرکت هوشمند آرمان گستر آریا (لندو) است.
            Copyrights - Lendo Co. - 1401
          </p>
        </div>
      </footer>
    </div> 
    `
}