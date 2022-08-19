import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Help = React.lazy(() => import("./pages/Help"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/help"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Help />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
