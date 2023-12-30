import { useState } from 'react'

import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Home from './assets/scenes/home'
import About from './assets/scenes/about'

import Main from './assets/components/Home/ServicesSmall'
import Services from './assets/scenes/services'



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route path='*' element={<Navigate to='/home' replace />}  />
              <Route path='/home' element={<Home/>}/>

              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/services' element={<Services/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
