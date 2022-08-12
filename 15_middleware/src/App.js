import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mydata from "./components/Mydata";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Users from "./components/Users";

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<Mydata />} />
            <Route path="/products" element={<Products />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}
