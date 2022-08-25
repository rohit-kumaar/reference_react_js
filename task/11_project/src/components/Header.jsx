import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "routes/publicRoutes";

function Header() {
  const navigation = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
            Apna Business
          </Typography>
          <Button color="inherit" onClick={() => navigation(ROUTE_PATH.Login)}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigation(ROUTE_PATH.SignUp)}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
