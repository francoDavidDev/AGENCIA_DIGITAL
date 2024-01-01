import React, { useEffect, useState } from 'react'
import { Box,Typography } from '@mui/material'
import { SERVICES } from '../../../constants';
import { Link } from 'react-router-dom';


const ServiceCard = () => {
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
    gridTemplateColumns={ w <= 600 ? 'repeat(2,1fr)': 'repeat(6,1fr)'}
    gridAutoRows='200px'
    gap={'20px'}
    mb='5rem'
 
    >
      {SERVICES.map((service,index)=>{
        return(
    <Box
          key={index}
        onClick={()=>handleClick(index)}
        component={'div'}
        gridColumn='span 2'
        gridRow='span 1'
        flexDirection='column'
        justifyContent='space-between'
        flex='1 1 100%'
            sx={{display:'flex',
              alignItems:'start',
                background:`${isActive === index? '#0CBCC0' : '#282828' } `,
               cursor:'pointer',
             
              }}
            
            >
            
                   <Box  p='1rem 1rem 0rem 1rem'>
                    <img src={`${isActive === index? service.icon2 : service.icon } `} alt="" />
                   </Box>

                        <Typography variant='h5' 
                        color={`${isActive === index? '#282828' : '#F4F4F4' } `}
                        fontSize={'1rem'} 
                        fontWeight={'bold'} 
                         p='0rem 0rem 1rem 1rem' >
                          {service.title}
                        </Typography>
                        <Typography variant='p'
                        color={`${isActive === index? '#282828' : '#F4F4F4' } `}
                         fontSize={'0.8rem'}
                          lineHeight={'20px'}   p='0rem 0rem 2rem 1rem'>
                          {service.description}

                          <Link to={'/precios'} className='link' >
                        <Typography variant='a' href='/precios' textAlign={'center'} ml='3px'>
                          Ver precios
                        </Typography>
                        </Link>
                        </Typography>   

                      
  
                <Box width='100%' backgroundColor='WHITE' height={'3px'} position={'relative'} top={'0px'}/>
                
            </Box>
          
        )
      })}

</Box> 
  )
}

export default ServiceCard
