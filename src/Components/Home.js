import React from 'react'
import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="homemain">
        <h1>Home</h1>
        <div className="wrapper">
            <div className="card1">
                <h2>RIDER</h2>
                <Link className="btn" to="/rider" role="button">Select Rider</Link>
            </div>
            <div className="card1">
                <h2>RENTER</h2>
                <Link className="btn" to="/renter" role="button">Select Renter</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Home