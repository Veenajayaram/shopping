import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Women from './Women'
import Men from './Men'
import Kids from './Kids'
import "./App.css"
import Contact from './Contact'

function App() {
  return (
    <div>
      <div className='navbar'>
<Link className='link' to="/">HOME</Link>
  <Link className='link' to="/men">MEN</Link>
  <Link className='link' to="/women">WOMEN</Link>
  <Link className='link' to="/kids">kIDS</Link>
  <Link className='link' to="/contact">CONTACT</Link>
</div>
<Routes>
  <Route path="/"element={<Home />} />
  <Route path="/men"element={<Men />} /> 
  <Route path="/women"element={<Women />} />
  <Route path="/kids"element={<Kids />} />
  <Route path='/contact' element={<Contact />} />
  </Routes>
    </div>
  )
}

export default App;