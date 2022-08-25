import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "components/Copyright";
import RegistrationPageLogo from "components/RegistrationPageLogo";
import Button from "components/Button";
import ForgotPassword from "components/ForgotPassword";
import CheckBox from "components/CheckBox";

const theme = createTheme();

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
