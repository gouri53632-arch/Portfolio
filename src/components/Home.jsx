import React from "react";


function Home() {
  return (
    <section className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center px-6">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 uppercase text-sm tracking-widest mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Gowrikrishna
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
            Web Developer & Computer Engineering Student
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            I create responsive and modern websites using
            React and Tailwind CSS.
          </p>

          <button className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
            Contact Me
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">

            <img
              src="/Images/student.jpg"
              alt="student"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;