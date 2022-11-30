import { Icon } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from '../styles/homepage.module.css'
import {GoPackage} from 'react-icons/go'
import {MdOutlineKingBed} from "react-icons/md"
import {AiOutlineMobile} from "react-icons/ai"
import {GiWashingMachine} from "react-icons/gi"
import {IoIosBicycle} from "react-icons/io"
import {TbArmchair} from "react-icons/tb"

const CategoriesHomepage = () => {
  const navigate = useNavigate()
  function handleRoute(){
    navigate("/electronics")
  }
  return (
    <div>
        <div className={styles.categories_container}>
            <div onClick={handleRoute} className={styles.categories_card}>
              <Icon color={"#4ddfd2"} w={9} h={9} marginLeft={"35%"} marginTop={"13%"} as={AiOutlineMobile}/>
                <p style={{fontSize:"14px",marginLeft:"25%",marginTop:"2%"}}>Electronics</p>
            </div>
            <div className={styles.categories_card}>
              <Icon color={"#4ddfd2"} w={9} h={9} marginLeft={"35%"} marginTop={"13%"} as={GoPackage}/>
              <p style={{fontSize:"14px",marginLeft:"27%",marginTop:"2%"}}>Packages</p>
            </div>
            <div className={styles.categories_card}>
              <Icon color={"#4ddfd2"} w={9} h={9} marginLeft={"35%"} marginTop={"13%"} as={MdOutlineKingBed} />
              <p style={{fontSize:"14px",marginLeft:"28%",marginTop:"2%"}}>Furniture</p>
            </div>
            <div className={styles.categories_card}>
            <Icon color={"#4ddfd2"} w={9} h={9} marginLeft={"35%"} marginTop={"13%"} as={GiWashingMachine}/>
              <p style={{fontSize:"14px",marginLeft:"25%",marginTop:"2%"}}>Appliances</p>
            </div>
            <div className={styles.categories_card}>
            <Icon color={"#4ddfd2"} w={9} h={9} marginLeft={"35%"} marginTop={"13%"} as={IoIosBicycle}/>
              <p style={{fontSize:"14px",marginLeft:"30%",marginTop:"2%"}}>Fitness</p>
            </div>
            <div className={styles.categories_card}>
            <Icon color={"#4ddfd2"} w={9} h={9} marginLeft={"35%"} marginTop={"13%"} as={TbArmchair}/>
              <p style={{fontSize:"14px",marginLeft:"18%",marginTop:"2%"}}>WFH Essentials</p>
            </div>
        </div>
    </div>
  )
}

export default CategoriesHomepage