import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts, isAdmin } from "services/service";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      if (res.data.err == 0) {
        setProductData(res.data.prodata);
      }
    });
  }, []);

  const deleteAddedProduct = (id) => {
    if (window.confirm("Do you want to delete this product ?")) {
      deleteProduct(id).then((res) => {
        if (res.data.err == 0) {
          alert(res.data.msg);
          const data = productData.filter((product) => product._id != id);
          setProductData(data);
        }
      });
    }
  };
  
  return (
    <>
      <div>
        <h2> Products</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {productData?.map((product) => (
              <Grid item xs={4} key={product._id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.imageURL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      color="text.secondary"
                    >
                      <small> {product.category}</small>
                      <Typography component="p">
                        Price : {product.price}
                      </Typography>
                      <Typography component="p">
                        {product.description}
                      </Typography>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add Cart</Button>
                    {isAdmin() && (
                      <Button
                        size="small"
                        onClick={() => deleteAddedProduct(product._id)}
                      >
                        Delete
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Products;
