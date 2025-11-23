import "./navbar.scss"

export function navbar() {
  return `
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid p-3">
        <div class="d-flex align-items-center justify-content-between w-100">
          <div class="d-flex flex-row-reverse gap-4">
            <!-- Logo -->
            <div class="d-flex align-items-center">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium Logo lendo-css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 110 26"
                width="110"
                height="26"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M104.784 5.00693V0H99.5679V10.014H110V5.00693H104.784Z"
                  fill="inherit"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M83.9189 15.0205V20.0274H89.1351V25.0342H94.3512V15.0205H83.9189Z"
                  fill="#0AC974"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M99.5684 15.0205V25.0342H104.784V20.0274H110V15.0205H99.5684Z"
                  fill="#0AC974"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M89.1356 5.00693H83.9194V10.014H94.3518V0H89.1356V5.00693Z"
                  fill="#0AC974"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.73169 6.56445H0V19.66C0 20.6342 0.82572 21.4239 1.84426 21.4239H11.8028V17.8546H3.73169V6.56445Z"
                  fill="inherit"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.1001 15.8337L32.088 7.61797C31.6047 6.95769 30.8152 6.56445 29.9727 6.56445H27.7725V21.424H31.504V12.1548L37.5163 20.3705C37.9995 21.0308 38.7891 21.424 39.6315 21.424H41.8318V6.56445H38.1001V15.8337Z"
                  fill="inherit"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4951 19.6598C13.4951 20.6341 14.3208 21.4239 15.3394 21.4239H26.0792V17.8546H17.2268V15.7787H26.0792V12.2096H17.2268V10.1339H26.0792V6.56445H13.4951V19.6598Z"
                  fill="inherit"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.8163 17.8546H47.2557V10.1339H49.8163C52.0416 10.1339 53.8521 11.8657 53.8521 13.9942C53.8521 16.1228 52.0416 17.8546 49.8163 17.8546ZM49.6509 6.56445H43.5244V19.6598C43.5244 20.6341 44.3499 21.424 45.3685 21.424H49.8163C54.1772 21.424 57.7108 17.968 57.5802 13.769C57.4545 9.72809 53.8774 6.56445 49.6509 6.56445Z"
                  fill="inherit"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M66.3066 17.8546C64.0812 17.8546 62.2708 16.1228 62.2708 13.9942C62.2708 11.8657 64.0812 10.1339 66.3066 10.1339C68.5319 10.1339 70.3424 11.8657 70.3424 13.9942C70.3424 16.1228 68.5319 17.8546 66.3066 17.8546ZM66.3066 6.56445C62.0238 6.56445 58.5391 9.89752 58.5391 13.9942C58.5391 18.0908 62.0238 21.424 66.3066 21.424C70.5894 21.424 74.0738 18.0908 74.0738 13.9942C74.0738 9.89752 70.5894 6.56445 66.3066 6.56445Z"
                  fill="inherit"
                ></path>
              </svg>
            </div>

            <!-- Offcanvas toggle button -->
            <button
              class="navbar-toggler border-0 rounded-5"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <!-- Login/Register button -->
          <button type="button" class="btn btn-outline-primary rounded-5 btn-hover">
            <span class="d-none d-md-inline"> ورود/ثبت نام</span
            ><span class="d-md-none">چطور وام بگیرم؟</span>
          </button>
        </div>

        <!-- Offcanvas -->
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2">
              <li class="nav-item">
                <a href="#" class="text-brand text-decoration-none">لندو</a>
              </li>
              <li class="nav-item">
                <a href="#" class="text-brand text-decoration-none"
                  >چطور وام بگیرم؟</a
                >
              </li>
              <li class="nav-item">
                <a href="#" class="text-brand text-decoration-none"
                  >اعتبار سنجی</a
                >
              </li>
              <li class="nav-item">
                <a href="#" class="text-brand text-decoration-none"
                  >فروشگاه ها</a
                >
              </li>
              <li class="nav-item">
                <a href="#" class="text-brand text-decoration-none"
                  >ثبت فروشگاه</a
                >
              </li>
              <li class="nav-item">
                <a href="#" class="text-brand text-decoration-none">راهنما</a>
              </li>
              <li class="nav-item">
                <a href="#" class="text-brand text-decoration-none">بلاگ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    `
}
