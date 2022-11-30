import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { FilterContext } from "../context/FilterContext";
import styles from "../styles/electronics.module.css";

const Electronics = () => {
  const navigate = useNavigate();
  const {setCategory} = useContext(FilterContext);
  const handleOnClick = (e) => {
    const { name } = e.target;
    setCategory(name)
    navigate(`/electronics/${name}`);
  };
  return (
    <div>
      <Navbar />
      <h2 className={styles.set_heading_electronics}>
        Browse by Electronics Type
      </h2>
      <div className={styles.set_line}></div>
      <div className={styles.categories_container}>
        <div onClick={handleOnClick} className={styles.card_container}>
          <div className={styles.category_card}>
            <img
              name="smartphones"
              className={styles.category_card_img}
              src="https://www.rentomojo.com/public/images/category/appliances-bg/smartphones_new.jpg"
            />
            <h4 className={styles.category_heading}>Smartphones</h4>
          </div>
        </div>
        <div className={styles.card_container}>
          <div onClick={handleOnClick} className={styles.category_card}>
            <img
              name="smartdevices"
              className={styles.category_card_img}
              src="https://www.rentomojo.com/public/images/category/appliances-bg/smart-devices-v1_new.jpg"
            />
            <h4 className={styles.category_heading}>Smart Devices</h4>
          </div>
        </div>
        <div className={styles.card_container}>
          <div onClick={handleOnClick} className={styles.category_card}>
            <img
              name="laptops"
              className={styles.category_card_img}
              src="https://www.rentomojo.com/public/images/category/appliances-bg/laptops_new_2.jpg"
            />
            <h4 className={styles.category_heading}>Laptop</h4>
          </div>
        </div>
        <div className={styles.card_container}>
          <div onClick={handleOnClick} className={styles.category_card}>
            <img
              name="tablets"
              className={styles.category_card_img}
              src="https://www.rentomojo.com/public/images/category/appliances-bg/tablets_new.jpg"
            />
            <h4 className={styles.category_heading}>Tablet</h4>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Electronics;
