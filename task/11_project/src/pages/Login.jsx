import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "components/Button";
import CheckBox from "components/CheckBox";
import Copyright from "components/Copyright";
import ForgotPassword from "components/ForgotPassword";
import RegistrationPageLogo from "components/RegistrationPageLogo";
import { useTitle } from "hooks/useTitle";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "routes/publicRoutes";
import { doLogout, isAdmin, isLoggedIn, loginUser } from "services/service";

const theme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useTitle("Login");

  // if (isLoggedIn()) {
  //   if (location.pathname === ROUTE_PATH.Login) {
  //     if (window.confirm("Do you want to logout ?")) {
  //       doLogout();
  //     }
  //   }
  // }

  // if (getToken()) {
  //   if (location.pathname == ROUTE_PATH.Login) {
  //     window.confirm("Do you want to logout ?");
  //     localStorage.removeItem("_token");
  //     navigate(ROUTE_PATH.Login);
  //     window.location.reload();
  //   }

  //   if (window.confirm("Do you want to logout ?") === false) {
  //     navigate(ROUTE_PATH.Home);
  //   }
  // }

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
          navigate(ROUTE_PATH.Home);
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
