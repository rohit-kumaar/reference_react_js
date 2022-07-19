import React from "react";
import one from "../images/cart/one.png";
import two from "../images/cart/two.png";
import three from "../images/cart/three.png";
import Breadcrumbs from "./Breadcrumbs";

function CartItems() {
  return (
    <>
      <section id="cart_items">
        <div className="container">
          <Breadcrumbs active={"Shopping Cart"} />
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description"></td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cart_product">
                    <a href="">
                      <img loading="lazy" src={one} alt="" title="" />
                    </a>
                  </td>
                  <td className="cart_description">
                    <h4>
                      <a href="">Colorblock Scuba</a>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className="cart_price">
                    <p>$59</p>
                  </td>
                  <td className="cart_quantity">
                    <div className="cart_quantity_button">
                      <a className="cart_quantity_up" href="">
                        {" "}
                        +{" "}
                      </a>
                      <input
                        className="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value="1"
                        autocomplete="off"
                        size="2"
                      />
                      <a className="cart_quantity_down" href="">
                        {" "}
                        -{" "}
                      </a>
                    </div>
                  </td>
                  <td className="cart_total">
                    <p className="cart_total_price">$59</p>
                  </td>
                  <td className="cart_delete">
                    <a className="cart_quantity_delete" href="">
                      <i className="fa fa-times"></i>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="cart_product">
                    <a href="">
                      <img loading="lazy" src={two} alt="" title="" />
                    </a>
                  </td>
                  <td className="cart_description">
                    <h4>
                      <a href="">Colorblock Scuba</a>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className="cart_price">
                    <p>$59</p>
                  </td>
                  <td className="cart_quantity">
                    <div className="cart_quantity_button">
                      <a className="cart_quantity_up" href="">
                        {" "}
                        +{" "}
                      </a>
                      <input
                        className="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value="1"
                        autocomplete="off"
                        size="2"
                      />
                      <a className="cart_quantity_down" href="">
                        {" "}
                        -{" "}
                      </a>
                    </div>
                  </td>
                  <td className="cart_total">
                    <p className="cart_total_price">$59</p>
                  </td>
                  <td className="cart_delete">
                    <a className="cart_quantity_delete" href="">
                      <i className="fa fa-times"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="cart_product">
                    <a href="">
                      <img loading="lazy" src={three} alt="" title="" />
                    </a>
                  </td>
                  <td className="cart_description">
                    <h4>
                      <a href="">Colorblock Scuba</a>
                    </h4>
                    <p>Web ID: 1089772</p>
                  </td>
                  <td className="cart_price">
                    <p>$59</p>
                  </td>
                  <td className="cart_quantity">
                    <div className="cart_quantity_button">
                      <a className="cart_quantity_up" href="">
                        {" "}
                        +{" "}
                      </a>
                      <input
                        className="cart_quantity_input"
                        type="text"
                        name="quantity"
                        value="1"
                        autocomplete="off"
                        size="2"
                      />
                      <a className="cart_quantity_down" href="">
                        {" "}
                        -{" "}
                      </a>
                    </div>
                  </td>
                  <td className="cart_total">
                    <p className="cart_total_price">$59</p>
                  </td>
                  <td className="cart_delete">
                    <a className="cart_quantity_delete" href="">
                      <i className="fa fa-times"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartItems;
