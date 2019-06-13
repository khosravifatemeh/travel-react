import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/notfound.css';
import Colors from '../colors'


const NotFound = () => {
    return (
        <div className="NotFound">
        <h1 className="NotFound-title">Oops! Page not found</h1>
        <Link to="/" className="NotFound-link " style={{ backgroundColor: Colors.iranRouteBlueColor1 }}>Go to home page</Link>
      </div>
    )
  }
 
export default NotFound;