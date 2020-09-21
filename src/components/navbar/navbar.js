import React from "react";

// Header bar
const Navbar = ({ title }) => {
  return (
    <nav data-testid="navbar">
      <h1 className="navbar-title">{title}</h1>
    </nav>
  );
};

export default Navbar;
