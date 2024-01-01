import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar'
import WorksContent from '../../components/worksComponents'
import Footer from '../../components/homeComponents/Footer'


const Works = () => {

    const [w,setW] = useState(window.innerWidth)

    useEffect(()=>{
      const handleResize =()=>{
        setW(window.innerWidth)
      }
  
      window.addEventListener('resize', handleResize);
      return()=>{
        window.removeEventListener('resize', handleResize);
      }
  
     
    },[])



  return (
    <>
    <Navbar/>
 <WorksContent/>
 <Footer/>
    </>
  )
}

export default Works
