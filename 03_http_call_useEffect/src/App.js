import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Posts from './components/Posts'
import Users from './components/Users'
export default function App() {
  return (
   <main>
      <Router>
         <Nav/>
         <section className='container'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/posts" element={<Posts />}/>
                <Route path="/users" element={<Users />}/>
            </Routes>
         </section>
      </Router>
   </main>
  )
}
