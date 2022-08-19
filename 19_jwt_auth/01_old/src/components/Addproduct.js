import React, { useState } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { addProducts } from "../config/Myservice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Addproduct() {
  const [state, setState] = useState({
    cname: "",
    pname: "",
    price: "",
    quantity: "",
    features: "",
    imagePath: "",
    errMsg: "",
  });

  const navigate = useNavigate();

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const postData = (event) => {
    event.preventDefault();
    if (state.imagePath != "") {
      if (
        state.imagePath.type === "image/png" ||
        state.imagePath.type === "image/jpg" ||
        state.imagePath.type === "image/jpeg"
      ) {
        //when we send data with attachment then we use FormData property
        let formData = new FormData();
        formData.append("cname", state.cname);
        formData.append("pname", state.pname);
        formData.append("price", state.price);
        formData.append("quantity", state.quantity);
        formData.append("features", state.features);
        formData.append("attach", state.imagePath);
        addProducts(formData).then((res) => {
          if (res.data.err == 0) {
            Swal.fire(res.data.msg);
            navigate("/dashboard/products");
          }
          if (res.data.err == 1) {
            setState({ ...state, errMsg: res.data.msg });
          }
        });
      } else {
        setState({ ...state, errMsg: "Please select only Jpg or Png images" });
      }
    } else {
      setState({ ...state, errMsg: "Please select a image" });
    }
  };

  const upload = (event) => {
    if (event.target.files.length > 0) {
      let source = event.target.files[0];
      console.log(source);
      setState({ ...state, imagePath: source });
    }
  };

  return (
    <main>
      <Nav />
      <section className="row container mt-1">
        <aside className="col-md-4">
          <Sidebar />
        </aside>
        <aside className="col-md-8">
          <h3> Add Product</h3>
          {state.errMsg != "" && (
            <div className="alert alert-danger">{state.errMsg}</div>
          )}
          <form onSubmit={postData}>
            <div className="form-group">
              <label> Category</label>
              <select name="cname" className="form-control" onChange={handler}>
                <option value="">Select</option>
                <option value="samsung">Samsung</option>
                <option value="lava">Lava</option>
                <option value="iphone">Iphone</option>
              </select>
            </div>
            <div className="form-group">
              <label> Pname </label>
              <input
                type="text"
                name="pname"
                className="form-control"
                onChange={handler}
              />
            </div>
            <div className="form-group">
              <label> Price </label>
              <input
                type="text"
                name="price"
                className="form-control"
                onChange={handler}
              />
            </div>
            <div className="form-group">
              <label> Quantity </label>
              <input
                type="text"
                name="quantity"
                className="form-control"
                onChange={handler}
              />
            </div>
            <div className="form-group">
              <label> Features </label>
              <textarea
                name="features"
                className="form-control"
                onChange={handler}
              ></textarea>
            </div>
            <div className="form-group">
              <label> Image </label>
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={upload}
              />
            </div>
            <input
              type="submit"
              value="Add Product"
              className="btn btn-success"
            />
          </form>
        </aside>
      </section>
    </main>
  );
}
