import React from "react";
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <>
      <header id="header">
        <TopHeader />
        <MiddleHeader />
        <BottomHeader/>
      </header>
    </>
  );
}

export default Header;
