import React from 'react'
import { Box,Typography } from '@mui/material'

const Title = ({title,subtitle}) => {
  return (
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
        {title}
   
    </Typography>
    <Typography variant='p' fontSize={'0.7rem'} color={'#0CBCC0'}>
        {subtitle}
      </Typography>
 </Box>
  )
}

export default Title
