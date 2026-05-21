<<<<<<< HEAD
 import React, { useState } from "react";

function Education() {
  const [show, setShow] = useState(true);

  return (
    <section>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Education" : "Show Education"}
      </button>

      {show && (
        <>
          <h2>Education</h2>

          <ul>
            <li>Diploma Computer Engineering - Poly</li>
            <li>Higher Secondary Education - HSS School</li>
          </ul>
        </>
      )}
=======
// ============================
// Education.jsx
// ============================

import React from "react";

function Education() {
  return (
    <section id="education" className="bg-black text-white py-24 px-6 md:px-20">

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-12">
        Education
      </h2>

      {/* Education Card */}
      <div className="border border-green-500 p-8 rounded-xl max-w-2xl">

        <h3 className="text-2xl font-semibold">
          Diploma in Computer Engineering
        </h3>

        <p className="text-green-400 mt-3">
          2023 - Present
        </p>

        <p className="text-gray-400 mt-5 leading-7">
          Studying programming, web development, databases,
          and software engineering.
        </p>

      </div>

>>>>>>> a0bb38f (update ui)
    </section>
  );
}

export default Education;