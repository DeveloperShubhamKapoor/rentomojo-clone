import React, { useEffect, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import {IoIosArrowDroprightCircle} from 'react-icons/io';
import styles from "../styles/cart.module.css";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  console.log(cartData);
  useEffect(() => {
    fetch("http://localhost:8080/cart")
      .then((res) => res.json())
      .then((res) => setCartData(res));
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.cart_container_main}>
        <div className={styles.order_summary_container}>
          <div className={styles.delivery_address_container}>
            <div className={styles.delivery_address_div}>
              <p className={styles.delivery_address_text_set}>
                Delivery Address
              </p>
              <p className={styles.set_address}>950/13 Aggarwal Mandi Delhi</p>
              <p className={styles.set_change_address_text}>Change <Icon color="red" marginTop="15px" as={IoIosArrowDroprightCircle}/></p>
            </div>
            <div>//delivery address image comes here</div>
          </div>
          <p style={{fontWeight:"500",paddingLeft:"6px"}}>Order Summary</p>
          <div className={styles.order_summary_div}>
            <div className={styles.payable_now_div}>
              <h3 className={styles.text_set}>Payable Now</h3>
              <p style={{fontSize:"16px",fontWeight:"500"}}>
                Refundable Deposit <span style={{marginLeft:"30%"}}>Amount</span>
              </p>
              <p style={{fontSize:"16px",fontWeight:"500"}}>
                Delivery Charges <span style={{marginLeft:"30%"}}>Amount</span>
              </p>
            </div>
            <div className={styles.monthly_payable_div}>
              <h3 className={styles.text_set}>Monthly Payable</h3>
              <p>
                Products Rent <span>Amount</span>
              </p>
              <p>
                GST <span>Amount</span>
              </p>
              <p>
                Total Monthly Rent <span>Amount</span>
              </p>
            </div>
          </div>
          <p style={{textAlign:"right",fontSize:"12px",fontWeight:"500",paddingTop:"10px",paddingRight:"10%"}}>Not to be paid now. Pay post usage every month.</p>
          <button>
            <div style={{ display: "flex" }}>
              <div>
                <p>Amount</p>
                <p>Payable Now</p>
              </div>
              <div>Proceed</div>
            </div>
          </button>
        </div>
        <div className={styles.cart_items_container}>
          {cartData.map((item) => (
            <div className={styles.product_container} key={item.id}>
              <div className={styles.title_img_div}>
                <div className={styles.set_product_img}>
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h4>
                    {item.title}{" "}
                    <span>
                      <Icon as={RiDeleteBin5Line} />
                    </span>
                  </h4>
                  <div style={{ display: "flex" }}>
                    <div>
                      <p>Rent</p>
                      <p>{item.planPrice}</p>
                    </div>
                    <div>
                      <p>Deposit</p>
                      <p>{item.refundable}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button>-</button>
                {quantity}
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
