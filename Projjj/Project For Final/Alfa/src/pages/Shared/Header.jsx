import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/inspiration">Inspiration</NavLink>
      </li>
      <li>
        <NavLink to="/gallary">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li className="bg-green-600 ml-24 rounded-2xl hover:bg-sky-600 transition-colors">
        <NavLink to="/login">Login <i className="fa-solid fa-right-to-bracket"></i></NavLink>
      </li>
      <li className="bg-red-600 ml-2 rounded-2xl">
        <NavLink to="/Singup">Signup <i className="fa-solid fa-user-plus"></i></NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7-7-7 7"
          />
        </svg>
      </button>

     

      {/* Navbar */}
      <div className="navbar bg-black fixed top-0 left-0 right-0 z-10 text-white opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="bg-black-500 text-xl">
            <img
              style={{ width: "150px", height: "80px" }}
              src="https://i.ibb.co.com/Y7fpTbrX/illustration-logo-grand-hotel-boutique-vintage-design-free-vector-removebg-preview-2.png"
              alt="GrandPr0 Logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;