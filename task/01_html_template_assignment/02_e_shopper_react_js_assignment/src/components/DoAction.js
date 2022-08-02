import React from "react";

function DoAction() {
  return (
    <>
      <section id="do_action">
        <div className="container">
          <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="chose_area">
                <ul className="user_option">
                  <li>
                    <input type="checkbox" />
                    <label>Use Coupon Code</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Estimate Shipping & Taxes</label>
                  </li>
                </ul>
                <ul className="user_info">
                  <li className="single_field">
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field">
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Dillih</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field zip-field">
                    <label>Zip Code:</label>
                    <input type="text" />
                  </li>
                </ul>
                <a className="btn btn-default update" href="">
                  Get Quotes
                </a>
                <a className="btn btn-default check_out" href="">
                  Continue
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total_area">
                <ul>
                  <li>
                    Cart Sub Total <span>$59</span>
                  </li>
                  <li>
                    Eco Tax <span>$2</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Total <span>$61</span>
                  </li>
                </ul>
                <a className="btn btn-default update" href="">
                  Update
                </a>
                <a className="btn btn-default check_out" href="">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DoAction;
