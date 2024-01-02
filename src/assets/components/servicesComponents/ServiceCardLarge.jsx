import React, { useEffect, useState } from 'react'
import { Box,Typography,List,Button, Icon, IconButton } from '@mui/material'
import { SERVICES,WEB_PRICES } from '../../../constants';
import FlexCenter from '../FlexCenter';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import question from '../../../img/icons/question36.png'




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
    gridAutoRows='auto'
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
        gridRow='span 1'
        flexDirection='column'
        justifyContent='start'
        flex='1 1 100%'
            sx={{display:'flex',
              alignItems:'start',
              backgroundColor:'#282828',
               cursor:'pointer',
               
              }}
            
            >
            
               
                    <Box  sx={{background:'#0CBCC0',
                  margin:'auto', width:1, m: 0,pb:'1.5rem',pt:'1.5rem'}}>
                    

                          <Typography variant='h4' 
                          sx={{color:'white'}}
                          color='F4F4F4' fontWeight={'bold'}  textAlign='center' >
                            
                            {service.title}
                         
                           
                          </Typography> 
                          <Link to={service.url} className='link'>  
                          <Typography  textAlign={'center'} fontWeight={'bold'} mt='1rem' variant='h5' >
                            <img src={question} alt="" />
                          </Typography>
                          </Link>
                          
                                                   
                    </Box>      
                      <Typography variant='h3'
                      sx={{ textAlign:'center', width:1,m:0, fontWeight:'bold',pb:'1.5rem',pt:'1.5rem'}} 
                      
                      color='#F4F4F4' margin={'auto'} >
                              {service.price}
                              
                      </Typography>
                            
                  
                        <Typography variant='p' textAlign='center'  width={1} fontWeight={'bold'}
                        color='#F4F4F4'
                         fontSize={'0.8rem'}
                          lineHeight={'20px'}    >
                          <Box  width={'90%'}  height={'2px'} margin={'auto'} backgroundColor='#0CBCC0'/>

                          {service.description1.map((description)=>{
                            return(
                              
                              <List >
                                
                             - {description.d}
                              </List>
                              
                            )
                          })}
                          <Box  width={'90%'}  height={'2px'} margin={'auto'} backgroundColor='#0CBCC0'/>
                       

                            {service.description2.map((description)=>{
                                                        return(
                                                          <>
                                                          
                                                          <List >
                                                        
                                                         
                                                         - {description.d}
                                                          
                                                          </List>
                                                     

                                                          </>
                                                          
                                                        )
                                                      })}
                              <Box  width={'90%'}  height={'2px'} margin={'auto'} backgroundColor='#0CBCC0'/>
                            {service.description3.map((description)=>{
                                                        return(
                                                          <List >
                                                       -   {description.d}
                                                          </List>
                                                          
                                                        )
                                                      })}
                              <Box  width={'90%'}  height={'2px'} margin={'auto'} backgroundColor='#0CBCC0'/>
                                                      
                        </Typography>

                         <FlexCenter flexDirection={'column'} margin={'auto'} textAlign={'center'}
                         width={'90%'} gap={'1rem'}>                             
                        <Typography>
                        {service.informacion}
                        </Typography>
                            <Button   variant="a" href='https://www.instagram.com/visibilidadweb/' target='_blank' sx={{ backgroundColor:'#0ED8DD', 
                            color:'black',
                            p:'0.7rem', m:'1rem'}} >
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
