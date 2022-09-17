import React from 'react'
import "./Home.css";

function Home() {
  return (
    <div className="homemain">
        <h1>Home</h1>
        <div className="wrapper">
            <div className="card1">
                <h2>RIDER</h2>
                <button className='btn'>Select Rider</button>
            </div>
            <div className="card1">
                <h2>RENTER</h2>
                <button className='btn'>Select Renter</button>
            </div>
        </div>
        
    </div>
  )
}

export default Home