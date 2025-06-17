import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../style/dashboard.css'


export const DashBoardPage = () => {
  return (
    <div>
        <nav  className="dashboard-container">
                <Link to ='auto'>Backend</Link>
                <Link to = 'carrito'> Frontend </Link>
        </nav>
      <Outlet/>
    </div>
    
    )
}
