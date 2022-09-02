import React, { useEffect, useState } from "react";
import {
  delproduct,
  getAllProducts,
  getSearchProducts,
  isAdmin
} from "../config/Myservice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

export default function Products() {
  const [proData, setProData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getAllProducts().then((res) => {
      if (res.data.err == 0) {
        console.log(res.data);
        setProData(res.data.prodata);
      }
    });
  }, []);
  useEffect(() => {
    getSearchProducts(location.search).then((res) => {
      if (res.data.err == 0) {
        console.log(res.data);
        setProData(res.data.prodata);
      }
    });
  }, [location.search]);
  const delProduct = (id) => {
    if (window.confirm("Do u want to delete ?")) {
      delproduct(id).then((res) => {
        if (res.data.err == 0) {
          alert(res.data.msg);
          let data = proData.filter((pro) => pro._id != id);
          setProData(data);
        }
      });
    }
  };
  return (
    <div>
      <h2> Products</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {proData?.map((pro) => (
            <Grid item xs={4} key={pro._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={pro.imageURL}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {pro.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <small> {pro.category}</small>
                    <Typography> Price : {pro.price}</Typography>
                    <Typography> {pro.description}</Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add Cart</Button>
                  {isAdmin() && (
                    <Button size="small" onClick={() => delProduct(pro._id)}>
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
  );
}
