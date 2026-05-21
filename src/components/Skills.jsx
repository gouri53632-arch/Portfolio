import React, { useState } from "react";

function Skills() {
  const [show, setShow] = useState(true);

  return (
    <section>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Skills" : "Show Skills"}
      </button>

      {show && (
        <>
          <h2>Skills</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </>
      )}
    </section>
  );
}

export default Skills;