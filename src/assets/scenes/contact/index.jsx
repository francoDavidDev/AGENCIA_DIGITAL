import React from 'react'
import { Box } from '@mui/material'
import Footer from '../../components/homeComponents/Footer'
import Navbar from '../../components/Navbar'
import ProjectMind from '../../components/homeComponents/ProjectMind'
import Title from '../../components/Title'

const Contact = () => {
  return (
    <Box>   
       <Navbar/>
       <Box width={'100%'} sx={{backgroundColor:'#141414'}} pt='1rem'>   
      <Title title={'Contacto'} subitle={'Ponte en contacto y trabajemos junsot'} />
      </Box>
        <ProjectMind/>
        <Footer/>
      
    </Box>
  )
}

export default Contact
