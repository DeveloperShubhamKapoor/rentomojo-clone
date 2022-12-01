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
  refundableTotal:"",
  totalAmount:"",
  quantity:1,
  img: "",
  description: [],
  planPrice: "",
};
const RightSidebar = ({ data }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(initData);
  const [res,setRes] = useState({})
  const [added, setAdded] = useState(false);
  const { sliderValue } = useContext(FilterContext);
  console.log("data",data)
  console.log("cartData",cartData)
  console.log(res)
  const loggedInToken = JSON.parse(localStorage.getItem("token_rento_mojo"))
  const handleCart = () => {
    if(loggedInToken){
      fetch("https://rentomojo-backend.up.railway.app/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token:loggedInToken
        },
        body: JSON.stringify(cartData)
      })
        .then((res) => res.json())
        .then((res) => setRes(res))
    } 
    else{
      toast({
        title: "User is not Logged In",
        status: "error",
        position:"bottom-right",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  const handleRedirect = () => {
    navigate("/electronics/smartphones");
  };
  const handleRedirectCart = () => {
    navigate("/cart");
  };
    useEffect(()=>{
    if(res.authorized==false){
      toast({
        title: "Session Expired! Login Again",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      })
      navigate("/login")
    }
    if(res.data){
      toast({
        title: "One Item added",
        position: "top",
        description: data.title,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setAdded(true)
      console.log(res);
    }  
  },[res])
  useEffect(() => {
    if(sliderValue==3){
      setCartData({ id:data.id,title:data.title,img_full:data.img_full,
        rent3:data.rent3,rent6:data.rent6,refundable:data.refundable,
        refundableTotal:data.refundable,quantity:data.quantity,totalAmount:data.rent3
        ,img:data.img ,description:data.description
        ,planPrice: data.rent3 });
      
    }
    if (sliderValue == 6) {
      setCartData({ id:data.id,title:data.title,img_full:data.img_full,
        rent3:data.rent3,rent6:data.rent6,refundable:data.refundable,
        refundableTotal:data.refundable,totalAmount:data.rent6,
        quantity:data.quantity,img:data.img ,description:data.description
        ,planPrice: data.rent6 });
      
    }  
  }, [sliderValue,data]);
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
