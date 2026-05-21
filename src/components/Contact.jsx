<<<<<<< HEAD
 import React from "react";

function Contact(){
    return(
      <section>
        <h2>Contact</h2>
        <ul>
          <li>Email: aleenabanil@gmail.com</li>
          <li>Phone: +91 9876543210</li>
        </ul>
      </section>
    )  
=======
// ============================
// Contact.jsx
// ============================

import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-20">

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-12">
        Contact
      </h2>

      {/* Contact Info */}
      <div className="space-y-8 text-lg">

        <div>
          <p className="text-green-400 font-semibold text-xl mb-2">
            Email
          </p>

          <p className="text-gray-300">
            gouri53632@gmail.com
          </p>
        </div>

        <div>
          <p className="text-green-400 font-semibold text-xl mb-2">
            Phone
          </p>

          <p className="text-gray-300">
            +91 8078079775
          </p>
        </div>

        <div>
          <p className="text-green-400 font-semibold text-xl mb-2">
            Location
          </p>

          <p className="text-gray-300">
            Kerala, India
          </p>
        </div>

      </div>

    </section>
  );
>>>>>>> a0bb38f (update ui)
}

export default Contact;