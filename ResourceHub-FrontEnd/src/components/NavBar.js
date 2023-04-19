import React from 'react';
import {Link} from "react-router-dom";
import './navbarstyles.css';
const Navbar= () =>{
  return (
      <nav className='navbar'>
        <div className='container'>
          <a><Link to='/'><h2>Resorce Hub</h2></Link></a>
          <ul className='navlinks'>
            <Link to='/sslc'><a>SSLC</a></Link>
            <Link to='/hsc'><a>HSC</a></Link>
            <Link to='/neet'><a>NEET</a></Link>
            <Link to='/jee'><a>JEE</a></Link>
          </ul>
        </div>
      </nav>
  );
}
export default Navbar;