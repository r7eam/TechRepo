import { useState } from 'react';
import {  AppBar, Toolbar, Box, Button, IconButton, Drawer, List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  useTheme 
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar 
        position='static' 
        sx={{ backgroundColor: '#898989ff' }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}> 
            <Link to="/">
              <img 
                src="/tech hub logo-01.png" 
                alt="Tech Hub logo" 
                style={{ width: 150, height: 'auto', verticalAlign: 'middle' }} 
              />
            </Link>
          </Box>

          {isMobile ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: '#000000' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              <Button component={Link} to="/" sx={{ color: '#2D2D2D' }} startIcon={<HomeIcon />}>Home</Button>
              <Button component={Link} to="/services" sx={{ color: '#2D2D2D' }} startIcon={<MiscellaneousServicesIcon />}>Services</Button>
              <Button component={Link} to="/contact" sx={{ color: '#2D2D2D' }} startIcon={<ContactMailIcon />}>Contact</Button>
              <Button component={Link} to="/learned" sx={{ color: '#2D2D2D' }} startIcon={<SchoolIcon />}>What I Learned</Button>
              <Button component={Link} to="/posts" sx={{ color: '#2D2D2D' }} startIcon={<ArticleIcon />}>Posts</Button>
              <Button component={Link} to="/clock" sx={{ color: '#2D2D2D' }} startIcon={<AccessTimeIcon />}>Clock</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250, backgroundColor: '#b0adadff', height: '100%' }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <List>
            <ListItemButton component={Link} to="/"><ListItemIcon sx={{ color: '#000000' }}><HomeIcon /></ListItemIcon><ListItemText primary="Home" sx={{ color: '#2D2D2D' }} /></ListItemButton>
            <ListItemButton component={Link} to="/services"><ListItemIcon sx={{ color: '#000000' }}><MiscellaneousServicesIcon /></ListItemIcon><ListItemText primary="Services" sx={{ color: '#2D2D2D' }} /></ListItemButton>
            <ListItemButton component={Link} to="/contact"><ListItemIcon sx={{ color: '#000000' }}><ContactMailIcon /></ListItemIcon><ListItemText primary="Contact" sx={{ color: '#2D2D2D' }} /></ListItemButton>
            <ListItemButton component={Link} to="/learned"><ListItemIcon sx={{ color: '#000000' }}><SchoolIcon /></ListItemIcon><ListItemText primary="What I Learned" sx={{ color: '#2D2D2D' }} /></ListItemButton>
            <ListItemButton component={Link} to="/posts"><ListItemIcon sx={{ color: '#000000' }}><ArticleIcon /></ListItemIcon><ListItemText primary="Posts" sx={{ color: '#2D2D2D' }} /></ListItemButton>
            <ListItemButton component={Link} to="/clock"><ListItemIcon sx={{ color: '#000000' }}><AccessTimeIcon /></ListItemIcon><ListItemText primary="Clock" sx={{ color: '#2D2D2D' }} /></ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;