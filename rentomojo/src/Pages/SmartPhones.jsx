import React, { useEffect, useState } from 'react'
import Navbar from '../common/Navbar'
import styles from "../styles/smartphones.module.css"
import {TbTruckDelivery} from "react-icons/tb"
import { Icon } from '@chakra-ui/react'

const SmartPhones = () => {
    const [smartphonesData,setSmartphonesData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/electronics")
        .then(res=>res.json())
        .then(data=>setSmartphonesData(data.smartphones))
    },[])
  return (
    <div>
        <Navbar/>
        <div className={styles.smartphones_container}>
            {smartphonesData.map((item)=>(
                <div className={styles.smartphones_card} key={item.title}>
                    <img className={styles.smartphone_card_img} src={item.img} alt="" />
                    <h2 className={styles.smartphone_title}>{item.title}</h2>
                    <hr style={{width:"90%",margin:"auto"}} />
                    <div style={{display:"flex",justifyContent:"space-around",marginTop:"10px"}}>
                        <p className={styles.smartphone_price}>{item.rent3}/mo</p>
                        <span style={{display:"flex"}}>
                            <Icon marginTop={"6px"} marginRight={"7px"} as={TbTruckDelivery}></Icon>
                            <p>3 days</p>
                        </span>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SmartPhones