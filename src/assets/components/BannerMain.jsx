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
            <Typography variant='h4' color='#065A5B'  fontWeight='bold' sx={{fontSize:{xs:'1.8rem', sm:'1.5rem'},letterSpacing: '4px'}}>
                Matte
            </Typography>
            <Typography variant='h1' sx={{fontSize:{xs:'2rem', sm:'3rem'}}} fontWeight='bold'>
              TU AGENCIA DE <Box component={'span'} color='#065A5B'>  MARKETING  </Box> CREATIVO
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
                   
                  <PlayArrowIcon  fontSize='large' sx={{border:'1px solid 1B29DA',
                                                        width:'2.5rem',
                                                        height:'2.5rem',
                                                        borderRadius:'60%',
                                                        background:'#065A5B',
                                                        cursor:'pointer'}}/>

                      <Box >
                          <Typography variant='h5' 
                          fontSize='1rem' fontWeight={'bold'}
                            sx={{letterSpacing: '4px'}}
                          >
                          About us
                          </Typography>
                          <Box width={'5.7rem'} height={'2px'} 
                          backgroundColor='#065A5B'>
                                
                          </Box>
                          <Typography variant='h6' mt='2px'   fontSize='0.7rem'>
                            click para el video
                          </Typography>
                      </Box>
                </Box>    


            </Box>
     
    </Box>
  )
}

export default BannerMain
