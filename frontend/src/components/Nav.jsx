
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';

import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ bgcolor: 'black' }}>
          <Toolbar>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textShadow: '0 0 10px rgba(255, 255, 255, 0.9)', marginLeft:"30px",fontSize:"40px",fontFamily:'Poppins' }}>
              Who's Yours
            </Typography>
            {!isMobile && (
              <>
                <IconButton color="inherit" sx={{ marginRight: 2, '&:hover': { transform: 'scale(1.3)' } }}>
                 <Link to="/home" ><HomeIcon onClick={handleHomeClick}  style={{ color: "white", marginTop: "0" }}/></Link>
                </IconButton>

                <IconButton color="inherit" sx={{ marginRight: 2, '&:hover': { transform: 'scale(1.3)' } }}>
                 <Link to="/chat"> <ChatIcon style={{ color: "white", marginTop: "0" }} /></Link>
                </IconButton>

                <IconButton color="inherit" sx={{ marginRight: 2, '&:hover': { transform: 'scale(1.3)' } }}>
                  <Link to="/wishlistpage" style={{ color: "white", marginTop: "0" }}> <FavoriteIcon /></Link>
                </IconButton>
                
                <IconButton color="inherit" sx={{ marginRight: 2, '&:hover': { transform: 'scale(1.3)' } }}>
                  <Link to="/"> <AccountCircleIcon style={{ color: "white", marginTop: "0" }} /></Link>
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <List>
            <ListItem button component={Link} to="/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/chat">
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem button component={Link} to="/wishlistpage">
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Favourites" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
}


