import React from "react";
import iframe1 from "../../images/home/iframe1.png";
import iframe2 from "../../images/home/iframe2.png";
import iframe3 from "../../images/home/iframe3.png";
import iframe4 from "../../images/home/iframe4.png";
import map from "../../images/home/map.png";

function TopFooter() {
  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="companyinfo">
                <h2>
                  <span>e</span>-shopper
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img loading="lazy" src={iframe1} alt="" title="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img loading="lazy" src={iframe2} alt="" title="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img loading="lazy" src={iframe3} alt="" title="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="video-gallery text-center">
                  <a href="#">
                    <div className="iframe-img">
                      <img loading="lazy" src={iframe4} alt="" title="" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle-o"></i>
                    </div>
                  </a>
                  <p>Circle of Hands</p>
                  <h2>24 DEC 2014</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="address">
                <img loading="lazy" src={map} alt="" title="" />
                <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopFooter;
