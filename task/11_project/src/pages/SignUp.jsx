import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "components/Button";
import Copyright from "components/Copyright";
import RegistrationPageLogo from "components/RegistrationPageLogo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "routes/publicRoutes";
import { registerUser } from "services/service";

const theme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(user)
      .then((result) => {
        if (!result.data.err) {
          alert(result.data.msg);
          navigate(ROUTE_PATH.Login);
        }

        if (result.data.err) {
          alert(result.data.msg);
        }
      })
      .catch((err) => {
        console.log(`Sign Up ${err}`);
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
          {/* A component that is used to display the logo of the application. */}
          <RegistrationPageLogo name="Sign up" />

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
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact Number"
              name="contactNumber"
              autoComplete="contact number"
              onChange={handleChange}
            />

            {/* A component that is used to display the button. */}
            <Button name="Sign Up" />
          </Box>
        </Box>

        {/* A component that is used to display the copyright information.  */}
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
