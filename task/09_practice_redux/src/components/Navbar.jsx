import { useSelector } from "react-redux/es/exports";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart {cart.length > 0 ? <label>({cart.length})</label> : 0}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
