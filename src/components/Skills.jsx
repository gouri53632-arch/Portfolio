
import React from "react";

function Skills() {

  const skills = [
    "React JS",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "Java",
  ];

  return (
    <section id="skills" className="bg-[#0a0a0a] text-white py-24 px-6 md:px-20">

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-12">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-green-500 rounded-xl p-6 text-center hover:bg-green-500 hover:text-black transition"
          >
            {skill}
          </div>
        ))}

      </div>


    </section>
  );
}

export default Skills;