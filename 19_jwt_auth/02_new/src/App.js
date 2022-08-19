import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import Nav from './components/Nav'
export default function App() {
  return (
    <div>
        <Router>
            <Nav />
            <section className='container'>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/main" element={<Main/>}/>
                </Routes>
            </section>
        </Router>
    </div>
  )
}
