import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import CategoriesHomepage from '../components/CategoriesHomepage'

const Homepage = () => {
  return (
    <div>Homepage
        <Navbar/>
        <CategoriesHomepage/>
        <Footer/>
    </div>
  )
}

export default Homepage