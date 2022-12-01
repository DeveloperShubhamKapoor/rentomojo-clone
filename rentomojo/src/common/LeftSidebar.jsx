import { Button, Icon } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { FiFilter } from "react-icons/fi";
import SliderComp from "../common/SliderComp"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from "@chakra-ui/react";
  import styles from "../styles/smartphones.module.css";
import { FilterContext } from '../context/FilterContext';
import { FaLastfmSquare } from 'react-icons/fa';

const LeftSidebar = () => {
    const data = ["Smartphones", "Smart Devices", "Laptop", "Tablets"];
    const {category} = useContext(FilterContext);
    const [checked,setIsChecked] = useState(false)
  return (
    <div>
        <Navbar />
      {/* sidebar */}
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_box1}>
          <span style={{ display: "flex" }}>
            <Icon
              marginTop={"6px"}
              marginRight={"3px"}
              color={"#767676"}
              as={FiFilter}
            />
            <h3
              style={{ fontSize: "17px", color: "#767676", fontWeight: "400" }}
            >
              Filters
            </h3>
          </span>
          <button className={styles.btn_reset}>Reset</button>
        </div>
        <div className={styles.rental_tenure_box}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 style={{ fontSize: "15px" }}>CHOOSE RENTAL TENURE</h5>
            <Popover placement="top-start">
              <PopoverTrigger>
                <Button size={"100px"} className={styles.set_info_btn}>
                  i
                </Button>
              </PopoverTrigger>
              <PopoverContent color="white" bg="blue.800">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Longer tenures have lower monthly rent. At the end of your
                  minimum rental period, you can keep renting for the same price
                  for as long as you want. In case you return the item before
                  the chosen tenure is over, you will be asked to pay a minimal
                  early closure charges.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <SliderComp />
          </div>
        </div>
        <div className={styles.product_type_container}>
          <h4>PRODUCT TYPE</h4>
          {data.map((item) => (
            <div className={styles.product_type_set}>
              { item.trim().replace(" ","").toLowerCase()== category?<input type="checkbox" checked={true} />:<input type="checkbox" checked={false}/>}
              <p className={styles.product_set}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar