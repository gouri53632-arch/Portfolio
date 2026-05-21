// import React from "react";

// function Showdata({ users }) {
//   // CSS Styles
//   const styles = {
//     container: {
//       padding: "30px",
//       backgroundColor: "#f4f4f4",
//       minHeight: "100vh",
//       fontFamily: "Arial, sans-serif",
//       textAlign: "center",
//     },

//     title: {
//       color: "#333",
//       marginBottom: "30px",
//     },

//     cardContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "20px",
//     },

//     card: {
//       backgroundColor: "#fff",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//       transition: "0.3s",
//     },

//     image: {
//       width: "100px",
//       height: "100px",
//       borderRadius: "50%",
//       objectFit: "cover",
//       marginBottom: "15px",
//       border: "3px solid #0077ff",
//     },

//     name: {
//       color: "#0077ff",
//     },

//     email: {
//       color: "#555",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>User List</h1>

//       <div style={styles.cardContainer}>
//         {users.map((user) => (
//           <div style={styles.card} key={user.id}>
//             {/* Profile Image */}
//             <img
//               src={`https://i.pravatar.cc/150?img=${user.id}`}
//               alt={user.name}
//               style={styles.image}
//             />

//             <h2 style={styles.name}>{user.name}</h2>

//             <p style={styles.email}>{user.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Showdata;