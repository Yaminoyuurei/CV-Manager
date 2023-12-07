import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  return <div>
    <NavLink to="/">Accueil</NavLink>
    <NavLink to="/theme">Theme</NavLink>
  </div>;
};

export default Navbar;