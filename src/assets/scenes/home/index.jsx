import React from 'react'

import Navbar from '../../components/Navbar'

import BannerMain from '../../components/BannerMain'
import Main from '../../components/Home/Main'
import WeMe from '../../components/Home/WeMe'
import Porfolio from '../../components/Home/Porfolio'
import ProjectMind from '../../components/Home/ProjectMind'
import Footer from '../../components/Home/Footer'


function Home() {
  return (
    <>
    <Navbar/>
    <BannerMain/>
    <Main/>
    <WeMe/>
    <Porfolio/>
    <ProjectMind/>
    <Footer/>
    </>
  )
}

export default Home
