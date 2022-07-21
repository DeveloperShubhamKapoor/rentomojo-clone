import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from '../styles/homepage.module.css'

const CategoriesHomepage = () => {
  const navigate = useNavigate()
  function handleRoute(){
    navigate("/electronics")
  }
  return (
    <div>
        <div className={styles.categories_container}>
            <div className={styles.categories_card}>
              <p>Packages</p>
            </div>
            <div className={styles.categories_card}>
              <p>Furniture</p>
            </div>
            {/* <Link to="/electronics"> */}
              <div onClick={handleRoute} className={styles.categories_card}>
                <p>Electronics</p>
              </div>
            {/* </Link> */}
            <div className={styles.categories_card}>
              <p>Appliances</p>
            </div>
            <div className={styles.categories_card}>
              <p>Fitness</p>
            </div>
            <div className={styles.categories_card}>
              <p>WFH Essentials</p>
            </div>

        </div>
    </div>
  )
}

export default CategoriesHomepage