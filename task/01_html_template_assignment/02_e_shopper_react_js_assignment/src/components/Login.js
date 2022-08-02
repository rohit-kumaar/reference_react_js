import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Login() {
  return (
    <>
      <Header />
      <main>
        <section id="form">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <div className="login-form">
                  <h2>Login to your account</h2>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <span>
                      <input type="checkbox" className="checkbox" />
                      Keep me signed in
                    </span>
                    <button type="submit" className="btn btn-default">
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-sm-1">
                <h2 className="or">OR</h2>
              </div>
              <div className="col-sm-4">
                <div className="signup-form">
                  <h2>New User Signup!</h2>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn btn-default">
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;
