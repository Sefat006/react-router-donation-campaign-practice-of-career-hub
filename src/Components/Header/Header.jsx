import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
    const links = <>
        <NavLink to="/" className={({ isActive }) =>
                isActive ? "underline text-red-500" : ""}>Home</NavLink>
            <NavLink to="/donated" className={({ isActive }) =>
                isActive ? "underline text-red-500" : ""}>Donation List</NavLink>
            <NavLink to="/statistics" className={({ isActive }) =>
                isActive ? "underline text-red-500" : ""}>Statistics</NavLink>
    </>

return (
    <div className="navbar justify-between flex jus bg-base-100">
        <NavLink to="/">
          <img src="/src/assets/Logo.png" alt="" />
        </NavLink>
  <div className="navbar-end">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu text-white menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
  </div>

    <div className="navbar-end hidden  text-white gap-4 text-xl font-semibold lg:flex">
    {links}
  </div>
</div>
)}

export default Header;