import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddProduct } from "../config/Myservice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const [state, setState] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    manufacturer: "",
    availableItems: "",
    imageURL: "",
  });
  const navigate = useNavigate();
  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const imghandler = (event) => {
    if (event.target.files.length > 0) {
      setState({ ...state, imageURL: event.target.files[0] });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      state.imageURL.type == "image/jpeg" ||
      state.imageURL.type == "image/jpg" ||
      state.imageURL.type == "image/png"
    ) {
      //if we send data to server with attachment we use FormData property
      let formData = new FormData();
      formData.append("name", state.name);
      formData.append("category", state.category);
      formData.append("price", state.price);
      formData.append("description", state.description);
      formData.append("manufacturer", state.manufacturer);
      formData.append("availableItems", state.availableItems);
      formData.append("attach", state.imageURL);
      postAddProduct(formData).then((res) => {
        if (res.data.err == 0) {
          alert(res.data.msg);
          navigate("/products");
        }
      });
    } else {
      alert("Only Jpg and Png Supported");
    }
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
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
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handler}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state.category}
                label="Age"
                name="category"
                onChange={handler}
              >
                <MenuItem value="mens">Mens</MenuItem>
                <MenuItem value="womens">Womens</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
              autoFocus
              onChange={handler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="description"
              type="description"
              id="description"
              autoComplete="description"
              onChange={handler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="manufacturer"
              label="manufacturer"
              name="manufacturer"
              autoComplete="manufacturer"
              autoFocus
              onChange={handler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="availableItems"
              label="availableItems"
              name="availableItems"
              autoComplete="availableItems"
              autoFocus
              onChange={handler}
            />
            <TextField
              type="file"
              margin="normal"
              required
              fullWidth
              id="uimage"
              name="file"
              autoComplete="Upload Image"
              autoFocus
              onChange={imghandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
