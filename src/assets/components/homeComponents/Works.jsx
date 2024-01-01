import React from 'react'
import { Box, Typography } from '@mui/material'
import Carrousel from './Carrousel'

import FlexCenter from '../FlexCenter'



const Porfolio = () => {
  return (
    <FlexCenter height={'auto'}
    sx={{backgroundColor:'#282828',
     flexDirection:'column',
     pb:'8rem'
     }}>
  
 

        <Box sx={{display:'flex',
                  flexDirection:'column',
                  textAlign:'center',
                  mt:'4rem'}}>
            <Typography variant='h4' >
                MIS TRABAJOS
            </Typography>
            <Typography variant='p' fontSize={'0.9rem'} color={'#0CBCC0'}>
                ¡Hace click y miralos!
            </Typography>

         

        </Box>

            <Box sx={{mt:4, display:'flex',
             justifyContent:'center',
              alignItems:'center',
               flexDirection:'row',
                ml:'2rem',
                mr:'2rem'
               }} height='400px'

                width={'90%'}
                >
              <Carrousel/>
            </Box>

       
       
    </FlexCenter>
  )
}

export default Porfolio
