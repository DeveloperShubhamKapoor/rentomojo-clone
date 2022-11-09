import React, { useEffect, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbCurrencyRupee } from "react-icons/tb";
import styles from "../styles/cart.module.css";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  console.log(cartData)
  const token = JSON.parse(localStorage.getItem("token_rento_mojo"))
  
  const handleCartQuantityIncrease=(obj)=>{
    cartData.filter(function(item){
      if(item.id === obj.id){
        obj.quantity = obj.quantity+1
        obj.planPrice == obj.rent3 ? obj.planPrice = obj.rent3*obj.quantity :obj.planPrice = obj.rent6*obj.quantity
        obj.refundable = obj.refundable
      }
    })
    let data = obj
    patchData(obj,data)
    fetchData()
  }

  const handleCartQuantityDecrease=(obj)=>{
    cartData.filter(function(item){
      if(item.id === obj.id){
        obj.quantity = obj.quantity-1
        obj.planPrice == obj.rent3 ? obj.planPrice = obj.rent3*obj.quantity :obj.planPrice = obj.rent6*obj.quantity
        obj.refundable = obj.refundable*obj.quantity
      }
    })
    let data = obj
    patchData(obj,data)
    fetchData()
  }
  const fetchData=()=>{
    fetch("http://localhost:5500/cart",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        token:token
      }
    })
      .then((res) => res.json())
      .then((res) => setCartData(res.data));
  }
  const patchData=(obj,data)=>{
    fetch(`http://localhost:5500/cart/${obj.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
        token:token
      },
      body: JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
  }
  useEffect(() => {
    fetchData()
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
              <p className={styles.set_change_address_text}>
                Change{" "}
                <Icon
                  color="red"
                  marginTop="15px"
                  as={IoIosArrowDroprightCircle}
                />
              </p>
            </div>
            <div>//delivery address image comes here</div>
          </div>
          <p style={{ fontWeight: "500", paddingLeft: "6px" }}>Order Summary</p>
          <div className={styles.order_summary_div}>
            <div className={styles.payable_now_div}>
              <h3 className={styles.text_set}>Payable Now</h3>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>
                  Refundable Deposit
                </p>
                <p className={styles.pricing_info_text_set}>
                  <Icon as={TbCurrencyRupee} />
                  Amount
                </p>
              </div>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>Delivery Charges</p>
                <p className={styles.pricing_info_text_set}>
                  <Icon as={TbCurrencyRupee} />
                  Amount
                </p>
              </div>
            </div>
            <div className={styles.monthly_payable_div}>
              <h3 className={styles.text_set}>Monthly Payable</h3>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>Products Rent</p>
                <p className={styles.pricing_info_text_set}>
                  <Icon as={TbCurrencyRupee} />
                  Amount
                </p>
              </div>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>GST</p>
                <p className={styles.pricing_info_text_set}>
                <Icon as={TbCurrencyRupee} />
                  Amount</p>
              </div>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>
                  Total Monthly Rent
                </p>
                <p className={styles.pricing_info_text_set}>
                <Icon as={TbCurrencyRupee} />
                  Amount</p>
              </div>
            </div>
          </div>
          <p className={styles.extra_info_text}>
            Not to be paid now. Pay post usage every month.
          </p>
          <button className={styles.set_payment_btn}>
            <div style={{ display: "flex",justifyContent:"space-between" }}>
              <div className={styles.payable_amount_div} >
                <p className={styles.set_payment_btn_amount_set}><Icon as={TbCurrencyRupee} />Amount</p>
                <p className={styles.set_payment_btn_payable_now_text_set}>Payable Now</p>
              </div>
              <div className={styles.set_payment_btn_proceed_now_text}>Proceed</div>
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
                <div style={{paddingLeft:"5px",padding:"8px"}}>
                  <h4>
                    {item.title}{" "}
                    <span>
                      <Icon as={RiDeleteBin5Line} />
                    </span>
                  </h4>
                  <div style={{ display: "flex",gap:"10px" }}>
                    <div className={styles.set_rent_refund_div}>
                      <p>Rent</p>
                      <p>{item.planPrice}</p>
                    </div>
                    <div className={styles.set_rent_refund_div}>
                      <p>Deposit</p>
                      <p>{item.refundable}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={()=>handleCartQuantityDecrease(item)}>-</button>
                {item.quantity}
                <button onClick={()=>handleCartQuantityIncrease(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
