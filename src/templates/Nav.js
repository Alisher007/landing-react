import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, Container } from '@mui/material';

export default function NavLocal() {
  const [open, setOpen] = useState(false);
  const pstyle = 
	{
    color:"white", 
    textDecoration: 'none', 
    textShadow: '2px 2px 9px rgba(0, 0, 0, 0.9), 2px 2px 9px rgba(0, 0, 0, 1)' 
  }
  const blurstyle = 
	{
    backdropFilter:"blur(5px)", 
    backgroundColor: 'rgba(0, 0, 0, 0.08)', 
  }
  return (
    <Box sx={{ flexGrow: 1  }} >
      <AppBar position="absolute" color='transparent' elevation={0} style={blurstyle}>
        <Container maxWidth="lg">
          <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)} 
                sx={{ mr: 2, display: { lg: 'none', xs: 'block' } }}
              >
                <MenuIcon />
              </IconButton>
              <div style={{ flexGrow: 1  }}></div>
              <Typography variant="h6" component="div" sx={{ marginLeft:3, display: { lg: 'block', xs: 'none' }  }}>
                <Link href='/' sx={pstyle}>Home</Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{marginLeft:3, display: { lg: 'block', xs: 'none' }  }}>
                <Link href='/about' sx={pstyle}>About</Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{marginLeft:3, display: { lg: 'block', xs: 'none' }  }}>
                <Link href='/contact' sx={pstyle}>Contact</Link>
              </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <IconButton onClick={() => setOpen(false)} >
          <ChevronLeftIcon/>
          </IconButton>
        <Divider />
        <List>
          <ListItem>
          <Typography variant="h6" component="div">
            <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
          </Typography>
          </ListItem>
          <ListItem>
          <Typography variant="h6" component="div">
            <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
          </Typography>
          </ListItem>
          <ListItem>
          <Typography variant="h6" component="div">
            <Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>
          </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}