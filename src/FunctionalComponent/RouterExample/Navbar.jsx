import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile/1001/Ujjwal/98500">Profile</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       </ul>
    </div>
  );
}
