import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { LINKS } from '../../constants'
import { Link } from 'react-router-dom'

const NavListDrawer = () => {
  return (
    <Box sx={{width:250, backgroundColor:'#1E1E1E', height:1}} >
        <nav>
            <List >
                {LINKS.map((link)=>{
                    return (
                        <Link to={link.path} className='link'>
                        <ListItemButton  >
                            <ListItemText variant='a'  primary={link.name} sx={{color:'white'}}/>
                            
                        </ListItemButton>
                        </Link>
                        
                      
                    )
                })}
                
            </List>
            <Divider/>
        </nav>
      
    </Box>
  )
}

export default NavListDrawer
