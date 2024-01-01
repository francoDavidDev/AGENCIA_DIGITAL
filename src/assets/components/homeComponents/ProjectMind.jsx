import React from 'react'
import { Box, IconButton,Button, Typography, Card } from '@mui/material'

import video from '../../../video/estrecharManos.mp4'
import FlexCenter from '../FlexCenter'
import { Link } from 'react-router-dom'

import { ICONS_LINKS } from '../../../constants';

const ProjectMind = () => {
  return (
    <FlexCenter height={600}
    p={'2rem 0 4rem 0'} 
    flexDirection={'column'}
    backgroundColor={'rgba(46, 45, 45, 0.7)'}
     sx={{
                            backgroundRepeat:'none',
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                            justifyContent:'space-between',
                            gap:'3.5rem',
                          }}>
                            <Card height='100%' sx={{
                              position:'fixed',
                              top:0,
                              left:0,
                              zIndex:-1,
                              
                            }}>
                            
                                <video 
                                autoPlay
                                loop
                                muted
                                 type="video/mp4"
                                 height={'200%'}>
                                  <source src={video}  />

                                 </video>
                           
                            </Card>

                            <Box  width={'3px'}
        backgroundColor='#0CBCC0' 
        sx={{height:'5rem',  position:'relative'}}
         />

            <FlexCenter sx={{gap:'2rem'}}>
                {ICONS_LINKS.map((icon)=>{
                    return(
                      <Link to={icon.path}>
                        <Button key={icon.name} sx={{borderRadius:'50%', border:'1px solid #0CBCC0'}}>
                        <IconButton color='white'>
                         
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

             <Button sx={{border:'solid 1px #0CBCC0', borderRadius:0}}>
                <Typography p={1} color={'#0CBCC0'} >
                  Hacer consulta
                </Typography>
             </Button>
             
             <Typography>
                    www.MatteAgenciaDigital.com
             </Typography>
                                
    </FlexCenter>
  )
}

export default ProjectMind
