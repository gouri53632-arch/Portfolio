import React, { useState } from "react";

function Project() {
  const [show, setShow] = useState(true);

  return (
    <section>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Projects" : "Show Projects"}
      </button>

      {show && (
        <>
          <h2>Projects</h2>

          <h3>Portfolio Website</h3>
          <p>Created a personal portfolio website using HTML and CSS.</p>

          <h3>Library Management System</h3>
          <p>Developed a mini project for managing student records.</p>
        </>
      )}
    </section>
  );
}

export default Project;