import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const items = [
  { name: "Accueil", link: "/" },
  { name: "Theme", link: "/theme" },
];
const Navbar = () => {
  return (
    <div className="Navbar">
        {items.map((items) => (
              <NavLink key={items.name} to={items.link}>
                {items.name}
              </NavLink>
            ))}
    </div>
  );
};
export default Navbar