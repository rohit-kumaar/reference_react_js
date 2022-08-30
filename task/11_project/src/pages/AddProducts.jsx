import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Copyright from "components/Copyright";
import RegistrationPageLogo from "components/RegistrationPageLogo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddProduct } from "services/service";

const theme = createTheme();

const AddProducts = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    manufacturer: "",
    availableItems: "",
    imageURL: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleImage = (event) => {
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
    <>
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
            {/* A component that is used to display the logo of the website. */}
            <RegistrationPageLogo name="Add Product" />
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
                onChange={handleChange}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state.category}
                  label="Age"
                  name="category"
                  onChange={handleChange}
                >
                  <MenuItem value="mens">Mens</MenuItem>
                  <MenuItem value="women">Women</MenuItem>
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
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                type="description"
                id="description"
                autoComplete="description"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="manufacturer"
                label="Manufacturer"
                name="manufacturer"
                autoComplete="manufacturer"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="availableItems"
                label="AvailableItems"
                name="availableItems"
                autoComplete="availableItems"
                onChange={handleChange}
              />
              <TextField
                type="file"
                margin="normal"
                required
                fullWidth
                id="image"
                name="file"
                autoComplete="Upload Image"
                onChange={handleImage}
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

          {/* A component that is used to display the copyright information of the website. */}
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AddProducts;
