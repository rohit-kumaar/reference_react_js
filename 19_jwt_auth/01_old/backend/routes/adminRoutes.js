const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const jwtsecret = "9999777ggvv666nhhhhh";

//for upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
//end upload

const saltRounds = 10;
const router = express.Router();
const adminModel = require("../db/adminSchema");
const catModel = require("../db/categorySchema");
const proModel = require("../db/productSchema");
router.post("/adminlogin", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  adminModel.findOne({ email: email }, (err, data) => {
    if (err) {
      res.json({ err: 1, msg: "email or password is not correct" });
    } else if (data == null) {
      res.json({ err: 1, msg: "email or password is not correct" });
    } else {
      if (bcrypt.compareSync(password, data.password)) {
        let payload = { uid: email };
        let token = jwt.sign(payload, jwtsecret, { expiresIn: 360000 }); //generete token
        res.json({ err: 0, msg: "Login Successfull", token: token });
      } else {
        res.json({ err: 1, msg: "email or password is not correct" });
      }
    }
  });

  //insert data
  // const hash = bcrypt.hashSync(password, saltRounds);
  // let ins=new adminModel({email:email,password:hash});
  // ins.save((err)=>{
  //     if(err) { res.json({"err":1,"msg":"Not registered"})}
  //     else {
  //         res.json({"err":0,"msg":"Registerd Successfully"});
  //     }
  // })
});
router.post("/register", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  //insert data
  const hash = bcrypt.hashSync(password, saltRounds);
  let ins = new adminModel({ email: email, password: hash });
  ins.save((err) => {
    if (err) {
      res.json({ err: 1, msg: "Not registered" });
    } else {
      res.json({ err: 0, msg: "Registerd Successfully" });
    }
  });
});

router.post("/changepassword", (req, res) => {
  let op = req.body.op;
  let np = req.body.np;
  let uid = req.body.uid;
  adminModel.findOne({ email: uid }, (err, data) => {
    if (err) {
      res.json({ err: 1, msg: "Something went wrong" });
    } else if (data == null) {
      res.json({ err: 1, msg: "Something went wrong" });
    } else {
      if (bcrypt.compareSync(op, data.password)) {
        const hash = bcrypt.hashSync(np, saltRounds);
        adminModel.updateOne(
          { email: uid },
          { $set: { password: hash } },
          (err) => {
            if (err) throw err;
            else {
              res.json({ err: 0, msg: "Password Changed Successfully" });
            }
          }
        );
      } else {
        res.json({ err: 1, msg: "Op is not correct" });
      }
    }
  });
});

router.post("/addcategory", (req, res) => {
  let upload = multer({ storage: storage }).single("attach");
  upload(req, res, (err) => {
    if (err) {
      res.json({ err: 1, msg: "Some Uploading Error" });
    } else {
      let cname = req.body.cname;
      let description = req.body.description;
      let fname = req.file.filename;
      let ins = new catModel({
        name: cname,
        description: description,
        image: fname,
      });
      ins.save((err) => {
        if (err) {
          //delete upload image
          res.json({ err: 1, msg: "Category not added or already exists" });
        } else {
          res.json({ err: 0, msg: "Category Added" });
        }
      });
    }
  });
});

router.get("/fetchallcategory", (req, res) => {
  catModel.find({}, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json({ err: 0, catdata: data });
    }
  });
});

router.delete("/delcategory/:id", (req, res) => {
  let cid = req.params.id;
  catModel.deleteOne({ _id: cid }, (err) => {
    if (err) throw error;
    else {
      res.json({ err: 0, msg: "Category Deleted" });
    }
  });
});

router.get("/fetchcategorybyid/:id", (req, res) => {
  let id = req.params.id;
  catModel.findOne({ _id: id }, (err, data) => {
    if (err) throw err;
    else {
      res.json({ err: 0, catdata: data });
    }
  });
});

router.post("/addproducts", (req, res) => {
  let upload = multer({ storage: storage }).single("attach");
  upload(req, res, (err) => {
    if (err) {
      res.json({ err: 1, msg: "Some Uploading Error" });
    } else {
      let cname = req.body.cname;
      let pname = req.body.pname;
      let price = req.body.price;
      let quantity = req.body.quantity;
      let features = req.body.features;
      let fname = req.file.filename;
      console.log(req.body);
      let ins = new proModel({
        cname: cname,
        pname: pname,
        image: fname,
        price: price,
        quantity: quantity,
        features: features,
      });
      ins.save((err) => {
        if (err) {
          //delete upload image
          res.json({ err: 1, msg: "Product not added or already exists" });
        } else {
          res.json({ err: 0, msg: "Product Added" });
        }
      });
    }
  });
});

router.get("/getproducts", (req, res) => {
  proModel.find({}, (err, data) => {
    if (err) {
      res.json({ err: 1, msg: "Something went wrong" });
    } else {
      res.json({ err: 0, prodata: data });
    }
  });
});

router.delete("/delproduct/:id", (req, res) => {
  let pid = req.params.id;
  proModel.deleteOne({ _id: pid }, (err) => {
    if (err) {
      res.json({ err: 1, msg: "Something went wrong" });
    } else {
      res.json({ err: 0, msg: "Product Deleted" });
    }
  });
});

module.exports = router;
