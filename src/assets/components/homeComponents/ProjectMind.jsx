import React,{useEffect,useState} from 'react'
import { Box, IconButton,Button, Typography } from '@mui/material'

import video from '../../../video/estrecharManos.mp4'
import FlexCenter from '../FlexCenter'
import Link from '@mui/material/Link'

import { ICONS_LINKS } from '../../../constants';

const ProjectMind = () => {

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
    <FlexCenter height={'100vh'}
    p={'2rem 0 4rem 0'} 
    flexDirection={'column'}
    backgroundColor={'rgba(46, 45, 45, 0.7)'}
     sx={{
                            justifyContent:'space-between',
                            gap:'3.5rem',
                          }}>
                            <Box   sx={{
                              position:'fixed',
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                              zIndex:-1,
                              overflow: 'hidden',
                              
                            }}>
                            {/* los estilos del video estan en el css */}
                                <video 
                                  className='video'
                                autoPlay
                                loop
                                muted
                                 type="video/mp4"
                            
                              
                                 >
                                  <source src={video}  />

                                 </video>
                           
                            </Box>

                            <Box  width={'3px'}
        backgroundColor='#0CBCC0' 
        sx={{height:'5rem',  position:'relative'}}
         />

            <FlexCenter sx={{gap:'2rem'}}>
                {ICONS_LINKS.map((icon)=>{
                    return(
                      <Link href={icon.path} target='_blank'>
                        <Button   key={icon.name} sx={{borderRadius:'50%', border:'1px solid #0CBCC0'}}>
                        <IconButton color='white'   >
                         
                          <img src={icon.name} alt="" />
                        
                         
                        </IconButton>
                     </Button>
                     </Link>
                    )
                })}
               
                
            </FlexCenter>

             <Typography>
                    ¿Tienes algun proyecto en mente?
             </Typography>
             <Link className='link' target='_blank' href='https://www.instagram.com/franco_david_66/'>

             <Button sx={{border:'solid 1px #0CBCC0', borderRadius:0}}>
                <Typography p={1} color={'#0CBCC0'} >
                Hacer consulta
                 
                
      
                </Typography>
             </Button>
             </Link>
             <Typography>
                    www.MatteAgenciaDigital.com
             </Typography>
                                
    </FlexCenter>
  )
}

export default ProjectMind
