import React,{useState, useEffect} from 'react'
import { Card, Button, Typography,CardActions, CardMedia, CardContent } from '@mui/material';

import Slider from 'react-slick';
 // Import css files
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { WORKS } from '../../../constants';
import { Box } from '@mui/system';

const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows:false,
    centerMode:true,
    centerPadding:'20x'
    
  };



const Carrousel = () => {

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


    if( w <= 590 ){
        settings.slidesToShow = 1,
        settings.centerPadding= '50px'
       }else if( w <= 700){
        settings.slidesToShow = 2,
        settings.centerPadding= '0px'
        settings.arrows=false
      }else if( w <= 800){
        settings.slidesToShow = 2,
        settings.centerPadding= '50px'
       
       }else if( w <= 920){
        settings.slidesToShow = 2,
        settings.centerPadding= '100px'
      
       }else{
        settings.slidesToShow = 3
        settings.centerPadding= '0px'
       }
  return (
    <Box width={'100%'}>
    <Slider {...settings} >
        {WORKS.map((work)=>{
            return(
                <Card component='div'
                key={work.title}
                sx={{height:400,
                minWidth:'250px' ,
                maxWidth:'300px' ,
                bgcolor:'#332B47',
                borderRadius:'0px',
                border:'solid  0.1rem #0CBCC0'
                   }}>
                    <CardMedia  sx={{height:220,backgroundImage:`url(${work.image})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    backgroundRepeat:'none'
                }}
                      
                    />
                    <CardContent>
                        <Typography color={'white'}>
                             {work.title}
                        </Typography>
                        <Typography  color={'white'}>
                            {work.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button  component='a' sx={{border:'solid 1px #0CBCC0 '}}>
                            <Typography variant='a' color={'white'} fontSize={'0.8rem'} letterSpacing={'1px'}>
                            Ver mas...
                            </Typography>
                         
                        </Button>
                    </CardActions>
                </Card>
            )
        })}
        </Slider>
    </Box>
  )
}

export default Carrousel
