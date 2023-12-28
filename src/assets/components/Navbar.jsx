import React from 'react'

import { AppBar, Box, IconButton, Toolbar, Typography,Button, Icon,Link} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


import { LINKS } from '../../constants';
import matteIcon from '../../img/icons/matte.png'
import FlexBetween from './FlexCenter';

import { Outlet } from 'react-router-dom';



const Navbar = () => {
  return (
    <Box backgroundColor={'#1E1E1E'}>
        
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
     <Box sx={{width:{xs:'30px',sm:'50px'}}}>
    <img src={matteIcon} alt="" width='100%' />
    </Box>
     

        <Toolbar   sx={{display:'flex',
                    justifyContent:'end',
                    alignItems:'center',
                    width:1,
                    p:0,
                    flexGrow:1
                    }}>
      

            <Box sx={{display:{xs:'none', sm:'flex',p:0}
               
                     }}>
                {LINKS.map((link,i)=>{
                    return(
                        <Box component='div' key={i} 
                        sx={{color:'white',width:'5rem'}}
                        >
                            <Link  underline="hover" className='link' href={link.path} sx={{fontSize:{sm:'0.8rem',md:'0.9rem', color:'#F3F8FF ', transition:'1s'}}}>
                            {link.name}
                            </Link>
                       
                        </Box>
                       
                    )
                })}
            </Box>

            <IconButton
            size='large'
            onClick={()=>{}}
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
