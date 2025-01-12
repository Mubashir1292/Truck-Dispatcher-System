import React from "react";
import logo from "../../assets/images/logo.ico";
import { NavLink } from "react-router-dom";
const Header = () => {
  const links = [
    {
      path: "/document",
      label: "Document",
    },
    {
      path: "/signature",
      label: "Signature Pad",
    },
  ];
  return (
    <div className="w-full h-24 bg-white sticky top-0">
      <div className="flex justify-around items-center">
        {/* Image for company logo */}
        <div className="w-20 h-auto pt-2">
          <img src={logo} alt="Company Logo" />
        </div>
        {/* Links for menu  */}
        <nav className="flex justify-between items-center gap-20">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "text-black"
              }
            >
              {item.label || ""}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
