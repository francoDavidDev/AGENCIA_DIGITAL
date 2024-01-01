import React from 'react'
import { Box,Button,Typography } from '@mui/material'
import FlexCenter from '../../components/FlexCenter'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'

const QuestionCorporative = () => {
  return (
    <Box backgroundColor='#141414' >
    <Box width={'90%'}

      display={'flex'} 
      flexDirection={'column'}
      margin={'auto'}
      pt={'5rem'}
      pb={'5rem'}
     

      >
      <Title title={'WEB CORPORATIVA'}  subtitle={'¿QUE ES UNA WEB CORPORATIVA?'} />
     
   
                  <FlexCenter sx={{flexDirection:'column' ,justifyContent:'space-around'}} height={'350px'} textAlign={'center'}>
                    <Typography >
                    Es un sitio web autoadministrable con varias secciones.

            
                    </Typography>
                    <Typography>
                    Es ideal para desarrollar la información de su empresa, los servicios o productos que ofrece, y demás información.                    </Typography>
                    <Typography>
                    podrá dividir su sitio web en secciones o botones tales como "quienes somos", "servicios", "galería", "contacto" entre otras opciones.                    </Typography>

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

export default QuestionCorporative
