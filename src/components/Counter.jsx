// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 5);
//   };

//   const decrement = () => {
//     setCount(count - 5);
//   };

//   const multiply = () => {
//     setCount(count * 5);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   const buttonStyle = {
//     padding: "10px 15px",
//     margin: "5px",
//     border: "none",
//     borderRadius: "5px",
//     color: "white",
//     cursor: "pointer",
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter: {count}</h1>

//       <button
//         onClick={increment}
//         style={{ ...buttonStyle, backgroundColor: "green" }}
//       >
//         Increment
//       </button>

//       <button
//         onClick={decrement}
//         style={{ ...buttonStyle, backgroundColor: "red" }}
//       >
//         Decrement
//       </button>

//       <button
//         onClick={multiply}
//         style={{ ...buttonStyle, backgroundColor: "blue" }}
//       >
//         Multiply (x2)
//       </button>

//       <button
//         onClick={reset}
//         style={{ ...buttonStyle, backgroundColor: "gray" }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Counter;