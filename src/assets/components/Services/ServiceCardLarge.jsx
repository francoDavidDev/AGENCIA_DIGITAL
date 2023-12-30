import React, { useEffect, useState } from 'react'
import { Box,Typography,List,Button } from '@mui/material'
import { SERVICES,WEB_PRICES } from '../../../constants';
import FlexCenter from '../FlexCenter';





const ServiceCardLarge = () => {
  const [w,setW] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize =()=>{
      setW(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);
    return()=>{
      window.removeEventListener('resize', handleResize);
    }

   
  },[])

    const [isActive, setIsActive]=useState(1);

    const handleClick=(index)=>{
      setIsActive(index)

      //console.log(isActive)
    }



  return (
    <Box 
    display={'grid'}
    gridTemplateColumns={ w <= 900 ? 'repeat(2,1fr)': 'repeat(6,1fr)'}
    gridAutoRows='200px'
    gap={'20px'}
    mb='5rem'
 
    >
      {WEB_PRICES.map((service,index)=>{
        return(
    <Box

          key={index}
        onClick={()=>handleClick(index)}
        component={'div'}
        
        gridColumn='span 3'
        gridRow='span 4'
        flexDirection='column'
        justifyContent='start'
        flex='1 1 100%'
            sx={{display:'flex',
              alignItems:'start',
                background:`${isActive === index? '#0DCACE' : '#282828' } `,
                border:`${isActive === index? 'none' : ' 1px solid #0DCACE' } `,
               cursor:'pointer',
               
              }}
            
            >
            
               
                    <Box  sx={{background:`${isActive === index? '#282828' : '#0CBCC0' } `,
                  margin:'auto', width:1, m: 0,pb:'1.5rem',pt:'1.5rem'}}  >

                          <Typography variant='h5' 
                          sx={{color:`${isActive === index? '#F4F4F4' : '#282828' } `}}
                          color={`${isActive === index? '#282828' : '#F4F4F4' } `} fontWeight={'bold'}  textAlign='center' >
                            {service.title}
                          </Typography>              
                                                   
                    </Box>      
                      <Typography variant='h3'
                      sx={{ textAlign:'center', width:1,m:0, fontWeight:'bold',pb:'1.5rem',pt:'1.5rem',background:`${isActive === index? '#06A9B8' : '#141414' } `}} 
                      
                      color={`${isActive === index? '#282828' : '#F4F4F4' } `} margin={'auto'} >
                              {service.price}
                      </Typography>
                            
                  
                        <Typography variant='p' textAlign='center'  width={1} fontWeight={'bold'}
                        color={`${isActive === index? '#282828' : '#F4F4F4' } `}
                         fontSize={'0.8rem'}
                          lineHeight={'20px'}    >
                          {service.description1.map((description)=>{
                            return(
                              
                              <List sx={{background:`${isActive === index? '#0CBCC0' : '#171717' } `}}>
                                
                              {description.d}
                              </List>
                              
                            )
                          })}
                       

                            {service.description2.map((description)=>{
                                                        return(
                                                          <List sx={{background:`${isActive === index? '#0DCACE' : '#242424' } `}}>
                                                          {description.d}
                                                          </List>
                                                          
                                                        )
                                                      })}

                            {service.description3.map((description)=>{
                                                        return(
                                                          <List sx={{background:`${isActive === index? '#0ED8DD' : '#2E2E2E' } `}}>
                                                          {description.d}
                                                          </List>
                                                          
                                                        )
                                                      })}
                                                      
                        </Typography>

                         <FlexCenter flexDirection={'column'} margin={'auto'} textAlign={'center'}
                         width={'90%'} gap={'1rem'}>                             
                        <Typography>
                        {service.informacion}
                        </Typography>
                        <Button sx={{background:`${isActive === index? '#2E2E2E' : '#0ED8DD' } `,
                        color:`${isActive === index? '#0ED8DD' : '#2E2E2E' } `,
                        p:'0.7rem'}} >
                          MAS INFORMACION
                        </Button>
                        </FlexCenter>
            </Box>
          
          
        )
      })}

</Box> 
  )
}

export default ServiceCardLarge
