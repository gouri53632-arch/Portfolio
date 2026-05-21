import React from "react";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-6 py-10">

      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-pink-400 text-lg mb-2">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Gowrikrishna
            </h1>

            <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
              Web Developer & Student
            </h2>

            <p className="text-gray-400 mt-6 leading-7">
              Computer Engineering student focused on React,
              Tailwind CSS, and modern web design.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl font-semibold">
                Hire Me
              </button>
              {/* Right Side - Image */}
        <div className="flex justify-center">

          <img
            src="/Images/student.jpg"
            alt="Profile"
            className="w-[300px] h-[300px] object-cover rounded-3xl border-4 border-green-500"
          />

        </div>

              <button className="border border-gray-500 hover:border-pink-400 hover:text-pink-400 px-6 py-3 rounded-xl font-semibold">
                Download CV
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
export default Home;