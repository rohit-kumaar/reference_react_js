import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { getAllProducts, deleteProduct } from "../config/Myservice";
import { URL } from "../config/Url";
import Swal from "sweetalert2";

export default function Products() {
  const [proData, setProData] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      if (res.data.err == 0) {
        setProData(res.data.prodata);
      }
    });
  }, []);

  const delPro = (id) => {
    Swal.fire({
      title: "Do you want to delete product?",
      showDenyButton: true,
      confirmButtonText: "Ok",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteProduct(id).then((res) => {
          if (res.data.err == 0) {
            getAllProducts().then((res) => {
              if (res.data.err == 0) {
                setProData(res.data.prodata);
              }
            });
            Swal.fire("Deleted");
          }
        });
      }
    });
  };
  
  return (
    <main>
      <Nav />
      <section className="row container mt-1">
        <aside className="col-md-4">
          <Sidebar />
        </aside>
        <aside className="col-md-8">
          <h3> Products</h3>
          <table className="table">
            <tr>
              <th> S.no</th>
              <th> Category</th>
              <th> Product</th>
              <th> Price</th>
              <th> Quantity</th>
              <th> Features</th>
              <th> Image</th>
              <th> Actions</th>
            </tr>
            {proData.map((pro, index) => (
              <tr key={pro._id}>
                <td>{index + 1}</td>
                <td>{pro.cname}</td>
                <td>{pro.pname}</td>
                <td>{pro.price}</td>
                <td>{pro.quantity}</td>
                <td>{pro.features}</td>
                <td>
                  <img src={`${URL}${pro.image}`} width={50} height={50} />
                </td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-info"
                    onClick={() => delPro(pro._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </aside>
      </section>
    </main>
  );
}
