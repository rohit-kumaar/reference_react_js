import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "components/Copyright";
import RegistrationPageLogo from "components/RegistrationPageLogo";
import Button from "components/Button";
import ForgotPassword from "components/ForgotPassword";
import CheckBox from "components/CheckBox";
import { useNavigate } from "react-router-dom";
import { isAdmin, isLoggedIn, loginUser } from "services/service";
import { ROUTE_PATH } from "routes/publicRoutes";

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser(user)
      .then((result) => {
        if (!result.data.err) {
          localStorage.setItem("_token", result.data.token);
          isLoggedIn();
          isAdmin();
          navigate(ROUTE_PATH.Products);
        }

        if (result.data.err) {
          alert(result.data.msg);
        }
      })
      .catch((err) => {
        console.log(`Login Failed ${err}`);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo  */}
          <RegistrationPageLogo name=" Login" />
          {/* Form  */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            {/* Checkbox  */}
            <CheckBox />

            {/* Button  */}
            <Button name="Login" />

            {/* Forgot password? OR Don't have an account? Sign Up */}
            <ForgotPassword />
          </Box>
        </Box>
        {/* Copyright */}
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
