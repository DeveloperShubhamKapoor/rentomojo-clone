import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Electronics from '../Pages/Electronics'
import Homepage from '../Pages/Homepage'
import SmartPhone from '../Pages/SmartPhone'
import SmartPhones from '../Pages/SmartPhones'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/electronics/smartphones" element={<SmartPhones/>}/>
            <Route path="/electronics/:title" element={<SmartPhone/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes