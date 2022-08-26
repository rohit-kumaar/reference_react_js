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
import { doLogout, isAdmin, isLoggedIn } from "services/service";

function Header() {
  const navigate = useNavigate();
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

          {!isLoggedIn() && (
            <>
              <Button
                color="inherit"
                onClick={() => navigate(ROUTE_PATH.Login)}
              >
                Login
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate(ROUTE_PATH.SignUp)}
              >
                Sign Up
              </Button>
            </>
          )}

          {isLoggedIn() && (
            <>
              <Button color="inherit" onClick={() => navigate(ROUTE_PATH.Home)}>
                Home
              </Button>
            </>
          )}

          {isLoggedIn() && isAdmin() && (
            <>
              <Button
                color="inherit"
                onClick={() => navigate(ROUTE_PATH.AddProducts)}
              >
                Add Product
              </Button>
            </>
          )}

          {isLoggedIn() && (
            <>
              <Button color="inherit" onClick={() => navigate(ROUTE_PATH.Cart)}>
                Cart
              </Button>
              <Button color="inherit" onClick={() => doLogout()}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
