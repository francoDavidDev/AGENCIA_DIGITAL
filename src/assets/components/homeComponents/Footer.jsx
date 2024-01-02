import React from 'react'
import { Typography } from '@mui/material'
import FlexCenter from '../FlexCenter'



const Footer = () => {
  return (
    <FlexCenter  flexDirection={'column'} 
    height={'auto'} 
    backgroundColor={'#141414'}

     gap={'1rem'}>
       


   
        <FlexCenter 
        backgroundColor='#1E1E1E'
         width={'100%'}
          sx={{
            p:'3px 0 3px 0',
            flexWrap:'wrap',
            textAlign:'center',
          }}>
            

          <Typography  
          sx={{margin:{xs:'auto',sm:'0 1rem 0 1rem'},fontSize:{xs:'0.8rem', sm:'1rem'}}}>
          Copyright. All rights reserved. 
          <Typography variant='span' color={'#0CBCC0'} ml='4px'>
              Terms & Conditions
            </Typography>
          </Typography>

        

        </FlexCenter>
    </FlexCenter>
   
  )
}

export default Footer
