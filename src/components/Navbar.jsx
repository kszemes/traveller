import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const pages = [
  { path: "/traveller", name: "Home" },
  { path: "/traveller/about", name: "About us" },
  { path: "/traveller/tours", name: "Actual Tours" },
  { path: "/traveller/contact", name: "Contact Info" },
];

export const Navbar = () => {
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
  };
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="menu-holder">
        <div>
          <h3>Brand Name</h3>
        </div>
        {isMobileView ? (
          <div
            style={{
              marginRight: "30px",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776;
          </div>
        ) : (
          <div>
            <ul className="ul-normal">
              {pages.map((obj) => (
                <NavLink to={obj.path} key={obj.name}>
                  <li className="text-gradient">{obj.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </div>

      {isMobileView && (
        <div
          className="ul-mobile"
          style={{ height: isMobileMenuOpen ? "150px" : "0" }}
        >
          <ul>
            {pages.map((obj) => (
              <NavLink to={obj.path} key={obj.name}>
                <li
                  className="text-gradient"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {obj.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
