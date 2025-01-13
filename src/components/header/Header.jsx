import React from "react";
import logo from "../../assets/images/logo.ico";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
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
  const handleToggle = () => {
    setOpenMenu((curr) => !curr);
  };

  return (
    <header className="w-full bg-[#e3e3e3] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <div className="w-16 h-auto">
          <img src={logo} alt="Company Logo" className="w-full h-auto" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 transition duration-200"
              }
            >
              {item.label || ""}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => {
              handleToggle();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div
          className={`md:hidden bg-white border-t transform transition-all duration-300 ${
            openMenu
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <nav className="flex flex-col items-start px-4 py-2 space-y-2">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 transition duration-200"
                }
              >
                {item.label || ""}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
