import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import styles from "../styles/smartphones.module.css";
import RightSidebar from "../common/RightSidebar";
import { FilterContext } from "../context/FilterContext";

const initData = {
  id: "",
  title: "",
  img_full: "",
  rent3: "",
  rent6: "",
  refundable: "",
  quantity:1,
  img: "",
  description: [],
};
const Tablet = () => {
  const params = useParams();
  const [data, setData] = useState(initData);
  const { sliderValue } = useContext(FilterContext);

  useEffect(() => {
    fetch(`https://rentomojo-backend.up.railway.app/electronics/tablets/${params.tabletid}`)
      .then((res) => res.json())
      .then((res) => setData({...data,...res}));
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.smartphone_container_main}>
        <div className={styles.smartphone_info_container}>
          <div className={styles.image_container}>
            <img src={data.img_full} alt="" />
          </div>
          <div className={styles.why_rent_container}>
            <div className={styles.whys_rent_from_us}>Why rent from us?</div>
            <div className={styles.product_details_cont}>Product Details</div>
          </div>
          <div className={styles.covid_info_box}>
            <img
              src="https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png"
              alt=""
            />
            <p style={{ marginLeft: "15px" }}>
              <b>Safety precautions during COVID-19.</b> We’re taking additional
              steps and precautionary measures to protect our community from
              COVID-19
            </p>
          </div>
          <div className={styles.product_details_heading}>Product Details</div>
          <div className={styles.red_border}></div>
          <div className={styles.product_details}>
            <div className={styles.product_image_container}>
              <img src={data.img} alt="" />
            </div>
            <div className={styles.product_info_container}>
              <h3 style={{ fontWeight: "500", fontSize: "18px" }}>
                {data.title}
              </h3>
              <div className={styles.grey_border}></div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#a1a1a1",
                  marginBottom: "15px",
                }}
              >
                Here comes one of the best-selling flagship smartphones from
                Samsung, the Samsung Galaxy S10+. The Galaxy S10+ packs features
                that ease your everyday life and can be upgraded to the latest
                Android 11 that comes with Samsung One UI 3.0
              </p>
              <div className={styles.usage_description_cont}>
                <div>
                  <p>Safety & Usage</p>
                  <ul className={styles.safety_usage_list}>
                    <li>Avoid touching the laptop with dirty/ oily hands</li>
                    <li>Use a sturdy phone cover to keep it safe</li>
                    <li>Keep your phone locked to protect your data</li>
                  </ul>
                </div>
                <div className={styles.features_div}>
                  <p>Feature & Specs</p>
                  {data.description.map((item) => (
                    <ul className={styles.safety_usage_list}>
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className={styles.rental_info}>
                {sliderValue == 3 ? (
                  <p>
                    MONTHLY RENTAL:{" "}
                    <b style={{ color: "black" }}>{data.rent3}</b>
                  </p>
                ) : (
                  <p>
                    MONTHLY RENTAL:{" "}
                    <b style={{ color: "black" }}>{data.rent6}</b>
                  </p>
                )}
                <p>
                  DEPOSIT: <b style={{ color: "black" }}>{data.refundable}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right SideBar */}
        <RightSidebar data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Tablet;
