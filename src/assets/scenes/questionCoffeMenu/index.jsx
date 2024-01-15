import React from 'react'
import { Box,Button,Typography } from '@mui/material'
import FlexCenter from '../../components/FlexCenter'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'

const questionGeneral = ({title, subtitle, p1,p2,pe}) => {
  return (
    <Box backgroundColor='#141414' >
    <Box width={'90%'}

      display={'flex'} 
      flexDirection={'column'}
      margin={'auto'}
      pt={'5rem'}
      pb={'5rem'}
     

      >
      <Title title={'LANDING PAGE'}  subtitle={'¿QUE ES UNA LANDING PAGE?'} />
     
   
                  <FlexCenter sx={{flexDirection:'column' ,justifyContent:'space-around'}} height={'350px'} textAlign={'center'}>
                    <Typography >
                    Es una página web sencilla que concentra toda su información relevante en una única sección.

            
                    </Typography>
                    <Typography>
                    Con una Landing Page los visitantes podrán encontrar rápidamente todo lo que necesitan de sus productos o servicios, y contactarse para adquirirlos.
                    </Typography>
                    <Typography>
                    Es la mejor opción para publicar en Google Ads debido a su agilidad y practicidad.
                    </Typography>

                     <Button   sx={{background:'#0ED8DD',color:'#2E2E2E', p:'0.7rem' } } >
                        <Link  to='/precios' className='link' >
                            <Typography sx={{textDecoration:'none'}}>
                                 Ver precio
                            </Typography>
                        
                          </Link>
                        </Button>
                  </FlexCenter>
      

    
                  <Box width={'3px'} height={'5rem'} backgroundColor='#0CBCC0' margin={'auto'} />   
      </Box>

    </Box>
  )
}

export default questionGeneral
