export function faq() {
  return `
    <section class="container my-3">
      <!-- main text -->
      <div class="d-flex flex-column align-items-center mb-2">
        <h3 class="text-primary fw-bold fs-1">سوالات پر تکرار</h3>
        <p class="text-primary fw-bold d-none d-md-block">
          پاسخ به سوالات شما درباره نحوه دریافت وام خرید کالا
        </p>
      </div>

      <!-- accordions -->
      <div class="accordion accordion-flush">
        <!-- 1st accordion -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <span class="faq-text text-primary">
                چگونه از لندو وام بگیرم؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              برای دریافت وام از لندو نیاز است شما درخواست خود را ثبت کرده و
              مدارک لازم را بارگذاری کنید. بعد از صدور «وام کارت» و دریافت آن،
              می‌توانید با وام خود انواع کالاها را از فروشگاه‌های مختلف بخرید و
              اقساط آن را به لندو بپردازید.
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
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <span class="faq-text text-primary">
                برای دریافت وام لندو چه مدارکی باید داشته باشم؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              <p>برای دریافت وام لندو، سه مدرک زیر مورد نیاز است:</p>
              <ol>
                <li>
                  تصویر پشت و روی کارت ملی جدید یا رسید تعویض کارت ملی قدیمی
                </li>
                <li>نمره اعتباری قابل قبول</li>
                <li>گواهی ثنا</li>
              </ol>
              <p>برای دریافت جزئیات بیشتر در مورد مدارک، وارد این صفحه شوید</p>
            </div>
          </div>
        </div>

        <!-- 3rd accordion -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <span class="faq-text text-primary">
                «وام کارت» چیست و چطور باید از آن استفاده کنم؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              «وام کارت» یک کارت خرید عضو شتاب است که در دو نوع «وام کارت آبی» و
              «وام کارت سفید» به کاربران لندو عرضه می‌شود و شما می‌توانید بسته
              به نوع وام کارت خود، از آن برای خرید کالا از فروشگاه های مختلف
              استفاده کنید. بعد از اینکه درخواست اعتبارسنجی شما تایید شد، «وام
              کارت» از طریق پست به آدرستان ارسال می‌شود. البته توجه داشته باشید
              که تا مرحله امضای قراردادها، باید حتما از طریق حساب کاربری خود،
              کارتتان را فعال کنید. درخواستتان که نهایی شد، مبلغ وام در «وام
              کارتتان» شارژ می‌شود و می‌توانید از موجودی کارت که همان مبلغ وام
              درخواستی‌تان است، برای خرید کالاهای مورد نظر خود استفاده کنید.
            </div>
          </div>
        </div>

        <!-- 4th accordion -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <span class="faq-text text-primary">
                تفاوت وام کارت آبی و سفید چیست؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              شما با دریافت وام کارت آبی امکان خرید کالا از فروشگاه های طرف
              قرارداد لندو را خواهید داشت؛ درصورتی که با وام کارت سفید می‌توانید
              از تمامی فروشگاه های آنلاین و دستگاه های کارتخوان سراسر کشور خرید
              خود را انجام دهید و محدود به فروشگاه های طرف قرارداد نخواهید بود.
            </div>
          </div>
        </div>

        <!-- 5th accordion -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <span class="faq-text text-primary">
                سود وام لندو چقدر است؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              سود اقساط وام شما طبق نرخ مصوب بانک مرکزی، 23 درصد است.
            </div>
          </div>
        </div>

        <!-- 6th accordion -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <span class="faq-text text-primary">
                چطور باید سفته الکترونیکی را خریداری کرد؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              برای دریافت وام لندو، باید سفته الکترونیکی مورد نیاز را از طریق
              خود سایت لندو خریداری کنید. برای مشاهده آموزش خرید سفته
              الکترونیکی، بهاین صفحه مراجعه کنید.
            </div>
          </div>
        </div>

        <!-- 7th accordion -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <span class="faq-text text-primary">
                پرداخت اقساط در لندو چگونه است؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              روش پرداخت اقساط به صورت ۱۲ ماهه است و شما می‌توانید یکی از این
              روش‌ها را انتخاب کنید. همچنین باید اقساط خود را به صورت آنلاین از
              طریق سایت لندو و حساب کاربری‌تان بپردازید. اگر در پرداخت اقساط خود
              تاخیر داشته باشید، از شما جریمه دیرکرد دریافت می‌شود و اگر اقساط
              خود را زودتر از موعد پرداخت کنید، نمره اعتبارتان در لندو افزایش
              پیدا می‌کند. ضمنا در صورتی که قسط خود را پرداخت کردید اما بعد از
              ۷۲ ساعت کاری پرداخت شما ثبت نشد و مبلغ پرداخت‌شده هم به حسابتان
              برنگشت، لطفا با تیم پشتیبانی ما تماس بگیرید تا پرداخت قسط شما در
              سایت لندو ثبت شود.
            </div>
          </div>
        </div>

        <!-- 8th accordion -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <span class="faq-text text-primary">
                لندو اقساط من را چطور با بانک تسویه میکند؟
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body faq-text text-primary">
              لندو هیچ‌گونه دسترسی به اقساط پرداختی شما ندارد. زمانی که قسط خود
              را پرداخت می‌کنید، مبلغ پرداختی مستقیما وارد حساب بانک می‌شود.
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <a href="" class="fw-bolder text-decoration-none section-02-link">
          <span>مشاهده سوالات بیشتر</span>
          <i class="fs-2 bi bi-arrow-left-short"></i>
        </a>
      </div>
    </section>
    `
}