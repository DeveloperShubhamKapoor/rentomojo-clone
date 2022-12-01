import React, { useEffect, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { TbCurrencyRupee } from "react-icons/tb";
import styles from "../styles/cart.module.css";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";

const initCartDetail = {
  refundable:"",
  totalAmount:"",
  delivery:99,
  gst:"",
  cartTotal:""
}

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  console.log(cartData.length)
  console.log(cartData)
  const [userCartDetail,setUserCartDetail] = useState(initCartDetail)
  const navigate = useNavigate()
  const [token,setToken] = useState(JSON.parse(localStorage.getItem("token_rento_mojo")))
  
  const handleCartQuantityIncrease=(obj)=>{
    cartData.filter(function(item){
      if(item.id === obj.id){
        obj.quantity = obj.quantity+1
        obj.planPrice == obj.rent3 ? obj.totalAmount = Number(obj.rent3)*obj.quantity :obj.totalAmount = Number(obj.rent6)*obj.quantity
        obj.refundableTotal = Number(obj.refundable)+Number(obj.refundableTotal)
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
        obj.planPrice == obj.rent3 ? obj.totalAmount = Number(obj.rent3)*obj.quantity :obj.totalAmount = Number(obj.rent6)*obj.quantity
        obj.refundableTotal = Number(obj.refundableTotal)-Number(obj.refundable)
      }
    })
    let data = obj
    patchData(obj,data)
    fetchData()
  }
  const fetchData=()=>{
    if(!token){
      return navigate("/")
    }
      fetch("https://rentomojo-backend.up.railway.app/cart",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          token:token
        }
      })
        .then((res) => res.json())
        .then((res) => setCartData(res.data))
        .catch((err)=>console.log(err))
        
  }
  const patchData=(obj,data)=>{
    fetch(`https://rentomojo-backend.up.railway.app/cart/${obj.id}`,{
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

  const handleDeleteItem=(obj)=>{
    fetch(`https://rentomojo-backend.up.railway.app/cart/${obj.id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        token:token
      },
      body: JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .then(()=>fetchData())
  }
  const getCartTotal=()=>{
     let refundableTotalCart = cartData.reduce((sum,element)=> sum + Number(element.refundableTotal),0)

     let productRentTotal = cartData.reduce((sum,element)=> sum+Number(element.totalAmount),0)

     let gst = Math.floor(productRentTotal*.12)

     let total = refundableTotalCart + userCartDetail.delivery

    setUserCartDetail({...userCartDetail,refundable:refundableTotalCart,totalAmount:productRentTotal,gst:gst,cartTotal:total})
  }
  useEffect( () => {
    fetchData()
  }, [token]);
  useEffect(()=>{
    getCartTotal()
  },[cartData])
  return (
    <>
    <Navbar/>
    <div className={styles.body}>
      {cartData.length==0 ? 
        <div className={styles.empty_cart_container}>
          <div>
              <img className={styles.empty_cart_image} src="https://www.rentomojo.com/public/images/error/no-cart.png" alt="" />
          </div>
          <div className={styles.empyt_cart_info}>
              <h3>No items in cart</h3>
              <p>Add a few items to your cart and come back here for an
                  express checkout process!</p>
              <button onClick={()=>navigate("/electronics")}>Browse Catalogue</button>
          </div>
      </div>
      :
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
                  {userCartDetail.refundable}
                </p>
              </div>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>Delivery Charges</p>
                <p className={styles.pricing_info_text_set}>
                  <Icon as={TbCurrencyRupee} />
                  99
                </p>
              </div>
            </div>
            <div className={styles.monthly_payable_div}>
              <h3 className={styles.text_set}>Monthly Payable</h3>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>Products Rent</p>
                <p className={styles.pricing_info_text_set}>
                  <Icon as={TbCurrencyRupee} />
                  {userCartDetail.totalAmount}
                </p>
              </div>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>GST</p>
                <p className={styles.pricing_info_text_set}>
                <Icon as={TbCurrencyRupee} />
                  {userCartDetail.gst}</p>
              </div>
              <div className={styles.pricing_info_div}>
                <p className={styles.pricing_info_text_set}>
                  Total Monthly Rent
                </p>
                <p className={styles.pricing_info_text_set}>
                <Icon as={TbCurrencyRupee} />
                  {userCartDetail.totalAmount+userCartDetail.gst}</p>
              </div>
            </div>
          </div>
          <p className={styles.extra_info_text}>
            Not to be paid now. Pay post usage every month.
          </p>
          <button className={styles.set_payment_btn}>
            <div style={{ display: "flex",justifyContent:"space-between" }}>
              <div className={styles.payable_amount_div} >
                <p className={styles.set_payment_btn_amount_set}><Icon as={TbCurrencyRupee} />{userCartDetail.cartTotal}</p>
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
                    <span style={{cursor:"pointer"}}>
                      <Icon onClick={()=>handleDeleteItem(item)} as={RiDeleteBin5Line} />
                    </span>
                  </h4>
                  <div style={{ display: "flex",gap:"10px" }}>
                    <div className={styles.set_rent_refund_div}>
                      <p>Rent</p>
                      <p>{item.totalAmount}</p>
                    </div>
                    <div className={styles.set_rent_refund_div}>
                      <p>Deposit</p>
                      <p>{item.refundableTotal}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {item.quantity==1 ?
                <button className={styles.btn_increase_decrease} disabled={true} onClick={()=>handleCartQuantityDecrease(item)}>-</button>
                :
                <button className={styles.btn_increase_decrease} onClick={()=>handleCartQuantityDecrease(item)}>-</button>
                 }
                {item.quantity}
                <button className={styles.btn_increase_decrease} onClick={()=>handleCartQuantityIncrease(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
    </>
  );
};

export default Cart;
