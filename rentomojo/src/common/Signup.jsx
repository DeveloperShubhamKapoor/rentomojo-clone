
import { useEffect, useState } from 'react'
import styles from '../styles/login_signup.module.css'
import Navbar from './Navbar'
import logo from '../images/rentomojo_cat_login.jpeg'
import { useNavigate } from 'react-router-dom'

const initInfo={
  email:"",
  password:""
}
const initData={
  msg:"",
  signupSuccess:false
}
export const Signup=()=>{
  const [userSignup,setUserSignup] = useState(initInfo)
  const [isSignupSuccess,setIsSignupSuccess] = useState(initData)
  const navigate=useNavigate()

  const handleOnChange=(e)=>{
    const{name,value} = e.target
    setUserSignup({
      ...userSignup,
      [name]:value
    })
  }

  const handleOnClick=()=>{
    fetch("http://localhost:5500/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userSignup)
    })
    .then((res)=> res.json())
    .then((data)=>setIsSignupSuccess(data))
  }
  useEffect(()=>{
    if(isSignupSuccess.signupSuccess== true){
      navigate("/login")
    }
    
  })
  return (
    <div>
      <Navbar/>
      <div className={styles.container_main_signup}>
        <div className={styles.image_box}>
          <img src={logo} alt="login" />
        </div>
        <div className={styles.info_box}>
          <div className={styles.info_input_box}>
            <input type="text" placeholder='Enter Email' name="email"  onChange={handleOnChange}/>
            <br />
            <input type="password" placeholder='Enter Password' name="password" onChange={handleOnChange} />   
            <br />
            <button onClick={handleOnClick}>Register</button>
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
