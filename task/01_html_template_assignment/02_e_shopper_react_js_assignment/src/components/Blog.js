import React from "react";
import shopping from "../images/home/shipping.jpg";
import blogOne from "../images/blog/blog-one.jpg";
import blogTwo from "../images/blog/blog-two.jpg";
import blogThree from "../images/blog/blog-three.jpg";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Blog() {
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
                    <img loading="lazy" src={shopping} alt="" title="" />
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
                    </p>
                    <a className="btn btn-primary" href="">
                      Read More
                    </a>
                  </div>
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
                      <img loading="lazy" src={blogTwo} alt="" title="" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <a className="btn btn-primary" href="">
                      Read More
                    </a>
                  </div>
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
                      <img loading="lazy" src={blogThree} alt="" title="" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <a className="btn btn-primary" href="">
                      Read More
                    </a>
                  </div>
                  <div className="pagination-area">
                    <ul className="pagination">
                      <li>
                        <a href="" className="active">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="">2</a>
                      </li>
                      <li>
                        <a href="">3</a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-angle-double-right"></i>
                        </a>
                      </li>
                    </ul>
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

export default Blog;
