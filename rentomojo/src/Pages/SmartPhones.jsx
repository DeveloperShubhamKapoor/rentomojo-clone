import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/smartphones.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";
import LeftSidebar from "../common/LeftSidebar";

const SmartPhones = () => {
  const [smartphonesData, setSmartphonesData] = useState([]);
  const { sliderValue } = useContext(FilterContext);
  const [smartphoneChecked, setSmartphoneChecked] = useState(false);

  useEffect(() => {
    fetch("https://rentomojo-backend.up.railway.app/electronics/smartphones")
      .then((res) => res.json())
      .then((data) => setSmartphonesData(data));
    setSmartphoneChecked(true);
  }, []);
  return (
    <div>
      <LeftSidebar/>
      <div className={styles.smartphones_container}>
        {smartphonesData.map((item) => (
          <Link to={`/electronics/smartphones/${item.id}`}>
            <div className={styles.smartphones_card} key={item.title}>
              <img 
                className={styles.smartphone_card_img}
                src={item.img}
                alt=""
              />
              <h2 className={styles.smartphone_title}>{item.title}</h2>
              <hr style={{ width: "90%", margin: "auto" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                }}
              >
                {sliderValue == 3 ? (
                  <p className={styles.smartphone_price}>{item.rent3}/mo</p>
                ) : (
                  <p className={styles.smartphone_price}>{item.rent6}/mo</p>
                )}

                <span style={{ display: "flex" }}>
                  <Icon
                    marginTop={"6px"}
                    marginRight={"7px"}
                    as={TbTruckDelivery}
                  ></Icon>
                  <p>3 days</p>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmartPhones;
