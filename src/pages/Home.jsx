import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style/home.css'

function Home() {
    let navigate =useNavigate();
  return (
    <div className='home'>
        <div className='homeContainer'>
            <h2>AltSchool Second Semester Examination</h2>
            <p>API Fetch of Github Profiles</p>
            
            <button className='btn' onClick={() =>{
                navigate('/Search');
            }
            }>
                Click to Begin</button>
            
        </div>
    </div>
  )
}

export default Home