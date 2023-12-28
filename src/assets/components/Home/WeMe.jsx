import React from 'react'
import { Box, Typography } from '@mui/material'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import FlexCenter from '../FlexCenter';
import FlexStart from './FlexStart';

const WeMe = () => {
    
    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
      


  return (
    <Box backgroundColor='#1E1E1E'   height='auto'>
  <Box width={'90%'}
   
 display={'flex'} 
 flexDirection={'column'}
 margin={'auto'}
 pt={'5rem'}


 >
        <FlexStart sx={{pb:'3rem',flexDirection:'column',}} >
            <Typography variant='h4'  sx={{
              display:'flex',
             flexDirection:'row',
              pb:'0.5rem'
            }}>
                <Box width={'3rem'} height={'2px'} mt={'1.2rem'} mr={'1rem'} backgroundColor='#0CBCC0'/> 
                SOBRE MI.
           
            </Typography>
            <Typography variant='p' fontSize={'0.7rem'} color='#0CBCC0'>
                MI FILOSIA Y EXPERIENCIA
            </Typography>
        </FlexStart>  

        <FlexCenter  flexDirection={'column'}>
                    <ImageList sx={{ width: '90%', height: 1}} variant="quilted" cols={4} gap={6} rowHeight={121}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
                </ImageList>
                
        <FlexCenter flexDirection={'row'} width={'90%'}height={'auto'}>
                <FlexStart width={1} flexDirection={'column'}gap={'1rem'}height={'8rem'} mr='1rem'           >  
                  
                    <Typography fontWeight={'bold'} variant='h5'sx={{fontSize:{xs:'0.9rem',sm:'1.1rem'}}}>
                    ¿Que hago?
                    </Typography>
                    <Typography variant='p'sx={{fontSize:{xs:'0.8rem',sm:'0.9rem'}}} >
                    Conecto tecnología y marketing con pasión.
                    </Typography>
                    
                   

                </FlexStart>
                <Box  width={'0.5rem'} backgroundColor='#0CBCC0' sx={{height:'8rem', position:'relative'}} />
                <FlexStart width={1} 
                flexDirection={'column'}
                gap={'1rem'}
                height={'8rem'}
              ml='1rem' 
              mr='1rem' 
             
                  >  
                  
                    <Typography fontWeight={'bold'}
                     variant='h5'
                     sx={{fontSize:{xs:'0.9rem',sm:'1.1rem'}}}
                     >
                    Mi filosofía
                    </Typography>
                    <Typography variant='p'
                       sx={{fontSize:{xs:'0.8rem',sm:'0.9rem'}}}
                     >
                   Trabajo meticuloso, compromiso total con el cliente.
                    </Typography>
                    
                   

                </FlexStart>
                <Box  width={'0.5rem'}backgroundColor='#0CBCC0' sx={{height:'8rem', position:'relative'}} />
                <FlexStart width={1} 

                flexDirection={'column'}
                gap={'1rem'}
                height={'8rem'}
                ml='1rem'  
                
             
                  >  
                  
                    <Typography fontWeight={'bold'} 
                     variant='h5'
                     sx={{fontSize:{xs:'0.9rem',sm:'1.1rem'}}}
                     >
                    Como trabajo
                    </Typography>
                    <Typography variant='p'
                       sx={{fontSize:{xs:'0.8rem',sm:'0.9rem'}}}
                     >
                    Trabajo al alcance de tu visión y necesidad de mi cliente.
                    </Typography>
                    
                   

                </FlexStart>
                  
        </FlexCenter>
        <Box  width={'3px'}
        backgroundColor='#0CBCC0' 
        sx={{height:'5rem',  position:'relative', mt:'6rem', mb:'4rem'}}
         />

        </FlexCenter>

     



    </Box>
    </Box>
  )
}

export default WeMe
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    cols: 2,
  },

 

];