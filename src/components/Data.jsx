// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Showdata from "./Showdata";

// function Data() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [show, setShow] = useState(true);

//   async function fetchUsers() {
//     try {
//       setLoading(true);

//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       setUsers(response.data);
//       setError("");
//     } catch (err) {
//       console.log("Error:", err);
//       setError("Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>

//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide Data" : "Show Data"}
//       </button>

//       {show && <Showdata users={users} />}
//     </div>
//   );
// }

// export default Data;