import { useState } from 'react'

import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Home from './assets/scenes/home'
import About from './assets/scenes/about'

import Main from './assets/components/homeComponents/ServicesSmall'
import Services from './assets/scenes/prices'
import Works from './assets/scenes/Works'
import QuestionLandingPage from './assets/scenes/questionLandingPage'
import QuestionCorporative from './assets/scenes/questionCorporative'
import Contact from './assets/scenes/contact'



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route path='*' element={<Navigate to='/home' replace />}  />
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/precios' element={<Services/>}/>
              <Route path='/works' element={<Works/>}/>
              <Route path='/contact' element={<Contact/>}/>




              <Route path='//questionLandingPage' element={<QuestionLandingPage/>}/>
              <Route path='/questionWebCorporativa' element={<QuestionCorporative/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
