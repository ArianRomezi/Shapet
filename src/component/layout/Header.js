import React from "react";
import styles from "@/component/layout/Header.module.css";

import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegSquareCheck } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h2>LOGO</h2>
        <h2 style={{ fontWeight: "600", fontSize: "25px" }}>شاپت</h2>
      </div>
      <div className={styles.search}>
        <input placeholder="محصول مورد نظر رو جستجو کنید ..." />
        <div className={styles.svg}>
          <RiSearchLine />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infodetail}>
          <FaRegSquareCheck />
          <div className={styles.infodetails}>
            <p>ضمانت اصالت کالا</p>
            <span>100%تضمین اصالت</span>
          </div>
        </div>
        <div className={styles.infodetail}>
          <CiDeliveryTruck />
          <div className={styles.infodetails}>
            <p>ارسال رایگان</p>
            <span>تمامی خرید ها</span>
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <CiShoppingCart />
        <FaRegHeart />
        <IoPersonOutline />
      </div>
    </div>
  );
};

export default Header;
