import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-screen h-20 pt-8 pb-5 space-x-3 text-3xl text-center">
        <Link to="/">Home</Link>
        {/* <Link to="/cover-letter">Cover Letter</Link> */}
        <Link to="/tech">Tech</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default Navbar;
