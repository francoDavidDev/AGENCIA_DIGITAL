import React,{useState,useEffect} from 'react'
import { Box } from '@mui/system'
import { Icon, IconButton, Typography } from '@mui/material'
import { SERVICES } from '../../../constants'
import ServiceCardLarge from './ServiceCardLarge'



const ServicesLarge = () => {
 

  return (
    
  <Box backgroundColor='#141414' >
    <Box width={'90%'}

      display={'flex'} 
      flexDirection={'column'}
      margin={'auto'}
      pt={'5rem'}
      pb={'5rem'}
     

      >
        <Box sx={{display:'flex', alignItems:'start', justifyContent:'start', pb:'3rem',flexDirection:'column',}} >
            <Typography variant='h4'  sx={{display:'flex',
             alignItems:'start', 
             justifyContent:'start',
             flexDirection:'row',
              pb:'0.5rem'
            }}>
                <Box width={'3rem'}
                 height={'2px'}
                  mt={'1.2rem'
                  } mr={'1rem'} 
                  backgroundColor='#0CBCC0'/> 
                SERVICIOS.
           
            </Typography>
            <Typography variant='p' fontSize={'0.7rem'} color={'#0CBCC0'}>
                NUESTROS SERVICIOS PARA CLIENTES
              </Typography>
         </Box>
     
   
                  <ServiceCardLarge/>
      

    
                  <Box width={'3px'} height={'5rem'} backgroundColor='#0CBCC0' margin={'auto'} />   
      </Box>

    </Box>
   
  )
}

export default ServicesLarge
