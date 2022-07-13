import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

function App() {
  const title = "Neosoft Technologies";
  return (
    <div className="App">
      <Router>
        <Nav />
        <section>
          <Routes>
            <Route path="/" element={<Home mytitle={title} />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />}>
              <Route path="noida" element={<Noida />} />
              <Route path="delhi" element={<Delhi />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
