import { useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ImCart } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";
import styles from "../styles/smartphones.module.css";
import SliderComp from "./SliderComp";

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
  planPrice: "",
};
const RightSidebar = ({ data }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(initData);
  const [added, setAdded] = useState(false);
  const { sliderValue } = useContext(FilterContext);
  console.log(sliderValue)
  const handleCart = () => {
    fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((res) => console.log("res", res));
    toast({
      title: "One Item added",
      position: "top",
      description: data.title,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setAdded(true);
  };
  const handleRedirect = () => {
    navigate("/electronics/smartphones");
  };
  const handleRedirectCart = () => {
    navigate("/cart");
  };
  useEffect(() => {
    if (sliderValue == 3) {
      setCartData({ ...data,planPrice: data.rent3 });
    } else {
      setCartData({ ...data, planPrice: data.rent6 });
    }
    // sliderValue == 3
    // ? setCartData({ ...data, planPrice: data.rent3 })
    // : setCartData({ ...data, planPrice: data.rent6 });
  }, [sliderValue]);
  console.log("cartdata", cartData);

  return (
    <div className={styles.price_info_container}>
      <div>
        <h4 className={styles.title_div}>{data.title}</h4>
        <div className={styles.info_strip}>
          <p>How long do you want to rent this for? (months) </p>
        </div>
        <div className={styles.slider_rent}>
          <SliderComp />
        </div>
        <div className={styles.rent_info_box}>
          <div className={styles.rent_refund_box_info}>
            <div className={styles.rent_price_details}>
              {sliderValue == 3 ? (
                <h2>
                  {" "}
                  <b>{data.rent3}</b> / mo{" "}
                </h2>
              ) : (
                <h2>
                  {" "}
                  <b>{data.rent6}</b> / mo{" "}
                </h2>
              )}
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
          {added ? (
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button
                onClick={handleRedirect}
                className={styles.browse_products}
              >
                Browse More
              </button>
              <button className={styles.view_cart} onClick={handleRedirectCart}>
                View Cart
              </button>
            </div>
          ) : (
            <button onClick={handleCart} className={styles.add_to_cart_btn}>
              {" "}
              {ImCart} Book Your Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
