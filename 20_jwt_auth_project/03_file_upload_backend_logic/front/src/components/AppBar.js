import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { doLogout, isAdmin, isLoggedIn } from '../config/Myservice';
export default function MyAppBar() {
  const navigate=useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {!isLoggedIn() && 
          <>
           <Button color="inherit" onClick={()=> navigate("/")}>Login</Button>
          <Button color="inherit" onClick={()=> navigate("/signup")}>Sign Up</Button>
          </>}
          {isLoggedIn() && 
          <>
           <Button color="inherit" onClick={()=> navigate("/products")}>Home</Button>
          </>
            }
             
          {isLoggedIn() && isAdmin() &&  
          <>
           <Button color="inherit" onClick={()=> navigate("/addproduct")}>Add Product</Button>
          </>
            }
           {isLoggedIn() && 
            <>
           <Button color="inherit" onClick={()=> navigate("/cart")}>Cart</Button>
           <Button color="inherit" onClick={()=> doLogout()}>Logout</Button>
          </>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
