import React from 'react'
import { Box } from '@mui/system'
import {  Typography } from '@mui/material'
import escritorioOscuro from '../../img/banners/escritorioOscuro.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const BannerMain = () => {
  return (
    <Box height={450}  sx={{backgroundImage:`url(${escritorioOscuro})`,
                                      backgroundPosition:'center',
                                      backgroundSize:'cover',
                                      display:'flex',
                                      justifyContent:'start',
                                      alignItems:'center'  }}>
                                        
            <Box  height={1} m={1}  sx={{ ml:{sm:'2rem', md:'10rem'},
                   
                    display:'flex',
                    justifyContent:'center',
                    alignItems:{xs:'center', sm:'start'},
                    flexDirection:'column',
                    gap:{xs:6, sm:1},
                    maxWidth:'600px',
                    textAlign:{xs:'center',sm:'left'}
                   }} >
            <Typography variant='h4' color='#0CBCC0'  fontWeight='bold' sx={{fontSize:{xs:'1.8rem', sm:'1.5rem'},letterSpacing: '4px'}}>
                Matte
            </Typography>
            <Typography variant='h1' sx={{fontSize:{xs:'2rem', sm:'3rem'}}} fontWeight='bold'>
              TU AGENCIA DE <Box component={'span'} color='#0CBCC0'>  MARKETING  </Box> CREATIVO
            </Typography>
            <Box/>
            <Typography variant='p' sx={{fontSize:{xs:'0.8rem', sm:'1rem'}}} >
             Ayudamos a emprendedores a tener visilidad en la web con precios economicos
            </Typography>

               <Box sx={{display:'flex',
                alignItems:'center',
                justifyContent:'center', 
                gap:2,
                ml:2}}>
                  
                     
                </Box>    


            </Box>
     
    </Box>
  )
}

export default BannerMain
