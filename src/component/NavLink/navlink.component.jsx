import { NavLink } from "react-router-dom";

import './navlink.style.css'

const Navbar = ({ user, setUser }) => {
   return (
      <div className="navbar">
         <h2 className="logo">SimpleRoute</h2>
         <nav>
            <NavLink to='/' className={({ isActive }) => {
               return isActive ? 'navlink active' : 'navlink'
            }}>Home</NavLink>
            <NavLink to='products' className={({ isActive }) => {
               return isActive ? 'navlink active' : 'navlink'
            }}>Products</NavLink>
            <NavLink to='login' className={({ isActive }) => {
               return isActive ? 'navlink active' : 'navlink'
            }} onClick={() => { return user ? setUser(null) : user }}>{user ? 'Signout' : 'Signin'}</NavLink>
         </nav>
      </div>
   )
}


export default Navbar;

