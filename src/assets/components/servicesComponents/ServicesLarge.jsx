import React from 'react'
import { Box } from '@mui/system'


import ServiceCardLarge from './ServiceCardLarge'
import Title from '../Title'
import FlexCenter from '../FlexCenter'



const ServicesLarge = () => {
 

  return (
    
  <Box backgroundColor='#141414' >
    <Box width={'90%'}display={'flex'} flexDirection={'column'}margin={'auto'}pt={'5rem'}pb={'5rem'}>
   
    
                  <ServiceCardLarge/>

                
      <Box width={'3px'} height={'5rem'} backgroundColor='#0CBCC0' margin={'auto'} />   
      </Box>
    </Box>
   
  )
}

export default ServicesLarge
