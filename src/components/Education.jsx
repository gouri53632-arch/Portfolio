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
    </section>
  );
}

export default Education;