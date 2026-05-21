
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] text-white py-24 px-6 md:px-20"
    >

      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side - Content */}
        <div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-10">
            About Me
          </h2>

          {/* Description */}
          <p className="text-white text-lg leading-8">
            I am a passionate Computer Engineering student with a
            strong interest in technology, software development,
            and problem-solving. I enjoy learning new programming
            languages and building creative projects that improve
            my technical skills. I am especially interested in web
            development, UI/UX design, and modern technologies.
          </p>

        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">

          <img
            src="/Images/student.jpg"
            alt="Profile"
            className="w-[300px] h-[300px] object-cover rounded-3xl border-4 border-green-500"
          />

        </div>

      </div>

    </section>
  );
}

export default About;