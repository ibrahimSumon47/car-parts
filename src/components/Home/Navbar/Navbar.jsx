import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <a>Home</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Repair</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Product Details</a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Car Service and Repair</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-blue-400">
            <a>Home</a>
          </li>
          <li className="hover:bg-blue-400">
            <a>Service</a>
          </li>
          <li className="hover:bg-blue-400">
            <a>Repair</a>
          </li>
          <li className="hover:bg-blue-400">
            <a>About us</a>
          </li>
          <li className="hover:bg-blue-400">
            <a>Product Details</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
