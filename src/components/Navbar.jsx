// ============================
// Navbar.jsx
// ============================

import React from "react";

function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/30
        backdrop-blur-md
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-5 flex items-center justify-between">

       
        

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-green-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-green-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-green-400 transition"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-green-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;