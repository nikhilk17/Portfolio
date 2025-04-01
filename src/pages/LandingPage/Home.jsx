import React from 'react'
import Home from '../../components/Home'
import FeaturedProjects from '../../components/FeaturedProjects'
import About from '../../components/About'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div className='bg-black'>
      <Home/>
      <FeaturedProjects/>
      <About/>
      <Footer/>
    </div>
  )
}

export default HomePage
