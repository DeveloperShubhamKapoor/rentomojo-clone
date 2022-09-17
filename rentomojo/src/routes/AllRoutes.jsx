import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Electronics from '../Pages/Electronics'
import Homepage from '../Pages/Homepage'
import SmartDevice from '../Pages/SmartDevice'
import SmartDevices from '../Pages/SmartDevices'
import SmartPhone from '../Pages/SmartPhone'
import SmartPhones from '../Pages/SmartPhones'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/cart" element ={<Cart/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/electronics/smartphones" element={<SmartPhones/>}/>
            <Route path="/electronics/smart_devices" element={<SmartDevices/>}/>
            <Route path="/electronics/:id" element={<SmartPhone/>}/>
            <Route path="/electronics/:user_id" element={<SmartDevice/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes