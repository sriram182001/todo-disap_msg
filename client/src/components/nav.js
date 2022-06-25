import React from 'react';
import { Link } from 'react-router-dom';
function Nav()
{
    return(
<nav className='navbar'>
<ul>
  <li>
    <Link to="/"><b>Home</b></Link>  
  </li>

  <li>
    <Link to="/signin"><b>SignIn</b></Link>
  </li>
 
  <li>
    <Link to="/signup"><b>SignUp</b></Link>
  </li>
</ul>
</nav>
)};
export default Nav;