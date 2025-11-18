export function footer() {
    return `
    <footer class="m-4">
      <div class="container bg-brand p-3 rounded-4">
        <div class="d-flex gap-2 mb-2">
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
          <div>
            <p class="text-white fw-bold">دانلود اپلیکیشن لندو</p>
          </div>
        </div>
        <div>
          <div class="row row-cols-2 col-md-3 d-flex">
            <div class="col"><img src="footer/myket.svg" alt="" /></div>
            <div class="col"><img src="footer/coffe-bazzar.svg" alt="" /></div>
            <div class="col mt-2"><img src="footer/apple.svg" alt="" /></div>
          </div>
        </div>
      </div>

      <div class="accordion mt-4" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              راهنمای مشتریان
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <div>
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

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              لندو
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div>
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

      <div class="mt-2">
        <div class="d-flex gap-4 justify-content-center">
          <img
            class="icon-lg border rounded-circle p-2"
            src="footer/instagram.svg"
            alt=""
          />
          <img
            class="icon-lg border rounded-circle p-2"
            src="footer/twitter.svg"
            alt=""
          />
          <img
            class="icon-lg border rounded-circle p-2"
            src="footer/telegram.svg"
            alt=""
          />
          <img
            class="icon-lg border rounded-circle p-2"
            src="footer/linkedin.svg"
            alt=""
          />
        </div>
        <p class="mt-2">
          کلیه حقوق این سایت متعلق به شرکت هوشمند آرمان گستر آریا (لندو) است.
          Copyrights - Lendo Co. - 1401
        </p>
      </div>
    </footer>
    `
}