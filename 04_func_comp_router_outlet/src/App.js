import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
import Noida from './components/Noida';
import Delhi from './components/Delhi';

function App() {
  const title="Neosoft Technologies";
  return (
    <div className="App">
       <Router>
          <Nav/>
          <section>
             <Routes>
                <Route path="/" element={<Home mytitle={title}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/gallery" element={<Gallery />}/>
                <Route path="/contact" element={<Contact/>}>
                    <Route path="noida" element={<Noida/>}/>
                    <Route path="delhi" element={<Delhi/>}/>
                </Route>
                <Route path="*" element={<Notfound/>}/>
             </Routes>
          </section>
       </Router>
    </div>
  );
}

export default App;
