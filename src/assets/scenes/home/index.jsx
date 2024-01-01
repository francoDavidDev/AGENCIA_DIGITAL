import React from 'react'

import Navbar from '../../components/Navbar'

import BannerMain from '../../components/BannerMain'
import ServicesSmall from '../../components/homeComponents/ServicesSmall'
import Works from '../../components/homeComponents/Works'
import ProjectMind from '../../components/homeComponents/ProjectMind'
import Footer from '../../components/homeComponents/Footer'


function Home() {
  return (
    <>
    <Navbar/>
    <BannerMain/>
    <ServicesSmall/>


    <ProjectMind/>
    <Footer/>
    </>
  )
}

export default Home
