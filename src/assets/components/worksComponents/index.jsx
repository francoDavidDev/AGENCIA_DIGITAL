import React from 'react'
import { Box,Typography,Card } from '@mui/material'
import FlexCenter from '../FlexCenter'
import { GYMS_WEBS } from '../../../constants'

const WorksContent = () => {
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
                TRABAJOS REALIZADOS.
           
            </Typography>
            <Typography variant='p' fontSize={'0.7rem'} color={'#0CBCC0'}>
                ¡VISITA LA PAGINA CON UN CLICK!
              </Typography>
         </Box>
     
   
         <FlexCenter sx={{alignItems:'start',
       gap:'3rem',
       flexWrap:'wrap' ,pb:'4rem',pt:'4rem'
       }} mt={'1rem'} height={'auto'}> 
  

  
              {GYMS_WEBS.map((web)=>{
                  return(
                      <Card 
                      className='cardWeb'
                      key={web.title}
                      component={'div'}
                  sx={{display:'flex',
                  alignItems:'start',
                  backgroundColor:'violet',
                  cursor:'pointer',
                  width:'350px',
                  height:'400px',
                  backgroundImage:`url(${web.image})`,
                  filter:'grayscale(40%)',
                  backgroundPosition:'start',
                  backgroundSize:'cover',
                  backgroundRepeat:'none',
                  transition:'0.5s'
                    }}
                      >

              
                    <Box 
                    className='contentCardWeb'
                     width={'100%'}
                     height={'100%'}
                     sx={{display:'none'}}>
                   
                    </Box>
                      
              

                      </Card>
                  )
              })}
          



        
  
          </FlexCenter>
      

    
                  <Box width={'3px'} height={'5rem'} backgroundColor='#0CBCC0' margin={'auto'} />   
      </Box>

    </Box>
  )
}

export default WorksContent
