import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Repos from './pages/Repos';


function App() {
  return (
    <>  
        <h2>AltSchool Second Semester Examination</h2>
        
        <div>
            <nav>
              <Link to='/'>Home</Link> |
              <Link to='Search'>Search</Link> |
              <Link to='Repos'>Repos</Link>
            </nav>

            <Routes>
              
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/repos' element={<Repos />} />
                <Route path='*' element={
                  <div>
                    <h1>404 Page Error</h1>
                  </div>
                } />
              
            </Routes>

        </div>
        

     </>
  )
}

export default App