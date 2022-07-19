import React from "react";

export default function Editproduct() {
  return (
    <div>
      <h2> Edit Product</h2>
      <form>
        <div className="form-group">
          <label> Pname</label>
          <input type="text" className="form-control" name="pname" />
        </div>
        <div className="form-group">
          <label> Price</label>
          <input type="text" className="form-control" name="price" />
        </div>
        <div className="form-group">
          <label> Quantity</label>
          <input type="text" className="form-control" name="quantity" />
        </div>
        <input type="submit" value="Add" className="btn btn-success" />
      </form>
    </div>
  );
}
