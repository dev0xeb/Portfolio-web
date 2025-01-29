import React, { useState } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBars, faXmark);

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center h-24 w-full max-w-[1240px] mx-auto px-4">
        {/* Logo */}
        <h1 className="w-full text-3xl text-[#0056D2] font-extrabold flex-grow animate-bounce">
          Clinton
        </h1>

        {/* Desktop Menu (visible on medium screens and above) */}
        <ul className="hidden md:flex space-x-4">
          <li className="p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl">
            <a href="#qualifications">Qualifications</a>
          </li>
          <li className="p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="text-2xl text-[#0056D2]"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (visible when toggled) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F0F8FF] w-full">
          <ul className="flex flex-col items-center">
            <li className="p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl">
              <a href="#skills">Skills</a>
            </li>
            <li className="p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl">
              <a href="#qualifications">Qualifications</a>
            </li>
            <li className="p-4 hover:text-[#0056D2] text-[#007BFF] font-bold text-xl">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}

      <hr />
    </>
  );
};

export default Headers;