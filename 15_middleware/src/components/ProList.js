import { useDispatch } from "react-redux";

export default function ProList(props) {
  const dispatch = useDispatch();

  const addCart = (id) => {
    if (localStorage.getItem("mycart") != undefined) {
      let arr = JSON.parse(localStorage.getItem("mycart"));

      if (arr.includes(id)) {
        alert("Product Already added in cart");
      } else {
        arr.push(id);
        localStorage.setItem("mycart", JSON.stringify(arr));
        dispatch({ type: "UPDATE_CART", payload: arr });
        alert("Add Cart Successfully");
      }
    } else {
      let arr = [];
      arr.push(id);
      localStorage.setItem("mycart", JSON.stringify(arr));
      dispatch({ type: "UPDATE_CART", payload: arr });
      alert("Add Cart Successfully");
    }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.product.image}
        className="card-img-top"
        alt="..."
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.pname}</h5>
        <p className="card-text">Price : Rs.{props.product.price}</p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => addCart(props.product.id)}
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
}
