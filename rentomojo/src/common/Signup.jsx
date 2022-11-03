
import { useState } from 'react'
import styles from '../styles/login_signup.module.css'
import Navbar from './Navbar'
import logo from '../images/rentomojo_cat_login.jpeg'
import { useNavigate } from 'react-router-dom'

const initInfo={
  email:"",
  password:""
}
export const Signup=()=>{
  const [userSignup,setUserSignup] = useState(initInfo)
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <div className={styles.container_main_signup}>
        <div className={styles.image_box}>
          <img src={logo} alt="login" />
        </div>
        <div className={styles.info_box}>
          <div className={styles.info_input_box}>
            <input type="text" placeholder='Enter Email' />
            <br />
            <input type="password" placeholder='Enter Password' />   
            <br />
            <button>Register</button>
            <div className={styles.login_info_box}>
                <p>Already Registered? Login Instead</p>
                <button onClick={()=>{navigate("/login")}}>Login</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
