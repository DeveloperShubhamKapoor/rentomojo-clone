import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { ImCart } from "react-icons/im";
import SliderComp from "../common/SliderComp";
import styles from "../styles/smartphones.module.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const SmartPhone = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [display, setDisplay] = useState("none");
  console.log("data", data);
  const [description, setDescription] = useState([]);
  const handleOnClick = () => {
    console.log("clocked");
    setDisplay(" ");
  };
  console.log("params", params);
  useEffect(() => {
    fetch(`http://localhost:8080/smartphones/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.alert_dialog_box}>
        <Alert display={display} status="success" variant="left-accent">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      </div>

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
              <img src={data.img_full} alt="" />
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
                <div>
                  <p>Feature & Specs</p>
                  {description.map((item) => (
                    <ul className={styles.safety_usage_list}>
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className={styles.rental_info}>
                <p>
                  MONTHLY RENTAL: <b style={{ color: "black" }}>{data.rent3}</b>
                </p>
                <p>
                  DEPOSIT: <b style={{ color: "black" }}>{data.refundable}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right SideBar */}
        <div className={styles.price_info_container}>
          <h4>{data.title}</h4>
          <div className={styles.info_strip}>
            <p>How long do you want to rent this for? (months) </p>
          </div>
          <div className={styles.slider_rent}>
            <SliderComp />
          </div>
          <div className={styles.rent_info_box}>
            <div className={styles.rent_refund_box_info}>
              <div className={styles.rent_price_details}>
                <h2>
                  {" "}
                  <b>{data.rent3}</b> / mo{" "}
                </h2>
                <p style={{ fontSize: "10px", color: "grey" }}>Monthly Rent</p>
              </div>
              <div className={styles.refund_details}>
                <h2>
                  <b>{data.refundable}</b>
                </h2>
                <p style={{ fontSize: "10px", color: "grey" }}>
                  Refundable Deposit
                </p>
              </div>
            </div>
            <div className={styles.additional_info}>
              <p>7 days free trial</p>
              <p>Free relocation</p>
              <p>Free upgrades</p>
            </div>
          </div>
          <div className={styles.add_to_cart_btn_div}>
            <button onClick={handleOnClick} className={styles.add_to_cart_btn}>
              {" "}
              {ImCart} Book Your Plan
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmartPhone;
