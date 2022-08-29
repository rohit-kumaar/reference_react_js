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
import { postAddProduct } from "services/service";

const theme = createTheme();

const AddProducts = () => {
  const [product, setProduct] = useState({
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
    setProduct({ ...product, [name]: value });
  };

  const handleImage = (event) => {
    if (event.target.files.length > 0) {
      setProduct({ ...product, imageURL: event.target.files[0] });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      product.imageURL.type == "image/jpeg" ||
      product.imageURL.type == "image/jpg" ||
      product.imageURL.type == "image/png"
    ) {
      //if we send data to server with attachment we use FormData property
      let formData = new FormData();
      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("manufacturer", product.manufacturer);
      formData.append("availableItems", product.availableItems);
      formData.append("attach", product.imageURL);
      postAddProduct(formData).then((res) => {
        console.log(res.data);
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
            {/* It's a component that renders a logo. */}
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
                  value={product.category}
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
                label="description"
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
                label="manufacturer"
                name="manufacturer"
                autoComplete="manufacturer"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="availableItems"
                label="availableItems"
                name="availableItems"
                autoComplete="availableItems"
                onChange={handleChange}
              />
              <TextField
                type="file"
                margin="normal"
                required
                fullWidth
                id="uimage"
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

          {/* It's a component that renders a copyright notice. */}
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AddProducts;
