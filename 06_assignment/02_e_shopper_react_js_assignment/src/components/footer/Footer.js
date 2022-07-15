import React from "react";
import BottomFooter from "./BottomFooter";
import MiddleFooter from "./MiddleFooter";
import TopFooter from "./TopFooter";

function Footer() {
  return (
    <>
      <footer id="footer">
        <TopFooter />
        <MiddleFooter />
        <BottomFooter />
      </footer>
    </>
  );
}

export default Footer;
