export function faq() {
    return `
    <section class="container my-3">
      <h3>سوالات پر تکرار</h3>
      <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
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
                چگونه از لندو وام بگیرم؟
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                برای دریافت وام از لندو نیاز است شما درخواست خود را ثبت کرده و
                مدارک لازم را بارگذاری کنید. بعد از صدور «وام کارت» و دریافت آن،
                می‌توانید با وام خود انواع کالاها را از فروشگاه‌های مختلف بخرید
                و اقساط آن را به لندو بپردازید.
              </div>
            </div>
          </div>
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
                برای دریافت وام لندو چه مدارکی باید داشته باشم؟
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>برای دریافت وام لندو، سه مدرک زیر مورد نیاز است:</p>
                <ol>
                  <li>
                    تصویر پشت و روی کارت ملی جدید یا رسید تعویض کارت ملی قدیمی
                  </li>
                  <li>نمره اعتباری قابل قبول</li>
                  <li>گواهی ثنا</li>
                </ol>
                <p>
                  برای دریافت جزئیات بیشتر در مورد مدارک، وارد این صفحه شوید
                </p>
              </div>
            </div>
          </div>

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
                «وام کارت» چیست و چطور باید از آن استفاده کنم؟
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                «وام کارت» یک کارت خرید عضو شتاب است که در دو نوع «وام کارت آبی»
                و «وام کارت سفید» به کاربران لندو عرضه می‌شود و شما می‌توانید
                بسته به نوع وام کارت خود، از آن برای خرید کالا از فروشگاه های
                مختلف استفاده کنید. بعد از اینکه درخواست اعتبارسنجی شما تایید
                شد، «وام کارت» از طریق پست به آدرستان ارسال می‌شود. البته توجه
                داشته باشید که تا مرحله امضای قراردادها، باید حتما از طریق حساب
                کاربری خود، کارتتان را فعال کنید. درخواستتان که نهایی شد، مبلغ
                وام در «وام کارتتان» شارژ می‌شود و می‌توانید از موجودی کارت که
                همان مبلغ وام درخواستی‌تان است، برای خرید کالاهای مورد نظر خود
                استفاده کنید.
              </div>
            </div>
          </div>

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
                تفاوت وام کارت آبی و سفید چیست؟
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                شما با دریافت وام کارت آبی امکان خرید کالا از فروشگاه های طرف
                قرارداد لندو را خواهید داشت؛ درصورتی که با وام کارت سفید
                می‌توانید از تمامی فروشگاه های آنلاین و دستگاه های کارتخوان
                سراسر کشور خرید خود را انجام دهید و محدود به فروشگاه های طرف
                قرارداد نخواهید بود.
              </div>
            </div>
          </div>

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
                سود وام لندو چقدر است؟
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                سود اقساط وام شما طبق نرخ مصوب بانک مرکزی، 23 درصد است.
              </div>
            </div>
          </div>

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
                چطور باید سفته الکترونیکی را خریداری کرد؟
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                برای دریافت وام لندو، باید سفته الکترونیکی مورد نیاز را از طریق
                خود سایت لندو خریداری کنید. برای مشاهده آموزش خرید سفته
                الکترونیکی، بهاین صفحه مراجعه کنید.
              </div>
            </div>
          </div>

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
                پرداخت اقساط در لندو چگونه است؟
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                روش پرداخت اقساط به صورت ۱۲ ماهه است و شما می‌توانید یکی از این
                روش‌ها را انتخاب کنید. همچنین باید اقساط خود را به صورت آنلاین
                از طریق سایت لندو و حساب کاربری‌تان بپردازید. اگر در پرداخت
                اقساط خود تاخیر داشته باشید، از شما جریمه دیرکرد دریافت می‌شود و
                اگر اقساط خود را زودتر از موعد پرداخت کنید، نمره اعتبارتان در
                لندو افزایش پیدا می‌کند. ضمنا در صورتی که قسط خود را پرداخت
                کردید اما بعد از ۷۲ ساعت کاری پرداخت شما ثبت نشد و مبلغ
                پرداخت‌شده هم به حسابتان برنگشت، لطفا با تیم پشتیبانی ما تماس
                بگیرید تا پرداخت قسط شما در سایت لندو ثبت شود.
              </div>
            </div>
          </div>

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
                لندو اقساط من را چطور با بانک تسویه میکند؟
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                لندو هیچ‌گونه دسترسی به اقساط پرداختی شما ندارد. زمانی که قسط
                خود را پرداخت می‌کنید، مبلغ پرداختی مستقیما وارد حساب بانک
                می‌شود.
              </div>
            </div>
          </div>

          <a href="">مشاهده سوالات بیشتر</a>
        </div>
      </div>
    </section>
    `
}