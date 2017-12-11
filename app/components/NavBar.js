import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const Navbar = props => {
   return (
     <nav>
       <div>
         <Link to={'/'}>Home</Link>
       </div>
       <div>
         <Link to={'/students'}>Students</Link>
       </div>
     </nav>
  );
};

export default Navbar;
