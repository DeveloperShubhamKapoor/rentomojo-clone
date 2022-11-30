
import { useEffect, useState } from 'react';
import styles from '../styles/login_signup.module.css';
import { useToast } from '@chakra-ui/react';
import Navbar from './Navbar';
import logo from '../images/rentomojo_cat_login.jpeg';
import { useNavigate } from 'react-router-dom';

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
  const toast = useToast()
  const id = 'test-toast'
  const navigate=useNavigate()

  const handleOnChange=(e)=>{
    const{name,value} = e.target
    setUserSignup({
      ...userSignup,
      [name]:value
    })
  }

  const handleOnClick=()=>{
    if(userSignup.email==""|| userSignup.password==""){
      if (!toast.isActive(id)) {
        toast({
          id,
          size:"80px",
          title: "Enter Complete Credentials",
          status: "error",
          position:"top",
          duration: 4000,
          isClosable: true,
        })
      }
    }
    else{
      fetch("https://rentomojo-backend.up.railway.app/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userSignup)
      })
      .then((res)=> res.json())
      .then((data)=>setIsSignupSuccess(data))
    }
  }
  useEffect(()=>{

    if(isSignupSuccess.msg!="" && isSignupSuccess.signupSuccess==false){
      if (!toast.isActive(id)) {
        toast({
          id,
          title: isSignupSuccess.msg,
          status: "error",
          position:"top",
          width:"40%",
          duration: 4000,
          isClosable: true,
        })
      }
    }
    if(isSignupSuccess.signupSuccess== true){
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Signup Successfull",
          status: "success",
          position:"top",
          width:"40%",
          duration: 4000,
          isClosable: true,
        })
      }
      navigate("/login")
    }

    
  },[isSignupSuccess])
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
