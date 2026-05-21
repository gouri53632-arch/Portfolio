import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-6 py-10">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-pink-400 text-lg mb-2">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Aleena
            </h1>

            <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
              Web Developer & Student
            </h2>

            <p className="text-gray-400 mt-6 leading-7">
              Passionate about building beautiful and responsive web
              applications using React and modern web technologies.
              I love creating clean UI designs and interactive user
              experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">
              <button className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl font-semibold transition duration-300">
                Hire Me
              </button>

              <button className="border border-gray-500 hover:border-pink-400 hover:text-pink-400 px-6 py-3 rounded-xl font-semibold transition duration-300">
                Download CV
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-30 rounded-full"></div>

              <img
                src="/student.jpg"
                alt="Profile"
                className="relative w-[300px] md:w-[380px] rounded-3xl shadow-2xl border-4 border-pink-500 object-cover"
              />
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-pink-500 transition duration-300">
              <h3 className="text-xl font-semibold">HTML</h3>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-pink-500 transition duration-300">
              <h3 className="text-xl font-semibold">CSS</h3>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-pink-500 transition duration-300">
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-pink-500 transition duration-300">
              <h3 className="text-xl font-semibold">React</h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;