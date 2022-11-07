import { useEffect, useState } from 'react'
import styles from '../styles/login_signup.module.css'
import Navbar from './Navbar'
import logo from '../images/rentomojo_cat_login.jpeg'
import { useNavigate } from 'react-router-dom'
const initInfo ={
  email:"",
  password:""
}
const initLogin={
  msg:"",
  token:"",
  login:false
}
export const Login=()=>{
  const [userLogin,setUserLogin] = useState(initInfo)
  const [isLoginSuccess,setIsLoginSuccess] = useState(initLogin)
  const navigate = useNavigate()
  const handleChange=(e)=>{
    const {name,value} = e.target
    setUserLogin({
      ...userLogin,
      [name]:value
    })
  }
  const handleLogin=()=>{
    fetch("http://localhost:5500/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userLogin)
    })
    .then((res)=> res.json())
    .then((data)=>setIsLoginSuccess(data))
  }
  useEffect(()=>{
    if(isLoginSuccess.login){
      localStorage.setItem("token_rento_mojo",JSON.stringify(isLoginSuccess.token))
      localStorage.setItem("userEmail",JSON.stringify(userLogin.email))
      navigate("/")
    }

  },[isLoginSuccess])
  return (
    <div>
<Navbar/>
      <div className={styles.container_main_signup}>
        <div className={styles.image_box}>
          <img src={logo} alt="login" />
        </div>
        <div className={styles.info_box}>
          <div className={styles.info_input_box}>
            <input type="text" placeholder='Enter Email' onChange={handleChange} name='email' />
            <br />
            <input type="password" placeholder='Enter Password' onChange={handleChange} name='password' />   
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
