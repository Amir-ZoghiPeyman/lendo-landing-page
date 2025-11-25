import "./section-01.scss"

export function section01() {
  return `
    <div class="container">
      <div class="d-md-flex justify-content-between my-4">
        <div class="main-text-wrapper">
          <h2 class="mt-4 text-primary fw-bold">مراحل دریافت وام از لندو</h2>
          <!-- steps -->
          <div
            class="steps d-flex flex-wrap justify-content-center gap-3 my-4 rounded-4"
          >
            <div
              class="step d-flex flex-column align-items-center p-2"
              data-step="1"
            >
              <div class="icon fs-1">
                <i class="bi bi-circle-fill fs-6 fw-semibold d-md-none"></i>
              </div>
              <div class="label small mt-1">مرحله ١</div>
            </div>
          
            <div
              class="step d-flex flex-column align-items-center p-2"
              data-step="2"
            >
              <div class="icon fs-1">
                <i class="bi bi-circle-fill fs-6 fw-semibold d-md-none"></i>
              </div>
              <div class="label small mt-1">مرحله ٢</div>
            </div>

            <div
              class="step d-flex flex-column align-items-center p-2"
              data-step="3"
            >
              <div class="icon fs-1">
                <i class="bi bi-circle-fill fs-6 fw-semibold d-md-none"></i>
              </div>
              <div class="label small mt-1">مرحله ٣</div>
            </div>

            <div
              class="step d-flex flex-column align-items-center p-2"
              data-step="4"
            >
              <div class="icon fs-1">
                <i class="bi bi-circle-fill fs-6 fw-semibold d-md-none"></i>
              </div>
              <div class="label small mt-1">مرحله ۴</div>
            </div>

            <div
              class="step d-flex flex-column align-items-center p-2"
              data-step="5"
            >
              <div class="icon fs-1">
                <i class="bi bi-circle-fill fs-6 fw-semibold d-md-none"></i>
              </div>
              <div class="label small mt-1">مرحله ۵</div>
            </div>

            <div
              class="step d-flex flex-column align-items-center p-2"
              data-step="6"
            >
              <div class="icon fs-1">
                <i class="bi bi-circle-fill fs-6 fw-semibold d-md-none"></i>
              </div>
              <div class="label small mt-1">مرحله ۶</div>
            </div>

            <div
              class="step d-flex flex-column align-items-center p-2"
              data-step="7"
            >
              <div class="icon fs-1">
                <i class="bi bi-circle-fill fs-6 fw-semibold d-md-none"></i>
              </div>
              <div class="label small mt-1">مرحله ٧</div>
            </div>
          </div>

          <!-- content box -->
          <div class="content-box">
            <div class="flex-grow-1">
              <h2 id="step-title" class="fw-bold text-primary my-4"></h2>
              <div class="section-01-text">
                <p id="step-text"></p>
              </div>
              <a href="" class="fw-bolder text-decoration-none section-02-link d-flex align-items-center">
                <p id="step-link"></p>
                <i class="fs-2 bi bi-arrow-left-short"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="image-wrapper">
          <img id="step-image" class="img-fluid mt-2 rounded-4" />
          <div
            class="pagination d-none d-md-flex bg-white p-2 rounded-4 border"
          ></div>
        </div>
      </div>

      <!-- banner -->
      <div>
        <img
          src="section-01/banner-mobile.png"
          class="img-fluid my-3 rounded-4 d-block d-md-none"
          alt=""
        />
        <img
          src="section-01/banner-desktop.svg"
          class="img-fluid my-3 rounded-4 d-none d-md-block"
          alt=""
        />
      </div>
    </div> 
    `;
}
