import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../common/Login'
import RightSidebar from '../common/RightSidebar'
import { Signup } from '../common/Signup'
import Cart from '../Pages/Cart'
import { Checkout } from '../Pages/Checkout'
import Electronics from '../Pages/Electronics'
import Homepage from '../Pages/Homepage'
import Laptop from '../Pages/Laptop'
import Laptops from '../Pages/Laptops'
import SmartDevice from '../Pages/SmartDevice'
import SmartDevices from '../Pages/SmartDevices'
import SmartPhone from '../Pages/SmartPhone'
import SmartPhones from '../Pages/SmartPhones'
import Tablet from '../Pages/Tablet'
import Tablets from '../Pages/Tablets'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/cart" element ={<Cart/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/electronics/smartphones" element={<SmartPhones/>}/>
            <Route path="/electronics/smartphones/:smartphoneid" element={<SmartPhone/>}/>
            <Route path="/electronics/smartdevices" element={<SmartDevices/>}/>
            <Route path="/electronics/smartdevices/:smartdeviceid" element={<SmartDevice/>}/>
            <Route path="/electronics/laptops" element={<Laptops/>}/>
            <Route path="/electronics/laptops/:laptopid" element={<Laptop/>}/>
            <Route path="/electronics/tablets" element={<Tablets/>}/>
            <Route path="/electronics/tablets/:tabletid" element={<Tablet/>}/>
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes