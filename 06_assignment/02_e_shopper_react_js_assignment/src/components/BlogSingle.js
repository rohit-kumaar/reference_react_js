import React from "react";
import manOne from "../images/blog/man-one.jpg";
import manTwo from "../images/blog/man-two.jpg";
import manThree from "../images/blog/man-three.jpg";
import manFour from "../images/blog/man-four.jpg";
import shipping from "../images/home/shipping.jpg";
import blogOne from "../images/blog/blog-one.jpg";
import socials from "../images/blog/socials.png";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function BlogSingle() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Category</h2>
                  <div className="panel-group category-products" id="accordian">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordian"
                            href="#sportswear"
                          >
                            <span className="badge pull-right">
                              <i className="fa fa-plus"></i>
                            </span>
                            Sportswear
                          </a>
                        </h4>
                      </div>
                      <div id="sportswear" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="">Nike </a>
                            </li>
                            <li>
                              <a href="">Under Armour </a>
                            </li>
                            <li>
                              <a href="">Adidas </a>
                            </li>
                            <li>
                              <a href="">Puma</a>
                            </li>
                            <li>
                              <a href="">ASICS </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordian"
                            href="#mens"
                          >
                            <span className="badge pull-right">
                              <i className="fa fa-plus"></i>
                            </span>
                            Mens
                          </a>
                        </h4>
                      </div>
                      <div id="mens" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="">Fendi</a>
                            </li>
                            <li>
                              <a href="">Guess</a>
                            </li>
                            <li>
                              <a href="">Valentino</a>
                            </li>
                            <li>
                              <a href="">Dior</a>
                            </li>
                            <li>
                              <a href="">Versace</a>
                            </li>
                            <li>
                              <a href="">Armani</a>
                            </li>
                            <li>
                              <a href="">Prada</a>
                            </li>
                            <li>
                              <a href="">Dolce and Gabbana</a>
                            </li>
                            <li>
                              <a href="">Chanel</a>
                            </li>
                            <li>
                              <a href="">Gucci</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordian"
                            href="#womens"
                          >
                            <span className="badge pull-right">
                              <i className="fa fa-plus"></i>
                            </span>
                            Womens
                          </a>
                        </h4>
                      </div>
                      <div id="womens" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="">Fendi</a>
                            </li>
                            <li>
                              <a href="">Guess</a>
                            </li>
                            <li>
                              <a href="">Valentino</a>
                            </li>
                            <li>
                              <a href="">Dior</a>
                            </li>
                            <li>
                              <a href="">Versace</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Kids</a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Fashion</a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Households</a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Interiors</a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Clothing</a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Bags</a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Shoes</a>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="brands_products">
                    <h2>Brands</h2>
                    <div className="brands-name">
                      <ul className="nav nav-pills nav-stacked">
                        <li>
                          <a href="">
                            {" "}
                            <span className="pull-right">(50)</span>Acne
                          </a>
                        </li>
                        <li>
                          <a href="">
                            {" "}
                            <span className="pull-right">(56)</span>Grüne Erde
                          </a>
                        </li>
                        <li>
                          <a href="">
                            {" "}
                            <span className="pull-right">(27)</span>Albiro
                          </a>
                        </li>
                        <li>
                          <a href="">
                            {" "}
                            <span className="pull-right">(32)</span>Ronhill
                          </a>
                        </li>
                        <li>
                          <a href="">
                            {" "}
                            <span className="pull-right">(5)</span>Oddmolly
                          </a>
                        </li>
                        <li>
                          <a href="">
                            {" "}
                            <span className="pull-right">(9)</span>Boudestijn
                          </a>
                        </li>
                        <li>
                          <a href="">
                            {" "}
                            <span className="pull-right">(4)</span>Rösch
                            creative culture
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="price-range">
                    <h2>Price Range</h2>
                    <div className="well">
                      <input
                        type="text"
                        className="span2"
                        value=""
                        data-slider-min="0"
                        data-slider-max="600"
                        data-slider-step="5"
                        data-slider-value="[250,450]"
                        id="sl2"
                      />
                      <br />
                      <b>$ 0</b> <b className="pull-right">$ 600</b>
                    </div>
                  </div>

                  <div className="shipping text-center">
                    <img loading="lazy" src={shipping} alt="" title="" />
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="blog-post-area">
                  <h2 className="title text-center">Latest From our Blog</h2>
                  <div className="single-blog-post">
                    <h3>Girls Pink T Shirt arrived in store</h3>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fa fa-user"></i> Mac Doe
                        </li>
                        <li>
                          <i className="fa fa-clock-o"></i> 1:33 pm
                        </li>
                        <li>
                          <i className="fa fa-calendar"></i> DEC 5, 2013
                        </li>
                      </ul>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                      </span>
                    </div>
                    <a href="">
                      <img loading="lazy" src={blogOne} alt="" title="" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>{" "}
                    <br />
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>{" "}
                    <br />
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>{" "}
                    <br />
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </p>
                    <div className="pager-area">
                      <ul className="pager pull-right">
                        <li>
                          <a href="#">Pre</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rating-area">
                  <ul className="ratings">
                    <li className="rate-this">Rate this item:</li>
                    <li>
                      <i className="fa fa-star color"></i>
                      <i className="fa fa-star color"></i>
                      <i className="fa fa-star color"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="color">(6 votes)</li>
                  </ul>
                  <ul className="tag">
                    <li>TAG:</li>
                    <li>
                      <a className="color" href="">
                        Pink <span>/</span>
                      </a>
                    </li>
                    <li>
                      <a className="color" href="">
                        T-Shirt <span>/</span>
                      </a>
                    </li>
                    <li>
                      <a className="color" href="">
                        Girls
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="socials-share">
                  <a href="">
                    <img loading="lazy" src={socials} alt="" title="" />
                  </a>
                </div>

                <div className="media commnets">
                  <a className="pull-left" href="#">
                    <img
                      className="media-object"
                      loading="lazy"
                      src={manOne}
                      alt=""
                      title=""
                    />
                  </a>
                  <div className="media-body">
                    <h4 className="media-heading">Annie Davis</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="blog-socials">
                      <ul>
                        <li>
                          <a href="">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                      <a className="btn btn-primary" href="">
                        Other Posts
                      </a>
                    </div>
                  </div>
                </div>
                <div className="response-area">
                  <h2>3 RESPONSES</h2>
                  <ul className="media-list">
                    <li className="media">
                      <a className="pull-left" href="#">
                        <img
                          className="media-object"
                          loading="lazy"
                          src={manTwo}
                          alt=""
                          title=""
                        />
                      </a>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>Janis Gallagher
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <a className="btn btn-primary" href="">
                          <i className="fa fa-reply"></i>Replay
                        </a>
                      </div>
                    </li>
                    <li className="media second-media">
                      <a className="pull-left" href="#">
                        <img
                          className="media-object"
                          loading="lazy"
                          src={manThree}
                          alt=""
                          title=""
                        />
                      </a>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>Janis Gallagher
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <a className="btn btn-primary" href="">
                          <i className="fa fa-reply"></i>Replay
                        </a>
                      </div>
                    </li>
                    <li className="media">
                      <a className="pull-left" href="#">
                        <img
                          className="media-object"
                          loading="lazy"
                          src={manFour}
                          alt=""
                          title=""
                        />
                      </a>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>Janis Gallagher
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <a className="btn btn-primary" href="">
                          <i className="fa fa-reply"></i>Replay
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="replay-box">
                  <div className="row">
                    <div className="col-sm-4">
                      <h2>Leave a replay</h2>
                      <form>
                        <div className="blank-arrow">
                          <label>Your Name</label>
                        </div>
                        <span>*</span>
                        <input type="text" placeholder="write your name..." />
                        <div className="blank-arrow">
                          <label>Email Address</label>
                        </div>
                        <span>*</span>
                        <input
                          type="email"
                          placeholder="your email address..."
                        />
                        <div className="blank-arrow">
                          <label>Web Site</label>
                        </div>
                        <input type="email" placeholder="current city..." />
                      </form>
                    </div>
                    <div className="col-sm-8">
                      <div className="text-area">
                        <div className="blank-arrow">
                          <label>Your Name</label>
                        </div>
                        <span>*</span>
                        <textarea name="message" rows="11"></textarea>
                        <a className="btn btn-primary" href="">
                          post comment
                        </a>
                      </div>
                    </div>
                  </div>
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

export default BlogSingle;
