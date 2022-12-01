import { useEffect, useState } from 'react';
import styles from '../styles/login_signup.module.css';
import Navbar from './Navbar';
import logo from '../images/rentomojo_cat_login.jpeg';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
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
  const toast = useToast()
  const id = 'test-toast'
  const navigate = useNavigate()
  const handleChange=(e)=>{
    const {name,value} = e.target
    setUserLogin({
      ...userLogin,
      [name]:value
    })
  }
  const handleLogin=()=>{
    if(userLogin.email==""|| userLogin.password==""){
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Enter Complete Credentials",
          status: "error",
          position:"top",
          duration: 4000,
          isClosable: true,
        })
      }
    }
    else{
      fetch("https://rentomojo-backend.up.railway.app/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userLogin)
    })
    .then((res)=> res.json())
    .then((data)=>setIsLoginSuccess(data))
    }
  }
  useEffect(()=>{
    if(isLoginSuccess.msg!="" && isLoginSuccess.login==false){
      if (!toast.isActive(id)) {
        toast({
          id,
          title: isLoginSuccess.msg,
          status: "error",
          position:"top",
          width:"40%",
          duration: 4000,
          isClosable: true,
        })
      }
    }
    if(isLoginSuccess.login){
      localStorage.setItem("token_rento_mojo",JSON.stringify(isLoginSuccess.token))
      localStorage.setItem("userEmail",JSON.stringify(userLogin.email))
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Login Successfull",
          status: "success",
          position:"top",
          duration: 4000,
          isClosable: true,
        })
      }
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
