import React from "react";
import styles from "@/component/template/Main.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <div className={styles.menu}>
          <ul>
            <li>
              <span style={{ fontWeight: "400", fontSize: "20px" }}>خانه</span>
            </li>
            <li style={{ fontWeight: "400", fontSize: "20px" }}>فروشگاه</li>
            <li style={{ fontWeight: "400", fontSize: "20px" }}>وبلاگ</li>
            <li style={{ fontWeight: "400", fontSize: "20px" }}>تماس با ما</li>
            <li style={{ fontWeight: "400", fontSize: "20px" }}>تماس با ما</li>
          </ul>
        </div>
        <div className={styles.number}>
          <FiPhoneCall />
          <p style={{ fontWeight: "400", fontSize: "20px" }}>
            شماره تماس:
            <span style={{ fontWeight: "400", fontSize: "20px" }}>
              ۰۹۱۷۱۲۳۴۵۶۷
            </span>
          </p>
        </div>
      </div>
      <div className={styles.second}>
        <img src="/images/poster.png" />
        <div className={styles.group}>
          <img src="/images/Group1.png" />
          <img src="/images/Group2.png" />
          <img src="/images/Group3.png" />
        </div>
      </div>
      <div className={styles.third}>
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>
          جدید ترین محصولات
        </h1>
        <div className={styles.container}>
          <div className={styles.items}>
            <img src="/images/mofid.png" />
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>
              غذای گربه مفید
            </h4>
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>(۴ کیلوگرم)</h4>
            <div className={styles.price}>
              <h3>:قیمت</h3>
              <h3>۴۳۷/۰۰۰</h3>
            </div>
            <button>
              <CiSquarePlus />
              افزودن به سبد خرید
            </button>
          </div>
          <div className={styles.items}>
            <img src="/images/kitzi.png" />
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>
              غذای گربه Kitzy پریمیوم{" "}
            </h4>
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>(۲ کیلوگرم)</h4>
            <div className={styles.price}>
              <h3>:قیمت</h3>
              <h3>۴۳۷/۰۰۰</h3>
            </div>
            <button>
              <CiSquarePlus />
              افزودن به سبد خرید
            </button>
          </div>
          <div
            className={styles.items}
            style={{ fontWeight: "400", fontSize: "20px" }}
          >
            <img src="/images/science.jfif" />
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>
              غذای سگ Science diet
            </h4>
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>(۳ کیلوگرم)</h4>
            <div className={styles.price}>
              <h3>:قیمت</h3>
              <h3>۴۳۷/۰۰۰</h3>
            </div>
            <button>
              <CiSquarePlus />
              افزودن به سبد خرید
            </button>
          </div>
          <div className={styles.items}>
            <img src="/images/nulo.jfif" />
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>
              مولتی ویتامین گربه Nulo{" "}
            </h4>
            <h4 style={{ fontWeight: "400", fontSize: "20px" }}>(۴ کیلوگرم)</h4>
            <div className={styles.price}>
              <h3>:قیمت</h3>
              <h3>۴۳۷/۰۰۰</h3>
            </div>
            <button>
              <CiSquarePlus />
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
      <div className={styles.forth}>
        <img src="/images/Framemain.png" />
        <div className={styles.frame}>
          <img src="/images/Frame1.png" />
          <img src="/images/Frame2.png" />
          <img src="/images/Frame3.png" />
          <img src="/images/Frame4.png" />
        </div>
      </div>
      <div className={styles.fith}>
        <img src="/images/productposter.png" />
        <div className={styles.products}>
          <div className={styles.container2}>
            <div className={styles.items2}>
              <img src="/images/1.png" />
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                قلاده کتفی پد دار سگ{" "}
              </h4>
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                سایز بزرگ، پلیس
              </h4>
              <div className={styles.price}>
                <h3>:قیمت</h3>
                <h3>۴۳۷/۰۰۰</h3>
              </div>
              <button>
                <CiSquarePlus />
                افزودن به سبد خرید
              </button>
            </div>
            <div className={styles.items2}>
              <img src="/images/2.png" />
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                کوله پشتی حبابدار سگ
              </h4>
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                سایز بزرگ،
              </h4>
              <div className={styles.price}>
                <h3>:قیمت</h3>
                <h3>۴۳۷/۰۰۰</h3>
              </div>
              <button>
                <CiSquarePlus />
                افزودن به سبد خرید
              </button>
            </div>
            <div className={styles.items2}>
              <img src="/images/3.png" />
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                باکس حمل سگ و گربه
              </h4>
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                سایز ۳ پانیتو
              </h4>
              <div className={styles.price}>
                <h3>:قیمت</h3>
                <h3>۴۳۷/۰۰۰</h3>
              </div>
              <button>
                <CiSquarePlus />
                افزودن به سبد خرید
              </button>
            </div>
            <div className={styles.items2}>
              <img src="/images/4.png" />
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                غذای گربه مفید پریمیوم
              </h4>
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                (۴ کیلوگرم)
              </h4>
              <div className={styles.price}>
                <h3>:قیمت</h3>
                <h3>۴۳۷/۰۰۰</h3>
              </div>
              <button>
                <CiSquarePlus />
                افزودن به سبد خرید
              </button>
            </div>
            <div className={styles.items2}>
              <img src="/images/5.png" />
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                سشوار حیوانات خانگی
              </h4>
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                (۴ کیلوگرم)
              </h4>
              <div className={styles.price}>
                <h3>:قیمت</h3>
                <h3>۴۳۷/۰۰۰</h3>
              </div>
              <button>
                <CiSquarePlus />
                افزودن به سبد خرید
              </button>
            </div>
            <div className={styles.items2}>
              <img src="/images/6.png" />
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                باکس حمل سگ و گربه{" "}
              </h4>
              <h4 style={{ fontWeight: "400", fontSize: "18px" }}>
                سایز ۳ پانیتو
              </h4>
              <div className={styles.price}>
                <h3>:قیمت</h3>
                <h3>۴۳۷/۰۰۰</h3>
              </div>
              <button>
                <CiSquarePlus />
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sixth}>
        <div className={styles.cart}>
          <div className={styles.cartimg}>
            <img src="/images/news1.png" />
            <div className={styles.cartdetails}>
              <div>
                <span style={{ fontWeight: "400", fontSize: "12px" }}>
                  <CiCalendarDate />
                  منتشر کننده
                </span>
                <p style={{ fontWeight: "400", fontSize: "12px" }}>آرمان</p>
              </div>
              <div>
                <span style={{ fontWeight: "400", fontSize: "12px" }}>
                  <IoPersonOutline />
                  تاریخ
                </span>
                <p style={{ fontWeight: "400", fontSize: "12px" }}>
                  ۱۴۰۰/۰۲/۲۴
                </p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "30px", width: "339px" }}>
            نکات کلیدی درباره نگهداری سگ در آپارتمان های ایرانی
          </p>
          <span style={{ display: "flex", width: "339px", marginTop: "7px" }}>
            نگهداری از سگ تو همه مناطق دنیا داره رواج بیشتر و بیشتری پیدا می‌کنه
            و خب همون‌طور که ...
          </span>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartimg}>
            <img src="/images/news2.png" />
            <div className={styles.cartdetails}>
              <div>
                <span style={{ fontWeight: "400", fontSize: "12px" }}>
                  <CiCalendarDate />
                  منتشر کننده
                </span>
                <p style={{ fontWeight: "400", fontSize: "12px" }}>آرمان</p>
              </div>
              <div>
                <span style={{ fontWeight: "400", fontSize: "12px" }}>
                  <IoPersonOutline />
                  تاریخ
                </span>
                <p style={{ fontWeight: "400", fontSize: "12px" }}>
                  ۱۴۰۰/۰۲/۲۴
                </p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "30px", width: "339px" }}>
            13 تا از بهترین نژادهای سگ برای افراد مبتدی را بشناسید!
          </p>
          <span style={{ display: "flex", width: "339px", marginTop: "7px" }}>
            سگ‌ها می‌تونن بهترین دوست ما، هم‌بازی بچه‌هامون یا نگهبان خونه‌مون
            باشن. ولی برای ...
          </span>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartimg}>
            <img src="/images/news3.png" />
            <div className={styles.cartdetails}>
              <div>
                <span style={{ fontWeight: "400", fontSize: "12px" }}>
                  <CiCalendarDate />
                  منتشر کننده
                </span>
                <p style={{ fontWeight: "400", fontSize: "12px" }}>آرمان</p>
              </div>
              <div>
                <span style={{ fontWeight: "400", fontSize: "12px" }}>
                  <IoPersonOutline />
                  تاریخ
                </span>
                <p style={{ fontWeight: "400", fontSize: "12px" }}>
                  ۱۴۰۰/۰۲/۲۴
                </p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "30px", width: "339px" }}>
            3 روش ساده برای آموزش فرمان نخور به سگ، که همه باید بدانند.
          </p>
          <span style={{ display: "flex", width: "339px", marginTop: "7px" }}>
            هر سگی باید یاد بگیره که از روی زمین چیزی نخوره چون این کار می‌تونه
            کلی دردسر ایجاد کنه، از ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
