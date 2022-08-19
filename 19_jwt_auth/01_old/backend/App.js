const express = require("express");
const cors = require("cors");
const dbconnection = require("./connection");
const PORT = process.env.PORT || 8899;
const app = express();

dbconnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("uploads"));

//define api's routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

app.listen(PORT, (err) => {
  if (err) throw err;
  else {
    console.log(`Work on ${PORT}`);
  }
});
