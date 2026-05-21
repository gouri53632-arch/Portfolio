// ============================
// Footer.jsx
// ============================

import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 py-16 px-6 md:px-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>

          <h2 className="text-3xl font-bold text-green-400 mb-5">
            Gowrikrishna
          </h2>

          <p className="text-gray-400 leading-8 max-w-lg">
            Computer Engineering student passionate about
            frontend development, UI/UX design, and building
            modern responsive websites using React and
            Tailwind CSS.
          </p>

        </div>

        {/* Right Side */}
        <div>

          <h3 className="text-2xl font-semibold text-green-400 mb-6">
            Connect
          </h3>

          <div className="flex gap-6">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              GitHub
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              Instagram
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">

        © 2026 Gowrikrishna. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;