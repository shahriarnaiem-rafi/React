import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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
    </>
  );

  return (
    <>
      {/* Hero Section with Background Image */}
      <div
        className="hero bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/SzGFCHt/Banner.jpg")', // Replace with your image URL
        }}
      >
        <div className="hero-content text-center text-white">
          {" "}
          {/* Changed to text-black */}
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Enjoy your stay at GrandPr0</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

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
          <a className=" bg-black-500 text-xl"><img style={{width:"150px", height:"80px"}} src="https://i.ibb.co.com/Y7fpTbrX/illustration-logo-grand-hotel-boutique-vintage-design-free-vector-removebg-preview-2.png" alt="" /></a>
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
