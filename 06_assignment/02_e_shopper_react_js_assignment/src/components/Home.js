import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Products from "./Products";
import Slider from "./Slider";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default Home;
