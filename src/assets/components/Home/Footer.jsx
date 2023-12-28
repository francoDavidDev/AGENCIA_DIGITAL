import React from 'react'
import { Box, Typography } from '@mui/material'
import FlexCenter from '../FlexCenter'
import icon from '../../../img/icons/matte.png'
import { LINKS } from '../../../constants'

import { ICONS_LINKS } from '../../../constants'


const Footer = () => {
  return (
    <FlexCenter  flexDirection={'column'} 
    height={'auto'} 
    backgroundColor={'#141414'}
    p={'1rem 0 0rem 0'}
     gap={'1rem'}>
        <img src={icon} alt="" width={30} />


        <FlexCenter width={'80%'}

         height={'auto'}
         sx={{justifyContent:'space-between',
          flexWrap:'wrap',
        gap:'1rem'}}
         >
            {LINKS.map((link)=>{
                return(
                    <Typography fontSize={'0.8rem'}>
                        {link.name}
                    </Typography>
                )
            })}
        </FlexCenter>
        <FlexCenter  width={'30%'} sx={{justifyContent:'space-evenly'}}>
          {ICONS_LINKS.map((icon,index)=>{
            return(
              <Box key={index}>
                <img src={icon.name} alt="" width={'20px'}  />
              </Box>
            )
          })}
        </FlexCenter>

        <FlexCenter 
        backgroundColor='#1E1E1E'
         width={'100%'}
          sx={{justifyContent:'space-between',
            p:'3px 0 3px 0',
            
            flexWrap:'wrap',
            textAlign:'center'
          }}>

          <Typography  
          sx={{margin:{xs:'auto',sm:'0 1rem 0 1rem'},fontSize:{xs:'0.8rem', sm:'1rem'}}}>
          Copyright. All rights reserved.
          </Typography>
          <Typography 
          sx={{margin:{xs:'auto',sm:'0 1rem 0 1rem'},fontSize:{xs:'0.8rem', sm:'1rem'}}}>
          Terms & Conditions
          </Typography>

        </FlexCenter>
    </FlexCenter>
   
  )
}

export default Footer
