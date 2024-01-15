import React, { useState } from 'react'

import { AppBar, Box, IconButton, Toolbar, Typography,Button, Icon, Drawer} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


import { LINKS } from '../../constants';
import matteIcon from '../../img/icons/matte.png'
import FlexBetween from './FlexCenter';

import { Outlet,Link } from 'react-router-dom';
import NavListDrawer from './NavListDrawer';



const Navbar = () => {

    const [open,setOpen]=useState(false)

  return (
    <Box backgroundColor={'#1E1E1E'}>
        <Drawer open={open} anchor='right' onClose={()=>setOpen(false)} >
        <NavListDrawer />
        </Drawer>
      
    <AppBar 
    sx={{
        position:'static',
        background:'none',
    boxShadow:'none',
    zIndex:'999',
    left:'0px',
    top:'0px',
    display:'flex',
    alignItems:'center',
    flexDirection:'row'
  
}}  
    > 
     <Box sx={{width:1, ml:'1rem'}}>
        <Typography fontWeight={'bold'}>
            Visibilidad<Typography  variant='gap' color={'#0CBCC0'} >  Web</Typography>
        </Typography>
    </Box>
     

        <Toolbar   sx={{display:'flex',
                    justifyContent:'end',
                    alignItems:'center',
                    width:1,
                    p:0,
                    flexGrow:1
                    }}>
      

            <Box sx={{display:{xs:'none', sm:'flex',p:0,gap:'1rem'}
               
                     }}>
                {LINKS.map((link,i)=>{
                    return(
                        <Box component='div' key={i} 
                        sx={{color:'white',width:'5rem'}}
                        >
                            <Link  underline="hover" className='link' to={link.path} >
                                {/* los estilos estan en el index.css */}
                                <Typography >
                                {link.name}
                                </Typography>
                            
                            </Link>
                       
                        </Box>
                       
                    )
                })}
            </Box>

            <IconButton
            size='large'
            onClick={()=>setOpen(true)}
            sx={{display:{sm:'none',sx:'flex', color:'white'},
        }}
         
            >
            <MenuIcon/>
            </IconButton>
        </Toolbar>
<Outlet/>

    </AppBar>
    </Box>
  )
}

export default Navbar
