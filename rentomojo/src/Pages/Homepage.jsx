import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import CarouselHomepage from '../components/CarouselHomepage'
import CategoriesHomepage from '../components/CategoriesHomepage'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <CarouselHomepage/>
        <CategoriesHomepage/>
        <Footer/>
    </div>
  )
}

export default Homepage