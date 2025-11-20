export function hero() {
  return `
    <div class="bg-gray-bg">
      <section>
        <div class="container-fluid">
          <!-- mobile slides -->
          <div class="swiper hero-swiper-mobile d-md-none">
            <div class="swiper-wrapper">
              <!-- 1st slide -->
              <div class="swiper-slide">
                <a href="">
                  <img
                    class="img-fluid rounded-5 w-100 object-fit-cover"
                    src="hero/slider-1-mobile.svg"
                    alt=""
                  />
                </a>
              </div>

              <!-- 2nd slide -->
              <div class="swiper-slide">
                <a href="">
                  <img
                    class="img-fluid rounded-5 w-100 object-fit-cover"
                    src="hero/slider-2-mobile.svg"
                    alt=""
                  />
                </a>
              </div>

              <!-- 3rd slide -->
              <div class="swiper-slide">
                <a href="">
                  <img
                    class="img-fluid rounded-5 w-100 object-fit-cover"
                    src="hero/slider-3-mobile.svg"
                    alt=""
                  />
                </a>
              </div>

              <!-- 4th slide -->
              <div class="swiper-slide">
                <a href="">
                  <img
                    class="img-fluid rounded-5 w-100 object-fit-cover"
                    src="hero/slider-4-mobile.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <!-- pagination -->
            <div class="swiper-pagination bg-transparent rounded-4"></div>
          </div>
        </div>

        <!-- desktop slides -->
        <div class="swiper hero-swiper-desktop d-none d-md-block mt-3">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide d-flex flex-row-reverse hero-slider-desktop p-4 bg-slider-1"
            >
              <!-- 1st slide -->
              <img class="img-fluid" src="hero/slider-1-desktop.png" alt="" />
              <div>
                <img
                  class="img-fluid w-100 object-fit-cover"
                  src="hero/text-1.svg"
                  alt=""
                />
                <a href="">
                  <button type="button" class="btn btn-primary">
                    درخواست وام
                  </button>
                </a>
              </div>
            </div>

            <!-- 2nd slide -->
            <div
              class="swiper-slide d-flex flex-row-reverse hero-slider-desktop p-4 bg-slider-2"
            >
              <img
                class="img-fluid w-100 object-fit-cover"
                src="hero/slider-2-desktop.png"
                alt=""
              />
              <div>
                <img
                  class="img-fluid w-100 object-fit-cover"
                  src="hero/text-2.svg"
                  alt=""
                />
                <a href=""
                  ><button type="button" class="btn btn-primary">
                    ورود به لندولند
                  </button></a
                >
              </div>
            </div>

            <!-- 3rd slide -->
            <div
              class="swiper-slide d-flex flex-row-reverse hero-slider-desktop p-4 bg-slider-3"
            >
              <img
                class="img-fluid w-100 object-fit-cover"
                src="hero/slider-3-desktop.png"
                alt=""
              />
              <div>
                <img
                  class="img-fluid w-100 object-fit-cover"
                  src="hero/text-3.svg"
                  alt=""
                />
                <a href=""
                  ><button type="button" class="btn btn-primary">
                    مشاهده
                  </button></a
                >
              </div>
            </div>

            <!-- 4th slide -->
            <div
              class="swiper-slide d-flex flex-row-reverse hero-slider-desktop p-4 bg-slider-4"
            >
              <img
                class="img-fluid w-100 object-fit-cover"
                src="hero/slider-4-desktop.png"
                alt=""
              />
              <div>
                <img
                  class="img-fluid w-100 object-fit-cover"
                  src="hero/text-4.svg"
                  alt=""
                />
                <a href=""
                  ><button type="button" class="btn btn-primary">
                    درخواست وام
                  </button></a
                >
              </div>
            </div>
          </div>

          <!-- pagination -->
          <div class="swiper-pagination bg-transparent rounded-4"></div>

          <!-- navigation -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </section>

      <!-- icons section -->
      <div class="hero-icons-wrapper bg-lg-white">
        <div class="hero-icons container text-center mt-4">
          <div class="row g-3 justify-content-center">
            <div
              class="bg-white col-6 col-md-3 d-flex flex-column align-items-center rounded-4"
            >
              <img src="hero/icon-2.svg" class="hero-icon-img" alt="" />
              <p class="mt-2 hero-text text-primary">بدون چک و ضامن</p>
            </div>

            <div
              class="bg-white col-6 col-md-3 d-flex flex-column align-items-center rounded-4"
            >
              <img src="hero/icon-1.svg" class="hero-icon-img" alt="" />
              <p class="mt-2 hero-text text-primary">فرایند کاملا آنلاین</p>
            </div>

            <div
              class="bg-white col-6 col-md-3 d-flex flex-column align-items-center rounded-4"
            >
              <img src="hero/icon-4.svg" class="hero-icon-img" alt="" />
              <p class="mt-2 hero-text text-primary">ارائه وام در کارت خرید</p>
            </div>

            <div
              class="bg-white col-6 col-md-3 d-flex flex-column align-items-center rounded-4"
            >
              <img src="hero/icon-3.svg" class="hero-icon-img" alt="" />
              <p class="mt-2 hero-text text-primary">پوشش کل کشور</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}
