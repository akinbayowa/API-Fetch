import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import '../Style/Navbar.css';
import Home from '../pages/Home';
import Search from '../pages/Search';

import ErrorPage from '../pages/ErrorPage';


function NavBar() {
  return (
    <div>
            <nav className='Navbar'>
              | <Link to='/'>Home</Link> | <Link to='Search'>Search</Link> |
              
            </nav>

            <Routes>
              
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                
                <Route path='*' element={<ErrorPage />} />
              
            </Routes>

        </div>
        
  )
}

export default NavBar